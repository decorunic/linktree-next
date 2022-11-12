"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 7406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wI": () => (/* binding */ unauthorizedPage),
/* harmony export */   "zD": () => (/* binding */ authorizationPage)
/* harmony export */ });
/* unused harmony export logout */
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7486);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);

function unauthorizedPage(context) {
    return new Promise((resolve)=>{
        const allCookies = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(context);
        if (allCookies.token) {
            return context.res.writeHead(302, {
                Location: "/admin"
            }).end();
        }
        return resolve("unauthorized");
    });
}
function authorizationPage(context) {
    return new Promise((resolve)=>{
        const allCookies = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(context);
        if (!allCookies.token) {
            return context.res.writeHead(302, {
                Location: "/auth/login"
            }).end();
        }
        return resolve({
            token: allCookies.token
        });
    });
}
function logout(context) {
    return new Promise((resolve)=>{
        context.res.writeHead(302, {
            Location: "/auth/login",
            "Set-Cookie": "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }).end();
    });
}


/***/ })

};
;