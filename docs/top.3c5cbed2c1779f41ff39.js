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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment(); // title and subtitle\n\nvar title = document.createElement('h1');\nvar titleText = document.createTextNode('JavaScript Playground');\nvar sub = document.createElement('p');\nvar subText = document.createTextNode('This is a personal playground for strengthening basic JavaScript skills.');\ntitle.appendChild(titleText);\nsub.appendChild(subText);\nfragment.appendChild(title);\nfragment.appendChild(sub); // for nav buttons\n\nvar practiceItems = ['class', 'factory', 'cookie'];\nvar nav = document.createElement('nav');\nnav.className = \"nav\";\nvar navList = document.createElement('ul');\nnavList.className = \"nav__list\";\nvar navListFragment = document.createDocumentFragment();\npracticeItems.map(function (item) {\n  var navItem = document.createElement('li');\n  navItem.className = \"nav__item\";\n  var link = document.createElement('a');\n  var linkText = document.createTextNode(\"\".concat(item, \" practice page\"));\n  link.href = \"\".concat(item, \"/index.html\");\n  link.className = \"button button--black\";\n  link.appendChild(linkText);\n  navItem.appendChild(link);\n  navListFragment.appendChild(navItem);\n});\nnavList.appendChild(navListFragment);\nnav.appendChild(navList);\nfragment.appendChild(navList); // github link\n\nvar githubLink = document.createElement('a');\nvar githubLinkText = document.createTextNode('See code');\ngithubLink.href = 'https://github.com/webiroha/playground';\ngithubLink.className = 'button button--line';\ngithubLink.appendChild(githubLinkText);\nfragment.appendChild(githubLink); // add all elements to root\n\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4vLyB0aXRsZSBhbmQgc3VidGl0bGVcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdKYXZhU2NyaXB0IFBsYXlncm91bmQnKTtcbmNvbnN0IHN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgJ1RoaXMgaXMgYSBwZXJzb25hbCBwbGF5Z3JvdW5kIGZvciBzdHJlbmd0aGVuaW5nIGJhc2ljIEphdmFTY3JpcHQgc2tpbGxzLidcbik7XG5cbnRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5zdWIuYXBwZW5kQ2hpbGQoc3ViVGV4dCk7XG5cbmZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHN1Yik7XG5cbi8vIGZvciBuYXYgYnV0dG9uc1xuY29uc3QgcHJhY3RpY2VJdGVtcyA9IFsnY2xhc3MnLCAnZmFjdG9yeScsICdjb29raWUnXTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5uYXYuY2xhc3NOYW1lID0gYG5hdmA7XG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm5hdkxpc3QuY2xhc3NOYW1lID0gYG5hdl9fbGlzdGA7XG5jb25zdCBuYXZMaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5wcmFjdGljZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbmF2SXRlbS5jbGFzc05hbWUgPSBgbmF2X19pdGVtYDtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgbGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtpdGVtfSBwcmFjdGljZSBwYWdlYCk7XG4gIGxpbmsuaHJlZiA9IGAke2l0ZW19L2luZGV4Lmh0bWxgO1xuICBsaW5rLmNsYXNzTmFtZSA9IGBidXR0b24gYnV0dG9uLS1ibGFja2A7XG4gIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuICBuYXZJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xuICBuYXZMaXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG59KTtcblxubmF2TGlzdC5hcHBlbmRDaGlsZChuYXZMaXN0RnJhZ21lbnQpO1xubmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbi8vIGdpdGh1YiBsaW5rXG5jb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgZ2l0aHViTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIGNvZGUnKTtcbmdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vd2ViaXJvaGEvcGxheWdyb3VuZCc7XG5naXRodWJMaW5rLmNsYXNzTmFtZSA9ICdidXR0b24gYnV0dG9uLS1saW5lJztcblxuZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJMaW5rVGV4dCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuLy8gYWRkIGFsbCBlbGVtZW50cyB0byByb290XG5yb290LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzPzRjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);