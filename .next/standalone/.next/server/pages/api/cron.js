"use strict";
(() => {
var exports = {};
exports.id = 267;
exports.ids = [267,362];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 6607:
/***/ ((module) => {

module.exports = require("cryptr");

/***/ }),

/***/ 3510:
/***/ ((module) => {

module.exports = require("https-proxy-agent");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 4464:
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 295:
/***/ ((module) => {

module.exports = import("cheerio");;

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 8670:
/***/ ((module) => {

module.exports = require("timers/promises");

/***/ }),

/***/ 2385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3214);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2762);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4878);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
/* harmony import */ var _utils_refresh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__, _settings__WEBPACK_IMPORTED_MODULE_2__, _utils_refresh__WEBPACK_IMPORTED_MODULE_4__]);
([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__, _settings__WEBPACK_IMPORTED_MODULE_2__, _utils_refresh__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "POST") {
        return cronRefreshkeywords(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const cronRefreshkeywords = async (req, res)=>{
    try {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_2__.getAppSettings)();
        if (!settings || settings && settings.scraper_type === "never") {
            return res.status(400).json({
                started: false,
                error: "Scraper has not been set up yet."
            });
        }
        await _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__/* ["default"].update */ .Z.update({
            updating: true
        }, {
            where: {}
        });
        const keywordQueries = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAll */ .Z.findAll();
        (0,_utils_refresh__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keywordQueries, settings);
        return res.status(200).json({
            started: true
        });
    } catch (error) {
        console.log("[ERROR] CRON Refreshing Keywords: ", error);
        return res.status(400).json({
            started: false,
            error: "CRON Error refreshing keywords!"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Parses the SQL Keyword Model object to frontend cosumable object.
 * @param {Keyword[]} allKeywords - Keywords to scrape
 * @returns {KeywordType[]}
 */ const parseKeywords = (allKeywords)=>{
    const parsedItems = allKeywords.map((keywrd)=>({
            ...keywrd,
            history: JSON.parse(keywrd.history),
            tags: JSON.parse(keywrd.tags),
            lastResult: JSON.parse(keywrd.lastResult),
            lastUpdateError: keywrd.lastUpdateError !== "false" && keywrd.lastUpdateError.includes("{") ? JSON.parse(keywrd.lastUpdateError) : false
        }));
    return parsedItems;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseKeywords);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,878,941], () => (__webpack_exec__(2385)));
module.exports = __webpack_exports__;

})();