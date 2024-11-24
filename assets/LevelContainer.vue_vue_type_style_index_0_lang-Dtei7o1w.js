import{i as G,r as E,o as u,e as b,T as N,f as p,B as U,s as q,c as f,a as g,m as c,g as _,h as D,j as v,n as H,R as Z,k as y,l as j,w,p as T,U as A,Z as k,q as x,t as X,v as S,x as P,y as Y,z as W,A as J,C as Q,D as $,E as F,F as C,G as ee,H as te,I as M,J as K,K as ne,b as L,d as ie,L as V,u as oe,M as se,N as ae}from"./index-CgN3KgQj.js";import{V as re,_ as ue}from"./GameComponent.vue_vue_type_style_index_0_lang-BCW1kSqt.js";var O={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=G()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function ce(n,e,t,o,a,i){return i.inline?E(n.$slots,"default",{key:0}):a.mounted?(u(),b(N,{key:1,to:t.appendTo},[E(n.$slots,"default")],8,["to"])):p("",!0)}O.render=ce;var me=function(e){var t=e.dt;return`
.p-contextmenu {
    background: `.concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(t("contextmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("contextmenu.list.gap"),`;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(t("contextmenu.transition.duration"),", color ").concat(t("contextmenu.transition.duration"),`;
    border-radius: `).concat(t("contextmenu.item.border.radius"),`;
    color: `).concat(t("contextmenu.item.color"),`;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("contextmenu.item.padding"),`;
    gap: `).concat(t("contextmenu.item.gap"),`;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.color"),`;
}

.p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("contextmenu.submenu.icon.size"),`;
    width: `).concat(t("contextmenu.submenu.icon.size"),`;
    height: `).concat(t("contextmenu.submenu.icon.size"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.active.color"),`;
    background: `).concat(t("contextmenu.item.active.background"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.active.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.active.color"),`;
}

.p-contextmenu-separator {
    border-top: 1px solid  `).concat(t("contextmenu.separator.border.color"),`;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}

.p-contextmenu-mobile .p-contextmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(t("tieredmenu.submenu.mobile.indent"),`;
    padding-right: 0;
}

.p-contextmenu-mobile .p-contextmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    transform: rotate(-90deg);
}
`)},le={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":t.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var t=e.instance,o=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},de=U.extend({name:"contextmenu",theme:me,classes:le}),z={name:"AngleRightIcon",extends:q};function he(n,e,t,o,a,i){return u(),f("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[g("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1)]),16)}z.render=he;var fe={name:"BaseContextMenu",extends:_,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:de,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},R={name:"ContextMenuSub",hostName:"ContextMenu",extends:_,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,o){return e&&e.item?D(e.item[t],o):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,o){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:o}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return v(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(o){return t.isItemVisible(o)&&t.getItemProp(o,"separator")}).length+1},onEnter:function(){H(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:c({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("itemLink",e,t)),icon:c({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:c({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:z},directives:{ripple:Z}},Ie=["tabindex"],be=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],pe=["onClick","onMouseenter","onMousemove"],ve=["href","target"],xe=["id"],ge=["id"];function ye(n,e,t,o,a,i){var r=y("AngleRightIcon"),m=y("ContextMenuSub",!0),d=j("ripple");return u(),b(T,c({name:"p-contextmenusub",onEnter:i.onEnter},n.ptm("menu.transition")),{default:w(function(){return[t.root||t.visible?(u(),f("ul",c({key:0,ref:"container",tabindex:t.tabindex},n.ptm("rootList")),[(u(!0),f(C,null,ee(t.items,function(s,l){return u(),f(C,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(u(),f("li",c({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(l),ref_for:!0},i.getPTOptions("item",s,l),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[g("div",c({class:n.cx("itemContent"),onClick:function(I){return i.onItemClick(I,s)},onMouseenter:function(I){return i.onItemMouseEnter(I,s)},onMousemove:function(I){return i.onItemMouseMove(I,s)},ref_for:!0},i.getPTOptions("itemContent",s,l)),[t.templates.item?(u(),b(M(t.templates.item),{key:1,item:s.item,hasSubmenu:i.getItemProp(s,"items"),label:i.getItemLabel(s),props:i.getMenuItemProps(s,l)},null,8,["item","hasSubmenu","label","props"])):te((u(),f("a",c({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",s,l)),[t.templates.itemicon?(u(),b(M(t.templates.itemicon),{key:0,item:s.item,class:K(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(u(),f("span",c({key:1,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions("itemIcon",s,l)),null,16)):p("",!0),g("span",c({id:i.getItemLabelId(s),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,l)),ne(i.getItemLabel(s)),17,xe),i.getItemProp(s,"items")?(u(),f(C,{key:2},[t.templates.submenuicon?(u(),b(M(t.templates.submenuicon),{key:0,active:i.isItemActive(s),class:K(n.cx("submenuIcon"))},null,8,["active","class"])):(u(),b(r,c({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",s,l)),null,16,["class"]))],64)):p("",!0)],16,ve)),[[d]])],16,pe),i.isItemVisible(s)&&i.isItemGroup(s)?(u(),b(m,c({key:0,id:i.getItemId(s)+"_list",role:"menu",class:n.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(h){return n.$emit("item-click",h)}),onItemMouseenter:e[1]||(e[1]=function(h){return n.$emit("item-mouseenter",h)}),onItemMousemove:e[2]||(e[2]=function(h){return n.$emit("item-mousemove",h)}),"aria-labelledby":i.getItemLabelId(s),ref_for:!0},n.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):p("",!0)],16,be)):p("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(u(),f("li",c({key:1,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("separator"),i.getItemProp(s,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16,ge)):p("",!0)],64)}),128))],16,Ie)):p("",!0)]}),_:1},16,["onEnter"])}R.render=ye;var B={name:"ContextMenu",extends:fe,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||A()},activeItemPath:function(e){v(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||A(),this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&k.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?D(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return v(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&v(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},x(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var o=e.processedItem,a=e.isFocus;if(!S(o)){var i=o.index,r=o.key,m=o.level,d=o.parentKey,s=o.items,l=v(s),h=this.activeItemPath.filter(function(I){return I.parentKey!==d&&I.parentKey!==r});l&&(h.push(o),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:m,parentKey:d},a&&x(this.list),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=h)}},onItemClick:function(e){var t=e.processedItem,o=this.isProccessedItemGroup(t),a=this.isSelected(t);if(a){var i=t.index,r=t.key,m=t.level,d=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(s){return r!==s.key&&r.startsWith(s.key)}),this.focusedItemInfo={index:i,level:m,parentKey:d},x(this.list)}else o?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(t);!o&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,o=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(r){return r.key===o.parentKey}),i=S(o.parent);i||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(r){return r.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),o=t&&P(t,'[data-pc-section="itemlink"]');o?o.click():t&&t.click();var a=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(a);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],o=this.isProccessedItemGroup(t);!o&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){Y(e,{position:"absolute"}),this.position(),this.autoZIndex&&k.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),x(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&k.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,o=this.container.offsetParent?this.container.offsetWidth:W(this.container),a=this.container.offsetParent?this.container.offsetHeight:J(this.container),i=Q(),r=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+o-m>i.width&&(e-=o),t+a-r>i.height&&(t-=a),e<m&&(e=m),t<r&&(t=r),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var o=e.container&&!e.container.contains(t.target),a=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;o&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!$()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return F(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,o=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return t.isValidItem(a)}):-1;return o>-1?o+e+1:e},findPrevItemIndex:function(e){var t=this,o=e>0?F(this.visibleItems.slice(0,e),function(a){return t.isValidItem(a)}):-1;return o>-1?o:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var o=this;this.searchValue=(this.searchValue||"")+t;var a=-1,i=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(r){return o.isItemMatched(r)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(r){return o.isItemMatched(r)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(r){return o.isItemMatched(r)}),a!==-1&&(i=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemIdx,o=P(this.list,'li[id="'.concat(t,'"]'));o&&o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",r=[];return e&&e.forEach(function(m,d){var s=(i!==""?i+"_":"")+d,l={item:m,index:d,level:o,key:s,parent:a,parentKey:i};l.items=t.createProcessedItems(m.items,o+1,l,s),r.push(l)}),r},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(o){return o.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(v(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:R,Portal:O}};function Le(n,e,t,o,a,i){var r=y("ContextMenuSub"),m=y("Portal");return u(),b(m,{appendTo:n.appendTo},{default:w(function(){return[L(T,c({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:w(function(){return[a.visible?(u(),f("div",c({key:0,ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[L(r,{ref:i.listRef,id:a.id+"_list",class:K(n.cx("rootList")),role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":a.focused?i.focusedItemIdx:void 0,menuId:a.id,focusedItemId:a.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:a.activeItemPath,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,level:0,visible:a.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):p("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}B.render=Le;const ke={class:"FullPage"},Pe=["id"],we=ie({__name:"LevelContainer",props:{game:{},player:{},level:{},cheat:{type:Function}},setup(n){const e=se(),t=ae(),o=n,a=V(),r=V([{label:"cheat",icon:"pi pi-copy",command:()=>{o.cheat()}}]),m=s=>{console.log("right click"),a.value.show(s)},d=o.player.position.clone();return o.player.addOnACtivateMethod(()=>{console.log("LVL UP"),o.game.soundController.playLvlUp(),e.solvedLevles.value<o.level&&e.setNewMax(o.level)}),t.play.value=()=>{console.log(`level ${o.level} activated simualtation`),o.game._SimulationController.isSimulationActive=!0},t.restart.value=()=>{o.player.position=d.clone(),o.player.Velocity=new re(0),o.game.hasObject(o.player)||o.game.addObject(o.player)},(s,l)=>(u(),f("main",ke,[g("div",{id:`level_${o.level}`,class:"FullPage",onContextmenu:m},[L(ue,{class:"gameView",id:`game_level_${o.level}`,game:s.game},null,8,["id","game"])],40,Pe),L(oe(B),{ref_key:"menu",ref:a,model:r.value},null,8,["model"])]))}});export{we as _};
