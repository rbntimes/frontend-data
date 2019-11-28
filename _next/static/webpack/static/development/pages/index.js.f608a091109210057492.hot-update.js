webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Results */ "./components/Results.js");
var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Sidebar = function Sidebar(_ref) {
  var data = _ref.data,
      loading = _ref.loading,
      randomPlace = _ref.randomPlace,
      handleForm = _ref.handleForm,
      username = _ref.username,
      setUsername = _ref.setUsername,
      setLoading = _ref.setLoading,
      comparingScores = _ref.comparingScores;
  return __jsx("aside", {
    className: "jsx-3922870053" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek op de map"), __jsx("img", {
    style: {
      display: loading ? "none" : "block"
    },
    onLoad: loading ? function () {
      return setLoading(false);
    } : function () {},
    src: randomPlace[0].img.value,
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), data.distance ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Submit"))) : null, __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comparingScores: comparingScores,
    newEntry: data.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3922870053",
    __self: this
  }, "aside.jsx-3922870053{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-3922870053>div.jsx-3922870053{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENPLEFBR3VCLEFBSUgsQUFNSSxTQUxILEdBSk0sT0FNTyxTQUx6Qiw4Q0FTQSwrQkFIQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgUmVzdWx0cyBmcm9tIFwiLi9SZXN1bHRzXCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoe1xuICBkYXRhLFxuICBsb2FkaW5nLFxuICByYW5kb21QbGFjZSxcbiAgaGFuZGxlRm9ybSxcbiAgdXNlcm5hbWUsXG4gIHNldFVzZXJuYW1lLFxuICBzZXRMb2FkaW5nLFxuICBjb21wYXJpbmdTY29yZXNcbn0pID0+IChcbiAgPGFzaWRlIGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICA8aDE+V2FhciB6b3UgZGUgdm9sZ2VuZGUgZm90byBnZW1hYWt0IHppam4/PC9oMT5cbiAgICA8cD5cbiAgICAgIFdlZXQgamlqIHdhYXIgZGUgdm9sZ2VuZGUgYWZiZWVsZGluZyBnZW5vbWVuIGlzLCBrbGlrIG9wIGRlIGdvZWllIHBsZWsgb3BcbiAgICAgIGRlIG1hcFxuICAgIDwvcD5cbiAgICA8aW1nXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX1cbiAgICAgIG9uTG9hZD17bG9hZGluZyA/ICgpID0+IHNldExvYWRpbmcoZmFsc2UpIDogKCkgPT4ge319XG4gICAgICBzcmM9e3JhbmRvbVBsYWNlWzBdLmltZy52YWx1ZX1cbiAgICAvPlxuICAgIHtkYXRhLmRpc3RhbmNlID8gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgPGgxPkpvdXcgc2NvcmU6IHtkYXRhLmRpc3RhbmNlfWttPC9oMT5cbiAgICAgICAgPGg0PkppaiBnb2t0ZToge2RhdGEuZ3Vlc3NlZENvdW50cnl9PC9oND5cbiAgICAgICAgPGg0PkRlIGZvdG8gaXMgZ2Vub21lbiBpbjoge2RhdGEuY29ycmVjdENvdW50cnl9PC9oND5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvcm0oXCIvXCIpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKSA6IG51bGx9XG4gICAgPFJlc3VsdHMgY29tcGFyaW5nU2NvcmVzPXtjb21wYXJpbmdTY29yZXN9IG5ld0VudHJ5PXtkYXRhLmRpc3RhbmNlfSAvPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgaGVpZ2h0OiA5NnZoO1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.f608a091109210057492.hot-update.js.map