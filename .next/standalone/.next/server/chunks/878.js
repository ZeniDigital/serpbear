"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 4878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "getAppSettings": () => (/* binding */ getAppSettings)
/* harmony export */ });
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
/* harmony import */ var _scrapers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scrapers_index__WEBPACK_IMPORTED_MODULE_4__]);
_scrapers_index__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "GET") {
        return getSettings(req, res);
    }
    if (req.method === "PUT") {
        return updateSettings(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const getSettings = async (req, res)=>{
    const settings = await getAppSettings();
    if (settings) {
        const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_2___default()();
        const version = publicRuntimeConfig?.version;
        return res.status(200).json({
            settings: {
                ...settings,
                version
            }
        });
    }
    return res.status(400).json({
        error: "Error Loading Settings!"
    });
};
const updateSettings = async (req, res)=>{
    const { settings  } = req.body || {};
    // console.log('### settings: ', settings);
    if (!settings) {
        return res.status(200).json({
            error: "Settings Data not Provided!"
        });
    }
    try {
        const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_1___default())(process.env.SECRET);
        const scaping_api = settings.scaping_api ? cryptr.encrypt(settings.scaping_api.trim()) : "";
        const smtp_password = settings.smtp_password ? cryptr.encrypt(settings.smtp_password.trim()) : "";
        const search_console_client_email = settings.search_console_client_email ? cryptr.encrypt(settings.search_console_client_email.trim()) : "";
        const search_console_private_key = settings.search_console_private_key ? cryptr.encrypt(settings.search_console_private_key.trim()) : "";
        const adwords_client_id = settings.adwords_client_id ? cryptr.encrypt(settings.adwords_client_id.trim()) : "";
        const adwords_client_secret = settings.adwords_client_secret ? cryptr.encrypt(settings.adwords_client_secret.trim()) : "";
        const adwords_developer_token = settings.adwords_developer_token ? cryptr.encrypt(settings.adwords_developer_token.trim()) : "";
        const adwords_account_id = settings.adwords_account_id ? cryptr.encrypt(settings.adwords_account_id.trim()) : "";
        const securedSettings = {
            ...settings,
            scaping_api,
            smtp_password,
            search_console_client_email,
            search_console_private_key,
            adwords_client_id,
            adwords_client_secret,
            adwords_developer_token,
            adwords_account_id
        };
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${process.cwd()}/data/settings.json`, JSON.stringify(securedSettings), {
            encoding: "utf-8"
        });
        return res.status(200).json({
            settings
        });
    } catch (error) {
        console.log("[ERROR] Updating App Settings. ", error);
        return res.status(200).json({
            error: "Error Updating Settings!"
        });
    }
};
const getAppSettings = async ()=>{
    const screenshotAPIKey = process.env.SCREENSHOT_API || "69408-ZeniBot";
    try {
        const settingsRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`${process.cwd()}/data/settings.json`, {
            encoding: "utf-8"
        });
        const failedQueueRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`${process.cwd()}/data/failed_queue.json`, {
            encoding: "utf-8"
        });
        const failedQueue = failedQueueRaw ? JSON.parse(failedQueueRaw) : [];
        const settings = settingsRaw ? JSON.parse(settingsRaw) : {};
        let decryptedSettings = settings;
        try {
            const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_1___default())(process.env.SECRET);
            const scaping_api = settings.scaping_api ? cryptr.decrypt(settings.scaping_api) : "";
            const smtp_password = settings.smtp_password ? cryptr.decrypt(settings.smtp_password) : "";
            const search_console_client_email = settings.search_console_client_email ? cryptr.decrypt(settings.search_console_client_email) : "";
            const search_console_private_key = settings.search_console_private_key ? cryptr.decrypt(settings.search_console_private_key) : "";
            const adwords_client_id = settings.adwords_client_id ? cryptr.decrypt(settings.adwords_client_id) : "";
            const adwords_client_secret = settings.adwords_client_secret ? cryptr.decrypt(settings.adwords_client_secret) : "";
            const adwords_developer_token = settings.adwords_developer_token ? cryptr.decrypt(settings.adwords_developer_token) : "";
            const adwords_account_id = settings.adwords_account_id ? cryptr.decrypt(settings.adwords_account_id) : "";
            decryptedSettings = {
                ...settings,
                scaping_api,
                smtp_password,
                search_console_client_email,
                search_console_private_key,
                search_console_integrated: !!(process.env.SEARCH_CONSOLE_PRIVATE_KEY && process.env.SEARCH_CONSOLE_CLIENT_EMAIL) || !!(search_console_client_email && search_console_private_key),
                available_scapers: _scrapers_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].map */ .Z.map((scraper)=>({
                        label: scraper.name,
                        value: scraper.id,
                        allowsCity: !!scraper.allowsCity
                    })),
                failed_queue: failedQueue,
                screenshot_key: screenshotAPIKey,
                adwords_client_id,
                adwords_client_secret,
                adwords_developer_token,
                adwords_account_id
            };
        } catch (error) {
            console.log("Error Decrypting Settings API Keys!");
        }
        return decryptedSettings;
    } catch (error1) {
        console.log("[ERROR] Getting App Settings. ", error1);
        const settings1 = {
            scraper_type: "none",
            notification_interval: "never",
            notification_email: "",
            notification_email_from: "",
            smtp_server: "",
            smtp_port: "",
            smtp_username: "",
            smtp_password: "",
            scrape_retry: false,
            screenshot_key: screenshotAPIKey,
            search_console: true,
            search_console_client_email: "",
            search_console_private_key: ""
        };
        const otherSettings = {
            available_scapers: _scrapers_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].map */ .Z.map((scraper)=>({
                    label: scraper.name,
                    value: scraper.id
                })),
            failed_queue: []
        };
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${process.cwd()}/data/settings.json`, JSON.stringify(settings1), {
            encoding: "utf-8"
        });
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${process.cwd()}/data/failed_queue.json`, JSON.stringify([]), {
            encoding: "utf-8"
        });
        return {
            ...settings1,
            ...otherSettings
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_scrapingant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5143);
/* harmony import */ var _services_scrapingrobot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8763);
/* harmony import */ var _services_serpapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _services_serply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1529);
/* harmony import */ var _services_spaceserp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3035);
/* harmony import */ var _services_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9619);
/* harmony import */ var _services_searchapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3410);
/* harmony import */ var _services_valueserp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5281);
/* harmony import */ var _services_serper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9710);
/* harmony import */ var _services_hasdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1291);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_proxy__WEBPACK_IMPORTED_MODULE_5__]);
_services_proxy__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    _services_scrapingrobot__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    _services_scrapingant__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    _services_serpapi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    _services_serply__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    _services_spaceserp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    _services_proxy__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    _services_searchapi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    _services_valueserp__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    _services_serper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    _services_hasdata__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, 
]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6426);

const hasdata = {
    id: "hasdata",
    name: "HasData",
    website: "hasdata.com",
    allowsCity: true,
    headers: (keyword, settings)=>{
        return {
            "Content-Type": "application/json",
            "x-api-key": settings.scaping_api
        };
    },
    scrapeURL: (keyword, settings)=>{
        const country = keyword.country || "US";
        const countryName = _utils_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0];
        const location = keyword.city && countryName ? `&location=${encodeURI(`${keyword.city},${countryName}`)}` : "";
        return `https://api.scrape-it.cloud/scrape/google/serp?q=${encodeURI(keyword.keyword)}${location}&num=100&gl=${country.toLowerCase()}&deviceType=${keyword.device}`;
    },
    resultObjectKey: "organicResults",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const { link , title , position  } of results){
            if (title && link) {
                extractedResult.push({
                    title,
                    url: link,
                    position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasdata);


/***/ }),

/***/ 9619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cheerio__WEBPACK_IMPORTED_MODULE_0__]);
cheerio__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const proxy = {
    id: "proxy",
    name: "Proxy",
    website: "",
    resultObjectKey: "data",
    headers: ()=>{
        return {
            Accept: "gzip,deflate,compress;"
        };
    },
    scrapeURL: (keyword)=>{
        return `https://www.google.com/search?num=100&q=${encodeURI(keyword.keyword)}`;
    },
    serpExtractor: (content)=>{
        const extractedResult = [];
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__["default"].load(content);
        let lastPosition = 0;
        const mainContent = $("body").find("#main");
        const children = $(mainContent).find("h3");
        for(let index = 0; index < children.length; index += 1){
            const title = $(children[index]).text();
            const url = $(children[index]).closest("a").attr("href");
            const cleanedURL = url ? url.replaceAll(/^.+?(?=https:|$)/g, "").replaceAll(/(&).*/g, "") : "";
            if (title && url) {
                lastPosition += 1;
                extractedResult.push({
                    title,
                    url: cleanedURL,
                    position: lastPosition
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrapingAnt = {
    id: "scrapingant",
    name: "ScrapingAnt",
    website: "scrapingant.com",
    headers: (keyword)=>{
        // eslint-disable-next-line max-len
        const mobileAgent = "Mozilla/5.0 (Linux; Android 10; SM-G996U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36";
        return keyword && keyword.device === "mobile" ? {
            "Ant-User-Agent": mobileAgent
        } : {};
    },
    scrapeURL: (keyword, settings, countryData)=>{
        const scraperCountries = [
            "AE",
            "BR",
            "CN",
            "DE",
            "ES",
            "FR",
            "GB",
            "HK",
            "PL",
            "IN",
            "IT",
            "IL",
            "JP",
            "NL",
            "RU",
            "SA",
            "US",
            "CZ"
        ];
        const country = scraperCountries.includes(keyword.country.toUpperCase()) ? keyword.country : "US";
        const lang = countryData[country][2];
        const url = encodeURI(`https://www.google.com/search?num=100&hl=${lang}&q=${keyword.keyword}`);
        return `https://api.scrapingant.com/v2/extended?url=${url}&x-api-key=${settings.scaping_api}&proxy_country=${country}&browser=false`;
    },
    resultObjectKey: "result"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrapingAnt);


/***/ }),

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrapingRobot = {
    id: "scrapingrobot",
    name: "Scraping Robot",
    website: "scrapingrobot.com",
    scrapeURL: (keyword, settings, countryData)=>{
        const country = keyword.country || "US";
        const device = keyword.device === "mobile" ? "&mobile=true" : "";
        const lang = countryData[country][2];
        const url = encodeURI(`https://www.google.com/search?num=100&hl=${lang}&q=${keyword.keyword}`);
        return `https://api.scrapingrobot.com/?token=${settings.scaping_api}&proxyCountry=${country}&render=false${device}&url=${url}`;
    },
    resultObjectKey: "result"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrapingRobot);


/***/ }),

/***/ 3410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6426);

const searchapi = {
    id: "searchapi",
    name: "SearchApi.io",
    website: "searchapi.io",
    allowsCity: true,
    headers: (keyword, settings)=>{
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${settings.scaping_api}`
        };
    },
    scrapeURL: (keyword)=>{
        const country = keyword.country || "US";
        const countryName = _utils_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0];
        const location = keyword.city && countryName ? `&location=${encodeURI(`${keyword.city},${countryName}`)}` : "";
        return `https://www.searchapi.io/api/v1/search?engine=google&q=${encodeURI(keyword.keyword)}&num=100&gl=${country}&device=${keyword.device}${location}`;
    },
    resultObjectKey: "organic_results",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const { link , title , position  } of results){
            if (title && link) {
                extractedResult.push({
                    title,
                    url: link,
                    position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchapi);


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6426);

const serpapi = {
    id: "serpapi",
    name: "SerpApi.com",
    website: "serpapi.com",
    allowsCity: true,
    headers: (keyword, settings)=>{
        return {
            "Content-Type": "application/json",
            "X-API-Key": settings.scaping_api
        };
    },
    scrapeURL: (keyword, settings)=>{
        const countryName = _utils_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[keyword.country || "US"][0];
        const location = keyword.city && keyword.country ? `&location=${encodeURI(`${keyword.city},${countryName}`)}` : "";
        return `https://serpapi.com/search?q=${encodeURI(keyword.keyword)}&num=100&gl=${keyword.country}&device=${keyword.device}${location}&api_key=${settings.scaping_api}`;
    },
    resultObjectKey: "organic_results",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const { link , title , position  } of results){
            if (title && link) {
                extractedResult.push({
                    title,
                    url: link,
                    position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serpapi);


/***/ }),

/***/ 9710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const serper = {
    id: "serper",
    name: "Serper.dev",
    website: "serper.dev",
    allowsCity: true,
    scrapeURL: (keyword, settings, countryData)=>{
        const country = keyword.country || "US";
        const lang = countryData[country][2];
        return `https://google.serper.dev/search?q=${encodeURI(keyword.keyword)}&gl=${country}&hl=${lang}&num=100&apiKey=${settings.scaping_api}`;
    },
    resultObjectKey: "organic",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const { link , title , position  } of results){
            if (title && link) {
                extractedResult.push({
                    title,
                    url: link,
                    position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serper);


/***/ }),

/***/ 1529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scraperCountries = [
    "US",
    "CA",
    "IE",
    "GB",
    "FR",
    "DE",
    "SE",
    "IN",
    "JP",
    "KR",
    "SG",
    "AU",
    "BR"
];
const serply = {
    id: "serply",
    name: "Serply",
    website: "serply.io",
    headers: (keyword, settings)=>{
        const country = scraperCountries.includes(keyword.country.toUpperCase()) ? keyword.country : "US";
        return {
            "Content-Type": "application/json",
            "X-User-Agent": keyword.device === "mobile" ? "mobile" : "desktop",
            "X-Api-Key": settings.scaping_api,
            "X-Proxy-Location": country
        };
    },
    scrapeURL: (keyword)=>{
        const country = scraperCountries.includes(keyword.country.toUpperCase()) ? keyword.country : "US";
        return `https://api.serply.io/v1/search/q=${encodeURI(keyword.keyword)}&num=100&hl=${country}`;
    },
    resultObjectKey: "result",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const result of results){
            if (result.title && result.link) {
                extractedResult.push({
                    title: result.title,
                    url: result.link,
                    position: result.realPosition
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serply);


/***/ }),

/***/ 3035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6426);

const spaceSerp = {
    id: "spaceSerp",
    name: "Space Serp",
    website: "spaceserp.com",
    allowsCity: true,
    scrapeURL: (keyword, settings, countryData)=>{
        const country = keyword.country || "US";
        const countryName = _utils_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0];
        const location = keyword.city ? `&location=${encodeURI(`${keyword.city},${countryName}`)}` : "";
        const device = keyword.device === "mobile" ? "&device=mobile" : "";
        const lang = countryData[country][2];
        return `https://api.spaceserp.com/google/search?apiKey=${settings.scaping_api}&q=${encodeURI(keyword.keyword)}&pageSize=100&gl=${country}&hl=${lang}${location}${device}&resultBlocks=`;
    },
    resultObjectKey: "organic_results",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const result of results){
            if (result.title && result.link) {
                extractedResult.push({
                    title: result.title,
                    url: result.link,
                    position: result.position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spaceSerp);


/***/ }),

/***/ 5281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6426);

const valueSerp = {
    id: "valueserp",
    name: "Value Serp",
    website: "valueserp.com",
    allowsCity: true,
    scrapeURL: (keyword, settings, countryData)=>{
        const country = keyword.country || "US";
        const countryName = _utils_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0];
        const location = keyword.city ? `&location=${encodeURI(`${keyword.city},${countryName}`)}` : "";
        const device = keyword.device === "mobile" ? "&device=mobile" : "";
        const lang = countryData[country][2];
        console.log(`https://api.valueserp.com/search?api_key=${settings.scaping_api}&q=${encodeURI(keyword.keyword)}&gl=${country}&hl=${lang}${device}${location}&num=100&output=json&include_answer_box=false&include_advertiser_info=false`);
        return `https://api.valueserp.com/search?api_key=${settings.scaping_api}&q=${encodeURI(keyword.keyword)}&gl=${country}&hl=${lang}${device}${location}&num=100&output=json&include_answer_box=false&include_advertiser_info=false`;
    },
    resultObjectKey: "organic_results",
    serpExtractor: (content)=>{
        const extractedResult = [];
        const results = typeof content === "string" ? JSON.parse(content) : content;
        for (const result of results){
            if (result.title && result.link) {
                extractedResult.push({
                    title: result.title,
                    url: result.link,
                    position: result.position
                });
            }
        }
        return extractedResult;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valueSerp);


/***/ })

};
;