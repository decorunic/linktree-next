"use strict";
(() => {
var exports = {};
exports.id = 940;
exports.ids = [940];
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

/***/ 2810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middlewares_authorizationPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7406);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5789);
/* harmony import */ var _components_DynamicFAIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8051);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_4__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







async function getServerSideProps(context) {
    const { token  } = await (0,_middlewares_authorizationPage__WEBPACK_IMPORTED_MODULE_3__/* .authorizationPage */ .zD)(context);
    const { id  } = context.query;
    const linkReq = await fetch(`https://decorunic.id/linktree/api/links/detail?id=${id}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    const res = await linkReq.json();
    // console.log(res);
    return {
        props: {
            token,
            link: res.data
        }
    };
}
function Edit(props) {
    const typeOptions = [
        {
            value: "social",
            label: "Social Media"
        },
        {
            value: "general",
            label: "General"
        },
        {
            value: "marketplace",
            label: "Marketplace"
        }
    ];
    const socialIconOptions = [
        {
            value: "FaFacebook",
            label: "Facebook"
        },
        {
            value: "FaTwitter",
            label: "Twitter"
        },
        {
            value: "FaInstagram",
            label: "Instagram"
        },
        {
            value: "FaYoutube",
            label: "Youtube"
        },
        {
            value: "FaLinkedin",
            label: "Linkedin"
        },
        {
            value: "FaGithub",
            label: "Github"
        },
        {
            value: "FaWhatsapp",
            label: "Whatsapp"
        },
        {
            value: "FaTelegram",
            label: "Telegram"
        },
        {
            value: "FaDiscord",
            label: "Discord"
        },
        {
            value: "FaTiktok",
            label: "Tiktok"
        },
        {
            value: "FaPinterest",
            label: "Pinterest"
        },
        {
            value: "FaReddit",
            label: "Reddit"
        },
        {
            value: "FaSpotify",
            label: "Spotify"
        },
        {
            value: "FaTwitch",
            label: "Twitch"
        },
        {
            value: "FaMedium",
            label: "Medium"
        },
        {
            value: "FaSnapchat",
            label: "Snapchat"
        },
        {
            value: "FaEtsy",
            label: "Etsy"
        },
        {
            value: "FaLink",
            label: "Lainnya"
        }, 
    ];
    const { link  } = props;
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: link.name,
        url: link.url,
        icon: link.icon,
        type: link.type,
        new_tab: link.new_tab
    });
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    async function updateHandler(e) {
        e.preventDefault();
        setStatus("loading");
        const { token  } = props;
        const update = await fetch(`https://decorunic.id/linktree/api/links/update?id=${link.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(fields)
        });
        if (!update.ok) return setStatus("error");
        const res = await update.json();
        setStatus("success");
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: "Success",
            text: "Link successfully updated",
            icon: "success",
            confirmButtonText: "Ok"
        }).then((result)=>{
            if (result.isConfirmed) {
                next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/admin");
            }
        });
    }
    function fieldHandler(e) {
        const name = e.target.getAttribute("name");
        if (name === "new_tab") {
            setFields({
                ...fields,
                [name]: e.target.checked
            });
        } else {
            setFields({
                ...fields,
                [name]: e.target.value
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Edit Link ‹ Decorunic Linktree",
        desc: "Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic",
        back: "/admin",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container justify-center items-center mt-20 mb-10 lg:mt-24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap items-center justify-center px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "w-full md:w-[70%] lg:w-1/2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl lg:text-3xl font-bold text-center",
                            children: "Edit Link"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: updateHandler.bind(this),
                            className: "flex flex-col mt-10 gap-x-5 gap-y-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "name",
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "name",
                                    onChange: fieldHandler.bind(this),
                                    type: "text",
                                    placeholder: "Link Name",
                                    name: "name",
                                    className: "border border-gray-300 p-2 rounded mb-4",
                                    defaultValue: link.name,
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "url",
                                    children: "URL"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "url",
                                    onChange: fieldHandler.bind(this),
                                    type: "text",
                                    placeholder: "Link URL",
                                    name: "url",
                                    className: "border border-gray-300 p-2 rounded mb-4",
                                    defaultValue: link.url,
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "type",
                                    children: "Type"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    id: "type",
                                    name: "type",
                                    onChange: fieldHandler.bind(this),
                                    className: "border border-gray-300 p-2 rounded mb-4",
                                    required: true,
                                    defaultValue: link.type,
                                    children: typeOptions.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: option.value,
                                            children: option.label
                                        }, index))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-x-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            id: "new_tab",
                                            onChange: fieldHandler.bind(this),
                                            type: "checkbox",
                                            name: "new_tab",
                                            className: "border border-gray-300 p-2 rounded",
                                            defaultChecked: link.new_tab
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "new_tab",
                                            children: "Open in New Tab"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: fields.type !== "social" ? "hidden" : "block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "icon",
                                            children: "Icon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-wrap gap-2 p-2 mb-4 border-[1px] rounded justify-between",
                                            children: socialIconOptions.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-[calc(100%/6-0.5rem)]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: fieldHandler.bind(this),
                                                            type: "radio",
                                                            name: "icon",
                                                            id: option.value,
                                                            value: option.value,
                                                            className: "opacity-0 absolute peer",
                                                            defaultChecked: option.value === link.icon,
                                                            required: fields.type === "social" ? true : false
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: option.value,
                                                            className: "flex items-center justify-center cursor-pointer border-2 p-2 rounded text-2xl md:text-3xl peer-checked:border-dark peer-checked:bg-dark peer-checked:text-white hover:bg-dark/80 hover:text-white transition-all duration-150",
                                                            title: option.label,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DynamicFAIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                name: option.value
                                                            })
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out mb-1 font-semibold",
                                    children: "Save Changes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-all duration-200 ease-in-out mb-1",
                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/admin"),
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            })
        })
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,789,406], () => (__webpack_exec__(2810)));
module.exports = __webpack_exports__;

})();