"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const DynamicFaIcon = ({ name  })=>{
    const IconComponent = react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[name];
    if (!IconComponent) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLink, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComponent, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFaIcon);


/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-primary/40 text-white text-center py-5",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-dark",
                children: "\xa9 2022 Decorunic. All rights reserved."
            })
        })
    });
}


/***/ }),

/***/ 2901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Body)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/GeneralButton.js



function GeneralButton() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap justify-center pt-3 gap-5 md:pt-0 md:gap-y-5 md:gap-x-10 lg:gap-x-14",
        children: context.generalLinks.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: item.url.includes("http://") || item.url.includes("https://") ? item.url : "//" + item.url,
                target: item.new_tab ? "_blank" : "_self",
                rel: "noopener noreferrer",
                className: `w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30 umami--click--${item.name.toLowerCase().replace(/\s/g, "")}-${item.id}`,
                children: item.name
            }, index))
    });
}

;// CONCATENATED MODULE: ./components/Home/MarketplaceButton.js



function MarketplaceButton() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center text-xl font-bold mt-12 mb-5",
                children: "Marketplace"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap justify-center gap-5 md:gap-y-5 md:gap-x-10 lg:gap-x-14",
                children: context.marketplaceLinks.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: item.url.includes("http://") || item.url.includes("https://") ? item.url : "//" + item.url,
                        target: item.new_tab ? "_blank" : "_self",
                        rel: "noopener noreferrer",
                        className: `w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-3.5rem)] text-center text-lg px-5 py-3 border border-primary/40 rounded-sm bg-white shadow-md shadow-dark/10 md:text-xl md:p-5 transition-all duration-200 ease-in-out hover:bg-primary/50 hover:shadow-lg hover:shadow-primary/30 umami--click--${item.name.toLowerCase().replace(/\s/g, "")}-${item.id}`,
                        children: item.name
                    }, index))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Home/Body.js



function Body() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "container mt-56 mb-10 md:mt-80 md:mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GeneralButton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MarketplaceButton, {})
        ]
    });
}


/***/ }),

/***/ 6262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
// EXTERNAL MODULE: ./components/DynamicFAIcon.js
var DynamicFAIcon = __webpack_require__(8051);
;// CONCATENATED MODULE: ./components/Home/SocialMediaButton.js




function SocialMediaButton() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap mt-5 gap-2 md:gap-3",
        children: context.socialLinks.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: item.url.includes("http://") || item.url.includes("https://") ? item.url : "//" + item.url,
                target: item.new_tab ? "_blank" : "_self",
                rel: "noopener noreferrer",
                className: `text-2xl p-2 rounded-full md:text-3xl transition-all duration-200 ease-in hover:bg-primary/50 umami--click--${item.name.toLowerCase().replace(/\s/g, "")}-${item.id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(DynamicFAIcon/* default */.Z, {
                    name: item.icon
                })
            }, index))
    });
}

;// CONCATENATED MODULE: ./components/Home/Header.js




function Header() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    const profile = context.profile;
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "relative z-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute -top-16 flex flex-col items-center w-full text-center md:-top-32",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "rounded-full shadow-lg shadow-black/20 max-w-[120px] md:max-w-[250px] object-cover",
                        src: `/linktree/img/${profile.logo}`,
                        alt: `Logo ${profile.title}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "font-bold mt-5 text-2xl md:text-3xl",
                    children: profile.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-2 md:text-lg",
                    children: profile.bio
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaButton, {})
            ]
        })
    });
}


/***/ }),

/***/ 5876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5049);
/* harmony import */ var _DynamicFAIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8051);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7486);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);






function Hero() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_app_context__WEBPACK_IMPORTED_MODULE_3__/* .AppContext */ .I);
    const profile = context.profile;
    const allCookies = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(context);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "hero",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full h-[30vh] relative md:h-[50vh]",
            children: [
                allCookies.token && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "./admin",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cursor-pointer absolute top-3 right-3 z-[2] bg-white py-2 px-5 rounded-full shadow font-semibold hover:shadow-white transition-all duration-200 ease-out flex items-center gap-1",
                        children: [
                            "Go to Admin ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DynamicFAIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                name: "FaChevronRight"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-dark w-full h-full absolute z-[1] opacity-20"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                    className: "w-full h-full object-cover absolute top-0 left-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `/linktree/img/${profile.hero}`,
                        alt: "Hero",
                        className: "w-full h-full object-cover object-center"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    empty: true
});


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3193);
/* harmony import */ var _components_Home_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2901);
/* harmony import */ var _components_Home_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6262);
/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5876);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5789);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







async function getServerSideProps() {
    const id = 1;
    const profileReq = await fetch(`https://decorunic.id/linktree/api/profile/detail?id=${id}`);
    const linkReq = await fetch(`https://decorunic.id/linktree/api/links`);
    const profiles = await profileReq.json();
    const links = await linkReq.json();
    return {
        props: {
            profile: profiles.data,
            links: links.data
        }
    };
}
function Home(props) {
    const { profile , links  } = props;
    const socialLinks = links.filter((link)=>link.type === "social");
    const generalLinks = links.filter((link)=>link.type === "general");
    const marketplaceLinks = links.filter((link)=>link.type === "marketplace");
    const appContextValue = {
        profile,
        socialLinks,
        generalLinks,
        marketplaceLinks
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Decorunic Linktree – Furniture Hemat Ruang Minimalis Space Saving",
        desc: "Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_app_context__WEBPACK_IMPORTED_MODULE_6__/* .AppContext.Provider */ .I.Provider, {
                value: appContextValue,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        id: "content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Body__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,789], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();