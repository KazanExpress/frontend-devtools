module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9898":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_7a7f6c4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac10");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_7a7f6c4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeDevtools_vue_vue_type_style_index_0_id_7a7f6c4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ac10":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bb328224-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KeDevtools.vue?vue&type=template&id=7a7f6c4e&scoped=true&
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
  }, [_c('button', {
    staticClass: "ke-devtools-panel-activator",
    on: {
      "click": _vm.toggleShowDevtools
    }
  }, [_vm._t("activator", function () {
    return [_c('DevtoolsLogo')];
  })], 2), _c('div', {
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

// CONCATENATED MODULE: ./src/components/KeDevtools.vue?vue&type=template&id=7a7f6c4e&scoped=true&

// CONCATENATED MODULE: ./src/assets/devtools.svg
/* harmony default export */ var devtools = ({
  functional: true,

  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "width": "24",
        "height": "24"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill": "#fff",
        "d": "M9.61 6.62a6.09 6.09 0 014.63.07A7.18 7.18 0 0116 7.9a5 5 0 011.45 2.26 4.92 4.92 0 01-.37 3.47 33.69 33.69 0 003.2 2.88c.63.51 1.25 1 1.87 1.55a10.47 10.47 0 011 .89 2.79 2.79 0 01.66 2.14 3 3 0 01-1.9 2.47 2.6 2.6 0 01-1.56.07 4.09 4.09 0 01-1.95-1.24c-1.6-1.77-3.17-3.57-4.73-5.37a5.59 5.59 0 01-4.56-.35 5.45 5.45 0 01-2.6-3.08 6.29 6.29 0 01.17-4c1.26 1.32 2.54 2.63 3.81 3.94.3-.26.56-.56.85-.85.6-.61 1.19-1.22 1.8-1.83.12-.13.26-.25.37-.39l-3.3-3.24z"
      }
    }), _c('path', {
      attrs: {
        "fill": "#fff",
        "fill-opacity": ".3",
        "d": "M9.82 0h4.37v2.6l2.91 1.19 1.76-1.7A.33.33 0 0119 2c1 1 2 2.05 3 3.06-.59.62-1.19 1.23-1.77 1.86.4 1 .79 1.92 1.19 2.89H24v4.37h-2.63L20.66 16 19 14.6a5.66 5.66 0 00.55-2.6 9.21 9.21 0 00-.41-2.38 6.45 6.45 0 00-1-2.06 8.39 8.39 0 00-1.76-1.71A7.09 7.09 0 0015 5a6.69 6.69 0 00-2.79-.56A9.11 9.11 0 009.23 5a7.58 7.58 0 00-4.61 5.51 7.66 7.66 0 00.58 4.67 7.66 7.66 0 001.27 2 7.14 7.14 0 003.76 2.19 5.67 5.67 0 001.24.12 9.58 9.58 0 002.95-.49c.5.57 1 1.16 1.49 1.74l-1.7.66V24H9.8v-2.58c-1-.4-1.95-.8-2.92-1.22-.61.59-1.21 1.2-1.83 1.79L2 18.92c.61-.62 1.24-1.23 1.84-1.85-.44-.95-.84-1.91-1.24-2.87H0v-3.43-1h2.58l1.2-2.87A75 75 0 012 5.11C3 4.08 4 3 5 2a2.11 2.11 0 01.27.25l1.62 1.49c1-.4 2-.77 2.93-1.15z"
      }
    })]));
  }

});
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/KeDevtools.vue?vue&type=script&lang=ts&



/* harmony default export */ var KeDevtoolsvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "ke-devtools",
  components: {
    DevtoolsLogo: devtools
  },
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
// EXTERNAL MODULE: ./src/components/KeDevtools.vue?vue&type=style&index=0&id=7a7f6c4e&prod&scoped=true&lang=css&
var KeDevtoolsvue_type_style_index_0_id_7a7f6c4e_prod_scoped_true_lang_css_ = __webpack_require__("9898");

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
  "7a7f6c4e",
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
//# sourceMappingURL=KeDevtools.common.js.map