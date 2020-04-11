module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/home/Banner.tsx":
/*!************************************!*\
  !*** ./components/home/Banner.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.tsx");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/constants */ "./util/constants.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BannerRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  height: auto;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-evenly;
`;
const LeftSectionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 5vw;
  font-weight: bold;
`;
const RightSectionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-weight: bold;
  font-size: 10vw;
  color: white;
  background: ${_util_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].PRIMARY};
`;
const AddSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
const JoinUsSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
const JoinUsButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_2__["default"])`
  height: 40px;
  width: 130px;
  font-size: 15px;
  margin-top: 20px;
`;
const BannerImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
`;
const BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: 60vw;
  height: 400px;
`;

const Banner = () => {
  return __jsx(BannerRoot, null, __jsx(BannerImageSection, null, __jsx(BannerImage, {
    src: "/images/office.jpg"
  })), __jsx(AddSection, null, __jsx(LeftSectionText, null, "Introducing"), __jsx(RightSectionText, null, "Virtuoso")), __jsx(JoinUsSection, null, __jsx(JoinUsButton, {
    title: "Join Us",
    onClick: () => {},
    icon: "tick"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/home/Layout/Header.tsx":
/*!*******************************************!*\
  !*** ./components/home/Layout/Header.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/constants */ "./util/constants.ts");
/* harmony import */ var _shared_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Icon */ "./components/shared/Icon.tsx");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Button */ "./components/shared/Button.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header`
  display: flex;
  background: ${_util_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].PRIMARY};
  color: white;
  height: 40px;
  padding: 10px;
  justify-content: space-between;
`;
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
`;
const HeaderLeftSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
`;
const HeaderRightSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 5px;
  display: flex;
`;

const Header = () => {
  return __jsx(HeaderRoot, null, __jsx(HeaderLeftSection, null, __jsx(_shared_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "story",
    size: 40
  }), __jsx(HeaderTitle, null, "Virtuoso")), __jsx(HeaderRightSection, null, __jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Login",
    onClick: () => {},
    bordered: true
  }), __jsx(_shared_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Sign Up",
    onClick: () => {},
    bordered: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/home/Layout/index.tsx":
/*!******************************************!*\
  !*** ./components/home/Layout/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/home/Layout/Header.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
`;
const LayoutSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
`;

const Layout = props => {
  return __jsx(LayoutRoot, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(LayoutSection, null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/shared/Button.tsx":
/*!**************************************!*\
  !*** ./components/shared/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/constants */ "./util/constants.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./components/shared/Icon.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ButtonRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  display: flex;
  align-items: center;
  text-align: center;
  background: ${props => props.bordered ? 'white' : props.background || _util_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].PRIMARY};
  color: ${props => props.bordered ? props.background || _util_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].PRIMARY : props.color || 'white'};
  font-weight: 600;
  font-size: 13px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  outline: 0;
  & + & {
    margin-left: 10px;
  }
`;
const IconRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"])`
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = props => {
  return __jsx(ButtonRoot, props, props.icon && __jsx(IconRoot, {
    name: props.icon,
    size: 30
  }), props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/shared/Icon.tsx":
/*!************************************!*\
  !*** ./components/shared/Icon.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const IconRoot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  display: flex;
  height: ${props => props.size || 40}px;
  width: ${props => props.size || 40}px;
`;

const Icon = props => {
  const path = `/icons/${props.name}.svg`;
  return __jsx(IconRoot, _extends({
    src: path
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/Layout */ "./components/home/Layout/index.tsx");
/* harmony import */ var _components_home_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Banner */ "./components/home/Banner.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  return __jsx(_components_home_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_home_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Index.getInitialProps = ({}) => ({});

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./util/constants.ts":
/*!***************************!*\
  !*** ./util/constants.ts ***!
  \***************************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
const COLORS = {
  PRIMARY: '#f48fb1',
  SUCCESS: '#a5d6a7',
  DANGER: '#f48fb1',
  GRAY: '#9e9e9e',
  INFO: '#81d4fa'
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thinksyseruser/Desktop/Virtual-Office/web-app/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map