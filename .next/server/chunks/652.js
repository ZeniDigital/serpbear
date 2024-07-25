"use strict";
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 4539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1015);
/* eslint-disable @next/next/no-img-element */ 




const Sidebar = ({ domains , showAddModal  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sidebar pt-44 w-1/5 hidden lg:block",
        "data-testid": "sidebar",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "py-7 text-base font-bold text-blue-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: " relative top-[3px] mr-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: "logo",
                            size: 24,
                            color: "#364AFF"
                        })
                    }),
                    " ZeniBot"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebar_menu max-h-96 overflow-auto styled-scrollbar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: " font-medium text-sm",
                    children: domains.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "my-2.5 leading-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/domain/${d.slug}`,
                                passHref: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: `block cursor-pointer px-4 text-ellipsis max-w-[215px] overflow-hidden whitespace-nowrap rounded
                                        rounded-r-none ${`/domain/${d.slug}` === router.asPath || `/domain/console/${d.slug}` === router.asPath || `/domain/insight/${d.slug}` === router.asPath || `/domain/ideas/${d.slug}` === router.asPath ? "bg-white text-zinc-800 border border-r-0" : "text-zinc-500"}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: " inline-block mr-1",
                                            src: `https://www.google.com/s2/favicons?domain=${d.domain}&sz=16`,
                                            alt: d.domain
                                        }),
                                        d.domain
                                    ]
                                })
                            })
                        }, d.domain))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebar_add border-t font-semibold text-sm text-center mt-6 w-[80%] ml-3 text-zinc-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "data-testid": "add_domain",
                    onClick: ()=>showAddModal(true),
                    className: "p-4 hover:text-blue-600",
                    children: "+ Add Domain"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 1917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_keywords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4789);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1015);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_keywords__WEBPACK_IMPORTED_MODULE_4__]);
_services_keywords__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const DomainHeader = ({ domain , showAddModal , showSettingsModal , exportCsv , domains , scFilter ="thirtyDays" , setScFilter , showIdeaUpdateModal  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: showOptions , 1: setShowOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: ShowSCDates , 1: setShowSCDates  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { mutate: refreshMutate  } = (0,_services_keywords__WEBPACK_IMPORTED_MODULE_4__/* .useRefreshKeywords */ .lm)(()=>{});
    const isConsole = router.pathname === "/domain/console/[slug]";
    const isInsight = router.pathname === "/domain/insight/[slug]";
    const isIdeas = router.pathname === "/domain/ideas/[slug]";
    const daysName = (dayKey)=>dayKey.replace("three", "3").replace("seven", "7").replace("thirty", "30").replace("Days", " Days");
    const buttonStyle = "leading-6 inline-block px-2 py-2 text-gray-500 hover:text-gray-700";
    const buttonLabelStyle = "ml-2 text-sm not-italic lg:invisible lg:opacity-0";
    const tabStyle = "rounded rounded-b-none cursor-pointer border-[#e9ebff] border-b-0";
    const scDataFilterStlye = "px-3 py-2 block w-full";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "domain_kewywords_head w-full ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "hidden lg:block text-xl font-bold my-3",
                        "data-testid": "domain-header",
                        children: domain && domain.domain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: " capitalize font-bold not-italic",
                                    children: domain.domain.charAt(0)
                                }),
                                domain.domain.slice(1)
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "domain_selector bg-white mt-2 lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            options: domains && domains.length > 0 ? domains.map((d)=>{
                                return {
                                    label: d.domain,
                                    value: d.slug
                                };
                            }) : [],
                            selected: [
                                domain.slug
                            ],
                            defaultLabel: "Select Domain",
                            updateField: (updateSlug)=>updateSlug && updateSlug[0] && router.push(`${updateSlug[0]}`),
                            multiple: false,
                            rounded: "rounded"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full justify-between mt-4 lg:mt-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: " max-w-[270px] overflow-auto flex items-end text-sm relative top-[2px] lg:max-w-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${tabStyle} ${router.pathname === "/domain/[slug]" ? "bg-white border border-b-0 font-semibold" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/domain/${domain.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "px-4 py-2 inline-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "tracking",
                                                color: "#999",
                                                classes: "hidden lg:inline-block"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs lg:text-sm lg:ml-2",
                                                children: "Tracking"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${tabStyle} ${router.pathname === "/domain/console/[slug]" ? "bg-white border border-b-0 font-semibold" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/domain/console/${domain.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "px-4 py-2 inline-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "google",
                                                size: 13,
                                                classes: "hidden lg:inline-block"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs lg:text-sm lg:ml-2",
                                                children: "Discover"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "help",
                                                size: 14,
                                                color: "#aaa",
                                                classes: "ml-2 hidden lg:inline-block",
                                                title: "Discover Keywords you already Rank For"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${tabStyle} ${router.pathname === "/domain/insight/[slug]" ? "bg-white border border-b-0 font-semibold" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/domain/insight/${domain.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "px-4 py-2 inline-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "google",
                                                size: 13,
                                                classes: "hidden lg:inline-block"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs lg:text-sm lg:ml-2",
                                                children: "Insight"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "help",
                                                size: 14,
                                                color: "#aaa",
                                                classes: "ml-2 hidden lg:inline-block",
                                                title: "Insight for Google Search Console Data"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${tabStyle} ${router.pathname === "/domain/ideas/[slug]" ? "bg-white border border-b-0 font-semibold" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/domain/ideas/${domain.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "px-4 py-2 inline-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "adwords",
                                                size: 13,
                                                classes: "hidden lg:inline-block"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xs lg:text-sm lg:ml-2",
                                                children: "Ideas"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "help",
                                                size: 14,
                                                color: "#aaa",
                                                classes: "ml-2 hidden lg:inline-block",
                                                title: "Get Keyword Ideas for this domain from Google Ads"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mb-0 lg:mb-1 lg:mt-3",
                        children: [
                            !isInsight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${buttonStyle} lg:hidden`,
                                onClick: ()=>setShowOptions(!showOptions),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    type: "dots",
                                    size: 20
                                })
                            }),
                            isInsight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${buttonStyle} lg:hidden invisible`,
                                children: "x"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `hidden w-40 ml-[-70px] lg:block absolute mt-10 bg-white border border-gray-100 z-40 rounded 
            lg:z-auto lg:relative lg:mt-0 lg:border-0 lg:w-auto lg:bg-transparent`,
                                style: {
                                    display: showOptions ? "block" : undefined
                                },
                                children: [
                                    !isInsight && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `domheader_action_button relative ${buttonStyle}`,
                                        "aria-pressed": "false",
                                        onClick: ()=>exportCsv(),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "download",
                                                size: 20
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `${buttonLabelStyle}`,
                                                children: "Export as csv"
                                            })
                                        ]
                                    }),
                                    !isConsole && !isInsight && !isIdeas && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `domheader_action_button relative ${buttonStyle} lg:ml-3`,
                                        "aria-pressed": "false",
                                        onClick: ()=>refreshMutate({
                                                ids: [],
                                                domain: domain.domain
                                            }),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "reload",
                                                size: 14
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `${buttonLabelStyle}`,
                                                children: "Reload All Serps"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        "data-testid": "show_domain_settings",
                                        className: `domheader_action_button relative ${buttonStyle} lg:ml-3`,
                                        "aria-pressed": "false",
                                        onClick: ()=>showSettingsModal(true),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "settings",
                                                size: 20
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `${buttonLabelStyle}`,
                                                children: "Domain Settings"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !isConsole && !isInsight && !isIdeas && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                "data-testid": "add_keyword",
                                className: "ml-2 inline-block text-blue-700 font-bold text-sm lg:px-4 lg:py-2",
                                onClick: ()=>showAddModal(true),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-center leading-4 mr-2 inline-block rounded-full w-7 h-7 pt-1 bg-blue-700 text-white font-bold text-lg",
                                        children: "+"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: " not-italic hidden lg:inline-block",
                                        children: "Add Keyword"
                                    })
                                ]
                            }),
                            isConsole && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-xs pl-4 ml-2 border-l border-gray-200 relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "block cursor-pointer py-3",
                                        onClick: ()=>setShowSCDates(!ShowSCDates),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "date",
                                                size: 13,
                                                classes: "mr-1"
                                            }),
                                            " ",
                                            daysName(scFilter)
                                        ]
                                    }),
                                    ShowSCDates && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute w-24 z-50 mt-0 right-0 bg-white border border-gray-200 rounded text-center",
                                        children: [
                                            "threeDays",
                                            "sevenDays",
                                            "thirtyDays"
                                        ].map((itemKey)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: `${scDataFilterStlye} ${scFilter === itemKey ? " bg-indigo-100 text-indigo-600" : ""}`,
                                                onClick: ()=>{
                                                    setShowSCDates(false);
                                                    if (setScFilter) setScFilter(itemKey);
                                                },
                                                children: [
                                                    "Last ",
                                                    daysName(itemKey)
                                                ]
                                            }, itemKey);
                                        })
                                    })
                                ]
                            }),
                            isIdeas && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                "data-testid": "load_ideas",
                                className: "ml-2 text-blue-700 font-bold text-sm flex items-center lg:px-4 lg:py-2",
                                onClick: ()=>showIdeaUpdateModal && showIdeaUpdateModal(),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-center leading-4 mr-2 inline-block rounded-full w-7 h-7 pt-1 bg-blue-700 text-white font-bold text-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: "reload",
                                            size: 12
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: " not-italic hidden lg:inline-block",
                                        children: "Load Ideas"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomainHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1015);
/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6561);
/* harmony import */ var _services_domains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6733);
/* harmony import */ var _common_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4541);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_domains__WEBPACK_IMPORTED_MODULE_5__]);
_services_domains__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DomainSettings = ({ domain , closeModal  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: currentTab , 1: setCurrentTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("notification");
    const { 0: showRemoveDomain , 1: setShowRemoveDomain  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: settingsError , 1: setSettingsError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        type: "",
        msg: ""
    });
    const { 0: domainSettings , 1: setDomainSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>({
            notification_interval: domain && domain.notification_interval ? domain.notification_interval : "never",
            notification_emails: domain && domain.notification_emails ? domain.notification_emails : "",
            search_console: domain && domain.search_console ? JSON.parse(domain.search_console) : {
                property_type: "domain",
                url: "",
                client_email: "",
                private_key: ""
            }
        }));
    const { mutate: updateMutate , error: domainUpdateError , isLoading: isUpdating  } = (0,_services_domains__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateDomain */ .gk)(()=>closeModal(false));
    const { mutate: deleteMutate  } = (0,_services_domains__WEBPACK_IMPORTED_MODULE_5__/* .useDeleteDomain */ .Js)(()=>{
        closeModal(false);
        router.push("/domains");
    });
    // Get the Full Domain Data along with the Search Console API Data.
    (0,_services_domains__WEBPACK_IMPORTED_MODULE_5__/* .useFetchDomain */ .Do)(router, domain && domain.domain ? domain.domain : "", (domainObj)=>{
        const currentSearchConsoleSettings = domainObj.search_console && JSON.parse(domainObj.search_console);
        setDomainSettings({
            ...domainSettings,
            search_console: currentSearchConsoleSettings || domainSettings.search_console
        });
    });
    const updateDomain = ()=>{
        let error = null;
        if (domainSettings.notification_emails) {
            const notification_emails = domainSettings.notification_emails.split(",");
            const invalidEmails = notification_emails.find((x)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,15})+$/.test(x) === false);
            console.log("invalidEmails: ", invalidEmails);
            if (invalidEmails) {
                error = {
                    type: "email",
                    msg: "Invalid Email"
                };
            }
        }
        if (error && error.type) {
            console.log("Error!!!!!");
            setSettingsError(error);
            setTimeout(()=>{
                setSettingsError({
                    type: "",
                    msg: ""
                });
            }, 3000);
        } else if (domain) {
            updateMutate({
                domainSettings,
                domain
            });
        }
    };
    const tabStyle = `inline-block px-4 py-2 rounded-md mr-3 cursor-pointer text-sm select-none z-10
                     text-gray-600 border border-b-0 relative top-[1px] rounded-b-none`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                closeModal: ()=>closeModal(false),
                title: "Domain Settings",
                width: "[500px]",
                verticalCenter: currentTab === "searchconsole",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-testid": "domain_settings",
                        className: " text-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " mt-3 mb-5 border border-slate-200 px-2 py-4 pb-0 relative left-[-20px] w-[calc(100%+40px)] border-l-0 border-r-0 bg-[#f8f9ff]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: `${tabStyle} ${currentTab === "notification" ? " bg-white text-blue-600 border-slate-200" : "border-transparent"} `,
                                            onClick: ()=>setCurrentTab("notification"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    type: "email"
                                                }),
                                                " Notification"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: `${tabStyle} ${currentTab === "searchconsole" ? " bg-white text-blue-600 border-slate-200" : "border-transparent"}`,
                                            onClick: ()=>setCurrentTab("searchconsole"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    type: "google"
                                                }),
                                                " Search Console"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    currentTab === "notification" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-4 flex justify-between items-center w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            label: "Notification Emails",
                                            onChange: (emails)=>setDomainSettings({
                                                    ...domainSettings,
                                                    notification_emails: emails
                                                }),
                                            value: domainSettings.notification_emails || "",
                                            placeholder: "Your Emails"
                                        })
                                    }),
                                    currentTab === "searchconsole" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-4 flex justify-between items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize",
                                                        children: "Property Type"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        options: [
                                                            {
                                                                label: "Domain",
                                                                value: "domain"
                                                            },
                                                            {
                                                                label: "URL",
                                                                value: "url"
                                                            }
                                                        ],
                                                        selected: [
                                                            domainSettings.search_console?.property_type || "domain"
                                                        ],
                                                        defaultLabel: "Select Search Console Property Type",
                                                        updateField: (updated)=>setDomainSettings({
                                                                ...domainSettings,
                                                                search_console: {
                                                                    ...domainSettings.search_console,
                                                                    property_type: updated[0] || "domain"
                                                                }
                                                            }),
                                                        multiple: false,
                                                        rounded: "rounded"
                                                    })
                                                ]
                                            }),
                                            domainSettings?.search_console?.property_type === "url" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-4 flex justify-between items-center w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    label: "Property URL (Required)",
                                                    onChange: (url)=>setDomainSettings({
                                                            ...domainSettings,
                                                            search_console: {
                                                                ...domainSettings.search_console,
                                                                url
                                                            }
                                                        }),
                                                    value: domainSettings?.search_console?.url || "",
                                                    placeholder: "Search Console Property URL. eg: https://mywebsite.com/"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-4 flex justify-between items-center w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    label: "Search Console Client Email",
                                                    onChange: (client_email)=>setDomainSettings({
                                                            ...domainSettings,
                                                            search_console: {
                                                                ...domainSettings.search_console,
                                                                client_email
                                                            }
                                                        }),
                                                    value: domainSettings?.search_console?.client_email || "",
                                                    placeholder: "myapp@appspot.gserviceaccount.com"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-4 flex flex-col justify-between items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-semibold block text-sm text-gray-700 capitalize w-full",
                                                        children: "Search Console Private Key"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        className: `w-full p-2 border border-gray-200 rounded mb-3 text-xs 
                              focus:outline-none h-[100px] focus:border-blue-200`,
                                                        value: domainSettings?.search_console?.private_key || "",
                                                        placeholder: "-----BEGIN PRIVATE KEY-----/ssssaswdkihad....",
                                                        onChange: (event)=>setDomainSettings({
                                                                ...domainSettings,
                                                                search_console: {
                                                                    ...domainSettings.search_console,
                                                                    private_key: event.target.value
                                                                }
                                                            })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !isUpdating && domainUpdateError?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mt-4 p-3 text-sm bg-red-50 text-red-700",
                                children: domainUpdateError.message
                            }),
                            !isUpdating && settingsError?.msg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mt-4 p-3 text-sm bg-red-50 text-red-700",
                                children: settingsError.msg
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between border-t-[1px] border-gray-100 mt-8 pt-4 pb-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "text-sm font-semibold text-red-500",
                                onClick: ()=>setShowRemoveDomain(true),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        type: "trash"
                                    }),
                                    " Remove Domain"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: `text-sm font-semibold py-2 px-5 rounded cursor-pointer bg-blue-700 text-white ${isUpdating ? "cursor-not-allowed" : ""}`,
                                onClick: ()=>!isUpdating && updateDomain(),
                                children: [
                                    isUpdating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        type: "loading"
                                    }),
                                    " Update Settings"
                                ]
                            })
                        ]
                    })
                ]
            }),
            showRemoveDomain && domain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                closeModal: ()=>setShowRemoveDomain(false),
                title: `Remove Domain ${domain.domain}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Are you sure you want to remove this Domain? Removing this domain will remove all its keywords."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-6 text-right font-semibold",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: " py-1 px-5 rounded cursor-pointer bg-indigo-50 text-slate-500 mr-3",
                                    onClick: ()=>setShowRemoveDomain(false),
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: " py-1 px-5 rounded cursor-pointer bg-red-400 text-white",
                                    onClick: ()=>deleteMutate(domain),
                                    children: "Remove"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomainSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;