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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/axios */ \"(app-pages-browser)/./app/utils/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('type') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                window.location.href = '/';\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"]);\n    const loginSubmit = async ()=>{\n        const user_email = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_email == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Email tidak boleh kosong!');\n        } else if (!checkEmail(user_email)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Format email salah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            // localStorage.setItem('type', type);\n            // window.location.href = '/';\n            const email = user_email;\n            const password = user_password;\n            (0,_utils_axios__WEBPACK_IMPORTED_MODULE_3__.authLogin)({\n                email,\n                password\n            }).then((res)=>{\n                console.log(res.data);\n            }).catch((err)=>{\n                console.log(err.response.data);\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html(\"\".concat(err.response.data.msg));\n            });\n        }\n    };\n    const checkEmail = (email)=>{\n        var pattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i);\n        return pattern.test(email);\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-email\",\n                            placeholder: \"Email\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUFHOzBDQUFhLDhEQUFDQzswQ0FBSzs7Ozs7Ozs7Ozs7O2tDQUN2Qiw4REFBQ0g7a0NBQ0MsNEVBQUNJOzRCQUFNQyxNQUFLOzRCQUFPbEMsSUFBRzs0QkFBYW1DLGFBQVk7NEJBQVFDLGNBQWE7Ozs7Ozs7Ozs7O2tDQUV0RSw4REFBQ1A7a0NBQ0MsNEVBQUNJOzRCQUFNQyxNQUFLOzRCQUFXbEMsSUFBRzs0QkFBZ0JtQyxhQUFZOzRCQUFhQyxjQUFhOzs7Ozs7Ozs7OztrQ0FFbEYsOERBQUNDO3dCQUFPUCxXQUFVO3dCQUFNUSxTQUFTLElBQU1sQztrQ0FBZTs7Ozs7O2tDQUN0RCw4REFBQ3lCO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBaEd3QnZDO0tBQUFBIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFdlYlxcZGVybWFfZXhwcmVzc19jbGluaWNcXGFwcFxcbG9naW5cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aExvZ2luIH0gZnJvbSBcIi4uL3V0aWxzL2F4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3R5cGUnKSA9PT0gbnVsbCkge1xyXG4gICAgICAkKCcuY29udGFpbmVyLXByZWxvYWRlci1wYWdlJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VzZXItZW1haWwsICN1c2VyLXBhc3N3b3JkJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7IFxyXG4gICAgICB2YXIgaWQgPSBldmVudC5rZXkgfHwgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKGlkID09IDEzIHx8IGlkID09ICdFbnRlcicpIHtcclxuICAgICAgICBsb2dpblN1Ym1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW5TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyX2VtYWlsICAgID0gJCgnI3VzZXItZW1haWwnKS52YWwoKTtcclxuICAgIGNvbnN0IHVzZXJfcGFzc3dvcmQgPSAkKCcjdXNlci1wYXNzd29yZCcpLnZhbCgpO1xyXG5cclxuICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCcnKTtcclxuXHJcbiAgICBpZiAodXNlcl9lbWFpbCA9PSAnJykge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdFbWFpbCB0aWRhayBib2xlaCBrb3NvbmchJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tFbWFpbCh1c2VyX2VtYWlsKSkge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdGb3JtYXQgZW1haWwgc2FsYWghJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyX3Bhc3N3b3JkID09ICcnKSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgdGlkYWsgYm9sZWgga29zb25nIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl9wYXNzd29yZC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgaGFydXMgdGVyZGlyaSBtaW5pbWFsIDQga2FyYWt0ZXIhJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tQYXNzd29yZCh1c2VyX3Bhc3N3b3JkKSkge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIGhhcnVzIHRlcmRpcmkgZGFyaSBodXJ1ZiBrZWNpbCAoYS16KSwgaHVydWYgYmVzYXIgKEEtWikgZGFuIG5vbW9yICgwLTkpIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0eXBlJywgdHlwZSk7XHJcblxyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuXHJcbiAgICAgIGNvbnN0IGVtYWlsICAgID0gdXNlcl9lbWFpbDtcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSB1c2VyX3Bhc3N3b3JkO1xyXG5cclxuICAgICAgYXV0aExvZ2luKHtlbWFpbCwgcGFzc3dvcmR9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbChgJHtlcnIucmVzcG9uc2UuZGF0YS5tc2d9YCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0VtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKFwiW1xcdy1cXHNdK1wiKXwoW1xcdy1dKyg/OlxcLltcXHctXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3LV0rKD86XFwuW1xcdy1dKykqKSkoQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQpfChAXFxbPygoMjVbMC01XVxcLnwyWzAtNF1bMC05XVxcLnwxWzAtOV17Mn1cXC58WzAtOV17MSwyfVxcLikpKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXF0/JCkvaSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBpZiAoL15bYS16QS1aXFxzXSskLy50ZXN0KHVzZXJuYW1lKSB8fCAvXlthLXpBLVpfXSskLy50ZXN0KHVzZXJuYW1lKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcclxuICAgIGlmICgvXFxkLy50ZXN0KHBhc3N3b3JkKSAmJiAvW2Etel0vLnRlc3QocGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdChwYXNzd29yZCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxvZ2luXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxvZ2luXCI+XHJcbiAgICAgICAgICA8aDE+RGVybWEgRXhwcmVzczxzcGFuPkNsaW5pYzwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkthdGEgU2FuZGlcIiBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGxvZ2luU3VibWl0KCl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb25cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiJCIsInVzZUVmZmVjdCIsImF1dGhMb2dpbiIsIlBhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib24iLCJldmVudCIsImlkIiwia2V5Iiwid2hpY2giLCJrZXlDb2RlIiwibG9naW5TdWJtaXQiLCJ1c2VyX2VtYWlsIiwidmFsIiwidXNlcl9wYXNzd29yZCIsImh0bWwiLCJmb2N1cyIsImNoZWNrRW1haWwiLCJsZW5ndGgiLCJjaGVja1Bhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJtc2ciLCJwYXR0ZXJuIiwiUmVnRXhwIiwidGVzdCIsImNoZWNrVXNlcm5hbWUiLCJ1c2VybmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});