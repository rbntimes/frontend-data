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
      onSubmit = _ref.onSubmit;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

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
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Waar zou de volgende foto gemaakt zijn?"), __jsx("p", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 32
    },
    __self: this
  }), !data.distance ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }) : data.distance && !comparingScores ? __jsx("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Jouw score: ", data.distance, "km"), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Jij gokte: ", data.guessedCountry), __jsx("h4", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "De foto is genomen in: ", data.correctCountry), __jsx("div", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 46
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return handleForm("/");
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Submit"))) : __jsx("a", {
    onClick: function onClick() {
      return handleReset();
    },
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Opnieuw"), comparingScores ? __jsx(_Results__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scoreData: scoreData,
    comparingScores: comparingScores,
    newEntry: data.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }) : !comparingScores && data.finished ? __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-1047011017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1047011017",
    __self: this
  }, "aside.jsx-1047011017{height:96vh;overflow:scroll;}body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}form.jsx-1047011017>div.jsx-1047011017{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VTLEFBR3lCLEFBSUgsQUFNSSxTQUxILEdBSk0sT0FNTyxTQUx6Qiw4Q0FTQSwrQkFIQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBSZXN1bHRzIGZyb20gXCIuL1Jlc3VsdHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7XG4gIGRhdGEsXG4gIGxvYWRpbmcsXG4gIHJhbmRvbVBsYWNlLFxuICBoYW5kbGVGb3JtLFxuICB1c2VybmFtZSxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldExvYWRpbmcsXG4gIGNvbXBhcmluZ1Njb3JlcyxcbiAgc2NvcmVEYXRhLFxuICBvblN1Ym1pdFxufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBvblN1Ym1pdCh7IGRpc3RhbmNlOiBudWxsLCBzdWJtaXR0ZWQ6IHRydWUgfSk7XG4gICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgPGgxPldhYXIgem91IGRlIHZvbGdlbmRlIGZvdG8gZ2VtYWFrdCB6aWpuPzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgV2VldCBqaWogd2FhciBkZSB2b2xnZW5kZSBhZmJlZWxkaW5nIGdlbm9tZW4gaXMsIGtsaWsgb3AgZGUgZ29laWUgcGxla1xuICAgICAgICBvcCBkZSBtYXBcbiAgICAgIDwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19XG4gICAgICAgIG9uTG9hZD17bG9hZGluZyA/ICgpID0+IHNldExvYWRpbmcoZmFsc2UpIDogKCkgPT4ge319XG4gICAgICAgIHNyYz17cmFuZG9tUGxhY2VbMF0uaW1nLnZhbHVlfVxuICAgICAgLz5cbiAgICAgIHshZGF0YS5kaXN0YW5jZSA/IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICkgOiBkYXRhLmRpc3RhbmNlICYmICFjb21wYXJpbmdTY29yZXMgPyAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgPGgxPkpvdXcgc2NvcmU6IHtkYXRhLmRpc3RhbmNlfWttPC9oMT5cbiAgICAgICAgICA8aDQ+SmlqIGdva3RlOiB7ZGF0YS5ndWVzc2VkQ291bnRyeX08L2g0PlxuICAgICAgICAgIDxoND5EZSBmb3RvIGlzIGdlbm9tZW4gaW46IHtkYXRhLmNvcnJlY3RDb3VudHJ5fTwvaDQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRm9ybShcIi9cIil9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApIDogKFxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZXNldCgpfT5PcG5pZXV3PC9hPlxuICAgICAgKX1cbiAgICAgIHtjb21wYXJpbmdTY29yZXMgPyAoXG4gICAgICAgIDxSZXN1bHRzXG4gICAgICAgICAgc2NvcmVEYXRhPXtzY29yZURhdGF9XG4gICAgICAgICAgY29tcGFyaW5nU2NvcmVzPXtjb21wYXJpbmdTY29yZXN9XG4gICAgICAgICAgbmV3RW50cnk9e2RhdGEuZGlzdGFuY2V9XG4gICAgICAgIC8+XG4gICAgICApIDogIWNvbXBhcmluZ1Njb3JlcyAmJiBkYXRhLmZpbmlzaGVkID8gKFxuICAgICAgICA8c3BhbiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gLz5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIGhlaWdodDogOTZ2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSA+IGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.486c06d3643aeb45af88.hot-update.js.map