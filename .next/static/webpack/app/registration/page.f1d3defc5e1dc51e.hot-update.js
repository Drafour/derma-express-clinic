"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./app/registration/page.jsx":
/*!***********************************!*\
  !*** ./app/registration/page.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/axios */ \"(app-pages-browser)/./app/utils/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('token') === null) {\n                router.push('/login');\n            } else {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            }\n        }\n    }[\"Page.useEffect\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"page-body-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"font-black text-xl mb-2\",\n                            children: \"Registration\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-data\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"form-control w-full max-w-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"label\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"label-text\",\n                                        children: \"What is your name?\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type here\",\n                                    className: \"input input-bordered w-full max-w-xs\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\registration\\\\page.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3RyYXRpb24vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV1QjtBQUNXO0FBQ1U7QUFDRTtBQUUvQixTQUFTSTs7SUFDdEIsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCRCxnREFBU0E7MEJBQUM7WUFDUixJQUFJSyxhQUFhQyxPQUFPLENBQUMsYUFBYSxNQUFNO2dCQUMxQ0YsT0FBT0csSUFBSSxDQUFDO1lBQ2QsT0FDSztnQkFDSFIsNkNBQUNBLENBQUMsNkJBQTZCUyxNQUFNO1lBQ3ZDO1FBQ0Y7O0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFHRCxXQUFVO3NDQUEwQjs7Ozs7Ozs7Ozs7a0NBRTFDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQU1GLFdBQVU7OzhDQUNmLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0c7d0NBQUtILFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7OzhDQUUvQiw4REFBQ0k7b0NBQU1DLE1BQUs7b0NBQU9DLGFBQVk7b0NBQVlOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25FO0dBL0J3QlA7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFdlYlxcZGVybWFfZXhwcmVzc19jbGluaWNcXGFwcFxccmVnaXN0cmF0aW9uXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0QWRtaXNzaW9uIH0gZnJvbSBcIi4uL3V0aWxzL2F4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPT09IG51bGwpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQoJy5jb250YWluZXItcHJlbG9hZGVyLXBhZ2UnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ib2R5LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQteGwgbWItMlwiPlJlZ2lzdHJhdGlvbjwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1kYXRhXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdy1mdWxsIG1heC13LXhzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dFwiPldoYXQgaXMgeW91ciBuYW1lPzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiJCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldEFkbWlzc2lvbiIsIlBhZ2UiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/registration/page.jsx\n"));

/***/ })

});