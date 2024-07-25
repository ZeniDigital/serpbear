"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{6561:function(e,t,n){var s=n(5893),l=(n(7294),n(1015)),o=n(3251);t.Z=function(e){var t=e.children,n=e.width,a=void 0===n?"1/2":n,i=e.closeModal,r=e.title,c=e.verticalCenter,d=void 0!==c&&c;(0,o.Z)("Escape",i);return(0,s.jsx)("div",{className:"modal fixed top-0 left-0 bg-white/[.7] w-full h-screen z-50",onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.target===e.currentTarget&&i()},children:(0,s.jsxs)("div",{className:"modal__content max-w-[340px] absolute left-0 right-0 ml-auto mr-auto w-".concat(a," \n         lg:max-w-md bg-white shadow-md rounded-md p-5 border-t-[1px] border-gray-100 text-base \n         ").concat(d?" top-1/2 translate-y-[-50%]":"top-1/4"),children:[r&&(0,s.jsx)("h3",{className:" font-semibold mb-3",children:r}),(0,s.jsx)("button",{className:"modal-close absolute right-2 top-2 p-2 cursor-pointer text-gray-400 transition-all hover:text-gray-700 hover:rotate-90",onClick:function(){return i()},children:(0,s.jsx)(l.Z,{type:"close",size:18})}),(0,s.jsx)("div",{children:t})]})})}},4539:function(e,t,n){var s=n(5893),l=(n(7294),n(1664)),o=n.n(l),a=n(1163),i=n(1015);t.Z=function(e){var t=e.domains,n=e.showAddModal,l=(0,a.useRouter)();return(0,s.jsxs)("div",{className:"sidebar hidden lg:block","data-testid":"sidebar",children:[(0,s.jsxs)("h3",{className:"py-7 text-base font-bold text-blue-700",children:[(0,s.jsx)("span",{className:" relative top-[3px] mr-1",children:(0,s.jsx)(i.Z,{type:"logo",size:24,color:"#364AFF"})})," ZeniBot"]}),(0,s.jsx)("div",{className:"sidebar_menu max-h-96 overflow-auto styled-scrollbar",children:(0,s.jsx)("ul",{className:" font-medium text-sm",children:t.map((function(e){return(0,s.jsx)("li",{className:"my-2.5 leading-10",children:(0,s.jsx)(o(),{href:"/domain/".concat(e.slug),passHref:!0,children:(0,s.jsxs)("a",{className:"block cursor-pointer px-4 text-ellipsis max-w-[100%] overflow-hidden whitespace-nowrap rounded\n                                        rounded-r-none ".concat("/domain/".concat(e.slug)===l.asPath||"/domain/console/".concat(e.slug)===l.asPath||"/domain/insight/".concat(e.slug)===l.asPath||"/domain/ideas/".concat(e.slug)===l.asPath?"bg-white text-zinc-800 border border-r-0":"text-zinc-500"),children:[(0,s.jsx)("img",{className:" inline-block mr-1",src:"https://www.google.com/s2/favicons?domain=".concat(e.domain,"&sz=16"),alt:e.domain}),e.domain]})})},e.domain)}))})}),(0,s.jsx)("div",{className:"sidebar_add border-t font-semibold text-sm text-center mt-6 w-[80%] ml-3 text-zinc-500",children:(0,s.jsx)("button",{"data-testid":"add_domain",onClick:function(){return n(!0)},className:"p-4 hover:text-blue-600",children:"+ Add Domain"})})]})}},602:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(5893),l=n(7294),o=n(6561),a=n(6733),i=function(e){var t=e.closeModal,n=e.domains,i=void 0===n?[]:n,r=(0,l.useState)(""),c=r[0],d=r[1],m=(0,l.useState)(""),u=m[0],h=m[1],x=(0,a.cT)((function(){return t()})),p=x.mutate,b=x.isLoading,g=function(){h("");var e=i.map((function(e){return e.domain})),t=c.split("\n"),n=[],s=[];t.forEach((function(t){var l=t.trim();if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(l)){var o=new URL(l),a="/"===o.pathname;if(a&&!e.includes(o.host)&&n.push(o.host),!a&&!e.includes(o.href)){var i=o.href.replace("https://","").replace("http://","").replace(/^\/+|\/+$/g,"");n.push(i)}}else s.push(l)})),s.length>0?h("Please Insert Valid Domain URL. Invalid URLs: ".concat(s.join(", "))):n.length>0&&(console.log("domainsTobeAdded :",n),p(n))};return(0,s.jsx)(o.Z,{closeModal:function(){t(!1)},title:"Add New Domain",children:(0,s.jsxs)("div",{"data-testid":"adddomain_modal",children:[(0,s.jsx)("h4",{className:"text-sm mt-4",children:"Domain URL"}),(0,s.jsx)("textarea",{className:"w-full h-40 border rounded border-gray-200 p-4 outline-none\n                focus:border-indigo-300 ".concat(u?" border-red-400 focus:border-red-400":""),placeholder:"Type or Paste URLs here. Insert Each URL in a New line.",value:c,autoFocus:!0,onChange:function(e){""===e.currentTarget.value&&u&&h(""),d(e.currentTarget.value)}}),u&&(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:" ml-2 block float-right text-red-500 text-xs font-semibold",children:u})}),(0,s.jsxs)("div",{className:"mt-6 text-right text-sm font-semibold",children:[(0,s.jsx)("button",{className:"py-2 px-5 rounded cursor-pointer bg-indigo-50 text-slate-500 mr-3",onClick:function(){return t(!1)},children:"Cancel"}),(0,s.jsx)("button",{className:"py-2 px-5 rounded cursor-pointer bg-blue-700 text-white",onClick:function(){return!b&&g()},children:b?"Adding....":"Add Domain"})]})]})})}},1917:function(e,t,n){var s=n(5893),l=n(1163),o=n(7294),a=n(1664),i=n.n(a),r=n(4789),c=n(1015),d=n(5924);t.Z=function(e){var t=e.domain,n=e.showAddModal,a=e.showSettingsModal,m=e.exportCsv,u=e.domains,h=e.scFilter,x=void 0===h?"thirtyDays":h,p=e.setScFilter,b=e.showIdeaUpdateModal,g=(0,l.useRouter)(),f=(0,o.useState)(!1),v=f[0],j=f[1],y=(0,o.useState)(!1),w=y[0],N=y[1],_=(0,r.lm)((function(){})).mutate,k="/domain/console/[slug]"===g.pathname,Z="/domain/insight/[slug]"===g.pathname,C="/domain/ideas/[slug]"===g.pathname,z=function(e){return e.replace("three","3").replace("seven","7").replace("thirty","30").replace("Days"," Days")},S="leading-6 inline-block px-2 py-2 text-gray-500 hover:text-gray-700",D="ml-2 text-sm not-italic lg:invisible lg:opacity-0",R="rounded rounded-b-none cursor-pointer border-[#e9ebff] border-b-0";return(0,s.jsxs)("div",{className:"domain_kewywords_head w-full ",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"hidden lg:block text-xl font-bold my-3","data-testid":"domain-header",children:t&&t.domain&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("i",{className:" capitalize font-bold not-italic",children:t.domain.charAt(0)}),t.domain.slice(1)]})}),(0,s.jsx)("div",{className:"domain_selector bg-white mt-2 lg:hidden",children:(0,s.jsx)(d.Z,{options:u&&u.length>0?u.map((function(e){return{label:e.domain,value:e.slug}})):[],selected:[t.slug],defaultLabel:"Select Domain",updateField:function(e){return e&&e[0]&&g.push("".concat(e[0]))},multiple:!1,rounded:"rounded"})})]}),(0,s.jsxs)("div",{className:"flex w-full justify-between mt-4 lg:mt-0",children:[(0,s.jsxs)("ul",{className:" max-w-[270px] overflow-auto flex items-end text-sm relative top-[2px] lg:max-w-none",children:[(0,s.jsx)("li",{className:"".concat(R," ").concat("/domain/[slug]"===g.pathname?"bg-white border border-b-0 font-semibold":""),children:(0,s.jsx)(i(),{href:"/domain/".concat(t.slug),passHref:!0,children:(0,s.jsxs)("a",{className:"px-4 py-2 inline-block",children:[(0,s.jsx)(c.Z,{type:"tracking",color:"#999",classes:"hidden lg:inline-block"}),(0,s.jsx)("span",{className:"text-xs lg:text-sm lg:ml-2",children:"Tracking"})]})})}),(0,s.jsx)("li",{className:"".concat(R," ").concat("/domain/console/[slug]"===g.pathname?"bg-white border border-b-0 font-semibold":""),children:(0,s.jsx)(i(),{href:"/domain/console/".concat(t.slug),passHref:!0,children:(0,s.jsxs)("a",{className:"px-4 py-2 inline-block",children:[(0,s.jsx)(c.Z,{type:"google",size:13,classes:"hidden lg:inline-block"}),(0,s.jsx)("span",{className:"text-xs lg:text-sm lg:ml-2",children:"Discover"}),(0,s.jsx)(c.Z,{type:"help",size:14,color:"#aaa",classes:"ml-2 hidden lg:inline-block",title:"Discover Keywords you already Rank For"})]})})}),(0,s.jsx)("li",{className:"".concat(R," ").concat("/domain/insight/[slug]"===g.pathname?"bg-white border border-b-0 font-semibold":""),children:(0,s.jsx)(i(),{href:"/domain/insight/".concat(t.slug),passHref:!0,children:(0,s.jsxs)("a",{className:"px-4 py-2 inline-block",children:[(0,s.jsx)(c.Z,{type:"google",size:13,classes:"hidden lg:inline-block"}),(0,s.jsx)("span",{className:"text-xs lg:text-sm lg:ml-2",children:"Insight"}),(0,s.jsx)(c.Z,{type:"help",size:14,color:"#aaa",classes:"ml-2 hidden lg:inline-block",title:"Insight for Google Search Console Data"})]})})}),(0,s.jsx)("li",{className:"".concat(R," ").concat("/domain/ideas/[slug]"===g.pathname?"bg-white border border-b-0 font-semibold":""),children:(0,s.jsx)(i(),{href:"/domain/ideas/".concat(t.slug),passHref:!0,children:(0,s.jsxs)("a",{className:"px-4 py-2 inline-block",children:[(0,s.jsx)(c.Z,{type:"adwords",size:13,classes:"hidden lg:inline-block"}),(0,s.jsx)("span",{className:"text-xs lg:text-sm lg:ml-2",children:"Ideas"}),(0,s.jsx)(c.Z,{type:"help",size:14,color:"#aaa",classes:"ml-2 hidden lg:inline-block",title:"Get Keyword Ideas for this domain from Google Ads"})]})})})]}),(0,s.jsxs)("div",{className:"flex mb-0 lg:mb-1 lg:mt-3",children:[!Z&&(0,s.jsx)("button",{className:"".concat(S," lg:hidden"),onClick:function(){return j(!v)},children:(0,s.jsx)(c.Z,{type:"dots",size:20})}),Z&&(0,s.jsx)("button",{className:"".concat(S," lg:hidden invisible"),children:"x"}),(0,s.jsxs)("div",{className:"hidden w-40 ml-[-70px] lg:block absolute mt-10 bg-white border border-gray-100 z-40 rounded \n            lg:z-auto lg:relative lg:mt-0 lg:border-0 lg:w-auto lg:bg-transparent",style:{display:v?"block":void 0},children:[!Z&&(0,s.jsxs)("button",{className:"domheader_action_button relative ".concat(S),"aria-pressed":"false",onClick:function(){return m()},children:[(0,s.jsx)(c.Z,{type:"download",size:20}),(0,s.jsx)("i",{className:"".concat(D),children:"Export as csv"})]}),!k&&!Z&&!C&&(0,s.jsxs)("button",{className:"domheader_action_button relative ".concat(S," lg:ml-3"),"aria-pressed":"false",onClick:function(){return _({ids:[],domain:t.domain})},children:[(0,s.jsx)(c.Z,{type:"reload",size:14}),(0,s.jsx)("i",{className:"".concat(D),children:"Reload All Serps"})]}),(0,s.jsxs)("button",{"data-testid":"show_domain_settings",className:"domheader_action_button relative ".concat(S," lg:ml-3"),"aria-pressed":"false",onClick:function(){return a(!0)},children:[(0,s.jsx)(c.Z,{type:"settings",size:20}),(0,s.jsx)("i",{className:"".concat(D),children:"Domain Settings"})]})]}),!k&&!Z&&!C&&(0,s.jsxs)("button",{"data-testid":"add_keyword",className:"ml-2 inline-block text-blue-700 font-bold text-sm lg:px-4 lg:py-2",onClick:function(){return n(!0)},children:[(0,s.jsx)("span",{className:"text-center leading-4 mr-2 inline-block rounded-full w-7 h-7 pt-1 bg-blue-700 text-white font-bold text-lg",children:"+"}),(0,s.jsx)("i",{className:" not-italic hidden lg:inline-block",children:"Add Keyword"})]}),k&&(0,s.jsxs)("div",{className:"text-xs pl-4 ml-2 border-l border-gray-200 relative",children:[(0,s.jsxs)("span",{className:"block cursor-pointer py-3",onClick:function(){return N(!w)},children:[(0,s.jsx)(c.Z,{type:"date",size:13,classes:"mr-1"})," ",z(x)]}),w&&(0,s.jsx)("div",{className:"absolute w-24 z-50 mt-0 right-0 bg-white border border-gray-200 rounded text-center",children:["threeDays","sevenDays","thirtyDays"].map((function(e){return(0,s.jsxs)("button",{className:"".concat("px-3 py-2 block w-full"," ").concat(x===e?" bg-indigo-100 text-indigo-600":""),onClick:function(){N(!1),p&&p(e)},children:["Last ",z(e)]},e)}))})]}),C&&(0,s.jsxs)("button",{"data-testid":"load_ideas",className:"ml-2 text-blue-700 font-bold text-sm flex items-center lg:px-4 lg:py-2",onClick:function(){return b&&b()},children:[(0,s.jsx)("span",{className:"text-center leading-4 mr-2 inline-block rounded-full w-7 h-7 pt-1 bg-blue-700 text-white font-bold text-lg",children:(0,s.jsx)(c.Z,{type:"reload",size:12})}),(0,s.jsx)("i",{className:" not-italic hidden lg:inline-block",children:"Load Ideas"})]})]})]})]})}},9338:function(e,t,n){var s=n(6042),l=n(9396),o=n(5893),a=n(1163),i=n(7294),r=n(1015),c=n(6561),d=n(6733),m=n(4541),u=n(5924);t.Z=function(e){var t,n,h,x,p,b=e.domain,g=e.closeModal,f=(0,a.useRouter)(),v=(0,i.useState)("notification"),j=v[0],y=v[1],w=(0,i.useState)(!1),N=w[0],_=w[1],k=(0,i.useState)({type:"",msg:""}),Z=k[0],C=k[1],z=(0,i.useState)((function(){return{notification_interval:b&&b.notification_interval?b.notification_interval:"never",notification_emails:b&&b.notification_emails?b.notification_emails:"",search_console:b&&b.search_console?JSON.parse(b.search_console):{property_type:"domain",url:"",client_email:"",private_key:""}}})),S=z[0],D=z[1],R=(0,d.gk)((function(){return g(!1)})),E=R.mutate,L=R.error,A=R.isLoading,P=(0,d.Js)((function(){g(!1),f.push("/domains")})).mutate;(0,d.Do)(f,b&&b.domain?b.domain:"",(function(e){var t=e.search_console&&JSON.parse(e.search_console);D((0,l.Z)((0,s.Z)({},S),{search_console:t||S.search_console}))}));var I="inline-block px-4 py-2 rounded-md mr-3 cursor-pointer text-sm select-none z-10\n                     text-gray-600 border border-b-0 relative top-[1px] rounded-b-none";return(0,o.jsxs)("div",{children:[(0,o.jsxs)(c.Z,{closeModal:function(){return g(!1)},title:"Domain Settings",width:"[500px]",verticalCenter:"searchconsole"===j,children:[(0,o.jsxs)("div",{"data-testid":"domain_settings",className:" text-sm",children:[(0,o.jsx)("div",{className:" mt-3 mb-5 border border-slate-200 px-2 py-4 pb-0 relative left-[-20px] w-[calc(100%+40px)] border-l-0 border-r-0 bg-[#f8f9ff]",children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{className:"".concat(I," ").concat("notification"===j?" bg-white text-blue-600 border-slate-200":"border-transparent"," "),onClick:function(){return y("notification")},children:[(0,o.jsx)(r.Z,{type:"email"})," Notification"]}),(0,o.jsxs)("li",{className:"".concat(I," ").concat("searchconsole"===j?" bg-white text-blue-600 border-slate-200":"border-transparent"),onClick:function(){return y("searchconsole")},children:[(0,o.jsx)(r.Z,{type:"google"})," Search Console"]})]})}),(0,o.jsxs)("div",{children:["notification"===j&&(0,o.jsx)("div",{className:"mb-4 flex justify-between items-center w-full",children:(0,o.jsx)(m.Z,{label:"Notification Emails",onChange:function(e){return D((0,l.Z)((0,s.Z)({},S),{notification_emails:e}))},value:S.notification_emails||"",placeholder:"Your Emails"})}),"searchconsole"===j&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"mb-4 flex justify-between items-center w-full",children:[(0,o.jsx)("label",{className:"mb-2 font-semibold inline-block text-sm text-gray-700 capitalize",children:"Property Type"}),(0,o.jsx)(u.Z,{options:[{label:"Domain",value:"domain"},{label:"URL",value:"url"}],selected:[(null===(t=S.search_console)||void 0===t?void 0:t.property_type)||"domain"],defaultLabel:"Select Search Console Property Type",updateField:function(e){return D((0,l.Z)((0,s.Z)({},S),{search_console:(0,l.Z)((0,s.Z)({},S.search_console),{property_type:e[0]||"domain"})}))},multiple:!1,rounded:"rounded"})]}),"url"===(null===S||void 0===S||null===(n=S.search_console)||void 0===n?void 0:n.property_type)&&(0,o.jsx)("div",{className:"mb-4 flex justify-between items-center w-full",children:(0,o.jsx)(m.Z,{label:"Property URL (Required)",onChange:function(e){return D((0,l.Z)((0,s.Z)({},S),{search_console:(0,l.Z)((0,s.Z)({},S.search_console),{url:e})}))},value:(null===S||void 0===S||null===(h=S.search_console)||void 0===h?void 0:h.url)||"",placeholder:"Search Console Property URL. eg: https://mywebsite.com/"})}),(0,o.jsx)("div",{className:"mb-4 flex justify-between items-center w-full",children:(0,o.jsx)(m.Z,{label:"Search Console Client Email",onChange:function(e){return D((0,l.Z)((0,s.Z)({},S),{search_console:(0,l.Z)((0,s.Z)({},S.search_console),{client_email:e})}))},value:(null===S||void 0===S||null===(x=S.search_console)||void 0===x?void 0:x.client_email)||"",placeholder:"myapp@appspot.gserviceaccount.com"})}),(0,o.jsxs)("div",{className:"mb-4 flex flex-col justify-between items-center w-full",children:[(0,o.jsx)("label",{className:"mb-2 font-semibold block text-sm text-gray-700 capitalize w-full",children:"Search Console Private Key"}),(0,o.jsx)("textarea",{className:"w-full p-2 border border-gray-200 rounded mb-3 text-xs \n                              focus:outline-none h-[100px] focus:border-blue-200",value:(null===S||void 0===S||null===(p=S.search_console)||void 0===p?void 0:p.private_key)||"",placeholder:"-----BEGIN PRIVATE KEY-----/ssssaswdkihad....",onChange:function(e){return D((0,l.Z)((0,s.Z)({},S),{search_console:(0,l.Z)((0,s.Z)({},S.search_console),{private_key:e.target.value})}))}})]})]})]}),!A&&(null===L||void 0===L?void 0:L.message)&&(0,o.jsx)("div",{className:"w-full mt-4 p-3 text-sm bg-red-50 text-red-700",children:L.message}),!A&&(null===Z||void 0===Z?void 0:Z.msg)&&(0,o.jsx)("div",{className:"w-full mt-4 p-3 text-sm bg-red-50 text-red-700",children:Z.msg})]}),(0,o.jsxs)("div",{className:"flex justify-between border-t-[1px] border-gray-100 mt-8 pt-4 pb-0",children:[(0,o.jsxs)("button",{className:"text-sm font-semibold text-red-500",onClick:function(){return _(!0)},children:[(0,o.jsx)(r.Z,{type:"trash"})," Remove Domain"]}),(0,o.jsxs)("button",{className:"text-sm font-semibold py-2 px-5 rounded cursor-pointer bg-blue-700 text-white ".concat(A?"cursor-not-allowed":""),onClick:function(){return!A&&function(){var e=null;if(S.notification_emails){var t=S.notification_emails.split(",").find((function(e){return!1===/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,15})+$/.test(e)}));console.log("invalidEmails: ",t),t&&(e={type:"email",msg:"Invalid Email"})}e&&e.type?(console.log("Error!!!!!"),C(e),setTimeout((function(){C({type:"",msg:""})}),3e3)):b&&E({domainSettings:S,domain:b})}()},children:[A&&(0,o.jsx)(r.Z,{type:"loading"})," Update Settings"]})]})]}),N&&b&&(0,o.jsx)(c.Z,{closeModal:function(){return _(!1)},title:"Remove Domain ".concat(b.domain),children:(0,o.jsxs)("div",{className:"text-sm",children:[(0,o.jsx)("p",{children:"Are you sure you want to remove this Domain? Removing this domain will remove all its keywords."}),(0,o.jsxs)("div",{className:"mt-6 text-right font-semibold",children:[(0,o.jsx)("button",{className:" py-1 px-5 rounded cursor-pointer bg-indigo-50 text-slate-500 mr-3",onClick:function(){return _(!1)},children:"Cancel"}),(0,o.jsx)("button",{className:" py-1 px-5 rounded cursor-pointer bg-red-400 text-white",onClick:function(){return P(b)},children:"Remove"})]})]})})]})}}}]);