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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var _components_References__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar root = document.getElementById('root'); // Header\n\nvar headerData = {\n  title: 'class',\n  text: 'class function'\n};\nvar classHeader = new _components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](headerData); // References\n\nvar refData = {\n  url: 'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',\n  title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components'\n};\nvar classReferences = new _components_References__WEBPACK_IMPORTED_MODULE_1__[\"default\"](refData);\nroot.innerHTML = classHeader.render() + classReferences.render();\nvar homeLink = document.createElement('a');\nvar homeLinkText = document.createTextNode('Home🏠');\nhomeLink.href = '../index.html';\nhomeLink.className = 'home-link';\nhomeLink.appendChild(homeLinkText);\nroot.appendChild(homeLink);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvaW5kZXguanM/YTczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFJlZmVyZW5jZXMgZnJvbSAnLi9jb21wb25lbnRzL1JlZmVyZW5jZXMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbi8vIEhlYWRlclxuY29uc3QgaGVhZGVyRGF0YSA9IHtcbiAgdGl0bGU6ICdjbGFzcycsXG4gIHRleHQ6ICdjbGFzcyBmdW5jdGlvbicsXG59O1xuXG5jb25zdCBjbGFzc0hlYWRlciA9IG5ldyBIZWFkZXIoaGVhZGVyRGF0YSk7XG5cbi8vIFJlZmVyZW5jZXNcbmNvbnN0IHJlZkRhdGEgPSB7XG4gIHVybDpcbiAgICAnaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9yZWFjdGl2ZS11aXMtdmFuaWxsYWpzLXBhcnQtMi1jbGFzcy1iYXNlZC1jb21wb25lbnRzLycsXG4gIHRpdGxlOiAnUmVhY3RpdmUgVUnigJlzIHdpdGggVmFuaWxsYUpTIOKAkyBQYXJ0IDI6IENsYXNzIEJhc2VkIENvbXBvbmVudHMnLFxufTtcblxuY29uc3QgY2xhc3NSZWZlcmVuY2VzID0gbmV3IFJlZmVyZW5jZXMocmVmRGF0YSk7XG5cbnJvb3QuaW5uZXJIVE1MID0gY2xhc3NIZWFkZXIucmVuZGVyKCkgKyBjbGFzc1JlZmVyZW5jZXMucmVuZGVyKCk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgaG9tZUxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG5ob21lTGluay5ocmVmID0gJy4uL2luZGV4Lmh0bWwnO1xuaG9tZUxpbmsuY2xhc3NOYW1lID0gJ2hvbWUtbGluayc7XG5cbmhvbWVMaW5rLmFwcGVuZENoaWxkKGhvbWVMaW5rVGV4dCk7XG5yb290LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    this.state = {\n      title: props.title,\n      text: props.text\n    };\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <header>\\n                <h1>\".concat(this.state.title, \" practice page</h1>\\n                <p>Currently, trying \").concat(this.state.text, \"</p>\\n            <header>\");\n    }\n  }]);\n\n  return Header;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9IZWFkZXIuanM/ZWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICB0ZXh0OiBwcm9wcy50ZXh0LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgxPiR7dGhpcy5zdGF0ZS50aXRsZX0gcHJhY3RpY2UgcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+Q3VycmVudGx5LCB0cnlpbmcgJHt0aGlzLnN0YXRlLnRleHR9PC9wPlxuICAgICAgICAgICAgPGhlYWRlcj5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar References = /*#__PURE__*/function () {\n  function References(props) {\n    _classCallCheck(this, References);\n\n    this.state = {\n      url: props.url,\n      title: props.title\n    };\n  }\n\n  _createClass(References, [{\n    key: \"render\",\n    value: function render() {\n      return \"<p class=\\\"references\\\">References: <a href=\".concat(this.state.url, \" target=\\\"_blank\\\">\").concat(this.state.title, \"</a></p>\");\n    }\n  }]);\n\n  return References;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (References);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9SZWZlcmVuY2VzLmpzP2U1ODEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVmZXJlbmNlcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVybDogcHJvcHMudXJsLFxuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPHAgY2xhc3M9XCJyZWZlcmVuY2VzXCI+UmVmZXJlbmNlczogPGEgaHJlZj0ke3RoaXMuc3RhdGUudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuc3RhdGUudGl0bGV9PC9hPjwvcD5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);