import{G as n}from"./AirDrag-5zlfj7ZO.js";import{G as r}from"./Gravity-BDcjITPi.js";import{V as t,_ as i,G as m}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{P as c}from"./PhysicBall-D9c_0-gF.js";import{F as d}from"./Fan-DxNKnxSb.js";import{d as l,c as p,a as _,b as f,u as w,o as u}from"./index-CgN3KgQj.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";import"./Particle-B55gAcww.js";import"./MathUtils-MIarnuZv.js";const b={class:"DemoView"},G=10,N=l({__name:"FanTest",setup(V){const o=new t(100,700);new t(500,500).clone().sub(o).divideScalar(G);const e=new m;e.addObject(new d(new t(200,700))),e.addObject(new r),e.addObject(new n(1.58));const s=new c(new t(200,30),20,"red");return e.addObject(s),(F,a)=>(u(),p("main",b,[a[0]||(a[0]=_("div",{class:"titleStyle"},"Fan test",-1)),f(i,{class:"gameView",id:"shapes_demo",game:w(e)},null,8,["game"])]))}});export{N as default};
