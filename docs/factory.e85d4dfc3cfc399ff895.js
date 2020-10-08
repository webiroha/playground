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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);\n/* harmony import */ var _components_ListBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);\n\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar factoryHeader = Object(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Factory function');\nvar refData = [{\n  url: 'https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1',\n  title: 'JavaScript Factory Functions with ES6+'\n}, {\n  url: 'https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern',\n  title: 'FACTORY FUNCTIONS AND THE MODULE PATTERN'\n}, {\n  url: 'https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/',\n  title: 'Closures, Curried Functions, and Cool Abstractions in JavaScript'\n}, {\n  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',\n  title: 'Closures - JavaScript | MDN'\n}];\nvar refs = Object(_components_ListBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(refData);\nvar factoryFooter = Object(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // invoke home function immedietly\n\nfactoryFooter.footer.appendChild(Object(_components_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()());\nfragment.appendChild(factoryHeader.fragment);\nfragment.appendChild(refs.fragment);\nfragment.appendChild(factoryFooter.footer);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvaW5kZXguanM/YzFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExpc3RCbG9jayBmcm9tICcuL2NvbXBvbmVudHMvTGlzdEJsb2NrJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbmNvbnN0IGZhY3RvcnlIZWFkZXIgPSBIZWFkZXIoJ0ZhY3RvcnkgZnVuY3Rpb24nKTtcblxuY29uc3QgcmVmRGF0YSA9IFtcbiAge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL21lZGl1bS5jb20vamF2YXNjcmlwdC1zY2VuZS9qYXZhc2NyaXB0LWZhY3RvcnktZnVuY3Rpb25zLXdpdGgtZXM2LTRkMjI0NTkxYThiMScsXG4gICAgdGl0bGU6ICdKYXZhU2NyaXB0IEZhY3RvcnkgRnVuY3Rpb25zIHdpdGggRVM2KycsXG4gIH0sXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL2NvdXJzZXMvamF2YXNjcmlwdC9sZXNzb25zL2ZhY3RvcnktZnVuY3Rpb25zLWFuZC10aGUtbW9kdWxlLXBhdHRlcm4nLFxuICAgIHRpdGxlOiAnRkFDVE9SWSBGVU5DVElPTlMgQU5EIFRIRSBNT0RVTEUgUEFUVEVSTicsXG4gIH0sXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL3BsYXlpbmctYXJvdW5kLXdpdGgtY2xvc3VyZXMtY3VycnlpbmctYW5kLWNvb2wtYWJzdHJhY3Rpb25zLycsXG4gICAgdGl0bGU6ICdDbG9zdXJlcywgQ3VycmllZCBGdW5jdGlvbnMsIGFuZCBDb29sIEFic3RyYWN0aW9ucyBpbiBKYXZhU2NyaXB0JyxcbiAgfSxcbiAge1xuICAgIHVybDogJ2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvQ2xvc3VyZXMnLFxuICAgIHRpdGxlOiAnQ2xvc3VyZXMgLSBKYXZhU2NyaXB0IHwgTUROJyxcbiAgfSxcbl07XG5cbmNvbnN0IHJlZnMgPSBMaXN0QmxvY2socmVmRGF0YSk7XG5cbmNvbnN0IGZhY3RvcnlGb290ZXIgPSBGb290ZXIoKTtcbi8vIGludm9rZSBob21lIGZ1bmN0aW9uIGltbWVkaWV0bHlcbmZhY3RvcnlGb290ZXIuZm9vdGVyLmFwcGVuZENoaWxkKEhvbWUoKSgpKTtcblxuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZmFjdG9yeUhlYWRlci5mcmFnbWVudCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChyZWZzLmZyYWdtZW50KTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKGZhY3RvcnlGb290ZXIuZm9vdGVyKTtcblxucm9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Header = function Header(name) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h1');\n  title.appendChild(document.createTextNode(name));\n  var text = document.createElement('p');\n  text.appendChild(document.createTextNode(\"This is a \".concat(name, \" practice!\")));\n  fragment.appendChild(title);\n  fragment.appendChild(text);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9IZWFkZXIuanM/YjI0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGhpcyBpcyBhICR7bmFtZX0gcHJhY3RpY2UhYCkpO1xuXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIHsgZnJhZ21lbnQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);\n\n\nvar ListBlock = function ListBlock(refs) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h2');\n  var titleText = document.createTextNode('references');\n  var list = document.createElement('ul');\n  list.className = 'list';\n  title.appendChild(titleText);\n  fragment.appendChild(title);\n  refs.map(function (item) {\n    var _reference = Object(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.title, item.url),\n        listItem = _reference.listItem;\n\n    list.appendChild(listItem);\n  });\n  fragment.appendChild(list);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListBlock);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9MaXN0QmxvY2suanM/OTAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVmZXJlbmNlIGZyb20gJy4vTGlzdCc7XG5cbmNvbnN0IExpc3RCbG9jayA9IChyZWZzKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdyZWZlcmVuY2VzJyk7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3QnO1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmVmcy5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IGxpc3RJdGVtIH0gPSByZWZlcmVuY2UoaXRlbS50aXRsZSwgaXRlbS51cmwpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgcmV0dXJuIHsgZnJhZ21lbnQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCbG9jaztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar List = function List(title, url) {\n  var listItem = document.createElement('li');\n  var link = document.createElement('a');\n  var text = document.createTextNode(title);\n  link.href = url;\n  link.target = '_blank';\n  link.appendChild(text);\n  listItem.appendChild(link);\n  return {\n    listItem: listItem\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9MaXN0LmpzP2I1YjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdCA9ICh0aXRsZSwgdXJsKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcbiAgbGluay5ocmVmID0gdXJsO1xuICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGxpbmsuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gIHJldHVybiB7IGxpc3RJdGVtIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Footer = function Footer() {\n  var footer = document.createElement('footer');\n  footer.className = 'footer';\n  return {\n    footer: footer\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9Gb290ZXIuanM/MjQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG5cbiAgcmV0dXJuIHsgZm9vdGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// this is a pattern of return function inside home components\nvar Home = function Home() {\n  var link = document.createElement('a');\n  var text = document.createTextNode('Home🏠');\n  link.href = '../index.html';\n  link.className = 'home';\n  link.appendChild(text);\n  return function () {\n    return link;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9Ib21lLmpzP2E2NGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIHBhdHRlcm4gb2YgcmV0dXJuIGZ1bmN0aW9uIGluc2lkZSBob21lIGNvbXBvbmVudHNcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSG9tZfCfj6AnKTtcbiAgbGluay5ocmVmID0gJy4uL2luZGV4Lmh0bWwnO1xuICBsaW5rLmNsYXNzTmFtZSA9ICdob21lJztcbiAgbGluay5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gKCkgPT4gbGluaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);