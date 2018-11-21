// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  props: {
    iconName: {
      type: String
    }
  }
};
exports.default = _default;
        var $4a4ba0 = exports.default || module.exports;
      
      if (typeof $4a4ba0 === 'function') {
        $4a4ba0 = $4a4ba0.options;
      }
    
        /* template */
        Object.assign($4a4ba0, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"w-icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":("#icon-" + _vm.iconName)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  components: {
    'w-icon': _icon.default
  },
  props: {
    iconName: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function validator(value) {
        if (['right', 'left'].indexOf(value) === -1) {
          // 输错了
          value = value === "" ? "空字符串" : value;
          console.warn("\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u6709\u8BEF, \u53EA\u80FD\u5728 left \u548C right \u9009\u4E00\u4E2A, \u4F60\u8F93\u7684\u662F".concat(value));
        }

        return true;
      }
    }
  },
  methods: {}
};
exports.default = _default;
        var $7dbf6d = exports.default || module.exports;
      
      if (typeof $7dbf6d === 'function') {
        $7dbf6d = $7dbf6d.options;
      }
    
        /* template */
        Object.assign($7dbf6d, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"button",on:{"click":function($event){_vm.$emit('click')}}},[_c('div',{staticClass:"icon",class:( _obj = {}, _obj[_vm.iconPosition] = 1, _obj )},[(_vm.iconName && !_vm.loading)?_c('w-icon',{staticClass:"icon",attrs:{"icon-name":_vm.iconName}}):_vm._e(),_vm._v(" "),(_vm.loading)?_c('w-icon',{staticClass:"loading",attrs:{"icon-name":"loading"}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"slot"},[_vm._t("default")],2)])
var _obj;}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {};
exports.default = _default;
        var $b8fbf4 = exports.default || module.exports;
      
      if (typeof $b8fbf4 === 'function') {
        $b8fbf4 = $b8fbf4.options;
      }
    
        /* template */
        Object.assign($b8fbf4, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _icon = _interopRequireDefault(require("./src/icon"));

var _buttonGroup = _interopRequireDefault(require("./src/button-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/icon":"wFXB","./src/button-group":"h0wh"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map