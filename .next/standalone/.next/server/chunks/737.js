"use strict";
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PR": () => (/* binding */ removeLocalSCData),
/* harmony export */   "TG": () => (/* binding */ getSearchConsoleApiInfo),
/* harmony export */   "VS": () => (/* binding */ fetchDomainSCData),
/* harmony export */   "d$": () => (/* binding */ checkSerchConsoleIntegration),
/* harmony export */   "hl": () => (/* binding */ integrateKeywordSCData),
/* harmony export */   "wP": () => (/* binding */ readLocalSCData)
/* harmony export */ });
/* unused harmony exports parseSearchConsoleItem, updateLocalSCData */
/* harmony import */ var _googleapis_searchconsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var _googleapis_searchconsole__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_googleapis_searchconsole__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6607);
/* harmony import */ var cryptr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cryptr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6426);




/**
 * Retrieves data from the Google Search Console API based on the provided domain name, number of days, and optional type.
 * @param {DomainType} domain - The domain for which you want to fetch search console data.
 * @param {number} days - number of days of data you want to fetch from the Search Console.
 * @param {string} [type] - (optional) specifies the type of data to fetch from the Search Console.
 * @param {SCAPISettings} [api] - (optional) specifies the Seach Console API Information.
 * @returns {Promise<fetchConsoleDataResponse>}
 */ const fetchSearchConsoleData = async (domain, days, type, api)=>{
    if (!domain) return {
        error: true,
        errorMsg: "Domain Not Provided!"
    };
    if (!api?.private_key || !api?.client_email) return {
        error: true,
        errorMsg: "Search Console API Data Not Avaialable."
    };
    const domainName = domain.domain;
    const defaultSCSettings = {
        property_type: "domain",
        url: "",
        client_email: "",
        private_key: ""
    };
    const domainSettings = domain.search_console ? JSON.parse(domain.search_console) : defaultSCSettings;
    const sCPrivateKey = api?.private_key || process.env.SEARCH_CONSOLE_PRIVATE_KEY || "";
    const sCClientEmail = api?.client_email || process.env.SEARCH_CONSOLE_CLIENT_EMAIL || "";
    try {
        const authClient = new _googleapis_searchconsole__WEBPACK_IMPORTED_MODULE_0__.auth.GoogleAuth({
            credentials: {
                private_key: sCPrivateKey.replaceAll("\\n", "\n"),
                client_email: (sCClientEmail || "").trim()
            },
            scopes: [
                "https://www.googleapis.com/auth/webmasters.readonly", 
            ]
        });
        const startDateRaw = new Date(new Date().setDate(new Date().getDate() - days));
        const padDate = (num)=>String(num).padStart(2, "0");
        const startDate = `${startDateRaw.getFullYear()}-${padDate(startDateRaw.getMonth() + 1)}-${padDate(startDateRaw.getDate())}`;
        const endDate = `${new Date().getFullYear()}-${padDate(new Date().getMonth() + 1)}-${padDate(new Date().getDate())}`;
        const client = new _googleapis_searchconsole__WEBPACK_IMPORTED_MODULE_0__.searchconsole_v1.Searchconsole({
            auth: authClient
        });
        // Params: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
        let requestBody = {
            startDate,
            endDate,
            type: "web",
            rowLimit: 1000,
            dataState: "all",
            dimensions: [
                "query",
                "device",
                "country",
                "page"
            ]
        };
        if (type === "stat") {
            requestBody = {
                startDate,
                endDate,
                dataState: "all",
                dimensions: [
                    "date"
                ]
            };
        }
        const siteUrl = domainSettings.property_type === "url" && domainSettings.url ? domainSettings.url : `sc-domain:${domainName}`;
        const res = client.searchanalytics.query({
            siteUrl,
            requestBody
        });
        const resData = (await res).data;
        let finalRows = resData.rows ? resData.rows.map((item)=>parseSearchConsoleItem(item, domainName)) : [];
        if (type === "stat" && resData.rows && resData.rows.length > 0) {
            // console.log(resData.rows);
            finalRows = [];
            resData.rows.forEach((row)=>{
                finalRows.push({
                    date: row.keys[0],
                    clicks: row.clicks,
                    impressions: row.impressions,
                    ctr: row.ctr * 100,
                    position: row.position
                });
            });
        }
        return finalRows;
    } catch (err) {
        const qType = type === "stats" ? "(stats)" : `(${days}days)`;
        const errorMsg = err?.response?.status && `${err?.response?.statusText}. ${err?.response?.data?.error_description}`;
        console.log(`[ERROR] Search Console API Error for ${domainName} ${qType} : `, errorMsg || err?.code);
        // console.log('SC ERROR :', err);
        return {
            error: true,
            errorMsg: errorMsg || err?.code
        };
    }
};
/**
 * The function fetches search console data for a given domain and returns it in a structured format.
 * @param {DomainType} domain - The `domain` parameter is a Domain object that represents the domain for which we
 * want to fetch search console data.
 * @returns The function `fetchDomainSCData` is returning a Promise that resolves to an object of type
 * `SCDomainDataType`.
 */ const fetchDomainSCData = async (domain, scAPI)=>{
    const days = [
        3,
        7,
        30
    ];
    const scDomainData = {
        threeDays: [],
        sevenDays: [],
        thirtyDays: [],
        lastFetched: "",
        lastFetchError: "",
        stats: []
    };
    if (domain.domain && scAPI) {
        const theDomain = domain;
        for (const day of days){
            const items = await fetchSearchConsoleData(theDomain, day, undefined, scAPI);
            scDomainData.lastFetched = new Date().toJSON();
            if (Array.isArray(items)) {
                if (day === 3) scDomainData.threeDays = items;
                if (day === 7) scDomainData.sevenDays = items;
                if (day === 30) scDomainData.thirtyDays = items;
            } else if (items.error) {
                scDomainData.lastFetchError = items.errorMsg;
            }
        }
        const stats = await fetchSearchConsoleData(theDomain, 30, "stat", scAPI);
        if (stats && Array.isArray(stats) && stats.length > 0) {
            scDomainData.stats = stats;
        }
        await updateLocalSCData(domain.domain, scDomainData);
    }
    return scDomainData;
};
/**
 * The function takes a raw search console item and a domain name as input and returns a parsed search analytics item.
 * @param {SearchAnalyticsRawItem} SCItem - The SCItem parameter is an object that represents a raw item from the Search Console API.
 * @param {string} domainName - The `domainName` parameter is a string that represents the domain name of the website.
 * @returns {SearchAnalyticsItem}.
 */ const parseSearchConsoleItem = (SCItem, domainName)=>{
    const { clicks =0 , impressions =0 , ctr =0 , position =0  } = SCItem;
    const keyword = SCItem.keys[0];
    const device = SCItem.keys[1] ? SCItem.keys[1].toLowerCase() : "desktop";
    const country = SCItem.keys[2] ? (0,_countries__WEBPACK_IMPORTED_MODULE_3__/* .getCountryCodeFromAlphaThree */ .y7)(SCItem.keys[2].toUpperCase()) || SCItem.keys[2] : "ZZ";
    const page = SCItem.keys[3] ? SCItem.keys[3].replace("https://", "").replace("http://", "").replace("www", "").replace(domainName, "") : "";
    const uid = `${country.toLowerCase()}:${device}:${keyword.replaceAll(" ", "_")}`;
    return {
        keyword,
        uid,
        device,
        country,
        clicks,
        impressions,
        ctr: ctr * 100,
        position,
        page
    };
};
/**
 * The function integrates search console data with a keyword object and returns the updated keyword object with the search console data.
 * @param {KeywordType} keyword - The `keyword` parameter is of type `KeywordType`, which is a custom type representing a keyword.
 * @param {SCDomainDataType} SCData - SCData is an object that contains search analytics data for different time periods
 * @returns {KeywordType}
 */ const integrateKeywordSCData = (keyword, SCData)=>{
    const kuid = `${keyword.country.toLowerCase()}:${keyword.device}:${keyword.keyword.replaceAll(" ", "_")}`;
    const impressions = {
        yesterday: 0,
        threeDays: 0,
        sevenDays: 0,
        thirtyDays: 0,
        avgSevenDays: 0,
        avgThreeDays: 0,
        avgThirtyDays: 0
    };
    const visits = {
        yesterday: 0,
        threeDays: 0,
        sevenDays: 0,
        thirtyDays: 0,
        avgSevenDays: 0,
        avgThreeDays: 0,
        avgThirtyDays: 0
    };
    const ctr = {
        yesterday: 0,
        threeDays: 0,
        sevenDays: 0,
        thirtyDays: 0,
        avgSevenDays: 0,
        avgThreeDays: 0,
        avgThirtyDays: 0
    };
    const position = {
        yesterday: 0,
        threeDays: 0,
        sevenDays: 0,
        thirtyDays: 0,
        avgSevenDays: 0,
        avgThreeDays: 0,
        avgThirtyDays: 0
    };
    const threeDaysData = SCData?.threeDays?.find((item)=>item.uid === kuid) || {};
    const SevenDaysData = SCData?.sevenDays?.find((item)=>item.uid === kuid) || {};
    const ThirdyDaysData = SCData?.thirtyDays?.find((item)=>item.uid === kuid) || {};
    const totalData = {
        threeDays: threeDaysData,
        sevenDays: SevenDaysData,
        thirtyDays: ThirdyDaysData
    };
    Object.keys(totalData).forEach((dataKey)=>{
        let avgDataKey = "avgThreeDays";
        let divideBy = 3;
        if (dataKey === "sevenDays") {
            avgDataKey = "avgSevenDays";
            divideBy = 7;
        }
        if (dataKey === "thirtyDays") {
            avgDataKey = "avgThirtyDays";
            divideBy = 30;
        }
        // Actual Data
        impressions[dataKey] = totalData[dataKey].impressions || 0;
        visits[dataKey] = totalData[dataKey].clicks || 0;
        ctr[dataKey] = Math.round((totalData[dataKey].ctr || 0) * 100) / 100;
        position[dataKey] = totalData[dataKey].position ? Math.round(totalData[dataKey].position) : 0;
        // Average Data
        impressions[avgDataKey] = Math.round(impressions[dataKey] / divideBy);
        ctr[avgDataKey] = Math.round(ctr[dataKey] / divideBy * 100) / 100;
        visits[avgDataKey] = Math.round(visits[dataKey] / divideBy);
        position[avgDataKey] = Math.round(position[dataKey] / divideBy);
    });
    const finalSCData = {
        impressions,
        visits,
        ctr,
        position
    };
    return {
        ...keyword,
        scData: finalSCData
    };
};
/**
 * Retrieves the Search Console API information for a given domain.
 * @param {DomainType} domain - The `domain` parameter is of type `DomainType`, which represents a
 * domain object. It likely contains information about a specific domain, such as its name, search
 * console settings, etc.
 * @returns an object of type `SCAPISettings`.
 */ const getSearchConsoleApiInfo = async (domain)=>{
    const scAPIData = {
        client_email: "",
        private_key: ""
    };
    // Check if the Domain Has the API Data
    const domainSCSettings = domain.search_console && JSON.parse(domain.search_console);
    if (domainSCSettings && domainSCSettings.private_key) {
        if (!domainSCSettings.private_key.includes("BEGIN PRIVATE KEY")) {
            const cryptr = new (cryptr__WEBPACK_IMPORTED_MODULE_1___default())(process.env.SECRET);
            scAPIData.client_email = domainSCSettings.client_email ? cryptr.decrypt(domainSCSettings.client_email) : "";
            scAPIData.private_key = domainSCSettings.private_key ? cryptr.decrypt(domainSCSettings.private_key) : "";
        } else {
            scAPIData.client_email = domainSCSettings.client_email;
            scAPIData.private_key = domainSCSettings.private_key;
        }
    }
    // Check if the App Settings Has the API Data
    if (!scAPIData?.private_key) {
        const settingsRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(`${process.cwd()}/data/settings.json`, {
            encoding: "utf-8"
        });
        const settings = settingsRaw ? JSON.parse(settingsRaw) : {};
        const cryptr1 = new (cryptr__WEBPACK_IMPORTED_MODULE_1___default())(process.env.SECRET);
        scAPIData.client_email = settings.search_console_client_email ? cryptr1.decrypt(settings.search_console_client_email) : "";
        scAPIData.private_key = settings.search_console_private_key ? cryptr1.decrypt(settings.search_console_private_key) : "";
    }
    if (!scAPIData?.private_key && process.env.SEARCH_CONSOLE_PRIVATE_KEY && process.env.SEARCH_CONSOLE_CLIENT_EMAIL) {
        scAPIData.client_email = process.env.SEARCH_CONSOLE_CLIENT_EMAIL;
        scAPIData.private_key = process.env.SEARCH_CONSOLE_PRIVATE_KEY;
    }
    return scAPIData;
};
/**
 * Checks if the provided domain level Google Search Console API info is valid.
 * @param {DomainType} domain - The domain that represents the domain for which the SC API info is being checked.
 * @returns an object of type `{ isValid: boolean, error: string }`.
 */ const checkSerchConsoleIntegration = async (domain)=>{
    const res = {
        isValid: false,
        error: ""
    };
    const { client_email ="" , private_key =""  } = domain?.search_console ? JSON.parse(domain.search_console) : {};
    const response = await fetchSearchConsoleData(domain, 3, undefined, {
        client_email,
        private_key
    });
    if (Array.isArray(response)) {
        res.isValid = true;
    }
    if (response?.errorMsg) {
        res.error = response.errorMsg;
    }
    return res;
};
/**
 * The function reads and returns the domain-specific data stored in a local JSON file.
 * @param {string} domain - The `domain` parameter is a string that represents the domain for which the SC data is being read.
 * @returns {Promise<SCDomainDataType>}
 */ const readLocalSCData = async (domain)=>{
    try {
        const filePath = `${process.cwd()}/data/SC_${domain.replaceAll("/", "-")}.json`;
        const currentQueueRaw = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(filePath, {
            encoding: "utf-8"
        }).catch(async ()=>{
            await updateLocalSCData(domain);
            return "{}";
        });
        const domainSCData = JSON.parse(currentQueueRaw);
        return domainSCData;
    } catch (error) {
        return false;
    }
};
/**
 * The function reads and returns the domain-specific data stored in a local JSON file.
 * @param {string} domain - The `domain` parameter is a string that represents the domain for which the SC data will be written.
 * @param {SCDomainDataType} scDomainData - an object that contains search analytics data for different time periods.
 * @returns {Promise<SCDomainDataType|false>}
 */ const updateLocalSCData = async (domain, scDomainData)=>{
    try {
        const filePath = `${process.cwd()}/data/SC_${domain.replaceAll("/", "-")}.json`;
        const emptyData = {
            threeDays: [],
            sevenDays: [],
            thirtyDays: [],
            lastFetched: "",
            lastFetchError: ""
        };
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(filePath, JSON.stringify(scDomainData || emptyData), {
            encoding: "utf-8"
        }).catch((err)=>{
            console.log(err);
        });
        return scDomainData || emptyData;
    } catch (error) {
        return false;
    }
};
/**
 * The function removes the domain-specific Seach Console data stored in a local JSON file.
 * @param {string} domain - The `domain` parameter is a string that represents the domain for which the SC data file will be removed.
 * @returns {Promise<boolean>} - Returns true if file was removed, else returns false.
 */ const removeLocalSCData = async (domain)=>{
    const filePath = `${process.cwd()}/data/SC_${domain.replaceAll("/", "-")}.json`;
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.unlink)(filePath);
        return true;
    } catch (error) {
        return false;
    }
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fetchSearchConsoleData)));


/***/ })

};
;