(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3700:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(9888)}])},9888:function(e,t,n){"use strict";n.r(t);var r=n(7568),s=n(7582),o=n(5893),i=n(9008),c=n.n(i),u=n(1163),a=n(7294),l=n(1015);t.default=function(){var e=(0,a.useState)(null),t=e[0],n=e[1],i=(0,a.useState)(""),p=i[0],d=i[1],m=(0,a.useState)(""),f=m[0],b=m[1],h=(0,u.useRouter)(),x=function(){var e=(0,r.Z)((function(){var e,t,r,o,i,c;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return e=null,p&&f?[3,1]:(p||f||(e={type:"empty_username_password",msg:"Please Insert Your App Username & Password to login."}),!p&&f&&(e={type:"empty_username",msg:"Please Insert Your App Username"}),!f&&p&&(e={type:"empty_password",msg:"Please Insert Your App Password"}),n(e),setTimeout((function(){n(null)}),3e3),[3,4]);case 1:return s.trys.push([1,3,,4]),t=new Headers({"Content-Type":"application/json",Accept:"application/json"}),r={method:"POST",headers:t,body:JSON.stringify({username:p,password:f})},o="".concat(window.location.origin,"/api/login"),[4,fetch(o,r).then((function(e){return e.json()}))];case 2:return(i=s.sent()).success?h.push("/"):(c="",i.error&&i.error.toLowerCase().includes("username")&&(c="incorrect_username"),i.error&&i.error.toLowerCase().includes("password")&&(c="incorrect_password"),n({type:c,msg:i.error}),setTimeout((function(){n(null)}),3e3)),[3,4];case 3:return s.sent(),n({type:"unknown",msg:"Could not login, Ther Server is not responsive."}),setTimeout((function(){n(null)}),3e3),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),w="mb-2 font-semibold inline-block text-sm text-gray-700",y="w-full p-2 border border-gray-200 rounded mb-3 focus:outline-none focus:border-blue-200",g="border-red-400 focus:border-red-400";return(0,o.jsxs)("div",{className:"Login",children:[(0,o.jsx)(c(),{children:(0,o.jsx)("title",{children:"Login - ZeniBot"})}),(0,o.jsx)("div",{className:"flex items-center justify-center w-full h-screen",children:(0,o.jsxs)("div",{className:"w-80 mt-[-300px]",children:[(0,o.jsxs)("h3",{className:"py-7 text-2xl font-bold text-blue-700 text-center",children:[(0,o.jsx)("span",{className:" relative top-[3px] mr-1",children:(0,o.jsx)(l.Z,{type:"logo",size:30,color:"#364AFF"})})," ZeniBot"]}),(0,o.jsxs)("div",{className:"relative bg-[white] rounded-md text-sm border p-5",children:[(0,o.jsxs)("div",{className:"settings__section__input mb-5",children:[(0,o.jsx)("label",{className:w,children:"Username"}),(0,o.jsx)("input",{className:"\n                           ".concat(y," \n                           ").concat(t&&t.type.includes("username")?g:""," \n                        "),type:"text",value:p,onChange:function(e){return d(e.target.value)}})]}),(0,o.jsxs)("div",{className:"settings__section__input mb-5",children:[(0,o.jsx)("label",{className:w,children:"Password"}),(0,o.jsx)("input",{className:"\n                           ".concat(y," \n                           ").concat(t&&t.type.includes("password")?g:""," \n                        "),type:"password",value:f,onChange:function(e){return b(e.target.value)}})]}),(0,o.jsx)("button",{onClick:function(){return x()},className:"py-3 px-5 w-full rounded cursor-pointer bg-blue-700 text-white font-semibold text-sm",children:"Login"}),t&&t.msg&&(0,o.jsx)("div",{className:"absolute w-full bottom-[-100px] ml-[-20px] rounded text-center p-3 bg-red-100 text-red-600 text-sm font-semibold",children:t.msg})]})]})})]})}},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)},7568:function(e,t,n){"use strict";function r(e,t,n,r,s,o,i){try{var c=e[o](i),u=c.value}catch(a){return void n(a)}c.done?t(u):Promise.resolve(u).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,o){var i=e.apply(t,n);function c(e){r(i,s,o,c,u,"next",e)}function u(e){r(i,s,o,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[15,774,888,179],(function(){return t=3700,e(e.s=t);var t}));var t=e.O();_N_E=t}]);