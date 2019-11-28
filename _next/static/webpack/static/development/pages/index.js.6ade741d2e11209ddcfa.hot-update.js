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
var _this = undefined,
    _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js";


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

  var handleReset = function handleReset() {
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
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 28
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 42
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: _this.handleReset(),
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Opnieuw"), comparingScores ? __jsx(_Results__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scoreData: scoreData,
    comparingScores: comparingScores,
    newEntry: data.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1047011017",
    __self: this
  }, "aside.jsx-1047011017{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1047011017>div.jsx-1047011017{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VTLEFBR3lCLEFBSUgsQUFNSSxTQUxILEdBSk0sT0FNTyxTQUx6Qiw4Q0FTQSwrQkFIQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgUmVzdWx0cyBmcm9tIFwiLi9SZXN1bHRzXCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoe1xuICBkYXRhLFxuICBsb2FkaW5nLFxuICByYW5kb21QbGFjZSxcbiAgaGFuZGxlRm9ybSxcbiAgdXNlcm5hbWUsXG4gIHNldFVzZXJuYW1lLFxuICBzZXRMb2FkaW5nLFxuICBjb21wYXJpbmdTY29yZXMsXG4gIHNjb3JlRGF0YVxufSkgPT4ge1xuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBvblN1Ym1pdCh7IGRpc3RhbmNlOiBudWxsLCBzdWJtaXR0ZWQ6IHRydWUgfSk7XG4gICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGgxPldhYXIgem91IGRlIHZvbGdlbmRlIGZvdG8gZ2VtYWFrdCB6aWpuPzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgV2VldCBqaWogd2FhciBkZSB2b2xnZW5kZSBhZmJlZWxkaW5nIGdlbm9tZW4gaXMsIGtsaWsgb3AgZGUgZ29laWUgcGxla1xuICAgICAgICBvcCBkZSBtYXBcbiAgICAgIDwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19XG4gICAgICAgIG9uTG9hZD17bG9hZGluZyA/ICgpID0+IHNldExvYWRpbmcoZmFsc2UpIDogKCkgPT4ge319XG4gICAgICAgIHNyYz17cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIHshZGF0YS5kaXN0YW5jZSA/IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICkgOiBkYXRhLmRpc3RhbmNlICYmICFjb21wYXJpbmdTY29yZXMgPyAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgPGgxPkpvdXcgc2NvcmU6IHtkYXRhLmRpc3RhbmNlfWttPC9oMT5cbiAgICAgICAgICA8aDQ+SmlqIGdva3RlOiB7ZGF0YS5ndWVzc2VkQ291bnRyeX08L2g0PlxuICAgICAgICAgIDxoND5EZSBmb3RvIGlzIGdlbm9tZW4gaW46IHtkYXRhLmNvcnJlY3RDb3VudHJ5fTwvaDQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRm9ybShcIi9cIil9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApIDogKFxuICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0KCl9Pk9wbmlldXc8L2E+XG4gICAgICApfVxuICAgICAge2NvbXBhcmluZ1Njb3JlcyA/IChcbiAgICAgICAgPFJlc3VsdHNcbiAgICAgICAgICBzY29yZURhdGE9e3Njb3JlRGF0YX1cbiAgICAgICAgICBjb21wYXJpbmdTY29yZXM9e2NvbXBhcmluZ1Njb3Jlc31cbiAgICAgICAgICBuZXdFbnRyeT17ZGF0YS5kaXN0YW5jZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAhY29tcGFyaW5nU2NvcmVzICYmIGRhdGEuZmluaXNoZWQgPyAoXG4gICAgICAgIDxzcGFuIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA5NnZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.6ade741d2e11209ddcfa.hot-update.js.map