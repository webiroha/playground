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
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);\n/* harmony import */ var _components_ListLinkItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment(); // Header\n\nvar headerData = {\n  title: 'class'\n};\nvar classHeader = new _components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](headerData);\nfragment.appendChild(classHeader.headerBlock); // References\n\nvar refTitle = document.createElement('h2');\nrefTitle.textContent = 'References';\nfragment.appendChild(refTitle);\nvar refData = [{\n  url: 'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',\n  title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components'\n}, {\n  url: 'https://stackoverflow.com/questions/41894492/how-is-object-oriented-javascript-used-for-dom-manipulation/41896245',\n  title: 'How is Object Oriented Javascript used for DOM manipulation'\n}];\nvar ref = new _components_ListLinkItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"](refData);\nfragment.appendChild(ref.lists); // footer\n\nvar footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar home = new _components_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nfooter.footerBlock.appendChild(home.homeLink);\nfragment.appendChild(footer.footerBlock); // add all fragments\n\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvaW5kZXguanM/YTczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExpc3RMaW5rSXRlbXMgZnJvbSAnLi9jb21wb25lbnRzL0xpc3RMaW5rSXRlbXMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG5jb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuLy8gSGVhZGVyXG5jb25zdCBoZWFkZXJEYXRhID0ge1xuICB0aXRsZTogJ2NsYXNzJyxcbn07XG5jb25zdCBjbGFzc0hlYWRlciA9IG5ldyBIZWFkZXIoaGVhZGVyRGF0YSk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChjbGFzc0hlYWRlci5oZWFkZXJCbG9jayk7XG5cbi8vIFJlZmVyZW5jZXNcbmNvbnN0IHJlZlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnJlZlRpdGxlLnRleHRDb250ZW50ID0gJ1JlZmVyZW5jZXMnO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVmVGl0bGUpO1xuXG5jb25zdCByZWZEYXRhID0gW1xuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vcmVhY3RpdmUtdWlzLXZhbmlsbGFqcy1wYXJ0LTItY2xhc3MtYmFzZWQtY29tcG9uZW50cy8nLFxuICAgIHRpdGxlOiAnUmVhY3RpdmUgVUnigJlzIHdpdGggVmFuaWxsYUpTIOKAkyBQYXJ0IDI6IENsYXNzIEJhc2VkIENvbXBvbmVudHMnLFxuICB9LFxuICB7XG4gICAgdXJsOlxuICAgICAgJ2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxODk0NDkyL2hvdy1pcy1vYmplY3Qtb3JpZW50ZWQtamF2YXNjcmlwdC11c2VkLWZvci1kb20tbWFuaXB1bGF0aW9uLzQxODk2MjQ1JyxcbiAgICB0aXRsZTogJ0hvdyBpcyBPYmplY3QgT3JpZW50ZWQgSmF2YXNjcmlwdCB1c2VkIGZvciBET00gbWFuaXB1bGF0aW9uJyxcbiAgfSxcbl07XG5jb25zdCByZWYgPSBuZXcgTGlzdExpbmtJdGVtcyhyZWZEYXRhKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlZi5saXN0cyk7XG5cbi8vIGZvb3RlclxuY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcigpO1xuY29uc3QgaG9tZSA9IG5ldyBIb21lKCk7XG5mb290ZXIuZm9vdGVyQmxvY2suYXBwZW5kQ2hpbGQoaG9tZS5ob21lTGluayk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIuZm9vdGVyQmxvY2spO1xuXG4vLyBhZGQgYWxsIGZyYWdtZW50c1xucm9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUhBO0FBTUE7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Header = function Header(props) {\n  _classCallCheck(this, Header);\n\n  this.fragment = document.createDocumentFragment();\n  this.headerBlock = document.createElement('header');\n  this.headerBlock.className = 'header';\n  this.headText = document.createElement('h1');\n  this.headText.textContent = \"\".concat(props.title, \" practice page\");\n  this.fragment.appendChild(this.headText);\n  this.headerBlock.appendChild(this.fragment);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9IZWFkZXIuanM/ZWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdGhpcy5oZWFkZXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIHRoaXMuaGVhZGVyQmxvY2suY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgdGhpcy5oZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGhpcy5oZWFkVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb3BzLnRpdGxlfSBwcmFjdGljZSBwYWdlYDtcbiAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMuaGVhZFRleHQpO1xuICAgIHRoaXMuaGVhZGVyQmxvY2suYXBwZW5kQ2hpbGQodGhpcy5mcmFnbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ListLinkItems = /*#__PURE__*/function (_List) {\n  _inherits(ListLinkItems, _List);\n\n  var _super = _createSuper(ListLinkItems);\n\n  function ListLinkItems(props) {\n    var _this;\n\n    _classCallCheck(this, ListLinkItems);\n\n    _this = _super.call(this);\n    _this.lists.className = 'list';\n    _this.fragment = document.createDocumentFragment();\n    props.map(function (props) {\n      _this.references = document.createElement('li');\n      _this.link = document.createElement('a');\n      _this.link.textContent = props.title;\n      _this.link.href = props.url;\n\n      _this.references.appendChild(_this.link);\n\n      _this.fragment.appendChild(_this.references);\n    });\n\n    _this.lists.appendChild(_this.fragment);\n\n    return _this;\n  }\n\n  return ListLinkItems;\n}(_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListLinkItems);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9MaXN0TGlua0l0ZW1zLmpzPzFjYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcblxuY2xhc3MgTGlzdExpbmtJdGVtcyBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5saXN0cy5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgdGhpcy5mcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBwcm9wcy5tYXAoKHByb3BzKSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgdGhpcy5saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGhpcy5saW5rLnRleHRDb250ZW50ID0gcHJvcHMudGl0bGU7XG4gICAgICB0aGlzLmxpbmsuaHJlZiA9IHByb3BzLnVybDtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5hcHBlbmRDaGlsZCh0aGlzLmxpbmspO1xuICAgICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlZmVyZW5jZXMpO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdHMuYXBwZW5kQ2hpbGQodGhpcy5mcmFnbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdExpbmtJdGVtcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBYkE7QUFhQTtBQUNBOztBQWZBO0FBQ0E7QUFnQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar List = function List() {\n  _classCallCheck(this, List);\n\n  this.lists = document.createElement('ul');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9MaXN0LmpzPzJiNzciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Footer = function Footer() {\n  _classCallCheck(this, Footer);\n\n  this.footerBlock = document.createElement('footer');\n  this.footerBlock.className = 'footer';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9Gb290ZXIuanM/MDQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb290ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvb3RlckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgdGhpcy5mb290ZXJCbG9jay5jbGFzc05hbWUgPSAnZm9vdGVyJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Home = function Home() {\n  _classCallCheck(this, Home);\n\n  this.homeLink = document.createElement('a');\n  this.homeLinkText = document.createTextNode('Home🏠');\n  this.homeLink.href = '../index.html';\n  this.homeLink.className = 'home';\n  this.homeLink.appendChild(this.homeLinkText);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9Ib21lLmpzPzU0ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy5ob21lTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSG9tZfCfj6AnKTtcbiAgICB0aGlzLmhvbWVMaW5rLmhyZWYgPSAnLi4vaW5kZXguaHRtbCc7XG4gICAgdGhpcy5ob21lTGluay5jbGFzc05hbWUgPSAnaG9tZSc7XG4gICAgdGhpcy5ob21lTGluay5hcHBlbmRDaGlsZCh0aGlzLmhvbWVMaW5rVGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);