"use strict";
(() => {
var exports = {};
exports.id = 116;
exports.ids = [116];
exports.modules = {

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

/***/ 2429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);

async function handler(req, res) {
    if (req.method !== "GET") return res.status(405).end();
    const links = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("links").select("*");
    res.status(200);
    res.json({
        message: "Success get data",
        data: links
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2429));
module.exports = __webpack_exports__;

})();