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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar title = document.createElement('h1');\nvar titleText = document.createTextNode('JavaScript Playground');\nvar sub = document.createElement('p');\nvar subText = document.createTextNode('This is a personal playground for strengthening basic JavaScript skills.');\nvar githubLink = document.createElement('a');\nvar githubLinkText = document.createTextNode('See code');\ngithubLink.href = 'https://github.com/webiroha/playground';\ngithubLink.className = 'github-link button';\ntitle.appendChild(titleText);\nsub.appendChild(subText);\ngithubLink.appendChild(githubLinkText);\nfragment.appendChild(title);\nfragment.appendChild(sub);\nfragment.appendChild(githubLink);\nvar practiceItems = ['class', 'factory', 'cookie'];\nvar links = document.createElement('ul');\nlinks.className = \"page-links\";\nvar linksFragment = document.createDocumentFragment();\npracticeItems.map(function (item) {\n  var list = document.createElement('li');\n  list.className = \"page-link\";\n  var link = document.createElement('a');\n  var linkText = document.createTextNode(\"\".concat(item, \" practice page\"));\n  link.href = \"\".concat(item, \"/index.html\");\n  link.className = \"\".concat(item, \"-link button\");\n  link.appendChild(linkText);\n  list.appendChild(link);\n  linksFragment.appendChild(list);\n});\nlinks.appendChild(linksFragment);\nfragment.appendChild(links);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSmF2YVNjcmlwdCBQbGF5Z3JvdW5kJyk7XG5jb25zdCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICdUaGlzIGlzIGEgcGVyc29uYWwgcGxheWdyb3VuZCBmb3Igc3RyZW5ndGhlbmluZyBiYXNpYyBKYXZhU2NyaXB0IHNraWxscy4nXG4pO1xuXG5jb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3QgZ2l0aHViTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIGNvZGUnKTtcbmdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vd2ViaXJvaGEvcGxheWdyb3VuZCc7XG5naXRodWJMaW5rLmNsYXNzTmFtZSA9ICdnaXRodWItbGluayBidXR0b24nO1xuXG50aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuc3ViLmFwcGVuZENoaWxkKHN1YlRleHQpO1xuZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJMaW5rVGV4dCk7XG5cbmZyYWdtZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKHN1Yik7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuY29uc3QgcHJhY3RpY2VJdGVtcyA9IFsnY2xhc3MnLCAnZmFjdG9yeScsICdjb29raWUnXTtcblxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGlua3MuY2xhc3NOYW1lID0gYHBhZ2UtbGlua3NgO1xuY29uc3QgbGlua3NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbnByYWN0aWNlSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0LmNsYXNzTmFtZSA9IGBwYWdlLWxpbmtgO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2l0ZW19IHByYWN0aWNlIHBhZ2VgKTtcbiAgbGluay5ocmVmID0gYCR7aXRlbX0vaW5kZXguaHRtbGA7XG4gIGxpbmsuY2xhc3NOYW1lID0gYCR7aXRlbX0tbGluayBidXR0b25gO1xuICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcbiAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgbGlua3NGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0KTtcbn0pO1xuXG5saW5rcy5hcHBlbmRDaGlsZChsaW5rc0ZyYWdtZW50KTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKGxpbmtzKTtcblxucm9vdC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);