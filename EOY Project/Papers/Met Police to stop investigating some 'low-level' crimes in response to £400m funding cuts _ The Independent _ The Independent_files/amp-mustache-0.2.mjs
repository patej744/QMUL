;
(self.AMP=self.AMP||[]).push({m:1,v:"2206101637000",n:"amp-mustache",ev:"0.2",l:!0,f:function(t,e){(()=>{function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){e(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var{isArray:i}=Array;function o(t,e){const n=[];let r=0;for(let i=0;i<t.length;i++){const o=t[i];e(o,i,t)?n.push(o):(r<i&&(t[r]=o),r++)}return r<t.length&&(t.length=r),n}var{hasOwnProperty:a,toString:s}=Object.prototype;function u(t){const e=Object.create(null);return t&&Object.assign(e,t),e}function l(t){return 1==(null==t?void 0:t.nodeType)}function c(t){return l(t)?(t=t).tagName.toLowerCase()+(t.id?`#${t.id}`:""):t}function f(t,e,n,r,i,o,a,s,u,l,c){return t}function p(t,e){return t}function m(t,e,n,r,i,a,s,u,l,f,p){return function(t,e,n="Assertion failed",r){var i,a;if(e)return e;t&&-1==n.indexOf(t)&&(n+=t);let s=3;const u=n.split("%s");let l=u.shift();const f=[l];for(;u.length;){const t=arguments[s++],e=u.shift();l+=c(t)+e,f.push(t,e.trim())}const p=new Error(l);throw p.messageArray=o(f,(t=>""!==t)),null===(i=(a=self).__AMP_REPORT_ERROR)||void 0===i||i.call(a,p),p}("​​​",t,e,n,r,i,a,s,u,l,f,p)}var d=Object.hasOwnProperty,h=Object.setPrototypeOf,g=Object.isFrozen,v=Object.getPrototypeOf,b=Object.getOwnPropertyDescriptor,y=Object.freeze,w=Object.seal,x=Object.create,k="undefined"!=typeof Reflect&&Reflect,A=k.apply,_=k.construct;A||(A=function(t,e,n){return t.apply(e,n)}),y||(y=function(t){return t}),w||(w=function(t){return t}),_||(_=function(t,e){return new(Function.prototype.bind.apply(t,[null].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))))});var S,O=I(Array.prototype.forEach),E=I(Array.prototype.pop),j=I(Array.prototype.push),T=I(String.prototype.toLowerCase),R=I(String.prototype.match),z=I(String.prototype.replace),M=I(String.prototype.indexOf),D=I(String.prototype.trim),F=I(RegExp.prototype.test),P=(S=TypeError,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return _(S,e)});function I(t){return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return A(t,e,r)}}function L(t,e){h&&h(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var i=T(r);i!==r&&(g(e)||(e[n]=i),r=i)}t[r]=!0}return t}function U(t){var e=x(null),n=void 0;for(n in t)A(d,t,[n])&&(e[n]=t[n]);return e}function C(t,e){for(;null!==t;){var n=b(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=v(t)}return function(t){return console.warn("fallback value for",t),null}}var N=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),B=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),q=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$=y(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),V=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),G=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=y(["#text"]),W=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=y(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),K=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Z=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=w(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Q=w(/<%[\s\S]*|[\s\S]*%>/gm),X=w(/^data-[\-\w.\u00B7-\uFFFF]/),tt=w(/^aria-[\-\w]+$/),et=w(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),nt=w(/^(?:\w+script|data):/i),rt=w(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function ot(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var at=function(){return"undefined"==typeof window?null:window},st=function(t,e){if("object"!==(void 0===t?"undefined":it(t))||"function"!=typeof t.createPolicy)return null;var n=null,r="data-tt-policy-suffix";e.currentScript&&e.currentScript.hasAttribute(r)&&(n=e.currentScript.getAttribute(r));var i="dompurify"+(n?"#"+n:"");try{return t.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}},ut=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at(),n=function(e){return t(e)};if(n.version="2.3.3",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,o=e.DocumentFragment,a=e.HTMLTemplateElement,s=e.Node,u=e.Element,l=e.NodeFilter,c=e.NamedNodeMap,f=void 0===c?e.NamedNodeMap||e.MozNamedAttrMap:c,p=e.Text,m=e.Comment,d=e.DOMParser,h=e.trustedTypes,g=u.prototype,v=C(g,"cloneNode"),b=C(g,"nextSibling"),w=C(g,"childNodes"),x=C(g,"parentNode");if("function"==typeof a){var k=i.createElement("template");k.content&&k.content.ownerDocument&&(i=k.content.ownerDocument)}var A=st(h,r),_=A&&Lt?A.createHTML(""):"",S=i,I=S.implementation,ut=S.createNodeIterator,lt=S.createDocumentFragment,ct=S.getElementsByTagName,ft=r.importNode,pt={};try{pt=U(i).documentMode?i.documentMode:{}}catch(t){}var mt={};n.isSupported="function"==typeof x&&I&&void 0!==I.createHTMLDocument&&9!==pt;var dt=J,ht=Q,gt=X,vt=tt,bt=nt,yt=rt,wt=et,xt=null,kt=L({},[].concat(ot(N),ot(B),ot(q),ot(V),ot(H))),At=null,_t=L({},[].concat(ot(W),ot(Y),ot(K),ot(Z))),St=null,Ot=null,Et=!0,jt=!0,Tt=!1,Rt=!1,zt=!1,Mt=!1,Dt=!1,Ft=!1,Pt=!1,It=!0,Lt=!1,Ut=!0,Ct=!0,Nt=!1,Bt={},qt=null,$t=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Vt=null,Gt=L({},["audio","video","img","source","image","track"]),Ht=null,Wt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Yt="http://www.w3.org/1998/Math/MathML",Kt="http://www.w3.org/2000/svg",Zt="http://www.w3.org/1999/xhtml",Jt=Zt,Qt=!1,Xt=void 0,te=["application/xhtml+xml","text/html"],ee="text/html",ne=void 0,re=null,ie=i.createElement("form"),oe=function(t){re&&re===t||(t&&"object"===(void 0===t?"undefined":it(t))||(t={}),t=U(t),xt="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS):kt,At="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR):_t,Ht="ADD_URI_SAFE_ATTR"in t?L(U(Wt),t.ADD_URI_SAFE_ATTR):Wt,Vt="ADD_DATA_URI_TAGS"in t?L(U(Gt),t.ADD_DATA_URI_TAGS):Gt,qt="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS):$t,St="FORBID_TAGS"in t?L({},t.FORBID_TAGS):{},Ot="FORBID_ATTR"in t?L({},t.FORBID_ATTR):{},Bt="USE_PROFILES"in t&&t.USE_PROFILES,Et=!1!==t.ALLOW_ARIA_ATTR,jt=!1!==t.ALLOW_DATA_ATTR,Tt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Rt=t.SAFE_FOR_TEMPLATES||!1,zt=t.WHOLE_DOCUMENT||!1,Ft=t.RETURN_DOM||!1,Pt=t.RETURN_DOM_FRAGMENT||!1,It=!1!==t.RETURN_DOM_IMPORT,Lt=t.RETURN_TRUSTED_TYPE||!1,Dt=t.FORCE_BODY||!1,Ut=!1!==t.SANITIZE_DOM,Ct=!1!==t.KEEP_CONTENT,Nt=t.IN_PLACE||!1,wt=t.ALLOWED_URI_REGEXP||wt,Jt=t.NAMESPACE||Zt,Xt=Xt=-1===te.indexOf(t.PARSER_MEDIA_TYPE)?ee:t.PARSER_MEDIA_TYPE,ne="application/xhtml+xml"===Xt?function(t){return t}:T,Rt&&(jt=!1),Pt&&(Ft=!0),Bt&&(xt=L({},[].concat(ot(H))),At=[],!0===Bt.html&&(L(xt,N),L(At,W)),!0===Bt.svg&&(L(xt,B),L(At,Y),L(At,Z)),!0===Bt.svgFilters&&(L(xt,q),L(At,Y),L(At,Z)),!0===Bt.mathMl&&(L(xt,V),L(At,K),L(At,Z))),t.ADD_TAGS&&(xt===kt&&(xt=U(xt)),L(xt,t.ADD_TAGS)),t.ADD_ATTR&&(At===_t&&(At=U(At)),L(At,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&L(Ht,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(qt===$t&&(qt=U(qt)),L(qt,t.FORBID_CONTENTS)),Ct&&(xt["#text"]=!0),zt&&L(xt,["html","head","body"]),xt.table&&(L(xt,["tbody"]),delete St.tbody),y&&y(t),re=t)},ae=L({},["mi","mo","mn","ms","mtext"]),se=L({},["foreignobject","desc","title","annotation-xml"]),ue=L({},B);L(ue,q),L(ue,$);var le=L({},V);L(le,G);var ce=function(t){var e=x(t);e&&e.tagName||(e={namespaceURI:Zt,tagName:"template"});var n=T(t.tagName),r=T(e.tagName);if(t.namespaceURI===Kt)return e.namespaceURI===Zt?"svg"===n:e.namespaceURI===Yt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]);if(t.namespaceURI===Yt)return e.namespaceURI===Zt?"math"===n:e.namespaceURI===Kt?"math"===n&&se[r]:Boolean(le[n]);if(t.namespaceURI===Zt){if(e.namespaceURI===Kt&&!se[r])return!1;if(e.namespaceURI===Yt&&!ae[r])return!1;var i=L({},["title","style","font","a","script"]);return!le[n]&&(i[n]||!ue[n])}return!1},fe=function(t){j(n.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=_}catch(e){t.remove()}}},pe=function(t,e){try{j(n.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){j(n.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!At[t])if(Ft||Pt)try{fe(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},me=function(t){var e=void 0,n=void 0;if(Dt)t="<remove></remove>"+t;else{var r=R(t,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Xt&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=A?A.createHTML(t):t;if(Jt===Zt)try{e=(new d).parseFromString(o,Xt)}catch(t){}if(!e||!e.documentElement){e=I.createDocument(Jt,"template",null);try{e.documentElement.innerHTML=Qt?"":o}catch(t){}}var a=e.body||e.documentElement;return t&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),Jt===Zt?ct.call(e,zt?"html":"body")[0]:zt?e.documentElement:a},de=function(t){return ut.call(t.ownerDocument||t,t,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,null,!1)},he=function(t){return!(t instanceof p||t instanceof m||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof f&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI&&"function"==typeof t.insertBefore)},ge=function(t){return"object"===(void 0===s?"undefined":it(s))?t instanceof s:t&&"object"===(void 0===t?"undefined":it(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},ve=function(t,e,r){mt[t]&&O(mt[t],(function(t){t.call(n,e,r,re)}))},be=function(t){var e=void 0;if(ve("beforeSanitizeElements",t,null),he(t))return fe(t),!0;if(R(t.nodeName,/[\u0080-\uFFFF]/))return fe(t),!0;var r=ne(t.nodeName);if(ve("uponSanitizeElement",t,{tagName:r,allowedTags:xt}),!ge(t.firstElementChild)&&(!ge(t.content)||!ge(t.content.firstElementChild))&&F(/<[/\w]/g,t.innerHTML)&&F(/<[/\w]/g,t.textContent))return fe(t),!0;if("select"===r&&F(/<template/i,t.innerHTML))return fe(t),!0;if(!xt[r]||St[r]){if(Ct&&!qt[r]){var i=x(t)||t.parentNode,o=w(t)||t.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a)i.insertBefore(v(o[a],!0),b(t))}return fe(t),!0}return t instanceof u&&!ce(t)?(fe(t),!0):"noscript"!==r&&"noembed"!==r||!F(/<\/no(script|embed)/i,t.innerHTML)?(Rt&&3===t.nodeType&&(e=t.textContent,e=z(e,dt," "),e=z(e,ht," "),t.textContent!==e&&(j(n.removed,{element:t.cloneNode()}),t.textContent=e)),ve("afterSanitizeElements",t,null),!1):(fe(t),!0)},ye=function(t,e,n){if(Ut&&("id"===e||"name"===e)&&(n in i||n in ie))return!1;if(jt&&!Ot[e]&&F(gt,e));else if(Et&&F(vt,e));else{if(!At[e]||Ot[e])return!1;if(Ht[e]);else if(F(wt,z(n,yt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==M(n,"data:")||!Vt[t])if(Tt&&!F(bt,z(n,yt,"")));else if(n)return!1}return!0},we=function(t){var e=void 0,r=void 0,i=void 0,o=void 0;ve("beforeSanitizeAttributes",t,null);var a=t.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:At};for(o=a.length;o--;){var u=e=a[o],l=u.name,c=u.namespaceURI;if(r=D(e.value),i=ne(l),s.attrName=i,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,ve("uponSanitizeAttribute",t,s),r=s.attrValue,!s.forceKeepAttr&&(pe(l,t),s.keepAttr))if(F(/\/>/i,r))pe(l,t);else{Rt&&(r=z(r,dt," "),r=z(r,ht," "));var f=ne(t.nodeName);if(ye(f,i,r))try{c?t.setAttributeNS(c,l,r):t.setAttribute(l,r),E(n.removed)}catch(t){}}}ve("afterSanitizeAttributes",t,null)}},xe=function t(e){var n=void 0,r=de(e);for(ve("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)ve("uponSanitizeShadowNode",n,null),be(n)||(n.content instanceof o&&t(n.content),we(n));ve("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(t,i){var a=void 0,u=void 0,l=void 0,c=void 0,f=void 0;if((Qt=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!ge(t)){if("function"!=typeof t.toString)throw P("toString is not a function");if("string"!=typeof(t=t.toString()))throw P("dirty is not a string, aborting")}if(!n.isSupported){if("object"===it(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof t)return e.toStaticHTML(t);if(ge(t))return e.toStaticHTML(t.outerHTML)}return t}if(Mt||oe(i),n.removed=[],"string"==typeof t&&(Nt=!1),Nt);else if(t instanceof s)1===(u=(a=me("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===u.nodeName||"HTML"===u.nodeName?a=u:a.appendChild(u);else{if(!Ft&&!Rt&&!zt&&-1===t.indexOf("<"))return A&&Lt?A.createHTML(t):t;if(!(a=me(t)))return Ft?null:_}a&&Dt&&fe(a.firstChild);for(var p=de(Nt?t:a);l=p.nextNode();)3===l.nodeType&&l===c||be(l)||(l.content instanceof o&&xe(l.content),we(l),c=l);if(c=null,Nt)return t;if(Ft){if(Pt)for(f=lt.call(a.ownerDocument);a.firstChild;)f.appendChild(a.firstChild);else f=a;return It&&(f=ft.call(r,f,!0)),f}var m=zt?a.outerHTML:a.innerHTML;return Rt&&(m=z(m,dt," "),m=z(m,ht," ")),A&&Lt?A.createHTML(m):m},n.setConfig=function(t){oe(t),Mt=!0},n.clearConfig=function(){re=null,Mt=!1},n.isValidAttribute=function(t,e,n){re||oe({});var r=ne(t),i=ne(e);return ye(r,i,n)},n.addHook=function(t,e){"function"==typeof e&&(mt[t]=mt[t]||[],j(mt[t],e))},n.removeHook=function(t){mt[t]&&E(mt[t])},n.removeHooks=function(t){mt[t]&&(mt[t]=[])},n.removeAllHooks=function(){mt={}},n}(),lt=ut;function ct(t){return function(t,e){const n=e.documentElement;return["⚡4email","amp4email"].some((t=>n.hasAttribute(t)))}(0,t)}var ft=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function pt(t,e=""){try{return decodeURIComponent(t)}catch(t){return e}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var mt=self.__AMP_LOG;function dt(t){return mt.user||(mt.user=ht()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(mt.user.win,t)?mt.userForEmbed||(mt.userForEmbed=ht()):mt.user}function ht(t){return function(t,e){throw new Error("failed to call initLogConstructor")}()}function gt(t,e,n,r,i,o,a,s,u,l,c){return t}function vt(t,e,n,r,i,o,a,s,u,l,c){return dt().assert(t,e,n,r,i,o,a,s,u,l,c)}var bt=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function yt(t,e){return m(t.width!=e.width,"Duplicate width: %s",t.width),t.width-e.width}function wt(t,e){return m(t.dpr!=e.dpr,"Duplicate dpr: %s",t.dpr),t.dpr-e.dpr}function xt(t,e){return _t(t=kt(t),e)}function kt(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function At(t){return t.nodeType?(n=t,e=(n.ownerDocument||n).defaultView,xt(e,"ampdoc")).getAmpDoc(t):t;var e,n}function _t(t,e){gt(function(t,e){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}(t,e));const n=St(t)[e];return n.obj||(gt(n.ctor),gt(n.context),n.obj=new n.ctor(n.context),gt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function St(t){let e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}var Ot,Et=(()=>self.AMP.config.urls)(),jt=new Set(["c","v","a","ad"]),Tt=t=>"string"==typeof t?Rt(t):t;function Rt(t,e){return Ot||(Ot=self.document.createElement("a")),function(t,e,n){return t.href="",new URL(e,t.href)}(Ot,t)}function zt(t){return Et.cdnProxyRegex.test(Tt(t).origin)}function Mt(t,e){return e=Tt(e),new URL(t,e.href).toString()}var Dt=(()=>self.AMP.config.urls)();function Ft(t,e,n){return Pt(e)?function(t,e,n,r){var i;vt(!("__amp_source_origin"in function(t){const e=u();if(!t)return e;let n;for(;n=ft.exec(t);){const t=pt(n[1],n[1]),r=n[2]?pt(n[2].replace(/\+/g," "),n[2]):"";e[t]=r}return e}(Rt(i=n).search)),"Source origin is not allowed in %s",i);const o=zt(r),a=Rt(function(t){if(!zt(t=Tt(t)))return t.href;const e=t.pathname.split("/"),n=e[1];vt(jt.has(n),"Unknown path prefix in url %s",t.href);const r=e[2],i="s"==r?"https://"+decodeURIComponent(e[3]):"http://"+decodeURIComponent(r);return vt(i.indexOf(".")>0,"Expected a . in origin %s",i),e.splice(1,"s"==r?3:2),i+e.join("/")+function(t,e){if(!t||"?"==t)return"";const n=new RegExp("[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\\b[^&]*","g"),r=t.replace(n,"").replace(/^[?&]/,"");return r?"?"+r:""}(t.search)+(t.hash||"")}(r));if("href"==e&&!n.startsWith("#"))return Mt(n,a);if("src"==e)return"amp-img"==t?It(n,a,o):Mt(n,a);if("srcset"==e){let t;try{t=function(t){const e=[];let n;for(;n=bt.exec(t);){const t=n[1];let r,i;if(n[2]){const t=n[3].toLowerCase();if("w"==t)r=parseInt(n[2],10);else{if("x"!=t)continue;i=parseFloat(n[2])}}else i=1;e.push({url:t,width:r,dpr:i})}return new class{constructor(t){m(t.length>0,"Srcset must have at least one source"),this.tx=t;let e=!1,n=!1;for(let r=0;r<t.length;r++){const i=t[r];e=e||!!i.width,n=n||!!i.dpr}m(!(e===n),"Srcset must have width or dpr sources, but not both"),t.sort(e?yt:wt),this.nx=e}select(t,e){f(t),f(e);let n=0;return n=this.nx?this.ix(t*e):this.ox(e),this.tx[n].url}ix(t){const e=this.tx;let n=0,r=1/0,i=1/0;for(let a=0;a<e.length;a++){var o;const s=null!==(o=e[a].width)&&void 0!==o?o:0,u=Math.abs(s-t);if(!(u<=1.1*r||t/i>1.2))break;n=a,r=u,i=s}return n}ox(t){const e=this.tx;let n=0,r=1/0;for(let i=0;i<e.length;i++){const o=Math.abs(e[i].dpr-t);if(!(o<=r))break;n=i,r=o}return n}getUrls(){return this.tx.map((t=>t.url))}stringify(t){const e=[],n=this.tx;for(let r=0;r<n.length;r++){const i=n[r];let o=i.url;t&&(o=t(o)),this.nx?o+=` ${i.width}w`:o+=` ${i.dpr}x`,e.push(o)}return e.join(", ")}}(e)}(n)}catch(t){return dt().error("URL-REWRITE","Failed to parse srcset: ",t),n}return t.stringify((t=>It(t,a,o)))}return n}(t,e,n,self.location):n}function Pt(t){return"src"==t||"href"==t||"xlink:href"==t||"srcset"==t}function It(t,e,n){const r=Rt(Mt(t,e));return"data:"==r.protocol||zt(r)||!n?r.href:`${Dt.cdn}/i/`+("https:"==r.protocol?"s/":"")+encodeURIComponent(r.host)+r.pathname+(r.search||"")+(r.hash||"")}var Lt="data-amp-bind-",Ut="i-amphtml-key",Ct={"AMP-IMG":["src","srcset","layout","width","height"]},Nt={"applet":!0,"audio":!0,"base":!0,"embed":!0,"frame":!0,"frameset":!0,"iframe":!0,"img":!0,"link":!0,"meta":!0,"object":!0,"style":!0,"video":!0},Bt={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-timeago":!0},qt=["a","amp-img","article","aside","b","blockquote","br","caption","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","footer","h1","h2","h3","header","hr","i","ins","li","main","mark","nav","ol","p","pre","q","s","section","small","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul"],$t=["a","article","aside","b","blockquote","br","caption","code","col","colgroup","dd","del","details","div","dl","dt","em","figcaption","figure","footer","h1","h2","h3","header","hr","i","ins","li","main","mark","nav","ol","p","pre","q","s","section","small","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul"],Vt=["amp-fx","fallback","heights","layout","min-font-size","max-font-size","on","option","placeholder","submitting","submit-success","submit-error","validation-for","verify-error","visible-when-invalid","href","style","text","subscriptions-action","subscriptions-actions","subscriptions-decorate","subscriptions-dialog","subscriptions-display","subscriptions-section","subscriptions-service","subscriptions-google-rtc","amp-nested-submenu","amp-nested-submenu-open","amp-nested-submenu-close","itemprop"],Gt={"a":["rel","target"],"div":["template"],"form":["action-xhr","verify-xhr","custom-validation-reporting","target"],"input":["mask-output"],"template":["type"],"textarea":["autoexpand"]},Ht=["_top","_blank"],Wt=/^(?:\w+script|data|blob):/i,Yt=/^(?:blob):/i,Kt=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Zt=Object.freeze({"input":{"type":/(?:image|button)/i}}),Jt=Object.freeze({"input":{"type":/(?:button|file|image|password)/i}}),Qt=Object.freeze(["form","formaction","formmethod","formtarget","formnovalidate","formenctype"]),Xt=Object.freeze({"input":Qt,"textarea":Qt,"select":Qt}),te=Object.freeze({"amp-anim":["controls"],"form":["name"]}),ee=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;function ne(t,e,n,r,i=!1){const o=n?n.replace(Kt,""):"";if(!i){if(e.startsWith("on")&&"on"!=e)return!1;const t=o.toLowerCase();if(t.indexOf("<script")>=0||t.indexOf("</script")>=0)return!1;if(Wt.test(o))return!1}if(Yt.test(o))return!1;if("style"==e)return!ee.test(n);if("class"==e&&n&&/(^|\W)i-amphtml-/i.test(n))return!1;if(Pt(e)&&/__amp_source_origin/.test(n))return!1;const a=ct(r),s=Object.assign(u(),Xt,a?te:{})[t];if(s&&-1!=s.indexOf(e))return!1;const l=Object.assign(u(),Zt,a?Jt:{})[t];if(l){const t=l[e];if(t&&-1!=n.search(t))return!1}return!0}var re="purifier",ie={"script":{"attribute":"type","values":["application/json","application/ld+json"]}},oe={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}};function ae(t){return"["==t[0]&&"]"==t[t.length-1]?1:t.startsWith(Lt)?2:0}var se={};!function(t){var e=Object.prototype.toString,n=Array.isArray||function(t){return"[object Array]"===e.call(t)};function r(t){return"function"==typeof t}function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t,e){return null!=t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,e)}var a=RegExp.prototype.test,s=/\S/,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,c=/\s+/,f=/\s*=/,p=/\s*\}/,m=/#|\^|\/|>|\{|&|=|!/;function d(t){this.string=t,this.tail=t,this.pos=0}function h(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function g(){this.cache={}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},h.prototype.push=function(t){return new h(t,this)},h.prototype.lookup=function(t){var e,n=this.cache;if(n.hasOwnProperty(t))e=n[t];else{for(var i,a,s=this,u=!1;s;){if(t.indexOf(".")>0)for(e=s.view,i=t.split("."),a=0;null!=e&&a<i.length;){if(!o(e,i[a])){e=null;break}a===i.length-1&&(u=!0),e=e[i[a++]]}else o(s.view,t)?(e=s.view[t],u=!0):e=null;if(u)break;s=s.parent}n[t]=e}return r(e)&&(e=e.call(this.view)),e},g.prototype.clearCache=function(){this.cache={}},g.prototype.parse=function(e,r){var o=this.cache,u=o[e];return null==u&&(u=o[e]=function(e,r){if(!e)return[];var o,u,h,g,v=[],b=[],y=[],w=!1,x=!1;function k(){if(w&&!x)for(;y.length;)delete b[y.pop()];else y=[];w=!1,x=!1}!function(t){if("string"==typeof t&&(t=t.split(c,2)),!n(t)||2!==t.length)throw new Error("Invalid tags: "+t);o=new RegExp(i(t[0])+"\\s*"),u=new RegExp("\\s*"+i(t[1])),h=new RegExp("\\s*"+i("}"+t[1]))}(r||t.tags);for(var A,_,S,O,E,j,T=new d(e);!T.eos();){if(A=T.pos,S=T.scanUntil(o))for(var R=0,z=S.length;R<z;++R)g=O=S.charAt(R),function(t,e){return a.call(t,e)}(s,g)?x=!0:y.push(b.length),b.push(["text",O,A,A+1]),A+=1,"\n"===O&&k();if(!T.scan(o))break;if(w=!0,_=T.scan(m)||"name",T.scan(l),"="===_?(S=T.scanUntil(f),T.scan(f),T.scanUntil(u)):"{"===_?(S=T.scanUntil(h),T.scan(p),T.scanUntil(u),_="&"):S=T.scanUntil(u),!T.scan(u))throw new Error("Unclosed tag at "+T.pos);if(E=[_,S,A,T.pos],b.push(E),"#"===_||"^"===_)v.push(E);else if("/"===_){if(!(j=v.pop()))throw new Error('Unopened section "'+S+'" at '+A);if(j[1]!==S)throw new Error('Unclosed section "'+j[1]+'" at '+A)}else"name"!==_&&"{"!==_&&"&"!==_||(x=!0)}if(j=v.pop())throw new Error('Unclosed section "'+j[1]+'" at '+T.pos);return function(t){for(var e,n=[],r=n,i=[],o=0,a=t.length;o<a;++o)switch((e=t[o])[0]){case"#":case"^":r.push(e),i.push(e),r=e[4]=[];break;case"/":i.pop()[5]=e[2],r=i.length>0?i[i.length-1][4]:n;break;default:r.push(e)}return n}(function(t){for(var e,n,r=[],i=0,o=t.length;i<o;++i)(e=t[i])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}(b))}(e,r)),u},g.prototype.render=function(t,e,n){var r=this.parse(t),i=e instanceof h?e:new h(e);return this.renderTokens(r,i,n,t)},g.prototype.renderTokens=function(t,e,n,r){for(var i,o,a,s="",u=0,l=t.length;u<l;++u)a=void 0,"#"===(o=(i=t[u])[0])?a=this.renderSection(i,e,n,r):"^"===o?a=this.renderInverted(i,e,n,r):">"===o?a=this.renderPartial(i,e,n,r):"&"===o?a=this.unescapedValue(i,e):"name"===o?a=this.escapedValue(i,e):"text"===o&&(a=this.rawValue(i)),void 0!==a&&(s+=a);return s},g.prototype.renderSection=function(t,e,i,o){var a=this,s="",u=e.lookup(t[1]);if(u){if(n(u))for(var l=0,c=u.length;l<c;++l)s+=this.renderTokens(t[4],e.push(u[l]),i,o);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)s+=this.renderTokens(t[4],e.push(u),i,o);else if(r(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(e.view,o.slice(t[3],t[5]),(function(t){return a.render(t,e,i)})))&&(s+=u)}else s+=this.renderTokens(t[4],e,i,o);return s}},g.prototype.renderInverted=function(t,e,r,i){var o=e.lookup(t[1]);if(!o||n(o)&&0===o.length)return this.renderTokens(t[4],e,r,i)},g.prototype.renderPartial=function(t,e,n){if(n){var i=r(n)?n(t[1]):n[t[1]];return null!=i?this.renderTokens(this.parse(i),e,n,i):void 0}},g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(null!=r)return t.sanitizeUnescaped?t.sanitizeUnescaped(r):r},g.prototype.escapedValue=function(e,n){var r=n.lookup(e[1]);if(null!=r)return t.escape(r)},g.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="2.2.0",t.tags=["{{","}}"];var v=new g;t.clearCache=function(){return v.clearCache()},t.parse=function(t,e){return v.parse(t,e)},t.render=function(t,e,r){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(i=t)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return v.render(t,e,r)},t.to_html=function(e,n,i,o){var a=t.render(e,n,i);if(!r(o))return a;o(a)},t.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return u[t]}))},t.sanitizeUnescaped=null,t.setUnescapedSanitizer=function(e){t.sanitizeUnescaped=e},t.Scanner=d,t.Context=h,t.Writer=g}(se);var ue=se,le="amp-mustache";t.registerTemplate(le,class extends class{constructor(t,e){var n,r;this.element=t,this.win=t.ownerDocument.defaultView||e,this._r=(n=this.element,r="viewer",_t(function(t){const e=At(t);return e.isSingleDoc()?e.win:e}(At(n)),r)),this.compileCallback()}compileCallback(){}setHtml(t){}render(t){}renderAsString(t){}sx(t,e){for(let n=t.firstChild;null!=n;n=n.nextSibling)if(3==n.nodeType){const t=n.textContent.trim();t&&e(t)}else 8==n.nodeType||l(n)&&e(n)}tryUnwrap(t){let e;return this.sx(t,(t=>{e=void 0===e&&t.nodeType?t:null})),e||t}unwrapChildren(t){const e=[];return this.sx(t,(t=>{if("string"==typeof t){const n=this.win.document.createElement("div");n.textContent=t,e.push(n)}else e.push(t)})),e}viewerCanRenderTemplates(){return this._r.hasCapability("viewerRenderTemplate")}}{constructor(t,e){super(t,e),function(t,e,n,r){!function(t,e,n,r,i,o){const a=St(t);let s=a[n];s||(s=a[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),s.ctor||(s.ctor=r,s.context=e,s.sharedInstance=!1,s.resolve&&_t(t,n))}(t=kt(t),t,e,n)}(e,"purifier",(function(){return new class{constructor(t,e,n){this.kf=t,this.ux=1,this.lx=lt(self),this.mx=lt(self);const i=Object.assign(e||{},r(r({},oe),{},{ADD_ATTR:Vt,ADD_TAGS:["use"],FORBID_TAGS:Object.keys(Nt),FORCE_BODY:!0,RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0}));this.lx.setConfig(i),this.hx(this.lx,n),this.gx(this.mx)}purifyHtml(t){return this.lx.sanitize(t)}purifyTagsForTripleMustache(t){const e=this.mx.sanitize(t,{"ALLOWED_TAGS":ct(this.kf)?$t:qt,"FORCE_BODY":!0,"RETURN_DOM_FRAGMENT":!0}),n=this.kf.createElement("div");return n.appendChild(e),n.innerHTML}getAllowedTags(){const t={};this.lx.addHook("uponSanitizeElement",((e,n)=>{Object.assign(t,n.allowedTags)}));const e=this.kf.createElement("p");return this.lx.sanitize(e),Object.keys(Nt).forEach((e=>{t[e]=!1})),this.lx.removeHook("uponSanitizeElement"),t}validateAttributeChange(t,e,n){const r=t.nodeName.toLowerCase(),i=ie[r];if(i){const{attribute:t,values:r}=i;if(t===e&&(null==n||!r.includes(n)))return!1}if("a"===r&&"target"===e&&(null==n||!Ht.includes(n)))return!1;if(null==n)return!0;if(0!==ae(e))return!1;if(!this.lx.isValidAttribute(r,e,n)){const t=Gt[r];if(!(t&&t.includes(e)||r.startsWith("amp-")))return!1}const o=t.ownerDocument?t.ownerDocument:t;return!(n&&!ne(r,e,n,o,!0))}hx(t,e){const n=ct(this.kf);let r;const i=[];let o;const a=[];t.addHook("uponSanitizeElement",((t,e)=>{const{tagName:o}=e;if(r=e.allowedTags,o.startsWith("amp-")&&(r[o]=!n||Bt[o]),"a"===o){const e=p(t);e.hasAttribute("href")&&!e.hasAttribute("target")&&e.setAttribute("target","_top")}const a=ie[o];if(a){const{attribute:e,values:n}=a,s=p(t);s.hasAttribute(e)&&n.includes(s.getAttribute(e))&&(r[o]=!0,i.push(o))}})),t.addHook("afterSanitizeElements",(t=>{i.forEach((t=>{delete r[t]})),i.length=0})),t.addHook("uponSanitizeAttribute",((t,n)=>{const r=t.nodeName.toLowerCase(),{attrName:i}=n;let{attrValue:s}=n;o=n.allowedAttributes;const u=()=>{o[i]||(o[i]=!0,a.push(i))};if(r.startsWith("amp-"))u();else{if("a"==r&&"target"==i){const t=s.toLowerCase();s=Ht.includes(t)?t:"_top"}const t=Gt[r];t&&t.includes(i)&&u()}const l=ae(i);if(1===l){const e=i.substring(1,i.length-1);t.setAttribute(`data-amp-bind-${e}`,s)}0!==l&&t.setAttribute("i-amphtml-binding",""),ne(r,i,s,this.kf,!0)?e&&s&&!i.startsWith(Lt)&&(s=e(r,i,s)):(n.keepAttr=!1,dt().error(re,'Removed invalid attribute %s[%s="%s"].',r,i,s)),n.attrValue=s})),t.addHook("afterSanitizeAttributes",(t=>{!function(t,e){const n=t.tagName.startsWith("AMP-"),r=t.hasAttribute("i-amphtml-binding");!r&&Ct[t.tagName]?t.setAttribute("i-amphtml-ignore",""):(r||n)&&(t.hasAttribute(Ut)||t.setAttribute(Ut,e()))}(t,(()=>String(this.ux++))),a.forEach((t=>{delete o[t]})),a.length=0,"use"===t.nodeName.toLowerCase()&&["href","xlink:href"].forEach((e=>{t.hasAttribute(e)&&!t.getAttribute(e).startsWith("#")&&(function(t){var e;null===(e=t.parentElement)||void 0===e||e.removeChild(t)}(t),dt().error(re,'Removed invalid <use>. use[href] must start with "#".'))}))}))}gx(t){let e;t.addHook("uponSanitizeElement",((t,n)=>{const{tagName:r}=n;if(e=n.allowedTags,"template"===r){const n=t.getAttribute("type");n&&"amp-mustache"===n.toLowerCase()&&(e.template=!0)}})),t.addHook("afterSanitizeElements",(t=>{e.template=!1}))}}(e.document,{},Ft)})),this.vx=xt(e,"purifier"),ue.setUnescapedSanitizer((t=>this.vx.purifyTagsForTripleMustache(t)))}compileCallback(){if(!this.viewerCanRenderTemplates()){this.bx={},this.yx=this.wx();try{ue.parse(this.yx,void 0)}catch(t){dt().error(le,t.message,this.element)}}}wx(){if("TEMPLATE"==this.element.tagName){const t=function(t){if("content"in t)return t.content.cloneNode(!0);{const e=t.ownerDocument.createDocumentFragment();return function(t,e){const n=e.ownerDocument.createDocumentFragment();for(let e=t.firstChild;e;e=e.nextSibling)n.appendChild(e.cloneNode(!0));e.appendChild(n)}(t,e),e}}(this.element);this.xx(t);const e=this.element.ownerDocument.createElement("div");return e.appendChild(t),e.innerHTML}return"SCRIPT"==this.element.tagName?this.element.textContent:""}xx(t){t.querySelectorAll("template").forEach(((t,e)=>{const n=`__AMP_NESTED_TEMPLATE_${e}`;this.bx[n]=t.outerHTML;const r=this.element.ownerDocument.createTextNode(`{{{${n}}}}`);t.parentNode.replaceChild(r,t)}))}setHtml(t){const e=`<div>${t}</div>`,n=this.tryUnwrap(this.kx(e));return this.unwrapChildren(n)}render(t){return this.tryUnwrap(this.Hu(t))}renderAsString(t){return this.Hu(t).innerHTML}Hu(t){let e=t;"object"==typeof t&&(e=r(r({},t),this.bx));const n=ue.render(this.yx,e,void 0);return this.kx(n)}kx(t){return this.vx.purifyHtml(`<div>${t}</div>`).firstElementChild}})})();
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-mustache-0.2.mjs.map