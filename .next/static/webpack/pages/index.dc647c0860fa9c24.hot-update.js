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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Job */ \"./components/Job.js\");\n/* harmony import */ var _components_JobCardLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/JobCardLoader */ \"./components/JobCardLoader.js\");\n/* harmony import */ var _components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PrimaryButton */ \"./components/PrimaryButton.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPage = ref[0], setPage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref1[0], setData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref2[0], setLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n                var res, newData;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"https://api.adzuna.com/v1/api/jobs/gb/search/\".concat(currentPage, \"?app_id=8cd24105&app_key=4d7672bce24eeed99eb17ac3cda79387&sort_by=date\"))\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 2:\n                            newData = _state.sent();\n                            if (newData.results) {\n                                setLoading(false);\n                                setData(newData.results);\n                            }\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        currentPage\n    ]);\n    var loadNewData = function() {\n        setPage(currentPage + 1);\n        window.scrollTo(0, 0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white dark:bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex relative min-h-full items-center justify-center py-12 px-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: [\n                            loading && Array.from({\n                                length: 12\n                            }).map(function(_, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCardLoader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, index, false, {\n                                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, _this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-col space-y-6\",\n                                children: data.map(function(result) {\n                                    var id = result.id, title = result.title, company = result.company, location = result.location, contract_time = result.contract_time, created = result.created;\n                                    var company_name = company.display_name;\n                                    var location_name = location.display_name;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Job__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            company_name: company_name,\n                                            location_name: location_name,\n                                            title: title,\n                                            created: created,\n                                            contract_time: contract_time === \"full_time\" ? \"Full-time\" : \"Part-time\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, id, false, {\n                                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-60 absolute inset-x-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-900\"\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute z-10 bottom-14 right-1/2 translate-x-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    onClick: loadNewData,\n                                    text: \"Load more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/laurynas/Documents/GitHub/job-board-2/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JbRyQvGDsgQY9R9Kq3QUBT0bNe8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JHLFFBQVEsRUFBRUMsYUFBYSxHQUNqREosTUFBTSxDQUQ4QkksYUFBYSxFQUFFQyxPQUFPLEdBQzFETCxNQUFNLENBRDZDSyxPQUFPO29DQUU1RCxJQUFRQyxZQUEwQixHQUFLSixPQUFPLENBQXRDSSxZQUFZO29DQUNwQixJQUFRQSxhQUEyQixHQUFLSCxRQUFRLENBQXhDRyxZQUFZO29DQUVwQixxQkFDRSw4REFBQ0csSUFBRTtrREFDRCw0RUFBQzdDLHVEQUFHOzRDQUNGMkMsWUFBWSxFQUFFQSxZQUFZOzRDQUMxQkMsYUFBYSxFQUFFQSxhQUFhOzRDQUM1QnZCLEtBQUssRUFBRUEsS0FBSzs0Q0FDWm9CLE9BQU8sRUFBRUEsT0FBTzs0Q0FDaEJELGFBQWEsRUFDWEEsYUFBYSxLQUFLLFdBQVcsR0FDekIsV0FBVyxHQUNYLFdBQVc7Ozs7O2lEQUVqQjt1Q0FYS0gsRUFBRTs7Ozs2Q0FZTixDQUNMO2dDQUNKLENBQUMsQ0FBQzs7Ozs7b0NBQ0M7MENBRUwsOERBQUNsQixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsaUZBQWlGOzs7OztvQ0FBTzswQ0FDdkcsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxpRkFBaUY7Ozs7O29DQUFPOzBDQUN2Ryw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGlGQUFpRjs7Ozs7b0NBQU87NEJBQ3RHLENBQUNaLE9BQU8sa0JBQ1AsOERBQUNXLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtREFBbUQ7MENBQ2hFLDRFQUFDbEIsaUVBQWE7b0NBQUM0QyxPQUFPLEVBQUU5QixXQUFXO29DQUFFK0IsSUFBSSxFQUFDLFdBQVc7Ozs7O3dDQUFHOzs7OztvQ0FDcEQ7Ozs7Ozs0QkFDSjs7Ozs7d0JBQ0Y7Ozs7O29CQUNEOzs7Ozs7WUFDSCxDQUNOO0FBQ0osQ0FBQztHQWpGdUI1QyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSm9iIGZyb20gXCIuLi9jb21wb25lbnRzL0pvYlwiO1xuaW1wb3J0IEpvYkNhcmRMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSm9iQ2FyZExvYWRlclwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLmFkenVuYS5jb20vdjEvYXBpL2pvYnMvZ2Ivc2VhcmNoLyR7Y3VycmVudFBhZ2V9P2FwcF9pZD04Y2QyNDEwNSZhcHBfa2V5PTRkNzY3MmJjZTI0ZWVlZDk5ZWIxN2FjM2NkYTc5Mzg3JnNvcnRfYnk9ZGF0ZWBcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGlmIChuZXdEYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldERhdGEobmV3RGF0YS5yZXN1bHRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIGNvbnN0IGxvYWROZXdEYXRhID0gKCkgPT4ge1xuICAgIHNldFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIG1pbi1oLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTEyIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuXG4gICAgICAgICAgICB7LyogU2NlbGV0b24gbG9hZGVyICovfVxuICAgICAgICAgICAge2xvYWRpbmcgJiYgQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSlcbiAgICAgICAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Sm9iQ2FyZExvYWRlciBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiBKb2IgY2FyZCBsaXN0ICovfVxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgdGl0bGUsIGNvbXBhbnksIGxvY2F0aW9uLCBjb250cmFjdF90aW1lLCBjcmVhdGVkIH0gPVxuICAgICAgICAgICAgICAgICAgcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGlzcGxheV9uYW1lOiBjb21wYW55X25hbWUgfSA9IGNvbXBhbnk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkaXNwbGF5X25hbWU6IGxvY2F0aW9uX25hbWUgfSA9IGxvY2F0aW9uO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPEpvYlxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnlfbmFtZT17Y29tcGFueV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX25hbWU9e2xvY2F0aW9uX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2NyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfdGltZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdF90aW1lID09PSBcImZ1bGxfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJGdWxsLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiUGFydC10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHsvKiBMb2FkIG1vcmUgam9iIGNhcmRzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYwIGFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgZGFyazpmcm9tLWdyYXktOTAwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjAgYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS13aGl0ZSBkYXJrOmZyb20tZ3JheS05MDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02MCBhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIGRhcms6ZnJvbS1ncmF5LTkwMFwiPjwvZGl2PlxuICAgICAgICAgICAgeyFsb2FkaW5nICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xMCBib3R0b20tMTQgcmlnaHQtMS8yIHRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2xvYWROZXdEYXRhfSB0ZXh0PVwiTG9hZCBtb3JlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJKb2IiLCJKb2JDYXJkTG9hZGVyIiwiUHJpbWFyeUJ1dHRvbiIsIkhvbWUiLCJjdXJyZW50UGFnZSIsInNldFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzIiwibmV3RGF0YSIsImZldGNoIiwianNvbiIsInJlc3VsdHMiLCJsb2FkTmV3RGF0YSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaW5kZXgiLCJ1bCIsInJlc3VsdCIsImlkIiwiY29tcGFueSIsImxvY2F0aW9uIiwiY29udHJhY3RfdGltZSIsImNyZWF0ZWQiLCJkaXNwbGF5X25hbWUiLCJjb21wYW55X25hbWUiLCJsb2NhdGlvbl9uYW1lIiwibGkiLCJvbkNsaWNrIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});