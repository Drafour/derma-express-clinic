"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/customer/page",{

/***/ "(app-pages-browser)/./app/customer/page.jsx":
/*!*******************************!*\
  !*** ./app/customer/page.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/axios */ \"(app-pages-browser)/./app/utils/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('token') === null) {\n                router.push('/login');\n            } else {\n                const token = localStorage.getItem('token');\n                const order = 'desc';\n                const page = 1;\n                const take = 1;\n                (0,_utils_axios__WEBPACK_IMPORTED_MODULE_4__.getCustomer)(token, order, page, take).then({\n                    \"Page.useEffect\": (res)=>{\n                        console.log(res.data);\n                        if (res.data.statusCode == 200) {\n                            var data_customer = res.data.data.data;\n                            var total_customer = data_customer.length;\n                            var div_html = '';\n                            for(var i = 0; i < total_customer; ++i){\n                                div_html += \"<tr>\\n                           <td>\" + data_customer[i].name + \"</td>\\n                           <td>\" + data_customer[i].countryPhoneCode + '' + data_customer[i].phoneNo + \"</td>\\n                           <td>\" + data_customer[i].gender + \"</td>\\n                           <td>\" + data_customer[i].address + \"</td>\\n                           <td>\" + data_customer[i].email + \"</td>\\n                           <td>\" + data_customer[i].IdCardNo + \"</td>\\n                           <td>-</td>\\n                         </tr>\";\n                            }\n                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#list-customer').html(div_html);\n                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n                        }\n                    }\n                }[\"Page.useEffect\"]).catch({\n                    \"Page.useEffect\": (err)=>{\n                        console.log(err);\n                    }\n                }[\"Page.useEffect\"]);\n            }\n        }\n    }[\"Page.useEffect\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"page-body-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"font-black text-xl mb-2\",\n                            children: \"Customer\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-data\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"table text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Phone Number\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Gender\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Address\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Identity No.\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    id: \"list-customer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"John Doe\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"081234567890\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"Male\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"Jl. Buntu No.99\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"john.doe@email.com\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\customer\\\\page.jsx\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jdXN0b21lci9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXVCO0FBQ1c7QUFDVTtBQUNDO0FBRTlCLFNBQVNJOztJQUN0QixNQUFNQyxTQUFTSCwwREFBU0E7SUFFeEJELGdEQUFTQTswQkFBQztZQUNSLElBQUlLLGFBQWFDLE9BQU8sQ0FBQyxhQUFhLE1BQU07Z0JBQzFDRixPQUFPRyxJQUFJLENBQUM7WUFDZCxPQUNLO2dCQUNILE1BQU1DLFFBQVFILGFBQWFDLE9BQU8sQ0FBQztnQkFDbkMsTUFBTUcsUUFBUTtnQkFDZCxNQUFNQyxPQUFRO2dCQUNkLE1BQU1DLE9BQVE7Z0JBRWRULHlEQUFXQSxDQUFDTSxPQUFPQyxPQUFPQyxNQUFNQyxNQUFNQyxJQUFJO3NDQUFDQyxDQUFBQTt3QkFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTt3QkFFcEIsSUFBSUgsSUFBSUcsSUFBSSxDQUFDQyxVQUFVLElBQUksS0FBSzs0QkFDOUIsSUFBSUMsZ0JBQWlCTCxJQUFJRyxJQUFJLENBQUNBLElBQUksQ0FBQ0EsSUFBSTs0QkFDdkMsSUFBSUcsaUJBQWlCRCxjQUFjRSxNQUFNOzRCQUN6QyxJQUFJQyxXQUFpQjs0QkFFckIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILGdCQUFnQixFQUFFRyxFQUFHO2dDQUN2Q0QsWUFBWSwwQ0FDV0gsYUFBYSxDQUFDSSxFQUFFLENBQUNDLElBQUksR0FBSSwyQ0FDekJMLGFBQWEsQ0FBQ0ksRUFBRSxDQUFDRSxnQkFBZ0IsR0FBRyxLQUFLTixhQUFhLENBQUNJLEVBQUUsQ0FBQ0csT0FBTyxHQUFJLDJDQUNyRVAsYUFBYSxDQUFDSSxFQUFFLENBQUNJLE1BQU0sR0FBSSwyQ0FDM0JSLGFBQWEsQ0FBQ0ksRUFBRSxDQUFDSyxPQUFPLEdBQUksMkNBQzVCVCxhQUFhLENBQUNJLEVBQUUsQ0FBQ00sS0FBSyxHQUFJLDJDQUMxQlYsYUFBYSxDQUFDSSxFQUFFLENBQUNPLFFBQVEsR0FBSTs0QkFHdEQ7NEJBRUE5Qiw2Q0FBQ0EsQ0FBQyxrQkFBa0IrQixJQUFJLENBQUNUOzRCQUN6QnRCLDZDQUFDQSxDQUFDLDZCQUE2QmdDLE1BQU07d0JBQ3ZDO29CQUNGO3FDQUFHQyxLQUFLO3NDQUFDQyxDQUFBQTt3QkFDUG5CLFFBQVFDLEdBQUcsQ0FBQ2tCO29CQUNkOztZQUNGO1FBQ0Y7O0lBRUEscUJBQ0U7a0JBQ0EsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFHRCxXQUFVO3NDQUEwQjs7Ozs7Ozs7Ozs7a0NBRTFDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQU1GLFdBQVU7OzhDQUNmLDhEQUFDRzs4Q0FDQyw0RUFBQ0M7OzBEQUNDLDhEQUFDQzswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR1IsOERBQUNDO29DQUFNQyxJQUFHOzhDQUNSLDRFQUFDSDs7MERBQ0MsOERBQUNJOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCO0dBL0V3QnhDOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxXZWJcXGRlcm1hX2V4cHJlc3NfY2xpbmljXFxhcHBcXGN1c3RvbWVyXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA9PT0gbnVsbCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgY29uc3Qgb3JkZXIgPSAnZGVzYyc7XHJcbiAgICAgIGNvbnN0IHBhZ2UgID0gMTtcclxuICAgICAgY29uc3QgdGFrZSAgPSAxO1xyXG5cclxuICAgICAgZ2V0Q3VzdG9tZXIodG9rZW4sIG9yZGVyLCBwYWdlLCB0YWtlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgIHZhciBkYXRhX2N1c3RvbWVyICA9IHJlcy5kYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgIHZhciB0b3RhbF9jdXN0b21lciA9IGRhdGFfY3VzdG9tZXIubGVuZ3RoO1xyXG4gICAgICAgICAgdmFyIGRpdl9odG1sICAgICAgID0gJyc7XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbF9jdXN0b21lcjsgKytpKSB7XHJcbiAgICAgICAgICAgIGRpdl9odG1sICs9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5gICsgZGF0YV9jdXN0b21lcltpXS5uYW1lICsgYDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5gICsgZGF0YV9jdXN0b21lcltpXS5jb3VudHJ5UGhvbmVDb2RlICsgJycgKyBkYXRhX2N1c3RvbWVyW2ldLnBob25lTm8gKyBgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmAgKyBkYXRhX2N1c3RvbWVyW2ldLmdlbmRlciArIGA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+YCArIGRhdGFfY3VzdG9tZXJbaV0uYWRkcmVzcyArIGA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+YCArIGRhdGFfY3VzdG9tZXJbaV0uZW1haWwgKyBgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmAgKyBkYXRhX2N1c3RvbWVyW2ldLklkQ2FyZE5vICsgYDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKCcjbGlzdC1jdXN0b21lcicpLmh0bWwoZGl2X2h0bWwpO1xyXG4gICAgICAgICAgJCgnLmNvbnRhaW5lci1wcmVsb2FkZXItcGFnZScpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ib2R5LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQteGwgbWItMlwiPkN1c3RvbWVyPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tZGF0YVwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkdlbmRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPklkZW50aXR5IE5vLjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGlkPVwibGlzdC1jdXN0b21lclwiPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5Kb2huIERvZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+MDgxMjM0NTY3ODkwPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5NYWxlPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5KbC4gQnVudHUgTm8uOTk8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPmpvaG4uZG9lQGVtYWlsLmNvbTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiJCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldEN1c3RvbWVyIiwiUGFnZSIsInJvdXRlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwidG9rZW4iLCJvcmRlciIsInBhZ2UiLCJ0YWtlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhdHVzQ29kZSIsImRhdGFfY3VzdG9tZXIiLCJ0b3RhbF9jdXN0b21lciIsImxlbmd0aCIsImRpdl9odG1sIiwiaSIsIm5hbWUiLCJjb3VudHJ5UGhvbmVDb2RlIiwicGhvbmVObyIsImdlbmRlciIsImFkZHJlc3MiLCJlbWFpbCIsIklkQ2FyZE5vIiwiaHRtbCIsInJlbW92ZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwiaWQiLCJ0ZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/customer/page.jsx\n"));

/***/ })

});