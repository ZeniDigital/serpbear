"use strict";
(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

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

/***/ 8052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3214);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2762);
/* harmony import */ var _utils_parseKeywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__]);
([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (authorized === "authorized" && req.method === "GET") {
        await _database_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sync */ .Z.sync();
        return getKeyword(req, res);
    }
    return res.status(401).json({
        error: authorized
    });
}
const getKeyword = async (req, res)=>{
    if (!req.query.id && typeof req.query.id !== "string") {
        return res.status(400).json({
            error: "Keyword ID is Required!"
        });
    }
    try {
        const query = {
            ID: parseInt(req.query.id, 10)
        };
        const foundKeyword = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
            where: query
        });
        const pareseKeyword = foundKeyword && (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([
            foundKeyword.get({
                plain: true
            })
        ]);
        const keywords = pareseKeyword && pareseKeyword[0] ? pareseKeyword[0] : null;
        return res.status(200).json({
            keyword: keywords
        });
    } catch (error) {
        console.log("[ERROR] Getting Keyword: ", error);
        return res.status(400).json({
            error: "Error Loading Keyword"
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214], () => (__webpack_exec__(8052)));
module.exports = __webpack_exports__;

})();