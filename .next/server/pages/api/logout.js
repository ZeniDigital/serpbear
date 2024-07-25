"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 2513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5527);


async function handler(req, res) {
    const authorized = (0,_utils_verifyUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    if (authorized !== "authorized") {
        return res.status(401).json({
            error: authorized
        });
    }
    if (req.method === "POST") {
        return logout(req, res);
    }
    return res.status(401).json({
        success: false,
        error: "Invalid Method"
    });
}
const logout = async (req, res)=>{
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
    cookies.set("token", null, {
        maxAge: new Date().getTime()
    });
    return res.status(200).json({
        success: true,
        error: null
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527], () => (__webpack_exec__(2513)));
module.exports = __webpack_exports__;

})();