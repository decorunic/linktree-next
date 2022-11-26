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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/db */ \"(api)/./libs/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const { email , password  } = req.body;\n    const checkUser = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"users\").where({\n        email\n    }).first();\n    if (!checkUser) {\n        return res.status(401).json({\n            message: \"Email not registered\"\n        });\n    }\n    const checkPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, checkUser.password);\n    if (!checkPassword) {\n        return res.status(401).json({\n            message: \"Password is wrong\"\n        });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        id: checkUser.id,\n        email: checkUser.email\n    }, process.env.JWT_SECRET, {\n        expiresIn: \"1h\"\n    });\n    res.status(200);\n    res.json({\n        message: \"Success Login\",\n        token\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFDSjtBQUNDO0FBRWhCLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztJQUV4RCxNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtJQUVwQyxNQUFNQyxTQUFTLEdBQUcsTUFBTVosb0RBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDVmEsS0FBSyxDQUFDO1FBQUVKLEtBQUs7S0FBRSxDQUFDLENBQ2hCSyxLQUFLLEVBQUU7SUFFaEMsSUFBSSxDQUFDRixTQUFTLEVBQUU7UUFDZCxPQUFPUCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1EsSUFBSSxDQUFDO1lBQzFCQyxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNQyxhQUFhLEdBQUcsTUFBTWhCLHVEQUFjLENBQUNTLFFBQVEsRUFBRUUsU0FBUyxDQUFDRixRQUFRLENBQUM7SUFDeEUsSUFBSSxDQUFDTyxhQUFhLEVBQUU7UUFDbEIsT0FBT1osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNRLElBQUksQ0FBQztZQUMxQkMsT0FBTyxFQUFFLG1CQUFtQjtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTUcsS0FBSyxHQUFHakIsd0RBQVEsQ0FBQztRQUNyQm1CLEVBQUUsRUFBRVQsU0FBUyxDQUFDUyxFQUFFO1FBQ2hCWixLQUFLLEVBQUVHLFNBQVMsQ0FBQ0gsS0FBSztLQUN2QixFQUFFYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFO1FBQUVDLFNBQVMsRUFBRSxJQUFJO0tBQUUsQ0FBQztJQUUvQ3BCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCRixHQUFHLENBQUNVLElBQUksQ0FBQztRQUNQQyxPQUFPLEVBQUUsZUFBZTtRQUN4QkcsS0FBSztLQUNOLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rdHJlZS1uZXh0Ly4vcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/MTMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vbGlicy9kYic7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBjaGVja1VzZXIgPSBhd2FpdCBkYigndXNlcnMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC53aGVyZSh7IGVtYWlsIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KCk7XHJcblxyXG4gIGlmICghY2hlY2tVc2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiAnRW1haWwgbm90IHJlZ2lzdGVyZWQnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgY2hlY2tVc2VyLnBhc3N3b3JkKTtcclxuICBpZiAoIWNoZWNrUGFzc3dvcmQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBpcyB3cm9uZydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7XHJcbiAgICBpZDogY2hlY2tVc2VyLmlkLFxyXG4gICAgZW1haWw6IGNoZWNrVXNlci5lbWFpbFxyXG4gIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMWgnIH0pO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgcmVzLmpzb24oe1xyXG4gICAgbWVzc2FnZTogJ1N1Y2Nlc3MgTG9naW4nLFxyXG4gICAgdG9rZW5cclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJkYiIsImJjcnlwdCIsImp3dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImNoZWNrVXNlciIsIndoZXJlIiwiZmlyc3QiLCJqc29uIiwibWVzc2FnZSIsImNoZWNrUGFzc3dvcmQiLCJjb21wYXJlIiwidG9rZW4iLCJzaWduIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();