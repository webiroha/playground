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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment(); // Header\n\nvar headerData = {\n  title: 'class',\n  text: 'class function'\n};\nvar classHeader = new _components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"](headerData);\nfragment.appendChild(classHeader.fragment); // References\n\nvar refTitle = document.createElement('h2');\nrefTitle.textContent = 'References';\nrefTitle.className = 'ref';\nfragment.appendChild(refTitle);\nvar refData = [{\n  url: 'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',\n  title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components'\n}, {\n  url: 'https://stackoverflow.com/questions/41894492/how-is-object-oriented-javascript-used-for-dom-manipulation/41896245',\n  title: 'How is Object Oriented Javascript used for DOM manipulation'\n}];\nvar ref = new _components_List__WEBPACK_IMPORTED_MODULE_1__[\"default\"](refData);\nfragment.appendChild(ref.links); // back home\n\nvar homeLink = document.createElement('a');\nvar homeLinkText = document.createTextNode('Home🏠');\nhomeLink.href = '../index.html';\nhomeLink.className = 'home-link';\nhomeLink.appendChild(homeLinkText);\nfragment.appendChild(homeLink); // add all fragments\n\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvaW5kZXguanM/YTczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4vLyBIZWFkZXJcbmNvbnN0IGhlYWRlckRhdGEgPSB7XG4gIHRpdGxlOiAnY2xhc3MnLFxuICB0ZXh0OiAnY2xhc3MgZnVuY3Rpb24nLFxufTtcbmNvbnN0IGNsYXNzSGVhZGVyID0gbmV3IEhlYWRlcihoZWFkZXJEYXRhKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKGNsYXNzSGVhZGVyLmZyYWdtZW50KTtcblxuLy8gUmVmZXJlbmNlc1xuY29uc3QgcmVmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucmVmVGl0bGUudGV4dENvbnRlbnQgPSAnUmVmZXJlbmNlcyc7XG5yZWZUaXRsZS5jbGFzc05hbWUgPSAncmVmJztcbmZyYWdtZW50LmFwcGVuZENoaWxkKHJlZlRpdGxlKTtcblxuY29uc3QgcmVmRGF0YSA9IFtcbiAge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL2Nzcy10cmlja3MuY29tL3JlYWN0aXZlLXVpcy12YW5pbGxhanMtcGFydC0yLWNsYXNzLWJhc2VkLWNvbXBvbmVudHMvJyxcbiAgICB0aXRsZTogJ1JlYWN0aXZlIFVJ4oCZcyB3aXRoIFZhbmlsbGFKUyDigJMgUGFydCAyOiBDbGFzcyBCYXNlZCBDb21wb25lbnRzJyxcbiAgfSxcbiAge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTg5NDQ5Mi9ob3ctaXMtb2JqZWN0LW9yaWVudGVkLWphdmFzY3JpcHQtdXNlZC1mb3ItZG9tLW1hbmlwdWxhdGlvbi80MTg5NjI0NScsXG4gICAgdGl0bGU6ICdIb3cgaXMgT2JqZWN0IE9yaWVudGVkIEphdmFzY3JpcHQgdXNlZCBmb3IgRE9NIG1hbmlwdWxhdGlvbicsXG4gIH0sXG5dO1xuY29uc3QgcmVmID0gbmV3IExpc3QocmVmRGF0YSk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChyZWYubGlua3MpO1xuXG4vLyBiYWNrIGhvbWVcbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgaG9tZUxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWXwn4+gJyk7XG5ob21lTGluay5ocmVmID0gJy4uL2luZGV4Lmh0bWwnO1xuaG9tZUxpbmsuY2xhc3NOYW1lID0gJ2hvbWUtbGluayc7XG5cbmhvbWVMaW5rLmFwcGVuZENoaWxkKGhvbWVMaW5rVGV4dCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChob21lTGluayk7XG5cbi8vIGFkZCBhbGwgZnJhZ21lbnRzXG5yb290LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFIQTtBQU1BO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Header = function Header(props) {\n  _classCallCheck(this, Header);\n\n  this.fragment = document.createDocumentFragment();\n  this.headText = document.createElement('h1');\n  this.headText.textContent = \"\".concat(props.title, \" practice page\");\n  this.copy = document.createElement('p');\n  this.copy.textContent = \"Currently, trying \".concat(props.text);\n  this.fragment.appendChild(this.headText);\n  this.fragment.appendChild(this.copy);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9IZWFkZXIuanM/ZWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdGhpcy5oZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGhpcy5oZWFkVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb3BzLnRpdGxlfSBwcmFjdGljZSBwYWdlYDtcbiAgICB0aGlzLmNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGhpcy5jb3B5LnRleHRDb250ZW50ID0gYEN1cnJlbnRseSwgdHJ5aW5nICR7cHJvcHMudGV4dH1gO1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5oZWFkVGV4dCk7XG4gICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvcHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar List = function List(props) {\n  var _this = this;\n\n  _classCallCheck(this, List);\n\n  this.links = document.createElement('ul');\n  this.links.className = 'list';\n  props.map(function (props) {\n    _this.references = document.createElement('li');\n    _this.link = document.createElement('a');\n    _this.link.textContent = props.title;\n    _this.link.href = props.url;\n\n    _this.references.appendChild(_this.link);\n\n    _this.links.appendChild(_this.references);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2xhc3MvY29tcG9uZW50cy9MaXN0LmpzPzJiNzciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5saW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGhpcy5saW5rcy5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgcHJvcHMubWFwKChwcm9wcykgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRoaXMubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHRoaXMubGluay50ZXh0Q29udGVudCA9IHByb3BzLnRpdGxlO1xuICAgICAgdGhpcy5saW5rLmhyZWYgPSBwcm9wcy51cmw7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQodGhpcy5saW5rKTtcbiAgICAgIHRoaXMubGlua3MuYXBwZW5kQ2hpbGQodGhpcy5yZWZlcmVuY2VzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);