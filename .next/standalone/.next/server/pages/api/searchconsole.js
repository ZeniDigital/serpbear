"use strict";
(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 2791:
/***/ ((module) => {

module.exports = require("@googleapis/searchconsole");

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

/***/ 8714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3214);
/* harmony import */ var _database_models_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6280);
/* harmony import */ var _utils_searchConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(737);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_domain__WEBPACK_IMPORTED_MODULE_1__]);
([_database_database__WEBPACK_IMPORTED_MODULE_0__, _database_models_domain__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getDomainSearchConsoleData(req, res);
    }
    if (req.method === "POST") {
        return cronRefreshSearchConsoleData(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getDomainSearchConsoleData = async (req, res)=>{
    if (!req.query.domain && typeof req.query.domain !== "string") return res.status(400).json({
        data: null,
        error: "Domain is Missing."
    });
    const domainname = req.query.domain.replaceAll("-", ".").replaceAll("_", "-");
    const localSCData = await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_2__/* .readLocalSCData */ .wP)(domainname);
    if (localSCData && localSCData.thirtyDays && localSCData.thirtyDays.length) {
        return res.status(200).json({
            data: localSCData
        });
    }
    try {
        const query = {
            domain: domainname
        };
        const foundDomain = await _database_models_domain__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
            where: query
        });
        const domainObj = foundDomain && foundDomain.get({
            plain: true
        });
        const scDomainAPI = await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_2__/* .getSearchConsoleApiInfo */ .TG)(domainObj);
        if (!(scDomainAPI.client_email && scDomainAPI.private_key)) {
            return res.status(200).json({
                data: null,
                error: "Google Search Console is not Integrated."
            });
        }
        const scData = await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_2__/* .fetchDomainSCData */ .VS)(domainObj, scDomainAPI);
        return res.status(200).json({
            data: scData
        });
    } catch (error) {
        console.log("[ERROR] Getting Search Console Data for: ", domainname, error);
        return res.status(400).json({
            data: null,
            error: "Error Fetching Data from Google Search Console."
        });
    }
};
const cronRefreshSearchConsoleData = async (req, res)=>{
    try {
        const allDomainsRaw = await _database_models_domain__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAll */ .Z.findAll();
        const Domains = allDomainsRaw.map((el)=>el.get({
                plain: true
            }));
        for (const domain of Domains){
            await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_2__/* .fetchDomainSCData */ .VS)(domain);
        }
        return res.status(200).json({
            status: "completed"
        });
    } catch (error) {
        console.log("[ERROR] CRON Updating Search Console Data. ", error);
        return res.status(400).json({
            status: "failed",
            error: "Error Fetching Data from Google Search Console."
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737], () => (__webpack_exec__(8714)));
module.exports = __webpack_exports__;

})();