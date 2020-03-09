/*!
 * 
 * @license @rakuten-rex/text-field v1.1.4 2020-03-09
 * HelperUi/HelperUi.development.js
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var objectWithoutPropertiesLoose = __webpack_require__(3);

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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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

// EXTERNAL MODULE: ./src/HelperUi/HelperUi.scss
var HelperUi = __webpack_require__(9);

// CONCATENATED MODULE: ./src/assets/check.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var check_ref =
/*#__PURE__*/
external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.25.78l-.53-.53-6.595 6.594L1.28 4l-.53.53 3.375 3.375L11.25.78z",
  fill: "#047205"
});

var check_SvgCheck = function SvgCheck(props) {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", _extends({
    width: 12,
    height: 8,
    fill: "none"
  }, props), check_ref);
};

/* harmony default export */ var check = (check_SvgCheck);
// CONCATENATED MODULE: ./src/assets/warning.svg
function warning_extends() { warning_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return warning_extends.apply(this, arguments); }



var warning_ref =
/*#__PURE__*/
external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 8a.563.563 0 110-1.125A.563.563 0 016 8zm-.375-1.875h.75V2.75h-.75v3.375zm5.557 2.601L6.47.395a.532.532 0 00-.47-.27.532.532 0 00-.468.27L.817 8.726c-.196.348.062.774.47.774h9.427c.407 0 .665-.426.468-.774z",
  fill: "#DF0101"
});

var warning_SvgWarning = function SvgWarning(props) {
  return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", warning_extends({
    width: 12,
    height: 10,
    fill: "none"
  }, props), warning_ref);
};

/* harmony default export */ var warning = (warning_SvgWarning);
// CONCATENATED MODULE: ./src/HelperUi/HelperUi.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelperUi_HelperUi; });



/* eslint-disable react/jsx-props-no-spreading */




function HelperUi_HelperUi(_ref) {
  var helper = _ref.helper,
      disabled = _ref.disabled,
      className = _ref.className,
      state = _ref.state,
      helperRef = _ref.helperRef,
      props = objectWithoutProperties_default()(_ref, ["helper", "disabled", "className", "state", "helperRef"]);

  var stateClass = function (stateClassName) {
    switch (stateClassName) {
      case 'error':
        return 'error';

      case 'valid':
        return 'valid';

      case 'active':
        return 'active';

      default:
        return '';
    }
  }(state);

  var classes = ['rex-text-field-helper-ui', className, stateClass].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  var withIcon = state === 'error' || state === 'valid';

  var renderIcon = function renderIcon() {
    if (state === 'error') {
      return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(warning, {
        className: "rex-icon"
      });
    }

    return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(check, {
      className: "rex-icon"
    });
  };

  return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("small", extends_default()({
    className: classes,
    disabled: disabled,
    ref: helperRef
  }, props), withIcon && renderIcon(), helper);
}
HelperUi_HelperUi.displayName = "HelperUi";
HelperUi_HelperUi.defaultProps = {
  helper: '',
  disabled: false,
  className: '',
  state: null,
  helperRef: null
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});