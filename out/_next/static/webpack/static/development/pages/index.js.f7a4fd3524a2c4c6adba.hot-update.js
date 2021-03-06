webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./distance */ "./components/distance.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





 // https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx


var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_8__["geoEquirectangular"])();

var Map =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Map, _React$Component);

  function Map() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Map);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Map).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var onSubmit = this.props.onSubmit;
      var map = d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#map"); // First create the world

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("".concat( false ? undefined : "/", "static/custom.geo.json")).then(function (response) {
        if (response.status !== 200) {
          console.log("Kan de map niet ladem: ".concat(response.status));
          return;
        }

        response.json().then(function (worlddata) {
          map.append("g").selectAll("path").data(Object(topojson_client__WEBPACK_IMPORTED_MODULE_10__["feature"])(worlddata, worlddata.objects.countries).features).enter().append("path").attr("d", function (d) {
            return Object(d3_geo__WEBPACK_IMPORTED_MODULE_8__["geoPath"])().projection(projection)(d);
          }).attr("stroke", "white").attr("stroke-width", "0.2").attr("id", function (d) {
            return d.properties.name;
          }); // const colour = d3
          //   .scaleLinear()
          //   .domain([d3.min(Object.keys(data), d => data[d].count), 500])
          //   .clamp(true)
          //   .range(["lightgrey", "red"]);

          map.append("g").attr("id", "lines");
          map.append("g").attr("id", "markers");
          map.on("click", function () {
            return _this.handleClick();
          });
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var map = d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#map");
      var _this$props = this.props,
          marker = _this$props.marker,
          onSubmit = _this$props.onSubmit; // Fill color of clicked country depending on answer

      var clickedCountry = d3__WEBPACK_IMPORTED_MODULE_9__["select"](d3__WEBPACK_IMPORTED_MODULE_9__["event"].target);
      var userGuessedCountry = clickedCountry.attr("id") === marker[0].landLabel.value;

      if (userGuessedCountry) {
        // Correct country was selected
        clickedCountry.attr("fill", "green");
      } else {
        clickedCountry.attr("fill", "red");
        d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#".concat(marker[0].landLabel.value)).attr("fill", "green");
      } // Use clientPoint to check where user clicked and invert it againt projection
      // https://stackoverflow.com/questions/48083536/react-v16-d3-v4-when-using-mouse-from-d3-selection-will-get-typeerror-cannot


      var userClickCoordinations = projection.invert(d3__WEBPACK_IMPORTED_MODULE_9__["clientPoint"](d3__WEBPACK_IMPORTED_MODULE_9__["event"].target, d3__WEBPACK_IMPORTED_MODULE_9__["event"]));
      this.drawMarker([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.marker), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.scoreData), [{
        id: "answer",
        lat: userClickCoordinations[1],
        "long": userClickCoordinations[0]
      }]));
      var randomPlaceCoordinations = projection.invert([d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#randomplace").attr("cx"), d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#randomplace").attr("cy")]); // Drawing line between coordinates of mouseclick and the marker randomly fetched from server
      // https://stackoverflow.com/questions/43945356/drawing-line-between-two-projected-points-on-map-no-line-showing-d3-js

      map.select("#markers").data(userClickCoordinations).insert("line", "#randomplace").attr("x1", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[0]).attr("y1", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[1]).attr("x2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[0]).attr("y2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[1]).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none");
      this.drawLines(this.props.scoreData);
      return onSubmit({
        cho: marker[0].cho.value.split("/")[marker[0].cho.value.split("/").length - 1],
        finished: true,
        userClickCoordinations: userClickCoordinations,
        randomPlaceCoordinations: randomPlaceCoordinations,
        correctCountry: marker[0].landLabel.value,
        guessedCountry: d3__WEBPACK_IMPORTED_MODULE_9__["select"](d3__WEBPACK_IMPORTED_MODULE_9__["event"].target).attr("id"),
        distance: Object(_distance__WEBPACK_IMPORTED_MODULE_12__["default"])(userClickCoordinations[0], userClickCoordinations[1], randomPlaceCoordinations[0], randomPlaceCoordinations[1], "M"),
        userGuessedCountry: userGuessedCountry
      });
    }
  }, {
    key: "getPlaceCoordinates",
    value: function getPlaceCoordinates(id) {
      return projection.invert([d3__WEBPACK_IMPORTED_MODULE_9__["select"](id).attr("cx"), d3__WEBPACK_IMPORTED_MODULE_9__["select"](id).attr("cy")]);
    }
  }, {
    key: "drawLines",
    value: function drawLines(scoreData) {
      var _this2 = this;

      var randomPlaceCoordinations = projection.invert([d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#randomplace").attr("cx"), d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#randomplace").attr("cy")]);
      var useData = scoreData.filter(function (_ref) {
        var id = _ref.id;
        return !d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#id_".concat(id)).empty();
      });
      d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#lines").selectAll("line").data(useData).enter().append("line").attr("x1", function (_ref2) {
        var id = _ref2.id;
        var select = d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#id_".concat(id));

        if (!select.empty()) {
          return projection([_this2.getPlaceCoordinates("#id_".concat(id))[0], _this2.getPlaceCoordinates("#id_".concat(id))[1]])[0];
        }

        return null;
      }).attr("y1", function (_ref3) {
        var id = _ref3.id;
        var select = d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#id_".concat(id));

        if (!select.empty()) {
          return projection([_this2.getPlaceCoordinates("#id_".concat(id))[0], _this2.getPlaceCoordinates("#id_".concat(id))[1]])[1];
        }

        return null;
      }).attr("x2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[0]).attr("y2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[1]).attr("id", function (_ref4) {
        var id = _ref4.id;
        return "line_".concat(id);
      }).attr("opacity", function (_ref5) {
        var id = _ref5.id;
        return id ? 0 : 1;
      }).attr("stroke", "grey").attr("stroke-width", 1).attr("fill", "none");
    }
  }, {
    key: "drawMarker",
    value: function drawMarker(marker) {
      return d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#markers").selectAll("circle").data(marker).enter().append("circle").attr("id", function (_ref6) {
        var id = _ref6.id;
        return !id ? "randomplace" : "id_".concat(id);
      }).attr("cx", function (_ref7) {
        var id = _ref7.id,
            _long = _ref7["long"],
            lat = _ref7.lat;
        return projection([Number(id ? _long : _long.value), Number(id ? lat : lat.value)])[0];
      }).attr("cy", function (_ref8) {
        var id = _ref8.id,
            _long2 = _ref8["long"],
            lat = _ref8.lat;
        return projection([Number(id ? _long2 : _long2.value), Number(id ? lat : lat.value)])[1];
      }).attr("r", 2).attr("fill", function (_ref9) {
        var id = _ref9.id;
        return !id ? "green" : "blue";
      }).attr("opacity", function (_ref10) {
        var id = _ref10.id;
        return id ? 0 : 1;
      }).attr("stroke-width", 2 / 2).attr("stroke", "white").append("svg:title").text(function (d) {
        return d.username;
      });
    }
  }, {
    key: "resetMap",
    value: function resetMap() {
      var _this3 = this;

      d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#markers").selectAll("*").remove();
      d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#lines").selectAll("*").remove();
      d3__WEBPACK_IMPORTED_MODULE_9__["selectAll"]("path").attr("fill", "black");
      d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#map").on("click", function () {
        return _this3.handleClick();
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.data.distance === null && nextProps.data.submitted) {
        this.resetMap();
        return true;
      } else if (nextProps.comparingScores) {
        d3__WEBPACK_IMPORTED_MODULE_9__["selectAll"]("circle").attr("opacity", 1);
        d3__WEBPACK_IMPORTED_MODULE_9__["selectAll"]("line").attr("opacity", 1);
        return false;
      } else if (nextProps.data.finished) {
        d3__WEBPACK_IMPORTED_MODULE_9__["select"]("#map").on("click", null);
        return false;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null);
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Map.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_7__["PropTypes"].func
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.f7a4fd3524a2c4c6adba.hot-update.js.map