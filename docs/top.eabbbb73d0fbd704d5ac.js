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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar title = document.createElement('h1');\nvar titleText = document.createTextNode('JavaScript Playground');\nvar sub = document.createElement('p');\nvar subText = document.createTextNode('This is a personal playground for strengthening basic JavaScript skills.');\ntitle.appendChild(titleText);\nsub.appendChild(subText);\nfragment.appendChild(title);\nfragment.appendChild(sub);\nvar practiceItems = ['class', 'factory', 'cookie'];\nvar nav = document.createElement('nav');\nnav.className = \"nav\";\nvar navList = document.createElement('ul');\nnavList.className = \"nav__list\";\nvar navListFragment = document.createDocumentFragment();\npracticeItems.map(function (item) {\n  var navItem = document.createElement('li');\n  navItem.className = \"nav__item\";\n  var link = document.createElement('a');\n  var linkText = document.createTextNode(\"\".concat(item, \" practice page\"));\n  link.href = \"\".concat(item, \"/index.html\");\n  link.className = \"button button--black\";\n  link.appendChild(linkText);\n  navItem.appendChild(link);\n  navListFragment.appendChild(navItem);\n});\nnavList.appendChild(navListFragment);\nnav.appendChild(navList);\nfragment.appendChild(navList);\nvar githubLink = document.createElement('a');\nvar githubLinkText = document.createTextNode('See code');\ngithubLink.href = 'https://github.com/webiroha/playground';\ngithubLink.className = 'button button--line github-link';\ngithubLink.appendChild(githubLinkText);\nfragment.appendChild(githubLink);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSmF2YVNjcmlwdCBQbGF5Z3JvdW5kJyk7XG5jb25zdCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICdUaGlzIGlzIGEgcGVyc29uYWwgcGxheWdyb3VuZCBmb3Igc3RyZW5ndGhlbmluZyBiYXNpYyBKYXZhU2NyaXB0IHNraWxscy4nXG4pO1xuXG50aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuc3ViLmFwcGVuZENoaWxkKHN1YlRleHQpO1xuXG5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChzdWIpO1xuXG5jb25zdCBwcmFjdGljZUl0ZW1zID0gWydjbGFzcycsICdmYWN0b3J5JywgJ2Nvb2tpZSddO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbm5hdi5jbGFzc05hbWUgPSBgbmF2YDtcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubmF2TGlzdC5jbGFzc05hbWUgPSBgbmF2X19saXN0YDtcbmNvbnN0IG5hdkxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbnByYWN0aWNlSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBuYXZJdGVtLmNsYXNzTmFtZSA9IGBuYXZfX2l0ZW1gO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2l0ZW19IHByYWN0aWNlIHBhZ2VgKTtcbiAgbGluay5ocmVmID0gYCR7aXRlbX0vaW5kZXguaHRtbGA7XG4gIGxpbmsuY2xhc3NOYW1lID0gYGJ1dHRvbiBidXR0b24tLWJsYWNrYDtcbiAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XG4gIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XG4gIG5hdkxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbn0pO1xuXG5uYXZMaXN0LmFwcGVuZENoaWxkKG5hdkxpc3RGcmFnbWVudCk7XG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IGdpdGh1YkxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBjb2RlJyk7XG5naXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3dlYmlyb2hhL3BsYXlncm91bmQnO1xuZ2l0aHViTGluay5jbGFzc05hbWUgPSAnYnV0dG9uIGJ1dHRvbi0tbGluZSBnaXRodWItbGluayc7XG5cbmdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViTGlua1RleHQpO1xuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbnJvb3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

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