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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('type') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                window.location.href = '/';\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"]);\n    const postLogin = async ()=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://103.224.100.38:8001/v1/auth/login\");\n        console.log(result.data);\n    };\n    const loginSubmit = ()=>{\n        const user_email = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_email == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Email tidak boleh kosong!');\n        } else if (!checkEmail(user_email)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Format email salah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            // let type = 'antrian';\n            // if (user_email == 'antrian') {\n            //   type = antrian;\n            // }\n            // localStorage.setItem('type', type);\n            // window.location.href = '/';\n            postLogin();\n        }\n    };\n    const checkEmail = (email)=>{\n        var pattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i);\n        return pattern.test(email);\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-email\",\n                            placeholder: \"Email\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFhZ0MsYUFBWTs0QkFBUUMsY0FBYTs7Ozs7Ozs7Ozs7a0NBRXRFLDhEQUFDUDtrQ0FDQyw0RUFBQ0k7NEJBQU1DLE1BQUs7NEJBQVcvQixJQUFHOzRCQUFnQmdDLGFBQVk7NEJBQWFDLGNBQWE7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ0M7d0JBQU9QLFdBQVU7d0JBQU1RLFNBQVMsSUFBTS9CO2tDQUFlOzs7Ozs7a0NBQ3RELDhEQUFDc0I7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0FwR3dCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcV2ViXFxkZXJtYV9leHByZXNzX2NsaW5pY1xcYXBwXFxsb2dpblxccGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3R5cGUnKSA9PT0gbnVsbCkge1xyXG4gICAgICAkKCcuY29udGFpbmVyLXByZWxvYWRlci1wYWdlJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VzZXItZW1haWwsICN1c2VyLXBhc3N3b3JkJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7IFxyXG4gICAgICB2YXIgaWQgPSBldmVudC5rZXkgfHwgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKGlkID09IDEzIHx8IGlkID09ICdFbnRlcicpIHtcclxuICAgICAgICBsb2dpblN1Ym1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcG9zdExvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly8xMDMuMjI0LjEwMC4zODo4MDAxL3YxL2F1dGgvbG9naW5cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9naW5TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyX2VtYWlsICAgID0gJCgnI3VzZXItZW1haWwnKS52YWwoKTtcclxuICAgIGNvbnN0IHVzZXJfcGFzc3dvcmQgPSAkKCcjdXNlci1wYXNzd29yZCcpLnZhbCgpO1xyXG5cclxuICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCcnKTtcclxuXHJcbiAgICBpZiAodXNlcl9lbWFpbCA9PSAnJykge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdFbWFpbCB0aWRhayBib2xlaCBrb3NvbmchJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tFbWFpbCh1c2VyX2VtYWlsKSkge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdGb3JtYXQgZW1haWwgc2FsYWghJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyX3Bhc3N3b3JkID09ICcnKSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgdGlkYWsgYm9sZWgga29zb25nIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl9wYXNzd29yZC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgaGFydXMgdGVyZGlyaSBtaW5pbWFsIDQga2FyYWt0ZXIhJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tQYXNzd29yZCh1c2VyX3Bhc3N3b3JkKSkge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIGhhcnVzIHRlcmRpcmkgZGFyaSBodXJ1ZiBrZWNpbCAoYS16KSwgaHVydWYgYmVzYXIgKEEtWikgZGFuIG5vbW9yICgwLTkpIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGxldCB0eXBlID0gJ2FudHJpYW4nO1xyXG5cclxuICAgICAgLy8gaWYgKHVzZXJfZW1haWwgPT0gJ2FudHJpYW4nKSB7XHJcbiAgICAgIC8vICAgdHlwZSA9IGFudHJpYW47XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0eXBlJywgdHlwZSk7XHJcblxyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuXHJcbiAgICAgIHBvc3RMb2dpbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eKChcIltcXHctXFxzXStcIil8KFtcXHctXSsoPzpcXC5bXFx3LV0rKSopfChcIltcXHctXFxzXStcIikoW1xcdy1dKyg/OlxcLltcXHctXSspKikpKEAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkKXwoQFxcWz8oKDI1WzAtNV1cXC58MlswLTRdWzAtOV1cXC58MVswLTldezJ9XFwufFswLTldezEsMn1cXC4pKSgoMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV17Mn18WzAtOV17MSwyfSlcXC4pezJ9KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFxdPyQpL2kpO1xyXG5cclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gICAgaWYgKC9eW2EtekEtWlxcc10rJC8udGVzdCh1c2VybmFtZSkgfHwgL15bYS16QS1aX10rJC8udGVzdCh1c2VybmFtZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XHJcbiAgICBpZiAoL1xcZC8udGVzdChwYXNzd29yZCkgJiYgL1thLXpdLy50ZXN0KHBhc3N3b3JkKSAmJiAvW0EtWl0vLnRlc3QocGFzc3dvcmQpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1sb2dpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1sb2dpblwiPlxyXG4gICAgICAgICAgPGgxPkRlcm1hIEV4cHJlc3M8c3Bhbj5DbGluaWM8L3NwYW4+PC9oMT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlci1lbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJ1c2VyLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJLYXRhIFNhbmRpXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBsb2dpblN1Ym1pdCgpfT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS12YWxpZGF0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiJCIsInVzZUVmZmVjdCIsIlBhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib24iLCJldmVudCIsImlkIiwia2V5Iiwid2hpY2giLCJrZXlDb2RlIiwibG9naW5TdWJtaXQiLCJwb3N0TG9naW4iLCJyZXN1bHQiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyX2VtYWlsIiwidmFsIiwidXNlcl9wYXNzd29yZCIsImh0bWwiLCJmb2N1cyIsImNoZWNrRW1haWwiLCJsZW5ndGgiLCJjaGVja1Bhc3N3b3JkIiwiZW1haWwiLCJwYXR0ZXJuIiwiUmVnRXhwIiwidGVzdCIsImNoZWNrVXNlcm5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ })

});