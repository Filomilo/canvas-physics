import{V as r,a as n}from"./GameComponent.vue_vue_type_style_index_0_lang-BQqnMhIl.js";import{C as l}from"./CollidableRectangle-Bi3kLYUI.js";import{P as h}from"./PhysicBall-DTSolpZM.js";import{P as d,a as p}from"./Particle-B2_smVyQ.js";function v(s){return typeof s.activate=="function"}class u extends l{isCollsioniActive=!1;isActivator=!0;constructor(t,e,a=new r(0,0),i="#dad5c2"){super(t,e,a,i),this.OnObjectEnter=c=>{v(c)&&c.activate()},this.isActivator=!0}}class _ extends u{constructor(t){super(50,50,t,"#ffe908")}}class m extends n{_speed=0;_partcleLife=0;_pos=new r;constructor(t,e,a=1){super(),this._speed=e,this._partcleLife=a,this._pos=t.clone()}isActive=!0;emitParticles(){const t=new r(Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(this._speed),e=new d(this._pos.clone(),5,"white");return e._vel=t,e.life=this._partcleLife,[e]}}var o;(s=>{function t(e,a){const i=new p,c=new m(a,17,3);i.addEmitter(c),e.addObject(i),setInterval(()=>{c.isActive=!1,setInterval(()=>{e.destroyObject(i)},5e3)},100)}s.spawnParticlesOnce=t})(o||(o={}));class A extends h{activateMethods=[];addOnACtivateMethod(t){this.activateMethods.push(t)}constructor(t){super(t,20,"#2596be"),this.addOnACtivateMethod(()=>{o.spawnParticlesOnce(this.game,this.position.clone()),this.game.destroyObject(this)})}activate(){this.activateMethods.forEach(t=>{t()})}clone(){const t=super.clone();return t.activateMethods=[...this.activateMethods],t}}export{A as P,_ as W};