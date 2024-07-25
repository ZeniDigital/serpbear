"use strict";
(() => {
var exports = {};
exports.id = 274;
exports.ids = [274];
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

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 4464:
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 8670:
/***/ ((module) => {

module.exports = require("timers/promises");

/***/ }),

/***/ 9684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3214);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5527);
/* harmony import */ var _utils_adwords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_0__, _utils_adwords__WEBPACK_IMPORTED_MODULE_2__]);
([_database_database__WEBPACK_IMPORTED_MODULE_0__, _utils_adwords__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getKeywordIdeas(req, res);
    }
    if (req.method === "POST") {
        return updateKeywordIdeas(req, res);
    }
    if (req.method === "PUT") {
        return favoriteKeywords(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getKeywordIdeas = async (req, res)=>{
    try {
        const domain = req.query.domain;
        if (domain) {
            const keywordsDatabase = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_2__/* .getLocalKeywordIdeas */ .Jp)(domain);
            // console.log('keywords :', keywordsDatabase);
            if (keywordsDatabase) {
                return res.status(200).json({
                    data: keywordsDatabase
                });
            }
        }
        return res.status(400).json({
            data: null,
            error: "Error Loading Keyword Ideas."
        });
    } catch (error) {
        console.log("[ERROR] Fetching Keyword Ideas: ", error);
        return res.status(400).json({
            data: null,
            error: "Error Loading Keyword Ideas."
        });
    }
};
const updateKeywordIdeas = async (req, res)=>{
    const errMsg = "Error Fetching Keywords. Please try again!";
    const { keywords =[] , country ="US" , language ="1000" , domain ="" , seedSCKeywords , seedCurrentKeywords , seedType  } = req.body;
    if (!country || !language) {
        return res.status(400).json({
            keywords: [],
            error: "Error Fetching Keywords. Please Provide a Country and Language"
        });
    }
    if (seedType === "custom" && keywords.length === 0 && !seedSCKeywords && !seedCurrentKeywords) {
        return res.status(400).json({
            keywords: [],
            error: "Error Fetching Keywords. Please Provide one of these: keywords, url or domain"
        });
    }
    try {
        const adwordsCreds = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_2__/* .getAdwordsCredentials */ .f5)();
        const { client_id , client_secret , developer_token , account_id , refresh_token  } = adwordsCreds || {};
        if (adwordsCreds && client_id && client_secret && developer_token && account_id && refresh_token) {
            const ideaOptions = {
                country,
                language,
                keywords,
                domain,
                seedSCKeywords,
                seedCurrentKeywords,
                seedType
            };
            const keywordIdeas = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_2__/* .getAdwordsKeywordIdeas */ .c3)(adwordsCreds, ideaOptions);
            if (keywordIdeas && Array.isArray(keywordIdeas) && keywordIdeas.length > 1) {
                return res.status(200).json({
                    keywords: keywordIdeas
                });
            }
        }
        return res.status(400).json({
            keywords: [],
            error: errMsg
        });
    } catch (error) {
        console.log("[ERROR] Fetching Keyword Ideas: ", error);
        return res.status(400).json({
            keywords: [],
            error: errMsg
        });
    }
};
const favoriteKeywords = async (req, res)=>{
    const errMsg = "Error Favorating Keyword Idea. Please try again!";
    const { keywordID ="" , domain =""  } = req.body;
    if (!keywordID || !domain) {
        return res.status(400).json({
            keywords: [],
            error: "Missing Necessary data. Please provide both keywordID and domain values."
        });
    }
    try {
        const keywordsDatabase = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_2__/* .getLocalKeywordIdeas */ .Jp)(domain);
        if (keywordsDatabase && keywordsDatabase.keywords) {
            const theKeyword = keywordsDatabase.keywords.find((kw)=>kw.uid === keywordID);
            const existingKeywords = keywordsDatabase.favorites || [];
            const newFavorites = [
                ...existingKeywords
            ];
            const existingKeywordIndex = newFavorites.findIndex((kw)=>kw.uid === keywordID);
            if (existingKeywordIndex > -1) {
                newFavorites.splice(existingKeywordIndex, 1);
            } else if (theKeyword) newFavorites.push(theKeyword);
            const updated = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_2__/* .updateLocalKeywordIdeas */ ._T)(domain, {
                favorites: newFavorites
            });
            if (updated) {
                return res.status(200).json({
                    keywords: newFavorites,
                    error: ""
                });
            }
        }
        return res.status(400).json({
            keywords: [],
            error: errMsg
        });
    } catch (error) {
        console.log("[ERROR] Favorating Keyword Idea: ", error);
        return res.status(400).json({
            keywords: [],
            error: errMsg
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737,383], () => (__webpack_exec__(9684)));
module.exports = __webpack_exports__;

})();