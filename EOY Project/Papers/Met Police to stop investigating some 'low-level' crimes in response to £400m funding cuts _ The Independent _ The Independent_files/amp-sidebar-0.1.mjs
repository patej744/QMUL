;
(self.AMP=self.AMP||[]).push({m:1,v:"2206101637000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){(()=>{function i(t){return t?Array.prototype.slice.call(t):[]}var s,{isArray:e}=Array,{hasOwnProperty:n,toString:h}=Object.prototype;function r(t){return 1==(null==t?void 0:t.nodeType)}function o(t,i,s,e,n,h,r,o,a,l,c){return t}function a(t){return(t.ownerDocument||t).defaultView}function l(t,i){return t.closest(i)}function c(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;return"string"==typeof t?i=t:r(t)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}function u(t){const i=t.isConnected;if(void 0!==i)return i;let s=t;for(;s=d(s),s.host;)s=s.host;return s.nodeType===Node.DOCUMENT_NODE}function d(t){if(Node.prototype.getRootNode)return t.getRootNode();let i;for(i=t;i.parentNode&&(!(s=i)||"I-AMPHTML-SHADOW-ROOT"!=s.tagName&&(11!=s.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(s)));i=i.parentNode);var s;return i}function f(t){try{t.focus()}catch(t){}}function m(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:e}=t,n=new Error(s);for(const i in t)n[i]=t[i];return n.stack=e,n}function p(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=m(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function _(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function b(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=p.apply(null,arguments);setTimeout((()=>{throw _(i),i}))}(t)}}var A=["Webkit","webkit","Moz","moz","ms","O","o"],P={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function v(t,i,e,n,h){const r=function(t,i,e){if(i.startsWith("--"))return i;s||(s=Object.create(null));let n=s[i];if(!n||e){if(n=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(let s=0;s<A.length;s++){const e=A[s]+i;if(void 0!==t[e])return e}return""}(t,s);void 0!==t[e]&&(n=e)}e||(s[i]=n)}return n}(t.style,i,h);if(!r)return;const o=n?e+n:e;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(r),o)}function g(t,i){for(const s in i)v(t,s,i[s])}function E(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function M(t,i){return t.getComputedStyle(i)||P}var w=/vertical/,T=new WeakMap,I=new WeakMap,R=new WeakMap;function y(t){let i=T.get(t);return i||(i=new t.ResizeObserver(V),T.set(t,i)),i}function V(t){const i=new Set;for(let s=t.length-1;s>=0;s--){const e=t[s],{target:n}=e;if(i.has(n))continue;i.add(n);const h=I.get(n);if(h){R.set(n,e);for(let t=0;t<h.length;t++){const{callback:i,type:s}=h[t];k(s,i,e)}}}}function k(t,i,s){if(0==t){const{contentRect:t}=s,{height:e,width:n}=t;b(i,{width:n,height:e})}else if(1==t){const{borderBoxSize:t}=s;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=s,i=a(t),n=w.test(M(i,t).writingMode),{offsetHeight:h,offsetWidth:r}=t;let o,l;n?(l=r,o=h):(o=r,l=h),e={inlineSize:o,blockSize:l}}b(i,e)}}var x=[],S="__AMP_MODAL_SAVED_TAB_INDEX";function D(t){const i=[];for(let s=t;s;s=s.parentNode||s.host)i.push(s);return i}function X(t,i,s){null===s||null==s?t.removeAttribute(i):t.setAttribute(i,s)}var C="i-amphtml-element",$=t=>t.unmount();function O(t,i,s,e){if(i&&t.classList.contains(C)){const i=t;if(b(e,i),!s){const t=i.getPlaceholder();return void(t&&O(t,!0,!1,e))}}const n=t.getElementsByClassName(C);let h=null;for(let t=0;t<n.length;t++){const i=n[t];if(s)b(e,i);else{h=h||[];let t=!1;for(let s=0;s<h.length;s++)if(h[s].contains(i)){t=!0;break}t||(h.push(i),b(e,i))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z,F=self.__AMP_LOG;function j(t){return F.user||(F.user=B()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(F.user.win,t)?F.userForEmbed||(F.userForEmbed=B()):F.user}function B(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function L(t,i,s,e,n,h,r,o,a,l,c){return t}function W(t,i){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Y(t,i){return q(G(N(t)),i)}function H(t,i){const s=G(N(t));return U(s,i)?q(s,i):null}function N(t){return t.nodeType?(i=a(t),W(i,"ampdoc")).getAmpDoc(t):t;var i}function G(t){const i=N(t);return i.isSingleDoc()?i.win:i}function q(t,i){L(U(t,i));const s=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return s.obj||(L(s.ctor),L(s.context),s.obj=new s.ctor(s.context),L(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function U(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var Z,J=t=>Y(t,"owners"),K=t=>q(t,"timer");function Q(t,i){const s=(":not([toolbar]) [autoscroll]",i.querySelector(function(t,i){return t.replace(/^|,/g,"$&:scope ")}(":not([toolbar]) [autoscroll]")));if(!s)return;const e=M(t.win,i)["overflow-y"];var n;"scroll"==e||"auto"==e?(n=t,Y(n,"viewport")).animateScrollWithinParent(s,i,"center",0):j().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}function tt(t,i){const s=K(t);return s.promise(1).then((()=>s.promise(i)))}var it=class{constructor(){this.ln=null}add(t){return this.ln||(this.ln=[]),this.ln.push(t),()=>{this.remove(t)}}remove(t){this.ln&&function(t,i){const s=t.indexOf(i);-1!=s&&t.splice(s,1)}(this.ln,t)}removeAll(){this.ln&&(this.ln.length=0)}fire(t){if(this.ln)for(const i of this.ln.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.ln)||void 0===i?void 0:i.length)&&void 0!==t?t:0}},st="__AMP_Gestures",et=class{static get(t,i=!1,s=!1){let e=t[st];return e||(e=new et(t,i,s),t[st]=e),e}constructor(t,i=!1,s=!1){this.fi=t,this.XI=[],this.t_=[],this.Hi=[],this.YI=[],this.ZI=null;const e=function(t){if(void 0!==Z)return Z;Z=!1;try{const i={get passive(){return Z=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return Z}(t.ownerDocument.defaultView);this.GI=i||e,this.BI=s,this.WI=!1,this.nr=new class{constructor(t,i,s){this.Xe=K(t),this.Ze=i,this.tr=s||0,this.ir=-1,this.sr=0,this.Dn=!1,this.er=()=>{this.nr()}}isPending(){return-1!=this.ir}schedule(t){let i=t||this.tr;this.Dn&&i<10&&(i=10);const s=Date.now()+i;return(!this.isPending()||s-this.sr<-10)&&(this.cancel(),this.sr=s,this.ir=this.Xe.delay(this.er,i),!0)}nr(){this.ir=-1,this.sr=0,this.Dn=!0,this.Ze(),this.Dn=!1}cancel(){this.isPending()&&(this.Xe.cancel(this.ir),this.ir=-1)}}(a(t),this.yg.bind(this)),this.JI=new it,this.QI=Object.create(null),this.sV=this.lm.bind(this),this.hV=this.fm.bind(this),this.oV=this.um.bind(this),this.rV=this.h_.bind(this),this.fi.addEventListener("touchstart",this.sV,!!e&&{passive:!0}),this.fi.addEventListener("touchend",this.hV),this.fi.addEventListener("touchmove",this.oV,!!e&&{passive:!0}),this.fi.addEventListener("touchcancel",this.rV),this.cV=!1}cleanup(){this.fi.removeEventListener("touchstart",this.sV),this.fi.removeEventListener("touchend",this.hV),this.fi.removeEventListener("touchmove",this.oV),this.fi.removeEventListener("touchcancel",this.rV),delete this.fi[st],this.nr.cancel()}onGesture(t,i){const s=new t(this),e=s.getType();let n=this.QI[e];return n||(this.XI.push(s),n=new it,this.QI[e]=n),n.add(i)}removeGesture(t){const i=new t(this).getType(),s=this.QI[i];if(s){s.removeAll();const t=function(t,s){for(let s=0;s<t.length;s++)if(t[s].getType()==i)return s;return-1}(this.XI);return!(t<0||(this.XI.splice(t,1),this.Hi.splice(t,1),this.YI.splice(t,1),this.t_.splice(t,1),delete this.QI[i],0))}return!1}onPointerDown(t){return this.JI.add(t)}lm(t){const i=Date.now();this.WI=!1,this.JI.fire(t);for(let s=0;s<this.XI.length;s++)this.Hi[s]||(this.YI[s]&&this.YI[s]<i&&this.o_(s),this.XI[s].onTouchStart(t)&&this.u_(s));this.uV(t)}um(t){const i=Date.now();for(let s=0;s<this.XI.length;s++)this.t_[s]&&(this.YI[s]&&this.YI[s]<i?this.o_(s):this.XI[s].onTouchMove(t)||this.o_(s));this.uV(t)}fm(t){const i=Date.now();for(let s=0;s<this.XI.length;s++){if(!this.t_[s])continue;if(this.YI[s]&&this.YI[s]<i){this.o_(s);continue}this.XI[s].onTouchEnd(t);const e=!this.YI[s],n=this.YI[s]<i;this.ZI==this.XI[s]||!e&&!n||this.o_(s)}this.uV(t)}h_(t){for(let t=0;t<this.XI.length;t++)this.aV(t);this.uV(t)}nm(t,i){if(this.ZI)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.XI.length;e++)this.XI[e]==t&&(this.Hi[e]=s+i,this.YI[e]=0);this.cV=!0}lV(t,i){if(this.ZI)return void t.acceptCancel();const s=Date.now();for(let e=0;e<this.XI.length;e++)this.XI[e]==t&&(this.YI[e]=s+i)}_V(t){this.ZI==t&&(this.ZI=null,this.WI=!0)}fV(t,i,s){o(this.ZI==t);const e=this.QI[t.getType()];e&&e.fire(new class{constructor(t,i,s,e){this.type=t,this.data=i,this.time=s,this.event=e}}(t.getType(),i,Date.now(),s))}uV(t){let i=!!this.ZI||this.WI;if(this.WI=!1,!i){const t=Date.now();for(let s=0;s<this.XI.length;s++)if(this.Hi[s]||this.YI[s]&&this.YI[s]>=t){i=!0;break}}i?(t.stopPropagation(),this.GI||t.preventDefault()):this.BI&&t.stopPropagation(),this.cV&&(this.cV=!1,this.yg())}yg(){const t=Date.now();let i=-1;for(let s=0;s<this.XI.length;s++)this.Hi[s]?(-1==i||this.Hi[s]>this.Hi[i])&&(i=s):this.YI[s]&&this.YI[s]<t&&this.o_(s);if(-1==i)return;let s=0;for(let i=0;i<this.XI.length;i++)!this.Hi[i]&&this.t_[i]&&(s=Math.max(s,this.YI[i]-t));s<2?this.PV(i):this.nr.schedule(s)}PV(t){const i=this.XI[t];for(let i=0;i<this.XI.length;i++)i!=t&&this.aV(i);this.Hi[t]=0,this.YI[t]=0,this.ZI=i,i.acceptStart()}u_(t){this.t_[t]=!0,this.YI[t]=0}o_(t){this.t_[t]=!1,this.YI[t]=0,this.Hi[t]||this.XI[t].acceptCancel()}aV(t){this.Hi[t]=0,this.o_(t)}};function nt(t,i,s){i<1&&(i=1);const e=t/i,n=.5+Math.min(i/33.34,.5);return e*n+s*(1-n)}Math.round(-16.67/Math.log(.95));var ht="backward",rt="horizontal";function ot(t){const i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var at="amp-sidebar toolbar",lt="left",ct="right",ut=class extends t.BaseElement{constructor(t){super(t),this.cc=null,this.Ma=null,this.jS=null,this.$S=null,this.wu=this.win.document,this.zS=this.wu.documentElement,this.FS=null,this.BS=[];const i=W(this.win,"platform");this.LS=i.isIos(),this.lv=i.isSafari(),this.mS=-1,this.NS=!1,this.WS=null,this.GS=null,this.HS=0,this.US=!1,this.qS=null,this.JS=new class{constructor(t,i,s){this.i=t,this.xE=i,this.ZS=s,this.KS=ht,this.QS=rt,this.hO=null,this.aO=null}lO(){return this.QS==rt?this.hO.offsetWidth:this.hO.offsetHeight}fO(t,i){const s=this.QS==rt?t:i;return this.KS==ht?-Math.min(s,0):Math.max(s,0)}dO(t,i=""){const s=this.KS==ht?-t:t;return`translate(${this.QS==rt?`${s}${i}`:0}, ${this.QS==rt?0:`${s}${i}`})`}startSwipe(t){const{direction:i,mask:s,orientation:e,swipeElement:n}=t;this.hO=n,this.aO=s,this.KS=i,this.QS=e}swipeMove(t){this.mO(t,!1)}endSwipe(t){this.mO(t,!0)}pO(t,i){const s=.75*i;return g(this.hO,{transform:this.dO(t,"px"),transition:`${s}ms transform cubic-bezier(0.15, .55, .3, 0.95)`}),tt(this.i,s)}_O(t){const i=.8*t;return this.xE((()=>{g(this.hO,{transform:this.dO(0),transition:`${i}ms transform ease-in`}),g(this.aO,{opacity:"",transition:`${i}ms opacity ease-in`})})).then((()=>tt(this.i,i)))}bO(t){const i=.75*(this.lO()-t);return this.xE((()=>{g(this.hO,{transform:this.dO(100,"%"),transition:`${i}ms transform ease-out`}),g(this.aO,{opacity:0,transition:`${i}ms opacity ease-out`})})).then((()=>tt(this.i,i))).then((()=>this.ZS()))}vO(t="",i=""){g(this.hO,{transform:t,transition:""}),g(this.aO,{opacity:i,transition:""})}AO(t,i,s,e){const n=22.5*t+s,h=22.5*i+e,r=this.fO(n,h),o=this.fO(t,i),a=.5*this.lO();return r<a&&o<.65?this.pO(r,o).then((()=>this._O(r))):this.bO(r)}mO(t,i){const{deltaX:s,deltaY:e,velocityX:n,velocityY:h}=t;this.xE((()=>{if(i)return void this.AO(n,h,s,e).then((()=>{this.vO()}));const t=this.fO(s,e),r=t/this.lO(),o=Math.max(0,1-r);this.vO(this.dO(t,"px"),o)}))}}(this.win,(t=>this.mutateElement(t)),(()=>this.PO(!0,3))),this.ZD=!1,this.hX=!1,this.pb=this.pb.bind(this),this.gO=null}buildCallback(){const{element:t}=this;var s;t.classList.add("i-amphtml-overlay"),t.classList.add("i-amphtml-scrollable"),this.FS=t.getAttribute("side"),this.hX=t.hasAttribute("data-disable-swipe-close"),this.cc=this.getViewport(),this.Ma=(t=>H(t,"action"))(t),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(at,`${at} is recommended to be a direct child of the <body> element to preserve a logical DOM order.`),this.FS!=lt&&this.FS!=ct&&(this.FS=this.EO("rtl"==((s=this.wu).body.getAttribute("dir")||s.documentElement.getAttribute("dir")||"ltr")?ct:lt),t.setAttribute("side",this.FS)),this.SO(),t.addEventListener("amp:dom-update",(()=>{this.SO()})),this.getAmpDoc().whenReady().then((()=>{i(t.querySelectorAll("nav[toolbar]")).forEach((t=>{try{this.BS.push(new class{constructor(t,i){this.Gn=i,this.MO=t,this._s=i.getAmpDoc(),this.wO=this.MO.getAttribute("toolbar"),this.TO=null,this.IO=void 0,this.RO=!1,this.MO.classList.add("amp-sidebar-toolbar-target-hidden"),this.yO()}onLayoutChange(){this._s.win.matchMedia(this.wO).matches?this.VO():this.kO()}yO(){this.TO=this.MO.cloneNode(!0);const t=(s=this.MO.getAttribute("toolbar-target"),'"toolbar-target" is required',e=this.MO,j().assert(s,'"toolbar-target" is required',e,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),i=this._s.getElementById(t);var s,e;if(!i)throw j().createError(`Could not find the toolbar-target element with an id: ${t}`);this.IO=i,this.TO.classList.add("i-amphtml-toolbar"),E(this.IO,!1)}xO(){return this.RO}VO(){return this.xO()?z||(z=Promise.resolve(void 0)):this.Gn.mutateElement((()=>{this.IO&&(E(this.IO,!0),this.IO.contains(this.TO)||this.IO.appendChild(this.TO),this.MO.classList.add("amp-sidebar-toolbar-target-shown"),this.MO.classList.remove("amp-sidebar-toolbar-target-hidden"),this.RO=!0,Q(this._s,this.TO))}))}kO(){this.xO()&&this.Gn.mutateElement((()=>{this.IO&&(E(this.IO,!1),this.MO.classList.add("amp-sidebar-toolbar-target-hidden"),this.MO.classList.remove("amp-sidebar-toolbar-target-shown"),this.RO=!1)}))}}(t,this))}catch(t){this.user().error(at,"Failed to instantiate toolbar",t)}})),this.pb()})),this.LS&&this.OO(),t.hasAttribute("role")||t.setAttribute("role","menu"),t.tabIndex=-1,this.zS.addEventListener("keydown",(t=>{"Escape"==t.key&&this.jO(3)&&t.preventDefault()})),this.WS=this.DO(),this.WS||(this.WS=this.createScreenReaderCloseButton(),t.insertBefore(this.WS,this.element.firstChild)),t.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((t=>{const{caller:i,trust:s}=t;this.VS(s,i)}),"open"),this.registerAction("close",(t=>{this.jO(t.trust)})),this.registerAction("toggle",(t=>{const{caller:i,trust:s}=t;this.US?this.jO(s):this.VS(s,i)})),this.Ma.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),t.addEventListener("click",(i=>{const s=l(i.target,"A");if(s&&s.href){const i=(t=>H(t,"url"))(t).parse(s.href),e=this.getAmpDoc().getUrl();if(ot(s.href)!=ot(e))return;i.hash&&this.jO(3)}}),!0),this.Bz(this.element)}attachedCallback(){this.gO=this.cc.onResize(function(t,i,s){let e=0,n=0,h=null;function r(){e=0;const s=100-(t.Date.now()-n);var o;s>0?e=t.setTimeout(r,s):(o=h,h=null,i.apply(null,o))}return function(...i){n=t.Date.now(),h=i,e||(e=t.setTimeout(r,100))}}(this.win,this.pb)),this.pb()}detachedCallback(){this.gO&&(this.gO(),this.gO=null)}SO(){if(this.qS)return;const t=this.element.querySelector("amp-nested-menu");var i;t&&((i=this.win,W(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.qS=t)}DO(){const t=this.element.querySelectorAll("[on]");for(let i=0;i<t.length;i++){const s=t[i],e=this.Ma.hasResolvableActionForTarget(s,"tap",this.element,L(s.parentElement)),n=l(s,"[toolbar]");if(e&&!n)return s}return null}createScreenReaderCloseButton(){const t=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",i=this.wu.createElement("button");return i.textContent=t,i.classList.add("i-amphtml-screen-reader"),i.tabIndex=-1,i.addEventListener("click",(()=>{this.jO(3)})),i}pb(){this.getAmpDoc().whenReady().then((()=>{this.BS.forEach((t=>{t.onLayoutChange()}))}))}XO(t,i){this.jS=t;const s=()=>{this.jS===t&&this.mutateElement(t)};i?K(this.win).delay(s,i):s()}CO(t){E(this.element,!0),E(this.$O(),!0),this.cc.addToFixedLayer(this.element,!0),this.mutateElement((()=>{!function(t){o(x.every((i=>i.element!==t))),o(u(t));const s=function(t){const s=[],e=D(t);for(let t=0;t<e.length;t++){const n=e[t];n.parentNode&&i(n.parentNode.children).filter((t=>t!=n)).forEach((t=>s.push(t)))}return s}(t),e=D(t).filter(r),n=function(t){const i=[];let s=t;for(;s;){const t=d(s),e=t.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,e),s=t.host}return i}(t),h=n.filter((i=>t.contains(i)&&void 0!==i[S])),a=n.filter((i=>!t.contains(i)&&void 0===i[S])),l=s.concat(e).map((t=>({element:t,prevValue:t.getAttribute("aria-hidden")})));e.forEach((t=>t.removeAttribute("aria-hidden"))),s.forEach((t=>t.setAttribute("aria-hidden","true"))),a.forEach((t=>{t[S]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),h.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S])})),x.push({element:t,hiddenElementInfos:l,focusableExternalElements:a,focusableInternalElements:h})}(this.element)})),this.LS&&this.lv&&this.zO(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.$O().setAttribute("open",""),this.XO((()=>this.FO(t)),350),Q(this.getAmpDoc(),this.element)}FO(t){const i=c(this.element),s=J(this.element);s.scheduleLayout(this.element,i),s.scheduleResume(this.element,i),this.BO()||f(L(this.WS)),this.ub("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.$O().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()}LO(t,i){this.$O().removeAttribute("open"),this.$O().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((()=>{!function(t){const i=x.pop();o(i);const{element:s,focusableExternalElements:e,focusableInternalElements:n,hiddenElementInfos:h}=i;o(u(t)),o(s===t),h.forEach((({element:t,prevValue:i})=>X(t,"aria-hidden",i))),n.forEach((t=>t.setAttribute("tabindex","-1"))),e.forEach((t=>{o(void 0!==t[S]),X(t,"tabindex",t[S]),t[S]=void 0}))}(this.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.XO((()=>this.NO(i)),t?0:350)}NO(t){E(this.element,!1),E(this.$O(),!1),J(this.element).schedulePause(this.element,c(this.element)),this.ub("sidebarClose",t),this.removeAsContainer(),function(t,i=!0){!function(t,i,s,n){const h=e(r=t)?r:[r];var r;for(let t=0;t<h.length;t++)O(h[t],i,!0,n)}(t,i,0,$)}(this.element,!1)}VS(t,i){this.US||(this.US=!0,this.cc.enterOverlayMode(),this.XO((()=>this.CO(t))),this.YS().push((()=>{this.LS?this.PO(!0,t):this.jO(t)})).then((t=>{this.mS=t})),i&&(this.GS=i,this.HS=this.cc.getScrollTop()),function(t,i,s){const e=t.ownerDocument.defaultView;if(!e)return;let n=I.get(t);if(n||(n=[],I.set(t,n),y(e).observe(t)),!n.some((t=>t.callback===s&&0===t.type))){n.push({type:0,callback:s});const i=R.get(t);i&&setTimeout((()=>k(0,s,i)))}}(this.element,0,this.pb))}jO(t){return this.PO(!1,t)}PO(t,i){if(!this.US)return!1;this.US=!1,this.cc.leaveOverlayMode();const s=this.HS==this.cc.getScrollTop(),e=this.element.contains(this.wu.activeElement);return this.XO((()=>this.LO(t,i))),t&&(E(this.element,!1),E(this.$O(),!1)),-1!=this.mS&&(this.YS().pop(this.mS),this.mS=-1),this.GS&&e&&s&&(this.BO()||f(this.GS)),function(t,i,s){const e=I.get(t);if(e&&(function(t,i){const e=[];let n=0;for(let i=0;i<t.length;i++){const r=t[i];(h=r).callback===s&&0===h.type?e.push(r):(n<i&&(t[n]=r),n++)}var h;n<t.length&&(t.length=n)}(e),0==e.length)){I.delete(t),R.delete(t);const i=t.ownerDocument.defaultView;i&&y(i).unobserve(t)}}(this.element,0,this.pb),!0}Bz(t){this.hX||et.get(t,!0,!0).onGesture(class extends class extends class{constructor(t,i){this.AV=t,this.dP=i}getType(){return this.AV}signalReady(t){this.dP.nm(this,t)}signalPending(t){this.dP.lV(this,t)}signalEnd(){this.dP._V(this)}signalEmit(t,i){this.dP.fV(this,t,i)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}}{constructor(t,i,s,e){super(t,i),this.vV=s,this.RV=e,this.ZI=!1,this.MV=0,this.dV=0,this.pV=0,this.mV=0,this.gV=0,this.IV=0,this.Eh=0,this.VV=0,this.bV=0,this.wV=0,this.yV=0}onTouchStart(t){const{touches:i}=t;return!!(this.ZI&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Eh=Date.now(),this.MV=i[0].clientX,this.dV=i[0].clientY,!0)}onTouchMove(t){const{touches:i}=t;if(i&&i.length>=1){const{clientX:s,clientY:e}=i[0];if(this.pV=s,this.mV=e,this.ZI)this.xV(!1,!1,t);else{const t=Math.abs(s-this.MV),i=Math.abs(e-this.dV);if(this.vV&&this.RV)(t>=8||i>=8)&&this.signalReady(-10);else if(this.vV){if(t>=8&&t>i)this.signalReady(-10);else if(i>=8)return!1}else{if(!this.RV)return!1;if(i>=8&&i>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:i}=t;i&&0==i.length&&this.zV(t)}acceptStart(){this.ZI=!0,this.gV=this.MV,this.IV=this.dV,this.bV=this.Eh,this.MV=this.pV,this.dV=this.mV,this.xV(!0,!1,null)}acceptCancel(){this.ZI=!1}xV(t,i,s){this.VV=Date.now();const e=this.VV-this.bV;if(!i&&e>4||i&&e>16){const t=nt(this.pV-this.gV,e,this.wV),s=nt(this.mV-this.IV,e,this.yV);(!i||e>32||0!=t||0!=s)&&(this.wV=Math.abs(t)>1e-4?t:0,this.yV=Math.abs(s)>1e-4?s:0),this.gV=this.pV,this.IV=this.mV,this.bV=this.VV}this.signalEmit({first:t,last:i,time:this.VV,deltaX:this.pV-this.MV,deltaY:this.mV-this.dV,startX:this.MV,startY:this.dV,lastX:this.pV,lastY:this.mV,velocityX:this.wV,velocityY:this.yV},s)}zV(t){this.ZI&&(this.ZI=!1,this.xV(!1,!0,t),this.signalEnd())}}{constructor(t){super("swipe-x",t,!0,!1)}},(t=>{const{data:i,event:s}=t;this.WO(i,s)}))}WO(t,i){var s;if(!t.first)return t.last?(this.ZD&&this.JS.endSwipe(t),void(this.ZD=!1)):void(i&&i.target&&(s=i.target,"input"!==s.nodeName.toLowerCase()||"range"!==s.getAttribute("type"))&&(this.ZD=!0,this.JS.swipeMove(t)));this.JS.startSwipe({swipeElement:this.element,mask:this.$S,direction:this.FS==lt?ht:"forward",orientation:rt})}EO(t){return l(this.element,"amp-story")?t==lt?ct:lt:t}$O(){if(!this.$S){const t=this.wu.createElement("div");t.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),t.addEventListener("click",(()=>{this.jO(3)})),this.getAmpDoc().getBody().appendChild(t),t.addEventListener("touchmove",(t=>{t.preventDefault()})),this.Bz(t),this.$S=t}return this.$S}OO(){this.element.addEventListener("scroll",(t=>{this.US&&(this.element.scrollTop<1?(this.element.scrollTop=1,t.preventDefault()):this.element.scrollHeight==this.element.scrollTop+this.element.offsetHeight&&(this.element.scrollTop=this.element.scrollTop-1,t.preventDefault()))}))}zO(){if(!this.NS){const t=this.wu.createElement("div");g(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.NS=!0}}YS(){return Y(this.getAmpDoc(),"history")}ub(t,i){const s=function(t,i,s,e){const n={detail:{}};return Object.assign(n,void 0),new t.CustomEvent(i,n)}(this.win,`${at}.${t}`);this.Ma.trigger(this.element,t,s,i)}BO(){return this.LS&&(t=this.element,Y(t,"viewer")).isEmbedded();var t}};t.registerElement("amp-sidebar",ut,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.mjs.map