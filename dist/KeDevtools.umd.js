(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KeDevtools"] = factory(require("vue"));
	else
		root["KeDevtools"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0b04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_17cf6d11_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ba8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_17cf6d11_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_17cf6d11_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2ba8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"096bf6c6-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KeDevtools.vue?vue&type=template&id=17cf6d11&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('div', {
    staticClass: "ke-devtools"
  }, [_vm._t("before"), _c('div', {
    staticClass: "ke-devtools-panel",
    class: {
      active: _vm.isShowDevtools
    }
  }, [_c('div', {
    staticClass: "ke-devtools-panel-activator-wrapper",
    on: {
      "click": _vm.toggleShowDevtools
    }
  }, [_c('svg', {
    staticClass: "ke-devtools-panel-activator-button",
    attrs: {
      "width": "28",
      "height": "28",
      "viewBox": "0 0 28 28",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    staticClass: "gear",
    attrs: {
      "fill": "#fff",
      "fill-opacity": "0.3",
      "d": "M15.0431 25.3739C14.7518 25.3956 14.4786 25.4159 14.1953 25.4159C13.8909 25.4159 13.6082 25.3942 13.3159 25.3717L13.2812 25.369L12.6016 26.6463C12.4609 26.9159 12.2148 27.0448 11.8984 27.0096C11.6055 26.951 11.3945 26.7284 11.3594 26.4237L11.1484 25.0057C10.5625 24.8416 10 24.619 9.4375 24.3846L8.38281 25.3338C8.16016 25.5448 7.87891 25.5799 7.58594 25.4276C7.32812 25.2752 7.22266 25.0057 7.28125 24.6893L7.57422 23.2948C7.09375 22.9549 6.60156 22.5682 6.16797 22.1346L4.86719 22.6737C4.57422 22.8026 4.30469 22.7323 4.08203 22.4744C3.88281 22.2518 3.85938 21.9588 4.02344 21.6893L4.78516 20.4705C4.44531 19.9901 4.15234 19.451 3.88281 18.8885L2.45312 18.9588C2.14844 18.9823 1.89062 18.8065 1.78516 18.5252C1.70312 18.2205 1.78516 17.9393 2.01953 17.7635L3.14453 16.8729C2.99219 16.2987 2.875 15.701 2.83984 15.0682L1.46875 14.6346C1.16406 14.5409 1 14.3182 1 14.0018C1 13.6854 1.16406 13.4627 1.46875 13.3573L2.83984 12.9237C2.875 12.3026 2.99219 11.7166 3.14453 11.1307L2.01953 10.2401C1.78516 10.0526 1.69141 9.78304 1.78516 9.49007C1.89062 9.20882 2.14844 9.03304 2.45312 9.05648L3.88281 9.10335C4.15234 8.54085 4.44531 8.02523 4.78516 7.52132L4.02344 6.30257C3.85938 6.05648 3.88281 5.76351 4.08203 5.54085C4.30469 5.28304 4.57422 5.22444 4.86719 5.34163L6.16797 5.86898C6.60156 5.4471 7.09375 5.04866 7.57422 4.70882L7.28125 3.32601C7.21094 2.99788 7.32812 2.72835 7.58594 2.58773C7.87891 2.43538 8.16016 2.45882 8.38281 2.68148L9.4375 3.61898C10 3.36116 10.5625 3.17366 11.1484 2.99788L11.3594 1.59163C11.3945 1.28694 11.6055 1.06429 11.8984 1.00569C12.2148 0.970538 12.4727 1.09944 12.6016 1.35726L13.2812 2.6346C13.5977 2.61116 13.8789 2.59944 14.1953 2.59944C14.5 2.59944 14.793 2.61116 15.1094 2.6346L15.7773 1.35726C15.9062 1.09944 16.1641 0.970538 16.4805 1.00569C16.7734 1.06429 16.9844 1.28694 17.0312 1.59163L17.2305 2.99788C17.8164 3.17366 18.3906 3.37288 18.9414 3.61898L19.9961 2.68148C20.2188 2.45882 20.5 2.42366 20.793 2.58773C21.0508 2.72835 21.168 2.99788 21.0977 3.32601L20.8047 4.70882C21.2969 5.04866 21.7773 5.4471 22.2109 5.86898L23.5117 5.34163C23.8047 5.22444 24.0859 5.28304 24.3086 5.54085C24.4961 5.76351 24.5195 6.05648 24.3555 6.30257L23.5938 7.52132C23.9453 8.02523 24.2266 8.54085 24.4961 9.10335L25.9375 9.05648C26.2422 9.03304 26.4883 9.20882 26.5938 9.49007C26.6875 9.78304 26.5938 10.0526 26.3594 10.2401L25.2344 11.1307C25.3867 11.7166 25.5039 12.3026 25.5625 12.9354L26.9102 13.3573C27.2148 13.4627 27.3906 13.6854 27.3906 14.0018C27.3906 14.3182 27.2148 14.5409 26.9102 14.6346L25.5625 15.0682C25.5039 15.701 25.3867 16.2987 25.2344 16.8729L26.3594 17.7635C26.6055 17.951 26.6875 18.2323 26.5938 18.5252C26.4883 18.8065 26.2422 18.9823 25.9375 18.9588L24.4961 18.8885C24.2266 19.451 23.9453 19.9901 23.5938 20.4705L24.3555 21.6893C24.5195 21.9588 24.5078 22.2518 24.3086 22.4744C24.0859 22.7323 23.8047 22.8026 23.5117 22.6737L22.2109 22.1346C21.7773 22.5682 21.2969 22.9549 20.8047 23.2948L21.0977 24.6893C21.1562 25.0057 21.0508 25.2752 20.793 25.4276C20.5 25.5799 20.2188 25.5448 19.9961 25.3338L18.9414 24.3846C18.3906 24.619 17.8164 24.8416 17.2305 25.0057L17.0312 26.4237C16.9844 26.7284 16.7852 26.951 16.4922 27.0096C16.1641 27.0448 15.918 26.9159 15.7773 26.6463L15.1094 25.369C15.0872 25.3706 15.0651 25.3723 15.0431 25.3739ZM9.88862 22.6349C11.1726 23.2825 12.6323 23.6463 14.1953 23.6463C19.3129 23.6463 23.3225 19.7469 23.6843 14.7518H17.1445C16.8195 16.0988 15.6107 17.0955 14.1719 17.0955C13.8814 17.0955 13.6004 17.0554 13.3343 16.9805L9.88862 22.6349ZM8.56904 21.8255L12.0047 16.2027C11.4465 15.6471 11.1016 14.8774 11.1016 14.0252C11.1016 13.1718 11.4475 12.4012 12.007 11.8454L8.65492 6.12822C6.22728 7.86929 4.67969 10.7425 4.67969 14.0135C4.67969 17.2387 6.19084 20.0798 8.56904 21.8255ZM9.98202 5.33418L13.3344 11.0699C13.6005 10.995 13.8814 10.9549 14.1719 10.9549C15.5898 10.9549 16.7843 11.9229 17.1298 13.2401H23.6818C23.3045 8.251 19.3015 4.36898 14.1953 4.36898C12.67 4.36898 11.2432 4.71537 9.98202 5.33418ZM12.7539 14.0252C12.7539 14.8221 13.3633 15.4432 14.1719 15.4432C14.9688 15.4432 15.5781 14.8221 15.5781 14.0252C15.5781 13.2284 14.9688 12.6073 14.1719 12.6073C13.3633 12.6073 12.7539 13.2284 12.7539 14.0252Z"
    }
  })])]), _c('div', {
    staticClass: "ke-devtools-panel-wrapper"
  }, _vm._l(_vm.items, function (item) {
    return _c('button', {
      key: item.key,
      staticClass: "ke-devtools-panel-button",
      on: {
        "click": function ($event) {
          return _vm.onClickItem(item);
        }
      }
    }, [_vm._t(`item-${item.key}`, null, {
      "active": _vm.localFlags.includes(item.key)
    })], 2);
  }), 0)]), _vm._t("after")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/KeDevtools.vue?vue&type=template&id=17cf6d11&

// CONCATENATED MODULE: ./src/components/business.ts
const DEFAULT_LOCAL_KEY = "ke-devtools";
const getLocalFlags = localKey => JSON.parse(localStorage.getItem(localKey) || "[]");
const setLocalFlags = (flags, localKey) => localStorage.setItem(localKey, JSON.stringify(flags));
const getInitialFlags = (items, localKey) => {
  if (localStorage.getItem(localKey) !== null) return getLocalFlags(localKey);
  const defaultFlags = items.filter(flag => flag.defaultActive === true).map(flag => flag.key);
  setLocalFlags(defaultFlags, localKey);
  return defaultFlags;
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-typescript/node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KeDevtools.vue?vue&type=script&lang=ts&


/* harmony default export */ var KeDevtoolsvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "ke-devtools",
  props: {
    items: {
      type: Array,
      required: true
    },
    localStorageKey: {
      type: String,
      default: DEFAULT_LOCAL_KEY
    }
  },
  data() {
    return {
      isShowDevtools: false,
      localFlags: getInitialFlags(this.items, this.localStorageKey)
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$emit("init", this.localFlags);
    },
    toggleShowDevtools() {
      this.isShowDevtools = !this.isShowDevtools;
    },
    onClickItem(item) {
      const payload = {
        key: item.key,
        value: !this.localFlags.includes(item.key)
      };
      this.$emit("change", payload);
      this.saveState(item);
    },
    saveState(item) {
      if (item.saveLocal === false) return;
      if (this.localFlags.includes(item.key)) {
        this.localFlags.splice(this.localFlags.indexOf(item.key), 1);
      } else {
        this.localFlags.push(item.key);
      }
      setLocalFlags(this.localFlags, this.localStorageKey);
    }
  }
}));
// CONCATENATED MODULE: ./src/components/KeDevtools.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_KeDevtoolsvue_type_script_lang_ts_ = (KeDevtoolsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/KeDevtools.vue?vue&type=style&index=0&id=17cf6d11&prod&lang=css&
var KeDevtoolsvue_type_style_index_0_id_17cf6d11_prod_lang_css_ = __webpack_require__("0b04");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/KeDevtools.vue






/* normalize component */

var component = normalizeComponent(
  components_KeDevtoolsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KeDevtools = (component.exports);
// CONCATENATED MODULE: ./src/components/index.ts


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("KeDevtools", KeDevtools);
/* harmony default export */ var components = (KeDevtools);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});
//# sourceMappingURL=KeDevtools.umd.js.map