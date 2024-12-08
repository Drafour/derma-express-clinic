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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/axios */ \"(app-pages-browser)/./app/utils/axios.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_axios__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            if (localStorage.getItem('type') === null) {\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.container-preloader-page').remove();\n            } else {\n                window.location.href = '/';\n            }\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email, #user-password').on('keydown', {\n                \"Page.useEffect\": function(event) {\n                    var id = event.key || event.which || event.keyCode || 0;\n                    if (id == 13 || id == 'Enter') {\n                        loginSubmit();\n                    }\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"]);\n    const loginSubmit = async ()=>{\n        const user_email = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').val();\n        const user_password = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').val();\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('');\n        if (user_email == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Email tidak boleh kosong!');\n        } else if (!checkEmail(user_email)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-email').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Format email salah!');\n        } else if (user_password == '') {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi tidak boleh kosong!');\n        } else if (user_password.length < 4) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri minimal 4 karakter!');\n        } else if (!checkPassword(user_password)) {\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#user-password').focus();\n            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html('Kata sandi harus terdiri dari huruf kecil (a-z), huruf besar (A-Z) dan nomor (0-9)!');\n        } else {\n            // localStorage.setItem('type', type);\n            // window.location.href = '/';\n            const body = {\n                email,\n                password\n            };\n            const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://103.224.100.38:8001/v1/auth/login\", body);\n            console.log(result.data);\n            const email = user_email;\n            const password = user_password;\n            (0,_utils_axios__WEBPACK_IMPORTED_MODULE_3__.authLogin)({\n                email,\n                password\n            }).then((res)=>{\n                console.log(result.data);\n            }).catch((err)=>{\n                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.form-validation').html(\"\".concat(err.response.data.msg));\n            });\n        }\n    };\n    const checkEmail = (email)=>{\n        var pattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i);\n        return pattern.test(email);\n    };\n    const checkUsername = (username)=>{\n        if (/^[a-zA-Z\\s]+$/.test(username) || /^[a-zA-Z_]+$/.test(username)) {\n            return true;\n        }\n    };\n    const checkPassword = (password)=>{\n        if (/\\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {\n            return true;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper-login\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-login\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Derma Express\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Clinic\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"user-email\",\n                            placeholder: \"Email\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"user-password\",\n                            placeholder: \"Kata Sandi\",\n                            autoComplete: \"new-password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: ()=>loginSubmit(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-validation\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Web\\\\derma_express_clinic\\\\app\\\\login\\\\page.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNIO0FBQ1c7QUFDUTtBQUUzQixTQUFTSTs7SUFDdEJGLGdEQUFTQTswQkFBQztZQUNSLElBQUlHLGFBQWFDLE9BQU8sQ0FBQyxZQUFZLE1BQU07Z0JBQ3pDTCw2Q0FBQ0EsQ0FBQyw2QkFBNkJNLE1BQU07WUFDdkMsT0FDSztnQkFDSEMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7WUFDekI7WUFFQVQsNkNBQUNBLENBQUMsK0JBQStCVSxFQUFFLENBQUM7a0NBQVcsU0FBU0MsS0FBSztvQkFDM0QsSUFBSUMsS0FBS0QsTUFBTUUsR0FBRyxJQUFJRixNQUFNRyxLQUFLLElBQUlILE1BQU1JLE9BQU8sSUFBSTtvQkFFdEQsSUFBSUgsTUFBTSxNQUFNQSxNQUFNLFNBQVM7d0JBQzdCSTtvQkFDRjtnQkFDRjs7UUFDRjs7SUFFQSxNQUFNQSxjQUFjO1FBQ2xCLE1BQU1DLGFBQWdCakIsNkNBQUNBLENBQUMsZUFBZWtCLEdBQUc7UUFDMUMsTUFBTUMsZ0JBQWdCbkIsNkNBQUNBLENBQUMsa0JBQWtCa0IsR0FBRztRQUU3Q2xCLDZDQUFDQSxDQUFDLG9CQUFvQm9CLElBQUksQ0FBQztRQUUzQixJQUFJSCxjQUFjLElBQUk7WUFDcEJqQiw2Q0FBQ0EsQ0FBQyxlQUFlcUIsS0FBSztZQUN0QnJCLDZDQUFDQSxDQUFDLG9CQUFvQm9CLElBQUksQ0FBQztRQUM3QixPQUNLLElBQUksQ0FBQ0UsV0FBV0wsYUFBYTtZQUNoQ2pCLDZDQUFDQSxDQUFDLGVBQWVxQixLQUFLO1lBQ3RCckIsNkNBQUNBLENBQUMsb0JBQW9Cb0IsSUFBSSxDQUFDO1FBQzdCLE9BQ0ssSUFBSUQsaUJBQWlCLElBQUk7WUFDNUJuQiw2Q0FBQ0EsQ0FBQyxrQkFBa0JxQixLQUFLO1lBQ3pCckIsNkNBQUNBLENBQUMsb0JBQW9Cb0IsSUFBSSxDQUFDO1FBQzdCLE9BQ0ssSUFBSUQsY0FBY0ksTUFBTSxHQUFHLEdBQUc7WUFDakN2Qiw2Q0FBQ0EsQ0FBQyxrQkFBa0JxQixLQUFLO1lBQ3pCckIsNkNBQUNBLENBQUMsb0JBQW9Cb0IsSUFBSSxDQUFDO1FBQzdCLE9BQ0ssSUFBSSxDQUFDSSxjQUFjTCxnQkFBZ0I7WUFDdENuQiw2Q0FBQ0EsQ0FBQyxrQkFBa0JxQixLQUFLO1lBQ3pCckIsNkNBQUNBLENBQUMsb0JBQW9Cb0IsSUFBSSxDQUFDO1FBQzdCLE9BQ0s7WUFDSCxzQ0FBc0M7WUFFdEMsOEJBQThCO1lBRTlCLE1BQU1LLE9BQU87Z0JBQUNDO2dCQUFPQztZQUFRO1lBRTdCLE1BQU1DLFNBQVMsTUFBTTdCLDZDQUFLQSxDQUFDOEIsSUFBSSxDQUFDLDRDQUE0Q0o7WUFFNUVLLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksSUFBSTtZQUd2QixNQUFNTixRQUFXVDtZQUNqQixNQUFNVSxXQUFXUjtZQUVqQmpCLHVEQUFTQSxDQUFDO2dCQUFDd0I7Z0JBQU9DO1lBQVEsR0FBR00sSUFBSSxDQUFDQyxDQUFBQTtnQkFDaENKLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksSUFBSTtZQUN6QixHQUFHRyxLQUFLLENBQUNDLENBQUFBO2dCQUNQcEMsNkNBQUNBLENBQUMsb0JBQW9Cb0IsSUFBSSxDQUFDLEdBQXlCLE9BQXRCZ0IsSUFBSUMsUUFBUSxDQUFDTCxJQUFJLENBQUNNLEdBQUc7WUFDckQ7UUFDRjtJQUNGO0lBRUEsTUFBTWhCLGFBQWEsQ0FBQ0k7UUFDbEIsSUFBSWEsVUFBVSxJQUFJQyxPQUFPO1FBRXpCLE9BQU9ELFFBQVFFLElBQUksQ0FBQ2Y7SUFDdEI7SUFFQSxNQUFNZ0IsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUksZ0JBQWdCRixJQUFJLENBQUNFLGFBQWEsZUFBZUYsSUFBSSxDQUFDRSxXQUFXO1lBQ25FLE9BQU87UUFDVDtJQUNGO0lBRUEsTUFBTW5CLGdCQUFnQixDQUFDRztRQUNyQixJQUFJLEtBQUtjLElBQUksQ0FBQ2QsYUFBYSxRQUFRYyxJQUFJLENBQUNkLGFBQWEsUUFBUWMsSUFBSSxDQUFDZCxXQUFXO1lBQzNFLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDOzs0QkFBRzswQ0FBYSw4REFBQ0M7MENBQUs7Ozs7Ozs7Ozs7OztrQ0FDdkIsOERBQUNIO2tDQUNDLDRFQUFDSTs0QkFBTUMsTUFBSzs0QkFBT3JDLElBQUc7NEJBQWFzQyxhQUFZOzRCQUFRQyxjQUFhOzs7Ozs7Ozs7OztrQ0FFdEUsOERBQUNQO2tDQUNDLDRFQUFDSTs0QkFBTUMsTUFBSzs0QkFBV3JDLElBQUc7NEJBQWdCc0MsYUFBWTs0QkFBYUMsY0FBYTs7Ozs7Ozs7Ozs7a0NBRWxGLDhEQUFDQzt3QkFBT1AsV0FBVTt3QkFBTVEsU0FBUyxJQUFNckM7a0NBQWU7Ozs7OztrQ0FDdEQsOERBQUM0Qjt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQXRHd0IxQztLQUFBQSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxXZWJcXGRlcm1hX2V4cHJlc3NfY2xpbmljXFxhcHBcXGxvZ2luXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aExvZ2luIH0gZnJvbSAnLi4vdXRpbHMvYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3R5cGUnKSA9PT0gbnVsbCkge1xyXG4gICAgICAkKCcuY29udGFpbmVyLXByZWxvYWRlci1wYWdlJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnI3VzZXItZW1haWwsICN1c2VyLXBhc3N3b3JkJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCl7IFxyXG4gICAgICB2YXIgaWQgPSBldmVudC5rZXkgfHwgZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKGlkID09IDEzIHx8IGlkID09ICdFbnRlcicpIHtcclxuICAgICAgICBsb2dpblN1Ym1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW5TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyX2VtYWlsICAgID0gJCgnI3VzZXItZW1haWwnKS52YWwoKTtcclxuICAgIGNvbnN0IHVzZXJfcGFzc3dvcmQgPSAkKCcjdXNlci1wYXNzd29yZCcpLnZhbCgpO1xyXG5cclxuICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCcnKTtcclxuXHJcbiAgICBpZiAodXNlcl9lbWFpbCA9PSAnJykge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdFbWFpbCB0aWRhayBib2xlaCBrb3NvbmchJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tFbWFpbCh1c2VyX2VtYWlsKSkge1xyXG4gICAgICAkKCcjdXNlci1lbWFpbCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdGb3JtYXQgZW1haWwgc2FsYWghJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VyX3Bhc3N3b3JkID09ICcnKSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgdGlkYWsgYm9sZWgga29zb25nIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlcl9wYXNzd29yZC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICQoJyN1c2VyLXBhc3N3b3JkJykuZm9jdXMoKTtcclxuICAgICAgJCgnLmZvcm0tdmFsaWRhdGlvbicpLmh0bWwoJ0thdGEgc2FuZGkgaGFydXMgdGVyZGlyaSBtaW5pbWFsIDQga2FyYWt0ZXIhJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghY2hlY2tQYXNzd29yZCh1c2VyX3Bhc3N3b3JkKSkge1xyXG4gICAgICAkKCcjdXNlci1wYXNzd29yZCcpLmZvY3VzKCk7XHJcbiAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKCdLYXRhIHNhbmRpIGhhcnVzIHRlcmRpcmkgZGFyaSBodXJ1ZiBrZWNpbCAoYS16KSwgaHVydWYgYmVzYXIgKEEtWikgZGFuIG5vbW9yICgwLTkpIScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0eXBlJywgdHlwZSk7XHJcblxyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuXHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vMTAzLjIyNC4xMDAuMzg6ODAwMS92MS9hdXRoL2xvZ2luXCIsIGJvZHkpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGVtYWlsICAgID0gdXNlcl9lbWFpbDtcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSB1c2VyX3Bhc3N3b3JkO1xyXG5cclxuICAgICAgYXV0aExvZ2luKHtlbWFpbCwgcGFzc3dvcmR9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICQoJy5mb3JtLXZhbGlkYXRpb24nKS5odG1sKGAke2Vyci5yZXNwb25zZS5kYXRhLm1zZ31gKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrRW1haWwgPSAoZW1haWwpID0+IHtcclxuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3LV0rKD86XFwuW1xcdy1dKykqKXwoXCJbXFx3LVxcc10rXCIpKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopKShAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pKTtcclxuXHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSAodXNlcm5hbWUpID0+IHtcclxuICAgIGlmICgvXlthLXpBLVpcXHNdKyQvLnRlc3QodXNlcm5hbWUpIHx8IC9eW2EtekEtWl9dKyQvLnRlc3QodXNlcm5hbWUpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgaWYgKC9cXGQvLnRlc3QocGFzc3dvcmQpICYmIC9bYS16XS8udGVzdChwYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHBhc3N3b3JkKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItbG9naW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbG9naW5cIj5cclxuICAgICAgICAgIDxoMT5EZXJtYSBFeHByZXNzPHNwYW4+Q2xpbmljPC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwidXNlci1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiS2F0YSBTYW5kaVwiIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gbG9naW5TdWJtaXQoKX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIiQiLCJ1c2VFZmZlY3QiLCJhdXRoTG9naW4iLCJQYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm9uIiwiZXZlbnQiLCJpZCIsImtleSIsIndoaWNoIiwia2V5Q29kZSIsImxvZ2luU3VibWl0IiwidXNlcl9lbWFpbCIsInZhbCIsInVzZXJfcGFzc3dvcmQiLCJodG1sIiwiZm9jdXMiLCJjaGVja0VtYWlsIiwibGVuZ3RoIiwiY2hlY2tQYXNzd29yZCIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzdWx0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJtc2ciLCJwYXR0ZXJuIiwiUmVnRXhwIiwidGVzdCIsImNoZWNrVXNlcm5hbWUiLCJ1c2VybmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/utils/axios.js":
/*!****************************!*\
  !*** ./app/utils/axios.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});