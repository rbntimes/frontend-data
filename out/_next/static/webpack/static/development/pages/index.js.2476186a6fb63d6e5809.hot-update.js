webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_stage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/stage */ "./components/stage.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_ZoomContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/ZoomContainer */ "./components/ZoomContainer.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/Map */ "./components/Map.js");



var _jsxFileName = "/Users/n86ies/Documents/school/information-design/frontend-data/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


 // https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx




 // https://stackoverflow.com/a/30707423

function jsonToQueryString(json) {
  return "?" + _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(json).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
  }).join("&");
}

var Home = function Home(_ref) {
  var randomPlace = _ref.randomPlace;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState[0],
      _setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(undefined),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    distance: null
  }),
      data = _useState3[0],
      _onSubmit = _useState3[1];

  var handleForm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var rawResponse, content;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://ionized-protoceratops.glitch.me/addScore".concat(jsonToQueryString({
              username: username,
              score: data.distance,
              cho: data.cho,
              lat: data.userClickCoordinations[0],
              "long": data.userClickCoordinations[1]
            })), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["3421518405", [data.distance ? "2fr" : "1fr"]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    setLoading: _setLoading,
    loading: loading,
    randomPlace: randomPlace,
    handleForm: handleForm,
    username: username,
    setUsername: setUsername,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_components_stage__WEBPACK_IMPORTED_MODULE_7__["Stage"], {
    width: data.distance ? "100%" : "1020px",
    height: 400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components_ZoomContainer__WEBPACK_IMPORTED_MODULE_9__["ZoomContainer"], {
    data: data,
    finished: data.distance !== null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 88
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3421518405",
    dynamic: [data.distance ? "2fr" : "1fr"],
    __self: this
  }, ".container{display:grid;grid-template-columns:".concat(data.distance ? "2fr" : "1fr", " 4fr;}.overlay{padding:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content{background:white;}img{height:200px;}body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR1MsQUFHMEIsQUFJQSxBQU1JLEFBR0osQUFHSixTQUNDLElBaEI2QyxBQUl2QyxBQVNsQixJQUhBLEVBT0EsVUFaZSx1Q0FKZixtQ0FLd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5cbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9jcmVhdGluZy12aXN1YWxpemF0aW9ucy13aXRoLWQzLWFuZC1yZWFjdC0zb2ZkeFxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL3N0YWdlXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IFpvb21Db250YWluZXIgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1pvb21Db250YWluZXJcIjtcbmltcG9ydCBXb3JsZE1hcCBmcm9tIFwiLi8uLi9jb21wb25lbnRzL01hcFwiO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA3MDc0MjNcbmZ1bmN0aW9uIGpzb25Ub1F1ZXJ5U3RyaW5nKGpzb24pIHtcbiAgcmV0dXJuIChcbiAgICBcIj9cIiArXG4gICAgT2JqZWN0LmtleXMoanNvbilcbiAgICAgIC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba2V5XSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpXG4gICk7XG59XG5cbmNvbnN0IEhvbWUgPSAoeyByYW5kb21QbGFjZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbZGF0YSwgb25TdWJtaXRdID0gdXNlU3RhdGUoeyBkaXN0YW5jZTogbnVsbCB9KTtcbiAgY29uc3QgaGFuZGxlRm9ybSA9IChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2lvbml6ZWQtcHJvdG9jZXJhdG9wcy5nbGl0Y2gubWUvYWRkU2NvcmUke2pzb25Ub1F1ZXJ5U3RyaW5nKHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBzY29yZTogZGF0YS5kaXN0YW5jZSxcbiAgICAgICAgY2hvOiBkYXRhLmNobyxcbiAgICAgICAgbGF0OiBkYXRhLnVzZXJDbGlja0Nvb3JkaW5hdGlvbnNbMF0sXG4gICAgICAgIGxvbmc6IGRhdGEudXNlckNsaWNrQ29vcmRpbmF0aW9uc1sxXVxuICAgICAgfSl9YCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICB9KSgpO1xuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgZGF0YSA9IGZldGNoKFxuICAvLyAgICAgICBgaHR0cHM6Ly9pb25pemVkLXByb3RvY2VyYXRvcHMuZ2xpdGNoLm1lL2FkZFNjb3JlJHtqc29uVG9RdWVyeVN0cmluZyh7XG4gIC8vICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAvLyAgICAgICAgIHNjb3JlOiBkYXRhLmRpc3RhbmNlLFxuICAvLyAgICAgICAgIGNobzogZGF0YS5jaG8sXG4gIC8vICAgICAgICAgbGF0OiBkYXRhLnVzZXJDbGlja0Nvb3JkaW5hdGlvbnNbMF0sXG4gIC8vICAgICAgICAgbG9uZzogZGF0YS51c2VyQ2xpY2tDb29yZGluYXRpb25zWzFdXG4gIC8vICAgICAgIH0pfWAsXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAvLyAgICAgICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgICBtb2RlOiBcIm5vLWNvcnNcIlxuICAvLyAgICAgICB9XG4gIC8vICAgICApO1xuICAvL1xuICAvLyAgIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGUsIFwiZXJyb3JcIik7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZCB0aXRsZT1cIkhvbWVcIiAvPlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgc2V0TG9hZGluZz17c2V0TG9hZGluZ31cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgcmFuZG9tUGxhY2U9e3JhbmRvbVBsYWNlfVxuICAgICAgICBoYW5kbGVGb3JtPXtoYW5kbGVGb3JtfVxuICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgIHNldFVzZXJuYW1lPXtzZXRVc2VybmFtZX1cbiAgICAgIC8+XG4gICAgICA8U3RhZ2Ugd2lkdGg9e2RhdGEuZGlzdGFuY2UgPyBcIjEwMCVcIiA6IFwiMTAyMHB4XCJ9IGhlaWdodD17NDAwfT5cbiAgICAgICAgPFpvb21Db250YWluZXIgZGF0YT17ZGF0YX0gZmluaXNoZWQ9e2RhdGEuZGlzdGFuY2UgIT09IG51bGx9PlxuICAgICAgICAgIDxXb3JsZE1hcFxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGRhdGEpfVxuICAgICAgICAgICAgbWFya2VyPXtyYW5kb21QbGFjZX1cbiAgICAgICAgICAgIHNldExvYWRpbmc9e2xvYWRpbmcgPT4gc2V0TG9hZGluZyhsb2FkaW5nKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1pvb21Db250YWluZXI+XG4gICAgICA8L1N0YWdlPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7ZGF0YS5kaXN0YW5jZSA/IFwiMmZyXCIgOiBcIjFmclwifSA0ZnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuY29uc3QgQVBJX1VSTCA9XG4gIFwiaHR0cHM6Ly9hcGkuZGF0YS5uZXR3ZXJrZGlnaXRhYWxlcmZnb2VkLm5sL2RhdGFzZXRzL2l2by9OTVZXL3NlcnZpY2VzL05NVlctMTUvc3BhcnFsXCI7XG5cbmNvbnN0IEFQSV9RVUVSWSA9IGBcblBSRUZJWCByZGY6IDxodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjPlxuUFJFRklYIGRjOiA8aHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8+XG5QUkVGSVggZGN0OiA8aHR0cDovL3B1cmwub3JnL2RjL3Rlcm1zLz5cblBSRUZJWCBza29zOiA8aHR0cDovL3d3dy53My5vcmcvMjAwNC8wMi9za29zL2NvcmUjPlxuUFJFRklYIGVkbTogPGh0dHA6Ly93d3cuZXVyb3BlYW5hLmV1L3NjaGVtYXMvZWRtLz5cblBSRUZJWCBmb2FmOiA8aHR0cDovL3htbG5zLmNvbS9mb2FmLzAuMS8+XG5QUkVGSVggaGRsaDogPGh0dHBzOi8vaGRsLmhhbmRsZS5uZXQvMjAuNTAwLjExODQwL3Rlcm1tYXN0ZXI+XG5QUkVGSVggd2dzODQ6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAzLzAxL2dlby93Z3M4NF9wb3MjPlxuUFJFRklYIGdlbzogPGh0dHA6Ly93d3cub3Blbmdpcy5uZXQvb250L2dlb3NwYXJxbCM+XG5QUkVGSVggc2tvczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDQvMDIvc2tvcy9jb3JlIz5cblBSRUZJWCBnbjogPGh0dHA6Ly93d3cuZ2VvbmFtZXMub3JnL29udG9sb2d5Iz5cblBSRUZJWCByZGY6IDxodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjPlxuUFJFRklYIHJkZnM6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjPlxuXG4jIGUxbiBmb3RvIHBlciBsYW5kIChtZXQgdHlwZSwgaW1nLCBsYXQgZW4gbG9uZyB2YW4gZGUgcGxhYXRzXG5TRUxFQ1QgKlxuV0hFUkUge1xuIyB2aW5kIGFsbGVlbiBmb3RvJ3NcbjxodHRwczovL2hkbC5oYW5kbGUubmV0LzIwLjUwMC4xMTg0MC90ZXJtbWFzdGVyMTM5Nz4gc2tvczpuYXJyb3dlciogP3R5cGUgLlxuP3R5cGUgc2tvczpwcmVmTGFiZWwgP3R5cGVMYWJlbCAuXG4/Y2hvIGVkbTpvYmplY3QgP3R5cGUgLlxuXG4jID9jaG8gZGM6dGl0bGUgP3RpdGxlIC5cbj9jaG8gZWRtOmlzU2hvd25CeSA/aW1nIC5cblxuIyB2aW5kIGJpaiBkZSBvYmplY3RlbiBoZXQgbGFuZFxuP2NobyBkY3Q6c3BhdGlhbCA/cGxhY2UgLlxuP3BsYWNlIHNrb3M6ZXhhY3RNYXRjaC9nbjpwYXJlbnRDb3VudHJ5ID9sYW5kIC5cbiMgP3BsYWNlIHNrb3M6cHJlZkxhYmVsID9wbGFjZU5hbWUgLlxuP2xhbmQgZ246bmFtZSA/bGFuZExhYmVsIC5cblxuIyB2aW5kIGJpaiBkZSBwbGFhdHMgdmFuIGRlIGZvdG8gZGUgbGF0L2xvbmdcbj9wbGFjZSBza29zOmV4YWN0TWF0Y2gvd2dzODQ6bGF0ID9sYXQgLlxuP3BsYWNlIHNrb3M6ZXhhY3RNYXRjaC93Z3M4NDpsb25nID9sb25nIC5cblxufVxuT0ZGU0VUIFJBTkQoKSAqIDVcbiMxMDAwMDBcbkxJTUlUIDFcbmA7XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGAke0FQSV9VUkx9P3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KEFQSV9RVUVSWSl9JmZvcm1hdD1qc29uYFxuICApO1xuICBjb25zdCBhcGlEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHJhbmRvbVBsYWNlOiBhcGlEYXRhLnJlc3VsdHMuYmluZGluZ3NcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/pages/index.js */")));
};

var API_URL = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";
var API_QUERY = "\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dct: <http://purl.org/dc/terms/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX edm: <http://www.europeana.eu/schemas/edm/>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>\nPREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>\nPREFIX geo: <http://www.opengis.net/ont/geosparql#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX gn: <http://www.geonames.org/ontology#>\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n# e1n foto per land (met type, img, lat en long van de plaats\nSELECT *\nWHERE {\n# vind alleen foto's\n<https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .\n?type skos:prefLabel ?typeLabel .\n?cho edm:object ?type .\n\n# ?cho dc:title ?title .\n?cho edm:isShownBy ?img .\n\n# vind bij de objecten het land\n?cho dct:spatial ?place .\n?place skos:exactMatch/gn:parentCountry ?land .\n# ?place skos:prefLabel ?placeName .\n?land gn:name ?landLabel .\n\n# vind bij de plaats van de foto de lat/long\n?place skos:exactMatch/wgs84:lat ?lat .\n?place skos:exactMatch/wgs84:long ?long .\n\n}\nOFFSET RAND() * 5\n#100000\nLIMIT 1\n";
Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
//# sourceMappingURL=index.js.2476186a6fb63d6e5809.hot-update.js.map