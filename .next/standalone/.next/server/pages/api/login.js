"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method === "POST") {
        return loginUser(req, res);
    }
    return res.status(401).json({
        success: false,
        error: "Invalid Method"
    });
}
const loginUser = async (req, res)=>{
    if (!req.body.username || !req.body.password) {
        return res.status(401).json({
            error: "Username Password Missing"
        });
    }
    const userName = process.env.USER_NAME ? process.env.USER_NAME : process.env.USER;
    if (req.body.username === userName && req.body.password === process.env.PASSWORD && process.env.SECRET) {
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
            user: userName
        }, process.env.SECRET);
        const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res);
        const expireDate = new Date();
        const sessDuration = process.env.SESSION_DURATION;
        expireDate.setHours(sessDuration && parseInt(sessDuration, 10) || 24);
        cookies.set("token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: expireDate.getTime()
        });
        return res.status(200).json({
            success: true,
            error: null
        });
    }
    const error = req.body.username !== userName ? "Incorrect Username" : "Incorrect Password";
    return res.status(401).json({
        success: false,
        error
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5799));
module.exports = __webpack_exports__;

})();