(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{4146:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/domain/console/[slug]",function(){return n(9860)}])},2381:function(e,t,n){"use strict";var s=n(6042),o=n(9396),i=n(5893),r=n(7294),a=n(1015),l=n(5924),c=n(5158);t.Z=function(e){var t=e.device,n=e.setDevice,d=e.filterKeywords,u=e.allTags,m=void 0===u?[]:u,p=e.keywords,h=void 0===p?[]:p,x=e.updateSort,f=e.sortBy,g=e.filterParams,v=e.isConsole,b=void 0!==v&&v,y=e.integratedConsole,w=void 0!==y&&y,j=e.SCcountries,k=void 0===j?[]:j,_=(0,r.useState)(!1),N=_[0],Z=_[1],C=(0,r.useState)(!1),F=C[0],S=C[1],E=(0,r.useMemo)((function(){var e={desktop:0,mobile:0};return h&&h.length>0&&h.forEach((function(t){"desktop"===t.device?e.desktop+=1:e.mobile+=1})),e}),[h]),K=(0,r.useMemo)((function(){var e=[];return Object.keys(c.ZP).forEach((function(t){(!b||b&&k.includes(t))&&e.push({label:c.ZP[t][0],value:t})})),e}),[k,b]),M=[{value:"pos_asc",label:"Top Position"},{value:"pos_desc",label:"Lowest Position"},{value:"date_asc",label:"Most Recent (Default)"},{value:"date_desc",label:"Oldest"},{value:"alpha_asc",label:"Alphabetically(A-Z)"},{value:"alpha_desc",label:"Alphabetically(Z-A)"},{value:"vol_asc",label:"Lowest Search Volume"},{value:"vol_desc",label:"Highest Search Volume"}];w&&(M.push({value:"imp_desc",label:"Most Viewed".concat(b?" (Default)":"")}),M.push({value:"imp_asc",label:"Least Viewed"}),M.push({value:"visits_desc",label:"Most Visited"}),M.push({value:"visits_asc",label:"Least Visited"})),b&&(M.splice(2,2),M.push({value:"ctr_asc",label:"Highest CTR"}),M.push({value:"ctr_desc",label:"Lowest CTR"}));var D="select-none cursor-pointer px-3 py-2 rounded-3xl mr-2",T="px-2 py-0 rounded-3xl bg-[#DEE1FC] text-[0.7rem] font-bold ml-1";return(0,i.jsxs)("div",{className:"domKeywords_filters py-4 px-6 flex justify-between text-sm text-gray-500 font-semibold border-b-[1px] lg:border-0",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{className:"flex text-xs",children:[(0,i.jsxs)("li",{"data-testid":"desktop_tab",className:"".concat(D," ").concat("desktop"===t?" bg-[#F8F9FF] text-gray-700":""),onClick:function(){return n("desktop")},children:[(0,i.jsx)(a.Z,{type:"desktop",classes:"top-[3px]",size:15}),(0,i.jsx)("i",{className:"hidden not-italic lg:inline-block ml-1",children:"Desktop"}),(0,i.jsx)("span",{className:"".concat(T),children:E.desktop})]}),(0,i.jsxs)("li",{"data-testid":"mobile_tab",className:"".concat(D," ").concat("mobile"===t?" bg-[#F8F9FF] text-gray-700":""),onClick:function(){return n("mobile")},children:[(0,i.jsx)(a.Z,{type:"mobile"}),(0,i.jsx)("i",{className:"hidden not-italic lg:inline-block ml-1",children:"Mobile"}),(0,i.jsx)("span",{className:"".concat(T),children:E.mobile})]})]})}),(0,i.jsxs)("div",{className:"flex gap-5",children:[(0,i.jsx)("div",{className:" lg:hidden",children:(0,i.jsx)("button",{"data-testid":"filter_button",className:"px-2 py-1 rounded ".concat(F?" bg-indigo-100 text-blue-700":""),title:"Filter",onClick:function(){return S(!F)},children:(0,i.jsx)(a.Z,{type:"filter",size:18})})}),(0,i.jsxs)("div",{className:"lg:flex gap-5 lg:visible ".concat(F?"visible mt-8 border absolute min-w-[0] rounded-lg max-h-96 bg-white z-50 w-52 right-2 p-4":"hidden"),children:[(0,i.jsx)("div",{className:"country_filter mb-2 lg:mb-0",children:(0,i.jsx)(l.Z,{selected:g.countries,options:K,defaultLabel:"All Countries",updateField:function(e){return t=e,d((0,o.Z)((0,s.Z)({},g),{countries:t}));var t},flags:!0})}),!b&&(0,i.jsx)("div",{className:"tags_filter mb-2 lg:mb-0",children:(0,i.jsx)(l.Z,{selected:g.tags,options:m.map((function(e){return{label:e,value:e}})),defaultLabel:"All Tags",updateField:function(e){return t=e,d((0,o.Z)((0,s.Z)({},g),{tags:t}));var t},emptyMsg:"No Tags Found for this Domain"})}),(0,i.jsx)("div",{className:"mb-2 lg:mb-0",children:(0,i.jsx)("input",{"data-testid":"filter_input",className:"border w-44 lg:w-36 focus:w-44 transition-all rounded-3xl p-1.5 px-4 outline-none ring-0 focus:border-indigo-200",type:"text",placeholder:"Filter Keywords...",onChange:function(e){return d((0,o.Z)((0,s.Z)({},g),{search:e.currentTarget.value}))},value:g.search})})]}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("button",{"data-testid":"sort_button",className:"px-2 py-1 rounded ".concat(N?" bg-indigo-100 text-blue-700":""),title:"Sort",onClick:function(){return Z(!N)},children:(0,i.jsx)(a.Z,{type:"sort",size:18})}),N&&(0,i.jsx)("ul",{"data-testid":"sort_options",className:"sort_options mt-2 border absolute w-48 min-w-[0] right-0 rounded-lg max-h-96 bg-white z-[9999] overflow-y-auto styled-scrollbar",children:M.map((function(e){return(0,i.jsx)("li",{className:(t=e.value,"cursor-pointer py-2 px-3 hover:bg-[#FCFCFF] ".concat(f===t?"bg-indigo-50 text-indigo-600 hover:bg-indigo-50":"")),onClick:function(){x(e.value),Z(!1)},children:e.label},e.value);var t}))})]})]})]})}},1399:function(e,t,n){"use strict";var s=n(5893),o=n(1015);t.Z=function(e){var t=e.position,n=void 0===t?0:t,i=e.type,r=void 0===i?"":i,a=e.updating,l=void 0!==a&&a;return l||0!==n?l&&"sc"!==r?(0,s.jsx)("span",{title:"Updating Keyword Position",children:(0,s.jsx)(o.Z,{type:"loading"})}):(0,s.jsx)(s.Fragment,{children:Math.round(n)}):(0,s.jsx)("span",{className:"text-gray-400",title:"Not in Top 100",children:">100"})}},4523:function(e,t,n){"use strict";var s=n(7294);t.Z=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,s.useEffect)((function(){n(!!window.matchMedia("only screen and (max-width: 760px)").matches)}),[]),[t]}},5002:function(e,t,n){"use strict";var s=n(7294);t.Z=function(e){(0,s.useEffect)((function(){return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[e])}},9860:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var s=n(6042),o=n(9815),i=n(5893),r=n(7294),a=n(9008),l=n.n(a),c=n(1163),d=n(1365),u=n(4539),m=n(9401),p=n(1917),h=n(602),x=n(9338),f=n(5057),g=n(2),v=n(6733),b=n(6566),y=n(9396),w=n(828),j=n(6501),k=n(670),_=n(4789),N=n(1015),Z=n(2381),C=n(5158),F=n(1399),S=n(5686),E=function(e){var t=e.keywordData,n=e.selected,s=e.lastItem,o=e.selectKeyword,r=e.style,a=e.isTracked,l=void 0!==a&&a,c=t.keyword,d=t.uid,u=t.position,m=t.country,p=t.impressions,h=t.ctr,x=t.clicks;return(0,i.jsxs)("div",{style:r,className:"keyword relative py-5 px-4 text-gray-600 border-b-[1px] border-gray-200 lg:py-4 lg:px-6 lg:border-0 \n      lg:flex lg:justify-between lg:items-center ".concat(n?" bg-indigo-50 keyword--selected":""," ").concat(s?"border-b-0":""),children:[(0,i.jsxs)("div",{className:" w-3/4 lg:flex-1 lg:basis-20 lg:w-auto font-semibold cursor-pointer",children:[(0,i.jsx)("button",{className:"p-0 mr-2 leading-[0px] inline-block rounded-sm pt-0 px-[1px] pb-[3px] border \n               ".concat(l||n?" bg-blue-700 border-blue-700 text-white":"text-transparent","\n               ").concat(l?"bg-gray-400 border-gray-400 cursor-default":""),onClick:function(){return!l&&o(d)},children:(0,i.jsx)(N.Z,{type:"check",size:10,title:l?"Already in Tracker":""})}),(0,i.jsxs)("a",{className:"py-2 hover:text-blue-600",children:[(0,i.jsx)("span",{className:"fflag fflag-".concat(m," w-[18px] h-[12px] mr-2"),title:C.ZP[m]&&C.ZP[m][0]}),c]})]}),(0,i.jsxs)("div",{className:"keyword_position absolute bg-[#f8f9ff] w-fit min-w-[50px] h-15 p-2 text-base mt-[-20px] rounded right-5 lg:relative\n          lg:bg-transparent lg:w-auto lg:h-auto lg:mt-0 lg:p-0 lg:text-sm lg:flex-1 lg:basis-40 lg:grow-0 lg:right-0 text-center font-semibold",children:[(0,i.jsx)(F.Z,{position:u}),(0,i.jsx)("span",{className:"block text-xs text-gray-500 lg:hidden",children:"Position"})]}),(0,i.jsxs)("div",{className:"keyword_imp text-center inline-block lg:flex-1 ",children:[(0,i.jsx)("span",{className:"mr-3 lg:hidden",children:(0,i.jsx)(N.Z,{type:"eye",size:14,color:"#999"})}),(0,S.y)(p)]}),(0,i.jsxs)("div",{className:"keyword_visits text-center inline-block mt-4 mr-5 ml-5 lg:flex-1 lg:m-0 max-w-[70px] lg:max-w-none lg:pr-5",children:[(0,i.jsx)("span",{className:"mr-3 lg:hidden",children:(0,i.jsx)(N.Z,{type:"cursor",size:14,color:"#999"})}),(0,S.y)(x)]}),(0,i.jsxs)("div",{className:"keyword_ctr text-center inline-block mt-4 relative lg:flex-1 lg:m-0 ",children:[(0,i.jsx)("span",{className:"mr-3 lg:hidden",children:(0,i.jsx)(N.Z,{type:"target",size:14,color:"#999"})}),new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(h),"%"]})]},c)},K=n(5002),M=n(4523),D=function(e){var t,n=e.domain,a=e.keywords,l=void 0===a?[]:a,d=e.isLoading,u=void 0===d||d,m=e.isConsoleIntegrated,p=void 0===m||m,h=(0,c.useRouter)(),x=(0,r.useState)("desktop"),f=x[0],g=x[1],v=(0,r.useState)([]),b=v[0],C=v[1],F=(0,r.useState)({countries:[],tags:[],search:""}),D=F[0],T=F[1],z=(0,r.useState)("imp_desc"),L=z[0],P=z[1],O=(0,r.useState)(500),A=O[0],I=O[1],V=(0,_.Hz)(h,(null===n||void 0===n?void 0:n.domain)||"").keywordsData,X=(null===V||void 0===V||null===(t=V.keywords)||void 0===t?void 0:t.map((function(e){return"".concat(e.keyword,":").concat(e.country,":").concat(e.device)})))||[],q=(0,_.Y9)((function(){n&&n.slug&&h.push("/domain/".concat(n.slug))})).mutate,R=(0,w.Z)((0,M.Z)(),1)[0];(0,K.Z)((function(){return I(window.innerHeight-(R?200:400))}));var B=(0,r.useMemo)((function(){var e=function(e,t){var n=[];return e.forEach((function(e){var s=0===t.countries.length||t.countries&&t.countries.includes(e.country),o=!t.search||t.search&&e.keyword.includes(t.search);s&&o&&n.push(e)})),n}(l.filter((function(e){return e.device===f})),D),t=function(e,t){var n=[],o=e.map((function(e){return(0,y.Z)((0,s.Z)({},e),{position:0===e.position?111:e.position})}));switch(t){case"imp_asc":n=e.sort((function(e,t){return e.impressions>t.impressions?1:-1}));break;case"imp_desc":n=e.sort((function(e,t){return t.impressions>e.impressions?1:-1}));break;case"visits_asc":n=e.sort((function(e,t){return e.clicks>t.clicks?1:-1}));break;case"visits_desc":n=e.sort((function(e,t){return t.clicks>e.clicks?1:-1}));break;case"ctr_asc":n=e.sort((function(e,t){return t.ctr-e.ctr}));break;case"ctr_desc":n=e.sort((function(e,t){return e.ctr-t.ctr}));break;case"pos_asc":n=(n=o.sort((function(e,t){return t.position<e.position?1:-1}))).map((function(e){return(0,y.Z)((0,s.Z)({},e),{position:111===e.position?0:e.position})}));break;case"pos_desc":n=(n=o.sort((function(e,t){return e.position<t.position?1:-1}))).map((function(e){return(0,y.Z)((0,s.Z)({},e),{position:111===e.position?0:e.position})}));break;case"alpha_desc":n=e.sort((function(e,t){return t.keyword>e.keyword?1:-1}));break;case"alpha_asc":n=e.sort((function(e,t){return e.keyword>t.keyword?1:-1}));break;default:return e}return n}(e,L);return function(e,t){var n={desktop:[],mobile:[]};return e.forEach((function(e){e.device===t&&n[t].push(e)})),n}(t,f)}),[l,f,D,L]),G=(0,r.useMemo)((function(){var e={};return Object.keys(B).forEach((function(t){B[t].forEach((function(t){var n=t.country;e[n]||(e[n]={keywords:0,impressions:0,visits:0}),e[n].keywords+=1,e[n].visits+=t.clicks||0,e[n].impressions+=t.impressions||0}))})),e}),[B]),U=(0,r.useMemo)((function(){var e=B[f].length,t={position:0,impressions:0,visits:0,ctr:0};return B[f].forEach((function(e){t.position+=e.position,t.impressions+=e.impressions,t.visits+=e.clicks,t.ctr+=e.ctr})),(0,y.Z)((0,s.Z)({},t),{position:Math.round(t.position/e),ctr:t.ctr/e})}),[B,f]),H=function(e){console.log("Select Keyword: ",e);var t=(0,o.Z)(b).concat([e]);b.includes(e)&&(t=b.filter((function(t){return t!==e}))),C(t)},Q=b.length===B[f].length;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"domKeywords flex flex-col bg-[white] rounded-md text-sm border mb-4",children:[b.length>0&&(0,i.jsx)("div",{className:"font-semibold text-sm py-4 px-8 text-gray-500 ",children:(0,i.jsx)("ul",{className:"",children:(0,i.jsx)("li",{className:"inline-block mr-4",children:(0,i.jsxs)("a",{className:"block px-2 py-2 cursor-pointer hover:text-indigo-600",onClick:function(){return function(){var e=[];l.forEach((function(t){if(b.includes(t.uid)){var s=t.keyword,o=t.country;e.push({keyword:s,device:f,country:o,domain:(null===n||void 0===n?void 0:n.domain)||"",tags:""})}})),q(e),C([])}()},children:[(0,i.jsx)("span",{className:" bg-indigo-100 text-blue-700 px-1 rounded font-black",children:"+"})," Add Keywords to Tracker"]})})})}),0===b.length&&(0,i.jsx)(Z.Z,{allTags:[],filterParams:D,filterKeywords:function(e){return T(e)},updateSort:function(e){return P(e)},sortBy:L,keywords:l,device:f,setDevice:g,isConsole:!0,integratedConsole:p,SCcountries:Object.keys(G)}),(0,i.jsx)("div",{className:"domkeywordsTable domkeywordsTable--sckeywords styled-scrollbar w-full overflow-auto min-h-[60vh]",children:(0,i.jsxs)("div",{className:" lg:min-w-[800px]",children:[(0,i.jsxs)("div",{className:"domKeywords_head domKeywords_head--".concat(L," hidden lg:flex p-3 px-6 bg-[#FCFCFF]\n                   text-gray-600 justify-between items-center font-semibold border-y"),children:[(0,i.jsxs)("span",{className:"domKeywords_head_keyword flex-1 basis-20 w-auto ",children:[B[f].length>0&&(0,i.jsx)("button",{className:"p-0 mr-2 leading-[0px] inline-block rounded-sm pt-0 px-[1px] pb-[3px]  border border-slate-300 \n                           ".concat(Q?" bg-blue-700 border-blue-700 text-white":"text-transparent"),onClick:function(){return C(Q?[]:B[f].map((function(e){return e.uid})))},children:(0,i.jsx)(N.Z,{type:"check",size:10})}),"Keyword"]}),(0,i.jsx)("span",{className:"domKeywords_head_position flex-1 basis-40 grow-0 text-center",children:"Position"}),(0,i.jsx)("span",{className:"domKeywords_head_imp flex-1 text-center",children:"Impressions"}),(0,i.jsx)("span",{className:"domKeywords_head_visits flex-1 text-center",children:"Visits"}),(0,i.jsx)("span",{className:"domKeywords_head_ctr flex-1 text-center",children:"CTR"})]}),(0,i.jsxs)("div",{className:"domKeywords_keywords border-gray-200 min-h-[55vh] relative","data-domain":null===n||void 0===n?void 0:n.domain,children:[!u&&B[f]&&B[f].length>0&&(0,i.jsx)(k.t7,{innerElementType:"div",itemData:B[f],itemCount:B[f].length,itemSize:R?100:57,height:A,width:"100%",className:"styled-scrollbar",children:function(e){var t=e.data,n=e.index,s=e.style,o=t[n];return(0,i.jsx)(E,{style:s,selected:b.includes(o.uid),selectKeyword:H,keywordData:o,isTracked:X.includes("".concat(o.keyword,":").concat(o.country,":").concat(o.device)),lastItem:n===B[f].length-1},o.uid)}}),!u&&B[f]&&B[f].length>0&&(0,i.jsxs)("div",{className:"domKeywords_head hidden lg:flex p-3 px-6 bg-[#FCFCFF]\n                           text-gray-600 justify-between items-center font-semibold border-y",children:[(0,i.jsxs)("span",{className:"domKeywords_head_keyword flex-1 basis-20 w-auto font-semibold",children:[B[f].length," ",f," Keywords"]}),(0,i.jsx)("span",{className:"domKeywords_head_position flex-1 basis-40 grow-0 text-center",children:U.position}),(0,i.jsx)("span",{className:"domKeywords_head_imp flex-1 text-center",children:(0,S.y)(U.impressions)}),(0,i.jsx)("span",{className:"domKeywords_head_visits flex-1 text-center",children:(0,S.y)(U.visits)}),(0,i.jsxs)("span",{className:"domKeywords_head_ctr flex-1 text-center",children:[new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(U.ctr),"%"]})]}),p&&!u&&0===B[f].length&&(0,i.jsx)("p",{className:" p-9 pt-[10%] text-center text-gray-500",children:"Could Not fetch Keyword Data for this Domain from Google Search Console."}),p&&u&&(0,i.jsx)("p",{className:" p-9 pt-[10%] text-center text-gray-500",children:"Loading Keywords..."}),!p&&(0,i.jsxs)("p",{className:" p-9 pt-[10%] text-center text-gray-500",children:["Google Search Console has not been Integrated yet. Please follow ",(0,i.jsx)("a",{className:"text-indigo-600 underline",href:"https://docs.serpbear.com/miscellaneous/integrate-google-search-console",target:"_blank",rel:"noreferrer",children:"These Steps"})," to integrate Google Search Data for this Domain."]})]})]})})]}),(0,i.jsx)(j.x7,{position:"bottom-center",containerClassName:"react_toaster"})]})},T=n(9870),z=n(1602),L=function(){var e,t,n,a=(0,c.useRouter)(),y=(0,r.useState)(!1),w=y[0],j=y[1],k=(0,r.useState)(!1),_=k[0],N=k[1],Z=(0,r.useState)(!1),C=Z[0],F=Z[1],S=(0,r.useState)("thirtyDays"),E=S[0],K=S[1],M=(0,T.pX)().data,L=(0,v.fW)(a).data,P=!(!M||!(null===M||void 0===M||null===(e=M.settings)||void 0===e?void 0:e.search_console_integrated)),O=(0,b.aK)(a,!!(null===L||void 0===L||null===(t=L.domains)||void 0===t?void 0:t.length)&&P),A=O.data,I=O.isLoading,V=O.isFetching,X=L&&L.domains||[],q=(0,r.useMemo)((function(){return(null===A||void 0===A?void 0:A.data)&&A.data[E]?A.data[E]:[]}),[A,E]),R=(0,r.useMemo)((function(){return q.reduce((function(e,t){var n="".concat(t.device,"-").concat(t.country,"-").concat(t.keyword),s=e.get(n)||0;return e.set(n,s+1)}),new Map)||[]}),[q]),B=(0,r.useMemo)((function(){return(0,o.Z)(q.reduce((function(e,t){var n="".concat(t.device,"-").concat(t.country,"-").concat(t.keyword),o=e.get(n)||(0,s.Z)({},t,{clicks:0,impressions:0,ctr:0,position:0});return o.clicks+=t.clicks,o.impressions+=t.impressions,o.ctr=t.ctr+o.ctr,o.position=t.position+o.position,e.set(n,o)}),new Map).values())}),[q]),G=(0,r.useMemo)((function(){return(0,o.Z)(B.map((function(e){var t="".concat(e.device,"-").concat(e.country,"-").concat(e.keyword),n=(null===R||void 0===R?void 0:R.get(t))||0;return(0,s.Z)({},e,{ctr:Math.round(e.ctr/n*100)/100,position:Math.round(e.position/n)})})))}),[B,R]),U=(0,r.useMemo)((function(){var e,t=null;return(null===L||void 0===L?void 0:L.domains)&&(null===(e=a.query)||void 0===e?void 0:e.slug)&&(t=L.domains.find((function(e){return e.slug===a.query.slug}))||null),t}),[a.query.slug,L]),H=(0,r.useMemo)((function(){var e=(null===U||void 0===U?void 0:U.search_console)?JSON.parse(U.search_console):{};return!(!(null===e||void 0===e?void 0:e.client_email)||!(null===e||void 0===e?void 0:e.private_key))}),[U]);return(0,i.jsxs)("div",{className:"Domain ",children:[U&&U.domain&&(0,i.jsx)(l(),{children:(0,i.jsxs)("title",{children:["".concat(U.domain," - ZeniBot")," "]})}),(0,i.jsx)(m.Z,{showSettings:function(){return N(!0)},showAddModal:function(){return F(!0)}}),(0,i.jsxs)("div",{className:"flex w-full mx-auto",children:[(0,i.jsx)(u.Z,{domains:X,showAddModal:function(){return F(!0)}}),(0,i.jsxs)("div",{className:"domain_kewywords px-16 pt-20 lg:px-8 lg:pt-16 w-full",children:[U&&U.domain?(0,i.jsx)(p.Z,{domain:U,domains:X,showAddModal:function(){return console.log("XXXXX")},showSettingsModal:j,exportCsv:function(){return(0,f.Z)(G,U.domain,E)},scFilter:E,setScFilter:function(e){return K(e)}}):(0,i.jsx)("div",{className:"w-full lg:h-[100px]"}),(0,i.jsx)(D,{isLoading:I||V,domain:U,keywords:G,isConsoleIntegrated:P||H})]})]}),(0,i.jsx)(d.Z,{in:C,timeout:300,classNames:"modal_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,i.jsx)(h.Z,{closeModal:function(){return F(!1)},domains:(null===L||void 0===L?void 0:L.domains)||[]})}),(0,i.jsx)(d.Z,{in:w,timeout:300,classNames:"modal_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,i.jsx)(x.Z,{domain:!!(w&&X&&U&&U.domain)&&U,closeModal:j})}),(0,i.jsx)(d.Z,{in:_,timeout:300,classNames:"settings_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,i.jsx)(g.Z,{closeSettings:function(){return N(!1)}})}),(0,i.jsx)(z.Z,{currentVersion:(null===M||void 0===M||null===(n=M.settings)||void 0===n?void 0:n.version)?M.settings.version:""})]})}},6566:function(e,t,n){"use strict";n.d(t,{DL:function(){return u},aK:function(){return l}});var s=n(7568),o=n(7582),i=n(8767);function r(e){return a.apply(this,arguments)}function a(){return(a=(0,s.Z)((function(e){var t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(window.location.origin,"/api/searchconsole?domain=").concat(e.query.slug),{method:"GET"})];case 1:if((t=n.sent()).status>=400&&t.status<600)throw 401===t.status&&(console.log("Unauthorized!!"),e.push("/login")),new Error("Bad response from server");return[2,t.json()]}}))}))).apply(this,arguments)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,i.useQuery)("sckeywords",(function(){return e.query.slug&&r(e)}),{enabled:t})}function c(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((function(e){var t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(window.location.origin,"/api/insight?domain=").concat(e.query.slug),{method:"GET"})];case 1:if((t=n.sent()).status>=400&&t.status<600)throw 401===t.status&&(console.log("Unauthorized!!"),e.push("/login")),new Error("Bad response from server");return[2,t.json()]}}))}))).apply(this,arguments)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,i.useQuery)("scinsight",(function(){return e.query.slug&&c(e)}),{enabled:t})}}},function(e){e.O(0,[358,670,15,971,726,594,774,888,179],(function(){return t=4146,e(e.s=t);var t}));var t=e.O();_N_E=t}]);