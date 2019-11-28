webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ZoomContainer.js":
/*!*************************************!*\
  !*** ./components/ZoomContainer.js ***!
  \*************************************/
/*! exports provided: ZoomContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomContainer", function() { return ZoomContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage */ "./components/stage.js");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/components/ZoomContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEquirectangular"])();
var d3Path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])().projection(projection);
function ZoomContainer(_ref) {
  var comparingScores = _ref.comparingScores,
      children = _ref.children,
      data = _ref.data,
      finished = _ref.finished;
  var svgElement = Object(_stage__WEBPACK_IMPORTED_MODULE_2__["useSvg"])();
  var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEquirectangular"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0,
    k: 1
  }),
      _useState$ = _useState[0],
      x = _useState$.x,
      y = _useState$.y,
      k = _useState$.k,
      setTransform = _useState[1];

  if (data.distance) {
    var width = 900,
        height = 500;
    var line = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("line");
    var coords = [[Number(line.attr("x1")), Number(line.attr("y1"))], [Number(line.attr("x2")), Number(line.attr("y2"))]],
        dx = coords[1][0] - coords[0][0],
        dy = coords[1][1] - coords[0][1],
        xx = (coords[0][0] + coords[1][0]) / 2,
        yy = (coords[0][1] + coords[1][1]) / 2,
        scaleArray = [3, 0.9 / Math.max(dx / width, dy / height)],
        scale = Math.min.apply(null, scaleArray.filter(function (number) {
      return number > 0;
    })),
        translate = [width / 2 - scale * xx, height / 2 - scale * yy];
    d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#map").transition(750).attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    line.style("stroke-width", Math.max(scale, 1) + "px");
    d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]("circle").style("stroke-width", Math.max(scale, 1) + "px").attr("r", Math.max(scale, 1));
  }

  if (comparingScores) {
    d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#map").transition(750).attr("transform", "translate(0, 0) scale(1)");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!svgElement || finished) return;
    var selection = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgElement);
    var zoom = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]().on("zoom", function () {
      setTransform(d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform);
    });
    selection.call(zoom);
    return function () {
      return selection.on(".zoom", null);
    };
  }, [finished, projection, svgElement]);
  return __jsx("g", {
    id: "map",
    transform: "translate(".concat(x, ", ").concat(y, ") scale(").concat(k, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, children);
}

/***/ })

})
//# sourceMappingURL=index.js.f1372fc9dab9614b8d8c.hot-update.js.map