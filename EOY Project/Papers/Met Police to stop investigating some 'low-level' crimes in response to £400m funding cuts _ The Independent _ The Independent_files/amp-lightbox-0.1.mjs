;
(self.AMP=self.AMP||[]).push({m:1,v:"2206101637000",n:"amp-lightbox",ev:"0.1",l:!0,f:function(t,i){(()=>{var i,{isArray:s}=Array,{hasOwnProperty:n,toString:h}=Object.prototype;function e(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function o(t,i,s,n,h,e,o,r,l,a,c){return t}function r(t){return(t.ownerDocument||t).defaultView}function l(t){try{t.focus()}catch(t){}}function a(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:n}=t,h=new Error(s);for(const i in t)h[i]=t[i];return h.stack=n,h}function c(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=a(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function u(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function f(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=c.apply(null,arguments);setTimeout((()=>{throw u(i),i}))}(t)}}var d,m,p="i-amphtml-element",_=t=>t.unmount();function P(t,i,s,n){if(i&&t.classList.contains(p)){const i=t;if(f(n,i),!s){const t=i.getPlaceholder();return void(t&&P(t,!0,!1,n))}}const h=t.getElementsByClassName(p);let e=null;for(let t=0;t<h.length;t++){const i=h[t];if(s)f(n,i);else{e=e||[];let t=!1;for(let s=0;s<e.length;s++)if(e[s].contains(i)){t=!0;break}t||(e.push(i),f(n,i))}}}function A(t){return function(t,i){o(1===i.length),t.innerHTML=i[0];const s=t.firstElementChild;return o(s),o(!s.nextElementSibling),t.removeChild(s),s}(d,t)}var v=["Webkit","webkit","Moz","moz","ms","O","o"],g={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function b(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return v.some((t=>i.startsWith(t+"-")))?`-${i}`:i}function E(t,i,s){if(i.startsWith("--"))return i;m||(m=e());let n=m[i];if(!n||s){if(n=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),h=function(t,i){for(let s=0;s<v.length;s++){const n=v[s]+i;if(void 0!==t[n])return n}return""}(t,s);void 0!==t[h]&&(n=h)}s||(m[i]=n)}return n}function M(t,i){const{style:s}=t;for(const t in i)s.setProperty(b(E(s,t)),String(i[t]),"important")}function y(t,i,s,n,h){const e=E(t.style,i,h);if(!e)return;const o=n?s+n:s;t.style.setProperty(b(e),o)}function T(t,i){for(const s in i)y(t,s,i[s])}function I(t){return`${t}px`}function R(t){return"display"in t&&function(t,...i){const s=c.apply(null,i);s.name=t||s.name,u(s)}("STYLE","`display` style detected. You must use toggle instead."),t}var V=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t,i=""){try{return decodeURIComponent(t)}catch(t){return i}}function x(t){const{location:i}=t||self;return function(t){const i=e();if(!t)return i;let s;for(;s=V.exec(t);){const t=w(s[1],s[1]),n=s[2]?w(s[2].replace(/\+/g," "),s[2]):"";i[t]=n}return i}(i.originalHash||i.hash)}var k="";function C(t){const i=t||self;return i.__AMP_MODE?i.__AMP_MODE:i.__AMP_MODE=function(t){return{localDev:!1,development:O(t,x(t)),esm:!0,test:!1,rtvVersion:S(t),ssrReady:!1}}(i)}function S(t){var i;return k||(k=(null===(i=t.AMP_CONFIG)||void 0===i?void 0:i.v)||"012206101637000"),k}function O(t,i){const s=i||x(t);return["1","actions","amp","amp4ads","amp4email"].includes(s.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function z(t,i){throw new Error("failed to call initLogConstructor")}function B(t){return z()}function j(t,i,s,n,h,e,o,r,l,a,c){return t}function H(t,i){return F(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Y(t,i){return F(X($(t)),i)}function $(t){return t.nodeType?(i=r(t),H(i,"ampdoc")).getAmpDoc(t):t;var i}function X(t){const i=$(t);return i.isSingleDoc()?i.win:i}function F(t,i){j(G(t,i));const s=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return s.obj||(j(s.ctor),j(s.context),s.obj=new s.ctor(s.context),j(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function G(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var L,W=t=>Y(t,"owners"),U=t=>F(t,"timer"),N=class{constructor(){this.ln=null}add(t){return this.ln||(this.ln=[]),this.ln.push(t),()=>{this.remove(t)}}remove(t){this.ln&&function(t,i){const s=t.indexOf(i);-1!=s&&t.splice(s,1)}(this.ln,t)}removeAll(){this.ln&&(this.ln.length=0)}fire(t){if(this.ln)for(const i of this.ln.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.ln)||void 0===i?void 0:i.length)&&void 0!==t?t:0}},Z="__AMP_Gestures",q=class{static get(t,i=!1,s=!1){let n=t[Z];return n||(n=new q(t,i,s),t[Z]=n),n}constructor(t,i=!1,s=!1){this.fi=t,this.XI=[],this.t_=[],this.Hi=[],this.YI=[],this.ZI=null;const n=function(t){if(void 0!==L)return L;L=!1;try{const i={get passive(){return L=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return L}(t.ownerDocument.defaultView);this.GI=i||n,this.BI=s,this.WI=!1,this.nr=new class{constructor(t,i,s){this.Xe=U(t),this.Ze=i,this.tr=s||0,this.ir=-1,this.sr=0,this.Dn=!1,this.er=()=>{this.nr()}}isPending(){return-1!=this.ir}schedule(t){let i=t||this.tr;this.Dn&&i<10&&(i=10);const s=Date.now()+i;return(!this.isPending()||s-this.sr<-10)&&(this.cancel(),this.sr=s,this.ir=this.Xe.delay(this.er,i),!0)}nr(){this.ir=-1,this.sr=0,this.Dn=!0,this.Ze(),this.Dn=!1}cancel(){this.isPending()&&(this.Xe.cancel(this.ir),this.ir=-1)}}(r(t),this.yg.bind(this)),this.JI=new N,this.QI=Object.create(null),this.sV=this.lm.bind(this),this.hV=this.fm.bind(this),this.oV=this.um.bind(this),this.rV=this.h_.bind(this),this.fi.addEventListener("touchstart",this.sV,!!n&&{passive:!0}),this.fi.addEventListener("touchend",this.hV),this.fi.addEventListener("touchmove",this.oV,!!n&&{passive:!0}),this.fi.addEventListener("touchcancel",this.rV),this.cV=!1}cleanup(){this.fi.removeEventListener("touchstart",this.sV),this.fi.removeEventListener("touchend",this.hV),this.fi.removeEventListener("touchmove",this.oV),this.fi.removeEventListener("touchcancel",this.rV),delete this.fi[Z],this.nr.cancel()}onGesture(t,i){const s=new t(this),n=s.getType();let h=this.QI[n];return h||(this.XI.push(s),h=new N,this.QI[n]=h),h.add(i)}removeGesture(t){const i=new t(this).getType(),s=this.QI[i];if(s){s.removeAll();const t=function(t,s){for(let s=0;s<t.length;s++)if(t[s].getType()==i)return s;return-1}(this.XI);return!(t<0||(this.XI.splice(t,1),this.Hi.splice(t,1),this.YI.splice(t,1),this.t_.splice(t,1),delete this.QI[i],0))}return!1}onPointerDown(t){return this.JI.add(t)}lm(t){const i=Date.now();this.WI=!1,this.JI.fire(t);for(let s=0;s<this.XI.length;s++)this.Hi[s]||(this.YI[s]&&this.YI[s]<i&&this.o_(s),this.XI[s].onTouchStart(t)&&this.u_(s));this.uV(t)}um(t){const i=Date.now();for(let s=0;s<this.XI.length;s++)this.t_[s]&&(this.YI[s]&&this.YI[s]<i?this.o_(s):this.XI[s].onTouchMove(t)||this.o_(s));this.uV(t)}fm(t){const i=Date.now();for(let s=0;s<this.XI.length;s++){if(!this.t_[s])continue;if(this.YI[s]&&this.YI[s]<i){this.o_(s);continue}this.XI[s].onTouchEnd(t);const n=!this.YI[s],h=this.YI[s]<i;this.ZI==this.XI[s]||!n&&!h||this.o_(s)}this.uV(t)}h_(t){for(let t=0;t<this.XI.length;t++)this.aV(t);this.uV(t)}nm(t,i){if(this.ZI)return void t.acceptCancel();const s=Date.now();for(let n=0;n<this.XI.length;n++)this.XI[n]==t&&(this.Hi[n]=s+i,this.YI[n]=0);this.cV=!0}lV(t,i){if(this.ZI)return void t.acceptCancel();const s=Date.now();for(let n=0;n<this.XI.length;n++)this.XI[n]==t&&(this.YI[n]=s+i)}_V(t){this.ZI==t&&(this.ZI=null,this.WI=!0)}fV(t,i,s){o(this.ZI==t);const n=this.QI[t.getType()];n&&n.fire(new class{constructor(t,i,s,n){this.type=t,this.data=i,this.time=s,this.event=n}}(t.getType(),i,Date.now(),s))}uV(t){let i=!!this.ZI||this.WI;if(this.WI=!1,!i){const t=Date.now();for(let s=0;s<this.XI.length;s++)if(this.Hi[s]||this.YI[s]&&this.YI[s]>=t){i=!0;break}}i?(t.stopPropagation(),this.GI||t.preventDefault()):this.BI&&t.stopPropagation(),this.cV&&(this.cV=!1,this.yg())}yg(){const t=Date.now();let i=-1;for(let s=0;s<this.XI.length;s++)this.Hi[s]?(-1==i||this.Hi[s]>this.Hi[i])&&(i=s):this.YI[s]&&this.YI[s]<t&&this.o_(s);if(-1==i)return;let s=0;for(let i=0;i<this.XI.length;i++)!this.Hi[i]&&this.t_[i]&&(s=Math.max(s,this.YI[i]-t));s<2?this.PV(i):this.nr.schedule(s)}PV(t){const i=this.XI[t];for(let i=0;i<this.XI.length;i++)i!=t&&this.aV(i);this.Hi[t]=0,this.YI[t]=0,this.ZI=i,i.acceptStart()}u_(t){this.t_[t]=!0,this.YI[t]=0}o_(t){this.t_[t]=!1,this.YI[t]=0,this.Hi[t]||this.XI[t].acceptCancel()}aV(t){this.Hi[t]=0,this.o_(t)}};function J(t,i,s){i<1&&(i=1);const n=t/i,h=.5+Math.min(i/33.34,.5);return n*h+s*(1-h)}function K(t){return t.classList.contains("i-amphtml-fie")||!!function(t,i){return t.closest(".i-amphtml-fie")}(t)}Math.round(-16.67/Math.log(.95)),new Set(["c","v","a","ad"]);var Q=['<i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad"><div>Ad</div><i-amphtml-ad-close-button class=amp-ad-close-button></i-amphtml-ad-close-button></i-amphtml-ad-close-header>'],tt="amp-lightbox",it={"fade-in":{openStyle:{"opacity":1},closedStyle:{"opacity":0},durationSeconds:.1},"fly-in-bottom":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, 100%)"},durationSeconds:.2},"fly-in-top":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, -100%)"},durationSeconds:.2}},st=class extends t.BaseElement{constructor(t){super(t),this.co=null,this.ei=null,this.wu=this.win.document,this.Ma=null,this.tC=null,this.dS=!1,this.iC=null,this.sC=null,this.nC=null,this.GS=null,this.hC=!1,this.eC=0,this.oC=0,this.rC=null,this.lC=(t.getAttribute("animate-in")||"fade-in").toLowerCase(),this.aC=null,this.WS=null,this.cC=null;const i=H(this.win,"platform");this.LS=i.isIos(),this.uC=function(t,i,s){let n=0,h=0,e=null;function o(){n=0;const s=500-(t.Date.now()-h);var r;s>0?n=t.setTimeout(o,s):(r=e,e=null,i.apply(null,r))}return function(...i){h=t.Date.now(),e=i,n||(n=t.setTimeout(o,500))}}(this.win,(()=>{const t=(D.user||(D.user=B()),function(t,i){return i}(D.user.win,undefined)?D.userForEmbed||(D.userForEmbed=B()):D.user).assertElement(this.ei,"E#19457 this.container_"),i=W(this.element);i.scheduleLayout(this.element,t),i.scheduleResume(this.element,t)}))}buildCallback(){var t,i;this.user().assert((t=it,i=this.lC,n.call(t,i)),"Invalid `animate-in` value %s",this.lC),this.element.classList.add("i-amphtml-overlay"),this.Ma=function(t,i){const s=X($(t));return G(s,i)?F(s,i):null}(this.element,"action"),this.fC(),this.registerDefaultAction((t=>this.VS(t.trust,t.caller)),"open"),this.registerAction("close",(t=>this.close(t.trust))),this.Ma.addToAllowlist("AMP-LIGHTBOX",["open","close"],["email"])}dC(){j(this.hC),this.mC().forEach((t=>{W(this.element).setOwner(t,this.element)}))}mC(){return(t=this.element.getElementsByClassName("i-amphtml-element"))?Array.prototype.slice.call(t):[];var t}je(){if(this.ei)return;const{element:t}=this;this.hC=t.hasAttribute("scrollable");const i=function(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return"string"==typeof t?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(n=i)||n.nodeType===Node.ELEMENT_NODE&&(n.hasAttribute("placeholder")||n.hasAttribute("fallback")||n.hasAttribute("overflow")))&&s.push(i);var n;return s}(t)}(this.element);this.ei=t.ownerDocument.createElement("div"),this.hC||function(t,i){t.classList.add("i-amphtml-fill-content")}(this.ei),t.appendChild(this.ei),i.forEach((t=>{this.ei.appendChild(t)})),this.hC&&(this.dC(),t.classList.add("i-amphtml-scrollable"),t.addEventListener("amp:dom-update",(()=>{this.dC(),this.pC(this.eC)})),t.addEventListener("scroll",this.Nf.bind(this))),this.hC||q.get(t).onGesture(class extends class extends class{constructor(t,i){this.AV=t,this.dP=i}getType(){return this.AV}signalReady(t){this.dP.nm(this,t)}signalPending(t){this.dP.lV(this,t)}signalEnd(){this.dP._V(this)}signalEmit(t,i){this.dP.fV(this,t,i)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}}{constructor(t,i,s,n){super(t,i),this.vV=s,this.RV=n,this.ZI=!1,this.MV=0,this.dV=0,this.pV=0,this.mV=0,this.gV=0,this.IV=0,this.Eh=0,this.VV=0,this.bV=0,this.wV=0,this.yV=0}onTouchStart(t){const{touches:i}=t;return!!(this.ZI&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Eh=Date.now(),this.MV=i[0].clientX,this.dV=i[0].clientY,!0)}onTouchMove(t){const{touches:i}=t;if(i&&i.length>=1){const{clientX:s,clientY:n}=i[0];if(this.pV=s,this.mV=n,this.ZI)this.xV(!1,!1,t);else{const t=Math.abs(s-this.MV),i=Math.abs(n-this.dV);if(this.vV&&this.RV)(t>=8||i>=8)&&this.signalReady(-10);else if(this.vV){if(t>=8&&t>i)this.signalReady(-10);else if(i>=8)return!1}else{if(!this.RV)return!1;if(i>=8&&i>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:i}=t;i&&0==i.length&&this.zV(t)}acceptStart(){this.ZI=!0,this.gV=this.MV,this.IV=this.dV,this.bV=this.Eh,this.MV=this.pV,this.dV=this.mV,this.xV(!0,!1,null)}acceptCancel(){this.ZI=!1}xV(t,i,s){this.VV=Date.now();const n=this.VV-this.bV;if(!i&&n>4||i&&n>16){const t=J(this.pV-this.gV,n,this.wV),s=J(this.mV-this.IV,n,this.yV);(!i||n>32||0!=t||0!=s)&&(this.wV=Math.abs(t)>1e-4?t:0,this.yV=Math.abs(s)>1e-4?s:0),this.gV=this.pV,this.IV=this.mV,this.bV=this.VV}this.signalEmit({first:t,last:i,time:this.VV,deltaX:this.pV-this.MV,deltaY:this.mV-this.dV,startX:this.MV,startY:this.dV,lastX:this.pV,lastY:this.mV,velocityX:this.wV,velocityY:this.yV},s)}zV(t){this.ZI&&(this.ZI=!1,this.xV(!1,!0,t),this.signalEnd())}}{constructor(t){super("swipe-xy",t,!0,!0)}},(()=>{})),this._C()}layoutCallback(){return i||(i=Promise.resolve(void 0))}VS(t,i){if(this.dS)return;this.je(),this.sC=this.PC.bind(this),this.wu.documentElement.addEventListener("focusin",this.sC),i&&(this.GS=i);const{promise:s,resolve:n}=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};return this.getViewport().enterLightboxMode(this.element,s).then((()=>this.AC(n,t)))}mutatedAttributesCallback(t){const i=t.open;void 0!==i&&(i?this.VS(2,document.activeElement):this.close(2))}vC(){const t=this.ei.querySelector("[autofocus]");t&&l(t)}AC(t,i){const{element:s}=this,{closedStyle:n,durationSeconds:h,openStyle:e}=this.gC(),o=Object.keys(e).map((t=>`${t} ${h}s ease-in`)).join(",");this.oC++,this.hC&&y(s,"webkitOverflowScrolling","touch"),y(s,"transition",o),T(s,R(n)),function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(s,!0),this.mutateElement((()=>{s.scrollTop=0})),this.vC(),this.mutateElement((()=>{T(s,R(e))}));const r=this.ei;this.hC&&(this.Nf(),this.pC(this.eC));const l=()=>{this.uC(),t()};s.addEventListener("transitionend",l),s.addEventListener("animationend",l),this.setAsContainer();const a=W(this.element);a.scheduleLayout(this.element,r),a.scheduleResume(this.element,r),this.ub("lightboxOpen",i),this.tC=new class{constructor(t,i){const{win:s}=t;if(this.i=s,this.Ze=i,this.bC=null,this.Jr=null,this.mS=-1,this.IS=null,"function"==typeof s.CloseWatcher)try{this.bC=new s.CloseWatcher}catch(t){(D.dev||(D.dev=z())).error("CloseWatcherImpl","CloseWatcher failed:",t)}this.bC?this.bC.onclose=()=>{i(),this.destroy()}:(this.Jr=Y(t,"history"),this.Jr.push((()=>i())).then((t=>{this.mS=t})),this.IS=this.RS.bind(this),s.document.documentElement.addEventListener("keydown",this.IS))}signalClosed(){this.bC?this.bC.signalClosed():this.Ze&&((0,this.Ze)(),this.destroy())}destroy(){this.Ze=null,this.bC?(this.bC.destroy(),this.bC=null):-1!=this.mS&&(j(this.Jr).pop(this.mS),this.mS=-1,this.Jr=null,this.i.document.documentElement.removeEventListener("keydown",this.IS))}RS(t){"Escape"==t.key&&(t.preventDefault(),this.signalClosed())}}(this.getAmpDoc(),(()=>this.close(3))),this.EC(),this.MC(),this.yC(),this.dS=!0}_C(){const{element:t}=this;null!=t.getAttribute("close-button")&&(this.aC=function(t){const i=t.ownerDocument||t;return d&&d.ownerDocument===i||(d=i.createElement("div")),A}(t)(Q),t.insertBefore(this.aC,this.ei))}EC(){if(!this.aC)return;let t;this.iC=this.TC.bind(this),this.aC.addEventListener("keydown",this.iC),this.measureMutateElement((()=>{t=this.aC.getBoundingClientRect().height}),(()=>{this.IC(),M(this.ei,{"margin-top":I(t),"min-height":`calc(100vh - ${I(t)})`})}))}IC(){this.aC.classList.add("amp-ad-close-header")}yC(){(this.cC||this.aC)&&(this.nC=this.RC.bind(this),this.WS.addEventListener("click",this.nC))}VC(){(this.cC||this.aC)&&(this.WS.removeEventListener("click",this.nC),this.nC=null,this.aC&&(this.aC.removeEventListener("keydown",this.iC),this.iC=null))}gC(){return it[this.lC]}RC(){this.close(3)}TC(t){"Enter"==t.key&&(t.preventDefault(),this.close(3))}close(t){this.dS&&(this.hC&&y(this.element,"webkitOverflowScrolling",""),this.getViewport().leaveLightboxMode(this.element).then((()=>this.wC(t))))}wC(t){const{element:i}=this,n=++this.oC,h=()=>{n==this.oC&&(this.collapse(),this.uC())};this.xC()?(function(t,i){for(let s=0;s<i.length;s++)y(t,i[s],null)}(i,["transition"]),h()):(i.addEventListener("transitionend",h),i.addEventListener("animationend",h)),T(i,R(this.gC().closedStyle)),this.tC&&(this.tC.destroy(),this.tC=null),this.wu.documentElement.removeEventListener("focusin",this.sC),this.sC=null,this.VC(),this.removeAsContainer(),function(t,i=!0){!function(t,i,n,h){const e=s(o=t)?o:[o];var o;for(let t=0;t<e.length;t++)P(e[t],i,!0,h)}(t,i,0,_)}(this.element,!1),W(this.element).schedulePause(this.element,this.ei),this.dS=!1,this.ub("lightboxClose",t),this.GS&&l(this.GS)}xC(){return"inabox"==C(this.win).runtime||K(this.element)}kC(){const{element:t}=this;return!!t.contains(document.activeElement)}PC(){this.kC()||this.close(3)}MC(){this.kC()||(this.WS=this.DO(),this.WS||(this.cC=this.CC(),this.element.insertBefore(this.cC,this.element.firstChild),this.WS=this.cC),l(this.WS))}DO(){if(this.WS)return this.WS;if(this.aC)return this.aC;const{element:t}=this,i=t.querySelectorAll("[on]");for(let s=0;s<i.length;s++){const n=i[s];if(this.Ma.hasResolvableActionForTarget(n,"tap",t,j(n.parentElement)))return n}}CC(){const{element:t}=this,i=t.getAttribute("data-close-button-aria-label")||"Close the modal",s=this.wu.createElement("button");return s.textContent=i,s.classList.add("i-amphtml-screen-reader"),s.tabIndex=-1,s}Nf(){const t=this.element.scrollTop;this.LS&&(0==t?this.element.scrollTop=1:this.element.scrollHeight==t+this.element.offsetHeight&&(this.element.scrollTop=t-1)),this.eC=t,null===this.rC&&this.SC(t)}SC(t){this.rC=U(this.win).delay((()=>{Math.abs(t-this.eC)<30?(this.rC=null,this.Ln(this.eC)):this.SC(this.eC)}),100)}Ln(t){this.pC(t),this.eC=t}pC(t){const i=[];this.OC(t,(t=>{i.push(t),W(this.element).scheduleLayout(this.element,t)}))}OC(t,i){const s=this.DC().height,n=this.mC();for(let h=0;h<n.length;h++){const e=n[h];let o=0;for(let t=e;t&&this.element.contains(t);t=t.offsetParent)o+=t.offsetTop;const r=2*s;o+e.offsetHeight>=t-r&&o<=t+r&&i(e)}}DC(){return this.co||(this.co={width:this.element.clientWidth,height:this.element.clientHeight}),this.co}fC(){const{element:t,win:i}=this;K(t)&&nt(i,i.document.body)}ub(t,i){const s=function(t,i,s,n){const h={detail:{}};return Object.assign(h,void 0),new t.CustomEvent(i,h)}(this.win,`${tt}.${t}`);this.Ma.trigger(this.element,t,s,i)}};function nt(t,i){const s={},n=(t=>H(t,"ampdoc"))(t).getAmpDoc(i);var h;(h=n,Y(h,"mutator")).measureMutateElement(i,(function(){s.alreadyTransparent="rgba(0, 0, 0, 0)"==function(t,i){return t.getComputedStyle(i)||g}(t,i)["background-color"]}),(function(){s.alreadyTransparent,M(i,{background:"transparent"})}))}"inabox"==C().runtime&&nt(window,j(document.body)),t.registerElement(tt,st,'amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}amp-lightbox i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}amp-lightbox .amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}amp-lightbox .amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}amp-lightbox .amp-ad-close-button{display:block!important;background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\') no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}amp-lightbox .amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-lightbox-0.1.mjs.map