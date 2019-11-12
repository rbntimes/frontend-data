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
    className: "jsx-1965658348" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("svg", {
    width: 800,
    height: 450,
    viewBox: "0 0 800 450",
    className: "jsx-1965658348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-1965658348" + " " + "countries",
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
      className: "jsx-1965658348" + " " + "country",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    });
  })), __jsx("g", {
    className: "jsx-1965658348" + " " + "markers",
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
      className: "jsx-1965658348" + " " + "marker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    });
  }))), __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, marker, {
    className: "jsx-1965658348" + " " + (marker && marker.className != null && marker.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1965658348",
    __self: this
  }, ".container.jsx-1965658348{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-1965658348{width:400px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9mdW5jdGlvbmFsLXByb2dyYW1taW5nL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmctaGVyL2NvbXBvbmVudHMvV29ybGRNYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMklrQixBQUd3QixBQUdELFlBQ0EsWUFDZCxrREFKQSIsImZpbGUiOiIvVXNlcnMvbjg2aWVzL0RvY3VtZW50cy9zY2hvb2wvZnVuY3Rpb25hbC1wcm9ncmFtbWluZy9mdW5jdGlvbmFsLXByb2dyYW1taW5nLWhlci9jb21wb25lbnRzL1dvcmxkTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdlb0VxdWFsRWFydGgsIGdlb1BhdGggfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSBcInRvcG9qc29uLWNsaWVudFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgY2l0aWVzID0gW1xuICB7IG5hbWU6IFwiVG9reW9cIiwgY29vcmRpbmF0ZXM6IFsxMzkuNjkxNywgMzUuNjg5NV0sIHBvcHVsYXRpb246IDM3ODQzMDAwIH0sXG4gIHsgbmFtZTogXCJKYWthcnRhXCIsIGNvb3JkaW5hdGVzOiBbMTA2Ljg2NSwgLTYuMTc1MV0sIHBvcHVsYXRpb246IDMwNTM5MDAwIH0sXG4gIHsgbmFtZTogXCJEZWxoaVwiLCBjb29yZGluYXRlczogWzc3LjEwMjUsIDI4LjcwNDFdLCBwb3B1bGF0aW9uOiAyNDk5ODAwMCB9LFxuICB7IG5hbWU6IFwiTWFuaWxhXCIsIGNvb3JkaW5hdGVzOiBbMTIwLjk4NDIsIDE0LjU5OTVdLCBwb3B1bGF0aW9uOiAyNDEyMzAwMCB9LFxuICB7IG5hbWU6IFwiU2VvdWxcIiwgY29vcmRpbmF0ZXM6IFsxMjYuOTc4LCAzNy41NjY1XSwgcG9wdWxhdGlvbjogMjM0ODAwMDAgfSxcbiAgeyBuYW1lOiBcIlNoYW5naGFpXCIsIGNvb3JkaW5hdGVzOiBbMTIxLjQ3MzcsIDMxLjIzMDRdLCBwb3B1bGF0aW9uOiAyMzQxNjAwMCB9LFxuICB7IG5hbWU6IFwiS2FyYWNoaVwiLCBjb29yZGluYXRlczogWzY3LjAwOTksIDI0Ljg2MTVdLCBwb3B1bGF0aW9uOiAyMjEyMzAwMCB9LFxuICB7IG5hbWU6IFwiQmVpamluZ1wiLCBjb29yZGluYXRlczogWzExNi40MDc0LCAzOS45MDQyXSwgcG9wdWxhdGlvbjogMjEwMDkwMDAgfSxcbiAgeyBuYW1lOiBcIk5ldyBZb3JrXCIsIGNvb3JkaW5hdGVzOiBbLTc0LjAwNTksIDQwLjcxMjhdLCBwb3B1bGF0aW9uOiAyMDYzMDAwMCB9LFxuICB7IG5hbWU6IFwiR3Vhbmd6aG91XCIsIGNvb3JkaW5hdGVzOiBbMTEzLjI2NDQsIDIzLjEyOTFdLCBwb3B1bGF0aW9uOiAyMDU5NzAwMCB9LFxuICB7XG4gICAgbmFtZTogXCJTYW8gUGF1bG9cIixcbiAgICBjb29yZGluYXRlczogWy00Ni42MzMzLCAtMjMuNTUwNV0sXG4gICAgcG9wdWxhdGlvbjogMjAzNjUwMDBcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWV4aWNvIENpdHlcIixcbiAgICBjb29yZGluYXRlczogWy05OS4xMzMyLCAxOS40MzI2XSxcbiAgICBwb3B1bGF0aW9uOiAyMDA2MzAwMFxuICB9LFxuICB7IG5hbWU6IFwiTXVtYmFpXCIsIGNvb3JkaW5hdGVzOiBbNzIuODc3NywgMTkuMDc2XSwgcG9wdWxhdGlvbjogMTc3MTIwMDAgfSxcbiAgeyBuYW1lOiBcIk9zYWthXCIsIGNvb3JkaW5hdGVzOiBbMTM1LjUwMjIsIDM0LjY5MzddLCBwb3B1bGF0aW9uOiAxNzQ0NDAwMCB9LFxuICB7IG5hbWU6IFwiTW9zY293XCIsIGNvb3JkaW5hdGVzOiBbMzcuNjE3MywgNTUuNzU1OF0sIHBvcHVsYXRpb246IDE2MTcwMDAwIH0sXG4gIHsgbmFtZTogXCJEaGFrYVwiLCBjb29yZGluYXRlczogWzkwLjQxMjUsIDIzLjgxMDNdLCBwb3B1bGF0aW9uOiAxNTY2OTAwMCB9LFxuICB7XG4gICAgbmFtZTogXCJHcmVhdGVyIENhaXJvXCIsXG4gICAgY29vcmRpbmF0ZXM6IFszMS4yMzU3LCAzMC4wNDQ0XSxcbiAgICBwb3B1bGF0aW9uOiAxNTYwMDAwMFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb3MgQW5nZWxlc1wiLFxuICAgIGNvb3JkaW5hdGVzOiBbLTExOC4yNDM3LCAzNC4wNTIyXSxcbiAgICBwb3B1bGF0aW9uOiAxNTA1ODAwMFxuICB9LFxuICB7IG5hbWU6IFwiQmFuZ2tva1wiLCBjb29yZGluYXRlczogWzEwMC41MDE4LCAxMy43NTYzXSwgcG9wdWxhdGlvbjogMTQ5OTgwMDAgfSxcbiAgeyBuYW1lOiBcIktvbGthdGFcIiwgY29vcmRpbmF0ZXM6IFs4OC4zNjM5LCAyMi41NzI2XSwgcG9wdWxhdGlvbjogMTQ2NjcwMDAgfSxcbiAge1xuICAgIG5hbWU6IFwiQnVlbm9zIEFpcmVzXCIsXG4gICAgY29vcmRpbmF0ZXM6IFstNTguMzgxNiwgLTM0LjYwMzddLFxuICAgIHBvcHVsYXRpb246IDE0MTIyMDAwXG4gIH0sXG4gIHsgbmFtZTogXCJUZWhyYW5cIiwgY29vcmRpbmF0ZXM6IFs1MS4zODksIDM1LjY4OTJdLCBwb3B1bGF0aW9uOiAxMzUzMjAwMCB9LFxuICB7IG5hbWU6IFwiSXN0YW5idWxcIiwgY29vcmRpbmF0ZXM6IFsyOC45Nzg0LCA0MS4wMDgyXSwgcG9wdWxhdGlvbjogMTMyODcwMDAgfSxcbiAgeyBuYW1lOiBcIkxhZ29zXCIsIGNvb3JkaW5hdGVzOiBbMy4zNzkyLCA2LjUyNDRdLCBwb3B1bGF0aW9uOiAxMzEyMzAwMCB9LFxuICB7IG5hbWU6IFwiU2hlbnpoZW5cIiwgY29vcmRpbmF0ZXM6IFsxMTQuMDU3OSwgMjIuNTQzMV0sIHBvcHVsYXRpb246IDEyMDg0MDAwIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJpbyBkZSBKYW5laXJvXCIsXG4gICAgY29vcmRpbmF0ZXM6IFstNDMuMTcyOSwgLTIyLjkwNjhdLFxuICAgIHBvcHVsYXRpb246IDExNzI3MDAwXG4gIH0sXG4gIHsgbmFtZTogXCJLaW5zaGFzYVwiLCBjb29yZGluYXRlczogWzE1LjI2NjMsIC00LjQ0MTldLCBwb3B1bGF0aW9uOiAxMTU4NzAwMCB9LFxuICB7IG5hbWU6IFwiVGlhbmppblwiLCBjb29yZGluYXRlczogWzExNy4zNjE2LCAzOS4zNDM0XSwgcG9wdWxhdGlvbjogMTA5MjAwMDAgfSxcbiAgeyBuYW1lOiBcIlBhcmlzXCIsIGNvb3JkaW5hdGVzOiBbMi4zNTIyLCA0OC44NTY2XSwgcG9wdWxhdGlvbjogMTA4NTgwMDAgfSxcbiAgeyBuYW1lOiBcIkxpbWFcIiwgY29vcmRpbmF0ZXM6IFstNzcuMDQyOCwgLTEyLjA0NjRdLCBwb3B1bGF0aW9uOiAxMDc1MDAwMCB9XG5dO1xuXG5jb25zdCBwcm9qZWN0aW9uID0gZ2VvRXF1YWxFYXJ0aCgpXG4gIC5zY2FsZSgxNjApXG4gIC50cmFuc2xhdGUoWzgwMCAvIDIsIDQ1MCAvIDJdKTtcblxuY29uc3QgV29ybGRNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtnZW9ncmFwaGllcywgc2V0R2VvZ3JhcGhpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYmVlbGRtYXRlcmlhYWwsIHNldEJlZWxkbWF0ZXJpYWFsXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW21hcmtlciwgc2hvd01hcmtlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9zdGF0aWMvY3VzdG9tLmdlby5qc29uXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYSBwcm9ibGVtOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4od29ybGRkYXRhID0+IHtcbiAgICAgICAgc2V0R2VvZ3JhcGhpZXMoXG4gICAgICAgICAgZmVhdHVyZSh3b3JsZGRhdGEsIHdvcmxkZGF0YS5vYmplY3RzLmNvdW50cmllcykuZmVhdHVyZXNcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnRyeUNsaWNrID0gY291bnRyeUluZGV4ID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQgb24gY291bnRyeTogXCIsIGdlb2dyYXBoaWVzW2NvdW50cnlJbmRleF0pO1xuICAgIGZldGNoKGAvYXBpL2NvdW50cnk/Y291bnR5PSR7Z2VvZ3JhcGhpZXNbY291bnRyeUluZGV4XS5wcm9wZXJ0aWVzLm5hbWV9YClcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbigoeyByZXN1bHRzIH0pID0+IHNldEJlZWxkbWF0ZXJpYWFsKHJlc3VsdHMuYmluZGluZ3MpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXJrZXJDbGljayA9IG1hcmtlciA9PiB7XG4gICAgc2hvd01hcmtlcih7IG5hbWU6IG1hcmtlci5wbGFjZU5hbWUudmFsdWUsIHNyYzogbWFya2VyLmltYWdlTGluay52YWx1ZSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coYmVlbGRtYXRlcmlhYWwsIG1hcmtlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxzdmcgd2lkdGg9ezgwMH0gaGVpZ2h0PXs0NTB9IHZpZXdCb3g9XCIwIDAgODAwIDQ1MFwiPlxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJjb3VudHJpZXNcIj5cbiAgICAgICAgICB7Z2VvZ3JhcGhpZXMubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBrZXk9e2BwYXRoLSR7aX1gfVxuICAgICAgICAgICAgICBkPXtnZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKShkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgIGZpbGw9e2ByZ2JhKDM4LDUwLDU2LCR7KDEgLyBnZW9ncmFwaGllcy5sZW5ndGgpICogaX0pYH1cbiAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXswLjV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvdW50cnlDbGljayhpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xhc3NOYW1lPVwibWFya2Vyc1wiPlxuICAgICAgICAgIHtiZWVsZG1hdGVyaWFhbCAmJlxuICAgICAgICAgICAgYmVlbGRtYXRlcmlhYWwubWFwKChiZWVsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAga2V5PXtgbWFya2VyLSR7aX1gfVxuICAgICAgICAgICAgICAgIGN4PXtcbiAgICAgICAgICAgICAgICAgIHByb2plY3Rpb24oW1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYmVlbGQubG9uZy52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihiZWVsZC5sYXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICBdKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjeT17XG4gICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uKFtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGJlZWxkLmxvbmcudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYmVlbGQubGF0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgXSlbMV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcj17MTc3MTIwMDAgLyAzMDAwMDAwfVxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRTkxRTYzXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hcmtlckNsaWNrKGJlZWxkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxpbWcgey4uLm1hcmtlcn0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkTWFwO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/functional-programming/functional-programming-her/components/WorldMap.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ })

})
//# sourceMappingURL=index.js.d879778f63f2f03f7dde.hot-update.js.map