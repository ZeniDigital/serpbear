"use strict";
(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
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

/***/ 6781:
/***/ ((module) => {

module.exports = require("google-auth-library");

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

/***/ 8525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6781);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3214);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5527);
/* harmony import */ var _utils_adwords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_3__, _utils_adwords__WEBPACK_IMPORTED_MODULE_5__]);
([_database_database__WEBPACK_IMPORTED_MODULE_3__, _utils_adwords__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getAdwordsRefreshToken(req, res);
    }
    if (req.method === "POST") {
        return validateAdwordsIntegration(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getAdwordsRefreshToken = async (req, res)=>{
    try {
        const code = req.query.code;
        const https = req.headers.host?.includes("localhost:") ? "http://" : "https://";
        const redirectURL = `${https}${req.headers.host}/api/adwords`;
        if (code) {
            try {
                const settingsRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.readFile)(`${process.cwd()}/data/settings.json`, {
                    encoding: "utf-8"
                });
                const settings = settingsRaw ? JSON.parse(settingsRaw) : {};
                const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_2___default())(process.env.SECRET);
                const adwords_client_id = settings.adwords_client_id ? cryptr.decrypt(settings.adwords_client_id) : "";
                const adwords_client_secret = settings.adwords_client_secret ? cryptr.decrypt(settings.adwords_client_secret) : "";
                const oAuth2Client = new google_auth_library__WEBPACK_IMPORTED_MODULE_0__.OAuth2Client(adwords_client_id, adwords_client_secret, redirectURL);
                const r = await oAuth2Client.getToken(code);
                if (r?.tokens?.refresh_token) {
                    const adwords_refresh_token = cryptr.encrypt(r.tokens.refresh_token);
                    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(`${process.cwd()}/data/settings.json`, JSON.stringify({
                        ...settings,
                        adwords_refresh_token
                    }), {
                        encoding: "utf-8"
                    });
                    return res.status(200).send("Google Ads Intergrated Successfully! You can close this window.");
                }
                return res.status(400).send("Error Getting the Google Ads Refresh Token. Please Try Again!");
            } catch (error) {
                const errorMsg = error?.response?.data?.error;
                console.log("[Error] Getting Google Ads Refresh Token! Reason: ", errorMsg);
                return res.status(400).send(`Error Saving the Google Ads Refresh Token ${errorMsg ? `. Details: ${errorMsg}` : ""}. Please Try Again!`);
            }
        } else {
            return res.status(400).send("No Code Provided By Google. Please Try Again!");
        }
    } catch (error1) {
        console.log("[ERROR] Getting Google Ads Refresh Token: ", error1);
        return res.status(400).send("Error Getting Google Ads Refresh Token. Please Try Again!");
    }
};
const validateAdwordsIntegration = async (req, res)=>{
    const errMsg = "Error Validating Google Ads Integration. Please make sure your provided data are correct!";
    const { developer_token , account_id  } = req.body;
    if (!developer_token || !account_id) {
        return res.status(400).json({
            valid: false,
            error: "Please Provide the Google Ads Developer Token and Test Account ID"
        });
    }
    try {
        // Save the Adwords Developer Token & Google Ads Test Account ID in App Settings
        const settingsRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.readFile)(`${process.cwd()}/data/settings.json`, {
            encoding: "utf-8"
        });
        const settings = settingsRaw ? JSON.parse(settingsRaw) : {};
        const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_2___default())(process.env.SECRET);
        const adwords_developer_token = cryptr.encrypt(developer_token.trim());
        const adwords_account_id = cryptr.encrypt(account_id.trim());
        const securedSettings = {
            ...settings,
            adwords_developer_token,
            adwords_account_id
        };
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(`${process.cwd()}/data/settings.json`, JSON.stringify(securedSettings), {
            encoding: "utf-8"
        });
        // Make a test Request to Google Ads
        const adwordsCreds = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_5__/* .getAdwordsCredentials */ .f5)();
        const { client_id , client_secret , refresh_token  } = adwordsCreds || {};
        if (adwordsCreds && client_id && client_secret && developer_token && account_id && refresh_token) {
            const keywords = await (0,_utils_adwords__WEBPACK_IMPORTED_MODULE_5__/* .getAdwordsKeywordIdeas */ .c3)(adwordsCreds, {
                country: "US",
                language: "1000",
                keywords: [
                    "compress"
                ],
                seedType: "custom"
            }, true);
            if (keywords && Array.isArray(keywords) && keywords.length > 0) {
                return res.status(200).json({
                    valid: true
                });
            }
        }
        return res.status(400).json({
            valid: false,
            error: errMsg
        });
    } catch (error) {
        console.log("[ERROR] Validating Google Ads Integration: ", error);
        return res.status(400).json({
            valid: false,
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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737,383], () => (__webpack_exec__(8525)));
module.exports = __webpack_exports__;

})();