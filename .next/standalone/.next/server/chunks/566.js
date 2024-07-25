"use strict";
exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 6566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DL": () => (/* binding */ useFetchSCInsight),
/* harmony export */   "aK": () => (/* binding */ useFetchSCKeywords)
/* harmony export */ });
/* unused harmony exports fetchSCKeywords, fetchSCInsight */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

async function fetchSCKeywords(router) {
    // if (!router.query.slug) { throw new Error('Invalid Domain Name'); }
    const res = await fetch(`${window.location.origin}/api/searchconsole?domain=${router.query.slug}`, {
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
function useFetchSCKeywords(router, domainLoaded = false) {
    // console.log('ROUTER: ', router);
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("sckeywords", ()=>router.query.slug && fetchSCKeywords(router), {
        enabled: domainLoaded
    });
}
async function fetchSCInsight(router) {
    // if (!router.query.slug) { throw new Error('Invalid Domain Name'); }
    const res = await fetch(`${window.location.origin}/api/insight?domain=${router.query.slug}`, {
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
function useFetchSCInsight(router, domainLoaded = false) {
    // console.log('ROUTER: ', router);
    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("scinsight", ()=>router.query.slug && fetchSCInsight(router), {
        enabled: domainLoaded
    });
}


/***/ })

};
;