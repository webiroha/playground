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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);\n/* harmony import */ var _components_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar factoryHeader = Object(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Factory function');\nvar refData = [{\n  url: 'https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1',\n  title: 'JavaScript Factory Functions with ES6+'\n}, {\n  url: 'https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern',\n  title: 'FACTORY FUNCTIONS AND THE MODULE PATTERN'\n}, {\n  url: 'https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/',\n  title: 'Closures, Curried Functions, and Cool Abstractions in JavaScript'\n}, {\n  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',\n  title: 'Closures - JavaScript | MDN'\n}];\nvar refs = Object(_components_references__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(refData);\nvar factoryFooter = Object(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // invoke home function immedietly\n\nfactoryFooter.footerBlock.appendChild(Object(_components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()());\nfragment.appendChild(factoryHeader.fragment);\nfragment.appendChild(refs.fragment);\nfragment.appendChild(factoryFooter.footerBlock);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9pbmRleC5qcz9jMWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgcmVmZXJlbmNlcyBmcm9tICcuL2NvbXBvbmVudHMvcmVmZXJlbmNlcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5jb25zdCBmYWN0b3J5SGVhZGVyID0gaGVhZGVyKCdGYWN0b3J5IGZ1bmN0aW9uJyk7XG5cbmNvbnN0IHJlZkRhdGEgPSBbXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly9tZWRpdW0uY29tL2phdmFzY3JpcHQtc2NlbmUvamF2YXNjcmlwdC1mYWN0b3J5LWZ1bmN0aW9ucy13aXRoLWVzNi00ZDIyNDU5MWE4YjEnLFxuICAgIHRpdGxlOiAnSmF2YVNjcmlwdCBGYWN0b3J5IEZ1bmN0aW9ucyB3aXRoIEVTNisnLFxuICB9LFxuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9jb3Vyc2VzL2phdmFzY3JpcHQvbGVzc29ucy9mYWN0b3J5LWZ1bmN0aW9ucy1hbmQtdGhlLW1vZHVsZS1wYXR0ZXJuJyxcbiAgICB0aXRsZTogJ0ZBQ1RPUlkgRlVOQ1RJT05TIEFORCBUSEUgTU9EVUxFIFBBVFRFUk4nLFxuICB9LFxuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvbmV3cy9wbGF5aW5nLWFyb3VuZC13aXRoLWNsb3N1cmVzLWN1cnJ5aW5nLWFuZC1jb29sLWFic3RyYWN0aW9ucy8nLFxuICAgIHRpdGxlOiAnQ2xvc3VyZXMsIEN1cnJpZWQgRnVuY3Rpb25zLCBhbmQgQ29vbCBBYnN0cmFjdGlvbnMgaW4gSmF2YVNjcmlwdCcsXG4gIH0sXG4gIHtcbiAgICB1cmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0Nsb3N1cmVzJyxcbiAgICB0aXRsZTogJ0Nsb3N1cmVzIC0gSmF2YVNjcmlwdCB8IE1ETicsXG4gIH0sXG5dO1xuXG5jb25zdCByZWZzID0gcmVmZXJlbmNlcyhyZWZEYXRhKTtcblxuY29uc3QgZmFjdG9yeUZvb3RlciA9IGZvb3RlcigpO1xuLy8gaW52b2tlIGhvbWUgZnVuY3Rpb24gaW1tZWRpZXRseVxuZmFjdG9yeUZvb3Rlci5mb290ZXJCbG9jay5hcHBlbmRDaGlsZChob21lKCkoKSk7XG5cbmZyYWdtZW50LmFwcGVuZENoaWxkKGZhY3RvcnlIZWFkZXIuZnJhZ21lbnQpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVmcy5mcmFnbWVudCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChmYWN0b3J5Rm9vdGVyLmZvb3RlckJsb2NrKTtcblxucm9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar header = function header(name) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h1');\n  title.appendChild(document.createTextNode(name));\n  var text = document.createElement('p');\n  text.appendChild(document.createTextNode(\"This is a \".concat(name, \" practice!\")));\n  fragment.appendChild(title);\n  fragment.appendChild(text);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9jb21wb25lbnRzL2hlYWRlci5qcz84NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGlzIGlzIGEgJHtuYW1lfSBwcmFjdGljZSFgKSk7XG5cbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4geyBmcmFnbWVudCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);\n\n\nvar references = function references(refs) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h2');\n  title.className = 'sub-title';\n  var titleText = document.createTextNode('references');\n  var lists = document.createElement('ul');\n  lists.className = 'list';\n  title.appendChild(titleText);\n  fragment.appendChild(title);\n  refs.map(function (item) {\n    var _reference = Object(_reference__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.title, item.url),\n        refTitle = _reference.refTitle;\n\n    lists.appendChild(refTitle);\n  });\n  fragment.appendChild(lists);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (references);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9yZWZlcmVuY2VzLmpzPzRhN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSc7XG5cbmNvbnN0IHJlZmVyZW5jZXMgPSAocmVmcykgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS5jbGFzc05hbWUgPSAnc3ViLXRpdGxlJztcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3JlZmVyZW5jZXMnKTtcblxuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3RzLmNsYXNzTmFtZSA9ICdsaXN0JztcblxuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJlZnMubWFwKChpdGVtKSA9PiB7XG4gICAgY29uc3QgeyByZWZUaXRsZSB9ID0gcmVmZXJlbmNlKGl0ZW0udGl0bGUsIGl0ZW0udXJsKTtcbiAgICBsaXN0cy5hcHBlbmRDaGlsZChyZWZUaXRsZSk7XG4gIH0pO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0cyk7XG5cbiAgcmV0dXJuIHsgZnJhZ21lbnQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZmVyZW5jZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reference = function reference(title, url) {\n  var refTitle = document.createElement('li');\n  var refLink = document.createElement('a');\n  var refLinkText = document.createTextNode(title);\n  refLink.href = url;\n  refLink.target = '_blank';\n  refLink.appendChild(refLinkText);\n  refTitle.appendChild(refLink);\n  return {\n    refTitle: refTitle\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reference);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9yZWZlcmVuY2UuanM/N2IzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWZlcmVuY2UgPSAodGl0bGUsIHVybCkgPT4ge1xuICBjb25zdCByZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHJlZkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHJlZkxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuICByZWZMaW5rLmhyZWYgPSB1cmw7XG4gIHJlZkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgcmVmTGluay5hcHBlbmRDaGlsZChyZWZMaW5rVGV4dCk7XG4gIHJlZlRpdGxlLmFwcGVuZENoaWxkKHJlZkxpbmspO1xuXG4gIHJldHVybiB7IHJlZlRpdGxlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWZlcmVuY2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar footer = function footer() {\n  var footerBlock = document.createElement('footer');\n  footerBlock.className = 'footer';\n  return {\n    footerBlock: footerBlock\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9mb290ZXIuanM/M2YzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlckJsb2NrLmNsYXNzTmFtZSA9ICdmb290ZXInO1xuXG4gIHJldHVybiB7IGZvb3RlckJsb2NrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// this is a pattern of return function inside home components\nvar home = function home() {\n  var link = document.createElement('a');\n  var linkText = document.createTextNode('Home🏠');\n  link.href = '../index.html';\n  link.className = 'home';\n  link.appendChild(linkText);\n  return function () {\n    return link;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9ob21lLmpzP2M0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIHBhdHRlcm4gb2YgcmV0dXJuIGZ1bmN0aW9uIGluc2lkZSBob21lIGNvbXBvbmVudHNcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG4gIGxpbmsuaHJlZiA9ICcuLi9pbmRleC5odG1sJztcbiAgbGluay5jbGFzc05hbWUgPSAnaG9tZSc7XG4gIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuXG4gIHJldHVybiAoKSA9PiBsaW5rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ })
/******/ ]);