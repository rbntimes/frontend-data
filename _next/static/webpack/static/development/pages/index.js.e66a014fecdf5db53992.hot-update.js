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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/src/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/n86ies/Documents/school/functional-programming/functional-programming-her/components/WorldMap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




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
var projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoEqualEarth"])().scale(160).translate([800 / 2, 450 / 2]);

var WorldMap = function WorldMap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      geographies = _useState[0],
      setGeographies = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      beeldmateriaal = _useState2[0],
      setBeeldmateriaal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      marker = _useState3[0],
      showMarker = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("/static/custom.geo.json").then(function (response) {
      if (response.status !== 200) {
        console.log("There was a problem: ".concat(response.status));
        return;
      }

      response.json().then(function (worlddata) {
        setGeographies(Object(topojson_client__WEBPACK_IMPORTED_MODULE_4__["feature"])(worlddata, worlddata.objects.countries).features);
      });
    });
  }, []);

  var handleCountryClick = function handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", geographies[countryIndex]);
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("/api/country?county=".concat(geographies[countryIndex].properties.name)).then(function (data) {
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
    className: "jsx-345004075" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("svg", {
    width: 800,
    height: 450,
    viewBox: "0 0 800 450",
    className: "jsx-345004075",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-345004075" + " " + "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, geographies.map(function (d, i) {
    return __jsx("path", {
      key: "path-".concat(i),
      d: Object(d3_geo__WEBPACK_IMPORTED_MODULE_3__["geoPath"])().projection(projection)(d),
      fill: "rgba(38,50,56,".concat(1 / geographies.length * i, ")"),
      stroke: "#FFFFFF",
      strokeWidth: 0.5,
      onClick: function onClick() {
        return handleCountryClick(i);
      },
      className: "jsx-345004075" + " " + "country",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    });
  })), __jsx("g", {
    className: "jsx-345004075" + " " + "markers",
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
      onClick: function onClick() {
        return handleMarkerClick(beeld);
      },
      className: "jsx-345004075" + " " + "marker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    });
  }))), __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
    className: "jsx-345004075" + " " + (marker && marker.className != null && marker.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "345004075",
    __self: this
  }, ".container.jsx-345004075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-345004075{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9mdW5jdGlvbmFsLXByb2dyYW1taW5nL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmctaGVyL2NvbXBvbmVudHMvV29ybGRNYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMklrQixBQUd3QixBQUdELFlBQ2QsOERBSEEiLCJmaWxlIjoiL1VzZXJzL244Nmllcy9Eb2N1bWVudHMvc2Nob29sL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmcvZnVuY3Rpb25hbC1wcm9ncmFtbWluZy1oZXIvY29tcG9uZW50cy9Xb3JsZE1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZW9FcXVhbEVhcnRoLCBnZW9QYXRoIH0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gXCJ0b3BvanNvbi1jbGllbnRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IGNpdGllcyA9IFtcbiAgeyBuYW1lOiBcIlRva3lvXCIsIGNvb3JkaW5hdGVzOiBbMTM5LjY5MTcsIDM1LjY4OTVdLCBwb3B1bGF0aW9uOiAzNzg0MzAwMCB9LFxuICB7IG5hbWU6IFwiSmFrYXJ0YVwiLCBjb29yZGluYXRlczogWzEwNi44NjUsIC02LjE3NTFdLCBwb3B1bGF0aW9uOiAzMDUzOTAwMCB9LFxuICB7IG5hbWU6IFwiRGVsaGlcIiwgY29vcmRpbmF0ZXM6IFs3Ny4xMDI1LCAyOC43MDQxXSwgcG9wdWxhdGlvbjogMjQ5OTgwMDAgfSxcbiAgeyBuYW1lOiBcIk1hbmlsYVwiLCBjb29yZGluYXRlczogWzEyMC45ODQyLCAxNC41OTk1XSwgcG9wdWxhdGlvbjogMjQxMjMwMDAgfSxcbiAgeyBuYW1lOiBcIlNlb3VsXCIsIGNvb3JkaW5hdGVzOiBbMTI2Ljk3OCwgMzcuNTY2NV0sIHBvcHVsYXRpb246IDIzNDgwMDAwIH0sXG4gIHsgbmFtZTogXCJTaGFuZ2hhaVwiLCBjb29yZGluYXRlczogWzEyMS40NzM3LCAzMS4yMzA0XSwgcG9wdWxhdGlvbjogMjM0MTYwMDAgfSxcbiAgeyBuYW1lOiBcIkthcmFjaGlcIiwgY29vcmRpbmF0ZXM6IFs2Ny4wMDk5LCAyNC44NjE1XSwgcG9wdWxhdGlvbjogMjIxMjMwMDAgfSxcbiAgeyBuYW1lOiBcIkJlaWppbmdcIiwgY29vcmRpbmF0ZXM6IFsxMTYuNDA3NCwgMzkuOTA0Ml0sIHBvcHVsYXRpb246IDIxMDA5MDAwIH0sXG4gIHsgbmFtZTogXCJOZXcgWW9ya1wiLCBjb29yZGluYXRlczogWy03NC4wMDU5LCA0MC43MTI4XSwgcG9wdWxhdGlvbjogMjA2MzAwMDAgfSxcbiAgeyBuYW1lOiBcIkd1YW5nemhvdVwiLCBjb29yZGluYXRlczogWzExMy4yNjQ0LCAyMy4xMjkxXSwgcG9wdWxhdGlvbjogMjA1OTcwMDAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2FvIFBhdWxvXCIsXG4gICAgY29vcmRpbmF0ZXM6IFstNDYuNjMzMywgLTIzLjU1MDVdLFxuICAgIHBvcHVsYXRpb246IDIwMzY1MDAwXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1leGljbyBDaXR5XCIsXG4gICAgY29vcmRpbmF0ZXM6IFstOTkuMTMzMiwgMTkuNDMyNl0sXG4gICAgcG9wdWxhdGlvbjogMjAwNjMwMDBcbiAgfSxcbiAgeyBuYW1lOiBcIk11bWJhaVwiLCBjb29yZGluYXRlczogWzcyLjg3NzcsIDE5LjA3Nl0sIHBvcHVsYXRpb246IDE3NzEyMDAwIH0sXG4gIHsgbmFtZTogXCJPc2FrYVwiLCBjb29yZGluYXRlczogWzEzNS41MDIyLCAzNC42OTM3XSwgcG9wdWxhdGlvbjogMTc0NDQwMDAgfSxcbiAgeyBuYW1lOiBcIk1vc2Nvd1wiLCBjb29yZGluYXRlczogWzM3LjYxNzMsIDU1Ljc1NThdLCBwb3B1bGF0aW9uOiAxNjE3MDAwMCB9LFxuICB7IG5hbWU6IFwiRGhha2FcIiwgY29vcmRpbmF0ZXM6IFs5MC40MTI1LCAyMy44MTAzXSwgcG9wdWxhdGlvbjogMTU2NjkwMDAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JlYXRlciBDYWlyb1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbMzEuMjM1NywgMzAuMDQ0NF0sXG4gICAgcG9wdWxhdGlvbjogMTU2MDAwMDBcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9zIEFuZ2VsZXNcIixcbiAgICBjb29yZGluYXRlczogWy0xMTguMjQzNywgMzQuMDUyMl0sXG4gICAgcG9wdWxhdGlvbjogMTUwNTgwMDBcbiAgfSxcbiAgeyBuYW1lOiBcIkJhbmdrb2tcIiwgY29vcmRpbmF0ZXM6IFsxMDAuNTAxOCwgMTMuNzU2M10sIHBvcHVsYXRpb246IDE0OTk4MDAwIH0sXG4gIHsgbmFtZTogXCJLb2xrYXRhXCIsIGNvb3JkaW5hdGVzOiBbODguMzYzOSwgMjIuNTcyNl0sIHBvcHVsYXRpb246IDE0NjY3MDAwIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJ1ZW5vcyBBaXJlc1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbLTU4LjM4MTYsIC0zNC42MDM3XSxcbiAgICBwb3B1bGF0aW9uOiAxNDEyMjAwMFxuICB9LFxuICB7IG5hbWU6IFwiVGVocmFuXCIsIGNvb3JkaW5hdGVzOiBbNTEuMzg5LCAzNS42ODkyXSwgcG9wdWxhdGlvbjogMTM1MzIwMDAgfSxcbiAgeyBuYW1lOiBcIklzdGFuYnVsXCIsIGNvb3JkaW5hdGVzOiBbMjguOTc4NCwgNDEuMDA4Ml0sIHBvcHVsYXRpb246IDEzMjg3MDAwIH0sXG4gIHsgbmFtZTogXCJMYWdvc1wiLCBjb29yZGluYXRlczogWzMuMzc5MiwgNi41MjQ0XSwgcG9wdWxhdGlvbjogMTMxMjMwMDAgfSxcbiAgeyBuYW1lOiBcIlNoZW56aGVuXCIsIGNvb3JkaW5hdGVzOiBbMTE0LjA1NzksIDIyLjU0MzFdLCBwb3B1bGF0aW9uOiAxMjA4NDAwMCB9LFxuICB7XG4gICAgbmFtZTogXCJSaW8gZGUgSmFuZWlyb1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbLTQzLjE3MjksIC0yMi45MDY4XSxcbiAgICBwb3B1bGF0aW9uOiAxMTcyNzAwMFxuICB9LFxuICB7IG5hbWU6IFwiS2luc2hhc2FcIiwgY29vcmRpbmF0ZXM6IFsxNS4yNjYzLCAtNC40NDE5XSwgcG9wdWxhdGlvbjogMTE1ODcwMDAgfSxcbiAgeyBuYW1lOiBcIlRpYW5qaW5cIiwgY29vcmRpbmF0ZXM6IFsxMTcuMzYxNiwgMzkuMzQzNF0sIHBvcHVsYXRpb246IDEwOTIwMDAwIH0sXG4gIHsgbmFtZTogXCJQYXJpc1wiLCBjb29yZGluYXRlczogWzIuMzUyMiwgNDguODU2Nl0sIHBvcHVsYXRpb246IDEwODU4MDAwIH0sXG4gIHsgbmFtZTogXCJMaW1hXCIsIGNvb3JkaW5hdGVzOiBbLTc3LjA0MjgsIC0xMi4wNDY0XSwgcG9wdWxhdGlvbjogMTA3NTAwMDAgfVxuXTtcblxuY29uc3QgcHJvamVjdGlvbiA9IGdlb0VxdWFsRWFydGgoKVxuICAuc2NhbGUoMTYwKVxuICAudHJhbnNsYXRlKFs4MDAgLyAyLCA0NTAgLyAyXSk7XG5cbmNvbnN0IFdvcmxkTWFwID0gKCkgPT4ge1xuICBjb25zdCBbZ2VvZ3JhcGhpZXMsIHNldEdlb2dyYXBoaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2JlZWxkbWF0ZXJpYWFsLCBzZXRCZWVsZG1hdGVyaWFhbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFttYXJrZXIsIHNob3dNYXJrZXJdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCIvc3RhdGljL2N1c3RvbS5nZW8uanNvblwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGEgcHJvYmxlbTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHdvcmxkZGF0YSA9PiB7XG4gICAgICAgIHNldEdlb2dyYXBoaWVzKFxuICAgICAgICAgIGZlYXR1cmUod29ybGRkYXRhLCB3b3JsZGRhdGEub2JqZWN0cy5jb3VudHJpZXMpLmZlYXR1cmVzXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50cnlDbGljayA9IGNvdW50cnlJbmRleCA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDbGlja2VkIG9uIGNvdW50cnk6IFwiLCBnZW9ncmFwaGllc1tjb3VudHJ5SW5kZXhdKTtcbiAgICBmZXRjaChgL2FwaS9jb3VudHJ5P2NvdW50eT0ke2dlb2dyYXBoaWVzW2NvdW50cnlJbmRleF0ucHJvcGVydGllcy5uYW1lfWApXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oKHsgcmVzdWx0cyB9KSA9PiBzZXRCZWVsZG1hdGVyaWFhbChyZXN1bHRzLmJpbmRpbmdzKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWFya2VyQ2xpY2sgPSBtYXJrZXIgPT4ge1xuICAgIHNob3dNYXJrZXIoeyBuYW1lOiBtYXJrZXIucGxhY2VOYW1lLnZhbHVlLCBzcmM6IG1hcmtlci5pbWFnZUxpbmsudmFsdWUgfSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKGJlZWxkbWF0ZXJpYWFsLCBtYXJrZXIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8c3ZnIHdpZHRoPXs4MDB9IGhlaWdodD17NDUwfSB2aWV3Qm94PVwiMCAwIDgwMCA0NTBcIj5cbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiY291bnRyaWVzXCI+XG4gICAgICAgICAge2dlb2dyYXBoaWVzLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAga2V5PXtgcGF0aC0ke2l9YH1cbiAgICAgICAgICAgICAgZD17Z2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbikoZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50cnlcIlxuICAgICAgICAgICAgICBmaWxsPXtgcmdiYSgzOCw1MCw1NiwkeygxIC8gZ2VvZ3JhcGhpZXMubGVuZ3RoKSAqIGl9KWB9XG4gICAgICAgICAgICAgIHN0cm9rZT1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MC41fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb3VudHJ5Q2xpY2soaSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGNsYXNzTmFtZT1cIm1hcmtlcnNcIj5cbiAgICAgICAgICB7YmVlbGRtYXRlcmlhYWwgJiZcbiAgICAgICAgICAgIGJlZWxkbWF0ZXJpYWFsLm1hcCgoYmVlbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIGtleT17YG1hcmtlci0ke2l9YH1cbiAgICAgICAgICAgICAgICBjeD17XG4gICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uKFtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGJlZWxkLmxvbmcudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYmVlbGQubGF0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgXSlbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3k9e1xuICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbihbXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihiZWVsZC5sb25nLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGJlZWxkLmxhdC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIF0pWzFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHI9ezE3NzEyMDAwIC8gMzAwMDAwMH1cbiAgICAgICAgICAgICAgICBmaWxsPVwiI0U5MUU2M1wiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2VyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYXJrZXJDbGljayhiZWVsZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgICA8aW1nIHsuLi5tYXJrZXJ9IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkTWFwO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/functional-programming/functional-programming-her/components/WorldMap.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ })

})
//# sourceMappingURL=index.js.e66a014fecdf5db53992.hot-update.js.map