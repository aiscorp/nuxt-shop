(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,r){"use strict";r(8),r(65),r(9);var n=r(0),o=r(1),c=r(61),l=r(146),f=r(212);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(c.c)("phone",{validate:function(t){return 17===t.length},message:"Введите номер телефона полностью"}),Object.keys(l).forEach((function(t){Object(c.c)(t,v(v({},l[t]),{},{message:f.a[t]}))})),o.default.component("ValidationProvider",c.b),o.default.component("ValidationObserver",c.a)},147:function(t,e,r){"use strict";var n=r(1),o=r(213);n.default.use(o.a)},148:function(t,e,r){"use strict";var n=r(214),o=r(109);r(290);e.a=function(t){var e=t.store;t.req;Object(n.a)({key:"yourkey",paths:["shopBasket"],storage:{getItem:function(t){return o.get(t)},setItem:function(t,e){return o.set(t,e,{expires:365,secure:!1})},removeItem:function(t){return o.remove(t)}}})(e)}},186:function(t,e,r){var content=r(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("56b15182",content,!0,{sourceMap:!1})},187:function(t,e,r){var content=r(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("39c21438",content,!0,{sourceMap:!1})},188:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("7af2f798",content,!0,{sourceMap:!1})},189:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("3f139e16",content,!0,{sourceMap:!1})},216:function(t,e,r){"use strict";var n=r(0),o=r(20);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={methods:l({},Object(o.d)("shopBasket",["closeBasket"])),computed:l({},Object(o.c)("shopBasket",["isOpen"]))},d=(r(252),r(36)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("client-only",[r("transition",{attrs:{name:"overlay"}},[t.isOpen?r("div",{staticClass:"overlay",on:{click:t.closeBasket}}):t._e()]),t._v(" "),r("transition",{attrs:{name:"basket-container"}},[t.isOpen?r("Basket"):t._e()],1)],1),t._v(" "),r("VHeader"),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Basket:r(292).default,VHeader:r(293).default})},218:function(t,e,r){r(219),t.exports=r(220)},232:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;if(!t.params.id){var n=e.getters.getFirstItem.id;r("/item/".concat(n))}}},252:function(t,e,r){"use strict";r(186)},253:function(t,e,r){(e=r(50)(!1)).push([t.i,".overlay{left:0;min-width:100vw;opacity:.8;z-index:98}.basket-container,.overlay{position:absolute;top:0;min-height:100vh;background:#fff}.basket-container{right:0;width:460px;max-width:460px;box-shadow:-4px 0 16px rgba(0,0,0,.05);border-radius:8px 0 0 8px;z-index:99;box-sizing:border-box;padding:48px;max-height:360px;overflow-y:auto;overflow-x:hidden;display:grid;grid-template-rows:auto 1fr}.component-fade-enter-active,.component-fade-leave-active{transition:all .7s}.component-fade-enter,.component-fade-leave-to{opacity:0;transform:translateY(100px)}.overlay-enter-active,.overlay-leave-active{transition:all 1s}.overlay-enter,.overlay-leave-to{opacity:0}.basket-container-enter-active,.basket-container-leave-active{transition:all .5s}.basket-container-enter,.basket-container-leave-to{opacity:0;transform:translateX(350px)}",""]),t.exports=e},254:function(t,e,r){"use strict";r(187)},255:function(t,e,r){(e=r(50)(!1)).push([t.i,".overflow-block{overflow-y:hidden}.basket-enter-active,.basket-leave-active{transition:all .5s}.basket-enter,.basket-leave-to{opacity:0;transform:translateX(-150px)}",""]),t.exports=e},256:function(t,e,r){"use strict";r(188)},257:function(t,e,r){(e=r(50)(!1)).push([t.i,".input-group{display:grid;grid-row-gap:24px;row-gap:24px}.input-group input{display:block;height:50px;max-height:50px;width:100%;background:#f8f8f8;border-radius:8px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:16px;line-height:21px;padding-left:15px}.input-group input:-webkit-autofill{box-shadow:inset 0 0 0 30px #f8f8f8!important}.input-group h3{margin-top:32px;font-family:PT Sans;font-style:normal;font-weight:400;font-size:18px;line-height:23px;color:#59606d}.basket-input{position:relative}.basket-input span{position:absolute;bottom:-18px;left:16px;font-family:PT Sans;font-size:14px;color:red}",""]),t.exports=e},258:function(t,e,r){"use strict";r(189)},259:function(t,e,r){(e=r(50)(!1)).push([t.i,".basketIcon[data-v-62dd680c]{cursor:pointer}",""]),t.exports=e},260:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"actions",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"getters",(function(){return f}));r(104),r(59);var n=r(18),o=function(){return{items:[]}},c={nuxtServerInit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,e.$axios.$get("https://api.mockaroo.com/api/af756e80?count=100&key=beedb770");case 3:o=r.sent,n("setItems",o);case 5:case"end":return r.stop()}}),r)})))()}},l={setItems:function(t,e){t.items=e}},f={items:function(t){return t.items},getItemById:function(t){return function(e){return t.items.find((function(t){return t.id===e}))}},getFirstItem:function(t){return t.items.length?t.items[0]:void 0}}},261:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return f})),r.d(e,"actions",(function(){return d})),r.d(e,"mutations",(function(){return v})),r.d(e,"getters",(function(){return m}));r(3),r(15),r(26);var n=r(0),o=(r(59),r(18));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=function(){return{items:[],isOpen:!1,isOrdered:!1,customer:{name:"",email:"",phone:""}}},d={checkout:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,t.state;try{n("checkoutSuccess"),console.log("Заказ был сделан",e)}catch(t){console.log(t)}case 2:case"end":return r.stop()}}),r)})))()}},v={openBasket:function(t){t.isOpen=!0},closeBasket:function(t){t.isOpen=!1,!0===t.isOrdered&&(t.isOrdered=!1)},addItem:function(t,e){var r=l(l({},e),{},{id2:Math.random().toString(36).substr(2,9)});t.items.push(r)},deleteItem:function(t,e){t.items=t.items.filter((function(i){return i.id2!==e.id2}))},checkoutSuccess:function(t){t.items=[],t.isOrdered=!0}},m={items:function(s){return s.items},itemsCount:function(t){return t.items.length},isOpen:function(s){return s.isOpen},isNotEmpty:function(t){return 0!==t.items.length},isOrdered:function(s){return s.isOrdered},customer:function(s){return s.customer}}},292:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(20);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={methods:l({},Object(o.d)("shopBasket",["deleteItem","closeBasket","openBasket"])),computed:l({},Object(o.c)("shopBasket",["items","isOpen","isNotEmpty","isOrdered"])),mounted:function(){document.body.classList.add("overflow-block"),this.openBasket()},beforeDestroy:function(){document.body.classList.remove("overflow-block")}},d=(r(254),r(36)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basket-container"},[r("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[r("h2",[t._v("Корзина")]),t._v(" "),r("button",{staticClass:"btn btn-dark px-4 h-25",on:{click:t.closeBasket}},[t._v("\n      X\n    ")])]),t._v(" "),t.isNotEmpty||t.isOrdered?t._e():r("div",[r("p",[t._v("Пока что вы ничего не добавили в корзину")]),t._v(" "),r("button",{staticClass:"btn btn-dark",on:{click:t.closeBasket}},[t._v("\n      Закрыть корзину\n    ")])]),t._v(" "),t.isNotEmpty?r("div",{staticClass:"basket-notEmpty"},[r("h3",[t._v("Товары в корзине")]),t._v(" "),r("transition-group",{attrs:{name:"basket"}},t._l(t.items,(function(t){return r("BasketCard",{key:t.id2,attrs:{item:t}})})),1),t._v(" "),r("BasketInput")],1):t._e(),t._v(" "),t.isOrdered?r("div",[r("h2",[t._v("Заявка успешно отправлена")]),t._v(" "),r("h3",[t._v("Вскоре наш менеджер свяжется с Вами")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BasketCard:r(294).default,BasketInput:r(295).default})},293:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(20);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"VHeader",methods:l({},Object(o.d)("shopBasket",["openBasket"])),computed:l({},Object(o.c)("shopBasket",["itemsCount"]))},d=(r(258),r(36)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("\n      Nuxt Shop\n    ")]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("nuxt-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:"/"}},[t._v("\n          Home\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:"/About"}},[t._v("\n          About\n        ")]),t._v(" "),r("div",{staticClass:"basketIcon ml-2",on:{click:t.openBasket}},[r("b-avatar",{attrs:{badge:t.itemsCount?t.itemsCount.toString():null,"badge-top":"",variant:"primary","badge-variant":"warning",icon:"cart4"}})],1)],1)],1)],1)],1)}),[],!1,null,"62dd680c",null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(20);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:["item"],data:function(){return{color:"red"}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("shopBasket",["addItem","deleteItem"]))},f=r(36),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"my-2"},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://picsum.photos/id/183/150/120/?image=25",alt:"Image"}})],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-card-text",[r("h5",[t._v(t._s(t.item.price))]),t._v(" "),r("p",[t._v(t._s(t.item.car_make)+" "+t._s(t.item.car_model))]),t._v(" "),r("b-button",{attrs:{variant:"warning"},on:{click:function(e){return t.deleteItem(t.item)}}},[t._v("Удалить")])],1)],1)],1)],1)}),[],!1,null,"0440003e",null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);r(19);var n=r(0),o=r(20);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{name:"",phone:"",address:""}},methods:l(l({},Object(o.b)("shopBasket",["checkout"])),{},{testmet:function(){this.checkout({name:this.name,phone:this.phone,address:this.address})}})},d=(r(256),r(36)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group"},[r("h3",[t._v("Оформить заказ")]),t._v(" "),r("ValidationObserver",{staticClass:"input-group",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Имя",rules:"required|min:3"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{name:"name",placeholder:"Ваше имя",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(n[0]))])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Телефон",rules:"required|phone"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"mask",rawName:"v-mask",value:"+7(###) ###-##-##",expression:"'+7(###) ###-##-##'"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{name:"phone",placeholder:"+7(999) 999-99-99",type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(n[0]))])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{staticClass:"basket-input",attrs:{name:"Адрес",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{name:"address",placeholder:"Адрес",invalid:"address.valid",type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),r("span",[t._v(t._s(n[0]))])]}}],null,!0)}),t._v(" "),r("button",{staticClass:"btn btn-dark",on:{click:function(e){return n(t.testmet)}}},[t._v("\n      Отправить\n    ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}},[[218,6,1,7]]]);