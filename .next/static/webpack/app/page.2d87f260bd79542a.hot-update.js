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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const services = [\n        {\n            title: \"AI Chatbots\",\n            description: \"Our AI agents are highly customizable and can integrate seamlessly with any platform that has a connection gateway. With extremely fast turnaround times. Our agents can be built with OpenAI, Claude, Gemini, and more!\",\n            imgSrc: \"/New.png\"\n        },\n        {\n            title: \"Custom Workflow Automations\",\n            description: \"Have a custom CRM or static processes slowing you down? Our experts will analyze your workflow and implement custom software solutions infused with automation to eliminate bottlenecks and boost efficiency.\",\n            imgSrc: \"/automation.svg\"\n        }\n    ];\n    // Create arrays of hooks\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    // Scroll handlers\n    const handleScrollConsultation = ()=>{\n        document.getElementById(\"consultation\").scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollContactUs = ()=>{\n        document.getElementById(\"contact-us\").scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 58,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: handleScrollConsultation,\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 64,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDYjtBQUNtQjtBQUNHO0FBRXhELE1BQU1NLGtCQUFrQjtJQUNwQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUFFRixTQUFTO1FBQUdDLEdBQUc7SUFBRTtBQUNoQztBQUVlLFNBQVNFOzs7SUFFcEIsTUFBTUMsV0FBVztRQUNiO1lBQ0lDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1FBQ1o7UUFDQTtZQUNJRixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsUUFBUTtRQUNaO0tBQ0g7SUFFRCx5QkFBeUI7SUFDekIsTUFBTUMsZ0JBQWdCSixTQUFTSyxHQUFHLEtBQUM7O1FBQU1iLE9BQUFBLDJEQUFZQTtJQUFDOztZQUFiQSx1REFBWUE7OztJQUNyRCxNQUFNYyxrQkFBa0JOLFNBQVNLLEdBQUcsS0FBQzs7UUFBTVosT0FBQUEsc0VBQVNBLENBQUM7WUFBRWMsYUFBYTtZQUFNQyxXQUFXO1FBQUk7SUFBQzs7WUFBL0NmLGtFQUFTQTs7O0lBRXBESCxnREFBU0EsQ0FBQztRQUNOYyxjQUFjSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7WUFDN0IsSUFBSUwsZUFBZSxDQUFDSyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUMzQkQsU0FBU0UsS0FBSyxDQUFDO1lBQ25CO1FBQ0o7SUFDSixHQUFHO1FBQUNSO1FBQWVFO0tBQWdCO0lBRW5DLGtCQUFrQjtJQUNsQixNQUFNTywyQkFBMkI7UUFDN0JDLFNBQVNDLGNBQWMsQ0FBQyxnQkFBZ0JDLGNBQWMsQ0FBQztZQUFFQyxVQUFVO1FBQVM7SUFDaEY7SUFFQSxNQUFNQyx3QkFBd0I7UUFDMUJKLFNBQVNDLGNBQWMsQ0FBQyxjQUFjQyxjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO0lBQzlFO0lBRUEscUJBQ0ksOERBQUNFO1FBQVFDLElBQUc7UUFBZUMsV0FBVTs7MEJBQ2pDLDhEQUFDQztnQkFDR0QsV0FBVTswQkFDViw0RUFBQ0U7b0JBQUtGLFdBQVU7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ0M7Z0JBQUlELFdBQVk7O2tDQUViLDhEQUFDRzt3QkFBR0gsV0FBVTs7NEJBQWtFOzBDQUN6RCw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQThCOzs7Ozs7Ozs7Ozs7a0NBRXJFLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDVnJCLFNBQVNLLEdBQUcsQ0FBQyxDQUFDb0IsU0FBU2Q7NEJBQ3BCLE1BQU0sQ0FBQ2UsSUFBSSxHQUFHcEIsZUFBZSxDQUFDSyxNQUFNOzRCQUNwQyxxQkFDSSw4REFBQ3BCLGlEQUFNQSxDQUFDK0IsR0FBRztnQ0FFUEQsV0FBVTtnQ0FDVkssS0FBS0E7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLFNBQVN4QixhQUFhLENBQUNPLE1BQU07Z0NBQzdCa0IsVUFBVW5DO2dDQUNWb0MsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBS0MsT0FBT3JCLFFBQVE7Z0NBQUk7O2tEQUVoRCw4REFBQ1c7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNqQyxrREFBS0E7NENBQ0Y2QyxLQUFLUixRQUFRdEIsTUFBTTs0Q0FDbkIrQixLQUFLVCxRQUFReEIsS0FBSzs0Q0FDbEJrQyxRQUFPOzRDQUNQQyxXQUFVOzRDQUNWZixXQUFVOzRDQUNWZ0IsU0FBUTs7Ozs7Ozs7Ozs7a0RBR2hCLDhEQUFDZjt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNpQjtnREFBR2pCLFdBQVU7MERBQW1ESSxRQUFReEIsS0FBSzs7Ozs7OzBEQUM5RSw4REFBQ3NDO2dEQUFFbEIsV0FBVTswREFBc0RJLFFBQVF2QixXQUFXOzs7Ozs7MERBQ3RGLDhEQUFDb0I7Z0RBQUlELFdBQVU7MERBQ1gsNEVBQUNoQywwREFBWUE7b0RBQUNtRCxTQUFRO29EQUFTQyxTQUFTNUI7OERBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBdEJyRUY7Ozs7O3dCQTZCakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQXRGd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VydmljZXMuanM/YWMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBDbGllbnRCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmNvbnN0IHNlcnZpY2VWYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG5cbiAgICBjb25zdCBzZXJ2aWNlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBSSBDaGF0Ym90cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBBSSBhZ2VudHMgYXJlIGhpZ2hseSBjdXN0b21pemFibGUgYW5kIGNhbiBpbnRlZ3JhdGUgc2VhbWxlc3NseSB3aXRoIGFueSBwbGF0Zm9ybSB0aGF0IGhhcyBhIGNvbm5lY3Rpb24gZ2F0ZXdheS4gV2l0aCBleHRyZW1lbHkgZmFzdCB0dXJuYXJvdW5kIHRpbWVzLiBPdXIgYWdlbnRzIGNhbiBiZSBidWlsdCB3aXRoIE9wZW5BSSwgQ2xhdWRlLCBHZW1pbmksIGFuZCBtb3JlIScsXG4gICAgICAgICAgICBpbWdTcmM6ICcvTmV3LnBuZycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3VzdG9tIFdvcmtmbG93IEF1dG9tYXRpb25zJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGF2ZSBhIGN1c3RvbSBDUk0gb3Igc3RhdGljIHByb2Nlc3NlcyBzbG93aW5nIHlvdSBkb3duPyBPdXIgZXhwZXJ0cyB3aWxsIGFuYWx5emUgeW91ciB3b3JrZmxvdyBhbmQgaW1wbGVtZW50IGN1c3RvbSBzb2Z0d2FyZSBzb2x1dGlvbnMgaW5mdXNlZCB3aXRoIGF1dG9tYXRpb24gdG8gZWxpbWluYXRlIGJvdHRsZW5lY2tzIGFuZCBib29zdCBlZmZpY2llbmN5LicsXG4gICAgICAgICAgICBpbWdTcmM6ICcvYXV0b21hdGlvbi5zdmcnLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIGhvb2tzXG4gICAgY29uc3QgY29udHJvbHNBcnJheSA9IHNlcnZpY2VzLm1hcCgoKSA9PiB1c2VBbmltYXRpb24oKSk7XG4gICAgY29uc3QgaW5WaWV3UmVmc0FycmF5ID0gc2VydmljZXMubWFwKCgpID0+IHVzZUluVmlldyh7IHRyaWdnZXJPbmNlOiB0cnVlLCB0aHJlc2hvbGQ6IDAuMSB9KSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb250cm9sc0FycmF5LmZvckVhY2goKGNvbnRyb2xzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluVmlld1JlZnNBcnJheVtpbmRleF1bMV0pIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbY29udHJvbHNBcnJheSwgaW5WaWV3UmVmc0FycmF5XSk7XG5cbiAgICAvLyBTY3JvbGwgaGFuZGxlcnNcbiAgICBjb25zdCBoYW5kbGVTY3JvbGxDb25zdWx0YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zdWx0YXRpb24nKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsQ29udGFjdFVzID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC11cycpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBpZD1cIm5leHQtc2VjdGlvblwiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWJhY2tncm91bmQgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGl0ZW1zLWNlbnRlciBweC00IHB5LTIgZm9udC1zYW5zIHRleHQteHMgZm9udC1ib2xkIHRleHQtYmxhY2sgdXBwZXJjYXNlIGJnLVsjREJEQ0RGXSByb3VuZGVkLWxnIHNlbGVjdC1ub25lIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+V2hhdCBXZSBPZmZlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgaC1mdWxsIG14LWF1dG8gcHgtNGB9PlxuXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtbm9ybWFsIG1iLTEwIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICBSZXZvbHV0aW9uaXplIFlvdXIgPHNwYW4gY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dC0yIGl0YWxpYyBwci00XCI+V29ya0Zsb3c8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyZWZdID0gaW5WaWV3UmVmc0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHNBcnJheVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtzZXJ2aWNlVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNSwgZGVsYXk6IGluZGV4ICogMC4zIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IHNtOmgtNjQgbGc6aC04MCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlLmltZ1NyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlcnZpY2UudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPntzZXJ2aWNlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWxnIHRleHQtZ3JheS03MDAgbWItNlwiPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGllbnRCdXR0b24gdmFyaWFudD1cImZpbGxlZFwiIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbENvbnN1bHRhdGlvbn0+R2V0IFN0YXJ0ZWQ8L0NsaWVudEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRXhhbXBsZSBvZiBhZGRpbmcgYSBzZWNvbmQgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2xpZW50QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbENvbnRhY3RVc30+TGVhcm4gTW9yZTwvQ2xpZW50QnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNsaWVudEJ1dHRvbiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsInNlcnZpY2VWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsIlNlcnZpY2VzIiwic2VydmljZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nU3JjIiwiY29udHJvbHNBcnJheSIsIm1hcCIsImluVmlld1JlZnNBcnJheSIsInRyaWdnZXJPbmNlIiwidGhyZXNob2xkIiwiZm9yRWFjaCIsImNvbnRyb2xzIiwiaW5kZXgiLCJzdGFydCIsImhhbmRsZVNjcm9sbENvbnN1bHRhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlU2Nyb2xsQ29udGFjdFVzIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwic2VydmljZSIsInJlZiIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImxvYWRpbmciLCJoMyIsInAiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});