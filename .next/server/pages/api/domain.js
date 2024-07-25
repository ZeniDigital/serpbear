"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

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

/***/ 9290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6280);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__]);
([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized === "authorized" && req.method === "GET") {
        await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
        return getDomain(req, res);
    }
    return res.status(401).json({
        error: authorized
    });
}
const getDomain = async (req, res)=>{
    if (!req.query.domain && typeof req.query.domain !== "string") {
        return res.status(400).json({
            error: "Domain Name is Required!"
        });
    }
    try {
        const query = {
            domain: req.query.domain
        };
        const foundDomain = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
            where: query
        });
        const parsedDomain = foundDomain?.get({
            plain: true
        }) || false;
        if (parsedDomain && parsedDomain.search_console) {
            try {
                const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_0___default())(process.env.SECRET);
                const scData = JSON.parse(parsedDomain.search_console);
                scData.client_email = scData.client_email ? cryptr.decrypt(scData.client_email) : "";
                scData.private_key = scData.private_key ? cryptr.decrypt(scData.private_key) : "";
                parsedDomain.search_console = JSON.stringify(scData);
            } catch (error) {
                console.log("[Error] Parsing Search Console Keys.");
            }
        }
        return res.status(200).json({
            domain: parsedDomain
        });
    } catch (error1) {
        console.log("[ERROR] Getting Domain: ", error1);
        return res.status(400).json({
            error: "Error Loading Domain"
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214], () => (__webpack_exec__(9290)));
module.exports = __webpack_exports__;

})();