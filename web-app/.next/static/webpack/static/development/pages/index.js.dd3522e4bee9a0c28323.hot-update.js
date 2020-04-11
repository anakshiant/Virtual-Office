webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/TextInput.tsx":
/*!*****************************************!*\
  !*** ./components/shared/TextInput.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/constants */ "./util/constants.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  outline: none;\n  width: 200px;\n  height: 100px;\n  border: 0px;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var InputRoot = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input(_templateObject(), _util_constants__WEBPACK_IMPORTED_MODULE_4__["COLORS"].PRIMARY);

var TextInput = function TextInput(props) {
  var handleChange = function handleChange(event) {
    props.onChange(event.target.value);
  };

  return __jsx(InputRoot, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, props, {
    value: props.value,
    onChange: handleChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Layout */ "./components/home/Layout/index.tsx");
/* harmony import */ var _components_home_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Banner */ "./components/home/Banner.tsx");
/* harmony import */ var _components_shared_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/TextInput */ "./components/shared/TextInput.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Index = function Index() {
  return __jsx(_components_home_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_home_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "rot",
    onChange: function onChange(value) {
      console.log(value);
    }
  }));
};

Index.getInitialProps = function (_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.dd3522e4bee9a0c28323.hot-update.js.map