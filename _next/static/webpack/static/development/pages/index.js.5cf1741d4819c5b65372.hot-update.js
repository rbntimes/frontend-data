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
      border: "1px solid red",
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
      display: loading ? "none" : "block"
    },
    onLoad: loading ? function () {
      return setLoading(false);
    } : function () {},
    src: randomPlace[0].img.value,
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
      lineNumber: 56
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: function onClick() {
      return handleReset();
    },
    className: "jsx-1575580046" + " " + "reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
      lineNumber: 70
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1575580046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1575580046",
    __self: this
  }, "aside.jsx-1575580046{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1575580046>div.jsx-1575580046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.reset.jsx-1575580046{-webkit-text-decoration:underline;text-decoration:underline;text-align:center;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZTLEFBR3lCLEFBSUgsQUFNSSxBQUdhLFNBUmhCLEdBSk0sT0FNTyxTQUx6QixnQ0FZb0IsY0FIcEIsSUFJZ0IsY0FDaEIsYUFSQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBSZXN1bHRzIGZyb20gXCIuL1Jlc3VsdHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGRhdGEsXG4gIGxvYWRpbmcsXG4gIHJhbmRvbVBsYWNlLFxuICBoYW5kbGVGb3JtLFxuICB1c2VybmFtZSxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldExvYWRpbmcsXG4gIGNvbXBhcmluZ1Njb3JlcyxcbiAgc2NvcmVEYXRhLFxuICBvblN1Ym1pdCxcbiAgc2V0Q29tcGFyaW5nU2NvcmVzLFxuICBjaG9TcGVjaWZpY0hpZ2hzY29yZXNcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldENvbXBhcmluZ1Njb3JlcygpO1xuICAgIG9uU3VibWl0KHsgZGlzdGFuY2U6IG51bGwsIHN1Ym1pdHRlZDogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICA8aDE+V2FhciB6b3UgZGUgdm9sZ2VuZGUgZm90byBnZW1hYWt0IHppam4/PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBXZWV0IGppaiB3YWFyIGRlIHZvbGdlbmRlIGFmYmVlbGRpbmcgZ2Vub21lbiBpcywga2xpayBvcCBkZSBnb2VpZSBwbGVrXG4gICAgICAgIG9wIGRlIG1hcFxuICAgICAgPC9wPlxuICAgICAge2xvYWRpbmcgJiYgPHNwYW4+UGxhYXRqZSB3b3JkdCBvcGdlaGFhbGQuLi48L3NwYW4+fVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IGB1cmwoXCIke3JhbmRvbVBsYWNlWzBdLmltZy52YWx1ZX1cIilgXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICA8aW1nXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRpbmcgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fVxuICAgICAgICBvbkxvYWQ9e2xvYWRpbmcgPyAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSA6ICgpID0+IHt9fVxuICAgICAgICBzcmM9e3JhbmRvbVBsYWNlWzBdLmltZy52YWx1ZX1cbiAgICAgIC8+XG4gICAgICB7IWRhdGEuZGlzdGFuY2UgPyAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApIDogZGF0YS5kaXN0YW5jZSAmJiAhY29tcGFyaW5nU2NvcmVzID8gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgIDxoMT5Kb3V3IHNjb3JlOiB7ZGF0YS5kaXN0YW5jZX1rbTwvaDE+XG4gICAgICAgICAgPGg0PkppaiBnb2t0ZToge2RhdGEuZ3Vlc3NlZENvdW50cnl9PC9oND5cbiAgICAgICAgICA8aDQ+RGUgZm90byBpcyBnZW5vbWVuIGluOiB7ZGF0YS5jb3JyZWN0Q291bnRyeX08L2g0PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvcm0oXCIvXCIpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZXRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXNldCgpfT5cbiAgICAgICAgICBPcG5pZXV3IHNwZWxlbj8gS2xpayBoaWVyXG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgICB7Y29tcGFyaW5nU2NvcmVzID8gKFxuICAgICAgICA8UmVzdWx0c1xuICAgICAgICAgIGNob1NwZWNpZmljSGlnaHNjb3Jlcz17Y2hvU3BlY2lmaWNIaWdoc2NvcmVzfVxuICAgICAgICAgIHNjb3JlRGF0YT17c2NvcmVEYXRhfVxuICAgICAgICAgIGNvbXBhcmluZ1Njb3Jlcz17Y29tcGFyaW5nU2NvcmVzfVxuICAgICAgICAgIG5ld0VudHJ5PXt7IHNjb3JlOiBkYXRhLmRpc3RhbmNlLCB1c2VybmFtZSB9fVxuICAgICAgICAvPlxuICAgICAgKSA6ICFjb21wYXJpbmdTY29yZXMgJiYgZGF0YS5maW5pc2hlZCA/IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDk2dmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0gPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc2V0IHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.5cf1741d4819c5b65372.hot-update.js.map