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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
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
      scoreData = _ref.scoreData,
      onSubmit = _ref.onSubmit,
      setComparingScores = _ref.setComparingScores,
      choSpecificHighscores = _ref.choSpecificHighscores;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(loading);

  var handleReset = function handleReset() {
    setLoading(true);
    setComparingScores();
    onSubmit({
      distance: null,
      submitted: true
    });
    return router.replace("/");
  };

  return __jsx("aside", {
    className: "jsx-1575580046" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek op de map"), loading && __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Plaatje wordt opgehaald..."), __jsx("div", {
    style: {
      height: "400px",
      width: "100%",
      "background-image": "url(\"".concat(randomPlace[0].img.value, "\")")
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    style: {
      display: "none"
    },
    onLoad: loading ? function () {
      return setLoading(false);
    } : function () {},
    src: randomPlace[0].img.value,
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: function onClick() {
      return handleReset();
    },
    className: "jsx-1575580046" + " " + "reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Opnieuw spelen? Klik hier"), comparingScores ? __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    choSpecificHighscores: choSpecificHighscores,
    scoreData: scoreData,
    comparingScores: comparingScores,
    newEntry: {
      score: data.distance,
      username: username
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1575580046",
    __self: this
  }, "aside.jsx-1575580046{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1575580046>div.jsx-1575580046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.reset.jsx-1575580046{-webkit-text-decoration:underline;text-decoration:underline;text-align:center;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZTLEFBR3lCLEFBSUgsQUFNSSxBQUdhLFNBUmhCLEdBSk0sT0FNTyxTQUx6QixnQ0FZb0IsY0FIcEIsSUFJZ0IsY0FDaEIsYUFSQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBSZXN1bHRzIGZyb20gXCIuL1Jlc3VsdHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGRhdGEsXG4gIGxvYWRpbmcsXG4gIHJhbmRvbVBsYWNlLFxuICBoYW5kbGVGb3JtLFxuICB1c2VybmFtZSxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldExvYWRpbmcsXG4gIGNvbXBhcmluZ1Njb3JlcyxcbiAgc2NvcmVEYXRhLFxuICBvblN1Ym1pdCxcbiAgc2V0Q29tcGFyaW5nU2NvcmVzLFxuICBjaG9TcGVjaWZpY0hpZ2hzY29yZXNcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldENvbXBhcmluZ1Njb3JlcygpO1xuICAgIG9uU3VibWl0KHsgZGlzdGFuY2U6IG51bGwsIHN1Ym1pdHRlZDogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICA8aDE+V2FhciB6b3UgZGUgdm9sZ2VuZGUgZm90byBnZW1hYWt0IHppam4/PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBXZWV0IGppaiB3YWFyIGRlIHZvbGdlbmRlIGFmYmVlbGRpbmcgZ2Vub21lbiBpcywga2xpayBvcCBkZSBnb2VpZSBwbGVrXG4gICAgICAgIG9wIGRlIG1hcFxuICAgICAgPC9wPlxuICAgICAge2xvYWRpbmcgJiYgPHNwYW4+UGxhYXRqZSB3b3JkdCBvcGdlaGFhbGQuLi48L3NwYW4+fVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogYHVybChcIiR7cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVwiKWBcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgb25Mb2FkPXtsb2FkaW5nID8gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkgOiAoKSA9PiB7fX1cbiAgICAgICAgc3JjPXtyYW5kb21QbGFjZVswXS5pbWcudmFsdWV9XG4gICAgICAvPlxuICAgICAgeyFkYXRhLmRpc3RhbmNlID8gKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKSA6IGRhdGEuZGlzdGFuY2UgJiYgIWNvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICA8aDE+Sm91dyBzY29yZToge2RhdGEuZGlzdGFuY2V9a208L2gxPlxuICAgICAgICAgIDxoND5KaWogZ29rdGU6IHtkYXRhLmd1ZXNzZWRDb3VudHJ5fTwvaDQ+XG4gICAgICAgICAgPGg0PkRlIGZvdG8gaXMgZ2Vub21lbiBpbjoge2RhdGEuY29ycmVjdENvdW50cnl9PC9oND5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb3JtKFwiL1wiKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2V0XCIgb25DbGljaz17KCkgPT4gaGFuZGxlUmVzZXQoKX0+XG4gICAgICAgICAgT3BuaWV1dyBzcGVsZW4/IEtsaWsgaGllclxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgICAge2NvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgICAgPFJlc3VsdHNcbiAgICAgICAgICBjaG9TcGVjaWZpY0hpZ2hzY29yZXM9e2Nob1NwZWNpZmljSGlnaHNjb3Jlc31cbiAgICAgICAgICBzY29yZURhdGE9e3Njb3JlRGF0YX1cbiAgICAgICAgICBjb21wYXJpbmdTY29yZXM9e2NvbXBhcmluZ1Njb3Jlc31cbiAgICAgICAgICBuZXdFbnRyeT17eyBzY29yZTogZGF0YS5kaXN0YW5jZSwgdXNlcm5hbWUgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAhY29tcGFyaW5nU2NvcmVzICYmIGRhdGEuZmluaXNoZWQgPyAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA5NnZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXNldCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.8516b837b7b46552efae.hot-update.js.map