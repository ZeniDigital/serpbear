"use strict";
(() => {
var exports = {};
exports.id = 755;
exports.ids = [755,362];
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

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

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

/***/ 4816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2762);
/* harmony import */ var _utils_refresh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3941);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4878);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5527);
/* harmony import */ var _utils_parseKeywords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1010);
/* harmony import */ var _utils_scraper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2398);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _utils_refresh__WEBPACK_IMPORTED_MODULE_3__, _settings__WEBPACK_IMPORTED_MODULE_4__, _utils_scraper__WEBPACK_IMPORTED_MODULE_6__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _utils_refresh__WEBPACK_IMPORTED_MODULE_3__, _settings__WEBPACK_IMPORTED_MODULE_4__, _utils_scraper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getKeywordSearchResults(req, res);
    }
    if (req.method === "POST") {
        return refresTheKeywords(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const refresTheKeywords = async (req, res)=>{
    if (!req.query.id && typeof req.query.id !== "string") {
        return res.status(400).json({
            error: "keyword ID is Required!"
        });
    }
    if (req.query.id === "all" && !req.query.domain) {
        return res.status(400).json({
            error: "When Refreshing all Keywords of a domian, the Domain name Must be provided."
        });
    }
    const keywordIDs = req.query.id !== "all" && req.query.id.split(",").map((item)=>parseInt(item, 10));
    const { domain  } = req.query || {};
    console.log("keywordIDs: ", keywordIDs);
    try {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_4__.getAppSettings)();
        if (!settings || settings && settings.scraper_type === "never") {
            return res.status(400).json({
                error: "Scraper has not been set up yet."
            });
        }
        const query = req.query.id === "all" && domain ? {
            domain
        } : {
            ID: {
                [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op["in"]]: keywordIDs
            }
        };
        await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].update */ .Z.update({
            updating: true
        }, {
            where: query
        });
        const keywordQueries = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll({
            where: query
        });
        let keywords = [];
        // If Single Keyword wait for the scraping process,
        // else, Process the task in background. Do not wait.
        if (keywordIDs && keywordIDs.length === 0) {
            const refreshed = await (0,_utils_refresh__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(keywordQueries, settings);
            keywords = refreshed;
        } else {
            (0,_utils_refresh__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(keywordQueries, settings);
            keywords = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(keywordQueries.map((el)=>el.get({
                    plain: true
                })));
        }
        return res.status(200).json({
            keywords
        });
    } catch (error) {
        console.log("ERROR refresThehKeywords: ", error);
        return res.status(400).json({
            error: "Error refreshing keywords!"
        });
    }
};
const getKeywordSearchResults = async (req, res)=>{
    if (!req.query.keyword || !req.query.country || !req.query.device) {
        return res.status(400).json({
            error: "A Valid keyword, Country Code, and device is Required!"
        });
    }
    try {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_4__.getAppSettings)();
        if (!settings || settings && settings.scraper_type === "never") {
            return res.status(400).json({
                error: "Scraper has not been set up yet."
            });
        }
        const dummyKeyword = {
            ID: 99999999999999,
            keyword: req.query.keyword,
            device: "desktop",
            country: req.query.country,
            domain: "",
            lastUpdated: "",
            volume: 0,
            added: "",
            position: 111,
            sticky: false,
            history: {},
            lastResult: [],
            url: "",
            tags: [],
            updating: false,
            lastUpdateError: false
        };
        const scrapeResult = await (0,_utils_scraper__WEBPACK_IMPORTED_MODULE_6__/* .scrapeKeywordFromGoogle */ .MD)(dummyKeyword, settings);
        if (scrapeResult && !scrapeResult.error) {
            const searchResult = {
                results: scrapeResult.result,
                keyword: scrapeResult.keyword,
                position: scrapeResult.position !== 111 ? scrapeResult.position : 0,
                country: req.query.country
            };
            return res.status(200).json({
                error: "",
                searchResult
            });
        }
        return res.status(400).json({
            error: "Error Scraping Search Results for the given keyword!"
        });
    } catch (error) {
        console.log("ERROR refresThehKeywords: ", error);
        return res.status(400).json({
            error: "Error refreshing keywords!"
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,878,941], () => (__webpack_exec__(4816)));
module.exports = __webpack_exports__;

})();