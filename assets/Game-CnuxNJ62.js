import{d as ot,r as at,e as ct,w as lt,o as J,c as tt,f as ut}from"./index-9Aknisj-.js";const yt=["id"],St=ot({__name:"GameComponent",props:{game:{},id:{}},setup(d){const t=d,s=at(null);ct(()=>{}),lt(s,()=>{t.game&&s.value&&(e(),t.game.init(s.value))});function e(){s.value&&(s.value.width=s.value.clientWidth,s.value.height=s.value.clientHeight)}return window.addEventListener("resize",e),(i,h)=>(J(),tt("div",null,[t.game&&t.id?(J(),tt("canvas",{key:0,id:t.id,ref_key:"canvasRef",ref:s},null,8,yt)):ut("",!0)]))}});function _t(d){return typeof d.onClick=="function"}function mt(d){return typeof d.visible=="boolean"&&typeof d.draw=="function"}function xt(d){return typeof d.isHoveredOver=="boolean"&&typeof d.onUnHover=="function"&&typeof d.onHover=="function"}function Mt(d){return typeof d.mouseOnState=="boolean"&&typeof d.isMouseOn=="function"}function dt(d){return typeof d.isPressed=="boolean"&&typeof d.onPress=="function"&&typeof d.onUnpress=="function"}function zt(d){return typeof d.move=="function"&&typeof d.rotate=="function"&&typeof d.rotation=="object"&&typeof d.position=="object"}function pt(d){return typeof d.update=="function"}class bt{AllObjects=[];ClickableObjects=[];DrawableObjects=[];HoverableObjects=[];PressableObjects=[];TransformableObjects=[];MouseReactiveObjects=[];UpdatableObjects=[];addObject(t){this.AllObjects.push(t),_t(t)&&this.ClickableObjects.push(t),mt(t)&&this.DrawableObjects.push(t),xt(t)&&this.HoverableObjects.push(t),dt(t)&&this.PressableObjects.push(t),zt(t)&&this.TransformableObjects.push(t),Mt(t)&&this.MouseReactiveObjects.push(t),pt(t)&&this.UpdatableObjects.push(t)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nt="169",Q=2e3,st=2001;function f(d,t,s){return Math.max(t,Math.min(s,d))}class F{constructor(t=0,s=0){F.prototype.isVector2=!0,this.x=t,this.y=s}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,s){return this.x=t,this.y=s,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const s=this.x,e=this.y,i=t.elements;return this.x=i[0]*s+i[3]*e+i[6],this.y=i[1]*s+i[4]*e+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this}clampLength(t,s){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(s,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const s=Math.sqrt(this.lengthSq()*t.lengthSq());if(s===0)return Math.PI/2;const e=this.dot(t)/s;return Math.acos(f(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,e=this.y-t.y;return s*s+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this}lerpVectors(t,s,e){return this.x=t.x+(s.x-t.x)*e,this.y=t.y+(s.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t}fromBufferAttribute(t,s){return this.x=t.getX(s),this.y=t.getY(s),this}rotateAround(t,s){const e=Math.cos(s),i=Math.sin(s),h=this.x-t.x,a=this.y-t.y;return this.x=h*e-a*i+t.x,this.y=h*i+a*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ${constructor(t,s,e,i,h,a,c,n,r){$.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,s,e,i,h,a,c,n,r)}set(t,s,e,i,h,a,c,n,r){const o=this.elements;return o[0]=t,o[1]=i,o[2]=c,o[3]=s,o[4]=h,o[5]=n,o[6]=e,o[7]=a,o[8]=r,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const s=this.elements,e=t.elements;return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],this}extractBasis(t,s,e){return t.setFromMatrix3Column(this,0),s.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const s=t.elements;return this.set(s[0],s[4],s[8],s[1],s[5],s[9],s[2],s[6],s[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,s){const e=t.elements,i=s.elements,h=this.elements,a=e[0],c=e[3],n=e[6],r=e[1],o=e[4],l=e[7],y=e[2],u=e[5],_=e[8],m=i[0],M=i[3],x=i[6],g=i[1],C=i[4],b=i[7],p=i[2],w=i[5],z=i[8];return h[0]=a*m+c*g+n*p,h[3]=a*M+c*C+n*w,h[6]=a*x+c*b+n*z,h[1]=r*m+o*g+l*p,h[4]=r*M+o*C+l*w,h[7]=r*x+o*b+l*z,h[2]=y*m+u*g+_*p,h[5]=y*M+u*C+_*w,h[8]=y*x+u*b+_*z,this}multiplyScalar(t){const s=this.elements;return s[0]*=t,s[3]*=t,s[6]*=t,s[1]*=t,s[4]*=t,s[7]*=t,s[2]*=t,s[5]*=t,s[8]*=t,this}determinant(){const t=this.elements,s=t[0],e=t[1],i=t[2],h=t[3],a=t[4],c=t[5],n=t[6],r=t[7],o=t[8];return s*a*o-s*c*r-e*h*o+e*c*n+i*h*r-i*a*n}invert(){const t=this.elements,s=t[0],e=t[1],i=t[2],h=t[3],a=t[4],c=t[5],n=t[6],r=t[7],o=t[8],l=o*a-c*r,y=c*n-o*h,u=r*h-a*n,_=s*l+e*y+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=l*m,t[1]=(i*r-o*e)*m,t[2]=(c*e-i*a)*m,t[3]=y*m,t[4]=(o*s-i*n)*m,t[5]=(i*h-c*s)*m,t[6]=u*m,t[7]=(e*n-r*s)*m,t[8]=(a*s-e*h)*m,this}transpose(){let t;const s=this.elements;return t=s[1],s[1]=s[3],s[3]=t,t=s[2],s[2]=s[6],s[6]=t,t=s[5],s[5]=s[7],s[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const s=this.elements;return t[0]=s[0],t[1]=s[3],t[2]=s[6],t[3]=s[1],t[4]=s[4],t[5]=s[7],t[6]=s[2],t[7]=s[5],t[8]=s[8],this}setUvTransform(t,s,e,i,h,a,c){const n=Math.cos(h),r=Math.sin(h);return this.set(e*n,e*r,-e*(n*a+r*c)+a+t,-i*r,i*n,-i*(-r*a+n*c)+c+s,0,0,1),this}scale(t,s){return this.premultiply(W.makeScale(t,s)),this}rotate(t){return this.premultiply(W.makeRotation(-t)),this}translate(t,s){return this.premultiply(W.makeTranslation(t,s)),this}makeTranslation(t,s){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,s,0,0,1),this}makeRotation(t){const s=Math.cos(t),e=Math.sin(t);return this.set(s,-e,0,e,s,0,0,0,1),this}makeScale(t,s){return this.set(t,0,0,0,s,0,0,0,1),this}equals(t){const s=this.elements,e=t.elements;for(let i=0;i<9;i++)if(s[i]!==e[i])return!1;return!0}fromArray(t,s=0){for(let e=0;e<9;e++)this.elements[e]=t[e+s];return this}toArray(t=[],s=0){const e=this.elements;return t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3],t[s+4]=e[4],t[s+5]=e[5],t[s+6]=e[6],t[s+7]=e[7],t[s+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const W=new $;class rt{constructor(t=0,s=0,e=0,i=1){this.isQuaternion=!0,this._x=t,this._y=s,this._z=e,this._w=i}static slerpFlat(t,s,e,i,h,a,c){let n=e[i+0],r=e[i+1],o=e[i+2],l=e[i+3];const y=h[a+0],u=h[a+1],_=h[a+2],m=h[a+3];if(c===0){t[s+0]=n,t[s+1]=r,t[s+2]=o,t[s+3]=l;return}if(c===1){t[s+0]=y,t[s+1]=u,t[s+2]=_,t[s+3]=m;return}if(l!==m||n!==y||r!==u||o!==_){let M=1-c;const x=n*y+r*u+o*_+l*m,g=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const p=Math.sqrt(C),w=Math.atan2(p,x*g);M=Math.sin(M*w)/p,c=Math.sin(c*w)/p}const b=c*g;if(n=n*M+y*b,r=r*M+u*b,o=o*M+_*b,l=l*M+m*b,M===1-c){const p=1/Math.sqrt(n*n+r*r+o*o+l*l);n*=p,r*=p,o*=p,l*=p}}t[s]=n,t[s+1]=r,t[s+2]=o,t[s+3]=l}static multiplyQuaternionsFlat(t,s,e,i,h,a){const c=e[i],n=e[i+1],r=e[i+2],o=e[i+3],l=h[a],y=h[a+1],u=h[a+2],_=h[a+3];return t[s]=c*_+o*l+n*u-r*y,t[s+1]=n*_+o*y+r*l-c*u,t[s+2]=r*_+o*u+c*y-n*l,t[s+3]=o*_-c*l-n*y-r*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,s,e,i){return this._x=t,this._y=s,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,s=!0){const e=t._x,i=t._y,h=t._z,a=t._order,c=Math.cos,n=Math.sin,r=c(e/2),o=c(i/2),l=c(h/2),y=n(e/2),u=n(i/2),_=n(h/2);switch(a){case"XYZ":this._x=y*o*l+r*u*_,this._y=r*u*l-y*o*_,this._z=r*o*_+y*u*l,this._w=r*o*l-y*u*_;break;case"YXZ":this._x=y*o*l+r*u*_,this._y=r*u*l-y*o*_,this._z=r*o*_-y*u*l,this._w=r*o*l+y*u*_;break;case"ZXY":this._x=y*o*l-r*u*_,this._y=r*u*l+y*o*_,this._z=r*o*_+y*u*l,this._w=r*o*l-y*u*_;break;case"ZYX":this._x=y*o*l-r*u*_,this._y=r*u*l+y*o*_,this._z=r*o*_-y*u*l,this._w=r*o*l+y*u*_;break;case"YZX":this._x=y*o*l+r*u*_,this._y=r*u*l+y*o*_,this._z=r*o*_-y*u*l,this._w=r*o*l-y*u*_;break;case"XZY":this._x=y*o*l-r*u*_,this._y=r*u*l-y*o*_,this._z=r*o*_+y*u*l,this._w=r*o*l+y*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return s===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,s){const e=s/2,i=Math.sin(e);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const s=t.elements,e=s[0],i=s[4],h=s[8],a=s[1],c=s[5],n=s[9],r=s[2],o=s[6],l=s[10],y=e+c+l;if(y>0){const u=.5/Math.sqrt(y+1);this._w=.25/u,this._x=(o-n)*u,this._y=(h-r)*u,this._z=(a-i)*u}else if(e>c&&e>l){const u=2*Math.sqrt(1+e-c-l);this._w=(o-n)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(h+r)/u}else if(c>l){const u=2*Math.sqrt(1+c-e-l);this._w=(h-r)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(n+o)/u}else{const u=2*Math.sqrt(1+l-e-c);this._w=(a-i)/u,this._x=(h+r)/u,this._y=(n+o)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,s){let e=t.dot(s)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*s.z-t.z*s.y,this._y=t.z*s.x-t.x*s.z,this._z=t.x*s.y-t.y*s.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(f(this.dot(t),-1,1)))}rotateTowards(t,s){const e=this.angleTo(t);if(e===0)return this;const i=Math.min(1,s/e);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,s){const e=t._x,i=t._y,h=t._z,a=t._w,c=s._x,n=s._y,r=s._z,o=s._w;return this._x=e*o+a*c+i*r-h*n,this._y=i*o+a*n+h*c-e*r,this._z=h*o+a*r+e*n-i*c,this._w=a*o-e*c-i*n-h*r,this._onChangeCallback(),this}slerp(t,s){if(s===0)return this;if(s===1)return this.copy(t);const e=this._x,i=this._y,h=this._z,a=this._w;let c=a*t._w+e*t._x+i*t._y+h*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=e,this._y=i,this._z=h,this;const n=1-c*c;if(n<=Number.EPSILON){const u=1-s;return this._w=u*a+s*this._w,this._x=u*e+s*this._x,this._y=u*i+s*this._y,this._z=u*h+s*this._z,this.normalize(),this}const r=Math.sqrt(n),o=Math.atan2(r,c),l=Math.sin((1-s)*o)/r,y=Math.sin(s*o)/r;return this._w=a*l+this._w*y,this._x=e*l+this._x*y,this._y=i*l+this._y*y,this._z=h*l+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,s,e){return this.copy(t).slerp(s,e)}random(){const t=2*Math.PI*Math.random(),s=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),h=Math.sqrt(e);return this.set(i*Math.sin(t),i*Math.cos(t),h*Math.sin(s),h*Math.cos(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,s=0){return this._x=t[s],this._y=t[s+1],this._z=t[s+2],this._w=t[s+3],this._onChangeCallback(),this}toArray(t=[],s=0){return t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._w,t}fromBufferAttribute(t,s){return this._x=t.getX(s),this._y=t.getY(s),this._z=t.getZ(s),this._w=t.getW(s),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,s=0,e=0){E.prototype.isVector3=!0,this.x=t,this.y=s,this.z=e}set(t,s,e){return e===void 0&&(e=this.z),this.x=t,this.y=s,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this.z=t.z+s.z,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this.z+=t.z*s,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this.z=t.z-s.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,s){return this.x=t.x*s.x,this.y=t.y*s.y,this.z=t.z*s.z,this}applyEuler(t){return this.applyQuaternion(et.setFromEuler(t))}applyAxisAngle(t,s){return this.applyQuaternion(et.setFromAxisAngle(t,s))}applyMatrix3(t){const s=this.x,e=this.y,i=this.z,h=t.elements;return this.x=h[0]*s+h[3]*e+h[6]*i,this.y=h[1]*s+h[4]*e+h[7]*i,this.z=h[2]*s+h[5]*e+h[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const s=this.x,e=this.y,i=this.z,h=t.elements,a=1/(h[3]*s+h[7]*e+h[11]*i+h[15]);return this.x=(h[0]*s+h[4]*e+h[8]*i+h[12])*a,this.y=(h[1]*s+h[5]*e+h[9]*i+h[13])*a,this.z=(h[2]*s+h[6]*e+h[10]*i+h[14])*a,this}applyQuaternion(t){const s=this.x,e=this.y,i=this.z,h=t.x,a=t.y,c=t.z,n=t.w,r=2*(a*i-c*e),o=2*(c*s-h*i),l=2*(h*e-a*s);return this.x=s+n*r+a*l-c*o,this.y=e+n*o+c*r-h*l,this.z=i+n*l+h*o-a*r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const s=this.x,e=this.y,i=this.z,h=t.elements;return this.x=h[0]*s+h[4]*e+h[8]*i,this.y=h[1]*s+h[5]*e+h[9]*i,this.z=h[2]*s+h[6]*e+h[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this.z=Math.max(t.z,Math.min(s.z,this.z)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this.z=Math.max(t,Math.min(s,this.z)),this}clampLength(t,s){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(s,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this.z+=(t.z-this.z)*s,this}lerpVectors(t,s,e){return this.x=t.x+(s.x-t.x)*e,this.y=t.y+(s.y-t.y)*e,this.z=t.z+(s.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,s){const e=t.x,i=t.y,h=t.z,a=s.x,c=s.y,n=s.z;return this.x=i*n-h*c,this.y=h*a-e*n,this.z=e*c-i*a,this}projectOnVector(t){const s=t.lengthSq();if(s===0)return this.set(0,0,0);const e=t.dot(this)/s;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return G.copy(this).projectOnVector(t),this.sub(G)}reflect(t){return this.sub(G.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const s=Math.sqrt(this.lengthSq()*t.lengthSq());if(s===0)return Math.PI/2;const e=this.dot(t)/s;return Math.acos(f(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,e=this.y-t.y,i=this.z-t.z;return s*s+e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,s,e){const i=Math.sin(s)*t;return this.x=i*Math.sin(e),this.y=Math.cos(s)*t,this.z=i*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,s,e){return this.x=t*Math.sin(s),this.y=e,this.z=t*Math.cos(s),this}setFromMatrixPosition(t){const s=t.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this}setFromMatrixScale(t){const s=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=s,this.y=e,this.z=i,this}setFromMatrixColumn(t,s){return this.fromArray(t.elements,s*4)}setFromMatrix3Column(t,s){return this.fromArray(t.elements,s*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this.z=t[s+2],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t[s+2]=this.z,t}fromBufferAttribute(t,s){return this.x=t.getX(s),this.y=t.getY(s),this.z=t.getZ(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,s=Math.random()*2-1,e=Math.sqrt(1-s*s);return this.x=e*Math.cos(t),this.y=s,this.z=e*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const G=new E,et=new rt;class T{constructor(t,s,e,i,h,a,c,n,r,o,l,y,u,_,m,M){T.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,s,e,i,h,a,c,n,r,o,l,y,u,_,m,M)}set(t,s,e,i,h,a,c,n,r,o,l,y,u,_,m,M){const x=this.elements;return x[0]=t,x[4]=s,x[8]=e,x[12]=i,x[1]=h,x[5]=a,x[9]=c,x[13]=n,x[2]=r,x[6]=o,x[10]=l,x[14]=y,x[3]=u,x[7]=_,x[11]=m,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new T().fromArray(this.elements)}copy(t){const s=this.elements,e=t.elements;return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=e[11],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],this}copyPosition(t){const s=this.elements,e=t.elements;return s[12]=e[12],s[13]=e[13],s[14]=e[14],this}setFromMatrix3(t){const s=t.elements;return this.set(s[0],s[3],s[6],0,s[1],s[4],s[7],0,s[2],s[5],s[8],0,0,0,0,1),this}extractBasis(t,s,e){return t.setFromMatrixColumn(this,0),s.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,s,e){return this.set(t.x,s.x,e.x,0,t.y,s.y,e.y,0,t.z,s.z,e.z,0,0,0,0,1),this}extractRotation(t){const s=this.elements,e=t.elements,i=1/O.setFromMatrixColumn(t,0).length(),h=1/O.setFromMatrixColumn(t,1).length(),a=1/O.setFromMatrixColumn(t,2).length();return s[0]=e[0]*i,s[1]=e[1]*i,s[2]=e[2]*i,s[3]=0,s[4]=e[4]*h,s[5]=e[5]*h,s[6]=e[6]*h,s[7]=0,s[8]=e[8]*a,s[9]=e[9]*a,s[10]=e[10]*a,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromEuler(t){const s=this.elements,e=t.x,i=t.y,h=t.z,a=Math.cos(e),c=Math.sin(e),n=Math.cos(i),r=Math.sin(i),o=Math.cos(h),l=Math.sin(h);if(t.order==="XYZ"){const y=a*o,u=a*l,_=c*o,m=c*l;s[0]=n*o,s[4]=-n*l,s[8]=r,s[1]=u+_*r,s[5]=y-m*r,s[9]=-c*n,s[2]=m-y*r,s[6]=_+u*r,s[10]=a*n}else if(t.order==="YXZ"){const y=n*o,u=n*l,_=r*o,m=r*l;s[0]=y+m*c,s[4]=_*c-u,s[8]=a*r,s[1]=a*l,s[5]=a*o,s[9]=-c,s[2]=u*c-_,s[6]=m+y*c,s[10]=a*n}else if(t.order==="ZXY"){const y=n*o,u=n*l,_=r*o,m=r*l;s[0]=y-m*c,s[4]=-a*l,s[8]=_+u*c,s[1]=u+_*c,s[5]=a*o,s[9]=m-y*c,s[2]=-a*r,s[6]=c,s[10]=a*n}else if(t.order==="ZYX"){const y=a*o,u=a*l,_=c*o,m=c*l;s[0]=n*o,s[4]=_*r-u,s[8]=y*r+m,s[1]=n*l,s[5]=m*r+y,s[9]=u*r-_,s[2]=-r,s[6]=c*n,s[10]=a*n}else if(t.order==="YZX"){const y=a*n,u=a*r,_=c*n,m=c*r;s[0]=n*o,s[4]=m-y*l,s[8]=_*l+u,s[1]=l,s[5]=a*o,s[9]=-c*o,s[2]=-r*o,s[6]=u*l+_,s[10]=y-m*l}else if(t.order==="XZY"){const y=a*n,u=a*r,_=c*n,m=c*r;s[0]=n*o,s[4]=-l,s[8]=r*o,s[1]=y*l+m,s[5]=a*o,s[9]=u*l-_,s[2]=_*l-u,s[6]=c*o,s[10]=m*l+y}return s[3]=0,s[7]=0,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wt,t,gt)}lookAt(t,s,e){const i=this.elements;return k.subVectors(t,s),k.lengthSq()===0&&(k.z=1),k.normalize(),P.crossVectors(e,k),P.lengthSq()===0&&(Math.abs(e.z)===1?k.x+=1e-4:k.z+=1e-4,k.normalize(),P.crossVectors(e,k)),P.normalize(),B.crossVectors(k,P),i[0]=P.x,i[4]=B.x,i[8]=k.x,i[1]=P.y,i[5]=B.y,i[9]=k.y,i[2]=P.z,i[6]=B.z,i[10]=k.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,s){const e=t.elements,i=s.elements,h=this.elements,a=e[0],c=e[4],n=e[8],r=e[12],o=e[1],l=e[5],y=e[9],u=e[13],_=e[2],m=e[6],M=e[10],x=e[14],g=e[3],C=e[7],b=e[11],p=e[15],w=i[0],z=i[4],q=i[8],A=i[12],j=i[1],L=i[5],X=i[9],Y=i[13],v=i[2],H=i[6],Z=i[10],D=i[14],I=i[3],V=i[7],U=i[11],N=i[15];return h[0]=a*w+c*j+n*v+r*I,h[4]=a*z+c*L+n*H+r*V,h[8]=a*q+c*X+n*Z+r*U,h[12]=a*A+c*Y+n*D+r*N,h[1]=o*w+l*j+y*v+u*I,h[5]=o*z+l*L+y*H+u*V,h[9]=o*q+l*X+y*Z+u*U,h[13]=o*A+l*Y+y*D+u*N,h[2]=_*w+m*j+M*v+x*I,h[6]=_*z+m*L+M*H+x*V,h[10]=_*q+m*X+M*Z+x*U,h[14]=_*A+m*Y+M*D+x*N,h[3]=g*w+C*j+b*v+p*I,h[7]=g*z+C*L+b*H+p*V,h[11]=g*q+C*X+b*Z+p*U,h[15]=g*A+C*Y+b*D+p*N,this}multiplyScalar(t){const s=this.elements;return s[0]*=t,s[4]*=t,s[8]*=t,s[12]*=t,s[1]*=t,s[5]*=t,s[9]*=t,s[13]*=t,s[2]*=t,s[6]*=t,s[10]*=t,s[14]*=t,s[3]*=t,s[7]*=t,s[11]*=t,s[15]*=t,this}determinant(){const t=this.elements,s=t[0],e=t[4],i=t[8],h=t[12],a=t[1],c=t[5],n=t[9],r=t[13],o=t[2],l=t[6],y=t[10],u=t[14],_=t[3],m=t[7],M=t[11],x=t[15];return _*(+h*n*l-i*r*l-h*c*y+e*r*y+i*c*u-e*n*u)+m*(+s*n*u-s*r*y+h*a*y-i*a*u+i*r*o-h*n*o)+M*(+s*r*l-s*c*u-h*a*l+e*a*u+h*c*o-e*r*o)+x*(-i*c*o-s*n*l+s*c*y+i*a*l-e*a*y+e*n*o)}transpose(){const t=this.elements;let s;return s=t[1],t[1]=t[4],t[4]=s,s=t[2],t[2]=t[8],t[8]=s,s=t[6],t[6]=t[9],t[9]=s,s=t[3],t[3]=t[12],t[12]=s,s=t[7],t[7]=t[13],t[13]=s,s=t[11],t[11]=t[14],t[14]=s,this}setPosition(t,s,e){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=s,i[14]=e),this}invert(){const t=this.elements,s=t[0],e=t[1],i=t[2],h=t[3],a=t[4],c=t[5],n=t[6],r=t[7],o=t[8],l=t[9],y=t[10],u=t[11],_=t[12],m=t[13],M=t[14],x=t[15],g=l*M*r-m*y*r+m*n*u-c*M*u-l*n*x+c*y*x,C=_*y*r-o*M*r-_*n*u+a*M*u+o*n*x-a*y*x,b=o*m*r-_*l*r+_*c*u-a*m*u-o*c*x+a*l*x,p=_*l*n-o*m*n-_*c*y+a*m*y+o*c*M-a*l*M,w=s*g+e*C+i*b+h*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/w;return t[0]=g*z,t[1]=(m*y*h-l*M*h-m*i*u+e*M*u+l*i*x-e*y*x)*z,t[2]=(c*M*h-m*n*h+m*i*r-e*M*r-c*i*x+e*n*x)*z,t[3]=(l*n*h-c*y*h-l*i*r+e*y*r+c*i*u-e*n*u)*z,t[4]=C*z,t[5]=(o*M*h-_*y*h+_*i*u-s*M*u-o*i*x+s*y*x)*z,t[6]=(_*n*h-a*M*h-_*i*r+s*M*r+a*i*x-s*n*x)*z,t[7]=(a*y*h-o*n*h+o*i*r-s*y*r-a*i*u+s*n*u)*z,t[8]=b*z,t[9]=(_*l*h-o*m*h-_*e*u+s*m*u+o*e*x-s*l*x)*z,t[10]=(a*m*h-_*c*h+_*e*r-s*m*r-a*e*x+s*c*x)*z,t[11]=(o*c*h-a*l*h-o*e*r+s*l*r+a*e*u-s*c*u)*z,t[12]=p*z,t[13]=(o*m*i-_*l*i+_*e*y-s*m*y-o*e*M+s*l*M)*z,t[14]=(_*c*i-a*m*i-_*e*n+s*m*n+a*e*M-s*c*M)*z,t[15]=(a*l*i-o*c*i+o*e*n-s*l*n-a*e*y+s*c*y)*z,this}scale(t){const s=this.elements,e=t.x,i=t.y,h=t.z;return s[0]*=e,s[4]*=i,s[8]*=h,s[1]*=e,s[5]*=i,s[9]*=h,s[2]*=e,s[6]*=i,s[10]*=h,s[3]*=e,s[7]*=i,s[11]*=h,this}getMaxScaleOnAxis(){const t=this.elements,s=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(s,e,i))}makeTranslation(t,s,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,s,0,0,1,e,0,0,0,1),this}makeRotationX(t){const s=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,s,-e,0,0,e,s,0,0,0,0,1),this}makeRotationY(t){const s=Math.cos(t),e=Math.sin(t);return this.set(s,0,e,0,0,1,0,0,-e,0,s,0,0,0,0,1),this}makeRotationZ(t){const s=Math.cos(t),e=Math.sin(t);return this.set(s,-e,0,0,e,s,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,s){const e=Math.cos(s),i=Math.sin(s),h=1-e,a=t.x,c=t.y,n=t.z,r=h*a,o=h*c;return this.set(r*a+e,r*c-i*n,r*n+i*c,0,r*c+i*n,o*c+e,o*n-i*a,0,r*n-i*c,o*n+i*a,h*n*n+e,0,0,0,0,1),this}makeScale(t,s,e){return this.set(t,0,0,0,0,s,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,s,e,i,h,a){return this.set(1,e,h,0,t,1,a,0,s,i,1,0,0,0,0,1),this}compose(t,s,e){const i=this.elements,h=s._x,a=s._y,c=s._z,n=s._w,r=h+h,o=a+a,l=c+c,y=h*r,u=h*o,_=h*l,m=a*o,M=a*l,x=c*l,g=n*r,C=n*o,b=n*l,p=e.x,w=e.y,z=e.z;return i[0]=(1-(m+x))*p,i[1]=(u+b)*p,i[2]=(_-C)*p,i[3]=0,i[4]=(u-b)*w,i[5]=(1-(y+x))*w,i[6]=(M+g)*w,i[7]=0,i[8]=(_+C)*z,i[9]=(M-g)*z,i[10]=(1-(y+m))*z,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,s,e){const i=this.elements;let h=O.set(i[0],i[1],i[2]).length();const a=O.set(i[4],i[5],i[6]).length(),c=O.set(i[8],i[9],i[10]).length();this.determinant()<0&&(h=-h),t.x=i[12],t.y=i[13],t.z=i[14],S.copy(this);const r=1/h,o=1/a,l=1/c;return S.elements[0]*=r,S.elements[1]*=r,S.elements[2]*=r,S.elements[4]*=o,S.elements[5]*=o,S.elements[6]*=o,S.elements[8]*=l,S.elements[9]*=l,S.elements[10]*=l,s.setFromRotationMatrix(S),e.x=h,e.y=a,e.z=c,this}makePerspective(t,s,e,i,h,a,c=Q){const n=this.elements,r=2*h/(s-t),o=2*h/(e-i),l=(s+t)/(s-t),y=(e+i)/(e-i);let u,_;if(c===Q)u=-(a+h)/(a-h),_=-2*a*h/(a-h);else if(c===st)u=-a/(a-h),_=-a*h/(a-h);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return n[0]=r,n[4]=0,n[8]=l,n[12]=0,n[1]=0,n[5]=o,n[9]=y,n[13]=0,n[2]=0,n[6]=0,n[10]=u,n[14]=_,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(t,s,e,i,h,a,c=Q){const n=this.elements,r=1/(s-t),o=1/(e-i),l=1/(a-h),y=(s+t)*r,u=(e+i)*o;let _,m;if(c===Q)_=(a+h)*l,m=-2*l;else if(c===st)_=h*l,m=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return n[0]=2*r,n[4]=0,n[8]=0,n[12]=-y,n[1]=0,n[5]=2*o,n[9]=0,n[13]=-u,n[2]=0,n[6]=0,n[10]=m,n[14]=-_,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(t){const s=this.elements,e=t.elements;for(let i=0;i<16;i++)if(s[i]!==e[i])return!1;return!0}fromArray(t,s=0){for(let e=0;e<16;e++)this.elements[e]=t[e+s];return this}toArray(t=[],s=0){const e=this.elements;return t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3],t[s+4]=e[4],t[s+5]=e[5],t[s+6]=e[6],t[s+7]=e[7],t[s+8]=e[8],t[s+9]=e[9],t[s+10]=e[10],t[s+11]=e[11],t[s+12]=e[12],t[s+13]=e[13],t[s+14]=e[14],t[s+15]=e[15],t}}const O=new E,S=new T,wt=new E(0,0,0),gt=new E(1,1,1),P=new E,B=new E,k=new E,it=new T,ht=new rt;class K{constructor(t=0,s=0,e=0,i=K.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=s,this._z=e,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,s,e,i=this._order){return this._x=t,this._y=s,this._z=e,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,s=this._order,e=!0){const i=t.elements,h=i[0],a=i[4],c=i[8],n=i[1],r=i[5],o=i[9],l=i[2],y=i[6],u=i[10];switch(s){case"XYZ":this._y=Math.asin(f(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,u),this._z=Math.atan2(-a,h)):(this._x=Math.atan2(y,r),this._z=0);break;case"YXZ":this._x=Math.asin(-f(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(c,u),this._z=Math.atan2(n,r)):(this._y=Math.atan2(-l,h),this._z=0);break;case"ZXY":this._x=Math.asin(f(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-l,u),this._z=Math.atan2(-a,r)):(this._y=0,this._z=Math.atan2(n,h));break;case"ZYX":this._y=Math.asin(-f(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(y,u),this._z=Math.atan2(n,h)):(this._x=0,this._z=Math.atan2(-a,r));break;case"YZX":this._z=Math.asin(f(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,r),this._y=Math.atan2(-l,h)):(this._x=0,this._y=Math.atan2(c,u));break;case"XZY":this._z=Math.asin(-f(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(y,r),this._y=Math.atan2(c,h)):(this._x=Math.atan2(-o,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+s)}return this._order=s,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,s,e){return it.makeRotationFromQuaternion(t),this.setFromRotationMatrix(it,s,e)}setFromVector3(t,s=this._order){return this.set(t.x,t.y,t.z,s)}reorder(t){return ht.setFromEuler(this),this.setFromQuaternion(ht,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],s=0){return t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}K.DEFAULT_ORDER="XYZ";typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nt}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nt);var R=(d=>(d[d.LEFTCLICK=0]="LEFTCLICK",d[d.PRESS=1]="PRESS",d[d.UNPRESS=2]="UNPRESS",d))(R||{});class Ct{_canvas;mousePosition=new F(0,0);mouseDelta=new F(0,0);events=[];leftClick=!1;leftPress=!1;constructor(t){this._canvas=t}getMousePostion(){return this.mousePosition}getMouseDelta(){return this.mouseDelta}updateMousePosition(t){const s=this._canvas.getBoundingClientRect(),e=t.clientX-s.left,i=t.clientY-s.top;this.mouseDelta.x+=e-this.mousePosition.x,this.mouseDelta.y+=i-this.mousePosition.y,this.mousePosition.x=e,this.mousePosition.y=i}clerEvents(){this.mouseDelta.x=0,this.mouseDelta.y=0,this.leftClick=!1}addEvent(t){this.events.push(t)}}class ft{_ctx;_canvas;_objectReferenceController=new bt;_MouseController;time=0;getWidthAndHeightOfCanvas(){return new F(this._canvas.width,this._canvas.height)}init(t,s="grey"){try{this._canvas=t,this._ctx=t.getContext("2d"),this._MouseController=new Ct(this._canvas),this.setupEvent(),requestAnimationFrame(this.gameLoop.bind(this)),this.clearEvents()}catch(e){console.error("Error intlizing game: "+e)}}gameLoop(){try{this.time=new Date().getTime(),this.resolveEvents(),this.update(),this.drawBackground(),this.drawObjects(),requestAnimationFrame(this.gameLoop.bind(this)),this.clearEvents()}catch(t){console.error("Error processgin game loop: "+t)}}setupEvent(){this._canvas.addEventListener("mousemove",t=>{this.updateOnMouseMove(t)}),this._canvas.addEventListener("click",t=>{this.updateOnClick(t)}),this._canvas.addEventListener("mouseup",t=>{this.onMouseUp(t)}),this._canvas.addEventListener("mousedown",t=>{this.onMouseDown(t)})}onMouseDown(t){this._MouseController.addEvent(R.PRESS)}onMouseUp(t){this._MouseController.addEvent(R.UNPRESS)}updateOnMouseMove(t){this._MouseController.updateMousePosition(t)}updateOnClick(t){this._MouseController.addEvent(R.LEFTCLICK)}resolveEvents(){this.updateHoverable();let t;for(;(t=this._MouseController.events.shift())&&t!==void 0;)switch(t){case R.LEFTCLICK:this.updateClickable();break;case R.PRESS:this.updatePressableOnPress();break;case R.UNPRESS:this.updatePressableOnUnPress();break}}clearEvents(){this._MouseController.clerEvents()}updatePressableOnPress(){const t=this._objectReferenceController.PressableObjects.filter(s=>s.mouseOnState);t.length>0&&(t[0].onPress(),t[0].isPressed=!0)}updatePressableOnUnPress(){this._objectReferenceController.PressableObjects.filter(t=>t.isPressed).forEach(t=>{t.onUnpress(),t.isPressed=!1})}updateMouseOnObject(){const t=this._MouseController.getMousePostion();this._objectReferenceController.MouseReactiveObjects.forEach(s=>{s.mouseOnState=s.isMouseOn(t)})}updateHoverable(){this._objectReferenceController.HoverableObjects.forEach(t=>{const s=t.mouseOnState;s?t.isHoveredOver||t.onHover():t.isHoveredOver&&t.onUnHover(),t.isHoveredOver=s})}updateClickable(){for(const t of this._objectReferenceController.ClickableObjects)if(t.mouseOnState){t.onClick();return}}update(){this.updateMouseOnObject(),this.updateHoverable(),this.updateObjects()}updateObjects(){const t=new Date().getTime()-this.time;this._objectReferenceController.UpdatableObjects.forEach(s=>s.update(t))}updateMousePosition(){}drawableElements=[];drawBackground(){this._ctx.fillStyle="black",this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.fill()}drawObjects(){this._objectReferenceController.DrawableObjects.forEach(t=>{t.draw(this._ctx)})}addObject(t){this._objectReferenceController.addObject(t),t.game=this}}export{K as E,ft as G,$ as M,F as V,St as _};
