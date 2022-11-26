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
exports.id = "pages/api/profile/detail";
exports.ids = ["pages/api/profile/detail"];
exports.modules = {

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

/***/ "(api)/./pages/api/profile/detail.js":
/*!*************************************!*\
  !*** ./pages/api/profile/detail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/db */ \"(api)/./libs/db.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") return res.status(405).end();\n    const id = 1;\n    const link = await (0,_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"profile\").where({\n        id\n    }).first();\n    if (!link) return res.status(404).end();\n    res.status(200);\n    res.json({\n        message: \"Success get data\",\n        data: link\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9kZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbkIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUUsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0lBRXZELE1BQU1DLEVBQUUsR0FBSSxDQUFDO0lBRWIsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLG9EQUFFLENBQUMsU0FBUyxDQUFDLENBQ1hTLEtBQUssQ0FBQztRQUFFRixFQUFFO0tBQUUsQ0FBQyxDQUNiRyxLQUFLLEVBQUU7SUFFNUIsSUFBRyxDQUFDRixJQUFJLEVBQUUsT0FBT0wsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0lBRXZDSCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQkYsR0FBRyxDQUFDUSxJQUFJLENBQUM7UUFDUEMsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQkMsSUFBSSxFQUFFTCxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmt0cmVlLW5leHQvLi9wYWdlcy9hcGkvcHJvZmlsZS9kZXRhaWwuanM/MTY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vbGlicy9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gIFxyXG4gIGNvbnN0IGlkICA9IDE7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBhd2FpdCBkYigncHJvZmlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAud2hlcmUoeyBpZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KCk7XHJcbiAgXHJcbiAgaWYoIWxpbmspIHJldHVybiByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKTtcclxuICByZXMuanNvbih7XHJcbiAgICBtZXNzYWdlOiAnU3VjY2VzcyBnZXQgZGF0YScsXHJcbiAgICBkYXRhOiBsaW5rXHJcbiAgfSk7XHJcbn0iXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiaWQiLCJsaW5rIiwid2hlcmUiLCJmaXJzdCIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/detail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/detail.js"));
module.exports = __webpack_exports__;

})();