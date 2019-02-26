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
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//The Variables
var sum = document.querySelector('.calc-container-screen-sum');
var result = document.querySelector('.calc-container-screen-result');
var math = document.querySelectorAll('.math');
var equals = document.querySelector('.equal');
var clear = document.querySelector('.clear');
var del = document.querySelector('.del'); // var funk = document.querySelectorAll('.funk');
//All Mathematical values in a loop 

math.forEach(function (num) {
  num.addEventListener('click', function () {
    var nr = num.innerHTML;
    sum.innerHTML += nr;
  });
}); //The equals button

equals.addEventListener('click', function () {
  result.innerHTML = eval(sum.innerHTML);
  sum.innerHTML = '';
}); //The clear button

clear.addEventListener('click', function () {
  sum.innerHTML = '';
  result.innerHTML = 0;
  document.body.style.background;
}); //The delete button

del.addEventListener('click', function () {
  var str = sum.innerHTML;
  var res = str.slice(0, -1);
  sum.innerHTML = res;
}); //Change the colors
// funk.forEach(function(fx){
//     fx.addEventListener('click', function(){
//         var color1 = 'rgb(' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + ')';
//         var color2 = 'rgb(' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + 
//         ',' + (Math.floor(Math.random() * 256)) + ')';
//         document.body.style.backgroundImage = 
//         "-webkit-linear-gradient("+ color1 +" , "+ color2 +")";
//     })
// });

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/main.js ./src/css/main.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/css/main.css */"./src/css/main.css");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJzdW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXN1bHQiLCJtYXRoIiwicXVlcnlTZWxlY3RvckFsbCIsImVxdWFscyIsImNsZWFyIiwiZGVsIiwiZm9yRWFjaCIsIm51bSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuciIsImlubmVySFRNTCIsImV2YWwiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3RyIiwicmVzIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUlBLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUFWO0FBQ0EsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQWI7QUFDQSxJQUFJRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBWDtBQUNBLElBQUlDLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxJQUFJSyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFaO0FBQ0EsSUFBSU0sR0FBRyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVixDLENBQ0E7QUFFQTs7QUFDQUUsSUFBSSxDQUFDSyxPQUFMLENBQWEsVUFBU0MsR0FBVCxFQUFhO0FBQ3RCQSxLQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVU7QUFDcEMsUUFBSUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLFNBQWI7QUFDQWIsT0FBRyxDQUFDYSxTQUFKLElBQWlCRCxFQUFqQjtBQUNILEdBSEQ7QUFJSCxDQUxELEUsQ0FPQTs7QUFDQU4sTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFVO0FBQ3ZDUixRQUFNLENBQUNVLFNBQVAsR0FBbUJDLElBQUksQ0FBQ2QsR0FBRyxDQUFDYSxTQUFMLENBQXZCO0FBQ0FiLEtBQUcsQ0FBQ2EsU0FBSixHQUFnQixFQUFoQjtBQUNILENBSEQsRSxDQUtBOztBQUNBTixLQUFLLENBQUNJLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDdENYLEtBQUcsQ0FBQ2EsU0FBSixHQUFnQixFQUFoQjtBQUNBVixRQUFNLENBQUNVLFNBQVAsR0FBbUIsQ0FBbkI7QUFDQVosVUFBUSxDQUFDYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFVBQXBCO0FBQ0gsQ0FKRCxFLENBTUE7O0FBQ0FULEdBQUcsQ0FBQ0csZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUNwQyxNQUFJTyxHQUFHLEdBQUdsQixHQUFHLENBQUNhLFNBQWQ7QUFDQSxNQUFJTSxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLENBQVYsRUFBWSxDQUFDLENBQWIsQ0FBVjtBQUNBcEIsS0FBRyxDQUFDYSxTQUFKLEdBQWdCTSxHQUFoQjtBQUNILENBSkQsRSxDQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy9UaGUgVmFyaWFibGVzXG52YXIgc3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGMtY29udGFpbmVyLXNjcmVlbi1zdW0nKTtcbnZhciByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsYy1jb250YWluZXItc2NyZWVuLXJlc3VsdCcpO1xudmFyIG1hdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0aCcpO1xudmFyIGVxdWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcXVhbCcpO1xudmFyIGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyJyk7XG52YXIgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbCcpO1xuLy8gdmFyIGZ1bmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnVuaycpO1xuXG4vL0FsbCBNYXRoZW1hdGljYWwgdmFsdWVzIGluIGEgbG9vcCBcbm1hdGguZm9yRWFjaChmdW5jdGlvbihudW0pe1xuICAgIG51bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBuciA9IG51bS5pbm5lckhUTUw7XG4gICAgICAgIHN1bS5pbm5lckhUTUwgKz0gbnI7ICAgIFxuICAgIH0pXG59KTtcblxuLy9UaGUgZXF1YWxzIGJ1dHRvblxuZXF1YWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICByZXN1bHQuaW5uZXJIVE1MID0gZXZhbChzdW0uaW5uZXJIVE1MKTtcbiAgICBzdW0uaW5uZXJIVE1MID0gJyc7XG59KTtcblxuLy9UaGUgY2xlYXIgYnV0dG9uXG5jbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgc3VtLmlubmVySFRNTCA9ICcnO1xuICAgIHJlc3VsdC5pbm5lckhUTUwgPSAwO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFxufSk7XG5cbi8vVGhlIGRlbGV0ZSBidXR0b25cbmRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHN0ciA9IHN1bS5pbm5lckhUTUw7XG4gICAgdmFyIHJlcyA9IHN0ci5zbGljZSgwLC0xKTtcbiAgICBzdW0uaW5uZXJIVE1MID0gcmVzO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9DaGFuZ2UgdGhlIGNvbG9yc1xuLy8gZnVuay5mb3JFYWNoKGZ1bmN0aW9uKGZ4KXtcbi8vICAgICBmeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIHZhciBjb2xvcjEgPSAncmdiKCcgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSkgKyBcbi8vICAgICAgICAgJywnICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpICsgXG4vLyAgICAgICAgICcsJyArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKSArICcpJztcbi8vICAgICAgICAgdmFyIGNvbG9yMiA9ICdyZ2IoJyArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKSArIFxuLy8gICAgICAgICAnLCcgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSkgKyBcbi8vICAgICAgICAgJywnICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpICsgJyknO1xuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFxuLy8gICAgICAgICBcIi13ZWJraXQtbGluZWFyLWdyYWRpZW50KFwiKyBjb2xvcjEgK1wiICwgXCIrIGNvbG9yMiArXCIpXCI7XG4vLyAgICAgfSlcbi8vIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==