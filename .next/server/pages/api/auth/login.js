"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
        database: process.env.DB_NAME
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);


/***/ }),

/***/ 8024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./libs/db.js
var db = __webpack_require__(3718);
;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_namespaceObject);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./pages/api/auth/login.js



async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { email , password  } = req.body;
    const checkUser = await (0,db/* default */.Z)("users").where({
        email
    }).first();
    if (!checkUser) {
        return res.status(401).json({
            message: "Email not registered"
        });
    }
    const checkPassword = await external_bcryptjs_default().compare(password, checkUser.password);
    if (!checkPassword) {
        return res.status(401).json({
            message: "Password is wrong"
        });
    }
    const token = external_jsonwebtoken_default().sign({
        id: checkUser.id,
        email: checkUser.email
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    res.status(200);
    res.json({
        message: "Success Login",
        token
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8024));
module.exports = __webpack_exports__;

})();