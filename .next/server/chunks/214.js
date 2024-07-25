"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 3214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4464);
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(661);
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6280);
/* harmony import */ var _models_keyword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2762);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_domain__WEBPACK_IMPORTED_MODULE_2__, _models_keyword__WEBPACK_IMPORTED_MODULE_3__]);
([_models_domain__WEBPACK_IMPORTED_MODULE_2__, _models_keyword__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const connection = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Sequelize({
    dialect: "sqlite",
    host: "0.0.0.0",
    username: process.env.USER_NAME ? process.env.USER_NAME : process.env.USER,
    password: process.env.PASSWORD,
    database: "sequelize",
    dialectModule: (sqlite3__WEBPACK_IMPORTED_MODULE_1___default()),
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    models: [
        _models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        _models_keyword__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    ],
    storage: "./data/database.sqlite"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1395);
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4464);
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__]);
_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


let Domain = class Domain extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Model {
};
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey,
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
], Domain.prototype, "ID", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Unique,
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: false,
        defaultValue: true,
        unique: true
    })
], Domain.prototype, "domain", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Unique,
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: false,
        defaultValue: true,
        unique: true
    })
], Domain.prototype, "slug", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
], Domain.prototype, "keywordCount", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Domain.prototype, "lastUpdated", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Domain.prototype, "added", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
    })
], Domain.prototype, "tags", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    })
], Domain.prototype, "notification", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: "daily"
    })
], Domain.prototype, "notification_interval", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: ""
    })
], Domain.prototype, "notification_emails", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Domain.prototype, "search_console", void 0);
Domain = (0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Table)({
        timestamps: false,
        tableName: "domain"
    })
], Domain);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Domain);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1395);
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4464);
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__]);
_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


let Keyword = class Keyword extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Model {
};
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey,
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
], Keyword.prototype, "ID", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: false
    })
], Keyword.prototype, "keyword", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: "desktop"
    })
], Keyword.prototype, "device", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: "US"
    })
], Keyword.prototype, "country", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: ""
    })
], Keyword.prototype, "city", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: ""
    })
], Keyword.prototype, "latlong", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: false,
        defaultValue: "{}"
    })
], Keyword.prototype, "domain", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Keyword.prototype, "lastUpdated", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Keyword.prototype, "added", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
], Keyword.prototype, "position", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
    })
], Keyword.prototype, "history", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
], Keyword.prototype, "volume", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
    })
], Keyword.prototype, "url", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
    })
], Keyword.prototype, "tags", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
    })
], Keyword.prototype, "lastResult", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    })
], Keyword.prototype, "sticky", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: false
    })
], Keyword.prototype, "updating", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true,
        defaultValue: "false"
    })
], Keyword.prototype, "lastUpdateError", void 0);
(0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)({
        type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,
        allowNull: true
    })
], Keyword.prototype, "settings", void 0);
Keyword = (0,_swc_helpers_src_ts_decorate_mjs__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Table)({
        timestamps: false,
        tableName: "keyword"
    })
], Keyword);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;