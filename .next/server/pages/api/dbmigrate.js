"use strict";
(() => {
var exports = {};
exports.id = 600;
exports.ids = [600];
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

/***/ 714:
/***/ ((module) => {

module.exports = require("umzug");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ }),

/***/ 6038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var umzug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(714);
/* harmony import */ var umzug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(umzug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3214);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_2__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _database_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized === "authorized" && req.method === "GET") {
        await _database_database__WEBPACK_IMPORTED_MODULE_2__/* ["default"].sync */ .Z.sync();
        return getMigrationStatus(req, res);
    }
    if (authorized === "authorized" && req.method === "POST") {
        return migrateDatabase(req, res);
    }
    return res.status(401).json({
        error: authorized
    });
}
const getMigrationStatus = async (req, res)=>{
    const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize({
        dialect: "sqlite",
        storage: "./data/database.sqlite",
        logging: false
    });
    const umzug = new umzug__WEBPACK_IMPORTED_MODULE_1__.Umzug({
        migrations: {
            glob: "database/migrations/*.js"
        },
        context: sequelize.getQueryInterface(),
        storage: new umzug__WEBPACK_IMPORTED_MODULE_1__.SequelizeStorage({
            sequelize
        }),
        logger: undefined
    });
    const migrations = await umzug.pending();
    // console.log('migrations :', migrations);
    // const migrationsExceuted = await umzug.executed();
    return res.status(200).json({
        hasMigrations: migrations.length > 0
    });
};
const migrateDatabase = async (req, res)=>{
    const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize({
        dialect: "sqlite",
        storage: "./data/database.sqlite",
        logging: false
    });
    const umzug = new umzug__WEBPACK_IMPORTED_MODULE_1__.Umzug({
        migrations: {
            glob: "database/migrations/*.js"
        },
        context: sequelize.getQueryInterface(),
        storage: new umzug__WEBPACK_IMPORTED_MODULE_1__.SequelizeStorage({
            sequelize
        }),
        logger: undefined
    });
    const migrations = await umzug.up();
    console.log("[Updated] migrations :", migrations);
    return res.status(200).json({
        migrated: true
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214], () => (__webpack_exec__(6038)));
module.exports = __webpack_exports__;

})();