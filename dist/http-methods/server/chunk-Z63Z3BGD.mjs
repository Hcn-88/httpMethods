import './polyfills.server.mjs';
import{A as Z2,B as c1,C as T,D as a1,E as e1,F as D3,G as P3,H as F3,I as p,J as u,K as u2,L as b2,M as _3,N as T3,O as y,P as J,Q as E3,R as B3,S as Z,T as c2,U as a2,V as T1,W as z,X as W,Y as d2,Z as E,a as y3,b as K2,c as N3,d as J2,e as o2,ea as E1,f as K,fa as R3,g as C2,ga as B1,h as g2,i as S3,ia as I3,j as _2,ja as i1,k as F,ka as O3,l as L2,la as U3,m as b,ma as G3,n as l2,na as W3,o as f2,oa as q3,p as m2,pa as j3,q as x2,r as w3,s as k3,sa as $3,t as h2,u as v2,v as x,w as d,x as A3,y as G,ya as Y3,z as _}from"./chunk-WYNZHINH.mjs";import{a as O,b as Q}from"./chunk-VVCT4QZE.mjs";function X3(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function m(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?X3(Object(i),!0).forEach(function(e){L(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):X3(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function d1(a){"@babel/helpers - typeof";return d1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d1(a)}function T6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function Q3(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function E6(a,c,i){return c&&Q3(a.prototype,c),i&&Q3(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function L(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function c3(a,c){return R6(a)||O6(a,c)||C4(a,c)||G6()}function W2(a){return B6(a)||I6(a)||C4(a)||U6()}function B6(a){if(Array.isArray(a))return G1(a)}function R6(a){if(Array.isArray(a))return a}function I6(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function O6(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,t;try{for(i=i.call(a);!(r=(n=i.next()).done)&&(e.push(n.value),!(c&&e.length===c));r=!0);}catch(o){s=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw t}}return e}}function C4(a,c){if(a){if(typeof a=="string")return G1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return G1(a,c)}}function G1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function U6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K3=function(){},a3={},g4={},L4=null,x4={mark:K3,measure:K3};try{typeof window<"u"&&(a3=window),typeof document<"u"&&(g4=document),typeof MutationObserver<"u"&&(L4=MutationObserver),typeof performance<"u"&&(x4=performance)}catch{}var W6=a3.navigator||{},J3=W6.userAgent,Z3=J3===void 0?"":J3,i2=a3,C=g4,c4=L4,r1=x4,M5=!!i2.document,Y=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",b4=~Z3.indexOf("MSIE")||~Z3.indexOf("Trident/"),s1,n1,t1,o1,l1,q="___FONT_AWESOME___",W1=16,y4="fa",N4="svg-inline--fa",z2="data-fa-i2svg",q1="data-fa-pseudo-element",q6="data-fa-pseudo-element-pending",e3="data-prefix",i3="data-icon",a4="fontawesome-i2svg",j6="async",$6=["HTML","HEAD","STYLE","SCRIPT"],S4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),M="classic",g="sharp",r3=[M,g];function q2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[M]}})}var R2=q2((s1={},L(s1,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),L(s1,g,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),s1)),I2=q2((n1={},L(n1,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),L(n1,g,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),n1)),O2=q2((t1={},L(t1,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),L(t1,g,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),t1)),Y6=q2((o1={},L(o1,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),L(o1,g,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),o1)),X6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,w4="fa-layers-text",Q6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,K6=q2((l1={},L(l1,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),L(l1,g,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),l1)),k4=[1,2,3,4,5,6,7,8,9,10],J6=k4.concat([11,12,13,14,15,16,17,18,19,20]),Z6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U2=new Set;Object.keys(I2[M]).map(U2.add.bind(U2));Object.keys(I2[g]).map(U2.add.bind(U2));var c0=[].concat(r3,W2(U2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(k4.map(function(a){return"".concat(a,"x")})).concat(J6.map(function(a){return"w-".concat(a)})),E2=i2.FontAwesomeConfig||{};function a0(a){var c=C.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function e0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}C&&typeof C.querySelector=="function"&&(e4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],e4.forEach(function(a){var c=c3(a,2),i=c[0],e=c[1],r=e0(a0(i));r!=null&&(E2[e]=r)}));var e4,A4={styleDefault:"solid",familyDefault:"classic",cssPrefix:y4,replacementClass:N4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};E2.familyPrefix&&(E2.cssPrefix=E2.familyPrefix);var w2=m(m({},A4),E2);w2.autoReplaceSvg||(w2.observeMutations=!1);var h={};Object.keys(A4).forEach(function(a){Object.defineProperty(h,a,{enumerable:!0,set:function(i){w2[a]=i,B2.forEach(function(e){return e(h)})},get:function(){return w2[a]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){w2.cssPrefix=c,B2.forEach(function(i){return i(h)})},get:function(){return w2.cssPrefix}});i2.FontAwesomeConfig=h;var B2=[];function i0(a){return B2.push(a),function(){B2.splice(B2.indexOf(a),1)}}var e2=W1,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function r0(a){if(!(!a||!Y)){var c=C.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=C.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return C.head.insertBefore(c,e),a}}var s0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function G2(){for(var a=12,c="";a-- >0;)c+=s0[Math.random()*62|0];return c}function k2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function s3(a){return a.classList?k2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function D4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(D4(a[i]),'" ')},"").trim()}function z1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function n3(a){return a.size!==U.size||a.x!==U.x||a.y!==U.y||a.rotate!==U.rotate||a.flipX||a.flipY}function t0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:f}}function o0(a){var c=a.transform,i=a.width,e=i===void 0?W1:i,r=a.height,s=r===void 0?W1:r,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&b4?o+="translate(".concat(c.x/e2-e/2,"em, ").concat(c.y/e2-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/e2,"em), calc(-50% + ").concat(c.y/e2,"em)) "):o+="translate(".concat(c.x/e2,"em, ").concat(c.y/e2,"em) "),o+="scale(".concat(c.size/e2*(c.flipX?-1:1),", ").concat(c.size/e2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var l0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P4(){var a=y4,c=N4,i=h.cssPrefix,e=h.replacementClass,r=l0;if(i!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var i4=!1;function R1(){h.autoAddCss&&!i4&&(r0(P4()),i4=!0)}var f0={mixout:function(){return{dom:{css:P4,insertCss:R1}}},hooks:function(){return{beforeDOMElementCreation:function(){R1()},beforeI2svg:function(){R1()}}}},j=i2||{};j[q]||(j[q]={});j[q].styles||(j[q].styles={});j[q].hooks||(j[q].hooks={});j[q].shims||(j[q].shims=[]);var B=j[q],F4=[],m0=function a(){C.removeEventListener("DOMContentLoaded",a),p1=1,F4.map(function(c){return c()})},p1=!1;Y&&(p1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),p1||C.addEventListener("DOMContentLoaded",m0));function h0(a){Y&&(p1?setTimeout(a,0):F4.push(a))}function j2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,s=r===void 0?[]:r;return typeof a=="string"?D4(a):"<".concat(c," ").concat(n0(e),">").concat(s.map(j2).join(""),"</").concat(c,">")}function r4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var v0=function(c,i){return function(e,r,s,n){return c.call(i,e,r,s,n)}},I1=function(c,i,e,r){var s=Object.keys(c),n=s.length,t=r!==void 0?v0(i,r):i,o,f,l;for(e===void 0?(o=1,l=c[s[0]]):(o=0,l=e);o<n;o++)f=s[o],l=t(l,c[f],f,c);return l};function u0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=a.charCodeAt(i++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function j1(a){var c=u0(a);return c.length===1?c[0].toString(16):null}function d0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function s4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function $1(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=s4(c);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(a,s4(c)):B.styles[a]=m(m({},B.styles[a]||{}),s),a==="fas"&&$1("fa",c)}var f1,m1,h1,y2=B.styles,p0=B.shims,H0=(f1={},L(f1,M,Object.values(O2[M])),L(f1,g,Object.values(O2[g])),f1),t3=null,_4={},T4={},E4={},B4={},R4={},z0=(m1={},L(m1,M,Object.keys(R2[M])),L(m1,g,Object.keys(R2[g])),m1);function V0(a){return~c0.indexOf(a)}function M0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!V0(r)?r:null}var I4=function(){var c=function(s){return I1(y2,function(n,t,o){return n[o]=I1(t,s,{}),n},{})};_4=c(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=n})}return r}),T4=c(function(r,s,n){if(r[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=n})}return r}),R4=c(function(r,s,n){var t=s[2];return r[n]=n,t.forEach(function(o){r[o]=n}),r});var i="far"in y2||h.autoFetchSvg,e=I1(p0,function(r,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!i&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});E4=e.names,B4=e.unicodes,t3=V1(h.styleDefault,{family:h.familyDefault})};i0(function(a){t3=V1(a.styleDefault,{family:h.familyDefault})});I4();function o3(a,c){return(_4[a]||{})[c]}function C0(a,c){return(T4[a]||{})[c]}function H2(a,c){return(R4[a]||{})[c]}function O4(a){return E4[a]||{prefix:null,iconName:null}}function g0(a){var c=B4[a],i=o3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function r2(){return t3}var l3=function(){return{prefix:null,iconName:null,rest:[]}};function V1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?M:i,r=R2[e][a],s=I2[e][a]||I2[e][r],n=a in B.styles?a:null;return s||n||null}var n4=(h1={},L(h1,M,Object.keys(O2[M])),L(h1,g,Object.keys(O2[g])),h1);function M1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(c={},L(c,M,"".concat(h.cssPrefix,"-").concat(M)),L(c,g,"".concat(h.cssPrefix,"-").concat(g)),c),n=null,t=M;(a.includes(s[M])||a.some(function(f){return n4[M].includes(f)}))&&(t=M),(a.includes(s[g])||a.some(function(f){return n4[g].includes(f)}))&&(t=g);var o=a.reduce(function(f,l){var v=M0(h.cssPrefix,l);if(y2[l]?(l=H0[t].includes(l)?Y6[t][l]:l,n=l,f.prefix=l):z0[t].indexOf(l)>-1?(n=l,f.prefix=V1(l,{family:t})):v?f.iconName=v:l!==h.replacementClass&&l!==s[M]&&l!==s[g]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var H=n==="fa"?O4(f.iconName):{},V=H2(f.prefix,f.iconName);H.prefix&&(n=null),f.iconName=H.iconName||V||f.iconName,f.prefix=H.prefix||f.prefix,f.prefix==="far"&&!y2.far&&y2.fas&&!h.autoFetchSvg&&(f.prefix="fas")}return f},l3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===g&&(y2.fass||h.autoFetchSvg)&&(o.prefix="fass",o.iconName=H2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=r2()||"fas"),o}var L0=function(){function a(){T6(this,a),this.definitions={}}return E6(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){i.definitions[t]=m(m({},i.definitions[t]||{}),n[t]),$1(t,n[t]);var o=O2[M][t];o&&$1(o,n[t]),I4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],t=n.prefix,o=n.iconName,f=n.icon,l=f[2];i[t]||(i[t]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(i[t][v]=f)}),i[t][o]=f}),i}}]),a}(),t4=[],N2={},S2={},x0=Object.keys(S2);function b0(a,c){var i=c.mixoutsTo;return t4=a,N2={},Object.keys(S2).forEach(function(e){x0.indexOf(e)===-1&&delete S2[e]}),t4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),d1(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){i[n]||(i[n]={}),i[n][t]=r[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){N2[n]||(N2[n]=[]),N2[n].push(s[n])})}e.provides&&e.provides(S2)}),i}function Y1(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=N2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function V2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=N2[a]||[];r.forEach(function(s){s.apply(null,i)})}function $(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return S2[a]?S2[a].apply(null,c):void 0}function X1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||r2();if(c)return c=H2(i,c)||c,r4(U4.definitions,i,c)||r4(B.styles,i,c)}var U4=new L0,y0=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,V2("noAuto")},N0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(V2("beforeI2svg",c),$("pseudoElements2svg",c),$("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,h0(function(){w0({autoReplaceSvgRoot:i}),V2("watch",c)})}},S0={icon:function(c){if(c===null)return null;if(d1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:H2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=V1(c[0]);return{prefix:e,iconName:H2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(X6))){var r=M1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||r2(),iconName:H2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=r2();return{prefix:s,iconName:H2(s,c)||c}}}},A={noAuto:y0,config:h,dom:N0,parse:S0,library:U4,findIconDefinition:X1,toHtml:j2},w0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?C:i;(Object.keys(B.styles).length>0||h.autoFetchSvg)&&Y&&h.autoReplaceSvg&&A.dom.i2svg({node:e})};function C1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return j2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(Y){var e=C.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function k0(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,s=a.styles,n=a.transform;if(n3(n)&&i.found&&!e.found){var t=i.width,o=i.height,f={x:t/o/2,y:.5};r.style=z1(m(m({},s),{},{"transform-origin":"".concat(f.x+n.x/16,"em ").concat(f.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function A0(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(h.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:n}),children:e}]}]}function f3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,f=a.maskId,l=a.titleId,v=a.extra,H=a.watchable,V=H===void 0?!1:H,S=e.found?e:i,D=S.width,P=S.height,R=r==="fak",N=[h.replacementClass,s?"".concat(h.cssPrefix,"-").concat(s):""].filter(function(X){return v.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(v.classes).join(" "),w={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(P)})},I=R&&!~v.classes.indexOf("fa-fw")?{width:"".concat(D/P*16*.0625,"em")}:{};V&&(w.attributes[z2]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||G2())},children:[o]}),delete w.attributes.title);var k=m(m({},w),{},{prefix:r,iconName:s,main:i,mask:e,maskId:f,transform:n,symbol:t,styles:m(m({},I),v.styles)}),n2=e.found&&i.found?$("generateAbstractMask",k)||{children:[],attributes:{}}:$("generateAbstractIcon",k)||{children:[],attributes:{}},t2=n2.children,_1=n2.attributes;return k.children=t2,k.attributes=_1,t?A0(k):k0(k)}function o4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,f=m(m(m({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(f[z2]="");var l=m({},n.styles);n3(r)&&(l.transform=o0({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var v=z1(l);v.length>0&&(f.style=v);var H=[];return H.push({tag:"span",attributes:f,children:[c]}),s&&H.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),H}function D0(a){var c=a.content,i=a.title,e=a.extra,r=m(m(m({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=z1(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[c]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var O1=B.styles;function Q1(a){var c=a[0],i=a[1],e=a.slice(4),r=c3(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:i,icon:n}}var P0={found:!1,width:512,height:512};function F0(a,c){!S4&&!h.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function K1(a,c){var i=c;return c==="fa"&&h.styleDefault!==null&&(c=r2()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(i==="fa"){var n=O4(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&O1[c]&&O1[c][a]){var t=O1[c][a];return e(Q1(t))}F0(a,c),e(m(m({},P0),{},{icon:h.showMissingIcons&&a?$("missingIconAbstract")||{}:{}}))})}var l4=function(){},J1=h.measurePerformance&&r1&&r1.mark&&r1.measure?r1:{mark:l4,measure:l4},T2='FA "6.5.1"',_0=function(c){return J1.mark("".concat(T2," ").concat(c," begins")),function(){return G4(c)}},G4=function(c){J1.mark("".concat(T2," ").concat(c," ends")),J1.measure("".concat(T2," ").concat(c),"".concat(T2," ").concat(c," begins"),"".concat(T2," ").concat(c," ends"))},m3={begin:_0,end:G4},v1=function(){};function f4(a){var c=a.getAttribute?a.getAttribute(z2):null;return typeof c=="string"}function T0(a){var c=a.getAttribute?a.getAttribute(e3):null,i=a.getAttribute?a.getAttribute(i3):null;return c&&i}function E0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(h.replacementClass)}function B0(){if(h.autoReplaceSvg===!0)return u1.replace;var a=u1[h.autoReplaceSvg];return a||u1.replace}function R0(a){return C.createElementNS("http://www.w3.org/2000/svg",a)}function I0(a){return C.createElement(a)}function W4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?R0:I0:i;if(typeof a=="string")return C.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(n){r.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){r.appendChild(W4(n,{ceFn:e}))}),r}function O0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var u1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(W4(r),i)}),i.getAttribute(z2)===null&&h.keepOriginalSource){var e=C.createComment(O0(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~s3(i).indexOf(h.replacementClass))return u1.replace(c);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===h.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return j2(t)}).join(`
`);i.setAttribute(z2,""),i.innerHTML=n}};function m4(a){a()}function q4(a,c){var i=typeof c=="function"?c:v1;if(a.length===0)i();else{var e=m4;h.mutateApproach===j6&&(e=i2.requestAnimationFrame||m4),e(function(){var r=B0(),s=m3.begin("mutate");a.map(r),s(),i()})}}var h3=!1;function j4(){h3=!0}function Z1(){h3=!1}var H1=null;function h4(a){if(c4&&h.observeMutations){var c=a.treeCallback,i=c===void 0?v1:c,e=a.nodeCallback,r=e===void 0?v1:e,s=a.pseudoElementsCallback,n=s===void 0?v1:s,t=a.observeMutationsRoot,o=t===void 0?C:t;H1=new c4(function(f){if(!h3){var l=r2();k2(f).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!f4(v.addedNodes[0])&&(h.searchPseudoElements&&n(v.target),i(v.target)),v.type==="attributes"&&v.target.parentNode&&h.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&f4(v.target)&&~Z6.indexOf(v.attributeName))if(v.attributeName==="class"&&T0(v.target)){var H=M1(s3(v.target)),V=H.prefix,S=H.iconName;v.target.setAttribute(e3,V||l),S&&v.target.setAttribute(i3,S)}else E0(v.target)&&r(v.target)})}}),Y&&H1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function U0(){H1&&H1.disconnect()}function G0(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),i}function W0(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=M1(s3(a));return r.prefix||(r.prefix=r2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=C0(r.prefix,a.innerText)||o3(r.prefix,j1(a.innerText))),!r.iconName&&h.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function q0(a){var c=k2(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return h.autoA11y&&(i?c["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||G2()):(c["aria-hidden"]="true",c.focusable="false")),c}function j0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=W0(a),e=i.iconName,r=i.prefix,s=i.rest,n=q0(a),t=Y1("parseNodeAttributes",{},a),o=c.styleParser?G0(a):[];return m({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var $0=B.styles;function $4(a){var c=h.autoReplaceSvg==="nest"?v4(a,{styleParser:!1}):v4(a);return~c.extra.classes.indexOf(w4)?$("generateLayersText",a,c):$("generateSvgReplacementMutation",a,c)}var s2=new Set;r3.map(function(a){s2.add("fa-".concat(a))});Object.keys(R2[M]).map(s2.add.bind(s2));Object.keys(R2[g]).map(s2.add.bind(s2));s2=W2(s2);function u4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var i=C.documentElement.classList,e=function(v){return i.add("".concat(a4,"-").concat(v))},r=function(v){return i.remove("".concat(a4,"-").concat(v))},s=h.autoFetchSvg?s2:r3.map(function(l){return"fa-".concat(l)}).concat(Object.keys($0));s.includes("fa")||s.push("fa");var n=[".".concat(w4,":not([").concat(z2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(z2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=k2(a.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=m3.begin("onTree"),f=t.reduce(function(l,v){try{var H=$4(v);H&&l.push(H)}catch(V){S4||V.name==="MissingIcon"&&console.error(V)}return l},[]);return new Promise(function(l,v){Promise.all(f).then(function(H){q4(H,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(H){o(),v(H)})})}function Y0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$4(a).then(function(i){i&&q4([i],c)})}function X0(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:X1(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:X1(r||{})),a(e,m(m({},i),{},{mask:r}))}}var Q0=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?U:e,s=i.symbol,n=s===void 0?!1:s,t=i.mask,o=t===void 0?null:t,f=i.maskId,l=f===void 0?null:f,v=i.title,H=v===void 0?null:v,V=i.titleId,S=V===void 0?null:V,D=i.classes,P=D===void 0?[]:D,R=i.attributes,N=R===void 0?{}:R,w=i.styles,I=w===void 0?{}:w;if(c){var k=c.prefix,n2=c.iconName,t2=c.icon;return C1(m({type:"icon"},c),function(){return V2("beforeDOMElementCreation",{iconDefinition:c,params:i}),h.autoA11y&&(H?N["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(S||G2()):(N["aria-hidden"]="true",N.focusable="false")),f3({icons:{main:Q1(t2),mask:o?Q1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:n2,transform:m(m({},U),r),symbol:n,title:H,maskId:l,titleId:S,extra:{attributes:N,styles:I,classes:P}})})}},K0={mixout:function(){return{icon:X0(Q0)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=u4,i.nodeCallback=Y0,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?C:e,s=i.callback,n=s===void 0?function(){}:s;return u4(r,n)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,f=e.symbol,l=e.mask,v=e.maskId,H=e.extra;return new Promise(function(V,S){Promise.all([K1(r,t),l.iconName?K1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var P=c3(D,2),R=P[0],N=P[1];V([i,f3({icons:{main:R,mask:N},prefix:t,iconName:r,transform:o,symbol:f,maskId:v,title:s,titleId:n,extra:H,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,t=i.styles,o=z1(t);o.length>0&&(r.style=o);var f;return n3(n)&&(f=$("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(f||s.icon),{children:e,attributes:r}}}},J0={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return C1({type:"layer"},function(){V2("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(W2(s)).join(" ")},children:n}]})}}}},Z0={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,t=n===void 0?[]:n,o=e.attributes,f=o===void 0?{}:o,l=e.styles,v=l===void 0?{}:l;return C1({type:"counter",content:i},function(){return V2("beforeDOMElementCreation",{content:i,params:e}),D0({content:i.toString(),title:s,extra:{attributes:f,styles:v,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(W2(t))}})})}}}},c8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?U:r,n=e.title,t=n===void 0?null:n,o=e.classes,f=o===void 0?[]:o,l=e.attributes,v=l===void 0?{}:l,H=e.styles,V=H===void 0?{}:H;return C1({type:"text",content:i},function(){return V2("beforeDOMElementCreation",{content:i,params:e}),o4({content:i,transform:m(m({},U),s),title:t,extra:{attributes:v,styles:V,classes:["".concat(h.cssPrefix,"-layers-text")].concat(W2(f))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,t=null,o=null;if(b4){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();t=l.width/f,o=l.height/f}return h.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,o4({content:i.innerHTML,width:t,height:o,transform:s,title:r,extra:n,watchable:!0})])}}},a8=new RegExp('"',"ug"),d4=[1105920,1112319];function e8(a){var c=a.replace(a8,""),i=d0(c,0),e=i>=d4[0]&&i<=d4[1],r=c.length===2?c[0]===c[1]:!1;return{value:j1(r?c[0]:c),isSecondary:e||r}}function p4(a,c){var i="".concat(q6).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var s=k2(a.children),n=s.filter(function(t2){return t2.getAttribute(q1)===c})[0],t=i2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(Q6),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),e();if(o&&l!=="none"&&l!==""){var v=t.getPropertyValue("content"),H=~["Sharp"].indexOf(o[2])?g:M,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?I2[H][o[2].toLowerCase()]:K6[H][f],S=e8(v),D=S.value,P=S.isSecondary,R=o[0].startsWith("FontAwesome"),N=o3(V,D),w=N;if(R){var I=g0(D);I.iconName&&I.prefix&&(N=I.iconName,V=I.prefix)}if(N&&!P&&(!n||n.getAttribute(e3)!==V||n.getAttribute(i3)!==w)){a.setAttribute(i,w),n&&a.removeChild(n);var k=j0(),n2=k.extra;n2.attributes[q1]=c,K1(N,V).then(function(t2){var _1=f3(m(m({},k),{},{icons:{main:t2,mask:l3()},prefix:V,iconName:w,extra:n2,watchable:!0})),X=C.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(X,a.firstChild):a.appendChild(X),X.outerHTML=_1.map(function(_6){return j2(_6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function i8(a){return Promise.all([p4(a,"::before"),p4(a,"::after")])}function r8(a){return a.parentNode!==document.head&&!~$6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(q1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function H4(a){if(Y)return new Promise(function(c,i){var e=k2(a.querySelectorAll("*")).filter(r8).map(i8),r=m3.begin("searchPseudoElements");j4(),Promise.all(e).then(function(){r(),Z1(),c()}).catch(function(){r(),Z1(),i()})})}var s8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=H4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?C:e;h.searchPseudoElements&&H4(r)}}},z4=!1,n8={mixout:function(){return{dom:{unwatch:function(){j4(),z4=!0}}}},hooks:function(){return{bootstrap:function(){h4(Y1("mutationObserverCallbacks",{}))},noAuto:function(){U0()},watch:function(i){var e=i.observeMutationsRoot;z4?Z1():h4(Y1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},V4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},t8={mixout:function(){return{parse:{transform:function(i){return V4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=V4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(o," ").concat(f," ").concat(l)},H={transform:"translate(".concat(n/2*-1," -256)")},V={outer:t,inner:v,path:H};return{tag:"g",attributes:m({},V.outer),children:[{tag:"g",attributes:m({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),V.path)}]}]}}}},U1={x:0,y:0,width:"100%",height:"100%"};function M4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function o8(a){return a.tag==="g"?a.children:[a]}var l8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?M1(r.split(" ").map(function(n){return n.trim()})):l3();return s.prefix||(s.prefix=r2()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,t=i.maskId,o=i.transform,f=s.width,l=s.icon,v=n.width,H=n.icon,V=t0({transform:o,containerWidth:v,iconWidth:f}),S={tag:"rect",attributes:m(m({},U1),{},{fill:"white"})},D=l.children?{children:l.children.map(M4)}:{},P={tag:"g",attributes:m({},V.inner),children:[M4(m({tag:l.tag,attributes:m(m({},l.attributes),V.path)},D))]},R={tag:"g",attributes:m({},V.outer),children:[P]},N="mask-".concat(t||G2()),w="clip-".concat(t||G2()),I={tag:"mask",attributes:m(m({},U1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,R]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:o8(H)},I]};return e.push(k,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},U1)}),{children:e,attributes:r}}}},f8={provides:function(c){var i=!1;i2.matchMedia&&(i=i2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:m(m({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},m8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},h8=[f0,K0,J0,Z0,c8,s8,n8,t8,l8,f8,m8];b0(h8,{mixoutsTo:A});var C5=A.noAuto,g5=A.config,L5=A.library,x5=A.dom,Y4=A.parse,b5=A.findIconDefinition,y5=A.toHtml,X4=A.icon,N5=A.layer,v8=A.text,u8=A.counter;var d8=["*"],p8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},H8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},z8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},V8=a=>a.prefix!==void 0&&a.iconName!==void 0,M8=(a,c)=>V8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},C8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),g8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),L8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=b({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[l2]});let a=c;return a})(),x8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(d(v2),d(h2))},c.\u0275cmp=F({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[l2,E],ngContentSelectors:d8,decls:1,vars:0,template:function(r,s){r&1&&(E3(),B3(0))},encapsulation:2});let a=c;return a})(),g1=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,t){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){H8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=M8(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(p8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Y4.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...z8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=X4(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(d(q3),d(C8),d(g8),d(L8,8),d(x8,8))},c.\u0275cmp=F({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(_3("innerHTML",s.renderedIconHTML,k3),c1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[l2,E],decls:0,vars:0,template:function(r,s){},encapsulation:2});let a=c;return a})();var L1=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=L2({type:c}),c.\u0275inj=C2({});let a=c;return a})();var K4={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]};var b8={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},J4=b8;var y8={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Z4=y8;var A2=(()=>{let c=class c{constructor(){this.isEditting=!1}onEdittingMode(e){return this.isEditting=e}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var x1=(()=>{let c=class c{constructor(e){this.http=e,this.urlApi="https://httpmethodsangular-default-rtdb.firebaseio.com/tasks.json"}getMethod(){return this.http.get(this.urlApi).pipe(K2(e=>{let r=[];for(let s in e)e.hasOwnProperty(s)&&r.push(Q(O({},e[s]),{id:s}));return r}))}postMethod(e){return this.http.post(this.urlApi,e)}deleteMethod(e){return this.http.delete(`https://httpmethodsangular-default-rtdb.firebaseio.com/tasks/${e}.json`)}putMethod(e,r){return this.http.put(`https://httpmethodsangular-default-rtdb.firebaseio.com/tasks/${e}.json`,r)}};c.\u0275fac=function(r){return new(r||c)(S3(O3))},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function N8(a,c){a&1&&(p(0,"div",1)(1,"div",2)(2,"h4",3),z(3,"Data is being fetched..."),u(),u2(4,"span",4),u()())}function S8(a,c){if(a&1){let i=b2();p(0,"section",6)(1,"div",7)(2,"div",8)(3,"p")(4,"strong"),z(5,"Title: "),u(),z(6),u(),p(7,"p")(8,"strong"),z(9,"Priority: "),u(),z(10),u(),p(11,"p")(12,"strong"),z(13,"Assinged to: "),u(),z(14),u(),p(15,"p")(16,"strong"),z(17,"Status: "),u(),z(18),u()(),p(19,"div",9)(20,"p")(21,"strong"),z(22,"Description: "),u(),z(23),u()()(),p(24,"div",10)(25,"fa-icon",11),y("click",function(){let s=f2(i).$implicit,n=J(2);return m2(n.handleDelete(s.id))}),u(),p(26,"fa-icon",12),y("click",function(){let s=f2(i).$implicit,n=J(2);return m2(n.selectTask(s.id))}),u()()()}if(a&2){let i=c.$implicit,e=J(2);T("ngClass",i.status),x(6),W(i.title),x(4),W(i.priority),x(4),W(i.assignedTo),x(4),W(i.status),x(5),W(i.description),x(2),T("icon",e.faDelete),x(),T("icon",e.faEdit)}}function w8(a,c){a&1&&(p(0,"p"),z(1,"No task is created yet!"),u())}function k8(a,c){if(a&1&&(p(0,"div",5),P3(1,S8,27,8,"section",13,D3,!1,w8,2,0,"p"),u()),a&2){let i=J();x(),F3(i.tasks)}}var u3=(()=>{let c=class c{constructor(e,r,s){this.parent=e,this.serviceMode=r,this.httpService=s,this.tasks=[],this.faEdit=J4,this.faDelete=K4,this.isLoading=!1,this.select=new G}ngOnInit(){this.fetchPosts()}fetchPosts(){this.isLoading=!0,this.httpService.getMethod().subscribe({next:e=>{e.forEach((r,s)=>{console.log(`[${s+1}]`,r)}),this.tasks=e,this.isLoading=!1},error:e=>{console.log(`Get Method: error ${e}`)},complete:()=>{console.log("Get request Complete")}})}handleDelete(e){this.httpService.deleteMethod(e).subscribe({next:r=>{console.log(`deleted task with ID: ${e}`),this.fetchPosts()},error:r=>console.log(`error deleting the task: ${r}`),complete:()=>console.log("deletion completed")})}selectTask(e){this.parent.showTaskForm();let r=this.tasks.find(s=>s.id===e);this.select.emit(r),this.serviceMode.onEdittingMode(!0)}};c.\u0275fac=function(r){return new(r||c)(d(D2),d(A2),d(x1))},c.\u0275cmp=F({type:c,selectors:[["app-get-method"]],outputs:{select:"select"},standalone:!0,features:[E],decls:2,vars:1,consts:[["class","overlay"],[1,"overlay"],[1,"popup"],[1,"my-3"],[1,"spin"],[1,"d-flex","flex-wrap","gap-5"],[1,"my-3","bg-dark","p-4",3,"ngClass"],[1,"flipper"],[1,"front","rounded-3"],[1,"back","rounded-3"],[1,"d-flex","justify-content-end","mt-3","gap-2"],["title","Delete Task",3,"icon","click"],["title","Edit Task",3,"icon","click"],["class","my-3 bg-dark p-4",3,"ngClass"]],template:function(r,s){r&1&&Z2(0,N8,5,0,"div",0)(1,k8,4,1),r&2&&e1(0,s.isLoading?0:1)},dependencies:[i1,I3,L1,g1],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;z-index:1000;display:grid;place-content:center}.overlay[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]{text-align:center;padding:20px;background:#fff;border-radius:5px;position:relative}.spin[_ngcontent-%COMP%]{width:64px;height:64px;display:inline-block;border-radius:50%;border-top:8px solid #0dcaf0;border-left:8px solid #0dcaf0;border-right:8px solid rgba(246,67,72,0);animation:_ngcontent-%COMP%_spin 1s infinite linear;-webkit-animation:_ngcontent-%COMP%_spin 1s infinite linear}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}section[_ngcontent-%COMP%]{min-width:23%}section.started[_ngcontent-%COMP%]{border-top:10px solid #1b7ea5}section.in-progress[_ngcontent-%COMP%]{border-top:10px solid #a3741c}section.complete[_ngcontent-%COMP%]{border-top:10px solid #186618}section[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background:#2e2e2e;color:#dfdddd;padding:8px 12px;border-radius:50%;cursor:pointer}section[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover{background:#e7e6e6;color:#2e2e2e}section[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]{width:200px;height:200px;color:#dfdddd;perspective:1000px;transform-style:preserve-3d;transition:transform .9s;-webkit-transition:transform .9s;-moz-transition:transform .9s;-ms-transition:transform .9s;-o-transition:transform .9s}section[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]:hover{transform:rotateY(180deg);-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg)}section[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background:#2e2e2e;width:100%;height:100%;position:absolute;backface-visibility:hidden;padding:10px}section[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{transform:rotateY(180deg);-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg)}"]});let a=c;return a})();var m6=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(d(v2),d(h2))},c.\u0275dir=b({type:c});let a=c;return a})(),p3=(()=>{let c=class c extends m6{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=x2(c)))(s||c)}})(),c.\u0275dir=b({type:c,features:[_]});let a=c;return a})(),A1=new g2("NgValueAccessor");var A8={provide:A1,useExisting:o2(()=>D1),multi:!0};function D8(){let a=B1()?B1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var P8=new g2("CompositionEventMode"),D1=(()=>{let c=class c extends m6{constructor(e,r,s){super(e,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!D8())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(d(v2),d(h2),d(P8,8))},c.\u0275dir=b({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&y("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[d2([A8]),_]});let a=c;return a})();function F8(a){return a==null||(typeof a=="string"||Array.isArray(a))&&a.length===0}var H3=new g2("NgValidators"),h6=new g2("NgAsyncValidators");function _8(a){return F8(a.value)?{required:!0}:null}function e6(a){return null}function v6(a){return a!=null}function u6(a){return T3(a)?y3(a):a}function d6(a){let c={};return a.forEach(i=>{c=i!=null?O(O({},c),i):c}),Object.keys(c).length===0?null:c}function p6(a,c){return c.map(i=>i(a))}function T8(a){return!a.validate}function H6(a){return a.map(c=>T8(c)?c:i=>c.validate(i))}function E8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(i){return d6(p6(i,c))}}function z3(a){return a!=null?E8(H6(a)):null}function B8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(i){let e=p6(i,c).map(u6);return N3(e).pipe(K2(d6))}}function V3(a){return a!=null?B8(H6(a)):null}function i6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function R8(a){return a._rawValidators}function I8(a){return a._rawAsyncValidators}function d3(a){return a?Array.isArray(a)?a:[a]:[]}function y1(a,c){return Array.isArray(a)?a.includes(c):a===c}function r6(a,c){let i=d3(c);return d3(a).forEach(r=>{y1(i,r)||i.push(r)}),i}function s6(a,c){return d3(c).filter(i=>!y1(a,i))}var N1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=z3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=V3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},F2=class extends N1{get formDirective(){return null}get path(){return null}},Q2=class extends N1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},S1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},O8={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},t7=Q(O({},O8),{"[class.ng-submitted]":"isSubmitted"}),z6=(()=>{let c=class c extends S1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(d(Q2,2))},c.\u0275dir=b({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&a1("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[_]});let a=c;return a})(),V6=(()=>{let c=class c extends S1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(d(F2,10))},c.\u0275dir=b({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&a1("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[_]});let a=c;return a})();var $2="VALID",b1="INVALID",P2="PENDING",Y2="DISABLED";function M6(a){return(P1(a)?a.validators:a)||null}function U8(a){return Array.isArray(a)?z3(a):a||null}function C6(a,c){return(P1(c)?c.asyncValidators:a)||null}function G8(a){return Array.isArray(a)?V3(a):a||null}function P1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function W8(a,c,i){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new J2(1e3,"");if(!e[i])throw new J2(1001,"")}function q8(a,c,i){a._forEachChild((e,r)=>{if(i[r]===void 0)throw new J2(1002,"")})}var w1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===$2}get invalid(){return this.status===b1}get pending(){return this.status==P2}get disabled(){return this.status===Y2}get enabled(){return this.status!==Y2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(r6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(r6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(s6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(s6(c,this._rawAsyncValidators))}hasValidator(c){return y1(this._rawValidators,c)}hasAsyncValidator(c){return y1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=P2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Y2,this.errors=null,this._forEachChild(e=>{e.disable(Q(O({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Q(O({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=$2,this._forEachChild(e=>{e.enable(Q(O({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(Q(O({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$2||this.status===P2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Y2:$2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=P2,this._hasOwnPendingAsyncValidator=!0;let i=u6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?Y2:this.errors?b1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P2)?P2:this._anyControlsHaveStatus(b1)?b1:$2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){P1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=U8(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=G8(this._rawAsyncValidators)}},k1=class extends w1{constructor(c,i,e){super(M6(i),C6(e,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,e={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){q8(this,!0,c),Object.keys(c).forEach(e=>{W8(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(e=>{let r=this.controls[e];r&&r.patchValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((e,r)=>{e.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,e)=>(c[e]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,e)=>e._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let e=this.controls[i];e&&c(e,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,e]of Object.entries(this.controls))if(this.contains(i)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,e,r)=>((e.enabled||this.disabled)&&(i[r]=e.value),i))}_reduceChildren(c,i){let e=c;return this._forEachChild((r,s)=>{e=i(e,r,s)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var M3=new g2("CallSetDisabledState",{providedIn:"root",factory:()=>C3}),C3="always";function j8(a,c){return[...c.path,a]}function g6(a,c,i=C3){L6(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),Y8(a,c),Q8(a,c),X8(a,c),$8(a,c)}function n6(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function $8(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function L6(a,c){let i=R8(a);c.validator!==null?a.setValidators(i6(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=I8(a);c.asyncValidator!==null?a.setAsyncValidators(i6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();n6(c._rawValidators,r),n6(c._rawAsyncValidators,r)}function Y8(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&x6(a,c)})}function X8(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&x6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function x6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function Q8(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function K8(a,c){a==null,L6(a,c)}function J8(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function Z8(a){return Object.getPrototypeOf(a.constructor)===p3}function c5(a,c){a._syncPendingControls(),c.forEach(i=>{let e=i.control;e.updateOn==="submit"&&e._pendingChange&&(i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function a5(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(s=>{s.constructor===D1?i=s:Z8(s)?e=s:r=s}),r||e||i||null}var e5={provide:F2,useExisting:o2(()=>g3)},X2=Promise.resolve(),g3=(()=>{let c=class c extends F2{constructor(e,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new G,this.form=new k1({},z3(e),V3(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){X2.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),g6(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){X2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){X2.then(()=>{let r=this._findContainer(e.path),s=new k1({});K8(s,e),r.registerControl(e.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){X2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){X2.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,c5(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}};c.\u0275fac=function(r){return new(r||c)(d(H3,10),d(h6,10),d(M3,8))},c.\u0275dir=b({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&y("submit",function(t){return s.onSubmit(t)})("reset",function(){return s.onReset()})},inputs:{options:[_2.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[d2([e5]),_]});let a=c;return a})();function t6(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function o6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var i5=class extends w1{constructor(c=null,i,e){super(M6(i),C6(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),P1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(o6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){t6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){t6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){o6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var r5={provide:Q2,useExisting:o2(()=>L3)},l6=Promise.resolve(),L3=(()=>{let c=class c extends Q2{constructor(e,r,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new i5,this._registered=!1,this.name="",this.update=new G,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=a5(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),J8(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){g6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){l6.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,s=r!==0&&E1(r);l6.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?j8(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(d(F2,9),d(H3,10),d(h6,10),d(A1,10),d(A3,8),d(M3,8))},c.\u0275dir=b({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[_2.None,"disabled","isDisabled"],model:[_2.None,"ngModel","model"],options:[_2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[d2([r5]),_,l2]});let a=c;return a})(),b6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=b({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var s5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=L2({type:c}),c.\u0275inj=C2({});let a=c;return a})();var n5={provide:A1,useExisting:o2(()=>F1),multi:!0};function y6(a,c){return a==null?`${c}`:(c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function t5(a){return a.split(":")[0]}var F1=(()=>{let c=class c extends p3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r=this._getOptionId(e),s=y6(r,e);this.setProperty("value",s)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){let r=t5(e);return this._optionMap.has(r)?this._optionMap.get(r):e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=x2(c)))(s||c)}})(),c.\u0275dir=b({type:c,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&y("change",function(t){return s.onChange(t.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[d2([n5]),_]});let a=c;return a})(),N6=(()=>{let c=class c{constructor(e,r,s){this._element=e,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(y6(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(d(h2),d(v2),d(F1,9))},c.\u0275dir=b({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})(),o5={provide:A1,useExisting:o2(()=>S6),multi:!0};function f6(a,c){return a==null?`${c}`:(typeof c=="string"&&(c=`'${c}'`),c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function l5(a){return a.split(":")[0]}var S6=(()=>{let c=class c extends p3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r;if(Array.isArray(e)){let s=e.map(n=>this._getOptionId(n));r=(n,t)=>{n._setSelected(s.indexOf(t.toString())>-1)}}else r=(s,n)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{let s=[],n=r.selectedOptions;if(n!==void 0){let t=n;for(let o=0;o<t.length;o++){let f=t[o],l=this._getOptionValue(f.value);s.push(l)}}else{let t=r.options;for(let o=0;o<t.length;o++){let f=t[o];if(f.selected){let l=this._getOptionValue(f.value);s.push(l)}}}this.value=s,e(s)}}_registerOption(e){let r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){let r=l5(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=x2(c)))(s||c)}})(),c.\u0275dir=b({type:c,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&y("change",function(t){return s.onChange(t.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[d2([o5]),_]});let a=c;return a})(),w6=(()=>{let c=class c{constructor(e,r,s){this._element=e,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(f6(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(f6(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(d(h2),d(v2),d(S6,9))},c.\u0275dir=b({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})();var f5=(()=>{let c=class c{constructor(){this._validator=e6}ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):e6,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=b({type:c,features:[l2]});let a=c;return a})();var m5={provide:H3,useExisting:o2(()=>x3),multi:!0};var x3=(()=>{let c=class c extends f5{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=E1,this.createValidator=e=>_8}enabled(e){return e}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=x2(c)))(s||c)}})(),c.\u0275dir=b({type:c,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&c1("required",s._enabled?"":null)},inputs:{required:"required"},features:[d2([m5]),_]});let a=c;return a})();var h5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=L2({type:c}),c.\u0275inj=C2({imports:[s5]});let a=c;return a})();var k6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:M3,useValue:e.callSetDisabledState??C3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=L2({type:c}),c.\u0275inj=C2({imports:[h5]});let a=c;return a})();var u5=["myInput"],d5=["myForm"],A6=(()=>{let c=class c{constructor(e,r,s){this.parent=e,this.service=r,this.httpService=s,this.faClose=Z4,this.isEdit=!1,this.closeForm=new G}onClick(e){e.target.className==="overlay"&&this.onCloseForm()}onCloseForm(){this.closeForm.emit(!1)}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>this.myInputField.nativeElement.focus(),0),setTimeout(()=>this.formTask.form.patchValue(this.taskSelected),0),setTimeout(()=>this.isEdit=this.service.isEditting,0)}handleAdd(e){this.obs=this.httpService.postMethod(e)}handleEdit(e){let r=this.taskSelected.id;this.obs=this.httpService.putMethod(r,e)}handleAddOrEdit(e){this.isEdit?this.handleEdit(e.value):this.handleAdd(e.value),this.obs.subscribe({next:r=>{console.log(`the response is: ${r}`),this.parent.callFetchData()},error:r=>{console.log(`there was an error!, ${r}`)},complete:()=>{console.log("the request is complete")}}),e.reset(),this.onCloseForm()}};c.\u0275fac=function(r){return new(r||c)(d(D2),d(A2),d(x1))},c.\u0275cmp=F({type:c,selectors:[["app-create-task"]],viewQuery:function(r,s){if(r&1&&(Z(u5,5),Z(d5,5)),r&2){let n;c2(n=a2())&&(s.myInputField=n.first),c2(n=a2())&&(s.formTask=n.first)}},hostBindings:function(r,s){r&1&&y("click",function(t){return s.onClick(t)},!1,w3)},inputs:{taskSelected:"taskSelected"},outputs:{closeForm:"closeForm"},standalone:!0,features:[E],decls:48,vars:4,consts:[[1,"overlay"],[1,"popup"],[1,"d-flex","justify-content-between","align-items-center"],[3,"icon","click"],[1,"form-group","d-flex","flex-column","gap-2","my-4",3,"ngSubmit"],["myForm","ngForm"],[1,"d-flex","flex-column","flex-md-row","gap-4"],[1,"w-50"],["placeholder","Task title...","type","text","name","title","required","","ngModel","",1,"form-control"],["myInput",""],[1,"w-50","align-self-end"],["id","priority","name","priority","required","","ngModel","",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","low"],["value","medium"],["value","high"],[1,"d-flex","gap-4","my-2"],["id","assignedTo","name","assignedTo","required","","ngModel","",1,"form-control"],["value","trainee"],["value","junior"],["value","senior"],["value","master"],["id","status","name","status","required","","ngModel","",1,"form-control"],["value","started"],["value","in-progress"],["value","complete"],["placeholder","Description...","name","description","required","","ngModel","",1,"form-control",2,"height","150px","resize","none"],["type","submit",1,"btn","btn-info","mt-3",3,"disabled"]],template:function(r,s){if(r&1){let n=b2();p(0,"div",0)(1,"section",1)(2,"div",2)(3,"h2"),z(4),u(),p(5,"fa-icon",3),y("click",function(){return s.onCloseForm()}),u()(),p(6,"form",4,5),y("ngSubmit",function(){f2(n);let o=T1(7);return m2(s.handleAddOrEdit(o))}),p(8,"div",6)(9,"div",7),u2(10,"input",8,9),u(),p(12,"div",10)(13,"select",11)(14,"option",12),z(15,"Priority Level"),u(),p(16,"option",13),z(17,"Low"),u(),p(18,"option",14),z(19,"Medium"),u(),p(20,"option",15),z(21,"High"),u()()()(),p(22,"div",16)(23,"div",7)(24,"select",17)(25,"option",12),z(26,"Assigned To"),u(),p(27,"option",18),z(28,"Trainee"),u(),p(29,"option",19),z(30,"Junior"),u(),p(31,"option",20),z(32,"Senior"),u(),p(33,"option",21),z(34,"Master"),u()()(),p(35,"div",7)(36,"select",22)(37,"option",12),z(38,"Status"),u(),p(39,"option",23),z(40,"Started"),u(),p(41,"option",24),z(42,"In-progress"),u(),p(43,"option",25),z(44,"Complete"),u()()()(),u2(45,"textarea",26),p(46,"button",27),z(47),u()()()()}if(r&2){let n=T1(7);x(4),W(s.isEdit?"Edit The Task":"Add New Task"),x(),T("icon",s.faClose),x(41),T("disabled",n.invalid),x(),W(s.isEdit?"Edit Task":"Add Task")}},dependencies:[k6,b6,N6,w6,D1,F1,z6,V6,x3,L3,g3,L1,g1],styles:[".overlay[_ngcontent-%COMP%]{display:grid;place-items:center;position:fixed;inset:0;background:#000000b3;z-index:1000}.overlay[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]{width:70%;padding:20px;background:#a3a3a3;border-radius:5px;position:relative}.overlay[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:8px 15px;border-radius:50%;cursor:pointer}.overlay[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover{background:#e7e6e6}.overlay[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#e7e6e6}.overlay[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   select.ng-invalid.ng-touched[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid #e44949}.overlay[_ngcontent-%COMP%]   input.ng-valid[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   select.ng-valid[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   textarea.ng-valid[_ngcontent-%COMP%]{border:2px solid #409940}"]});let a=c;return a})();var p5=["getComp"];function H5(a,c){if(a&1){let i=b2();p(0,"app-create-task",3),y("closeForm",function(){f2(i);let r=J();return m2(r.closeCreateTaskForm())}),u()}if(a&2){let i=J();T("taskSelected",i.selectedTask)}}var b3=(()=>{let c=class c{constructor(e){this.service=e,this.showCreateTaskForm=!1}ngOnInit(){}openCreateTaskForm(){this.showCreateTaskForm=!0,this.selectedTask={title:"",priority:"",assignedTo:"",status:"",description:""},this.service.onEdittingMode(!1)}closeCreateTaskForm(){this.showCreateTaskForm=!1}};c.\u0275fac=function(r){return new(r||c)(d(A2))},c.\u0275cmp=F({type:c,selectors:[["app-post-method"]],viewQuery:function(r,s){if(r&1&&Z(p5,5),r&2){let n;c2(n=a2())&&(s.getCom=n.first)}},inputs:{selectedTask:"selectedTask"},standalone:!0,features:[E],decls:4,vars:1,consts:[[1,"text-center","my-2"],[1,"btn","btn-primary","w-25",3,"click"],[3,"taskSelected"],[3,"taskSelected","closeForm"]],template:function(r,s){r&1&&(p(0,"div",0)(1,"button",1),y("click",function(){return s.openCreateTaskForm()}),z(2,"Create Task"),u()(),Z2(3,H5,1,1,"app-create-task",2)),r&2&&(x(3),e1(3,s.showCreateTaskForm?3:-1))},dependencies:[A6]});let a=c;return a})();var D2=(()=>{let c=class c{constructor(){this.title="httpMethods"}callFetchData(){this.getComp.fetchPosts()}showTaskForm(){return this.postComp.showCreateTaskForm=!0}onSelect(e){this.taskSelected=e}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=F({type:c,selectors:[["app-root"]],viewQuery:function(r,s){if(r&1&&(Z(u3,5),Z(b3,5)),r&2){let n;c2(n=a2())&&(s.getComp=n.first),c2(n=a2())&&(s.postComp=n.first)}},standalone:!0,features:[E],decls:7,vars:1,consts:[[1,"text-center","text-white","bg-dark","py-4"],[1,"container","d-flex","flex-column","gap-4"],[3,"selectedTask"],[3,"select"]],template:function(r,s){r&1&&(p(0,"h1",0),z(1,"Http Requests"),u(),p(2,"div",1)(3,"div"),u2(4,"app-post-method",2),u(),p(5,"div")(6,"app-get-method",3),y("select",function(t){return s.onSelect(t)}),u()()()),r&2&&(x(4),T("selectedTask",s.taskSelected))},dependencies:[i1,u3,b3],styles:["h1[_ngcontent-%COMP%]{position:fixed;left:0;top:0;right:0;z-index:999}.container[_ngcontent-%COMP%]{margin-top:150px}"]});let a=c;return a})();var D6=[];var P6={providers:[Y3(D6),j3(),U3(G3())]};var z5={providers:[$3()]},F6=R3(P6,z5);var V5=()=>W3(D2,F6),B7=V5;export{B7 as a};
