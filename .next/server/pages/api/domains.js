"use strict";
(() => {
var exports = {};
exports.id = 670;
exports.ids = [670];
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

/***/ 7210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "deleteDomain": () => (/* binding */ deleteDomain),
/* harmony export */   "getDomains": () => (/* binding */ getDomains),
/* harmony export */   "updateDomain": () => (/* binding */ updateDomain)
/* harmony export */ });
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6280);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2762);
/* harmony import */ var _utils_domains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(600);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5527);
/* harmony import */ var _utils_searchConsole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__, _utils_domains__WEBPACK_IMPORTED_MODULE_4__]);
([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__, _utils_domains__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function handler(req, res) {
    await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getDomains(req, res);
    }
    if (req.method === "POST") {
        return addDomain(req, res);
    }
    if (req.method === "DELETE") {
        return deleteDomain(req, res);
    }
    if (req.method === "PUT") {
        return updateDomain(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getDomains = async (req, res)=>{
    const withStats = !!req?.query?.withstats;
    try {
        const allDomains = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll();
        const formattedDomains = allDomains.map((el)=>{
            const domainItem = el.get({
                plain: true
            });
            const scData = domainItem?.search_console ? JSON.parse(domainItem.search_console) : {};
            const { client_email , private_key  } = scData;
            const searchConsoleData = scData ? {
                ...scData,
                client_email: client_email ? "true" : "",
                private_key: private_key ? "true" : ""
            } : {};
            return {
                ...domainItem,
                search_console: JSON.stringify(searchConsoleData)
            };
        });
        const theDomains = withStats ? await (0,_utils_domains__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(formattedDomains) : allDomains;
        return res.status(200).json({
            domains: theDomains
        });
    } catch (error) {
        return res.status(400).json({
            domains: [],
            error: "Error Getting Domains."
        });
    }
};
const addDomain = async (req, res)=>{
    const { domains  } = req.body;
    if (domains && Array.isArray(domains) && domains.length > 0) {
        const domainsToAdd = [];
        domains.forEach((domain)=>{
            domainsToAdd.push({
                domain: domain.trim(),
                slug: domain.trim().replaceAll("-", "_").replaceAll(".", "-").replaceAll("/", "-"),
                lastUpdated: new Date().toJSON(),
                added: new Date().toJSON()
            });
        });
        try {
            const newDomains = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].bulkCreate */ .Z.bulkCreate(domainsToAdd);
            const formattedDomains = newDomains.map((el)=>el.get({
                    plain: true
                }));
            return res.status(201).json({
                domains: formattedDomains
            });
        } catch (error) {
            console.log("[ERROR] Adding New Domain ", error);
            return res.status(400).json({
                domains: [],
                error: "Error Adding Domain."
            });
        }
    } else {
        return res.status(400).json({
            domains: [],
            error: "Necessary data missing."
        });
    }
};
const deleteDomain = async (req, res)=>{
    if (!req.query.domain && typeof req.query.domain !== "string") {
        return res.status(400).json({
            domainRemoved: 0,
            keywordsRemoved: 0,
            SCDataRemoved: false,
            error: "Domain is Required!"
        });
    }
    try {
        const { domain  } = req.query || {};
        const removedDomCount = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].destroy */ .Z.destroy({
            where: {
                domain
            }
        });
        const removedKeywordCount = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__/* ["default"].destroy */ .Z.destroy({
            where: {
                domain
            }
        });
        const SCDataRemoved = await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_6__/* .removeLocalSCData */ .PR)(domain);
        return res.status(200).json({
            domainRemoved: removedDomCount,
            keywordsRemoved: removedKeywordCount,
            SCDataRemoved
        });
    } catch (error) {
        console.log("[ERROR] Deleting Domain: ", req.query.domain, error);
        return res.status(400).json({
            domainRemoved: 0,
            keywordsRemoved: 0,
            SCDataRemoved: false,
            error: "Error Deleting Domain"
        });
    }
};
const updateDomain = async (req, res)=>{
    if (!req.query.domain) {
        return res.status(400).json({
            domain: null,
            error: "Domain is Required!"
        });
    }
    const { domain  } = req.query || {};
    const { notification_interval , notification_emails , search_console  } = req.body;
    try {
        const domainToUpdate = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
            where: {
                domain
            }
        });
        // Validate Search Console API Data
        if (domainToUpdate && search_console?.client_email && search_console?.private_key) {
            const theDomainObj = domainToUpdate.get({
                plain: true
            });
            const isSearchConsoleAPIValid = await (0,_utils_searchConsole__WEBPACK_IMPORTED_MODULE_6__/* .checkSerchConsoleIntegration */ .d$)({
                ...theDomainObj,
                search_console: JSON.stringify(search_console)
            });
            if (!isSearchConsoleAPIValid.isValid) {
                return res.status(400).json({
                    domain: null,
                    error: isSearchConsoleAPIValid.error
                });
            }
            const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_0___default())(process.env.SECRET);
            search_console.client_email = search_console.client_email ? cryptr.encrypt(search_console.client_email.trim()) : "";
            search_console.private_key = search_console.private_key ? cryptr.encrypt(search_console.private_key.trim()) : "";
        }
        if (domainToUpdate) {
            domainToUpdate.set({
                notification_interval,
                notification_emails,
                search_console: JSON.stringify(search_console)
            });
            await domainToUpdate.save();
        }
        return res.status(200).json({
            domain: domainToUpdate
        });
    } catch (error) {
        console.log("[ERROR] Updating Domain: ", req.query.domain, error);
        return res.status(400).json({
            domain: null,
            error: "Error Updating Domain. An Unknown Error Occured."
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2762);
/* harmony import */ var _parseKeywords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1010);
/* harmony import */ var _searchConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_models_keyword__WEBPACK_IMPORTED_MODULE_0__]);
_database_models_keyword__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * The function `getdomainStats` takes an array of domain objects, retrieves keyword and stats data for
 * each domain, and calculates various statistics for each domain.
 * @param {DomainType[]} domains - An array of objects of type DomainType.
 * @returns {DomainType[]} - An array of objects of type DomainType.
 */ const getdomainStats = async (domains)=>{
    const finalDomains = [];
    console.log("domains: ", domains.length);
    for (const domain of domains){
        const domainWithStat = domain;
        // First Get ALl The Keywords for this Domain
        const allKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll({
            where: {
                domain: domain.domain
            }
        });
        const keywords = (0,_parseKeywords__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(allKeywords.map((e)=>e.get({
                plain: true
            })));
        domainWithStat.keywordCount = keywords.length;
        const keywordPositions = keywords.reduce((acc, itm)=>acc + itm.position, 0);
        const KeywordsUpdateDates = keywords.reduce((acc, itm)=>[
                ...acc,
                new Date(itm.lastUpdated).getTime()
            ], [
            0
        ]);
        const lastKeywordUpdateDate = Math.max(...KeywordsUpdateDates);
        domainWithStat.keywordsUpdated = new Date(lastKeywordUpdateDate || new Date(domain.lastUpdated).getTime()).toJSON();
        domainWithStat.avgPosition = Math.round(keywordPositions / keywords.length);
        // Then Load the SC File and read the stats and calculate the Last 7 days stats
        const localSCData = await (0,_searchConsole__WEBPACK_IMPORTED_MODULE_1__/* .readLocalSCData */ .wP)(domain.domain);
        const days = 7;
        if (localSCData && localSCData.stats && localSCData.stats.length) {
            const lastSevenStats = localSCData.stats.slice(-days);
            const totalStats = lastSevenStats.reduce((acc, item)=>{
                return {
                    impressions: item.impressions + acc.impressions,
                    clicks: item.clicks + acc.clicks,
                    ctr: item.ctr + acc.ctr,
                    position: item.position + acc.position
                };
            }, {
                impressions: 0,
                clicks: 0,
                ctr: 0,
                position: 0
            });
            domainWithStat.scVisits = totalStats.clicks;
            domainWithStat.scImpressions = totalStats.impressions;
            domainWithStat.scPosition = Math.round(totalStats.position / days);
        }
        finalDomains.push(domainWithStat);
    }
    return finalDomains;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdomainStats);

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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737], () => (__webpack_exec__(7210)));
module.exports = __webpack_exports__;

})();