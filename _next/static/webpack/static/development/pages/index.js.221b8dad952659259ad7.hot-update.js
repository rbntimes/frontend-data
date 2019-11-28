webpackHotUpdate("static/development/pages/index.js",{

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

  var handleForm =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
    }));

    return function handleForm() {
      return _ref2.apply(this, arguments);
    };
  }(); // async function () => {
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
  }, ".container{display:grid;grid-template-columns:".concat(data.distance ? "2fr" : "1fr", " 4fr;}.overlay{padding:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content{background:white;}img{height:200px;}body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR1MsQUFHMEIsQUFJQSxBQU1JLEFBR0osQUFHSixTQUNDLElBaEI2QyxBQUl2QyxBQVNsQixJQUhBLEVBT0EsVUFaZSx1Q0FKZixtQ0FLd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9uODZpZXMvRG9jdW1lbnRzL3NjaG9vbC9pbmZvcm1hdGlvbi1kZXNpZ24vZnJvbnRlbmQtZGF0YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5cbi8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9jcmVhdGluZy12aXN1YWxpemF0aW9ucy13aXRoLWQzLWFuZC1yZWFjdC0zb2ZkeFxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL3N0YWdlXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCB7IFpvb21Db250YWluZXIgfSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1pvb21Db250YWluZXJcIjtcbmltcG9ydCBXb3JsZE1hcCBmcm9tIFwiLi8uLi9jb21wb25lbnRzL01hcFwiO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzA3MDc0MjNcbmZ1bmN0aW9uIGpzb25Ub1F1ZXJ5U3RyaW5nKGpzb24pIHtcbiAgcmV0dXJuIChcbiAgICBcIj9cIiArXG4gICAgT2JqZWN0LmtleXMoanNvbilcbiAgICAgIC5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGpzb25ba2V5XSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpXG4gICk7XG59XG5cbmNvbnN0IEhvbWUgPSAoeyByYW5kb21QbGFjZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbZGF0YSwgb25TdWJtaXRdID0gdXNlU3RhdGUoeyBkaXN0YW5jZTogbnVsbCB9KTtcbiAgY29uc3QgaGFuZGxlRm9ybSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vaW9uaXplZC1wcm90b2NlcmF0b3BzLmdsaXRjaC5tZS9hZGRTY29yZSR7anNvblRvUXVlcnlTdHJpbmcoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHNjb3JlOiBkYXRhLmRpc3RhbmNlLFxuICAgICAgICBjaG86IGRhdGEuY2hvLFxuICAgICAgICBsYXQ6IGRhdGEudXNlckNsaWNrQ29vcmRpbmF0aW9uc1swXSxcbiAgICAgICAgbG9uZzogZGF0YS51c2VyQ2xpY2tDb29yZGluYXRpb25zWzFdXG4gICAgICB9KX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG4gIH07XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCBkYXRhID0gZmV0Y2goXG4gIC8vICAgICAgIGBodHRwczovL2lvbml6ZWQtcHJvdG9jZXJhdG9wcy5nbGl0Y2gubWUvYWRkU2NvcmUke2pzb25Ub1F1ZXJ5U3RyaW5nKHtcbiAgLy8gICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gIC8vICAgICAgICAgc2NvcmU6IGRhdGEuZGlzdGFuY2UsXG4gIC8vICAgICAgICAgY2hvOiBkYXRhLmNobyxcbiAgLy8gICAgICAgICBsYXQ6IGRhdGEudXNlckNsaWNrQ29vcmRpbmF0aW9uc1swXSxcbiAgLy8gICAgICAgICBsb25nOiBkYXRhLnVzZXJDbGlja0Nvb3JkaW5hdGlvbnNbMV1cbiAgLy8gICAgICAgfSl9YCxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICAgIG1vZGU6IFwibm8tY29yc1wiXG4gIC8vICAgICAgIH1cbiAgLy8gICAgICk7XG4gIC8vXG4gIC8vICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgY29uc29sZS5sb2coZSwgXCJlcnJvclwiKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkIHRpdGxlPVwiSG9tZVwiIC8+XG4gICAgICA8U2lkZWJhclxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICByYW5kb21QbGFjZT17cmFuZG9tUGxhY2V9XG4gICAgICAgIGhhbmRsZUZvcm09e2hhbmRsZUZvcm19XG4gICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxuICAgICAgLz5cbiAgICAgIDxTdGFnZSB3aWR0aD17ZGF0YS5kaXN0YW5jZSA/IFwiMTAwJVwiIDogXCIxMDIwcHhcIn0gaGVpZ2h0PXs0MDB9PlxuICAgICAgICA8Wm9vbUNvbnRhaW5lciBkYXRhPXtkYXRhfSBmaW5pc2hlZD17ZGF0YS5kaXN0YW5jZSAhPT0gbnVsbH0+XG4gICAgICAgICAgPFdvcmxkTWFwXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoZGF0YSl9XG4gICAgICAgICAgICBtYXJrZXI9e3JhbmRvbVBsYWNlfVxuICAgICAgICAgICAgc2V0TG9hZGluZz17bG9hZGluZyA9PiBzZXRMb2FkaW5nKGxvYWRpbmcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvWm9vbUNvbnRhaW5lcj5cbiAgICAgIDwvU3RhZ2U+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtkYXRhLmRpc3RhbmNlID8gXCIyZnJcIiA6IFwiMWZyXCJ9IDRmcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5jb25zdCBBUElfVVJMID1cbiAgXCJodHRwczovL2FwaS5kYXRhLm5ldHdlcmtkaWdpdGFhbGVyZmdvZWQubmwvZGF0YXNldHMvaXZvL05NVlcvc2VydmljZXMvTk1WVy0xNS9zcGFycWxcIjtcblxuY29uc3QgQVBJX1FVRVJZID0gYFxuUFJFRklYIHJkZjogPGh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyM+XG5QUkVGSVggZGM6IDxodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLz5cblBSRUZJWCBkY3Q6IDxodHRwOi8vcHVybC5vcmcvZGMvdGVybXMvPlxuUFJFRklYIHNrb3M6IDxodHRwOi8vd3d3LnczLm9yZy8yMDA0LzAyL3Nrb3MvY29yZSM+XG5QUkVGSVggZWRtOiA8aHR0cDovL3d3dy5ldXJvcGVhbmEuZXUvc2NoZW1hcy9lZG0vPlxuUFJFRklYIGZvYWY6IDxodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xLz5cblBSRUZJWCBoZGxoOiA8aHR0cHM6Ly9oZGwuaGFuZGxlLm5ldC8yMC41MDAuMTE4NDAvdGVybW1hc3Rlcj5cblBSRUZJWCB3Z3M4NDogPGh0dHA6Ly93d3cudzMub3JnLzIwMDMvMDEvZ2VvL3dnczg0X3BvcyM+XG5QUkVGSVggZ2VvOiA8aHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9vbnQvZ2Vvc3BhcnFsIz5cblBSRUZJWCBza29zOiA8aHR0cDovL3d3dy53My5vcmcvMjAwNC8wMi9za29zL2NvcmUjPlxuUFJFRklYIGduOiA8aHR0cDovL3d3dy5nZW9uYW1lcy5vcmcvb250b2xvZ3kjPlxuUFJFRklYIHJkZjogPGh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyM+XG5QUkVGSVggcmRmczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSM+XG5cbiMgZTFuIGZvdG8gcGVyIGxhbmQgKG1ldCB0eXBlLCBpbWcsIGxhdCBlbiBsb25nIHZhbiBkZSBwbGFhdHNcblNFTEVDVCAqXG5XSEVSRSB7XG4jIHZpbmQgYWxsZWVuIGZvdG8nc1xuPGh0dHBzOi8vaGRsLmhhbmRsZS5uZXQvMjAuNTAwLjExODQwL3Rlcm1tYXN0ZXIxMzk3PiBza29zOm5hcnJvd2VyKiA/dHlwZSAuXG4/dHlwZSBza29zOnByZWZMYWJlbCA/dHlwZUxhYmVsIC5cbj9jaG8gZWRtOm9iamVjdCA/dHlwZSAuXG5cbiMgP2NobyBkYzp0aXRsZSA/dGl0bGUgLlxuP2NobyBlZG06aXNTaG93bkJ5ID9pbWcgLlxuXG4jIHZpbmQgYmlqIGRlIG9iamVjdGVuIGhldCBsYW5kXG4/Y2hvIGRjdDpzcGF0aWFsID9wbGFjZSAuXG4/cGxhY2Ugc2tvczpleGFjdE1hdGNoL2duOnBhcmVudENvdW50cnkgP2xhbmQgLlxuIyA/cGxhY2Ugc2tvczpwcmVmTGFiZWwgP3BsYWNlTmFtZSAuXG4/bGFuZCBnbjpuYW1lID9sYW5kTGFiZWwgLlxuXG4jIHZpbmQgYmlqIGRlIHBsYWF0cyB2YW4gZGUgZm90byBkZSBsYXQvbG9uZ1xuP3BsYWNlIHNrb3M6ZXhhY3RNYXRjaC93Z3M4NDpsYXQgP2xhdCAuXG4/cGxhY2Ugc2tvczpleGFjdE1hdGNoL3dnczg0OmxvbmcgP2xvbmcgLlxuXG59XG5PRkZTRVQgUkFORCgpICogNVxuIzEwMDAwMFxuTElNSVQgMVxuYDtcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QVBJX1VSTH0/cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQoQVBJX1FVRVJZKX0mZm9ybWF0PWpzb25gXG4gICk7XG4gIGNvbnN0IGFwaURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcmFuZG9tUGxhY2U6IGFwaURhdGEucmVzdWx0cy5iaW5kaW5nc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/n86ies/Documents/school/information-design/frontend-data/pages/index.js */")));
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
//# sourceMappingURL=index.js.221b8dad952659259ad7.hot-update.js.map