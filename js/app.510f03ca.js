(function(t){function s(s){for(var i,r,c=s[0],o=s[1],d=s[2],u=0,v=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(s);while(v.length)v.shift()();return n.push.apply(n,d||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,c=1;c<e.length;c++){var o=e[c];0!==a[o]&&(i=!1)}i&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var i={},a={app:0},n=[];function r(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)r.d(e,i,function(s){return t[s]}.bind(null,i));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/f2e-gsap/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var d=0;d<c.length;d++)s(c[d]);var l=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"00bb":function(t,s,e){t.exports=e.p+"img/question8.be1e424a.svg"},"0855":function(t,s,e){t.exports=e.p+"img/dashboard.9a45b0f6.svg"},"0979":function(t,s,e){},"0e21":function(t,s,e){t.exports=e.p+"img/titan_logo.f010ec9f.png"},"11c6":function(t,s,e){},"127c":function(t,s,e){t.exports=e.p+"img/clock.b9bf8395.svg"},1729:function(t,s,e){"use strict";e("0979")},"183b":function(t,s,e){t.exports=e.p+"img/question10.671ee093.svg"},"1e63":function(t,s,e){t.exports=e.p+"img/dot.ce02d27e.svg"},2186:function(t,s,e){t.exports=e.p+"img/code.d1334c7c.svg"},2452:function(t,s,e){t.exports=e.p+"img/question1.5108c0a0.svg"},2930:function(t,s,e){t.exports=e.p+"img/close.398972d4.svg"},"2b82":function(t,s,e){t.exports=e.p+"img/close-white.4baae641.svg"},"2ff6":function(t,s,e){},3128:function(t,s,e){"use strict";e("57a4")},"3a06":function(t,s,e){t.exports=e.p+"img/join-us.abb923ac.svg"},"3a2e":function(t,s,e){t.exports=e.p+"img/question7.bdcd99e6.svg"},"3d1c":function(t,s,e){},"467a":function(t,s,e){t.exports=e.p+"img/star-big.b056960b.svg"},"4d20":function(t,s,e){t.exports=e.p+"img/line.bcdc90e8.svg"},"4fba":function(t,s,e){t.exports=e.p+"img/clipboard.7b900cdc.svg"},"523e":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);var i=e("2b0e"),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("Navigation"),s("Content"),s("div",{staticClass:"footer"},[t._v("Copyright © 2022 HexSchool.All rights reserved.")])],1)},n=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"navigation"},[s("div",{staticClass:"left"},[s("img",{staticClass:"menu",attrs:{src:e("c8fa")},on:{click:function(s){t.menuVisible=!t.menuVisible}}}),s("img",{staticClass:"logo",attrs:{src:e("e347")}})]),t._m(0),s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible,expression:"menuVisible"}],staticClass:"mobile-menu"},[s("div",{staticClass:"menu-close"},[s("img",{attrs:{src:e("2b82")},on:{click:function(s){t.menuVisible=!1}}})]),s("button",{staticClass:"menu-btn"},[t._v("關卡資訊")]),s("button",{staticClass:"menu-btn"},[t._v("攻略資源")]),s("button",{staticClass:"menu-btn"},[t._v("求職專區")]),s("button",{staticClass:"login-btn"},[t._v("登入")])])])],1)},c=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"menu-btn"},[t._v("關卡資訊")]),s("button",{staticClass:"menu-btn"},[t._v("攻略資源")]),s("button",{staticClass:"menu-btn"},[t._v("求職專區")]),s("button",{staticClass:"login-btn"},[t._v("登入")])])}],o={name:"Navigation",data(){return{menuVisible:!1}},mounted(){window.addEventListener("resize",()=>{window.innerWidth>768&&this.menuVisible&&(this.menuVisible=!1)})}},d=o,l=(e("9f24"),e("2877")),u=Object(l["a"])(d,r,c,!1,null,"3fbe1454",null),v=u.exports,g=function(){var t=this,s=t._self._c;return s("div",{staticClass:"contenter"},[s("Banner"),s("Guide1"),s("Guide2"),s("Level"),s("Illustrate"),s("Award"),s("Question"),s("Sponsor")],1)},f=[],p=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"banner"},[s("div",{staticClass:"banner-animation"},[s("div",{staticClass:"banner-copywriting"},[s("img",{attrs:{id:"banner-4th",src:e("5f9a")}}),s("img",{attrs:{id:"banner-f2e",src:e("786d")}}),s("div",{attrs:{id:"banner-text"}},[t._v("互動式網頁設計")]),s("button",{staticClass:"signup-btn"},[t._v("立即報名")])]),s("img",{attrs:{id:"banner-code",src:e("2186")}}),s("img",{attrs:{id:"banner-dashboard",src:e("0855")}}),s("img",{attrs:{id:"banner-illustration-right",src:e("cf87")}}),s("img",{attrs:{id:"banner-illustration-left",src:e("f2ab")}})]),s("div",{staticClass:"join-us"},[s("img",{staticClass:"join-us__item",attrs:{src:e("3a06")}}),s("img",{staticClass:"join-us__item",attrs:{src:e("3a06")}})])])}],b={name:"Banner"},A=b,C=(e("985b"),Object(l["a"])(A,p,m,!1,null,"0e5364c4",null)),_=C.exports,B=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"guide"},[s("div",{staticClass:"guide-block block-1"},[s("img",{attrs:{id:"guide-rect1",src:e("8fb8")}}),s("img",{attrs:{id:"guide-star",src:e("b464")}}),s("img",{attrs:{id:"guide-text1",src:e("5b8b")}}),s("img",{attrs:{id:"guide-quest",src:e("2452")}})]),s("div",{staticClass:"guide-block block-2"},[s("img",{attrs:{id:"guide-surprise",src:e("87ea")}}),s("img",{attrs:{id:"guide-union1",src:e("00bb")}}),s("img",{attrs:{id:"guide-text2",src:e("183b")}})]),s("div",{staticClass:"guide-block block-3"},[s("img",{attrs:{id:"guide-text3",src:e("9c18")}}),s("img",{attrs:{id:"guide-rect2",src:e("a131")}}),s("img",{attrs:{id:"guide-triangle",src:e("3a2e")}}),s("img",{attrs:{id:"guide-union2",src:e("8562")}})])])}],E=e("cffa"),x=e("1dac"),Y={name:"Guide1",methods:{animated(t){E["a"].fromTo(t,{scale:0,opacity:0,visibility:"hidden"},{duration:1.5,scale:1,visibility:"visible",opacity:1,ease:"bounce.out",yoyo:!0,overwrite:"auto"})}},mounted(){const t=this;E["a"].registerPlugin(x["a"]),E["a"].utils.toArray(".guide-block").forEach(s=>{x["a"].create({trigger:s,onEnter:function(){t.animated(s)},onLeaveBack:function(){E["a"].set(s,{scale:0,opacity:0,visibility:"hidden"})}})})}},y=Y,w=(e("b0e8"),Object(l["a"])(y,B,h,!1,null,"0b168590",null)),G=w.exports,Q=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"guide"},[s("div",{staticClass:"guide-banner"},[s("div",{staticClass:"guide-bg"}),s("div",{staticClass:"guide-top-tape guide-tape"},[t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}})]),s("div",{staticClass:"guide-bottom-tape guide-tape"},[t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design "),s("img",{attrs:{src:e("1e63")}}),t._v(" Interactive web design ")]),s("div",{staticClass:"guide-ani"},[s("div",{staticClass:"guide-ani__items"},[s("img",{attrs:{id:"left-hand",src:e("dab5")}}),s("img",{attrs:{id:"right-hand",src:e("72b9")}}),s("img",{attrs:{id:"guide-title",src:e("69ff")}}),s("div",{attrs:{id:"guide-text"}},[s("span",[t._v("前端工程師")]),s("img",{attrs:{src:e("2930")}}),s("span",[t._v("UI設計師")])]),s("img",{attrs:{id:"ux-design",src:e("f2d4")}}),s("img",{attrs:{id:"frontend",src:e("eecf")}})])])])])}],T={name:"Guide2",methods:{tapeAni(){E["a"].fromTo(".guide-top-tape",{x:0},{x:"-710",duration:3,delay:1}),E["a"].fromTo(".guide-bottom-tape",{x:0},{x:"710",duration:3,delay:1})},timeline({isMobile:t}){const s=E["a"].timeline({scrollTrigger:{trigger:".guide-banner",start:"top 50%",end:t?"top 0%":"top 10%",scrub:!0}});s.fromTo("#guide-title, #guide-text",{scale:0,opacity:.3},{scale:1,opacity:1},"<").fromTo("#left-hand",{rotate:t?-120:60,xPercent:t?0:150,yPercent:t?-150:0,opacity:0},{rotate:t?-120:0,xPercent:0,yPercent:0,opacity:1},"<").fromTo("#right-hand",{rotate:-60,xPercent:t?0:-150,yPercent:t?150:0,opacity:0},{rotate:t?-60:0,xPercent:0,yPercent:0,opacity:1},"<").fromTo("#ux-design",{rotate:-180,yPercent:100,transformOrigin:"50% 50%"},{rotate:0,yPercent:0,transformOrigin:"50% 50%"},"<").fromTo("#frontend",{rotate:180,yPercent:-150,transformOrigin:"50% 50%"},{rotate:0,yPercent:0,transformOrigin:"50% 50%"},"<")}},mounted(){const t=this;E["a"].registerPlugin(x["a"]);let s=E["a"].matchMedia();s.add({isDesktop:"(min-width: 651px)",isMobile:"(max-width: 650px)"},s=>{t.timeline(s.conditions)}),x["a"].create({trigger:".guide-banner",start:"top 100%",end:"bottom 0%",onEnter:function(){t.tapeAni()},onLeaveBack:function(){E["a"].set(".guide-tape",{x:0})}})}},k=T,S=(e("5d14"),Object(l["a"])(k,Q,P,!1,null,"7944c9b1",null)),q=S.exports,O=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"level"},[s("div",{staticClass:"level-title"},[s("div",{staticClass:"level-title__text"},[t._v("年度最強合作 三大主題來襲")]),s("img",{attrs:{src:e("cf25")}})]),s("div",{staticClass:"level-desc"},[t._v(" 各路廠商強強聯手"),s("br"),t._v(" 共同設計出接地氣的網頁互動挑戰關卡 ")]),s("div",{staticClass:"level-card"},[s("div",{staticClass:"level-card__item"},[s("div",{staticClass:"front"},[t._v(" week 1 "),s("img",{attrs:{src:e("d3cc")}})]),s("div",{staticClass:"back"},[s("div",{staticClass:"card-tag"},[t._v("# 板塊設計")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-title"},[t._v("The F2E 活動網站設計")]),s("div",{staticClass:"card-subtitle"},[t._v("視覺滾動")]),s("img",{attrs:{src:e("bb61")}})]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer__week"},[t._v("Week 1")]),s("div",{staticClass:"card-footer__link"},[t._v(" 查看關卡細節 "),s("img",{attrs:{src:e("fb01")}})])])])]),s("div",{staticClass:"level-card__item"},[s("div",{staticClass:"front"},[t._v(" week 2 "),s("img",{attrs:{src:e("d3cc")}})]),s("div",{staticClass:"back"},[s("div",{staticClass:"card-tag"},[t._v("# 凱鈿行動科技")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-title"},[t._v("今晚，我想來點點簽")]),s("div",{staticClass:"card-subtitle"},[t._v("CANVAS")]),s("img",{attrs:{src:e("cf63")}})]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer__week"},[t._v("Week 2")]),s("div",{staticClass:"card-footer__link"},[t._v(" 查看關卡細節 "),s("img",{attrs:{src:e("fb01")}})])])])]),s("div",{staticClass:"level-card__item"},[s("div",{staticClass:"front"},[t._v(" week 3 "),s("img",{attrs:{src:e("d3cc")}})]),s("div",{staticClass:"back"},[s("div",{staticClass:"card-tag"},[t._v("# 鈦坦科技")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-title"},[t._v("Scrum 新手村")]),s("div",{staticClass:"card-subtitle"},[t._v("JS Draggable")]),s("img",{attrs:{src:e("8eca")}})]),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer__week"},[t._v("Week 3")]),s("div",{staticClass:"card-footer__link"},[t._v(" 查看關卡細節 "),s("img",{attrs:{src:e("fb01")}})])])])])])])}],I={name:"Level",methods:{animated(){E["a"].to(".level-title",{yPercent:0,opacity:1,duration:2,ease:"expo.out"}),E["a"].to(".level-desc",{yPercent:0,opacity:1,duration:2,ease:"expo.out"}),E["a"].to(".level-card__item",{yPercent:0,opacity:1,duration:2,stagger:{from:"end",each:.2},ease:"expo.out"}),E["a"].to(".front",{opacity:0,rotationY:-180,duration:2.5,delay:2,stagger:.8,ease:"expo.out"}),E["a"].to(".back",{opacity:1,rotationY:0,duration:2.5,delay:2,stagger:.8,ease:"expo.out"})},init(){E["a"].set(".level-title",{yPercent:-50,opacity:0}),E["a"].set(".level-desc",{yPercent:100,opacity:0}),E["a"].set(".level-card__item",{yPercent:100,opacity:0}),E["a"].set(".front",{opacity:1,rotationY:0}),E["a"].set(".back",{opacity:0,rotationY:-180})}},mounted(){let t=this;E["a"].registerPlugin(x["a"]),t.init(),x["a"].create({trigger:".level",start:"top 80%",onEnter:function(){t.animated()},onLeaveBack:function(){E["a"].set(".level-title",{yPercent:-50,opacity:0}),E["a"].set(".level-desc",{yPercent:100,opacity:0}),E["a"].set(".level-card__item",{yPercent:100,opacity:0})}})}},V=I,F=(e("9a13"),Object(l["a"])(V,O,L,!1,null,"1372584e",null)),j=F.exports,D=function(){var t=this;t._self._c;return t._m(0)},R=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"illustrate"},[s("div",{staticClass:"illustrate-title"},[s("img",{attrs:{src:e("c0ad")}}),s("span",[t._v("活動說明")]),s("img",{attrs:{src:e("e999")}})]),s("div",{staticClass:"illustrate-content"},[s("div",{staticClass:"illustrate-content__row"},[s("div",{staticClass:"illustrate-card"},[s("img",{attrs:{src:e("8771")}}),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-content__title"},[t._v("開放報名")]),s("div",{staticClass:"card-content__info"},[s("div",[s("span",[t._v("10/13")]),t._v("(四) 早上 11:00")]),s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e("b6f6")}})]),s("div",[s("span",[t._v("10/30")]),t._v("(日) 晚上 23:59")]),s("div",[t._v("截止前可修改報名組別")])])])]),s("img",{staticClass:"illustrate-content__arrow",attrs:{src:e("df3e")}}),s("div",{staticClass:"illustrate-card reverse"},[s("img",{attrs:{src:e("127c")}}),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-content__title"},[t._v("各組別開賽")]),s("div",{staticClass:"card-content__info"},[s("div",[s("span",[t._v("10/31")]),t._v("UI組、團體組開賽")]),s("div",[s("span",[t._v("11/07")]),t._v("前端組開賽")]),s("div",[t._v("前端工程師可採用 UI 設計師的設計稿產出完整作品")])])])]),s("img",{staticClass:"illustrate-content__arrow down",attrs:{src:e("df3e")}})]),s("div",{staticClass:"illustrate-content__row"},[s("div",{staticClass:"illustrate-card"},[s("img",{attrs:{src:e("ad34")}}),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-content__title"},[t._v("登錄作品")]),s("div",{staticClass:"card-content__info"},[s("div",[s("span",[t._v("10/31")]),t._v("(一) 中午 12:00")]),s("div",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e("b6f6")}})]),s("div",[s("span",[t._v("11/28")]),t._v("(一) 中午 12:00")]),s("div",[t._v("依賽程登錄作品")])])])]),s("img",{staticClass:"illustrate-content__arrow left",attrs:{src:e("df3e")}}),s("div",{staticClass:"illustrate-card reverse"},[s("img",{attrs:{src:e("ba80")}}),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-content__title"},[t._v("線上直播")]),s("div",{staticClass:"card-content__info"},[s("div",[s("span",[t._v("11/03 - 11/24")]),t._v("每週四")])])])])])])])}],W={name:"Illustrate",methods:{animated(){E["a"].to(".illustrate-title, .illustrate-content",{yPercent:0,opacity:1,duration:3,ease:"expo.out"})},reset(){E["a"].set(".illustrate-title, .illustrate-content",{yPercent:50,opacity:0})}},mounted(){let t=this;E["a"].registerPlugin(x["a"]),t.reset(),x["a"].create({trigger:".illustrate",start:"top 80%",onEnter:function(){t.animated()},onLeaveBack:function(){t.reset()}})}},J=W,H=(e("76aa"),Object(l["a"])(J,D,R,!1,null,"0d594163",null)),N=H.exports,z=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"award"},[s("div",{staticClass:"award-title"},[s("div",{staticClass:"award-title__first"},[t._v("區區修煉已經無法滿足了嗎？")]),s("div",{staticClass:"award-title__last"},[t._v("還有比賽等著你！")])]),s("div",{staticClass:"award-racing"},[s("img",{attrs:{id:"flag",src:e("ffe0")}}),s("img",{attrs:{id:"line",src:e("4d20"),width:"100%"}}),s("img",{attrs:{id:"car",src:e("8307")}})]),s("div",{staticClass:"award-content"},[s("div",{staticClass:"award-content__card"},[s("div",{staticClass:"award-content__card--inside"},[s("img",{attrs:{src:e("4fba")}}),s("div",{staticClass:"card-title"},[t._v("評審機制")]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"subtitle"},[t._v("初選：")]),t._v(" 將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。 "),s("div",{staticClass:"subtitle"},[t._v("決選：")]),t._v(" 由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單 ")])])]),s("div",{staticClass:"award-content__card"},[s("div",{staticClass:"award-content__card--inside"},[s("img",{attrs:{src:e("d023")}}),s("div",{staticClass:"card-title"},[t._v("獎金")]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"text"},[s("div",{staticClass:"inline-title"},[t._v("初選佳作：")]),s("div",[t._v(" 共六十位 "),s("span",{staticClass:"tag"},[t._v("數位獎狀")])])]),s("div",{staticClass:"desc"},[t._v("每週主題個人組十位、團體組十組")]),s("div",{staticClass:"text"},[s("div",{staticClass:"inline-title"},[t._v("個人企業獎：")]),s("div",[t._v(" 共六位 "),s("span",{staticClass:"tag"},[t._v("NTD 3,000/位")])])]),s("div",{staticClass:"desc"},[t._v("每週主題各 2 名，設計 1 位、前端 1 位")]),s("div",{staticClass:"text"},[s("div",{staticClass:"inline-title"},[t._v("團體企業獎：")]),s("div",[t._v(" 共三組 "),s("span",{staticClass:"tag"},[t._v("NTD 10,000/組")])])]),s("div",{staticClass:"desc"},[t._v("每週主題各 1 組")]),s("div",{staticStyle:{"padding-top":"16px"}},[t._v("以上皆提供完賽數位獎狀")])])])])])])}],X={name:"Award",methods:{animated(){var t=E["a"].timeline();t.to(".award-title, .award-content",{yPercent:0,opacity:1,duration:1,ease:"expo.out"}).to(".award-racing",{opacity:1,duration:1},"<").to(".award-title__last",{opacity:1,duration:1}).to("#car",{x:function(){const t=document.getElementById("flag").getBoundingClientRect(),s=document.getElementById("line").getBoundingClientRect(),e=document.getElementById("car").getBoundingClientRect();return t.left+2*t.width/3-(s.right-e.width)},duration:1}).to("#flag",{y:-5,rotation:-30,duration:.5,transformOrigin:"left center"})},reset(){E["a"].set("#car",{x:0}),E["a"].set("#flag",{rotation:0,y:0}),E["a"].set(".award-title__last, .award-racing",{opacity:0}),E["a"].set(".award-title, .award-content",{yPercent:50,opacity:0})}},mounted(){let t=this;E["a"].registerPlugin(x["a"]),t.reset(),x["a"].create({trigger:".award",start:"top 80%",onEnter:function(){t.animated()},onLeaveBack:function(){t.reset()}})}},K=X,Z=(e("6edb"),Object(l["a"])(K,z,U,!1,null,"e51cb02e",null)),M=Z.exports,$=function(){var t=this,s=t._self._c;return s("div",{staticClass:"question"},[s("div",{staticClass:"question-title"},[t._v("Q&A")]),s("div",{staticClass:"question-tab btn-wrapper"},t._l(t.tabs,(function(e){return s("button",{key:e.value,staticClass:"menu-btn",class:{active:t.avtiveTab===e.value},on:{click:function(s){return t.onChangeTab(e.value)}}},[t._v(" "+t._s(e.text)+" ")])})),0),s("transition-group",{staticClass:"question-card",attrs:{tag:"div",name:"fade"}},t._l(t.list,(function(e,i){return s("div",{key:e.q},[s("div",{staticClass:"question-card__number"},[t._v("Q"+t._s(i+1))]),s("div",[s("div",{staticClass:"question-card__title"},[t._v(t._s(e.q))]),s("div",{staticClass:"question-card__text"},[t._v(t._s(e.a))])])])})),0),s("button",{staticClass:"signup-btn"},[t._v("立即報名")])],1)},tt=[],st={common:[{q:"如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？",a:"可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。"},{q:"大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作業",a:"這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。"},{q:"我不確定自己的版型有沒有符合過關門檻，要寫到什麼程度才有過關門檻？",a:"主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。"},{q:"我已經寫到一半了，但時間快來不及，可以先投稿嗎？",a:"可以，有投稿表示你還會持續努力在這次活動上。"}],ui:[{q:"到時候投稿的平台是提供什麼呢？我也不像是工程師可以有Codepen 上傳",a:"其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。"},{q:"投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？",a:"會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。"},{q:"一定要上傳「線上標示文件」嗎？",a:"是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。"},{q:"不能使用 PS、Illustrator 設計嗎？",a:"只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。"},{q:"當每週一題目出來後，我有一些設計進度也可以先投稿嗎？",a:"可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。"}],frontend:[{q:"我可以不依照設計稿，自己做版面嗎？因為我自己想多練習js / 後端",a:"可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。"},{q:"前端介面一定要長得一模一樣嗎？",a:"不用，依照自己的想法來開發也可以"},{q:"有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好",a:"這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。"},{q:"那我只想要練習 JS，HTML / CSS 我用陽春版，不依照設計稿開發可以嗎？",a:"只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。"},{q:"當每週一題目出來後，我有一些設計進度也可以先投稿嗎？",a:"可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。"}],team:[{q:"請問團體組最多幾人？",a:"最多 4 人，投稿作品時請派一位組長來投稿即可。"},{q:"我對獎項有興趣，可以只做第三道主題就好嗎？",a:"可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。"},{q:"那團體第三道主題最晚投稿期限為？",a:"團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。"},{q:"我們團體組比較想做手機 APP ，可以投稿並符合並符合評審門檻嗎？",a:"您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。"},{q:"請問除了前端開發、 UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？",a:"可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。"},{q:"團體組的 UI 設計稿，可以讓『個人組 - 前端工程師』組別採用嗎？",a:"不能，預設是不能讓『個人組-前端工程師』採用。"}]},et={name:"Question",computed:{list(){return st[this.avtiveTab]}},data(){return{tabs:[{text:"常見問題",value:"common"},{text:"UI 設計師常見問題",value:"ui"},{text:"前端工程師常見問題",value:"frontend"},{text:"團體組常見問題",value:"team"}],avtiveTab:"common"}},methods:{onChangeTab(t){this.avtiveTab=t}}},it=et,at=(e("1729"),Object(l["a"])(it,$,tt,!1,null,"46176081",null)),nt=at.exports,rt=function(){var t=this;t._self._c;return t._m(0)},ct=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sponsor"},[s("div",{staticClass:"sponsor-title"},[s("img",{attrs:{id:"star-big",src:e("467a")}}),t._v(" sponsors "),s("img",{attrs:{id:"star-small",src:e("76ac")}})]),s("div",{staticClass:"sponsor-subtitle"},[t._v("鑽石級贊助商")]),s("div",{staticClass:"logo-wrapper"},[s("div",{staticClass:"logo-border"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e("904f")}})])]),s("div",{staticClass:"logo-border"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e("f375")}})])]),s("div",{staticClass:"logo-border"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:e("0e21")}})])])])])}],ot={name:"Sponsor"},dt=ot,lt=(e("9149"),Object(l["a"])(dt,rt,ct,!1,null,"c185bb02",null)),ut=lt.exports,vt={name:"Content",components:{Banner:_,Guide1:G,Guide2:q,Level:j,Illustrate:N,Award:M,Question:nt,Sponsor:ut}},gt=vt,ft=(e("a325"),Object(l["a"])(gt,g,f,!1,null,"2f53c04e",null)),pt=ft.exports,mt={name:"App",components:{Navigation:v,Content:pt},methods:{setVh(){const t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")}},created(){this.setVh(),window.addEventListener("resize",this.setVh)},beforeDestroy(){window.removeEventListener("resize",this.setVh)}},bt=mt,At=(e("3128"),Object(l["a"])(bt,a,n,!1,null,"1c6e814b",null)),Ct=At.exports;e("b751");i["a"].config.productionTip=!1,new i["a"]({render:t=>t(Ct)}).$mount("#app")},"57a4":function(t,s,e){},"5b8b":function(t,s,e){t.exports=e.p+"img/question9.0dde1b4c.svg"},"5d14":function(t,s,e){"use strict";e("e8b7")},"5f9a":function(t,s,e){t.exports=e.p+"img/4th.d0db511d.svg"},"69ff":function(t,s,e){t.exports=e.p+"img/guide-title.d83b1e17.svg"},"6edb":function(t,s,e){"use strict";e("d793")},"72b9":function(t,s,e){t.exports=e.p+"img/right-hand.363272d0.svg"},7335:function(t,s,e){},"76aa":function(t,s,e){"use strict";e("2ff6")},"76ac":function(t,s,e){t.exports=e.p+"img/star-small.de174bf6.svg"},"786d":function(t,s,e){t.exports=e.p+"img/the-f2e.ccbc2517.svg"},8307:function(t,s,e){t.exports=e.p+"img/car.7ece6f8b.svg"},8562:function(t,s,e){t.exports=e.p+"img/question3.207c1d66.svg"},8771:function(t,s,e){t.exports=e.p+"img/signup.f5eac938.svg"},"87ea":function(t,s,e){t.exports=e.p+"img/question2.b0810509.svg"},"8e10":function(t,s,e){},"8eca":function(t,s,e){t.exports=e.p+"img/exchange.f3a3c405.svg"},"8fb8":function(t,s,e){t.exports=e.p+"img/question5.f7b4779d.svg"},"904f":function(t,s,e){t.exports=e.p+"img/blockstudio_logo.048787b7.png"},9149:function(t,s,e){"use strict";e("3d1c")},"985b":function(t,s,e){"use strict";e("a25c")},"9a13":function(t,s,e){"use strict";e("523e")},"9c18":function(t,s,e){t.exports=e.p+"img/question11.4f8f9246.svg"},"9f24":function(t,s,e){"use strict";e("7335")},a131:function(t,s,e){t.exports=e.p+"img/question4.a3d8e9ff.svg"},a25c:function(t,s,e){},a325:function(t,s,e){"use strict";e("8e10")},ad34:function(t,s,e){t.exports=e.p+"img/upload.cdfbbd60.svg"},b0e8:function(t,s,e){"use strict";e("11c6")},b464:function(t,s,e){t.exports=e.p+"img/question6.20fe51b0.svg"},b6f6:function(t,s,e){t.exports=e.p+"img/break.8862ac00.svg"},b751:function(t,s,e){},ba80:function(t,s,e){t.exports=e.p+"img/stream.ffc4af0d.svg"},bb61:function(t,s,e){t.exports=e.p+"img/card-dashboard.b8a9b571.svg"},c0ad:function(t,s,e){t.exports=e.p+"img/illustrate-title1.9a5df18c.svg"},c8fa:function(t,s,e){t.exports=e.p+"img/menu.b631f3ad.svg"},cf25:function(t,s,e){t.exports=e.p+"img/lightning.9613dfb2.svg"},cf63:function(t,s,e){t.exports=e.p+"img/phone.47d2adfc.svg"},cf87:function(t,s,e){t.exports=e.p+"img/illustration1.c6c85af0.svg"},d023:function(t,s,e){t.exports=e.p+"img/coin.e6425ba7.svg"},d3cc:function(t,s,e){t.exports=e.p+"img/lock.b86be5dd.svg"},d793:function(t,s,e){},dab5:function(t,s,e){t.exports=e.p+"img/left-hand.8d55a5b3.svg"},df3e:function(t,s,e){t.exports=e.p+"img/carot.234a3022.svg"},e347:function(t,s,e){t.exports=e.p+"img/logo.67dda900.svg"},e8b7:function(t,s,e){},e999:function(t,s,e){t.exports=e.p+"img/illustrate-title2.8d23cd4c.svg"},eecf:function(t,s,e){t.exports=e.p+"img/f2e.b02c1251.svg"},f2ab:function(t,s,e){t.exports=e.p+"img/illustration2.d4e94b93.svg"},f2d4:function(t,s,e){t.exports=e.p+"img/ux-design.c406cc03.svg"},f375:function(t,s){t.exports="data:image/png;base64,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"},fb01:function(t,s,e){t.exports=e.p+"img/right-top-arrow.f91732bf.svg"},ffe0:function(t,s,e){t.exports=e.p+"img/flag.72042e1f.svg"}});
//# sourceMappingURL=app.510f03ca.js.map