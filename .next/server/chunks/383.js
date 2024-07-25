"use strict";
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 8405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": () => (/* binding */ getLocalKeywordIdeas),
/* harmony export */   "_T": () => (/* binding */ updateLocalKeywordIdeas),
/* harmony export */   "c3": () => (/* binding */ getAdwordsKeywordIdeas),
/* harmony export */   "cu": () => (/* binding */ getKeywordsVolume),
/* harmony export */   "f5": () => (/* binding */ getAdwordsCredentials),
/* harmony export */   "lN": () => (/* binding */ updateKeywordsVolumeData)
/* harmony export */ });
/* unused harmony export getAdwordsAccessToken */
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _isaacs_ttlcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8677);
/* harmony import */ var _isaacs_ttlcache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_isaacs_ttlcache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var timers_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8670);
/* harmony import */ var timers_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timers_promises__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2762);
/* harmony import */ var _parseKeywords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1010);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6426);
/* harmony import */ var _searchConsole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_models_keyword__WEBPACK_IMPORTED_MODULE_4__]);
_database_models_keyword__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const memoryCache = new (_isaacs_ttlcache__WEBPACK_IMPORTED_MODULE_2___default())({
    max: 10000
});
/**
 * The function `getAdwordsCredentials` reads and decrypts Google Ads credentials from the App settings file.
 * @returns {Promise<false | AdwordsCredentials>} returns either a decrypted `AdwordsCredentials` object if the settings are successfully decrypted,
 * or `false` if the decryption process fails.
 */ const getAdwordsCredentials = async ()=>{
    try {
        const settingsRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`${process.cwd()}/data/settings.json`, {
            encoding: "utf-8"
        });
        const settings = settingsRaw ? JSON.parse(settingsRaw) : {};
        let decryptedSettings = false;
        try {
            const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_1___default())(process.env.SECRET);
            const client_id = settings.adwords_client_id ? cryptr.decrypt(settings.adwords_client_id) : "";
            const client_secret = settings.adwords_client_secret ? cryptr.decrypt(settings.adwords_client_secret) : "";
            const developer_token = settings.adwords_developer_token ? cryptr.decrypt(settings.adwords_developer_token) : "";
            const account_id = settings.adwords_account_id ? cryptr.decrypt(settings.adwords_account_id) : "";
            const refresh_token = settings.adwords_refresh_token ? cryptr.decrypt(settings.adwords_refresh_token) : "";
            decryptedSettings = {
                client_id,
                client_secret,
                developer_token,
                account_id,
                refresh_token
            };
        } catch (error) {
            console.log("Error Decrypting Settings API Keys!");
        }
        return decryptedSettings;
    } catch (error1) {
        console.log("[ERROR] Getting App Settings. ", error1);
    }
    return false;
};
/**
 * retrieves an access token using Google Ads credentials for Google API authentication.
 * @param {AdwordsCredentials} credentials - The `credentials` to use to generate the access token,
 * @returns {Promise<string>} the fetched access token or an empty string if failed.
 */ const getAdwordsAccessToken = async (credentials)=>{
    const { client_id , client_secret , refresh_token  } = credentials;
    try {
        const resp = await fetch("https://www.googleapis.com/oauth2/v3/token", {
            method: "POST",
            body: new URLSearchParams({
                grant_type: "refresh_token",
                client_id,
                client_secret,
                refresh_token
            })
        });
        const tokens = await resp.json();
        //  console.log('token :', tokens);
        return tokens?.access_token || "";
    } catch (error) {
        console.log("[Error] Getting Google Account Access Token:", error);
        return "";
    }
};
/**
 * The function `getAdwordsKeywordIdeas` retrieves keyword ideas from Google Ads API based on
 * provided credentials and settings.
 * @param {AdwordsCredentials} credentials - an object containing Google Ads credentials needed to authenticate
 * the API request.
 * @param {IdeaSettings} adwordsDomainOptions - an object that contains settings and options for fetching
 * keyword ideas from Google Ads.
 * @param {boolean} [test=false] - a boolean flag that indicates whether the function is being run in a test mode or not.
 * When `test` is set to `true`, only 1 keyword is requested from adwords.
 * @returns returns an array of fetched keywords (`fetchedKeywords`) after processing the Google Ads API response.
 */ const getAdwordsKeywordIdeas = async (credentials, adwordsDomainOptions, test = false)=>{
    if (!credentials) {
        return false;
    }
    const { account_id , developer_token  } = credentials;
    const { country ="2840" , language ="1000" , keywords =[] , domain ="" , seedType  } = adwordsDomainOptions || {};
    let accessToken = "";
    const cachedAccessToken = memoryCache.get("adwords_token");
    if (cachedAccessToken && !test) {
        accessToken = cachedAccessToken;
    } else {
        accessToken = await getAdwordsAccessToken(credentials);
        memoryCache.delete("adwords_token");
        memoryCache.set("adwords_token", accessToken, {
            ttl: 3300000
        });
    }
    let fetchedKeywords = [];
    if (accessToken) {
        const seedKeywords = [
            ...keywords
        ];
        // Load Keywords from Google Search Console File.
        if (seedType === "searchconsole" && domain) {
            const domainSCData = await (0,_searchConsole__WEBPACK_IMPORTED_MODULE_6__/* .readLocalSCData */ .wP)(domain);
            if (domainSCData && domainSCData.thirtyDays) {
                const scKeywords = domainSCData.thirtyDays;
                const sortedSCKeywords = scKeywords.sort((a, b)=>b.impressions > a.impressions ? 1 : -1);
                sortedSCKeywords.slice(0, 100).forEach((sckeywrd)=>{
                    if (sckeywrd.keyword && !seedKeywords.includes(sckeywrd.keyword)) {
                        seedKeywords.push(sckeywrd.keyword);
                    }
                });
            }
        }
        // Load all Keywords from Database
        if (seedType === "tracking" && domain) {
            const allKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findAll */ .Z.findAll({
                where: {
                    domain
                }
            });
            const currentKeywords = (0,_parseKeywords__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(allKeywords.map((e)=>e.get({
                    plain: true
                })));
            currentKeywords.forEach((keyword)=>{
                if (keyword.keyword && !seedKeywords.includes(keyword.keyword)) {
                    seedKeywords.push(keyword.keyword);
                }
            });
        }
        try {
            // API: https://developers.google.com/google-ads/api/rest/reference/rest/v16/customers/generateKeywordIdeas
            const customerID = account_id.replaceAll("-", "");
            const geoTargetConstants = _countries__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP[country][3]; // '2840';
            const reqPayload = {
                geoTargetConstants: `geoTargetConstants/${geoTargetConstants}`,
                language: `languageConstants/${language}`,
                pageSize: test ? "1" : "1000"
            };
            if ([
                "custom",
                "searchconsole",
                "tracking"
            ].includes(seedType) && seedKeywords.length > 0) {
                reqPayload.keywordSeed = {
                    keywords: seedKeywords.slice(0, 20)
                };
            }
            if (seedType === "auto" && domain) {
                reqPayload.siteSeed = {
                    site: domain
                };
            }
            const resp = await fetch(`https://googleads.googleapis.com/v16/customers/${customerID}:generateKeywordIdeas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "developer-token": developer_token,
                    Authorization: `Bearer ${accessToken}`,
                    "login-customer-id": customerID
                },
                body: JSON.stringify(reqPayload)
            });
            const ideaData = await resp.json();
            if (resp.status !== 200) {
                console.log("[ERROR] Google Ads Response :", ideaData?.error?.details[0]?.errors[0]?.message);
            // console.log('Response from Ads :', JSON.stringify(ideaData, null, 2));
            }
            if (ideaData?.results) {
                fetchedKeywords = extractAdwordskeywordIdeas(ideaData.results, {
                    country,
                    domain
                });
            }
            if (!test && fetchedKeywords.length > 0) {
                await updateLocalKeywordIdeas(domain, {
                    keywords: fetchedKeywords,
                    settings: adwordsDomainOptions
                });
            }
        } catch (error) {
            console.log("[ERROR] Fetching Keyword Ideas from Google Ads :", error);
        }
    }
    return fetchedKeywords;
};
/**
 * The function `extractAdwordskeywordIdeas` processes keyword ideas data and returns an array of
 * IdeaKeyword objects sorted by average monthly searches.
 * @param {keywordIdeasResponseItem[]} keywordIdeas - The `keywordIdeas` parameter is an array of
 * objects that contain keyword ideas and their metrics.
 * @param options - The `options` parameter in the `extractAdwordskeywordIdeas` function is an object
 * that can contain two properties: `country` and `domain`.
 * @returns returns an array of `IdeaKeyword` array sorted based on the average monthly searches in descending order.
 */ const extractAdwordskeywordIdeas = (keywordIdeas, options)=>{
    const keywords = [];
    if (keywordIdeas.length > 0) {
        const { country ="" , domain =""  } = options;
        keywordIdeas.forEach((kwRaw)=>{
            const { text , keywordIdeaMetrics  } = kwRaw;
            const { competition , competitionIndex ="0" , avgMonthlySearches ="0" , monthlySearchVolumes =[]  } = keywordIdeaMetrics || {};
            if (keywordIdeaMetrics?.avgMonthlySearches) {
                const searchVolumeTrend = {};
                const searchVolume = parseInt(avgMonthlySearches, 10);
                monthlySearchVolumes.forEach((item)=>{
                    searchVolumeTrend[`${item.month}-${item.year}`] = item.monthlySearches;
                });
                if (searchVolume > 100) {
                    keywords.push({
                        uid: `${country.toLowerCase()}:${text.replaceAll(" ", "-")}`,
                        keyword: text,
                        competition,
                        competitionIndex: competitionIndex !== null ? parseInt(competitionIndex, 10) : 0,
                        monthlySearchVolumes: searchVolumeTrend,
                        avgMonthlySearches: searchVolume,
                        added: new Date().getTime(),
                        updated: new Date().getTime(),
                        country,
                        domain,
                        position: 999
                    });
                }
            }
        });
    }
    return keywords.sort((a, b)=>b.avgMonthlySearches > a.avgMonthlySearches ? 1 : -1);
};
/**
 * Retrieves keyword search volumes from Google Ads API based on provided keywords and their countries.
 * @param {KeywordType[]} keywords - The keywords that you want to get the search volume data for.
 * @returns returns a Promise that resolves to an object with a `volumes` and error `proprties`.
 *  The `volumes` propery which outputs `false` if the request fails and outputs the volume data in `{[keywordID]: volume}` object if succeeds.
 *  The `error` porperty that outputs the error message if any.
 */ const getKeywordsVolume = async (keywords)=>{
    const credentials = await getAdwordsCredentials();
    if (!credentials) {
        return {
            error: "Cannot Load Google Ads Credentials",
            volumes: false
        };
    }
    const { client_id , client_secret , developer_token , account_id  } = credentials;
    if (!client_id || !client_secret || !developer_token || !account_id) {
        return {
            error: "Google Ads Not Integrated Properly",
            volumes: false
        };
    }
    // Generate Access Token
    let accessToken = "";
    const cachedAccessToken = memoryCache.get("adwords_token");
    if (cachedAccessToken) {
        accessToken = cachedAccessToken;
    } else {
        accessToken = await getAdwordsAccessToken(credentials);
        memoryCache.delete("adwords_token");
        memoryCache.set("adwords_token", accessToken, {
            ttl: 3300000
        });
    }
    const fetchedKeywords = {};
    if (accessToken) {
        // Group keywords based on their country.
        const keywordRequests = {};
        keywords.forEach((kw)=>{
            const kwCountry = kw.country;
            if (keywordRequests[kwCountry]) {
                keywordRequests[kwCountry].push(kw);
            } else {
                keywordRequests[kwCountry] = [
                    kw
                ];
            }
        });
        // Send Requests to adwords based on grouped countries.
        // Since adwords does not allow sending country data for each keyword we are making requests for.
        for(const country in keywordRequests){
            if (Object.hasOwn(keywordRequests, country) && keywordRequests[country].length > 0) {
                try {
                    // API: https://developers.google.com/google-ads/api/rest/reference/rest/v16/customers/generateKeywordHistoricalMetrics
                    const customerID = account_id.replaceAll("-", "");
                    const geoTargetConstants = _countries__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP[country][3]; // '2840';
                    const reqKeywords = keywordRequests[country].map((kw)=>kw.keyword);
                    const reqPayload = {
                        keywords: [
                            ...new Set(reqKeywords)
                        ],
                        geoTargetConstants: `geoTargetConstants/${geoTargetConstants}`
                    };
                    const resp = await fetch(`https://googleads.googleapis.com/v16/customers/${customerID}:generateKeywordHistoricalMetrics`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "developer-token": developer_token,
                            Authorization: `Bearer ${accessToken}`,
                            "login-customer-id": customerID
                        },
                        body: JSON.stringify(reqPayload)
                    });
                    const ideaData = await resp.json();
                    if (resp.status !== 200) {
                        console.log("[ERROR] Google Ads Volume Request Response :", ideaData?.error?.details[0]?.errors[0]?.message);
                    // console.log('Response from Google Ads :', JSON.stringify(ideaData, null, 2));
                    }
                    if (ideaData?.results) {
                        if (Array.isArray(ideaData.results) && ideaData.results.length > 0) {
                            const volumeDataObj = new Map();
                            ideaData.results.forEach((item)=>{
                                const kwVol = item?.keywordMetrics?.avgMonthlySearches;
                                volumeDataObj.set(`${country}:${item.text}`, kwVol ? parseInt(kwVol, 10) : 0);
                            });
                            keywordRequests[country].forEach((keyword)=>{
                                const keywordKey = `${keyword.country}:${keyword.keyword}`;
                                if (volumeDataObj.has(keywordKey)) {
                                    const volume = volumeDataObj.get(keywordKey);
                                    if (volume !== undefined) {
                                        fetchedKeywords[keyword.ID] = volume;
                                    }
                                }
                            });
                        // console.log('fetchedKeywords :', fetchedKeywords);
                        }
                    }
                } catch (error) {
                    console.log("[ERROR] Fetching Keyword Volume from Google Ads :", error);
                }
                if (Object.keys(keywordRequests).length > 1) {
                    await (0,timers_promises__WEBPACK_IMPORTED_MODULE_3__.setTimeout)(7000);
                }
            }
        }
    }
    return {
        volumes: fetchedKeywords
    };
};
/**
 * Updates volume data for keywords in the Keywords database using async/await and error handling.
 * @param {false | Record<number, number>} volumesData - The `volumesData` parameter can either be `false` or an object containing
 * keyword IDs as keys and corresponding volume data as values.
 * @returns returns a Promise that resolves to `true` if `volumesData` is not `false` else it returns `false`.
 */ const updateKeywordsVolumeData = async (volumesData)=>{
    if (volumesData === false) {
        return false;
    }
    Object.keys(volumesData).forEach(async (keywordID)=>{
        const keyID = parseInt(keywordID, 10);
        const volumeData = volumesData && volumesData[keyID] ? volumesData[keyID] : 0;
        try {
            await _database_models_keyword__WEBPACK_IMPORTED_MODULE_4__/* ["default"].update */ .Z.update({
                volume: volumeData
            }, {
                where: {
                    ID: keyID
                }
            });
        } catch (error) {
            console.log("");
        }
    });
    return true;
};
/**
 * The function `getLocalKeywordIdeas` reads keyword ideas data from a local JSON file based on a domain slug and returns it as a Promise.
 * @param {string} domain - The `domain` parameter is the domain slug for which the keyword Ideas are fetched.
 * @returns returns either a `KeywordIdeasDatabase` object if the data is successfully retrieved , or it returns `false` if
 * there are no keywords found in the retrieved data or if an error occurs during the process.
 */ const getLocalKeywordIdeas = async (domain)=>{
    try {
        const domainName = domain.replaceAll("-", ".").replaceAll("_", "-");
        const filename = `IDEAS_${domainName}.json`;
        const keywordIdeasRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`${process.cwd()}/data/${filename}`, {
            encoding: "utf-8"
        });
        const keywordIdeasData = JSON.parse(keywordIdeasRaw);
        if (keywordIdeasData.keywords) {
            return keywordIdeasData;
        }
        return false;
    } catch (error) {
        // console.log('[ERROR] Getting Local Ideas. ', error);
        return false;
    }
};
/**
 * The function `updateLocalKeywordIdeas` updates a local JSON file containing keyword ideas for a specific domain with new data provided.
 * @param {string} domain - The `domain` parameter is the domain slug for which the keyword Ideas are being updated.
 * @param {IdeaDatabaseUpdateData} data - The `data` parameter is an object of type `IdeaDatabaseUpdateData`.
 *  It contains the following properties: `keywords`, `favorites` & `settings`
 * @returns The function `updateLocalKeywordIdeas` returns a Promise<boolean>.
 */ const updateLocalKeywordIdeas = async (domain, data)=>{
    try {
        const domainName = domain.replaceAll("-", ".").replaceAll("_", "-");
        const existingIdeas = await getLocalKeywordIdeas(domain);
        const filename = `IDEAS_${domainName}.json`;
        const fileContent = {
            ...existingIdeas,
            updated: new Date().getTime()
        };
        if (data.keywords && Array.isArray(data.keywords) && data.keywords.length > 0) {
            fileContent.keywords = data.keywords;
        }
        if (data.favorites && Array.isArray(data.favorites) && data.favorites.length > 0) {
            fileContent.favorites = data.favorites;
        }
        if (data.settings) {
            fileContent.settings = data.settings;
        }
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${process.cwd()}/data/${filename}`, JSON.stringify(fileContent, null, 2), "utf-8");
        console.log(`Data saved to ${filename} successfully!`);
        return true;
    } catch (error) {
        console.error(`[Error] Saving data to IDEAS_${domain}.json: ${error}`);
        return false;
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