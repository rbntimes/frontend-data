webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WorldMap.js":
/*!********************************!*\
  !*** ./components/WorldMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/n86ies/Documents/school/functional-programming/functional-programming-her/components/WorldMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var cities = [{
  name: "Tokyo",
  coordinates: [139.6917, 35.6895],
  population: 37843000
}, {
  name: "Jakarta",
  coordinates: [106.865, -6.1751],
  population: 30539000
}, {
  name: "Delhi",
  coordinates: [77.1025, 28.7041],
  population: 24998000
}, {
  name: "Manila",
  coordinates: [120.9842, 14.5995],
  population: 24123000
}, {
  name: "Seoul",
  coordinates: [126.978, 37.5665],
  population: 23480000
}, {
  name: "Shanghai",
  coordinates: [121.4737, 31.2304],
  population: 23416000
}, {
  name: "Karachi",
  coordinates: [67.0099, 24.8615],
  population: 22123000
}, {
  name: "Beijing",
  coordinates: [116.4074, 39.9042],
  population: 21009000
}, {
  name: "New York",
  coordinates: [-74.0059, 40.7128],
  population: 20630000
}, {
  name: "Guangzhou",
  coordinates: [113.2644, 23.1291],
  population: 20597000
}, {
  name: "Sao Paulo",
  coordinates: [-46.6333, -23.5505],
  population: 20365000
}, {
  name: "Mexico City",
  coordinates: [-99.1332, 19.4326],
  population: 20063000
}, {
  name: "Mumbai",
  coordinates: [72.8777, 19.076],
  population: 17712000
}, {
  name: "Osaka",
  coordinates: [135.5022, 34.6937],
  population: 17444000
}, {
  name: "Moscow",
  coordinates: [37.6173, 55.7558],
  population: 16170000
}, {
  name: "Dhaka",
  coordinates: [90.4125, 23.8103],
  population: 15669000
}, {
  name: "Greater Cairo",
  coordinates: [31.2357, 30.0444],
  population: 15600000
}, {
  name: "Los Angeles",
  coordinates: [-118.2437, 34.0522],
  population: 15058000
}, {
  name: "Bangkok",
  coordinates: [100.5018, 13.7563],
  population: 14998000
}, {
  name: "Kolkata",
  coordinates: [88.3639, 22.5726],
  population: 14667000
}, {
  name: "Buenos Aires",
  coordinates: [-58.3816, -34.6037],
  population: 14122000
}, {
  name: "Tehran",
  coordinates: [51.389, 35.6892],
  population: 13532000
}, {
  name: "Istanbul",
  coordinates: [28.9784, 41.0082],
  population: 13287000
}, {
  name: "Lagos",
  coordinates: [3.3792, 6.5244],
  population: 13123000
}, {
  name: "Shenzhen",
  coordinates: [114.0579, 22.5431],
  population: 12084000
}, {
  name: "Rio de Janeiro",
  coordinates: [-43.1729, -22.9068],
  population: 11727000
}, {
  name: "Kinshasa",
  coordinates: [15.2663, -4.4419],
  population: 11587000
}, {
  name: "Tianjin",
  coordinates: [117.3616, 39.3434],
  population: 10920000
}, {
  name: "Paris",
  coordinates: [2.3522, 48.8566],
  population: 10858000
}, {
  name: "Lima",
  coordinates: [-77.0428, -12.0464],
  population: 10750000
}];
var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoEqualEarth"])().scale(160).translate([800 / 2, 450 / 2]);

var WorldMap = function WorldMap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      geographies = _useState[0],
      setGeographies = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      beeldmateriaal = _useState2[0],
      setBeeldmateriaal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      marker = _useState3[0],
      showMarker = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("/static/custom.geo.json").then(function (response) {
      if (response.status !== 200) {
        console.log("There was a problem: ".concat(response.status));
        return;
      }

      response.json().then(function (worlddata) {
        setGeographies(Object(topojson_client__WEBPACK_IMPORTED_MODULE_3__["feature"])(worlddata, worlddata.objects.countries).features);
      });
    });
  }, []);

  var handleCountryClick = function handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", geographies[countryIndex]);
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("/api/country?county=".concat(geographies[countryIndex].properties.name)).then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var results = _ref.results;
      return setBeeldmateriaal(results.bindings);
    });
  };

  var handleMarkerClick = function handleMarkerClick(marker) {
    showMarker({
      name: marker.placeName.value,
      src: marker.imageLink.value
    });
  };

  console.log(beeldmateriaal, marker);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("svg", {
    width: 800,
    height: 450,
    viewBox: "0 0 800 450",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("g", {
    className: "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, geographies.map(function (d, i) {
    return __jsx("path", {
      key: "path-".concat(i),
      d: Object(d3_geo__WEBPACK_IMPORTED_MODULE_2__["geoPath"])().projection(projection)(d),
      className: "country",
      fill: "rgba(38,50,56,".concat(1 / geographies.length * i, ")"),
      stroke: "#FFFFFF",
      strokeWidth: 0.5,
      onClick: function onClick() {
        return handleCountryClick(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    });
  })), __jsx("g", {
    className: "markers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, beeldmateriaal && beeldmateriaal.map(function (beeld, i) {
    return __jsx("circle", {
      key: "marker-".concat(i),
      cx: projection([Number(beeld["long"].value), Number(beeld.lat.value)])[0],
      cy: projection([Number(beeld["long"].value), Number(beeld.lat.value)])[1],
      r: 17712000 / 3000000,
      fill: "#E91E63",
      stroke: "#FFFFFF",
      className: "marker",
      onClick: function onClick() {
        return handleMarkerClick(beeld);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    });
  }))), __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ })

})
//# sourceMappingURL=index.js.b865a3821bed70f16203.hot-update.js.map