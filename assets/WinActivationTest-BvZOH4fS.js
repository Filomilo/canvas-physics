import{G as r}from"./Gravity-BDcjITPi.js";import{V as o,_ as m,G as l,S as c}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{S as d}from"./SpingNode-P5j5R4op.js";import{P as p,W as u}from"./PlayerBall-CegR2AE9.js";import{d as w,c as _,a as f,b,u as S,o as g}from"./index-CgN3KgQj.js";import"./CollidableRectangle-Cxl0diji.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";import"./PhysicBall-D9c_0-gF.js";import"./Particle-B55gAcww.js";const v={class:"DemoView"},V=10,k=w({__name:"WinActivationTest",setup(P){const t=new o(100,700);new o(500,500).clone().sub(t).divideScalar(V);const e=new l,s=new d(t);s.IsSimulatable=!1,e.addObject(new r);const n=new p(new o(200,30)),i=new c;return n.addOnACtivateMethod(()=>{console.log("LVL UP"),i.playLvlUp()}),e.addObject(new u(new o(200,150))),e.addObject(n),(O,a)=>(g(),_("main",v,[a[0]||(a[0]=f("div",{class:"titleStyle"},"Win Activation Test",-1)),b(m,{class:"gameView",id:"shapes_demo",game:S(e)},null,8,["game"])]))}});export{k as default};
