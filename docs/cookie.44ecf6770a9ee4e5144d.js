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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar header = function header(name) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h1');\n  title.appendChild(document.createTextNode(name));\n  var text = document.createElement('p');\n  text.appendChild(document.createTextNode(\"This is a \".concat(name, \" practice!\")));\n  fragment.appendChild(title);\n  fragment.appendChild(text);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9jb21wb25lbnRzL2hlYWRlci5qcz84NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGlzIGlzIGEgJHtuYW1lfSBwcmFjdGljZSFgKSk7XG5cbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4geyBmcmFnbWVudCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factory_components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);\n/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar cookieHeader = Object(_factory_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('cookie');\nvar addButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('add');\nvar expireButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('delete(expire)');\nvar removeButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('delete(max-age)');\nvar cookieStatus = Object(_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nfragment.appendChild(cookieHeader.fragment);\nfragment.appendChild(addButton.button);\nfragment.appendChild(expireButton.button);\nfragment.appendChild(removeButton.button);\nfragment.appendChild(cookieStatus.status);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9pbmRleC5qcz9lNDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vZmFjdG9yeS9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuL2NvbXBvbmVudHMvU3RhdHVzJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuY29uc3QgY29va2llSGVhZGVyID0gaGVhZGVyKCdjb29raWUnKTtcblxuY29uc3QgYWRkQnV0dG9uID0gQnV0dG9uKCdhZGQnKTtcbmNvbnN0IGV4cGlyZUJ1dHRvbiA9IEJ1dHRvbignZGVsZXRlKGV4cGlyZSknKTtcbmNvbnN0IHJlbW92ZUJ1dHRvbiA9IEJ1dHRvbignZGVsZXRlKG1heC1hZ2UpJyk7XG5cbmNvbnN0IGNvb2tpZVN0YXR1cyA9IFN0YXR1cygpO1xuXG5mcmFnbWVudC5hcHBlbmRDaGlsZChjb29raWVIZWFkZXIuZnJhZ21lbnQpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uLmJ1dHRvbik7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChleHBpcmVCdXR0b24uYnV0dG9uKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbi5idXR0b24pO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29va2llU3RhdHVzLnN0YXR1cyk7XG5cbnJvb3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Button = function Button(name) {\n  var button = document.createElement('button');\n  button.appendChild(document.createTextNode(name));\n  button.type = 'button';\n\n  var addCookie = function addCookie() {\n    document.cookie = 'key=trialcookie;';\n  };\n\n  var expireCookie = function expireCookie() {\n    document.cookie = 'key=; expires=Thu, 01 Jan 2000 00:00:00 GMT;';\n  };\n\n  var maxCookie = function maxCookie() {\n    document.cookie = 'key=; max-age=0;';\n  };\n\n  var reload = function reload(f) {\n    return function () {\n      f();\n      location.reload();\n    };\n  };\n\n  switch (name) {\n    case 'add':\n      button.addEventListener('click', reload(addCookie), false);\n      break;\n\n    case 'delete(expire)':\n      button.addEventListener('click', reload(expireCookie), false);\n      break;\n\n    case 'delete(max-age)':\n      button.addEventListener('click', reload(maxCookie), false);\n      break;\n\n    default:\n  }\n\n  return {\n    button: button\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9jb21wb25lbnRzL0J1dHRvbi5qcz8wYzI2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbiA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuXG4gIGNvbnN0IGFkZENvb2tpZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5jb29raWUgPSAna2V5PXRyaWFsY29va2llOyc7XG4gIH07XG5cbiAgY29uc3QgZXhwaXJlQ29va2llID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdrZXk9OyBleHBpcmVzPVRodSwgMDEgSmFuIDIwMDAgMDA6MDA6MDAgR01UOyc7XG4gIH07XG5cbiAgY29uc3QgbWF4Q29va2llID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdrZXk9OyBtYXgtYWdlPTA7JztcbiAgfTtcblxuICBjb25zdCByZWxvYWQgPSAoZikgPT4gKCkgPT4ge1xuICAgIGYoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdhZGQnOlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVsb2FkKGFkZENvb2tpZSksIGZhbHNlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RlbGV0ZShleHBpcmUpJzpcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbG9hZChleHBpcmVDb29raWUpLCBmYWxzZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkZWxldGUobWF4LWFnZSknOlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVsb2FkKG1heENvb2tpZSksIGZhbHNlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4geyBidXR0b24gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVkE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Status = function Status() {\n  var status = document.createElement('p');\n  var text = document.cookie || 'none';\n  status.appendChild(document.createTextNode(text));\n  return {\n    status: status\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9jb21wb25lbnRzL1N0YXR1cy5qcz9jMDU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY29va2llIHx8ICdub25lJztcbiAgc3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblxuICByZXR1cm4geyBzdGF0dXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);