(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n(4699)}])},4699:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return h},default:function(){return b}});var r=n(7568),i=n(4924),s=n(6042),o=n(9396),a=n(655),c=n(5893),u=n(1955),l=n(7294),d=n(1163),f=n.n(d),p=n(6455),m=n.n(p),h=!0;function b(){var e=function(e){var t=e.target.getAttribute("name");d((0,o.Z)((0,s.Z)({},n),(0,i.Z)({},t,e.target.value)))},t=(0,l.useState)({email:"",password:""}),n=t[0],d=t[1],p=(0,l.useState)({message:""}),h=(p[0],p[1]);function b(){return(b=(0,r.Z)(function(e){var t,r;return(0,a.__generator)(this,function(i){switch(i.label){case 0:return e.preventDefault(),[4,fetch("https://linktree.decorunic.id/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:if(!(t=i.sent()).ok)return m().fire({title:"Error",text:"Email or password is incorrect",icon:"error",confirmButtonText:"Ok"}),[2];return[4,t.json()];case 2:return h({message:(r=i.sent()).message}),u.Z.set("token",r.token),f().push("/admin"),[2]}})})).apply(this,arguments)}return(0,c.jsx)("div",{className:"container flex flex-wrap justify-center h-screen items-center",children:(0,c.jsxs)("form",{onSubmit:(function(e){return b.apply(this,arguments)}).bind(this),className:"w-full max-w-sm",children:[(0,c.jsx)("h1",{className:"text-4xl font-bold mb-10 text-center",children:"Login"}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("label",{htmlFor:"email",className:"mb-2",children:"Email"}),(0,c.jsx)("input",{type:"email",name:"email",id:"email",className:"border border-gray-300 p-2 rounded mb-4",onChange:e.bind(this),required:!0}),(0,c.jsx)("label",{htmlFor:"password",className:"mb-2",children:"Password"}),(0,c.jsx)("input",{type:"password",name:"password",id:"password",className:"border border-gray-300 p-2 rounded mb-4",onChange:e.bind(this),required:!0}),(0,c.jsx)("button",{type:"submit",className:"bg-dark text-white p-2 rounded hover:bg-dark/50 transition-all duration-200 ease-in-out",children:"Login"})]})]})})}},7568:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){n(u);return}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)})}}n.d(t,{Z:function(){return i}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[727,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);