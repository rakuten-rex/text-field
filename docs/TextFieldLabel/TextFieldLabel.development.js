/*!
 * 
 * @license @rakuten-rex/text-field v1.1.3 2020-02-20
 * TextFieldLabel/TextFieldLabel.development.js
 * 
 * Copyright (c) 2018-present, Rakuten, Inc.
 * 
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("rakutenRexTextField", ["react"], factory);
	else if(typeof exports === 'object')
		exports["rakutenRexTextField"] = factory(require("react"));
	else
		root["rakutenRexTextField"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(6);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelUi; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelUi_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _LabelUi_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LabelUi_scss__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react/jsx-props-no-spreading */


function LabelUi(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      className = _ref.className,
      state = _ref.state,
      labelRef = _ref.labelRef,
      id = _ref.id,
      style = _ref.style;

  var stateClass = function (stateClassName) {
    switch (stateClassName) {
      case 'error':
        return 'error';

      case 'valid':
        return 'valid';

      case 'active':
        return 'active';

      case 'focus':
        return 'focus';

      case 'hover':
        return 'hover';

      case 'disabled':
        return 'disabled';

      default:
        return '';
    }
  }(state);

  var classes = ['rex-text-field-label-ui', className, stateClass].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    id: id || null,
    htmlFor: htmlFor,
    className: classes,
    ref: labelRef,
    style: style
  }, label);
}
LabelUi.displayName = "LabelUi";
LabelUi.defaultProps = {
  htmlFor: null,
  label: '',
  className: '',
  state: '',
  labelRef: null,
  id: '',
  style: {}
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFieldUi; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextFieldUi_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _TextFieldUi_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextFieldUi_scss__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable no-unused-expressions */

/* eslint-disable react/jsx-props-no-spreading */


function TextFieldUi(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      state = _ref.state,
      label = _ref.label,
      labelId = _ref.labelId,
      id = _ref.id,
      style = _ref.style,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "placeholder", "className", "htmlFor", "state", "label", "labelId", "id", "style"]);

  var stateClass = function (stateClassName) {
    switch (stateClassName) {
      case 'error':
        return 'error';

      case 'valid':
        return 'valid';

      case 'active':
        return 'active';

      case 'focus':
        return 'focus';

      case 'hover':
        return 'hover';

      case 'disabled':
        return 'disabled';

      default:
        return '';
    }
  }(state);

  var classes = ['rex-text-field-ui', className, stateClass].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  var hasLabel = !!(label && label.length > 0);
  var borderClass = ['rex-text-field-ui-border', stateClass].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();

  var handleOnFocus = function handleOnFocus(e) {
    var textFieldBorder = e.target.parentNode.parentNode;
    var textFieldLabel = e.target.parentNode.parentNode.parentNode.previousSibling;
    textFieldBorder && textFieldBorder.classList.add('focus');
    textFieldLabel && textFieldLabel.classList.add('focus');
  };

  var handleOnFocusOut = function handleOnFocusOut(e) {
    var textFieldBorder = e.target.parentNode.parentNode;
    var textFieldLabel = e.target.parentNode.parentNode.parentNode.previousSibling;
    textFieldBorder && textFieldBorder.classList.remove('focus');
    textFieldLabel && textFieldLabel.classList.remove('focus');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: borderClass
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rex-text-field-inner"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    id: id,
    className: "rex-text-field-native",
    name: name,
    placeholder: placeholder,
    "aria-label": !hasLabel ? name || placeholder : null,
    "aria-labelledby": hasLabel ? labelId : null,
    onFocus: handleOnFocus,
    onBlur: handleOnFocusOut
  }, props)))));
}
TextFieldUi.displayName = "TextFieldUi";
TextFieldUi.defaultProps = {
  name: '',
  placeholder: '',
  className: '',
  htmlFor: '',
  state: '',
  label: '',
  labelId: '',
  id: '',
  style: {}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(1);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// EXTERNAL MODULE: ./src/LabelUi/LabelUi.jsx
var LabelUi = __webpack_require__(3);

// CONCATENATED MODULE: ./src/LabelUi/index.jsx

// EXTERNAL MODULE: ./src/TextFieldUi/TextFieldUi.jsx
var TextFieldUi = __webpack_require__(4);

// CONCATENATED MODULE: ./src/TextFieldUi/index.jsx

// EXTERNAL MODULE: ./src/TextFieldLabel/TextFieldLabel.scss
var TextFieldLabel = __webpack_require__(8);

// CONCATENATED MODULE: ./src/TextFieldLabel/TextFieldLabel.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFieldLabel_TextFieldLabel; });



/* eslint-disable no-unused-expressions */

/* eslint-disable react/jsx-props-no-spreading */




function TextFieldLabel_TextFieldLabel(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      className = _ref.className,
      label = _ref.label,
      htmlFor = _ref.htmlFor,
      id = _ref.id,
      labelId = _ref.labelId,
      state = _ref.state,
      style = _ref.style,
      props = objectWithoutProperties_default()(_ref, ["name", "placeholder", "className", "label", "htmlFor", "id", "labelId", "state", "style"]);

  var classes = ['rex-text-field-label', className].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  var labelEl = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["useRef"])(null);
  return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", extends_default()({
    className: classes,
    style: style
  }, props), external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(LabelUi["default"], {
    id: labelId,
    htmlFor: htmlFor,
    label: label,
    state: state,
    labelRef: labelEl
  }), external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(TextFieldUi["default"], {
    id: id,
    labelId: labelId,
    name: name,
    placeholder: placeholder,
    label: label,
    state: state
  }));
}
TextFieldLabel_TextFieldLabel.displayName = "TextFieldLabel";
TextFieldLabel_TextFieldLabel.defaultProps = {
  className: '',
  label: '',
  htmlFor: '',
  name: '',
  placeholder: '',
  state: '',
  id: '',
  labelId: '',
  style: null
};

/***/ })
/******/ ]);
});