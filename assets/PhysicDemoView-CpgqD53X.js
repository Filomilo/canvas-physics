import{V as o,_ as c,G as n}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{C as r}from"./CollidableRectangle-Cxl0diji.js";import{P as i}from"./PhysicRectangle-DxN9ovrW.js";import{G as l}from"./Gravity-BDcjITPi.js";import{P as d}from"./PhysicBall-D9c_0-gF.js";import{d as p,c as _,a as f,b as w,u as b,o as u}from"./index-CgN3KgQj.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";const V={class:"DemoView"},D=p({__name:"PhysicDemoView",setup(g){const e=new n,t=new i(70,70);e.addObject(t),t.move(new o(280,200));const a=new r(100,200);e.addObject(a),a.rotate(.55),a.move(new o(240,400)),e.addObject(new l);const m=new d(new o(200,30),20,"red");return e.addObject(m),(y,s)=>(u(),_("main",V,[s[0]||(s[0]=f("div",{class:"titleStyle"},"Physic Demo",-1)),w(c,{class:"gameView",id:"shapes_demo",game:b(e)},null,8,["game"])]))}});export{D as default};
