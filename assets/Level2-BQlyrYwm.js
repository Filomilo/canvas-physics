import{G as l}from"./Gravity-BDcjITPi.js";import{V as o,G as d}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{P as p,W as _}from"./PlayerBall-CegR2AE9.js";import{_ as f}from"./LevelContainer.vue_vue_type_style_index_0_lang-Dtei7o1w.js";import{C as w}from"./CollidableRectangle-Cxl0diji.js";import{C as b}from"./CollidableSpring-BbaCiLdH.js";import{d as g,c as u,b as v,u as m,o as h}from"./index-CgN3KgQj.js";import"./PhysicBall-D9c_0-gF.js";import"./Particle-B55gAcww.js";import"./Rectangle-aQQDDUwG.js";import"./Polygon-CEd2J1ej.js";import"./SpingNode-P5j5R4op.js";const O={class:"FullPage"},c=10,N=g({__name:"Level2",setup(j){const a=new o(100,700),s=new o(500,500);s.clone().sub(a).divideScalar(c);const n=new d;n.addObject(new l);const r=new p(new o(200,60));n.addObject(new _(new o(400,800))),n.addObject(r);const t=new w(300,50,new o(0),"grey");t.move(new o(200,600)),t.rotate(40);const e=new b(a,s,c);n.addObject(e),n.addObject(t);const i=()=>{e._nodes[0].resetTransforamtion(),e._nodes[e._nodes.length-1].resetTransforamtion(),e._nodes[0].move(new o(450,900)),e._nodes[e._nodes.length-1].move(new o(780,370)),e.resetVel()};return(y,C)=>(h(),u("div",O,[v(f,{game:m(n),player:m(r),level:2,cheat:i},null,8,["game","player"])]))}});export{N as default};
