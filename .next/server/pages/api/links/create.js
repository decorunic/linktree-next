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
exports.id = "pages/api/links/create";
exports.ids = ["pages/api/links/create"];
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

/***/ "(api)/./pages/api/links/create.js":
/*!***********************************!*\
  !*** ./pages/api/links/create.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/db */ \"(api)/./libs/db.js\");\n/* harmony import */ var _middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middlewares/authorization */ \"(api)/./middlewares/authorization.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const auth = await (0,_middlewares_authorization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    const { name , url , type , icon , new_tab  } = req.body;\n    const create = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"links\").insert({\n        name,\n        url,\n        type,\n        icon,\n        new_tab\n    });\n    const createData = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"links\").where({\n        id: create\n    }).first();\n    res.status(200);\n    res.json({\n        message: \"Success create data\",\n        data: createData\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlua3MvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUM2QjtBQUVoRCxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRSxPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7SUFFeEQsTUFBTUMsSUFBSSxHQUFHLE1BQU1QLHNFQUFhLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBRTFDLE1BQU0sRUFBRUssSUFBSSxHQUFFQyxHQUFHLEdBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR1YsR0FBRyxDQUFDVyxJQUFJO0lBQ25ELE1BQU1DLE1BQU0sR0FBRyxNQUFNZixvREFBRSxDQUFDLE9BQU8sQ0FBQyxDQUNUZ0IsTUFBTSxDQUFDO1FBQ05QLElBQUk7UUFDSkMsR0FBRztRQUNIQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsT0FBTztLQUNSLENBQUM7SUFFeEIsTUFBTUksVUFBVSxHQUFHLE1BQU1qQixvREFBRSxDQUFDLE9BQU8sQ0FBQyxDQUNUa0IsS0FBSyxDQUFDO1FBQUVDLEVBQUUsRUFBRUosTUFBTTtLQUFFLENBQUMsQ0FDckJLLEtBQUssRUFBRTtJQUVsQ2hCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCRixHQUFHLENBQUNpQixJQUFJLENBQUM7UUFDUEMsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QkMsSUFBSSxFQUFFTixVQUFVO0tBQ2pCLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rdHJlZS1uZXh0Ly4vcGFnZXMvYXBpL2xpbmtzL2NyZWF0ZS5qcz9jNzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9saWJzL2RiJztcclxuaW1wb3J0IGF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZXMvYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGF1dGhvcml6YXRpb24ocmVxLCByZXMpO1xyXG4gIFxyXG4gIGNvbnN0IHsgbmFtZSwgdXJsLCB0eXBlLCBpY29uLCBuZXdfdGFiIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBjcmVhdGUgPSBhd2FpdCBkYignbGlua3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X3RhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgY29uc3QgY3JlYXRlRGF0YSA9IGF3YWl0IGRiKCdsaW5rcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2hlcmUoeyBpZDogY3JlYXRlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApO1xyXG4gIHJlcy5qc29uKHtcclxuICAgIG1lc3NhZ2U6ICdTdWNjZXNzIGNyZWF0ZSBkYXRhJyxcclxuICAgIGRhdGE6IGNyZWF0ZURhdGFcclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJkYiIsImF1dGhvcml6YXRpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiYXV0aCIsIm5hbWUiLCJ1cmwiLCJ0eXBlIiwiaWNvbiIsIm5ld190YWIiLCJib2R5IiwiY3JlYXRlIiwiaW5zZXJ0IiwiY3JlYXRlRGF0YSIsIndoZXJlIiwiaWQiLCJmaXJzdCIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/links/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/links/create.js"));
module.exports = __webpack_exports__;

})();