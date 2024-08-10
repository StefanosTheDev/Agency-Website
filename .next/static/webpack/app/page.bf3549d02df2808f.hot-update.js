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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    const services = [\n        {\n            title: \"AI Assistants\",\n            description: \"Revolutionize your business with AI Assistants providing 24/7 Customer Support and more.\",\n            imgSrc: \"/V\",\n            isVideo: true\n        },\n        {\n            title: \"Automated Process Optimization\",\n            description: \"Enhance efficiency with automated processes tailored to your business needs.\",\n            imgSrc: \"/automation.svg\",\n            isVideo: false\n        },\n        {\n            title: \"Enterprise Consulting\",\n            description: \"Get expert advice and strategies to elevate your business operations.\",\n            imgSrc: \"/enterprise.svg\",\n            isVideo: false\n        },\n        {\n            title: \"AI Driven Software Development\",\n            description: \"Leverage AI for innovative and effective software solutions.\",\n            imgSrc: \"/software.svg\",\n            isVideo: false\n        }\n    ];\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 62,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: service.isVideo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                            src: service.imgSrc,\n                                            muted: true,\n                                            autoPlay: true,\n                                            loop: true,\n                                            className: \"w-full h-full object-cover rounded-t-lg\",\n                                            style: {\n                                                pointerEvents: \"none\",\n                                                transform: \"scale(0.9)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 40\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 41\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: ()=>{},\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDYjtBQUNtQjtBQUNHO0FBRXhELE1BQU1NLGtCQUFrQjtJQUNwQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUFFRixTQUFTO1FBQUdDLEdBQUc7SUFBRTtBQUNoQztBQUVlLFNBQVNFOzs7SUFFcEIsTUFBTUMsV0FBVztRQUNiO1lBQ0lDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtRQUNBO1lBQ0lILE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1lBQ1JDLFNBQVM7UUFDYjtLQUNIO0lBRUQsTUFBTUMsZ0JBQWdCTCxTQUFTTSxHQUFHLEtBQUM7O1FBQU1kLE9BQUFBLDJEQUFZQTtJQUFDOztZQUFiQSx1REFBWUE7OztJQUNyRCxNQUFNZSxrQkFBa0JQLFNBQVNNLEdBQUcsS0FBQzs7UUFBTWIsT0FBQUEsc0VBQVNBLENBQUM7WUFBRWUsYUFBYTtZQUFNQyxXQUFXO1FBQUk7SUFBQzs7WUFBL0NoQixrRUFBU0E7OztJQUVwREgsZ0RBQVNBLENBQUM7UUFDTmUsY0FBY0ssT0FBTyxDQUFDLENBQUNDLFVBQVVDO1lBQzdCLElBQUlMLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDM0JELFNBQVNFLEtBQUssQ0FBQztZQUNuQjtRQUNKO0lBQ0osR0FBRztRQUFDUjtRQUFlRTtLQUFnQjtJQUVuQyxxQkFDSSw4REFBQ087UUFBUUMsSUFBRztRQUFlQyxXQUFVOzswQkFDakMsOERBQUNDO2dCQUNHRCxXQUFVOzBCQUNWLDRFQUFDRTtvQkFBS0YsV0FBVTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDQztnQkFBSUQsV0FBWTs7a0NBRWIsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBa0U7MENBQ3pELDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBOEI7Ozs7Ozs7Ozs7OztrQ0FFckUsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNWaEIsU0FBU00sR0FBRyxDQUFDLENBQUNjLFNBQVNSOzRCQUNwQixNQUFNLENBQUNTLElBQUksR0FBR2QsZUFBZSxDQUFDSyxNQUFNOzRCQUNwQyxxQkFDSSw4REFBQ3JCLGlEQUFNQSxDQUFDMEIsR0FBRztnQ0FFUEQsV0FBVTtnQ0FDVkssS0FBS0E7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLFNBQVNsQixhQUFhLENBQUNPLE1BQU07Z0NBQzdCWSxVQUFVOUI7Z0NBQ1YrQixZQUFZO29DQUFDQyxVQUFVO29DQUFLQyxPQUFPZixRQUFRO2dDQUFHOztrREFFOUMsOERBQUNLO3dDQUFJRCxXQUFVO2tEQUNWSSxRQUFRaEIsT0FBTyxpQkFDYiw4REFBQ3dCOzRDQUNEQyxLQUFLVCxRQUFRakIsTUFBTTs0Q0FDbkIyQixLQUFLOzRDQUNMQyxRQUFROzRDQUNSQyxJQUFJOzRDQUNKaEIsV0FBVTs0Q0FDVmlCLE9BQU87Z0RBQUVDLGVBQWU7Z0RBQVFDLFdBQVc7NENBQWE7Ozs7O2lFQUl2RCw4REFBQy9DLGtEQUFLQTs0Q0FDRnlDLEtBQUtULFFBQVFqQixNQUFNOzRDQUNuQmlDLEtBQUtoQixRQUFRbkIsS0FBSzs0Q0FDbEJvQyxRQUFPOzRDQUNQQyxXQUFVOzRDQUNWdEIsV0FBVTs0Q0FDVnVCLFNBQVE7Ozs7Ozs7Ozs7O2tEQUlwQiw4REFBQ3RCO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ3dCO2dEQUFHeEIsV0FBVTswREFBbURJLFFBQVFuQixLQUFLOzs7Ozs7MERBQzlFLDhEQUFDd0M7Z0RBQUV6QixXQUFVOzBEQUFzREksUUFBUWxCLFdBQVc7Ozs7OzswREFDdEYsOERBQUNlO2dEQUFJRCxXQUFVOzBEQUNYLDRFQUFDM0IsMERBQVlBO29EQUFDcUQsU0FBUTtvREFBU0MsU0FBUyxLQUN4Qzs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQW5DTi9COzs7Ozt3QkF3Q2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FyR3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzP2FjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgQ2xpZW50QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5jb25zdCBzZXJ2aWNlVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuXG4gICAgY29uc3Qgc2VydmljZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQUkgQXNzaXN0YW50cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Jldm9sdXRpb25pemUgeW91ciBidXNpbmVzcyB3aXRoIEFJIEFzc2lzdGFudHMgcHJvdmlkaW5nIDI0LzcgQ3VzdG9tZXIgU3VwcG9ydCBhbmQgbW9yZS4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL1YnLCAvLyBLZWVwaW5nIHRoZSB2YXJpYWJsZSBuYW1lIHRoZSBzYW1lXG4gICAgICAgICAgICBpc1ZpZGVvOiB0cnVlLCAvLyBBZGQgYSBmbGFnIHRvIGluZGljYXRlIHRoaXMgaXMgYSB2aWRlb1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0F1dG9tYXRlZCBQcm9jZXNzIE9wdGltaXphdGlvbicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuaGFuY2UgZWZmaWNpZW5jeSB3aXRoIGF1dG9tYXRlZCBwcm9jZXNzZXMgdGFpbG9yZWQgdG8geW91ciBidXNpbmVzcyBuZWVkcy4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL2F1dG9tYXRpb24uc3ZnJyxcbiAgICAgICAgICAgIGlzVmlkZW86IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VudGVycHJpc2UgQ29uc3VsdGluZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBleHBlcnQgYWR2aWNlIGFuZCBzdHJhdGVnaWVzIHRvIGVsZXZhdGUgeW91ciBidXNpbmVzcyBvcGVyYXRpb25zLicsXG4gICAgICAgICAgICBpbWdTcmM6ICcvZW50ZXJwcmlzZS5zdmcnLFxuICAgICAgICAgICAgaXNWaWRlbzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQUkgRHJpdmVuIFNvZnR3YXJlIERldmVsb3BtZW50JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTGV2ZXJhZ2UgQUkgZm9yIGlubm92YXRpdmUgYW5kIGVmZmVjdGl2ZSBzb2Z0d2FyZSBzb2x1dGlvbnMuJyxcbiAgICAgICAgICAgIGltZ1NyYzogJy9zb2Z0d2FyZS5zdmcnLFxuICAgICAgICAgICAgaXNWaWRlbzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRyb2xzQXJyYXkgPSBzZXJ2aWNlcy5tYXAoKCkgPT4gdXNlQW5pbWF0aW9uKCkpO1xuICAgIGNvbnN0IGluVmlld1JlZnNBcnJheSA9IHNlcnZpY2VzLm1hcCgoKSA9PiB1c2VJblZpZXcoeyB0cmlnZ2VyT25jZTogdHJ1ZSwgdGhyZXNob2xkOiAwLjEgfSkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29udHJvbHNBcnJheS5mb3JFYWNoKChjb250cm9scywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpblZpZXdSZWZzQXJyYXlbaW5kZXhdWzFdKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW2NvbnRyb2xzQXJyYXksIGluVmlld1JlZnNBcnJheV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJuZXh0LXNlY3Rpb25cIiBjbGFzc05hbWU9XCJweS0yMCBiZy1iYWNrZ3JvdW5kIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGZvbnQtc2FucyB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHVwcGVyY2FzZSBiZy1bI0RCRENERl0gcm91bmRlZC1sZyBzZWxlY3Qtbm9uZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPldoYXQgV2UgT2ZmZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGgtZnVsbCBteC1hdXRvIHB4LTRgfT5cblxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LW5vcm1hbCBtYi0xMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgUmV2b2x1dGlvbml6ZSBZb3VyIDxzcGFuIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHQtMiBpdGFsaWMgcHItNFwiPldvcmtGbG93PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbcmVmXSA9IGluVmlld1JlZnNBcnJheVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctd2hpdGUgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzQXJyYXlbaW5kZXhdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17c2VydmljZVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDEuNSwgZGVsYXk6IGluZGV4ICogMC4zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggc206aC02NCBsZzpoLTgwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5pc1ZpZGVvID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NlcnZpY2UuaW1nU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLXQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VydmljZS5pbWdTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+e3NlcnZpY2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGcgdGV4dC1ncmF5LTcwMCBtYi02XCI+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWVudEJ1dHRvbiB2YXJpYW50PVwiZmlsbGVkXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkdldCBTdGFydGVkPC9DbGllbnRCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJDbGllbnRCdXR0b24iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJzZXJ2aWNlVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1NyYyIsImlzVmlkZW8iLCJjb250cm9sc0FycmF5IiwibWFwIiwiaW5WaWV3UmVmc0FycmF5IiwidHJpZ2dlck9uY2UiLCJ0aHJlc2hvbGQiLCJmb3JFYWNoIiwiY29udHJvbHMiLCJpbmRleCIsInN0YXJ0Iiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwic2VydmljZSIsInJlZiIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInZpZGVvIiwic3JjIiwibXV0ZWQiLCJhdXRvUGxheSIsImxvb3AiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJ0cmFuc2Zvcm0iLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJsb2FkaW5nIiwiaDMiLCJwIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});