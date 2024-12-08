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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('type') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                window.location.href = '/';\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n            const loginSubmit = {\n                \"Page.useEffect.loginSubmit\": async ()=>{\n                    await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://103.224.100.38:8001/v1/auth/login\").then({\n                        \"Page.useEffect.loginSubmit\": (res)=>{\n                            console.log(res.data);\n                        }\n                    }[\"Page.useEffect.loginSubmit\"]);\n                }\n            }[\"Page.useEffect.loginSubmit\"];\n        }\n    }[\"Page.useEffect\"]);\n    const loginSubmit = ()=>{\n        const user_username = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_username == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username tidak boleh kosong!');\n        } else if (user_username.length < 3) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username harus terdiri minimal 3 karakter!');\n        } else if (!checkUsername(user_username)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-username').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Username harus terdiri dari huruf dan atau garis bawah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!').addClass('shown');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            // let type = 'antrian';\n            // if (user_username == 'antrian') {\n            //   type = antrian;\n            // }\n            // localStorage.setItem('type', type);\n            // window.location.href = '/';\n            loginSubmit();\n            return false;\n        }\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-username\",\n                            placeholder: \"Username\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDOzs0QkFBRzswQ0FBYSw4REFBQ0M7MENBQUs7Ozs7Ozs7Ozs7OztrQ0FDdkIsOERBQUNIO2tDQUNDLDRFQUFDSTs0QkFBTUMsTUFBSzs0QkFBTzVCLElBQUc7NEJBQWdCNkIsYUFBWTs0QkFBV0MsY0FBYTs7Ozs7Ozs7Ozs7a0NBRTVFLDhEQUFDUDtrQ0FDQyw0RUFBQ0k7NEJBQU1DLE1BQUs7NEJBQVc1QixJQUFHOzRCQUFnQjZCLGFBQVk7NEJBQWFDLGNBQWE7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ0M7d0JBQU9QLFdBQVU7d0JBQU1RLFNBQVMsSUFBTTVCO2tDQUFlOzs7Ozs7a0NBQ3RELDhEQUFDbUI7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0FwR3dCakM7S0FBQUEiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcV2ViXFxkZXJtYV9leHByZXNzX2NsaW5pY1xcYXBwXFxsb2dpblxccGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3R5cGUnKSA9PT0gbnVsbCkge1xyXG4gICAgICAkKCcuY29udGFpbmVyLXByZWxvYWRlci1wYWdlJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VzZXItdXNlcm5hbWUsICN1c2VyLXBhc3N3b3JkJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7IFxyXG4gICAgICB2YXIgaWQgPSBldmVudC5rZXkgfHwgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKGlkID09IDEzIHx8IGlkID09ICdFbnRlcicpIHtcclxuICAgICAgICBsb2dpblN1Ym1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2dpblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly8xMDMuMjI0LjEwMC4zODo4MDAxL3YxL2F1dGgvbG9naW5cIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcl91c2VybmFtZSA9ICQoJyN1c2VyLXVzZXJuYW1lJykudmFsKCk7XHJcbiAgICBjb25zdCB1c2VyX3Bhc3N3b3JkID0gJCgnI3VzZXItcGFzc3dvcmQnKS52YWwoKTtcclxuXHJcbiAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnJyk7XHJcblxyXG4gICAgaWYgKHVzZXJfdXNlcm5hbWUgPT0gJycpIHtcclxuICAgICAgJCgnI3VzZXItdXNlcm5hbWUnKS5mb2N1cygpO1xyXG4gICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnVXNlcm5hbWUgdGlkYWsgYm9sZWgga29zb25nIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl91c2VybmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICQoJyN1c2VyLXVzZXJuYW1lJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ1VzZXJuYW1lIGhhcnVzIHRlcmRpcmkgbWluaW1hbCAzIGthcmFrdGVyIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWNoZWNrVXNlcm5hbWUodXNlcl91c2VybmFtZSkpIHtcclxuICAgICAgJCgnI3VzZXItdXNlcm5hbWUnKS5mb2N1cygpO1xyXG4gICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnVXNlcm5hbWUgaGFydXMgdGVyZGlyaSBkYXJpIGh1cnVmIGRhbiBhdGF1IGdhcmlzIGJhd2FoIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl9wYXNzd29yZCA9PSAnJykge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIHRpZGFrIGJvbGVoIGtvc29uZyEnKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHVzZXJfcGFzc3dvcmQubGVuZ3RoIDwgNCkge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIGhhcnVzIHRlcmRpcmkgbWluaW1hbCA0IGthcmFrdGVyIScpLmFkZENsYXNzKCdzaG93bicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWNoZWNrUGFzc3dvcmQodXNlcl9wYXNzd29yZCkpIHtcclxuICAgICAgJCgnI3VzZXItcGFzc3dvcmQnKS5mb2N1cygpO1xyXG4gICAgICAkKCcuZm9ybS12YWxpZGF0aW9uJykuaHRtbCgnS2F0YSBzYW5kaSBoYXJ1cyB0ZXJkaXJpIGRhcmkgaHVydWYga2VjaWwgKGEteiksIGh1cnVmIGJlc2FyIChBLVopIGRhbiBub21vciAoMC05KSEnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBsZXQgdHlwZSA9ICdhbnRyaWFuJztcclxuXHJcbiAgICAgIC8vIGlmICh1c2VyX3VzZXJuYW1lID09ICdhbnRyaWFuJykge1xyXG4gICAgICAvLyAgIHR5cGUgPSBhbnRyaWFuO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHlwZScsIHR5cGUpO1xyXG5cclxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcblxyXG4gICAgICBsb2dpblN1Ym1pdCgpO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgaWYgKC9eW2EtekEtWlxcc10rJC8udGVzdCh1c2VybmFtZSkgfHwgL15bYS16QS1aX10rJC8udGVzdCh1c2VybmFtZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XHJcbiAgICBpZiAoL1xcZC8udGVzdChwYXNzd29yZCkgJiYgL1thLXpdLy50ZXN0KHBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QocGFzc3dvcmQpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1sb2dpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1sb2dpblwiPlxyXG4gICAgICAgICAgPGgxPkRlcm1hIEV4cHJlc3M8c3Bhbj5DbGluaWM8L3NwYW4+PC9oMT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci11c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJLYXRhIFNhbmRpXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBsb2dpblN1Ym1pdCgpfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS12YWxpZGF0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiJCIsInVzZUVmZmVjdCIsIlBhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib24iLCJldmVudCIsImlkIiwia2V5Iiwid2hpY2giLCJrZXlDb2RlIiwibG9naW5TdWJtaXQiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcl91c2VybmFtZSIsInZhbCIsInVzZXJfcGFzc3dvcmQiLCJodG1sIiwiZm9jdXMiLCJsZW5ndGgiLCJjaGVja1VzZXJuYW1lIiwiYWRkQ2xhc3MiLCJjaGVja1Bhc3N3b3JkIiwidXNlcm5hbWUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});