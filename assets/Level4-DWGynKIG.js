import{G as w}from"./Gravity-BDcjITPi.js";import{V as e,G as p}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{W as b,P as f}from"./PlayerBall-CegR2AE9.js";import{_ as v}from"./LevelContainer.vue_vue_type_style_index_0_lang-Dtei7o1w.js";import{C as s}from"./CollidableRectangle-Cxl0diji.js";import{M as c}from"./MovableRectangle-C7vAWP-R.js";import{F as _}from"./Fan-DxNKnxSb.js";import{d as g,c as u,b as O,u as d,o as j}from"./index-CgN3KgQj.js";import"./PhysicBall-D9c_0-gF.js";import"./Particle-B55gAcww.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";import"./MathUtils-MIarnuZv.js";const h={class:"FullPage"},y=10,q=g({__name:"Level4",setup(P){const i=new e(100,700);new e(500,500).clone().sub(i).divideScalar(y);const a=new e(500,430),o=new p;o.addObject(new b(a.clone())),o.addObject(new s(80,20,a.clone().add(new e(0,-30)),"grey")),o.addObject(new s(20,80,a.clone().add(new e(-30,0)),"grey")),o.addObject(new s(80,20,a.clone().add(new e(0,30)),"grey")),o.addObject(new w);const m=new f(new e(200,200));o.addObject(m);const t=new c(300,50,new e(0),"white");t.move(new e(200,600)),t.rotate(40),o.addObject(t);const n=new c(300,50,new e(0),"white");n.move(new e(750,410)),n.rotate(-.9),o.addObject(n);const r=new _(new e(600,800));o.addObject(r),t.move(new e(-100,-500)),t.rotate(-40),n.move(new e(0,-200)),n.rotate(.9),r.move(new e(-200,-500));const l=()=>{r.resetTransforamtion(),r.move(new e(600,800)),t.resetTransforamtion(),t.move(new e(200,600)),t.rotate(40),n.resetTransforamtion(),n.move(new e(750,410)),n.rotate(-.9)};return(B,F)=>(j(),u("div",h,[O(v,{game:d(o),player:d(m),level:4,cheat:l},null,8,["game","player"])]))}});export{q as default};
