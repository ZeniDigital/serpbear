"use strict";
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 3941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export updateKeywordPosition */
/* harmony import */ var perf_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4074);
/* harmony import */ var perf_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(perf_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var timers_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8670);
/* harmony import */ var timers_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timers_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scraper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2398);
/* harmony import */ var _parseKeywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scraper__WEBPACK_IMPORTED_MODULE_2__]);
_scraper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/**
 * Refreshes the Keywords position by Scraping Google Search Result by
 * Determining whether the keywords should be scraped in Parallel or not
 * @param {Keyword[]} rawkeyword - Keywords to scrape
 * @param {SettingsType} settings - The App Settings that contain the Scraper settings
 * @returns {Promise}
 */ const refreshAndUpdateKeywords = async (rawkeyword, settings)=>{
    const keywords = rawkeyword.map((el)=>el.get({
            plain: true
        }));
    if (!rawkeyword || rawkeyword.length === 0) {
        return [];
    }
    const start = perf_hooks__WEBPACK_IMPORTED_MODULE_0__.performance.now();
    const updatedKeywords = [];
    if ([
        "scrapingant",
        "serpapi",
        "searchapi"
    ].includes(settings.scraper_type)) {
        const refreshedResults = await refreshParallel(keywords, settings);
        if (refreshedResults.length > 0) {
            for (const keyword of rawkeyword){
                const refreshedkeywordData = refreshedResults.find((k)=>k && k.ID === keyword.ID);
                if (refreshedkeywordData) {
                    const updatedkeyword = await updateKeywordPosition(keyword, refreshedkeywordData, settings);
                    updatedKeywords.push(updatedkeyword);
                }
            }
        }
    } else {
        for (const keyword1 of rawkeyword){
            console.log("START SCRAPE: ", keyword1.keyword);
            const updatedkeyword1 = await refreshAndUpdateKeyword(keyword1, settings);
            updatedKeywords.push(updatedkeyword1);
            if (keywords.length > 0 && settings.scrape_delay && settings.scrape_delay !== "0") {
                await (0,timers_promises__WEBPACK_IMPORTED_MODULE_1__.setTimeout)(parseInt(settings.scrape_delay, 10));
            }
        }
    }
    const end = perf_hooks__WEBPACK_IMPORTED_MODULE_0__.performance.now();
    console.log(`time taken: ${end - start}ms`);
    return updatedKeywords;
};
/**
 * Scrape Serp for given keyword and update the position in DB.
 * @param {Keyword} keyword - Keywords to scrape
 * @param {SettingsType} settings - The App Settings that contain the Scraper settings
 * @returns {Promise<KeywordType>}
 */ const refreshAndUpdateKeyword = async (keyword, settings)=>{
    const currentkeyword = keyword.get({
        plain: true
    });
    const refreshedkeywordData = await (0,_scraper__WEBPACK_IMPORTED_MODULE_2__/* .scrapeKeywordFromGoogle */ .MD)(currentkeyword, settings);
    const updatedkeyword = refreshedkeywordData ? await updateKeywordPosition(keyword, refreshedkeywordData, settings) : currentkeyword;
    return updatedkeyword;
};
/**
 * Processes the scraped data for the given keyword and updates the keyword serp position in DB.
 * @param {Keyword} keywordRaw - Keywords to Update
 * @param {RefreshResult} udpatedkeyword - scraped Data for that Keyword
 * @param {SettingsType} settings - The App Settings that contain the Scraper settings
 * @returns {Promise<KeywordType>}
 */ const updateKeywordPosition = async (keywordRaw, udpatedkeyword, settings)=>{
    const keywordPrased = (0,_parseKeywords__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([
        keywordRaw.get({
            plain: true
        })
    ]);
    const keyword = keywordPrased[0];
    // const udpatedkeyword = refreshed;
    let updated = keyword;
    if (udpatedkeyword && keyword) {
        const newPos = udpatedkeyword.position;
        const newPosition = newPos !== 0 ? newPos : keyword.position;
        const { history  } = keyword;
        const theDate = new Date();
        const dateKey = `${theDate.getFullYear()}-${theDate.getMonth() + 1}-${theDate.getDate()}`;
        history[dateKey] = newPosition;
        const updatedVal = {
            position: newPosition,
            updating: false,
            url: udpatedkeyword.url,
            lastResult: udpatedkeyword.result,
            history,
            lastUpdated: udpatedkeyword.error ? keyword.lastUpdated : theDate.toJSON(),
            lastUpdateError: udpatedkeyword.error ? JSON.stringify({
                date: theDate.toJSON(),
                error: `${udpatedkeyword.error}`,
                scraper: settings.scraper_type
            }) : "false"
        };
        // If failed, Add to Retry Queue Cron
        if (udpatedkeyword.error && settings?.scrape_retry) {
            await (0,_scraper__WEBPACK_IMPORTED_MODULE_2__/* .retryScrape */ .Vx)(keyword.ID);
        } else {
            await (0,_scraper__WEBPACK_IMPORTED_MODULE_2__/* .removeFromRetryQueue */ .jW)(keyword.ID);
        }
        // Update the Keyword Position in Database
        try {
            await keywordRaw.update({
                ...updatedVal,
                lastResult: Array.isArray(udpatedkeyword.result) ? JSON.stringify(udpatedkeyword.result) : udpatedkeyword.result,
                history: JSON.stringify(history)
            });
            console.log("[SUCCESS] Updating the Keyword: ", keyword.keyword);
            updated = {
                ...keyword,
                ...updatedVal,
                lastUpdateError: JSON.parse(updatedVal.lastUpdateError)
            };
        } catch (error) {
            console.log("[ERROR] Updating SERP for Keyword", keyword.keyword, error);
        }
    }
    return updated;
};
/**
 * Scrape Google Keyword Search Result in Parallel.
 * @param {KeywordType[]} keywords - Keywords to scrape
 * @param {SettingsType} settings - The App Settings that contain the Scraper settings
 * @returns {Promise}
 */ const refreshParallel = async (keywords, settings)=>{
    const promises = keywords.map((keyword)=>{
        return (0,_scraper__WEBPACK_IMPORTED_MODULE_2__/* .scrapeKeywordFromGoogle */ .MD)(keyword, settings);
    });
    return Promise.all(promises).then((promiseData)=>{
        console.log("ALL DONE!!!");
        return promiseData;
    }).catch((err)=>{
        console.log(err);
        return [];
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshAndUpdateKeywords);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD": () => (/* binding */ scrapeKeywordFromGoogle),
/* harmony export */   "Vx": () => (/* binding */ retryScrape),
/* harmony export */   "jW": () => (/* binding */ removeFromRetryQueue)
/* harmony export */ });
/* unused harmony exports getScraperClient, extractScrapedResult, getSerp */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(295);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3510);
/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https_proxy_agent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6426);
/* harmony import */ var _scrapers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__, _scrapers_index__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__, _scrapers_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * Creates a SERP Scraper client promise based on the app settings.
 * @param {KeywordType} keyword - the keyword to get the SERP for.
 * @param {SettingsType} settings - the App Settings that contains the scraper details
 * @returns {Promise}
 */ const getScraperClient = (keyword, settings, scraper)=>{
    let apiURL = "";
    let client = false;
    const headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
        Accept: "application/json; charset=utf8;"
    };
    // eslint-disable-next-line max-len
    const mobileAgent = "Mozilla/5.0 (Linux; Android 10; SM-G996U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36";
    if (keyword && keyword.device === "mobile") {
        headers["User-Agent"] = mobileAgent;
    }
    if (scraper) {
        // Set Scraper Header
        const scrapeHeaders = scraper.headers ? scraper.headers(keyword, settings) : null;
        const scraperAPIURL = scraper.scrapeURL ? scraper.scrapeURL(keyword, settings, _countries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP) : null;
        if (scrapeHeaders && Object.keys(scrapeHeaders).length > 0) {
            Object.keys(scrapeHeaders).forEach((headerItemKey)=>{
                headers[headerItemKey] = scrapeHeaders[headerItemKey];
            });
        }
        // Set Scraper API URL
        // If not URL is generated, stop right here.
        if (scraperAPIURL) {
            apiURL = scraperAPIURL;
        } else {
            return false;
        }
    }
    if (settings && settings.scraper_type === "proxy" && settings.proxy) {
        const axiosConfig = {};
        headers.Accept = "gzip,deflate,compress;";
        axiosConfig.headers = headers;
        const proxies = settings.proxy.split(/\r?\n|\r|\n/g);
        let proxyURL = "";
        if (proxies.length > 1) {
            proxyURL = proxies[Math.floor(Math.random() * proxies.length)];
        } else {
            const [firstProxy] = proxies;
            proxyURL = firstProxy;
        }
        axiosConfig.httpsAgent = new (https_proxy_agent__WEBPACK_IMPORTED_MODULE_3___default())(proxyURL.trim());
        axiosConfig.proxy = false;
        const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create(axiosConfig);
        client = axiosClient.get(`https://www.google.com/search?num=100&q=${encodeURI(keyword.keyword)}`);
    } else {
        client = fetch(apiURL, {
            method: "GET",
            headers
        });
    }
    return client;
};
/**
 * Scrape Google Search result as object array from the Google Search's HTML content
 * @param {string} keyword - the keyword to search for in Google.
 * @param {string} settings - the App Settings
 * @returns {RefreshResult[]}
 */ const scrapeKeywordFromGoogle = async (keyword, settings)=>{
    let refreshedResults = {
        ID: keyword.ID,
        keyword: keyword.keyword,
        position: keyword.position,
        url: keyword.url,
        result: keyword.lastResult,
        error: true
    };
    const scraperType = settings?.scraper_type || "";
    const scraperObj = _scrapers_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"].find */ .Z.find((scraper)=>scraper.id === scraperType);
    const scraperClient = getScraperClient(keyword, settings, scraperObj);
    if (!scraperClient) {
        return false;
    }
    let scraperError = null;
    try {
        const res = scraperType === "proxy" && settings.proxy ? await scraperClient : await scraperClient.then((reslt)=>reslt.json());
        const scraperResult = scraperObj?.resultObjectKey && res[scraperObj.resultObjectKey] ? res[scraperObj.resultObjectKey] : "";
        const scrapeResult = res.data || res.html || res.results || scraperResult || "";
        if (res && scrapeResult) {
            const extracted = scraperObj?.serpExtractor ? scraperObj.serpExtractor(scrapeResult) : extractScrapedResult(scrapeResult, keyword.device);
            // await writeFile('result.txt', JSON.stringify(scrapeResult), { encoding: 'utf-8' }).catch((err) => { console.log(err); });
            const serp = getSerp(keyword.domain, extracted);
            refreshedResults = {
                ID: keyword.ID,
                keyword: keyword.keyword,
                position: serp.postion,
                url: serp.url,
                result: extracted,
                error: false
            };
            console.log("[SERP]: ", keyword.keyword, serp.postion, serp.url);
        } else {
            scraperError = res.detail || res.error || "Unknown Error";
            throw new Error(res);
        }
    } catch (error) {
        refreshedResults.error = scraperError;
        if (settings.scraper_type === "proxy" && error && error.response && error.response.statusText) {
            refreshedResults.error = `[${error.response.status}] ${error.response.statusText}`;
        }
        console.log("[ERROR] Scraping Keyword : ", keyword.keyword, ". Error: ", error && error.response && error.response.statusText);
        if (!(error && error.response && error.response.statusText)) {
            console.log("[ERROR_MESSAGE]: ", error);
        }
    }
    return refreshedResults;
};
/**
 * Extracts the Google Search result as object array from the Google Search's HTML content
 * @param {string} content - scraped google search page html data.
 * @param {string} device - The device of the keyword.
 * @returns {SearchResult[]}
 */ const extractScrapedResult = (content, device)=>{
    const extractedResult = [];
    const $ = cheerio__WEBPACK_IMPORTED_MODULE_1__["default"].load(content);
    const hasNumberofResult = $("body").find("#search  > div > div");
    const searchResultItems = hasNumberofResult.find("h3");
    let lastPosition = 0;
    for(let i = 0; i < searchResultItems.length; i += 1){
        if (searchResultItems[i]) {
            const title = $(searchResultItems[i]).html();
            const url = $(searchResultItems[i]).closest("a").attr("href");
            if (title && url) {
                lastPosition += 1;
                extractedResult.push({
                    title,
                    url,
                    position: lastPosition
                });
            }
        }
    }
    // Mobile Scraper
    if (extractedResult.length === 0 && device === "mobile") {
        const items = $("body").find("#rso > div");
        for(let i1 = 0; i1 < items.length; i1 += 1){
            const item = $(items[i1]);
            const linkDom = item.find('a[role="presentation"]');
            if (linkDom) {
                const url1 = linkDom.attr("href");
                const titleDom = linkDom.find('[role="link"]');
                const title1 = titleDom ? titleDom.text() : "";
                if (title1 && url1) {
                    lastPosition += 1;
                    extractedResult.push({
                        title: title1,
                        url: url1,
                        position: lastPosition
                    });
                }
            }
        }
    }
    return extractedResult;
};
/**
 * Find in the domain's position from the extracted search result.
 * @param {string} domainURL - URL Name to look for.
 * @param {SearchResult[]} result - The search result array extracted from the Google Search result.
 * @returns {SERPObject}
 */ const getSerp = (domainURL, result)=>{
    if (result.length === 0 || !domainURL) {
        return {
            postion: 0,
            url: ""
        };
    }
    const URLToFind = new URL(domainURL.includes("https://") ? domainURL : `https://${domainURL}`);
    const theURL = URLToFind.hostname + URLToFind.pathname;
    const isURL = URLToFind.pathname !== "/";
    const foundItem = result.find((item)=>{
        const itemURL = new URL(item.url.includes("https://") ? item.url : `https://${item.url}`);
        if (isURL && `${theURL}/` === itemURL.hostname + itemURL.pathname) {
            return true;
        }
        return URLToFind.hostname === itemURL.hostname;
    });
    return {
        postion: foundItem ? foundItem.position : 0,
        url: foundItem && foundItem.url ? foundItem.url : ""
    };
};
/**
 * When a Refresh request is failed, automatically add the keyword id to a failed_queue.json file
 * so that the retry cron tries to scrape it every hour until the scrape is successful.
 * @param {string} keywordID - The keywordID of the failed Keyword Scrape.
 * @returns {void}
 */ const retryScrape = async (keywordID)=>{
    if (!keywordID && !Number.isInteger(keywordID)) {
        return;
    }
    let currentQueue = [];
    const filePath = `${process.cwd()}/data/failed_queue.json`;
    const currentQueueRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(filePath, {
        encoding: "utf-8"
    }).catch((err)=>{
        console.log(err);
        return "[]";
    });
    currentQueue = currentQueueRaw ? JSON.parse(currentQueueRaw) : [];
    if (!currentQueue.includes(keywordID)) {
        currentQueue.push(Math.abs(keywordID));
    }
    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(filePath, JSON.stringify(currentQueue), {
        encoding: "utf-8"
    }).catch((err)=>{
        console.log(err);
        return "[]";
    });
};
/**
 * When a Refresh request is completed, remove it from the failed retry queue.
 * @param {string} keywordID - The keywordID of the failed Keyword Scrape.
 * @returns {void}
 */ const removeFromRetryQueue = async (keywordID)=>{
    if (!keywordID && !Number.isInteger(keywordID)) {
        return;
    }
    let currentQueue = [];
    const filePath = `${process.cwd()}/data/failed_queue.json`;
    const currentQueueRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(filePath, {
        encoding: "utf-8"
    }).catch((err)=>{
        console.log(err);
        return "[]";
    });
    currentQueue = currentQueueRaw ? JSON.parse(currentQueueRaw) : [];
    currentQueue = currentQueue.filter((item)=>item !== Math.abs(keywordID));
    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(filePath, JSON.stringify(currentQueue), {
        encoding: "utf-8"
    }).catch((err)=>{
        console.log(err);
        return "[]";
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;