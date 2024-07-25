(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{3530:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/domain/ideas/[slug]",function(){return o(7731)}])},7731:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return C}});var t=o(5893),s=o(7294),d=o(9008),i=o.n(d),l=o(1163),a=o(1365),r=o(4539),u=o(9401),c=o(1917),m=o(602),v=o(9338),f=o(5057),x=o(2),g=o(6733),w=o(9870),h=o(6775),j=o(9818),p=o(828),y=o(5158),b=o(5924),k=o(1015),_=function(e){var n=e.onUpdate,o=e.settings,d=e.domain,i=e.searchConsoleConnected,a=void 0!==i&&i,r=e.adwordsConnected,u=void 0!==r&&r,c=(0,l.useRouter)(),m=(0,s.useState)((function(){return(null===o||void 0===o?void 0:o.seedType)||"auto"})),v=m[0],f=m[1],x=(0,s.useState)((function(){return(null===o||void 0===o?void 0:o.language.toString())||"1000"})),g=x[0],w=x[1],h=(0,s.useState)((function(){return(null===o||void 0===o?void 0:o.countries)||["US"]})),_=h[0],N=h[1],Z=(0,s.useState)((function(){return(null===o||void 0===o?void 0:o.keywords)&&Array.isArray(null===o||void 0===o?void 0:o.keywords)?null===o||void 0===o?void 0:o.keywords.join(","):""})),C=Z[0],S=Z[1],M=(0,j.np)(c,(function(){return n&&n()})),E=M.mutate,A=M.isLoading,L=(0,s.useMemo)((function(){var e=[{label:"Automatically from Website Content",value:"auto"},{label:"Based on currently tracked keywords",value:"tracking"},{label:"From Custom Keywords",value:"custom"}];return a&&e.splice(-2,0,{label:"Based on already ranking keywords (GSC)",value:"searchconsole"}),e}),[a]),O=(0,s.useMemo)((function(){return Object.keys(y.ZP).filter((function(e){return 0!==y.ZP[e][3]})).map((function(e){return{label:y.ZP[e][0],value:e}}))}),[]),I=(0,s.useMemo)((function(){return Object.entries(y.eW).map((function(e){var n=(0,p.Z)(e,2),o=n[0];return{label:n[1],value:o}}))}),[]),X="mb-2 font-semibold inline-block text-sm text-gray-700 capitalize w-full";return(0,t.jsx)("div",{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:X,children:"Get Keyword Ideas"}),(0,t.jsx)(b.Z,{selected:[v],options:L,defaultLabel:"Get Ideas Based On",updateField:function(e){return f(e[0])},fullWidth:!0,multiple:!1,rounded:"rounded"})]}),"custom"===v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:X,children:"Get Ideas from given Keywords (Max 20)"}),(0,t.jsx)("textarea",{className:"w-full border border-solid border-gray-300 focus:border-blue-100 p-3 rounded outline-none",value:C,onChange:function(e){return S(e.target.value)},placeholder:"keyword1, keyword2.."})]}),(0,t.jsx)("hr",{className:" my-4"})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:X,children:"Country"}),(0,t.jsx)(b.Z,{selected:_,options:O,defaultLabel:"All Countries",updateField:function(e){return N(e)},flags:!0,multiple:!1,fullWidth:!0,maxHeight:48,rounded:"rounded"})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:X,children:"Language"}),(0,t.jsx)(b.Z,{selected:[g],options:I,defaultLabel:"All Languages",updateField:function(e){return w(e[0])},rounded:"rounded",multiple:!1,fullWidth:!0,maxHeight:48})]}),(0,t.jsxs)("button",{className:"w-full py-2 px-5 mt-2 rounded bg-blue-700 text-white \n                  font-semibold ".concat(u?"cursor-pointer":" cursor-not-allowed opacity-40"),title:u?"":"Please Connect Ads account to generate Keyword Ideas..",onClick:function(){return!A&&u&&function(){var e="auto"!==v&&C?C.split(",").map((function(e){return e.trim()})):void 0;console.log("keywordPaylod :",C,e),E({seedType:v,language:g,domain:null===d||void 0===d?void 0:d.domain,domainSlug:null===d||void 0===d?void 0:d.slug,keywords:e,country:_[0]})}()},children:[(0,t.jsx)(k.Z,{type:A?"loading":"reload",size:12})," ",A?"Loading....":"Load Keyword Ideas"]})]})})},N=o(6561),Z=o(1602),C=function(){var e,n,o,d,p,y,b,k,C=(0,l.useRouter)(),S=(0,s.useState)(!1),M=S[0],E=S[1],A=(0,s.useState)(!1),L=A[0],O=A[1],I=(0,s.useState)(!1),X=I[0],F=I[1],K=(0,s.useState)(!1),P=K[0],W=K[1],G=(0,s.useState)(!1),U=G[0],T=G[1],q=(0,w.pX)().data,B=(0,g.fW)(C).data,z=(q&&(null===q||void 0===q||null===(e=q.settings)||void 0===e?void 0:e.adwords_refresh_token)&&(null===q||void 0===q||null===(n=q.settings)||void 0===n||n.adwords_developer_token),!!(null===q||void 0===q||null===(o=q.settings)||void 0===o?void 0:o.adwords_account_id)),D=!(!q||!(null===q||void 0===q||null===(d=q.settings)||void 0===d?void 0:d.search_console_integrated)),H=(0,j.WU)(C,z),R=H.data,V=H.isLoading,J=H.isError,Q=B&&B.domains||[],Y=(null===R||void 0===R||null===(p=R.data)||void 0===p?void 0:p.keywords)||[],$=(null===R||void 0===R||null===(y=R.data)||void 0===y?void 0:y.favorites)||[],ee=(null===R||void 0===R||null===(b=R.data)||void 0===b?void 0:b.settings)||void 0,ne=(0,s.useMemo)((function(){var e,n=null;return(null===B||void 0===B?void 0:B.domains)&&(null===(e=C.query)||void 0===e?void 0:e.slug)&&(n=B.domains.find((function(e){return e.slug===C.query.slug}))||null),n}),[C.query.slug,B]);return(0,t.jsxs)("div",{className:"Domain ",children:[ne&&ne.domain&&(0,t.jsx)(i(),{children:(0,t.jsxs)("title",{children:["".concat(ne.domain," - Keyword Ideas")," "]})}),(0,t.jsx)(u.Z,{showSettings:function(){return O(!0)},showAddModal:function(){return F(!0)}}),(0,t.jsxs)("div",{className:"flex w-full mx-auto",children:[(0,t.jsx)(r.Z,{domains:Q,showAddModal:function(){return F(!0)}}),(0,t.jsxs)("div",{className:"domain_kewywords px-16 pt-20 lg:px-8 lg:pt-16 w-full",children:[ne&&ne.domain?(0,t.jsx)(c.Z,{domain:ne,domains:Q,showAddModal:function(){return console.log("XXXXX")},showSettingsModal:E,exportCsv:function(){return(0,f.r)(U?$:Y,ne.domain)},showIdeaUpdateModal:function(){return W(!0)}}):(0,t.jsx)("div",{className:"w-full lg:h-[100px]"}),(0,t.jsx)(h.Z,{isLoading:V,noIdeasDatabase:J,domain:ne,keywords:Y,favorites:$,isAdwordsIntegrated:z,showFavorites:U,setShowFavorites:T})]})]}),(0,t.jsx)(a.Z,{in:X,timeout:300,classNames:"modal_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,t.jsx)(m.Z,{closeModal:function(){return F(!1)},domains:(null===B||void 0===B?void 0:B.domains)||[]})}),(0,t.jsx)(a.Z,{in:M,timeout:300,classNames:"modal_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,t.jsx)(v.Z,{domain:!!(M&&Q&&ne&&ne.domain)&&ne,closeModal:E})}),(0,t.jsx)(a.Z,{in:L,timeout:300,classNames:"settings_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,t.jsx)(x.Z,{closeSettings:function(){return O(!1)}})}),P&&(null===ne||void 0===ne?void 0:ne.domain)&&(0,t.jsx)(N.Z,{closeModal:function(){return W(!1)},title:"Load Keyword Ideas from Google Ads",verticalCenter:!0,children:(0,t.jsx)(_,{domain:ne,onUpdate:function(){return W(!1)},settings:ee,searchConsoleConnected:D,adwordsConnected:z})}),(0,t.jsx)(Z.Z,{currentVersion:(null===q||void 0===q||null===(k=q.settings)||void 0===k?void 0:k.version)?q.settings.version:""})]})}}},function(e){e.O(0,[757,358,670,389,15,971,726,594,775,774,888,179],(function(){return n=3530,e(e.s=n);var n}));var n=e.O();_N_E=n}]);