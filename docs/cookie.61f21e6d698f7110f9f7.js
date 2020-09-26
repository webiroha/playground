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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar footer = function footer() {\n  var footerBlock = document.createElement('footer');\n  footerBlock.className = 'footer';\n  return {\n    footerBlock: footerBlock\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9mb290ZXIuanM/M2YzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckJsb2NrLmNsYXNzTmFtZSA9ICdmb290ZXInO1xuXG4gIHJldHVybiB7IGZvb3RlckJsb2NrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// this is a pattern of return function inside home components\nvar home = function home() {\n  var link = document.createElement('a');\n  var linkText = document.createTextNode('Home🏠');\n  link.href = '../index.html';\n  link.className = 'home';\n  link.appendChild(linkText);\n  return function () {\n    return link;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9ob21lLmpzP2M0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIHBhdHRlcm4gb2YgcmV0dXJuIGZ1bmN0aW9uIGluc2lkZSBob21lIGNvbXBvbmVudHNcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG4gIGxpbmsuaHJlZiA9ICcuLi9pbmRleC5odG1sJztcbiAgbGluay5jbGFzc05hbWUgPSAnaG9tZSc7XG4gIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuXG4gIHJldHVybiAoKSA9PiBsaW5rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factory_components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);\n/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);\n/* harmony import */ var _factory_components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);\n/* harmony import */ var _factory_components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);\n\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar cookieHeader = Object(_factory_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('cookie');\nvar addButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('add');\nvar expireButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('delete(expire)');\nvar removeButton = Object(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('delete(max-age)');\nvar cookieStatus = Object(_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nvar cookieFooter = Object(_factory_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\ncookieFooter.footerBlock.appendChild(Object(_factory_components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()());\nfragment.appendChild(cookieHeader.fragment);\nfragment.appendChild(addButton.button);\nfragment.appendChild(expireButton.button);\nfragment.appendChild(removeButton.button);\nfragment.appendChild(cookieStatus.status);\nfragment.appendChild(cookieFooter.footerBlock);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9pbmRleC5qcz9lNDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vZmFjdG9yeS9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuL2NvbXBvbmVudHMvU3RhdHVzJztcbmltcG9ydCBob21lIGZyb20gJy4uL2ZhY3RvcnkvY29tcG9uZW50cy9ob21lJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vZmFjdG9yeS9jb21wb25lbnRzL2Zvb3Rlcic7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbmNvbnN0IGNvb2tpZUhlYWRlciA9IGhlYWRlcignY29va2llJyk7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IEJ1dHRvbignYWRkJyk7XG5jb25zdCBleHBpcmVCdXR0b24gPSBCdXR0b24oJ2RlbGV0ZShleHBpcmUpJyk7XG5jb25zdCByZW1vdmVCdXR0b24gPSBCdXR0b24oJ2RlbGV0ZShtYXgtYWdlKScpO1xuXG5jb25zdCBjb29raWVTdGF0dXMgPSBTdGF0dXMoKTtcblxuY29uc3QgY29va2llRm9vdGVyID0gZm9vdGVyKCk7XG5jb29raWVGb290ZXIuZm9vdGVyQmxvY2suYXBwZW5kQ2hpbGQoaG9tZSgpKCkpO1xuXG5mcmFnbWVudC5hcHBlbmRDaGlsZChjb29raWVIZWFkZXIuZnJhZ21lbnQpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uLmJ1dHRvbik7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChleHBpcmVCdXR0b24uYnV0dG9uKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbi5idXR0b24pO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29va2llU3RhdHVzLnN0YXR1cyk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChjb29raWVGb290ZXIuZm9vdGVyQmxvY2spO1xuXG5yb290LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Button = function Button(name) {\n  var button = document.createElement('button');\n  button.appendChild(document.createTextNode(name));\n  button.type = 'button';\n  button.className = 'button cookie';\n\n  var addCookie = function addCookie() {\n    document.cookie = 'key=trialcookie;';\n  };\n\n  var expireCookie = function expireCookie() {\n    document.cookie = 'key=; expires=Thu, 01 Jan 2000 00:00:00 GMT;';\n  };\n\n  var maxCookie = function maxCookie() {\n    document.cookie = 'key=; max-age=0;';\n  };\n\n  var reload = function reload(f) {\n    return function () {\n      f();\n      location.reload();\n    };\n  };\n\n  var event = {\n    add: reload(addCookie),\n    'delete(expire)': reload(expireCookie),\n    'delete(max-age)': reload(maxCookie)\n  };\n  button.addEventListener('click', event[name], false);\n  return {\n    button: button\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9jb21wb25lbnRzL0J1dHRvbi5qcz8wYzI2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbiA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSkpO1xuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICBidXR0b24uY2xhc3NOYW1lID0gJ2J1dHRvbiBjb29raWUnO1xuXG4gIGNvbnN0IGFkZENvb2tpZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5jb29raWUgPSAna2V5PXRyaWFsY29va2llOyc7XG4gIH07XG5cbiAgY29uc3QgZXhwaXJlQ29va2llID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdrZXk9OyBleHBpcmVzPVRodSwgMDEgSmFuIDIwMDAgMDA6MDA6MDAgR01UOyc7XG4gIH07XG5cbiAgY29uc3QgbWF4Q29va2llID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICdrZXk9OyBtYXgtYWdlPTA7JztcbiAgfTtcblxuICBjb25zdCByZWxvYWQgPSAoZikgPT4gKCkgPT4ge1xuICAgIGYoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBjb25zdCBldmVudCA9IHtcbiAgICBhZGQ6IHJlbG9hZChhZGRDb29raWUpLFxuICAgICdkZWxldGUoZXhwaXJlKSc6IHJlbG9hZChleHBpcmVDb29raWUpLFxuICAgICdkZWxldGUobWF4LWFnZSknOiByZWxvYWQobWF4Q29va2llKSxcbiAgfTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudFtuYW1lXSwgZmFsc2UpO1xuXG4gIHJldHVybiB7IGJ1dHRvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Status = function Status() {\n  var status = document.createElement('p');\n  var text = document.cookie || 'none';\n  status.appendChild(document.createTextNode(text));\n  return {\n    status: status\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Nvb2tpZS9jb21wb25lbnRzL1N0YXR1cy5qcz9jMDU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY29va2llIHx8ICdub25lJztcbiAgc3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblxuICByZXR1cm4geyBzdGF0dXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);