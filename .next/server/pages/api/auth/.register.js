"use strict";
(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 3718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const knex = __webpack_require__(514)({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);


/***/ }),

/***/ 2348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { email , password  } = req.body;
    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);
    const passwordHash = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, salt);
    const user = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("users").where({
        email
    }).first();
    if (user) {
        return res.status(409).json({
            message: "Email already registered"
        });
    }
    const register = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("users").insert({
        email,
        password: passwordHash
    });
    const registerUser = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("users").where({
        id: register
    }).first();
    res.status(200);
    res.json({
        message: "Success create user",
        data: registerUser
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2348));
module.exports = __webpack_exports__;

})();