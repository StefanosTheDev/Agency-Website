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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const services = [\n        {\n            title: \"AI Assistants\",\n            description: \"Revolutionize your business with AI Assistants providing 24/7 Customer Support and more.\",\n            imgSrc: \"/Chatbot_Video.mp4\",\n            isVideo: true\n        },\n        {\n            title: \"Automated Process Optimization\",\n            description: \"Enhance efficiency with automated processes tailored to your business needs.\",\n            imgSrc: \"/automation.svg\",\n            isVideo: false\n        },\n        {\n            title: \"Enterprise Consulting\",\n            description: \"Get expert advice and strategies to elevate your business operations.\",\n            imgSrc: \"/enterprise.svg\",\n            isVideo: false\n        },\n        {\n            title: \"AI Driven Software Development\",\n            description: \"Leverage AI for innovative and effective software solutions.\",\n            imgSrc: \"/software.svg\",\n            isVideo: false\n        }\n    ];\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 62,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: service.isVideo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                            src: service.imgSrc,\n                                            muted: true,\n                                            autoPlay: true,\n                                            loop: true,\n                                            className: \"w-full h-full object-cover\",\n                                            style: {\n                                                width: \"200%\",\n                                                height: \"300px\",\n                                                pointerEvents: \"none\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 40\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 41\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: ()=>{},\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDYjtBQUNtQjtBQUNHO0FBRXhELE1BQU1NLGtCQUFrQjtJQUNwQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUFFRixTQUFTO1FBQUdDLEdBQUc7SUFBRTtBQUNoQztBQUVlLFNBQVNFOzs7SUFFcEIsTUFBTUMsV0FBVztRQUNiO1lBQ0lDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtLQUNIO0lBRUQsTUFBTUMsZ0JBQWdCTCxTQUFTTSxHQUFHLEtBQUM7O1FBQU1kLE9BQUFBLDJEQUFZQTtJQUFDOztZQUFiQSx1REFBWUE7OztJQUNyRCxNQUFNZSxrQkFBa0JQLFNBQVNNLEdBQUcsS0FBQzs7UUFBTWIsT0FBQUEsc0VBQVNBLENBQUM7WUFBRWUsYUFBYTtZQUFNQyxXQUFXO1FBQUk7SUFBQzs7WUFBL0NoQixrRUFBU0E7OztJQUVwREgsZ0RBQVNBLENBQUM7UUFDTmUsY0FBY0ssT0FBTyxDQUFDLENBQUNDLFVBQVVDO1lBQzdCLElBQUlMLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDM0JELFNBQVNFLEtBQUssQ0FBQztZQUNuQjtRQUNKO0lBQ0osR0FBRztRQUFDUjtRQUFlRTtLQUFnQjtJQUVuQyxxQkFDSSw4REFBQ087UUFBUUMsSUFBRztRQUFlQyxXQUFVOzswQkFDakMsOERBQUNDO2dCQUNHRCxXQUFVOzBCQUNWLDRFQUFDRTtvQkFBS0YsV0FBVTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDQztnQkFBSUQsV0FBWTs7a0NBRWIsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBa0U7MENBQ3pELDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBOEI7Ozs7Ozs7Ozs7OztrQ0FFckUsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNWaEIsU0FBU00sR0FBRyxDQUFDLENBQUNjLFNBQVNSOzRCQUNwQixNQUFNLENBQUNTLElBQUksR0FBR2QsZUFBZSxDQUFDSyxNQUFNOzRCQUNwQyxxQkFDSSw4REFBQ3JCLGlEQUFNQSxDQUFDMEIsR0FBRztnQ0FFUEQsV0FBVTtnQ0FDVkssS0FBS0E7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLFNBQVNsQixhQUFhLENBQUNPLE1BQU07Z0NBQzdCWSxVQUFVOUI7Z0NBQ1YrQixZQUFZO29DQUFDQyxVQUFVO29DQUFLQyxPQUFPZixRQUFRO2dDQUFHOztrREFFOUMsOERBQUNLO3dDQUFJRCxXQUFVO2tEQUNWSSxRQUFRaEIsT0FBTyxpQkFDYiw4REFBQ3dCOzRDQUNEQyxLQUFLVCxRQUFRakIsTUFBTTs0Q0FDbkIyQixLQUFLOzRDQUNMQyxRQUFROzRDQUNSQyxJQUFJOzRDQUNKaEIsV0FBVTs0Q0FDVmlCLE9BQU87Z0RBQUVDLE9BQU87Z0RBQVFDLFFBQVE7Z0RBQVNDLGVBQWU7NENBQU87Ozs7O2lFQUk5RCw4REFBQ2hELGtEQUFLQTs0Q0FDRnlDLEtBQUtULFFBQVFqQixNQUFNOzRDQUNuQmtDLEtBQUtqQixRQUFRbkIsS0FBSzs0Q0FDbEJxQyxRQUFPOzRDQUNQQyxXQUFVOzRDQUNWdkIsV0FBVTs0Q0FDVndCLFNBQVE7Ozs7Ozs7Ozs7O2tEQUlwQiw4REFBQ3ZCO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ3lCO2dEQUFHekIsV0FBVTswREFBbURJLFFBQVFuQixLQUFLOzs7Ozs7MERBQzlFLDhEQUFDeUM7Z0RBQUUxQixXQUFVOzBEQUFzREksUUFBUWxCLFdBQVc7Ozs7OzswREFDdEYsOERBQUNlO2dEQUFJRCxXQUFVOzBEQUNYLDRFQUFDM0IsMERBQVlBO29EQUFDc0QsU0FBUTtvREFBU0MsU0FBUyxLQUN4Qzs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQW5DTmhDOzs7Ozt3QkF3Q2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FyR3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzP2FjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgQ2xpZW50QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5jb25zdCBzZXJ2aWNlVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuXG4gICAgY29uc3Qgc2VydmljZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQUkgQXNzaXN0YW50cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Jldm9sdXRpb25pemUgeW91ciBidXNpbmVzcyB3aXRoIEFJIEFzc2lzdGFudHMgcHJvdmlkaW5nIDI0LzcgQ3VzdG9tZXIgU3VwcG9ydCBhbmQgbW9yZS4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL0NoYXRib3RfVmlkZW8ubXA0JywgLy8gS2VlcGluZyB0aGUgdmFyaWFibGUgbmFtZSB0aGUgc2FtZVxuICAgICAgICAgICAgaXNWaWRlbzogdHJ1ZSwgLy8gQWRkIGEgZmxhZyB0byBpbmRpY2F0ZSB0aGlzIGlzIGEgdmlkZW9cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBdXRvbWF0ZWQgUHJvY2VzcyBPcHRpbWl6YXRpb24nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbmhhbmNlIGVmZmljaWVuY3kgd2l0aCBhdXRvbWF0ZWQgcHJvY2Vzc2VzIHRhaWxvcmVkIHRvIHlvdXIgYnVzaW5lc3MgbmVlZHMuJyxcbiAgICAgICAgICAgIGltZ1NyYzogJy9hdXRvbWF0aW9uLnN2ZycsXG4gICAgICAgICAgICBpc1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFbnRlcnByaXNlIENvbnN1bHRpbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgZXhwZXJ0IGFkdmljZSBhbmQgc3RyYXRlZ2llcyB0byBlbGV2YXRlIHlvdXIgYnVzaW5lc3Mgb3BlcmF0aW9ucy4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL2VudGVycHJpc2Uuc3ZnJyxcbiAgICAgICAgICAgIGlzVmlkZW86IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0FJIERyaXZlbiBTb2Z0d2FyZSBEZXZlbG9wbWVudCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xldmVyYWdlIEFJIGZvciBpbm5vdmF0aXZlIGFuZCBlZmZlY3RpdmUgc29mdHdhcmUgc29sdXRpb25zLicsXG4gICAgICAgICAgICBpbWdTcmM6ICcvc29mdHdhcmUuc3ZnJyxcbiAgICAgICAgICAgIGlzVmlkZW86IGZhbHNlLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBjb250cm9sc0FycmF5ID0gc2VydmljZXMubWFwKCgpID0+IHVzZUFuaW1hdGlvbigpKTtcbiAgICBjb25zdCBpblZpZXdSZWZzQXJyYXkgPSBzZXJ2aWNlcy5tYXAoKCkgPT4gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUsIHRocmVzaG9sZDogMC4xIH0pKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xzQXJyYXkuZm9yRWFjaCgoY29udHJvbHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5WaWV3UmVmc0FycmF5W2luZGV4XVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtjb250cm9sc0FycmF5LCBpblZpZXdSZWZzQXJyYXldKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibmV4dC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwicHktMjAgYmctYmFja2dyb3VuZCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgaXRlbXMtY2VudGVyIHB4LTQgcHktMiBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdGV4dC1ibGFjayB1cHBlcmNhc2UgYmctWyNEQkRDREZdIHJvdW5kZWQtbGcgc2VsZWN0LW5vbmUgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5XaGF0IFdlIE9mZmVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBoLWZ1bGwgbXgtYXV0byBweC00YH0+XG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ub3JtYWwgbWItMTAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIFJldm9sdXRpb25pemUgWW91ciA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0LTIgaXRhbGljIHByLTRcIj5Xb3JrRmxvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3JlZl0gPSBpblZpZXdSZWZzQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0FycmF5W2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3NlcnZpY2VWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLjUsIGRlbGF5OiBpbmRleCAqIDAuM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IHNtOmgtNjQgbGc6aC04MCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuaXNWaWRlbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlLmltZ1NyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDAlJywgaGVpZ2h0OiAnMzAwcHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NlcnZpY2UuaW1nU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlcnZpY2UudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPntzZXJ2aWNlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWxnIHRleHQtZ3JheS03MDAgbWItNlwiPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGllbnRCdXR0b24gdmFyaWFudD1cImZpbGxlZFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5HZXQgU3RhcnRlZDwvQ2xpZW50QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2xpZW50QnV0dG9uIiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3Iiwic2VydmljZVZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwiU2VydmljZXMiLCJzZXJ2aWNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdTcmMiLCJpc1ZpZGVvIiwiY29udHJvbHNBcnJheSIsIm1hcCIsImluVmlld1JlZnNBcnJheSIsInRyaWdnZXJPbmNlIiwidGhyZXNob2xkIiwiZm9yRWFjaCIsImNvbnRyb2xzIiwiaW5kZXgiLCJzdGFydCIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJoMiIsInNlcnZpY2UiLCJyZWYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ2aWRlbyIsInNyYyIsIm11dGVkIiwiYXV0b1BsYXkiLCJsb29wIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJsb2FkaW5nIiwiaDMiLCJwIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});