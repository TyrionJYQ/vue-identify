(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomColor = exports.randomNumber = void 0;

//产生随机数
var randomNumber = function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}; // 产生随机颜色


exports.randomNumber = randomNumber;

var randomColor = function randomColor(min, max) {
  var r = randomNumber(min, max);
  var g = randomNumber(min, max);
  var b = randomNumber(min, max);
  return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
};

exports.randomColor = randomColor;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helper = __webpack_require__(/*! ./helper */ "./src/helper.js");

var installed = false;
var _default = {
  install: function install(Vue) {
    if (installed) {
      throw new Error('vue plugin named "vue-identify" has regidted, Do not register twice');
    }

    installed = true;
    Vue.component('vue-identify', {
      template: "<div>\n                  <canvas width=\"120\" height=\"40\" id=\"c1\" />\n                </div>",
      methods: {
        setPic: function setPic() {
          debugger;
          var w = 120;
          var h = 40;
          var fs = (0, _helper.randomNumber)(18, 40); //字体的大小

          var c = this.code;
          var c1 = document.querySelector("#c1");
          var ctx = c1.getContext("2d");
          ctx.fillStyle = (0, _helper.randomColor)(180, 230);
          ctx.fillRect(0, 0, w, h); // 处理字体

          var deg = (0, _helper.randomNumber)(-30, 30); //字体的旋转角度

          ctx.font = fs + "px Simhei";
          ctx.textBaseline = "top";
          ctx.fillStyle = (0, _helper.randomColor)(80, 150);
          ctx.save(); // ctx.translate(30 * i + 15, 15);
          // ctx.rotate((deg * Math.PI) / 180);

          ctx.fillText(c, 0, 0, 20);
          ctx.restore();

          for (var i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo((0, _helper.randomNumber)(0, w), (0, _helper.randomNumber)(0, h));
            ctx.lineTo((0, _helper.randomNumber)(0, w), (0, _helper.randomNumber)(0, h));
            ctx.strokeStyle = (0, _helper.randomColor)(180, 230);
            ctx.closePath();
            ctx.stroke();
          } //6.随机产生40个干扰的小点


          for (var i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc((0, _helper.randomNumber)(0, w), (0, _helper.randomNumber)(0, h), 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = (0, _helper.randomColor)(150, 200);
            ctx.fill();
          }
        }
      },
      props: {
        code: {
          type: String,
          "default": ""
        }
      },
      mounted: function mounted() {
        this.setPic();
      },
      watch: {
        code: function code(newVal, oldVal) {
          if (oldVal) {
            this.setPic();
          }
        }
      }
    });
    installed = true;
  }
};
exports["default"] = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=vue-identify.js.map