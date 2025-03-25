(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Th(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const bt={},Fs=[],gi=()=>{},jg=()=>!1,Bl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Eh=i=>i.startsWith("onUpdate:"),xn=Object.assign,bh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Kg=Object.prototype.hasOwnProperty,_t=(i,e)=>Kg.call(i,e),tt=Array.isArray,Bs=i=>kl(i)==="[object Map]",$p=i=>kl(i)==="[object Set]",st=i=>typeof i=="function",Gt=i=>typeof i=="string",Rr=i=>typeof i=="symbol",Nt=i=>i!==null&&typeof i=="object",Jp=i=>(Nt(i)||st(i))&&st(i.then)&&st(i.catch),Qp=Object.prototype.toString,kl=i=>Qp.call(i),Zg=i=>kl(i).slice(8,-1),em=i=>kl(i)==="[object Object]",Ah=i=>Gt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Bo=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zl=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},$g=/-(\w)/g,Tr=zl(i=>i.replace($g,(e,t)=>t?t.toUpperCase():"")),Jg=/\B([A-Z])/g,ls=zl(i=>i.replace(Jg,"-$1").toLowerCase()),tm=zl(i=>i.charAt(0).toUpperCase()+i.slice(1)),ec=zl(i=>i?`on${tm(i)}`:""),xr=(i,e)=>!Object.is(i,e),tc=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},nm=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Qg=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let If;const Hl=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wh(i){if(tt(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Gt(n)?i0(n):wh(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Gt(i)||Nt(i))return i}const e0=/;(?![^(]*\))/g,t0=/:([^]+)/,n0=/\/\*[^]*?\*\//g;function i0(i){const e={};return i.replace(n0,"").split(e0).forEach(t=>{if(t){const n=t.split(t0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Rh(i){let e="";if(Gt(i))e=i;else if(tt(i))for(let t=0;t<i.length;t++){const n=Rh(i[t]);n&&(e+=n+" ")}else if(Nt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const r0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s0=Th(r0);function im(i){return!!i||i===""}const rm=i=>!!(i&&i.__v_isRef===!0),sm=i=>Gt(i)?i:i==null?"":tt(i)||Nt(i)&&(i.toString===Qp||!st(i.toString))?rm(i)?sm(i.value):JSON.stringify(i,om,2):String(i),om=(i,e)=>rm(e)?om(i,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[nc(n,s)+" =>"]=r,t),{})}:$p(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>nc(t))}:Rr(e)?nc(e):Nt(e)&&!tt(e)&&!em(e)?String(e):e,nc=(i,e="")=>{var t;return Rr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;class o0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=In;try{return In=this,e()}finally{In=t}}}on(){In=this}off(){In=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function a0(){return In}let Et;const ic=new WeakSet;class am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,In&&In.active&&In.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ic.has(this)&&(ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lf(this),um(this);const e=Et,t=ei;Et=this,ei=!0;try{return this.fn()}finally{hm(this),Et=e,ei=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dh(e);this.deps=this.depsTail=void 0,Lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let lm=0,ko,zo;function cm(i,e=!1){if(i.flags|=8,e){i.next=zo,zo=i;return}i.next=ko,ko=i}function Ch(){lm++}function Ph(){if(--lm>0)return;if(zo){let e=zo;for(zo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;ko;){let e=ko;for(ko=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function um(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hm(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Dh(n),l0(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function su(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function fm(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Jo))return;i.globalVersion=Jo;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!su(i)){i.flags&=-3;return}const t=Et,n=ei;Et=i,ei=!0;try{um(i);const r=i.fn(i._value);(e.version===0||xr(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=t,ei=n,hm(i),i.flags&=-3}}function Dh(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Dh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function l0(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ei=!0;const dm=[];function Cr(){dm.push(ei),ei=!1}function Pr(){const i=dm.pop();ei=i===void 0?!0:i}function Lf(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Jo=0;class c0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ih{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!ei||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new c0(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,pm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=n)}return t}trigger(e){this.version++,Jo++,this.notify(e)}notify(e){Ch();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ph()}}}function pm(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)pm(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const ou=new WeakMap,Qr=Symbol(""),au=Symbol(""),Qo=Symbol("");function rn(i,e,t){if(ei&&Et){let n=ou.get(i);n||ou.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Ih),r.map=n,r.key=t),r.track()}}function Wi(i,e,t,n,r,s){const o=ou.get(i);if(!o){Jo++;return}const a=l=>{l&&l.trigger()};if(Ch(),e==="clear")o.forEach(a);else{const l=tt(i),c=l&&Ah(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===Qo||!Rr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Qo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Qr)),Bs(i)&&a(o.get(au)));break;case"delete":l||(a(o.get(Qr)),Bs(i)&&a(o.get(au)));break;case"set":Bs(i)&&a(o.get(Qr));break}}Ph()}function ps(i){const e=mt(i);return e===i?e:(rn(e,"iterate",Qo),ti(i)?e:e.map(dn))}function Lh(i){return rn(i=mt(i),"iterate",Qo),i}const u0={__proto__:null,[Symbol.iterator](){return rc(this,Symbol.iterator,dn)},concat(...i){return ps(this).concat(...i.map(e=>tt(e)?ps(e):e))},entries(){return rc(this,"entries",i=>(i[1]=dn(i[1]),i))},every(i,e){return Di(this,"every",i,e,void 0,arguments)},filter(i,e){return Di(this,"filter",i,e,t=>t.map(dn),arguments)},find(i,e){return Di(this,"find",i,e,dn,arguments)},findIndex(i,e){return Di(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Di(this,"findLast",i,e,dn,arguments)},findLastIndex(i,e){return Di(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Di(this,"forEach",i,e,void 0,arguments)},includes(...i){return sc(this,"includes",i)},indexOf(...i){return sc(this,"indexOf",i)},join(i){return ps(this).join(i)},lastIndexOf(...i){return sc(this,"lastIndexOf",i)},map(i,e){return Di(this,"map",i,e,void 0,arguments)},pop(){return Mo(this,"pop")},push(...i){return Mo(this,"push",i)},reduce(i,...e){return Nf(this,"reduce",i,e)},reduceRight(i,...e){return Nf(this,"reduceRight",i,e)},shift(){return Mo(this,"shift")},some(i,e){return Di(this,"some",i,e,void 0,arguments)},splice(...i){return Mo(this,"splice",i)},toReversed(){return ps(this).toReversed()},toSorted(i){return ps(this).toSorted(i)},toSpliced(...i){return ps(this).toSpliced(...i)},unshift(...i){return Mo(this,"unshift",i)},values(){return rc(this,"values",dn)}};function rc(i,e,t){const n=Lh(i),r=n[e]();return n!==i&&!ti(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const h0=Array.prototype;function Di(i,e,t,n,r,s){const o=Lh(i),a=o!==i&&!ti(i),l=o[e];if(l!==h0[e]){const h=l.apply(i,s);return a?dn(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,dn(h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Nf(i,e,t,n){const r=Lh(i);let s=t;return r!==i&&(ti(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,dn(a),l,i)}),r[e](s,...n)}function sc(i,e,t){const n=mt(i);rn(n,"iterate",Qo);const r=n[e](...t);return(r===-1||r===!1)&&Fh(t[0])?(t[0]=mt(t[0]),n[e](...t)):r}function Mo(i,e,t=[]){Cr(),Ch();const n=mt(i)[e].apply(i,t);return Ph(),Pr(),n}const f0=Th("__proto__,__v_isRef,__isVue"),mm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Rr));function d0(i){Rr(i)||(i=String(i));const e=mt(this);return rn(e,"has",i),e.hasOwnProperty(i)}class _m{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?T0:ym:s?vm:xm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=tt(e);if(!r){let l;if(o&&(l=u0[t]))return l;if(t==="hasOwnProperty")return d0}const a=Reflect.get(e,t,ln(e)?e:n);return(Rr(t)?mm.has(t):f0(t))||(r||rn(e,"get",t),s)?a:ln(a)?o&&Ah(t)?a:a.value:Nt(a)?r?Mm(a):Uh(a):a}}class gm extends _m{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=ss(s);if(!ti(n)&&!ss(n)&&(s=mt(s),n=mt(n)),!tt(e)&&ln(s)&&!ln(n))return l?!1:(s.value=n,!0)}const o=tt(e)&&Ah(t)?Number(t)<e.length:_t(e,t),a=Reflect.set(e,t,n,ln(e)?e:r);return e===mt(r)&&(o?xr(n,s)&&Wi(e,"set",t,n):Wi(e,"add",t,n)),a}deleteProperty(e,t){const n=_t(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Wi(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!Rr(t)||!mm.has(t))&&rn(e,"has",t),n}ownKeys(e){return rn(e,"iterate",tt(e)?"length":Qr),Reflect.ownKeys(e)}}class p0 extends _m{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const m0=new gm,_0=new p0,g0=new gm(!0);const lu=i=>i,Aa=i=>Reflect.getPrototypeOf(i);function x0(i,e,t){return function(...n){const r=this.__v_raw,s=mt(r),o=Bs(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?lu:e?cu:dn;return!e&&rn(s,"iterate",l?au:Qr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wa(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function v0(i,e){const t={get(r){const s=this.__v_raw,o=mt(s),a=mt(r);i||(xr(r,a)&&rn(o,"get",r),rn(o,"get",a));const{has:l}=Aa(o),c=e?lu:i?cu:dn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&rn(mt(r),"iterate",Qr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=mt(s),a=mt(r);return i||(xr(r,a)&&rn(o,"has",r),rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=mt(a),c=e?lu:i?cu:dn;return!i&&rn(l,"iterate",Qr),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return xn(t,i?{add:wa("add"),set:wa("set"),delete:wa("delete"),clear:wa("clear")}:{add(r){!e&&!ti(r)&&!ss(r)&&(r=mt(r));const s=mt(this);return Aa(s).has.call(s,r)||(s.add(r),Wi(s,"add",r,r)),this},set(r,s){!e&&!ti(s)&&!ss(s)&&(s=mt(s));const o=mt(this),{has:a,get:l}=Aa(o);let c=a.call(o,r);c||(r=mt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?xr(s,u)&&Wi(o,"set",r,s):Wi(o,"add",r,s),this},delete(r){const s=mt(this),{has:o,get:a}=Aa(s);let l=o.call(s,r);l||(r=mt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Wi(s,"delete",r,void 0),c},clear(){const r=mt(this),s=r.size!==0,o=r.clear();return s&&Wi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=x0(r,i,e)}),t}function Nh(i,e){const t=v0(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(_t(t,r)&&r in n?t:n,r,s)}const y0={get:Nh(!1,!1)},M0={get:Nh(!1,!0)},S0={get:Nh(!0,!1)};const xm=new WeakMap,vm=new WeakMap,ym=new WeakMap,T0=new WeakMap;function E0(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b0(i){return i.__v_skip||!Object.isExtensible(i)?0:E0(Zg(i))}function Uh(i){return ss(i)?i:Oh(i,!1,m0,y0,xm)}function A0(i){return Oh(i,!1,g0,M0,vm)}function Mm(i){return Oh(i,!0,_0,S0,ym)}function Oh(i,e,t,n,r){if(!Nt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=b0(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ho(i){return ss(i)?Ho(i.__v_raw):!!(i&&i.__v_isReactive)}function ss(i){return!!(i&&i.__v_isReadonly)}function ti(i){return!!(i&&i.__v_isShallow)}function Fh(i){return i?!!i.__v_raw:!1}function mt(i){const e=i&&i.__v_raw;return e?mt(e):i}function w0(i){return!_t(i,"__v_skip")&&Object.isExtensible(i)&&nm(i,"__v_skip",!0),i}const dn=i=>Nt(i)?Uh(i):i,cu=i=>Nt(i)?Mm(i):i;function ln(i){return i?i.__v_isRef===!0:!1}function R0(i){return C0(i,!1)}function C0(i,e){return ln(i)?i:new P0(i,e)}class P0{constructor(e,t){this.dep=new Ih,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:dn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||ti(e)||ss(e);e=n?e:mt(e),xr(e,t)&&(this._rawValue=e,this._value=n?e:dn(e),this.dep.trigger())}}function D0(i){return ln(i)?i.value:i}const I0={get:(i,e,t)=>e==="__v_raw"?i:D0(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return ln(r)&&!ln(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Sm(i){return Ho(i)?i:new Proxy(i,I0)}class L0{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ih(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return cm(this,!0),!0}get value(){const e=this.dep.track();return fm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function N0(i,e,t=!1){let n,r;return st(i)?n=i:(n=i.get,r=i.set),new L0(n,r,t)}const Ra={},xl=new WeakMap;let Wr;function U0(i,e=!1,t=Wr){if(t){let n=xl.get(t);n||xl.set(t,n=[]),n.push(i)}}function O0(i,e,t=bt){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:ti(y)||r===!1||r===0?dr(y,1):dr(y);let u,h,f,d,g=!1,_=!1;if(ln(i)?(h=()=>i.value,g=ti(i)):Ho(i)?(h=()=>c(i),g=!0):tt(i)?(_=!0,g=i.some(y=>Ho(y)||ti(y)),h=()=>i.map(y=>{if(ln(y))return y.value;if(Ho(y))return c(y);if(st(y))return l?l(y,2):y()})):st(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){Cr();try{f()}finally{Pr()}}const y=Wr;Wr=u;try{return l?l(i,3,[d]):i(d)}finally{Wr=y}}:h=gi,e&&r){const y=h,C=r===!0?1/0:r;h=()=>dr(y(),C)}const m=a0(),p=()=>{u.stop(),m&&m.active&&bh(m.effects,u)};if(s&&e){const y=e;e=(...C)=>{y(...C),p()}}let E=_?new Array(i.length).fill(Ra):Ra;const T=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const C=u.run();if(r||g||(_?C.some((L,P)=>xr(L,E[P])):xr(C,E))){f&&f();const L=Wr;Wr=u;try{const P=[C,E===Ra?void 0:_&&E[0]===Ra?[]:E,d];l?l(e,3,P):e(...P),E=C}finally{Wr=L}}}else u.run()};return a&&a(T),u=new am(h),u.scheduler=o?()=>o(T,!1):T,d=y=>U0(y,!1,u),f=u.onStop=()=>{const y=xl.get(u);if(y){if(l)l(y,4);else for(const C of y)C();xl.delete(u)}},e?n?T(!0):E=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function dr(i,e=1/0,t){if(e<=0||!Nt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,ln(i))dr(i.value,e,t);else if(tt(i))for(let n=0;n<i.length;n++)dr(i[n],e,t);else if($p(i)||Bs(i))i.forEach(n=>{dr(n,e,t)});else if(em(i)){for(const n in i)dr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&dr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ma(i,e,t,n){try{return n?i(...n):i()}catch(r){Vl(r,e,t)}}function Mi(i,e,t,n){if(st(i)){const r=ma(i,e,t,n);return r&&Jp(r)&&r.catch(s=>{Vl(s,e,t)}),r}if(tt(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Mi(i[s],e,t,n));return r}}function Vl(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(s){Cr(),ma(s,null,10,[i,l,c]),Pr();return}}F0(i,t,r,n,o)}function F0(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const pn=[];let oi=-1;const ks=[];let hr=null,Ds=0;const Tm=Promise.resolve();let vl=null;function B0(i){const e=vl||Tm;return i?e.then(this?i.bind(this):i):e}function k0(i){let e=oi+1,t=pn.length;for(;e<t;){const n=e+t>>>1,r=pn[n],s=ea(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function Bh(i){if(!(i.flags&1)){const e=ea(i),t=pn[pn.length-1];!t||!(i.flags&2)&&e>=ea(t)?pn.push(i):pn.splice(k0(e),0,i),i.flags|=1,Em()}}function Em(){vl||(vl=Tm.then(Am))}function z0(i){tt(i)?ks.push(...i):hr&&i.id===-1?hr.splice(Ds+1,0,i):i.flags&1||(ks.push(i),i.flags|=1),Em()}function Uf(i,e,t=oi+1){for(;t<pn.length;t++){const n=pn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;pn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function bm(i){if(ks.length){const e=[...new Set(ks)].sort((t,n)=>ea(t)-ea(n));if(ks.length=0,hr){hr.push(...e);return}for(hr=e,Ds=0;Ds<hr.length;Ds++){const t=hr[Ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hr=null,Ds=0}}const ea=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Am(i){try{for(oi=0;oi<pn.length;oi++){const e=pn[oi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ma(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;oi<pn.length;oi++){const e=pn[oi];e&&(e.flags&=-2)}oi=-1,pn.length=0,bm(),vl=null,(pn.length||ks.length)&&Am()}}let di=null,wm=null;function yl(i){const e=di;return di=i,wm=i&&i.type.__scopeId||null,e}function H0(i,e=di,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Wf(-1);const s=yl(e);let o;try{o=i(...r)}finally{yl(s),n._d&&Wf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Lr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Cr(),Mi(l,t,8,[i.el,a,i,e]),Pr())}}const V0=Symbol("_vte"),G0=i=>i.__isTeleport;function kh(i,e){i.shapeFlag&6&&i.component?(i.transition=e,kh(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Rm(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Ml(i,e,t,n,r=!1){if(tt(i)){i.forEach((g,_)=>Ml(g,e&&(tt(e)?e[_]:e),t,n,r));return}if(Vo(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ml(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?Vh(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState,f=mt(h),d=h===bt?()=>!1:g=>_t(f,g);if(c!=null&&c!==l&&(Gt(c)?(u[c]=null,d(c)&&(h[c]=null)):ln(c)&&(c.value=null)),st(l))ma(l,a,12,[o,u]);else{const g=Gt(l),_=ln(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?h[l]:u[l]:l.value;r?tt(p)&&bh(p,s):tt(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,Dn(m,t)):m()}}}Hl().requestIdleCallback;Hl().cancelIdleCallback;const Vo=i=>!!i.type.__asyncLoader,Cm=i=>i.type.__isKeepAlive;function W0(i,e){Pm(i,"a",e)}function X0(i,e){Pm(i,"da",e)}function Pm(i,e,t=mn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Gl(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Cm(r.parent.vnode)&&Y0(n,e,t,r),r=r.parent}}function Y0(i,e,t,n){const r=Gl(e,i,n,!0);Im(()=>{bh(n[e],r)},t)}function Gl(i,e,t=mn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Cr();const a=_a(t),l=Mi(e,t,i,o);return a(),Pr(),l});return n?r.unshift(s):r.push(s),s}}const tr=i=>(e,t=mn)=>{(!ia||i==="sp")&&Gl(i,(...n)=>e(...n),t)},q0=tr("bm"),Dm=tr("m"),j0=tr("bu"),K0=tr("u"),Z0=tr("bum"),Im=tr("um"),$0=tr("sp"),J0=tr("rtg"),Q0=tr("rtc");function ex(i,e=mn){Gl("ec",i,e)}const tx=Symbol.for("v-ndc"),uu=i=>i?Qm(i)?Vh(i):uu(i.parent):null,Go=xn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>uu(i.parent),$root:i=>uu(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Nm(i),$forceUpdate:i=>i.f||(i.f=()=>{Bh(i.update)}),$nextTick:i=>i.n||(i.n=B0.bind(i.proxy)),$watch:i=>Tx.bind(i)}),oc=(i,e)=>i!==bt&&!i.__isScriptSetup&&_t(i,e),nx={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(oc(n,e))return o[e]=1,n[e];if(r!==bt&&_t(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&_t(c,e))return o[e]=3,s[e];if(t!==bt&&_t(t,e))return o[e]=4,t[e];hu&&(o[e]=0)}}const u=Go[e];let h,f;if(u)return e==="$attrs"&&rn(i.attrs,"get",""),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==bt&&_t(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,_t(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return oc(r,e)?(r[e]=t,!0):n!==bt&&_t(n,e)?(n[e]=t,!0):_t(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==bt&&_t(i,o)||oc(e,o)||(a=s[0])&&_t(a,o)||_t(n,o)||_t(Go,o)||_t(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:_t(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Of(i){return tt(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let hu=!0;function ix(i){const e=Nm(i),t=i.proxy,n=i.ctx;hu=!1,e.beforeCreate&&Ff(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:T,unmounted:y,render:C,renderTracked:L,renderTriggered:P,errorCaptured:N,serverPrefetch:S,expose:A,inheritAttrs:k,components:G,directives:V,filters:$}=e;if(c&&rx(c,n,null),o)for(const ee in o){const j=o[ee];st(j)&&(n[ee]=j.bind(t))}if(r){const ee=r.call(t,t);Nt(ee)&&(i.data=Uh(ee))}if(hu=!0,s)for(const ee in s){const j=s[ee],he=st(j)?j.bind(t,t):st(j.get)?j.get.bind(t,t):gi,Se=!st(j)&&st(j.set)?j.set.bind(t):gi,De=qx({get:he,set:Se});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>De.value,set:Le=>De.value=Le})}if(a)for(const ee in a)Lm(a[ee],n,t,ee);if(l){const ee=st(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(j=>{ux(j,ee[j])})}u&&Ff(u,i,"c");function Y(ee,j){tt(j)?j.forEach(he=>ee(he.bind(t))):j&&ee(j.bind(t))}if(Y(q0,h),Y(Dm,f),Y(j0,d),Y(K0,g),Y(W0,_),Y(X0,m),Y(ex,N),Y(Q0,L),Y(J0,P),Y(Z0,E),Y(Im,y),Y($0,S),tt(A))if(A.length){const ee=i.exposed||(i.exposed={});A.forEach(j=>{Object.defineProperty(ee,j,{get:()=>t[j],set:he=>t[j]=he})})}else i.exposed||(i.exposed={});C&&i.render===gi&&(i.render=C),k!=null&&(i.inheritAttrs=k),G&&(i.components=G),V&&(i.directives=V),S&&Rm(i)}function rx(i,e,t=gi){tt(i)&&(i=fu(i));for(const n in i){const r=i[n];let s;Nt(r)?"default"in r?s=sl(r.from||n,r.default,!0):s=sl(r.from||n):s=sl(r),ln(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Ff(i,e,t){Mi(tt(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Lm(i,e,t,n){let r=n.includes(".")?jm(t,n):()=>t[n];if(Gt(i)){const s=e[i];st(s)&&lc(r,s)}else if(st(i))lc(r,i.bind(t));else if(Nt(i))if(tt(i))i.forEach(s=>Lm(s,e,t,n));else{const s=st(i.handler)?i.handler.bind(t):e[i.handler];st(s)&&lc(r,s,i)}}function Nm(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Sl(l,c,o,!0)),Sl(l,e,o)),Nt(e)&&s.set(e,l),l}function Sl(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Sl(i,s,t,!0),r&&r.forEach(o=>Sl(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=sx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const sx={data:Bf,props:kf,emits:kf,methods:Lo,computed:Lo,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Lo,directives:Lo,watch:ax,provide:Bf,inject:ox};function Bf(i,e){return e?i?function(){return xn(st(i)?i.call(this,this):i,st(e)?e.call(this,this):e)}:e:i}function ox(i,e){return Lo(fu(i),fu(e))}function fu(i){if(tt(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function hn(i,e){return i?[...new Set([].concat(i,e))]:e}function Lo(i,e){return i?xn(Object.create(null),i,e):e}function kf(i,e){return i?tt(i)&&tt(e)?[...new Set([...i,...e])]:xn(Object.create(null),Of(i),Of(e??{})):e}function ax(i,e){if(!i)return e;if(!e)return i;const t=xn(Object.create(null),i);for(const n in e)t[n]=hn(i[n],e[n]);return t}function Um(){return{app:null,config:{isNativeTag:jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lx=0;function cx(i,e){return function(n,r=null){st(n)||(n=xn({},n)),r!=null&&!Nt(r)&&(r=null);const s=Um(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lx++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jx,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...h)):st(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||es(n,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Vh(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mi(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=zs;zs=c;try{return u()}finally{zs=h}}};return c}}let zs=null;function ux(i,e){if(mn){let t=mn.provides;const n=mn.parent&&mn.parent.provides;n===t&&(t=mn.provides=Object.create(n)),t[i]=e}}function sl(i,e,t=!1){const n=mn||di;if(n||zs){const r=zs?zs._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&st(e)?e.call(n&&n.proxy):e}}const Om={},Fm=()=>Object.create(Om),Bm=i=>Object.getPrototypeOf(i)===Om;function hx(i,e,t,n=!1){const r={},s=Fm();i.propsDefaults=Object.create(null),km(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:A0(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function fx(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=mt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Wl(i.emitsOptions,f))continue;const d=e[f];if(l)if(_t(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Tr(f);r[g]=du(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{km(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!_t(e,h)&&((u=ls(h))===h||!_t(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=du(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!_t(e,h))&&(delete s[h],c=!0)}c&&Wi(i.attrs,"set","")}function km(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bo(l))continue;const c=e[l];let u;r&&_t(r,u=Tr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Wl(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=mt(t),c=a||bt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=du(r,l,h,c[h],i,!_t(c,h))}}return o}function du(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=_t(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=_a(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ls(t))&&(n=!0))}return n}const dx=new WeakMap;function zm(i,e,t=!1){const n=t?dx:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!st(i)){const u=h=>{l=!0;const[f,d]=zm(h,e,!0);xn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Nt(i)&&n.set(i,Fs),Fs;if(tt(s))for(let u=0;u<s.length;u++){const h=Tr(s[u]);zf(h)&&(o[h]=bt)}else if(s)for(const u in s){const h=Tr(u);if(zf(h)){const f=s[u],d=o[h]=tt(f)||st(f)?{type:f}:xn({},f),g=d.type;let _=!1,m=!0;if(tt(g))for(let p=0;p<g.length;++p){const E=g[p],T=st(E)&&E.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=st(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||_t(d,"default"))&&a.push(h)}}const c=[o,a];return Nt(i)&&n.set(i,c),c}function zf(i){return i[0]!=="$"&&!Bo(i)}const Hm=i=>i[0]==="_"||i==="$stable",zh=i=>tt(i)?i.map(ci):[ci(i)],px=(i,e,t)=>{if(e._n)return e;const n=H0((...r)=>zh(e(...r)),t);return n._c=!1,n},Vm=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Hm(r))continue;const s=i[r];if(st(s))e[r]=px(r,s,n);else if(s!=null){const o=zh(s);e[r]=()=>o}}},Gm=(i,e)=>{const t=zh(e);i.slots.default=()=>t},Wm=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},mx=(i,e,t)=>{const n=i.slots=Fm();if(i.vnode.shapeFlag&32){const r=e._;r?(Wm(n,e,t),t&&nm(n,"_",r,!0)):Vm(e,n)}else e&&Gm(i,e)},_x=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=bt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Wm(r,e,t):(s=!e.$stable,Vm(e,r)),o=e}else e&&(Gm(i,e),o={default:1});if(s)for(const a in r)!Hm(a)&&o[a]==null&&delete r[a]},Dn=Px;function gx(i){return xx(i)}function xx(i,e){const t=Hl();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=gi,insertStaticContent:g}=i,_=(O,z,w,pe=null,se=null,le=null,ue=void 0,_e=null,re=!!z.dynamicChildren)=>{if(O===z)return;O&&!So(O,z)&&(pe=be(O),Le(O,se,le,!0),O=null),z.patchFlag===-2&&(re=!1,z.dynamicChildren=null);const{type:b,ref:M,shapeFlag:H}=z;switch(b){case Xl:m(O,z,w,pe);break;case ta:p(O,z,w,pe);break;case cc:O==null&&E(z,w,pe,ue);break;case li:G(O,z,w,pe,se,le,ue,_e,re);break;default:H&1?C(O,z,w,pe,se,le,ue,_e,re):H&6?V(O,z,w,pe,se,le,ue,_e,re):(H&64||H&128)&&b.process(O,z,w,pe,se,le,ue,_e,re,Ve)}M!=null&&se&&Ml(M,O&&O.ref,le,z||O,!z)},m=(O,z,w,pe)=>{if(O==null)n(z.el=a(z.children),w,pe);else{const se=z.el=O.el;z.children!==O.children&&c(se,z.children)}},p=(O,z,w,pe)=>{O==null?n(z.el=l(z.children||""),w,pe):z.el=O.el},E=(O,z,w,pe)=>{[O.el,O.anchor]=g(O.children,z,w,pe,O.el,O.anchor)},T=({el:O,anchor:z},w,pe)=>{let se;for(;O&&O!==z;)se=f(O),n(O,w,pe),O=se;n(z,w,pe)},y=({el:O,anchor:z})=>{let w;for(;O&&O!==z;)w=f(O),r(O),O=w;r(z)},C=(O,z,w,pe,se,le,ue,_e,re)=>{z.type==="svg"?ue="svg":z.type==="math"&&(ue="mathml"),O==null?L(z,w,pe,se,le,ue,_e,re):S(O,z,se,le,ue,_e,re)},L=(O,z,w,pe,se,le,ue,_e)=>{let re,b;const{props:M,shapeFlag:H,transition:J,dirs:ne}=O;if(re=O.el=o(O.type,le,M&&M.is,M),H&8?u(re,O.children):H&16&&N(O.children,re,null,pe,se,ac(O,le),ue,_e),ne&&Lr(O,null,pe,"created"),P(re,O,O.scopeId,ue,pe),M){for(const Ae in M)Ae!=="value"&&!Bo(Ae)&&s(re,Ae,null,M[Ae],le,pe);"value"in M&&s(re,"value",null,M.value,le),(b=M.onVnodeBeforeMount)&&si(b,pe,O)}ne&&Lr(O,null,pe,"beforeMount");const te=vx(se,J);te&&J.beforeEnter(re),n(re,z,w),((b=M&&M.onVnodeMounted)||te||ne)&&Dn(()=>{b&&si(b,pe,O),te&&J.enter(re),ne&&Lr(O,null,pe,"mounted")},se)},P=(O,z,w,pe,se)=>{if(w&&d(O,w),pe)for(let le=0;le<pe.length;le++)d(O,pe[le]);if(se){let le=se.subTree;if(z===le||Zm(le.type)&&(le.ssContent===z||le.ssFallback===z)){const ue=se.vnode;P(O,ue,ue.scopeId,ue.slotScopeIds,se.parent)}}},N=(O,z,w,pe,se,le,ue,_e,re=0)=>{for(let b=re;b<O.length;b++){const M=O[b]=_e?fr(O[b]):ci(O[b]);_(null,M,z,w,pe,se,le,ue,_e)}},S=(O,z,w,pe,se,le,ue)=>{const _e=z.el=O.el;let{patchFlag:re,dynamicChildren:b,dirs:M}=z;re|=O.patchFlag&16;const H=O.props||bt,J=z.props||bt;let ne;if(w&&Nr(w,!1),(ne=J.onVnodeBeforeUpdate)&&si(ne,w,z,O),M&&Lr(z,O,w,"beforeUpdate"),w&&Nr(w,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&u(_e,""),b?A(O.dynamicChildren,b,_e,w,pe,ac(z,se),le):ue||j(O,z,_e,null,w,pe,ac(z,se),le,!1),re>0){if(re&16)k(_e,H,J,w,se);else if(re&2&&H.class!==J.class&&s(_e,"class",null,J.class,se),re&4&&s(_e,"style",H.style,J.style,se),re&8){const te=z.dynamicProps;for(let Ae=0;Ae<te.length;Ae++){const xe=te[Ae],we=H[xe],qe=J[xe];(qe!==we||xe==="value")&&s(_e,xe,we,qe,se,w)}}re&1&&O.children!==z.children&&u(_e,z.children)}else!ue&&b==null&&k(_e,H,J,w,se);((ne=J.onVnodeUpdated)||M)&&Dn(()=>{ne&&si(ne,w,z,O),M&&Lr(z,O,w,"updated")},pe)},A=(O,z,w,pe,se,le,ue)=>{for(let _e=0;_e<z.length;_e++){const re=O[_e],b=z[_e],M=re.el&&(re.type===li||!So(re,b)||re.shapeFlag&70)?h(re.el):w;_(re,b,M,null,pe,se,le,ue,!0)}},k=(O,z,w,pe,se)=>{if(z!==w){if(z!==bt)for(const le in z)!Bo(le)&&!(le in w)&&s(O,le,z[le],null,se,pe);for(const le in w){if(Bo(le))continue;const ue=w[le],_e=z[le];ue!==_e&&le!=="value"&&s(O,le,_e,ue,se,pe)}"value"in w&&s(O,"value",z.value,w.value,se)}},G=(O,z,w,pe,se,le,ue,_e,re)=>{const b=z.el=O?O.el:a(""),M=z.anchor=O?O.anchor:a("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:ne}=z;ne&&(_e=_e?_e.concat(ne):ne),O==null?(n(b,w,pe),n(M,w,pe),N(z.children||[],w,M,se,le,ue,_e,re)):H>0&&H&64&&J&&O.dynamicChildren?(A(O.dynamicChildren,J,w,se,le,ue,_e),(z.key!=null||se&&z===se.subTree)&&Xm(O,z,!0)):j(O,z,w,M,se,le,ue,_e,re)},V=(O,z,w,pe,se,le,ue,_e,re)=>{z.slotScopeIds=_e,O==null?z.shapeFlag&512?se.ctx.activate(z,w,pe,ue,re):$(z,w,pe,se,le,ue,re):Q(O,z,re)},$=(O,z,w,pe,se,le,ue)=>{const _e=O.component=Hx(O,pe,se);if(Cm(O)&&(_e.ctx.renderer=Ve),Vx(_e,!1,ue),_e.asyncDep){if(se&&se.registerDep(_e,Y,ue),!O.el){const re=_e.subTree=es(ta);p(null,re,z,w)}}else Y(_e,O,z,w,se,le,ue)},Q=(O,z,w)=>{const pe=z.component=O.component;if(Rx(O,z,w))if(pe.asyncDep&&!pe.asyncResolved){ee(pe,z,w);return}else pe.next=z,pe.update();else z.el=O.el,pe.vnode=z},Y=(O,z,w,pe,se,le,ue)=>{const _e=()=>{if(O.isMounted){let{next:H,bu:J,u:ne,parent:te,vnode:Ae}=O;{const Pe=Ym(O);if(Pe){H&&(H.el=Ae.el,ee(O,H,ue)),Pe.asyncDep.then(()=>{O.isUnmounted||_e()});return}}let xe=H,we;Nr(O,!1),H?(H.el=Ae.el,ee(O,H,ue)):H=Ae,J&&tc(J),(we=H.props&&H.props.onVnodeBeforeUpdate)&&si(we,te,H,Ae),Nr(O,!0);const qe=Vf(O),ye=O.subTree;O.subTree=qe,_(ye,qe,h(ye.el),be(ye),O,se,le),H.el=qe.el,xe===null&&Cx(O,qe.el),ne&&Dn(ne,se),(we=H.props&&H.props.onVnodeUpdated)&&Dn(()=>si(we,te,H,Ae),se)}else{let H;const{el:J,props:ne}=z,{bm:te,m:Ae,parent:xe,root:we,type:qe}=O,ye=Vo(z);Nr(O,!1),te&&tc(te),!ye&&(H=ne&&ne.onVnodeBeforeMount)&&si(H,xe,z),Nr(O,!0);{we.ce&&we.ce._injectChildStyle(qe);const Pe=O.subTree=Vf(O);_(null,Pe,w,pe,O,se,le),z.el=Pe.el}if(Ae&&Dn(Ae,se),!ye&&(H=ne&&ne.onVnodeMounted)){const Pe=z;Dn(()=>si(H,xe,Pe),se)}(z.shapeFlag&256||xe&&Vo(xe.vnode)&&xe.vnode.shapeFlag&256)&&O.a&&Dn(O.a,se),O.isMounted=!0,z=w=pe=null}};O.scope.on();const re=O.effect=new am(_e);O.scope.off();const b=O.update=re.run.bind(re),M=O.job=re.runIfDirty.bind(re);M.i=O,M.id=O.uid,re.scheduler=()=>Bh(M),Nr(O,!0),b()},ee=(O,z,w)=>{z.component=O;const pe=O.vnode.props;O.vnode=z,O.next=null,fx(O,z.props,pe,w),_x(O,z.children,w),Cr(),Uf(O),Pr()},j=(O,z,w,pe,se,le,ue,_e,re=!1)=>{const b=O&&O.children,M=O?O.shapeFlag:0,H=z.children,{patchFlag:J,shapeFlag:ne}=z;if(J>0){if(J&128){Se(b,H,w,pe,se,le,ue,_e,re);return}else if(J&256){he(b,H,w,pe,se,le,ue,_e,re);return}}ne&8?(M&16&&Te(b,se,le),H!==b&&u(w,H)):M&16?ne&16?Se(b,H,w,pe,se,le,ue,_e,re):Te(b,se,le,!0):(M&8&&u(w,""),ne&16&&N(H,w,pe,se,le,ue,_e,re))},he=(O,z,w,pe,se,le,ue,_e,re)=>{O=O||Fs,z=z||Fs;const b=O.length,M=z.length,H=Math.min(b,M);let J;for(J=0;J<H;J++){const ne=z[J]=re?fr(z[J]):ci(z[J]);_(O[J],ne,w,null,se,le,ue,_e,re)}b>M?Te(O,se,le,!0,!1,H):N(z,w,pe,se,le,ue,_e,re,H)},Se=(O,z,w,pe,se,le,ue,_e,re)=>{let b=0;const M=z.length;let H=O.length-1,J=M-1;for(;b<=H&&b<=J;){const ne=O[b],te=z[b]=re?fr(z[b]):ci(z[b]);if(So(ne,te))_(ne,te,w,null,se,le,ue,_e,re);else break;b++}for(;b<=H&&b<=J;){const ne=O[H],te=z[J]=re?fr(z[J]):ci(z[J]);if(So(ne,te))_(ne,te,w,null,se,le,ue,_e,re);else break;H--,J--}if(b>H){if(b<=J){const ne=J+1,te=ne<M?z[ne].el:pe;for(;b<=J;)_(null,z[b]=re?fr(z[b]):ci(z[b]),w,te,se,le,ue,_e,re),b++}}else if(b>J)for(;b<=H;)Le(O[b],se,le,!0),b++;else{const ne=b,te=b,Ae=new Map;for(b=te;b<=J;b++){const Re=z[b]=re?fr(z[b]):ci(z[b]);Re.key!=null&&Ae.set(Re.key,b)}let xe,we=0;const qe=J-te+1;let ye=!1,Pe=0;const Ue=new Array(qe);for(b=0;b<qe;b++)Ue[b]=0;for(b=ne;b<=H;b++){const Re=O[b];if(we>=qe){Le(Re,se,le,!0);continue}let We;if(Re.key!=null)We=Ae.get(Re.key);else for(xe=te;xe<=J;xe++)if(Ue[xe-te]===0&&So(Re,z[xe])){We=xe;break}We===void 0?Le(Re,se,le,!0):(Ue[We-te]=b+1,We>=Pe?Pe=We:ye=!0,_(Re,z[We],w,null,se,le,ue,_e,re),we++)}const ze=ye?yx(Ue):Fs;for(xe=ze.length-1,b=qe-1;b>=0;b--){const Re=te+b,We=z[Re],He=Re+1<M?z[Re+1].el:pe;Ue[b]===0?_(null,We,w,He,se,le,ue,_e,re):ye&&(xe<0||b!==ze[xe]?De(We,w,He,2):xe--)}}},De=(O,z,w,pe,se=null)=>{const{el:le,type:ue,transition:_e,children:re,shapeFlag:b}=O;if(b&6){De(O.component.subTree,z,w,pe);return}if(b&128){O.suspense.move(z,w,pe);return}if(b&64){ue.move(O,z,w,Ve);return}if(ue===li){n(le,z,w);for(let H=0;H<re.length;H++)De(re[H],z,w,pe);n(O.anchor,z,w);return}if(ue===cc){T(O,z,w);return}if(pe!==2&&b&1&&_e)if(pe===0)_e.beforeEnter(le),n(le,z,w),Dn(()=>_e.enter(le),se);else{const{leave:H,delayLeave:J,afterLeave:ne}=_e,te=()=>n(le,z,w),Ae=()=>{H(le,()=>{te(),ne&&ne()})};J?J(le,te,Ae):Ae()}else n(le,z,w)},Le=(O,z,w,pe=!1,se=!1)=>{const{type:le,props:ue,ref:_e,children:re,dynamicChildren:b,shapeFlag:M,patchFlag:H,dirs:J,cacheIndex:ne}=O;if(H===-2&&(se=!1),_e!=null&&Ml(_e,null,w,O,!0),ne!=null&&(z.renderCache[ne]=void 0),M&256){z.ctx.deactivate(O);return}const te=M&1&&J,Ae=!Vo(O);let xe;if(Ae&&(xe=ue&&ue.onVnodeBeforeUnmount)&&si(xe,z,O),M&6)Me(O.component,w,pe);else{if(M&128){O.suspense.unmount(w,pe);return}te&&Lr(O,null,z,"beforeUnmount"),M&64?O.type.remove(O,z,w,Ve,pe):b&&!b.hasOnce&&(le!==li||H>0&&H&64)?Te(b,z,w,!1,!0):(le===li&&H&384||!se&&M&16)&&Te(re,z,w),pe&&je(O)}(Ae&&(xe=ue&&ue.onVnodeUnmounted)||te)&&Dn(()=>{xe&&si(xe,z,O),te&&Lr(O,null,z,"unmounted")},w)},je=O=>{const{type:z,el:w,anchor:pe,transition:se}=O;if(z===li){ce(w,pe);return}if(z===cc){y(O);return}const le=()=>{r(w),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(O.shapeFlag&1&&se&&!se.persisted){const{leave:ue,delayLeave:_e}=se,re=()=>ue(w,le);_e?_e(O.el,le,re):re()}else le()},ce=(O,z)=>{let w;for(;O!==z;)w=f(O),r(O),O=w;r(z)},Me=(O,z,w)=>{const{bum:pe,scope:se,job:le,subTree:ue,um:_e,m:re,a:b}=O;Hf(re),Hf(b),pe&&tc(pe),se.stop(),le&&(le.flags|=8,Le(ue,O,z,w)),_e&&Dn(_e,z),Dn(()=>{O.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},Te=(O,z,w,pe=!1,se=!1,le=0)=>{for(let ue=le;ue<O.length;ue++)Le(O[ue],z,w,pe,se)},be=O=>{if(O.shapeFlag&6)return be(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const z=f(O.anchor||O.el),w=z&&z[V0];return w?f(w):z};let ke=!1;const ot=(O,z,w)=>{O==null?z._vnode&&Le(z._vnode,null,null,!0):_(z._vnode||null,O,z,null,null,null,w),z._vnode=O,ke||(ke=!0,Uf(),bm(),ke=!1)},Ve={p:_,um:Le,m:De,r:je,mt:$,mc:N,pc:j,pbc:A,n:be,o:i};return{render:ot,hydrate:void 0,createApp:cx(ot)}}function ac({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Nr({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function vx(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Xm(i,e,t=!1){const n=i.children,r=e.children;if(tt(n)&&tt(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Xm(o,a)),a.type===Xl&&(a.el=o.el)}}function yx(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ym(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ym(e)}function Hf(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Mx=Symbol.for("v-scx"),Sx=()=>sl(Mx);function lc(i,e,t){return qm(i,e,t)}function qm(i,e,t=bt){const{immediate:n,deep:r,flush:s,once:o}=t,a=xn({},t),l=e&&n||!e&&s!=="post";let c;if(ia){if(s==="sync"){const d=Sx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=gi,d.resume=gi,d.pause=gi,d}}const u=mn;a.call=(d,g,_)=>Mi(d,u,g,_);let h=!1;s==="post"?a.scheduler=d=>{Dn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Bh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=O0(i,e,a);return ia&&(c?c.push(f):l&&f()),f}function Tx(i,e,t){const n=this.proxy,r=Gt(i)?i.includes(".")?jm(n,i):()=>n[i]:i.bind(n,n);let s;st(e)?s=e:(s=e.handler,t=e);const o=_a(this),a=qm(r,s.bind(n),t);return o(),a}function jm(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Ex=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Tr(e)}Modifiers`]||i[`${ls(e)}Modifiers`];function bx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||bt;let r=t;const s=e.startsWith("update:"),o=s&&Ex(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>Gt(u)?u.trim():u)),o.number&&(r=t.map(Qg)));let a,l=n[a=ec(e)]||n[a=ec(Tr(e))];!l&&s&&(l=n[a=ec(ls(e))]),l&&Mi(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Mi(c,i,6,r)}}function Km(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!st(i)){const l=c=>{const u=Km(c,e,!0);u&&(a=!0,xn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Nt(i)&&n.set(i,null),null):(tt(s)?s.forEach(l=>o[l]=null):xn(o,s),Nt(i)&&n.set(i,o),o)}function Wl(i,e){return!i||!Bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(i,e[0].toLowerCase()+e.slice(1))||_t(i,ls(e))||_t(i,e))}function Vf(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i,m=yl(i);let p,E;try{if(t.shapeFlag&4){const y=r||n,C=y;p=ci(c.call(C,y,u,h,d,f,g)),E=a}else{const y=e;p=ci(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),E=e.props?a:Ax(a)}}catch(y){Wo.length=0,Vl(y,i,1),p=es(ta)}let T=p;if(E&&_!==!1){const y=Object.keys(E),{shapeFlag:C}=T;y.length&&C&7&&(s&&y.some(Eh)&&(E=wx(E,s)),T=Ks(T,E,!1,!0))}return t.dirs&&(T=Ks(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&kh(T,t.transition),p=T,yl(m),p}const Ax=i=>{let e;for(const t in i)(t==="class"||t==="style"||Bl(t))&&((e||(e={}))[t]=i[t]);return e},wx=(i,e)=>{const t={};for(const n in i)(!Eh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Rx(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Gf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Wl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gf(n,o,c):!0:!!o;return!1}function Gf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Wl(t,s))return!0}return!1}function Cx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Zm=i=>i.__isSuspense;function Px(i,e){e&&e.pendingBranch?tt(i)?e.effects.push(...i):e.effects.push(i):z0(i)}const li=Symbol.for("v-fgt"),Xl=Symbol.for("v-txt"),ta=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),Wo=[];let Un=null;function Dx(i=!1){Wo.push(Un=i?null:[])}function Ix(){Wo.pop(),Un=Wo[Wo.length-1]||null}let na=1;function Wf(i,e=!1){na+=i,i<0&&Un&&e&&(Un.hasOnce=!0)}function Lx(i){return i.dynamicChildren=na>0?Un||Fs:null,Ix(),na>0&&Un&&Un.push(i),i}function Nx(i,e,t,n,r,s){return Lx(Tl(i,e,t,n,r,s,!0))}function $m(i){return i?i.__v_isVNode===!0:!1}function So(i,e){return i.type===e.type&&i.key===e.key}const Jm=({key:i})=>i??null,ol=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Gt(i)||ln(i)||st(i)?{i:di,r:i,k:e,f:!!t}:i:null);function Tl(i,e=null,t=null,n=0,r=null,s=i===li?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Jm(e),ref:e&&ol(e),scopeId:wm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:di};return a?(Hh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Gt(t)?8:16),na>0&&!o&&Un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Un.push(l),l}const es=Ux;function Ux(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===tx)&&(i=ta),$m(i)){const a=Ks(i,e,!0);return t&&Hh(a,t),na>0&&!s&&Un&&(a.shapeFlag&6?Un[Un.indexOf(i)]=a:Un.push(a)),a.patchFlag=-2,a}if(Yx(i)&&(i=i.__vccOpts),e){e=Ox(e);let{class:a,style:l}=e;a&&!Gt(a)&&(e.class=Rh(a)),Nt(l)&&(Fh(l)&&!tt(l)&&(l=xn({},l)),e.style=wh(l))}const o=Gt(i)?1:Zm(i)?128:G0(i)?64:Nt(i)?4:st(i)?2:0;return Tl(i,e,t,n,r,o,s,!0)}function Ox(i){return i?Fh(i)||Bm(i)?xn({},i):i:null}function Ks(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?Bx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Jm(c),ref:e&&e.ref?t&&s?tt(s)?s.concat(ol(e)):[s,ol(e)]:ol(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==li?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ks(i.ssContent),ssFallback:i.ssFallback&&Ks(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&kh(u,l.clone(u)),u}function Fx(i=" ",e=0){return es(Xl,null,i,e)}function ci(i){return i==null||typeof i=="boolean"?es(ta):tt(i)?es(li,null,i.slice()):$m(i)?fr(i):es(Xl,null,String(i))}function fr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ks(i)}function Hh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(tt(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Hh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Bm(e)?e._ctx=di:r===3&&di&&(di.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:di},t=32):(e=String(e),n&64?(t=16,e=[Fx(e)]):t=8);i.children=e,i.shapeFlag|=t}function Bx(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Rh([e.class,n.class]));else if(r==="style")e.style=wh([e.style,n.style]);else if(Bl(r)){const s=e[r],o=n[r];o&&s!==o&&!(tt(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function si(i,e,t,n=null){Mi(i,e,7,[t,n])}const kx=Um();let zx=0;function Hx(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||kx,s={uid:zx++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zm(n,r),emitsOptions:Km(n,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:n.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bx.bind(null,s),i.ce&&i.ce(s),s}let mn=null,El,pu;{const i=Hl(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};El=e("__VUE_INSTANCE_SETTERS__",t=>mn=t),pu=e("__VUE_SSR_SETTERS__",t=>ia=t)}const _a=i=>{const e=mn;return El(i),i.scope.on(),()=>{i.scope.off(),El(e)}},Xf=()=>{mn&&mn.scope.off(),El(null)};function Qm(i){return i.vnode.shapeFlag&4}let ia=!1;function Vx(i,e=!1,t=!1){e&&pu(e);const{props:n,children:r}=i.vnode,s=Qm(i);hx(i,n,s,e),mx(i,r,t);const o=s?Gx(i,e):void 0;return e&&pu(!1),o}function Gx(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,nx);const{setup:n}=t;if(n){Cr();const r=i.setupContext=n.length>1?Xx(i):null,s=_a(i),o=ma(n,i,0,[i.props,r]),a=Jp(o);if(Pr(),s(),(a||i.sp)&&!Vo(i)&&Rm(i),a){if(o.then(Xf,Xf),e)return o.then(l=>{Yf(i,l)}).catch(l=>{Vl(l,i,0)});i.asyncDep=o}else Yf(i,o)}else e_(i)}function Yf(i,e,t){st(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Nt(e)&&(i.setupState=Sm(e)),e_(i)}function e_(i,e,t){const n=i.type;i.render||(i.render=n.render||gi);{const r=_a(i);Cr();try{ix(i)}finally{Pr(),r()}}}const Wx={get(i,e){return rn(i,"get",""),i[e]}};function Xx(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Wx),slots:i.slots,emit:i.emit,expose:e}}function Vh(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Sm(w0(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Go)return Go[t](i)},has(e,t){return t in e||t in Go}})):i.proxy}function Yx(i){return st(i)&&"__vccOpts"in i}const qx=(i,e)=>N0(i,e,ia),jx="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mu;const qf=typeof window<"u"&&window.trustedTypes;if(qf)try{mu=qf.createPolicy("vue",{createHTML:i=>i})}catch{}const t_=mu?i=>mu.createHTML(i):i=>i,Kx="http://www.w3.org/2000/svg",Zx="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,jf=ki&&ki.createElement("template"),$x={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?ki.createElementNS(Kx,i):e==="mathml"?ki.createElementNS(Zx,i):t?ki.createElement(i,{is:t}):ki.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ki.createTextNode(i),createComment:i=>ki.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ki.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{jf.innerHTML=t_(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=jf.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jx=Symbol("_vtc");function Qx(i,e,t){const n=i[Jx];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Kf=Symbol("_vod"),ev=Symbol("_vsh"),tv=Symbol(""),nv=/(^|;)\s*display\s*:/;function iv(i,e,t){const n=i.style,r=Gt(t);let s=!1;if(t&&!r){if(e)if(Gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&al(n,a,"")}else for(const o in e)t[o]==null&&al(n,o,"");for(const o in t)o==="display"&&(s=!0),al(n,o,t[o])}else if(r){if(e!==t){const o=n[tv];o&&(t+=";"+o),n.cssText=t,s=nv.test(t)}}else e&&i.removeAttribute("style");Kf in i&&(i[Kf]=s?n.display:"",i[ev]&&(n.display="none"))}const Zf=/\s*!important$/;function al(i,e,t){if(tt(t))t.forEach(n=>al(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=rv(i,e);Zf.test(t)?i.setProperty(ls(n),t.replace(Zf,""),"important"):i[n]=t}}const $f=["Webkit","Moz","ms"],uc={};function rv(i,e){const t=uc[e];if(t)return t;let n=Tr(e);if(n!=="filter"&&n in i)return uc[e]=n;n=tm(n);for(let r=0;r<$f.length;r++){const s=$f[r]+n;if(s in i)return uc[e]=s}return e}const Jf="http://www.w3.org/1999/xlink";function Qf(i,e,t,n,r,s=s0(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Jf,e.slice(6,e.length)):i.setAttributeNS(Jf,e,t):t==null||s&&!im(t)?i.removeAttribute(e):i.setAttribute(e,s?"":Rr(t)?String(t):t)}function ed(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?t_(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=im(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function sv(i,e,t,n){i.addEventListener(e,t,n)}function ov(i,e,t,n){i.removeEventListener(e,t,n)}const td=Symbol("_vei");function av(i,e,t,n,r=null){const s=i[td]||(i[td]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=lv(e);if(n){const c=s[e]=hv(n,r);sv(i,a,c,l)}else o&&(ov(i,a,o,l),s[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function lv(i){let e;if(nd.test(i)){e={};let n;for(;n=i.match(nd);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ls(i.slice(2)),e]}let hc=0;const cv=Promise.resolve(),uv=()=>hc||(cv.then(()=>hc=0),hc=Date.now());function hv(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Mi(fv(n,t.value),e,5,[n])};return t.value=i,t.attached=uv(),t}function fv(i,e){if(tt(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const id=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,dv=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?Qx(i,n,o):e==="style"?iv(i,t,n):Bl(e)?Eh(e)||av(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pv(i,e,n,o))?(ed(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Gt(n))?ed(i,Tr(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Qf(i,e,n,o))};function pv(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&id(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return id(e)&&Gt(t)?!1:e in i}const mv=xn({patchProp:dv},$x);let rd;function _v(){return rd||(rd=gx(mv))}const gv=(...i)=>{const e=_v().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=vv(n);if(!r)return;const s=e._component;!st(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xv(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function vv(i){return Gt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="174",Hs={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yv=0,sd=1,Mv=2,n_=1,Sv=2,Bi=3,Si=0,Sn=1,hi=2,vr=0,Vs=1,od=2,ad=3,ld=4,Tv=5,jr=100,Ev=101,bv=102,Av=103,wv=104,Rv=200,Cv=201,Pv=202,Dv=203,_u=204,gu=205,Iv=206,Lv=207,Nv=208,Uv=209,Ov=210,Fv=211,Bv=212,kv=213,zv=214,xu=0,vu=1,yu=2,Zs=3,Mu=4,Su=5,Tu=6,Eu=7,i_=0,Hv=1,Vv=2,yr=0,Gv=1,Wv=2,Xv=3,Yv=4,qv=5,jv=6,Kv=7,cd="attached",Zv="detached",r_=300,$s=301,Js=302,bl=303,bu=304,Yl=306,Er=1e3,pi=1001,Al=1002,gn=1003,s_=1004,No=1005,Kt=1006,ll=1007,mi=1008,$i=1009,o_=1010,a_=1011,ra=1012,Wh=1013,os=1014,yn=1015,qi=1016,Xh=1017,Yh=1018,Qs=1020,l_=35902,c_=1021,u_=1022,On=1023,h_=1024,f_=1025,Gs=1026,eo=1027,ql=1028,qh=1029,d_=1030,jh=1031,Kh=1033,cl=33776,ul=33777,hl=33778,fl=33779,Au=35840,wu=35841,Ru=35842,Cu=35843,Pu=36196,Du=37492,Iu=37496,Lu=37808,Nu=37809,Uu=37810,Ou=37811,Fu=37812,Bu=37813,ku=37814,zu=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,Yu=37821,dl=36492,qu=36494,ju=36495,p_=36283,Ku=36284,Zu=36285,$u=36286,sa=2300,oa=2301,fc=2302,ud=2400,hd=2401,fd=2402,$v=2500,Jv=0,m_=1,Ju=2,Qv=3200,ey=3201,__=0,ty=1,Xi="",$t="srgb",en="srgb-linear",wl="linear",yt="srgb",ms=7680,dd=519,ny=512,iy=513,ry=514,g_=515,sy=516,oy=517,ay=518,ly=519,Qu=35044,pd="300 es",ji=2e3,Rl=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let md=1234567;const Xo=Math.PI/180,to=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function cy(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function uy(i,e,t){return i!==e?(t-i)/(e-i):0}function Yo(i,e,t){return(1-t)*i+t*e}function hy(i,e,t,n){return Yo(i,e,1-Math.exp(-t*n))}function fy(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function dy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function py(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function my(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _y(i,e){return i+Math.random()*(e-i)}function gy(i){return i*(.5-Math.random())}function xy(i){i!==void 0&&(md=i);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vy(i){return i*Xo}function yy(i){return i*to}function My(i){return(i&i-1)===0&&i!==0}function Sy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ty(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ey(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const x_={DEG2RAD:Xo,RAD2DEG:to,generateUUID:ni,clamp:rt,euclideanModulo:Zh,mapLinear:cy,inverseLerp:uy,lerp:Yo,damp:hy,pingpong:fy,smoothstep:dy,smootherstep:py,randInt:my,randFloat:_y,randFloatSpread:gy,seededRandom:xy,degToRad:vy,radToDeg:yy,isPowerOfTwo:My,ceilPowerOfTwo:Sy,floorPowerOfTwo:Ty,setQuaternionFromProperEuler:Ey,normalize:gt,denormalize:Jn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],E=r[1],T=r[4],y=r[7],C=r[2],L=r[5],P=r[8];return s[0]=o*_+a*E+l*C,s[3]=o*m+a*T+l*L,s[6]=o*p+a*y+l*P,s[1]=c*_+u*E+h*C,s[4]=c*m+u*T+h*L,s[7]=c*p+u*y+h*P,s[2]=f*_+d*E+g*C,s[5]=f*m+d*T+g*L,s[8]=f*p+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new nt;function v_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function by(){const i=aa("canvas");return i.style.display="block",i}const _d={};function Xr(i){i in _d||(_d[i]=!0,console.warn(i))}function Ay(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function wy(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ry(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cy(){const i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?wl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:wl,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const ut=Cy();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _s;class Py{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=aa("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dy=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pc(r[o].image)):s.push(pc(r[o]))}else s=pc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Py.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iy=0;class Vt extends cs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=pi,r=pi,s=Kt,o=mi,a=On,l=$i,c=Vt.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=ni(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=r_;Vt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(d+1)/2,C=(p+1)/2,L=(u+f)/4,P=(h+_)/4,N=(g+m)/4;return T>y&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=L/n,s=P/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=L/r,s=N/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=N/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends Ly{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class y_ extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const C=Math.sqrt(T),L=Math.atan2(C,p*E);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const y=a*E;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new W,vd=new ii;class bi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Pa.subVectors(this.max,To),gs.subVectors(e.a,To),xs.subVectors(e.b,To),vs.subVectors(e.c,To),ir.subVectors(xs,gs),rr.subVectors(vs,xs),Ur.subVectors(gs,vs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ur.z,Ur.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ur.z,0,-Ur.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ur.y,Ur.x,0];return!_c(t,gs,xs,vs,Pa)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,gs,xs,vs,Pa))?!1:(Da.crossVectors(ir,rr),t=[Da.x,Da.y,Da.z],_c(t,gs,xs,vs,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new W,new W,new W,new W,new W,new W,new W,new W],qn=new W,Ca=new bi,gs=new W,xs=new W,vs=new W,ir=new W,rr=new W,Ur=new W,To=new W,Pa=new W,Da=new W,Or=new W;function _c(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Or.fromArray(i,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=n.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uy=new bi,Eo=new W,gc=new W;class Ai{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Eo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(gc)),this.expandByPoint(Eo.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new W,xc=new W,Ia=new W,sr=new W,vc=new W,La=new W,yc=new W;class fo{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(xc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=sr.dot(this.direction),l=-sr.dot(Ia),c=sr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xc).addScaledVector(Ia,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){vc.subVectors(t,e),La.subVectors(n,e),yc.crossVectors(vc,La);let o=this.direction.dot(yc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(sr,La));if(l<0)return null;const c=a*this.direction.dot(vc.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(yc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oy,e,Fy)}lookAt(e,t,n){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),or.crossVectors(n,Cn),or.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),or.crossVectors(n,Cn)),or.normalize(),Na.crossVectors(Cn,or),r[0]=or.x,r[4]=Na.x,r[8]=Cn.x,r[1]=or.y,r[5]=Na.y,r[9]=Cn.y,r[2]=or.z,r[6]=Na.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],y=n[11],C=n[15],L=r[0],P=r[4],N=r[8],S=r[12],A=r[1],k=r[5],G=r[9],V=r[13],$=r[2],Q=r[6],Y=r[10],ee=r[14],j=r[3],he=r[7],Se=r[11],De=r[15];return s[0]=o*L+a*A+l*$+c*j,s[4]=o*P+a*k+l*Q+c*he,s[8]=o*N+a*G+l*Y+c*Se,s[12]=o*S+a*V+l*ee+c*De,s[1]=u*L+h*A+f*$+d*j,s[5]=u*P+h*k+f*Q+d*he,s[9]=u*N+h*G+f*Y+d*Se,s[13]=u*S+h*V+f*ee+d*De,s[2]=g*L+_*A+m*$+p*j,s[6]=g*P+_*k+m*Q+p*he,s[10]=g*N+_*G+m*Y+p*Se,s[14]=g*S+_*V+m*ee+p*De,s[3]=E*L+T*A+y*$+C*j,s[7]=E*P+T*k+y*Q+C*he,s[11]=E*N+T*G+y*Y+C*Se,s[15]=E*S+T*V+y*ee+C*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,T=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,L=t*E+n*T+r*y+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=E*P,e[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*P,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*P,e[4]=T*P,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*P,e[8]=y*P,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*P,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*P,e[12]=C*P,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*m+t*h*m)*P,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,E=l*c,T=l*u,y=l*h,C=n.x,L=n.y,P=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+y)*C,r[2]=(g-T)*C,r[3]=0,r[4]=(d-y)*L,r[5]=(1-(f+p))*L,r[6]=(m+E)*L,r[7]=0,r[8]=(g+T)*P,r[9]=(m-E)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ji){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(a===ji)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Rl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ji){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let g,_;if(a===ji)g=(o+s)*h,_=-2*h;else if(a===Rl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ys=new W,jn=new $e,Oy=new W(0,0,0),Fy=new W(1,1,1),or=new W,Na=new W,Cn=new W,yd=new $e,Md=new ii;class Ti{constructor(e=0,t=0,n=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let By=0;const Sd=new W,Ms=new ii,Ni=new $e,Ua=new W,bo=new W,ky=new W,zy=new ii,Td=new W(1,0,0),Ed=new W(0,1,0),bd=new W(0,0,1),Ad={type:"added"},Hy={type:"removed"},Ss={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Dt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new W,t=new Ti,n=new ii,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new nt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(bo,Ua,this.up):Ni.lookAt(Ua,bo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new W(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new W,Ui=new W,Sc=new W,Oi=new W,Ts=new W,Es=new W,wd=new W,Tc=new W,Ec=new W,bc=new W,Ac=new ht,wc=new ht,Rc=new ht;class Qn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kn.subVectors(r,t),Ui.subVectors(n,t),Sc.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ui),l=Kn.dot(Sc),c=Ui.dot(Ui),u=Ui.dot(Sc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ac.setScalar(0),wc.setScalar(0),Rc.setScalar(0),Ac.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ac,s.x),o.addScaledVector(wc,s.y),o.addScaledVector(Rc,s.z),o}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),Ui.subVectors(e,t),Kn.cross(Ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Kn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,n),Es.subVectors(s,n),Tc.subVectors(e,n);const l=Ts.dot(Tc),c=Es.dot(Tc);if(l<=0&&c<=0)return t.copy(n);Ec.subVectors(e,r);const u=Ts.dot(Ec),h=Es.dot(Ec);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ts,o);bc.subVectors(e,s);const d=Ts.dot(bc),g=Es.dot(bc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Es,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return wd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(wd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ts,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Zh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cc(o,s,e+1/3),this.g=Cc(o,s,e),this.b=Cc(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=M_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ut.fromWorkingColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){ut.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,r=nn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Oa);const n=Yo(ar.h,Oa.h,t),r=Yo(ar.s,Oa.s,t),s=Yo(ar.l,Oa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ke;Ke.NAMES=M_;let Vy=0;class xi extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Vs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=gu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_u&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zr extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yi=Gy();function Gy(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Wy(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),Yi.floatView[0]=i;const e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function Xy(i){const e=i>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(i&1023)]+Yi.exponentTable[e],Yi.floatView[0]}class Rd{static toHalfFloat(e){return Wy(e)}static fromHalfFloat(e){return Xy(e)}}const Ot=new W,Fa=new Ze;let Yy=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class S_ extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class T_ extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zi extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qy=0;const Hn=new $e,Pc=new Dt,bs=new W,Pn=new bi,Ao=new bi,jt=new W;class ri extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?T_:S_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Pn.min,Ao.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,Ao.max),Pn.expandByPoint(jt)):(Pn.expandByPoint(Ao.min),Pn.expandByPoint(Ao.max))}Pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),jt.add(bs)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new W,l[N]=new W;const c=new W,u=new W,h=new W,f=new Ze,d=new Ze,g=new Ze,_=new W,m=new W;function p(N,S,A){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,A),f.fromBufferAttribute(s,N),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,A),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const k=1/(d.x*g.y-g.x*d.y);isFinite(k)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(k),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(k),a[N].add(_),a[S].add(_),a[A].add(_),l[N].add(m),l[S].add(m),l[A].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,S=E.length;N<S;++N){const A=E[N],k=A.start,G=A.count;for(let V=k,$=k+G;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new W,y=new W,C=new W,L=new W;function P(N){C.fromBufferAttribute(r,N),L.copy(C);const S=a[N];T.copy(S),T.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(L,S);const k=y.dot(l[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,k)}for(let N=0,S=E.length;N<S;++N){const A=E[N],k=A.start,G=A.count;for(let V=k,$=k+G;V<$;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new $e,Fr=new fo,Ba=new Ai,Pd=new W,ka=new W,za=new W,Ha=new W,Dc=new W,Va=new W,Dd=new W,Ga=new W;class Mn extends Dt{constructor(e=new ri,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Dc.fromBufferAttribute(h,e),o?Va.addScaledVector(Dc,u):Va.addScaledVector(Dc.sub(t),u))}t.add(Va)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Ba.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ba,Pd)===null||Fr.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Cd.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,C=T;y<C;y+=3){const L=a.getX(y),P=a.getX(y+1),N=a.getX(y+2);r=Wa(this,p,e,n,c,u,h,L,P,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=Wa(this,o,e,n,c,u,h,E,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,C=T;y<C;y+=3){const L=y,P=y+1,N=y+2;r=Wa(this,p,e,n,c,u,h,L,P,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,y=m+2;r=Wa(this,o,e,n,c,u,h,E,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jy(i,e,t,n,r,s,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Si,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:i}}function Wa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ka),i.getVertexPosition(l,za),i.getVertexPosition(c,Ha);const u=jy(i,e,t,n,ka,za,Ha,Dd);if(u){const h=new W;Qn.getBarycoord(Dd,ka,za,Ha,h),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,l,c,h,new Ze)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,l,c,h,new Ze)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Qn.getNormal(ka,za,Ha,f.normal),u.face=f,u.barycoord=h}return u}class ga extends ri{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zi(c,3)),this.setAttribute("normal",new Zi(u,3)),this.setAttribute("uv",new Zi(h,2));function g(_,m,p,E,T,y,C,L,P,N,S){const A=y/P,k=C/N,G=y/2,V=C/2,$=L/2,Q=P+1,Y=N+1;let ee=0,j=0;const he=new W;for(let Se=0;Se<Y;Se++){const De=Se*k-V;for(let Le=0;Le<Q;Le++){const je=Le*A-G;he[_]=je*E,he[m]=De*T,he[p]=$,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=L>0?1:-1,u.push(he.x,he.y,he.z),h.push(Le/P),h.push(1-Se/N),ee+=1}}for(let Se=0;Se<N;Se++)for(let De=0;De<P;De++){const Le=f+De+Q*Se,je=f+De+Q*(Se+1),ce=f+(De+1)+Q*(Se+1),Me=f+(De+1)+Q*Se;l.push(Le,je,Me),l.push(je,ce,Me),j+=6}a.addGroup(d,j,S),d+=j,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=no(i[t]);for(const r in n)e[r]=n[r]}return e}function Ky(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function E_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const eh={clone:no,merge:fn};var Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=$y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class b_ extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new W,Id=new Ze,Ld=new Ze;class sn extends b_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Ld),t.subVectors(Ld,Id)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,ws=1;class Jy extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(As,ws,e,t);r.layers=this.layers,this.add(r);const s=new sn(As,ws,e,t);s.layers=this.layers,this.add(s);const o=new sn(As,ws,e,t);o.layers=this.layers,this.add(o);const a=new sn(As,ws,e,t);a.layers=this.layers,this.add(a);const l=new sn(As,ws,e,t);l.layers=this.layers,this.add(l);const c=new sn(As,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class A_ extends Vt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qy extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new A_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ga(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:vr});s.uniforms.tEquirect.value=t;const o=new Mn(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Kt),new Jy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class $r extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eM={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $r;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tM extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new W;class Qh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nd=new W,Ud=new ht,Od=new ht,iM=new W,Fd=new $e,Xa=new W,Lc=new Ai,Bd=new $e,Nc=new fo;class rM extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cd,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingSphere.expandByPoint(Xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(r),e.ray.intersectsSphere(Lc)!==!1&&(Bd.copy(r).invert(),Nc.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ud.fromBufferAttribute(r.attributes.skinIndex,e),Od.fromBufferAttribute(r.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Od.getComponent(s);if(o!==0){const a=Ud.getComponent(s);Fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iM.copy(Nd).applyMatrix4(Fd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class w_ extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ef extends Vt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=gn,u=gn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new $e,sM=new $e;class tf{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sM;kd.multiplyMatrices(a,t[s]),kd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new tf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ef(t,e,e,On,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new w_),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class th extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new $e,zd=new $e,Ya=[],Hd=new bi,oM=new $e,wo=new Mn,Ro=new Ai;class aM extends Mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,oM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Hd.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Hd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Ro.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rs),zd.multiplyMatrices(n,Rs),wo.matrixWorld=zd,wo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=s,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ef(new Float32Array(r*this.count),r,this.count,ql,yn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uc=new W,lM=new W,cM=new nt;class Vi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Uc.subVectors(n,t).cross(lM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cM.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Ai,qa=new W;class nf{constructor(e=new Vi,t=new Vi,n=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],T=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,m-d,y-p).normalize(),n[1].setComponents(l+s,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+E).normalize(),n[3].setComponents(l-o,f-u,m-g,y-E).normalize(),n[4].setComponents(l-a,f-h,m-_,y-T).normalize(),t===ji)n[5].setComponents(l+a,f+h,m+_,y+T).normalize();else if(t===Rl)n[5].setComponents(a,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R_ extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new W,Pl=new W,Vd=new $e,Co=new fo,ja=new Ai,Oc=new W,Gd=new W;class rf extends Dt{constructor(e=new ri,t=new R_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Cl.fromBufferAttribute(t,r-1),Pl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new Zi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,e.ray.intersectsSphere(ja)===!1)return;Vd.copy(r).invert(),Co.copy(e.ray).applyMatrix4(Vd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),T=Ka(this,e,Co,l,p,E,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ka(this,e,Co,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ka(this,e,Co,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ka(this,e,Co,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ka(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Cl.fromBufferAttribute(a,r),Pl.fromBufferAttribute(a,s),t.distanceSqToSegment(Cl,Pl,Oc,Gd)>n)return;Oc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:Gd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Wd=new W,Xd=new W;class uM extends rf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Wd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wd.distanceTo(Xd);e.setAttribute("lineDistance",new Zi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hM extends rf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sf extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yd=new $e,nh=new fo,Za=new Ai,$a=new W;class C_ extends Dt{constructor(e=new ri,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Yd.copy(r).invert(),nh.copy(e.ray).applyMatrix4(Yd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);$a.fromBufferAttribute(h,m),qd($a,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)$a.fromBufferAttribute(h,g),qd($a,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qd(i,e,t,n,r,s,o){const a=nh.distanceSqToPoint(i);if(a<t){const l=new W;nh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fM extends Vt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class P_ extends Vt{constructor(e,t,n,r,s,o,a,l,c,u=Gs){if(u!==Gs&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gs&&(n=os),n===void 0&&u===eo&&(n=Qs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xa extends ri{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let T=0;T<c;T++){const y=T*h-s;g.push(y,-E,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const T=E+c*p,y=E+c*(p+1),C=E+1+c*(p+1),L=E+1+c*p;d.push(T,y,L),d.push(y,C,L)}this.setIndex(d),this.setAttribute("position",new Zi(g,3)),this.setAttribute("normal",new Zi(_,3)),this.setAttribute("uv",new Zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class of extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=__,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends of{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dM extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pM extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ja(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _M(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function jd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function D_(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class va{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gM extends va{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ud,endingEnd:ud}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:s=e,a=2*t-n;break;case fd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hd:o=e,l=2*n-t;break;case fd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+E*o[c+C]+T*o[l+C]+y*o[h+C];return s}}class xM extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class vM extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ja(t,this.TimeBufferType),this.values=Ja(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ja(e.times,Array),values:Ja(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&mM(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=oa;class po extends Ri{constructor(e,t,n){super(e,t,n)}}po.prototype.ValueTypeName="bool";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=sa;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class I_ extends Ri{}I_.prototype.ValueTypeName="color";class io extends Ri{}io.prototype.ValueTypeName="number";class yM extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ii.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ro extends Ri{InterpolantFactoryMethodLinear(e){return new yM(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends Ri{constructor(e,t,n){super(e,t,n)}}mo.prototype.ValueTypeName="string";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=sa;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends Ri{}so.prototype.ValueTypeName="vector";class MM{constructor(e="",t=-1,n=[],r=$v){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(TM(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ri.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=_M(l);l=jd(l,1,u),c=jd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new io(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];D_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const T=f[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}r.push(new io(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(so,d+".position",f,"pos",r),n(ro,d+".quaternion",f,"rot",r),n(so,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function SM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return io;case"vector":case"vector2":case"vector3":case"vector4":return so;case"color":return I_;case"quaternion":return ro;case"bool":case"boolean":return po;case"string":return mo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function TM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SM(i.type);if(i.times===void 0){const t=[],n=[];D_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class EM{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const bM=new EM;class us{constructor(e){this.manager=e!==void 0?e:bM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class AM extends Error{constructor(e,t){super(e),this.response=t}}class af extends us{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:r});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:T,value:y})=>{if(T)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let L=0,P=u.length;L<P;L++){const N=u[L];N.onProgress&&N.onProgress(C)}p.enqueue(y),E()}},T=>{p.error(T)})}}});return new Response(m)}else throw new AM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{pr.add(e,c);const u=Fi[e];delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wM extends us{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=aa("img");function l(){u(),pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class RM extends us{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new ef,a=new af(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:pi,o.wrapT=c.wrapT!==void 0?c.wrapT:pi,o.magFilter=c.magFilter!==void 0?c.magFilter:Kt,o.minFilter=c.minFilter!==void 0?c.minFilter:Kt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=mi),c.mipmapCount===1&&(o.minFilter=Kt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class L_ extends us{constructor(e){super(e)}load(e,t,n,r){const s=new Vt,o=new wM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class lf extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fc=new $e,Kd=new W,Zd=new W;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nf,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CM extends cf{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=to*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PM extends lf{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new CM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $d=new $e,Po=new W,Bc=new W;class DM extends cf{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),n.position.copy(Po),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),r.makeTranslation(-Po.x,-Po.y,-Po.z),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}}class IM extends lf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new DM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uf extends b_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class LM extends cf{constructor(){super(new uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NM extends lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new LM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class UM extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),pr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});pr.add(e,l),s.manager.itemStart(e)}}class OM extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const hf="\\[\\]\\.:\\/",FM=new RegExp("["+hf+"]","g"),ff="[^"+hf+"]",BM="[^"+hf.replace("\\.","")+"]",kM=/((?:WC+[\/:])*)/.source.replace("WC",ff),zM=/(WCOD+)?/.source.replace("WCOD",BM),HM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),VM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),GM=new RegExp("^"+kM+zM+HM+VM+"$"),WM=["material","materials","bones","map"];class XM{constructor(e,t,n){const r=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FM,"")}static parseTrackName(e){const t=GM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);WM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=XM;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Jd=new $e;class YM{constructor(e,t,n=0,r=1/0){this.ray=new fo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jd),this}intersectObject(e,t=!0,n=[]){return ih(e,this,n,t),n.sort(Qd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ih(e[r],this,n,t);return n.sort(Qd),n}}function Qd(i,e){return i.distance-e.distance}function ih(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)ih(s[o],e,t,!0)}}class ep{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qM extends cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function tp(i,e,t,n){const r=jM(n);switch(t){case c_:return i*e;case h_:return i*e;case f_:return i*e*2;case ql:return i*e/r.components*r.byteLength;case qh:return i*e/r.components*r.byteLength;case d_:return i*e*2/r.components*r.byteLength;case jh:return i*e*2/r.components*r.byteLength;case u_:return i*e*3/r.components*r.byteLength;case On:return i*e*4/r.components*r.byteLength;case Kh:return i*e*4/r.components*r.byteLength;case cl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wu:case Cu:return Math.max(i,16)*Math.max(e,8)/4;case Au:case Ru:return Math.max(i,8)*Math.max(e,8)/2;case Pu:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dl:case qu:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case p_:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zu:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jM(i){switch(i){case $i:case o_:return{byteLength:1,components:1};case ra:case a_:case qi:return{byteLength:2,components:1};case Xh:case Yh:return{byteLength:2,components:4};case os:case Wh:case yn:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function KM(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",wS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$S=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ST=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ET=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:ZM,alphahash_pars_fragment:$M,alphamap_fragment:JM,alphamap_pars_fragment:QM,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:rS,batching_vertex:sS,begin_vertex:oS,beginnormal_vertex:aS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:fS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:_S,color_pars_vertex:gS,color_vertex:xS,common:vS,cube_uv_reflection_fragment:yS,defaultnormal_vertex:MS,displacementmap_pars_vertex:SS,displacementmap_vertex:TS,emissivemap_fragment:ES,emissivemap_pars_fragment:bS,colorspace_fragment:AS,colorspace_pars_fragment:wS,envmap_fragment:RS,envmap_common_pars_fragment:CS,envmap_pars_fragment:PS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:VS,envmap_vertex:IS,fog_vertex:LS,fog_pars_vertex:NS,fog_fragment:US,fog_pars_fragment:OS,gradientmap_pars_fragment:FS,lightmap_pars_fragment:BS,lights_lambert_fragment:kS,lights_lambert_pars_fragment:zS,lights_pars_begin:HS,lights_toon_fragment:GS,lights_toon_pars_fragment:WS,lights_phong_fragment:XS,lights_phong_pars_fragment:YS,lights_physical_fragment:qS,lights_physical_pars_fragment:jS,lights_fragment_begin:KS,lights_fragment_maps:ZS,lights_fragment_end:$S,logdepthbuf_fragment:JS,logdepthbuf_pars_fragment:QS,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:rT,map_particle_pars_fragment:sT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:aT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:uT,morphtarget_pars_vertex:hT,morphtarget_vertex:fT,normal_fragment_begin:dT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:_T,normal_vertex:gT,normalmap_pars_fragment:xT,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:yT,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ST,opaque_fragment:TT,packing:ET,premultiplied_alpha_fragment:bT,project_vertex:AT,dithering_fragment:wT,dithering_pars_fragment:RT,roughnessmap_fragment:CT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:DT,shadowmap_pars_vertex:IT,shadowmap_vertex:LT,shadowmask_pars_fragment:NT,skinbase_vertex:UT,skinning_pars_vertex:OT,skinning_vertex:FT,skinnormal_vertex:BT,specularmap_fragment:kT,specularmap_pars_fragment:zT,tonemapping_fragment:HT,tonemapping_pars_fragment:VT,transmission_fragment:GT,transmission_pars_fragment:WT,uv_pars_fragment:XT,uv_pars_vertex:YT,uv_vertex:qT,worldpos_vertex:jT,background_vert:KT,background_frag:ZT,backgroundCube_vert:$T,backgroundCube_frag:JT,cube_vert:QT,cube_frag:eE,depth_vert:tE,depth_frag:nE,distanceRGBA_vert:iE,distanceRGBA_frag:rE,equirect_vert:sE,equirect_frag:oE,linedashed_vert:aE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:hE,meshlambert_frag:fE,meshmatcap_vert:dE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:_E,meshphong_vert:gE,meshphong_frag:xE,meshphysical_vert:vE,meshphysical_frag:yE,meshtoon_vert:ME,meshtoon_frag:SE,points_vert:TE,points_frag:EE,shadow_vert:bE,shadow_frag:AE,sprite_vert:wE,sprite_frag:RE},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ui={basic:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:fn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:fn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:fn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:fn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:fn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:fn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:fn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:fn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:fn([Ce.common,Ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:fn([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ui.physical={uniforms:fn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Qa={r:0,b:0,g:0},kr=new Ti,CE=new $e;function PE(i,e,t,n,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const C=g(T);C===null?p(a,l):C&&C.isColor&&(p(C,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===Yl)?(u===void 0&&(u=new Mn(new ga(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:no(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(y.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(kr)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==yt,(h!==C||f!==C.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mn(new xa(2,2),new Ji({name:"BackgroundMaterial",uniforms:no(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(Qa,E_(i)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,y,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m,dispose:E}}function DE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(A,k,G,V,$){let Q=!1;const Y=h(V,G,k);s!==Y&&(s=Y,c(s.object)),Q=d(A,V,G,$),Q&&g(A,V,G,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(A,k,G,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function u(A){return i.deleteVertexArray(A)}function h(A,k,G){const V=G.wireframe===!0;let $=n[A.id];$===void 0&&($={},n[A.id]=$);let Q=$[k.id];Q===void 0&&(Q={},$[k.id]=Q);let Y=Q[V];return Y===void 0&&(Y=f(l()),Q[V]=Y),Y}function f(A){const k=[],G=[],V=[];for(let $=0;$<t;$++)k[$]=0,G[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:V,object:A,attributes:{},index:null}}function d(A,k,G,V){const $=s.attributes,Q=k.attributes;let Y=0;const ee=G.getAttributes();for(const j in ee)if(ee[j].location>=0){const Se=$[j];let De=Q[j];if(De===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(De=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(De=A.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function g(A,k,G,V){const $={},Q=k.attributes;let Y=0;const ee=G.getAttributes();for(const j in ee)if(ee[j].location>=0){let Se=Q[j];Se===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),$[j]=De,Y++}s.attributes=$,s.attributesNum=Y,s.index=V}function _(){const A=s.newAttributes;for(let k=0,G=A.length;k<G;k++)A[k]=0}function m(A){p(A,0)}function p(A,k){const G=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;G[A]=1,V[A]===0&&(i.enableVertexAttribArray(A),V[A]=1),$[A]!==k&&(i.vertexAttribDivisor(A,k),$[A]=k)}function E(){const A=s.newAttributes,k=s.enabledAttributes;for(let G=0,V=k.length;G<V;G++)k[G]!==A[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function T(A,k,G,V,$,Q,Y){Y===!0?i.vertexAttribIPointer(A,k,G,$,Q):i.vertexAttribPointer(A,k,G,V,$,Q)}function y(A,k,G,V){_();const $=V.attributes,Q=G.getAttributes(),Y=k.defaultAttributeValues;for(const ee in Q){const j=Q[ee];if(j.location>=0){let he=$[ee];if(he===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(he=A.instanceColor)),he!==void 0){const Se=he.normalized,De=he.itemSize,Le=e.get(he);if(Le===void 0)continue;const je=Le.buffer,ce=Le.type,Me=Le.bytesPerElement,Te=ce===i.INT||ce===i.UNSIGNED_INT||he.gpuType===Wh;if(he.isInterleavedBufferAttribute){const be=he.data,ke=be.stride,ot=he.offset;if(be.isInstancedInterleavedBuffer){for(let Ve=0;Ve<j.locationSize;Ve++)p(j.location+Ve,be.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)m(j.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ve=0;Ve<j.locationSize;Ve++)T(j.location+Ve,De/j.locationSize,ce,Se,ke*Me,(ot+De/j.locationSize*Ve)*Me,Te)}else{if(he.isInstancedBufferAttribute){for(let be=0;be<j.locationSize;be++)p(j.location+be,he.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<j.locationSize;be++)m(j.location+be);i.bindBuffer(i.ARRAY_BUFFER,je);for(let be=0;be<j.locationSize;be++)T(j.location+be,De/j.locationSize,ce,Se,De*Me,De/j.locationSize*be*Me,Te)}}else if(Y!==void 0){const Se=Y[ee];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(j.location,Se);break;case 3:i.vertexAttrib3fv(j.location,Se);break;case 4:i.vertexAttrib4fv(j.location,Se);break;default:i.vertexAttrib1fv(j.location,Se)}}}}E()}function C(){N();for(const A in n){const k=n[A];for(const G in k){const V=k[G];for(const $ in V)u(V[$].object),delete V[$];delete k[G]}delete n[A]}}function L(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const G in k){const V=k[G];for(const $ in V)u(V[$].object),delete V[$];delete k[G]}delete n[A.id]}function P(A){for(const k in n){const G=n[k];if(G[A.id]===void 0)continue;const V=G[A.id];for(const $ in V)u(V[$].object),delete V[$];delete G[A.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function IE(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==On&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$i&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yn&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:C,maxSamples:L}}function NE(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Vi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let y=p.clippingState||null;l.value=y,y=u(g,f,T,d);for(let C=0;C!==T;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==_;++T,y+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function UE(i){let e=new WeakMap;function t(o,a){return a===bl?o.mapping=$s:a===bu&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===bu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qy(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ls=4,np=[.125,.215,.35,.446,.526,.582],Kr=20,kc=new uf,ip=new Ke;let zc=null,Hc=0,Vc=0,Gc=!1;const Yr=(1+Math.sqrt(5))/2,Cs=1/Yr,rp=[new W(-Yr,Cs,0),new W(Yr,Cs,0),new W(-Cs,0,Yr),new W(Cs,0,Yr),new W(0,Yr,-Cs),new W(0,Yr,Cs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],OE=new W;class sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=OE}=s;zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:qi,format:On,colorSpace:en,depthBuffer:!1},r=op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FE(s)),this._blurMaterial=BE(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,kc)}_sceneToCubeUV(e,t,n,r,s){const l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ip),h.toneMapping=yr,h.autoClear=!1;const g=new Zr({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Mn(new ga,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ip),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const y=this._cubeSize;el(r,T*y,E>2?y:0,y,y),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===$s||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,kc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rp[(r-s-1)%rp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Kr;m>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const p=[];let E=0;for(let P=0;P<Kr;++P){const N=P/_,S=Math.exp(-N*N/2);p.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const y=this._sizeLods[r],C=3*y*(r>T-Ls?r-T+Ls:0),L=4*(this._cubeSize-y);el(t,C,L,3*y,2*y),l.setRenderTarget(t),l.render(h,kc)}}function FE(i){const e=[],t=[],n=[];let r=i;const s=i-Ls+1+np.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ls?l=np[o-i+Ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),T=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,N=L>2?0:-1,S=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(S,_*g*L),T.set(f,m*g*L);const A=[L,L,L,L,L,L];y.set(A,p*g*L)}const C=new ri;C.setAttribute("position",new Jt(E,_)),C.setAttribute("uv",new Jt(T,m)),C.setAttribute("faceIndex",new Jt(y,p)),e.push(C),r>Ls&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function op(i,e,t){const n=new br(i,e,t);return n.texture.mapping=Yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function BE(i,e,t){const n=new Float32Array(Kr),r=new W(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function ap(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lp(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bl||l===bu,u=l===$s||l===Js;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new sp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new sp(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function HE(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let T=0,y=E.length;T<y;T+=3){const C=E[T+0],L=E[T+1],P=E[T+2];f.push(C,L,L,P,P,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const C=T+0,L=T+1,P=T+2;f.push(C,L,L,P,P,C)}}else return;const m=new(v_(f)?T_:S_)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function VE(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function GE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function WE(i,e,t){const n=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let A=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var d=A;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*L*4*h),N=new y_(P,C,L,h);N.type=yn,N.needsUpdate=!0;const S=y*4;for(let k=0;k<h;k++){const G=p[k],V=E[k],$=T[k],Q=C*L*4*k;for(let Y=0;Y<G.count;Y++){const ee=Y*S;g===!0&&(r.fromBufferAttribute(G,Y),P[Q+ee+0]=r.x,P[Q+ee+1]=r.y,P[Q+ee+2]=r.z,P[Q+ee+3]=0),_===!0&&(r.fromBufferAttribute(V,Y),P[Q+ee+4]=r.x,P[Q+ee+5]=r.y,P[Q+ee+6]=r.z,P[Q+ee+7]=0),m===!0&&(r.fromBufferAttribute($,Y),P[Q+ee+8]=r.x,P[Q+ee+9]=r.y,P[Q+ee+10]=r.z,P[Q+ee+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new Ze(C,L)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function XE(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const U_=new Vt,cp=new P_(1,1),O_=new y_,F_=new Ny,B_=new A_,up=[],hp=[],fp=new Float32Array(16),dp=new Float32Array(9),pp=new Float32Array(4);function _o(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=up[r];if(s===void 0&&(s=new Float32Array(r),up[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jl(i,e){let t=hp[e];t===void 0&&(t=new Int32Array(e),hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function YE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function jE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function KE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function ZE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),Xt(t,n)}}function $E(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),Xt(t,n)}}function JE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;fp.set(n),i.uniformMatrix4fv(this.addr,!1,fp),Xt(t,n)}}function QE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function ib(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function ab(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cp.compareFunction=g_,s=cp):s=U_,t.setTexture2D(e||s,r)}function lb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||F_,r)}function cb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||B_,r)}function ub(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||O_,r)}function hb(i){switch(i){case 5126:return YE;case 35664:return qE;case 35665:return jE;case 35666:return KE;case 35674:return ZE;case 35675:return $E;case 35676:return JE;case 5124:case 35670:return QE;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function fb(i,e){i.uniform1fv(this.addr,e)}function db(i,e){const t=_o(e,this.size,2);i.uniform2fv(this.addr,t)}function pb(i,e){const t=_o(e,this.size,3);i.uniform3fv(this.addr,t)}function mb(i,e){const t=_o(e,this.size,4);i.uniform4fv(this.addr,t)}function _b(i,e){const t=_o(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gb(i,e){const t=_o(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xb(i,e){const t=_o(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vb(i,e){i.uniform1iv(this.addr,e)}function yb(i,e){i.uniform2iv(this.addr,e)}function Mb(i,e){i.uniform3iv(this.addr,e)}function Sb(i,e){i.uniform4iv(this.addr,e)}function Tb(i,e){i.uniform1uiv(this.addr,e)}function Eb(i,e){i.uniform2uiv(this.addr,e)}function bb(i,e){i.uniform3uiv(this.addr,e)}function Ab(i,e){i.uniform4uiv(this.addr,e)}function wb(i,e,t){const n=this.cache,r=e.length,s=jl(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||U_,s[o])}function Rb(i,e,t){const n=this.cache,r=e.length,s=jl(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||F_,s[o])}function Cb(i,e,t){const n=this.cache,r=e.length,s=jl(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||B_,s[o])}function Pb(i,e,t){const n=this.cache,r=e.length,s=jl(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||O_,s[o])}function Db(i){switch(i){case 5126:return fb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return _b;case 35675:return gb;case 35676:return xb;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return Tb;case 36294:return Eb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}class Ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hb(t.type)}}class Lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}}class Nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function mp(i,e){i.seq.push(e),i.map[e.id]=e}function Ub(i,e,t){const n=i.name,r=n.length;for(Wc.lastIndex=0;;){const s=Wc.exec(n),o=Wc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mp(t,c===void 0?new Ib(a,i,e):new Lb(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Nb(a),mp(t,h)),t=h}}}class pl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ub(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function _p(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ob=37297;let Fb=0;function Bb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gp=new nt;function kb(i){ut._getMatrix(gp,ut.workingColorSpace,i);const e=`mat3( ${gp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case wl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bb(i.getShaderSource(e),o)}else return r}function zb(i,e){const t=kb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hb(i,e){let t;switch(e){case Gv:t="Linear";break;case Wv:t="Reinhard";break;case Xv:t="Cineon";break;case Yv:t="ACESFilmic";break;case jv:t="AgX";break;case Kv:t="Neutral";break;case qv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tl=new W;function Vb(){ut.getLuminanceCoefficients(tl);const i=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function Wb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Uo(i){return i!==""}function vp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace(Yb,jb)}const qb=new Map;function jb(i,e){let t=it[e];if(t===void 0){const n=qb.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(Kb,Zb)}function Zb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $b(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Js:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function eA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case i_:e="ENVMAP_BLENDING_MULTIPLY";break;case Hv:e="ENVMAP_BLENDING_MIX";break;case Vv:e="ENVMAP_BLENDING_ADD";break}return e}function tA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nA(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$b(t),c=Jb(t),u=Qb(t),h=eA(t),f=tA(t),d=Gb(t),g=Wb(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Uo).join(`
`),p.length>0&&(p+=`
`)):(m=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),p=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?it.tonemapping_pars_fragment:"",t.toneMapping!==yr?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,zb("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),o=rh(o),o=vp(o,t),o=yp(o,t),a=rh(a),a=vp(a,t),a=yp(a,t),o=Mp(o),a=Mp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+o,y=E+p+a,C=_p(r,r.VERTEX_SHADER,T),L=_p(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(k){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(L).trim();let Q=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,L);else{const ee=xp(r,C,"vertex"),j=xp(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+ee+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||$==="")&&(Y=!1);Y&&(k.diagnostics={runnable:Q,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(C),r.deleteShader(L),N=new pl(r,_),S=Xb(r,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,Ob)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=L,this}let iA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sA(e),t.set(e,n)),n}}class sA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function oA(i,e,t,n,r,s,o){const a=new Jh,l=new rA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,k,G,V){const $=G.fog,Q=V.geometry,Y=S.isMeshStandardMaterial?G.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),j=ee&&ee.mapping===Yl?ee.image.height:null,he=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,De=Se!==void 0?Se.length:0;let Le=0;Q.morphAttributes.position!==void 0&&(Le=1),Q.morphAttributes.normal!==void 0&&(Le=2),Q.morphAttributes.color!==void 0&&(Le=3);let je,ce,Me,Te;if(he){const dt=ui[he];je=dt.vertexShader,ce=dt.fragmentShader}else je=S.vertexShader,ce=S.fragmentShader,l.update(S),Me=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const be=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ot=V.isInstancedMesh===!0,Ve=V.isBatchedMesh===!0,vt=!!S.map,O=!!S.matcap,z=!!ee,w=!!S.aoMap,pe=!!S.lightMap,se=!!S.bumpMap,le=!!S.normalMap,ue=!!S.displacementMap,_e=!!S.emissiveMap,re=!!S.metalnessMap,b=!!S.roughnessMap,M=S.anisotropy>0,H=S.clearcoat>0,J=S.dispersion>0,ne=S.iridescence>0,te=S.sheen>0,Ae=S.transmission>0,xe=M&&!!S.anisotropyMap,we=H&&!!S.clearcoatMap,qe=H&&!!S.clearcoatNormalMap,ye=H&&!!S.clearcoatRoughnessMap,Pe=ne&&!!S.iridescenceMap,Ue=ne&&!!S.iridescenceThicknessMap,ze=te&&!!S.sheenColorMap,Re=te&&!!S.sheenRoughnessMap,We=!!S.specularMap,He=!!S.specularColorMap,Je=!!S.specularIntensityMap,q=Ae&&!!S.transmissionMap,ie=Ae&&!!S.thicknessMap,ae=!!S.gradientMap,me=!!S.alphaMap,Ne=S.alphaTest>0,Ie=!!S.alphaHash,Qe=!!S.extensions;let wt=yr;S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(wt=i.toneMapping);const Yt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:ce,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&V._colorsTexture!==null,instancing:ot,instancingColor:ot&&V.instanceColor!==null,instancingMorph:ot&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:en,alphaToCoverage:!!S.alphaToCoverage,map:vt,matcap:O,envMap:z,envMapMode:z&&ee.mapping,envMapCubeUVHeight:j,aoMap:w,lightMap:pe,bumpMap:se,normalMap:le,displacementMap:f&&ue,emissiveMap:_e,normalMapObjectSpace:le&&S.normalMapType===ty,normalMapTangentSpace:le&&S.normalMapType===__,metalnessMap:re,roughnessMap:b,anisotropy:M,anisotropyMap:xe,clearcoat:H,clearcoatMap:we,clearcoatNormalMap:qe,clearcoatRoughnessMap:ye,dispersion:J,iridescence:ne,iridescenceMap:Pe,iridescenceThicknessMap:Ue,sheen:te,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:We,specularColorMap:He,specularIntensityMap:Je,transmission:Ae,transmissionMap:q,thicknessMap:ie,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Vs&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Ne,alphaHash:Ie,combine:S.combine,mapUv:vt&&_(S.map.channel),aoMapUv:w&&_(S.aoMap.channel),lightMapUv:pe&&_(S.lightMap.channel),bumpMapUv:se&&_(S.bumpMap.channel),normalMapUv:le&&_(S.normalMap.channel),displacementMapUv:ue&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:re&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:xe&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:We&&_(S.specularMap.channel),specularColorMapUv:He&&_(S.specularColorMap.channel),specularIntensityMapUv:Je&&_(S.specularIntensityMap.channel),transmissionMapUv:q&&_(S.transmissionMap.channel),thicknessMapUv:ie&&_(S.thicknessMap.channel),alphaMapUv:me&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(le||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(vt||me),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:vt&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(E(A,S),T(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function E(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function T(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const A=g[S.type];let k;if(A){const G=ui[A];k=eh.clone(G.uniforms)}else k=S.uniforms;return k}function C(S,A){let k;for(let G=0,V=u.length;G<V;G++){const $=u[G];if($.cacheKey===A){k=$,++k.usedTimes;break}}return k===void 0&&(k=new nA(i,A,S,s),u.push(k)),k}function L(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:N}}function aA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function lA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||lA),n.length>1&&n.sort(f||Tp),r.length>1&&r.sort(f||Tp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ep,i.set(n,[o])):r>=s.length?(o=new Ep,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ke};break;case"SpotLight":t={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function hA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fA=0;function dA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pA(i){const e=new uA,t=hA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,T=0,y=0,C=0,L=0,P=0;c.sort(dA);for(let S=0,A=c.length;S<A;S++){const k=c[S],G=k.color,V=k.intensity,$=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=G.r*V,h+=G.g*V,f+=G.b*V;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(k.sh.coefficients[Y],V);P++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ee=k.shadow,j=t.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=k.shadow.matrix,E++}n.directional[d]=Y,d++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(G).multiplyScalar(V),Y.distance=$,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,n.spot[_]=Y;const ee=k.shadow;if(k.map&&(n.spotLightMap[C]=k.map,C++,ee.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[_]=ee.matrix,k.castShadow){const j=t.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=Q,y++}_++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(G).multiplyScalar(V),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=Y,m++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const ee=k.shadow,j=t.get(k);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=k.shadow.matrix,T++}n.point[g]=Y,g++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(V),Y.groundColor.copy(k.groundColor).multiplyScalar(V),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==y||N.numSpotMaps!==C||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=y,N.numSpotMaps=C,N.numLightProbes=P,n.version=fA++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function bp(i){const e=new pA(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mA(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bp(i),e.set(r,[a])):s>=o.length?(a=new bp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(i,e,t){let n=new nf;const r=new Ze,s=new Ze,o=new ht,a=new dM({depthPacking:ey}),l=new pM,c={},u=t.maxTextureSize,h={[Si]:Sn,[Sn]:Si,[hi]:hi},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_A,fragmentShader:gA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let p=this.type;this.render=function(L,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=i.getRenderTarget(),A=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(vr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=p!==Bi&&this.type===Bi,$=p===Bi&&this.type!==Bi;for(let Q=0,Y=L.length;Q<Y;Q++){const ee=L[Q],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const he=j.getFrameExtents();if(r.multiply(he),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,j.mapSize.y=s.y)),j.map===null||V===!0||$===!0){const De=this.type!==Bi?{minFilter:gn,magFilter:gn}:{};j.map!==null&&j.map.dispose(),j.map=new br(r.x,r.y,De),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Se=j.getViewportCount();for(let De=0;De<Se;De++){const Le=j.getViewport(De);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),G.viewport(o),j.updateMatrices(ee,De),n=j.getFrustum(),y(P,N,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===Bi&&E(j,N),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,A,k)};function E(L,P){const N=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new br(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,N,d,_,null)}function T(L,P,N,S){let A=null;const k=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)A=k;else if(A=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=A.uuid,V=P.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Q=$[V];Q===void 0&&(Q=A.clone(),$[V]=Q,P.addEventListener("dispose",C)),A=Q}if(A.visible=P.visible,A.wireframe=P.wireframe,S===Bi?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:h[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=i.properties.get(A);G.light=N}return A}function y(L,P,N,S,A){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Bi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const V=e.update(L),$=L.material;if(Array.isArray($)){const Q=V.groups;for(let Y=0,ee=Q.length;Y<ee;Y++){const j=Q[Y],he=$[j.materialIndex];if(he&&he.visible){const Se=T(L,he,S,A);L.onBeforeShadow(i,L,P,N,V,Se,j),i.renderBufferDirect(N,null,V,Se,L,j),L.onAfterShadow(i,L,P,N,V,Se,j)}}}else if($.visible){const Q=T(L,$,S,A);L.onBeforeShadow(i,L,P,N,V,Q,null),i.renderBufferDirect(N,null,V,Q,L,null),L.onAfterShadow(i,L,P,N,V,Q,null)}}const G=L.children;for(let V=0,$=G.length;V<$;V++)y(G[V],P,N,S,A)}function C(L){L.target.removeEventListener("dispose",C);for(const N in c){const S=c[N],A=L.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const vA={[xu]:vu,[yu]:Tu,[Mu]:Eu,[Zs]:Su,[vu]:xu,[Tu]:yu,[Eu]:Mu,[Su]:Zs};function yA(i,e){function t(){let q=!1;const ie=new ht;let ae=null;const me=new ht(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!q&&(i.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,Ie,Qe,wt,Yt){Yt===!0&&(Ne*=wt,Ie*=wt,Qe*=wt),ie.set(Ne,Ie,Qe,wt),me.equals(ie)===!1&&(i.clearColor(Ne,Ie,Qe,wt),me.copy(ie))},reset:function(){q=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let q=!1,ie=!1,ae=null,me=null,Ne=null;return{setReversed:function(Ie){if(ie!==Ie){const Qe=e.get("EXT_clip_control");ie?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const wt=Ne;Ne=null,this.setClear(wt)}ie=Ie},getReversed:function(){return ie},setTest:function(Ie){Ie?be(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!q&&(i.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(ie&&(Ie=vA[Ie]),me!==Ie){switch(Ie){case xu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case yu:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Mu:i.depthFunc(i.EQUAL);break;case Su:i.depthFunc(i.GEQUAL);break;case Tu:i.depthFunc(i.GREATER);break;case Eu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Ie}},setLocked:function(Ie){q=Ie},setClear:function(Ie){Ne!==Ie&&(ie&&(Ie=1-Ie),i.clearDepth(Ie),Ne=Ie)},reset:function(){q=!1,ae=null,me=null,Ne=null,ie=!1}}}function r(){let q=!1,ie=null,ae=null,me=null,Ne=null,Ie=null,Qe=null,wt=null,Yt=null;return{setTest:function(dt){q||(dt?be(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(dt){ie!==dt&&!q&&(i.stencilMask(dt),ie=dt)},setFunc:function(dt,Rn,Yn){(ae!==dt||me!==Rn||Ne!==Yn)&&(i.stencilFunc(dt,Rn,Yn),ae=dt,me=Rn,Ne=Yn)},setOp:function(dt,Rn,Yn){(Ie!==dt||Qe!==Rn||wt!==Yn)&&(i.stencilOp(dt,Rn,Yn),Ie=dt,Qe=Rn,wt=Yn)},setLocked:function(dt){q=dt},setClear:function(dt){Yt!==dt&&(i.clearStencil(dt),Yt=dt)},reset:function(){q=!1,ie=null,ae=null,me=null,Ne=null,Ie=null,Qe=null,wt=null,Yt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,y=null,C=null,L=null,P=new Ke(0,0,0),N=0,S=!1,A=null,k=null,G=null,V=null,$=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=ee>=2);let he=null,Se={};const De=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),je=new ht().fromArray(De),ce=new ht().fromArray(Le);function Me(q,ie,ae,me){const Ne=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(q,Ie),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ae;Qe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(ie+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return Ie}const Te={};Te[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(i.DEPTH_TEST),o.setFunc(Zs),se(!1),le(sd),be(i.CULL_FACE),w(vr);function be(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function ke(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function ot(q,ie){return h[q]!==ie?(i.bindFramebuffer(q,ie),h[q]=ie,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ve(q,ie){let ae=d,me=!1;if(q){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const Ne=q.textures;if(ae.length!==Ne.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,Qe=Ne.length;Ie<Qe;Ie++)ae[Ie]=i.COLOR_ATTACHMENT0+Ie;ae.length=Ne.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function vt(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const O={[jr]:i.FUNC_ADD,[Ev]:i.FUNC_SUBTRACT,[bv]:i.FUNC_REVERSE_SUBTRACT};O[Av]=i.MIN,O[wv]=i.MAX;const z={[Rv]:i.ZERO,[Cv]:i.ONE,[Pv]:i.SRC_COLOR,[_u]:i.SRC_ALPHA,[Ov]:i.SRC_ALPHA_SATURATE,[Nv]:i.DST_COLOR,[Iv]:i.DST_ALPHA,[Dv]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[Uv]:i.ONE_MINUS_DST_COLOR,[Lv]:i.ONE_MINUS_DST_ALPHA,[Fv]:i.CONSTANT_COLOR,[Bv]:i.ONE_MINUS_CONSTANT_COLOR,[kv]:i.CONSTANT_ALPHA,[zv]:i.ONE_MINUS_CONSTANT_ALPHA};function w(q,ie,ae,me,Ne,Ie,Qe,wt,Yt,dt){if(q===vr){_===!0&&(ke(i.BLEND),_=!1);return}if(_===!1&&(be(i.BLEND),_=!0),q!==Tv){if(q!==m||dt!==S){if((p!==jr||y!==jr)&&(i.blendEquation(i.FUNC_ADD),p=jr,y=jr),dt)switch(q){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case od:i.blendFunc(i.ONE,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case od:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ld:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}E=null,T=null,C=null,L=null,P.set(0,0,0),N=0,m=q,S=dt}return}Ne=Ne||ie,Ie=Ie||ae,Qe=Qe||me,(ie!==p||Ne!==y)&&(i.blendEquationSeparate(O[ie],O[Ne]),p=ie,y=Ne),(ae!==E||me!==T||Ie!==C||Qe!==L)&&(i.blendFuncSeparate(z[ae],z[me],z[Ie],z[Qe]),E=ae,T=me,C=Ie,L=Qe),(wt.equals(P)===!1||Yt!==N)&&(i.blendColor(wt.r,wt.g,wt.b,Yt),P.copy(wt),N=Yt),m=q,S=!1}function pe(q,ie){q.side===hi?ke(i.CULL_FACE):be(i.CULL_FACE);let ae=q.side===Sn;ie&&(ae=!ae),se(ae),q.blending===Vs&&q.transparent===!1?w(vr):w(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);const me=q.stencilWrite;a.setTest(me),me&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),_e(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function le(q){q!==yv?(be(i.CULL_FACE),q!==k&&(q===sd?i.cullFace(i.BACK):q===Mv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),k=q}function ue(q){q!==G&&(Y&&i.lineWidth(q),G=q)}function _e(q,ie,ae){q?(be(i.POLYGON_OFFSET_FILL),(V!==ie||$!==ae)&&(i.polygonOffset(ie,ae),V=ie,$=ae)):ke(i.POLYGON_OFFSET_FILL)}function re(q){q?be(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function b(q){q===void 0&&(q=i.TEXTURE0+Q-1),he!==q&&(i.activeTexture(q),he=q)}function M(q,ie,ae){ae===void 0&&(he===null?ae=i.TEXTURE0+Q-1:ae=he);let me=Se[ae];me===void 0&&(me={type:void 0,texture:void 0},Se[ae]=me),(me.type!==q||me.texture!==ie)&&(he!==ae&&(i.activeTexture(ae),he=ae),i.bindTexture(q,ie||Te[q]),me.type=q,me.texture=ie)}function H(){const q=Se[he];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(q){je.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),je.copy(q))}function Re(q){ce.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ce.copy(q))}function We(q,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let me=ae.get(q);me===void 0&&(me=i.getUniformBlockIndex(ie,q.name),ae.set(q,me))}function He(q,ie){const me=c.get(ie).get(q);l.get(ie)!==me&&(i.uniformBlockBinding(ie,me,q.__bindingPointIndex),l.set(ie,me))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,Se={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,y=null,C=null,L=null,P=new Ke(0,0,0),N=0,S=!1,A=null,k=null,G=null,V=null,$=null,je.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:be,disable:ke,bindFramebuffer:ot,drawBuffers:Ve,useProgram:vt,setBlending:w,setMaterial:pe,setFlipSided:se,setCullFace:le,setLineWidth:ue,setPolygonOffset:_e,setScissorTest:re,activeTexture:b,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Pe,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:He,texStorage2D:qe,texStorage3D:ye,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:ze,viewport:Re,reset:Je}}function MA(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return d?new OffscreenCanvas(b,M):aa("canvas")}function _(b,M,H){let J=1;const ne=re(b);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(J*ne.width),Ae=Math.floor(J*ne.height);h===void 0&&(h=g(te,Ae));const xe=M?g(te,Ae):h;return xe.width=te,xe.height=Ae,xe.getContext("2d").drawImage(b,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+te+"x"+Ae+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,M,H,J,ne=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=M;if(M===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),M===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),M===i.RGBA){const Ae=ne?wl:ut.getTransfer(J);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=Ae===yt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(b,M){let H;return b?M===null||M===os||M===Qs?H=i.DEPTH24_STENCIL8:M===yn?H=i.DEPTH32F_STENCIL8:M===ra&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===os||M===Qs?H=i.DEPTH_COMPONENT24:M===yn?H=i.DEPTH_COMPONENT32F:M===ra&&(H=i.DEPTH_COMPONENT16),H}function C(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==Kt?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function L(b){const M=b.target;M.removeEventListener("dispose",L),N(M),M.isVideoTexture&&u.delete(M)}function P(b){const M=b.target;M.removeEventListener("dispose",P),A(M)}function N(b){const M=n.get(b);if(M.__webglInit===void 0)return;const H=b.source,J=f.get(H);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(b),Object.keys(J).length===0&&f.delete(H)}n.remove(b)}function S(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const H=b.source,J=f.get(H);delete J[M.__cacheKey],o.memory.textures--}function A(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=b.textures;for(let J=0,ne=H.length;J<ne;J++){const te=n.get(H[J]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(H[J])}n.remove(b)}let k=0;function G(){k=0}function V(){const b=k;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),k+=1,b}function $(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function Q(b,M){const H=n.get(b);if(b.isVideoTexture&&ue(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,b,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Y(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ce(H,b,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function ee(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){ce(H,b,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function j(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Me(H,b,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const he={[Er]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},Se={[gn]:i.NEAREST,[s_]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},De={[ny]:i.NEVER,[ly]:i.ALWAYS,[iy]:i.LESS,[g_]:i.LEQUAL,[ry]:i.EQUAL,[ay]:i.GEQUAL,[sy]:i.GREATER,[oy]:i.NOTEQUAL};function Le(b,M){if(M.type===yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kt||M.magFilter===ll||M.magFilter===No||M.magFilter===mi||M.minFilter===Kt||M.minFilter===ll||M.minFilter===No||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,he[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Se[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,De[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==No&&M.minFilter!==mi||M.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function je(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",L));const J=M.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const te=$(M);if(te!==b.__cacheKey){ne[te]===void 0&&(ne[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[te].usedTimes++;const Ae=ne[b.__cacheKey];Ae!==void 0&&(ne[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(M)),b.__cacheKey=te,b.__webglTexture=ne[te].texture}return H}function ce(b,M,H){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const ne=je(b,M),te=M.source;t.bindTexture(J,b.__webglTexture,i.TEXTURE0+H);const Ae=n.get(te);if(te.version!==Ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const xe=ut.getPrimaries(ut.workingColorSpace),we=M.colorSpace===Xi?null:ut.getPrimaries(M.colorSpace),qe=M.colorSpace===Xi||xe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=_(M.image,!1,r.maxTextureSize);ye=_e(M,ye);const Pe=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let ze=T(M.internalFormat,Pe,Ue,M.colorSpace,M.isVideoTexture);Le(J,M);let Re;const We=M.mipmaps,He=M.isVideoTexture!==!0,Je=Ae.__version===void 0||ne===!0,q=te.dataReady,ie=C(M,ye);if(M.isDepthTexture)ze=y(M.format===eo,M.type),Je&&(He?t.texStorage2D(i.TEXTURE_2D,1,ze,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,ze,ye.width,ye.height,0,Pe,Ue,null));else if(M.isDataTexture)if(We.length>0){He&&Je&&t.texStorage2D(i.TEXTURE_2D,ie,ze,We[0].width,We[0].height);for(let ae=0,me=We.length;ae<me;ae++)Re=We[ae],He?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Re.width,Re.height,Pe,Ue,Re.data):t.texImage2D(i.TEXTURE_2D,ae,ze,Re.width,Re.height,0,Pe,Ue,Re.data);M.generateMipmaps=!1}else He?(Je&&t.texStorage2D(i.TEXTURE_2D,ie,ze,ye.width,ye.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Pe,Ue,ye.data)):t.texImage2D(i.TEXTURE_2D,0,ze,ye.width,ye.height,0,Pe,Ue,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,ze,We[0].width,We[0].height,ye.depth);for(let ae=0,me=We.length;ae<me;ae++)if(Re=We[ae],M.format!==On)if(Pe!==null)if(He){if(q)if(M.layerUpdates.size>0){const Ne=tp(Re.width,Re.height,M.format,M.type);for(const Ie of M.layerUpdates){const Qe=Re.data.subarray(Ie*Ne/Re.data.BYTES_PER_ELEMENT,(Ie+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ie,Re.width,Re.height,1,Pe,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Re.width,Re.height,ye.depth,Pe,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,ze,Re.width,Re.height,ye.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Re.width,Re.height,ye.depth,Pe,Ue,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,ze,Re.width,Re.height,ye.depth,0,Pe,Ue,Re.data)}else{He&&Je&&t.texStorage2D(i.TEXTURE_2D,ie,ze,We[0].width,We[0].height);for(let ae=0,me=We.length;ae<me;ae++)Re=We[ae],M.format!==On?Pe!==null?He?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Re.width,Re.height,Pe,Ue,Re.data):t.texImage2D(i.TEXTURE_2D,ae,ze,Re.width,Re.height,0,Pe,Ue,Re.data)}else if(M.isDataArrayTexture)if(He){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,ze,ye.width,ye.height,ye.depth),q)if(M.layerUpdates.size>0){const ae=tp(ye.width,ye.height,M.format,M.type);for(const me of M.layerUpdates){const Ne=ye.data.subarray(me*ae/ye.data.BYTES_PER_ELEMENT,(me+1)*ae/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Pe,Ue,Ne)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ue,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,Pe,Ue,ye.data);else if(M.isData3DTexture)He?(Je&&t.texStorage3D(i.TEXTURE_3D,ie,ze,ye.width,ye.height,ye.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ue,ye.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,Pe,Ue,ye.data);else if(M.isFramebufferTexture){if(Je)if(He)t.texStorage2D(i.TEXTURE_2D,ie,ze,ye.width,ye.height);else{let ae=ye.width,me=ye.height;for(let Ne=0;Ne<ie;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ze,ae,me,0,Pe,Ue,null),ae>>=1,me>>=1}}else if(We.length>0){if(He&&Je){const ae=re(We[0]);t.texStorage2D(i.TEXTURE_2D,ie,ze,ae.width,ae.height)}for(let ae=0,me=We.length;ae<me;ae++)Re=We[ae],He?q&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Pe,Ue,Re):t.texImage2D(i.TEXTURE_2D,ae,ze,Pe,Ue,Re);M.generateMipmaps=!1}else if(He){if(Je){const ae=re(ye);t.texStorage2D(i.TEXTURE_2D,ie,ze,ae.width,ae.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ue,ye)}else t.texImage2D(i.TEXTURE_2D,0,ze,Pe,Ue,ye);m(M)&&p(J),Ae.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Me(b,M,H){if(M.image.length!==6)return;const J=je(b,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const te=n.get(ne);if(ne.version!==te.__version||J===!0){t.activeTexture(i.TEXTURE0+H);const Ae=ut.getPrimaries(ut.workingColorSpace),xe=M.colorSpace===Xi?null:ut.getPrimaries(M.colorSpace),we=M.colorSpace===Xi||Ae===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!qe&&!ye?Pe[me]=_(M.image[me],!0,r.maxCubemapSize):Pe[me]=ye?M.image[me].image:M.image[me],Pe[me]=_e(M,Pe[me]);const Ue=Pe[0],ze=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),We=T(M.internalFormat,ze,Re,M.colorSpace),He=M.isVideoTexture!==!0,Je=te.__version===void 0||J===!0,q=ne.dataReady;let ie=C(M,Ue);Le(i.TEXTURE_CUBE_MAP,M);let ae;if(qe){He&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,We,Ue.width,Ue.height);for(let me=0;me<6;me++){ae=Pe[me].mipmaps;for(let Ne=0;Ne<ae.length;Ne++){const Ie=ae[Ne];M.format!==On?ze!==null?He?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,Ie.width,Ie.height,ze,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,0,0,Ie.width,Ie.height,ze,Re,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne,We,Ie.width,Ie.height,0,ze,Re,Ie.data)}}}else{if(ae=M.mipmaps,He&&Je){ae.length>0&&ie++;const me=re(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,We,me.width,me.height)}for(let me=0;me<6;me++)if(ye){He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,ze,Re,Pe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,Pe[me].width,Pe[me].height,0,ze,Re,Pe[me].data);for(let Ne=0;Ne<ae.length;Ne++){const Qe=ae[Ne].image[me].image;He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,Qe.width,Qe.height,ze,Re,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,We,Qe.width,Qe.height,0,ze,Re,Qe.data)}}else{He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze,Re,Pe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,ze,Re,Pe[me]);for(let Ne=0;Ne<ae.length;Ne++){const Ie=ae[Ne];He?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,0,0,ze,Re,Ie.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ne+1,We,ze,Re,Ie.image[me])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),te.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Te(b,M,H,J,ne,te){const Ae=s.convert(H.format,H.colorSpace),xe=s.convert(H.type),we=T(H.internalFormat,Ae,xe,H.colorSpace),qe=n.get(M),ye=n.get(H);if(ye.__renderTarget=M,!qe.__hasExternalTextures){const Pe=Math.max(1,M.width>>te),Ue=Math.max(1,M.height>>te);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,te,we,Pe,Ue,M.depth,0,Ae,xe,null):t.texImage2D(ne,te,we,Pe,Ue,0,Ae,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,ye.__webglTexture,0,se(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,ye.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(b,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,te=y(M.stencilBuffer,ne),Ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=se(M);le(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,te,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,b)}else{const J=M.textures;for(let ne=0;ne<J.length;ne++){const te=J[ne],Ae=s.convert(te.format,te.colorSpace),xe=s.convert(te.type),we=T(te.internalFormat,Ae,xe,te.colorSpace),qe=se(M);H&&le(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,we,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,we,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,we,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const ne=J.__webglTexture,te=se(M);if(M.depthTexture.format===Gs)le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===eo)le(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ot(b){const M=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),be(M.__webglDepthbuffer[J],b,!1);else{const ne=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),be(M.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(b,M,H){const J=n.get(b);M!==void 0&&Te(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ot(b)}function vt(b){const M=b.texture,H=n.get(b),J=n.get(M);b.addEventListener("dispose",P);const ne=b.textures,te=b.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let we=0;we<M.mipmaps.length;we++)H.__webglFramebuffer[xe][we]=i.createFramebuffer()}else H.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)H.__webglFramebuffer[xe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let xe=0,we=ne.length;xe<we;xe++){const qe=n.get(ne[xe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&le(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<ne.length;xe++){const we=ne[xe];H.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const qe=s.convert(we.format,we.colorSpace),ye=s.convert(we.type),Pe=T(we.internalFormat,qe,ye,we.colorSpace,b.isXRRenderTarget===!0),Ue=se(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),be(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Le(i.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Te(H.__webglFramebuffer[xe][we],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else Te(H.__webglFramebuffer[xe],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let xe=0,we=ne.length;xe<we;xe++){const qe=ne[xe],ye=n.get(qe);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),Le(i.TEXTURE_2D,qe),Te(H.__webglFramebuffer,b,qe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,J.__webglTexture),Le(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Te(H.__webglFramebuffer[we],b,M,i.COLOR_ATTACHMENT0,xe,we);else Te(H.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,xe,0);m(M)&&p(xe),t.unbindTexture()}b.depthBuffer&&ot(b)}function O(b){const M=b.textures;for(let H=0,J=M.length;H<J;H++){const ne=M[H];if(m(ne)){const te=E(b),Ae=n.get(ne).__webglTexture;t.bindTexture(te,Ae),p(te),t.unbindTexture()}}}const z=[],w=[];function pe(b){if(b.samples>0){if(le(b)===!1){const M=b.textures,H=b.width,J=b.height;let ne=i.COLOR_BUFFER_BIT;const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(b),xe=M.length>1;if(xe)for(let we=0;we<M.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<M.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const qe=n.get(M[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,ne,i.NEAREST),l===!0&&(z.length=0,w.length=0,z.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(z.push(te),w.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<M.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const qe=n.get(M[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function se(b){return Math.min(r.maxSamples,b.samples)}function le(b){const M=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function _e(b,M){const H=b.colorSpace,J=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==en&&H!==Xi&&(ut.getTransfer(H)===yt?(J!==On||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=le}function SA(i,e){function t(n,r=Xi){let s;const o=ut.getTransfer(r);if(n===$i)return i.UNSIGNED_BYTE;if(n===Xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===l_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===o_)return i.BYTE;if(n===a_)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===Wh)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===c_)return i.ALPHA;if(n===u_)return i.RGB;if(n===On)return i.RGBA;if(n===h_)return i.LUMINANCE;if(n===f_)return i.LUMINANCE_ALPHA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===eo)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===qh)return i.RED_INTEGER;if(n===d_)return i.RG;if(n===jh)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===cl||n===ul||n===hl||n===fl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Au||n===wu||n===Ru||n===Cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Du||n===Iu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pu||n===Du)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lu||n===Nu||n===Uu||n===Ou||n===Fu||n===Bu||n===ku||n===zu||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===qu||n===ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dl)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===p_||n===Ku||n===Zu||n===$u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ji({vertexShader:TA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends cs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new bA,m=t.getContextAttributes();let p=null,E=null;const T=[],y=[],C=new Ze;let L=null;const P=new sn;P.viewport=new ht;const N=new sn;N.viewport=new ht;const S=[P,N],A=new OM;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Me=T[ce];return Me===void 0&&(Me=new Ic,T[ce]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ce){let Me=T[ce];return Me===void 0&&(Me=new Ic,T[ce]=Me),Me.getGripSpace()},this.getHand=function(ce){let Me=T[ce];return Me===void 0&&(Me=new Ic,T[ce]=Me),Me.getHandSpace()};function V(ce){const Me=y.indexOf(ce.inputSource);if(Me===-1)return;const Te=T[Me];Te!==void 0&&(Te.update(ce.inputSource,ce.frame,c||o),Te.dispatchEvent({type:ce.type,data:ce.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let ce=0;ce<T.length;ce++){const Me=y[ce];Me!==null&&(y[ce]=null,T[ce].disconnect(Me))}k=null,G=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,E=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,be=null,ke=null;m.depth&&(ke=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=m.stencil?eo:Gs,be=m.stencil?Qs:os);const ot={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ot),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new br(f.textureWidth,f.textureHeight,{format:On,type:$i,depthTexture:new P_(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new br(d.framebufferWidth,d.framebufferHeight,{format:On,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(ce){for(let Me=0;Me<ce.removed.length;Me++){const Te=ce.removed[Me],be=y.indexOf(Te);be>=0&&(y[be]=null,T[be].disconnect(Te))}for(let Me=0;Me<ce.added.length;Me++){const Te=ce.added[Me];let be=y.indexOf(Te);if(be===-1){for(let ot=0;ot<T.length;ot++)if(ot>=y.length){y.push(Te),be=ot;break}else if(y[ot]===null){y[ot]=Te,be=ot;break}if(be===-1)break}const ke=T[be];ke&&ke.connect(Te)}}const Y=new W,ee=new W;function j(ce,Me,Te){Y.setFromMatrixPosition(Me.matrixWorld),ee.setFromMatrixPosition(Te.matrixWorld);const be=Y.distanceTo(ee),ke=Me.projectionMatrix.elements,ot=Te.projectionMatrix.elements,Ve=ke[14]/(ke[10]-1),vt=ke[14]/(ke[10]+1),O=(ke[9]+1)/ke[5],z=(ke[9]-1)/ke[5],w=(ke[8]-1)/ke[0],pe=(ot[8]+1)/ot[0],se=Ve*w,le=Ve*pe,ue=be/(-w+pe),_e=ue*-w;if(Me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(_e),ce.translateZ(ue),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),ke[10]===-1)ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const re=Ve+ue,b=vt+ue,M=se-_e,H=le+(be-_e),J=O*vt/b*re,ne=z*vt/b*re;ce.projectionMatrix.makePerspective(M,H,J,ne,re,b),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function he(ce,Me){Me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let Me=ce.near,Te=ce.far;_.texture!==null&&(_.depthNear>0&&(Me=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),A.near=N.near=P.near=Me,A.far=N.far=P.far=Te,(k!==A.near||G!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,G=A.far),P.layers.mask=ce.layers.mask|2,N.layers.mask=ce.layers.mask|4,A.layers.mask=P.layers.mask|N.layers.mask;const be=ce.parent,ke=A.cameras;he(A,be);for(let ot=0;ot<ke.length;ot++)he(ke[ot],be);ke.length===2?j(A,P,N):A.projectionMatrix.copy(P.projectionMatrix),Se(ce,A,be)};function Se(ce,Me,Te){Te===null?ce.matrix.copy(Me.matrixWorld):(ce.matrix.copy(Te.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=to*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ce){l=ce,f!==null&&(f.fixedFoveation=ce),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)};let De=null;function Le(ce,Me){if(u=Me.getViewerPose(c||o),g=Me,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let be=!1;Te.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let Ve=0;Ve<Te.length;Ve++){const vt=Te[Ve];let O=null;if(d!==null)O=d.getViewport(vt);else{const w=h.getViewSubImage(f,vt);O=w.viewport,Ve===0&&(e.setRenderTargetTextures(E,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(E))}let z=S[Ve];z===void 0&&(z=new sn,z.layers.enable(Ve),z.viewport=new ht,S[Ve]=z),z.matrix.fromArray(vt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(vt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(O.x,O.y,O.width,O.height),Ve===0&&(A.matrix.copy(z.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(z)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(Te[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(e,Ve,r.renderState)}}for(let Te=0;Te<T.length;Te++){const be=y[Te],ke=T[Te];be!==null&&ke!==void 0&&ke.update(be,Me,c||o)}De&&De(ce,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),g=null}const je=new N_;je.setAnimationLoop(Le),this.setAnimationLoop=function(ce){De=ce},this.dispose=function(){}}}const zr=new Ti,wA=new $e;function RA(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,E_(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,y=E.envMapRotation;T&&(m.envMap.value=T,zr.copy(y),zr.x*=-1,zr.y*=-1,zr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(zr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function CA(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const y=T.program;n.uniformBlockBinding(E,y)}function c(E,T){let y=r[E.id];y===void 0&&(g(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(E,C);const L=e.render.frame;s[E.id]!==L&&(f(E),s[E.id]=L)}function u(E){const T=h();E.__bindingPointIndex=T;const y=i.createBuffer(),C=E.__size,L=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],y=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,P=y.length;L<P;L++){const N=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,A=N.length;S<A;S++){const k=N[S];if(d(k,L,S,C)===!0){const G=k.__offset,V=Array.isArray(k.value)?k.value:[k.value];let $=0;for(let Q=0;Q<V.length;Q++){const Y=V[Q],ee=_(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+$,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,$),$+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,T,y,C){const L=E.value,P=T+"_"+y;if(C[P]===void 0)return typeof L=="number"||typeof L=="boolean"?C[P]=L:C[P]=L.clone(),!0;{const N=C[P];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return C[P]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(E){const T=E.uniforms;let y=0;const C=16;for(let P=0,N=T.length;P<N;P++){const S=Array.isArray(T[P])?T[P]:[T[P]];for(let A=0,k=S.length;A<k;A++){const G=S[A],V=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Q=V.length;$<Q;$++){const Y=V[$],ee=_(Y),j=y%C,he=j%ee.boundary,Se=j+he;y+=he,Se!==0&&C-Se<ee.storage&&(y+=C-Se),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ee.storage}}}const L=y%C;return L>0&&(y+=C-L),E.__size=y,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class PA{constructor(e={}){const{canvas:t=by(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=yr,this.toneMappingExposure=1;const y=this;let C=!1,L=0,P=0,N=null,S=-1,A=null;const k=new ht,G=new ht;let V=null;const $=new Ke(0);let Q=0,Y=t.width,ee=t.height,j=1,he=null,Se=null;const De=new ht(0,0,Y,ee),Le=new ht(0,0,Y,ee);let je=!1;const ce=new nf;let Me=!1,Te=!1;this.transmissionResolutionScale=1;const be=new $e,ke=new $e,ot=new W,Ve=new ht,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function z(){return N===null?j:1}let w=n;function pe(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),w===null){const D="webgl2";if(w=pe(D,v),w===null)throw pe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let se,le,ue,_e,re,b,M,H,J,ne,te,Ae,xe,we,qe,ye,Pe,Ue,ze,Re,We,He,Je,q;function ie(){se=new zE(w),se.init(),He=new SA(w,se),le=new LE(w,se,e,He),ue=new yA(w,se),le.reverseDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),_e=new GE(w),re=new aA,b=new MA(w,se,ue,re,le,He,_e),M=new UE(y),H=new kE(y),J=new KM(w),Je=new DE(w,J),ne=new HE(w,J,_e,Je),te=new XE(w,ne,J,_e),ze=new WE(w,le,b),ye=new NE(re),Ae=new oA(y,M,H,se,le,Je,ye),xe=new RA(y,re),we=new cA,qe=new mA(se),Ue=new PE(y,M,H,ue,te,d,l),Pe=new xA(y,te,le),q=new CA(w,_e,le,ue),Re=new IE(w,se,_e),We=new VE(w,se,_e),_e.programs=Ae.programs,y.capabilities=le,y.extensions=se,y.properties=re,y.renderLists=we,y.shadowMap=Pe,y.state=ue,y.info=_e}ie();const ae=new AA(y,w);this.xr=ae,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=se.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=se.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Y,ee,!1))},this.getSize=function(v){return v.set(Y,ee)},this.setSize=function(v,D,I=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,ee=D,t.width=Math.floor(v*j),t.height=Math.floor(D*j),I===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Y*j,ee*j).floor()},this.setDrawingBufferSize=function(v,D,I){Y=v,ee=D,j=I,t.width=Math.floor(v*I),t.height=Math.floor(D*I),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(k)},this.getViewport=function(v){return v.copy(De)},this.setViewport=function(v,D,I,B){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,D,I,B),ue.viewport(k.copy(De).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Le)},this.setScissor=function(v,D,I,B){v.isVector4?Le.set(v.x,v.y,v.z,v.w):Le.set(v,D,I,B),ue.scissor(G.copy(Le).multiplyScalar(j).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(v){ue.setScissorTest(je=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,I=!0){let B=0;if(v){let U=!1;if(N!==null){const X=N.texture.format;U=X===Kh||X===jh||X===qh}if(U){const X=N.texture.type,K=X===$i||X===os||X===ra||X===Qs||X===Xh||X===Yh,Z=Ue.getClearColor(),oe=Ue.getClearAlpha(),fe=Z.r,de=Z.g,ge=Z.b;K?(g[0]=fe,g[1]=de,g[2]=ge,g[3]=oe,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=fe,_[1]=de,_[2]=ge,_[3]=oe,w.clearBufferiv(w.COLOR,0,_))}else B|=w.COLOR_BUFFER_BIT}D&&(B|=w.DEPTH_BUFFER_BIT),I&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ue.dispose(),we.dispose(),qe.dispose(),re.dispose(),M.dispose(),H.dispose(),te.dispose(),Je.dispose(),q.dispose(),Ae.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Sa),ae.removeEventListener("sessionend",Ta),Ci.stop()};function me(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=_e.autoReset,D=Pe.enabled,I=Pe.autoUpdate,B=Pe.needsUpdate,U=Pe.type;ie(),_e.autoReset=v,Pe.enabled=D,Pe.autoUpdate=I,Pe.needsUpdate=B,Pe.type=U}function Ie(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qe(v){const D=v.target;D.removeEventListener("dispose",Qe),wt(D)}function wt(v){Yt(v),re.remove(v)}function Yt(v){const D=re.get(v).programs;D!==void 0&&(D.forEach(function(I){Ae.releaseProgram(I)}),v.isShaderMaterial&&Ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,I,B,U,X){D===null&&(D=vt);const K=U.isMesh&&U.matrixWorld.determinant()<0,Z=Jl(v,D,I,B,U);ue.setMaterial(B,K);let oe=I.index,fe=1;if(B.wireframe===!0){if(oe=ne.getWireframeAttribute(I),oe===void 0)return;fe=2}const de=I.drawRange,ge=I.attributes.position;let ve=de.start*fe,Ee=(de.start+de.count)*fe;X!==null&&(ve=Math.max(ve,X.start*fe),Ee=Math.min(Ee,(X.start+X.count)*fe)),oe!==null?(ve=Math.max(ve,0),Ee=Math.min(Ee,oe.count)):ge!=null&&(ve=Math.max(ve,0),Ee=Math.min(Ee,ge.count));const Fe=Ee-ve;if(Fe<0||Fe===1/0)return;Je.setup(U,B,Z,I,oe);let Xe,Ge=Re;if(oe!==null&&(Xe=J.get(oe),Ge=We,Ge.setIndex(Xe)),U.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*z()),Ge.setMode(w.LINES)):Ge.setMode(w.TRIANGLES);else if(U.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),ue.setLineWidth(Oe*z()),U.isLineSegments?Ge.setMode(w.LINES):U.isLineLoop?Ge.setMode(w.LINE_LOOP):Ge.setMode(w.LINE_STRIP)}else U.isPoints?Ge.setMode(w.POINTS):U.isSprite&&Ge.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ge.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Oe=U._multiDrawStarts,et=U._multiDrawCounts,Be=U._multiDrawCount,pt=oe?J.get(oe).bytesPerElement:1,kt=re.get(B).currentProgram.getUniforms();for(let ft=0;ft<Be;ft++)kt.setValue(w,"_gl_DrawID",ft),Ge.render(Oe[ft]/pt,et[ft])}else if(U.isInstancedMesh)Ge.renderInstances(ve,Fe,U.count);else if(I.isInstancedBufferGeometry){const Oe=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,et=Math.min(I.instanceCount,Oe);Ge.renderInstances(ve,Fe,et)}else Ge.render(ve,Fe)};function dt(v,D,I){v.transparent===!0&&v.side===hi&&v.forceSinglePass===!1?(v.side=Sn,v.needsUpdate=!0,ds(v,D,I),v.side=Si,v.needsUpdate=!0,ds(v,D,I),v.side=hi):ds(v,D,I)}this.compile=function(v,D,I=null){I===null&&(I=v),p=qe.get(I),p.init(D),T.push(p),I.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==I&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const X=U.material;if(X)if(Array.isArray(X))for(let K=0;K<X.length;K++){const Z=X[K];dt(Z,I,U),B.add(Z)}else dt(X,I,U),B.add(X)}),p=T.pop(),B},this.compileAsync=function(v,D,I=null){const B=this.compile(v,D,I);return new Promise(U=>{function X(){if(B.forEach(function(K){re.get(K).currentProgram.isReady()&&B.delete(K)}),B.size===0){U(v);return}setTimeout(X,10)}se.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let Rn=null;function Yn(v){Rn&&Rn(v)}function Sa(){Ci.stop()}function Ta(){Ci.start()}const Ci=new N_;Ci.setAnimationLoop(Yn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(v){Rn=v,ae.setAnimationLoop(v),v===null?Ci.stop():Ci.start()},ae.addEventListener("sessionstart",Sa),ae.addEventListener("sessionend",Ta),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,D,N),p=qe.get(v,T.length),p.init(D),T.push(p),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ce.setFromProjectionMatrix(ke),Te=this.localClippingEnabled,Me=ye.init(this.clippingPlanes,Te),m=we.get(v,E.length),m.init(),E.push(m),ae.enabled===!0&&ae.isPresenting===!0){const X=y.xr.getDepthSensingMesh();X!==null&&go(X,D,-1/0,y.sortObjects)}go(v,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(he,Se),O=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,O&&Ue.addToRenderList(m,v),this.info.render.frame++,Me===!0&&ye.beginShadows();const I=p.state.shadowsArray;Pe.render(I,v,D),Me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const X=D.cameras;if(U.length>0)for(let K=0,Z=X.length;K<Z;K++){const oe=X[K];Ea(B,U,v,oe)}O&&Ue.render(v);for(let K=0,Z=X.length;K<Z;K++){const oe=X[K];xo(m,v,oe,oe.viewport)}}else U.length>0&&Ea(B,U,v,D),O&&Ue.render(v),xo(m,v,D);N!==null&&P===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(y,v,D),Je.resetDefaultState(),S=-1,A=null,T.pop(),T.length>0?(p=T[T.length-1],Me===!0&&ye.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function go(v,D,I,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)I=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ce.intersectsSprite(v)){B&&Ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ke);const K=te.update(v),Z=v.material;Z.visible&&m.push(v,K,Z,I,Ve.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ce.intersectsObject(v))){const K=te.update(v),Z=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ve.copy(v.boundingSphere.center)):(K.boundingSphere===null&&K.computeBoundingSphere(),Ve.copy(K.boundingSphere.center)),Ve.applyMatrix4(v.matrixWorld).applyMatrix4(ke)),Array.isArray(Z)){const oe=K.groups;for(let fe=0,de=oe.length;fe<de;fe++){const ge=oe[fe],ve=Z[ge.materialIndex];ve&&ve.visible&&m.push(v,K,ve,I,Ve.z,ge)}}else Z.visible&&m.push(v,K,Z,I,Ve.z,null)}}const X=v.children;for(let K=0,Z=X.length;K<Z;K++)go(X[K],D,I,B)}function xo(v,D,I,B){const U=v.opaque,X=v.transmissive,K=v.transparent;p.setupLightsView(I),Me===!0&&ye.setGlobalState(y.clippingPlanes,I),B&&ue.viewport(k.copy(B)),U.length>0&&fs(U,D,I),X.length>0&&fs(X,D,I),K.length>0&&fs(K,D,I),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ea(v,D,I,B){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new br(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?qi:$i,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const X=p.state.transmissionRenderTarget[B.id],K=B.viewport||k;X.setSize(K.z*y.transmissionResolutionScale,K.w*y.transmissionResolutionScale);const Z=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor($),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),O&&Ue.render(I);const oe=y.toneMapping;y.toneMapping=yr;const fe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Me===!0&&ye.setGlobalState(y.clippingPlanes,B),fs(v,I,B),b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X),se.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let ge=0,ve=D.length;ge<ve;ge++){const Ee=D[ge],Fe=Ee.object,Xe=Ee.geometry,Ge=Ee.material,Oe=Ee.group;if(Ge.side===hi&&Fe.layers.test(B.layers)){const et=Ge.side;Ge.side=Sn,Ge.needsUpdate=!0,ba(Fe,I,B,Xe,Ge,Oe),Ge.side=et,Ge.needsUpdate=!0,de=!0}}de===!0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X))}y.setRenderTarget(Z),y.setClearColor($,Q),fe!==void 0&&(B.viewport=fe),y.toneMapping=oe}function fs(v,D,I){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,X=v.length;U<X;U++){const K=v[U],Z=K.object,oe=K.geometry,fe=B===null?K.material:B,de=K.group;Z.layers.test(I.layers)&&ba(Z,D,I,oe,fe,de)}}function ba(v,D,I,B,U,X){v.onBeforeRender(y,D,I,B,U,X),v.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,D,I,B,v,X),U.transparent===!0&&U.side===hi&&U.forceSinglePass===!1?(U.side=Sn,U.needsUpdate=!0,y.renderBufferDirect(I,D,B,U,v,X),U.side=Si,U.needsUpdate=!0,y.renderBufferDirect(I,D,B,U,v,X),U.side=hi):y.renderBufferDirect(I,D,B,U,v,X),v.onAfterRender(y,D,I,B,U,X)}function ds(v,D,I){D.isScene!==!0&&(D=vt);const B=re.get(v),U=p.state.lights,X=p.state.shadowsArray,K=U.state.version,Z=Ae.getParameters(v,U.state,X,D,I),oe=Ae.getProgramCacheKey(Z);let fe=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?H:M).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,fe===void 0&&(v.addEventListener("dispose",Qe),fe=new Map,B.programs=fe);let de=fe.get(oe);if(de!==void 0){if(B.currentProgram===de&&B.lightsStateVersion===K)return yo(v,Z),de}else Z.uniforms=Ae.getUniforms(v),v.onBeforeCompile(Z,y),de=Ae.acquireProgram(Z,oe),fe.set(oe,de),B.uniforms=Z.uniforms;const ge=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ge.clippingPlanes=ye.uniform),yo(v,Z),B.needsLights=nr(v),B.lightsStateVersion=K,B.needsLights&&(ge.ambientLightColor.value=U.state.ambient,ge.lightProbe.value=U.state.probe,ge.directionalLights.value=U.state.directional,ge.directionalLightShadows.value=U.state.directionalShadow,ge.spotLights.value=U.state.spot,ge.spotLightShadows.value=U.state.spotShadow,ge.rectAreaLights.value=U.state.rectArea,ge.ltc_1.value=U.state.rectAreaLTC1,ge.ltc_2.value=U.state.rectAreaLTC2,ge.pointLights.value=U.state.point,ge.pointLightShadows.value=U.state.pointShadow,ge.hemisphereLights.value=U.state.hemi,ge.directionalShadowMap.value=U.state.directionalShadowMap,ge.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ge.spotShadowMap.value=U.state.spotShadowMap,ge.spotLightMatrix.value=U.state.spotLightMatrix,ge.spotLightMap.value=U.state.spotLightMap,ge.pointShadowMap.value=U.state.pointShadowMap,ge.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=de,B.uniformsList=null,de}function vo(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=pl.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function yo(v,D){const I=re.get(v);I.outputColorSpace=D.outputColorSpace,I.batching=D.batching,I.batchingColor=D.batchingColor,I.instancing=D.instancing,I.instancingColor=D.instancingColor,I.instancingMorph=D.instancingMorph,I.skinning=D.skinning,I.morphTargets=D.morphTargets,I.morphNormals=D.morphNormals,I.morphColors=D.morphColors,I.morphTargetsCount=D.morphTargetsCount,I.numClippingPlanes=D.numClippingPlanes,I.numIntersection=D.numClipIntersection,I.vertexAlphas=D.vertexAlphas,I.vertexTangents=D.vertexTangents,I.toneMapping=D.toneMapping}function Jl(v,D,I,B,U){D.isScene!==!0&&(D=vt),b.resetTextureUnits();const X=D.fog,K=B.isMeshStandardMaterial?D.environment:null,Z=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:en,oe=(B.isMeshStandardMaterial?H:M).get(B.envMap||K),fe=B.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,de=!!I.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ge=!!I.morphAttributes.position,ve=!!I.morphAttributes.normal,Ee=!!I.morphAttributes.color;let Fe=yr;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Fe=y.toneMapping);const Xe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ge=Xe!==void 0?Xe.length:0,Oe=re.get(B),et=p.state.lights;if(Me===!0&&(Te===!0||v!==A)){const Tt=v===A&&B.id===S;ye.setState(B,v,Tt)}let Be=!1;B.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==et.state.version||Oe.outputColorSpace!==Z||U.isBatchedMesh&&Oe.batching===!1||!U.isBatchedMesh&&Oe.batching===!0||U.isBatchedMesh&&Oe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Oe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Oe.instancing===!1||!U.isInstancedMesh&&Oe.instancing===!0||U.isSkinnedMesh&&Oe.skinning===!1||!U.isSkinnedMesh&&Oe.skinning===!0||U.isInstancedMesh&&Oe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Oe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Oe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Oe.instancingMorph===!1&&U.morphTexture!==null||Oe.envMap!==oe||B.fog===!0&&Oe.fog!==X||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ye.numPlanes||Oe.numIntersection!==ye.numIntersection)||Oe.vertexAlphas!==fe||Oe.vertexTangents!==de||Oe.morphTargets!==ge||Oe.morphNormals!==ve||Oe.morphColors!==Ee||Oe.toneMapping!==Fe||Oe.morphTargetsCount!==Ge)&&(Be=!0):(Be=!0,Oe.__version=B.version);let pt=Oe.currentProgram;Be===!0&&(pt=ds(B,D,U));let kt=!1,ft=!1,lt=!1;const Ye=pt.getUniforms(),It=Oe.uniforms;if(ue.useProgram(pt.program)&&(kt=!0,ft=!0,lt=!0),B.id!==S&&(S=B.id,ft=!0),kt||A!==v){ue.buffers.depth.getReversed()?(be.copy(v.projectionMatrix),wy(be),Ry(be),Ye.setValue(w,"projectionMatrix",be)):Ye.setValue(w,"projectionMatrix",v.projectionMatrix),Ye.setValue(w,"viewMatrix",v.matrixWorldInverse);const zt=Ye.map.cameraPosition;zt!==void 0&&zt.setValue(w,ot.setFromMatrixPosition(v.matrixWorld)),le.logarithmicDepthBuffer&&Ye.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ye.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),A!==v&&(A=v,ft=!0,lt=!0)}if(U.isSkinnedMesh){Ye.setOptional(w,U,"bindMatrix"),Ye.setOptional(w,U,"bindMatrixInverse");const Tt=U.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Ye.setValue(w,"boneTexture",Tt.boneTexture,b))}U.isBatchedMesh&&(Ye.setOptional(w,U,"batchingTexture"),Ye.setValue(w,"batchingTexture",U._matricesTexture,b),Ye.setOptional(w,U,"batchingIdTexture"),Ye.setValue(w,"batchingIdTexture",U._indirectTexture,b),Ye.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&Ye.setValue(w,"batchingColorTexture",U._colorsTexture,b));const qt=I.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ze.update(U,I,pt),(ft||Oe.receiveShadow!==U.receiveShadow)&&(Oe.receiveShadow=U.receiveShadow,Ye.setValue(w,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(It.envMap.value=oe,It.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(It.envMapIntensity.value=D.environmentIntensity),ft&&(Ye.setValue(w,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&Pi(It,lt),X&&B.fog===!0&&xe.refreshFogUniforms(It,X),xe.refreshMaterialUniforms(It,B,j,ee,p.state.transmissionRenderTarget[v.id]),pl.upload(w,vo(Oe),It,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(pl.upload(w,vo(Oe),It,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ye.setValue(w,"center",U.center),Ye.setValue(w,"modelViewMatrix",U.modelViewMatrix),Ye.setValue(w,"normalMatrix",U.normalMatrix),Ye.setValue(w,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Tt=B.uniformsGroups;for(let zt=0,Ql=Tt.length;zt<Ql;zt++){const Ir=Tt[zt];q.update(Ir,pt),q.bind(Ir,pt)}}return pt}function Pi(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function nr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,D,I){re.get(v.texture).__webglTexture=D,re.get(v.depthTexture).__webglTexture=I;const B=re.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=I===void 0,B.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const I=re.get(v);I.__webglFramebuffer=D,I.__useDefaultFramebuffer=D===void 0};const x=w.createFramebuffer();this.setRenderTarget=function(v,D=0,I=0){N=v,L=D,P=I;let B=!0,U=null,X=!1,K=!1;if(v){const oe=re.get(v);if(oe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(oe.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(oe.__hasExternalTextures)b.rebindTextures(v,re.get(v.texture).__webglTexture,re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ge=v.depthTexture;if(oe.__boundDepthTexture!==ge){if(ge!==null&&re.has(ge)&&(v.width!==ge.image.width||v.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}const fe=v.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(K=!0);const de=re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(de[D])?U=de[D][I]:U=de[D],X=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?U=re.get(v).__webglMultisampledFramebuffer:Array.isArray(de)?U=de[I]:U=de,k.copy(v.viewport),G.copy(v.scissor),V=v.scissorTest}else k.copy(De).multiplyScalar(j).floor(),G.copy(Le).multiplyScalar(j).floor(),V=je;if(I!==0&&(U=x),ue.bindFramebuffer(w.FRAMEBUFFER,U)&&B&&ue.drawBuffers(v,U),ue.viewport(k),ue.scissor(G),ue.setScissorTest(V),X){const oe=re.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,oe.__webglTexture,I)}else if(K){const oe=re.get(v.texture),fe=D;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,oe.__webglTexture,I,fe)}else if(v!==null&&I!==0){const oe=re.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,oe.__webglTexture,I)}S=-1},this.readRenderTargetPixels=function(v,D,I,B,U,X,K){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&K!==void 0&&(Z=Z[K]),Z){ue.bindFramebuffer(w.FRAMEBUFFER,Z);try{const oe=v.texture,fe=oe.format,de=oe.type;if(!le.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&I>=0&&I<=v.height-U&&w.readPixels(D,I,B,U,He.convert(fe),He.convert(de),X)}finally{const oe=N!==null?re.get(N).__webglFramebuffer:null;ue.bindFramebuffer(w.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(v,D,I,B,U,X,K){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&K!==void 0&&(Z=Z[K]),Z){const oe=v.texture,fe=oe.format,de=oe.type;if(!le.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-B&&I>=0&&I<=v.height-U){ue.bindFramebuffer(w.FRAMEBUFFER,Z);const ge=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ge),w.bufferData(w.PIXEL_PACK_BUFFER,X.byteLength,w.STREAM_READ),w.readPixels(D,I,B,U,He.convert(fe),He.convert(de),0);const ve=N!==null?re.get(N).__webglFramebuffer:null;ue.bindFramebuffer(w.FRAMEBUFFER,ve);const Ee=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ay(w,Ee,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ge),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,X),w.deleteBuffer(ge),w.deleteSync(Ee),X}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,I=0){v.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-I),U=Math.floor(v.image.width*B),X=Math.floor(v.image.height*B),K=D!==null?D.x:0,Z=D!==null?D.y:0;b.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,I,0,0,K,Z,U,X),ue.unbindTexture()};const R=w.createFramebuffer(),F=w.createFramebuffer();this.copyTextureToTexture=function(v,D,I=null,B=null,U=0,X=null){v.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],D=arguments[2],X=arguments[3]||0,I=null),X===null&&(U!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),X=U,U=0):X=0);let K,Z,oe,fe,de,ge,ve,Ee,Fe;const Xe=v.isCompressedTexture?v.mipmaps[X]:v.image;if(I!==null)K=I.max.x-I.min.x,Z=I.max.y-I.min.y,oe=I.isBox3?I.max.z-I.min.z:1,fe=I.min.x,de=I.min.y,ge=I.isBox3?I.min.z:0;else{const qt=Math.pow(2,-U);K=Math.floor(Xe.width*qt),Z=Math.floor(Xe.height*qt),v.isDataArrayTexture?oe=Xe.depth:v.isData3DTexture?oe=Math.floor(Xe.depth*qt):oe=1,fe=0,de=0,ge=0}B!==null?(ve=B.x,Ee=B.y,Fe=B.z):(ve=0,Ee=0,Fe=0);const Ge=He.convert(D.format),Oe=He.convert(D.type);let et;D.isData3DTexture?(b.setTexture3D(D,0),et=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),et=w.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),et=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const Be=w.getParameter(w.UNPACK_ROW_LENGTH),pt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),kt=w.getParameter(w.UNPACK_SKIP_PIXELS),ft=w.getParameter(w.UNPACK_SKIP_ROWS),lt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,de),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ge);const Ye=v.isDataArrayTexture||v.isData3DTexture,It=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const qt=re.get(v),Tt=re.get(D),zt=re.get(qt.__renderTarget),Ql=re.get(Tt.__renderTarget);ue.bindFramebuffer(w.READ_FRAMEBUFFER,zt.__webglFramebuffer),ue.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Ir=0;Ir<oe;Ir++)Ye&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,re.get(v).__webglTexture,U,ge+Ir),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,re.get(D).__webglTexture,X,Fe+Ir)),w.blitFramebuffer(fe,de,K,Z,ve,Ee,K,Z,w.DEPTH_BUFFER_BIT,w.NEAREST);ue.bindFramebuffer(w.READ_FRAMEBUFFER,null),ue.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||re.has(v)){const qt=re.get(v),Tt=re.get(D);ue.bindFramebuffer(w.READ_FRAMEBUFFER,R),ue.bindFramebuffer(w.DRAW_FRAMEBUFFER,F);for(let zt=0;zt<oe;zt++)Ye?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,qt.__webglTexture,U,ge+zt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,qt.__webglTexture,U),It?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,X,Fe+zt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Tt.__webglTexture,X),U!==0?w.blitFramebuffer(fe,de,K,Z,ve,Ee,K,Z,w.COLOR_BUFFER_BIT,w.NEAREST):It?w.copyTexSubImage3D(et,X,ve,Ee,Fe+zt,fe,de,K,Z):w.copyTexSubImage2D(et,X,ve,Ee,fe,de,K,Z);ue.bindFramebuffer(w.READ_FRAMEBUFFER,null),ue.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else It?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(et,X,ve,Ee,Fe,K,Z,oe,Ge,Oe,Xe.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(et,X,ve,Ee,Fe,K,Z,oe,Ge,Xe.data):w.texSubImage3D(et,X,ve,Ee,Fe,K,Z,oe,Ge,Oe,Xe):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,X,ve,Ee,K,Z,Ge,Oe,Xe.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,X,ve,Ee,Xe.width,Xe.height,Ge,Xe.data):w.texSubImage2D(w.TEXTURE_2D,X,ve,Ee,K,Z,Ge,Oe,Xe);w.pixelStorei(w.UNPACK_ROW_LENGTH,Be),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,lt),X===0&&D.generateMipmaps&&w.generateMipmap(et),ue.unbindTexture()},this.copyTextureToTexture3D=function(v,D,I=null,B=null,U=0){return v.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,B=arguments[1]||null,v=arguments[2],D=arguments[3],U=arguments[4]||0),Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,I,B,U)},this.initRenderTarget=function(v){re.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),ue.unbindTexture()},this.resetState=function(){L=0,P=0,N=null,ue.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const Ap={type:"change"},pf={type:"start"},k_={type:"end"},nl=new fo,wp=new Vi,DA=Math.cos(70*x_.DEG2RAD),Ht=new W,vn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6;class IA extends qM{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new ii,this._lastTargetPosition=new W,this._quat=new ii().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ep,this._sphericalDelta=new ep,this._scale=1,this._panOffset=new W,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new W,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NA.bind(this),this._onPointerDown=LA.bind(this),this._onPointerUp=UA.bind(this),this._onContextMenu=VA.bind(this),this._onMouseWheel=BA.bind(this),this._onKeyDown=kA.bind(this),this._onTouchStart=zA.bind(this),this._onTouchMove=HA.bind(this),this._onMouseDown=OA.bind(this),this._onMouseMove=FA.bind(this),this._interceptControlDown=GA.bind(this),this._interceptControlUp=WA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ap),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<DA?this.object.lookAt(this.target):(wp.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(wp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(Ap),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function LA(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function NA(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function UA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(k_),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OA(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case Hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case Hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(pf)}function FA(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function BA(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(k_))}function kA(i){this.enabled!==!1&&this._handleKeyDown(i)}function zA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(pf)}function HA(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function VA(i){this.enabled!==!1&&i.preventDefault()}function GA(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Wn=Uint8Array,Ns=Uint16Array,XA=Int32Array,z_=new Wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),H_=new Wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),YA=new Wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),V_=function(i,e){for(var t=new Ns(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new XA(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},G_=V_(z_,2),W_=G_.b,qA=G_.r;W_[28]=258,qA[258]=28;var jA=V_(H_,0),KA=jA.b,sh=new Ns(32768);for(var At=0;At<32768;++At){var cr=(At&43690)>>1|(At&21845)<<1;cr=(cr&52428)>>2|(cr&13107)<<2,cr=(cr&61680)>>4|(cr&3855)<<4,sh[At]=((cr&65280)>>8|(cr&255)<<8)>>1}var jo=function(i,e,t){for(var n=i.length,r=0,s=new Ns(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Ns(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Ns(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[sh[h]>>l]=c}else for(a=new Ns(n),r=0;r<n;++r)i[r]&&(a[r]=sh[o[i[r]-1]++]>>15-i[r]);return a},ya=new Wn(288);for(var At=0;At<144;++At)ya[At]=8;for(var At=144;At<256;++At)ya[At]=9;for(var At=256;At<280;++At)ya[At]=7;for(var At=280;At<288;++At)ya[At]=8;var X_=new Wn(32);for(var At=0;At<32;++At)X_[At]=5;var ZA=jo(ya,9,1),$A=jo(X_,5,1),Yc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Zn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},qc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},JA=function(i){return(i+7)/8|0},QA=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Wn(i.subarray(e,t))},ew=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$n=function(i,e,t){var n=new Error(e||ew[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,$n),!t)throw n;return n},tw=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new Wn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Wn(r*3));var c=function(vt){var O=t.length;if(vt>O){var z=new Wn(Math.max(O*2,vt));z.set(t),t=z}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,_=e.m,m=e.n,p=r*8;do{if(!d){u=Zn(i,h,1);var E=Zn(i,h+1,3);if(h+=3,E)if(E==1)d=ZA,g=$A,_=9,m=5;else if(E==2){var L=Zn(i,h,31)+257,P=Zn(i,h+10,15)+4,N=L+Zn(i,h+5,31)+1;h+=14;for(var S=new Wn(N),A=new Wn(19),k=0;k<P;++k)A[YA[k]]=Zn(i,h+k*3,7);h+=P*3;for(var G=Yc(A),V=(1<<G)-1,$=jo(A,G,1),k=0;k<N;){var Q=$[Zn(i,h,V)];h+=Q&15;var T=Q>>4;if(T<16)S[k++]=T;else{var Y=0,ee=0;for(T==16?(ee=3+Zn(i,h,3),h+=2,Y=S[k-1]):T==17?(ee=3+Zn(i,h,7),h+=3):T==18&&(ee=11+Zn(i,h,127),h+=7);ee--;)S[k++]=Y}}var j=S.subarray(0,L),he=S.subarray(L);_=Yc(j),m=Yc(he),d=jo(j,_,1),g=jo(he,m,1)}else $n(1);else{var T=JA(h)+4,y=i[T-4]|i[T-3]<<8,C=T+y;if(C>r){l&&$n(0);break}a&&c(f+y),t.set(i.subarray(T,C),f),e.b=f+=y,e.p=h=C*8,e.f=u;continue}if(h>p){l&&$n(0);break}}a&&c(f+131072);for(var Se=(1<<_)-1,De=(1<<m)-1,Le=h;;Le=h){var Y=d[qc(i,h)&Se],je=Y>>4;if(h+=Y&15,h>p){l&&$n(0);break}if(Y||$n(2),je<256)t[f++]=je;else if(je==256){Le=h,d=null;break}else{var ce=je-254;if(je>264){var k=je-257,Me=z_[k];ce=Zn(i,h,(1<<Me)-1)+W_[k],h+=Me}var Te=g[qc(i,h)&De],be=Te>>4;Te||$n(3),h+=Te&15;var he=KA[be];if(be>3){var Me=H_[be];he+=qc(i,h)&(1<<Me)-1,h+=Me}if(h>p){l&&$n(0);break}a&&c(f+131072);var ke=f+ce;if(f<he){var ot=s-he,Ve=Math.min(he,ke);for(ot+f<0&&$n(3);f<Ve;++f)t[f]=n[ot+f]}for(;f<ke;++f)t[f]=t[f-he]}}e.l=d,e.p=Le,e.b=f,e.f=u,d&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?QA(t,0,f):t.subarray(0,f)},nw=new Wn(0),iw=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&$n(6,"invalid zlib data"),(i[1]>>5&1)==1&&$n(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function il(i,e){return tw(i.subarray(iw(i),-4),{i:2},e,e)}var rw=typeof TextDecoder<"u"&&new TextDecoder,sw=0;try{rw.decode(nw,{stream:!0}),sw=1}catch{}function Rp(i,e){if(e===Jv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ju||e===m_){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ju)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class ow extends RM{constructor(e){super(e),this.type=qi}parse(e){const S=Math.pow(2.7182818,2.2);function A(x,R){let F=0;for(let D=0;D<65536;++D)(D==0||x[D>>3]&1<<(D&7))&&(R[F++]=D);const v=F-1;for(;F<65536;)R[F++]=0;return v}function k(x){for(let R=0;R<16384;R++)x[R]={},x[R].len=0,x[R].lit=0,x[R].p=null}const G={l:0,c:0,lc:0};function V(x,R,F,v,D){for(;F<x;)R=R<<8|Re(v,D),F+=8;F-=x,G.l=R>>F&(1<<x)-1,G.c=R,G.lc=F}const $=new Array(59);function Q(x){for(let F=0;F<=58;++F)$[F]=0;for(let F=0;F<65537;++F)$[x[F]]+=1;let R=0;for(let F=58;F>0;--F){const v=R+$[F]>>1;$[F]=R,R=v}for(let F=0;F<65537;++F){const v=x[F];v>0&&(x[F]=v|$[v]++<<6)}}function Y(x,R,F,v,D,I){const B=R;let U=0,X=0;for(;v<=D;v++){if(B.value-R.value>F)return!1;V(6,U,X,x,B);const K=G.l;if(U=G.c,X=G.lc,I[v]=K,K==63){if(B.value-R.value>F)throw new Error("Something wrong with hufUnpackEncTable");V(8,U,X,x,B);let Z=G.l+6;if(U=G.c,X=G.lc,v+Z>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)I[v++]=0;v--}else if(K>=59){let Z=K-59+2;if(v+Z>D+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Z--;)I[v++]=0;v--}}Q(I)}function ee(x){return x&63}function j(x){return x>>6}function he(x,R,F,v){for(;R<=F;R++){const D=j(x[R]),I=ee(x[R]);if(D>>I)throw new Error("Invalid table entry");if(I>14){const B=v[D>>I-14];if(B.len)throw new Error("Invalid table entry");if(B.lit++,B.p){const U=B.p;B.p=new Array(B.lit);for(let X=0;X<B.lit-1;++X)B.p[X]=U[X]}else B.p=new Array(1);B.p[B.lit-1]=R}else if(I){let B=0;for(let U=1<<14-I;U>0;U--){const X=v[(D<<14-I)+B];if(X.len||X.p)throw new Error("Invalid table entry");X.len=I,X.lit=R,B++}}}return!0}const Se={c:0,lc:0};function De(x,R,F,v){x=x<<8|Re(F,v),R+=8,Se.c=x,Se.lc=R}const Le={c:0,lc:0};function je(x,R,F,v,D,I,B,U,X){if(x==R){v<8&&(De(F,v,D,I),F=Se.c,v=Se.lc),v-=8;let K=F>>v;if(K=new Uint8Array([K])[0],U.value+K>X)return!1;const Z=B[U.value-1];for(;K-- >0;)B[U.value++]=Z}else if(U.value<X)B[U.value++]=x;else return!1;Le.c=F,Le.lc=v}function ce(x){return x&65535}function Me(x){const R=ce(x);return R>32767?R-65536:R}const Te={a:0,b:0};function be(x,R){const F=Me(x),D=Me(R),I=F+(D&1)+(D>>1),B=I,U=I-D;Te.a=B,Te.b=U}function ke(x,R){const F=ce(x),v=ce(R),D=F-(v>>1)&65535,I=v+D-32768&65535;Te.a=I,Te.b=D}function ot(x,R,F,v,D,I,B){const U=B<16384,X=F>D?D:F;let K=1,Z,oe;for(;K<=X;)K<<=1;for(K>>=1,Z=K,K>>=1;K>=1;){oe=0;const fe=oe+I*(D-Z),de=I*K,ge=I*Z,ve=v*K,Ee=v*Z;let Fe,Xe,Ge,Oe;for(;oe<=fe;oe+=ge){let et=oe;const Be=oe+v*(F-Z);for(;et<=Be;et+=Ee){const pt=et+ve,kt=et+de,ft=kt+ve;U?(be(x[et+R],x[kt+R]),Fe=Te.a,Ge=Te.b,be(x[pt+R],x[ft+R]),Xe=Te.a,Oe=Te.b,be(Fe,Xe),x[et+R]=Te.a,x[pt+R]=Te.b,be(Ge,Oe),x[kt+R]=Te.a,x[ft+R]=Te.b):(ke(x[et+R],x[kt+R]),Fe=Te.a,Ge=Te.b,ke(x[pt+R],x[ft+R]),Xe=Te.a,Oe=Te.b,ke(Fe,Xe),x[et+R]=Te.a,x[pt+R]=Te.b,ke(Ge,Oe),x[kt+R]=Te.a,x[ft+R]=Te.b)}if(F&K){const pt=et+de;U?be(x[et+R],x[pt+R]):ke(x[et+R],x[pt+R]),Fe=Te.a,x[pt+R]=Te.b,x[et+R]=Fe}}if(D&K){let et=oe;const Be=oe+v*(F-Z);for(;et<=Be;et+=Ee){const pt=et+ve;U?be(x[et+R],x[pt+R]):ke(x[et+R],x[pt+R]),Fe=Te.a,x[pt+R]=Te.b,x[et+R]=Fe}}Z=K,K>>=1}return oe}function Ve(x,R,F,v,D,I,B,U,X){let K=0,Z=0;const oe=B,fe=Math.trunc(v.value+(D+7)/8);for(;v.value<fe;)for(De(K,Z,F,v),K=Se.c,Z=Se.lc;Z>=14;){const ge=K>>Z-14&16383,ve=R[ge];if(ve.len)Z-=ve.len,je(ve.lit,I,K,Z,F,v,U,X,oe),K=Le.c,Z=Le.lc;else{if(!ve.p)throw new Error("hufDecode issues");let Ee;for(Ee=0;Ee<ve.lit;Ee++){const Fe=ee(x[ve.p[Ee]]);for(;Z<Fe&&v.value<fe;)De(K,Z,F,v),K=Se.c,Z=Se.lc;if(Z>=Fe&&j(x[ve.p[Ee]])==(K>>Z-Fe&(1<<Fe)-1)){Z-=Fe,je(ve.p[Ee],I,K,Z,F,v,U,X,oe),K=Le.c,Z=Le.lc;break}}if(Ee==ve.lit)throw new Error("hufDecode issues")}}const de=8-D&7;for(K>>=de,Z-=de;Z>0;){const ge=R[K<<14-Z&16383];if(ge.len)Z-=ge.len,je(ge.lit,I,K,Z,F,v,U,X,oe),K=Le.c,Z=Le.lc;else throw new Error("hufDecode issues")}return!0}function vt(x,R,F,v,D,I){const B={value:0},U=F.value,X=ze(R,F),K=ze(R,F);F.value+=4;const Z=ze(R,F);if(F.value+=4,X<0||X>=65537||K<0||K>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const oe=new Array(65537),fe=new Array(16384);k(fe);const de=v-(F.value-U);if(Y(x,F,de,X,K,oe),Z>8*(v-(F.value-U)))throw new Error("Something wrong with hufUncompress");he(oe,X,K,fe),Ve(oe,fe,x,F,Z,K,I,D,B)}function O(x,R,F){for(let v=0;v<F;++v)R[v]=x[R[v]]}function z(x){for(let R=1;R<x.length;R++){const F=x[R-1]+x[R]-128;x[R]=F}}function w(x,R){let F=0,v=Math.floor((x.length+1)/2),D=0;const I=x.length-1;for(;!(D>I||(R[D++]=x[F++],D>I));)R[D++]=x[v++]}function pe(x){let R=x.byteLength;const F=new Array;let v=0;const D=new DataView(x);for(;R>0;){const I=D.getInt8(v++);if(I<0){const B=-I;R-=B+1;for(let U=0;U<B;U++)F.push(D.getUint8(v++))}else{const B=I;R-=2;const U=D.getUint8(v++);for(let X=0;X<B+1;X++)F.push(U)}}return F}function se(x,R,F,v,D,I){let B=new DataView(I.buffer);const U=F[x.idx[0]].width,X=F[x.idx[0]].height,K=3,Z=Math.floor(U/8),oe=Math.ceil(U/8),fe=Math.ceil(X/8),de=U-(oe-1)*8,ge=X-(fe-1)*8,ve={value:0},Ee=new Array(K),Fe=new Array(K),Xe=new Array(K),Ge=new Array(K),Oe=new Array(K);for(let Be=0;Be<K;++Be)Oe[Be]=R[x.idx[Be]],Ee[Be]=Be<1?0:Ee[Be-1]+oe*fe,Fe[Be]=new Float32Array(64),Xe[Be]=new Uint16Array(64),Ge[Be]=new Uint16Array(oe*64);for(let Be=0;Be<fe;++Be){let pt=8;Be==fe-1&&(pt=ge);let kt=8;for(let lt=0;lt<oe;++lt){lt==oe-1&&(kt=de);for(let Ye=0;Ye<K;++Ye)Xe[Ye].fill(0),Xe[Ye][0]=D[Ee[Ye]++],le(ve,v,Xe[Ye]),ue(Xe[Ye],Fe[Ye]),_e(Fe[Ye]);re(Fe);for(let Ye=0;Ye<K;++Ye)b(Fe[Ye],Ge[Ye],lt*64)}let ft=0;for(let lt=0;lt<K;++lt){const Ye=F[x.idx[lt]].type;for(let It=8*Be;It<8*Be+pt;++It){ft=Oe[lt][It];for(let qt=0;qt<Z;++qt){const Tt=qt*64+(It&7)*8;B.setUint16(ft+0*2*Ye,Ge[lt][Tt+0],!0),B.setUint16(ft+1*2*Ye,Ge[lt][Tt+1],!0),B.setUint16(ft+2*2*Ye,Ge[lt][Tt+2],!0),B.setUint16(ft+3*2*Ye,Ge[lt][Tt+3],!0),B.setUint16(ft+4*2*Ye,Ge[lt][Tt+4],!0),B.setUint16(ft+5*2*Ye,Ge[lt][Tt+5],!0),B.setUint16(ft+6*2*Ye,Ge[lt][Tt+6],!0),B.setUint16(ft+7*2*Ye,Ge[lt][Tt+7],!0),ft+=8*2*Ye}}if(Z!=oe)for(let It=8*Be;It<8*Be+pt;++It){const qt=Oe[lt][It]+8*Z*2*Ye,Tt=Z*64+(It&7)*8;for(let zt=0;zt<kt;++zt)B.setUint16(qt+zt*2*Ye,Ge[lt][Tt+zt],!0)}}}const et=new Uint16Array(U);B=new DataView(I.buffer);for(let Be=0;Be<K;++Be){F[x.idx[Be]].decoded=!0;const pt=F[x.idx[Be]].type;if(F[Be].type==2)for(let kt=0;kt<X;++kt){const ft=Oe[Be][kt];for(let lt=0;lt<U;++lt)et[lt]=B.getUint16(ft+lt*2*pt,!0);for(let lt=0;lt<U;++lt)B.setFloat32(ft+lt*2*pt,ie(et[lt]),!0)}}}function le(x,R,F){let v,D=1;for(;D<64;)v=R[x.value],v==65280?D=64:v>>8==255?D+=v&255:(F[D]=v,D++),x.value++}function ue(x,R){R[0]=ie(x[0]),R[1]=ie(x[1]),R[2]=ie(x[5]),R[3]=ie(x[6]),R[4]=ie(x[14]),R[5]=ie(x[15]),R[6]=ie(x[27]),R[7]=ie(x[28]),R[8]=ie(x[2]),R[9]=ie(x[4]),R[10]=ie(x[7]),R[11]=ie(x[13]),R[12]=ie(x[16]),R[13]=ie(x[26]),R[14]=ie(x[29]),R[15]=ie(x[42]),R[16]=ie(x[3]),R[17]=ie(x[8]),R[18]=ie(x[12]),R[19]=ie(x[17]),R[20]=ie(x[25]),R[21]=ie(x[30]),R[22]=ie(x[41]),R[23]=ie(x[43]),R[24]=ie(x[9]),R[25]=ie(x[11]),R[26]=ie(x[18]),R[27]=ie(x[24]),R[28]=ie(x[31]),R[29]=ie(x[40]),R[30]=ie(x[44]),R[31]=ie(x[53]),R[32]=ie(x[10]),R[33]=ie(x[19]),R[34]=ie(x[23]),R[35]=ie(x[32]),R[36]=ie(x[39]),R[37]=ie(x[45]),R[38]=ie(x[52]),R[39]=ie(x[54]),R[40]=ie(x[20]),R[41]=ie(x[22]),R[42]=ie(x[33]),R[43]=ie(x[38]),R[44]=ie(x[46]),R[45]=ie(x[51]),R[46]=ie(x[55]),R[47]=ie(x[60]),R[48]=ie(x[21]),R[49]=ie(x[34]),R[50]=ie(x[37]),R[51]=ie(x[47]),R[52]=ie(x[50]),R[53]=ie(x[56]),R[54]=ie(x[59]),R[55]=ie(x[61]),R[56]=ie(x[35]),R[57]=ie(x[36]),R[58]=ie(x[48]),R[59]=ie(x[49]),R[60]=ie(x[57]),R[61]=ie(x[58]),R[62]=ie(x[62]),R[63]=ie(x[63])}function _e(x){const R=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),D=.5*Math.cos(3*3.14159/16),I=.5*Math.cos(5*3.14159/16),B=.5*Math.cos(3*3.14159/8),U=.5*Math.cos(7*3.14159/16),X=new Array(4),K=new Array(4),Z=new Array(4),oe=new Array(4);for(let fe=0;fe<8;++fe){const de=fe*8;X[0]=v*x[de+2],X[1]=B*x[de+2],X[2]=v*x[de+6],X[3]=B*x[de+6],K[0]=F*x[de+1]+D*x[de+3]+I*x[de+5]+U*x[de+7],K[1]=D*x[de+1]-U*x[de+3]-F*x[de+5]-I*x[de+7],K[2]=I*x[de+1]-F*x[de+3]+U*x[de+5]+D*x[de+7],K[3]=U*x[de+1]-I*x[de+3]+D*x[de+5]-F*x[de+7],Z[0]=R*(x[de+0]+x[de+4]),Z[3]=R*(x[de+0]-x[de+4]),Z[1]=X[0]+X[3],Z[2]=X[1]-X[2],oe[0]=Z[0]+Z[1],oe[1]=Z[3]+Z[2],oe[2]=Z[3]-Z[2],oe[3]=Z[0]-Z[1],x[de+0]=oe[0]+K[0],x[de+1]=oe[1]+K[1],x[de+2]=oe[2]+K[2],x[de+3]=oe[3]+K[3],x[de+4]=oe[3]-K[3],x[de+5]=oe[2]-K[2],x[de+6]=oe[1]-K[1],x[de+7]=oe[0]-K[0]}for(let fe=0;fe<8;++fe)X[0]=v*x[16+fe],X[1]=B*x[16+fe],X[2]=v*x[48+fe],X[3]=B*x[48+fe],K[0]=F*x[8+fe]+D*x[24+fe]+I*x[40+fe]+U*x[56+fe],K[1]=D*x[8+fe]-U*x[24+fe]-F*x[40+fe]-I*x[56+fe],K[2]=I*x[8+fe]-F*x[24+fe]+U*x[40+fe]+D*x[56+fe],K[3]=U*x[8+fe]-I*x[24+fe]+D*x[40+fe]-F*x[56+fe],Z[0]=R*(x[fe]+x[32+fe]),Z[3]=R*(x[fe]-x[32+fe]),Z[1]=X[0]+X[3],Z[2]=X[1]-X[2],oe[0]=Z[0]+Z[1],oe[1]=Z[3]+Z[2],oe[2]=Z[3]-Z[2],oe[3]=Z[0]-Z[1],x[0+fe]=oe[0]+K[0],x[8+fe]=oe[1]+K[1],x[16+fe]=oe[2]+K[2],x[24+fe]=oe[3]+K[3],x[32+fe]=oe[3]-K[3],x[40+fe]=oe[2]-K[2],x[48+fe]=oe[1]-K[1],x[56+fe]=oe[0]-K[0]}function re(x){for(let R=0;R<64;++R){const F=x[0][R],v=x[1][R],D=x[2][R];x[0][R]=F+1.5747*D,x[1][R]=F-.1873*v-.4682*D,x[2][R]=F+1.8556*v}}function b(x,R,F){for(let v=0;v<64;++v)R[F+v]=Rd.toHalfFloat(M(x[v]))}function M(x){return x<=1?Math.sign(x)*Math.pow(Math.abs(x),2.2):Math.sign(x)*Math.pow(S,Math.abs(x)-1)}function H(x){return new DataView(x.array.buffer,x.offset.value,x.size)}function J(x){const R=x.viewer.buffer.slice(x.offset.value,x.offset.value+x.size),F=new Uint8Array(pe(R)),v=new Uint8Array(F.length);return z(F),w(F,v),new DataView(v.buffer)}function ne(x){const R=x.array.slice(x.offset.value,x.offset.value+x.size),F=il(R),v=new Uint8Array(F.length);return z(F),w(F,v),new DataView(v.buffer)}function te(x){const R=x.viewer,F={value:x.offset.value},v=new Uint16Array(x.columns*x.lines*(x.inputChannels.length*x.type)),D=new Uint8Array(8192);let I=0;const B=new Array(x.inputChannels.length);for(let ge=0,ve=x.inputChannels.length;ge<ve;ge++)B[ge]={},B[ge].start=I,B[ge].end=B[ge].start,B[ge].nx=x.columns,B[ge].ny=x.lines,B[ge].size=x.type,I+=B[ge].nx*B[ge].ny*B[ge].size;const U=ae(R,F),X=ae(R,F);if(X>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(U<=X)for(let ge=0;ge<X-U+1;ge++)D[ge+U]=We(R,F);const K=new Uint16Array(65536),Z=A(D,K),oe=ze(R,F);vt(x.array,R,F,oe,v,I);for(let ge=0;ge<x.inputChannels.length;++ge){const ve=B[ge];for(let Ee=0;Ee<B[ge].size;++Ee)ot(v,ve.start+Ee,ve.nx,ve.size,ve.ny,ve.nx*ve.size,Z)}O(K,v,I);let fe=0;const de=new Uint8Array(v.buffer.byteLength);for(let ge=0;ge<x.lines;ge++)for(let ve=0;ve<x.inputChannels.length;ve++){const Ee=B[ve],Fe=Ee.nx*Ee.size,Xe=new Uint8Array(v.buffer,Ee.end*2,Fe*2);de.set(Xe,fe),fe+=Fe*2,Ee.end+=Fe}return new DataView(de.buffer)}function Ae(x){const R=x.array.slice(x.offset.value,x.offset.value+x.size),F=il(R),v=x.inputChannels.length*x.lines*x.columns*x.totalBytes,D=new ArrayBuffer(v),I=new DataView(D);let B=0,U=0;const X=new Array(4);for(let K=0;K<x.lines;K++)for(let Z=0;Z<x.inputChannels.length;Z++){let oe=0;switch(x.inputChannels[Z].pixelType){case 1:X[0]=B,X[1]=X[0]+x.columns,B=X[1]+x.columns;for(let de=0;de<x.columns;++de){const ge=F[X[0]++]<<8|F[X[1]++];oe+=ge,I.setUint16(U,oe,!0),U+=2}break;case 2:X[0]=B,X[1]=X[0]+x.columns,X[2]=X[1]+x.columns,B=X[2]+x.columns;for(let de=0;de<x.columns;++de){const ge=F[X[0]++]<<24|F[X[1]++]<<16|F[X[2]++]<<8;oe+=ge,I.setUint32(U,oe,!0),U+=4}break}}return I}function xe(x){const R=x.viewer,F={value:x.offset.value},v=new Uint8Array(x.columns*x.lines*(x.inputChannels.length*x.type*2)),D={version:He(R,F),unknownUncompressedSize:He(R,F),unknownCompressedSize:He(R,F),acCompressedSize:He(R,F),dcCompressedSize:He(R,F),rleCompressedSize:He(R,F),rleUncompressedSize:He(R,F),rleRawSize:He(R,F),totalAcUncompressedCount:He(R,F),totalDcUncompressedCount:He(R,F),acCompression:He(R,F)};if(D.version<2)throw new Error("EXRLoader.parse: "+Pi.compression+" version "+D.version+" is unsupported");const I=new Array;let B=ae(R,F)-2;for(;B>0;){const ve=we(R.buffer,F),Ee=We(R,F),Fe=Ee>>2&3,Xe=(Ee>>4)-1,Ge=new Int8Array([Xe])[0],Oe=We(R,F);I.push({name:ve,index:Ge,type:Oe,compression:Fe}),B-=ve.length+3}const U=Pi.channels,X=new Array(x.inputChannels.length);for(let ve=0;ve<x.inputChannels.length;++ve){const Ee=X[ve]={},Fe=U[ve];Ee.name=Fe.name,Ee.compression=0,Ee.decoded=!1,Ee.type=Fe.pixelType,Ee.pLinear=Fe.pLinear,Ee.width=x.columns,Ee.height=x.lines}const K={idx:new Array(3)};for(let ve=0;ve<x.inputChannels.length;++ve){const Ee=X[ve];for(let Fe=0;Fe<I.length;++Fe){const Xe=I[Fe];Ee.name==Xe.name&&(Ee.compression=Xe.compression,Xe.index>=0&&(K.idx[Xe.index]=ve),Ee.offset=ve)}}let Z,oe,fe;if(D.acCompressedSize>0)switch(D.acCompression){case 0:Z=new Uint16Array(D.totalAcUncompressedCount),vt(x.array,R,F,D.acCompressedSize,Z,D.totalAcUncompressedCount);break;case 1:const ve=x.array.slice(F.value,F.value+D.totalAcUncompressedCount),Ee=il(ve);Z=new Uint16Array(Ee.buffer),F.value+=D.totalAcUncompressedCount;break}if(D.dcCompressedSize>0){const ve={array:x.array,offset:F,size:D.dcCompressedSize};oe=new Uint16Array(ne(ve).buffer),F.value+=D.dcCompressedSize}if(D.rleRawSize>0){const ve=x.array.slice(F.value,F.value+D.rleCompressedSize),Ee=il(ve);fe=pe(Ee.buffer),F.value+=D.rleCompressedSize}let de=0;const ge=new Array(X.length);for(let ve=0;ve<ge.length;++ve)ge[ve]=new Array;for(let ve=0;ve<x.lines;++ve)for(let Ee=0;Ee<X.length;++Ee)ge[Ee].push(de),de+=X[Ee].width*x.type*2;se(K,ge,X,Z,oe,v);for(let ve=0;ve<X.length;++ve){const Ee=X[ve];if(!Ee.decoded)switch(Ee.compression){case 2:let Fe=0,Xe=0;for(let Ge=0;Ge<x.lines;++Ge){let Oe=ge[ve][Fe];for(let et=0;et<Ee.width;++et){for(let Be=0;Be<2*Ee.type;++Be)v[Oe++]=fe[Xe+Be*Ee.width*Ee.height];Xe++}Fe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function we(x,R){const F=new Uint8Array(x);let v=0;for(;F[R.value+v]!=0;)v+=1;const D=new TextDecoder().decode(F.slice(R.value,R.value+v));return R.value=R.value+v+1,D}function qe(x,R,F){const v=new TextDecoder().decode(new Uint8Array(x).slice(R.value,R.value+F));return R.value=R.value+F,v}function ye(x,R){const F=Ue(x,R),v=ze(x,R);return[F,v]}function Pe(x,R){const F=ze(x,R),v=ze(x,R);return[F,v]}function Ue(x,R){const F=x.getInt32(R.value,!0);return R.value=R.value+4,F}function ze(x,R){const F=x.getUint32(R.value,!0);return R.value=R.value+4,F}function Re(x,R){const F=x[R.value];return R.value=R.value+1,F}function We(x,R){const F=x.getUint8(R.value);return R.value=R.value+1,F}const He=function(x,R){let F;return"getBigInt64"in DataView.prototype?F=Number(x.getBigInt64(R.value,!0)):F=x.getUint32(R.value+4,!0)+Number(x.getUint32(R.value,!0)<<32),R.value+=8,F};function Je(x,R){const F=x.getFloat32(R.value,!0);return R.value+=4,F}function q(x,R){return Rd.toHalfFloat(Je(x,R))}function ie(x){const R=(x&31744)>>10,F=x&1023;return(x>>15?-1:1)*(R?R===31?F?NaN:1/0:Math.pow(2,R-15)*(1+F/1024):6103515625e-14*(F/1024))}function ae(x,R){const F=x.getUint16(R.value,!0);return R.value+=2,F}function me(x,R){return ie(ae(x,R))}function Ne(x,R,F,v){const D=F.value,I=[];for(;F.value<D+v-1;){const B=we(R,F),U=Ue(x,F),X=We(x,F);F.value+=3;const K=Ue(x,F),Z=Ue(x,F);I.push({name:B,pixelType:U,pLinear:X,xSampling:K,ySampling:Z})}return F.value+=1,I}function Ie(x,R){const F=Je(x,R),v=Je(x,R),D=Je(x,R),I=Je(x,R),B=Je(x,R),U=Je(x,R),X=Je(x,R),K=Je(x,R);return{redX:F,redY:v,greenX:D,greenY:I,blueX:B,blueY:U,whiteX:X,whiteY:K}}function Qe(x,R){const F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=We(x,R);return F[v]}function wt(x,R){const F=Ue(x,R),v=Ue(x,R),D=Ue(x,R),I=Ue(x,R);return{xMin:F,yMin:v,xMax:D,yMax:I}}function Yt(x,R){const F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=We(x,R);return F[v]}function dt(x,R){const F=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=We(x,R);return F[v]}function Rn(x,R){const F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],D=ze(x,R),I=ze(x,R),B=We(x,R);return{xSize:D,ySize:I,levelMode:F[B&15],roundingMode:v[B>>4]}}function Yn(x,R){const F=Je(x,R),v=Je(x,R);return[F,v]}function Sa(x,R){const F=Je(x,R),v=Je(x,R),D=Je(x,R);return[F,v,D]}function Ta(x,R,F,v,D){if(v==="string"||v==="stringvector"||v==="iccProfile")return qe(R,F,D);if(v==="chlist")return Ne(x,R,F,D);if(v==="chromaticities")return Ie(x,F);if(v==="compression")return Qe(x,F);if(v==="box2i")return wt(x,F);if(v==="envmap")return dt(x,F);if(v==="tiledesc")return Rn(x,F);if(v==="lineOrder")return Yt(x,F);if(v==="float")return Je(x,F);if(v==="v2f")return Yn(x,F);if(v==="v3f")return Sa(x,F);if(v==="int")return Ue(x,F);if(v==="rational")return ye(x,F);if(v==="timecode")return Pe(x,F);if(v==="preview")return F.value+=D,"skipped";F.value+=D}function Ci(x,R){const F=Math.log2(x);return R=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function go(x,R,F){let v=0;switch(x.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=Ci(Math.max(R,F),x.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function xo(x,R,F,v){const D=new Array(x);for(let I=0;I<x;I++){const B=1<<I;let U=R/B|0;v=="ROUND_UP"&&U*B<R&&(U+=1);const X=Math.max(U,1);D[I]=(X+F-1)/F|0}return D}function Ea(){const x=this,R=x.offset,F={value:0};for(let v=0;v<x.tileCount;v++){const D=Ue(x.viewer,R),I=Ue(x.viewer,R);R.value+=8,x.size=ze(x.viewer,R);const B=D*x.blockWidth,U=I*x.blockHeight;x.columns=B+x.blockWidth>x.width?x.width-B:x.blockWidth,x.lines=U+x.blockHeight>x.height?x.height-U:x.blockHeight;const X=x.columns*x.totalBytes,Z=x.size<x.lines*X?x.uncompress(x):H(x);R.value+=x.size;for(let oe=0;oe<x.lines;oe++){const fe=oe*x.columns*x.totalBytes;for(let de=0;de<x.inputChannels.length;de++){const ge=Pi.channels[de].name,ve=x.channelByteOffsets[ge]*x.columns,Ee=x.decodeChannels[ge];if(Ee===void 0)continue;F.value=fe+ve;const Fe=(x.height-(1+U+oe))*x.outLineWidth;for(let Xe=0;Xe<x.columns;Xe++){const Ge=Fe+(Xe+B)*x.outputChannels+Ee;x.byteArray[Ge]=x.getter(Z,F)}}}}}function fs(){const x=this,R=x.offset,F={value:0};for(let v=0;v<x.height/x.blockHeight;v++){const D=Ue(x.viewer,R)-Pi.dataWindow.yMin;x.size=ze(x.viewer,R),x.lines=D+x.blockHeight>x.height?x.height-D:x.blockHeight;const I=x.columns*x.totalBytes,U=x.size<x.lines*I?x.uncompress(x):H(x);R.value+=x.size;for(let X=0;X<x.blockHeight;X++){const K=v*x.blockHeight,Z=X+x.scanOrder(K);if(Z>=x.height)continue;const oe=X*I,fe=(x.height-1-Z)*x.outLineWidth;for(let de=0;de<x.inputChannels.length;de++){const ge=Pi.channels[de].name,ve=x.channelByteOffsets[ge]*x.columns,Ee=x.decodeChannels[ge];if(Ee!==void 0){F.value=oe+ve;for(let Fe=0;Fe<x.columns;Fe++){const Xe=fe+Fe*x.outputChannels+Ee;x.byteArray[Xe]=x.getter(U,F)}}}}}}function ba(x,R,F){const v={};if(x.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=x.getUint8(4);const D=x.getUint8(5);v.spec={singleTile:!!(D&2),longName:!!(D&4),deepFormat:!!(D&8),multiPart:!!(D&16)},F.value=8;let I=!0;for(;I;){const B=we(R,F);if(B==0)I=!1;else{const U=we(R,F),X=ze(x,F),K=Ta(x,R,F,U,X);K===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):v[B]=K}}if((D&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function ds(x,R,F,v,D){const I={size:0,viewer:R,array:F,offset:v,width:x.dataWindow.xMax-x.dataWindow.xMin+1,height:x.dataWindow.yMax-x.dataWindow.yMin+1,inputChannels:x.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:en};switch(x.compression){case"NO_COMPRESSION":I.blockHeight=1,I.uncompress=H;break;case"RLE_COMPRESSION":I.blockHeight=1,I.uncompress=J;break;case"ZIPS_COMPRESSION":I.blockHeight=1,I.uncompress=ne;break;case"ZIP_COMPRESSION":I.blockHeight=16,I.uncompress=ne;break;case"PIZ_COMPRESSION":I.blockHeight=32,I.uncompress=te;break;case"PXR24_COMPRESSION":I.blockHeight=16,I.uncompress=Ae;break;case"DWAA_COMPRESSION":I.blockHeight=32,I.uncompress=xe;break;case"DWAB_COMPRESSION":I.blockHeight=256,I.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+x.compression+" is unsupported")}const B={};for(const Z of x.channels)switch(Z.name){case"Y":case"R":case"G":case"B":case"A":B[Z.name]=!0,I.type=Z.pixelType}let U=!1;if(B.R&&B.G&&B.B)U=!B.A,I.outputChannels=4,I.decodeChannels={R:0,G:1,B:2,A:3};else if(B.Y)I.outputChannels=1,I.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(I.type==1)switch(D){case yn:I.getter=me;break;case qi:I.getter=ae;break}else if(I.type==2)switch(D){case yn:I.getter=Je;break;case qi:I.getter=q}else throw new Error("EXRLoader.parse: unsupported pixelType "+I.type+" for "+x.compression+".");I.columns=I.width;const X=I.width*I.height*I.outputChannels;switch(D){case yn:I.byteArray=new Float32Array(X),U&&I.byteArray.fill(1,0,X);break;case qi:I.byteArray=new Uint16Array(X),U&&I.byteArray.fill(15360,0,X);break;default:console.error("THREE.EXRLoader: unsupported type: ",D);break}let K=0;for(const Z of x.channels)I.decodeChannels[Z.name]!==void 0&&(I.channelByteOffsets[Z.name]=K),K+=Z.pixelType*2;if(I.totalBytes=K,I.outLineWidth=I.width*I.outputChannels,x.lineOrder==="INCREASING_Y"?I.scanOrder=Z=>Z:I.scanOrder=Z=>I.height-1-Z,I.outputChannels==4?(I.format=On,I.colorSpace=en):(I.format=ql,I.colorSpace=Xi),x.spec.singleTile){I.blockHeight=x.tiles.ySize,I.blockWidth=x.tiles.xSize;const Z=go(x.tiles,I.width,I.height),oe=xo(Z,I.width,x.tiles.xSize,x.tiles.roundingMode),fe=xo(Z,I.height,x.tiles.ySize,x.tiles.roundingMode);I.tileCount=oe[0]*fe[0];for(let de=0;de<Z;de++)for(let ge=0;ge<fe[de];ge++)for(let ve=0;ve<oe[de];ve++)He(R,v);I.decode=Ea.bind(I)}else{I.blockWidth=I.width;const Z=Math.ceil(I.height/I.blockHeight);for(let oe=0;oe<Z;oe++)He(R,v);I.decode=fs.bind(I)}return I}const vo={value:0},yo=new DataView(e),Jl=new Uint8Array(e),Pi=ba(yo,e,vo),nr=ds(Pi,yo,Jl,vo,this.type);return nr.decode(),{header:Pi,width:nr.width,height:nr.height,data:nr.byteArray,format:nr.format,colorSpace:nr.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=Kt,o.magFilter=Kt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}class Cp extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new bw(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=qo.extractUrlBase(e);o=qo.resolveURL(c,this.path)}else o=qo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new af(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Y_){try{o[at.KHR_BINARY_GLTF]=new Aw(e)}catch(h){r&&r(h);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new cw;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new ww(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Rw;break;case at.KHR_MESH_QUANTIZATION:o[h]=new Cw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function aw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lw{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new NM(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new IM(u),c.distance=h;break;case"spot":c=new PM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class cw{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Zr}extendParams(e,t,n){const r=[];e.color=new Ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(r)}}class uw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(s)}}class fw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class dw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class pw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class mw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],en),Promise.all(s)}}class gw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class xw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$t)),Promise.all(s)}}class vw{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class yw{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Sw{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tw{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ew{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class bw{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new $e,m=new W,p=new ii,E=new W(1,1,1),T=new aM(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&E.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,_.compose(m,p,E));for(const y in l)if(y==="_COLOR_0"){const C=l[y];T.instanceColor=new th(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Dt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Y_="glTF",Do=12,Pp={JSON:1313821514,BIN:5130562};class Aw{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Do),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Y_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Do,s=new DataView(e,Do);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Pp.JSON){const c=new Uint8Array(e,Do+o,a);this.content=n.decode(c)}else if(l===Pp.BIN){const c=Do+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ww{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=oh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=oh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Xs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,en,f)})})}}class Rw{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cw{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class q_ extends va{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,E=1-m,T=p-f+h;for(let y=0;y!==a;y++){const C=o[_+y+a],L=o[_+y+l]*u,P=o[g+y+a],N=o[g+y]*u;s[y]=E*C+T*L+m*P+p*N}return s}}const Pw=new ii;class Dw extends q_{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Pw.fromArray(s).normalize().toArray(s),s}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:gn,9729:Kt,9984:s_,9985:ll,9986:No,9987:mi},Ip={33071:pi,33648:Al,10497:Er},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iw={CUBICSPLINE:void 0,LINEAR:oa,STEP:sa},Kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new of({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),i.DefaultMaterial}function Hr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nw(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Uw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ow(i){let e;const t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zc(t.attributes):e=i.indices+":"+Zc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Zc(i.targets[n]);return e}function Zc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ah(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Bw=new $e;class kw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new L_(this.options.manager):this.textureLoader=new UM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new af(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Hr(s,a,r),zi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(qo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=jc[r.type],a=Xs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Jt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=jc[r.type],c=Xs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let T=t.cache.get(E);T||(_=new c(a,p*d,r.count*d/u),T=new nM(_,d/u),t.cache.add(E,T)),m=new Qh(T,l,f%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),m=new Jt(_,l,g);if(r.sparse!==void 0){const p=jc.SCALAR,E=Xs[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new E(o[1],T,r.sparse.count*p),L=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,N=C.length;P<N;P++){const S=C[P];if(m.setX(S,L[P*l]),l>=2&&m.setY(S,L[P*l+1]),l>=3&&m.setZ(S,L[P*l+2]),l>=4&&m.setW(S,L[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Dp[f.magFilter]||Kt,u.minFilter=Dp[f.minFilter]||mi,u.wrapS=Ip[f.wrapS]||Er,u.wrapT=Ip[f.wrapT]||Er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Kt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,f(m)}),t.load(qo.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),zi(h,o),h.userData.mimeType=o.mimeType||Fw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sf,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new R_,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return of}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){const h=r[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],en),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,$t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=hi);const u=s.alphaMode||Kc.OPAQUE;if(u===Kc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Zr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Zr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Zr){const h=s.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],en)}return s.emissiveTexture!==void 0&&o!==Zr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Hr(r,h,s),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Ow(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Lp(new ri,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Lw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const E=c[d];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new rM(_,E):new Mn(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=Rp(p.geometry,m_):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=Rp(p.geometry,Ju));else if(m.mode===Gn.LINES)p=new uM(_,E);else if(m.mode===Gn.LINE_STRIP)p=new rf(_,E);else if(m.mode===Gn.LINE_LOOP)p=new hM(_,E);else if(m.mode===Gn.POINTS)p=new C_(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Uw(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zi(p,s),m.extensions&&Hr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Hr(r,h[0],s),h[0];const f=new $r;s.extensions&&Hr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(x_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new uf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new $e;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tf(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,E=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,T=f.length;E<T;E++){const y=f[E],C=d[E],L=g[E],P=_[E],N=m[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,C,L,P,N);if(S)for(let A=0;A<S.length;A++)p.push(S[A])}return new MM(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Bw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new w_:c.length>1?u=new $r:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),zi(u,s),s.extensions&&Hr(n,u,s),s.matrix!==void 0){const h=new $e;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new $r;n.name&&(s.name=r.createUniqueName(n.name)),zi(s,n),n.extensions&&Hr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof xi||f instanceof Vt)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];ur[s.path]===ur.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ur[s.path]){case ur.weights:c=io;break;case ur.rotation:c=ro;break;case ur.position:case ur.scale:c=so;break;default:switch(n.itemSize){case 1:c=io;break;case 2:case 3:default:c=so;break}break}const u=r.interpolation!==void 0?Iw[r.interpolation]:oa,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ur[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ah(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ro?Dw:q_;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zw(i,e,t){const n=e.attributes,r=new bi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),a.normalized){const u=ah(Xs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new W,l=new W;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=ah(Xs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Ai;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Lp(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=oh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ut.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),zi(i,e),zw(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Nw(i,e.targets,t):i})}class Hw extends Mn{constructor(e,t={}){super(e),this.isWater=!0;const n=this,r=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new W(.70707,.70707,0),h=new Ke(t.sunColor!==void 0?t.sunColor:16777215),f=new Ke(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new W(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Si,m=t.fog!==void 0?t.fog:!1,p=new Vi,E=new W,T=new W,y=new W,C=new $e,L=new W(0,0,-1),P=new ht,N=new W,S=new W,A=new ht,k=new $e,G=new sn,V=new br(r,s),$={name:"MirrorShader",uniforms:eh.merge([Ce.fog,Ce.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new $e},sunColor:{value:new Ke(8355711)},sunDirection:{value:new W(.70707,.70707,0)},eye:{value:new W},waterColor:{value:new Ke(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Q=new Ji({name:$.name,uniforms:eh.clone($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,lights:!0,side:_,fog:m});Q.uniforms.mirrorSampler.value=V.texture,Q.uniforms.textureMatrix.value=k,Q.uniforms.alpha.value=a,Q.uniforms.time.value=l,Q.uniforms.normalSampler.value=c,Q.uniforms.sunColor.value=h,Q.uniforms.waterColor.value=f,Q.uniforms.sunDirection.value=u,Q.uniforms.distortionScale.value=g,Q.uniforms.eye.value=d,n.material=Q,n.onBeforeRender=function(Y,ee,j){if(T.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(j.matrixWorld),C.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(C),N.subVectors(T,y),N.dot(E)>0)return;N.reflect(E).negate(),N.add(T),C.extractRotation(j.matrixWorld),L.set(0,0,-1),L.applyMatrix4(C),L.add(y),S.subVectors(T,L),S.reflect(E).negate(),S.add(T),G.position.copy(N),G.up.set(0,1,0),G.up.applyMatrix4(C),G.up.reflect(E),G.lookAt(S),G.far=j.far,G.updateMatrixWorld(),G.projectionMatrix.copy(j.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(G.projectionMatrix),k.multiply(G.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(E,T),p.applyMatrix4(G.matrixWorldInverse),P.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const he=G.projectionMatrix;A.x=(Math.sign(P.x)+he.elements[8])/he.elements[0],A.y=(Math.sign(P.y)+he.elements[9])/he.elements[5],A.z=-1,A.w=(1+he.elements[10])/he.elements[14],P.multiplyScalar(2/P.dot(A)),he.elements[2]=P.x,he.elements[6]=P.y,he.elements[10]=P.z+1-o,he.elements[14]=P.w,d.setFromMatrixPosition(j.matrixWorld);const Se=Y.getRenderTarget(),De=Y.xr.enabled,Le=Y.shadowMap.autoUpdate;n.visible=!1,Y.xr.enabled=!1,Y.shadowMap.autoUpdate=!1,Y.setRenderTarget(V),Y.state.buffers.depth.setMask(!0),Y.autoClear===!1&&Y.clear(),Y.render(ee,G),n.visible=!0,Y.xr.enabled=De,Y.shadowMap.autoUpdate=Le,Y.setRenderTarget(Se);const je=j.viewport;je!==void 0&&Y.state.viewport(je)}}}function Hi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function j_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},mf,Qt,Rt,vi=1e8,an=1/vi,lh=Math.PI*2,Vw=lh/4,Gw=0,K_=Math.sqrt,Ww=Math.cos,Xw=Math.sin,Zt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},_f=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},gf=function(){return typeof window<"u"},rl=function(e){return Lt(e)||Zt(e)},Z_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,ch=/(?:-?\.?\d|\.)+/gi,$_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$c=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,J_=/[+-]=-?[.\d]+/,Q_=/[^,'"\[\]\s]+/gi,Yw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,ai,uh,xf,kn={},Dl={},eg,tg=function(e){return(Dl=ao(e,kn))&&wn},vf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},la=function(e,t){return!t&&console.warn(e)},ng=function(e,t){return e&&(kn[e]=t)&&Dl&&(Dl[e]=t)||kn},ca=function(){return 0},qw={suppressEvents:!0,isStart:!0,kill:!1},ml={suppressEvents:!0,kill:!1},jw={suppressEvents:!0},yf={},Mr=[],hh={},ig,Ln={},Jc={},Np=30,_l=[],Mf="",Sf=function(e){var t=e[0],n,r;if(Ei(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=_l.length;r--&&!_l[r].targetTest(t););n=_l[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wg(e[r],n)))||e.splice(r,1);return e},ts=function(e){return e._gsap||Sf(Xn(e))[0]._gsap},rg=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():_f(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Ys=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Kw=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Il=function(){var e=Mr.length,t=Mr.slice(0),n,r;for(hh={},Mr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},sg=function(e,t,n,r){Mr.length&&!Qt&&Il(),e.render(t,n,Qt&&t<0&&(e._initted||e._startAt)),Mr.length&&!Qt&&Il()},og=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q_).length<2?t:Zt(e)?e.trim():e},ag=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zw=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ao=function(e,t){for(var n in t)e[n]=t[n];return e},Up=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ei(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ll=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ko=function(e){var t=e.parent||Ct,n=e.keyframes?Zw(cn(e.keyframes)):zn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$w=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},lg=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Kl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ar=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Jw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},fh=function(e,t,n,r){return e._startAt&&(Qt?e._startAt.revert(ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Qw=function i(e){return!e||e._ts&&i(e.parent)},Op=function(e){return e._repeat?lo(e._tTime,e=e.duration()+e._rDelay)*e:0},lo=function(e,t){var n=Math.floor(e=Bt(e/t));return e&&n===e?n-1:n},Nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zl=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||an)||0))},$l=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zl(e),n._dirty||ns(n,e)),e},cg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nl(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>an)&&t.render(n,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},fi=function(e,t,n,r){return t.parent&&Ar(t),t._start=Bt((Qi(n)?n:n||e!==Ct?Vn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lg(e,t,"_first","_last",e._sort?"_start":0),dh(t)||(e._recent=t),r||cg(e,t),e._ts<0&&$l(e,e._tTime),e},ug=function(e,t){return(kn.ScrollTrigger||vf("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},hg=function(e,t,n,r,s){if(Ef(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ig!==Nn.frame)return Mr.push(e),e._lazy=[s,r],1},e1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},dh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},t1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&e1(e)&&!(!e._initted&&dh(e))||(e._ts<0||e._dp._ts<0)&&!dh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ma(0,e._tDur,t),u=lo(l,a),e._yoyo&&u&1&&(o=1-o),u!==lo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===an||!t&&e._zTime){if(!e._initted&&hg(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?an:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&fh(e,t,n,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ar(e,1),!n&&!Qt&&(Fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},n1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},co=function(e,t,n,r){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$l(e,e._tTime=e._tDur*a),e.parent&&Zl(e),n||ns(e.parent,e),e},Fp=function(e){return e instanceof _n?ns(e):co(e,e._dur)},i1={_start:0,endTime:ca,totalDuration:ca},Vn=function i(e,t,n){var r=e.labels,s=e._recent||i1,o=e.duration()>=vi?s.endTime(!1):e._dur,a,l,c;return Zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zo=function(e,t,n){var r=Qi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ft(t[0],o,t[s+1])},Dr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Zt(e)||!(t=Yw.exec(e))?"":t[1]},r1=function(e,t,n){return Dr(n,function(r){return Ma(e,t,r)})},ph=[].slice,fg=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==ai},s1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Zt(r)&&!t||fg(r,1)?(s=n).push.apply(s,Xn(r)):n.push(r)})||n},Xn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Zt(e)&&!n&&(uh||!uo())?ph.call((t||xf).querySelectorAll(e),0):cn(e)?s1(e,n):fg(e)?ph.call(e,0):e?[e]:[]},mh=function(e){return e=Xn(e)[0]||la("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?la("Invalid scope")||xf.createElement("div"):e)}},dg=function(e){return e.sort(function(){return .5-Math.random()})},pg=function(e){if(Lt(e))return e;var t=Ei(e)?e:{each:e},n=is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Zt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,E,T,y,C,L,P,N,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,vi])[1],!S){for(P=-1e8;P<(P=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,E=S===vi?0:l?_*h/S-.5:r/S|0,P=0,N=vi,L=0;L<_;L++)T=L%S-p,y=E-(L/S|0),m[L]=C=c?Math.abs(c==="y"?y:T):K_(T*T+y*y),C>P&&(P=C),C<N&&(N=C);r==="random"&&dg(m),m.max=P-N,m.min=N,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=on(t.amount||t.each)||0,n=n&&_<0?Eg(n):n}return _=(m[f]-m.min)/m.max||0,Bt(m.b+(n?n(_):_)*m.v)+m.u}},_h=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Qi(n)?0:on(n))}},mg=function(e,t){var n=cn(e),r,s;return!n&&Ei(e)&&(r=n=e.radius||vi,e.values?(e=Xn(e.values),(s=!Qi(e[0]))&&(r*=r)):e=_h(e.increment)),Dr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Qi(o)?u:u+on(o)}:_h(e))},_g=function(e,t,n,r){return Dr(cn(e)?!t:n===!0?!!(n=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},o1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},a1=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},l1=function(e,t,n){return xg(e,t,0,1,n)},gg=function(e,t,n){return Dr(n,function(r){return e[~~t(r)]})},c1=function i(e,t,n){var r=t-e;return cn(e)?gg(e,i(0,e.length),t):Dr(n,function(s){return(r+(s-e)%r)%r+e})},u1=function i(e,t,n){var r=t-e,s=r*2;return cn(e)?gg(e,i(0,e.length-1),t):Dr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ua=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Q_:ch),n+=e.substr(t,r-t)+_g(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},xg=function(e,t,n,r,s){var o=t-e,a=r-n;return Dr(s,function(l){return n+((l-e)/o*a||0)})},h1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Zt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=ao(cn(e)?[]:{},e));if(!u){for(l in t)Tf.call(a,e,l,"get",t[l]);s=function(g){return wf(g,a)||(o?e.p:e)}}}return Dr(n,s)},Bp=function(e,t,n){var r=e.labels,s=vi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(e,t,n){var r=e.vars,s=r[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Mr.length&&Il(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},Oo=function(e){return Ar(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Fn(e,"onInterrupt"),e},Os,vg=[],yg=function(e){if(e)if(e=!e.name&&e.default||e,gf()||e.headless){var t=e.name,n=Lt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ca,render:wf,add:Tf,kill:w1,modifier:A1,rawVars:0},o={targetTest:0,get:0,getSetter:Af,aliases:{},register:0};if(uo(),e!==r){if(Ln[t])return;zn(r,zn(Ll(e,s),o)),ao(r.prototype,ao(s,Ll(e,o))),Ln[r.prop=t]=r,e.targetTest&&(_l.push(r),yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ng(t,r),e.register&&e.register(wn,r,bn)}else vg.push(e)},St=255,Fo={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Qc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Mg=function(e,t,n){var r=e?Qi(e)?[e>>16,e>>8&St,e&St]:0:Fo.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fo[e])r=Fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(ch),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Qc(l+1/3,s,o),r[1]=Qc(l,s,o),r[2]=Qc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match($_),n&&r.length<4&&(r[3]=1),r}else r=e.match(ch)||Fo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Sg=function(e){var t=[],n=[],r=-1;return e.split(Sr).forEach(function(s){var o=s.match(Us)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},kp=function(e,t,n){var r="",s=(e+r).match(Sr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Mg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Sg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Sr,"1").split(Us),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Sr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Sr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),f1=/hsl[a]?\(/,Tg=function(e){var t=e.join(" "),n;if(Sr.lastIndex=0,Sr.test(t))return n=f1.test(t),e[1]=kp(e[1],n),e[0]=kp(e[0],n,Sg(e[1])),!0},ha,Nn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=i()-r,E=m===!0,T,y,C,L;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,T=C-o,(T>0||E)&&(L=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=T+(T>=s?4:s-T),y=1),E||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](C,f,L,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){eg&&(!uh&&gf()&&(ai=uh=window,xf=ai.document||{},kn.gsap=wn,(ai.gsapVersions||(ai.gsapVersions=[])).push(wn.version),tg(Dl||ai.GreenSockGlobals||!ai.gsap&&ai||{}),vg.forEach(yg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ha=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,E){var T=p?function(y,C,L,P){m(y,C,L,P),h.remove(T)}:m;return h.remove(m),a[E?"unshift":"push"](T),uo(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),uo=function(){return!ha&&Nn.wake()},ct={},d1=/^[\d.\-M][\d.\-,\s]/,p1=/["']/g,m1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(p1,"").trim():+c,r=l.substr(a+1).trim();return t},_1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},g1=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[m1(t[1])]:_1(e).split(",").map(og)):ct._CE&&d1.test(e)?ct._CE("",e):n},Eg=function(e){return function(t){return 1-e(1-t)}},bg=function i(e,t){for(var n=e._first,r;n;)n instanceof _n?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},is=function(e,t){return e&&(Lt(e)?e:ct[e]||g1(e))||t},hs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return En(e,function(a){ct[a]=kn[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},Ag=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},eu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/lh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Xw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ag(a);return s=lh/s,l.config=function(c,u){return i(e,c,u)},l},tu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ag(n);return r.config=function(s){return i(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;hs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;hs("Elastic",eu("in"),eu("out"),eu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});hs("Circ",function(i){return-(K_(1-i*i)-1)});hs("Sine",function(i){return i===1?1:-Ww(i*Vw)+1});hs("Back",tu("in"),tu("out"),tu());ct.SteppedEase=ct.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-an;return function(a){return((r*Ma(0,o,a)|0)+s)*n}}};oo.ease=ct["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Mf+=i+","+i+"Params,"});var wg=function(e,t){this.id=Gw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:rg,this.set=t?t.getSetter:Af},fa=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,co(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),ha||Nn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,co(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(uo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($l(this,n),!s._dp||s.parent||cg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===an||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sg(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Op(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Op(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?lo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this._tDur,s),r!==!1),Zl(this),Jw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==an&&(this._tTime-=an)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jw);var r=Qt;return Qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Fp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Vn(this,n),Tn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Tn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-an)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Lt(n)?n:ag,a=function(){var c=r.then;r.then=null,Lt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Oo(this)},i}();zn(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var _n=function(i){j_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),Ct&&fi(n.parent||Ct,Hi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ug(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Zo(0,arguments,this),this},t.from=function(r,s,o){return Zo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Zo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(r,s,Vn(this,o),1),this},t.call=function(r,s,o){return fi(this,Ft.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(r,o,Vn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ko(o).immediateRender=Tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Ko(a).immediateRender=Tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Bt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,E,T,y,C,L,P;if(this!==Ct&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,T=this._ts,p=!T,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(L=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Bt(u%m),u===l?(_=this._repeat,f=c):(C=Bt(u/m),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=lo(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),L&&_&1&&(f=c-f,P=1),_!==C&&!this._lock){var N=L&&C&1,S=N===(L&&_&1);if(_<C&&(N=!N),a=N?0:u%c?c:u,this._lock=1,this.render(a||(P?0:Bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=N?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bg(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=n1(this,Bt(a),Bt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Fn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var A=r<0?r:f;d;){if(g=d._prev,(d._act||A<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Qt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=A?-1e-8:an);break}}d=g}}if(E&&!s&&(this.pause(),E.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=y,Zl(this),this.render(r,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Fn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qi(s)||(s=Vn(this,s,r)),!(r instanceof fa)){if(cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Zt(r))return this.addLabel(r,s);if(Lt(r))r=Ft.delayedCall(0,r);else return this}return this!==r?fi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Zt(r)?this.removeLabel(r):Lt(r)?this.killTweensOf(r):(r.parent===this&&Kl(this,r),r===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Vn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ft.delayedCall(0,s||ca,o);return a.data="isPause",this._hasPause=1,fi(this,a,Vn(this,r))},t.removePause=function(r){var s=this._first;for(r=Vn(this,r);s;)s._start===r&&s.data==="isPause"&&Ar(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)mr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Xn(r),l=this._first,c=Qi(s),u;l;)l instanceof Ft?Kw(l._targets,a)&&(c?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Vn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ft.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||an,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&co(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,zn({startAt:{time:Vn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Bp(this,Vn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Bp(this,Vn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+an)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=vi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;co(o,o===Ct&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ct._ts&&(sg(Ct,Nl(r,Ct)),ig=Nn.frame),Nn.frame>=Np){Np+=Bn.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&Bn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(fa);zn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var x1=function(e,t,n,r,s,o,a){var l=new bn(this._pt,e,t,0,1,Lg,null,s),c=0,u=0,h,f,d,g,_,m,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=ua(r)),o&&(E=[n,r],o(E,e,t),n=E[0],r=E[1]),f=n.match($c)||[];h=$c.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ys(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=$c.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(J_.test(r)||p)&&(l.e=0),this._pt=l,l},Tf=function(e,t,n,r,s,o,a,l,c,u){Lt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Lt(h)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Lt(h)?c?T1:Dg:bf,g;if(Zt(r)&&(~r.indexOf("random(")&&(r=ua(r)),r.charAt(1)==="="&&(g=Ys(f,r)+(on(f)||0),(g||g===0)&&(r=g))),!u||f!==r||gh)return!isNaN(f*r)&&r!==""?(g=new bn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?b1:Ig,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&vf(t,r),x1.call(this,e,t,f,r,d,l||Bn.stringFilter,c))},v1=function(e,t,n,r,s){if(Lt(e)&&(e=$o(e,s,t,n,r)),!Ei(e)||e.style&&e.nodeType||cn(e)||Z_(e))return Zt(e)?$o(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=$o(e[a],s,t,n,r);return o},Rg=function(e,t,n,r,s,o){var a,l,c,u;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:v1(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},mr,gh,Ef=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!mf,y=e.timeline,C,L,P,N,S,A,k,G,V,$,Q,Y,ee;if(y&&(!f||!s)&&(s="none"),e._ease=is(s,oo.ease),e._yEase=h?Eg(is(h===!0?s:h,oo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(G=m[0]?ts(m[0]).harness:0,Y=G&&r[G.prop],C=Ll(r,yf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?ml:qw),_._lazy=0),o){if(Ar(e._startAt=Ft.set(m,zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!d)&&e._startAt.revert(ml),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),P=zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Tn(l),immediateRender:a,stagger:0,parent:p},C),Y&&(P[G.prop]=Y),Ar(e._startAt=Ft.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(ml):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,an,an);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,L=0;L<m.length;L++){if(S=m[L],k=S._gsap||Sf(m)[L]._gsap,e._ptLookup[L]=$={},hh[k.id]&&Mr.length&&Il(),Q=E===m?L:E.indexOf(S),G&&(V=new G).init(S,Y||C,e,Q,E)!==!1&&(e._pt=N=new bn(e._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(j){$[j]=N}),V.priority&&(A=1)),!G||Y)for(P in C)Ln[P]&&(V=Rg(P,C,e,Q,S,E))?V.priority&&(A=1):$[P]=N=Tf.call(e,S,P,"get",C[P],Q,E,0,r.stringFilter);e._op&&e._op[L]&&e.kill(S,e._op[L]),T&&e._pt&&(mr=e,Ct.killTweensOf(S,$,e.globalTime(t)),ee=!e.parent,mr=0),e._pt&&l&&(hh[k.id]=1)}A&&Ng(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,f&&t<=0&&y.render(vi,!0,!0)},y1=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return gh=1,e.vars[t]="+=0",Ef(e,a),gh=0,l?la(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ut(n)+on(h.e)),h.b&&(h.b=u.s+on(h.b))},M1=function(e,t){var n=e[0]?ts(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=ao({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},S1=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$o=function(e,t,n,r,s){return Lt(e)?e.call(t,n,r,s):Zt(e)&&~e.indexOf("random(")?ua(e):e},Cg=Mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pg={};En(Cg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Pg[i]=1});var Ft=function(i){j_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ko(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=r.parent||Ct,T=(cn(n)||Z_(n)?Qi(n[0]):"length"in r)?[n]:Xn(n),y,C,L,P,N,S,A,k;if(a._targets=T.length?Sf(T):la("GSAP target "+n+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||rl(c)||rl(u)){if(r=a.vars,y=a.timeline=new _n({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:T}),y.kill(),y.parent=y._dp=Hi(a),y._start=0,f||rl(c)||rl(u)){if(P=T.length,A=f&&pg(f),Ei(f))for(N in f)~Cg.indexOf(N)&&(k||(k={}),k[N]=f[N]);for(C=0;C<P;C++)L=Ll(r,Pg),L.stagger=0,p&&(L.yoyoEase=p),k&&ao(L,k),S=T[C],L.duration=+$o(c,Hi(a),C,S,T),L.delay=(+$o(u,Hi(a),C,S,T)||0)-a._delay,!f&&P===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),y.to(S,L,A?A(C,S,T):0),y._ease=ct.none;y.duration()?c=u=0:a.timeline=0}else if(g){Ko(zn(y.vars.defaults,{ease:"none"})),y._ease=is(g.ease||r.ease||"none");var G=0,V,$,Q;if(cn(g))g.forEach(function(Y){return y.to(T,Y,">")}),y.duration();else{L={};for(N in g)N==="ease"||N==="easeEach"||S1(N,g[N],L,g.easeEach);for(N in L)for(V=L[N].sort(function(Y,ee){return Y.t-ee.t}),G=0,C=0;C<V.length;C++)$=V[C],Q={ease:$.e,duration:($.t-(C?V[C-1].t:0))/100*c},Q[N]=$.v,y.to(T,Q,G),G+=Q.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!mf&&(mr=Hi(a),Ct.killTweensOf(T),mr=0),fi(E,Hi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Bt(E._time)&&Tn(h)&&Qw(Hi(a))&&E.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&ug(Hi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-an&&!u?l:r<an?0:r,f,d,g,_,m,p,E,T,y;if(!c)t1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Bt(h%_),h===l?(g=this._repeat,f=c):(m=Bt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=lo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(T&&this._yEase&&bg(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(hg(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(y||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!a&&!s&&!g&&(Fn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;T&&T.render(r<0?r:T._dur*T._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&fh(this,r,s,o),Fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&fh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ar(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Fn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ha||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ef(this,c),u=this._ease(c/this._dur),y1(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):($l(this,0),this.parent||lg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,mr&&mr.vars.overwrite!==!0)._first||Oo(this),this.parent&&o!==this.timeline.totalDuration()&&co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Xn(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&$w(a,l))return s==="all"&&(this._pt=0),Oo(this);for(h=this._op=this._op||[],s!=="all"&&(Zt(s)&&(_={},En(s,function(E){return _[E]=1}),s=_),s=M1(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Kl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Oo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Zo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Zo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ct.killTweensOf(r,s,o)},e}(fa);zn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(i){Ft[i]=function(){var e=new _n,t=ph.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var bf=function(e,t,n){return e[t]=n},Dg=function(e,t,n){return e[t](n)},T1=function(e,t,n,r){return e[t](r.fp,n)},E1=function(e,t,n){return e.setAttribute(t,n)},Af=function(e,t){return Lt(e[t])?Dg:_f(e[t])&&e.setAttribute?E1:bf},Ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},b1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},wf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A1=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},w1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Kl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},R1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ng=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},bn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Ig,this.d=l||this,this.set=c||bf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=R1,this.m=n,this.mt=s,this.tween=r},i}();En(Mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return yf[i]=1});kn.TweenMax=kn.TweenLite=Ft;kn.TimelineLite=kn.TimelineMax=_n;Ct=new _n({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=Tg;var rs=[],gl={},C1=[],zp=0,P1=0,nu=function(e){return(gl[e]||C1).map(function(t){return t()})},xh=function(){var e=Date.now(),t=[];e-zp>2&&(nu("matchMediaInit"),rs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),nu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),zp=e,nu("matchMedia"))},Ug=function(){function i(t,n){this.selector=n&&mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=P1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Lt(n)&&(s=r,r=n,n=Lt);var o=this,a=function(){var c=Rt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=mh(s)),Rt=o,h=r.apply(o,arguments),Lt(h)&&o._r.push(h),Rt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Rt;Rt=null,n(this),Rt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ft&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=rs.length;o--;)rs[o].id===this.id&&rs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),D1=function(){function i(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ei(n)||(n={matches:n});var o=new Ug(0,s||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(rs.indexOf(o)<0&&rs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(xh):l.addEventListener("change",xh)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ul={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return yg(r)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return Ct.getTweensOf(e,t)},getProperty:function(e,t,n,r){Zt(e)&&(e=Xn(e)[0]);var s=ts(e||{}).get,o=n?ag:og;return n==="native"&&(n=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,n,r)):function(a,l,c){return o((Ln[a]&&Ln[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var r=e.map(function(u){return wn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Ln[t],a=ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Os._pt=0,h.init(e,n?u+n:u,Os,0,[e]),h.render(1,h),Os._pt&&wf(1,Os)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=wn.to(e,zn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,oo.ease)),Up(oo,e||{})},config:function(e){return Up(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!kn[a]&&la(t+" effect requires "+a+" plugin.")}),Jc[t]=function(a,l,c){return n(Xn(a),zn(l||{},s),c)},o&&(_n.prototype[t]=function(a,l,c){return this.add(Jc[t](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):ct},getById:function(e){return Ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),r,s;for(n.smoothChildTiming=Tn(e.smoothChildTiming),Ct.remove(n),n._dp=0,n._time=n._tTime=Ct._time,r=Ct._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ft&&r.vars.onComplete===r._targets[0]))&&fi(n,r,r._start-r._delay),r=s;return fi(Ct,n,0),n},context:function(e,t){return e?new Ug(e,t):Rt},matchMedia:function(e){return new D1(e)},matchMediaRefresh:function(){return rs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||xh()},addEventListener:function(e,t){var n=gl[e]||(gl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=gl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:c1,wrapYoyo:u1,distribute:pg,random:_g,snap:mg,normalize:l1,getUnit:on,clamp:r1,splitColor:Mg,toArray:Xn,selector:mh,mapRange:xg,pipe:o1,unitize:a1,interpolate:h1,shuffle:dg},install:tg,effects:Jc,ticker:Nn,updateRoot:_n.updateRoot,plugins:Ln,globalTimeline:Ct,core:{PropTween:bn,globals:ng,Tween:Ft,Timeline:_n,Animation:fa,getCache:ts,_removeLinkedListItem:Kl,reverting:function(){return Qt},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return mf=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ul[i]=Ft[i]});Nn.add(_n.updateRoot);Os=Ul.to({},{duration:0});var I1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},L1=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=I1(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},iu=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Zt(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}L1(a,s)}}}},wn=Ul.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},iu("roundProps",_h),iu("modifiers"),iu("snap",mg))||Ul;Ft.version=_n.version=wn.version="3.12.7";eg=1;gf()&&uo();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hp,_r,qs,Rf,Jr,Vp,Cf,N1=function(){return typeof window<"u"},er={},qr=180/Math.PI,js=Math.PI/180,Ps=Math.atan2,Gp=1e8,Pf=/([A-Z])/g,U1=/(left|right|width|margin|padding|x)/i,O1=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},B1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},k1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Og=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},z1=function(e,t,n){return e.style[t]=n},H1=function(e,t,n){return e.style.setProperty(t,n)},V1=function(e,t,n){return e._gsap[t]=n},G1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},W1=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},X1=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Pt="transform",An=Pt+"Origin",Y1=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in er&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gi(r,a)}):this.tfm[e]=o.x?o[e]:Gi(r,e),e===An&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},Bg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},q1=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cf(),(!s||!s.isStart)&&!n[Pt]&&(Bg(n),r.zOrigin&&n[An]&&(n[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kg=function(e,t){var n={target:e,props:[],revert:q1,save:Y1};return e._gsap||wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},zg,yh=function(e,t){var n=_r.createElementNS?_r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_r.createElement(e);return n&&n.style?n:_r.createElement(e)},yi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ho(t)||t,1)||""},Wp="O,Moz,ms,Ms,Webkit".split(","),ho=function(e,t,n){var r=t||Jr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Wp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Wp[o]:"")+e},Mh=function(){N1()&&window.document&&(Hp=window,_r=Hp.document,qs=_r.documentElement,Jr=yh("div")||{style:{}},yh("div"),Pt=ho(Pt),An=Pt+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zg=!!ho("perspective"),Cf=wn.core.reverting,Rf=1)},Xp=function(e){var t=e.ownerSVGElement,n=yh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),qs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),qs.removeChild(n),s},Yp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hg=function(e){var t,n;try{t=e.getBBox()}catch{t=Xp(e),n=1}return t&&(t.width||t.height)||n||(t=Xp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yp(e,["x","cx","x1"])||0,y:+Yp(e,["y","cy","y1"])||0,width:0,height:0}:t},Vg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hg(e))},as=function(e,t){if(t){var n=e.style,r;t in er&&t!==An&&(t=Pt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Pf,"-$1").toLowerCase())):n.removeAttribute(t)}},gr=function(e,t,n,r,s,o){var a=new bn(e._pt,t,n,0,1,o?Fg:Og);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},qp={deg:1,rad:1,turn:1},j1={grid:1,flex:1},wr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Jr.style,l=U1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||qp[r]||qp[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&Vg(e),(d||o==="%")&&(er[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ut(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_r||!_.appendChild)&&(_=_r.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Nn.time&&!m.uncache)return Ut(s/m.width*h);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+r,g=e[u],E?e.style[t]=E:as(e,t)}else(d||o==="%")&&!j1[yi(_,"display")]&&(a.position=yi(e,"position")),_===e&&(a.position="static"),_.appendChild(Jr),g=Jr[u],_.removeChild(Jr),a.position="absolute";return l&&d&&(m=ts(_),m.time=Nn.time,m.width=_[u]),Ut(f?g*s/h:g&&s?h/g*s:0)},Gi=function(e,t,n,r){var s;return Rf||Mh(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),er[t]&&t!=="transform"?(s=pa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fl(yi(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ol[t]&&Ol[t](e,t,n)||yi(e,t)||rg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(e,t,s,n)+n:s},K1=function(e,t,n,r){if(!n||n==="none"){var s=ho(t,e,1),o=s&&yi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=yi(e,"borderTopColor"))}var a=new bn(this._pt,e.style,t,0,1,Lg),l=0,c=0,u,h,f,d,g,_,m,p,E,T,y,C;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=yi(e,t)||r,_?e.style[t]=_:as(e,t)),u=[n,r],Tg(u),n=u[0],r=u[1],f=n.match(Us)||[],C=r.match(Us)||[],C.length){for(;h=Us.exec(r);)m=h[0],E=r.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ys(d,m)+y),p=parseFloat(m),T=m.substr((p+"").length),l=Us.lastIndex-T.length,T||(T=T||Bn.units[t]||y,l===r.length&&(r+=T,a.e+=T)),y!==T&&(d=wr(e,t,_,T)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Fg:Og;return J_.test(r)&&(a.e=0),this._pt=a,a},jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Z1=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=jp[n]||n,t[1]=jp[r]||r,t.join(" ")},$1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],er[a]&&(l=1,a=a==="transformOrigin"?An:Pt),as(n,a);l&&(as(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",pa(n,1),o.uncache=1,Bg(r)))}},Ol={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new bn(e._pt,t,n,0,0,$1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},da=[1,0,0,1,0,0],Gg={},Wg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kp=function(e){var t=yi(e,Pt);return Wg(t)?da:t.substr(7).match($_).map(Ut)},Df=function(e,t){var n=e._gsap||ts(e),r=e.style,s=Kp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?da:s):(s===da&&!e.offsetParent&&e!==qs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,qs.appendChild(e)),s=Kp(e),l?r.display=l:as(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Sh=function(e,t,n,r,s,o){var a=e._gsap,l=s||Df(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],T=t.split(" "),y=parseFloat(T[0])||0,C=parseFloat(T[1])||0,L,P,N,S;n?l!==da&&(P=d*m-g*_)&&(N=y*(m/P)+C*(-_/P)+(_*E-m*p)/P,S=y*(-g/P)+C*(d/P)-(d*E-g*p)/P,y=N,C=S):(L=Hg(e),y=L.x+(~T[0].indexOf("%")?y/100*L.width:y),C=L.y+(~(T[1]||T[0]).indexOf("%")?C/100*L.height:C)),r||r!==!1&&a.smooth?(p=y-c,E=C-u,a.xOffset=h+(p*d+E*_)-p,a.yOffset=f+(p*g+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[An]="0px 0px",o&&(gr(o,a,"xOrigin",c,y),gr(o,a,"yOrigin",u,C),gr(o,a,"xOffset",h,a.xOffset),gr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},pa=function(e,t){var n=e._gsap||new wg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=yi(e,An)||"0",u,h,f,d,g,_,m,p,E,T,y,C,L,P,N,S,A,k,G,V,$,Q,Y,ee,j,he,Se,De,Le,je,ce,Me;return u=h=f=_=m=p=E=T=y=0,d=g=1,n.svg=!!(e.getCTM&&Vg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),r.scale=r.rotate=r.translate="none"),P=Df(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),Sh(e,ee||c,!!ee||n.originIsAbsolute,n.smooth!==!1,P)),C=n.xOrigin||0,L=n.yOrigin||0,P!==da&&(k=P[0],G=P[1],V=P[2],$=P[3],u=Q=P[4],h=Y=P[5],P.length===6?(d=Math.sqrt(k*k+G*G),g=Math.sqrt($*$+V*V),_=k||G?Ps(G,k)*qr:0,E=V||$?Ps(V,$)*qr+_:0,E&&(g*=Math.abs(Math.cos(E*js))),n.svg&&(u-=C-(C*k+L*V),h-=L-(C*G+L*$))):(Me=P[6],je=P[7],Se=P[8],De=P[9],Le=P[10],ce=P[11],u=P[12],h=P[13],f=P[14],N=Ps(Me,Le),m=N*qr,N&&(S=Math.cos(-N),A=Math.sin(-N),ee=Q*S+Se*A,j=Y*S+De*A,he=Me*S+Le*A,Se=Q*-A+Se*S,De=Y*-A+De*S,Le=Me*-A+Le*S,ce=je*-A+ce*S,Q=ee,Y=j,Me=he),N=Ps(-V,Le),p=N*qr,N&&(S=Math.cos(-N),A=Math.sin(-N),ee=k*S-Se*A,j=G*S-De*A,he=V*S-Le*A,ce=$*A+ce*S,k=ee,G=j,V=he),N=Ps(G,k),_=N*qr,N&&(S=Math.cos(N),A=Math.sin(N),ee=k*S+G*A,j=Q*S+Y*A,G=G*S-k*A,Y=Y*S-Q*A,k=ee,Q=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ut(Math.sqrt(k*k+G*G+V*V)),g=Ut(Math.sqrt(Y*Y+Me*Me)),N=Ps(Q,Y),E=Math.abs(N)>2e-4?N*qr:0,y=ce?1/(ce<0?-ce:ce):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wg(yi(e,Pt)),ee&&e.setAttribute("transform",ee))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ut(d),n.scaleY=Ut(g),n.rotation=Ut(_)+a,n.rotationX=Ut(m)+a,n.rotationY=Ut(p)+a,n.skewX=E+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[An]=Fl(c)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?Q1:zg?Xg:J1,n.uncache=0,n},Fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ru=function(e,t,n){var r=on(t);return Ut(parseFloat(t)+parseFloat(wr(e,"x",n+"px",r)))+r},J1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xg(e,t)},Vr="0deg",Io="0px",Gr=") ",Xg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,T=n.zOrigin,y="",C=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Vr||u!==Vr)){var L=parseFloat(u)*js,P=Math.sin(L),N=Math.cos(L),S;L=parseFloat(h)*js,S=Math.cos(L),o=ru(E,o,P*S*-T),a=ru(E,a,-Math.sin(L)*-T),l=ru(E,l,N*S*-T+T)}m!==Io&&(y+="perspective("+m+Gr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Io||a!==Io||l!==Io)&&(y+=l!==Io||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gr),c!==Vr&&(y+="rotate("+c+Gr),u!==Vr&&(y+="rotateY("+u+Gr),h!==Vr&&(y+="rotateX("+h+Gr),(f!==Vr||d!==Vr)&&(y+="skew("+f+", "+d+Gr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Gr),E.style[Pt]=y||"translate(0, 0)"},Q1=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,T=parseFloat(o),y=parseFloat(a),C,L,P,N,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,C=Math.cos(l)*h,L=Math.sin(l)*h,P=Math.sin(l-c)*-f,N=Math.cos(l-c)*f,c&&(u*=js,S=Math.tan(c-u),S=Math.sqrt(1+S*S),P*=S,N*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,L*=S)),C=Ut(C),L=Ut(L),P=Ut(P),N=Ut(N)):(C=h,N=f,L=P=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=wr(d,"x",o,"px"),y=wr(d,"y",a,"px")),(g||_||m||p)&&(T=Ut(T+g-(g*C+_*P)+m),y=Ut(y+_-(g*L+_*N)+p)),(r||s)&&(S=d.getBBox(),T=Ut(T+r/100*S.width),y=Ut(y+s/100*S.height)),S="matrix("+C+","+L+","+P+","+N+","+T+","+y+")",d.setAttribute("transform",S),E&&(d.style[Pt]=S)},eR=function(e,t,n,r,s){var o=360,a=Zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?qr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*Gp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Gp)%o-~~(c/o)*o)),e._pt=f=new bn(e._pt,t,n,r,c,F1),f.e=u,f.u="deg",e._props.push(n),f},Zp=function(e,t){for(var n in t)e[n]=t[n];return e},tR=function(e,t,n){var r=Zp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=pa(n,1),as(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],o[Pt]=t,a=pa(n,1),o[Pt]=c);for(l in er)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),g=on(u),h=d!==g?wr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new bn(e._pt,a,l,h,f-h,vh),e._pt.u=g||0,e._props.push(l));Zp(a,r)};En("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ol[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Gi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Yg={name:"css",register:Mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,E,T,y,C,L,P,N;Rf||Mh(),this.styles=this.styles||kg(e),N=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ln[_]&&Rg(_,t,n,r,e,s)))){if(d=typeof u,g=Ol[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ua(u)),g)g(this,e,_,u,n)&&(P=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Sr.lastIndex=0,Sr.test(c)||(m=on(c),p=on(u)),p?m!==p&&(c=wr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),N.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Zt(c)&&~c.indexOf("random(")&&(c=ua(c)),on(c+"")||c==="auto"||(c+=Bn.units[_]||on(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),f=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(f===1&&Gi(e,"visibility")==="hidden"&&h&&(f=0),N.push("visibility",0,a.visibility),gr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in er,T){if(this.styles.save(_),y||(C=e._gsap,C.renderTransform&&!t.parseTransform||pa(e,t.parseTransform),L=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new bn(this._pt,a,Pt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new bn(this._pt,C,"scaleY",C.scaleY,(E?Ys(C.scaleY,E+h):h)-C.scaleY||0,vh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){N.push(An,0,a[An]),u=Z1(u),C.svg?Sh(e,u,0,L,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&gr(this,C,"zOrigin",C.zOrigin,p),gr(this,a,_,Fl(c),Fl(u)));continue}else if(_==="svgOrigin"){Sh(e,u,1,L,0,this);continue}else if(_ in Gg){eR(this,C,_,f,E?Ys(f,E+u):u);continue}else if(_==="smoothOrigin"){gr(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){tR(this,u,e);continue}}else _ in a||(_=ho(_)||_);if(T||(h||h===0)&&(f||f===0)&&!O1.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=on(u)||(_ in Bn.units?Bn.units[_]:m),m!==p&&(f=wr(e,_,c,p)),this._pt=new bn(this._pt,T?C:a,_,f,(E?Ys(f,E+h):h)-f,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?k1:vh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=B1);else if(_ in a)K1.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,r,s);else if(_!=="parseTransform"){vf(_,u);continue}T||(_ in a?N.push(_,0,a[_]):typeof e[_]=="function"?N.push(_,2,e[_]()):N.push(_,1,c||e[_])),o.push(_)}}P&&Ng(this)},render:function(e,t){if(t.tween._time||!Cf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:_i,getSetter:function(e,t,n){var r=_i[t];return r&&r.indexOf(",")<0&&(t=r),t in er&&t!==An&&(e._gsap.x||Gi(e,"x"))?n&&Vp===n?t==="scale"?G1:V1:(Vp=n||{})&&(t==="scale"?W1:X1):e.style&&!_f(e.style[t])?z1:~t.indexOf("-")?H1:Af(e,t)},core:{_removeProperty:as,_getMatrix:Df}};wn.utils.checkPrefix=ho;wn.core.getStyleSaver=kg;(function(i,e,t,n){var r=En(i+","+e+","+t,function(s){er[s]=1});En(e,function(s){Bn.units[s]="deg",Gg[s]=1}),_i[r[13]]=i+","+e,En(n,function(s){var o=s.split(":");_i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Bn.units[i]="px"});wn.registerPlugin(Yg);var qg=wn.registerPlugin(Yg)||wn;qg.core.Tween;const nR={__name:"App",setup(i){let e,t,n,r,s,o,a,l=null;const c=R0("rain");Dm(()=>{u(),P()});function u(){const G=document.querySelector("#canvas");n=new tM,t=new sn(75,window.innerWidth/window.innerHeight,.1,2e4),t.position.set(-90,30,-80),t.lookAt(0,0,0),e=new PA({antialias:!0,canvas:G,powerPreference:"high-performance"}),e.outputEncoding=void 0,e.shadowMap.enabled=!0,e.setSize(window.innerWidth,window.innerHeight),r=new IA(t,e.domElement),h(),f().then(()=>{d(),g(),p()})}function h(){r.enableDamping=!0,r.dampingFactor=.02,r.maxPolarAngle=Math.PI/2.05,r.minDistance=50,r.maxDistance=500}async function f(){return new Promise(G=>{new ow().load("./HDRI/kloofendal_48d_partly_cloudy_puresky_4k.exr",V=>{V.mapping=bl,n.background=V,n.environment=V,G()})})}function d(){const G=new xa(1e5,1e5,512,512);a=new L_().load("./public/textures/waternormals.jpg",V=>{V.wrapS=Er,V.wrapT=Er,V.repeat.set(4,4)}),s=new Hw(G,{textureWidth:2048,textureHeight:2048,waterNormals:a,sunDirection:new W(-1,1,0).normalize(),sunColor:16777215,waterColor:27028,distortionScale:3,fog:!0}),s.rotation.x=-Math.PI/2,n.add(s)}function g(){new Cp().load("./public/fantasy_island.glb",G=>{o=G.scene,o.position.set(0,-5,0),o.scale.set(1,1,1),o.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),n.add(o),_()})}function _(){const G=new YM,V=new Ze,$=document.querySelector("#canvas");$.addEventListener("click",Q=>{V.x=Q.clientX/$.clientWidth*2-1,V.y=-(Q.clientY/$.clientHeight)*2+1,G.setFromCamera(V,t);const Y=G.intersectObject(o);Y.length>0&&m(Y[0].object)})}function m(G){qg.to(G.scale,{x:1.2,y:1.2,z:1.2,duration:.3,yoyo:!0,repeat:1})}function p(){E(),window.addEventListener("resize",L)}function E(){l&&(n.remove(l),l.geometry.dispose(),l.material.dispose());const G=2e3,V=new ri,$=new Float32Array(G*3),Q=new Float32Array(G*3),Y=c.value==="rain",ee=Y?[.1,.3,1]:[1,1,1];for(let he=0;he<G;he++){const Se=he*3;$[Se]=Math.random()*400-200,$[Se+1]=Math.random()*200+100,$[Se+2]=Math.random()*400-200,Q[Se]=ee[0],Q[Se+1]=ee[1],Q[Se+2]=ee[2]}V.setAttribute("position",new Jt($,3)),V.setAttribute("color",new Jt(Q,3));const j=new sf({size:Y?1.2:2.5,vertexColors:!0,transparent:!0,opacity:.9,map:T(),depthWrite:!1});l=new C_(V,j),n.add(l)}function T(){const G=document.createElement("canvas");G.width=G.height=32;const V=G.getContext("2d");V.beginPath(),V.arc(16,16,14,0,Math.PI*2);const $=V.createRadialGradient(16,16,0,16,16,14);return $.addColorStop(0,"rgba(255,255,255,1)"),$.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=$,V.fill(),new fM(G)}function y(){E()}function C(){if(!l)return;const G=l.geometry.attributes.position.array,V=c.value==="rain";for(let $=1;$<G.length;$+=3)G[$]-=V?.8:.2,G[$]<-100&&(G[$]=200,G[$-1]=Math.random()*400-200,G[$+1]=Math.random()*400-200),V||(G[$-1]+=Math.sin(Date.now()*.001+$)*.1,G[$+1]+=Math.cos(Date.now()*.001+$)*.1);l.geometry.attributes.position.needsUpdate=!0}function L(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function P(){requestAnimationFrame(P),k.update(),r.update(),N(),C(),e.render(n,t)}function N(){a&&(s.material.uniforms.time.value+=.005,a.offset.x+=1e-4,a.offset.y+=1e-4)}function S(){c.value=c.value==="rain"?"snow":"rain",y()}class A{constructor(){this.birds=[],this.flyHeightRange={min:80,max:150},this.spawnRadius=200,this.loadModel().then(()=>this.createFlock(5))}async loadModel(){const{scene:V}=await new Cp().loadAsync("./public/flying_bird.glb");this.birdTemplate=V,new bi().setFromObject(this.birdTemplate).getSize(new W);const Q=10;return this.birdTemplate.scale.set(Q,Q,Q),this.birdTemplate}createFlock(V){const $=new W(0,0,0);for(let Q=0;Q<V;Q++){const Y=this.birdTemplate.clone(),ee=this.spawnRadius*Math.sqrt(Math.random()),j=Math.random()*Math.PI*2,he=Math.acos(2*Math.random()-1);Y.position.set($.x+ee*Math.sin(he)*Math.cos(j),$.y+Math.random()*(this.flyHeightRange.max-this.flyHeightRange.min)+this.flyHeightRange.min,$.z+ee*Math.sin(he)*Math.sin(j)),Y.userData={target:this.generateNewTarget(),speed:Math.random()*.001+.001,maxHeight:this.flyHeightRange.max,minHeight:this.flyHeightRange.min},Y.lookAt(Y.userData.target),n.add(Y),this.birds.push(Y)}}generateNewTarget(){return new W(Math.random()*200-100,Math.random()*(this.flyHeightRange.max-this.flyHeightRange.min)+this.flyHeightRange.min,Math.random()*200-100)}update(){this.birds.forEach(V=>{const $=V.position.y,Q=V.userData.target.y;Math.abs($-Q)>5&&(V.position.y+=(Q-$)*.02),V.position.distanceTo(V.userData.target)<10&&(V.userData.target=this.generateNewTarget()),V.position.lerp(V.userData.target,V.userData.speed);const Y=new ii().setFromRotationMatrix(new $e().lookAt(V.position,V.userData.target,new W(0,1,0)));V.quaternion.slerp(Y,.1),V.rotation.z=Math.sin(Date.now()*.005)*.3})}}const k=new A;return(G,V)=>(Dx(),Nx(li,null,[V[0]||(V[0]=Tl("canvas",{id:"canvas"},null,-1)),Tl("button",{onClick:S,class:"weather-toggle"},sm(c.value==="rain"?"☔ 切换雪天":"❄️ 切换雨天"),1)],64))}};gv(nR).mount("#app");
