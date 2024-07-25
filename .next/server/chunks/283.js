"use strict";
exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 1317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1015);
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5158);
/* harmony import */ var _common_Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2657);
/* harmony import */ var _hooks_useOnKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3251);
/* harmony import */ var _utils_client_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5686);
/* harmony import */ var _services_keywords__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4789);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_keywords__WEBPACK_IMPORTED_MODULE_9__]);
_services_keywords__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const dummySearchResults = [
    {
        position: 1,
        url: "https://google.com/?search=dummy+text",
        title: "Google Search Result One"
    },
    {
        position: 1,
        url: "https://yahoo.com/?search=dummy+text",
        title: "Yahoo Results | Sample Dummy"
    },
    {
        position: 1,
        url: "https://gamespot.com/?search=dummy+text",
        title: "GameSpot | Dummy Search Results"
    },
    {
        position: 1,
        url: "https://compressimage.com/?search=dummy+text",
        title: "Compress Images Online"
    }, 
];
const IdeaDetails = ({ keyword , closeDetails  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const updatedDate = new Date(keyword.updated);
    const searchResultContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const searchResultFound = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const searchResultReqPayload = {
        keyword: keyword.keyword,
        country: keyword.country,
        device: "desktop"
    };
    const { data: keywordSearchResultData , refetch: fetchKeywordSearchResults , isLoading: fetchingResult  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(`ideas:${keyword.uid}`, ()=>(0,_services_keywords__WEBPACK_IMPORTED_MODULE_9__/* .fetchSearchResults */ .w6)(router, searchResultReqPayload), {
        refetchOnWindowFocus: false,
        enabled: false
    });
    const { monthlySearchVolumes  } = keyword;
    (0,_hooks_useOnKey__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("Escape", closeDetails);
    const chartData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const chartDataObj = {
            labels: [],
            sreies: []
        };
        Object.keys(monthlySearchVolumes).forEach((dateKey)=>{
            const dateKeyArr = dateKey.split("-");
            const labelDate = `${dateKeyArr[0].slice(0, 1).toUpperCase()}${dateKeyArr[0].slice(1, 3).toLowerCase()}, ${dateKeyArr[1].slice(2)}`;
            chartDataObj.labels.push(labelDate);
            chartDataObj.sreies.push(parseInt(monthlySearchVolumes[dateKey], 10));
        });
        return chartDataObj;
    }, [
        monthlySearchVolumes
    ]);
    const closeOnBGClick = (e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
            closeDetails();
        }
    };
    const searchResultsFetched = !!keywordSearchResultData?.searchResult?.results;
    const keywordSearchResult = searchResultsFetched ? keywordSearchResultData?.searchResult?.results : dummySearchResults;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "IdeaDetails fixed w-full h-screen top-0 left-0 z-[99999]",
        onClick: closeOnBGClick,
        "data-testid": "IdeaDetails",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "IdeaDetails absolute w-full lg:w-5/12 bg-white customShadow top-0 right-0 h-screen",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "IdeaDetails__header p-6 border-b border-b-slate-200 text-slate-500",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            className: " text-lg font-bold",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    title: _utils_countries__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP[keyword.country][0],
                                    className: `fflag fflag-${keyword.country} w-[18px] h-[12px] mr-2`
                                }),
                                " ",
                                keyword.keyword,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "py-1 px-2 ml-2 rounded bg-blue-50 text-blue-700 text-xs font-bold",
                                    children: [
                                        (0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_10__/* .formattedNum */ .y)(keyword.avgMonthlySearches),
                                        "/month"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "absolute top-2 right-2 p-2 px-3 text-gray-400 hover:text-gray-700 transition-all hover:rotate-90",
                            onClick: ()=>closeDetails(),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                type: "close",
                                size: 24
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "IdeaDetails__content p-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "IdeaDetails__section",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "IdeaDetails__section__head flex justify-between mb-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: " font-bold text-gray-700 text-lg",
                                        children: "Search Volume Trend"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "IdeaDetails__section__chart h-64",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Chart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        labels: chartData.labels,
                                        sreies: chartData.sreies,
                                        noMaxLimit: true,
                                        reverse: false
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "IdeaDetails__section mt-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "IdeaDetails__section__head flex justify-between items-center pb-4 mb-4 border-b border-b-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: " font-bold text-gray-700 lg:text-lg",
                                            children: [
                                                "Google Search Result",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-gray-400 hover:text-indigo-600 inline-block ml-1 px-2 py-1",
                                                    href: `https://www.google.com/search?q=${encodeURI(keyword.keyword)}`,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        type: "link",
                                                        size: 14
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: " text-xs text-gray-500",
                                            children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(updatedDate).format("MMMM D, YYYY")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "keywordDetails__section__results styled-scrollbar overflow-y-auto relative",
                                    ref: searchResultContainer,
                                    children: [
                                        !searchResultsFetched && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " absolute flex w-full h-full justify-center items-center flex-col z-50 font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        'View Google Search Results for "',
                                                        keyword.keyword,
                                                        '"'
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: ()=>fetchKeywordSearchResults(),
                                                    className: "mt-4 text-sm font-semibold py-2 px-5 rounded cursor-pointer bg-blue-700 text-white ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            type: fetchingResult ? "loading" : "google"
                                                        }),
                                                        " ",
                                                        fetchingResult ? "Performing" : "Perform",
                                                        "  Google Search"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${!searchResultsFetched ? " blur-sm " : ""}`,
                                            children: keywordSearchResult && Array.isArray(keywordSearchResult) && keywordSearchResult.length > 0 && keywordSearchResult.map((item, index)=>{
                                                const { position  } = keyword;
                                                const domainExist = position < 100 && index === position - 1;
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    ref: domainExist ? searchResultFound : null,
                                                    className: `leading-6 mb-4 mr-3 p-3 text-sm break-all pr-3 rounded 
                                    ${domainExist ? " bg-amber-50 border border-amber-200" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-semibold text-blue-700",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: item.url,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                children: `${index + 1}. ${item.title}`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: " text-green-900",
                                                            href: item.url,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: item.url
                                                        })
                                                    ]
                                                }, item.url + item.position);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeaDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);




const IdeasFilters = (props)=>{
    const { filterKeywords , allTags =[] , updateSort , showFavorites , sortBy , filterParams , keywords =[] , favorites =[]  } = props;
    const { 0: keywordType , 1: setKeywordType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const { 0: sortOptions , 1: showSortOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: filterOptions , 1: showFilterOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filterTags = (tags)=>filterKeywords({
            ...filterParams,
            tags
        });
    const searchKeywords = (event)=>{
        const filtered = filterKeywords({
            ...filterParams,
            search: event.currentTarget.value
        });
        return filtered;
    };
    const sortOptionChoices = [
        {
            value: "alpha_asc",
            label: "Alphabetically(A-Z)"
        },
        {
            value: "alpha_desc",
            label: "Alphabetically(Z-A)"
        },
        {
            value: "vol_asc",
            label: "Lowest Search Volume"
        },
        {
            value: "vol_desc",
            label: "Highest Search Volume"
        },
        {
            value: "competition_asc",
            label: "High Competition"
        },
        {
            value: "competition_desc",
            label: "Low Competition"
        }, 
    ];
    const sortItemStyle = (sortType)=>{
        return `cursor-pointer py-2 px-3 hover:bg-[#FCFCFF] ${sortBy === sortType ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-50" : ""}`;
    };
    const deviceTabStyle = "select-none cursor-pointer px-3 py-2 rounded-3xl mr-2";
    const deviceTabCountStyle = "px-2 py-0 rounded-3xl bg-[#DEE1FC] text-[0.7rem] font-bold ml-1";
    const mobileFilterOptionsStyle = "visible mt-8 border absolute min-w-[0] rounded-lg max-h-96 bg-white z-50 w-52 right-2 p-4";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "domKeywords_filters py-4 px-6 flex justify-between text-sm text-gray-500 font-semibold border-b-[1px] lg:border-0 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex text-xs",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            "data-testid": "desktop_tab",
                            className: `${deviceTabStyle} ${keywordType === "all" ? " bg-[#F8F9FF] text-gray-700" : ""}`,
                            onClick: ()=>{
                                setKeywordType("all");
                                showFavorites(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: "keywords",
                                    classes: "top-[3px]",
                                    size: 15
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "hidden not-italic lg:inline-block ml-1",
                                    children: "All Keywords"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${deviceTabCountStyle}`,
                                    children: keywords.length
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            "data-testid": "mobile_tab",
                            className: `${deviceTabStyle} ${keywordType === "favorites" ? " bg-[#F8F9FF] text-gray-700" : ""}`,
                            onClick: ()=>{
                                setKeywordType("favorites");
                                showFavorites(true);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: "star",
                                    classes: "top-[4px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "hidden not-italic lg:inline-block ml-1",
                                    children: "Favorites"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${deviceTabCountStyle}`,
                                    children: favorites.length
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "data-testid": "filter_button",
                            className: `px-2 py-1 rounded ${filterOptions ? " bg-indigo-100 text-blue-700" : ""}`,
                            title: "Filter",
                            onClick: ()=>showFilterOptions(!filterOptions),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                type: "filter",
                                size: 18
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `lg:flex gap-5 lg:visible ${filterOptions ? mobileFilterOptionsStyle : "hidden"}`,
                        children: [
                            keywordType === "all" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tags_filter mb-2 lg:mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    selected: filterParams.tags,
                                    options: allTags.map((tag)=>({
                                            label: tag,
                                            value: tag
                                        })),
                                    defaultLabel: `All Groups (${allTags.length})`,
                                    updateField: (updated)=>filterTags(updated),
                                    emptyMsg: "No Groups Found for this Domain",
                                    minWidth: 270
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 lg:mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    "data-testid": "filter_input",
                                    className: `border w-44 lg:w-36 focus:w-44 transition-all rounded-3xl 
                        p-1.5 px-4 outline-none ring-0 focus:border-indigo-200`,
                                    type: "text",
                                    placeholder: "Filter Keywords...",
                                    onChange: searchKeywords,
                                    value: filterParams.search
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "data-testid": "sort_button",
                                className: `px-2 py-1 rounded ${sortOptions ? " bg-indigo-100 text-blue-700" : ""}`,
                                title: "Sort",
                                onClick: ()=>showSortOptions(!sortOptions),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: "sort",
                                    size: 18
                                })
                            }),
                            sortOptions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                "data-testid": "sort_options",
                                className: "sort_options mt-2 border absolute min-w-[0] right-0 rounded-lg max-h-96 bg-white z-[9999] w-44 overflow-y-auto styled-scrollbar",
                                children: sortOptionChoices.map((sortOption)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: sortItemStyle(sortOption.value),
                                        onClick: ()=>{
                                            updateSort(sortOption.value);
                                            showSortOptions(false);
                                        },
                                        children: sortOption.label
                                    }, sortOption.value);
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeasFilters);


/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5158);
/* harmony import */ var _utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5686);
/* harmony import */ var _common_ChartSlim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8304);






const KeywordIdea = (props)=>{
    const { keywordData , selected , lastItem , selectKeyword , style , isFavorite =false , favoriteKeyword , showKeywordDetails  } = props;
    const { keyword , uid , position , country , monthlySearchVolumes , avgMonthlySearches , competition , competitionIndex  } = keywordData;
    const chartData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const chartDataObj = {
            labels: [],
            sreies: []
        };
        Object.keys(monthlySearchVolumes).forEach((dateKey)=>{
            chartDataObj.labels.push(dateKey);
            chartDataObj.sreies.push(parseInt(monthlySearchVolumes[dateKey], 10));
        });
        return chartDataObj;
    }, [
        monthlySearchVolumes
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: style,
        className: `keyword relative py-5 px-4 text-gray-600 border-b-[1px] border-gray-200 lg:py-4 lg:px-6 lg:border-0 
      lg:flex lg:justify-between lg:items-center ${selected ? " bg-indigo-50 keyword--selected" : ""} ${lastItem ? "border-b-0" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " w-3/4 lg:flex-1 lg:basis-20 lg:w-auto font-semibold cursor-pointer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `p-0 mr-2 leading-[0px] inline-block rounded-sm pt-0 px-[1px] pb-[3px] border 
               ${selected ? " bg-blue-700 border-blue-700 text-white" : "text-transparent"}`,
                        onClick: ()=>selectKeyword(uid),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            type: "check",
                            size: 10
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "py-2 hover:text-blue-600",
                        onClick: ()=>showKeywordDetails(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `fflag fflag-${country} w-[18px] h-[12px] mr-2`,
                                title: _utils_countries__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP[country] && _utils_countries__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP[country][0]
                            }),
                            keyword
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `ml-2 hover:text-yellow-600 hover:opacity-100 ${isFavorite ? "text-yellow-600" : " opacity-50"}`,
                        onClick: ()=>favoriteKeyword(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            type: isFavorite ? "star-filled" : "star",
                            classes: "top-[4px]",
                            size: 18
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "keyword_imp text-center inline-block ml-6 lg:ml-0 lg:flex-1 ",
                children: [
                    (0,_utils_client_helpers__WEBPACK_IMPORTED_MODULE_5__/* .formattedNum */ .y)(avgMonthlySearches),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "lg:hidden",
                        children: "/month"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>showKeywordDetails(),
                className: `keyword_visits text-center hidden mt-4 mr-5 ml-5 cursor-pointer
         lg:flex-1 lg:m-0 lg:ml-10 max-w-[70px] lg:max-w-none lg:pr-5 lg:flex justify-center`,
                children: chartData.labels.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ChartSlim__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    labels: chartData.labels,
                    sreies: chartData.sreies,
                    noMaxLimit: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "keyword_ctr text-center inline-block ml-4 lg:flex mt-4 relative lg:flex-1 lg:m-0 justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `idea_competiton idea_competiton--${competition} flex bg-slate-100 rounded w-28 text-xs font-semibold`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: " inline-block p-1 flex-1",
                            children: [
                                competitionIndex,
                                "/100"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: " inline-block p-1 flex-1 rounded-e text-white",
                            children: competition
                        })
                    ]
                })
            })
        ]
    }, keyword);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeywordIdea);


/***/ }),

/***/ 5283:
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
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_keywords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4789);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1015);
/* harmony import */ var _KeywordIdea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2741);
/* harmony import */ var _hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5002);
/* harmony import */ var _hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4523);
/* harmony import */ var _utils_client_IdeasSortFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2255);
/* harmony import */ var _IdeasFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7030);
/* harmony import */ var _services_adwords__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9818);
/* harmony import */ var _IdeaDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1317);
/* harmony import */ var _services_domains__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6733);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _services_keywords__WEBPACK_IMPORTED_MODULE_6__, _services_adwords__WEBPACK_IMPORTED_MODULE_12__, _IdeaDetails__WEBPACK_IMPORTED_MODULE_13__, _services_domains__WEBPACK_IMPORTED_MODULE_14__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _services_keywords__WEBPACK_IMPORTED_MODULE_6__, _services_adwords__WEBPACK_IMPORTED_MODULE_12__, _IdeaDetails__WEBPACK_IMPORTED_MODULE_13__, _services_domains__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const IdeasKeywordsTable = ({ domain , keywords =[] , favorites =[] , isLoading =true , isAdwordsIntegrated =true , setShowFavorites , showFavorites =false , noIdeasDatabase =false  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: selectedKeywords , 1: setSelectedKeywords  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: showKeyDetails , 1: setShowKeyDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: filterParams , 1: setFilterParams  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        countries: [],
        tags: [],
        search: ""
    });
    const { 0: sortBy , 1: setSortBy  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("imp_desc");
    const { 0: listHeight , 1: setListHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(500);
    const { 0: addKeywordDevice , 1: setAddKeywordDevice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("desktop");
    const { 0: addKeywordDomain , 1: setAddKeywordDomain  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { mutate: addKeywords  } = (0,_services_keywords__WEBPACK_IMPORTED_MODULE_6__/* .useAddKeywords */ .Y9)(()=>{
        if (domain && domain.slug) router.push(`/domain/${domain.slug}`);
    });
    const { mutate: faveKeyword , isLoading: isFaving  } = (0,_services_adwords__WEBPACK_IMPORTED_MODULE_12__/* .useMutateFavKeywordIdeas */ .ay)(router);
    const [isMobile] = (0,_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const isResearchPage = router.pathname === "/research";
    const { data: domainsData  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)("domains", ()=>(0,_services_domains__WEBPACK_IMPORTED_MODULE_14__/* .fetchDomains */ .NP)(router, false), {
        enabled: selectedKeywords.length > 0,
        retry: false
    });
    const theDomains = domainsData && domainsData.domains || [];
    (0,_hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(()=>setListHeight(window.innerHeight - (isMobile ? 200 : 400)));
    const finalKeywords = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const filteredKeywords = (0,_utils_client_IdeasSortFilter__WEBPACK_IMPORTED_MODULE_16__/* .IdeasfilterKeywords */ .b)(showFavorites ? favorites : keywords, filterParams);
        const sortedKeywords = (0,_utils_client_IdeasSortFilter__WEBPACK_IMPORTED_MODULE_16__/* .IdeasSortKeywords */ .l)(filteredKeywords, sortBy);
        return sortedKeywords;
    }, [
        keywords,
        showFavorites,
        favorites,
        filterParams,
        sortBy
    ]);
    const favoriteIDs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>favorites.map((fav)=>fav.uid), [
        favorites
    ]);
    const allTags = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const wordTags = new Map();
        keywords.forEach((k)=>{
            const keywordsArray = k.keyword.split(" ");
            const keywordFirstTwoWords = keywordsArray.slice(0, 2).join(" ");
            const keywordFirstTwoWordsReversed = keywordFirstTwoWords.split(" ").reverse().join(" ");
            if (!wordTags.has(keywordFirstTwoWordsReversed)) {
                wordTags.set(keywordFirstTwoWords, 0);
            }
        });
        [
            ...wordTags
        ].forEach((tag)=>{
            const foundTags = keywords.filter((kw)=>kw.keyword.includes(tag[0]) || kw.keyword.includes(tag[0].split(" ").reverse().join(" ")));
            if (foundTags.length < 3) {
                wordTags.delete(tag[0]);
            } else {
                wordTags.set(tag[0], foundTags.length);
            }
        });
        const finalWordTags = [
            ...wordTags
        ].sort((a, b)=>a[1] > b[1] ? -1 : 1).map((t)=>`${t[0]} (${t[1]})`);
        return finalWordTags;
    }, [
        keywords
    ]);
    const selectKeyword = (keywordID)=>{
        let updatedSelectd = [
            ...selectedKeywords,
            keywordID
        ];
        if (selectedKeywords.includes(keywordID)) {
            updatedSelectd = selectedKeywords.filter((keyID)=>keyID !== keywordID);
        }
        setSelectedKeywords(updatedSelectd);
    };
    const favoriteKeyword = (keywordID)=>{
        if (!isFaving) {
            faveKeyword({
                keywordID,
                domain: isResearchPage ? "research" : domain?.slug
            });
        }
    };
    const addKeywordIdeasToTracker = ()=>{
        const selectedkeywords = [];
        keywords.forEach((kitem)=>{
            if (selectedKeywords.includes(kitem.uid)) {
                const { keyword , country  } = kitem;
                selectedkeywords.push({
                    keyword,
                    device: addKeywordDevice,
                    country,
                    domain: isResearchPage ? addKeywordDomain : domain?.domain || "",
                    tags: ""
                });
            }
        });
        addKeywords(selectedkeywords);
        setSelectedKeywords([]);
    };
    const selectedAllItems = selectedKeywords.length === finalKeywords.length;
    const Row = ({ data , index , style  })=>{
        const keyword = data[index];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_KeywordIdea__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            style: style,
            selected: selectedKeywords.includes(keyword.uid),
            selectKeyword: selectKeyword,
            favoriteKeyword: ()=>favoriteKeyword(keyword.uid),
            showKeywordDetails: ()=>setShowKeyDetails(keyword),
            isFavorite: favoriteIDs.includes(keyword.uid),
            keywordData: keyword,
            lastItem: index === finalKeywords.length - 1
        }, keyword.uid);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "domKeywords flex flex-col bg-[white] rounded-md text-sm border mb-5",
                children: [
                    selectedKeywords.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-semibold text-sm py-4 px-8 text-gray-500 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `inline-block ${isResearchPage ? " mr-2" : ""}`,
                                children: "Add Keywords to Tracker"
                            }),
                            isResearchPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                selected: [],
                                options: theDomains.map((d)=>({
                                        label: d.domain,
                                        value: d.domain
                                    })),
                                defaultLabel: "Select a Domain",
                                updateField: (updated)=>updated[0] && setAddKeywordDomain(updated[0]),
                                emptyMsg: "No Domains Found",
                                multiple: false,
                                inline: true,
                                rounded: "rounded"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "inline-block ml-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `inline-block px-2 py-1 rounded-s 
                     ${addKeywordDevice === "desktop" ? "bg-indigo-100 text-blue-700" : "bg-indigo-50 "}`,
                                        onClick: ()=>setAddKeywordDevice("desktop"),
                                        children: [
                                            addKeywordDevice === "desktop" ? "◉" : "○",
                                            " Desktop"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `inline-block px-2 py-1 rounded-e ${addKeywordDevice === "mobile" ? "bg-indigo-100 text-blue-700" : "bg-indigo-50 "}`,
                                        onClick: ()=>setAddKeywordDevice("mobile"),
                                        children: [
                                            addKeywordDevice === "mobile" ? "◉" : "○",
                                            " Mobile"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block px-2 py-2 cursor-pointer hover:text-indigo-600",
                                onClick: ()=>addKeywordIdeasToTracker(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: " text-white bg-blue-700 px-2 py-1 rounded font-semibold",
                                    children: "+ Add Keywords"
                                })
                            })
                        ]
                    }),
                    selectedKeywords.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IdeasFilter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        allTags: allTags,
                        filterParams: filterParams,
                        filterKeywords: (params)=>setFilterParams(params),
                        updateSort: (sorted)=>setSortBy(sorted),
                        sortBy: sortBy,
                        keywords: keywords,
                        favorites: favorites,
                        showFavorites: (show)=>{
                            setShowFavorites(show);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "domkeywordsTable domkeywordsTable--sckeywords styled-scrollbar w-full overflow-auto min-h-[60vh]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " lg:min-w-[800px]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `domKeywords_head domKeywords_head--${sortBy} hidden lg:flex p-3 px-6 bg-[#FCFCFF]
                   text-gray-600 justify-between items-center font-semibold border-y`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "domKeywords_head_keyword flex-1 basis-20 w-auto ",
                                            children: [
                                                finalKeywords.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: `p-0 mr-2 leading-[0px] inline-block rounded-sm pt-0 px-[1px] pb-[3px]  border border-slate-300 
                           ${selectedAllItems ? " bg-blue-700 border-blue-700 text-white" : "text-transparent"}`,
                                                    onClick: ()=>setSelectedKeywords(selectedAllItems ? [] : finalKeywords.map((k)=>k.uid)),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        type: "check",
                                                        size: 10
                                                    })
                                                }),
                                                "Keyword"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "domKeywords_head_vol flex-1 text-center",
                                            children: "Monthly Search"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "domKeywords_head_trend flex-1 text-center",
                                            children: "Search Trend"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "domKeywords_head_competition flex-1 text-center",
                                            children: "Competition"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "domKeywords_keywords border-gray-200 min-h-[55vh] relative",
                                    "data-domain": domain?.domain,
                                    children: [
                                        !isLoading && finalKeywords && finalKeywords.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_window__WEBPACK_IMPORTED_MODULE_5__.FixedSizeList, {
                                            innerElementType: "div",
                                            itemData: finalKeywords,
                                            itemCount: finalKeywords.length,
                                            itemSize: isMobile ? 100 : 57,
                                            height: listHeight,
                                            width: "100%",
                                            className: "styled-scrollbar",
                                            children: Row
                                        }),
                                        isAdwordsIntegrated && isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " p-9 pt-[10%] text-center text-gray-500",
                                            children: "Loading Keywords Ideas..."
                                        }),
                                        isAdwordsIntegrated && noIdeasDatabase && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " p-9 pt-[10%] text-center text-gray-500",
                                            children: 'No keyword Ideas has been generated for this domain yet. Click the "Load Ideas" button to generate keyword ideas.'
                                        }),
                                        isAdwordsIntegrated && !isLoading && finalKeywords.length === 0 && !noIdeasDatabase && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " p-9 pt-[10%] text-center text-gray-500",
                                            children: 'No Keyword Ideas found. Please try generating Keyword Ideas again by clicking the "Load Ideas" button.'
                                        }),
                                        !isAdwordsIntegrated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: " p-9 pt-[10%] text-center text-gray-500",
                                            children: [
                                                "Google Ads has not been Integrated yet. Please follow ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-indigo-600 underline",
                                                    href: "https://docs.serpbear.com/miscellaneous/integrate-google-ads",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "These Steps"
                                                }),
                                                " to integrate Google Ads."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            showKeyDetails && showKeyDetails.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IdeaDetails__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                keyword: showKeyDetails,
                closeDetails: ()=>setShowKeyDetails(null)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {
                position: "bottom-center",
                containerClassName: "react_toaster"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdeasKeywordsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ IdeasfilterKeywords),
/* harmony export */   "l": () => (/* binding */ IdeasSortKeywords)
/* harmony export */ });
/**
 * Sorrt Keyword Ideas by user's given input.
 * @param {IdeaKeyword[]} theKeywords - The Keywords to sort.
 * @param {string} sortBy - The sort method.
 * @returns {IdeaKeyword[]}
 */ const IdeasSortKeywords = (theKeywords, sortBy)=>{
    let sortedItems = [];
    switch(sortBy){
        case "vol_asc":
            sortedItems = theKeywords.sort((a, b)=>a.avgMonthlySearches > b.avgMonthlySearches ? 1 : -1);
            break;
        case "vol_desc":
            sortedItems = theKeywords.sort((a, b)=>b.avgMonthlySearches > a.avgMonthlySearches ? 1 : -1);
            break;
        case "competition_asc":
            sortedItems = theKeywords.sort((a, b)=>b.competitionIndex > a.competitionIndex ? 1 : -1);
            break;
        case "competition_desc":
            sortedItems = theKeywords.sort((a, b)=>a.competitionIndex > b.competitionIndex ? 1 : -1);
            break;
        default:
            return theKeywords;
    }
    return sortedItems;
};
/**
 * Filters the keyword Ideas by country, search string or tags.
 * @param {IdeaKeyword[]} keywords - The keywords.
 * @param {KeywordFilters} filterParams - The user Selected filter object.
 * @returns {IdeaKeyword[]}
 */ const IdeasfilterKeywords = (keywords, filterParams)=>{
    const filteredItems = [];
    keywords.forEach((keywrd)=>{
        const { keyword , country  } = keywrd;
        const countryMatch = filterParams.countries.length === 0 ? true : filterParams.countries && filterParams.countries.includes(country);
        const searchMatch = !filterParams.search ? true : filterParams.search && keyword.includes(filterParams.search);
        const tagsMatch = filterParams.tags.length === 0 ? true : filterParams.tags.find((tag)=>{
            const theTag = tag.replace(/\s*\(\d+\)/, "");
            const reversedTag = theTag.split(" ").reverse().join(" ");
            return keyword.includes(theTag) || keyword.includes(reversedTag);
        });
        if (countryMatch && searchMatch && tagsMatch) {
            filteredItems.push(keywrd);
        }
    });
    return filteredItems;
};


/***/ })

};
;