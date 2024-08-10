"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// components/Footer.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Footer() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth < 768);\n        };\n        handleResize(); // Check on mount\n        window.addEventListener(\"resize\", handleResize); // Check on resize\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"relative w-full flex flex-col items-center justify-between text-center bg-gradient-to-r from-blue-800 to-purple-800 text-white overflow-hidden min-h-[100px] md:min-h-[200px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/footer.svg\",\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    quality: 100,\n                    alt: \"Background\",\n                    className: \"parallax\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-full justify-between relative z-10 mx-auto px-8 py-4 md:py-8 w-full max-w-7xl\",\n                children: [\n                    !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl\",\n                                children: \"ClearStackAI\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg text-muted\",\n                                children: \"CWe Build Next Generation B2B AI Solutions\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0 md:space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"www.google.com\",\n                                className: \"hover:underline text-sm md:text-xl\",\n                                children: \"Terms of Service\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"hover:underline text-sm md:text-xl md:ml-4\",\n                                children: \"Privacy Policy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ()=>window.scrollTo({\n                                        top: 0,\n                                        behavior: \"smooth\"\n                                    }),\n                                variant: \"outlined\",\n                                children: \"Back To Top\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Footer.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Footer, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7O0FBRVE7QUFDVTtBQUNHO0FBRTdCLFNBQVNJOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTUssZUFBZTtZQUNqQkQsWUFBWUUsT0FBT0MsVUFBVSxHQUFHO1FBQ3BDO1FBRUFGLGdCQUFnQixpQkFBaUI7UUFDakNDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVILGVBQWUsa0JBQWtCO1FBRW5FLE9BQU87WUFDSEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0s7UUFBT0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDYixrREFBS0E7b0JBQ0ZlLEtBQUk7b0JBQ0pDLFFBQU87b0JBQ1BDLFdBQVU7b0JBQ1ZDLFNBQVM7b0JBQ1RDLEtBQUk7b0JBQ0pOLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUNWLENBQUNSLDBCQUNFLDhEQUFDUzs7MENBQ0csOERBQUNNO2dDQUFFUCxXQUFVOzBDQUFXOzs7Ozs7MENBQ3hCLDhEQUFDTztnQ0FBRVAsV0FBVTswQ0FBcUI7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ1E7Z0NBQUVDLE1BQUs7Z0NBQWlCVCxXQUFVOzBDQUFxQzs7Ozs7OzBDQUN4RSw4REFBQ1E7Z0NBQUVDLE1BQUs7Z0NBQUlULFdBQVU7MENBQTZDOzs7Ozs7NEJBQ2xFLENBQUNSLDBCQUNFLDhEQUFDSiwwREFBTUE7Z0NBQUNzQixTQUFTLElBQU1mLE9BQU9nQixRQUFRLENBQUM7d0NBQUVDLEtBQUs7d0NBQUdDLFVBQVU7b0NBQVM7Z0NBQUlDLFNBQVM7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1ySDtHQTdDd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9lMWFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvRm9vdGVyLmpzXG4ndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldElzTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KTtcbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVSZXNpemUoKTsgLy8gQ2hlY2sgb24gbW91bnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7IC8vIENoZWNrIG9uIHJlc2l6ZVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtODAwIHRvLXB1cnBsZS04MDAgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gbWluLWgtWzEwMHB4XSBtZDptaW4taC1bMjAwcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Zvb3Rlci5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmUgei0xMCBteC1hdXRvIHB4LTggcHktNCBtZDpweS04IHctZnVsbCBtYXgtdy03eGxcIj5cbiAgICAgICAgICAgICAgICB7IWlzTW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+Q2xlYXJTdGFja0FJPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkXCI+Q1dlIEJ1aWxkIE5leHQgR2VuZXJhdGlvbiBCMkIgQUkgU29sdXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBzcGFjZS15LTIgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwid3d3Lmdvb2dsZS5jb21cIiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgdGV4dC1zbSBtZDp0ZXh0LXhsXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmUgdGV4dC1zbSBtZDp0ZXh0LXhsIG1kOm1sLTRcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgeyFpc01vYmlsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfSB2YXJpYW50PXsnb3V0bGluZWQnfT5CYWNrIFRvIFRvcDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJxdWFsaXR5IiwiYWx0IiwicCIsImEiLCJocmVmIiwib25DbGljayIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Footer.js\n"));

/***/ })

});