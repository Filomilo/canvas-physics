import{C as e,V as r}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";import{R as i}from"./Rectangle-aQQDDUwG.js";class m extends i{castObjectOntoNormal(t){return e.getMinMaxOfPointsOnAxis(this.getTransformedPoints(),t)}getNormalsForCollision(){return e.getNormalsOfConnectedPoints(this.getTransformedPoints())}constructor(t,o,s=new r(0,0),n="white"){super(t,o,s,n)}isActivator=!1;isCollsioniActive=!0;OnObjectEnter(t){}getCenterPoint(){return this.getMidAvgPoint()}dummy=0}export{m as C};
