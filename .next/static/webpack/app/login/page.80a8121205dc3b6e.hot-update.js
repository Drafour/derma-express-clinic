"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.jsx":
/*!****************************!*\
  !*** ./app/login/page.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('type') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                window.location.href = '/';\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"]);\n    const postLogin = async ()=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://103.224.100.38:8001/v1/auth/login\");\n        console.log(result.data);\n    };\n    const loginSubmit = ()=>{\n        const user_username = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_username == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username tidak boleh kosong!');\n        } else if (user_username.length < 3) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username harus terdiri minimal 3 karakter!');\n        } else if (!checkUsername(user_username)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username harus terdiri dari huruf dan atau garis bawah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!').addClass('shown');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            // let type = 'antrian';\n            // if (user_username == 'antrian') {\n            //   type = antrian;\n            // }\n            // localStorage.setItem('type', type);\n            // window.location.href = '/';\n            postLogin();\n        }\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-username\",\n                            placeholder: \"Username\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMEI7QUFDSDtBQUNXO0FBRW5CLFNBQVNHOztJQUN0QkQsZ0RBQVNBOzBCQUFDO1lBQ1IsSUFBSUUsYUFBYUMsT0FBTyxDQUFDLFlBQVksTUFBTTtnQkFDekNKLDZDQUFDQSxDQUFDLDZCQUE2QkssTUFBTTtZQUN2QyxPQUNLO2dCQUNIQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztZQUN6QjtZQUVBUiw2Q0FBQ0EsQ0FBQyxrQ0FBa0NTLEVBQUUsQ0FBQztrQ0FBVyxTQUFTQyxLQUFLO29CQUM5RCxJQUFJQyxLQUFLRCxNQUFNRSxHQUFHLElBQUlGLE1BQU1HLEtBQUssSUFBSUgsTUFBTUksT0FBTyxJQUFJO29CQUV0RCxJQUFJSCxNQUFNLE1BQU1BLE1BQU0sU0FBUzt3QkFDN0JJO29CQUNGO2dCQUNGOztRQUNGOztJQUVBLE1BQU1DLFlBQVk7UUFDaEIsTUFBTUMsU0FBUyxNQUFNbEIsNkNBQUtBLENBQUNtQixJQUFJLENBQUM7UUFFaENDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksSUFBSTtJQUN6QjtJQUVBLE1BQU1OLGNBQWM7UUFDbEIsTUFBTU8sZ0JBQWdCdEIsNkNBQUNBLENBQUMsa0JBQWtCdUIsR0FBRztRQUM3QyxNQUFNQyxnQkFBZ0J4Qiw2Q0FBQ0EsQ0FBQyxrQkFBa0J1QixHQUFHO1FBRTdDdkIsNkNBQUNBLENBQUMsb0JBQW9CeUIsSUFBSSxDQUFDO1FBRTNCLElBQUlILGlCQUFpQixJQUFJO1lBQ3ZCdEIsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQztRQUM3QixPQUNLLElBQUlILGNBQWNLLE1BQU0sR0FBRyxHQUFHO1lBQ2pDM0IsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQztRQUM3QixPQUNLLElBQUksQ0FBQ0csY0FBY04sZ0JBQWdCO1lBQ3RDdEIsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQztRQUM3QixPQUNLLElBQUlELGlCQUFpQixJQUFJO1lBQzVCeEIsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQztRQUM3QixPQUNLLElBQUlELGNBQWNHLE1BQU0sR0FBRyxHQUFHO1lBQ2pDM0IsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQyxnREFBZ0RJLFFBQVEsQ0FBQztRQUN0RixPQUNLLElBQUksQ0FBQ0MsY0FBY04sZ0JBQWdCO1lBQ3RDeEIsNkNBQUNBLENBQUMsa0JBQWtCMEIsS0FBSztZQUN6QjFCLDZDQUFDQSxDQUFDLG9CQUFvQnlCLElBQUksQ0FBQztRQUM3QixPQUNLO1lBQ0gsd0JBQXdCO1lBRXhCLG9DQUFvQztZQUNwQyxvQkFBb0I7WUFDcEIsSUFBSTtZQUVKLHNDQUFzQztZQUV0Qyw4QkFBOEI7WUFFOUJUO1FBQ0Y7SUFDRjtJQUVBLE1BQU1ZLGdCQUFnQixDQUFDRztRQUNyQixJQUFJLGdCQUFnQkMsSUFBSSxDQUFDRCxhQUFhLGVBQWVDLElBQUksQ0FBQ0QsV0FBVztZQUNuRSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU1ELGdCQUFnQixDQUFDRztRQUNyQixJQUFJLEtBQUtELElBQUksQ0FBQ0MsYUFBYSxRQUFRRCxJQUFJLENBQUNDLGFBQWEsUUFBUUQsSUFBSSxDQUFDQyxXQUFXO1lBQzNFLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUFHOzBDQUFhLDhEQUFDQzswQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUN2Qiw4REFBQ0g7a0NBQ0MsNEVBQUNJOzRCQUFNQyxNQUFLOzRCQUFPNUIsSUFBRzs0QkFBZ0I2QixhQUFZOzRCQUFXQyxjQUFhOzs7Ozs7Ozs7OztrQ0FFNUUsOERBQUNQO2tDQUNDLDRFQUFDSTs0QkFBTUMsTUFBSzs0QkFBVzVCLElBQUc7NEJBQWdCNkIsYUFBWTs0QkFBYUMsY0FBYTs7Ozs7Ozs7Ozs7a0NBRWxGLDhEQUFDQzt3QkFBT1AsV0FBVTt3QkFBTVEsU0FBUyxJQUFNNUI7a0NBQWU7Ozs7OztrQ0FDdEQsOERBQUNtQjt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQWxHd0JqQztLQUFBQSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxXZWJcXGRlcm1hX2V4cHJlc3NfY2xpbmljXFxhcHBcXGxvZ2luXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHlwZScpID09PSBudWxsKSB7XHJcbiAgICAgICQoJy5jb250YWluZXItcHJlbG9hZGVyLXBhZ2UnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuICAgIH1cclxuXHJcbiAgICAkKCcjdXNlci11c2VybmFtZSwgI3VzZXItcGFzc3dvcmQnKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KXsgXHJcbiAgICAgIHZhciBpZCA9IGV2ZW50LmtleSB8fCBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlIHx8IDA7XHJcblxyXG4gICAgICBpZiAoaWQgPT0gMTMgfHwgaWQgPT0gJ0VudGVyJykge1xyXG4gICAgICAgIGxvZ2luU3VibWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwb3N0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovLzEwMy4yMjQuMTAwLjM4OjgwMDEvdjEvYXV0aC9sb2dpblwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dpblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJfdXNlcm5hbWUgPSAkKCcjdXNlci11c2VybmFtZScpLnZhbCgpO1xyXG4gICAgY29uc3QgdXNlcl9wYXNzd29yZCA9ICQoJyN1c2VyLXBhc3N3b3JkJykudmFsKCk7XHJcblxyXG4gICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJycpO1xyXG5cclxuICAgIGlmICh1c2VyX3VzZXJuYW1lID09ICcnKSB7XHJcbiAgICAgICQoJyN1c2VyLXVzZXJuYW1lJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ1VzZXJuYW1lIHRpZGFrIGJvbGVoIGtvc29uZyEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJfdXNlcm5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAkKCcjdXNlci11c2VybmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdVc2VybmFtZSBoYXJ1cyB0ZXJkaXJpIG1pbmltYWwgMyBrYXJha3RlciEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFjaGVja1VzZXJuYW1lKHVzZXJfdXNlcm5hbWUpKSB7XHJcbiAgICAgICQoJyN1c2VyLXVzZXJuYW1lJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ1VzZXJuYW1lIGhhcnVzIHRlcmRpcmkgZGFyaSBodXJ1ZiBkYW4gYXRhdSBnYXJpcyBiYXdhaCEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJfcGFzc3dvcmQgPT0gJycpIHtcclxuICAgICAgJCgnI3VzZXItcGFzc3dvcmQnKS5mb2N1cygpO1xyXG4gICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnS2F0YSBzYW5kaSB0aWRhayBib2xlaCBrb3NvbmchJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyX3Bhc3N3b3JkLmxlbmd0aCA8IDQpIHtcclxuICAgICAgJCgnI3VzZXItcGFzc3dvcmQnKS5mb2N1cygpO1xyXG4gICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnS2F0YSBzYW5kaSBoYXJ1cyB0ZXJkaXJpIG1pbmltYWwgNCBrYXJha3RlciEnKS5hZGRDbGFzcygnc2hvd24nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFjaGVja1Bhc3N3b3JkKHVzZXJfcGFzc3dvcmQpKSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgaGFydXMgdGVyZGlyaSBkYXJpIGh1cnVmIGtlY2lsIChhLXopLCBodXJ1ZiBiZXNhciAoQS1aKSBkYW4gbm9tb3IgKDAtOSkhJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gbGV0IHR5cGUgPSAnYW50cmlhbic7XHJcblxyXG4gICAgICAvLyBpZiAodXNlcl91c2VybmFtZSA9PSAnYW50cmlhbicpIHtcclxuICAgICAgLy8gICB0eXBlID0gYW50cmlhbjtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGUnLCB0eXBlKTtcclxuXHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG5cclxuICAgICAgcG9zdExvZ2luKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBpZiAoL15bYS16QS1aXFxzXSskLy50ZXN0KHVzZXJuYW1lKSB8fCAvXlthLXpBLVpfXSskLy50ZXN0KHVzZXJuYW1lKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcclxuICAgIGlmICgvXFxkLy50ZXN0KHBhc3N3b3JkKSAmJiAvW2Etel0vLnRlc3QocGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdChwYXNzd29yZCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxvZ2luXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxvZ2luXCI+XHJcbiAgICAgICAgICA8aDE+RGVybWEgRXhwcmVzczxzcGFuPkNsaW5pYzwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLXVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkthdGEgU2FuZGlcIiBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGxvZ2luU3VibWl0KCl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb25cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCIkIiwidXNlRWZmZWN0IiwiUGFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvbiIsImV2ZW50IiwiaWQiLCJrZXkiLCJ3aGljaCIsImtleUNvZGUiLCJsb2dpblN1Ym1pdCIsInBvc3RMb2dpbiIsInJlc3VsdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXJfdXNlcm5hbWUiLCJ2YWwiLCJ1c2VyX3Bhc3N3b3JkIiwiaHRtbCIsImZvY3VzIiwibGVuZ3RoIiwiY2hlY2tVc2VybmFtZSIsImFkZENsYXNzIiwiY2hlY2tQYXNzd29yZCIsInVzZXJuYW1lIiwidGVzdCIsInBhc3N3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});