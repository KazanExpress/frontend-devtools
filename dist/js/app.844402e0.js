(function(e){function t(t){for(var o,n,i=t[0],r=t[1],c=t[2],C=0,v=[];C<i.length;C++)n=i[C],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(v.length)v.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],o=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(o=!1)}o&&(l.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},s={app:0},l=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"04da":function(e,t,a){"use strict";a("245a")},"0b04":function(e,t,a){"use strict";a("2ba8")},"245a":function(e,t,a){},"2ba8":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"app"},[t("KeDevtools",{attrs:{items:e.devtoolsItems,"local-storage-key":"ke-devtools-example"},on:{init:e.onInit,change:e.onChange},scopedSlots:e._u([{key:"item-example-save",fn:function({active:a}){return[t("span",{staticClass:"example",class:{active:a}},[e._v("save local")])]}},{key:"item-example-not-save",fn:function(){return[t("span",{staticClass:"example"},[e._v("not save local")])]},proxy:!0},{key:"item-default-active-true",fn:function({active:a}){return[t("span",{staticClass:"example",class:{active:a}},[e._v(" default active true ")])]}}])}),t("div",{staticClass:"content"},[e._v(" example content "),e.isVisibleSaveContent?t("div",{staticClass:"content"},[e._v(" content if save flag true ")]):e._e()])],1)},l=[],n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"ke-devtools"},[e._t("before"),t("div",{staticClass:"ke-devtools-panel",class:{active:e.isShowDevtools}},[t("div",{staticClass:"ke-devtools-panel-activator-wrapper",on:{click:e.toggleShowDevtools}},[t("svg",{staticClass:"ke-devtools-panel-activator-button",attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{staticClass:"gear",attrs:{fill:"#fff","fill-opacity":"0.3",d:"M15.0431 25.3739C14.7518 25.3956 14.4786 25.4159 14.1953 25.4159C13.8909 25.4159 13.6082 25.3942 13.3159 25.3717L13.2812 25.369L12.6016 26.6463C12.4609 26.9159 12.2148 27.0448 11.8984 27.0096C11.6055 26.951 11.3945 26.7284 11.3594 26.4237L11.1484 25.0057C10.5625 24.8416 10 24.619 9.4375 24.3846L8.38281 25.3338C8.16016 25.5448 7.87891 25.5799 7.58594 25.4276C7.32812 25.2752 7.22266 25.0057 7.28125 24.6893L7.57422 23.2948C7.09375 22.9549 6.60156 22.5682 6.16797 22.1346L4.86719 22.6737C4.57422 22.8026 4.30469 22.7323 4.08203 22.4744C3.88281 22.2518 3.85938 21.9588 4.02344 21.6893L4.78516 20.4705C4.44531 19.9901 4.15234 19.451 3.88281 18.8885L2.45312 18.9588C2.14844 18.9823 1.89062 18.8065 1.78516 18.5252C1.70312 18.2205 1.78516 17.9393 2.01953 17.7635L3.14453 16.8729C2.99219 16.2987 2.875 15.701 2.83984 15.0682L1.46875 14.6346C1.16406 14.5409 1 14.3182 1 14.0018C1 13.6854 1.16406 13.4627 1.46875 13.3573L2.83984 12.9237C2.875 12.3026 2.99219 11.7166 3.14453 11.1307L2.01953 10.2401C1.78516 10.0526 1.69141 9.78304 1.78516 9.49007C1.89062 9.20882 2.14844 9.03304 2.45312 9.05648L3.88281 9.10335C4.15234 8.54085 4.44531 8.02523 4.78516 7.52132L4.02344 6.30257C3.85938 6.05648 3.88281 5.76351 4.08203 5.54085C4.30469 5.28304 4.57422 5.22444 4.86719 5.34163L6.16797 5.86898C6.60156 5.4471 7.09375 5.04866 7.57422 4.70882L7.28125 3.32601C7.21094 2.99788 7.32812 2.72835 7.58594 2.58773C7.87891 2.43538 8.16016 2.45882 8.38281 2.68148L9.4375 3.61898C10 3.36116 10.5625 3.17366 11.1484 2.99788L11.3594 1.59163C11.3945 1.28694 11.6055 1.06429 11.8984 1.00569C12.2148 0.970538 12.4727 1.09944 12.6016 1.35726L13.2812 2.6346C13.5977 2.61116 13.8789 2.59944 14.1953 2.59944C14.5 2.59944 14.793 2.61116 15.1094 2.6346L15.7773 1.35726C15.9062 1.09944 16.1641 0.970538 16.4805 1.00569C16.7734 1.06429 16.9844 1.28694 17.0312 1.59163L17.2305 2.99788C17.8164 3.17366 18.3906 3.37288 18.9414 3.61898L19.9961 2.68148C20.2188 2.45882 20.5 2.42366 20.793 2.58773C21.0508 2.72835 21.168 2.99788 21.0977 3.32601L20.8047 4.70882C21.2969 5.04866 21.7773 5.4471 22.2109 5.86898L23.5117 5.34163C23.8047 5.22444 24.0859 5.28304 24.3086 5.54085C24.4961 5.76351 24.5195 6.05648 24.3555 6.30257L23.5938 7.52132C23.9453 8.02523 24.2266 8.54085 24.4961 9.10335L25.9375 9.05648C26.2422 9.03304 26.4883 9.20882 26.5938 9.49007C26.6875 9.78304 26.5938 10.0526 26.3594 10.2401L25.2344 11.1307C25.3867 11.7166 25.5039 12.3026 25.5625 12.9354L26.9102 13.3573C27.2148 13.4627 27.3906 13.6854 27.3906 14.0018C27.3906 14.3182 27.2148 14.5409 26.9102 14.6346L25.5625 15.0682C25.5039 15.701 25.3867 16.2987 25.2344 16.8729L26.3594 17.7635C26.6055 17.951 26.6875 18.2323 26.5938 18.5252C26.4883 18.8065 26.2422 18.9823 25.9375 18.9588L24.4961 18.8885C24.2266 19.451 23.9453 19.9901 23.5938 20.4705L24.3555 21.6893C24.5195 21.9588 24.5078 22.2518 24.3086 22.4744C24.0859 22.7323 23.8047 22.8026 23.5117 22.6737L22.2109 22.1346C21.7773 22.5682 21.2969 22.9549 20.8047 23.2948L21.0977 24.6893C21.1562 25.0057 21.0508 25.2752 20.793 25.4276C20.5 25.5799 20.2188 25.5448 19.9961 25.3338L18.9414 24.3846C18.3906 24.619 17.8164 24.8416 17.2305 25.0057L17.0312 26.4237C16.9844 26.7284 16.7852 26.951 16.4922 27.0096C16.1641 27.0448 15.918 26.9159 15.7773 26.6463L15.1094 25.369C15.0872 25.3706 15.0651 25.3723 15.0431 25.3739ZM9.88862 22.6349C11.1726 23.2825 12.6323 23.6463 14.1953 23.6463C19.3129 23.6463 23.3225 19.7469 23.6843 14.7518H17.1445C16.8195 16.0988 15.6107 17.0955 14.1719 17.0955C13.8814 17.0955 13.6004 17.0554 13.3343 16.9805L9.88862 22.6349ZM8.56904 21.8255L12.0047 16.2027C11.4465 15.6471 11.1016 14.8774 11.1016 14.0252C11.1016 13.1718 11.4475 12.4012 12.007 11.8454L8.65492 6.12822C6.22728 7.86929 4.67969 10.7425 4.67969 14.0135C4.67969 17.2387 6.19084 20.0798 8.56904 21.8255ZM9.98202 5.33418L13.3344 11.0699C13.6005 10.995 13.8814 10.9549 14.1719 10.9549C15.5898 10.9549 16.7843 11.9229 17.1298 13.2401H23.6818C23.3045 8.251 19.3015 4.36898 14.1953 4.36898C12.67 4.36898 11.2432 4.71537 9.98202 5.33418ZM12.7539 14.0252C12.7539 14.8221 13.3633 15.4432 14.1719 15.4432C14.9688 15.4432 15.5781 14.8221 15.5781 14.0252C15.5781 13.2284 14.9688 12.6073 14.1719 12.6073C13.3633 12.6073 12.7539 13.2284 12.7539 14.0252Z"}})])]),t("div",{staticClass:"ke-devtools-panel-wrapper"},e._l(e.items,(function(a){return t("button",{key:a.key,staticClass:"ke-devtools-panel-button",on:{click:function(t){return e.onClickItem(a)}}},[e._t("item-"+a.key,null,{active:e.localFlags.includes(a.key)})],2)})),0)]),e._t("after")],2)},i=[];const r="ke-devtools",c=e=>JSON.parse(localStorage.getItem(e)||"[]"),u=(e,t)=>localStorage.setItem(t,JSON.stringify(e)),C=(e,t)=>{if(null!==localStorage.getItem(t))return c(t);const a=e.filter(e=>!0===e.defaultActive).map(e=>e.key);return u(a,t),a};var v,p=o["a"].extend({name:"ke-devtools",props:{items:{type:Array,required:!0},localStorageKey:{type:String,default:r}},data(){return{isShowDevtools:!1,localFlags:C(this.items,this.localStorageKey)}},mounted(){this.init()},methods:{init(){this.$emit("init",this.localFlags)},toggleShowDevtools(){this.isShowDevtools=!this.isShowDevtools},onClickItem(e){const t={key:e.key,value:!this.localFlags.includes(e.key)};this.$emit("change",t),this.saveState(e)},saveState(e){!1!==e.saveLocal&&(this.localFlags.includes(e.key)?this.localFlags.splice(this.localFlags.indexOf(e.key),1):this.localFlags.push(e.key),u(this.localFlags,this.localStorageKey))}}}),f=p,d=(a("0b04"),a("2877")),h=Object(d["a"])(f,n,i,!1,null,null,null),g=h.exports;(function(e){e["SAVE"]="example-save",e["NOT_SAVE"]="example-not-save",e["DEFAULT_ACTIVE_TRUE"]="default-active-true"})(v||(v={}));const y=[{key:v.SAVE},{key:v.NOT_SAVE,saveLocal:!1},{key:v.DEFAULT_ACTIVE_TRUE,defaultActive:!0}];var L=o["a"].extend({name:"App",components:{KeDevtools:g},data(){return{devtoolsItems:y,isVisibleSaveContent:!1}},methods:{onInit(e){this.isVisibleSaveContent=e.includes(v.SAVE)},onChange(e){switch(e.key){case v.SAVE:this.isVisibleSaveContent=e.value,console.log(v.SAVE,e.value);break;case v.NOT_SAVE:console.log(v.NOT_SAVE,e.value);break;case v.DEFAULT_ACTIVE_TRUE:console.log(v.DEFAULT_ACTIVE_TRUE,e.value);break;default:break}}}}),m=L,b=(a("04da"),Object(d["a"])(m,s,l,!1,null,"0cbfb9e8",null)),k=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:e=>e(k)}).$mount("#app")}});
//# sourceMappingURL=app.844402e0.js.map