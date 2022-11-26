"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/links/delete";
exports.ids = ["pages/api/links/delete"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "(api)/./libs/db.js":
/*!********************!*\
  !*** ./libs/db.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst knex = __webpack_require__(/*! knex */ \"knex\")({\n    client: process.env.DB_CLIENT,\n    connection: {\n        host: process.env.DB_HOST,\n        port: process.env.DB_PORT,\n        user: process.env.DB_USERNAME,\n        password: process.env.DB_PASSWORD,\n        database: process.env.DB_NAME\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQU0sQ0FBQyxDQUFDO0lBQzNCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO0lBQzdCQyxVQUFVLEVBQUU7UUFDVkMsSUFBSSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTztRQUN6QkMsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sT0FBTztRQUN6QkMsSUFBSSxFQUFFUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsV0FBVztRQUM3QkMsUUFBUSxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsV0FBVztRQUNqQ0MsUUFBUSxFQUFFWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksT0FBTztLQUM5QjtDQUNGLENBQUM7QUFFRixpRUFBZWhCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmt0cmVlLW5leHQvLi9saWJzL2RiLmpzPzhjNDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga25leCA9IHJlcXVpcmUoJ2tuZXgnKSh7XHJcbiAgY2xpZW50OiBwcm9jZXNzLmVudi5EQl9DTElFTlQsXHJcbiAgY29ubmVjdGlvbjoge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtuZXg7Il0sIm5hbWVzIjpbImtuZXgiLCJyZXF1aXJlIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIkRCX0NMSUVOVCIsImNvbm5lY3Rpb24iLCJob3N0IiwiREJfSE9TVCIsInBvcnQiLCJEQl9QT1JUIiwidXNlciIsIkRCX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/db.js\n");

/***/ }),

/***/ "(api)/./middlewares/authorization.js":
/*!**************************************!*\
  !*** ./middlewares/authorization.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authorization)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction authorization(req, res) {\n    return new Promise((resolve, reject)=>{\n        const { authorization  } = req.headers;\n        if (!authorization) return res.status(401).end();\n        const authSplit = authorization.split(\" \");\n        const [authType, token] = [\n            authSplit[0],\n            authSplit[1]\n        ];\n        if (authType !== \"Bearer\") return res.status(401).end();\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decoded)=>{\n            if (err) return res.status(401).end();\n            return resolve(decoded);\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlcy9hdXRob3JpemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUVoQixTQUFTQyxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1FBRXRDLE1BQU0sRUFBRUwsYUFBYSxHQUFFLEdBQUdDLEdBQUcsQ0FBQ0ssT0FBTztRQUVyQyxJQUFJLENBQUNOLGFBQWEsRUFBRSxPQUFPRSxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7UUFFakQsTUFBTUMsU0FBUyxHQUFHVCxhQUFhLENBQUNVLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUMsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLEtBQUssQ0FBQyxHQUFHO1lBQ3hCSCxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1pBLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUVELElBQUlFLFFBQVEsS0FBSyxRQUFRLEVBQUUsT0FBT1QsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1FBRXhELE9BQU9ULDBEQUFVLENBQUNhLEtBQUssRUFBRUUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLE9BQU8sR0FBSztZQUNqRSxJQUFJRCxHQUFHLEVBQUUsT0FBT2YsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLE9BQU9KLE9BQU8sQ0FBQ2MsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rdHJlZS1uZXh0Ly4vbWlkZGxld2FyZXMvYXV0aG9yaXphdGlvbi5qcz8yYTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhvcml6YXRpb24ocmVxLCByZXMpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcblxyXG4gICAgaWYgKCFhdXRob3JpemF0aW9uKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhdXRoU3BsaXQgPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBbYXV0aFR5cGUsIHRva2VuXSA9IFtcclxuICAgICAgYXV0aFNwbGl0WzBdLFxyXG4gICAgICBhdXRoU3BsaXRbMV1cclxuICAgIF07XHJcblxyXG4gICAgaWYgKGF1dGhUeXBlICE9PSAnQmVhcmVyJykgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZWQpID0+IHtcclxuICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUoZGVjb2RlZCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJqd3QiLCJhdXRob3JpemF0aW9uIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJoZWFkZXJzIiwic3RhdHVzIiwiZW5kIiwiYXV0aFNwbGl0Iiwic3BsaXQiLCJhdXRoVHlwZSIsInRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJlcnIiLCJkZWNvZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./middlewares/authorization.js\n");

/***/ }),

/***/ "(api)/./pages/api/links/delete.js":
/*!***********************************!*\
  !*** ./pages/api/links/delete.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/db */ \"(api)/./libs/db.js\");\n/* harmony import */ var _middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middlewares/authorization */ \"(api)/./middlewares/authorization.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"DELETE\") return res.status(405).end();\n    const auth = await (0,_middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    const { id  } = req.query;\n    const deleted = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"links\").where({\n        id\n    }).del();\n    res.status(200);\n    res.json({\n        message: \"Success delete data\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlua3MvZGVsZXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUM2QjtBQUVoRCxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLFFBQVEsRUFBRSxPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7SUFFMUQsTUFBTUMsSUFBSSxHQUFHLE1BQU1QLHNFQUFhLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRTFDLE1BQU0sRUFBRUssRUFBRSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSztJQUV4QixNQUFNQyxPQUFPLEdBQUcsTUFBTVgsb0RBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDVlksS0FBSyxDQUFDO1FBQUVILEVBQUU7S0FBRSxDQUFDLENBQ2JJLEdBQUcsRUFBRTtJQUU1QlQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEJGLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDO1FBQ1BDLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmt0cmVlLW5leHQvLi9wYWdlcy9hcGkvbGlua3MvZGVsZXRlLmpzP2U2Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2xpYnMvZGInO1xyXG5pbXBvcnQgYXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlcy9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0RFTEVURScpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcblxyXG4gIGNvbnN0IGF1dGggPSBhd2FpdCBhdXRob3JpemF0aW9uKHJlcSwgcmVzKTtcclxuXHJcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBkZWxldGVkID0gYXdhaXQgZGIoJ2xpbmtzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndoZXJlKHsgaWQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbCgpO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgcmVzLmpzb24oe1xyXG4gICAgbWVzc2FnZTogJ1N1Y2Nlc3MgZGVsZXRlIGRhdGEnLFxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbImRiIiwiYXV0aG9yaXphdGlvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJhdXRoIiwiaWQiLCJxdWVyeSIsImRlbGV0ZWQiLCJ3aGVyZSIsImRlbCIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/links/delete.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/links/delete.js"));
module.exports = __webpack_exports__;

})();