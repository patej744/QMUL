;
(self.AMP=self.AMP||[]).push({m:1,v:"2206101637000",n:"amp-carousel",ev:"0.2",l:!1,f:function(t,i){(()=>{var i,{isArray:s}=Array,{hasOwnProperty:e,toString:n}=Object.prototype;function r(t,i,s,e,n,r,o,h,l,a,c){return t}var o,h,l={bubbles:!0,cancelable:!0};function a(t){return function(t,i){r(1===i.length),t.innerHTML=i[0];const s=t.firstElementChild;return r(s),r(!s.nextElementSibling),t.removeChild(s),s}(o,t)}var c=["Webkit","webkit","Moz","moz","ms","O","o"],u={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function d(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return c.some((t=>i.startsWith(t+"-")))?`-${i}`:i}function p(t,i,s){if(f(i))return i;h||(h=Object.create(null));let e=h[i];if(!e||s){if(e=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),n=function(t,i){for(let s=0;s<c.length;s++){const e=c[s]+i;if(void 0!==t[e])return e}return""}(t,s);void 0!==t[n]&&(e=n)}s||(h[i]=e)}return e}function _(t,i){const{style:s}=t;for(const t in i)s.setProperty(d(p(s,t)),String(i[t]),"important")}function m(t,i,s,e,n){const r=p(t.style,i,n);if(!r)return;const o=e?s+e:s;t.style.setProperty(d(r),o)}function A(t,i){return t.getComputedStyle(i)||u}function f(t){return t.startsWith("--")}function P(t,i,s){let e=0,n=0,r=null;function o(){e=0;const h=s-(t.Date.now()-n);var l;h>0?e=t.setTimeout(o,h):(l=r,r=null,i.apply(null,l))}return function(...i){n=t.Date.now(),r=i,e||(e=t.setTimeout(o,s))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var g=self.__AMP_LOG;function b(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function I(t,i,s,e,n,r,o,h,l,a,c){return t}function v(t,i){return V(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function M(t,i){return V(T(E(t)),i)}function x(t,i){return R(T(t),i)}function E(t){return t.nodeType?(s=t,i=(s.ownerDocument||s).defaultView,v(i,"ampdoc")).getAmpDoc(t):t;var i,s}function T(t){const i=E(t);return i.isSingleDoc()?i.win:i}function V(t,i){I(S(t,i));const s=w(t)[i];return s.obj||(I(s.ctor),I(s.context),s.obj=new s.ctor(s.context),I(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function R(t,i){const s=w(t)[i];return s?s.promise?s.promise:(V(t,i),s.promise=Promise.resolve(s.obj)):null}function w(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function S(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var y,C=t=>function(t,i,s,e){const n=x(t,i);if(n)return n;const r=E(t);return r.whenExtensionsKnown().then((()=>{const t=r.getExtensionVersion(s);return t?v(r.win,"extensions").waitForExtension(s,t):null})).then((s=>s?function(t,i){return function(t,i){const s=R(t,i);if(s)return s;const e=w(t);return e[i]=function(){const t=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}},{promise:i,reject:s,resolve:e}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:e,reject:s,context:null,ctor:null}}(),e[i].promise}(T(t),i)}(t,i):null))}(t,"amp-analytics-instrumentation","amp-analytics"),k=t=>M(t,"owners");function N(t,i,s={},e=!0){C(t).then((n=>{n&&n.triggerEventForTarget(t,i,s,e)}))}function z(t,i,s,e){let n=t,r=s,o=t=>{try{return r(t)}catch(t){var i,s;throw null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t),t}};const h=function(){if(void 0!==y)return y;y=!1;try{const t={get capture(){return y=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return y}(),l=!(null==e||!e.capture);return n.addEventListener(i,o,h?e:l),()=>{null==n||n.removeEventListener(i,o,h?e:l),r=null,n=null,o=null}}function L(t,i,s,e){const n={detail:s};return Object.assign(n,e),new t.CustomEvent(i,n)}function O(t,i,s,e){return z(t,i,s,e)}function B(t){return t.detail}function j(t,i,s,e){let n=s;const r=z(t,i,(t=>{try{n(t)}finally{n=null,r()}}),e);return r}function U(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function $(t,i,s){return r(i<=s),Math.min(Math.max(t,i),s)}var H="amp-carousel:indexchange",W="amp-carousel:scrollstart",F="amp-carousel:scrollpositionchange",D="start";function q(t,i){const{bottom:s,height:e,left:n,right:r,top:o,width:h}=i.getBoundingClientRect();return{start:0==t?n:o,end:0==t?r:s,length:0==t?h:e}}function Q(t,i){const{end:s,start:e}=q(t,i);return(e+s)/2}function X(t,i){const{start:s}=q(t,i);return s}function Z(t,i,s){return i==D?X(t,s):Q(t,s)}function G(t,i,s){m(i,0==t?"width":"height",`${s}px`)}function J(t,i,s){const{end:e,start:n}=q(t,i);return n<=s&&s<e}function K(t,i,s,e){const n=Z(t,i,e),r=Z(t,i,s),{length:o}=q(t,e);return(n-r)/o}function Y(t,i,s){!function(t,i,s){0==t?i.scrollLeft=s:i.scrollTop=s}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+s)}var tt="i-amphtml-carousel-spacer";function it(t,i){const s=function(t,i,s){const e=p(t.style,"scrollBehavior",void 0);if(e)return f(e)?t.style.getPropertyValue(e):t.style[e]}(t);m(t,"scrollBehavior","auto"),i(),m(t,"scrollBehavior",s)}function st(t){return t.reduce(((t,i)=>t+i),0)}var et="__AMP_CAROUSEL_NEAR_VIEWPORT",nt="__AMP_CAROUSEL_IN_VIEWPORT",rt=100,ot=.01,ht=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'],lt="carousel",at="slides",ct=class extends t.BaseElement{static prerenderAllowed(){return!0}tN(){this.registerAction("goToSlide",(t=>{const{args:i,trust:s}=t,e=Number(i.index||0);var n,r,o;n=!isNaN(e),r=i.index,o=this.element,(g.user||(g.user=b()),void g.user.win?g.userForEmbed||(g.userForEmbed=b()):g.user).assert(n,"Unexpected slide index for goToSlide action: %s. %s",r,o,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.IN.goToSlide(e,{actionSource:this.VN(s)})}),1),this.registerAction("toggleAutoplay",(t=>{const{args:i}=t,s=i?i.toggleOn:void 0;this.RN(s)}),1),this.Ma.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"])}constructor(t){var i,s;super(t),this.LS=(s=this.win,v(s,"platform")).isIos(),this.IN=null,this.SN=null,this.CN=[],this.kN=null,this.AV="carousel",this.iO=!1,this.Np=null,this.Dp=null,this.NN=!1,this.Ma=null,this.zN=null,this.LN=!1,this.ON=(i=t,M(i,"viewer")).isEmbedded()}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.Ma=(t=>function(t,i){const s=T(E(t));return S(s,i)?V(s,i):null}(t,"action"))(this.element);const{element:t,win:i}=this,s=function(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return"string"==typeof t?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}(this.element);t.appendChild(this.BN()),this.SN=this.element.querySelector(".i-amphtml-carousel-scroll"),this.Dp=this.element.querySelector(".amp-carousel-button-prev"),this.Np=this.element.querySelector(".amp-carousel-button-next"),this.IN=new class{constructor(t){const{element:i,initialIndex:s,runMutate:e,scrollContainer:n,win:r}=t;this.i=r,this.jN=e,this.fi=i,this.SN=n,this.UN=new class{constructor(t){const{advanceable:i,element:s,scrollContainer:e,win:n}=t;this.i=n,this.SN=e,this.$N=i,this.HN=0,this.UN=!1,this.WN=1,this.FN=1e3,this.DN=!1,this.qN=!1,this.QN=null,this.XN=Number.POSITIVE_INFINITY,this._s=s.getAmpDoc(),this.ZN(this.FN),this.SN.addEventListener("scroll",(()=>this.GN()),!0),O(this.SN,"touchstart",(()=>this.JN()),{capture:!0,passive:!0}),O(s,H,(t=>{this.KN(t)}))}stop(){this.qN=!0}pause(){this.DN=!0}resume(){this.DN=!1,this.YN()}updateAutoAdvance(t){this.UN=t,this.YN()}updateAutoAdvanceCount(t){this.WN=t,this.YN()}updateAutoAdvanceInterval(t){this.FN=Math.max(t,1e3),this.ZN(this.FN),this.YN()}updateMaxAdvances(t){this.XN=t}ZN(t){const i=P(this.i,(()=>{i==this.QN&&this.UB()}),t);this.QN=i}JN(){this.pause(),j(window,"touchend",(()=>{this.resume()}),{capture:!0,passive:!0})}FB(){return this.UN&&this._s.isVisible()&&!this.DN&&!this.qN&&this.HN<this.XN}GN(){this.YN()}KN(t){const i=B(t).actionSource;i&&4!==i&&this.stop()}UB(){this.FB()&&(this.$N.advance(this.WN,{actionSource:4,allowWrap:!0}),this.HN+=this.WN)}YN(){this.FB()&&this.QN()}}({win:r,element:i,scrollContainer:n,advanceable:this}),this.qB=new class{constructor(t){const{element:i,runMutate:s,scrollContainer:e,stoppable:n,win:r}=t;this.i=r,this.SN=e,this.jN=s,this.CN=[],this.QB=1,this.ZB=!1,this.GB=!1,this.hr=0,i.addEventListener("focus",(()=>{n.stop()}),!0),i.addEventListener(H,(t=>{this.JB(t)}))}updateMixedLength(t){this.ZB=t}updateUi(){this.GB||(this.GB=!0,this.jN((()=>{this.GB=!1,this.KB(),this.YB()})))}updateSlides(t){this.CN=t,this.updateUi()}updateVisibleCount(t){this.QB=t,this.updateUi()}Wj(){return this.ZB||this.QB>=2}KB(){this.Wj()?(this.SN.removeAttribute("aria-live"),this.SN.setAttribute("role","list"),this.CN.forEach((t=>{t.setAttribute("role","listitem")}))):(this.SN.setAttribute("aria-live","polite"),this.SN.removeAttribute("role"),this.CN.forEach((t=>{t.removeAttribute("role")})))}YB(){this.CN.forEach(((t,i)=>{const s=!this.Wj()&&i!==this.hr;t.setAttribute("aria-hidden",s)}))}JB(t){const i=B(t).index;this.hr=i,this.jN((()=>{this.YB()}))}}({win:r,element:i,scrollContainer:n,runMutate:e,stoppable:this.UN}),this.qj=P(r,(()=>this.Qj()),200),this.Xj=1,this.Zj=Number.POSITIVE_INFINITY,this.ZB=!1,this.CN=[],this.Gj=!0,this.GB=!1,this.Kj=[],this.Yj=[],this.tU=[],this.iU=[],this.sU=!1,this.eU=!1,this.nU=0,this.rU=null,this.oU=NaN,this.hU=!1,this.lU=!1,this.aU=void 0,this.cU=D,this.uU=0,this.dU=!0,this.pU=!0,this.kN=s||0,this.rp=!1,this.$B=!0,this._U=1,this.QB=1,this.SN.addEventListener("scroll",(()=>this.GN()),!0),this.SN.addEventListener("scrollend",(()=>this.mU()),!0),O(this.SN,"touchstart",(()=>this.JN()),{capture:!0,passive:!0}),O(this.SN,"wheel",(()=>this.AU()),{capture:!0,passive:!0})}next(t){this.advance(this.Xj,{actionSource:t})}prev(t){this.advance(-this.Xj,{actionSource:t})}advance(t,i={}){const{kN:s,rU:e,CN:n}=this,{actionSource:r,allowWrap:o=!1}=i,h=null!==e?e:s,l=h+t,a=n.length-1,c=0===h,u=h===a,d=l<0,p=l>a,_=t>0&&this.fU(h)&&this.fU(l);let m;m=this.isLooping()?U(l,a+1):o?_?0:d&&c||p&&!u?a:d&&!c||p&&u?0:l:_?h:$(l,0,a),this.goToSlide(m,{actionSource:r})}pauseLayout(){this.sU=!0,this.UN.pause()}resumeLayout(){this.sU=!1,this.updateUi(),this.UN.resume()}getCurrentIndex(){return this.kN}getVisibleCount(){return this.QB}isLooping(){return this.rp&&this.CN.length/this.QB>=3}goToSlide(t,i={}){const{actionSource:s,smoothScroll:e=!0}=i;t<0||t>this.CN.length-1||isNaN(t)||t!==this.kN&&(this.hU||this.PU()||(this.eU=!1,this.rU=t,this.aU=s,this.gU(this.CN[t],{smoothScroll:e})))}updateAdvanceCount(t){this.Xj=t}updateAlignment(t){this.cU="start"===t?D:"center",this.updateUi()}updateAutoAdvance(t){this.UN.updateAutoAdvance(t)}updateAutoAdvanceCount(t){this.UN.updateAutoAdvanceCount(t)}updateAutoAdvanceInterval(t){this.UN.updateAutoAdvanceInterval(t)}updateAutoAdvanceLoops(t){this.Zj=t,this.updateUi()}updateForwards(t){this.dU=t,this.updateUi()}updateHideScrollbar(t){this.pU=t,this.updateUi()}updateHorizontal(t){this.uU=t?0:1,this.updateUi()}updateLoop(t){this.rp=t,this.updateUi()}updateMixedLength(t){this.ZB=t,this.qB.updateMixedLength(t),this.updateUi()}updateSlides(t){const{length:i}=t;i?(this.CN=t,this.kN=this.isLooping()?U(this.kN,i):$(this.kN,0,i-1)||0,this.qB.updateSlides(t),this.updateUi()):this.fi.tagName.toUpperCase()}updateSnap(t){this.$B=t,this.updateUi()}updateSnapBy(t){this._U=Math.max(1,t),this.updateUi()}updateUserScrollable(t){this.Gj=t,this.updateUi()}updateUi(){this.GB||this.sU||(this.GB=!0,this.jN((()=>{this.GB=!1,this.SN.setAttribute("mixed-length",this.ZB),this.SN.setAttribute("user-scrollable",this.Gj),this.SN.setAttribute("hide-scrollbar",this.pU),this.SN.setAttribute("horizontal",0===this.uU),this.SN.setAttribute("loop",this.isLooping()),this.SN.setAttribute("snap",this.$B),_(this.SN,{"--visible-count":this.QB}),this.CN.length&&(this.UN.updateMaxAdvances(this.Zj*this.CN.length-1),this.bU(),this.IU(),this.vU(),this.Qj(!0))})))}updateVisibleCount(t){this.QB=Math.max(1,t),this.qB.updateVisibleCount(t),this.updateUi()}MU(t,i){this.oU!==t&&(this.oU=t,this.fi.dispatchEvent(L(this.i,H,{"index":t,"total":this.CN.length,"actionSource":i,"slides":this.CN},{bubbles:!0})))}xU(t,i){this.kN=t,this.nU=i,this.fi.dispatchEvent(L(this.i,"amp-carousel:offsetchange",{"index":t,"total":this.CN.length,"offset":this.dU?-i:i,"slides":this.CN},{bubbles:!0}))}notifyScrollStart(){this.fi.dispatchEvent(L(this.i,W,null))}EU(){this.fi.dispatchEvent(L(this.i,F,null))}JN(){this.hU=!0,this.aU=3,this.rU=null,this.eU=!1,j(window,"touchend",(()=>{this.hU=!1,this.qj()}),{capture:!0,passive:!0})}AU(){this.aU=2,this.rU=null,this.eU=!1}GN(){this.eU?this.eU=!1:(this.lU=!0,this.TU(),this.notifyScrollStart(),this.qj())}mU(){null===this.rU&&this.Qj()}PU(){return this.lU&&(3===this.aU||2===this.aU)}VU(t,i,s){const e=i*s*(this.dU?1:-1);!function(t,i,s){const e=0==t?s:0,n=0==t?0:s;m(i,"transform",`translate(${e}px, ${n}px)`),_(i,{"--content-transform":`translate(${e}px, ${n}px)`})}(this.uU,t,e),t._revolutions=i}RU(t){this.CN.forEach((i=>{this.VU(i,0,t)}))}wU(){return this.CN.map((t=>q(this.uU,t).length))}isAtEnd(){return!this.isLooping()&&this.SU()}isAtStart(){return!this.isLooping()&&this.yU()}SU(){const t=this.SN,i=t.getBoundingClientRect().width*(this.dU?1:-1),s=this.dU?Math.ceil(i):Math.floor(i),e=t.scrollLeft+s,n=t.scrollWidth;return this.dU?e>=n:e<=-n}yU(){const t=this.SN.scrollLeft;return this.dU?t<=0:t>=0}CU(t){const i=[];for(let s=0;s<t;s++){const t=document.createElement("div");t.className=tt,i.push(t)}return i}bU(){const{uU:t,CN:i}=this,s=this.wU(),e=st(s),n=this.isLooping()?i.length:0;this.Kj.forEach((t=>{this.SN.removeChild(t)})),this.Kj=this.CU(n),this.Kj.forEach(((e,n)=>{G(t,e,s[n]),this.SN.insertBefore(e,i[0])})),this.Yj.forEach((t=>{this.SN.removeChild(t)})),this.Yj=this.CU(n),this.Yj.forEach(((i,n)=>{G(t,i,s[n]),this.VU(i,-1,e),this.SN.appendChild(i)})),this.tU.forEach((t=>{this.SN.removeChild(t)})),this.tU=this.CU(n),this.tU.forEach(((i,n)=>{G(t,i,s[n]),this.VU(i,-1,e),this.SN.appendChild(i)})),this.iU=this.Kj.concat(this.Yj,this.tU)}IU(){const t=this.CN.length,i=this.cU===D,s=1===U(this.QB,2),e=i||s?"0%":"50%";!function(t,i){const{length:s}=t;for(let e=0;e<s;e++)i(t[e],e)}(this.SN.children,((i,s)=>{const n=U(s,t),r=0===U(n,this._U);!i.classList.contains(tt)&&this.isLooping()||function(t,i){for(const s in i)m(t,s,i[s])}(i,{"scroll-snap-align":r?this.cU:"none","scroll-snap-coordinate":r?e:"none"})}))}vU(){const{tU:t,Kj:i,kN:s,CN:e}=this,n=Math.max(0,e.length-s-1),r=Math.max(0,s-1);i.forEach(((t,r)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(t-i,e)}(s,r,i)>e.length-1;t.hidden=o||r<e.length-n})),t.forEach(((i,n)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(i-t,e)}(s,n,t)>e.length-1;i.hidden=o||n>r}))}TU(){const{cU:t,iU:i,uU:s,kN:e,SN:n,CN:r}=this,o=st(this.wU()),h=!!i.length,l=h?i:r,a=function(t,i,s,e,n){const r=Z(t,i,s);if(J(t,e[n],r))return n;for(let i=1;i<=e.length/2;i++){const s=U(n+i,e.length),o=U(n-i,e.length);if(J(t,e[s],r))return s;if(J(t,e[o],r))return o}}(s,t,n,l,h?e+r.length:e);if(void 0===a)return;const c=l[a],u=a%r.length,d=K(s,t,n,c);this.xU(u,d),u!==e&&this.jN((()=>{this.kU(o)}))}Qj(t=!1){const{aU:i}=this;if(this.hU)return;if(this.aU=void 0,this.lU=!1,this.jN((()=>{this.EU()})),this.oU===this.kN&&null===this.rU&&!t)return;null!==this.rU&&(this.kN=this.rU,this.rU=null,this.nU=0);const s=st(this.wU());this.jN((()=>{this.MU(this.kN,i),this.xU(this.kN,this.nU),this.RU(s),this.vU(),this.kU(s),this.NU()}))}NU(){const{cU:t,uU:i,nU:s,kN:e,SN:n,CN:r}=this,o=r[e],h=K(i,t,n,o)-s,{length:l}=q(i,o),a=h*l;a&&(this.eU=!0,it(n,(()=>{Y(i,n,a)})))}gU(t,i){const{smoothScroll:s}=i;(s?(t,i)=>i():it)(this.SN,(()=>{!function(t,i,s,e,n=0){const r=i==D,{length:o}=q(t,e);Y(t,s,(r?X(t,e):Q(t,e))-(r?X(t,s):Q(t,s))-n*o)}(this.uU,this.cU,this.SN,t)}))}zU(t,i,s){const{kN:e,oU:n,CN:r}=this,o=r[e]._revolutions||0,h=s?1:-1;for(let l=1;l<=i;l++){const i=U(e+l*h,r.length);if(i===n&&e!==n)break;const a=r[i],c=i>e!==s?o+h:o;this.VU(a,c,t)}}kU(t){if(!this.isLooping())return;const{cU:i,CN:s,QB:e}=this,n=i===D?e-1:0,r=(s.length-1-n)/2,o=(s.length-1+n)/2;this.zU(t,Math.round(r),!1),this.zU(t,Math.round(o),!0)}fU(t){const{cU:i,CN:s,QB:e}=this,n=i===D?e:e/2;return t>=s.length-n}}({win:i,element:t,scrollContainer:this.SN,initialIndex:Number(this.element.getAttribute("slide")||"0"),runMutate:t=>this.mutateElement(t)}),this.LU(s),this.tN(),this.element.addEventListener(H,(t=>{this.JB(t)})),this.element.addEventListener(W,(()=>{this.OU()})),this.element.addEventListener(F,(()=>{this.BU()})),this.setupButtonInteraction(this.Np,(()=>this.interactionNext())),this.setupButtonInteraction(this.Dp,(()=>this.interactionPrev())),this.jU();const e=k(t);return this.zN=new class{constructor(t){const{ampElement:i,intersectionElement:s,intersectionThreshold:e=ot,nearbyMarginInPercent:n=rt,viewportIntersectionThreshold:r=e,viewportIntersectionCallback:o=(()=>{})}=t;this.UU=i,this.vL=k(i.element),this.$U=s,this.HU=e,this.WU=n,this.FU=r,this.DU=o,this.qU=!1,this.QU=[],this.XU=null,this.ZU=null,this.bg=null,this.GU=!1}setQueueChanges(t){this.qU=t}JU(t,i){i?this.vL.scheduleLayout(this.UU.element,t):this.vL.scheduleUnlayout(this.UU.element,t)}KU(t,i){this.DU(t,i)}ro(){if(this.XU&&this.ZU&&this.bg)return;const{win:t}=this.UU;this.XU=new t.IntersectionObserver((t=>this.YU(t)),{root:this.$U,rootMargin:`${this.WU}%`,threshold:this.HU}),this.ZU=new t.IntersectionObserver((t=>this.tW(t)),{root:this.$U,rootMargin:`${this.WU+10}%`,threshold:this.HU}),this.bg=new t.IntersectionObserver((t=>this.iW(t)),{root:this.$U,rootMargin:"0%",threshold:this.FU})}YU(t){t.filter((t=>{const{isIntersecting:i}=t;return i})).forEach((t=>{const{target:i}=t;i[et]=0})),this.qU||this.sW()}tW(t){t.filter((t=>{const{isIntersecting:i}=t;return!i})).forEach((t=>{const{target:i}=t;i[et]=1})),this.qU||this.eW()}iW(t){t.forEach((t=>{const{isIntersecting:i,target:s}=t;s[nt]=i?0:1})),this.qU||this.nW()}flushChanges(){this.sW(),this.eW(),this.nW()}sW(){for(let t=0;t<this.QU.length;t++){const i=this.QU[t];0==i[et]&&(this.JU(i,!0),i[et]=null)}}eW(){for(let t=0;t<this.QU.length;t++){const i=this.QU[t];1==i[et]&&(this.JU(i,!1),i[et]=null)}}nW(){for(let t=0;t<this.QU.length;t++){const i=this.QU[t];0==i[nt]?(this.JU(i,!0),this.KU(i,!0)):1==i[nt]&&this.KU(i,!1),i[nt]=null}}rW(t){if("IntersectionObserver"in this.UU.win){if(this.ro(),!t)return this.XU.disconnect(),this.ZU.disconnect(),void this.bg.disconnect();for(let t=0;t<this.QU.length;t++)this.XU.observe(this.QU[t]),this.ZU.observe(this.QU[t]),this.bg.observe(this.QU[t])}}updateChildren(t){if(this.QU=t,"IntersectionObserver"in this.UU.win){for(let t=0;t<this.QU.length;t++)this.vL.setOwner(this.QU[t],this.UU.element);this.rW(!1),this.rW(this.GU)}}wasLaidOut(){this.GU=!0,this.rW(this.GU)}wasUnlaidOut(){this.GU=!1,this.rW(this.GU);for(let t=0;t<this.QU.length;t++)this.JU(this.QU[t],!1),this.KU(this.QU[t],!1)}}({ampElement:this,intersectionElement:this.SN,nearbyMarginInPercent:this.LS?200:100,viewportIntersectionCallback:(t,i)=>{i?e.scheduleResume(this.element,t):e.schedulePause(this.element,t)}}),this.zN.setQueueChanges(this.LS),this.zN.updateChildren(this.CN),this.IN.updateSlides(this.CN),this.IN.goToSlide(Number(this.element.getAttribute("slide")||"0")),this.element.hasAttribute("controls")?this.LN=!0:(t=>v(this.win,"input"))().onMouseDetected((t=>{t&&(this.LN=!0,this.oW())}),!0),this.mutateElement((()=>{}))}setupButtonInteraction(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(t=>{t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))}isRelayoutNeeded(){return!0}layoutCallback(){return this.element.closest("[i-amphtml-scale-animation]")||(this.zN.wasLaidOut(),this.IN.updateUi()),i||(i=Promise.resolve(void 0))}unlayoutCallback(){return this.zN.wasUnlaidOut(),!0}pauseCallback(){this.IN.pauseLayout()}resumeCallback(){this.IN.resumeLayout()}mutatedAttributesCallback(t){void 0!==t.slide&&this.IN.goToSlide(Number(t.slide))}goToSlide(t){this.IN.goToSlide(t,{smoothScroll:!1})}interactionNext(){this.AV!=lt?this.IN.next(0):this.hW(!0)}interactionPrev(){this.AV!=lt?this.IN.prev(0):this.hW(!1)}hW(t){const i=I(this.SN),{direction:s}=A(this.win,i),e=t?1:-1,n="rtl"==s?-1:1;i.scrollLeft+=i.offsetWidth*e*n}BN(){return function(t){const i=t.ownerDocument||t;return o&&o.ownerDocument===i||(o=i.createElement("div")),a}(this.element)(ht)}VN(t){return t>=2?0:1}LU(t){const i=this.element.getAttribute("dir")||A(this.win,this.element).direction,s=this.element.hasAttribute("loop"),e=this.element.getAttribute("autoplay"),n=this.element.getAttribute("delay"),r=this.element.getAttribute("type"),o=null!=e,h=e?Number(e):Number.POSITIVE_INFINITY,l=Math.max(Number(n)||5e3,1e3);this.IN.updateForwards("rtl"!=i),this.IN.updateLoop(s||o),this.IN.updateAutoAdvanceLoops(h),this.IN.updateAutoAdvanceInterval(l),this.mutateElement((()=>{this.Dp.setAttribute("dir",i),this.Np.setAttribute("dir",i)})),this.RN(o),this.lW(r,t),this.oW()}aW(t){return t-1>=0?t-1:this.element.hasAttribute("loop")?this.CN.length-1:null}cW(t){return t+1<this.CN.length?t+1:this.element.hasAttribute("loop")?0:null}uW(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"}dW(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"}pW(){return this.element.getAttribute("data-button-count-format")||"(%s of %s)"}_W(t){const i=String(t+1),s=String(this.CN.length);return" "+this.pW().replace("%s",i).replace("%s",s)}mW(t){const i=this.aW(t),s=null==i?0:i;return this.dW()+this._W(s)}AW(t){const i=this.cW(t),s=null==i?this.CN.length-1:i;return this.uW()+this._W(s)}oW(){const t=this.IN.getCurrentIndex(),i=this.NN&&!this.LN,s=i||this.IN.isAtStart(),e=i||this.IN.isAtEnd();this.Dp.classList.toggle("amp-disabled",s),this.Dp.setAttribute("aria-disabled",s),this.Dp.title=this.mW(t),this.Dp.tabIndex=s?-1:0,this.Np.classList.toggle("amp-disabled",e),this.Np.setAttribute("aria-disabled",e),this.Np.title=this.AW(t),this.Np.tabIndex=e?-1:0}lW(t,i){const s=t==at;this.AV=s?at:lt,this.IN.updateAlignment(s?"center":"start"),this.IN.updateHideScrollbar(s),this.IN.updateMixedLength(!s),this.IN.updateSnap(s);const e=s?"button":"presentation";this.Dp.setAttribute("role",e),this.Np.setAttribute("role",e),this.CN=i.map((t=>{if(t.classList.add("amp-carousel-slide"),s){const i=document.createElement("div");return i.classList.add("i-amphtml-carousel-slotted","i-amphtml-carousel-wrapper"),i.appendChild(t),i}return t})),this.CN.forEach((t=>{this.SN.appendChild(t),s?t.classList.add("i-amphtml-carousel-slide-item"):t.classList.add("amp-scrollable-carousel-slide")}))}fW(t,i){const s=this.kN;if(this.kN=t,null==s)return;const e={"index":t},n="slideChange",o=this.PW(i)?3:1,h={"index":t,"actionTrust":o},a=L(this.win,`slidescroll.${n}`,e);this.Ma.trigger(this.element,n,a,o),function(t,i,s,e){const n=s||{};r(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=n;const{bubbles:h,cancelable:a}=l;o.initEvent("slideChange",h,a),t.dispatchEvent(o)}(this.element,0,h),this.gW(s,t)}bW(t){return null==t?"null":this.CN[t].getAttribute("data-slide-id")||String(t)}gW(t,i){const s=i-t,e=this.CN.length,n=(this.IN.isLooping()?s>0&&s/e<.5||s<0&&s/e<-.5:s>0)?"amp-carousel-next":"amp-carousel-prev",r={"fromSlide":this.bW(t),"toSlide":this.bW(i)};N(this.element,"amp-carousel-change",r),N(this.element,n,r)}PW(t){return 2==t||3==t||0==t}jU(){this.ON&&O(this.SN,"touchmove",(t=>{t.shouldViewerCancelPropagation=!0}))}RN(t){this.iO=void 0!==t?t:!this.iO,this.IN.updateAutoAdvance(this.iO)}OU(){this.zN.setQueueChanges(this.LS)}BU(){this.zN.flushChanges(),this.zN.setQueueChanges(!1),this.oW()}JB(t){const i=B(t),s=i.index,e=i.actionSource;this.NN=this.NN||3==e,this.oW(),this.AV!=lt&&this.fW(s,e)}};t.registerElement("amp-carousel",ct,'.i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{visibility:hidden;z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-carousel .i-amphtml-carousel-scroll[horizontal=true]{padding-bottom:0!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-scroll{display:block!important;white-space:nowrap!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-content{position:static}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px;margin-inline-start:8px;margin-inline-end:0}.amp-scrollable-carousel-slide.i-amphtml-layout-responsive{width:100%}.amp-scrollable-carousel-slide:first-child{margin-left:0px;margin-inline-start:0;margin-inline-end:0}.i-amphtml-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;pointer-events:none}.amp-carousel-button[dir=rtl]{transform:scaleX(-1)}.amp-carousel-button{position:relative;box-sizing:border-box;height:34px;width:34px;margin:16px;border-style:none;border-radius:2px;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;z-index:10;pointer-events:all}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-carousel-button.amp-disabled{animation:none;pointer-events:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}.amp-carousel-button-prev{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-slide-item{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-carousel-slide-item>*{width:100%;height:100%;overflow:hidden!important}.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-carousel/0.2/amp-carousel.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-carousel-0.2.mjs.map