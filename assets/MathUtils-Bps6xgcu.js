import{a as r,c as s,P as o,V as l}from"./GameComponent.vue_vue_type_style_index_0_lang-Djne7a86.js";class h extends r{attributeEditMehotd=[];visible=!0;_Emitters=[];_Particles=[];constructor(){super()}getWeight(){return 0}modifyVelocity(t){this._Particles.forEach(e=>{e.modifyVelocity(t)})}update(t){this.updateParticles(t),this.killParticles(),this.updateEmitters()}killParticles(){const t=this._Particles.filter(e=>e.age<e.life);this._Particles=t}updateEmitters(){this._Emitters.forEach(t=>{t.emitParticles().forEach(e=>{this._Particles.length<s.ParticleSolverLimit&&this._Particles.push(e)})})}simulateParticles(){}updateParticles(t){if(t<0)throw"dt should not be less tahn zero";this._Particles.forEach(e=>{this.attributeEditMehotd.forEach(a=>{a(e)}),e.age+=t,e.update(t),e.applyVelocity()})}addVelocity(t){throw new Error("Method not implemented.")}addRotationSpeed(t){throw new Error("Method not implemented.")}applyVelocity(){throw new Error("Method not implemented.")}applyRotationSpeed(){throw new Error("Method not implemented.")}IsSimulatable=!1;draw(t){for(let e=0;e<this._Particles.length;e++)this._Particles[e].draw(t)}addEmitter(t){return t.game=this.game,this._Emitters.push(t),this}addAtrributeEditMethod(t){return this.attributeEditMehotd.push(t),this}}class n extends o{getWeight(){return 1}modifyVelocity(t){this._vel=t(this._vel)}_vel=new l(0,0);addVelocity(t){this._vel.add(t)}addRotationSpeed(t){}applyVelocity(){this.position.add(this._vel)}applyRotationSpeed(){}IsSimulatable=!0;update(t){this.age+=t}life=1;age=0}function c(i,t){return i+Math.random()*(t-i)}export{n as P,h as a,c as r};
