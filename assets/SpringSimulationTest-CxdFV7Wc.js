import{G as S}from"./AirDrag-DeSZAY5B.js";import{G as w}from"./Gravity-12kuCoBp.js";import{G as f,D as g,C as c,V as r,P as b,_ as V,a as v}from"./GameComponent.vue_vue_type_style_index_0_lang-C4RZRmDn.js";import{P as x}from"./PhysicBall-BmMQky9W.js";import{d as O,c as D,a as I,b as N,u as P,o as E}from"./index-8LjSHwpe.js";class y extends f{_node1;_node2;_length;constructor(t,e){super(),this._node1=t,this._node2=e,this._length=t.position.distanceTo(e.position),console.log("_length: "+this._length)}draw(t){g.DrawLine(t,this._node1.position,this._node2.position,5,"yellow")}visible=!0;update(t){if(this._node1.position.distanceTo(this._node2.position)!==this._length){const i=this._node1.position.clone().sub(this._node2.position).normalize(),l=this._node1.position.distanceTo(this._node2.position)-this._length+0;if(this._node1.IsSimulatable){const o=i.clone().multiplyScalar(this._node2.IsSimulatable?-.5:-1).multiplyScalar(l);this._node1.move(o),this._node1.modifyVelocity(n=>n.add(o.multiplyScalar(.1)))}if(this._node2.IsSimulatable){const o=i.clone().multiplyScalar(this._node1.IsSimulatable?.5:1).multiplyScalar(l);this._node2.move(o),this._node2.modifyVelocity(n=>n.add(o.multiplyScalar(.1)))}const s=this._node2.position.distanceTo(this._node1.position);Math.abs(s-this._length)>.001}}modifyVelocity(t){this._node1.modifyVelocity(t),this._node2.modifyVelocity(t)}addVelocity(t){throw new Error("Method not implemented.")}addRotationSpeed(t){throw new Error("Method not implemented.")}applyVelocity(){throw new Error("Method not implemented.")}applyRotationSpeed(){throw new Error("Method not implemented.")}IsSimulatable=!0}class C extends y{width=20;castObjectOntoNormal(t){const a=c.getNormalOfVector(this._node1.position.clone().sub(this._node2.position)).clone().normalize().multiplyScalar(this.width/2),i=this._node1.position.clone().add(a),d=this._node2.position.clone().add(a),p=this._node1.position.clone().sub(a),m=this._node2.position.clone().sub(a),l=c.castPointOnAxis(i,t),s=c.castPointOnAxis(d,t),o=c.castPointOnAxis(p,t),n=c.castPointOnAxis(m,t);return{min:Math.min(l,s,o,n),max:Math.max(l,s,o,n)}}getNormalsForCollision(){const t=this._node1.position.clone().sub(this._node2.position).normalize();return[c.getNormalOfVector(t),t]}getCenterPoint(){return new r((this._node1.position.x+this._node2.position.x)/2,(this._node1.position.y+this._node2.position.y)/2)}draw(t){g.DrawLine(t,this._node1.position,this._node2.position,this.width,"red")}}class j extends f{_nodes=[];_lines=[];draw(t){this._lines.forEach(e=>{e.draw(t)}),this._nodes.forEach(e=>{e.draw(t)})}visible=!0;modifyVelocity(t){this._nodes.forEach(e=>{e.modifyVelocity(t)})}addVelocity(t){this._nodes.forEach(e=>{e.addVelocity(t)})}addRotationSpeed(t){}applyVelocity(){this._nodes.forEach(t=>{t.applyVelocity()})}applyRotationSpeed(){}IsSimulatable=!0;update(t){this._lines.forEach(e=>{e.update(t)})}addSpringNode(t){if(this._nodes.length>0){const e=new y(this._nodes[this._nodes.length-1],t);e.game=this.game,this._lines.push(e)}t.game=this.game,this._nodes.push(t)}}class G extends j{addSpringNode(t){if(!this.game)throw"first spring needs to be asdded to game controller";if(this._nodes.length>0){const e=new C(this._nodes[this._nodes.length-1],t);e.game=this.game,this.game?._objectReferenceController.addCollider(e),this._lines.push(e)}t.game=this.game,this._nodes.push(t)}}class _ extends b{modifyVelocity(t){this.IsSimulatable&&(this._vel=t(this._vel))}_vel=new r(0,0);addVelocity(t){this.IsSimulatable&&this._vel.add(t)}addRotationSpeed(t){}applyVelocity(){this.IsSimulatable&&this.position.add(this._vel)}applyRotationSpeed(){}IsSimulatable=!0;update(t){}}const M={class:"DemoView"},u=10,z=O({__name:"SpringSimulationTest",setup(h){const t=new r(100,700),e=new r(500,500),a=e.clone().sub(t).divideScalar(u),i=new v,d=new G;i.addObject(d);const p=new _(t);p.IsSimulatable=!1,d.addSpringNode(p);for(let s=1;s<u;s++){const o=a.clone().multiplyScalar(s),n=t.clone().add(o);d.addSpringNode(new _(n))}const m=new _(new r(e.x,e.y));m.IsSimulatable=!1,d.addSpringNode(m),i.addObject(new w),i.addObject(new S(1.02));const l=new x(new r(200,30),20,"red");return i.addObject(l),(s,o)=>(E(),D("main",M,[o[0]||(o[0]=I("div",{class:"titleStyle"}," Srpings demo ",-1)),N(V,{class:"gameView",id:"shapes_demo",game:P(i)},null,8,["game"])]))}});export{z as default};