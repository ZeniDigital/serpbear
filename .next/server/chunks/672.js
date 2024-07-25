"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 1602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./services/misc.tsx

async function fetchChangelog() {
    const res = await fetch("https://api.github.com/repos/towfiqi/serpbear/releases", {
        method: "GET"
    });
    return res.json();
}
function useFetchChangelog() {
    return (0,external_react_query_.useQuery)("changelog", ()=>fetchChangelog(), {
        cacheTime: 60 * 60 * 1000
    });
}

// EXTERNAL MODULE: external "react-timeago"
var external_react_timeago_ = __webpack_require__(2766);
var external_react_timeago_default = /*#__PURE__*/__webpack_require__.n(external_react_timeago_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./components/common/Icon.tsx
var Icon = __webpack_require__(1015);
// EXTERNAL MODULE: ./hooks/useOnKey.tsx
var useOnKey = __webpack_require__(3251);
;// CONCATENATED MODULE: ./components/common/SidePanel.tsx




const SidePanel = ({ children , closePanel , width , position ="right" , title =""  })=>{
    (0,useOnKey/* default */.Z)("Escape", closePanel);
    const closeOnBGClick = (e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
            closePanel();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "SidePanel fixed w-full h-screen top-0 left-0 z-50",
        onClick: closeOnBGClick,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `absolute w-full max-w-md  border-l border-l-gray-400 bg-white customShadow top-0 
         ${position === "left" ? "left-0" : "right-0"} h-screen`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "SidePanel__header px-5 py-4 text-slate-500 border-b border-b-gray-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: " text-black text-lg font-bold",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: " absolute top-2 right-2 p-2 px- text-gray-400 hover:text-gray-700 transition-all hover:rotate-90",
                            onClick: ()=>closePanel(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                                type: "close",
                                size: 24
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const common_SidePanel = (SidePanel);

;// CONCATENATED MODULE: ./components/settings/Changelog.tsx







const Markdown = /*#__PURE__*/ external_react_default().lazy(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3135)));
const ChangeLogloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full h-full absolute flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
            type: "loading",
            size: 36,
            color: "#999"
        })
    });
};
const ChangeLog = ({ closeChangeLog  })=>{
    const { data: changeLogData , isLoading  } = useFetchChangelog();
    (0,external_react_.useLayoutEffect)(()=>{
        document.body.style.overflow = "hidden";
        // eslint-disable-next-line no-unused-expressions
        ()=>{
            console.log("run CleanUp !");
            document.body.style.overflow = "auto";
        };
    }, []);
    const onClose = ()=>{
        document.body.style.overflow = "auto";
        closeChangeLog();
    };
    const changeLogs = (0,external_react_.useMemo)(()=>{
        if (changeLogData && Array.isArray(changeLogData)) {
            return changeLogData.map(({ name ="" , body , published_at  })=>({
                    version: name,
                    major: !!name.match(/v\d+\.0+\.0/),
                    date: published_at,
                    content: body.replaceAll(/^(##|###) \[([^\]]+)\]\(([^)]+)\) \(([^)]+)\)/g, "").replaceAll(/\(\[(.*?)\]\((https:\/\/github\.com\/towfiqi\/serpbear\/commit\/([a-f0-9]{40}))\)\)/g, "")
                }));
        }
        return [];
    }, [
        changeLogData
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(common_SidePanel, {
        title: "SerpBear Changelog",
        closePanel: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Suspense, {
            fallback: /*#__PURE__*/ jsx_runtime_.jsx(ChangeLogloader, {}),
            children: [
                !isLoading && changeLogs.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "changelog-body bg-[#f8f9ff] px-6 pt-4 pb-10 overflow-y-auto styled-scrollbar",
                    children: changeLogs.map(({ version , content , date , major  })=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `domKeywords bg-white rounded mb-6 border ${major ? " border-indigo-400" : "border-transparent"}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    className: " px-5 py-3 border-b border-b-gray-100 flex justify-between text-indigo-700 font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: `https://github.com/towfiqi/serpbear/releases/tag/${version}`,
                                            children: [
                                                version,
                                                " ",
                                                major && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: " text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded ml-2",
                                                    children: "Major"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " text-sm text-gray-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_timeago_default()), {
                                                title: external_dayjs_default()(date).format("DD-MMM-YYYY, hh:mm:ss A"),
                                                date: date
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "changelog-content px-5 py-3 text-sm text-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Markdown, {
                                        children: content
                                    })
                                })
                            ]
                        }, version);
                    })
                }),
                isLoading && /*#__PURE__*/ jsx_runtime_.jsx(ChangeLogloader, {})
            ]
        })
    });
};
/* harmony default export */ const Changelog = (ChangeLog);

;// CONCATENATED MODULE: ./components/common/Footer.tsx





const Footer = ({ currentVersion =""  })=>{
    const { 0: showChangelog , 1: setShowChangelog  } = (0,external_react_.useState)(false);
    const { data: changeLogs  } = useFetchChangelog();
    const latestVersionNum = changeLogs && Array.isArray(changeLogs) && changeLogs[0] ? changeLogs[0].name : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "text-center flex flex-1 justify-center pb-5 items-end",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-gray-500 text-xs",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "cursor-pointer",
                        onClick: ()=>setShowChangelog(true),
                        children: [
                            "ZeniBot v",
                            currentVersion || "0.0.0"
                        ]
                    }),
                    currentVersion && latestVersionNum && `v${currentVersion}` !== latestVersionNum && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "cursor-pointer text-indigo-700 font-semibold",
                        onClick: ()=>setShowChangelog(true),
                        children: [
                            " ",
                            "| Nah ",
                            latestVersionNum,
                            " (latest)"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                in: showChangelog,
                timeout: 300,
                classNames: "settings_anim",
                unmountOnExit: true,
                mountOnEnter: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Changelog, {
                    closeChangeLog: ()=>setShowChangelog(false)
                })
            })
        ]
    });
};
/* harmony default export */ const common_Footer = (Footer);


/***/ }),

/***/ 4541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const InputField = ({ label ="" , value ="" , placeholder ="" , onChange , hasError =false  })=>{
    const labelStyle = "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "field--input w-full relative flex justify-between items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: labelStyle,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: `p-2 border border-gray-200 rounded focus:outline-none w-[210px]
             focus:border-blue-200 ${hasError ? " border-red-400 focus:border-red-400" : ""} `,
                type: "text",
                value: value,
                onChange: (event)=>onChange(event.target.value),
                autoComplete: "off",
                placeholder: placeholder
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);


/***/ }),

/***/ 3972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);



const SecretField = ({ label ="" , value ="" , placeholder ="" , onChange , hasError =false  })=>{
    const { 0: showValue , 1: setShowValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const labelStyle = "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "settings__section__secret w-full relative flex justify-between items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: labelStyle,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute top-1 right-0 px-2 py-1 cursor-pointer text-gray-400 select-none",
                onClick: ()=>setShowValue(!showValue),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    type: showValue ? "eye-closed" : "eye",
                    size: 18
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: `w-[210px] p-2 border border-gray-200 rounded focus:outline-none 
             focus:border-blue-200 ${hasError ? " border-red-400 focus:border-red-400" : ""} `,
                type: showValue ? "text" : "password",
                value: value,
                onChange: (event)=>onChange(event.target.value),
                autoComplete: "off",
                placeholder: placeholder
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecretField);


/***/ }),

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);



const SelectField = (props)=>{
    const { options , selected , defaultLabel ="Select an Option" , multiple =true , updateField , minWidth =180 , maxHeight =96 , fullWidth =false , rounded ="rounded-3xl" , inline =false , flags =false , label ="" , emptyMsg =""  } = props;
    const { 0: showOptions , 1: setShowOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: filterInput , 1: setFilterInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: filterdOptions , 1: setFilterdOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const selectedLabels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return options.reduce((acc, item)=>{
            return selected.includes(item.value) ? [
                ...acc,
                item.label
            ] : [
                ...acc
            ];
        }, []);
    }, [
        selected,
        options
    ]);
    const selectItem = (option)=>{
        let updatedSelect = [
            option.value
        ];
        if (multiple && Array.isArray(selected)) {
            if (selected.includes(option.value)) {
                updatedSelect = selected.filter((x)=>x !== option.value);
            } else {
                updatedSelect = [
                    ...selected,
                    option.value
                ];
            }
        }
        updateField(updatedSelect);
        if (!multiple) {
            setShowOptions(false);
        }
    };
    const filterOptions = (event)=>{
        setFilterInput(event.currentTarget.value);
        const filteredItems = [];
        const userVal = event.currentTarget.value.toLowerCase();
        options.forEach((option)=>{
            if (flags ? option.label.toLowerCase().startsWith(userVal) : option.label.toLowerCase().includes(userVal)) {
                filteredItems.push(option);
            }
        });
        setFilterdOptions(filteredItems);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `select font-semibold text-gray-500 relative ${inline ? "inline-block" : "flex"} justify-between items-center"`,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `selected flex border ${rounded} p-1.5 px-4 cursor-pointer select-none ${fullWidth ? "w-full" : "w-[210px]"} 
         min-w-[${minWidth}px] ${showOptions ? "border-indigo-200" : ""}`,
                onClick: ()=>setShowOptions(!showOptions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "w-full inline-block truncate mr-2 capitalize",
                        children: selected.length > 0 ? selectedLabels.slice(0, 2).join(", ") : defaultLabel
                    }),
                    multiple && selected.length > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `px-2 py-0 ${rounded} bg-[#eaecff] text-[0.7rem] font-bold`,
                        children: selected.length
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ml-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            type: showOptions ? "caret-up" : "caret-down",
                            size: 9
                        })
                    })
                ]
            }),
            showOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `select_list mt-1 border absolute min-w-[${minWidth}px] top-[30px] right-0 ${fullWidth ? "w-full" : "w-[210px]"}
            ${rounded === "rounded-3xl" ? "rounded-lg" : rounded} max-h-${maxHeight} bg-white z-50 overflow-y-auto styled-scrollbar`,
                children: [
                    options.length > 20 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: " border-b-[1px] p-3 w-full focus:outline-0 focus:border-blue-100",
                            type: "text",
                            placeholder: "Search..",
                            onChange: filterOptions,
                            value: filterInput
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: (options.length > 20 && filterdOptions.length > 0 && filterInput ? filterdOptions : options).map((opt)=>{
                            const itemActive = selected.includes(opt.value);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `select-none cursor-pointer px-3 py-2 hover:bg-[#FCFCFF] capitalize text-ellipsis overflow-hidden
                        ${itemActive ? " bg-indigo-50 text-indigo-600 hover:bg-indigo-50" : ""} `,
                                onClick: ()=>selectItem(opt),
                                children: [
                                    multiple && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `p-0 mr-2 leading-[0px] inline-block rounded-sm pt-0 px-[1px] pb-[3px] border
                                 ${itemActive ? " bg-indigo-600 border-indigo-600 text-white" : "text-transparent"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            type: "check",
                                            size: 10
                                        })
                                    }),
                                    flags && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `fflag fflag-${opt.value} w-[15px] h-[10px] mr-1`
                                    }),
                                    opt.label
                                ]
                            }, opt.value);
                        })
                    }),
                    emptyMsg && options.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "p-4",
                        children: emptyMsg
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectField);


/***/ }),

/***/ 9382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ToggleField = ({ label ="" , value =false , onChange , classNames =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `field--toggle w-full relative ${classNames}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "relative inline-flex items-center cursor-pointer w-full justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-sm font-medium text-gray-900 dark:text-gray-300 w-auto",
                    children: label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    value: value.toString(),
                    checked: !!value,
                    className: "sr-only peer",
                    onChange: ()=>onChange(!value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative rounded-3xl w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleField);


/***/ }),

/***/ 9401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const TopBar = ({ showSettings , showAddModal  })=>{
    const { 0: showMobileMenu , 1: setShowMobileMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isDomainsPage = router.pathname === "/domains";
    const logoutUser = async ()=>{
        try {
            const fetchOpts = {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                })
            };
            const res = await fetch(`${window.location.origin}/api/logout`, fetchOpts).then((result)=>result.json());
            console.log(res);
            if (!res.success) {
                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"])(res.error, {
                    icon: "⚠️"
                });
            } else {
                router.push("/login");
            }
        } catch (fetchError) {
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"])("Could not login, Ther Server is not responsive.", {
                icon: "⚠️"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `topbar flex w-full mx-auto justify-between 
       ${isDomainsPage ? "max-w-5xl lg:justify-between" : "max-w-7xl lg:justify-end"}  bg-white lg:bg-transparent`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: `p-4 text-base font-bold text-blue-700 ${isDomainsPage ? "lg:pl-0" : "lg:hidden"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: " relative top-[3px] mr-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            type: "logo",
                            size: 24,
                            color: "#364AFF"
                        })
                    }),
                    " ZeniBot",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "px-3 py-1 font-bold text-blue-700 lg:hidden ml-3 text-lg",
                        onClick: ()=>showAddModal(),
                        children: "+"
                    })
                ]
            }),
            !isDomainsPage && router.asPath !== "/research" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/domains",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: " right-14 top-2 px-2 py-1 cursor-pointer bg-[#ecf2ff] hover:bg-indigo-100 transition-all absolute lg:top-3 lg:right-auto lg:left-8 lg:px-3 lg:py-2 rounded-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        type: "caret-left",
                        size: 16,
                        title: "Go Back"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "topbar__right",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " lg:hidden p-3",
                        onClick: ()=>setShowMobileMenu(!showMobileMenu),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            type: "hamburger",
                            size: 24
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: `text-sm font-semibold text-gray-500 absolute mt-[-10px] right-3 bg-white 
            border border-gray-200 lg:mt-2 lg:relative lg:block lg:border-0 lg:bg-transparent ${showMobileMenu ? "block" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `block lg:inline-block lg:ml-5 ${router.asPath === "/domains" ? " text-blue-700" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/domains",
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "block px-3 py-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "domains",
                                                color: router.asPath === "/domains" ? "#1d4ed8" : "#888",
                                                size: 14
                                            }),
                                            " Domains"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `block lg:inline-block lg:ml-5 ${router.asPath === "/research" ? " text-blue-700" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/research",
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "block px-3 py-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                type: "research",
                                                color: router.asPath === "/research" ? "#1d4ed8" : "#888",
                                                size: 14
                                            }),
                                            " Research"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "block lg:inline-block lg:ml-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "block px-3 py-2 cursor-pointer",
                                    onClick: ()=>showSettings(),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: "settings-alt",
                                            color: "#888",
                                            size: 14
                                        }),
                                        " Settings"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "block lg:inline-block lg:ml-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "block px-3 py-2 cursor-pointer",
                                    onClick: ()=>logoutUser(),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            type: "logout",
                                            color: "#888",
                                            size: 14
                                        }),
                                        " Logout"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_adwords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1015);
/* harmony import */ var _common_SecretField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3972);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_adwords__WEBPACK_IMPORTED_MODULE_2__]);
_services_adwords__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AdWordsSettings = ({ settings , settingsError , updateSettings , performUpdate , closeSettings  })=>{
    const { adwords_client_id ="" , adwords_client_secret ="" , adwords_developer_token ="" , adwords_account_id ="" , adwords_refresh_token ="" ,  } = settings || {};
    const { mutate: testAdWordsIntegration , isLoading: isTesting  } = (0,_services_adwords__WEBPACK_IMPORTED_MODULE_2__/* .useTestAdwordsIntegration */ .kd)();
    const { mutate: getAllVolumeData , isLoading: isUpdatingVolume  } = (0,_services_adwords__WEBPACK_IMPORTED_MODULE_2__/* .useMutateKeywordsVolume */ .Ss)();
    const cloudProjectIntegrated = adwords_client_id && adwords_client_secret && adwords_refresh_token;
    const hasAllCredentials = adwords_client_id && adwords_client_secret && adwords_refresh_token && adwords_developer_token && adwords_account_id;
    const udpateAndAuthenticate = ()=>{
        if (adwords_client_id && adwords_client_secret) {
            const link = document.createElement("a");
            link.href = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadwords&response_type=code&client_id=${adwords_client_id}&redirect_uri=${`${encodeURIComponent(window.location.origin)}/api/adwords`}&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow`;
            link.target = "_blank";
            link.click();
            if (performUpdate) {
                performUpdate();
                closeSettings();
            }
        }
    };
    const testIntegration = ()=>{
        if (hasAllCredentials) {
            testAdWordsIntegration({
                developer_token: adwords_developer_token,
                account_id: adwords_account_id
            });
        }
    };
    const updateVolumeData = ()=>{
        if (hasAllCredentials) {
            getAllVolumeData({
                domain: "all"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " border-t border-gray-100 pt-4 pb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: " mb-3 font-semibold text-blue-700",
                            children: "Step 1: Connect Google Cloud Project"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "settings__section__input mb-4 flex justify-between items-center w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: "Client ID",
                                onChange: (client_id)=>updateSettings("adwords_client_id", client_id),
                                value: adwords_client_id,
                                placeholder: "3943006-231f65cjm.apps.googleusercontent.com"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "settings__section__input mb-4 flex justify-between items-center w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: "Client Secret",
                                onChange: (client_secret)=>updateSettings("adwords_client_secret", client_secret),
                                value: adwords_client_secret,
                                placeholder: "GTXSPX-45asaf-u1s252sd6qdE9yc8T"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: `py-2 px-5 w-full text-sm font-semibold rounded  bg-indigo-50 text-blue-700 border border-indigo-100
            ${adwords_client_id && adwords_client_secret ? "cursor-pointer" : " cursor-not-allowed opacity-40"}
             hover:bg-blue-700 hover:text-white transition`,
                            title: "Insert All the data in the above fields to Authenticate",
                            onClick: udpateAndAuthenticate,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    type: "google",
                                    size: 14
                                }),
                                " ",
                                adwords_refresh_token ? "Re-Authenticate" : "Authenticate",
                                " Integration"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-4 border-t mb-4 border-b border-gray-100 pt-4 pb-0 relative",
                    children: [
                        !cloudProjectIntegrated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " absolute w-full h-full z-50"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: " mb-3 font-semibold text-blue-700",
                            children: "Step 2: Connect Google Ads"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: !cloudProjectIntegrated ? "opacity-40" : "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        label: "Developer Token",
                                        onChange: (developer_token)=>updateSettings("adwords_developer_token", developer_token),
                                        value: adwords_developer_token,
                                        placeholder: "4xr6jY94kAxtXk4rfcgc4w"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        label: "Test Account ID",
                                        onChange: (account_id)=>updateSettings("adwords_account_id", account_id),
                                        value: adwords_account_id,
                                        placeholder: "590-948-9101"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `py-2 px-5 w-full text-sm font-semibold rounded bg-indigo-50 text-blue-700 border border-indigo-100
                  ${hasAllCredentials ? "cursor-pointer" : "cursor-not-allowed opacity-40"}
                  hover:bg-blue-700 hover:text-white transition`,
                                        title: hasAllCredentials ? "" : "Insert All the data in the above fields to Test the Integration",
                                        onClick: testIntegration,
                                        children: [
                                            isTesting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                type: "loading"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                type: "adwords",
                                                size: 14
                                            }),
                                            " Test Google Ads Integration"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-4 mb-4 border-b border-gray-100 pt-4 pb-0 relative",
                    children: [
                        !hasAllCredentials && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " absolute w-full h-full z-50"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: " mb-3 font-semibold text-blue-700",
                            children: "Update Keyword Volume Data"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: !hasAllCredentials ? "opacity-40" : "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Update Volume data for all your Tracked Keywords."
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `py-2 px-5 w-full text-sm font-semibold rounded bg-indigo-50 text-blue-700 border border-indigo-100
                  ${hasAllCredentials ? "cursor-pointer" : "cursor-not-allowed opacity-40"}
                  hover:bg-blue-700 hover:text-white transition`,
                                        onClick: updateVolumeData,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                type: isUpdatingVolume ? "loading" : "reload",
                                                size: isUpdatingVolume ? 16 : 12
                                            }),
                                            " Update Keywords Volume Data"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mb-4 text-xs",
                    children: [
                        "Relevant Documentation: ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://docs.serpbear.com/miscellaneous/integrate-google-ads",
                            className: " underline text-blue-600",
                            children: "Integrate Google Ads"
                        }),
                        "."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdWordsSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchConsoleSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6162);
/* harmony import */ var _AdWordsSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7180);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AdWordsSettings__WEBPACK_IMPORTED_MODULE_3__]);
_AdWordsSettings__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const IntegrationSettings = ({ settings , settingsError , updateSettings , performUpdate , closeSettings  })=>{
    const { 0: currentTab , 1: setCurrentTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("searchconsole");
    const tabStyle = "inline-block px-4 py-1 rounded-full mr-3 cursor-pointer text-sm";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "settings__content styled-scrollbar p-6 text-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: `${tabStyle} ${currentTab === "searchconsole" ? " bg-blue-50 text-blue-600" : ""}`,
                            onClick: ()=>setCurrentTab("searchconsole"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "google",
                                    size: 14
                                }),
                                " Search Console"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: `${tabStyle} ${currentTab === "adwords" ? " bg-blue-50 text-blue-600" : ""}`,
                            onClick: ()=>setCurrentTab("adwords"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "adwords",
                                    size: 14
                                }),
                                " Google Ads"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    currentTab === "searchconsole" && settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchConsoleSettings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        settings: settings,
                        updateSettings: updateSettings,
                        settingsError: settingsError
                    }),
                    currentTab === "adwords" && settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdWordsSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        settings: settings,
                        updateSettings: updateSettings,
                        settingsError: settingsError,
                        performUpdate: performUpdate,
                        closeSettings: closeSettings
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5924);
/* harmony import */ var _common_SecretField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3972);
/* harmony import */ var _common_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4541);





const NotificationSettings = ({ settings , settingsError , updateSettings  })=>{
    const labelStyle = "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "settings__content styled-scrollbar p-6 text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "settings__section__input mb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            label: "Notification Frequency",
                            multiple: false,
                            selected: [
                                settings.notification_interval
                            ],
                            options: [
                                {
                                    label: "Daily",
                                    value: "daily"
                                },
                                {
                                    label: "Weekly",
                                    value: "weekly"
                                },
                                {
                                    label: "Monthly",
                                    value: "monthly"
                                },
                                {
                                    label: "Never",
                                    value: "never"
                                }, 
                            ],
                            defaultLabel: "Notification Settings",
                            updateField: (updated)=>updated[0] && updateSettings("notification_interval", updated[0]),
                            rounded: "rounded",
                            maxHeight: 48,
                            minWidth: 220
                        })
                    }),
                    settings.notification_interval !== "never" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "Notification Emails",
                                    hasError: settingsError?.type === "no_email",
                                    value: settings?.notification_email,
                                    placeholder: "test@gmail.com, test2@test.com",
                                    onChange: (value)=>updateSettings("notification_email", value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "SMTP Server",
                                    hasError: settingsError?.type === "no_smtp_server",
                                    value: settings?.smtp_server || "",
                                    placeholder: "test@gmail.com, test2@test.com",
                                    onChange: (value)=>updateSettings("smtp_server", value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "SMTP Port",
                                    hasError: settingsError?.type === "no_smtp_port",
                                    value: settings?.smtp_port || "",
                                    placeholder: "2234",
                                    onChange: (value)=>updateSettings("smtp_port", value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "SMTP Username",
                                    hasError: settingsError?.type === "no_smtp_port",
                                    value: settings?.smtp_username || "",
                                    onChange: (value)=>updateSettings("smtp_username", value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    label: "SMTP Password",
                                    value: settings?.smtp_password || "",
                                    onChange: (value)=>updateSettings("smtp_password", value)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "settings__section__input mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "From Email Address",
                                    hasError: settingsError?.type === "no_smtp_from",
                                    value: settings?.notification_email_from || "",
                                    placeholder: "no-reply@mydomain.com",
                                    onChange: (value)=>updateSettings("notification_email_from", value)
                                })
                            })
                        ]
                    })
                ]
            }),
            settingsError?.msg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-full bottom-16 text-center p-3 bg-red-100 text-red-600 text-sm font-semibold",
                children: settingsError.msg
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationSettings);


/***/ }),

/***/ 4726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1015);
/* harmony import */ var _common_SelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5924);
/* harmony import */ var _common_SecretField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3972);
/* harmony import */ var _common_ToggleField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_settings__WEBPACK_IMPORTED_MODULE_2__]);
_services_settings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ScraperSettings = ({ settings , settingsError , updateSettings  })=>{
    const { mutate: clearFailedMutate , isLoading: clearingQueue  } = (0,_services_settings__WEBPACK_IMPORTED_MODULE_2__/* .useClearFailedQueue */ .dM)(()=>{});
    const scrapingOptions = [
        {
            label: "Daily",
            value: "daily"
        },
        {
            label: "Every Other Day",
            value: "other_day"
        },
        {
            label: "Weekly",
            value: "weekly"
        },
        {
            label: "Monthly",
            value: "monthly"
        },
        {
            label: "Never",
            value: "never"
        }, 
    ];
    const delayOptions = [
        {
            label: "No Delay",
            value: "0"
        },
        {
            label: "5 Seconds",
            value: "5000"
        },
        {
            label: "10 Seconds",
            value: "10000"
        },
        {
            label: "30 Seconds",
            value: "30000"
        },
        {
            label: "1 Minutes",
            value: "60000"
        },
        {
            label: "2 Minutes",
            value: "120000"
        },
        {
            label: "5 Minutes",
            value: "300000"
        },
        {
            label: "10 Minutes",
            value: "600000"
        },
        {
            label: "15 Minutes",
            value: "900000"
        },
        {
            label: "30 Minutes",
            value: "1800000"
        }, 
    ];
    const allScrapers = settings.available_scapers ? settings.available_scapers : [];
    const scraperOptions = [
        {
            label: "None",
            value: "none"
        },
        ...allScrapers
    ];
    const labelStyle = "mb-2 font-semibold inline-block text-sm text-gray-700 capitalize";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "settings__content styled-scrollbar p-6 text-sm",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "settings__section__select mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        label: "Scraping Method",
                        options: scraperOptions,
                        selected: [
                            settings.scraper_type || "none"
                        ],
                        defaultLabel: "Select Scraper",
                        updateField: (updatedTime)=>updateSettings("scraper_type", updatedTime[0]),
                        multiple: false,
                        rounded: "rounded",
                        minWidth: 220
                    })
                }),
                settings.scraper_type !== "none" && settings.scraper_type !== "proxy" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "settings__section__secret mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SecretField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: "Scraper API Key or Token",
                        placeholder: "API Key/Token",
                        value: settings?.scaping_api || "",
                        hasError: settingsError?.type === "no_api_key",
                        onChange: (value)=>updateSettings("scaping_api", value)
                    })
                }),
                settings.scraper_type === "proxy" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "settings__section__input mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: labelStyle,
                            children: "Proxy List"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            className: `w-full p-2 border border-gray-200 rounded mb-3 text-xs 
                  focus:outline-none min-h-[160px] focus:border-blue-200 
                  ${settingsError?.type === "no_email" ? " border-red-400 focus:border-red-400" : ""} `,
                            value: settings?.proxy,
                            placeholder: "http://122.123.22.45:5049\nhttps://user:password@122.123.22.45:5049",
                            onChange: (event)=>updateSettings("proxy", event.target.value)
                        })
                    ]
                }),
                settings.scraper_type !== "none" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "settings__section__input mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            label: "Scraping Frequency",
                            multiple: false,
                            selected: [
                                settings?.scrape_interval || "daily"
                            ],
                            options: scrapingOptions,
                            defaultLabel: "Notification Settings",
                            updateField: (updated)=>updated[0] && updateSettings("scrape_interval", updated[0]),
                            rounded: "rounded",
                            maxHeight: 48,
                            minWidth: 220
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: " text-gray-500 pt-2 block",
                            children: "This option requires Server/Docker Instance Restart to take Effect."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "settings__section__input mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_SelectField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            label: "keyword Scrape Delay",
                            multiple: false,
                            selected: [
                                settings?.scrape_delay || "0"
                            ],
                            options: delayOptions,
                            defaultLabel: "Delay Settings",
                            updateField: (updated)=>updated[0] && updateSettings("scrape_delay", updated[0]),
                            rounded: "rounded",
                            maxHeight: 48,
                            minWidth: 220
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: " text-gray-500 pt-2 block",
                            children: "This option requires Server/Docker Instance Restart to take Effect."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "settings__section__input mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ToggleField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        label: "Auto Retry Failed Keyword Scrape",
                        value: !!settings?.scrape_retry,
                        onChange: (val)=>updateSettings("scrape_retry", val)
                    })
                }),
                settings?.scrape_retry && (settings.failed_queue?.length || 0) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "settings__section__input mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: labelStyle,
                            children: "Clear Failed Retry Queue"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>clearFailedMutate(),
                            className: " py-3 px-5 w-full rounded cursor-pointer bg-gray-100 text-gray-800 font-semibold text-sm hover:bg-gray-200",
                            children: [
                                clearingQueue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    type: "loading",
                                    size: 14
                                }),
                                " Clear Failed Queue (",
                                settings.failed_queue?.length || 0,
                                " Keywords)"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScraperSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4541);



const SearchConsoleSettings = ({ settings , settingsError , updateSettings  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "settings__section__input mb-4 flex justify-between items-center w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_InputField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Search Console Client Email",
                        onChange: (client_email)=>updateSettings("search_console_client_email", client_email),
                        value: settings.search_console_client_email,
                        placeholder: "myapp@appspot.gserviceaccount.com"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "settings__section__input mb-4 flex flex-col justify-between items-center w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "mb-2 font-semibold block text-sm text-gray-700 capitalize w-full",
                            children: "Search Console Private Key"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            className: `w-full p-2 border border-gray-200 rounded mb-3 text-xs 
               focus:outline-none h-[100px] focus:border-blue-200`,
                            value: settings.search_console_private_key,
                            placeholder: "-----BEGIN PRIVATE KEY-----/ssssaswdkihad....",
                            onChange: (event)=>updateSettings("search_console_private_key", event.target.value)
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchConsoleSettings);


/***/ }),

/***/ 6008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9870);
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1015);
/* harmony import */ var _NotificationSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4203);
/* harmony import */ var _ScraperSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4726);
/* harmony import */ var _hooks_useOnKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3251);
/* harmony import */ var _IntegrationSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _services_settings__WEBPACK_IMPORTED_MODULE_3__, _ScraperSettings__WEBPACK_IMPORTED_MODULE_6__, _IntegrationSettings__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _services_settings__WEBPACK_IMPORTED_MODULE_3__, _ScraperSettings__WEBPACK_IMPORTED_MODULE_6__, _IntegrationSettings__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const defaultSettings = {
    scraper_type: "none",
    scrape_delay: "none",
    scrape_retry: false,
    notification_interval: "daily",
    notification_email: "",
    smtp_server: "",
    smtp_port: "",
    smtp_username: "",
    smtp_password: "",
    notification_email_from: "",
    search_console: true,
    search_console_client_email: "",
    search_console_private_key: ""
};
const Settings = ({ closeSettings  })=>{
    const { 0: currentTab , 1: setCurrentTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("scraper");
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSettings);
    const { 0: settingsError , 1: setSettingsError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { mutate: updateMutate , isLoading: isUpdating  } = (0,_services_settings__WEBPACK_IMPORTED_MODULE_3__/* .useUpdateSettings */ .Qp)(()=>console.log(""));
    const { data: appSettings , isLoading  } = (0,_services_settings__WEBPACK_IMPORTED_MODULE_3__/* .useFetchSettings */ .pX)();
    (0,_hooks_useOnKey__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("Escape", closeSettings);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (appSettings && appSettings.settings) {
            setSettings(appSettings.settings);
        }
    }, [
        appSettings
    ]);
    const closeOnBGClick = (e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
            closeSettings();
        }
    };
    const updateSettings = (key, value)=>{
        setSettings({
            ...settings,
            [key]: value
        });
    };
    const performUpdate = ()=>{
        let error = null;
        const { notification_interval , notification_email , notification_email_from , scraper_type , smtp_port , smtp_server , scaping_api  } = settings;
        if (notification_interval !== "never") {
            if (!settings.notification_email) {
                error = {
                    type: "no_email",
                    msg: "Insert a Valid Email address"
                };
            }
            if (notification_email && (!smtp_port || !smtp_server || !notification_email_from)) {
                let type = "no_smtp_from";
                if (!smtp_port) {
                    type = "no_smtp_port";
                }
                if (!smtp_server) {
                    type = "no_smtp_server";
                }
                error = {
                    type,
                    msg: "Insert SMTP Server details that will be used to send the emails."
                };
            }
        }
        if (scraper_type !== "proxy" && scraper_type !== "none" && !scaping_api) {
            error = {
                type: "no_api_key",
                msg: "Insert a Valid API Key or Token for the Scraper Service."
            };
        }
        if (error) {
            setSettingsError(error);
            setTimeout(()=>{
                setSettingsError(null);
            }, 3000);
        } else {
            // Perform Update
            updateMutate(settings);
            // If Scraper is updated, refresh the page.
            if (appSettings.settings === "none" && scraper_type !== "none") {
                window.location.reload();
            }
        }
    };
    const tabStyle = `inline-block px-3 py-2 rounded-md  cursor-pointer text-xs lg:text-sm lg:mr-3 lg:px-4 select-none z-10
   text-gray-600 border border-b-0 relative top-[1px] rounded-b-none`;
    const tabStyleActive = "bg-white text-blue-600 border-slate-200";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "settings fixed w-full h-screen top-0 left-0 z-50",
        onClick: closeOnBGClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute w-full max-w-md bg-white customShadow top-0 right-0 h-screen",
                "data-loading": isLoading,
                children: [
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute flex content-center items-center h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: "loading",
                            size: 24
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "settings__header px-5 py-4 text-slate-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: " text-black text-lg font-bold",
                                children: "Settings"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute top-2 right-2 p-2 px- text-gray-400 hover:text-gray-700 transition-all hover:rotate-90",
                                onClick: ()=>closeSettings(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "close",
                                    size: 24
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border border-slate-200 px-3 py-4 pb-0 border-l-0 border-r-0 bg-[#f8f9ff]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${tabStyle} ${currentTab === "scraper" ? tabStyleActive : "border-transparent "}`,
                                    onClick: ()=>setCurrentTab("scraper"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            type: "scraper"
                                        }),
                                        " Scraper"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${tabStyle} ${currentTab === "notification" ? tabStyleActive : "border-transparent"}`,
                                    onClick: ()=>setCurrentTab("notification"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            type: "email"
                                        }),
                                        " Notification"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `${tabStyle} ${currentTab === "integrations" ? tabStyleActive : "border-transparent"}`,
                                    onClick: ()=>setCurrentTab("integrations"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            type: "integration",
                                            size: 14
                                        }),
                                        " Integrations"
                                    ]
                                })
                            ]
                        })
                    }),
                    currentTab === "scraper" && settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScraperSettings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        settings: settings,
                        updateSettings: updateSettings,
                        settingsError: settingsError
                    }),
                    currentTab === "notification" && settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotificationSettings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        settings: settings,
                        updateSettings: updateSettings,
                        settingsError: settingsError
                    }),
                    currentTab === "integrations" && settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IntegrationSettings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        settings: settings,
                        updateSettings: updateSettings,
                        settingsError: settingsError,
                        performUpdate: performUpdate,
                        closeSettings: closeSettings
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " border-t-[1px] border-gray-200 p-2 px-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>performUpdate(),
                            className: " py-3 px-5 w-full rounded cursor-pointer bg-blue-700 text-white font-semibold text-sm",
                            children: [
                                isUpdating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "loading",
                                    size: 14
                                }),
                                " Update Settings"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {
                position: "bottom-center",
                containerClassName: "react_toaster"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOnKey = (key, onPress)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const closeModalonEsc = (event)=>{
            if (event.key === key) {
                onPress();
            }
        };
        window.addEventListener("keydown", closeModalonEsc, false);
        return ()=>{
            window.removeEventListener("keydown", closeModalonEsc, false);
        };
    }, [
        key,
        onPress
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnKey);


/***/ }),

/***/ 9818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ss": () => (/* binding */ useMutateKeywordsVolume),
/* harmony export */   "WU": () => (/* binding */ useFetchKeywordIdeas),
/* harmony export */   "ay": () => (/* binding */ useMutateFavKeywordIdeas),
/* harmony export */   "kd": () => (/* binding */ useTestAdwordsIntegration),
/* harmony export */   "np": () => (/* binding */ useMutateKeywordIdeas)
/* harmony export */ });
/* unused harmony export fetchAdwordsKeywordIdeas */
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useTestAdwordsIntegration(onSuccess) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (payload)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "POST",
            headers,
            body: JSON.stringify({
                ...payload
            })
        };
        const res = await fetch(`${window.location.origin}/api/adwords`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            console.log("Ideas Added:", data);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Google Ads has been integrated successfully!", {
                icon: "✔️"
            });
            if (onSuccess) {
                onSuccess(false);
            }
        },
        onError: (error)=>{
            console.log("Error Loading Keyword Ideas!!!", error);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Failed to connect to Google Ads. Please make sure you have provided the correct API info.", {
                icon: "⚠️"
            });
        }
    });
}
async function fetchAdwordsKeywordIdeas(router, domainSlug) {
    // if (!router.query.slug) { throw new Error('Invalid Domain Name'); }
    const res = await fetch(`${window.location.origin}/api/ideas?domain=${domainSlug}`, {
        method: "GET"
    });
    if (res.status >= 400 && res.status < 600) {
        if (res.status === 401) {
            console.log("Unauthorized!!");
            router.push("/login");
        }
        throw new Error("Bad response from server");
    }
    return res.json();
}
function useFetchKeywordIdeas(router, adwordsConnected = false) {
    const isResearch = router.pathname === "/research";
    const domainSlug = isResearch ? "research" : router.query.slug;
    const enabled = !!(adwordsConnected && domainSlug);
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(`keywordIdeas-${domainSlug}`, ()=>domainSlug && fetchAdwordsKeywordIdeas(router, domainSlug), {
        enabled,
        retry: false
    });
}
function useMutateKeywordIdeas(router, onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const domainSlug = router.pathname === "/research" ? "research" : router.query.slug;
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (data)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "POST",
            headers,
            body: JSON.stringify({
                ...data
            })
        };
        const res = await fetch(`${window.location.origin}/api/ideas`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            console.log("Ideas Added:", data);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keyword Ideas Loaded Successfully!", {
                icon: "✔️"
            });
            if (onSuccess) {
                onSuccess(false);
            }
            queryClient.invalidateQueries([
                `keywordIdeas-${domainSlug}`
            ]);
        },
        onError: (error)=>{
            console.log("Error Loading Keyword Ideas!!!", error);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Loading Keyword Ideas", {
                icon: "⚠️"
            });
        }
    });
}
function useMutateFavKeywordIdeas(router, onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const domainSlug = router.pathname === "/research" ? "research" : router.query.slug;
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (payload)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers,
            body: JSON.stringify({
                ...payload
            })
        };
        const res = await fetch(`${window.location.origin}/api/ideas`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            console.log("Ideas Added:", data);
            // toast('Keyword Updated!', { icon: '✔️' });
            if (onSuccess) {
                onSuccess(false);
            }
            queryClient.invalidateQueries([
                `keywordIdeas-${domainSlug}`
            ]);
        },
        onError: (error)=>{
            console.log("Error Favorating Keywords", error);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Favorating Keywords", {
                icon: "⚠️"
            });
        }
    });
}
function useMutateKeywordsVolume(onSuccess) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (data)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "POST",
            headers,
            body: JSON.stringify({
                ...data
            })
        };
        const res = await fetch(`${window.location.origin}/api/volume`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            const errorData = await res.json();
            throw new Error(errorData?.error ? errorData.error : "Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keyword Volume Data Loaded Successfully! Reloading Page...", {
                icon: "✔️"
            });
            if (onSuccess) {
                onSuccess(false);
            }
            setTimeout(()=>{
                window.location.reload();
            }, 3000);
        },
        onError: (error)=>{
            console.log("Error Loading Keyword Volume Data!!!", error);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Loading Keyword Volume Data", {
                icon: "⚠️"
            });
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Do": () => (/* binding */ useFetchDomain),
/* harmony export */   "Js": () => (/* binding */ useDeleteDomain),
/* harmony export */   "NP": () => (/* binding */ fetchDomains),
/* harmony export */   "XD": () => (/* binding */ fetchDomainScreenshot),
/* harmony export */   "cT": () => (/* binding */ useAddDomain),
/* harmony export */   "fW": () => (/* binding */ useFetchDomains),
/* harmony export */   "gk": () => (/* binding */ useUpdateDomain)
/* harmony export */ });
/* unused harmony export fetchDomain */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function fetchDomains(router, withStats) {
    const res = await fetch(`${window.location.origin}/api/domains${withStats ? "?withstats=true" : ""}`, {
        method: "GET"
    });
    if (res.status >= 400 && res.status < 600) {
        if (res.status === 401) {
            console.log("Unauthorized!!");
            router.push("/login");
        }
        throw new Error("Bad response from server");
    }
    return res.json();
}
async function fetchDomain(router, domainName) {
    if (!domainName) {
        throw new Error("No Domain Name Provided!");
    }
    const res = await fetch(`${window.location.origin}/api/domain?domain=${domainName}`, {
        method: "GET"
    });
    if (res.status >= 400 && res.status < 600) {
        if (res.status === 401) {
            console.log("Unauthorized!!");
            router.push("/login");
        }
        throw new Error("Bad response from server");
    }
    return res.json();
}
async function fetchDomainScreenshot(domain, screenshot_key, forceFetch = false) {
    const domainThumbsRaw = localStorage.getItem("domainThumbs");
    const domThumbs = domainThumbsRaw ? JSON.parse(domainThumbsRaw) : {};
    if (!domThumbs[domain] || forceFetch) {
        try {
            const screenshotURL = `https://image.thum.io/get/auth/${screenshot_key}/maxAge/96/width/200/https://${domain}`;
            const domainImageRes = await fetch(screenshotURL);
            const domainImageBlob = domainImageRes.status === 200 ? await domainImageRes.blob() : false;
            if (domainImageBlob) {
                const reader = new FileReader();
                await new Promise((resolve, reject)=>{
                    reader.onload = resolve;
                    reader.onerror = reject;
                    reader.readAsDataURL(domainImageBlob);
                });
                const imageBase = reader.result && typeof reader.result === "string" ? reader.result : "";
                localStorage.setItem("domainThumbs", JSON.stringify({
                    ...domThumbs,
                    [domain]: imageBase
                }));
                return imageBase;
            }
            return false;
        } catch (error) {
            return false;
        }
    } else if (domThumbs[domain]) {
        return domThumbs[domain];
    }
    return false;
}
function useFetchDomains(router, withStats = false) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("domains", ()=>fetchDomains(router, withStats));
}
function useFetchDomain(router, domainName, onSuccess) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("domain", ()=>fetchDomain(router, domainName), {
        onSuccess: async (data)=>{
            console.log("Domain Loaded!!!", data.domain);
            onSuccess(data.domain);
        }
    });
}
function useAddDomain(onSuccess) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(async (domains)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "POST",
            headers,
            body: JSON.stringify({
                domains
            })
        };
        const res = await fetch(`${window.location.origin}/api/domains`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            console.log("Domain Added!!!", data);
            const newDomain = data.domains;
            const singleDomain = newDomain.length === 1;
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])(`${singleDomain ? newDomain[0].domain : `${newDomain.length} domains`} Added Successfully!`, {
                icon: "✔️"
            });
            onSuccess(false);
            if (singleDomain) {
                router.push(`/domain/${newDomain[0].slug}`);
            }
            queryClient.invalidateQueries([
                "domains"
            ]);
        },
        onError: ()=>{
            console.log("Error Adding New Domain!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])("Error Adding New Domain");
        }
    });
}
function useUpdateDomain(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(async ({ domainSettings , domain  })=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers,
            body: JSON.stringify(domainSettings)
        };
        const res = await fetch(`${window.location.origin}/api/domains?domain=${domain.domain}`, fetchOpts);
        const responseObj = await res.json();
        if (res.status >= 400 && res.status < 600) {
            throw new Error(responseObj?.error || "Bad response from server");
        }
        return responseObj;
    }, {
        onSuccess: async ()=>{
            console.log("Settings Updated!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])("Settings Updated!", {
                icon: "✔️"
            });
            onSuccess();
            queryClient.invalidateQueries([
                "domains"
            ]);
        },
        onError: (error)=>{
            console.log("Error Updating Domain Settings!!!", error);
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])("Error Updating Domain Settings", {
                icon: "⚠️"
            });
        }
    });
}
function useDeleteDomain(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(async (domain)=>{
        const res = await fetch(`${window.location.origin}/api/domains?domain=${domain.domain}`, {
            method: "DELETE"
        });
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])("Domain Removed Successfully!", {
                icon: "✔️"
            });
            onSuccess();
            queryClient.invalidateQueries([
                "domains"
            ]);
        },
        onError: ()=>{
            console.log("Error Removing Domain!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])("Error Removing Domain", {
                icon: "⚠️"
            });
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ useUpdateSettings),
/* harmony export */   "dM": () => (/* binding */ useClearFailedQueue),
/* harmony export */   "pX": () => (/* binding */ useFetchSettings),
/* harmony export */   "uc": () => (/* binding */ useCheckMigrationStatus)
/* harmony export */ });
/* unused harmony exports fetchSettings, fetchMigrationStatus, useMigrateDatabase */
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function fetchSettings() {
    const res = await fetch(`${window.location.origin}/api/settings`, {
        method: "GET"
    });
    return res.json();
}
function useFetchSettings() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("settings", ()=>fetchSettings());
}
const useUpdateSettings = (onSuccess)=>{
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (settings)=>{
        // console.log('settings: ', JSON.stringify(settings));
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers,
            body: JSON.stringify({
                settings
            })
        };
        const res = await fetch(`${window.location.origin}/api/settings`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            if (onSuccess) {
                onSuccess();
            }
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Settings Updated!", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "settings"
            ]);
        },
        onError: ()=>{
            console.log("Error Updating App Settings!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Updating App Settings.", {
                icon: "⚠️"
            });
        }
    });
};
function useClearFailedQueue(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async ()=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers
        };
        const res = await fetch(`${window.location.origin}/api/clearfailed`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            onSuccess();
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Failed Queue Cleared", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "settings"
            ]);
        },
        onError: ()=>{
            console.log("Error Clearing Failed Queue!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Clearing Failed Queue.", {
                icon: "⚠️"
            });
        }
    });
}
async function fetchMigrationStatus() {
    const res = await fetch(`${window.location.origin}/api/dbmigrate`, {
        method: "GET"
    });
    return res.json();
}
function useCheckMigrationStatus() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("dbmigrate", ()=>fetchMigrationStatus());
}
const useMigrateDatabase = (onSuccess)=>{
    const queryClient = useQueryClient();
    return useMutation(async ()=>{
        // console.log('settings: ', JSON.stringify(settings));
        const res = await fetch(`${window.location.origin}/api/dbmigrate`, {
            method: "POST"
        });
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (res)=>{
            if (onSuccess) {
                onSuccess(res);
            }
            toast("Database Updated!", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "settings"
            ]);
        },
        onError: ()=>{
            console.log("Error Updating Database!!!");
            toast("Error Updating Database.", {
                icon: "⚠️"
            });
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;