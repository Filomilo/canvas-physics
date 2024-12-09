import{a as g,D as m,C as l,V as p,A as S}from"./GameComponent.vue_vue_type_style_index_0_lang-YRpTnnfg.js";import{S as f}from"./SpingNode-CI5De6NP.js";class y extends g{_node1;_node2;_length;constructor(t,i){super(),this._node1=t,this._node2=i,this._length=t.position.distanceTo(i.position)}getWeight(){return 0}draw(t){m.DrawLine(t,this._node1.position,this._node2.position,5,"yellow")}visible=!0;update(t){if(this._node1.position.distanceTo(this._node2.position)!==this._length){const e=(o,s)=>{const n=o.position.clone().sub(s.position),_=n.clone().normalize(),a=n.length()-this._length;if(o.IsSimulatable){const r=_.clone().multiplyScalar(-a/2).multiplyScalar(s.IsSimulatable?.5:2);o.move(r),o.modifyVelocity(c=>{const h=r.clone().multiplyScalar(.1);return c.clone().add(h)})}};e(this._node1,this._node2),e(this._node2,this._node1)}}counter=0;modfyMehtods=[];modifyVelocity(t){const i=t.toString();this.modfyMehtods.includes(i)||this.modfyMehtods.push(i),this._node1.modifyVelocity(t),this._node2.modifyVelocity(t)}addVelocity(t){}addRotationSpeed(t){}applyVelocity(){}applyRotationSpeed(){}IsSimulatable=!0}class v extends y{isActivator=!1;isCollsioniActive=!0;OnObjectEnter(t){}width=20;castObjectOntoNormal(t){const e=l.getNormalOfVector(this._node1.position.clone().sub(this._node2.position)).clone().normalize().multiplyScalar(this.width/2),o=this._node1.position.clone().add(e),s=this._node2.position.clone().add(e),n=this._node1.position.clone().sub(e),_=this._node2.position.clone().sub(e),a=l.castPointOnAxis(o,t),r=l.castPointOnAxis(s,t),c=l.castPointOnAxis(n,t),h=l.castPointOnAxis(_,t);return{min:Math.min(a,r,c,h),max:Math.max(a,r,c,h)}}getNormalsForCollision(){const t=this._node1.position.clone().sub(this._node2.position).normalize();return[l.getNormalOfVector(t),t]}getCenterPoint(){return new p((this._node1.position.x+this._node2.position.x)/2,(this._node1.position.y+this._node2.position.y)/2)}draw(t){m.DrawLine(t,this._node1.position,this._node2.position,this.width,"red")}}class u extends f{isPressed=!1;mouseOnState=!1;isHoveredOver;centerOrigin(){}resetTransoform(){this.position=new p}_originalColor="white";update(t){if(this.isPressed===!0){const i=this.game?._MouseController.getMouseDelta();this.move(this.isPressed?i||new p(0,0):new p(0,0)),this.rotate(this.game?this.game?._MouseController.getScrollDelta():0)}}onPress(){}onUnpress(){}onClick(){this._color="yellow",new Promise(t=>setTimeout(t,200)).then(()=>{this._color=this._originalColor})}onHover(){this._color="red"}onUnHover(){this._color=this._originalColor}isMouseOn(t){return S.isPointWithinCirlce(t,this.position,this._radius)}draw(t){this.isHoveredOver&&(this._color="red"),this.isPressed&&(this._color="green"),super.draw(t),this._color=this._originalColor}}class w extends g{_nodes=[];_lines=[];constructor(t=void 0,i=void 0,e=void 0){if(super(),Array.isArray(t)&&t.forEach(o=>{this.addSpringNode(o)}),t!==void 0&&i!==void 0&&e!==void 0&&!Array.isArray(t)){this.addSpringNode(new u(t,40)).IsSimulatable=!1;const o=i.clone().sub(t).divideScalar(e+1);for(let s=0;s<e;s++){const n=t.clone().add(o.clone().multiplyScalar(s+1));this.addSpringNode(new f(n,10))}this.addSpringNode(new u(i,40)).IsSimulatable=!1}}getWeight(){return 1}modifyVelocity(t){}addVelocity(t){}addRotationSpeed(t){}applyVelocity(){}applyRotationSpeed(){}IsSimulatable=!0;update(t){}resetVel(){this._nodes.forEach(t=>{t.resetVel()})}addSpringNode(t){if(this._nodes.length>0){const i=new y(this._nodes[this._nodes.length-1],t);i.game=this.game,this._lines.push(i)}return t.game=this.game,this._nodes.push(t),t}getChildObjects(){return[...this._lines,...this._nodes]}}class x extends w{constructor(t=void 0,i=void 0,e=void 0){super(t,i,e)}addSpringNode(t){if(this._nodes.length>0){const i=new v(this._nodes[this._nodes.length-1],t);i.game=this.game,this.game?._objectReferenceController.addCollider(i),this._lines.push(i)}return t.game=this.game,this._nodes.push(t),t}}export{x as C};
