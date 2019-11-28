webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_stage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/stage */ "./components/stage.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_ZoomContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/ZoomContainer */ "./components/ZoomContainer.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/Map */ "./components/Map.js");




var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


 // https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx




 // https://stackoverflow.com/a/30707423

function jsonToQueryString(json) {
  return "?" + _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(json).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
  }).join("&");
}

var Home = function Home(_ref) {
  var randomPlace = _ref.randomPlace;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      loading = _useState[0],
      _setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    distance: null
  }),
      data = _useState3[0],
      _onSubmit = _useState3[1];

  var handleForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var rawResponse, content;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://httpbin.org/post", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                a: 1,
                b: "Textual content"
              })
            });

          case 2:
            rawResponse = _context.sent;
            _context.next = 5;
            return rawResponse.json();

          case 5:
            content = _context.sent;
            console.log(content);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))(); // async function () => {
  //   try {
  //     const data = fetch(
  //       `https://ionized-protoceratops.glitch.me/addScore${jsonToQueryString({
  //         username: username,
  //         score: data.distance,
  //         cho: data.cho,
  //         lat: data.userClickCoordinations[0],
  //         long: data.userClickCoordinations[1]
  //       })}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         mode: "no-cors"
  //       }
  //     );
  //
  //   } catch (e) {
  //     console.log(e, "error");
  //   }
  // };


  return __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([["3421518405", [data.distance ? "2fr" : "1fr"]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    setLoading: _setLoading,
    loading: loading,
    randomPlace: randomPlace,
    handleForm: handleForm,
    username: username,
    setUsername: setUsername,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_components_stage__WEBPACK_IMPORTED_MODULE_8__["Stage"], {
    width: data.distance ? "100%" : "1020px",
    height: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_components_ZoomContainer__WEBPACK_IMPORTED_MODULE_10__["ZoomContainer"], {
    data: data,
    finished: data.distance !== null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: data,
    onSubmit: function onSubmit(data) {
      return _onSubmit(data);
    },
    marker: randomPlace,
    setLoading: function setLoading(loading) {
      return _setLoading(loading);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3421518405",
    dynamic: [data.distance ? "2fr" : "1fr"],
    __self: this
  }, ".container{display:grid;grid-template-columns:".concat(data.distance ? "2fr" : "1fr", " 4fr;}.overlay{padding:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content{background:white;}img{height:200px;}body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RlMsQUFHMEIsQUFJQSxBQU1JLEFBR0osQUFHSixTQUNDLElBaEI2QyxBQUl2QyxBQVNsQixJQUhBLEVBT0EsVUFaZSx1Q0FKZixtQ0FLd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5cbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9jcmVhdGluZy12aXN1YWxpemF0aW9ucy13aXRoLWQzLWFuZC1yZWFjdC0zb2ZkeFxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL3N0YWdlXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IFpvb21Db250YWluZXIgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1pvb21Db250YWluZXJcIjtcbmltcG9ydCBXb3JsZE1hcCBmcm9tIFwiLi8uLi9jb21wb25lbnRzL01hcFwiO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA3MDc0MjNcbmZ1bmN0aW9uIGpzb25Ub1F1ZXJ5U3RyaW5nKGpzb24pIHtcbiAgcmV0dXJuIChcbiAgICBcIj9cIiArXG4gICAgT2JqZWN0LmtleXMoanNvbilcbiAgICAgIC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba2V5XSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpXG4gICk7XG59XG5cbmNvbnN0IEhvbWUgPSAoeyByYW5kb21QbGFjZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbZGF0YSwgb25TdWJtaXRdID0gdXNlU3RhdGUoeyBkaXN0YW5jZTogbnVsbCB9KTtcbiAgY29uc3QgaGFuZGxlRm9ybSA9IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYTogMSwgYjogXCJUZXh0dWFsIGNvbnRlbnRcIiB9KVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgfSkoKTtcblxuICAvLyBhc3luYyBmdW5jdGlvbiAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBmZXRjaChcbiAgLy8gICAgICAgYGh0dHBzOi8vaW9uaXplZC1wcm90b2NlcmF0b3BzLmdsaXRjaC5tZS9hZGRTY29yZSR7anNvblRvUXVlcnlTdHJpbmcoe1xuICAvLyAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgLy8gICAgICAgICBzY29yZTogZGF0YS5kaXN0YW5jZSxcbiAgLy8gICAgICAgICBjaG86IGRhdGEuY2hvLFxuICAvLyAgICAgICAgIGxhdDogZGF0YS51c2VyQ2xpY2tDb29yZGluYXRpb25zWzBdLFxuICAvLyAgICAgICAgIGxvbmc6IGRhdGEudXNlckNsaWNrQ29vcmRpbmF0aW9uc1sxXVxuICAvLyAgICAgICB9KX1gLFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgbW9kZTogXCJuby1jb3JzXCJcbiAgLy8gICAgICAgfVxuICAvLyAgICAgKTtcbiAgLy9cbiAgLy8gICB9IGNhdGNoIChlKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhlLCBcImVycm9yXCIpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQgdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIHJhbmRvbVBsYWNlPXtyYW5kb21QbGFjZX1cbiAgICAgICAgaGFuZGxlRm9ybT17aGFuZGxlRm9ybX1cbiAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XG4gICAgICAvPlxuICAgICAgPFN0YWdlIHdpZHRoPXtkYXRhLmRpc3RhbmNlID8gXCIxMDAlXCIgOiBcIjEwMjBweFwifSBoZWlnaHQ9ezQwMH0+XG4gICAgICAgIDxab29tQ29udGFpbmVyIGRhdGE9e2RhdGF9IGZpbmlzaGVkPXtkYXRhLmRpc3RhbmNlICE9PSBudWxsfT5cbiAgICAgICAgICA8V29ybGRNYXBcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChkYXRhKX1cbiAgICAgICAgICAgIG1hcmtlcj17cmFuZG9tUGxhY2V9XG4gICAgICAgICAgICBzZXRMb2FkaW5nPXtsb2FkaW5nID0+IHNldExvYWRpbmcobG9hZGluZyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ab29tQ29udGFpbmVyPlxuICAgICAgPC9TdGFnZT5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke2RhdGEuZGlzdGFuY2UgPyBcIjJmclwiIDogXCIxZnJcIn0gNGZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmNvbnN0IEFQSV9VUkwgPVxuICBcImh0dHBzOi8vYXBpLmRhdGEubmV0d2Vya2RpZ2l0YWFsZXJmZ29lZC5ubC9kYXRhc2V0cy9pdm8vTk1WVy9zZXJ2aWNlcy9OTVZXLTE1L3NwYXJxbFwiO1xuXG5jb25zdCBBUElfUVVFUlkgPSBgXG5QUkVGSVggcmRmOiA8aHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIz5cblBSRUZJWCBkYzogPGh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvPlxuUFJFRklYIGRjdDogPGh0dHA6Ly9wdXJsLm9yZy9kYy90ZXJtcy8+XG5QUkVGSVggc2tvczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDQvMDIvc2tvcy9jb3JlIz5cblBSRUZJWCBlZG06IDxodHRwOi8vd3d3LmV1cm9wZWFuYS5ldS9zY2hlbWFzL2VkbS8+XG5QUkVGSVggZm9hZjogPGh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvPlxuUFJFRklYIGhkbGg6IDxodHRwczovL2hkbC5oYW5kbGUubmV0LzIwLjUwMC4xMTg0MC90ZXJtbWFzdGVyPlxuUFJFRklYIHdnczg0OiA8aHR0cDovL3d3dy53My5vcmcvMjAwMy8wMS9nZW8vd2dzODRfcG9zIz5cblBSRUZJWCBnZW86IDxodHRwOi8vd3d3Lm9wZW5naXMubmV0L29udC9nZW9zcGFycWwjPlxuUFJFRklYIHNrb3M6IDxodHRwOi8vd3d3LnczLm9yZy8yMDA0LzAyL3Nrb3MvY29yZSM+XG5QUkVGSVggZ246IDxodHRwOi8vd3d3Lmdlb25hbWVzLm9yZy9vbnRvbG9neSM+XG5QUkVGSVggcmRmOiA8aHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIz5cblBSRUZJWCByZGZzOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIz5cblxuIyBlMW4gZm90byBwZXIgbGFuZCAobWV0IHR5cGUsIGltZywgbGF0IGVuIGxvbmcgdmFuIGRlIHBsYWF0c1xuU0VMRUNUICpcbldIRVJFIHtcbiMgdmluZCBhbGxlZW4gZm90bydzXG48aHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8yMC41MDAuMTE4NDAvdGVybW1hc3RlcjEzOTc+IHNrb3M6bmFycm93ZXIqID90eXBlIC5cbj90eXBlIHNrb3M6cHJlZkxhYmVsID90eXBlTGFiZWwgLlxuP2NobyBlZG06b2JqZWN0ID90eXBlIC5cblxuIyA/Y2hvIGRjOnRpdGxlID90aXRsZSAuXG4/Y2hvIGVkbTppc1Nob3duQnkgP2ltZyAuXG5cbiMgdmluZCBiaWogZGUgb2JqZWN0ZW4gaGV0IGxhbmRcbj9jaG8gZGN0OnNwYXRpYWwgP3BsYWNlIC5cbj9wbGFjZSBza29zOmV4YWN0TWF0Y2gvZ246cGFyZW50Q291bnRyeSA/bGFuZCAuXG4jID9wbGFjZSBza29zOnByZWZMYWJlbCA/cGxhY2VOYW1lIC5cbj9sYW5kIGduOm5hbWUgP2xhbmRMYWJlbCAuXG5cbiMgdmluZCBiaWogZGUgcGxhYXRzIHZhbiBkZSBmb3RvIGRlIGxhdC9sb25nXG4/cGxhY2Ugc2tvczpleGFjdE1hdGNoL3dnczg0OmxhdCA/bGF0IC5cbj9wbGFjZSBza29zOmV4YWN0TWF0Y2gvd2dzODQ6bG9uZyA/bG9uZyAuXG5cbn1cbk9GRlNFVCBSQU5EKCkgKiA1XG4jMTAwMDAwXG5MSU1JVCAxXG5gO1xuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtBUElfVVJMfT9xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChBUElfUVVFUlkpfSZmb3JtYXQ9anNvbmBcbiAgKTtcbiAgY29uc3QgYXBpRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByYW5kb21QbGFjZTogYXBpRGF0YS5yZXN1bHRzLmJpbmRpbmdzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/pages/index.js */")));
};

var API_URL = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";
var API_QUERY = "\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dct: <http://purl.org/dc/terms/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX edm: <http://www.europeana.eu/schemas/edm/>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>\nPREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX gn: <http://www.geonames.org/ontology#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# e1n foto per land (met type, img, lat en long van de plaats\nSELECT *\nWHERE {\n# vind alleen foto's\n<https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .\n?type skos:prefLabel ?typeLabel .\n?cho edm:object ?type .\n\n# ?cho dc:title ?title .\n?cho edm:isShownBy ?img .\n\n# vind bij de objecten het land\n?cho dct:spatial ?place .\n?place skos:exactMatch/gn:parentCountry ?land .\n# ?place skos:prefLabel ?placeName .\n?land gn:name ?landLabel .\n\n# vind bij de plaats van de foto de lat/long\n?place skos:exactMatch/wgs84:lat ?lat .\n?place skos:exactMatch/wgs84:long ?long .\n\n}\nOFFSET RAND() * 5\n#100000\nLIMIT 1\n";
Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, apiData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("".concat(API_URL, "?query=").concat(encodeURIComponent(API_QUERY), "&format=json"));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          apiData = _context2.sent;
          return _context2.abrupt("return", {
            randomPlace: apiData.results.bindings
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.90a4dac6c7b24882252d.hot-update.js.map