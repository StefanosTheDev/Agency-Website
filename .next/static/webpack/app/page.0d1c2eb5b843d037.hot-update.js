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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst serviceVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0\n    }\n};\nfunction Services() {\n    _s();\n    var _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n    // const [navbarHeight, setNavbarHeight] = useState(0);\n    //\n    // useEffect(() => {\n    //     const height = document.getElementById('nav-bar').offsetHeight;\n    //     setNavbarHeight(height);\n    // }, []);\n    const services = [\n        {\n            title: \"AI Assistants\",\n            description: \"Revolutionize your business with AI Assistants providing 24/7 Customer Support and more.\",\n            imgSrc: \"/Chatbot_Video\"\n        },\n        {\n            title: \"Automated Process Optimization\",\n            description: \"Enhance efficiency with automated processes tailored to your business needs.\",\n            imgSrc: \"/automation.svg\"\n        },\n        {\n            title: \"Enterprise Consulting\",\n            description: \"Get expert advice and strategies to elevate your business operations.\",\n            imgSrc: \"/enterprise.svg\"\n        },\n        {\n            title: \"AI Driven Software Development\",\n            description: \"Leverage AI for innovative and effective software solutions.\",\n            imgSrc: \"/software.svg\"\n        }\n    ];\n    // Create arrays of hooks\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const controlsArray = services.map(_s1(()=>{\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    }, \"YfilLoO5ZZXq7jwRX1lU3wfYQNM=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n        ];\n    }));\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const inViewRefsArray = services.map(_s2(()=>{\n        _s2();\n        return (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n            triggerOnce: true,\n            threshold: 0.1\n        });\n    }, \"dvraU7xYw0IhS37ojYdSIeEeZzQ=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n        ];\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        controlsArray.forEach((controls, index)=>{\n            if (inViewRefsArray[index][1]) {\n                controls.start(\"visible\");\n            }\n        });\n    }, [\n        controlsArray,\n        inViewRefsArray\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"next-section\",\n        className: \"py-20 bg-background relative flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative grid items-center px-4 py-2 font-sans text-xs font-bold text-black uppercase bg-[#DBDCDF] rounded-lg select-none whitespace-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\",\n                    children: \"What We Offer\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-full mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl md:text-4xl font-normal mb-10 text-center md:text-left\",\n                        children: [\n                            \"Revolutionize Your \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"gradient-text-2 italic pr-4\",\n                                children: \"WorkFlow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 67,\n                                columnNumber: 40\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8\",\n                        children: services.map((service, index)=>{\n                            const [ref] = inViewRefsArray[index];\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                className: \"rounded-lg bg-white shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out\",\n                                ref: ref,\n                                initial: \"hidden\",\n                                animate: controlsArray[index],\n                                variants: serviceVariants,\n                                transition: {\n                                    duration: 1.5,\n                                    delay: index * 0.3\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-48 sm:h-64 lg:h-80 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: service.imgSrc,\n                                            alt: service.title,\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            className: \"rounded-t-lg\",\n                                            loading: \"lazy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 flex flex-col flex-grow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl md:text-3xl lg:text-4xl font-bold mb-4\",\n                                                children: service.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm md:text-base lg:text-lg text-gray-700 mb-6\",\n                                                children: service.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-auto\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    variant: \"filled\",\n                                                    onClick: ()=>{},\n                                                    children: \"Get Started\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefanossophocleous/Desktop/ClearStackAI/AAA-Agency Site/Agency-Website/components/Services.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(Services, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDZ0I7QUFDSDtBQUNTO0FBQ0c7QUFFeEQsTUFBTU8sa0JBQWtCO0lBQ3BCQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFHO0lBQzVCQyxTQUFTO1FBQUVGLFNBQVM7UUFBR0MsR0FBRztJQUFFO0FBQ2hDO0FBRWUsU0FBU0U7OztJQUNwQix1REFBdUQ7SUFDdkQsRUFBRTtJQUNGLG9CQUFvQjtJQUNwQixzRUFBc0U7SUFDdEUsK0JBQStCO0lBQy9CLFVBQVU7SUFFVixNQUFNQyxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFFBQVE7UUFDWjtRQUNBO1lBQ0lGLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxRQUFRO1FBQ1o7UUFDQTtZQUNJRixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsUUFBUTtRQUNaO1FBQ0E7WUFDSUYsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFFBQVE7UUFDWjtLQUNIO0lBRUQseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxNQUFNQyxnQkFBZ0JKLFNBQVNLLEdBQUcsS0FBQzs7UUFBTWIsT0FBQUEsMkRBQVlBO0lBQUM7O1lBQWJBLHVEQUFZQTs7O0lBQ3JELHNEQUFzRDtJQUN0RCxNQUFNYyxrQkFBa0JOLFNBQVNLLEdBQUcsS0FBQzs7UUFBTVosT0FBQUEsc0VBQVNBLENBQUM7WUFBRWMsYUFBYTtZQUFNQyxXQUFXO1FBQUk7SUFBQzs7WUFBL0NmLGtFQUFTQTs7O0lBRXBESixnREFBU0EsQ0FBQztRQUNOZSxjQUFjSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7WUFDN0IsSUFBSUwsZUFBZSxDQUFDSyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUMzQkQsU0FBU0UsS0FBSyxDQUFDO1lBQ25CO1FBQ0o7SUFDSixHQUFHO1FBQUNSO1FBQWVFO0tBQWdCO0lBRW5DLHFCQUNJLDhEQUFDTztRQUFRQyxJQUFHO1FBQWVDLFdBQVU7OzBCQUNqQyw4REFBQ0M7Z0JBQ0dELFdBQVU7MEJBQ1YsNEVBQUNFO29CQUFLRixXQUFVOzhCQUFHOzs7Ozs7Ozs7OzswQkFFdkIsOERBQUNDO2dCQUFJRCxXQUFZOztrQ0FFYiw4REFBQ0c7d0JBQUdILFdBQVU7OzRCQUFrRTswQ0FDekQsOERBQUNFO2dDQUFLRixXQUFVOzBDQUE4Qjs7Ozs7Ozs7Ozs7O2tDQUVyRSw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1ZmLFNBQVNLLEdBQUcsQ0FBQyxDQUFDYyxTQUFTUjs0QkFDcEIsTUFBTSxDQUFDUyxJQUFJLEdBQUdkLGVBQWUsQ0FBQ0ssTUFBTTs0QkFDcEMscUJBQ0ksOERBQUNwQixpREFBTUEsQ0FBQ3lCLEdBQUc7Z0NBRVBELFdBQVU7Z0NBQ1ZLLEtBQUtBO2dDQUNMQyxTQUFRO2dDQUNSQyxTQUFTbEIsYUFBYSxDQUFDTyxNQUFNO2dDQUM3QlksVUFBVTdCO2dDQUNWOEIsWUFBWTtvQ0FBQ0MsVUFBVTtvQ0FBS0MsT0FBT2YsUUFBUTtnQ0FBRzs7a0RBRTlDLDhEQUFDSzt3Q0FBSUQsV0FBVTtrREFDWCw0RUFBQzVCLGtEQUFLQTs0Q0FDRndDLEtBQUtSLFFBQVFoQixNQUFNOzRDQUNuQnlCLEtBQUtULFFBQVFsQixLQUFLOzRDQUNsQjRCLFFBQU87NENBQ1BDLFdBQVU7NENBQ1ZmLFdBQVU7NENBQ1ZnQixTQUFROzs7Ozs7Ozs7OztrREFHaEIsOERBQUNmO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ2lCO2dEQUFHakIsV0FBVTswREFBbURJLFFBQVFsQixLQUFLOzs7Ozs7MERBQzlFLDhEQUFDZ0M7Z0RBQUVsQixXQUFVOzBEQUFzREksUUFBUWpCLFdBQVc7Ozs7OzswREFDdEYsOERBQUNjO2dEQUFJRCxXQUFVOzBEQUNYLDRFQUFDM0IsMERBQVlBO29EQUFDOEMsU0FBUTtvREFBU0MsU0FBUyxLQUN4Qzs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXZCTnhCOzs7Ozt3QkE0QmpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E5RndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzP2FjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgQ2xpZW50QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuY29uc3Qgc2VydmljZVZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiA1MCB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcbiAgICAvLyBjb25zdCBbbmF2YmFySGVpZ2h0LCBzZXROYXZiYXJIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG4gICAgLy9cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJhcicpLm9mZnNldEhlaWdodDtcbiAgICAvLyAgICAgc2V0TmF2YmFySGVpZ2h0KGhlaWdodCk7XG4gICAgLy8gfSwgW10pO1xuXG4gICAgY29uc3Qgc2VydmljZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQUkgQXNzaXN0YW50cycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Jldm9sdXRpb25pemUgeW91ciBidXNpbmVzcyB3aXRoIEFJIEFzc2lzdGFudHMgcHJvdmlkaW5nIDI0LzcgQ3VzdG9tZXIgU3VwcG9ydCBhbmQgbW9yZS4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL0NoYXRib3RfVmlkZW8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0F1dG9tYXRlZCBQcm9jZXNzIE9wdGltaXphdGlvbicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuaGFuY2UgZWZmaWNpZW5jeSB3aXRoIGF1dG9tYXRlZCBwcm9jZXNzZXMgdGFpbG9yZWQgdG8geW91ciBidXNpbmVzcyBuZWVkcy4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL2F1dG9tYXRpb24uc3ZnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFbnRlcnByaXNlIENvbnN1bHRpbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgZXhwZXJ0IGFkdmljZSBhbmQgc3RyYXRlZ2llcyB0byBlbGV2YXRlIHlvdXIgYnVzaW5lc3Mgb3BlcmF0aW9ucy4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL2VudGVycHJpc2Uuc3ZnJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBSSBEcml2ZW4gU29mdHdhcmUgRGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMZXZlcmFnZSBBSSBmb3IgaW5ub3ZhdGl2ZSBhbmQgZWZmZWN0aXZlIHNvZnR3YXJlIHNvbHV0aW9ucy4nLFxuICAgICAgICAgICAgaW1nU3JjOiAnL3NvZnR3YXJlLnN2ZycsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgaG9va3NcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBjb250cm9sc0FycmF5ID0gc2VydmljZXMubWFwKCgpID0+IHVzZUFuaW1hdGlvbigpKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBpblZpZXdSZWZzQXJyYXkgPSBzZXJ2aWNlcy5tYXAoKCkgPT4gdXNlSW5WaWV3KHsgdHJpZ2dlck9uY2U6IHRydWUsIHRocmVzaG9sZDogMC4xIH0pKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xzQXJyYXkuZm9yRWFjaCgoY29udHJvbHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5WaWV3UmVmc0FycmF5W2luZGV4XVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtjb250cm9sc0FycmF5LCBpblZpZXdSZWZzQXJyYXldKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibmV4dC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwicHktMjAgYmctYmFja2dyb3VuZCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgaXRlbXMtY2VudGVyIHB4LTQgcHktMiBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdGV4dC1ibGFjayB1cHBlcmNhc2UgYmctWyNEQkRDREZdIHJvdW5kZWQtbGcgc2VsZWN0LW5vbmUgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5XaGF0IFdlIE9mZmVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBoLWZ1bGwgbXgtYXV0byBweC00YH0+XG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ub3JtYWwgbWItMTAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIFJldm9sdXRpb25pemUgWW91ciA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0LTIgaXRhbGljIHByLTRcIj5Xb3JrRmxvdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW3JlZl0gPSBpblZpZXdSZWZzQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc0FycmF5W2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3NlcnZpY2VWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLjUsIGRlbGF5OiBpbmRleCAqIDAuM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IHNtOmgtNjQgbGc6aC04MCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlLmltZ1NyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlcnZpY2UudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPntzZXJ2aWNlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtYmFzZSBsZzp0ZXh0LWxnIHRleHQtZ3JheS03MDAgbWItNlwiPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGllbnRCdXR0b24gdmFyaWFudD1cImZpbGxlZFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5HZXQgU3RhcnRlZDwvQ2xpZW50QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2xpZW50QnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJzZXJ2aWNlVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1NyYyIsImNvbnRyb2xzQXJyYXkiLCJtYXAiLCJpblZpZXdSZWZzQXJyYXkiLCJ0cmlnZ2VyT25jZSIsInRocmVzaG9sZCIsImZvckVhY2giLCJjb250cm9scyIsImluZGV4Iiwic3RhcnQiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDIiLCJzZXJ2aWNlIiwicmVmIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwibG9hZGluZyIsImgzIiwicCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Services.js\n"));

/***/ })

});