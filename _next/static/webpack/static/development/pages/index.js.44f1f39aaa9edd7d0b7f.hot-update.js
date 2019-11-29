webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/components/Results.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Results = function Results(_ref) {
  var newEntry = _ref.newEntry,
      scoreData = _ref.scoreData,
      choSpecificHighscores = _ref.choSpecificHighscores;
  var results = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(scoreData), [newEntry]).sort(function (x, y) {
    return x.score - y.score;
  });
  var choSpecificHighscoresResults = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(choSpecificHighscores), [newEntry]).sort(function (x, y) {
    return x.score - y.score;
  });
  return __jsx("div", {
    className: "jsx-3521472237" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Top 5 (alle foto's)"), __jsx("table", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, results.slice(0, 5).map(function (_ref2) {
    var username = _ref2.username,
        score = _ref2.score;
    return score && __jsx("tr", {
      style: {
        color: username === newEntry.username ? "red" : "black"
      },
      key: Math.random(),
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, score));
  })))), __jsx("div", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Highscores deze foto:"), __jsx("table", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-3521472237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, choSpecificHighscoresResults.map(function (_ref3) {
    var username = _ref3.username,
        score = _ref3.score;
    return score && __jsx("tr", {
      style: {
        color: username === newEntry.username ? "red" : "black"
      },
      key: Math.random(),
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-3521472237",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, score));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3521472237",
    __self: this
  }, "container.jsx-3521472237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}tr.jsx-3521472237:nth-child(even){background:#ccc;}tr.jsx-3521472237:nth-child(odd){background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VTLEFBRzBCLEFBR0csQUFHQSxnQkFGbEIsQUFHQSwwREFOQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvaW5mb3JtYXRpb24tZGVzaWduL2Zyb250ZW5kLWRhdGEvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IFJlc3VsdHMgPSAoeyBuZXdFbnRyeSwgc2NvcmVEYXRhLCBjaG9TcGVjaWZpY0hpZ2hzY29yZXMgfSkgPT4ge1xuICBjb25zdCByZXN1bHRzID0gWy4uLnNjb3JlRGF0YSwgbmV3RW50cnldLnNvcnQoKHgsIHkpID0+IHguc2NvcmUgLSB5LnNjb3JlKTtcblxuICBjb25zdCBjaG9TcGVjaWZpY0hpZ2hzY29yZXNSZXN1bHRzID0gW1xuICAgIC4uLmNob1NwZWNpZmljSGlnaHNjb3JlcyxcbiAgICBuZXdFbnRyeVxuICBdLnNvcnQoKHgsIHkpID0+IHguc2NvcmUgLSB5LnNjb3JlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+VG9wIDUgKGFsbGUgZm90bydzKTwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Vc2VybmFtZTo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+U2NvcmU6PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cmVzdWx0cy5zbGljZSgwLCA1KS5tYXAoXG4gICAgICAgICAgICAgICh7IHVzZXJuYW1lLCBzY29yZSB9KSA9PlxuICAgICAgICAgICAgICAgIHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VybmFtZSA9PT0gbmV3RW50cnkudXNlcm5hbWUgPyBcInJlZFwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkhpZ2hzY29yZXMgZGV6ZSBmb3RvOjwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Vc2VybmFtZTo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+U2NvcmU6PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Y2hvU3BlY2lmaWNIaWdoc2NvcmVzUmVzdWx0cy5tYXAoXG4gICAgICAgICAgICAgICh7IHVzZXJuYW1lLCBzY29yZSB9KSA9PlxuICAgICAgICAgICAgICAgIHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VybmFtZSA9PT0gbmV3RW50cnkudXNlcm5hbWUgPyBcInJlZFwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBjb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Results.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ })

})
//# sourceMappingURL=index.js.44f1f39aaa9edd7d0b7f.hot-update.js.map