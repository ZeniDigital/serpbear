"use strict";
(() => {
var exports = {};
exports.id = 542;
exports.ids = [542];
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

/***/ 8670:
/***/ ((module) => {

module.exports = require("timers/promises");

/***/ }),

/***/ 6517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2762);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
/* harmony import */ var _utils_parseKeywords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1010);
/* harmony import */ var _utils_adwords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _utils_adwords__WEBPACK_IMPORTED_MODULE_4__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__, _utils_adwords__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "POST") {
        return updatekeywordVolume(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const updatekeywordVolume = async (req, res)=>{
    const { keywords =[] , domain ="" , update =true  } = req.body || {};
    if (keywords.length === 0 && !domain) {
        return res.status(400).json({
            error: "Please provide keyword Ids or a domain name."
        });
    }
    try {
        let keywordsToSend = [];
        if (keywords.length > 0) {
            const allKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll({
                where: {
                    ID: {
                        [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op["in"]]: keywords
                    }
                }
            });
            keywordsToSend = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(allKeywords.map((e)=>e.get({
                    plain: true
                })));
        }
        if (domain) {
        // const allDomain = domain === 'all';
        // const allKeywords:Keyword[] = allDomain ? await Keyword.findAll() : await Keyword.findAll(allDomain ? {} : { where: { domain } });
        // keywordsToSend = parseKeywords(allKeywords.map((e) => e.get({ plain: true })));
        }
        if (keywordsToSend.length > 0) {
            const keywordsVolumeData = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_4__/* .getKeywordsVolume */ .cu)(keywordsToSend);
            // console.log('keywordsVolumeData :', keywordsVolumeData);
            if (keywordsVolumeData.error) {
                return res.status(400).json({
                    keywords: [],
                    error: keywordsVolumeData.error
                });
            }
            if (keywordsVolumeData.volumes !== false) {
                if (update) {
                    const updated = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_4__/* .updateKeywordsVolumeData */ .lN)(keywordsVolumeData.volumes);
                    if (updated) {
                        return res.status(200).json({
                            keywords
                        });
                    }
                }
            } else {
                return res.status(400).json({
                    error: "Error Fetching Keywords Volume Data from Google Ads"
                });
            }
        }
        return res.status(400).json({
            keywords: [],
            error: "Error Updating Keywords Volume data"
        });
    } catch (error) {
        console.log("[Error] updating keywords Volume Data: ", error);
        return res.status(400).json({
            error: "Error Updating Keywords Volume data"
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737,383], () => (__webpack_exec__(6517)));
module.exports = __webpack_exports__;

})();