import{G as e,M as n,V as s,b as i,D as a}from"./GameComponent.vue_vue_type_style_index_0_lang-C4RZRmDn.js";class h extends e{_points=[];_color="white";constructor(t,o="White"){super(),this._points=t,this._color=o}transformation=new n(1,0,0,0,1,0,0,0,1);localTransformation=new n(1,0,0,0,1,0,0,0,1);move(t){this.transformation.translate(t.x,t.y)}rotate(t){this.localTransformation.rotate(t)}getTransformedPoints(){return this._points.map(t=>new s(t.x,t.y).applyMatrix3(this.localTransformation).applyMatrix3(this.transformation))}getMidAvgPoint(){const t=this.getTransformedPoints(),o=new s;return t.forEach(r=>[o.add(r)]),o.divide(new s(t.length,t.length))}draw(t){const o=this.getTransformedPoints();i.DoDrawAsPolygon?(a.drawLines(t,o,2,this._color),o.forEach(r=>{a.drawCircle(t,r.x,r.y,5,this._color)})):a.drawShape(t,o,this._color)}visible=!0}export{h as P};
