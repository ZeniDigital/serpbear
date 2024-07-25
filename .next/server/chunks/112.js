"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 6561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1015);
/* harmony import */ var _hooks_useOnKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3251);




const Modal = ({ children , width ="1/2" , closeModal , title , verticalCenter =false  })=>{
    (0,_hooks_useOnKey__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("Escape", closeModal);
    const closeOnBGClick = (e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal fixed top-0 left-0 bg-white/[.7] w-full h-screen z-50",
        onClick: closeOnBGClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `modal__content max-w-[340px] absolute left-0 right-0 ml-auto mr-auto w-${width} 
         lg:max-w-md bg-white shadow-md rounded-md p-5 border-t-[1px] border-gray-100 text-base 
         ${verticalCenter ? " top-1/2 translate-y-[-50%]" : "top-1/4"}`,
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: " font-semibold mb-3",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "modal-close absolute right-2 top-2 p-2 cursor-pointer text-gray-400 transition-all hover:text-gray-700 hover:rotate-90",
                    onClick: ()=>closeModal(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: "close",
                        size: 18
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 3112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6561);
/* harmony import */ var _services_domains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6733);
/* harmony import */ var _utils_client_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_domains__WEBPACK_IMPORTED_MODULE_3__]);
_services_domains__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AddDomain = ({ closeModal , domains =[]  })=>{
    const { 0: newDomain , 1: setNewDomain  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newDomainError , 1: setNewDomainError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { mutate: addMutate , isLoading: isAdding  } = (0,_services_domains__WEBPACK_IMPORTED_MODULE_3__/* .useAddDomain */ .cT)(()=>closeModal());
    const addDomain = ()=>{
        setNewDomainError("");
        const existingDomains = domains.map((d)=>d.domain);
        const insertedURLs = newDomain.split("\n");
        const domainsTobeAdded = [];
        const invalidDomains = [];
        insertedURLs.forEach((url)=>{
            const theURL = url.trim();
            if ((0,_utils_client_validators__WEBPACK_IMPORTED_MODULE_4__/* .isValidUrl */ .j)(theURL)) {
                const domURL = new URL(theURL);
                const isDomain = domURL.pathname === "/";
                if (isDomain && !existingDomains.includes(domURL.host)) {
                    domainsTobeAdded.push(domURL.host);
                }
                if (!isDomain && !existingDomains.includes(domURL.href)) {
                    const cleanedURL = domURL.href.replace("https://", "").replace("http://", "").replace(/^\/+|\/+$/g, "");
                    domainsTobeAdded.push(cleanedURL);
                }
            } else {
                invalidDomains.push(theURL);
            }
        });
        if (invalidDomains.length > 0) {
            setNewDomainError(`Please Insert Valid Domain URL. Invalid URLs: ${invalidDomains.join(", ")}`);
        } else if (domainsTobeAdded.length > 0) {
            console.log("domainsTobeAdded :", domainsTobeAdded);
            addMutate(domainsTobeAdded);
        }
    };
    const handleDomainInput = (e)=>{
        if (e.currentTarget.value === "" && newDomainError) {
            setNewDomainError("");
        }
        setNewDomain(e.currentTarget.value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        closeModal: ()=>{
            closeModal(false);
        },
        title: "Add New Domain",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-testid": "adddomain_modal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "text-sm mt-4",
                    children: "Domain URL"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    className: `w-full h-40 border rounded border-gray-200 p-4 outline-none
                focus:border-indigo-300 ${newDomainError ? " border-red-400 focus:border-red-400" : ""}`,
                    placeholder: "Type or Paste URLs here. Insert Each URL in a New line.",
                    value: newDomain,
                    autoFocus: true,
                    onChange: handleDomainInput
                }),
                newDomainError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: " ml-2 block float-right text-red-500 text-xs font-semibold",
                        children: newDomainError
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-6 text-right text-sm font-semibold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "py-2 px-5 rounded cursor-pointer bg-indigo-50 text-slate-500 mr-3",
                            onClick: ()=>closeModal(false),
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "py-2 px-5 rounded cursor-pointer bg-blue-700 text-white",
                            onClick: ()=>!isAdding && addDomain(),
                            children: isAdding ? "Adding...." : "Add Domain"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDomain);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ isValidUrl)
/* harmony export */ });
/* unused harmony export isValidDomain */
/* eslint-disable import/prefer-default-export */ const isValidDomain = (domain)=>{
    if (typeof domain !== "string") return false;
    if (!domain.includes(".")) return false;
    let value = domain;
    const validHostnameChars = /^[a-zA-Z0-9-.]{1,253}\.?$/g;
    if (!validHostnameChars.test(value)) {
        return false;
    }
    if (value.endsWith(".")) {
        value = value.slice(0, value.length - 1);
    }
    if (value.length > 253) {
        return false;
    }
    const labels = value.split(".");
    const isValid = labels.every((label)=>{
        const validLabelChars = /^([a-zA-Z0-9-]+)$/g;
        const validLabel = validLabelChars.test(label) && label.length < 64 && !label.startsWith("-") && !label.endsWith("-");
        return validLabel;
    });
    return isValid;
};
const isValidUrl = (str)=>{
    let url;
    try {
        url = new URL(str);
    } catch (e) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
};


/***/ })

};
;