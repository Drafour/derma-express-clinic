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

/***/ "(app-pages-browser)/./app/utils/axios.js":
/*!****************************!*\
  !*** ./app/utils/axios.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCustomer: () => (/* binding */ addCustomer),\n/* harmony export */   addQueue: () => (/* binding */ addQueue),\n/* harmony export */   authLogin: () => (/* binding */ authLogin),\n/* harmony export */   getAdmission: () => (/* binding */ getAdmission),\n/* harmony export */   getCustomer: () => (/* binding */ getCustomer),\n/* harmony export */   getQueue: () => (/* binding */ getQueue)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst dermaster_url = 'http://103.224.100.38:8001/v1';\nconst authLogin = (body)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(dermaster_url, \"/auth/login\"), body);\n};\nconst getQueue = (token, order, page, take)=>{\n    const config = {\n        headers: {\n            'Authorization': \"Bearer \".concat(token)\n        }\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(dermaster_url, \"/queue?order=\").concat(order, \"&page=\").concat(page, \"&take=\").concat(take), config);\n};\nconst addQueue = (token, body)=>{\n    const config = {\n        headers: {\n            'Authorization': \"Bearer \".concat(token)\n        }\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(dermaster_url, \"/queue\"), body, config);\n};\nconst getAdmission = (token, order, page, take)=>{\n    const config = {\n        headers: {\n            'Authorization': \"Bearer \".concat(token)\n        }\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(dermaster_url, \"/admission?order=\").concat(order, \"&page=\").concat(page, \"&take=\").concat(take), config);\n};\nconst getCustomer = (token, order, page, take)=>{\n    const config = {\n        headers: {\n            'Authorization': \"Bearer \".concat(token)\n        }\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(dermaster_url, \"/customer?order=\").concat(order, \"&page=\").concat(page, \"&take=\").concat(take), config);\n};\nconst addCustomer = (token, body)=>{\n    const config = {\n        headers: {\n            'Authorization': \"Bearer \".concat(token)\n        }\n    };\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(dermaster_url, \"/customer\"), body, config);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9heGlvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGdCQUFnQjtBQUVmLE1BQU1DLFlBQVksQ0FBQ0M7SUFDeEIsT0FBT0gsNkNBQUtBLENBQUNJLElBQUksQ0FBQyxHQUFpQixPQUFkSCxlQUFjLGdCQUFjRTtBQUNuRCxFQUFDO0FBRU0sTUFBTUUsV0FBVyxDQUFDQyxPQUFPQyxPQUFPQyxNQUFNQztJQUMzQyxNQUFNQyxTQUFTO1FBQ2JDLFNBQVM7WUFDUCxpQkFBaUIsVUFBZ0IsT0FBTkw7UUFDN0I7SUFDRjtJQUVBLE9BQU9OLDZDQUFLQSxDQUFDWSxHQUFHLENBQUMsR0FBZ0NMLE9BQTdCTixlQUFjLGlCQUE2Qk8sT0FBZEQsT0FBTSxVQUFxQkUsT0FBYkQsTUFBSyxVQUFhLE9BQUxDLE9BQVFDO0FBQ3RGLEVBQUM7QUFFTSxNQUFNRyxXQUFXLENBQUNQLE9BQU9IO0lBQzlCLE1BQU1PLFNBQVM7UUFDYkMsU0FBUztZQUNQLGlCQUFpQixVQUFnQixPQUFOTDtRQUM3QjtJQUNGO0lBRUEsT0FBT04sNkNBQUtBLENBQUNJLElBQUksQ0FBQyxHQUFpQixPQUFkSCxlQUFjLFdBQVNFLE1BQU1PO0FBQ3BELEVBQUM7QUFFTSxNQUFNSSxlQUFlLENBQUNSLE9BQU9DLE9BQU9DLE1BQU1DO0lBQy9DLE1BQU1DLFNBQVM7UUFDYkMsU0FBUztZQUNQLGlCQUFpQixVQUFnQixPQUFOTDtRQUM3QjtJQUNGO0lBRUEsT0FBT04sNkNBQUtBLENBQUNZLEdBQUcsQ0FBQyxHQUFvQ0wsT0FBakNOLGVBQWMscUJBQWlDTyxPQUFkRCxPQUFNLFVBQXFCRSxPQUFiRCxNQUFLLFVBQWEsT0FBTEMsT0FBUUM7QUFDMUYsRUFBQztBQUVNLE1BQU1LLGNBQWMsQ0FBQ1QsT0FBT0MsT0FBT0MsTUFBTUM7SUFDOUMsTUFBTUMsU0FBUztRQUNiQyxTQUFTO1lBQ1AsaUJBQWlCLFVBQWdCLE9BQU5MO1FBQzdCO0lBQ0Y7SUFFQSxPQUFPTiw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLEdBQW1DTCxPQUFoQ04sZUFBYyxvQkFBZ0NPLE9BQWRELE9BQU0sVUFBcUJFLE9BQWJELE1BQUssVUFBYSxPQUFMQyxPQUFRQztBQUN6RixFQUFDO0FBRU0sTUFBTU0sY0FBYyxDQUFDVixPQUFPSDtJQUNqQyxNQUFNTyxTQUFTO1FBQ2JDLFNBQVM7WUFDUCxpQkFBaUIsVUFBZ0IsT0FBTkw7UUFDN0I7SUFDRjtJQUVBLE9BQU9OLDZDQUFLQSxDQUFDSSxJQUFJLENBQUMsR0FBaUIsT0FBZEgsZUFBYyxjQUFZRSxNQUFNTztBQUN2RCxFQUFDIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFdlYlxcZGVybWFfZXhwcmVzc19jbGluaWNcXGFwcFxcdXRpbHNcXGF4aW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGRlcm1hc3Rlcl91cmwgPSAnaHR0cDovLzEwMy4yMjQuMTAwLjM4OjgwMDEvdjEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhMb2dpbiA9IChib2R5KSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7ZGVybWFzdGVyX3VybH0vYXV0aC9sb2dpbmAsIGJvZHkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UXVldWUgPSAodG9rZW4sIG9yZGVyLCBwYWdlLCB0YWtlKSA9PiB7XHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2Rlcm1hc3Rlcl91cmx9L3F1ZXVlP29yZGVyPSR7b3JkZXJ9JnBhZ2U9JHtwYWdlfSZ0YWtlPSR7dGFrZX1gLCBjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUXVldWUgPSAodG9rZW4sIGJvZHkpID0+IHtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2Rlcm1hc3Rlcl91cmx9L3F1ZXVlYCwgYm9keSwgY29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFkbWlzc2lvbiA9ICh0b2tlbiwgb3JkZXIsIHBhZ2UsIHRha2UpID0+IHtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7ZGVybWFzdGVyX3VybH0vYWRtaXNzaW9uP29yZGVyPSR7b3JkZXJ9JnBhZ2U9JHtwYWdlfSZ0YWtlPSR7dGFrZX1gLCBjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tZXIgPSAodG9rZW4sIG9yZGVyLCBwYWdlLCB0YWtlKSA9PiB7XHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2Rlcm1hc3Rlcl91cmx9L2N1c3RvbWVyP29yZGVyPSR7b3JkZXJ9JnBhZ2U9JHtwYWdlfSZ0YWtlPSR7dGFrZX1gLCBjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tZXIgPSAodG9rZW4sIGJvZHkpID0+IHtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2Rlcm1hc3Rlcl91cmx9L2N1c3RvbWVyYCwgYm9keSwgY29uZmlnKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVybWFzdGVyX3VybCIsImF1dGhMb2dpbiIsImJvZHkiLCJwb3N0IiwiZ2V0UXVldWUiLCJ0b2tlbiIsIm9yZGVyIiwicGFnZSIsInRha2UiLCJjb25maWciLCJoZWFkZXJzIiwiZ2V0IiwiYWRkUXVldWUiLCJnZXRBZG1pc3Npb24iLCJnZXRDdXN0b21lciIsImFkZEN1c3RvbWVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/axios.js\n"));

/***/ })

});