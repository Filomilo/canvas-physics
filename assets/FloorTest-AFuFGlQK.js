import{V as a,_ as n,G as c}from"./GameComponent.vue_vue_type_style_index_0_lang-Djne7a86.js";import{P as m,C as i}from"./PhysicRectangle-COp-6-wi.js";import{G as l}from"./Gravity-3Lf_bQKD.js";import{P as d}from"./PhysicBall-C_TsyqFJ.js";import{G as p}from"./AirDrag-2C_ulUqO.js";import{d as w,c as _,a as f,b,u,o as g}from"./index-DvXseMqC.js";import"./Rectangle-DG1mBFxZ.js";import"./Polygon-Tpd2I_Ih.js";const v={class:"DemoView"},k=w({__name:"FloorTest",setup(G){const e=new c,o=new m(70,70,new a,"red");e.addObject(o),o.move(new a(280,200));const t=new i(5e3,200);e.addObject(t),t.move(new a(240,700)),e.addObject(new l),e.addObject(new p(1.09));const r=new d(new a(200,30),200,"red");return e.addObject(r),(V,s)=>(g(),_("main",v,[s[0]||(s[0]=f("div",{class:"titleStyle"}," Floor Test ",-1)),b(n,{class:"gameView",id:"shapes_demo",game:u(e)},null,8,["game"])]))}});export{k as default};
