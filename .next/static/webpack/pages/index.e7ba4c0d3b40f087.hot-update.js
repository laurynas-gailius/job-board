"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Job.js":
/*!***************************!*\
  !*** ./components/Job.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Job = function(param) {\n    var company_name = param.company_name, title = param.title, location_name = param.location_name, contract_time = param.contract_time, created = param.created;\n    var date1 = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(created);\n    var date2 = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-6 px-6 max-w-xl mx-auto rounded-xl border bg-white border-gray-200 shadow-sm hover:shadow-md dark:shadow-md bg-gradient-to-t dark:from-gray-800 dark:from-gray-900 dark:border-gray-700 hover:cursor-pointer transition hover:scale-105 duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-medium text-gray-700 dark:text-gray-400\",\n                                children: company_name\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-lg font-medium max-w-md text-gray-900 dark:text-white\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-4 justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-1 text-sm text-gray-700 dark:text-gray-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: location_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: contract_time\n                                }, void 0, false, {\n                                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-400 dark:text-gray-500\",\n                                children: [\n                                    date2.diff(date1, \"month\"),\n                                    \" day(s) ago\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/components/Job.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Job;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Job);\nvar _c;\n$RefreshReg$(_c, \"Job\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwQjtBQUUxQixJQUFNQyxHQUFHLEdBQUcsZ0JBTU47UUFMSkMsWUFBWSxTQUFaQSxZQUFZLEVBQ1pDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxhQUFhLFNBQWJBLGFBQWEsRUFDYkMsYUFBYSxTQUFiQSxhQUFhLEVBQ2JDLE9BQU8sU0FBUEEsT0FBTztJQUVQLElBQU1DLEtBQUssR0FBR1AsNENBQUssQ0FBQ00sT0FBTyxDQUFDO0lBQzVCLElBQU1FLEtBQUssR0FBR1IsNENBQUssQ0FBQyxJQUFJUyxJQUFJLEVBQUUsQ0FBQztJQUUvQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsOFBBQThQO2tCQUMzUSw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsUUFBUTs7OEJBQ3JCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs4QkFDbkIsNEVBQUNELEtBQUc7OzBDQUNGLDhEQUFDRSxJQUFFO2dDQUFDRCxTQUFTLEVBQUMsOENBQThDOzBDQUN6RFQsWUFBWTs7Ozs7cUNBQ1Y7MENBQ0wsOERBQUNXLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyw0REFBNEQ7MENBQ3ZFUixLQUFLOzs7OztxQ0FDSDs7Ozs7OzZCQUNEOzs7Ozt5QkFDRjs4QkFDTiw4REFBQ08sS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7c0NBQ3hDLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsa0VBQWtFOzs4Q0FDL0UsOERBQUNHLEdBQUM7OENBQUVWLGFBQWE7Ozs7O3lDQUFLOzhDQUN0Qiw4REFBQ1UsR0FBQzs4Q0FBRVQsYUFBYTs7Ozs7eUNBQUs7Ozs7OztpQ0FFbEI7c0NBQ04sOERBQUNLLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7c0NBQzdCLDRFQUFDRyxHQUFDO2dDQUFDSCxTQUFTLEVBQUMsMENBQTBDOztvQ0FDcERILEtBQUssQ0FBQ08sSUFBSSxDQUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDO29DQUFDLGFBQzlCOzs7Ozs7cUNBQUk7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztBQXRDS04sS0FBQUEsR0FBRztBQXdDVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSm9iLmpzP2U4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5jb25zdCBKb2IgPSAoe1xuICBjb21wYW55X25hbWUsXG4gIHRpdGxlLFxuICBsb2NhdGlvbl9uYW1lLFxuICBjb250cmFjdF90aW1lLFxuICBjcmVhdGVkLFxufSkgPT4ge1xuICBjb25zdCBkYXRlMSA9IGRheWpzKGNyZWF0ZWQpO1xuICBjb25zdCBkYXRlMiA9IGRheWpzKG5ldyBEYXRlKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTYgcHgtNiBtYXgtdy14bCBteC1hdXRvIHJvdW5kZWQteGwgYm9yZGVyIGJnLXdoaXRlIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIGRhcms6c2hhZG93LW1kIGJnLWdyYWRpZW50LXRvLXQgZGFyazpmcm9tLWdyYXktODAwIGRhcms6ZnJvbS1ncmF5LTkwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBob3ZlcjpjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAge2NvbXBhbnlfbmFtZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYXgtdy1tZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMSB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICA8cD57bG9jYXRpb25fbmFtZX08L3A+XG4gICAgICAgICAgICA8cD57Y29udHJhY3RfdGltZX08L3A+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIHtkYXRlMi5kaWZmKGRhdGUxLCBcIm1vbnRoXCIpfSBkYXkocykgYWdvXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2I7XG4iXSwibmFtZXMiOlsiZGF5anMiLCJKb2IiLCJjb21wYW55X25hbWUiLCJ0aXRsZSIsImxvY2F0aW9uX25hbWUiLCJjb250cmFjdF90aW1lIiwiY3JlYXRlZCIsImRhdGUxIiwiZGF0ZTIiLCJEYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMSIsInAiLCJkaWZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Job.js\n"));

/***/ })

});