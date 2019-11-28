webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./distance */ "./components/distance.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





 // https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx


var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_7__["geoEquirectangular"])();

var Map =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Map, _React$Component);

  function Map() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Map).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var _this$props = this.props,
          marker = _this$props.marker,
          onSubmit = _this$props.onSubmit,
          userClickCoordinations = _this$props.userClickCoordinations,
          randomPlaceCoordinations = _this$props.randomPlaceCoordinations,
          scoreData = _this$props.scoreData;
      var map = d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#map"); // First create the world

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat( false ? undefined : "/", "static/custom.geo.json")).then(function (response) {
        if (response.status !== 200) {
          console.log("There was a problem: ".concat(response.status));
          return;
        }

        response.json().then(function (worlddata) {
          map.append("g").selectAll("path").data(Object(topojson_client__WEBPACK_IMPORTED_MODULE_9__["feature"])(worlddata, worlddata.objects.countries).features).enter().append("path").attr("d", function (d) {
            return Object(d3_geo__WEBPACK_IMPORTED_MODULE_7__["geoPath"])().projection(projection)(d);
          }).attr("stroke", "white").attr("stroke-width", "0.2").attr("id", function (d) {
            return d.properties.name;
          }); // const colour = d3
          //   .scaleLinear()
          //   .domain([d3.min(Object.keys(data), d => data[d].count), 500])
          //   .clamp(true)
          //   .range(["lightgrey", "red"]);

          map.append("g").attr("id", "markers");

          _this.drawMarker(marker);

          console.log(scoreData);

          for (var i = 0; i < scoreData.length; i++) {
            _this.drawMarker(marker);
          }

          map.on("click", function () {
            return _this.handleClick();
          });
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var map = d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#map");
      var _this$props2 = this.props,
          marker = _this$props2.marker,
          onSubmit = _this$props2.onSubmit; // Fill color of clicked country depending on answer

      var clickedCountry = d3__WEBPACK_IMPORTED_MODULE_8__["select"](d3__WEBPACK_IMPORTED_MODULE_8__["event"].target);
      var userGuessedCountry = clickedCountry.attr("id") === marker[0].landLabel.value;

      if (userGuessedCountry) {
        // Correct country was selected
        clickedCountry.attr("fill", "green");
      } else {
        clickedCountry.attr("fill", "red");
        d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#".concat(marker[0].landLabel.value)).attr("fill", "green");
      } // Use clientPoint to check where user clicked and invert it againt projection
      // https://stackoverflow.com/questions/48083536/react-v16-d3-v4-when-using-mouse-from-d3-selection-will-get-typeerror-cannot


      var userClickCoordinations = projection.invert(d3__WEBPACK_IMPORTED_MODULE_8__["clientPoint"](d3__WEBPACK_IMPORTED_MODULE_8__["event"].target, d3__WEBPACK_IMPORTED_MODULE_8__["event"]));
      var randomPlaceCoordinations = projection.invert([d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#randomplace").attr("cx"), d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#randomplace").attr("cy")]); // Drawing line between coordinates of mouseclick and the marker randomly fetched from server
      // https://stackoverflow.com/questions/43945356/drawing-line-between-two-projected-points-on-map-no-line-showing-d3-js

      map.select("#markers").data(userClickCoordinations).insert("line", "#randomplace").attr("x1", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[0]).attr("y1", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[1]).attr("x2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[0]).attr("y2", projection([Number(randomPlaceCoordinations[0]), Number(randomPlaceCoordinations[1])])[1]).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none"); // Also add marker on top of where user pressed

      map.select("#markers").append("circle").attr("id", "answer").attr("fill", "blue").attr("stroke-width", 2 / 2).attr("stroke", "white").attr("cx", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[0]).attr("cy", projection([Number(userClickCoordinations[0]), Number(userClickCoordinations[1])])[1]).attr("r", 2);
      return onSubmit({
        cho: marker[0].cho.value.split("/")[marker[0].cho.value.split("/").length - 1],
        finished: true,
        userClickCoordinations: userClickCoordinations,
        randomPlaceCoordinations: randomPlaceCoordinations,
        correctCountry: marker[0].landLabel.value,
        guessedCountry: d3__WEBPACK_IMPORTED_MODULE_8__["select"](d3__WEBPACK_IMPORTED_MODULE_8__["event"].target).attr("id"),
        distance: Object(_distance__WEBPACK_IMPORTED_MODULE_11__["default"])(userClickCoordinations[0], userClickCoordinations[1], randomPlaceCoordinations[0], randomPlaceCoordinations[1], "M"),
        userGuessedCountry: userGuessedCountry
      });
    }
  }, {
    key: "drawMarker",
    value: function drawMarker(marker) {
      d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#markers").selectAll("circle").data(marker).enter().append("circle").attr("id", "randomplace").attr("cx", function (d) {
        return projection([Number(d["long"].value), Number(d.lat.value)])[0];
      }).attr("cy", function (d) {
        return projection([Number(d["long"].value), Number(d.lat.value)])[1];
      }).attr("r", 2).attr("fill", "blue").attr("stroke-width", 2 / 2).attr("stroke", "white");
    }
  }, {
    key: "resetMap",
    value: function resetMap() {
      var _this2 = this;

      d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#markers").selectAll("*").remove();
      d3__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("path").attr("fill", "black");
      d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#map").on("click", function () {
        return _this2.handleClick();
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.data.distance === null && nextProps.data.submitted) {
        this.resetMap();
        this.drawMarker(nextProps.marker);
        return true;
      } else if (nextProps.data.finished) {
        return d3__WEBPACK_IMPORTED_MODULE_8__["select"]("#map").on("click", null);
        return false;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Map.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].func,
  marker: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].shape
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.bafe2c6086ba3974eac7.hot-update.js.map