(function(){"use strict";var e={927:function(e,t,n){var r=n(963),o=n(252);const a={id:"app"};function i(e,t,n,r,i,c){const u=(0,o.up)("Navbar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u),(0,o.Wm)(s,{class:"container"})])}const c={class:"navbar navbar-expand-lg navbar-dark bg-opacity-75"},u={class:"container"},s={class:"navbar-nav"},l={class:"nav-item"},d={class:"nav-item"};function f(e,t,n,r,a,i){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",u,[(0,o.Wm)(f,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Navbar")])),_:1}),(0,o._)("ul",s,[(0,o._)("li",l,[(0,o.Wm)(f,{class:"nav-link active",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",d,[(0,o.Wm)(f,{class:"nav-link",to:"/object"},{default:(0,o.w5)((()=>[(0,o.Uk)("Object")])),_:1})])])])])}var v={name:"Navbar"},p=n(744);const b=(0,p.Z)(v,[["render",f],["__scopeId","data-v-39bd4d01"]]);var m=b,h={components:{Navbar:m}};const g=(0,p.Z)(h,[["render",i]]);var y=g,k=n(201);const w=e=>((0,o.dD)("data-v-d1db8e86"),e=e(),(0,o.Cn)(),e),_=w((()=>(0,o._)("h2",{class:"text-center my-5"},"Home page",-1))),j=w((()=>(0,o._)("p",{class:"text-center text-secondary"}," The task was to create an Array of Objects ",-1))),O=w((()=>(0,o._)("p",{class:"text-center text-secondary"},[(0,o.Uk)(" with an ability to "),(0,o._)("strong",null,"edit"),(0,o.Uk)(" one particular object value ")],-1))),x={class:"text-center"};function C(e,t,n,r,a,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[_,j,O,(0,o._)("p",x,[(0,o.Uk)(" Let's check how it works, by clicking to the "),(0,o.Wm)(c,{to:"/object",class:"text-secondary"},{default:(0,o.w5)((()=>[(0,o.Uk)("object page")])),_:1})])])}var N={name:"HomeView",components:{}};const E=(0,p.Z)(N,[["render",C],["__scopeId","data-v-d1db8e86"]]);var T=E;const A=[{path:"/",name:"home",component:T},{path:"/object",name:"object",component:()=>n.e(443).then(n.bind(n,521))}],S=(0,k.p7)({history:(0,k.PO)("/Vue3_Object-edit/"),routes:A});var P=S,U=n(907),D=(0,U.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(y).use(D).use(P).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.3455ca02.js"}}(),function(){n.miniCssF=function(e){return"css/about.de9d3079.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="editing-object:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Vue3_Object-edit/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkediting_object"]=self["webpackChunkediting_object"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(927)}));r=n.O(r)})();
//# sourceMappingURL=app.98aec1c1.js.map