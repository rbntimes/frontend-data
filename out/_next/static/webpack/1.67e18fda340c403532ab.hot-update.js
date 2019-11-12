webpackHotUpdate(1,{

/***/ "./components/hello3.js":
/*!******************************!*\
  !*** ./components/hello3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WorldMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorldMap */ "./components/WorldMap.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./world */ "./components/world.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/index.js");






var _jsxFileName = "/Users/n86ies/Documents/school/functional-programming/functional-programming-her/her/components/hello3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var appdata = _world__WEBPACK_IMPORTED_MODULE_8__["default"].features.filter(function (d) {
  return Object(d3_geo__WEBPACK_IMPORTED_MODULE_11__["geoCentroid"])(d)[0] < -20;
});
appdata.forEach(function (d, i) {
  var offset = Math.random();
  d.launchday = i;
  d.data = Object(d3_array__WEBPACK_IMPORTED_MODULE_9__["range"])(30).map(function (p, q) {
    return q < i ? 0 : Math.random() * 2 + offset;
  });
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.onResize = _this.onResize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onHover = _this.onHover.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onBrush = _this.onBrush.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      screenWidth: 1000,
      screenHeight: 500,
      hover: "none",
      brushExtent: [0, 40]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "onResize",
    value: function onResize() {
      this.setState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight - 120
      });
    }
  }, {
    key: "onHover",
    value: function onHover(d) {
      this.setState({
        hover: d.id
      });
    }
  }, {
    key: "onBrush",
    value: function onBrush(d) {
      this.setState({
        brushExtent: d
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.onResize, false);
      this.onResize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredAppdata = appdata.filter(function (d, i) {
        return d.launchday >= _this2.state.brushExtent[0] && d.launchday <= _this2.state.brushExtent[1];
      });
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "d3ia dashboard")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_WorldMap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        hoverElement: this.state.hover,
        onHover: this.onHover,
        colorScale: colorScale,
        data: filteredAppdata,
        size: [this.state.screenWidth / 2, this.state.screenHeight / 2],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=1.67e18fda340c403532ab.hot-update.js.map