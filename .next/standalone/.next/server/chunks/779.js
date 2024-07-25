"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 2381:
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
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5158);





const KeywordFilters = (props)=>{
    const { device , setDevice , filterKeywords , allTags =[] , keywords =[] , updateSort , sortBy , filterParams , isConsole =false , integratedConsole =false , SCcountries =[] ,  } = props;
    const { 0: sortOptions , 1: showSortOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: filterOptions , 1: showFilterOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const keywordCounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const counts = {
            desktop: 0,
            mobile: 0
        };
        if (keywords && keywords.length > 0) {
            keywords.forEach((k)=>{
                if (k.device === "desktop") {
                    counts.desktop += 1;
                } else {
                    counts.mobile += 1;
                }
            });
        }
        return counts;
    }, [
        keywords
    ]);
    const filterCountry = (cntrs)=>filterKeywords({
            ...filterParams,
            countries: cntrs
        });
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
    const countryOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const optionObject = [];
        Object.keys(_utils_countries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP).forEach((countryISO)=>{
            if (!isConsole || isConsole && SCcountries.includes(countryISO)) {
                optionObject.push({
                    label: _utils_countries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP[countryISO][0],
                    value: countryISO
                });
            }
        });
        return optionObject;
    }, [
        SCcountries,
        isConsole
    ]);
    const sortOptionChoices = [
        {
            value: "pos_asc",
            label: "Top Position"
        },
        {
            value: "pos_desc",
            label: "Lowest Position"
        },
        {
            value: "date_asc",
            label: "Most Recent (Default)"
        },
        {
            value: "date_desc",
            label: "Oldest"
        },
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
    ];
    if (integratedConsole) {
        sortOptionChoices.push({
            value: "imp_desc",
            label: `Most Viewed${isConsole ? " (Default)" : ""}`
        });
        sortOptionChoices.push({
            value: "imp_asc",
            label: "Least Viewed"
        });
        sortOptionChoices.push({
            value: "visits_desc",
            label: "Most Visited"
        });
        sortOptionChoices.push({
            value: "visits_asc",
            label: "Least Visited"
        });
    }
    if (isConsole) {
        sortOptionChoices.splice(2, 2);
        sortOptionChoices.push({
            value: "ctr_asc",
            label: "Highest CTR"
        });
        sortOptionChoices.push({
            value: "ctr_desc",
            label: "Lowest CTR"
        });
    }
    const sortItemStyle = (sortType)=>{
        return `cursor-pointer py-2 px-3 hover:bg-[#FCFCFF] ${sortBy === sortType ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-50" : ""}`;
    };
    const deviceTabStyle = "select-none cursor-pointer px-3 py-2 rounded-3xl mr-2";
    const deviceTabCountStyle = "px-2 py-0 rounded-3xl bg-[#DEE1FC] text-[0.7rem] font-bold ml-1";
    const mobileFilterOptionsStyle = "visible mt-8 border absolute min-w-[0] rounded-lg max-h-96 bg-white z-50 w-52 right-2 p-4";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "domKeywords_filters py-4 px-6 flex justify-between text-sm text-gray-500 font-semibold border-b-[1px] lg:border-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex text-xs",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            "data-testid": "desktop_tab",
                            className: `${deviceTabStyle} ${device === "desktop" ? " bg-[#F8F9FF] text-gray-700" : ""}`,
                            onClick: ()=>setDevice("desktop"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: "desktop",
                                    classes: "top-[3px]",
                                    size: 15
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "hidden not-italic lg:inline-block ml-1",
                                    children: "Desktop"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${deviceTabCountStyle}`,
                                    children: keywordCounts.desktop
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            "data-testid": "mobile_tab",
                            className: `${deviceTabStyle} ${device === "mobile" ? " bg-[#F8F9FF] text-gray-700" : ""}`,
                            onClick: ()=>setDevice("mobile"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    type: "mobile"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "hidden not-italic lg:inline-block ml-1",
                                    children: "Mobile"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${deviceTabCountStyle}`,
                                    children: keywordCounts.mobile
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "country_filter mb-2 lg:mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    selected: filterParams.countries,
                                    options: countryOptions,
                                    defaultLabel: "All Countries",
                                    updateField: (updated)=>filterCountry(updated),
                                    flags: true
                                })
                            }),
                            !isConsole && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tags_filter mb-2 lg:mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    selected: filterParams.tags,
                                    options: allTags.map((tag)=>({
                                            label: tag,
                                            value: tag
                                        })),
                                    defaultLabel: "All Tags",
                                    updateField: (updated)=>filterTags(updated),
                                    emptyMsg: "No Tags Found for this Domain"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 lg:mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    "data-testid": "filter_input",
                                    className: "border w-44 lg:w-36 focus:w-44 transition-all rounded-3xl p-1.5 px-4 outline-none ring-0 focus:border-indigo-200",
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
                                className: "sort_options mt-2 border absolute w-48 min-w-[0] right-0 rounded-lg max-h-96 bg-white z-[9999] overflow-y-auto styled-scrollbar",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeywordFilters);


/***/ }),

/***/ 1399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1015);


const KeywordPosition = ({ position =0 , type ="" , updating =false  })=>{
    if (!updating && position === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-gray-400",
            title: "Not in Top 100",
            children: ">100"
        });
    }
    if (updating && type !== "sc") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            title: "Updating Keyword Position",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                type: "loading"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Math.round(position)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeywordPosition);


/***/ })

};
;