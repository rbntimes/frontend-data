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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Results */ "./components/Results.js");
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
      scoreData = _ref.scoreData,
      onSubmit = _ref.onSubmit,
      setComparingScores = _ref.setComparingScores;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleReset = function handleReset() {
    setComparingScores();
    onSubmit({
      distance: null,
      submitted: true
    });
    return router.replace("/");
  };

  return __jsx("aside", {
    className: "jsx-1047011017" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: function onClick() {
      return handleReset();
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Opnieuw"), comparingScores ? __jsx(_Results__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scoreData: scoreData,
    comparingScores: comparingScores,
    newEntry: data.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1047011017",
    __self: this
  }, "aside.jsx-1047011017{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1047011017>div.jsx-1047011017{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VTLEFBR3lCLEFBSUgsQUFNSSxTQUxILEdBSk0sT0FNTyxTQUx6Qiw4Q0FTQSwrQkFIQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBSZXN1bHRzIGZyb20gXCIuL1Jlc3VsdHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGRhdGEsXG4gIGxvYWRpbmcsXG4gIHJhbmRvbVBsYWNlLFxuICBoYW5kbGVGb3JtLFxuICB1c2VybmFtZSxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldExvYWRpbmcsXG4gIGNvbXBhcmluZ1Njb3JlcyxcbiAgc2NvcmVEYXRhLFxuICBvblN1Ym1pdCxcbiAgc2V0Q29tcGFyaW5nU2NvcmVzXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldENvbXBhcmluZ1Njb3JlcygpO1xuICAgIG9uU3VibWl0KHsgZGlzdGFuY2U6IG51bGwsIHN1Ym1pdHRlZDogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICA8aDE+V2FhciB6b3UgZGUgdm9sZ2VuZGUgZm90byBnZW1hYWt0IHppam4/PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBXZWV0IGppaiB3YWFyIGRlIHZvbGdlbmRlIGFmYmVlbGRpbmcgZ2Vub21lbiBpcywga2xpayBvcCBkZSBnb2VpZSBwbGVrXG4gICAgICAgIG9wIGRlIG1hcFxuICAgICAgPC9wPlxuICAgICAgPGltZ1xuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gXCJub25lXCIgOiBcImJsb2NrXCIgfX1cbiAgICAgICAgb25Mb2FkPXtsb2FkaW5nID8gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkgOiAoKSA9PiB7fX1cbiAgICAgICAgc3JjPXtyYW5kb21QbGFjZVswXS5pbWcudmFsdWV9XG4gICAgICAvPlxuICAgICAgeyFkYXRhLmRpc3RhbmNlID8gKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKSA6IGRhdGEuZGlzdGFuY2UgJiYgIWNvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICA8aDE+Sm91dyBzY29yZToge2RhdGEuZGlzdGFuY2V9a208L2gxPlxuICAgICAgICAgIDxoND5KaWogZ29rdGU6IHtkYXRhLmd1ZXNzZWRDb3VudHJ5fTwvaDQ+XG4gICAgICAgICAgPGg0PkRlIGZvdG8gaXMgZ2Vub21lbiBpbjoge2RhdGEuY29ycmVjdENvdW50cnl9PC9oND5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb3JtKFwiL1wiKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc2V0KCl9Pk9wbmlldXc8L2E+XG4gICAgICApfVxuICAgICAge2NvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgICAgPFJlc3VsdHNcbiAgICAgICAgICBzY29yZURhdGE9e3Njb3JlRGF0YX1cbiAgICAgICAgICBjb21wYXJpbmdTY29yZXM9e2NvbXBhcmluZ1Njb3Jlc31cbiAgICAgICAgICBuZXdFbnRyeT17ZGF0YS5kaXN0YW5jZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAhY29tcGFyaW5nU2NvcmVzICYmIGRhdGEuZmluaXNoZWQgPyAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA5NnZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.68a2348d92981ed1c2e7.hot-update.js.map