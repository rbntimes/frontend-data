webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/stage.js":
/*!*****************************!*\
  !*** ./components/stage.js ***!
  \*****************************/
/*! exports provided: Stage, useSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSvg", function() { return useSvg; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/components/stage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Context = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);
var viewBoxWidth = 959;
var viewBoxHeight = 460;
var viewBox = "0 0 ".concat(viewBoxWidth, " ").concat(viewBoxHeight);
function Stage(_ref) {
  var children = _ref.children,
      width = _ref.width;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      svg = _useState[0],
      setSvg = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setSvg(svgRef.current);
  }, []);
  return __jsx("svg", {
    ref: svgRef,
    width: width,
    height: "calc(100vh)",
    viewBox: viewBox,
    className: "jsx-3375495435",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(Context.Provider, {
    value: svg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3375495435",
    __self: this
  }, "svg.jsx-3375495435{background-color:cornflowerblue;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL3N0YWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCUyxBQUc2QyxnQ0FDakIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL244Nmllcy9Eb2N1bWVudHMvc2Nob29sL2luZm9ybWF0aW9uLWRlc2lnbi9mcm9udGVuZC1kYXRhL2NvbXBvbmVudHMvc3RhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCB2aWV3Qm94V2lkdGggPSA5NTk7XG5jb25zdCB2aWV3Qm94SGVpZ2h0ID0gNDYwO1xuXG5jb25zdCB2aWV3Qm94ID0gYDAgMCAke3ZpZXdCb3hXaWR0aH0gJHt2aWV3Qm94SGVpZ2h0fWA7XG5cbmV4cG9ydCBmdW5jdGlvbiBTdGFnZSh7IGNoaWxkcmVuLCB3aWR0aCB9KSB7XG4gIGNvbnN0IHN2Z1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3N2Zywgc2V0U3ZnXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0U3ZnKHN2Z1JlZi5jdXJyZW50KSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyByZWY9e3N2Z1JlZn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2BjYWxjKDEwMHZoKWB9IHZpZXdCb3g9e3ZpZXdCb3h9PlxuICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N2Z30+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdmcoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xufVxuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/stage.js */"));
}
function useSvg() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(Context);
}

/***/ })

})
//# sourceMappingURL=index.js.e981e9c5408cc36f14e9.hot-update.js.map