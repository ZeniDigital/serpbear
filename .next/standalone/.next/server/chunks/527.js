"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 5527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Psuedo Middleware: Verifies the user by their cookie value or their API Key
 * When accessing with API key only certain routes are accessible.
 * @param {NextApiRequest} req - The Next Request
 * @param {NextApiResponse} res - The Next Response.
 * @returns {string}
 */ const verifyUser = (req, res)=>{
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    const token = cookies && cookies.get("token");
    const allowedApiRoutes = [
        "GET:/api/keyword",
        "GET:/api/keywords",
        "GET:/api/domains",
        "POST:/api/refresh",
        "POST:/api/cron",
        "POST:/api/notify",
        "POST:/api/searchconsole",
        "GET:/api/searchconsole",
        "GET:/api/insight", 
    ];
    const verifiedAPI = req.headers.authorization ? req.headers.authorization.substring("Bearer ".length) === process.env.APIKEY : false;
    const accessingAllowedRoute = req.url && req.method && allowedApiRoutes.includes(`${req.method}:${req.url.replace(/\?(.*)/, "")}`);
    console.log(req.method, req.url);
    let authorized = "";
    if (token && process.env.SECRET) {
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.SECRET, (err)=>{
            // console.log(err);
            authorized = err ? "Not authorized" : "authorized";
        });
    } else if (verifiedAPI && accessingAllowedRoute) {
        authorized = "authorized";
    } else {
        if (!token) {
            authorized = "Not authorized";
        }
        if (token && !process.env.SECRET) {
            authorized = "Token has not been Setup.";
        }
        if (verifiedAPI && !accessingAllowedRoute) {
            authorized = "This Route cannot be accessed with API.";
        }
        if (req.headers.authorization && !verifiedAPI) {
            authorized = "Invalid API Key Provided.";
        }
    }
    return authorized;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyUser);


/***/ })

};
;