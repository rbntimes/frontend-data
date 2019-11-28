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
      comparingScores = _ref.comparingScores,
      scoreData = _ref.scoreData;
  return __jsx("aside", {
    className: "jsx-3922870053" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
      lineNumber: 23
    },
    __self: this
  }), data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
      lineNumber: 35
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Submit"))) : __jsx("span", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Opnieuw"), comparingScores ? __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scoreData: scoreData,
    comparingScores: comparingScores,
    newEntry: data.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-3922870053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3922870053",
    __self: this
  }, "aside.jsx-3922870053{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-3922870053>div.jsx-3922870053{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURPLEFBR3VCLEFBSUgsQUFNSSxTQUxILEdBSk0sT0FNTyxTQUx6Qiw4Q0FTQSwrQkFIQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgUmVzdWx0cyBmcm9tIFwiLi9SZXN1bHRzXCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoe1xuICBkYXRhLFxuICBsb2FkaW5nLFxuICByYW5kb21QbGFjZSxcbiAgaGFuZGxlRm9ybSxcbiAgdXNlcm5hbWUsXG4gIHNldFVzZXJuYW1lLFxuICBzZXRMb2FkaW5nLFxuICBjb21wYXJpbmdTY29yZXMsXG4gIHNjb3JlRGF0YVxufSkgPT4gKFxuICA8YXNpZGUgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgIDxoMT5XYWFyIHpvdSBkZSB2b2xnZW5kZSBmb3RvIGdlbWFha3Qgemlqbj88L2gxPlxuICAgIDxwPlxuICAgICAgV2VldCBqaWogd2FhciBkZSB2b2xnZW5kZSBhZmJlZWxkaW5nIGdlbm9tZW4gaXMsIGtsaWsgb3AgZGUgZ29laWUgcGxlayBvcFxuICAgICAgZGUgbWFwXG4gICAgPC9wPlxuICAgIDxpbWdcbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRpbmcgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fVxuICAgICAgb25Mb2FkPXtsb2FkaW5nID8gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkgOiAoKSA9PiB7fX1cbiAgICAgIHNyYz17cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVxuICAgIC8+XG4gICAge2RhdGEuZGlzdGFuY2UgJiYgIWNvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgIDxoMT5Kb3V3IHNjb3JlOiB7ZGF0YS5kaXN0YW5jZX1rbTwvaDE+XG4gICAgICAgIDxoND5KaWogZ29rdGU6IHtkYXRhLmd1ZXNzZWRDb3VudHJ5fTwvaDQ+XG4gICAgICAgIDxoND5EZSBmb3RvIGlzIGdlbm9tZW4gaW46IHtkYXRhLmNvcnJlY3RDb3VudHJ5fTwvaDQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb3JtKFwiL1wiKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICkgOiAoXG4gICAgICA8c3Bhbj5PcG5pZXV3PC9zcGFuPlxuICAgICl9XG4gICAge2NvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgIDxSZXN1bHRzXG4gICAgICAgIHNjb3JlRGF0YT17c2NvcmVEYXRhfVxuICAgICAgICBjb21wYXJpbmdTY29yZXM9e2NvbXBhcmluZ1Njb3Jlc31cbiAgICAgICAgbmV3RW50cnk9e2RhdGEuZGlzdGFuY2V9XG4gICAgICAvPlxuICAgICkgOiAhY29tcGFyaW5nU2NvcmVzICYmIGRhdGEuZmluaXNoZWQgPyAoXG4gICAgICA8c3BhbiAvPlxuICAgICkgOiAoXG4gICAgICA8c3BhbiAvPlxuICAgICl9XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGFzaWRlIHtcbiAgICAgICAgICBoZWlnaHQ6IDk2dmg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gPiBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9hc2lkZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.5315ccab9921e46d437d.hot-update.js.map