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
  var results = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(scoreData), [{
    username: "Jouw naam hier",
    score: newEntry
  }]).sort(function (x, y) {
    return x.score - y.score;
  }); // const choSpecificHighscoresResults = [
  //   ...choSpecificHighscores,
  //   { username: "Jouw naam hier", score: newEntry }
  // ].sort((x, y) => x.score - y.score);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Highscores van deze foto:"), __jsx("table", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Username:"), __jsx("td", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    className: "jsx-2947329344",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, choSpecificHighscores.map(function (_ref2) {
    var username = _ref2.username,
        score = _ref2.score;
    return score && __jsx("tr", {
      style: {
        color: username === "Jouw naam hier" ? "red" : "black"
      },
      key: Math.random(),
      className: "jsx-2947329344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2947329344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, username), __jsx("td", {
      className: "jsx-2947329344",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, score));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2947329344",
    __self: this
  }, "body{margin:0;padding:0;}div{width:100%;max-height:100vh;overlay:hidden;color:#333;font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NXLEFBR3dCLEFBSUUsU0FIRCxFQUlPLFFBSG5CLFNBSWlCLGVBQ0osV0FDWSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL244Nmllcy9Eb2N1bWVudHMvc2Nob29sL2luZm9ybWF0aW9uLWRlc2lnbi9mcm9udGVuZC1kYXRhL2NvbXBvbmVudHMvUmVzdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBSZXN1bHRzID0gKHsgbmV3RW50cnksIHNjb3JlRGF0YSwgY2hvU3BlY2lmaWNIaWdoc2NvcmVzIH0pID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IFtcbiAgICAuLi5zY29yZURhdGEsXG4gICAgeyB1c2VybmFtZTogXCJKb3V3IG5hYW0gaGllclwiLCBzY29yZTogbmV3RW50cnkgfVxuICBdLnNvcnQoKHgsIHkpID0+IHguc2NvcmUgLSB5LnNjb3JlKTtcbiAgLy8gY29uc3QgY2hvU3BlY2lmaWNIaWdoc2NvcmVzUmVzdWx0cyA9IFtcbiAgLy8gICAuLi5jaG9TcGVjaWZpY0hpZ2hzY29yZXMsXG4gIC8vICAgeyB1c2VybmFtZTogXCJKb3V3IG5hYW0gaGllclwiLCBzY29yZTogbmV3RW50cnkgfVxuICAvLyBdLnNvcnQoKHgsIHkpID0+IHguc2NvcmUgLSB5LnNjb3JlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+SGlnaHNjb3JlcyB2YW4gZGV6ZSBmb3RvOjwvaDM+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VXNlcm5hbWU6PC90ZD5cbiAgICAgICAgICAgIDx0ZD5TY29yZTo8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7Y2hvU3BlY2lmaWNIaWdoc2NvcmVzLm1hcChcbiAgICAgICAgICAgICh7IHVzZXJuYW1lLCBzY29yZSB9KSA9PlxuICAgICAgICAgICAgICBzY29yZSAmJiAoXG4gICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlcm5hbWUgPT09IFwiSm91dyBuYWFtIGhpZXJcIiA/IFwicmVkXCIgOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRkPnt1c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzY29yZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgb3ZlcmxheTogaGlkZGVuO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VXNlcm5hbWU6PC90ZD5cbiAgICAgICAgICAgIDx0ZD5TY29yZTo8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoXG4gICAgICAgICAgICAoeyB1c2VybmFtZSwgc2NvcmUgfSkgPT5cbiAgICAgICAgICAgICAgc2NvcmUgJiYgKFxuICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHVzZXJuYW1lID09PSBcIkpvdXcgbmFhbSBoaWVyXCIgPyBcInJlZFwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c2NvcmV9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/components/Results.js */")), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Username:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Score:"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, results.map(function (_ref3) {
    var username = _ref3.username,
        score = _ref3.score;
    return score && __jsx("tr", {
      style: {
        color: username === "Jouw naam hier" ? "red" : "black"
      },
      key: Math.random(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, username), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, score));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ })

})
//# sourceMappingURL=index.js.071343281c6a5df06958.hot-update.js.map