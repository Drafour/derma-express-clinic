"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"695cba15774f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcV2ViXFxkZXJtYV9leHByZXNzX2NsaW5pY1xcYXBwXFxnbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjY5NWNiYTE1Nzc0ZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/common/header.jsx":
/*!*******************************!*\
  !*** ./app/common/header.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            if (pathname == '/login') {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.navbar').remove();\n            }\n        }\n    }[\"Header.useEffect\"]);\n    const logoutSubmit = ()=>{\n        localStorage.removeItem('token');\n        window.location.href = '/login';\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-[#55a399]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"btn btn-ghost text-xl text-white\",\n                    children: \"Derma Express Clinic\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown dropdown-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            tabIndex: 0,\n                            role: \"button\",\n                            className: \"btn btn-ghost btn-circle avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/images/default-user-image.png\",\n                                    alt: \"user image\",\n                                    width: 40,\n                                    height: 40\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"menu menu-sm dropdown-content bg-[#55a399] rounded-box z-[1] mt-3 w-52 p-2 shadow\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"#\",\n                                        className: \"text-white\",\n                                        children: \"Settings\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"\",\n                                        className: \"text-white\",\n                                        onClick: ()=>logoutSubmit(),\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\common\\\\header.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"V/ldUoOTYUs0Cb2F6bbxKSn7KxI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21tb24vaGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUV1QjtBQUNNO0FBQ0U7QUFDZTtBQUNaO0FBRW5CLFNBQVNLOztJQUN0QixNQUFNQyxXQUFXSCw0REFBV0E7SUFFNUJDLGdEQUFTQTs0QkFBQztZQUNSLElBQUlFLFlBQVksVUFBVTtnQkFDeEJOLDZDQUFDQSxDQUFDLFdBQVdPLE1BQU07WUFDckI7UUFDRjs7SUFFQSxNQUFNQyxlQUFlO1FBQ25CQyxhQUFhQyxVQUFVLENBQUM7UUFFeEJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2QsaURBQUlBO29CQUFDWSxNQUFLO29CQUFJRSxXQUFVOzhCQUFtQzs7Ozs7Ozs7Ozs7MEJBRTlELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUUsVUFBVTs0QkFBR0MsTUFBSzs0QkFBU0YsV0FBVTtzQ0FDeEMsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYixrREFBS0E7b0NBQUNnQixLQUFJO29DQUFpQ0MsS0FBSTtvQ0FBYUMsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHcEYsOERBQUNDOzRCQUNDTixVQUFVOzRCQUNWRCxXQUFVOzs4Q0FDViw4REFBQ1E7OENBQUcsNEVBQUN0QixpREFBSUE7d0NBQUNZLE1BQUs7d0NBQUlFLFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7OzhDQUMxQyw4REFBQ1E7OENBQUcsNEVBQUN0QixpREFBSUE7d0NBQUNZLE1BQUs7d0NBQUdFLFdBQVU7d0NBQWFTLFNBQVMsSUFBTWhCO2tEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRjtHQXJDd0JIOztRQUNMRix3REFBV0E7OztLQURORSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxXZWJcXGRlcm1hX2V4cHJlc3NfY2xpbmljXFxhcHBcXGNvbW1vblxcaGVhZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PSAnL2xvZ2luJykge1xyXG4gICAgICAkKCcubmF2YmFyJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dFN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctWyM1NWEzOTldXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHRleHQteGwgdGV4dC13aGl0ZVwiPkRlcm1hIEV4cHJlc3MgQ2xpbmljPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWVuZFwiPlxyXG4gICAgICAgICAgPGRpdiB0YWJJbmRleD17MH0gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZSBhdmF0YXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2RlZmF1bHQtdXNlci1pbWFnZS5wbmdcIiBhbHQ9XCJ1c2VyIGltYWdlXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51IG1lbnUtc20gZHJvcGRvd24tY29udGVudCBiZy1bIzU1YTM5OV0gcm91bmRlZC1ib3ggei1bMV0gbXQtMyB3LTUyIHAtMiBzaGFkb3dcIj5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlNldHRpbmdzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIG9uQ2xpY2s9eygpID0+IGxvZ291dFN1Ym1pdCgpfT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIiQiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsInBhdGhuYW1lIiwicmVtb3ZlIiwibG9nb3V0U3VibWl0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwicm9sZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJsaSIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/common/header.jsx\n"));

/***/ })

});