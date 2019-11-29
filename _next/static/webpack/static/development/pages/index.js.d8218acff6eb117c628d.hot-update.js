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
      backgroundImage: randomPlace[0].img.value
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
  }, "aside.jsx-1575580046{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1575580046>div.jsx-1575580046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.reset.jsx-1575580046{-webkit-text-decoration:underline;text-decoration:underline;text-align:center;margin:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZTLEFBR3lCLEFBSUgsQUFNSSxBQUdhLFNBUmhCLEdBSk0sT0FNTyxTQUx6QixnQ0FZb0IsY0FIcEIsSUFJZ0IsY0FDaEIsYUFSQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBSZXN1bHRzIGZyb20gXCIuL1Jlc3VsdHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGRhdGEsXG4gIGxvYWRpbmcsXG4gIHJhbmRvbVBsYWNlLFxuICBoYW5kbGVGb3JtLFxuICB1c2VybmFtZSxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldExvYWRpbmcsXG4gIGNvbXBhcmluZ1Njb3JlcyxcbiAgc2NvcmVEYXRhLFxuICBvblN1Ym1pdCxcbiAgc2V0Q29tcGFyaW5nU2NvcmVzLFxuICBjaG9TcGVjaWZpY0hpZ2hzY29yZXNcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldENvbXBhcmluZ1Njb3JlcygpO1xuICAgIG9uU3VibWl0KHsgZGlzdGFuY2U6IG51bGwsIHN1Ym1pdHRlZDogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICA8aDE+V2FhciB6b3UgZGUgdm9sZ2VuZGUgZm90byBnZW1hYWt0IHppam4/PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBXZWV0IGppaiB3YWFyIGRlIHZvbGdlbmRlIGFmYmVlbGRpbmcgZ2Vub21lbiBpcywga2xpayBvcCBkZSBnb2VpZSBwbGVrXG4gICAgICAgIG9wIGRlIG1hcFxuICAgICAgPC9wPlxuICAgICAge2xvYWRpbmcgJiYgPHNwYW4+UGxhYXRqZSB3b3JkdCBvcGdlaGFhbGQuLi48L3NwYW4+fVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiByYW5kb21QbGFjZVswXS5pbWcudmFsdWVcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19XG4gICAgICAgIG9uTG9hZD17bG9hZGluZyA/ICgpID0+IHNldExvYWRpbmcoZmFsc2UpIDogKCkgPT4ge319XG4gICAgICAgIHNyYz17cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIHshZGF0YS5kaXN0YW5jZSA/IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICkgOiBkYXRhLmRpc3RhbmNlICYmICFjb21wYXJpbmdTY29yZXMgPyAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgPGgxPkpvdXcgc2NvcmU6IHtkYXRhLmRpc3RhbmNlfWttPC9oMT5cbiAgICAgICAgICA8aDQ+SmlqIGdva3RlOiB7ZGF0YS5ndWVzc2VkQ291bnRyeX08L2g0PlxuICAgICAgICAgIDxoND5EZSBmb3RvIGlzIGdlbm9tZW4gaW46IHtkYXRhLmNvcnJlY3RDb3VudHJ5fTwvaDQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRm9ybShcIi9cIil9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApIDogKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNldFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlc2V0KCl9PlxuICAgICAgICAgIE9wbmlldXcgc3BlbGVuPyBLbGlrIGhpZXJcbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICAgIHtjb21wYXJpbmdTY29yZXMgPyAoXG4gICAgICAgIDxSZXN1bHRzXG4gICAgICAgICAgY2hvU3BlY2lmaWNIaWdoc2NvcmVzPXtjaG9TcGVjaWZpY0hpZ2hzY29yZXN9XG4gICAgICAgICAgc2NvcmVEYXRhPXtzY29yZURhdGF9XG4gICAgICAgICAgY29tcGFyaW5nU2NvcmVzPXtjb21wYXJpbmdTY29yZXN9XG4gICAgICAgICAgbmV3RW50cnk9e3sgc2NvcmU6IGRhdGEuZGlzdGFuY2UsIHVzZXJuYW1lIH19XG4gICAgICAgIC8+XG4gICAgICApIDogIWNvbXBhcmluZ1Njb3JlcyAmJiBkYXRhLmZpbmlzaGVkID8gKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIGhlaWdodDogOTZ2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSA+IGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzZXQge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.d8218acff6eb117c628d.hot-update.js.map