(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{8830:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return t(688)}])},688:function(e,n,t){"use strict";t.r(n);var s=t(828),l=t(5893),o=t(9008),a=t.n(o),i=t(1163),r=t(7294),d=t(1365),u=t(1015),c=t(9401),m=t(6775),x=t(5057),g=t(9818),v=t(9870),f=t(2),h=t(5924),b=t(5158),w=t(1602);n.default=function(){var e,n,t,o,p,j,y,N=(0,i.useRouter)(),_=(0,r.useState)(!1),k=_[0],Z=_[1],E=(0,r.useState)(!1),L=E[0],S=E[1],C=(0,r.useState)("1000"),A=C[0],F=C[1],O=(0,r.useState)("US"),P=O[0],I=O[1],K=(0,r.useState)(""),z=K[0],M=K[1],W=(0,v.pX)().data,R=(W&&(null===W||void 0===W||null===(e=W.settings)||void 0===e?void 0:e.adwords_refresh_token)&&(null===W||void 0===W||null===(n=W.settings)||void 0===n||n.adwords_developer_token),!!(null===W||void 0===W||null===(t=W.settings)||void 0===t?void 0:t.adwords_account_id)),T=(0,g.WU)(N,R),X=T.data,B=T.isLoading,G=T.isError,H=(0,g.np)(N),U=H.mutate,D=H.isLoading,V=(null===X||void 0===X||null===(o=X.data)||void 0===o?void 0:o.keywords)||[],q=(null===X||void 0===X||null===(p=X.data)||void 0===p?void 0:p.favorites)||[],J=(null===X||void 0===X||null===(j=X.data)||void 0===j?void 0:j.settings)||void 0||{},Q=J.country,Y=J.language,$=J.keywords;(0,r.useEffect)((function(){Q&&I(Q),Y&&F(Y.toString()),$&&M($.join(","))}),[Q,Y,$]);var ee=(0,r.useMemo)((function(){return Object.keys(b.ZP).filter((function(e){return 0!==b.ZP[e][3]})).map((function(e){return{label:b.ZP[e][0],value:e}}))}),[]),ne=(0,r.useMemo)((function(){return Object.entries(b.eW).map((function(e){var n=(0,s.Z)(e,2),t=n[0];return{label:n[1],value:t}}))}),[]),te="mb-2 font-semibold inline-block text-sm text-gray-700 capitalize w-full";return(0,l.jsxs)("div",{className:"Login",children:[(0,l.jsx)(a(),{children:(0,l.jsx)("title",{children:"Research Keywords - ZeniBot"})}),(0,l.jsx)(c.Z,{showSettings:function(){return Z(!0)},showAddModal:function(){return null}}),(0,l.jsxs)("div",{className:" w-full max-w-7xl mx-auto lg:flex lg:flex-row",children:[(0,l.jsxs)("div",{className:"sidebar w-full p-6 lg:pt-44 lg:w-1/5 lg:block lg:pr-0","data-testid":"sidebar",children:[(0,l.jsxs)("h3",{className:"hidden py-7 text-base font-bold text-blue-700 lg:block",children:[(0,l.jsx)("span",{className:" relative top-[3px] mr-1",children:(0,l.jsx)(u.Z,{type:"logo",size:24,color:"#364AFF"})})," ZeniBot"]}),(0,l.jsxs)("div",{className:"sidebar_menu domKeywords max-h-96 overflow-auto styled-scrollbar p-4\n                bg-white border border-gray-200 rounded lg:rounded-none lg:rounded-s lg:border-r-0",children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{className:te,children:"Generate Ideas from given Keywords (Max 20)"}),(0,l.jsx)("textarea",{className:"w-full border border-solid border-gray-300 focus:border-blue-100 p-3 rounded outline-none text-sm",value:z,onChange:function(e){return M(e.target.value)},placeholder:"keyword1, keyword2.."})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{className:te,children:"Country"}),(0,l.jsx)(h.Z,{selected:[P],options:ee,defaultLabel:"All Countries",updateField:function(e){return I(e[0])},flags:!0,multiple:!1,fullWidth:!0,maxHeight:48,rounded:"rounded"})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{className:te,children:"Language"}),(0,l.jsx)(h.Z,{selected:[A],options:ne,defaultLabel:"All Languages",updateField:function(e){return F(e[0])},rounded:"rounded",multiple:!1,fullWidth:!0,maxHeight:48})]}),(0,l.jsxs)("button",{className:"w-full py-2 px-5 mt-2 rounded bg-blue-700 text-white \n                  font-semibold ".concat(R?"cursor-pointer":" cursor-not-allowed opacity-40"),title:R?"":"Please Connect Google Ads account to generate Keyword Ideas..",onClick:function(){return!D&&R&&function(){var e=z?z.split(",").map((function(e){return e.trim()})):void 0;U({seedType:"custom",language:A,domain:"research",keywords:e,country:P})}()},children:[(0,l.jsx)(u.Z,{type:D?"loading":"download",size:14})," ",D?"Loading....":"Load Ideas"]})]})]}),(0,l.jsxs)("div",{className:"domain_kewywords px-5 lg:px-0 lg:pt-8 w-full",children:[(0,l.jsx)("div",{className:"domain_kewywords_head w-full ",children:(0,l.jsxs)("div",{className:" flex mt-12 mb-0 justify-between",children:[(0,l.jsx)("h1",{className:" font-bold mb-0 mt-0 pt-2 lg:text-xl lg:mb-6","data-testid":"domain-header",children:"Research Keywords"}),(0,l.jsxs)("button",{className:"domheader_action_button relative mb-3 \n                     ".concat("leading-6 inline-block px-2 py-2 text-gray-500 hover:text-gray-700"," ").concat(0===V.length?"cursor-not-allowed opacity-60":""),"aria-pressed":"false",onClick:function(){return(0,x.r)(L?q:V,"research")},children:[(0,l.jsx)(u.Z,{type:"download",size:20}),(0,l.jsx)("i",{className:"".concat("ml-2 text-sm not-italic lg:invisible lg:opacity-0"),children:"Export as csv"})]})]})}),(0,l.jsx)(m.Z,{isLoading:B,noIdeasDatabase:G,domain:null,keywords:V,favorites:q,isAdwordsIntegrated:R,showFavorites:L,setShowFavorites:S})]})]}),(0,l.jsx)(d.Z,{in:k,timeout:300,classNames:"settings_anim",unmountOnExit:!0,mountOnEnter:!0,children:(0,l.jsx)(f.Z,{closeSettings:function(){return Z(!1)}})}),(0,l.jsx)(w.Z,{currentVersion:(null===W||void 0===W||null===(y=W.settings)||void 0===y?void 0:y.version)?W.settings.version:""})]})}}},function(e){e.O(0,[757,358,670,389,15,971,726,775,774,888,179],(function(){return n=8830,e(e.s=n);var n}));var n=e.O();_N_E=n}]);