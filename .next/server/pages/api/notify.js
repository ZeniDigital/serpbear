"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616,362];
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

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 4464:
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 295:
/***/ ((module) => {

module.exports = import("cheerio");;

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 2076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3214);
/* harmony import */ var _database_models_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6280);
/* harmony import */ var _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2762);
/* harmony import */ var _utils_generateEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1022);
/* harmony import */ var _utils_parseKeywords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1010);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4878);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__, _settings__WEBPACK_IMPORTED_MODULE_5__]);
([_database_database__WEBPACK_IMPORTED_MODULE_1__, _database_models_domain__WEBPACK_IMPORTED_MODULE_2__, _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__, _settings__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function handler(req, res) {
    if (req.method === "POST") {
        await _database_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync();
        return notify(req, res);
    }
    return res.status(401).json({
        success: false,
        error: "Invalid Method"
    });
}
const notify = async (req, res)=>{
    const reqDomain = req?.query?.domain || "";
    try {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getAppSettings)();
        const { smtp_server ="" , smtp_port ="" , notification_email =""  } = settings;
        if (!smtp_server || !smtp_port || !notification_email) {
            return res.status(401).json({
                success: false,
                error: "SMTP has not been setup properly!"
            });
        }
        if (reqDomain) {
            const theDomain = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findOne */ .Z.findOne({
                where: {
                    domain: reqDomain
                }
            });
            if (theDomain) {
                await sendNotificationEmail(theDomain, settings);
            }
        } else {
            const allDomains = await _database_models_domain__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAll */ .Z.findAll();
            if (allDomains && allDomains.length > 0) {
                const domains = allDomains.map((el)=>el.get({
                        plain: true
                    }));
                for (const domain of domains){
                    if (domain.notification !== false) {
                        await sendNotificationEmail(domain, settings);
                    }
                }
            }
        }
        return res.status(200).json({
            success: true,
            error: null
        });
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            error: "Error Sending Notification Email."
        });
    }
};
const sendNotificationEmail = async (domain, settings)=>{
    const { smtp_server ="" , smtp_port ="" , smtp_username ="" , smtp_password ="" , notification_email ="" , notification_email_from ="" ,  } = settings;
    const fromEmail = `ZeniBot <${notification_email_from || "no-reply@ZeniBot.com"}>`;
    const mailerSettings = {
        host: smtp_server,
        port: parseInt(smtp_port, 10)
    };
    if (smtp_username || smtp_password) {
        mailerSettings.auth = {};
        if (smtp_username) mailerSettings.auth.user = smtp_username;
        if (smtp_password) mailerSettings.auth.pass = smtp_password;
    }
    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(mailerSettings);
    const domainName = domain.domain;
    const query = {
        where: {
            domain: domainName
        }
    };
    const domainKeywords = await _database_models_keyword__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findAll */ .Z.findAll(query);
    const keywordsArray = domainKeywords.map((el)=>el.get({
            plain: true
        }));
    const keywords = (0,_utils_parseKeywords__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(keywordsArray);
    const emailHTML = await (0,_utils_generateEmail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(domainName, keywords);
    await transporter.sendMail({
        from: fromEmail,
        to: domain.notification_emails || notification_email,
        subject: `[${domainName}] Keyword Positions Update`,
        html: emailHTML
    }).catch((err)=>console.log("[ERROR] Sending Notification Email for", domainName, err?.response || err));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_generateEmail)
});

;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(3292);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
// EXTERNAL MODULE: ./utils/insight.ts
var insight = __webpack_require__(6099);
// EXTERNAL MODULE: ./utils/searchConsole.ts
var searchConsole = __webpack_require__(737);
;// CONCATENATED MODULE: ./utils/generateEmail.ts





const serpBearLogo = "https://zenidigital.net/wp-content/uploads/2024/03/cropped-ZeniSEO-Favicon-Of-32x32.png";
const mobileIcon = "https://zenidigital.net/wp-content/uploads/2024/03/cropped-ZeniSEO-Favicon-Of-180x180.png";
const desktopIcon = "https://zenidigital.net/wp-content/uploads/2024/03/cropped-ZeniSEO-Favicon-Of-180x180.png";
const googleIcon = "https://zenidigital.net/wp-content/uploads/2024/03/cropped-ZeniSEO-Favicon-Of-180x180.png";
/**
 * Generate Human readable Time string.
 * @param {number} date - Keywords to scrape
 * @returns {string}
 */ const timeSince = (date)=>{
    const seconds = Math.floor(new Date().getTime() / 1000 - date);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hrs ago`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} mins ago`;
    return `${Math.floor(seconds)} secs ago`;
};
/**
 * Returns a Keyword's position change value by comparing the current position with previous position.
 * @param {KeywordHistory} history - Keywords to scrape
 * @param {number} position - Keywords to scrape
 * @returns {number}
 */ const getPositionChange = (history, position)=>{
    let status = 0;
    if (Object.keys(history).length >= 2) {
        const historyArray = Object.keys(history).map((dateKey)=>({
                date: new Date(dateKey).getTime(),
                dateRaw: dateKey,
                position: history[dateKey]
            }));
        const historySorted = historyArray.sort((a, b)=>a.date - b.date);
        const previousPos = historySorted[historySorted.length - 2].position;
        status = previousPos === 0 ? position : previousPos - position;
        if (position === 0 && previousPos > 0) {
            status = previousPos - 100;
        }
    }
    return status;
};
/**
 * Generate the Email HTML based on given domain name and its keywords
 * @param {string} domainName - Keywords to scrape
 * @param {keywords[]} keywords - Keywords to scrape
 * @returns {Promise}
 */ const generateEmail = async (domainName, keywords)=>{
    const emailTemplate = await (0,promises_.readFile)(external_path_default().join(__dirname, "..", "..", "..", "..", "email", "email.html"), {
        encoding: "utf-8"
    });
    const currentDate = external_dayjs_default()(new Date()).format("MMMM D, YYYY");
    const keywordsCount = keywords.length;
    let improved = 0;
    let declined = 0;
    let keywordsTable = "";
    keywords.forEach((keyword)=>{
        let positionChangeIcon = "";
        const positionChange = getPositionChange(keyword.history, keyword.position);
        const deviceIconImg = keyword.device === "desktop" ? desktopIcon : mobileIcon;
        const countryFlag = `<img class="flag" src="https://flagcdn.com/w20/${keyword.country.toLowerCase()}.png" alt="${keyword.country}" title="${keyword.country}" />`;
        const deviceIcon = `<img class="device" src="${deviceIconImg}" alt="${keyword.device}" title="${keyword.device}" />`;
        if (positionChange > 0) {
            positionChangeIcon = '<span style="color:#5ed7c3;">▲</span>';
            improved += 1;
        }
        if (positionChange < 0) {
            positionChangeIcon = '<span style="color:#fca5a5;">▼</span>';
            declined += 1;
        }
        const posChangeIcon = positionChange ? `<span class="pos_change">${positionChangeIcon} ${positionChange}</span>` : "";
        keywordsTable += `<tr class="keyword">
                           <td>${countryFlag} ${deviceIcon} ${keyword.keyword}</td>
                           <td>${keyword.position}${posChangeIcon}</td>
                           <td>${timeSince(new Date(keyword.lastUpdated).getTime() / 1000)}</td>
                        </tr>`;
    });
    const stat = `${improved > 0 ? `${improved} Improved` : ""} 
                  ${improved > 0 && declined > 0 ? ", " : ""} ${declined > 0 ? `${declined} Declined` : ""}`;
    const updatedEmail = emailTemplate.replace("{{logo}}", `<img class="logo_img" src="${serpBearLogo}" alt="ZeniBot" />`).replace("{{currentDate}}", currentDate).replace("{{domainName}}", domainName).replace("{{keywordsCount}}", keywordsCount.toString()).replace("{{keywordsTable}}", keywordsTable).replace("{{appURL}}", "http://localhost:3000" || 0).replace("{{stat}}", stat).replace("{{preheader}}", stat);
    const isConsoleIntegrated = !!(process.env.SEARCH_CONSOLE_PRIVATE_KEY && process.env.SEARCH_CONSOLE_CLIENT_EMAIL);
    const htmlWithSCStats = isConsoleIntegrated ? await generateGoogeleConsoleStats(domainName) : "";
    const emailHTML = updatedEmail.replace("{{SCStatsTable}}", htmlWithSCStats);
    // await writeFile('testemail.html', emailHTML, { encoding: 'utf-8' });
    return emailHTML;
};
/**
 * Generate the Email HTML for Google Search Console Data.
 * @param {string} domainName - The Domain name for which to generate the HTML.
 * @returns {Promise<string>}
 */ const generateGoogeleConsoleStats = async (domainName)=>{
    if (!domainName) return "";
    const localSCData = await (0,searchConsole/* readLocalSCData */.wP)(domainName);
    if (!localSCData || !localSCData.stats || !localSCData.stats.length) {
        return ""; // IF No SC Data Found, Abot the process.
    }
    const scData = {
        stats: {
            html: "",
            label: "Performance for Last 7 Days",
            clicks: 0,
            impressions: 0
        },
        keywords: {
            html: "",
            label: "Top 5 Keywords"
        },
        pages: {
            html: "",
            label: "Top 5 Pages"
        }
    };
    const SCStats = localSCData && localSCData.stats && Array.isArray(localSCData.stats) ? localSCData.stats.reverse().slice(0, 7) : [];
    const keywords = (0,insight/* getKeywordsInsight */.nU)(localSCData, "clicks", "sevenDays");
    const pages = (0,insight/* getPagesInsight */.hm)(localSCData, "clicks", "sevenDays");
    const genColumn = (item, firstColumKey)=>{
        return `<tr class="keyword">
                  <td>${item[firstColumKey]}</td>
                  <td>${item.clicks}</td>
                  <td>${item.impressions}</td>
                  <td>${Math.round(item.position)}</td>
               </tr>`;
    };
    if (SCStats.length > 0) {
        scData.stats.html = SCStats.reduce((acc, item)=>acc + genColumn(item, "date"), "");
    }
    if (keywords.length > 0) {
        scData.keywords.html = keywords.slice(0, 5).reduce((acc, item)=>acc + genColumn(item, "keyword"), "");
    }
    if (pages.length > 0) {
        scData.pages.html = pages.slice(0, 5).reduce((acc, item)=>acc + genColumn(item, "page"), "");
    }
    scData.stats.clicks = SCStats.reduce((acc, item)=>acc + item.clicks, 0);
    scData.stats.impressions = SCStats.reduce((acc, item)=>acc + item.impressions, 0);
    // Create Stats Start, End Date
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const endDate = new Date(SCStats[0].date);
    const startDate = new Date(SCStats[SCStats.length - 1].date);
    // Add the SC header Title
    let htmlWithSCStats = `<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="console_table">
                              <tr>
                                 <td style="font-weight:bold;">
                                 <img class="google_icon" src="${googleIcon}" alt="Google"> Google Search Console Stats</h3>
                                 </td>
                                 <td class="stat" align="right" style="font-size: 12px;">
                                 ${startDate.getDate()} ${months[startDate.getMonth()]} -  ${endDate.getDate()} ${months[endDate.getMonth()]} 
                                 (Last 7 Days)
                                 </td>
                              </tr>
                           </table>
                           `;
    // Add the SC Data Tables
    Object.keys(scData).forEach((itemKey)=>{
        const scItem = scData[itemKey];
        const scItemFirstColName = itemKey === "stats" ? "Date" : `${itemKey[0].toUpperCase()}${itemKey.slice(1)}`;
        htmlWithSCStats += `<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="subhead">
                                 <tr>
                                    <td style="font-weight:bold;">${scItem.label}</h3></td>
                                    ${scItem.clicks && scItem.impressions ? `<td class="stat" align="right">
                                          <strong>${scItem.clicks}</strong> Clicks | <strong>${scItem.impressions}</strong> Views
                                       </td>` : ""}
                                 </tr>
                              </table>
                              <table role="presentation" class="main" style="margin-bottom:20px">
                                 <tbody>
                                    <tr>
                                       <td class="wrapper">
                                       <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="keyword_table keyword_table--sc">
                                          <tbody>
                                             <tr align="left">
                                                <th>${scItemFirstColName}</th>
                                                <th>Clicks</th>
                                                <th>Views</th>
                                                <th>Position</th>
                                             </tr>
                                             ${scItem.html}
                                          </tbody>
                                       </table>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>`;
    });
    return htmlWithSCStats;
};
/* harmony default export */ const utils_generateEmail = (generateEmail);


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
var __webpack_exports__ = __webpack_require__.X(0, [527,214,426,737,878,99], () => (__webpack_exec__(2076)));
module.exports = __webpack_exports__;

})();