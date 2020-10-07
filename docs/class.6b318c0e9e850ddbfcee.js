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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);\n/* harmony import */ var _components_ElementText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);\n/* harmony import */ var _components_ListLinkItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);\n\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment(); // Header\n\nvar headerData = {\n  title: 'class'\n};\nvar classHeader = new _components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"](headerData);\nfragment.appendChild(classHeader.headerBlock.element); // References title\n\nvar refTitle = new _components_ElementText__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  elem: 'h2',\n  \"class\": 'ref-title',\n  text: 'References'\n});\nfragment.appendChild(refTitle.element); // References list\n\nvar refData = [{\n  url: 'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',\n  title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components'\n}, {\n  url: 'https://stackoverflow.com/questions/41894492/how-is-object-oriented-javascript-used-for-dom-manipulation/41896245',\n  title: 'How is Object Oriented Javascript used for DOM manipulation'\n}];\nvar ref = new _components_ListLinkItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"](refData);\nfragment.appendChild(ref.list); // footer\n\nvar footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nfragment.appendChild(footer.footerBlock.element); // add all fragments\n\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvaW5kZXguanM/YTczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEVsZW1lbnRUZXh0IGZyb20gJy4vY29tcG9uZW50cy9FbGVtZW50VGV4dCc7XG5pbXBvcnQgTGlzdExpbmtJdGVtIGZyb20gJy4vY29tcG9uZW50cy9MaXN0TGlua0l0ZW0nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuLy8gSGVhZGVyXG5jb25zdCBoZWFkZXJEYXRhID0geyB0aXRsZTogJ2NsYXNzJyB9O1xuY29uc3QgY2xhc3NIZWFkZXIgPSBuZXcgSGVhZGVyKGhlYWRlckRhdGEpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xhc3NIZWFkZXIuaGVhZGVyQmxvY2suZWxlbWVudCk7XG5cbi8vIFJlZmVyZW5jZXMgdGl0bGVcbmNvbnN0IHJlZlRpdGxlID0gbmV3IEVsZW1lbnRUZXh0KHtcbiAgZWxlbTogJ2gyJyxcbiAgY2xhc3M6ICdyZWYtdGl0bGUnLFxuICB0ZXh0OiAnUmVmZXJlbmNlcycsXG59KTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlZlRpdGxlLmVsZW1lbnQpO1xuXG4vLyBSZWZlcmVuY2VzIGxpc3RcbmNvbnN0IHJlZkRhdGEgPSBbXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9yZWFjdGl2ZS11aXMtdmFuaWxsYWpzLXBhcnQtMi1jbGFzcy1iYXNlZC1jb21wb25lbnRzLycsXG4gICAgdGl0bGU6ICdSZWFjdGl2ZSBVSeKAmXMgd2l0aCBWYW5pbGxhSlMg4oCTIFBhcnQgMjogQ2xhc3MgQmFzZWQgQ29tcG9uZW50cycsXG4gIH0sXG4gIHtcbiAgICB1cmw6XG4gICAgICAnaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE4OTQ0OTIvaG93LWlzLW9iamVjdC1vcmllbnRlZC1qYXZhc2NyaXB0LXVzZWQtZm9yLWRvbS1tYW5pcHVsYXRpb24vNDE4OTYyNDUnLFxuICAgIHRpdGxlOiAnSG93IGlzIE9iamVjdCBPcmllbnRlZCBKYXZhc2NyaXB0IHVzZWQgZm9yIERPTSBtYW5pcHVsYXRpb24nLFxuICB9LFxuXTtcblxuY29uc3QgcmVmID0gbmV3IExpc3RMaW5rSXRlbShyZWZEYXRhKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlZi5saXN0KTtcblxuLy8gZm9vdGVyXG5jb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIuZm9vdGVyQmxvY2suZWxlbWVudCk7XG5cbi8vIGFkZCBhbGwgZnJhZ21lbnRzXG5yb290LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var _ElementText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Header = function Header(props) {\n  _classCallCheck(this, Header);\n\n  this.headerBlock = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    elem: 'header',\n    \"class\": 'header'\n  });\n  this.title = new _ElementText__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: 'h1',\n    \"class\": 'title',\n    text: \"\".concat(props.title, \" function\")\n  });\n  this.text = new _ElementText__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: 'p',\n    \"class\": 'copy',\n    text: \"This is a \".concat(props.title, \" function practice!\")\n  });\n  this.headerBlock.element.appendChild(this.title.element);\n  this.headerBlock.element.appendChild(this.text.element);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9IZWFkZXIuanM/ZWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IEVsZW1lbnRUZXh0IGZyb20gJy4vRWxlbWVudFRleHQnO1xuY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmhlYWRlckJsb2NrID0gbmV3IEVsZW1lbnQoeyBlbGVtOiAnaGVhZGVyJywgY2xhc3M6ICdoZWFkZXInIH0pO1xuICAgIHRoaXMudGl0bGUgPSBuZXcgRWxlbWVudFRleHQoe1xuICAgICAgZWxlbTogJ2gxJyxcbiAgICAgIGNsYXNzOiAndGl0bGUnLFxuICAgICAgdGV4dDogYCR7cHJvcHMudGl0bGV9IGZ1bmN0aW9uYCxcbiAgICB9KTtcbiAgICB0aGlzLnRleHQgPSBuZXcgRWxlbWVudFRleHQoe1xuICAgICAgZWxlbTogJ3AnLFxuICAgICAgY2xhc3M6ICdjb3B5JyxcbiAgICAgIHRleHQ6IGBUaGlzIGlzIGEgJHtwcm9wcy50aXRsZX0gZnVuY3Rpb24gcHJhY3RpY2UhYCxcbiAgICB9KTtcbiAgICB0aGlzLmhlYWRlckJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZS5lbGVtZW50KTtcbiAgICB0aGlzLmhlYWRlckJsb2NrLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0LmVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Element = function Element(props) {\n  _classCallCheck(this, Element);\n\n  this.element = document.createElement(props.elem);\n  if (props[\"class\"]) this.element.className = props[\"class\"];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Element);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9FbGVtZW50LmpzP2RhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwcm9wcy5lbGVtKTtcbiAgICBpZiAocHJvcHMuY2xhc3MpIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBwcm9wcy5jbGFzcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ElementText = /*#__PURE__*/function (_Element) {\n  _inherits(ElementText, _Element);\n\n  var _super = _createSuper(ElementText);\n\n  function ElementText(props) {\n    var _this;\n\n    _classCallCheck(this, ElementText);\n\n    _this = _super.call(this, props);\n    _this.element.textContent = props.text;\n    return _this;\n  }\n\n  return ElementText;\n}(_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElementText);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9FbGVtZW50VGV4dC5qcz83YWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5cbmNsYXNzIEVsZW1lbnRUZXh0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHByb3BzLnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudFRleHQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOztBQUxBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ListLinkItem = /*#__PURE__*/function (_List) {\n  _inherits(ListLinkItem, _List);\n\n  var _super = _createSuper(ListLinkItem);\n\n  function ListLinkItem(props) {\n    var _this;\n\n    _classCallCheck(this, ListLinkItem);\n\n    _this = _super.call(this);\n    _this.list.className = 'list';\n    _this.fragment = document.createDocumentFragment();\n    props.map(function (props) {\n      _this.listItem = document.createElement('li');\n      _this.link = document.createElement('a');\n      _this.link.textContent = props.title;\n      _this.link.href = props.url;\n\n      _this.listItem.appendChild(_this.link);\n\n      _this.fragment.appendChild(_this.listItem);\n    });\n\n    _this.list.appendChild(_this.fragment);\n\n    return _this;\n  }\n\n  return ListLinkItem;\n}(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListLinkItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9MaXN0TGlua0l0ZW0uanM/NmM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuXG5jbGFzcyBMaXN0TGlua0l0ZW0gZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubGlzdC5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgdGhpcy5mcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBwcm9wcy5tYXAoKHByb3BzKSA9PiB7XG4gICAgICB0aGlzLmxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHRoaXMubGluay50ZXh0Q29udGVudCA9IHByb3BzLnRpdGxlO1xuICAgICAgdGhpcy5saW5rLmhyZWYgPSBwcm9wcy51cmw7XG4gICAgICB0aGlzLmxpc3RJdGVtLmFwcGVuZENoaWxkKHRoaXMubGluayk7XG4gICAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMubGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0aGlzLmZyYWdtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0TGlua0l0ZW07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBYUE7QUFDQTs7QUFmQTtBQUNBO0FBZ0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar List = function List() {\n  _classCallCheck(this, List);\n\n  this.list = document.createElement('ul');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9MaXN0LmpzPzJiNzciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Footer = function Footer() {\n  _classCallCheck(this, Footer);\n\n  this.footerBlock = new _Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    elem: 'footer',\n    \"class\": 'footer'\n  });\n  this.home = new _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  this.footerBlock.element.appendChild(this.home.link);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9Gb290ZXIuanM/MDQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY2xhc3MgRm9vdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mb290ZXJCbG9jayA9IG5ldyBFbGVtZW50KHsgZWxlbTogJ2Zvb3RlcicsIGNsYXNzOiAnZm9vdGVyJyB9KTtcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSgpO1xuICAgIHRoaXMuZm9vdGVyQmxvY2suZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmhvbWUubGluayk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Home = function Home() {\n  _classCallCheck(this, Home);\n\n  this.link = document.createElement('a');\n  this.text = document.createTextNode('Home🏠');\n  this.link.href = '../index.html';\n  this.link.className = 'home';\n  this.link.appendChild(this.text);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NsYXNzL2NvbXBvbmVudHMvSG9tZS5qcz81NGRmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy50ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG4gICAgdGhpcy5saW5rLmhyZWYgPSAnLi4vaW5kZXguaHRtbCc7XG4gICAgdGhpcy5saW5rLmNsYXNzTmFtZSA9ICdob21lJztcbiAgICB0aGlzLmxpbmsuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);