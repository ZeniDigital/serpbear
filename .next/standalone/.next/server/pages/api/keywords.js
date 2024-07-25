"use strict";
(() => {
var exports = {};
exports.id = 254;
exports.ids = [254,362];
exports.modules = {

/***/ 2791:
/***/ ((module) => {

module.exports = require("@googleapis/searchconsole");

/***/ }),

/***/ 8677:
/***/ ((module) => {

module.exports = require("@isaacs/ttlcache");

/***/ }),

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

/***/ 7972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2762);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4878);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5527);
/* harmony import */ var _utils_parseKeywords__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1010);
/* harmony import */ var _utils_searchConsole__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(737);
/* harmony import */ var _utils_refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3941);
/* harmony import */ var _utils_adwords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _settings__WEBPACK_IMPORTED_MODULE_3__, _utils_refresh__WEBPACK_IMPORTED_MODULE_6__, _utils_adwords__WEBPACK_IMPORTED_MODULE_7__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _settings__WEBPACK_IMPORTED_MODULE_3__, _utils_refresh__WEBPACK_IMPORTED_MODULE_6__, _utils_adwords__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getKeywords(req, res);
    }
    if (req.method === "POST") {
        return addKeywords(req, res);
    }
    if (req.method === "DELETE") {
        return deleteKeywords(req, res);
    }
    if (req.method === "PUT") {
        return updateKeywords(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getKeywords = async (req, res)=>{
    if (!req.query.domain && typeof req.query.domain !== "string") {
        return res.status(400).json({
            error: "Domain is Required!"
        });
    }
    const domain = req.query.domain;
    const integratedSC = process.env.SEARCH_CONSOLE_PRIVATE_KEY && process.env.SEARCH_CONSOLE_CLIENT_EMAIL;
    const domainSCData = integratedSC ? await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_5__/* .readLocalSCData */ .wP)(domain) : false;
    try {
        const allKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll({
            where: {
                domain
            }
        });
        const keywords = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(allKeywords.map((e)=>e.get({
                plain: true
            })));
        const processedKeywords = keywords.map((keyword)=>{
            const historyArray = Object.keys(keyword.history).map((dateKey)=>({
                    date: new Date(dateKey).getTime(),
                    dateRaw: dateKey,
                    position: keyword.history[dateKey]
                }));
            const historySorted = historyArray.sort((a, b)=>a.date - b.date);
            const lastWeekHistory = {};
            historySorted.slice(-7).forEach((x)=>{
                lastWeekHistory[x.dateRaw] = x.position;
            });
            const keywordWithSlimHistory = {
                ...keyword,
                lastResult: [],
                history: lastWeekHistory
            };
            const finalKeyword = domainSCData ? (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_5__/* .integrateKeywordSCData */ .hl)(keywordWithSlimHistory, domainSCData) : keywordWithSlimHistory;
            return finalKeyword;
        });
        return res.status(200).json({
            keywords: processedKeywords
        });
    } catch (error) {
        console.log("[ERROR] Getting Domain Keywords for ", domain, error);
        return res.status(400).json({
            error: "Error Loading Keywords for this Domain."
        });
    }
};
const addKeywords = async (req, res)=>{
    const { keywords  } = req.body;
    if (keywords && Array.isArray(keywords) && keywords.length > 0) {
        // const keywordsArray = keywords.replaceAll('\n', ',').split(',').map((item:string) => item.trim());
        const keywordsToAdd = []; // QuickFIX for bug: https://github.com/sequelize/sequelize-typescript/issues/936
        keywords.forEach((kwrd)=>{
            const { keyword , device , country , domain , tags , city  } = kwrd;
            const tagsArray = tags ? tags.split(",").map((item)=>item.trim()) : [];
            const newKeyword = {
                keyword,
                device,
                domain,
                country,
                city,
                position: 0,
                updating: true,
                history: JSON.stringify({}),
                url: "",
                tags: JSON.stringify(tagsArray),
                sticky: false,
                lastUpdated: new Date().toJSON(),
                added: new Date().toJSON()
            };
            keywordsToAdd.push(newKeyword);
        });
        try {
            const newKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].bulkCreate */ .Z.bulkCreate(keywordsToAdd);
            const formattedkeywords = newKeywords.map((el)=>el.get({
                    plain: true
                }));
            const keywordsParsed = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(formattedkeywords);
            // Queue the SERP Scraping Process
            const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getAppSettings)();
            (0,_utils_refresh__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(newKeywords, settings);
            // Update the Keyword Volume
            const { adwords_account_id , adwords_client_id , adwords_client_secret , adwords_developer_token  } = settings;
            if (adwords_account_id && adwords_client_id && adwords_client_secret && adwords_developer_token) {
                const keywordsVolumeData = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_7__/* .getKeywordsVolume */ .cu)(keywordsParsed);
                if (keywordsVolumeData.volumes !== false) {
                    await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_7__/* .updateKeywordsVolumeData */ .lN)(keywordsVolumeData.volumes);
                }
            }
            return res.status(201).json({
                keywords: keywordsParsed
            });
        } catch (error) {
            console.log("[ERROR] Adding New Keywords ", error);
            return res.status(400).json({
                error: "Could Not Add New Keyword!"
            });
        }
    } else {
        return res.status(400).json({
            error: "Necessary Keyword Data Missing"
        });
    }
};
const deleteKeywords = async (req, res)=>{
    if (!req.query.id && typeof req.query.id !== "string") {
        return res.status(400).json({
            error: "keyword ID is Required!"
        });
    }
    console.log("req.query.id: ", req.query.id);
    try {
        const keywordsToRemove = req.query.id.split(",").map((item)=>parseInt(item, 10));
        const removeQuery = {
            where: {
                ID: {
                    [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op["in"]]: keywordsToRemove
                }
            }
        };
        const removedKeywordCount = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].destroy */ .Z.destroy(removeQuery);
        return res.status(200).json({
            keywordsRemoved: removedKeywordCount
        });
    } catch (error) {
        console.log("[ERROR] Removing Keyword. ", error);
        return res.status(400).json({
            error: "Could Not Remove Keyword!"
        });
    }
};
const updateKeywords = async (req, res)=>{
    if (!req.query.id && typeof req.query.id !== "string") {
        return res.status(400).json({
            error: "keyword ID is Required!"
        });
    }
    if (req.body.sticky === undefined && !req.body.tags === undefined) {
        return res.status(400).json({
            error: "keyword Payload Missing!"
        });
    }
    const keywordIDs = req.query.id.split(",").map((item)=>parseInt(item, 10));
    const { sticky , tags  } = req.body;
    try {
        let keywords = [];
        if (sticky !== undefined) {
            await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].update */ .Z.update({
                sticky
            }, {
                where: {
                    ID: {
                        [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op["in"]]: keywordIDs
                    }
                }
            });
            const updateQuery = {
                where: {
                    ID: {
                        [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op["in"]]: keywordIDs
                    }
                }
            };
            const updatedKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll(updateQuery);
            const formattedKeywords = updatedKeywords.map((el)=>el.get({
                    plain: true
                }));
            keywords = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(formattedKeywords);
            return res.status(200).json({
                keywords
            });
        }
        if (tags) {
            const tagsKeywordIDs = Object.keys(tags);
            const multipleKeywords = tagsKeywordIDs.length > 1;
            for (const keywordID of tagsKeywordIDs){
                const selectedKeyword = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                    where: {
                        ID: keywordID
                    }
                });
                const currentTags = selectedKeyword && selectedKeyword.tags ? JSON.parse(selectedKeyword.tags) : [];
                const mergedTags = Array.from(new Set([
                    ...currentTags,
                    ...tags[keywordID]
                ]));
                if (selectedKeyword) {
                    await selectedKeyword.update({
                        tags: JSON.stringify(multipleKeywords ? mergedTags : tags[keywordID])
                    });
                }
            }
            return res.status(200).json({
                keywords
            });
        }
        return res.status(400).json({
            error: "Invalid Payload!"
        });
    } catch (error) {
        console.log("[ERROR] Updating Keyword. ", error);
        return res.status(200).json({
            error: "Error Updating keywords!"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737,878,383,941], () => (__webpack_exec__(7972)));
module.exports = __webpack_exports__;

})();