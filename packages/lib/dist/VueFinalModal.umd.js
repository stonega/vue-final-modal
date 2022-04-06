!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("@vueuse/core")):"function"==typeof define&&define.amd?define(["exports","vue","@vueuse/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue,e.VueUse)}(this,(function(e,t,n){"use strict";const o="enter",a="entering",l="leave",i="leavng",r=()=>{const e=t.ref(null),n={beforeEnter(){e.value=a},afterEnter(){e.value=o},beforeLeave(){e.value=i},afterLeave(){e.value=l}};return{state:e,listeners:n}},s=e=>e==document.activeElement;class d{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||s(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;s(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let u=null;function c({props:e,vfmContainer:n,modalTransitionState:a}){return null==u&&(u=new d),t.watch(a,(t=>{switch(t){case o:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&u.enable(n.value);break;case i:u.enabled&&u.disable()}})),{focusTrap:u}}const f=()=>{},m=()=>{const e=document.activeElement;e&&e!==document.body&&e.blur()},v=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},p={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},h=(e,t,n)=>{t&&t.addEventListener(p[e].pc,n),t&&t.addEventListener(p[e].m,n,{passive:!1})},y=(e,t,n)=>{t&&t.removeEventListener(p[e].pc,n),t&&t.removeEventListener(p[e].m,n)};const w={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},g=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),b=e=>e&&Number(e.replace(/px$/,""))||0;function S({props:e,visible:n,vfmContainer:a,vfmContent:i,vfmResize:r,modalTransitionState:s,onEvent:d=(()=>{})}){const u=t.ref(!1),c=t.ref(null),f=t.ref({});function m(t){t.stopPropagation();const n="resize",o="drag",l=t.target.getAttribute("direction");let r;if(l)r=n;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(t,i.value,e.dragSelector))return;r=o}c.value=`${r}:start`,d?.(t);const s=v(t),u=a.value.getBoundingClientRect(),m=i.value.getBoundingClientRect(),p="absolute"===window.getComputedStyle(i.value).position,S=b(f.value.top),x=b(f.value.left),k=(()=>{if(e.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:u.height-m.height,maxLeft:u.width-m.width}),relative:()=>({minTop:S+u.top-m.top,minLeft:x+u.left-m.left,maxTop:S+u.bottom-m.bottom,maxLeft:x+u.right-m.right})};return p?e.absolute():e.relative()}return{}})(),T=r===n&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",w[l]),C=t=>{t.stopPropagation(),c.value=`${r}:move`,d?.(t);const a=v(t);let i,h,y={x:a.x-s.x,y:a.y-s.y};r===n&&(y=function(t,n,o,a,l){const i=t=>{let o=n[t.axis];o=e.fitParent?g(t.min,o,t.max):o;let a=g(t.minEdge,t.getEdge(o),t.maxEdge);return o=t.getOffsetAxis(a,l),{[t.edgeName]:a,[t.axis]:o}},r=(t,n,l,i)=>{const r=a[n],s=o[t]-a[t],d=(u=n).charAt(0).toUpperCase()+u.slice(1);var u;return{axis:l,edgeName:n,min:i?s:-r,max:i?r:s,minEdge:e[`min${d}`],maxEdge:e[`max${d}`],getEdge:e=>a[n]-e*(i?1:-1),getOffsetAxis:(e,t)=>{const o=a[n]-e;return t?i?o:0:(i?1:-1)*o/2}}},s={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return t.split("").forEach((e=>{const t=r(...s[e]);d={...d,...i(t)}})),d}(l,y,u,m,p)),p?(i=m.top-u.top+y.y,h=m.left-u.left+y.x):(i=S+y.y,h=x+y.x),r===o&&e.fitParent&&(i=g(k.minTop,i,k.maxTop),h=g(k.minLeft,h,k.maxLeft));const w={position:"relative",top:i+"px",left:h+"px",margin:"unset",touchAction:"none",...p&&{position:"absolute",transform:"unset",width:m.width+"px",height:m.height+"px"},...y.width&&{width:y.width+"px"},...y.height&&{height:y.height+"px"}};f.value={...f.value,...w}},E=e=>{e.stopPropagation(),r===n&&T&&T(),setTimeout((()=>{c.value=`${r}:end`,d?.(e)})),y("move",document,C),y("up",document,E)};h("move",document,C),h("up",document,E)}function p(){h("down",i.value,m),f.value.touchAction="none"}function S(){y("down",i.value,m)}function x(){u.value=!0,t.nextTick((()=>{h("down",r.value,m)}))}function k(){y("down",r.value,m),u.value=!1}return t.watch(s,(t=>{switch(t){case o:e.drag&&p(),e.resize&&x();break;case l:e.keepChangedStyle||(f.value={})}})),t.watch((()=>e.drag),(e=>{n.value&&(e?p():S())})),t.watch((()=>e.resize),(e=>{n.value&&(e?x():k())})),t.watch((()=>e.keepChangedStyle),(e=>{e||(f.value={})})),{resizeVisible:u,state:c,dragResizeStyle:f,removeDragDown:S,removeResizeDown:k}}let x=!1;if("undefined"!=typeof window){const e={get passive(){x=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const k="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let T,C,E=[],M=!1,z=0,L=-1;const D=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},B=e=>E.some((()=>D(e,-z))),O=e=>{const t=e||window.event;return!!B(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},V=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(E.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};E=[...E,n],k?(e.ontouchstart=e=>{1===e.targetTouches.length&&(L=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{z=e.targetTouches[0].clientY-L,!B(e.target)&&(t&&0===t.scrollTop&&z>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&z<0?O(e):e.stopPropagation())})(t,e)},M||(document.addEventListener("touchmove",O,x?{passive:!1}:void 0),M=!0)):(e=>{if(void 0===C){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);C=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===T&&(T=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},_=e=>{e?(E=E.filter((t=>t.targetElement!==e)),k?(e.ontouchstart=null,e.ontouchmove=null,M&&0===E.length&&(document.removeEventListener("touchmove",O,x?{passive:!1}:void 0),M=!1)):E.length||(void 0!==C&&(document.body.style.paddingRight=C,C=void 0),void 0!==T&&(document.body.style.overflow=T,T=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function I({props:e,vfmContainer:n,modalTransitionState:o}){function a(){e.modelValue&&t.nextTick((()=>{e.lockScroll?n.value&&V(n.value,{reserveScrollBarGap:!0,allowTouchMove:e=>{for(;e&&e!==document.body;){if(null!==e.getAttribute("vfm-scroll-lock-ignore"))return!0;e=e.parentElement}}}):i()}))}function i(){e.lockScroll&&n.value&&_(n.value)}return t.watch((()=>e.lockScroll),a),t.watch(o,(e=>{e===l&&i()})),t.onBeforeUnmount((()=>{i()})),{handleLockScroll:a}}var R={inheritAttrs:!1,props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},teleportTo:{type:String,default:null},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(e,{emit:n}){const a=Symbol("vfm"),i=t.ref(null),s=t.ref(null),d=t.ref(null),u=t.ref(null),m=t.ref(null),v=t.ref(null),p=t.ref(null),h=t.ref(!1),y=t.reactive({modal:!1,overlay:!1}),{state:w,listeners:g}=r(),{state:b,listeners:x}=r(),k=t.ref(!1),{focusTrap:T}=c({props:e,vfmContainer:s,modalTransitionState:b}),{resizeVisible:C,state:E,dragResizeStyle:M,removeDragDown:z,removeResizeDown:L}=S({props:e,visible:h,vfmContainer:s,vfmContent:d,vfmResize:u,modalTransitionState:b,onEvent(e){n(E.value,e)}}),{handleLockScroll:D}=I({props:e,vfmContainer:s,modalTransitionState:b}),B=t.ref(null);let O=f,V=f;const _=t.computed((()=>"string"==typeof e.overlayTransition?{name:e.overlayTransition}:{...e.overlayTransition})),R=t.computed((()=>"string"==typeof e.transition?{name:e.transition}:{...e.transition})),A=t.computed((()=>(e.hideOverlay||w.value===l)&&b.value===l)),N=t.computed((()=>!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(p.value||0):e.zIndex)),P=t.computed((()=>({...!1!==N.value&&{zIndex:N.value}}))),$=t.computed((()=>{let t=[M.value];return Array.isArray(e.contentStyle)?t.push(...e.contentStyle):t.push(e.contentStyle),t}));function H(){return{uid:a,props:e,emit:n,vfmContainer:s,vfmContent:d,vfmResize:u,vfmOverlayTransition:m,vfmTransition:v,modalStackIndex:p,visibility:y,handleLockScroll:D,toggle:G}}function j(){if(e.modelValue){if(n("_before-open",U({type:"_before-open"})),W("before-open",!1))return void V("show");let o=e.api.openedModals.findIndex((e=>e.uid===a));-1!==o&&e.api.openedModals.splice(o,1),e.api.openedModals.push(H()),p.value=e.api.openedModals.length-1,D(),h.value=!0,t.nextTick((()=>{y.overlay=!0,y.modal=!0}))}}function F(){let n=e.api.openedModals.findIndex((e=>e.uid===a));if(-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.length>0){const n=e.api.openedModals[e.api.openedModals.length-1];n.props.focusTrap&&t.nextTick((()=>{T.enable(n.vfmContainer.value),T.firstElement.focus()})),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}e.drag&&z(),e.resize&&L(),E.value=null,y.overlay=!1,y.modal=!1}function U(e={}){return{ref:H(),...e}}function W(e,o){let a=!1;const l=U({type:e,stop(){a=!0}});return n(e,l),!!a&&(k.value=!0,t.nextTick((()=>{n("update:modelValue",o)})),!0)}function G(t){return new Promise(((o,a)=>{O=e=>{o(e),O=f},V=e=>{a(e),V=f};const l="boolean"==typeof t?t:!e.modelValue;n("update:modelValue",l)}))}return t.watch((()=>e.modelValue),(e=>{if(k.value)k.value=!1;else if(j(),!e){if(n("_before-close",U({type:"_before-close"})),W("before-close",!0))return void V("hide");F()}})),t.watch((()=>e.hideOverlay),(t=>{e.modelValue&&!t&&(y.overlay=!0)})),t.watch(A,(e=>{e&&(h.value=!1,s.value.style.display="none")}),{flush:"post"}),t.watch(b,(e=>{switch(e){case o:n("_opened"),n("opened",U({type:"opened"})),O("show");break;case l:p.value=null,n("_closed"),n("closed",U({type:"closed"})),O("hide")}})),e.api.modals.push(H()),t.onMounted((()=>{j()})),t.onBeforeUnmount((()=>{F(),i?.value?.remove();let t=e.api.modals.findIndex((e=>e.uid===a));e.api.modals.splice(t,1)})),{root:i,vfmContainer:s,vfmContent:d,vfmResize:u,vfmOverlayTransition:m,vfmTransition:v,computedOverlayTransition:_,computedTransition:R,overlayListeners:g,modalListeners:x,visible:h,visibility:y,resizeVisible:C,calculateZIndex:N,bindStyle:P,bindContentStyle:$,onMousedown:function(e){B.value=e?.target},onMouseupContainer:function(){B.value===s.value&&"resize:move"!==E.value&&(n("click-outside",U({type:"click-outside"})),e.clickToClose&&n("update:modelValue",!1))},onEsc:function(){h.value&&e.escToClose&&n("update:modelValue",!1)}}}};const A=["aria-expanded"],N={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},P=["direction"];function $(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}$("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),R.render=function(e,n,o,a,l,i){return t.openBlock(),t.createBlock(t.Teleport,{to:o.teleportTo,disabled:!o.teleportTo},["if"!==o.displayDirective||a.visible?t.withDirectives((t.openBlock(),t.createElementBlock("div",t.mergeProps({key:0},e.$attrs,{ref:"root",style:a.bindStyle,class:["vfm vfm--inset",["vfm--fixed",{"vfm--prevent-none":o.nonModal}]],onKeydown:n[3]||(n[3]=t.withKeys(((...e)=>a.onEsc&&a.onEsc(...e)),["esc"]))}),[t.createVNode(t.Transition,t.mergeProps(a.computedOverlayTransition,t.toHandlers(a.overlayListeners)),{default:t.withCtx((()=>[!o.hideOverlay&&a.visibility.overlay?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass]),style:t.normalizeStyle(o.overlayStyle)},null,6)):t.createCommentVNode("v-if",!0)])),_:1},16),t.createVNode(t.Transition,t.mergeProps(a.computedTransition,t.toHandlers(a.modalListeners)),{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{ref:"vfmContainer",class:t.normalizeClass(["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes]),style:t.normalizeStyle(o.styles),"aria-expanded":a.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=t.withModifiers(((...e)=>a.onMouseupContainer&&a.onMouseupContainer(...e)),["self"])),onMousedown:n[2]||(n[2]=t.withModifiers(((...e)=>a.onMousedown&&a.onMousedown(...e)),["self"]))},[t.createElementVNode("div",{ref:"vfmContent",class:t.normalizeClass(["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.nonModal}]]),style:t.normalizeStyle(a.bindContentStyle),onMousedown:n[0]||(n[0]=e=>a.onMousedown(null))},[t.renderSlot(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),a.resizeVisible&&a.visibility.modal?(t.openBlock(),t.createElementBlock("div",N,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.resizeDirections,(e=>(t.openBlock(),t.createElementBlock("div",{key:e,direction:e,class:t.normalizeClass([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,P)))),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,A),[[t.vShow,a.visibility.modal]])])),_:3},16)],16)),[[t.vShow,"show"!==o.displayDirective||a.visible]]):t.createCommentVNode("v-if",!0)],8,["to","disabled"])},R.__scopeId="data-v-72c09f54",R.__file="src/VueFinalModal.vue";var H={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const j={class:"modals-container"},F=["innerHTML"];H.render=function(e,n,o,a,l,i){return t.openBlock(),t.createElementBlock("div",j,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,((e,n)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},t.toHandlers(e.on),{on_beforeClose:t=>i.beforeClose(e),on_closed:t=>i.closed(n,e),on_beforeOpen:t=>i.beforeOpen(t,e,n),on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,((e,n)=>({name:n,fn:t.withCtx((()=>[t.createCommentVNode(" eslint-disable vue/no-v-html "),i.isString(e)?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:e},null,8,F)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},H.__file="src/ModalsContainer.vue";class U{constructor(){const e=e=>{const n={...e,props:{...e.props}};return Object.assign(n.props,{api:{type:Object,default:()=>this}}),t.markRaw(n)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(R),this.dynamicModals=t.shallowReactive([]),this.ModalsContainer=e(H)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let n=t.reactive({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(n)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,t)=>{n.value=!0,n.reject=t,n.opened=()=>{e("show")},this.dynamicModals.push(n)})),hide:()=>this.existModal(n)?new Promise(((e,t)=>{n.value=!1,n.rejectClose=t,n.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:n}}}const W=()=>{let e=new U;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},G=W(),{$vfm:K,VueFinalModal:Y,ModalsContainer:X,useModal:q}=G,Z="UP",J="RIGHT",Q="DOWN",ee="LEFT",te="NONE";function ne(e,{threshold:o=50,onSwipeStart:a,onSwipe:l,onSwipeEnd:i,passive:r=!0}){const s=t.reactive({x:0,y:0}),d=t.reactive({x:0,y:0}),u=t.computed((()=>s.x-d.x)),c=t.computed((()=>s.y-d.y)),{max:m,abs:p}=Math,h=t.computed((()=>m(p(u.value),p(c.value))>=o)),y=t.ref(!1),w=t.computed((()=>h.value?p(u.value)>p(c.value)?u.value>0?ee:J:c.value>0?Z:Q:te)),g=(e,t)=>{d.x=e,d.y=t};let b;const S=function(e){if(!e)return!1;let t=!1;const n={get passive(){return t=!0,!1}};return e.addEventListener("x",f,n),e.removeEventListener("x",f),t}(window?.document);let x;function k(t){b.capture&&!b.passive&&t.preventDefault();const{x:o,y:l}=v(t);((e,t)=>{s.x=e,s.y=t})(o,l),g(o,l),a?.(t),x=[n.useEventListener(e,"mousemove",T,b),n.useEventListener(e,"touchmove",T,b),n.useEventListener(e,"mouseup",C,b),n.useEventListener(e,"touchend",C,b),n.useEventListener(e,"touchcancel",C,b)]}function T(e){const{x:t,y:n}=v(e);g(t,n),!y.value&&h.value&&(y.value=!0),y.value&&l?.(e)}function C(e){y.value&&i?.(e,w.value),y.value=!1,x.forEach((e=>e()))}b=r?S?{passive:!0}:{capture:!1}:S?{passive:!1,capture:!0}:{capture:!0};const E=[n.useEventListener(e,"mousedown",k,b),n.useEventListener(e,"touchstart",k,b)];return{isPassiveEventSupported:S,isSwiping:y,direction:w,coordsStart:s,coordsEnd:d,lengthX:u,lengthY:c,stop:()=>{E.forEach((e=>e())),x.forEach((e=>e()))}}}var oe=Object.assign({inheritAttrs:!1},{props:{swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","DOWN"].includes(e)},threshold:{type:Number,default:30},lockScroll:{type:Boolean,default:!1}},setup:function(e,{emit:o}){const a=e,l=t.useAttrs(),i=t.ref(null),r=t.ref(0),s=t.ref(!0);let d=f,u=!0,c=null,v=!1;const{lengthY:p,direction:h,isSwiping:y}=ne(i,{threshold:a.threshold,onSwipeStart(e){d=n.useEventListener(document,"selectionchange",(()=>{s.value=window.getSelection().isCollapsed})),c=(new Date).getTime(),v=w(e.target)},onSwipe(){var e,t,n;if(v&&h.value===a.swipeToCloseDirection){if(!s.value)return;r.value=(e=Math.abs(p.value),t=0,n=i.value.offsetHeight,-(e>n?n:e<t?t:e)+a.threshold)}},onSwipeEnd(e,t){if(d(),!s.value)return void(s.value=!0);const n=(new Date).getTime(),l=t===a.swipeToCloseDirection,f=Math.abs(p.value)>.1*i.value.offsetHeight;u&&v&&l&&(f||n-c<=300)?o("update:modelValue",!1):r.value=0}});function w(e){const t=0===e.scrollTop;return e===i.value?t:t&&w(e.parentElement)}return t.watch((()=>l.modelValue),(e=>{e&&(r.value=0)})),t.watch((()=>s.value),(e=>{e||(r.value=0)})),t.watch((()=>r.value),((e,t)=>{"DOWN"===a.swipeToCloseDirection&&(u=e<t)})),(n,o)=>(t.openBlock(),t.createBlock(t.unref(Y),t.mergeProps(t.unref(l),{class:"vfm-bottom-sheet",transition:{"enter-active-class":"vfmSlideInDown","leave-active-class":"vfmSlideOutDown"},"lock-scroll":e.lockScroll,onMousedown:o[0]||(o[0]=t.withModifiers((()=>{}),["stop"])),onTouchstartPassive:o[1]||(o[1]=t.withModifiers((()=>{}),["stop"])),onClosed:t.unref(m)}),{default:t.withCtx((()=>[t.renderSlot(n.$slots,"prepend"),t.createElementVNode("div",{ref:(e,t)=>{t.bottomSheetEl=e,i.value=e},class:t.normalizeClass(["vfm-bottom-sheet-content",{"vfm-transition":!t.unref(y)}]),style:t.normalizeStyle({transform:`translateY(${-r.value}px)`})},[t.renderSlot(n.$slots,"default")],6),t.renderSlot(n.$slots,"append")])),_:3},16,["lock-scroll","onClosed"]))}});$(".vfm-bottom-sheet .vfm-bottom-sheet-content {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-bottom-sheet .vfm-transition {\n  transition-property: transform;\n  transition-duration: 250ms;\n}\n@-webkit-keyframes vfmSlideInDown {\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes vfmSlideInDown {\n  from {\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.vfm-bottom-sheet .vfmSlideInDown {\n  -webkit-animation-name: vfmSlideInDown;\n          animation-name: vfmSlideInDown;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes vfmSlideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.vfm-bottom-sheet .vfmSlideOutDown {\n  -webkit-animation-name: vfmSlideOutDown;\n          animation-name: vfmSlideOutDown;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}"),oe.__file="src/hoc/VBottomSheet.vue";var ae=Object.assign({inheritAttrs:!1},{props:{fullScreenClass:{type:[String,Object,Array],default:""},fullScreenStyle:{type:[Object,Array],default:()=>({})},swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","RIGHT","LEFT"].includes(e)},threshold:{type:Number,default:30},lockScroll:{type:Boolean,default:!1}},setup:function(e,{emit:o}){const a=e,l=t.useAttrs(),i=t.ref(null),r=t.ref(0),s=t.ref(!0);let d=f,u=!0,c=null,v=!1;const p=t.computed((()=>a.swipeToCloseDirection?{"enter-active-class":"RIGHT"===a.swipeToCloseDirection?"vfmSlideInRight":"vfmSlideInLeft","leave-active-class":"RIGHT"===a.swipeToCloseDirection?"vfmSlideOutRight":"vfmSlideOutLeft"}:{})),{lengthX:h,direction:y,isSwiping:w}=a.swipeToCloseDirection?ne(i,{threshold:a.threshold,onSwipeStart(e){d=n.useEventListener(document,"selectionchange",(()=>{s.value=window.getSelection().isCollapsed})),c=(new Date).getTime(),v=g(e.target)},onSwipe(){var e,t,n;if(v&&y.value===a.swipeToCloseDirection){if(!s.value)return;i.value.classList.add("vfm-overflow-hidden");const o=(e=Math.abs(h.value),t=0,n=i.value.offsetWidth,(e>n?n:e<t?t:e)-a.threshold);r.value="RIGHT"===a.swipeToCloseDirection?-o:o}},onSwipeEnd(e,t){if(i.value.classList.remove("vfm-overflow-hidden"),d(),!s.value)return void(s.value=!0);const n=(new Date).getTime(),l=t===a.swipeToCloseDirection,f=Math.abs(h.value)>.1*i.value.offsetWidth;u&&v&&l&&(f||n-c<=300)?o("update:modelValue",!1):r.value=0}}):{};function g(e){const t=e.tagName;if(["INPUT","TEXTAREA"].includes(t))return!1;const n=0===e.scrollLeft;return e===i.value?n:n&&g(e.parentElement)}return t.watch((()=>l.modelValue),(e=>{e&&(r.value=0)})),t.watch((()=>s.value),(e=>{e||(r.value=0)})),t.watch((()=>r.value),((e,t)=>{"RIGHT"===a.swipeToCloseDirection?u=e<t:"LEFT"===a.swipeToCloseDirection&&(u=e>t)})),(n,o)=>(t.openBlock(),t.createBlock(t.unref(Y),t.mergeProps(t.unref(l),{class:"vfm-full-screen","hide-overlay":"",transition:t.unref(p),"content-style":[{transform:`translateX(${-r.value}px)`}],"content-class":{"vfm-transition":!t.unref(w)},"lock-scroll":e.lockScroll,onMousedown:o[0]||(o[0]=t.withModifiers((()=>{}),["stop"])),onTouchstartPassive:o[1]||(o[1]=t.withModifiers((()=>{}),["stop"])),onClosed:t.unref(m)}),{default:t.withCtx((()=>[t.renderSlot(n.$slots,"prepend"),t.createElementVNode("div",{ref:(e,t)=>{t.modalContent=e,i.value=e},class:t.normalizeClass(["vfm-full-screen-content",e.fullScreenClass]),style:t.normalizeStyle(e.fullScreenStyle)},[t.renderSlot(n.$slots,"default")],6),t.renderSlot(n.$slots,"append")])),_:3},16,["transition","content-style","content-class","lock-scroll","onClosed"]))}});$(".vfm-full-screen .vfm-full-screen-content {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n.vfm-full-screen .vfm-overflow-hidden,\n.vfm-full-screen .vfm-overflow-hidden * {\n  overflow: hidden;\n}\n.vfm-full-screen .vfm-transition {\n  transition-property: transform;\n  transition-duration: 0.3s;\n}\n.vfm-full-screen .vfm__content {\n  width: 100%;\n  height: 100%;\n}\n@-webkit-keyframes vfmSlideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes vfmSlideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.vfm-full-screen .vfmSlideInLeft {\n  -webkit-animation-name: vfmSlideInLeft;\n          animation-name: vfmSlideInLeft;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes vfmSlideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.vfm-full-screen .vfmSlideInRight {\n  -webkit-animation-name: vfmSlideInRight;\n          animation-name: vfmSlideInRight;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes vfmSlideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.vfm-full-screen .vfmSlideOutLeft {\n  -webkit-animation-name: vfmSlideOutLeft;\n          animation-name: vfmSlideOutLeft;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes vfmSlideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes vfmSlideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.vfm-full-screen .vfmSlideOutRight {\n  -webkit-animation-name: vfmSlideOutRight;\n          animation-name: vfmSlideOutRight;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}"),ae.__file="src/hoc/VFullScreen.vue",e.$vfm=K,e.ModalInstance=U,e.ModalsContainer=X,e.VBottomSheet=oe,e.VFullScreen=ae,e.VueFinalModal=Y,e.createModalInstance=W,e.useModal=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
