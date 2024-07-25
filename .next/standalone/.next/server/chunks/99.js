"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 6099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PB": () => (/* binding */ getCountryInsight),
/* harmony export */   "hm": () => (/* binding */ getPagesInsight),
/* harmony export */   "nU": () => (/* binding */ getKeywordsInsight)
/* harmony export */ });
/* unused harmony export sortInsightItems */
/**
 * The function `sortInsightItems` sorts an array of `SCInsightItem` objects based on a specified property.
 * @param {SCInsightItem[]} items - An array of SCInsightItem objects.
 * @param {string} [sortBy=clicks] - The `sortBy` parameter determines the property by which the `items` array should be sorted.
 * @returns {SCInsightItem[]}
 */ const sortInsightItems = (items, sortBy = "clicks")=>{
    const sortKey = sortBy;
    let sortedItems = [];
    switch(sortKey){
        case "clicks":
            sortedItems = items.sort((a, b)=>b.clicks > a.clicks ? 1 : -1);
            break;
        case "impressions":
            sortedItems = items.sort((a, b)=>b.impressions > a.impressions ? 1 : -1);
            break;
        case "position":
            sortedItems = items.sort((a, b)=>b.position > a.position ? 1 : -1);
            break;
        default:
            sortedItems = items;
            break;
    }
    return sortedItems;
};
/**
 * The `getCountryInsight` function takes search analytics data and returns insights about countries based on clicks, impressions, CTR, and position.
 * @param {SCDomainDataType} SCData - The SCData parameter is an object that contains search analytics data for different dates.
 * @param {string} [sortBy=clicks] - The "sortBy" parameter is used to specify the sorting criteria for the country insights.
 * @param {string} [queryDate=thirtyDays] - The `queryDate` parameter is a string that represents the date range for which the search analytics data is retrieved.
 * @returns {SCInsightItem[]}
 */ const getCountryInsight = (SCData, sortBy = "clicks", queryDate = "thirtyDays")=>{
    const keywordsCounts = {};
    const countryItems = {};
    const dateKey = queryDate;
    const scData = SCData[dateKey] ? SCData[dateKey] : [];
    const allCountries = [
        ...new Set(scData.map((item)=>item.country))
    ];
    allCountries.forEach((countryKey)=>{
        const itemData = {
            clicks: 0,
            impressions: 0,
            ctr: 0,
            position: 0
        };
        scData.forEach((itm)=>{
            if (itm.country === countryKey) {
                itemData.clicks += itm.clicks;
                itemData.impressions += itm.impressions;
                itemData.ctr += itm.ctr;
                itemData.position += itm.position;
                if (!keywordsCounts[itm.country]) {
                    keywordsCounts[itm.country] = [];
                }
                if (keywordsCounts[itm.country] && !keywordsCounts[itm.country].includes(itm.keyword)) {
                    keywordsCounts[itm.country].push(itm.keyword);
                }
            }
        });
        countryItems[countryKey] = itemData;
    });
    const countryInsight = Object.keys(countryItems).map((countryCode)=>{
        return {
            ...countryItems[countryCode],
            position: Math.round(countryItems[countryCode].position / keywordsCounts[countryCode].length),
            ctr: countryItems[countryCode].ctr / keywordsCounts[countryCode].length,
            keywords: keywordsCounts[countryCode].length,
            country: countryCode
        };
    });
    return sortBy ? sortInsightItems(countryInsight, sortBy) : countryInsight;
};
/**
 * The `getKeywordsInsight` function takes search analytics data, sorts it based on specified criteria, and returns insights on keywords.
 * @param {SCDomainDataType} SCData - The SCData parameter is of type SCDomainDataType, which is an object containing search analytics data for a specific domain.
 * @param {string} [sortBy=clicks] - The "sortBy" parameter is used to specify the sorting criteria for the keyword insights.
 * @param {string} [queryDate=thirtyDays] - The `queryDate` parameter is a string that represents the date range for which the search analytics data is retrieved.
 * @returns {SCInsightItem[]}
 */ const getKeywordsInsight = (SCData, sortBy = "clicks", queryDate = "thirtyDays")=>{
    const keywordItems = {};
    const keywordCounts = {};
    const countriesCount = {};
    const dateKey = queryDate;
    const scData = SCData[dateKey] ? SCData[dateKey] : [];
    const allKeywords = [
        ...new Set(scData.map((item)=>item.keyword))
    ];
    allKeywords.forEach((keyword)=>{
        const itemData = {
            clicks: 0,
            impressions: 0,
            ctr: 0,
            position: 0
        };
        const keywordKey = keyword.replaceAll(" ", "_");
        scData.forEach((itm)=>{
            if (itm.keyword === keyword) {
                itemData.clicks += itm.clicks;
                itemData.impressions += itm.impressions;
                itemData.ctr += itm.ctr;
                itemData.position += itm.position;
                if (!countriesCount[keywordKey]) {
                    countriesCount[keywordKey] = [];
                }
                if (countriesCount[keywordKey] && !countriesCount[keywordKey].includes(itm.country)) {
                    countriesCount[keywordKey].push(itm.keyword);
                }
                keywordCounts[keywordKey] = keywordCounts[keywordKey] ? keywordCounts[keywordKey] + 1 : 1;
            }
        });
        keywordItems[keywordKey] = itemData;
    });
    const keywordInsight = Object.keys(keywordItems).map((keyword)=>{
        return {
            ...keywordItems[keyword],
            position: Math.round(keywordItems[keyword].position / keywordCounts[keyword]),
            ctr: keywordItems[keyword].ctr / keywordCounts[keyword],
            countries: countriesCount[keyword].length,
            keyword: keyword.replaceAll("_", " ")
        };
    });
    return sortBy ? sortInsightItems(keywordInsight, sortBy) : keywordInsight;
};
/**
 * The `getPagesInsight` function takes a domain's search analytics data, sorts it based on specified criteria and returns insights about the pages.
 * @param {SCDomainDataType} SCData - SCData is an object that contains search analytics data for a  specific domain.
 * @param {string} [sortBy=clicks] - The `sortBy` parameter is used to specify the sorting criteria for the pages insight.
 * @param {string} [queryDate=thirtyDays] - The `queryDate` parameter is a string that represents the date range for which you want to retrieve the data.
 * @returns {SCInsightItem[]}
 */ const getPagesInsight = (SCData, sortBy = "clicks", queryDate = "thirtyDays")=>{
    const pagesItems = {};
    const keywordCounts = {};
    const countriesCount = {};
    const dateKey = queryDate;
    const scData = SCData[dateKey] ? SCData[dateKey] : [];
    const allPages = [
        ...new Set(scData.map((item)=>item.page))
    ];
    allPages.forEach((page)=>{
        const itemData = {
            clicks: 0,
            impressions: 0,
            ctr: 0,
            position: 0
        };
        scData.forEach((itm)=>{
            if (itm.page === page) {
                itemData.clicks += itm.clicks;
                itemData.impressions += itm.impressions;
                itemData.ctr += itm.ctr;
                itemData.position += itm.position;
                if (!countriesCount[page]) {
                    countriesCount[page] = [];
                }
                if (countriesCount[page] && !countriesCount[page].includes(itm.country)) {
                    countriesCount[page].push(itm.country);
                }
                keywordCounts[page] = keywordCounts[page] ? keywordCounts[page] + 1 : 1;
            }
        });
        pagesItems[page] = itemData;
    });
    const pagesInsight = Object.keys(pagesItems).map((page)=>{
        return {
            ...pagesItems[page],
            position: Math.round(pagesItems[page].position / keywordCounts[page]),
            ctr: pagesItems[page].ctr / keywordCounts[page],
            countries: countriesCount[page].length,
            keywords: keywordCounts[page],
            page
        };
    });
    return sortBy ? sortInsightItems(pagesInsight, sortBy) : pagesInsight;
};


/***/ })

};
;