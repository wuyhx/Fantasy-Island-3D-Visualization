# 🏝️ Fantasy Island 3D Visualization 

[![Vue](https://img.shields.io/badge/Vue-3.3-4FC08D)](https://vuejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r152-000000)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

**沉浸式奇幻岛屿三维可视化系统**，集成动态天气系统、物理水面渲染与智能生态模拟。

![项目截图](./public/预览.png)

## ✨ 核心特性
- 动态天气系统（雨/雪粒子切换）
- 基于物理的水面渲染（折射/反射效果）
- HDR环境光照（4K EXR天空盒）
- 交互式模型点击反馈（GSAP动画驱动）
- 智能飞鸟群体行为模拟

## 🚀 快速开始
### 开发环境
```bash
git clone https://github.com/wuyhx/Fantasy-Island-3D-Visualization.git
cd Fantasy-Island-3D-Visualization
npm install
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 🗺️ 项目架构
```text
src/
├── core/            # 三维场景核心
│   ├── camera/      # 相机控制系统
│   ├── lights/      # 光照配置
│   └── loader/      # 资源加载器
├── systems/         # 子系统
│   ├── weather/     # 天气控制
│   ├── water/       # 水面渲染
│   └── ecology/     # 生态模拟
└── utils/           # 工具库
    ├── math/        # 数学工具
    └── gui/         # 调试面板
```

## 🎮 交互控制
| 操作               | 功能                |
|--------------------|---------------------|
| 鼠标左键拖拽       | 旋转视角            |
| 鼠标右键拖拽       | 平移场景            |
| 鼠标滚轮           | 缩放视角            |
| 点击岛屿元素       | 触发缩放动画        |
| `W`/`A`/`S`/`D`   | 第一人称移动        |

## 🌐 在线体验
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/wuyhx/Fantasy-Island-3D-Visualization)

## 🤝 贡献指南
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/your-feature`)
3. 提交修改 (`git commit -m 'Add some feature'`)
4. 推送分支 (`git push origin feature/your-feature`)
5. 发起 Pull Request

## 📜 许可证
本项目采用 [MIT 许可证](LICENSE)
