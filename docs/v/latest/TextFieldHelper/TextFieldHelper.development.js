/*!
 * 
 * @license @rakuten-rex/text-field v1.4.0 2020-08-03
 * TextFieldHelper/TextFieldHelper.development.js
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

var objectWithoutPropertiesLoose = __webpack_require__(5);

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(14);

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(1);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(6);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(9);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// CONCATENATED MODULE: ./src/assets/check_large.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 3.707L14.293 3 5.5 11.793 1.707 8 1 8.707l4.5 4.5 9.5-9.5z",
  fill: "#047205"
});

var check_large_SvgCheckLarge = function SvgCheckLarge(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ var check_large = (check_large_SvgCheckLarge);
// CONCATENATED MODULE: ./src/assets/warning_large.svg
function warning_large_extends() { warning_large_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return warning_large_extends.apply(this, arguments); }



var warning_large_ref = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 12a.75.75 0 110-1.5.75.75 0 010 1.5zm-.5-2.5h1V5h-1v4.5zm7.41 3.469L8.625 1.86A.71.71 0 008 1.5a.71.71 0 00-.625.36L1.09 12.969C.827 13.431 1.17 14 1.715 14h12.57c.543 0 .887-.568.625-1.031z",
  fill: "#DF0101"
});

var warning_large_SvgWarningLarge = function SvgWarningLarge(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", warning_large_extends({
    width: 16,
    height: 16,
    fill: "none"
  }, props), warning_large_ref);
};

/* harmony default export */ var warning_large = (warning_large_SvgWarningLarge);
// EXTERNAL MODULE: ./src/TextFieldUi/TextFieldUi.scss
var TextFieldUi_TextFieldUi = __webpack_require__(15);

// CONCATENATED MODULE: ./src/TextFieldUi/TextFieldUi.jsx









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-unused-expressions */

/* eslint-disable react/jsx-props-no-spreading */





var TextFieldUi_TextFieldUi_TextFieldUi = /*#__PURE__*/function (_Component) {
  inherits_default()(TextFieldUi, _Component);

  var _super = _createSuper(TextFieldUi);

  function TextFieldUi(props) {
    var _this;

    classCallCheck_default()(this, TextFieldUi);

    _this = _super.call(this, props);
    var value = _this.props.value;
    _this.state = {
      textValue: value
    };
    _this.updateValue = _this.updateValue.bind(assertThisInitialized_default()(_this));
    _this.handleOnChange = _this.handleOnChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(TextFieldUi, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (value !== prevProps.value) {
        this.updateValue(value);
      }
    }
  }, {
    key: "updateValue",
    value: function updateValue(textValue) {
      this.setState({
        textValue: textValue
      });
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(e) {
      this.updateValue(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          htmlFor = _this$props.htmlFor,
          state = _this$props.state,
          label = _this$props.label,
          labelId = _this$props.labelId,
          id = _this$props.id,
          style = _this$props.style,
          disabled = _this$props.disabled,
          handleOnFocus = _this$props.handleOnFocus,
          handleOnBlur = _this$props.handleOnBlur,
          value = _this$props.value,
          required = _this$props.required,
          props = objectWithoutProperties_default()(_this$props, ["name", "placeholder", "className", "htmlFor", "state", "label", "labelId", "id", "style", "disabled", "handleOnFocus", "handleOnBlur", "value", "required"]);

      var textValue = this.state.textValue;

      var stateClass = function (stateClassName) {
        switch (stateClassName) {
          case 'error':
            return 'error';

          case 'valid':
            return 'valid';

          case 'active':
            return 'active';

          case 'hover':
            return 'hover';

          default:
            return '';
        }
      }(state);

      var disabledState = disabled ? 'disabled' : '';
      var borderClasses = ['rex-text-field-ui', className, stateClass, disabledState].filter(function (singleClass) {
        return singleClass && singleClass.length > 0;
      }).join(' ').trim();
      var inputClasses = ['rex-text-field-native', stateClass].join(' ').trim();
      var hasLabel = !!(label && label.length > 0);
      var innerClasses = ['rex-text-field-inner-border', stateClass].join(' ').trim();
      var withIcon = state === 'error' || state === 'valid';

      var renderIcon = function renderIcon() {
        if (state === 'error') {
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(warning_large, {
            className: "rex-icon"
          });
        }

        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(check_large, {
          className: "rex-icon"
        });
      };

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: borderClasses,
        style: style
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: innerClasses
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("input", extends_default()({
        type: "text",
        id: id,
        className: inputClasses,
        name: name,
        placeholder: placeholder,
        "aria-label": !hasLabel ? name || placeholder : null,
        "aria-labelledby": hasLabel ? labelId : null,
        onChange: this.handleOnChange,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
        disabled: disabled,
        value: textValue,
        required: required
      }, props)), withIcon && renderIcon()));
    }
  }]);

  return TextFieldUi;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"]);

TextFieldUi_TextFieldUi_TextFieldUi.displayName = "TextFieldUi";
TextFieldUi_TextFieldUi_TextFieldUi.defaultProps = {
  name: '',
  placeholder: '',
  className: '',
  htmlFor: '',
  state: '',
  label: '',
  labelId: '',
  id: null,
  style: {},
  disabled: false,
  handleOnFocus: function handleOnFocus() {},
  handleOnBlur: function handleOnBlur() {},
  value: '',
  required: false
};
/* harmony default export */ var src_TextFieldUi_TextFieldUi = __webpack_exports__["default"] = (TextFieldUi_TextFieldUi_TextFieldUi);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TextFieldUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _TextFieldUi__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
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
var HelperUi = __webpack_require__(17);

// CONCATENATED MODULE: ./src/assets/check.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var check_ref = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.25 2.78l-.53-.53-6.595 6.594L1.28 6l-.53.53 3.375 3.375L11.25 2.78z",
  fill: "#047205"
});

var check_SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", _extends({
    width: 12,
    height: 12,
    fill: "none"
  }, props), check_ref);
};

/* harmony default export */ var check = (check_SvgCheck);
// CONCATENATED MODULE: ./src/assets/warning.svg
function warning_extends() { warning_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return warning_extends.apply(this, arguments); }



var warning_ref = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6 9a.563.563 0 110-1.125A.563.563 0 016 9zm-.375-1.875h.75V3.75h-.75v3.375zm5.557 2.601L6.47 1.395a.532.532 0 00-.47-.27.532.532 0 00-.468.27L.817 9.726c-.196.348.062.774.47.774h9.427c.407 0 .665-.426.468-.774z",
  fill: "#DF0101"
});

var warning_SvgWarning = function SvgWarning(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("svg", warning_extends({
    width: 12,
    height: 12,
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

      case 'hover':
        return 'hover';

      default:
        return '';
    }
  }(state);

  var disabledState = disabled ? 'disabled' : '';
  var classes = ['rex-text-field-helper-ui', className, stateClass, disabledState].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  var withIcon = state === 'error' || state === 'valid';

  var renderIcon = function renderIcon() {
    if (state === 'error') {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(warning, {
        className: "rex-icon"
      });
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(check, {
      className: "rex-icon"
    });
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("small", extends_default()({
    className: classes,
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _HelperUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _HelperUi__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFieldHelper; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HelperUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _TextFieldUi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _TextFieldHelper_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _TextFieldHelper_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextFieldHelper_scss__WEBPACK_IMPORTED_MODULE_5__);



/* eslint-disable no-unused-expressions */

/* eslint-disable react/jsx-props-no-spreading */




function TextFieldHelper(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      className = _ref.className,
      helper = _ref.helper,
      htmlFor = _ref.htmlFor,
      labelId = _ref.labelId,
      state = _ref.state,
      style = _ref.style,
      disabled = _ref.disabled,
      value = _ref.value,
      required = _ref.required,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "placeholder", "className", "helper", "htmlFor", "labelId", "state", "style", "disabled", "value", "required"]);

  var stateClass = function (stateClassName) {
    switch (stateClassName) {
      case 'error':
        return 'error';

      case 'valid':
        return 'valid';

      case 'active':
        return 'active';

      case 'hover':
        return 'hover';

      default:
        return '';
    }
  }(state);

  var disabledState = disabled ? 'disabled' : '';
  var classes = ['rex-text-field-helper', className, stateClass, disabledState].filter(function (singleClass) {
    return singleClass && singleClass.length > 0;
  }).join(' ').trim();
  var helperEl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var handleOnFocus = function handleOnFocus(e) {
    var textFieldNativeEl = e.target.parentNode;
    var outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      helperEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };

  var handleOnBlur = function handleOnBlur(e) {
    var textFieldNativeEl = e.target.parentNode;
    var outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      helperEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classes,
    style: style
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextFieldUi__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: htmlFor,
    labelId: labelId,
    name: name,
    placeholder: placeholder,
    state: state,
    disabled: disabled,
    handleOnFocus: handleOnFocus,
    handleOnBlur: handleOnBlur,
    value: value,
    required: required
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HelperUi__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    helper: helper,
    state: state,
    helperRef: helperEl,
    disabled: disabled
  }));
}
TextFieldHelper.displayName = "TextFieldHelper";
TextFieldHelper.defaultProps = {
  className: '',
  helper: '',
  htmlFor: '',
  name: '',
  placeholder: '',
  state: '',
  labelId: '',
  style: null,
  disabled: false,
  value: '',
  required: false
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});