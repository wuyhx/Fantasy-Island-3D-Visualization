<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMounted } from 'vue';
import { Raycaster, Vector2 } from 'three';
import { gsap } from 'gsap';
import { ref } from 'vue';


let renderer, camera, scene, controls, water, island;
let waterNormals, currentParticles = null;


const weather = ref('rain'); // rain/snow

onMounted(() => {
  initScene();
  animate();
});

function initScene() {
  // 初始化基础组件
  const canvas = document.querySelector('#canvas');
  
  //场景初始化
  scene = new THREE.Scene();

  //相机初始化
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    20000
  );
  camera.position.set(-90, 30, -80);
  camera.lookAt(0, 0, 0);

  //渲染器配置
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
    powerPreference: "high-performance"
  });
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 控制器配置
  controls = new OrbitControls(camera, renderer.domElement);
  configureControls();

  // 加载环境资源
  loadEnvironment()
    .then(() => {
      initWaterSystem();
      loadIslandModel();
      initWeatherSystem();
    });
}

function configureControls() {
  controls.enableDamping = true;
  controls.dampingFactor = 0.02;
  controls.maxPolarAngle = Math.PI / 2.05;
  controls.minDistance = 50;
  controls.maxDistance = 500;
}

async function loadEnvironment() {
  return new Promise((resolve) => {
    new EXRLoader().load(
      './HDRI/kloofendal_48d_partly_cloudy_puresky_4k.exr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
        resolve();
      }
    );
  });
}

function initWaterSystem() {
  const waterGeometry = new THREE.PlaneGeometry(100000, 100000, 512, 512);
  
  waterNormals = new THREE.TextureLoader().load(
    './public/textures/waternormals.jpg',
    (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4);
    }
  );

  water = new Water(waterGeometry, {
    textureWidth: 2048,
    textureHeight: 2048,
    waterNormals: waterNormals,
    sunDirection: new THREE.Vector3(-1, 1, 0).normalize(),
    sunColor: 0xFFFFFF,
    waterColor: 0x006994,
    distortionScale: 3.0,
    fog: true,
  });
  water.rotation.x = -Math.PI / 2;
  scene.add(water);
}

function loadIslandModel() {
  new GLTFLoader().load('./public/fantasy_island.glb', (gltf) => {
    island = gltf.scene;
    island.position.set(0, -5, 0);
    island.scale.set(1, 1, 1);
    
    island.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    
    scene.add(island);
    initIslandInteraction();
  });
}

function initIslandInteraction() {
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  const canvas = document.querySelector('#canvas');

  canvas.addEventListener('click', (event) => {
    mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(island);
    
    if (intersects.length > 0) {
      animateIslandClick(intersects[0].object);
    }
  });
}

function animateIslandClick(obj) {
  gsap.to(obj.scale, {
    x: 1.2, 
    y: 1.2, 
    z: 1.2,
    duration: 0.3, 
    yoyo: true, 
    repeat: 1
  });
}

// 天气系统
function initWeatherSystem() {
  createWeatherParticles();
  window.addEventListener('resize', handleResize);
}

function createWeatherParticles() {
  if (currentParticles) {
    scene.remove(currentParticles);
    currentParticles.geometry.dispose();
    currentParticles.material.dispose();
  }

  const particleCount = 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const isRain = weather.value === 'rain';
  const color = isRain ? [0.1, 0.3, 1.0] : [1.0, 1.0, 1.0]; 

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = Math.random() * 400 - 200;    
    positions[i3 + 1] = Math.random() * 200 + 100; 
    positions[i3 + 2] = Math.random() * 400 - 200; 

    colors[i3] = color[0];
    colors[i3 + 1] = color[1];
    colors[i3 + 2] = color[2];
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isRain ? 1.2 : 2.5, 
    vertexColors: true,
    transparent: true,
    opacity: 0.9, 
    map: createParticleTexture(),
    depthWrite: false
  });

  currentParticles = new THREE.Points(geometry, material);
  scene.add(currentParticles);
}

function createParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, Math.PI * 2);
  const gradient = ctx.createRadialGradient(16,16,0,16,16,14);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fill();
  
  return new THREE.CanvasTexture(canvas);
}

function updateWeather() {
  createWeatherParticles();
}

function animateWeather() {
  if (!currentParticles) return;

  const positions = currentParticles.geometry.attributes.position.array;
  const isRain = weather.value === 'rain';
  
  for (let i = 1; i < positions.length; i += 3) {
    positions[i] -= isRain ? 0.8 : 0.2;

    if (positions[i] < -100) {
      positions[i] = 200;
      positions[i - 1] = Math.random() * 400 - 200; 
      positions[i + 1] = Math.random() * 400 - 200;
    }

    if (!isRain) {
      positions[i - 1] += Math.sin(Date.now() * 0.001 + i) * 0.1; 
      positions[i + 1] += Math.cos(Date.now() * 0.001 + i) * 0.1;
    }
  }
  currentParticles.geometry.attributes.position.needsUpdate = true;
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  birdSystem.update();
  controls.update();
  updateWaterEffect();
  animateWeather();
  renderer.render(scene, camera);
}

function updateWaterEffect() {
  if (waterNormals) {
    water.material.uniforms.time.value += 0.005;
    waterNormals.offset.x += 0.0001;
    waterNormals.offset.y += 0.0001;
  }
}

function toggleWeather() {
  weather.value = weather.value === 'rain' ? 'snow' : 'rain';
  updateWeather();
}

class BirdSystem {
  constructor() {
    this.birds = [];
    this.flyHeightRange = { min: 80, max: 150 }; 
    this.spawnRadius = 200; 
    this.loadModel().then(() => this.createFlock(5));
  }

  async loadModel() {
    const { scene } = await new GLTFLoader().loadAsync('./public/flying_bird.glb');
    this.birdTemplate = scene;
    
    
    const bbox = new THREE.Box3().setFromObject(this.birdTemplate);
    const size = bbox.getSize(new THREE.Vector3());
    const scale = 10; 
    this.birdTemplate.scale.set(scale, scale, scale);
    
    return this.birdTemplate;
  }

  createFlock(count) {
    
    const islandCenter = new THREE.Vector3(0, 0, 0);
    
    for(let i = 0; i < count; i++){
      const bird = this.birdTemplate.clone();
      
      
      const radius = this.spawnRadius * Math.sqrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      
      bird.position.set(
        islandCenter.x + radius * Math.sin(phi) * Math.cos(theta),
        islandCenter.y + Math.random() * (this.flyHeightRange.max - this.flyHeightRange.min) + this.flyHeightRange.min,
        islandCenter.z + radius * Math.sin(phi) * Math.sin(theta)
      );

      
      bird.userData = {
        target: this.generateNewTarget(),
        speed: Math.random() * 0.001 + 0.001, 
        maxHeight: this.flyHeightRange.max,
        minHeight: this.flyHeightRange.min
      };

      
      bird.lookAt(bird.userData.target);
      
      scene.add(bird);
      this.birds.push(bird);
    }
  }

  generateNewTarget() {
    
    return new THREE.Vector3(
      Math.random() * 200 - 100,
      Math.random() * (this.flyHeightRange.max - this.flyHeightRange.min) + this.flyHeightRange.min,
      Math.random() * 200 - 100
    );
  }

  update() {
    this.birds.forEach(bird => {
      const currentHeight = bird.position.y;
      const targetHeight = bird.userData.target.y;
      
      if(Math.abs(currentHeight - targetHeight) > 5) {
        bird.position.y += (targetHeight - currentHeight) * 0.02;
      }

      
      if(bird.position.distanceTo(bird.userData.target) < 10) {
        bird.userData.target = this.generateNewTarget();
      }

      
      bird.position.lerp(bird.userData.target, bird.userData.speed);
      
      
      const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().lookAt(
          bird.position,
          bird.userData.target,
          new THREE.Vector3(0, 1, 0) 
        )
      );
      bird.quaternion.slerp(targetQuaternion, 0.1);

      
      bird.rotation.z = Math.sin(Date.now() * 0.005) * 0.3;
    });
  }
}
const birdSystem = new BirdSystem();

</script>

<template>
  <canvas id="canvas"></canvas>
  <button @click="toggleWeather" class="weather-toggle">
    {{ weather === 'rain' ? '☔ 切换雪天' : '❄️ 切换雨天' }}
  </button>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

#canvas {
  width: 100vw;
  height: 100vh;
  display: block;
  cursor: grab;
  background: #000;
}

#canvas:active {
  cursor: grabbing;
}

.weather-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 24px;
  background: rgba(30, 30, 30, 0.9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-size: 16px;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.weather-toggle:hover {
  background: rgba(50, 50, 50, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.weather-toggle:active {
  transform: translateY(1px);
}
</style>