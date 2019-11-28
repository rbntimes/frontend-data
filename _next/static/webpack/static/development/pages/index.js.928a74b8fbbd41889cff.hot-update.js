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
    className: "jsx-2497013987" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Absolute top 5 (van alle foto's)"), __jsx("table", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-2497013987",
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
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, score));
  })))), __jsx("div", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Highscores van deze foto:"), __jsx("table", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-2497013987",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-2497013987",
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
        color: username === "Jouw naam hier" ? "red" : "black"
      },
      key: Math.random(),
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-2497013987",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, score));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2497013987",
    __self: this
  }, "container.jsx-2497013987{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VTLEFBRzBCLDBFQUNmIiwiZmlsZSI6Ii9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1Jlc3VsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgUmVzdWx0cyA9ICh7IG5ld0VudHJ5LCBzY29yZURhdGEsIGNob1NwZWNpZmljSGlnaHNjb3JlcyB9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBbLi4uc2NvcmVEYXRhLCBuZXdFbnRyeV0uc29ydCgoeCwgeSkgPT4geC5zY29yZSAtIHkuc2NvcmUpO1xuXG4gIGNvbnN0IGNob1NwZWNpZmljSGlnaHNjb3Jlc1Jlc3VsdHMgPSBbXG4gICAgLi4uY2hvU3BlY2lmaWNIaWdoc2NvcmVzLFxuICAgIG5ld0VudHJ5XG4gIF0uc29ydCgoeCwgeSkgPT4geC5zY29yZSAtIHkuc2NvcmUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5BYnNvbHV0ZSB0b3AgNSAodmFuIGFsbGUgZm90bydzKTwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Vc2VybmFtZTo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+U2NvcmU6PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cmVzdWx0cy5zbGljZSgwLCA1KS5tYXAoXG4gICAgICAgICAgICAgICh7IHVzZXJuYW1lLCBzY29yZSB9KSA9PlxuICAgICAgICAgICAgICAgIHNjb3JlICYmIChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VybmFtZSA9PT0gbmV3RW50cnkudXNlcm5hbWUgPyBcInJlZFwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkhpZ2hzY29yZXMgdmFuIGRlemUgZm90bzo8L2g0PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+VXNlcm5hbWU6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlNjb3JlOjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2Nob1NwZWNpZmljSGlnaHNjb3Jlc1Jlc3VsdHMubWFwKFxuICAgICAgICAgICAgICAoeyB1c2VybmFtZSwgc2NvcmUgfSkgPT5cbiAgICAgICAgICAgICAgICBzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlcm5hbWUgPT09IFwiSm91dyBuYWFtIGhpZXJcIiA/IFwicmVkXCIgOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57c2NvcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Results.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ })

})
//# sourceMappingURL=index.js.928a74b8fbbd41889cff.hot-update.js.map