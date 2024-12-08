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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/axios */ \"(app-pages-browser)/./app/utils/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('token') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                router.push('/');\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"]);\n    const loginSubmit = async ()=>{\n        const user_email = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_email == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Email tidak boleh kosong!');\n        } else if (!checkEmail(user_email)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Format email salah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            const email = user_email;\n            const password = user_password;\n            (0,_utils_axios__WEBPACK_IMPORTED_MODULE_4__.authLogin)({\n                email,\n                password\n            }).then((res)=>{\n                console.log(res.data);\n                if (res.data.statusCode == 200) {\n                    const token = res.data.data.accessToken;\n                    localStorage.setItem('token', token);\n                    window.location.href = '/';\n                } else {\n                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Terjadi kesalahan. Silahkan coba lagi nanti.');\n                }\n            }).catch((err)=>{\n                console.log(err.response.data);\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html(\"\".concat(err.response.data.message));\n            });\n        }\n    };\n    const checkEmail = (email)=>{\n        var pattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i);\n        return pattern.test(email);\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-email\",\n                            placeholder: \"Email\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDRSxhQUFhLGVBQWVGLElBQUksQ0FBQ0UsV0FBVztZQUNuRSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU12QixnQkFBZ0IsQ0FBQ0U7UUFDckIsSUFBSSxLQUFLbUIsSUFBSSxDQUFDbkIsYUFBYSxRQUFRbUIsSUFBSSxDQUFDbkIsYUFBYSxRQUFRbUIsSUFBSSxDQUFDbkIsV0FBVztZQUMzRSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzs7NEJBQUc7MENBQWEsOERBQUNDOzBDQUFLOzs7Ozs7Ozs7Ozs7a0NBQ3ZCLDhEQUFDSDtrQ0FDQyw0RUFBQ0k7NEJBQU1DLE1BQUs7NEJBQU96QyxJQUFHOzRCQUFhMEMsYUFBWTs0QkFBUUMsY0FBYTs7Ozs7Ozs7Ozs7a0NBRXRFLDhEQUFDUDtrQ0FDQyw0RUFBQ0k7NEJBQU1DLE1BQUs7NEJBQVd6QyxJQUFHOzRCQUFnQjBDLGFBQVk7NEJBQWFDLGNBQWE7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ0M7d0JBQU9QLFdBQVU7d0JBQU1RLFNBQVMsSUFBTXpDO2tDQUFlOzs7Ozs7a0NBQ3RELDhEQUFDZ0M7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0ExR3dCN0M7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFdlYlxcZGVybWFfZXhwcmVzc19jbGluaWNcXGFwcFxcbG9naW5cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBhdXRoTG9naW4gfSBmcm9tIFwiLi4vdXRpbHMvYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPT09IG51bGwpIHtcclxuICAgICAgJCgnLmNvbnRhaW5lci1wcmVsb2FkZXItcGFnZScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VzZXItZW1haWwsICN1c2VyLXBhc3N3b3JkJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7IFxyXG4gICAgICB2YXIgaWQgPSBldmVudC5rZXkgfHwgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKGlkID09IDEzIHx8IGlkID09ICdFbnRlcicpIHtcclxuICAgICAgICBsb2dpblN1Ym1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW5TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyX2VtYWlsICAgID0gJCgnI3VzZXItZW1haWwnKS52YWwoKTtcclxuICAgIGNvbnN0IHVzZXJfcGFzc3dvcmQgPSAkKCcjdXNlci1wYXNzd29yZCcpLnZhbCgpO1xyXG5cclxuICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCcnKTtcclxuXHJcbiAgICBpZiAodXNlcl9lbWFpbCA9PSAnJykge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdFbWFpbCB0aWRhayBib2xlaCBrb3NvbmchJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tFbWFpbCh1c2VyX2VtYWlsKSkge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdGb3JtYXQgZW1haWwgc2FsYWghJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyX3Bhc3N3b3JkID09ICcnKSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgdGlkYWsgYm9sZWgga29zb25nIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl9wYXNzd29yZC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgaGFydXMgdGVyZGlyaSBtaW5pbWFsIDQga2FyYWt0ZXIhJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tQYXNzd29yZCh1c2VyX3Bhc3N3b3JkKSkge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIGhhcnVzIHRlcmRpcmkgZGFyaSBodXJ1ZiBrZWNpbCAoYS16KSwgaHVydWYgYmVzYXIgKEEtWikgZGFuIG5vbW9yICgwLTkpIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsICAgID0gdXNlcl9lbWFpbDtcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSB1c2VyX3Bhc3N3b3JkO1xyXG5cclxuICAgICAgYXV0aExvZ2luKHtlbWFpbCwgcGFzc3dvcmR9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzLmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcclxuXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICBcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdUZXJqYWRpIGtlc2FsYWhhbi4gU2lsYWhrYW4gY29iYSBsYWdpIG5hbnRpLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKGAke2Vyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0VtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoL14oKFwiW1xcdy1cXHNdK1wiKXwoW1xcdy1dKyg/OlxcLltcXHctXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3LV0rKD86XFwuW1xcdy1dKykqKSkoQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQpfChAXFxbPygoMjVbMC01XVxcLnwyWzAtNF1bMC05XVxcLnwxWzAtOV17Mn1cXC58WzAtOV17MSwyfVxcLikpKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcLil7Mn0oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXF0/JCkvaSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICBpZiAoL15bYS16QS1aXFxzXSskLy50ZXN0KHVzZXJuYW1lKSB8fCAvXlthLXpBLVpfXSskLy50ZXN0KHVzZXJuYW1lKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcclxuICAgIGlmICgvXFxkLy50ZXN0KHBhc3N3b3JkKSAmJiAvW2Etel0vLnRlc3QocGFzc3dvcmQpICYmIC9bQS1aXS8udGVzdChwYXNzd29yZCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxvZ2luXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxvZ2luXCI+XHJcbiAgICAgICAgICA8aDE+RGVybWEgRXhwcmVzczxzcGFuPkNsaW5pYzwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInVzZXItcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkthdGEgU2FuZGlcIiBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGxvZ2luU3VibWl0KCl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb25cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiJCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGhMb2dpbiIsIlBhZ2UiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlIiwicHVzaCIsIm9uIiwiZXZlbnQiLCJpZCIsImtleSIsIndoaWNoIiwia2V5Q29kZSIsImxvZ2luU3VibWl0IiwidXNlcl9lbWFpbCIsInZhbCIsInVzZXJfcGFzc3dvcmQiLCJodG1sIiwiZm9jdXMiLCJjaGVja0VtYWlsIiwibGVuZ3RoIiwiY2hlY2tQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0dXNDb2RlIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInNldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwibWVzc2FnZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJ0ZXN0IiwiY2hlY2tVc2VybmFtZSIsInVzZXJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});