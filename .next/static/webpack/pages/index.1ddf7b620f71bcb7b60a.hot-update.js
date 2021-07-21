webpackHotUpdate_N_E("pages/index",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")(); //routes.add('...', '...');
//First argument is what we take as a "routing indicator", and the second is
//where we route it to
//Routes get parsed in the order they are written


routes.add('/openCampaigns', '/openCampaigns').add('/login', '/login').add('/subscribe', '/subscribe').add('/register', '/register').add('/aboutUs', '/aboutUs').add('/campaigns/new', '/campaigns/new') //must come first!
.add('/campaigns/:address', '/campaigns/show') //":" denotes a "wildcard"
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new'); //need to account for exceptions of routes within /campaigns that are not
//campaigns, i.e. "new"

module.exports = routes; //exports helpers to navigate application

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrREFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZEQUFELENBQVAsRUFBZixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRCxNQUFNLENBQ0hFLEdBREgsQ0FDTyxnQkFEUCxFQUN5QixnQkFEekIsRUFFR0EsR0FGSCxDQUVPLFFBRlAsRUFFaUIsUUFGakIsRUFHR0EsR0FISCxDQUdPLFlBSFAsRUFHcUIsWUFIckIsRUFJR0EsR0FKSCxDQUlPLFdBSlAsRUFJb0IsV0FKcEIsRUFLR0EsR0FMSCxDQUtPLFVBTFAsRUFLbUIsVUFMbkIsRUFNR0EsR0FOSCxDQU1PLGdCQU5QLEVBTXlCLGdCQU56QixFQU0yQztBQU4zQyxDQU9HQSxHQVBILENBT08scUJBUFAsRUFPOEIsaUJBUDlCLEVBT2lEO0FBUGpELENBUUdBLEdBUkgsQ0FRTyw4QkFSUCxFQVF1QywyQkFSdkMsRUFTR0EsR0FUSCxDQVNPLGtDQVRQLEVBUzJDLHlCQVQzQyxFLENBV0E7QUFDQTs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDLENBQXlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkZGY3YjYyMGY3MWJjYjdiNjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XG5cbi8vcm91dGVzLmFkZCgnLi4uJywgJy4uLicpO1xuLy9GaXJzdCBhcmd1bWVudCBpcyB3aGF0IHdlIHRha2UgYXMgYSBcInJvdXRpbmcgaW5kaWNhdG9yXCIsIGFuZCB0aGUgc2Vjb25kIGlzXG4vL3doZXJlIHdlIHJvdXRlIGl0IHRvXG4vL1JvdXRlcyBnZXQgcGFyc2VkIGluIHRoZSBvcmRlciB0aGV5IGFyZSB3cml0dGVuXG5yb3V0ZXNcbiAgLmFkZCgnL29wZW5DYW1wYWlnbnMnLCAnL29wZW5DYW1wYWlnbnMnKVxuICAuYWRkKCcvbG9naW4nLCAnL2xvZ2luJylcbiAgLmFkZCgnL3N1YnNjcmliZScsICcvc3Vic2NyaWJlJylcbiAgLmFkZCgnL3JlZ2lzdGVyJywgJy9yZWdpc3RlcicpXG4gIC5hZGQoJy9hYm91dFVzJywgJy9hYm91dFVzJylcbiAgLmFkZCgnL2NhbXBhaWducy9uZXcnLCAnL2NhbXBhaWducy9uZXcnKSAvL211c3QgY29tZSBmaXJzdCFcbiAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcycsICcvY2FtcGFpZ25zL3Nob3cnKSAvL1wiOlwiIGRlbm90ZXMgYSBcIndpbGRjYXJkXCJcbiAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cycsICcvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4JylcbiAgLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cy9uZXcnLCAnL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcnKTtcblxuLy9uZWVkIHRvIGFjY291bnQgZm9yIGV4Y2VwdGlvbnMgb2Ygcm91dGVzIHdpdGhpbiAvY2FtcGFpZ25zIHRoYXQgYXJlIG5vdFxuLy9jYW1wYWlnbnMsIGkuZS4gXCJuZXdcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsgLy9leHBvcnRzIGhlbHBlcnMgdG8gbmF2aWdhdGUgYXBwbGljYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=