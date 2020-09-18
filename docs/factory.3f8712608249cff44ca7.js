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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);\n/* harmony import */ var _components_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);\n\n\n\nvar factoryHeader = Object(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Factory function');\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar factoryTitle = document.createElement('h1');\nfactoryTitle.appendChild(document.createTextNode(factoryHeader.name));\nvar factoryText = document.createElement('p');\nfactoryText.appendChild(document.createTextNode(factoryHeader.text()));\nvar refData = [{\n  url: 'https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1',\n  title: 'JavaScript Factory Functions with ES6+'\n}, {\n  url: 'https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern',\n  title: 'FACTORY FUNCTIONS AND THE MODULE PATTERN'\n}];\nvar refs = Object(_components_references__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(refData);\nfragment.appendChild(factoryTitle);\nfragment.appendChild(factoryText);\nfragment.appendChild(refs.fragment);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9pbmRleC5qcz9jMWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgcmVmZXJlbmNlcyBmcm9tICcuL2NvbXBvbmVudHMvcmVmZXJlbmNlcyc7XG5cbmNvbnN0IGZhY3RvcnlIZWFkZXIgPSBoZWFkZXIoJ0ZhY3RvcnkgZnVuY3Rpb24nKTtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5jb25zdCBmYWN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuZmFjdG9yeVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZhY3RvcnlIZWFkZXIubmFtZSkpO1xuXG5jb25zdCBmYWN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmZhY3RvcnlUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZhY3RvcnlIZWFkZXIudGV4dCgpKSk7XG5cbmNvbnN0IHJlZkRhdGEgPSBbXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly9tZWRpdW0uY29tL2phdmFzY3JpcHQtc2NlbmUvamF2YXNjcmlwdC1mYWN0b3J5LWZ1bmN0aW9ucy13aXRoLWVzNi00ZDIyNDU5MWE4YjEnLFxuICAgIHRpdGxlOiAnSmF2YVNjcmlwdCBGYWN0b3J5IEZ1bmN0aW9ucyB3aXRoIEVTNisnLFxuICB9LFxuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9jb3Vyc2VzL2phdmFzY3JpcHQvbGVzc29ucy9mYWN0b3J5LWZ1bmN0aW9ucy1hbmQtdGhlLW1vZHVsZS1wYXR0ZXJuJyxcbiAgICB0aXRsZTogJ0ZBQ1RPUlkgRlVOQ1RJT05TIEFORCBUSEUgTU9EVUxFIFBBVFRFUk4nLFxuICB9LFxuXTtcblxuY29uc3QgcmVmcyA9IHJlZmVyZW5jZXMocmVmRGF0YSk7XG5cbmZyYWdtZW50LmFwcGVuZENoaWxkKGZhY3RvcnlUaXRsZSk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChmYWN0b3J5VGV4dCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChyZWZzLmZyYWdtZW50KTtcblxucm9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar header = function header(name) {\n  var text = function text() {\n    return \"This is a \".concat(name, \" practice!\");\n  };\n\n  return {\n    name: name,\n    text: text\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9jb21wb25lbnRzL2hlYWRlci5qcz84NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHRleHQgPSAoKSA9PiBgVGhpcyBpcyBhICR7bmFtZX0gcHJhY3RpY2UhYDtcblxuICByZXR1cm4geyBuYW1lLCB0ZXh0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);\n\n\nvar references = function references(refs) {\n  var fragment = document.createDocumentFragment();\n  var title = document.createElement('h2');\n  title.className = 'sub-title';\n  var titleText = document.createTextNode('references');\n  var lists = document.createElement('ul');\n  lists.className = 'list';\n  title.appendChild(titleText);\n  fragment.appendChild(title);\n  refs.map(function (item) {\n    var _reference = Object(_reference__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.title, item.url),\n        refTitle = _reference.refTitle;\n\n    lists.appendChild(refTitle);\n  });\n  fragment.appendChild(lists);\n  return {\n    fragment: fragment\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (references);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZmFjdG9yeS9jb21wb25lbnRzL3JlZmVyZW5jZXMuanM/NGE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVmZXJlbmNlIGZyb20gJy4vcmVmZXJlbmNlJztcblxuY29uc3QgcmVmZXJlbmNlcyA9IChyZWZzKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdzdWItdGl0bGUnO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgncmVmZXJlbmNlcycpO1xuXG4gIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdHMuY2xhc3NOYW1lID0gJ2xpc3QnO1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmVmcy5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHJlZlRpdGxlIH0gPSByZWZlcmVuY2UoaXRlbS50aXRsZSwgaXRlbS51cmwpO1xuICAgIGxpc3RzLmFwcGVuZENoaWxkKHJlZlRpdGxlKTtcbiAgfSk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RzKTtcblxuICByZXR1cm4geyBmcmFnbWVudCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVmZXJlbmNlcztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reference = function reference(title, url) {\n  var refTitle = document.createElement('li');\n  var refLink = document.createElement('a');\n  var refLinkText = document.createTextNode(title);\n  refLink.href = url;\n  refLink.target = '_blank';\n  refLink.appendChild(refLinkText);\n  refTitle.appendChild(refLink);\n  return {\n    refTitle: refTitle\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reference);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZhY3RvcnkvY29tcG9uZW50cy9yZWZlcmVuY2UuanM/N2IzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWZlcmVuY2UgPSAodGl0bGUsIHVybCkgPT4ge1xuICBjb25zdCByZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHJlZkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IHJlZkxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xuICByZWZMaW5rLmhyZWYgPSB1cmw7XG4gIHJlZkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgcmVmTGluay5hcHBlbmRDaGlsZChyZWZMaW5rVGV4dCk7XG4gIHJlZlRpdGxlLmFwcGVuZENoaWxkKHJlZkxpbmspO1xuXG4gIHJldHVybiB7IHJlZlRpdGxlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWZlcmVuY2U7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);