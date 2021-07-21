webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HomePageHeading.js":
/*!***************************************!*\
  !*** ./components/HomePageHeading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Pedro Costa\\Desktop\\ETHProj\\kickstart\\components\\HomePageHeading.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* Heads up!
 * HomepageHeading uses inline styling,
 however it's not the best practice. Use CSS or styled
 * components for such things.
 */

var HomepageHeading = function HomepageHeading(_ref) {
  var mobile = _ref.mobile;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h1",
    content: "",
    inverted: true,
    style: {
      fontSize: mobile ? "2em" : "4em",
      fontWeight: "900",
      marginBottom: 0,
      marginTop: mobile ? "1.3em" : "2.8em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/logo.png",
    size: "large",
    centered: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    content: "Democratise your property! Reach new investors!",
    inverted: true,
    style: {
      fontSize: mobile ? "1.5em" : "1.7em",
      fontWeight: "900",
      marginTop: mobile ? "0.5em" : "1.5em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "/subscribe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    size: "huge",
    style: {
      marginBottom: mobile ? "4.5em" : "5.5em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Get Started", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "right arrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })))));
};

_c = HomepageHeading;
HomepageHeading.propTypes = {
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HomepageHeading);

var _c;

$RefreshReg$(_c, "HomepageHeading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUGFnZUhlYWRpbmcuanMiXSwibmFtZXMiOlsiSG9tZXBhZ2VIZWFkaW5nIiwibW9iaWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQ3RCLE1BQUMsMkRBQUQ7QUFBVyxRQUFJLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLFdBQU8sRUFBQyxFQUZWO0FBR0UsWUFBUSxNQUhWO0FBSUUsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRUQsTUFBTSxHQUFHLEtBQUgsR0FBVyxLQUR0QjtBQUVMRSxnQkFBVSxFQUFFLEtBRlA7QUFHTEMsa0JBQVksRUFBRSxDQUhUO0FBSUxDLGVBQVMsRUFBRUosTUFBTSxHQUFHLE9BQUgsR0FBYTtBQUp6QixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVlFLE1BQUMsdURBQUQ7QUFBTyxPQUFHLEVBQUMsV0FBWDtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBb0MsWUFBUSxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRSxNQUFDLHdEQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxXQUFPLEVBQUMsaURBRlY7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFRCxNQUFNLEdBQUcsT0FBSCxHQUFhLE9BRHhCO0FBRUxFLGdCQUFVLEVBQUUsS0FGUDtBQUdMRSxlQUFTLEVBQUVKLE1BQU0sR0FBRyxPQUFILEdBQWE7QUFIekIsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUF1QkUsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sTUFEVDtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVHLGtCQUFZLEVBQUVILE1BQU0sR0FBRyxPQUFILEdBQWE7QUFBbkMsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU1FLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQURGLENBdkJGLENBRHNCO0FBQUEsQ0FBeEI7O0tBQU1ELGU7QUF1Q05BLGVBQWUsQ0FBQ00sU0FBaEIsR0FBNEI7QUFDMUJMLFFBQU0sRUFBRU0saURBQVMsQ0FBQ0M7QUFEUSxDQUE1QjtBQUllUiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Yzk4ZDJkYTdlODM1ZTgxNzBjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tIFwiQGFydHN5L2ZyZXNuZWxcIjtcbmltcG9ydCB7XG4gIE1lbnUsXG4gIFNpZGViYXIsXG4gIEJ1dHRvbixcbiAgU2VnbWVudCxcbiAgQ29udGFpbmVyLFxuICBWaXNpYmlsaXR5LFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEdyaWQsXG4gIERpdmlkZXIsXG4gIExpc3QsXG4gIEltYWdlLFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8qIEhlYWRzIHVwIVxuICogSG9tZXBhZ2VIZWFkaW5nIHVzZXMgaW5saW5lIHN0eWxpbmcsXG4gaG93ZXZlciBpdCdzIG5vdCB0aGUgYmVzdCBwcmFjdGljZS4gVXNlIENTUyBvciBzdHlsZWRcbiAqIGNvbXBvbmVudHMgZm9yIHN1Y2ggdGhpbmdzLlxuICovXG5cbmNvbnN0IEhvbWVwYWdlSGVhZGluZyA9ICh7IG1vYmlsZSB9KSA9PiAoXG4gIDxDb250YWluZXIgdGV4dD5cbiAgICA8SGVhZGVyXG4gICAgICBhcz1cImgxXCJcbiAgICAgIGNvbnRlbnQ9XCJcIlxuICAgICAgaW52ZXJ0ZWRcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyBcIjJlbVwiIDogXCI0ZW1cIixcbiAgICAgICAgZm9udFdlaWdodDogXCI5MDBcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/IFwiMS4zZW1cIiA6IFwiMi44ZW1cIixcbiAgICAgIH19XG4gICAgLz5cbiAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgc2l6ZT1cImxhcmdlXCIgY2VudGVyZWQgLz5cbiAgICA8SGVhZGVyXG4gICAgICBhcz1cImgyXCJcbiAgICAgIGNvbnRlbnQ9XCJEZW1vY3JhdGlzZSB5b3VyIHByb3BlcnR5ISBSZWFjaCBuZXcgaW52ZXN0b3JzIVwiXG4gICAgICBpbnZlcnRlZFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/IFwiMS41ZW1cIiA6IFwiMS43ZW1cIixcbiAgICAgICAgZm9udFdlaWdodDogXCI5MDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyBcIjAuNWVtXCIgOiBcIjEuNWVtXCIsXG4gICAgICB9fVxuICAgIC8+XG4gICAgPExpbmsgcm91dGU9XCIvc3Vic2NyaWJlXCI+XG4gICAgICA8YT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICBzaXplPVwiaHVnZVwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBtb2JpbGUgPyBcIjQuNWVtXCIgOiBcIjUuNWVtXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgPEljb24gbmFtZT1cInJpZ2h0IGFycm93XCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkhvbWVwYWdlSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIG1vYmlsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUhlYWRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9