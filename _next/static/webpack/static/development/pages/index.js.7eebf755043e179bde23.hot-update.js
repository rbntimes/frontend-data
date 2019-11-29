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
    className: "jsx-3000360225" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Top 10 (alle foto's)"), __jsx("table", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, results.slice(0, 10).map(function (_ref2) {
    var username = _ref2.username,
        score = _ref2.score;
    return score && __jsx("tr", {
      style: {
        color: username === newEntry.username ? "red" : "black"
      },
      key: Math.random(),
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, score, "km"));
  })))), __jsx("div", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Highscores deze foto:"), __jsx("table", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-3000360225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-3000360225",
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
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-3000360225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, score, "km"));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3000360225",
    __self: this
  }, "container.jsx-3000360225{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}thead.jsx-3000360225>tr.jsx-3000360225{background:#ccc;}tr.jsx-3000360225:nth-child(even){background:#ccc;}tr.jsx-3000360225:nth-child(odd){background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VTLEFBRzBCLEFBR0csQUFHQSxBQUdBLGdCQUxsQixBQUdBLEFBR0EsMERBVEEiLCJmaWxlIjoiL1VzZXJzL244Nmllcy9Eb2N1bWVudHMvc2Nob29sL2luZm9ybWF0aW9uLWRlc2lnbi9mcm9udGVuZC1kYXRhL2NvbXBvbmVudHMvUmVzdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBSZXN1bHRzID0gKHsgbmV3RW50cnksIHNjb3JlRGF0YSwgY2hvU3BlY2lmaWNIaWdoc2NvcmVzIH0pID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IFsuLi5zY29yZURhdGEsIG5ld0VudHJ5XS5zb3J0KCh4LCB5KSA9PiB4LnNjb3JlIC0geS5zY29yZSk7XG5cbiAgY29uc3QgY2hvU3BlY2lmaWNIaWdoc2NvcmVzUmVzdWx0cyA9IFtcbiAgICAuLi5jaG9TcGVjaWZpY0hpZ2hzY29yZXMsXG4gICAgbmV3RW50cnlcbiAgXS5zb3J0KCh4LCB5KSA9PiB4LnNjb3JlIC0geS5zY29yZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PlRvcCAxMCAoYWxsZSBmb3RvJ3MpPC9oND5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXJuYW1lOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5TY29yZTo8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtyZXN1bHRzLnNsaWNlKDAsIDEwKS5tYXAoXG4gICAgICAgICAgICAgICh7IHVzZXJuYW1lLCBzY29yZSB9KSA9PlxuICAgICAgICAgICAgICAgIHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VybmFtZSA9PT0gbmV3RW50cnkudXNlcm5hbWUgPyBcInJlZFwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlfWttPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+SGlnaHNjb3JlcyBkZXplIGZvdG86PC9oND5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXJuYW1lOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5TY29yZTo8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtjaG9TcGVjaWZpY0hpZ2hzY29yZXNSZXN1bHRzLm1hcChcbiAgICAgICAgICAgICAgKHsgdXNlcm5hbWUsIHNjb3JlIH0pID0+XG4gICAgICAgICAgICAgICAgc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHVzZXJuYW1lID09PSBuZXdFbnRyeS51c2VybmFtZSA/IFwicmVkXCIgOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57c2NvcmV9a208L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoZWFkID4gdHIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Results.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ })

})
//# sourceMappingURL=index.js.7eebf755043e179bde23.hot-update.js.map