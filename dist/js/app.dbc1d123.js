(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d6fc54b0"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"e505616b"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1355:function(t,e,n){},"1d7d":function(t,e,n){"use strict";var a=n("377c"),r=n.n(a);r.a},"377c":function(t,e,n){},"510c":function(t,e,n){t.exports=n.p+"img/VariableLogo.8fffcc48.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{backgroundImage:"url('https://free4kwallpapers.com/uploads/originals/2018/08/24/brutalist-interior-wallpaper.jpg')",backgroundPosition:"center",backgroundSize:"cover"}},[n("AppBar"),n("v-main",[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",flat:"",color:"rgba(0,0,0,0)",dark:""}},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{staticClass:"text-none font-weight-light",attrs:{small:"",text:""}},[a("v-img",{staticClass:"mr-2",attrs:{src:n("510c"),width:"1.5rem"}}),a("span",[t._v("Variable")])],1)],1),a("v-spacer"),a("v-btn",{staticClass:"text-none font-weight-light",attrs:{small:"",text:"",target:"_blank",href:"https://www.linkedin.com/in/bak-sanou-61027b66/"}},[t._v(" Linked "),a("v-icon",{attrs:{small:""}},[t._v("mdi-linkedin")])],1)],1)},s=[],l={name:"AppBar",data:function(){return{}}},c=l,u=(n("1d7d"),n("2877")),p=n("6544"),f=n.n(p),d=n("40dc"),v=n("8336"),m=n("132d"),h=n("adda"),b=n("2fa4"),g=Object(u["a"])(c,i,s,!1,null,"6a60e003",null),y=g.exports;f()(g,{VAppBar:d["a"],VBtn:v["a"],VIcon:m["a"],VImg:h["a"],VSpacer:b["a"]});var w={name:"App",components:{AppBar:y},data:function(){return{}}},k=w,_=n("7496"),x=n("f6c4"),C=Object(u["a"])(k,r,o,!1,null,null,null),A=C.exports;f()(C,{VApp:_["a"],VMain:x["a"]});n("d3b7");var j=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},O=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-spacer",{staticClass:"my-3",class:{"xs-height":t.$vuetify.breakpoint.xs,"sm-height":t.$vuetify.breakpoint.sm,"md-height":t.$vuetify.breakpoint.md,"up-height":t.$vuetify.breakpoint.lgAndUp}})],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[n("h2",{staticClass:"font-weight-light white--text mb-3"},[n("span",[t._v("Hi")]),n("br"),n("span",[t._v("I make")])]),n("h1",{staticClass:"display-3 font-weight-bold white--text"},[n("span",[t._v("Variable software")])])])],1),n("v-row",[n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("v-btn",{staticClass:"white",attrs:{route:"",to:"/software"},on:{click:function(e){return t.logEvent()}}},[t._v("View my Apps")])],1)],1)],1)},V=[],S={name:"HelloWorld",data:function(){return{}},methods:{logEvent:function(){this.$analytics.logEvent("got a click!"),console.log("fix analytics logEvent")}},mounted:function(){this.$analytics.logEvent("got a visit!"),console.log("fix analytics logEvent")}},$=S,B=(n("7d5b"),n("62ad")),I=n("a523"),M=n("0fd9"),T=Object(u["a"])($,P,V,!1,null,null,null),H=T.exports;f()(T,{VBtn:v["a"],VCol:B["a"],VContainer:I["a"],VRow:M["a"],VSpacer:b["a"]});var L={name:"Home",components:{HelloWorld:H}},N=L,K=Object(u["a"])(N,E,O,!1,null,null,null),q=K.exports;a["a"].use(j["a"]);var W=[{path:"/",name:"Home",component:q},{path:"/overview",name:"Overview",component:function(){return n.e("about").then(n.bind(null,"2226"))}},{path:"/overview/privacypolicy",name:"OverviewPrivacyPolicy",component:function(){return n.e("about").then(n.bind(null,"7d6a"))}},{path:"/overview/premium",name:"OverviewPremium",component:function(){return n.e("about").then(n.bind(null,"07ce"))}},{path:"/software",name:"Software",component:function(){return n.e("about").then(n.bind(null,"e86f"))}}],Y=new j["a"]({routes:W,mode:"history"}),z=Y,D=n("f309");a["a"].use(D["a"]);var R=new D["a"]({}),U=n("260b"),G=(n("000b"),{apiKey:"AIzaSyAqqsdZKYKTtMkvyZKPb3pvMRhBPAAfNCc",authDomain:"overview-8d94f.firebaseapp.com",databaseURL:"https://overview-8d94f.firebaseio.com",projectId:"overview-8d94f",storageBucket:"overview-8d94f.appspot.com",messagingSenderId:"1003414123745",appId:"1:1003414123745:web:ad6351269f5717919673a0",measurementId:"G-YM69MGQYHP"});U["a"].initializeApp(G),U["a"].analytics(),a["a"].config.productionTip=!1,a["a"].prototype.$analytics=U["a"].analytics(),new a["a"]({router:z,vuetify:R,render:function(t){return t(A)}}).$mount("#app")},"7d5b":function(t,e,n){"use strict";var a=n("1355"),r=n.n(a);r.a}});
//# sourceMappingURL=app.dbc1d123.js.map