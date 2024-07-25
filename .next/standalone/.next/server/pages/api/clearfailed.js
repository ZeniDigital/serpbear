"use strict";
(() => {
var exports = {};
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5527);


async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "PUT") {
        return clearFailedQueue(req, res);
    }
    return res.status(502).json({
        error: "Unrecognized Route."
    });
}
const clearFailedQueue = async (req, res)=>{
    try {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${process.cwd()}/data/failed_queue.json`, JSON.stringify([]), {
            encoding: "utf-8"
        });
        return res.status(200).json({
            cleared: true
        });
    } catch (error) {
        console.log("[ERROR] Cleraring Failed Queue File.", error);
        return res.status(200).json({
            error: "Error Cleraring Failed Queue!"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527], () => (__webpack_exec__(1974)));
module.exports = __webpack_exports__;

})();