import{P as n,c as o,V as s,C as c}from"./GameComponent.vue_vue_type_style_index_0_lang-BQqnMhIl.js";class r extends n{constructor(t,i=3,e="white"){super(t,i,e)}}class p extends r{IsSimulatable=!0;constructor(t,i=3,e="white"){super(t,i,e)}isActivator=!1;isCollsioniActive=!0;OnObjectEnter(t){}getWeight(){return 1}modifyVelocity(t){this.Velocity=t(this.Velocity),this.Velocity=this.Velocity.length()>o.speedLimit?this.Velocity.normalize().multiplyScalar(o.speedLimit):this.Velocity}addVelocity(t){this.Velocity.add(t),this.Velocity=this.Velocity.length()>o.speedLimit?this.Velocity.normalize().multiplyScalar(o.speedLimit):this.Velocity}addRotationSpeed(t){this.rotationSpeed+=t}applyVelocity(){this.move(this.Velocity)}applyRotationSpeed(){this.rotate(this.rotationSpeed)}getCenterPoint(){return new s(this.position.x,this.position.y)}castObjectOntoNormal(t){const i=c.castPointOnAxis(this.position,t),e=i-this._radius/2,a=i+this._radius/2;return{min:e,max:a}}getNormalsForCollision(){return[]}rotationSpeed=0;Velocity=new s;draw(t){super.draw(t)}clone(){const t=super.clone();return t.rotationSpeed=this.rotationSpeed,t.Velocity=this.Velocity.clone(),t.isActivator=this.isActivator,t.isCollsioniActive=this.isCollsioniActive,t.IsSimulatable=this.IsSimulatable,t}}export{p as P};