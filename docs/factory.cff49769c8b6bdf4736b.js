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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzPzRjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);\n/* harmony import */ var _components_references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);\n\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar factoryHeader = Object(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Factory function');\nvar refData = [{\n  url: 'https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1',\n  title: 'JavaScript Factory Functions with ES6+'\n}, {\n  url: 'https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern',\n  title: 'FACTORY FUNCTIONS AND THE MODULE PATTERN'\n}, {\n  url: 'https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/',\n  title: 'Closures, Curried Functions, and Cool Abstractions in JavaScript'\n}, {\n  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',\n  title: 'Closures - JavaScript | MDN'\n}];\nvar refs = Object(_components_references__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(refData);\nvar factoryFooter = Object(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // invoke home function immedietly\n\nfactoryFooter.footerBlock.appendChild(Object(_components_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()());\nfragment.appendChild(factoryHeader.fragment);\nfragment.appendChild(refs.fragment);\nfragment.appendChild(factoryFooter.footerBlock);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvaW5kZXguanM/YzFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHJlZmVyZW5jZXMgZnJvbSAnLi9jb21wb25lbnRzL3JlZmVyZW5jZXMnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBob21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuY29uc3QgZmFjdG9yeUhlYWRlciA9IGhlYWRlcignRmFjdG9yeSBmdW5jdGlvbicpO1xuXG5jb25zdCByZWZEYXRhID0gW1xuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vbWVkaXVtLmNvbS9qYXZhc2NyaXB0LXNjZW5lL2phdmFzY3JpcHQtZmFjdG9yeS1mdW5jdGlvbnMtd2l0aC1lczYtNGQyMjQ1OTFhOGIxJyxcbiAgICB0aXRsZTogJ0phdmFTY3JpcHQgRmFjdG9yeSBGdW5jdGlvbnMgd2l0aCBFUzYrJyxcbiAgfSxcbiAge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vY291cnNlcy9qYXZhc2NyaXB0L2xlc3NvbnMvZmFjdG9yeS1mdW5jdGlvbnMtYW5kLXRoZS1tb2R1bGUtcGF0dGVybicsXG4gICAgdGl0bGU6ICdGQUNUT1JZIEZVTkNUSU9OUyBBTkQgVEhFIE1PRFVMRSBQQVRURVJOJyxcbiAgfSxcbiAge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL25ld3MvcGxheWluZy1hcm91bmQtd2l0aC1jbG9zdXJlcy1jdXJyeWluZy1hbmQtY29vbC1hYnN0cmFjdGlvbnMvJyxcbiAgICB0aXRsZTogJ0Nsb3N1cmVzLCBDdXJyaWVkIEZ1bmN0aW9ucywgYW5kIENvb2wgQWJzdHJhY3Rpb25zIGluIEphdmFTY3JpcHQnLFxuICB9LFxuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9DbG9zdXJlcycsXG4gICAgdGl0bGU6ICdDbG9zdXJlcyAtIEphdmFTY3JpcHQgfCBNRE4nLFxuICB9LFxuXTtcblxuY29uc3QgcmVmcyA9IHJlZmVyZW5jZXMocmVmRGF0YSk7XG5cbmNvbnN0IGZhY3RvcnlGb290ZXIgPSBmb290ZXIoKTtcbi8vIGludm9rZSBob21lIGZ1bmN0aW9uIGltbWVkaWV0bHlcbmZhY3RvcnlGb290ZXIuZm9vdGVyQmxvY2suYXBwZW5kQ2hpbGQoaG9tZSgpKCkpO1xuXG5mcmFnbWVudC5hcHBlbmRDaGlsZChmYWN0b3J5SGVhZGVyLmZyYWdtZW50KTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlZnMuZnJhZ21lbnQpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZmFjdG9yeUZvb3Rlci5mb290ZXJCbG9jayk7XG5cbnJvb3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar header = function header(name) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h1');\n  title.appendChild(document.createTextNode(name));\n  var text = document.createElement('p');\n  text.appendChild(document.createTextNode(\"This is a \".concat(name, \" practice!\")));\n  fragment.appendChild(title);\n  fragment.appendChild(text);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9oZWFkZXIuanM/ODcyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGhpcyBpcyBhICR7bmFtZX0gcHJhY3RpY2UhYCkpO1xuXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIHsgZnJhZ21lbnQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);\n\n\nvar references = function references(refs) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h2');\n  var titleText = document.createTextNode('references');\n  var lists = document.createElement('ul');\n  lists.className = 'list';\n  title.appendChild(titleText);\n  fragment.appendChild(title);\n  refs.map(function (item) {\n    var _reference = Object(_reference__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.title, item.url),\n        refTitle = _reference.refTitle;\n\n    lists.appendChild(refTitle);\n  });\n  fragment.appendChild(lists);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (references);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9yZWZlcmVuY2VzLmpzPzRhN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSc7XG5cbmNvbnN0IHJlZmVyZW5jZXMgPSAocmVmcykgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncmVmZXJlbmNlcycpO1xuXG4gIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdHMuY2xhc3NOYW1lID0gJ2xpc3QnO1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmVmcy5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHJlZlRpdGxlIH0gPSByZWZlcmVuY2UoaXRlbS50aXRsZSwgaXRlbS51cmwpO1xuICAgIGxpc3RzLmFwcGVuZENoaWxkKHJlZlRpdGxlKTtcbiAgfSk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RzKTtcblxuICByZXR1cm4geyBmcmFnbWVudCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVmZXJlbmNlcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reference = function reference(title, url) {\n  var refTitle = document.createElement('li');\n  var refLink = document.createElement('a');\n  var refLinkText = document.createTextNode(title);\n  refLink.href = url;\n  refLink.target = '_blank';\n  refLink.appendChild(refLinkText);\n  refTitle.appendChild(refLink);\n  return {\n    refTitle: refTitle\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reference);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9yZWZlcmVuY2UuanM/N2IzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWZlcmVuY2UgPSAodGl0bGUsIHVybCkgPT4ge1xuICBjb25zdCByZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHJlZkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHJlZkxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuICByZWZMaW5rLmhyZWYgPSB1cmw7XG4gIHJlZkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgcmVmTGluay5hcHBlbmRDaGlsZChyZWZMaW5rVGV4dCk7XG4gIHJlZlRpdGxlLmFwcGVuZENoaWxkKHJlZkxpbmspO1xuXG4gIHJldHVybiB7IHJlZlRpdGxlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWZlcmVuY2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar footer = function footer() {\n  var footerBlock = document.createElement('footer');\n  footerBlock.className = 'footer';\n  return {\n    footerBlock: footerBlock\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9mb290ZXIuanM/M2YzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckJsb2NrLmNsYXNzTmFtZSA9ICdmb290ZXInO1xuXG4gIHJldHVybiB7IGZvb3RlckJsb2NrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// this is a pattern of return function inside home components\nvar home = function home() {\n  var link = document.createElement('a');\n  var linkText = document.createTextNode('Home🏠');\n  link.href = '../index.html';\n  link.className = 'home';\n  link.appendChild(linkText);\n  return function () {\n    return link;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9ob21lLmpzP2M0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIHBhdHRlcm4gb2YgcmV0dXJuIGZ1bmN0aW9uIGluc2lkZSBob21lIGNvbXBvbmVudHNcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG4gIGxpbmsuaHJlZiA9ICcuLi9pbmRleC5odG1sJztcbiAgbGluay5jbGFzc05hbWUgPSAnaG9tZSc7XG4gIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuXG4gIHJldHVybiAoKSA9PiBsaW5rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);