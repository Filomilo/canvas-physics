import{A as o,V as t}from"./GameComponent.vue_vue_type_style_index_0_lang-YRpTnnfg.js";import{C as r}from"./CollidableRectangle-DCon4ZJy.js";class m extends r{onPress(){}onUnpress(){}isMouseOn(s){const e=this.getTransformedPoints();return o.isPointWithinShape(s,e)}mouseOnState=!1;isPressed=!1;update(s){if(this.isPressed===!0){const e=this.game?._MouseController.getMouseDelta();this.move(this.isPressed?e||new t(0,0):new t(0,0)),this.rotate(this.game?this.game?._MouseController.getScrollDelta():0)}}}export{m as M};
