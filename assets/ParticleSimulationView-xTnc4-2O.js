import{a as i,V as l,_ as n,G as c}from"./GameComponent.vue_vue_type_style_index_0_lang-Djne7a86.js";import{r as o,P as m,a as d}from"./MathUtils-Bps6xgcu.js";import{d as u,c as _,a as p,b as f,u as P,o as w}from"./index-DvXseMqC.js";class g extends i{_speed=0;_partcleLife=0;constructor(e,t=1){super(),this._speed=e,this._partcleLife=t}emitParticles(){const e=this.game?._MouseController.getMousePostion();if(this.game?._MouseController.getMouseClicked()){const a=new l(o(-1,1),o(-1,1)).normalize().multiplyScalar(this._speed),s=new m(e,2,"red");return s._vel=a,s.life=this._partcleLife,[s]}else return[]}}const h={class:"DemoView"},S=u({__name:"ParticleSimulationView",setup(r){const e=new c,t=new d;return e.addObject(t),t.addEmitter(new g(1,3)),(a,s)=>(w(),_("main",h,[s[0]||(s[0]=p("div",{class:"titleStyle"}," Particles Demo ",-1)),f(n,{class:"gameView",id:"shapes_demo",game:P(e)},null,8,["game"])]))}});export{S as default};
