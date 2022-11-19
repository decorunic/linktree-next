"use strict";
(() => {
var exports = {};
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3718);
/* harmony import */ var _middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9174);


async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const auth = await (0,_middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
    const { name , url , type , icon  } = req.body;
    const create = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("links").insert({
        name,
        url,
        type,
        icon
    });
    const createData = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("links").where({
        id: create
    }).first();
    res.status(200);
    res.json({
        message: "Success create data",
        data: createData
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [305], () => (__webpack_exec__(362)));
module.exports = __webpack_exports__;

})();