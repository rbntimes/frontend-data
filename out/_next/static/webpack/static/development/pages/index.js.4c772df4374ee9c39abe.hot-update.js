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
    className: "jsx-1445889526" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek op de map"), loading && __jsx("span", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Plaatje wordt opgehaald..."), __jsx("div", {
    style: {
      display: loading ? "none" : "block",
      height: "400px",
      width: "100%",
      "background-image": "url(\"".concat(randomPlace[0].img.value, "\")"),
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat"
    },
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: function onClick() {
      return handleReset();
    },
    className: "jsx-1445889526" + " " + "reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
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
      lineNumber: 76
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1445889526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1445889526",
    __self: this
  }, "aside.jsx-1445889526{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1445889526>div.jsx-1445889526{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.reset.jsx-1445889526{-webkit-text-decoration:underline;text-decoration:underline;text-align:center;margin:10px 0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZTLEFBR3lCLEFBSUgsQUFNSSxBQUdhLFNBUmhCLEdBSk0sT0FNTyxTQUx6QixnQ0FZb0IsY0FIcEIsSUFJZ0IsY0FDQyxhQVJqQixFQVNBIiwiZmlsZSI6Ii9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4vUmVzdWx0c1wiO1xuXG5jb25zdCBTaWRlYmFyID0gKHtcbiAgZGF0YSxcbiAgbG9hZGluZyxcbiAgcmFuZG9tUGxhY2UsXG4gIGhhbmRsZUZvcm0sXG4gIHVzZXJuYW1lLFxuICBzZXRVc2VybmFtZSxcbiAgc2V0TG9hZGluZyxcbiAgY29tcGFyaW5nU2NvcmVzLFxuICBzY29yZURhdGEsXG4gIG9uU3VibWl0LFxuICBzZXRDb21wYXJpbmdTY29yZXMsXG4gIGNob1NwZWNpZmljSGlnaHNjb3Jlc1xufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldENvbXBhcmluZ1Njb3JlcygpO1xuICAgIG9uU3VibWl0KHsgZGlzdGFuY2U6IG51bGwsIHN1Ym1pdHRlZDogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgIDxoMT5XYWFyIHpvdSBkZSB2b2xnZW5kZSBmb3RvIGdlbWFha3Qgemlqbj88L2gxPlxuICAgICAgPHA+XG4gICAgICAgIFdlZXQgamlqIHdhYXIgZGUgdm9sZ2VuZGUgYWZiZWVsZGluZyBnZW5vbWVuIGlzLCBrbGlrIG9wIGRlIGdvZWllIHBsZWtcbiAgICAgICAgb3AgZGUgbWFwXG4gICAgICA8L3A+XG4gICAgICB7bG9hZGluZyAmJiA8c3Bhbj5QbGFhdGplIHdvcmR0IG9wZ2VoYWFsZC4uLjwvc3Bhbj59XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogbG9hZGluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiLFxuICAgICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogYHVybChcIiR7cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVwiKWAsXG4gICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCJjb3ZlclwiLFxuICAgICAgICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIlxuICAgICAgICB9fVxuICAgICAgPjwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICBvbkxvYWQ9e2xvYWRpbmcgPyAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSA6ICgpID0+IHt9fVxuICAgICAgICBzcmM9e3JhbmRvbVBsYWNlWzBdLmltZy52YWx1ZX1cbiAgICAgIC8+XG4gICAgICB7IWRhdGEuZGlzdGFuY2UgPyAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApIDogZGF0YS5kaXN0YW5jZSAmJiAhY29tcGFyaW5nU2NvcmVzID8gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgIDxoMT5Kb3V3IHNjb3JlOiB7ZGF0YS5kaXN0YW5jZX1rbTwvaDE+XG4gICAgICAgICAgPGg0PkppaiBnb2t0ZToge2RhdGEuZ3Vlc3NlZENvdW50cnl9PC9oND5cbiAgICAgICAgICA8aDQ+RGUgZm90byBpcyBnZW5vbWVuIGluOiB7ZGF0YS5jb3JyZWN0Q291bnRyeX08L2g0PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvcm0oXCIvXCIpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZXRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXNldCgpfT5cbiAgICAgICAgICBPcG5pZXV3IHNwZWxlbj8gS2xpayBoaWVyXG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgICB7Y29tcGFyaW5nU2NvcmVzID8gKFxuICAgICAgICA8UmVzdWx0c1xuICAgICAgICAgIGNob1NwZWNpZmljSGlnaHNjb3Jlcz17Y2hvU3BlY2lmaWNIaWdoc2NvcmVzfVxuICAgICAgICAgIHNjb3JlRGF0YT17c2NvcmVEYXRhfVxuICAgICAgICAgIGNvbXBhcmluZ1Njb3Jlcz17Y29tcGFyaW5nU2NvcmVzfVxuICAgICAgICAgIG5ld0VudHJ5PXt7IHNjb3JlOiBkYXRhLmRpc3RhbmNlLCB1c2VybmFtZSB9fVxuICAgICAgICAvPlxuICAgICAgKSA6ICFjb21wYXJpbmdTY29yZXMgJiYgZGF0YS5maW5pc2hlZCA/IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDk2dmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0gPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc2V0IHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.4c772df4374ee9c39abe.hot-update.js.map