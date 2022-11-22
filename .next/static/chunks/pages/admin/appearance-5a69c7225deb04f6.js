(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{9446:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/appearance",function(){return n(4424)}])},6115:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),i=n(9008),a=n.n(i),o=n(1163),l=n.n(o),s=n(1664),c=n.n(s),d=n(7294);function u(e){var t=e.isActiveHamburger,n=e.onClickHamburger;return(0,r.jsxs)("button",{id:"hamburger",className:"block absolute right-4".concat(t?" hamburger-active":""," lg:hidden"),type:"button",onClick:function(){return n()},children:[(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left"}),(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out"}),(0,r.jsx)("span",{className:"hamburger-line transition duration-300 ease-in-out origin-top-left"})]})}function m(e){var t=e.logoutHandler;return(0,r.jsx)("button",{className:" text-base font-semibold mx-6 flex px-6 py-2 bg-transparent border-[1px] border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-red-600 dark:text-light lg:mx-4",type:"button",onClick:t.bind(this),children:"Logout"})}function h(e){var t=e.isActiveHamburger,n=e.logoutHandler,i=(0,o.useRouter)();return(0,r.jsx)("nav",{id:"nav-menu",className:"".concat(t?"":"hidden"," absolute py-2 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-black/70 lg:dark:bg-transparent"),children:(0,r.jsxs)("ul",{className:"block lg:flex",children:[(0,r.jsx)("li",{className:"mb-1 grup",children:(0,r.jsx)(c(),{href:"/admin",children:(0,r.jsx)("span",{className:"/admin"===i.pathname?"cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active":"cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",children:"Links"})})}),(0,r.jsx)("li",{className:"mb-1 grup",children:(0,r.jsx)(c(),{href:"/admin/appearance",children:(0,r.jsx)("span",{className:"/admin/appearance"===i.pathname?"cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active":"cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",children:"Appearance"})})}),(0,r.jsx)("li",{className:"mb-1 grup",children:(0,r.jsx)(c(),{href:"/admin/analytics",children:(0,r.jsx)("span",{className:"/admin/analytics"===i.pathname?"cursor-pointer nav-link rounded-b-none rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active":"cursor-pointer nav-link rounded-md border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",children:"Analytics"})})}),(0,r.jsx)("li",{className:"mb-1 lg:hidden",children:(0,r.jsx)(m,{logoutHandler:n})})]})})}var p=n(9583),f=n(1955),x=n(6455),g=n.n(x);function b(e){var t=(0,d.useState)(!1),n=t[0],i=t[1];(0,d.useEffect)(function(){window.onscroll=function(){var e=document.querySelector("#header-admin"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("navbar-fixed"):e.classList.remove("navbar-fixed")}},[]);var a=function(){i(!n)},o=function(e){e.preventDefault(),g().fire({title:"Are you sure want to logout?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, logout!"}).then(function(e){e.isConfirmed&&(f.Z.remove("token"),l().push("/login"))})};return(0,r.jsx)("header",{className:"absolute top-0 left-0 z-10 flex w-full items-center bg-white border-b-[1px] shadow-sm py-2 lg:p-0",id:"header-admin",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"px-4 flex items-center",children:(0,r.jsx)(c(),{href:e.back,children:(0,r.jsx)("div",{className:"flex items-center cursor-pointer p-2 font-bold text-xl rounded-full transition-all duration-200 bg-primary/30 hover:bg-primary/40",children:(0,r.jsx)(p.FaChevronLeft,{})})})}),(0,r.jsxs)("div",{className:"flex items-center justify-center px-4 lg:flex-row-reverse",children:[(0,r.jsx)(u,{isActiveHamburger:n,onClickHamburger:a}),(0,r.jsx)(h,{isActiveHamburger:n,logoutHandler:o})]})]}),(0,r.jsx)("div",{className:"mb-1 hidden lg:block",children:(0,r.jsx)(m,{logoutHandler:o})})]})})})}function j(e){var t=e.children,n=e.title,i=e.desc,l=e.back,s=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"keywords",content:"Linktree Decorunic, Kumpulan Linktree, Shortlink, Pohon Link"}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{name:"publisher",content:"Decorunic Author"}),(0,r.jsx)("meta",{name:"author",content:"Decorunic Author"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"google-site-verification",content:""}),(0,r.jsx)("meta",{name:"msvalidate.01",content:""}),(0,r.jsx)("link",{rel:"canonical",href:"https://decorunic.id"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/linktree/favicon.ico"}),(0,r.jsx)("link",{rel:"icon",href:"/linktree/favicon.ico"}),(0,r.jsx)("meta",{name:"theme-color",content:"#FB6107"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#FB6107"}),(0,r.jsx)("link",{rel:"manifest",href:"/linktree/manifest.json"}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://decorunic.id/"}),(0,r.jsx)("meta",{property:"og:image",content:"/img/android-icon-192x192.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:"/img/android-icon-192x192.png"}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:description",content:i})]}),"/"!==s.pathname&&(0,r.jsx)(b,{back:l}),t,(0,r.jsx)("footer",{})]})}},4424:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return f},default:function(){return x}});var r=n(7568),i=n(4924),a=n(6042),o=n(9396),l=n(655),s=n(5893),c=n(6115),d=n(1163),u=n.n(d),m=n(7294),h=n(6455),p=n.n(h),f=!0;function x(e){var t=function(e){var t=e.target.getAttribute("name");e.target.files&&e.target.files[0]&&n(e),x((0,o.Z)((0,a.Z)({},f),(0,i.Z)({},t,e.target.value)))},n=function(e){var t=e.target.files[0];setLogo(t),setCreateObjectURL(URL.createObjectURL(t))},d=e.profile,h=(0,m.useState)({title:d.title,bio:d.bio,logo:d.logo,hero:d.hero}),f=h[0],x=h[1];function g(){return(g=(0,r.Z)(function(t){var n,r;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return t.preventDefault(),n=e.token,[4,fetch("https://decorunic.id/linktree/api/profile/update?id="+d.id,{method:"PUT",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(f)})];case 1:if(!(r=i.sent()).ok)return[2];return[4,r.json()];case 2:return i.sent(),p().fire({title:"Success",text:"Profile successfully updated",icon:"success",confirmButtonText:"Ok"}).then(function(e){e.isConfirmed&&u().replace("/admin/appearance")}),[2]}})})).apply(this,arguments)}return(0,s.jsx)(c.Z,{title:"Linktree – Appearance",desc:"Tautan Marketplace, Sosial Media, Informasi, dan Website Decorunic",back:"/",children:(0,s.jsx)("div",{className:"container justify-center items-center mt-20 mb-10 lg:mt-24",children:(0,s.jsx)("div",{className:"flex flex-wrap items-center justify-center px-4",children:(0,s.jsxs)("section",{className:"w-full md:w-[70%] lg:w-1/2",children:[(0,s.jsx)("h1",{className:"text-2xl lg:text-3xl font-bold text-center",children:"Profile"}),(0,s.jsxs)("form",{onSubmit:(function(e){return g.apply(this,arguments)}).bind(this),className:"flex flex-col mt-10 gap-x-5 gap-y-1",children:[(0,s.jsxs)("label",{htmlFor:"hero",className:"group relative overflow-hidden w-full h-[30vh] md:h-[40vh] rounded",children:[(0,s.jsx)("div",{className:"bg-dark w-full h-full absolute z-[1] opacity-20"}),(0,s.jsx)("picture",{className:"w-full h-full object-cover absolute top-0 left-0",children:(0,s.jsx)("img",{src:"/linktree/img/".concat(d.hero),alt:"Hero ".concat(d.title),className:"w-full h-full object-cover object-center"})})]}),(0,s.jsx)("input",{id:"old_hero",name:"old_hero",type:"hidden",defaultValue:d.hero}),(0,s.jsx)("input",{id:"hero",onChange:t.bind(this),name:"hero",type:"file",className:"hidden",accept:"image/*",disabled:!0}),(0,s.jsx)("div",{className:"relative z-10 mb-20 lg:mb-24",children:(0,s.jsx)("div",{className:"absolute -top-16 flex flex-col items-center w-full text-center md:-top-24 lg:-top-28",children:(0,s.jsxs)("div",{className:"flex justify-center mb-5",children:[(0,s.jsx)("label",{htmlFor:"logo",className:"group rounded-full relative overflow-hidden shadow-lg shadow-black/20 bg-white",children:(0,s.jsx)("picture",{children:(0,s.jsx)("img",{className:"rounded-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] aspect-square object-cover",src:"/linktree/img/".concat(d.logo),alt:"Logo ".concat(d.title)})})}),(0,s.jsx)("input",{id:"old_logo",name:"old_logo",type:"hidden",defaultValue:d.logo}),(0,s.jsx)("input",{id:"logo",onChange:t.bind(this),name:"logo",type:"file",className:"hidden",accept:"image/*",disabled:!0})]})})}),(0,s.jsx)("label",{htmlFor:"title",children:"Title"}),(0,s.jsx)("input",{id:"title",onChange:t.bind(this),type:"text",placeholder:"e.g. Decorunic Linktree",name:"title",className:"border border-gray-300 p-2 rounded mb-4",defaultValue:d.title,required:!0}),(0,s.jsx)("label",{htmlFor:"bio",children:"Bio"}),(0,s.jsx)("input",{id:"bio",onChange:t.bind(this),type:"text",placeholder:"e.g. Brand Furniture Hemat Ruang Minimalis Space Saving",name:"bio",className:"border border-gray-300 p-2 rounded mb-4",defaultValue:d.bio,required:!0}),(0,s.jsx)("button",{type:"submit",className:"bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out mb-1 font-semibold",children:"Save Changes"})]})]})})})})}},7568:function(e,t,n){"use strict";function r(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(c){n(c);return}l.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var o=e.apply(t,n);function l(e){r(o,i,a,l,s,"next",e)}function s(e){r(o,i,a,l,s,"throw",e)}l(void 0)})}}n.d(t,{Z:function(){return i}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[445,727,831,774,888,179],function(){return e(e.s=9446)}),_N_E=e.O()}]);