(function(t){function e(e){for(var s,i,o=e[0],c=e[1],d=e[2],u=0,m=[];u<o.length;u++)i=o[u],r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06ce":function(t,e,a){"use strict";var s=a("cd01"),r=a.n(s);r.a},"0b7e":function(t,e,a){},1082:function(t,e,a){},1145:function(t,e,a){"use strict";var s=a("13fe"),r=a.n(s);r.a},"13fe":function(t,e,a){},"1c96":function(t,e,a){"use strict";var s=a("4274"),r=a.n(s);r.a},"20c9":function(t,e,a){},"24cf":function(t,e,a){"use strict";var s=a("1082"),r=a.n(s);r.a},4274:function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("a481"),a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=(a("ac6a"),a("8c4f")),n=a("bc3a"),i=a.n(n),o=a("2ef0"),c=a.n(o),d=a("c1df"),l=a.n(d);window.Vue=s["a"],window._=c.a,window.axios=i.a,window.moment=l.a,s["a"].use(r["a"]),document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})});var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app",itemscope:"",itemtype:"http://schema.org/WebPage"}},[a("nav",{class:[t.showLoader?"hideNav navbar is-fixed-top":"showNav navbar is-fixed-top"],attrs:{itemscope:"",itemtype:"http://schema.org/SiteNavigationElement"}},[a("div",{staticClass:"burgerMenu",class:{open:t.burgerActive},attrs:{id:"mobile-nav-icon"},on:{click:t.toggleBurger}},[a("span"),a("span"),a("span")]),a("div",{attrs:{id:"appNavbar"}},[a("div",{staticClass:"appNavLink"},[a("router-link",{attrs:{to:"/",exact:"","data-hover":"TL;DR"}},[t._v("TL;DR")])],1),a("div",{staticClass:"appNavLink"},[a("router-link",{attrs:{to:"/about",exact:"","data-hover":"About"}},[t._v("About")])],1),a("a",{staticClass:"logoHolder",attrs:{href:"#",itemscope:"",itemtype:"http://schema.org/WPHeader"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 500",alt:"Dave Gillem Logo",id:"dgLogo",itemprop:"primaryImageOfPage"}},[a("path",{staticClass:"dgLogoGroup dgLogoPath",attrs:{d:"M201.7 163.3c13.9 9.5 29 16.6 45.3 21.4 0 1.6-2.3 4.3-7.8 5.2-31.2 5.2-27.8 121.9-1.5 240.7-40.6 39-33.4 32.4-56 53.8-1.1 1-12 11.5-13.6\n\t\t\t\t\t13-1.8.2-3.4-.7-3.3-2.8 0-1.3 7-6.5 6.1-7.3-15.1-13.7-45.1-26.8-78.9-26.8-26.5 0-55.3 8.1-81 30.3 29.7-48.3 64.6-63 96.1-63 40.8 0 75.9\n\t\t\t\t\t24.5 86.8 32.6 2.5-1.8 7.2-6.6 10.9-11.4-5.9-15.4-14.9-59.1-20.6-116.8.3 2.8-4.9 8.7-14.8 17.6-9.9 8.9-27.6 25.5-53.1 49.9-2.2\n\t\t\t\t\t0-3.3-1-3.3-2.9l7.7-11.4-4.8-3.8c-9.4-6.6-17.5-14-24.3-22.2-.4.2-.7.5-1.1.7-16.9 10.6-34.4 39.2-35.3 40.7-2.9 0-4.3-1-4.3-2.9 0-1.6 2.4-7.3\n\t\t\t\t\t7.2-17.1l-5.3-3.8C18.3 353.7 1 320.6 1 277.6c0-26.3 7.5-50.6 22.5-72.9 15-22.3 34.6-40.1 58.9-53.5-3.2-4.4-9.2-11.7-17.9-21.9-8.8-10.1-15.2-20-20.1-29.2C23.6\n\t\t\t\t\t61.4 44.5 18.2 69 1c-1.4 1.2-27.2 24.2-4.5 64.5 4.8 8.5 19.3 24.2 44 46.9 18.8 17.4 32.9 33.5 42.2 48.5 23-17 39-30.5 47.9-40.4l1.9\n\t\t\t\t\t2.9c-13.1 13.9-19.6 21.7-19.6 23.3 0 1.6 6.9 7.1 20.8 16.6M81.3 227.2c6.4-11.3 16.3-23.1 29.9-35.4-2.9-5.7-6.3-11.1-10.1-16.1-9.3-12.3-14.6-19.4-15.9-21.3-31.6 19.2-47.4\n\t\t\t\t\t54.4-47.4 105.4 0 26.2 5.7 46.6 17 61.2 7.4 9.6 15.5 16 24.2 19.3-8.7-16.7-13-36.1-13-58.2 0-18.3 5.1-36.6 15.3-54.9m99.6 96.7V199.4c0-1.9-4.9-6.2-14.8-13.1-1.6-1.1-3-2.1-4.4-3\n\t\t\t\t\t5.9 15.7 8.9 31.2 8.9 46.6 0 39-14.6 72.8-43.7 101.5 9 9.5 18.9 14.3 29.7 14.3 6.1 0 11.6-2.6 16.8-7.7 4.9-5 7.5-9.7 7.5-14.1m-62.7-3.6c6.4-14.9 9.6-32.5 9.6-52.8\n\t\t\t\t\t0-15.7-2.1-31.9-6.4-48.5-.6-2.3-1.3-4.6-2-6.8-7.9 16.1-11.9 36.2-11.9 60.2.1 19.8 3.7 35.8 10.7 47.9"}})])]),a("div",{staticClass:"appNavLink"},[a("router-link",{attrs:{to:"/resume",exact:"","data-hover":"Resume"}},[t._v("Resume")])],1),a("div",{staticClass:"appNavLink"},[a("router-link",{attrs:{to:"/contact",exact:"","data-hover":"Contact"}},[t._v("Contact")])],1),a("div",{staticClass:"appNavLink socialMenu"},[a("div",{staticClass:"has-dropdown is-hoverable"},[a("div",{staticClass:"navbar-dropdown is-boxed"},t._l(t.social,function(t){return a("social",{key:t.id,attrs:{itemdata:t}})}))])])])]),a("div",{staticClass:"content-wrapper",attrs:{id:"main-content",itemprop:"mainContentOfPage"}},[a("section",{staticClass:"section",class:{open:t.burgerActive}},[a("transition",{attrs:{name:"slide-fade",appear:""},on:{"after-leave":t.afterLeave,"before-enter":t.beforeEnter}},[this.$root.isLoading?a("div",{staticClass:"loading"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 500",id:"loadingLogo","enable-background":"new 0 0 93 78"}},[a("path",{staticClass:"dgLogoGroup dgLogoPath",staticStyle:{opacity:"1","stroke-dashoffset":"50px"},attrs:{stroke:"#e7e6e2","stroke-width":"2","stroke-linecap":"round","stroke-miterlimit":"10","stroke-dasharray":"2800 2800","stroke-dashoffset":"-50",opacity:"0",d:"M201.7 163.3c13.9 9.5 29 16.6 45.3 21.4 0 1.6-2.3 4.3-7.8 5.2-31.2 5.2-27.8 121.9-1.5 240.7-40.6 39-33.4\n\t\t\t\t\t\t\t32.4-56 53.8-1.1 1-12 11.5-13.6 13-1.8.2-3.4-.7-3.3-2.8 0-1.3 7-6.5 6.1-7.3-15.1-13.7-45.1-26.8-78.9-26.8-26.5\n\t\t\t\t\t\t\t0-55.3 8.1-81 30.3 29.7-48.3 64.6-63 96.1-63 40.8 0 75.9 24.5 86.8 32.6 2.5-1.8 7.2-6.6 10.9-11.4-5.9-15.4-14.9-59.1-20.6-116.8.3 2.8-4.9\n\t\t\t\t\t\t\t8.7-14.8 17.6-9.9 8.9-27.6 25.5-53.1 49.9-2.2 0-3.3-1-3.3-2.9l7.7-11.4-4.8-3.8c-9.4-6.6-17.5-14-24.3-22.2-.4.2-.7.5-1.1.7-16.9 10.6-34.4\n\t\t\t\t\t\t\t39.2-35.3 40.7-2.9 0-4.3-1-4.3-2.9 0-1.6 2.4-7.3 7.2-17.1l-5.3-3.8C18.3 353.7 1 320.6 1 277.6c0-26.3 7.5-50.6 22.5-72.9 15-22.3 34.6-40.1\n\t\t\t\t\t\t\t58.9-53.5-3.2-4.4-9.2-11.7-17.9-21.9-8.8-10.1-15.2-20-20.1-29.2C23.6 61.4 44.5 18.2 69 1c-1.4 1.2-27.2 24.2-4.5 64.5 4.8 8.5 19.3 24.2 44\n\t\t\t\t\t\t\t46.9 18.8 17.4 32.9 33.5 42.2 48.5 23-17 39-30.5 47.9-40.4l1.9 2.9c-13.1 13.9-19.6 21.7-19.6 23.3 0 1.6 6.9 7.1 20.8 16.6M81.3 227.2c6.4-11.3\n\t\t\t\t\t\t\t16.3-23.1 29.9-35.4-2.9-5.7-6.3-11.1-10.1-16.1-9.3-12.3-14.6-19.4-15.9-21.3-31.6 19.2-47.4 54.4-47.4 105.4 0 26.2 5.7 46.6 17 61.2 7.4 9.6 15.5\n\t\t\t\t\t\t\t16 24.2 19.3-8.7-16.7-13-36.1-13-58.2 0-18.3 5.1-36.6 15.3-54.9m99.6 96.7V199.4c0-1.9-4.9-6.2-14.8-13.1-1.6-1.1-3-2.1-4.4-3 5.9 15.7 8.9 31.2 8.9\n\t\t\t\t\t\t\t46.6 0 39-14.6 72.8-43.7 101.5 9 9.5 18.9 14.3 29.7 14.3 6.1 0 11.6-2.6 16.8-7.7 4.9-5 7.5-9.7 7.5-14.1m-62.7-3.6c6.4-14.9 9.6-32.5 9.6-52.8\n\t\t\t\t\t\t\t0-15.7-2.1-31.9-6.4-48.5-.6-2.3-1.3-4.6-2-6.8-7.9 16.1-11.9 36.2-11.9 60.2.1 19.8 3.7 35.8 10.7 47.9"}})])]):t._e()]),t.isLoaded?a("div",{class:[t.showLoader?"hideView":"showView"],attrs:{id:"routerWrapper"}},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("router-view")],1)],1):t._e(),t.isLoaded?a("div",{class:[t.showLoader?"hideView":"showView"],attrs:{id:"socialLinks"}},[a("ul",{staticClass:"social-networks square spin-icon"},t._l(t.social,function(e){return a("li",{key:e.id,attrs:{"data-dgtip":e.title.rendered}},[a("a",{staticClass:"icon",class:"icon-"+e.slug,attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title.rendered))])])}))]):t._e()],1),t.isLoaded?a("footer",{staticClass:"footer",attrs:{itemscope:"",itemtype:"http://schema.org/WPFooter"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v("\n\t\t\t\t\t\t© 1998 - "+t._s(t.currentYear)+" Dave Gillem . all rights reserved {build your own}.\n\t\t\t\t\t")])])])]):t._e()])])},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item nestedLink",class:"icon-menu-"+this.itemdata.slug,attrs:{href:this.itemdata.url,target:"_blank"}},[t._v("\n\t"+t._s(this.itemdata.title.rendered)+"\n")])},f=[],v={name:"social",data:function(){return{}},props:["itemdata"]},h=v,b=(a("06ce"),a("2877")),g=Object(b["a"])(h,p,f,!1,null,null,null);g.options.__file="Social.vue";var j=g.exports,_={name:"app",data:function(){return{currentYear:(new Date).getFullYear(),showLoader:!0,burgerActive:!1,isLoaded:!!this.$root.pages.social,social:this.$root.pages.social||[]}},props:{},methods:{toggleBurger:function(){this.burgerActive=!this.burgerActive},changeRoute:function(t){this.$root.isLoading=!0},afterLeave:function(t){this.showLoader=!1},beforeEnter:function(t){this.showLoader=!0},whichAnimationEvent:function(){var t,e=document.getElementById("loadingLogo"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in a)if(void 0!==e.style[t])return a[t]}},computed:{},watch:{$route:function(t,e){this.burgerActive=!1}},mounted:function(){var t=this.$root,e=document.getElementById("loadingLogo"),a=this.whichAnimationEvent();e.addEventListener(a,function(){t.loaderFinished()})},created:function(){var t=this;this.$bus.$on("dataLoaded",function(){t.social=t.$root.pages.social,t.isLoaded=!0})},components:{Social:j}},y=_,w=(a("1145"),Object(b["a"])(y,u,m,!1,null,null,null));w.options.__file="App.vue";var C=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoaded?a("div",{staticClass:"container",attrs:{id:"tldr",itemscope:"",itemtype:"http://schema.org/AboutPage"}},t._l(t.pages,function(e){return a("div",{key:e.id,staticClass:"box"},[a("h2",{staticClass:"title"},[t._v(t._s(e.title.rendered))]),a("div",{attrs:{id:"tldr-content"},domProps:{innerHTML:t._s(e.content.rendered)}})])})):t._e()},L=[],E={name:"Home",props:[],data:function(){return{isLoaded:!!this.$root.pages.home,pages:this.$root.pages.home||[]}},methods:{},created:function(){var t=this;this.$bus.$on("dataLoaded",function(){t.pages=t.$root.pages.home,t.isLoaded=!0})},computed:{}},$=E,x=(a("cccb"),Object(b["a"])($,k,L,!1,null,null,null));x.options.__file="Home.vue";var A=x.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoaded?a("div",{staticClass:"container",attrs:{id:"about",itemscope:"",itemtype:"http://schema.org/QAPage"}},t._l(t.pages,function(e){return a("div",{key:e.id,staticClass:"box"},[a("h2",{staticClass:"title"},[t._v(t._s(e.title.rendered))]),a("div",{attrs:{id:"about-content"},domProps:{innerHTML:t._s(e.content.rendered)}})])})):t._e()},D=[],M={name:"About",props:[],data:function(){return{isLoaded:!!this.$root.pages.about,pages:this.$root.pages.about||[]}},methods:{},created:function(){var t=this;this.$bus.$on("dataLoaded",function(){t.pages=t.$root.pages.about,t.isLoaded=!0})},computed:{}},P=M,z=(a("e76e"),Object(b["a"])(P,N,D,!1,null,null,null));z.options.__file="About.vue";var O=z.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoaded?a("div",{staticClass:"container accordionWrapper",attrs:{itemscope:"",itemtype:"http://schema.org/ProfilePage"}},[a("div",{attrs:{id:"summary"}},[a("input",{attrs:{id:"resumeSummary",name:"resumeAccordion",type:"radio",checked:""}}),a("label",{attrs:{for:"resumeSummary"}},[t._v(t._s(t.summary[0].title.rendered))]),a("article",{staticClass:"smallPane"},[a("p",{domProps:{innerHTML:t._s(t.summary[0].content.rendered)}})])]),a("div",{attrs:{id:"employerList"}},[a("input",{attrs:{id:"resumeEmployers",name:"resumeAccordion",type:"radio"}}),a("label",{attrs:{for:"resumeEmployers"}},[t._v("Employers")]),a("article",t._l(t.employers,function(t){return a("employer",{key:t.id,attrs:{itemdata:t}})}))]),a("div",{attrs:{id:"educationList"}},[a("input",{attrs:{id:"resumeEducation",name:"resumeAccordion",type:"radio"}}),a("label",{attrs:{for:"resumeEducation"}},[t._v("Education / Certifications")]),a("article",t._l(t.education,function(t){return a("education",{key:t.id,attrs:{itemdata:t}})}))]),a("div",{attrs:{id:"referenceList"}},[a("input",{attrs:{id:"resumeReferences",name:"resumeAccordion",type:"radio"}}),a("label",{attrs:{for:"resumeReferences"}},[t._v("References")]),a("article",t._l(t.references,function(t){return a("reference",{key:t.id,attrs:{itemdata:t}})}))])]):t._e()},S=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"employer",attrs:{itemprop:"employee",itemscope:"",itemtype:"http://schema.org/EmployeeRole"}},[a("div",{staticClass:"jobDates"},[a("span",{staticClass:"jobStart",attrs:{itemprop:"startDate","data-actualdate":this.itemdata.start_date}},[t._v("\n\t\t"+t._s(t._f("formatDate")(this.itemdata.start_date))+"\n\t\t")]),a("span",{staticClass:"jobEnd",attrs:{itemprop:"endDate","data-actualdate":this.itemdata.end_date}},[t._v("\n\t\t\t"+t._s(t.endDate)+"\n\t\t")])]),a("div",{staticClass:"jobPosition",attrs:{itemprop:"roleName"}},[t._v(t._s(this.itemdata.position))]),a("div",{staticClass:"jobEmployer",attrs:{itemprop:"name",itemscope:"",itemtype:"http://schema.org/Organization"}},[t._v(t._s(this.itemdata.title.rendered))]),a("div",{staticClass:"jobAddress",attrs:{itemprop:"address",itemscope:"",itemtype:"http://schema.org/Organization"}},[t._v(t._s(this.itemdata.location))]),a("div",{staticClass:"jobDescription",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(this.itemdata.content.rendered)}}),this.itemdata.additional?a("div",{staticClass:"jobAddl",attrs:{itemprop:"alternateName"}},[t._v("ADDITIONAL: "+t._s(this.itemdata.additional))]):t._e()])},q=[],I={name:"employer",data:function(){return{}},props:["itemdata"],computed:{endDate:function(){return"1"===this.itemdata.still_employed?"Present":Vue.options.filters.formatDate(this.itemdata.end_date)}}},B=I,W=(a("7328"),Object(b["a"])(B,T,q,!1,null,null,null));W.options.__file="Employer.vue";var H=W.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"education",class:"eduType-"+this.itemdata.course_type,attrs:{itemscope:"",itemtype:"http://schema.org/CourseInstance"}},[a("div",{staticClass:"eduDate",attrs:{itemprop:"endDate","data-actualdate":this.itemdata.completion}},[t._v(t._s(t._f("formatDate")(this.itemdata.completion,"true")))]),a("div",{staticClass:"eduEvent",attrs:{itemprop:"subEvent"}},[t._v(t._s(this.itemdata.title.rendered))]),a("div",{staticClass:"eduProvider",attrs:{itemprop:"organizer"}},[a("a",{attrs:{href:this.itemdata.location,target:"_blank"}},[t._v(t._s(this.itemdata.provider))]),this.itemdata.award?a("span",{staticClass:"eduAward",attrs:{itemprop:"award"}},[t._v(" - "+t._s(this.itemdata.award))]):t._e()]),a("div",{staticClass:"eduDescription",attrs:{itemprop:"about"},domProps:{innerHTML:t._s(this.itemdata.content.rendered)}})])},F=[],Y={name:"education",data:function(){return{}},props:["itemdata"]},G=Y,U=(a("1c96"),Object(b["a"])(G,V,F,!1,null,null,null));U.options.__file="Education.vue";var J=U.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reference",attrs:{itemprop:"review",itemscope:"",itemtype:"http://schema.org/CreativeWork"}},[a("div",{staticClass:"refDetails",attrs:{itemprop:"reviewBody"},domProps:{innerHTML:t._s(this.itemdata.content.rendered)}}),a("div",{staticClass:"refAuthor",attrs:{itemprop:"author"}},[t._v(t._s(this.itemdata.title.rendered))]),a("div",{staticClass:"refTitle",attrs:{itemprop:"reviewAspect"}},[t._v(t._s(this.itemdata.job_title))]),a("div",{staticClass:"refDate",attrs:{itemprop:"dateCreated","data-actualdate":"this.itemdata.date_provided"}},[t._v(t._s(t._f("humanizeDate")(this.itemdata.date_provided)))])])},K=[],X={name:"reference",data:function(){return{}},props:["itemdata"]},Z=X,tt=(a("aa91"),Object(b["a"])(Z,Q,K,!1,null,null,null));tt.options.__file="Reference.vue";var et=tt.exports,at={name:"Resume",props:[],data:function(){return{isLoaded:!!this.$root.pages.resume,summary:this.$root.pages.resume||[],employers:this.$root.pages.employers||[],education:this.$root.pages.education||[],references:this.$root.pages.references||[]}},methods:{},created:function(){var t=this;this.$bus.$on("dataLoaded",function(){t.summary=t.$root.pages.resume,t.employers=t.$root.pages.employers,t.education=t.$root.pages.education,t.references=t.$root.pages.references,t.isLoaded=!0})},computed:{},components:{Employer:H,Education:J,Reference:et}},st=at,rt=(a("24cf"),Object(b["a"])(st,R,S,!1,null,null,null));rt.options.__file="Resume.vue";var nt=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"contact-form",itemscope:"",itemtype:"http://schema.org/ContactPage"}},[t._m(0),a("form",{class:{submitted:t.formSubmitted,thankyou:!t.formSubmitted},attrs:{id:"contact-dg-form","accept-charset":"UTF-8",action:"https://usebasin.com/f/60d54aefd589",enctype:"multipart/form-data",method:"POST"},on:{submit:t.validateBeforeSubmit}},[a("div",{staticClass:"field"},[t._m(1),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"},{name:"validate",rawName:"v-validate",value:"required",expression:'"required"'}],staticClass:"input",class:{"is-danger":t.errors.has("contactName")},attrs:{type:"text",id:"contactName",name:"contactName",required:"",placeholder:"What do people call you?"},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("contactName"),expression:"errors.has('contactName')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("contactName")))])])]),a("div",{staticClass:"field"},[t._m(2),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactEmail,expression:"contactEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:'"required|email"'}],staticClass:"input",class:{"is-danger":t.errors.has("contactEmail")},attrs:{name:"contactEmail",id:"contactEmail",type:"email",required:"",placeholder:"Where do you get email?"},domProps:{value:t.contactEmail},on:{input:function(e){e.target.composing||(t.contactEmail=e.target.value)}}}),t._m(3),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("contactEmail"),expression:"errors.has('contactEmail')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("contactEmail")))])])]),a("div",{staticClass:"field"},[t._m(4),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactMsg,expression:"contactMsg"},{name:"validate",rawName:"v-validate",value:"required",expression:'"required"'}],staticClass:"textarea",class:{"is-danger":t.errors.has("contactMsg")},attrs:{name:"contactMsg",id:"contactMsg",required:"",placeholder:"What do you want me to know?"},domProps:{value:t.contactMsg},on:{input:function(e){e.target.composing||(t.contactMsg=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("contactMsg"),expression:"errors.has('contactMsg')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("contactMsg")))])])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link",attrs:{disabled:!t.isComplete}},[t._v("Submit")])]),t._m(5)])]),a("div",{class:{thankyou:t.formSubmitted,submitted:!t.formSubmitted}},[a("h2",[t._v("Thank you, I'll be in touch... maybe...")])])])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-buzzoff"},[t._v("Please "),a("strong",[t._v("don't contact me")]),t._v(" to sell or 'help me' with anything. I don't need your company to do my work, design my logos, be my 'partner,' or be my 'support team'. I also don't have the need to hire anyone for my freelance projects nor am I the person to contact for hiring at IBM.\nThank you!")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"label"},[t._v("Name"),a("span",{staticClass:"required"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"label"},[t._v("Email Address"),a("span",{staticClass:"required"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"label"},[t._v("Message"),a("span",{staticClass:"required"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("button",{staticClass:"button is-text"},[t._v("Cancel")])])}],ct={name:"Contact",props:[],data:function(){return{formSubmitted:!1,contactMsg:"",contactEmail:"",contactName:""}},computed:{isComplete:function(){return""!==this.contactMsg&&""!==this.contactEmail&&""!==this.contactName}},methods:{resetForm:function(){this.contactMsg="",this.contactEmail="",this.contactName=""},validateBeforeSubmit:function(t){var e=this;this.$validator.validateAll().then(function(a){return a?(e.formSubmitted=!0,!0):(t.preventDefault(),!1)})}},created:function(){}},dt=ct,lt=(a("fe4d"),Object(b["a"])(dt,it,ot,!1,null,null,null));lt.options.__file="Contact.vue";var ut=lt.exports,mt=new r["a"]({routes:[{path:"*",redirect:"/"},{path:"/",component:A,name:"home",props:{useREST:!0}},{path:"/about",component:O,name:"about",props:{useREST:!0}},{path:"/resume",component:nt,name:"resume",props:{useREST:!0}},{path:"/contact",component:ut,name:"contact",props:{}}],linkActiveClass:"is-active"}),pt=a("7bb1"),ft=(a("20c9"),new s["a"]),vt={custom:{contactName:{required:"Sorry I don't speak subliminal, you need an actual name here"},contactEmail:{required:"Pretty simple concept, where do you get your digital communications delivered??",email:"Dude, come on you know what an email address looks like!"},contactMsg:{required:"Did you forget why you were here?"}}};function ht(t){var e=/(\d{2})(\d{2})(\d{4})/;return new Date(t.replace(e,"$3-$1-$2"))}pt["a"].localize("en",vt),s["a"].use(pt["b"]),s["a"].config.productionTip=!1,s["a"].config.devtools=!0,Object.defineProperties(s["a"].prototype,{$bus:{get:function(){return ft}}}),s["a"].filter("humanizeDate",function(t){if(t){var e=ht(t);return l()(e).fromNow()}}),s["a"].filter("formatDate",function(t,e){if(t){var a="true"===e?ht(t):t;return l()(a).format("MM/DD/YYYY")}}),new s["a"]({router:mt,data:{firstRun:!0,dataReady:!1,isLoaded:!1,isLoading:!0,loaderComplete:!1,pages:{}},watch:{$route:"changeRoute"},methods:{changeRoute:function(t){var e=this.parseRouteData(t),a=e.name,s=e.props;!this.pages[a]&&s.useREST||this.firstRun?(this.firstRun=!1,this.getWordpressData()):this.dataLoaded()},parseRouteData:function(t){var e=t.matched[0],a={name:e.name,path:e.path,props:e.props.default||[]};return a},dataLoading:function(){this.isLoading=!0},dataLoaded:function(){this.$bus.$emit("dataLoaded"),this.dataReady=!0,this.setAppReady()},loaderFinished:function(){this.loaderComplete=!0,this.setAppReady()},setAppReady:function(){this.loaderComplete&&this.dataReady&&(this.isLoading=!1,document.getElementById("main-content").scrollTop=0)},getWordpressData:function(){var t="https://davegillem.com/data",e=this;function a(){return i.a.get("".concat(t,"/pages.json"))}function s(){return i.a.get("".concat(t,"/social-accounts.json"))}function r(){return i.a.get("".concat(t,"/employers.json"))}function n(){return i.a.get("".concat(t,"/education.json"))}function o(){return i.a.get("".concat(t,"/reference.json"))}i.a.all([a(),s(),r(),n(),o()]).then(i.a.spread(function(t,a,s,r,n){for(var i=0,o=t.data.length;i<o;i++){var c=t.data[i],d=c.slug;e.pages[d]=[c]}e.pages.social=a.data,e.pages.employers=s.data,e.pages.education=r.data,e.pages.references=n.data,e.dataLoaded()}))}},created:function(){this.changeRoute(this.$route)},render:function(t){return t(C)}}).$mount("#app")},"61b6":function(t,e,a){},7328:function(t,e,a){"use strict";var s=a("c124"),r=a.n(s);r.a},"8f59":function(t,e,a){},aa91:function(t,e,a){"use strict";var s=a("f20d"),r=a.n(s);r.a},c124:function(t,e,a){},cccb:function(t,e,a){"use strict";var s=a("8f59"),r=a.n(s);r.a},cd01:function(t,e,a){},e76e:function(t,e,a){"use strict";var s=a("0b7e"),r=a.n(s);r.a},f20d:function(t,e,a){},fe4d:function(t,e,a){"use strict";var s=a("61b6"),r=a.n(s);r.a}});
//# sourceMappingURL=app.605a5b5e.js.map