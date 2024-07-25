"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 4789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A$": () => (/* binding */ useFavKeywords),
/* harmony export */   "Hz": () => (/* binding */ useFetchKeywords),
/* harmony export */   "Pt": () => (/* binding */ useFetchSingleKeyword),
/* harmony export */   "Q$": () => (/* binding */ useDeleteKeywords),
/* harmony export */   "Y9": () => (/* binding */ useAddKeywords),
/* harmony export */   "lm": () => (/* binding */ useRefreshKeywords),
/* harmony export */   "nt": () => (/* binding */ useUpdateKeywordTags),
/* harmony export */   "w6": () => (/* binding */ fetchSearchResults)
/* harmony export */ });
/* unused harmony export fetchKeywords */
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const fetchKeywords = async (router, domain)=>{
    if (!domain) {
        return [];
    }
    const res = await fetch(`${window.location.origin}/api/keywords?domain=${domain}`, {
        method: "GET"
    });
    return res.json();
};
function useFetchKeywords(router, domain, setKeywordSPollInterval, keywordSPollInterval = undefined) {
    const { data: keywordsData , isLoading: keywordsLoading , isError  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "keywords",
        domain
    ], ()=>fetchKeywords(router, domain), {
        refetchInterval: keywordSPollInterval,
        onSuccess: (data)=>{
            // If Keywords are Manually Refreshed check if the any of the keywords position are still being fetched
            // If yes, then refecth the keywords every 5 seconds until all the keywords position is updated by the server
            if (data.keywords && data.keywords.length > 0 && setKeywordSPollInterval) {
                const hasRefreshingKeyword = data.keywords.some((x)=>x.updating);
                if (hasRefreshingKeyword) {
                    setKeywordSPollInterval(5000);
                } else {
                    if (keywordSPollInterval) {
                        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keywords Refreshed!", {
                            icon: "✔️"
                        });
                    }
                    setKeywordSPollInterval(undefined);
                }
            }
        }
    });
    return {
        keywordsData,
        keywordsLoading,
        isError
    };
}
function useAddKeywords(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (keywords)=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "POST",
            headers,
            body: JSON.stringify({
                keywords
            })
        };
        const res = await fetch(`${window.location.origin}/api/keywords`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            console.log("Keywords Added!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keywords Added Successfully!", {
                icon: "✔️"
            });
            onSuccess();
            queryClient.invalidateQueries([
                "keywords"
            ]);
        },
        onError: ()=>{
            console.log("Error Adding New Keywords!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Adding New Keywords", {
                icon: "⚠️"
            });
        }
    });
}
function useDeleteKeywords(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (keywordIDs)=>{
        const keywordIds = keywordIDs.join(",");
        const res = await fetch(`${window.location.origin}/api/keywords?id=${keywordIds}`, {
            method: "DELETE"
        });
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            console.log("Removed Keyword!!!");
            onSuccess();
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keywords Removed Successfully!", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "keywords"
            ]);
        },
        onError: ()=>{
            console.log("Error Removing Keyword!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Removing the Keywords", {
                icon: "⚠️"
            });
        }
    });
}
function useFavKeywords(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async ({ keywordID , sticky  })=>{
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers,
            body: JSON.stringify({
                sticky
            })
        };
        const res = await fetch(`${window.location.origin}/api/keywords?id=${keywordID}`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async (data)=>{
            onSuccess();
            const isSticky = data.keywords[0] && data.keywords[0].sticky;
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])(isSticky ? "Keywords Made Favorite!" : "Keywords Unfavorited!", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "keywords"
            ]);
        },
        onError: ()=>{
            console.log("Error Changing Favorite Status!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Changing Favorite Status.", {
                icon: "⚠️"
            });
        }
    });
}
function useUpdateKeywordTags(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async ({ tags  })=>{
        const keywordIds = Object.keys(tags).join(",");
        const headers = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const fetchOpts = {
            method: "PUT",
            headers,
            body: JSON.stringify({
                tags
            })
        };
        const res = await fetch(`${window.location.origin}/api/keywords?id=${keywordIds}`, fetchOpts);
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            onSuccess();
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keyword Tags Updated!", {
                icon: "✔️"
            });
            queryClient.invalidateQueries([
                "keywords"
            ]);
        },
        onError: ()=>{
            console.log("Error Updating Keyword Tags!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Updating Keyword Tags.", {
                icon: "⚠️"
            });
        }
    });
}
function useRefreshKeywords(onSuccess) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async ({ ids =[] , domain =""  })=>{
        const keywordIds = ids.join(",");
        console.log(keywordIds);
        const query = ids.length === 0 && domain ? `?id=all&domain=${domain}` : `?id=${keywordIds}`;
        const res = await fetch(`${window.location.origin}/api/refresh${query}`, {
            method: "POST"
        });
        if (res.status >= 400 && res.status < 600) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }, {
        onSuccess: async ()=>{
            console.log("Keywords Added to Refresh Queue!!!");
            onSuccess();
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Keywords Added to Refresh Queue", {
                icon: "\uD83D\uDD04"
            });
            queryClient.invalidateQueries([
                "keywords"
            ]);
        },
        onError: ()=>{
            console.log("Error Refreshing Keywords!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Refreshing Keywords.", {
                icon: "⚠️"
            });
        }
    });
}
function useFetchSingleKeyword(keywordID) {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "keyword",
        keywordID
    ], async ()=>{
        try {
            const fetchURL = `${window.location.origin}/api/keyword?id=${keywordID}`;
            const res = await fetch(fetchURL, {
                method: "GET"
            }).then((result)=>result.json());
            if (res.status >= 400 && res.status < 600) {
                throw new Error("Bad response from server");
            }
            return {
                history: res.keyword.history || [],
                searchResult: res.keyword.lastResult || []
            };
        } catch (error) {
            throw new Error("Error Loading Keyword Details");
        }
    }, {
        onError: ()=>{
            console.log("Error Loading Keyword Data!!!");
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"])("Error Loading Keyword Details.", {
                icon: "⚠️"
            });
        }
    });
}
async function fetchSearchResults(router, keywordData) {
    const { keyword , country , device  } = keywordData;
    const res = await fetch(`${window.location.origin}/api/refresh?keyword=${keyword}&country=${country}&device=${device}`, {
        method: "GET"
    });
    if (res.status >= 400 && res.status < 600) {
        if (res.status === 401) {
            console.log("Unauthorized!!");
            router.push("/login");
        }
        throw new Error("Bad response from server");
    }
    return res.json();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r": () => (/* binding */ exportKeywordIdeas)
/* harmony export */ });
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5158);

/**
   * Generates CSV File form the given domain & keywords, and automatically downloads it.
   * @param {KeywordType[]}  keywords - The keywords of the domain
   * @param {string} domain - The domain name.
   * @returns {void}
   */ const exportCSV = (keywords, domain, scDataDuration = "lastThreeDays")=>{
    if (!keywords || keywords && Array.isArray(keywords) && keywords.length === 0) {
        return;
    }
    const isSCKeywords = !!(keywords && keywords[0] && keywords[0].uid);
    let csvHeader = "ID,Keyword,Position,URL,Country,Device,Updated,Added,Tags\r\n";
    let csvBody = "";
    let fileName = `${domain}-keywords_serp.csv`;
    console.log(keywords[0]);
    console.log("isSCKeywords:", isSCKeywords);
    if (isSCKeywords) {
        csvHeader = "ID,Keyword,Position,Impressions,Clicks,CTR,Country,Device\r\n";
        fileName = `${domain}-search-console-${scDataDuration}.csv`;
        keywords.forEach((keywordData, index)=>{
            const { keyword , position , country , device , clicks , impressions , ctr  } = keywordData;
            // eslint-disable-next-line max-len
            csvBody += `${index}, ${keyword}, ${position === 0 ? "-" : position}, ${impressions}, ${clicks}, ${ctr}, ${_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0]}, ${device}\r\n`;
        });
    } else {
        keywords.forEach((keywordData)=>{
            const { ID , keyword , position , url , country , device , lastUpdated , added , tags  } = keywordData;
            // eslint-disable-next-line max-len
            csvBody += `${ID}, ${keyword}, ${position === 0 ? "-" : position}, ${url || "-"}, ${_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0]}, ${device}, ${lastUpdated}, ${added}, ${tags.join(",")}\r\n`;
        });
    }
    downloadCSV(csvHeader, csvBody, fileName);
};
/**
* Generates CSV File form the given keyword Ideas, and automatically downloads it.
* @param {IdeaKeyword[]}  keywords - The keyword Ideas to export
* @param {string} domainName - The domain name.
* @returns {void}
*/ const exportKeywordIdeas = (keywords, domainName)=>{
    if (!keywords || keywords && Array.isArray(keywords) && keywords.length === 0) {
        return;
    }
    const csvHeader = "Keyword,Volume,Competition,CompetitionScore,Country,Added\r\n";
    let csvBody = "";
    const fileName = `${domainName}-keyword_ideas.csv`;
    keywords.forEach((keywordData)=>{
        const { keyword , competition , country , domain , competitionIndex , avgMonthlySearches , added , updated , position  } = keywordData;
        // eslint-disable-next-line max-len
        const addedDate = new Intl.DateTimeFormat("en-US").format(new Date(added));
        csvBody += `${keyword}, ${avgMonthlySearches}, ${competition}, ${competitionIndex}, ${_countries__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP[country][0]}, ${addedDate}\r\n`;
    });
    downloadCSV(csvHeader, csvBody, fileName);
};
/**
 * generates a CSV file with a specified header and body content and automatically downloads it.
 * @param {string} csvHeader - The `csvHeader` file header. A comma speperated csv header.
 * @param {string} csvBody - The content of the csv file.
 * @param {string} fileName - The file Name for the downlaoded csv file.
 */ const downloadCSV = (csvHeader, csvBody, fileName)=>{
    const blob = new Blob([
        csvHeader + csvBody
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportCSV);


/***/ }),

/***/ 5686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ formattedNum)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */ const formattedNum = (num)=>new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3
    }).format(num);


/***/ }),

/***/ 5158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eW": () => (/* binding */ adwordsLanguages)
/* harmony export */ });
/* unused harmony exports countryAlphaTwoCodes, getCountryCodeFromAlphaThree */
const countries = {
    AD: [
        "Andorra",
        "Andorra la Vella",
        "ca",
        2020, 
    ],
    AE: [
        "United Arab Emirates",
        "Abu Dhabi",
        "ar",
        2784, 
    ],
    AF: [
        "Afghanistan",
        "Kabul",
        "ps",
        2004, 
    ],
    AG: [
        "Antigua and Barbuda",
        "Saint John's",
        "en",
        2028, 
    ],
    AI: [
        "Anguilla",
        "The Valley",
        "en",
        0, 
    ],
    AL: [
        "Albania",
        "Tirana",
        "sq",
        2008, 
    ],
    AM: [
        "Armenia",
        "Yerevan",
        "hy",
        2051, 
    ],
    AO: [
        "Angola",
        "Luanda",
        "pt",
        2024, 
    ],
    AQ: [
        "Antarctica",
        "",
        "",
        2010, 
    ],
    AR: [
        "Argentina",
        "Buenos Aires",
        "es",
        2032, 
    ],
    AS: [
        "American Samoa",
        "Pago Pago",
        "en",
        2016, 
    ],
    AT: [
        "Austria",
        "Vienna",
        "de",
        2040, 
    ],
    AU: [
        "Australia",
        "Canberra",
        "en",
        2036, 
    ],
    AW: [
        "Aruba",
        "Oranjestad",
        "nl",
        0, 
    ],
    AX: [
        "\xc5land",
        "Mariehamn",
        "sv",
        0, 
    ],
    AZ: [
        "Azerbaijan",
        "Baku",
        "az",
        2031, 
    ],
    BA: [
        "Bosnia and Herzegovina",
        "Sarajevo",
        "bs",
        2070, 
    ],
    BB: [
        "Barbados",
        "Bridgetown",
        "en",
        2052, 
    ],
    BD: [
        "Bangladesh",
        "Dhaka",
        "bn",
        2050, 
    ],
    BE: [
        "Belgium",
        "Brussels",
        "nl",
        2056, 
    ],
    BF: [
        "Burkina Faso",
        "Ouagadougou",
        "fr",
        2854, 
    ],
    BG: [
        "Bulgaria",
        "Sofia",
        "bg",
        2100, 
    ],
    BH: [
        "Bahrain",
        "Manama",
        "ar",
        2048, 
    ],
    BI: [
        "Burundi",
        "Bujumbura",
        "fr",
        2108, 
    ],
    BJ: [
        "Benin",
        "Porto-Novo",
        "fr",
        2204, 
    ],
    BL: [
        "Saint Barth\xe9lemy",
        "Gustavia",
        "fr",
        2652, 
    ],
    BM: [
        "Bermuda",
        "Hamilton",
        "en",
        0, 
    ],
    BN: [
        "Brunei",
        "Bandar Seri Begawan",
        "ms",
        2096, 
    ],
    BO: [
        "Bolivia",
        "Sucre",
        "es",
        2068, 
    ],
    BQ: [
        "Bonaire",
        "Kralendijk",
        "nl",
        2535, 
    ],
    BR: [
        "Brazil",
        "Bras\xedlia",
        "pt",
        2076, 
    ],
    BS: [
        "Bahamas",
        "Nassau",
        "en",
        2044, 
    ],
    BT: [
        "Bhutan",
        "Thimphu",
        "dz",
        2064, 
    ],
    BV: [
        "Bouvet Island",
        "",
        "no",
        0, 
    ],
    BW: [
        "Botswana",
        "Gaborone",
        "en",
        2072, 
    ],
    BY: [
        "Belarus",
        "Minsk",
        "be",
        2112, 
    ],
    BZ: [
        "Belize",
        "Belmopan",
        "en",
        2084, 
    ],
    CA: [
        "Canada",
        "Ottawa",
        "en",
        2124, 
    ],
    CC: [
        "Cocos [Keeling] Islands",
        "West Island",
        "en",
        2166, 
    ],
    CD: [
        "Democratic Republic of the Congo",
        "Kinshasa",
        "fr",
        2180, 
    ],
    CF: [
        "Central African Republic",
        "Bangui",
        "fr",
        2140, 
    ],
    CG: [
        "Republic of the Congo",
        "Brazzaville",
        "fr",
        2178, 
    ],
    CH: [
        "Switzerland",
        "Bern",
        "de",
        2756, 
    ],
    CI: [
        "Ivory Coast",
        "Yamoussoukro",
        "fr",
        2384, 
    ],
    CK: [
        "Cook Islands",
        "Avarua",
        "en",
        2184, 
    ],
    CL: [
        "Chile",
        "Santiago",
        "es",
        2152, 
    ],
    CM: [
        "Cameroon",
        "Yaound\xe9",
        "en",
        2120, 
    ],
    CN: [
        "China",
        "Beijing",
        "zh",
        2156, 
    ],
    CO: [
        "Colombia",
        "Bogot\xe1",
        "es",
        2170, 
    ],
    CR: [
        "Costa Rica",
        "San Jos\xe9",
        "es",
        2188, 
    ],
    CU: [
        "Cuba",
        "Havana",
        "es",
        0, 
    ],
    CV: [
        "Cape Verde",
        "Praia",
        "pt",
        2132, 
    ],
    CW: [
        "Curacao",
        "Willemstad",
        "nl",
        2531, 
    ],
    CX: [
        "Christmas Island",
        "Flying Fish Cove",
        "en",
        2162, 
    ],
    CY: [
        "Cyprus",
        "Nicosia",
        "el",
        2196, 
    ],
    CZ: [
        "Czech Republic",
        "Prague",
        "cs",
        2203, 
    ],
    DE: [
        "Germany",
        "Berlin",
        "de",
        2276, 
    ],
    DJ: [
        "Djibouti",
        "Djibouti",
        "fr",
        2262, 
    ],
    DK: [
        "Denmark",
        "Copenhagen",
        "da",
        2208, 
    ],
    DM: [
        "Dominica",
        "Roseau",
        "en",
        2212, 
    ],
    DO: [
        "Dominican Republic",
        "Santo Domingo",
        "es",
        2214, 
    ],
    DZ: [
        "Algeria",
        "Algiers",
        "ar",
        2012, 
    ],
    EC: [
        "Ecuador",
        "Quito",
        "es",
        2218, 
    ],
    EE: [
        "Estonia",
        "Tallinn",
        "et",
        2233, 
    ],
    EG: [
        "Egypt",
        "Cairo",
        "ar",
        2818, 
    ],
    EH: [
        "Western Sahara",
        "El Aai\xfan",
        "es",
        0, 
    ],
    ER: [
        "Eritrea",
        "Asmara",
        "ti",
        2232, 
    ],
    ES: [
        "Spain",
        "Madrid",
        "es",
        2724, 
    ],
    ET: [
        "Ethiopia",
        "Addis Ababa",
        "am",
        2231, 
    ],
    FI: [
        "Finland",
        "Helsinki",
        "fi",
        2246, 
    ],
    FJ: [
        "Fiji",
        "Suva",
        "en",
        2242, 
    ],
    FK: [
        "Falkland Islands",
        "Stanley",
        "en",
        0, 
    ],
    FM: [
        "Micronesia",
        "Palikir",
        "en",
        2583, 
    ],
    FO: [
        "Faroe Islands",
        "T\xf3rshavn",
        "fo",
        0, 
    ],
    FR: [
        "France",
        "Paris",
        "fr",
        2250, 
    ],
    GA: [
        "Gabon",
        "Libreville",
        "fr",
        2266, 
    ],
    GB: [
        "United Kingdom",
        "London",
        "en",
        2826, 
    ],
    GD: [
        "Grenada",
        "St. George's",
        "en",
        2308, 
    ],
    GE: [
        "Georgia",
        "Tbilisi",
        "ka",
        2268, 
    ],
    GF: [
        "French Guiana",
        "Cayenne",
        "fr",
        0, 
    ],
    GG: [
        "Guernsey",
        "St. Peter Port",
        "en",
        2831, 
    ],
    GH: [
        "Ghana",
        "Accra",
        "en",
        2288, 
    ],
    GI: [
        "Gibraltar",
        "Gibraltar",
        "en",
        0, 
    ],
    GL: [
        "Greenland",
        "Nuuk",
        "kl",
        0, 
    ],
    GM: [
        "Gambia",
        "Banjul",
        "en",
        2270, 
    ],
    GN: [
        "Guinea",
        "Conakry",
        "fr",
        2324, 
    ],
    GP: [
        "Guadeloupe",
        "Basse-Terre",
        "fr",
        0, 
    ],
    GQ: [
        "Equatorial Guinea",
        "Malabo",
        "es",
        2226, 
    ],
    GR: [
        "Greece",
        "Athens",
        "el",
        2300, 
    ],
    GS: [
        "South Georgia and the South Sandwich Islands",
        "King Edward Point",
        "en",
        2239, 
    ],
    GT: [
        "Guatemala",
        "Guatemala City",
        "es",
        2320, 
    ],
    GU: [
        "Guam",
        "Hag\xe5t\xf1a",
        "en",
        2316, 
    ],
    GW: [
        "Guinea-Bissau",
        "Bissau",
        "pt",
        2624, 
    ],
    GY: [
        "Guyana",
        "Georgetown",
        "en",
        2328, 
    ],
    HK: [
        "Hong Kong",
        "City of Victoria",
        "zh",
        0, 
    ],
    HM: [
        "Heard Island and McDonald Islands",
        "",
        "en",
        2334, 
    ],
    HN: [
        "Honduras",
        "Tegucigalpa",
        "es",
        2340, 
    ],
    HR: [
        "Croatia",
        "Zagreb",
        "hr",
        2191, 
    ],
    HT: [
        "Haiti",
        "Port-au-Prince",
        "fr",
        2332, 
    ],
    HU: [
        "Hungary",
        "Budapest",
        "hu",
        2348, 
    ],
    ID: [
        "Indonesia",
        "Jakarta",
        "id",
        2360, 
    ],
    IE: [
        "Ireland",
        "Dublin",
        "ga",
        2372, 
    ],
    IL: [
        "Israel",
        "Jerusalem",
        "he",
        2376, 
    ],
    IM: [
        "Isle of Man",
        "Douglas",
        "en",
        2833, 
    ],
    IN: [
        "India",
        "New Delhi",
        "hi",
        2356, 
    ],
    IO: [
        "British Indian Ocean Territory",
        "Diego Garcia",
        "en",
        0, 
    ],
    IQ: [
        "Iraq",
        "Baghdad",
        "ar",
        2368, 
    ],
    IR: [
        "Iran",
        "Tehran",
        "fa",
        0, 
    ],
    IS: [
        "Iceland",
        "Reykjavik",
        "is",
        2352, 
    ],
    IT: [
        "Italy",
        "Rome",
        "it",
        2380, 
    ],
    JE: [
        "Jersey",
        "Saint Helier",
        "en",
        2832, 
    ],
    JM: [
        "Jamaica",
        "Kingston",
        "en",
        2388, 
    ],
    JO: [
        "Jordan",
        "Amman",
        "ar",
        2400, 
    ],
    JP: [
        "Japan",
        "Tokyo",
        "ja",
        2392, 
    ],
    KE: [
        "Kenya",
        "Nairobi",
        "en",
        2404, 
    ],
    KG: [
        "Kyrgyzstan",
        "Bishkek",
        "ky",
        2417, 
    ],
    KH: [
        "Cambodia",
        "Phnom Penh",
        "km",
        2116, 
    ],
    KI: [
        "Kiribati",
        "South Tarawa",
        "en",
        2296, 
    ],
    KM: [
        "Comoros",
        "Moroni",
        "ar",
        2174, 
    ],
    KN: [
        "Saint Kitts and Nevis",
        "Basseterre",
        "en",
        2659, 
    ],
    KP: [
        "North Korea",
        "Pyongyang",
        "ko",
        0, 
    ],
    KR: [
        "South Korea",
        "Seoul",
        "ko",
        2410, 
    ],
    KW: [
        "Kuwait",
        "Kuwait City",
        "ar",
        2414, 
    ],
    KY: [
        "Cayman Islands",
        "George Town",
        "en",
        0, 
    ],
    KZ: [
        "Kazakhstan",
        "Astana",
        "kk",
        2398, 
    ],
    LA: [
        "Laos",
        "Vientiane",
        "lo",
        2418, 
    ],
    LB: [
        "Lebanon",
        "Beirut",
        "ar",
        2422, 
    ],
    LC: [
        "Saint Lucia",
        "Castries",
        "en",
        2662, 
    ],
    LI: [
        "Liechtenstein",
        "Vaduz",
        "de",
        2438, 
    ],
    LK: [
        "Sri Lanka",
        "Colombo",
        "si",
        2144, 
    ],
    LR: [
        "Liberia",
        "Monrovia",
        "en",
        2430, 
    ],
    LS: [
        "Lesotho",
        "Maseru",
        "en",
        2426, 
    ],
    LT: [
        "Lithuania",
        "Vilnius",
        "lt",
        2440, 
    ],
    LU: [
        "Luxembourg",
        "Luxembourg",
        "fr",
        2442, 
    ],
    LV: [
        "Latvia",
        "Riga",
        "lv",
        2428, 
    ],
    LY: [
        "Libya",
        "Tripoli",
        "ar",
        2434, 
    ],
    MA: [
        "Morocco",
        "Rabat",
        "ar",
        2504, 
    ],
    MC: [
        "Monaco",
        "Monaco",
        "fr",
        2492, 
    ],
    MD: [
        "Moldova",
        "Chișinău",
        "ro",
        2498, 
    ],
    ME: [
        "Montenegro",
        "Podgorica",
        "sr",
        2499, 
    ],
    MF: [
        "Saint Martin",
        "Marigot",
        "en",
        2663, 
    ],
    MG: [
        "Madagascar",
        "Antananarivo",
        "fr",
        2450, 
    ],
    MH: [
        "Marshall Islands",
        "Majuro",
        "en",
        2584, 
    ],
    MK: [
        "North Macedonia",
        "Skopje",
        "mk",
        2807, 
    ],
    ML: [
        "Mali",
        "Bamako",
        "fr",
        2466, 
    ],
    MM: [
        "Myanmar [Burma]",
        "Naypyidaw",
        "my",
        2104, 
    ],
    MN: [
        "Mongolia",
        "Ulan Bator",
        "mn",
        2496, 
    ],
    MO: [
        "Macao",
        "Macao",
        "zh",
        0, 
    ],
    MP: [
        "Northern Mariana Islands",
        "Saipan",
        "en",
        2580, 
    ],
    MQ: [
        "Martinique",
        "Fort-de-France",
        "fr",
        0, 
    ],
    MR: [
        "Mauritania",
        "Nouakchott",
        "ar",
        2478, 
    ],
    MS: [
        "Montserrat",
        "Plymouth",
        "en",
        0, 
    ],
    MT: [
        "Malta",
        "Valletta",
        "mt",
        2470, 
    ],
    MU: [
        "Mauritius",
        "Port Louis",
        "en",
        2480, 
    ],
    MV: [
        "Maldives",
        "Mal\xe9",
        "dv",
        2462, 
    ],
    MW: [
        "Malawi",
        "Lilongwe",
        "en",
        2454, 
    ],
    MX: [
        "Mexico",
        "Mexico City",
        "es",
        2484, 
    ],
    MY: [
        "Malaysia",
        "Kuala Lumpur",
        "ms",
        2458, 
    ],
    MZ: [
        "Mozambique",
        "Maputo",
        "pt",
        2508, 
    ],
    NA: [
        "Namibia",
        "Windhoek",
        "en",
        2516, 
    ],
    NC: [
        "New Caledonia",
        "Noum\xe9a",
        "fr",
        2540, 
    ],
    NE: [
        "Niger",
        "Niamey",
        "fr",
        2562, 
    ],
    NF: [
        "Norfolk Island",
        "Kingston",
        "en",
        2574, 
    ],
    NG: [
        "Nigeria",
        "Abuja",
        "en",
        2566, 
    ],
    NI: [
        "Nicaragua",
        "Managua",
        "es",
        2558, 
    ],
    NL: [
        "Netherlands",
        "Amsterdam",
        "nl",
        2528, 
    ],
    NO: [
        "Norway",
        "Oslo",
        "no",
        2578, 
    ],
    NP: [
        "Nepal",
        "Kathmandu",
        "ne",
        2524, 
    ],
    NR: [
        "Nauru",
        "Yaren",
        "en",
        2520, 
    ],
    NU: [
        "Niue",
        "Alofi",
        "en",
        2570, 
    ],
    NZ: [
        "New Zealand",
        "Wellington",
        "en",
        2554, 
    ],
    OM: [
        "Oman",
        "Muscat",
        "ar",
        2512, 
    ],
    PA: [
        "Panama",
        "Panama City",
        "es",
        2591, 
    ],
    PE: [
        "Peru",
        "Lima",
        "es",
        2604, 
    ],
    PF: [
        "French Polynesia",
        "Papeetē",
        "fr",
        2258, 
    ],
    PG: [
        "Papua New Guinea",
        "Port Moresby",
        "en",
        2598, 
    ],
    PH: [
        "Philippines",
        "Manila",
        "en",
        2608, 
    ],
    PK: [
        "Pakistan",
        "Islamabad",
        "en",
        2586, 
    ],
    PL: [
        "Poland",
        "Warsaw",
        "pl",
        2616, 
    ],
    PM: [
        "Saint Pierre and Miquelon",
        "Saint-Pierre",
        "fr",
        2666, 
    ],
    PN: [
        "Pitcairn Islands",
        "Adamstown",
        "en",
        2612, 
    ],
    PR: [
        "Puerto Rico",
        "San Juan",
        "es",
        0, 
    ],
    PS: [
        "Palestine",
        "Ramallah",
        "ar",
        0, 
    ],
    PT: [
        "Portugal",
        "Lisbon",
        "pt",
        2620, 
    ],
    PW: [
        "Palau",
        "Ngerulmud",
        "en",
        2585, 
    ],
    PY: [
        "Paraguay",
        "Asunci\xf3n",
        "es",
        2600, 
    ],
    QA: [
        "Qatar",
        "Doha",
        "ar",
        2634, 
    ],
    RE: [
        "R\xe9union",
        "Saint-Denis",
        "fr",
        0, 
    ],
    RO: [
        "Romania",
        "Bucharest",
        "ro",
        2642, 
    ],
    RS: [
        "Serbia",
        "Belgrade",
        "sr",
        2688, 
    ],
    RU: [
        "Russia",
        "Moscow",
        "ru",
        2643, 
    ],
    RW: [
        "Rwanda",
        "Kigali",
        "rw",
        2646, 
    ],
    SA: [
        "Saudi Arabia",
        "Riyadh",
        "ar",
        2682, 
    ],
    SB: [
        "Solomon Islands",
        "Honiara",
        "en",
        2090, 
    ],
    SC: [
        "Seychelles",
        "Victoria",
        "fr",
        2690, 
    ],
    SD: [
        "Sudan",
        "Khartoum",
        "ar",
        2736, 
    ],
    SE: [
        "Sweden",
        "Stockholm",
        "sv",
        2752, 
    ],
    SG: [
        "Singapore",
        "Singapore",
        "en",
        2702, 
    ],
    SH: [
        "Saint Helena",
        "Jamestown",
        "en",
        2654, 
    ],
    SI: [
        "Slovenia",
        "Ljubljana",
        "sl",
        2705, 
    ],
    SJ: [
        "Svalbard and Jan Mayen",
        "Longyearbyen",
        "no",
        0, 
    ],
    SK: [
        "Slovakia",
        "Bratislava",
        "sk",
        2703, 
    ],
    SL: [
        "Sierra Leone",
        "Freetown",
        "en",
        2694, 
    ],
    SM: [
        "San Marino",
        "City of San Marino",
        "it",
        2674, 
    ],
    SN: [
        "Senegal",
        "Dakar",
        "fr",
        2686, 
    ],
    SO: [
        "Somalia",
        "Mogadishu",
        "so",
        2706, 
    ],
    SR: [
        "Suriname",
        "Paramaribo",
        "nl",
        2740, 
    ],
    SS: [
        "South Sudan",
        "Juba",
        "en",
        2728, 
    ],
    ST: [
        "S\xe3o Tom\xe9 and Pr\xedncipe",
        "S\xe3o Tom\xe9",
        "pt",
        2678, 
    ],
    SV: [
        "El Salvador",
        "San Salvador",
        "es",
        2222, 
    ],
    SX: [
        "Sint Maarten",
        "Philipsburg",
        "nl",
        2534, 
    ],
    SY: [
        "Syria",
        "Damascus",
        "ar",
        0, 
    ],
    SZ: [
        "Swaziland",
        "Lobamba",
        "en",
        2748, 
    ],
    TC: [
        "Turks and Caicos Islands",
        "Cockburn Town",
        "en",
        0, 
    ],
    TD: [
        "Chad",
        "N'Djamena",
        "fr",
        2148, 
    ],
    TF: [
        "French Southern Territories",
        "Port-aux-Fran\xe7ais",
        "fr",
        2260, 
    ],
    TG: [
        "Togo",
        "Lom\xe9",
        "fr",
        2768, 
    ],
    TH: [
        "Thailand",
        "Bangkok",
        "th",
        2764, 
    ],
    TJ: [
        "Tajikistan",
        "Dushanbe",
        "tg",
        2762, 
    ],
    TK: [
        "Tokelau",
        "Fakaofo",
        "en",
        2772, 
    ],
    TL: [
        "East Timor",
        "Dili",
        "pt",
        2626, 
    ],
    TM: [
        "Turkmenistan",
        "Ashgabat",
        "tk",
        2795, 
    ],
    TN: [
        "Tunisia",
        "Tunis",
        "ar",
        2788, 
    ],
    TO: [
        "Tonga",
        "Nuku'alofa",
        "en",
        2776, 
    ],
    TR: [
        "Turkey",
        "Ankara",
        "tr",
        2792, 
    ],
    TT: [
        "Trinidad and Tobago",
        "Port of Spain",
        "en",
        2780, 
    ],
    TV: [
        "Tuvalu",
        "Funafuti",
        "en",
        2798, 
    ],
    TW: [
        "Taiwan",
        "Taipei",
        "zh",
        0, 
    ],
    TZ: [
        "Tanzania",
        "Dodoma",
        "sw",
        2834, 
    ],
    UA: [
        "Ukraine",
        "Kyiv",
        "uk",
        2804, 
    ],
    UG: [
        "Uganda",
        "Kampala",
        "en",
        2800, 
    ],
    UM: [
        "U.S. Minor Outlying Islands",
        "",
        "en",
        2581, 
    ],
    US: [
        "United States",
        "New York",
        "en",
        2840, 
    ],
    UY: [
        "Uruguay",
        "Montevideo",
        "es",
        2858, 
    ],
    UZ: [
        "Uzbekistan",
        "Tashkent",
        "uz",
        2860, 
    ],
    VA: [
        "Vatican City",
        "Vatican City",
        "it",
        2336, 
    ],
    VC: [
        "Saint Vincent and the Grenadines",
        "Kingstown",
        "en",
        2670, 
    ],
    VE: [
        "Venezuela",
        "Caracas",
        "es",
        2862, 
    ],
    VG: [
        "British Virgin Islands",
        "Road Town",
        "en",
        0, 
    ],
    VI: [
        "U.S. Virgin Islands",
        "Charlotte Amalie",
        "en",
        0, 
    ],
    VN: [
        "Vietnam",
        "Hanoi",
        "vi",
        2704, 
    ],
    VU: [
        "Vanuatu",
        "Port Vila",
        "bi",
        2548, 
    ],
    WF: [
        "Wallis and Futuna",
        "Mata-Utu",
        "fr",
        2876, 
    ],
    WS: [
        "Samoa",
        "Apia",
        "sm",
        2882, 
    ],
    XK: [
        "Kosovo",
        "Pristina",
        "sq",
        0, 
    ],
    YE: [
        "Yemen",
        "Sana'a",
        "ar",
        2887, 
    ],
    YT: [
        "Mayotte",
        "Mamoudzou",
        "fr",
        0, 
    ],
    ZA: [
        "South Africa",
        "Pretoria",
        "af",
        2710, 
    ],
    ZM: [
        "Zambia",
        "Lusaka",
        "en",
        2894, 
    ],
    ZW: [
        "Zimbabwe",
        "Harare",
        "en",
        2716, 
    ],
    ZZ: [
        "Unknown",
        "Unknown",
        "en",
        0, 
    ]
};
const countryAlphaTwoCodes = {
    AFG: "AF",
    ALA: "AX",
    ALB: "AL",
    DZA: "DZ",
    ASM: "AS",
    AND: "AD",
    AGO: "AO",
    AIA: "AI",
    ATA: "AQ",
    ATG: "AG",
    ARG: "AR",
    ARM: "AM",
    ABW: "AW",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BHS: "BS",
    BHR: "BH",
    BGD: "BD",
    BRB: "BB",
    BLR: "BY",
    BEL: "BE",
    BLZ: "BZ",
    BEN: "BJ",
    BMU: "BM",
    BTN: "BT",
    BOL: "BO",
    BES: "BQ",
    BIH: "BA",
    BWA: "BW",
    BVT: "BV",
    BRA: "BR",
    IOT: "IO",
    BRN: "BN",
    BGR: "BG",
    BFA: "BF",
    BDI: "BI",
    CPV: "CV",
    KHM: "KH",
    CMR: "CM",
    CAN: "CA",
    CYM: "KY",
    CAF: "CF",
    TCD: "TD",
    CHL: "CL",
    CHN: "CN",
    CXR: "CX",
    CCK: "CC",
    COL: "CO",
    COM: "KM",
    COG: "CG",
    COD: "CD",
    COK: "CK",
    CRI: "CR",
    CIV: "CI",
    HRV: "HR",
    CUB: "CU",
    CUW: "CW",
    CYP: "CY",
    CZE: "CZ",
    DNK: "DK",
    DJI: "DJ",
    DMA: "DM",
    DOM: "DO",
    ECU: "EC",
    EGY: "EG",
    SLV: "SV",
    GNQ: "GQ",
    ERI: "ER",
    EST: "EE",
    SWZ: "SZ",
    ETH: "ET",
    FLK: "FK",
    FRO: "FO",
    FJI: "FJ",
    FIN: "FI",
    FRA: "FR",
    GUF: "GF",
    PYF: "PF",
    ATF: "TF",
    GAB: "GA",
    GMB: "GM",
    GEO: "GE",
    DEU: "DE",
    GHA: "GH",
    GIB: "GI",
    GRC: "GR",
    GRL: "GL",
    GRD: "GD",
    GLP: "GP",
    GUM: "GU",
    GTM: "GT",
    GGY: "GG",
    GIN: "GN",
    GNB: "GW",
    GUY: "GY",
    HTI: "HT",
    HMD: "HM",
    VAT: "VA",
    HND: "HN",
    HKG: "HK",
    HUN: "HU",
    ISL: "IS",
    IND: "IN",
    IDN: "ID",
    IRN: "IR",
    IRQ: "IQ",
    IRL: "IE",
    IMN: "IM",
    ISR: "IL",
    ITA: "IT",
    JAM: "JM",
    JPN: "JP",
    JEY: "JE",
    JOR: "JO",
    KAZ: "KZ",
    KEN: "KE",
    KIR: "KI",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    KGZ: "KG",
    LAO: "LA",
    LVA: "LV",
    LBN: "LB",
    LSO: "LS",
    LBR: "LR",
    LBY: "LY",
    LIE: "LI",
    LTU: "LT",
    LUX: "LU",
    MAC: "MO",
    MDG: "MG",
    MWI: "MW",
    MYS: "MY",
    MDV: "MV",
    MLI: "ML",
    MLT: "MT",
    MHL: "MH",
    MTQ: "MQ",
    MRT: "MR",
    MUS: "MU",
    MYT: "YT",
    MEX: "MX",
    FSM: "FM",
    MDA: "MD",
    MCO: "MC",
    MNG: "MN",
    MNE: "ME",
    MSR: "MS",
    MAR: "MA",
    MOZ: "MZ",
    MMR: "MM",
    NAM: "NA",
    NRU: "NR",
    NPL: "NP",
    NLD: "NL",
    NCL: "NC",
    NZL: "NZ",
    NIC: "NI",
    NER: "NE",
    NGA: "NG",
    NIU: "NU",
    NFK: "NF",
    MKD: "MK",
    MNP: "MP",
    NOR: "NO",
    OMN: "OM",
    PAK: "PK",
    PLW: "PW",
    PSE: "PS",
    PAN: "PA",
    PNG: "PG",
    PRY: "PY",
    PER: "PE",
    PHL: "PH",
    PCN: "PN",
    POL: "PL",
    PRT: "PT",
    PRI: "PR",
    QAT: "QA",
    REU: "RE",
    ROU: "RO",
    RUS: "RU",
    RWA: "RW",
    BLM: "BL",
    SHN: "SH",
    KNA: "KN",
    LCA: "LC",
    MAF: "MF",
    SPM: "PM",
    VCT: "VC",
    WSM: "WS",
    SMR: "SM",
    STP: "ST",
    SAU: "SA",
    SEN: "SN",
    SRB: "RS",
    SYC: "SC",
    SLE: "SL",
    SGP: "SG",
    SXM: "SX",
    SVK: "SK",
    SVN: "SI",
    SLB: "SB",
    SOM: "SO",
    ZAF: "ZA",
    SGS: "GS",
    SSD: "SS",
    ESP: "ES",
    LKA: "LK",
    SDN: "SD",
    SUR: "SR",
    SJM: "SJ",
    SWE: "SE",
    CHE: "CH",
    SYR: "SY",
    TWN: "TW",
    TJK: "TJ",
    TZA: "TZ",
    THA: "TH",
    TLS: "TL",
    TGO: "TG",
    TKL: "TK",
    TON: "TO",
    TTO: "TT",
    TUN: "TN",
    TUR: "TR",
    TKM: "TM",
    TCA: "TC",
    TUV: "TV",
    UGA: "UG",
    UKR: "UA",
    ARE: "AE",
    GBR: "GB",
    USA: "US",
    UMI: "UM",
    URY: "UY",
    UZB: "UZ",
    VUT: "VU",
    VEN: "VE",
    VNM: "VN",
    VGB: "VG",
    VIR: "VI",
    WLF: "WF",
    ESH: "EH",
    YEM: "YE",
    ZMB: "ZM",
    ZWE: "ZW",
    ZZZ: "ZZ"
};
const adwordsLanguages = {
    1000: "English",
    1001: "German",
    1002: "French",
    1003: "Spanish",
    1004: "Italian",
    1005: "Japanese",
    1009: "Danish",
    1010: "Dutch",
    1011: "Finnish",
    1012: "Korean",
    1013: "Norwegian",
    1014: "Portuguese",
    1015: "Swedish",
    1017: "Chinese (simplified)",
    1018: "Chinese (traditional)",
    1019: "Arabic",
    1020: "Bulgarian",
    1021: "Czech",
    1022: "Greek",
    1023: "Hindi",
    1024: "Hungarian",
    1025: "Indonesian",
    1026: "Icelandic",
    1027: "Hebrew",
    1028: "Latvian",
    1029: "Lithuanian",
    1030: "Polish",
    1031: "Russian",
    1032: "Romanian",
    1033: "Slovak",
    1034: "Slovenian",
    1035: "Serbian",
    1036: "Ukrainian",
    1037: "Turkish",
    1038: "Catalan",
    1039: "Croatian",
    1040: "Vietnamese",
    1041: "Urdu",
    1042: "Filipino",
    1043: "Estonian",
    1044: "Thai",
    1056: "Bengali",
    1064: "Persian",
    1072: "Gujarati",
    1086: "Kannada",
    1098: "Malayalam",
    1101: "Marathi",
    1102: "Malay",
    1110: "Punjabi",
    1130: "Tamil",
    1131: "Telugu"
};
const getCountryCodeFromAlphaThree = (AlphaThreeCode)=>countryAlphaTwoCodes[AlphaThreeCode];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);


/***/ })

};
;