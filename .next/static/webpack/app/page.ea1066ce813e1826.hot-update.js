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

/***/ "(app-pages-browser)/./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    // const [navbarHeight, setNavbarHeight] = useState(0);\n    //\n    // useEffect(() => {\n    //     const height = document.getElementById('nav-bar').offsetHeight;\n    //     setNavbarHeight(height);\n    // }, []);\n    const services = [\n        {\n            title: \"Customizabl AI Agents\",\n            description: \"Revolutionize your business with AI Assistants providing 24/7 Customer Support and more.\",\n            imgSrc: \"/Chat1.png\"\n        },\n        {\n            title: \"AI-Driven Workflow Automations\",\n            description: \"Enhance efficiency with automated processes tailored to your business needs.\",\n            imgSrc: \"/automation.svg\"\n        }\n    ];\n    // Create arrays of hooks\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 58,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: ()=>{},\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 64,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDSDtBQUNTO0FBQ0c7QUFFeEQsTUFBTU8sa0JBQWtCO0lBQ3BCQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFHO0lBQzVCQyxTQUFTO1FBQUVGLFNBQVM7UUFBR0MsR0FBRztJQUFFO0FBQ2hDO0FBRWUsU0FBU0U7OztJQUNwQix1REFBdUQ7SUFDdkQsRUFBRTtJQUNGLG9CQUFvQjtJQUNwQixzRUFBc0U7SUFDdEUsK0JBQStCO0lBQy9CLFVBQVU7SUFFVixNQUFNQyxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFFBQVE7UUFDWjtRQUNBO1lBQ0lGLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1FBQ1o7S0FFSDtJQUVELHlCQUF5QjtJQUN6QixzREFBc0Q7SUFDdEQsTUFBTUMsZ0JBQWdCSixTQUFTSyxHQUFHLEtBQUM7O1FBQU1iLE9BQUFBLDJEQUFZQTtJQUFDOztZQUFiQSx1REFBWUE7OztJQUNyRCxzREFBc0Q7SUFDdEQsTUFBTWMsa0JBQWtCTixTQUFTSyxHQUFHLEtBQUM7O1FBQU1aLE9BQUFBLHNFQUFTQSxDQUFDO1lBQUVjLGFBQWE7WUFBTUMsV0FBVztRQUFJO0lBQUM7O1lBQS9DZixrRUFBU0E7OztJQUVwREosZ0RBQVNBLENBQUM7UUFDTmUsY0FBY0ssT0FBTyxDQUFDLENBQUNDLFVBQVVDO1lBQzdCLElBQUlMLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDM0JELFNBQVNFLEtBQUssQ0FBQztZQUNuQjtRQUNKO0lBQ0osR0FBRztRQUFDUjtRQUFlRTtLQUFnQjtJQUVuQyxxQkFDSSw4REFBQ087UUFBUUMsSUFBRztRQUFlQyxXQUFVOzswQkFDakMsOERBQUNDO2dCQUNHRCxXQUFVOzBCQUNWLDRFQUFDRTtvQkFBS0YsV0FBVTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDQztnQkFBSUQsV0FBWTs7a0NBRWIsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBa0U7MENBQ3pELDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBOEI7Ozs7Ozs7Ozs7OztrQ0FFckUsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNWZixTQUFTSyxHQUFHLENBQUMsQ0FBQ2MsU0FBU1I7NEJBQ3BCLE1BQU0sQ0FBQ1MsSUFBSSxHQUFHZCxlQUFlLENBQUNLLE1BQU07NEJBQ3BDLHFCQUNJLDhEQUFDcEIsaURBQU1BLENBQUN5QixHQUFHO2dDQUVQRCxXQUFVO2dDQUNWSyxLQUFLQTtnQ0FDTEMsU0FBUTtnQ0FDUkMsU0FBU2xCLGFBQWEsQ0FBQ08sTUFBTTtnQ0FDN0JZLFVBQVU3QjtnQ0FDVjhCLFlBQVk7b0NBQUNDLFVBQVU7b0NBQUtDLE9BQU9mLFFBQVE7Z0NBQUc7O2tEQUU5Qyw4REFBQ0s7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUM1QixrREFBS0E7NENBQ0Z3QyxLQUFLUixRQUFRaEIsTUFBTTs0Q0FDbkJ5QixLQUFLVCxRQUFRbEIsS0FBSzs0Q0FDbEI0QixRQUFPOzRDQUNQQyxXQUFVOzRDQUNWZixXQUFVOzRDQUNWZ0IsU0FBUTs7Ozs7Ozs7Ozs7a0RBR2hCLDhEQUFDZjt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNpQjtnREFBR2pCLFdBQVU7MERBQW1ESSxRQUFRbEIsS0FBSzs7Ozs7OzBEQUM5RSw4REFBQ2dDO2dEQUFFbEIsV0FBVTswREFBc0RJLFFBQVFqQixXQUFXOzs7Ozs7MERBQ3RGLDhEQUFDYztnREFBSUQsV0FBVTswREFDWCw0RUFBQzNCLDBEQUFZQTtvREFBQzhDLFNBQVE7b0RBQVNDLFNBQVMsS0FDeEM7OERBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkF2Qk54Qjs7Ozs7d0JBNEJqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBckZ3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJ2aWNlcy5qcz9hYzMxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IENsaWVudEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmNvbnN0IHNlcnZpY2VWYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG4gICAgLy8gY29uc3QgW25hdmJhckhlaWdodCwgc2V0TmF2YmFySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICAgIC8vXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1iYXInKS5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gICAgIHNldE5hdmJhckhlaWdodChoZWlnaHQpO1xuICAgIC8vIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlcnZpY2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0N1c3RvbWl6YWJsIEFJIEFnZW50cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Jldm9sdXRpb25pemUgeW91ciBidXNpbmVzcyB3aXRoIEFJIEFzc2lzdGFudHMgcHJvdmlkaW5nIDI0LzcgQ3VzdG9tZXIgU3VwcG9ydCBhbmQgbW9yZS4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL0NoYXQxLnBuZycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQUktRHJpdmVuIFdvcmtmbG93IEF1dG9tYXRpb25zJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW5oYW5jZSBlZmZpY2llbmN5IHdpdGggYXV0b21hdGVkIHByb2Nlc3NlcyB0YWlsb3JlZCB0byB5b3VyIGJ1c2luZXNzIG5lZWRzLicsXG4gICAgICAgICAgICBpbWdTcmM6ICcvYXV0b21hdGlvbi5zdmcnLFxuICAgICAgICB9LFxuICAgICAgIFxuICAgIF07XG5cbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIGhvb2tzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgY29udHJvbHNBcnJheSA9IHNlcnZpY2VzLm1hcCgoKSA9PiB1c2VBbmltYXRpb24oKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaW5WaWV3UmVmc0FycmF5ID0gc2VydmljZXMubWFwKCgpID0+IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlLCB0aHJlc2hvbGQ6IDAuMSB9KSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb250cm9sc0FycmF5LmZvckVhY2goKGNvbnRyb2xzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluVmlld1JlZnNBcnJheVtpbmRleF1bMV0pIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbY29udHJvbHNBcnJheSwgaW5WaWV3UmVmc0FycmF5XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBpZD1cIm5leHQtc2VjdGlvblwiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWJhY2tncm91bmQgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGl0ZW1zLWNlbnRlciBweC00IHB5LTIgZm9udC1zYW5zIHRleHQteHMgZm9udC1ib2xkIHRleHQtYmxhY2sgdXBwZXJjYXNlIGJnLVsjREJEQ0RGXSByb3VuZGVkLWxnIHNlbGVjdC1ub25lIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+V2hhdCBXZSBPZmZlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgaC1mdWxsIG14LWF1dG8gcHgtNGB9PlxuXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtbm9ybWFsIG1iLTEwIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICBSZXZvbHV0aW9uaXplIFlvdXIgPHNwYW4gY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dC0yIGl0YWxpYyBwci00XCI+V29ya0Zsb3c8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyZWZdID0gaW5WaWV3UmVmc0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNBcnJheVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtzZXJ2aWNlVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMS41LCBkZWxheTogaW5kZXggKiAwLjN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBzbTpoLTY0IGxnOmgtODAgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VydmljZS5pbWdTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzZXJ2aWNlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj57c2VydmljZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1sZyB0ZXh0LWdyYXktNzAwIG1iLTZcIj57c2VydmljZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xpZW50QnV0dG9uIHZhcmlhbnQ9XCJmaWxsZWRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R2V0IFN0YXJ0ZWQ8L0NsaWVudEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNsaWVudEJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3Iiwic2VydmljZVZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwiU2VydmljZXMiLCJzZXJ2aWNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdTcmMiLCJjb250cm9sc0FycmF5IiwibWFwIiwiaW5WaWV3UmVmc0FycmF5IiwidHJpZ2dlck9uY2UiLCJ0aHJlc2hvbGQiLCJmb3JFYWNoIiwiY29udHJvbHMiLCJpbmRleCIsInN0YXJ0Iiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwic2VydmljZSIsInJlZiIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImxvYWRpbmciLCJoMyIsInAiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});