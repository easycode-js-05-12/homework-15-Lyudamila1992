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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./images/back.png":
/*!*************************!*\
  !*** ./images/back.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"74f71ff31a38412c85240ef7cf595a82.png\";\n\n//# sourceURL=webpack:///./images/back.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_back_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/back.png */ \"./images/back.png\");\n/* harmony import */ var _images_back_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_back_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _view_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/elements */ \"./js/view/elements.js\");\n/* harmony import */ var _view_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/ui */ \"./js/view/ui.js\");\n\n\n\n\n\nvar ui = new _view_ui__WEBPACK_IMPORTED_MODULE_3__[\"Ui\"]();\nvar uiDelete = new _view_ui__WEBPACK_IMPORTED_MODULE_3__[\"UiDelete\"]();\n_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"select\"].addEventListener('change', function (e) {\n  addClass();\n});\n/** function addClass\r\n* @desc adds class to html-elements\r\n* @param (*) \r\n* @returns {*} \r\n*/\n\nfunction addClass() {\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"select\"].classList.add('red-focus');\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"title\"].classList.add('red-focus');\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"number\"].classList.add('red-focus');\n  return;\n}\n/** function deleteClass\r\n* @desc deletes class to html-elements\r\n* @param (*) \r\n* @returns {*} \r\n*/\n\n\nfunction deleteClass() {\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"select\"].classList.remove('red-focus');\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"title\"].classList.remove('red-focus');\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"number\"].classList.remove('red-focus');\n  return;\n}\n\n_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"form\"].addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"select\"].value === \"income\") {\n    ui.addNewMoneyToStorage(_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"title\"].value, _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"number\"].value, _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"value1\"]);\n  }\n\n  if (_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"select\"].value === \"expense\") {\n    ui.addNewMoneyToStorage(_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"title\"].value, _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"number\"].value, _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"value2\"]);\n    deleteClass();\n  }\n\n  _view_elements__WEBPACK_IMPORTED_MODULE_2__[\"form\"].reset();\n});\n_view_elements__WEBPACK_IMPORTED_MODULE_2__[\"container\"].addEventListener('click', function (e) {\n  if (e.target.classList.contains('ion-ios-close-outline')) {\n    var id = e.target.closest('[data-id]').dataset.id;\n    uiDelete.deleteMoneyFromStorage1(id);\n    uiDelete.deleteMoneyFromStorage2(id);\n    return;\n  }\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/view/elements.js":
/*!*****************************!*\
  !*** ./js/view/elements.js ***!
  \*****************************/
/*! exports provided: storage1, storage2, form, title, number, select, value1, value2, col1, col2, container, znak, sumIncomes, sumExpenses, sumBudget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage1\", function() { return storage1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage2\", function() { return storage2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"number\", function() { return number; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"value1\", function() { return value1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"value2\", function() { return value2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col1\", function() { return col1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col2\", function() { return col2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"znak\", function() { return znak; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumIncomes\", function() { return sumIncomes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumExpenses\", function() { return sumExpenses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumBudget\", function() { return sumBudget; });\nvar storage1 = {\n  incomes: []\n};\nvar storage2 = {\n  expenses: []\n};\nvar form = document.forms['addToForm'];\nvar title = form.elements['title'];\nvar number = form.elements['number'];\nvar select = document.querySelector('.add__type');\nvar value1 = select.options[0].value;\nvar value2 = select.options[1].value;\nvar col1 = document.querySelector('.income');\nvar col2 = document.querySelector('.expenses');\nvar container = document.querySelector('.container');\nvar znak;\nvar sumIncomes;\nvar sumExpenses;\nvar sumBudget;\n\n\n//# sourceURL=webpack:///./js/view/elements.js?");

/***/ }),

/***/ "./js/view/ui.js":
/*!***********************!*\
  !*** ./js/view/ui.js ***!
  \***********************/
/*! exports provided: Ui, UiDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UiDelete\", function() { return UiDelete; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/view/elements.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Ui =\n/*#__PURE__*/\nfunction () {\n  function Ui() {\n    _classCallCheck(this, Ui);\n  }\n\n  _createClass(Ui, [{\n    key: \"generateId\",\n\n    /**\r\n    * @desc generates Id\r\n    * @param (*) \r\n    */\n    value: function generateId() {\n      var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';\n      var id = '';\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var char = _step.value;\n          var index = Math.floor(Math.random() * words.length);\n          id += words[index];\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      ;\n      return id;\n    }\n    /** \r\n    * @desc adds new data to storage\r\n    * @param (title) title\r\n    * @param (number) number\r\n    * @param (value) value\r\n    */\n\n  }, {\n    key: \"addNewMoneyToStorage\",\n    value: function addNewMoneyToStorage(title, number, value) {\n      if (!title) return console.log('Введите заголовок');\n      if (!number) return console.log('Введите цифру');\n      var newMoney = {\n        title: title,\n        number: number,\n        id: this.generateId()\n      };\n\n      if (value === _elements__WEBPACK_IMPORTED_MODULE_0__[\"select\"].options[0].value) {\n        this.znak = \"+\";\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes.push(newMoney);\n        this.addNewMoneyIncomesToView(newMoney);\n        this.sumOfIncomes(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes);\n        this.budget(_elements__WEBPACK_IMPORTED_MODULE_0__[\"sumIncomes\"], _elements__WEBPACK_IMPORTED_MODULE_0__[\"sumExpenses\"]);\n        return newMoney;\n      } else {\n        this.znak = \"-\";\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses.push(newMoney);\n        this.addNewMoneyExpensesToView(newMoney);\n        this.sumOfExpenses(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses);\n        this.budget(_elements__WEBPACK_IMPORTED_MODULE_0__[\"sumIncomes\"], _elements__WEBPACK_IMPORTED_MODULE_0__[\"sumExpenses\"]);\n        return newMoney;\n      }\n    }\n    /** \r\n    * @desc adds data about incomes to html markup\r\n    * @param (newMoney) object\r\n    */\n\n  }, {\n    key: \"addNewMoneyIncomesToView\",\n    value: function addNewMoneyIncomesToView(newMoney) {\n      var template = this.moneyTemplate(newMoney);\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"col1\"].insertAdjacentHTML('beforeend', template);\n      return;\n    }\n    /** \r\n    * @desc adds numbers of incomes\r\n    * @param (*) \r\n    */\n\n  }, {\n    key: \"sumOfIncomes\",\n    value: function sumOfIncomes() {\n      this.sumIncomes = 0;\n\n      for (var i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes.length; i++) {\n        this.sumIncomes = this.sumIncomes + parseInt(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes[i].number);\n      }\n\n      this.sumOfIncomesView(_elements__WEBPACK_IMPORTED_MODULE_0__[\"sumIncomes\"]);\n      return;\n    }\n    /** \r\n    * @desc calculates the budget\r\n    * @param (*) \r\n    */\n\n  }, {\n    key: \"budget\",\n    value: function budget() {\n      if (this.sumExpenses !== undefined && this.sumIncomes !== undefined) {\n        this.sumBudget = this.sumIncomes - this.sumExpenses;\n      } else if (this.sumIncomes !== undefined) {\n        this.sumBudget = this.sumIncomes;\n      } else if (this.sumExpenses !== undefined) {\n        this.sumBudget = this.sumExpenses;\n      }\n\n      this.budgetView(_elements__WEBPACK_IMPORTED_MODULE_0__[\"sumBudget\"]);\n      return;\n    }\n    /** \r\n    * @desc adds data about expenses to html markup\r\n    * @param (newMoney) object\r\n    */\n\n  }, {\n    key: \"addNewMoneyExpensesToView\",\n    value: function addNewMoneyExpensesToView(newMoney) {\n      var template = this.moneyTemplate(newMoney);\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"col2\"].insertAdjacentHTML('beforeend', template);\n      return;\n    }\n    /** \r\n    * @desc adds numbers of expenses\r\n    * @param (*) \r\n    */\n\n  }, {\n    key: \"sumOfExpenses\",\n    value: function sumOfExpenses() {\n      this.sumExpenses = 0;\n\n      for (var i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses.length; i++) {\n        this.sumExpenses = this.sumExpenses + parseInt(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses[i].number);\n      }\n\n      this.sumOfExpensesView(this.sumExpenses);\n      return;\n    }\n    /** \r\n    * @desc adds html code with information about incomes or expenses to html markup\r\n    * @param (newMoney) object\r\n    */\n\n  }, {\n    key: \"moneyTemplate\",\n    value: function moneyTemplate(newMoney) {\n      return \"\\n            <div class=\\\"item clearfix\\\" data-id=\\\"\".concat(newMoney.id, \"\\\">\\n                <div class=\\\"item__description\\\">\").concat(newMoney.title, \"</div>\\n                <div class=\\\"right clearfix\\\">\\n                    <div class=\\\"item__value\\\">\").concat(this.znak).concat(newMoney.number, \"</div>\\n                    <div class=\\\"item__delete\\\">\\n                        <button class=\\\"item__delete--btn\\\"><i class=\\\"ion-ios-close-outline\\\"></i></button>\\n                    </div>\\n                </div>\\n            </div>\\n        \");\n    }\n    /** \r\n    * @desc adds sum of incomes to html markup\r\n    * @param (sumIncomes) number \r\n    */\n\n  }, {\n    key: \"sumOfIncomesView\",\n    value: function sumOfIncomesView(sumIncomes) {\n      document.querySelector('.budget__income--value').textContent = \"+\".concat(this.sumIncomes);\n      return this.sumIncomes;\n    }\n    /** \r\n    * @desc adds availeble budget to html markup\r\n    * @param (sumBudget) number \r\n    */\n\n  }, {\n    key: \"budgetView\",\n    value: function budgetView(sumBudget) {\n      document.querySelector('.budget__value').textContent = \"\".concat(this.sumBudget);\n      return;\n    }\n    /**\r\n    * @desc adds sum of expenses to html markup\r\n    * @param (sumExpenses) number \r\n    */\n\n  }, {\n    key: \"sumOfExpensesView\",\n    value: function sumOfExpensesView(sumExpenses) {\n      document.querySelector('.budget__expenses--value').textContent = \"-\".concat(this.sumExpenses);\n      return this.sumExpenses;\n    }\n  }]);\n\n  return Ui;\n}();\nvar UiDelete =\n/*#__PURE__*/\nfunction () {\n  function UiDelete() {\n    _classCallCheck(this, UiDelete);\n  }\n\n  _createClass(UiDelete, [{\n    key: \"deleteMoneyFromStorage1\",\n\n    /** \r\n    * @desc deletes data about incomes from storage\r\n    * @param (id) string\r\n    */\n    value: function deleteMoneyFromStorage1(id) {\n      var removedMoney;\n\n      for (var i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes.length; i++) {\n        if (_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes[i].id === id) {\n          removedMoney = _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes.splice(i, 1);\n          break;\n        }\n      }\n\n      ;\n      ui.sumOfIncomes(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage1\"].incomes);\n      ui.budget();\n      this.deleteMoneyFromView(id);\n      return removedMoney;\n    }\n    /** \r\n    * @desc deletes data about expenses from storage\r\n    * @param (id) string\r\n    */\n\n  }, {\n    key: \"deleteMoneyFromStorage2\",\n    value: function deleteMoneyFromStorage2(id) {\n      var removedMoney2;\n\n      for (var i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses.length; i++) {\n        if (_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses[i].id === id) {\n          removedMoney2 = _elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses.splice(i, 1);\n          break;\n        }\n      }\n\n      ;\n      ui.sumOfExpenses(_elements__WEBPACK_IMPORTED_MODULE_0__[\"storage2\"].expenses);\n      ui.budget();\n      this.deleteMoneyFromView(id);\n      return removedMoney2;\n    }\n    /** \r\n    * @desc deletes data about incomes or expenses from html markup\r\n    * @param (id) string\r\n    */\n\n  }, {\n    key: \"deleteMoneyFromView\",\n    value: function deleteMoneyFromView(id) {\n      var target = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n      target.parentElement.removeChild(target);\n      return;\n    }\n  }]);\n\n  return UiDelete;\n}();\nvar ui = new Ui();\nvar uiDelete = new UiDelete();\n\n//# sourceURL=webpack:///./js/view/ui.js?");

/***/ })

/******/ });