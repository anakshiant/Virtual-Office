webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/Button.tsx":
/*!**************************************!*\
  !*** ./components/shared/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/constants */ "./util/constants.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./components/shared/Icon.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 10px;\n  margin-right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  font-weight: 600;\n  font-size: 13px;\n  height: 30px;\n  cursor: pointer;\n  border-radius: 4px;\n  outline: 0;\n  & + & {\n    margin-left: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ButtonRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject(), function (props) {
  return props.bordered ? 'white' : props.background || _util_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].PRIMARY;
}, function (props) {
  return props.bordered ? props.background : props.color || 'white';
});
var IconRoot = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject2());

var Button = function Button(props) {
  return __jsx(ButtonRoot, props, props.icon && __jsx(IconRoot, {
    name: props.icon,
    size: 40
  }), props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.b9d6c26fd3d7faeec95f.hot-update.js.map