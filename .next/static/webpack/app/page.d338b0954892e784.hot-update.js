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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const services = [\n        {\n            title: \"AI Chatbots\",\n            description: \"Our AI agents are highly customizable and can integrate seamlessly with any platform that has a connection gateway. With extremely fast turnaround times. Our agents can be built with OpenAI, Claude, Gemini, and more!\",\n            imgSrc: \"/NewPhoto.png\"\n        },\n        {\n            title: \"Custom Workflow Automations\",\n            description: \"Have a custom CRM or static processes slowing you down? Our experts will analyze your workflow and implement custom software solutions infused with automation to eliminate bottlenecks and boost efficiency.\",\n            imgSrc: \"/automation.svg\"\n        }\n    ];\n    // Create arrays of hooks\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    // Scroll handlers\n    const handleScrollConsultation = ()=>{\n        document.getElementById(\"consultation\").scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollContactUs = ()=>{\n        document.getElementById(\"contact-us\").scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 58,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: handleScrollConsultation,\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 64,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDYjtBQUNtQjtBQUNHO0FBRXhELE1BQU1NLGtCQUFrQjtJQUNwQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUFFRixTQUFTO1FBQUdDLEdBQUc7SUFBRTtBQUNoQztBQUVlLFNBQVNFOzs7SUFFcEIsTUFBTUMsV0FBVztRQUNiO1lBQ0lDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1FBQ1o7UUFDQTtZQUNJRixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsUUFBUTtRQUNaO0tBQ0g7SUFFRCx5QkFBeUI7SUFDekIsTUFBTUMsZ0JBQWdCSixTQUFTSyxHQUFHLEtBQUM7O1FBQU1iLE9BQUFBLDJEQUFZQTtJQUFDOztZQUFiQSx1REFBWUE7OztJQUNyRCxNQUFNYyxrQkFBa0JOLFNBQVNLLEdBQUcsS0FBQzs7UUFBTVosT0FBQUEsc0VBQVNBLENBQUM7WUFBRWMsYUFBYTtZQUFNQyxXQUFXO1FBQUk7SUFBQzs7WUFBL0NmLGtFQUFTQTs7O0lBRXBESCxnREFBU0EsQ0FBQztRQUNOYyxjQUFjSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7WUFDN0IsSUFBSUwsZUFBZSxDQUFDSyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUMzQkQsU0FBU0UsS0FBSyxDQUFDO1lBQ25CO1FBQ0o7SUFDSixHQUFHO1FBQUNSO1FBQWVFO0tBQWdCO0lBRW5DLGtCQUFrQjtJQUNsQixNQUFNTywyQkFBMkI7UUFDN0JDLFNBQVNDLGNBQWMsQ0FBQyxnQkFBZ0JDLGNBQWMsQ0FBQztZQUFFQyxVQUFVO1FBQVM7SUFDaEY7SUFFQSxNQUFNQyx3QkFBd0I7UUFDMUJKLFNBQVNDLGNBQWMsQ0FBQyxjQUFjQyxjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO0lBQzlFO0lBRUEscUJBQ0ksOERBQUNFO1FBQVFDLElBQUc7UUFBZUMsV0FBVTs7MEJBQ2pDLDhEQUFDQztnQkFDR0QsV0FBVTswQkFDViw0RUFBQ0U7b0JBQUtGLFdBQVU7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ0M7Z0JBQUlELFdBQVk7O2tDQUViLDhEQUFDRzt3QkFBR0gsV0FBVTs7NEJBQWtFOzBDQUN6RCw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQThCOzs7Ozs7Ozs7Ozs7a0NBRXJFLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDVnJCLFNBQVNLLEdBQUcsQ0FBQyxDQUFDb0IsU0FBU2Q7NEJBQ3BCLE1BQU0sQ0FBQ2UsSUFBSSxHQUFHcEIsZUFBZSxDQUFDSyxNQUFNOzRCQUNwQyxxQkFDSSw4REFBQ3BCLGlEQUFNQSxDQUFDK0IsR0FBRztnQ0FFUEQsV0FBVTtnQ0FDVkssS0FBS0E7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLFNBQVN4QixhQUFhLENBQUNPLE1BQU07Z0NBQzdCa0IsVUFBVW5DO2dDQUNWb0MsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBS0MsT0FBT3JCLFFBQVE7Z0NBQUk7O2tEQUVoRCw4REFBQ1c7d0NBQUlELFdBQVU7a0RBQ1gsNEVBQUNqQyxrREFBS0E7NENBQ0Y2QyxLQUFLUixRQUFRdEIsTUFBTTs0Q0FDbkIrQixLQUFLVCxRQUFReEIsS0FBSzs0Q0FDbEJrQyxRQUFPOzRDQUNQQyxXQUFVOzRDQUNWZixXQUFVOzRDQUNWZ0IsU0FBUTs7Ozs7Ozs7Ozs7a0RBR2hCLDhEQUFDZjt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNpQjtnREFBR2pCLFdBQVU7MERBQW1ESSxRQUFReEIsS0FBSzs7Ozs7OzBEQUM5RSw4REFBQ3NDO2dEQUFFbEIsV0FBVTswREFBc0RJLFFBQVF2QixXQUFXOzs7Ozs7MERBQ3RGLDhEQUFDb0I7Z0RBQUlELFdBQVU7MERBQ1gsNEVBQUNoQywwREFBWUE7b0RBQUNtRCxTQUFRO29EQUFTQyxTQUFTNUI7OERBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBdEJyRUY7Ozs7O3dCQTZCakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQXRGd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VydmljZXMuanM/YWMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBDbGllbnRCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmNvbnN0IHNlcnZpY2VWYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG5cbiAgICBjb25zdCBzZXJ2aWNlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBSSBDaGF0Ym90cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ091ciBBSSBhZ2VudHMgYXJlIGhpZ2hseSBjdXN0b21pemFibGUgYW5kIGNhbiBpbnRlZ3JhdGUgc2VhbWxlc3NseSB3aXRoIGFueSBwbGF0Zm9ybSB0aGF0IGhhcyBhIGNvbm5lY3Rpb24gZ2F0ZXdheS4gV2l0aCBleHRyZW1lbHkgZmFzdCB0dXJuYXJvdW5kIHRpbWVzLiBPdXIgYWdlbnRzIGNhbiBiZSBidWlsdCB3aXRoIE9wZW5BSSwgQ2xhdWRlLCBHZW1pbmksIGFuZCBtb3JlIScsXG4gICAgICAgICAgICBpbWdTcmM6ICcvTmV3UGhvdG8ucG5nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDdXN0b20gV29ya2Zsb3cgQXV0b21hdGlvbnMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIYXZlIGEgY3VzdG9tIENSTSBvciBzdGF0aWMgcHJvY2Vzc2VzIHNsb3dpbmcgeW91IGRvd24/IE91ciBleHBlcnRzIHdpbGwgYW5hbHl6ZSB5b3VyIHdvcmtmbG93IGFuZCBpbXBsZW1lbnQgY3VzdG9tIHNvZnR3YXJlIHNvbHV0aW9ucyBpbmZ1c2VkIHdpdGggYXV0b21hdGlvbiB0byBlbGltaW5hdGUgYm90dGxlbmVja3MgYW5kIGJvb3N0IGVmZmljaWVuY3kuJyxcbiAgICAgICAgICAgIGltZ1NyYzogJy9hdXRvbWF0aW9uLnN2ZycsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgaG9va3NcbiAgICBjb25zdCBjb250cm9sc0FycmF5ID0gc2VydmljZXMubWFwKCgpID0+IHVzZUFuaW1hdGlvbigpKTtcbiAgICBjb25zdCBpblZpZXdSZWZzQXJyYXkgPSBzZXJ2aWNlcy5tYXAoKCkgPT4gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUsIHRocmVzaG9sZDogMC4xIH0pKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xzQXJyYXkuZm9yRWFjaCgoY29udHJvbHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5WaWV3UmVmc0FycmF5W2luZGV4XVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtjb250cm9sc0FycmF5LCBpblZpZXdSZWZzQXJyYXldKTtcblxuICAgIC8vIFNjcm9sbCBoYW5kbGVyc1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbENvbnN1bHRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnN1bHRhdGlvbicpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGxDb250YWN0VXMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXVzJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibmV4dC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwicHktMjAgYmctYmFja2dyb3VuZCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgaXRlbXMtY2VudGVyIHB4LTQgcHktMiBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdGV4dC1ibGFjayB1cHBlcmNhc2UgYmctWyNEQkRDREZdIHJvdW5kZWQtbGcgc2VsZWN0LW5vbmUgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5XaGF0IFdlIE9mZmVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBoLWZ1bGwgbXgtYXV0byBweC00YH0+XG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ub3JtYWwgbWItMTAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIFJldm9sdXRpb25pemUgWW91ciA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0LTIgaXRhbGljIHByLTRcIj5Xb3JrRmxvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3JlZl0gPSBpblZpZXdSZWZzQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0FycmF5W2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3NlcnZpY2VWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41LCBkZWxheTogaW5kZXggKiAwLjMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggc206aC02NCBsZzpoLTgwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NlcnZpY2UuaW1nU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+e3NlcnZpY2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGcgdGV4dC1ncmF5LTcwMCBtYi02XCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWVudEJ1dHRvbiB2YXJpYW50PVwiZmlsbGVkXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsQ29uc3VsdGF0aW9ufT5HZXQgU3RhcnRlZDwvQ2xpZW50QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFeGFtcGxlIG9mIGFkZGluZyBhIHNlY29uZCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDbGllbnRCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17aGFuZGxlU2Nyb2xsQ29udGFjdFVzfT5MZWFybiBNb3JlPC9DbGllbnRCdXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2xpZW50QnV0dG9uIiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3Iiwic2VydmljZVZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwiU2VydmljZXMiLCJzZXJ2aWNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdTcmMiLCJjb250cm9sc0FycmF5IiwibWFwIiwiaW5WaWV3UmVmc0FycmF5IiwidHJpZ2dlck9uY2UiLCJ0aHJlc2hvbGQiLCJmb3JFYWNoIiwiY29udHJvbHMiLCJpbmRleCIsInN0YXJ0IiwiaGFuZGxlU2Nyb2xsQ29uc3VsdGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVTY3JvbGxDb250YWN0VXMiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDIiLCJzZXJ2aWNlIiwicmVmIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwibG9hZGluZyIsImgzIiwicCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});