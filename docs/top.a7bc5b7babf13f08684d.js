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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar root = document.getElementById('root');\nvar fragment = document.createDocumentFragment();\nvar title = document.createElement('h1');\nvar titleText = document.createTextNode('JavaScript Playground');\nvar sub = document.createElement('p');\nvar subText = document.createTextNode('This is a personal playground for strengthening basic JavaScript skills.');\ntitle.appendChild(titleText);\nsub.appendChild(subText);\nfragment.appendChild(title);\nfragment.appendChild(sub);\nvar practiceItems = ['class', 'factory', 'cookie'];\nvar links = document.createElement('ul');\nlinks.className = \"page-links\";\nvar linksFragment = document.createDocumentFragment();\npracticeItems.map(function (item) {\n  var list = document.createElement('li');\n  list.className = \"page-link\";\n  var link = document.createElement('a');\n  var linkText = document.createTextNode(\"\".concat(item, \" practice page\"));\n  link.href = \"\".concat(item, \"/index.html\");\n  link.className = \"button button--black \".concat(item, \"-link\");\n  link.appendChild(linkText);\n  list.appendChild(link);\n  linksFragment.appendChild(list);\n});\nlinks.appendChild(linksFragment);\nfragment.appendChild(links);\nvar githubLink = document.createElement('a');\nvar githubLinkText = document.createTextNode('See code');\ngithubLink.href = 'https://github.com/webiroha/playground';\ngithubLink.className = 'button button--line';\ngithubLink.appendChild(githubLinkText);\nfragment.appendChild(githubLink);\nroot.appendChild(fragment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSmF2YVNjcmlwdCBQbGF5Z3JvdW5kJyk7XG5jb25zdCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICdUaGlzIGlzIGEgcGVyc29uYWwgcGxheWdyb3VuZCBmb3Igc3RyZW5ndGhlbmluZyBiYXNpYyBKYXZhU2NyaXB0IHNraWxscy4nXG4pO1xuXG50aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuc3ViLmFwcGVuZENoaWxkKHN1YlRleHQpO1xuXG5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChzdWIpO1xuXG5jb25zdCBwcmFjdGljZUl0ZW1zID0gWydjbGFzcycsICdmYWN0b3J5JywgJ2Nvb2tpZSddO1xuXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5saW5rcy5jbGFzc05hbWUgPSBgcGFnZS1saW5rc2A7XG5jb25zdCBsaW5rc0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xucHJhY3RpY2VJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3QuY2xhc3NOYW1lID0gYHBhZ2UtbGlua2A7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7aXRlbX0gcHJhY3RpY2UgcGFnZWApO1xuICBsaW5rLmhyZWYgPSBgJHtpdGVtfS9pbmRleC5odG1sYDtcbiAgbGluay5jbGFzc05hbWUgPSBgYnV0dG9uIGJ1dHRvbi0tYmxhY2sgJHtpdGVtfS1saW5rYDtcbiAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XG4gIGxpc3QuYXBwZW5kQ2hpbGQobGluayk7XG4gIGxpbmtzRnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG59KTtcblxubGlua3MuYXBwZW5kQ2hpbGQobGlua3NGcmFnbWVudCk7XG5mcmFnbWVudC5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbmNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBnaXRodWJMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgY29kZScpO1xuZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS93ZWJpcm9oYS9wbGF5Z3JvdW5kJztcbmdpdGh1YkxpbmsuY2xhc3NOYW1lID0gJ2J1dHRvbiBidXR0b24tLWxpbmUnO1xuXG5naXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkxpbmtUZXh0KTtcbmZyYWdtZW50LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG5yb290LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzM4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);