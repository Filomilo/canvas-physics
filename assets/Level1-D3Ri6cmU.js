import{G as m}from"./Gravity-BDcjITPi.js";import{V as o,G as c}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{P as i,W as l}from"./PlayerBall-CegR2AE9.js";import{_ as d}from"./LevelContainer.vue_vue_type_style_index_0_lang-Dtei7o1w.js";import{M as p}from"./MovableRectangle-C7vAWP-R.js";import{d as w,c as _,b as f,u as n,o as b}from"./index-CgN3KgQj.js";import"./CollidableRectangle-Cxl0diji.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";import"./PhysicBall-D9c_0-gF.js";import"./Particle-B55gAcww.js";const u={class:"FullPage"},v=10,C=w({__name:"Level1",setup(g){const r=new o(100,700);new o(500,500).clone().sub(r).divideScalar(v);const t=new c;t.addObject(new m);const a=new i(new o(200,60));t.addObject(new l(new o(600,500))),t.addObject(a);const e=new p(500,50,new o(0),"white");e.move(new o(200,700)),e.rotate(40),e.rotate(-1.5),e.move(new o(800,-200)),t.addObject(e);const s=()=>{e.resetTransforamtion(),e.move(new o(200,700)),e.rotate(40)};return(P,O)=>(b(),_("div",u,[f(d,{game:n(t),player:n(a),level:1,cheat:s},null,8,["game","player"])]))}});export{C as default};
