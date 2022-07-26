"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[514,778],{5961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var a=n(959),r=n(5924),l=n(73),o=n(5822),i=n(9836),c=n(2540),s=n(8932),d=n(2127),m=n(9077),u=n(9220),b=n(8736),p=n(7060);const h="backToTopButton_hbuh",v="backToTopButtonShow_G1Ry";function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,s=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,h,t&&v),type:"button",onClick:n})}var E=n(602),_=n(2819),g=n(5259),k=n(7686),C=n(2081);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_mixC",S="collapseSidebarButtonIcon_k7mH";function Z(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(I,{className:S}))}var x=n(1237),T=n(4604),y=n(3509),L=Symbol("EmptyContext"),w=a.createContext(L);function F(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(w.Provider,{value:o},t)}var A=n(4253),P=n(5689),M=n(8002),B=n(779),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function R(e){var t=e.item,n=e.onItemClick,l=e.activePath,c=e.level,s=e.index,d=(0,T.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,B.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(t),E=(0,i._F)(t,l),_=(0,P.Mg)(h,l),k=(0,A.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=k.collapsed,N=k.setCollapsed,S=function(){var e=(0,a.useContext)(w);if(e===L)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=S.expandedItem,x=S.setExpandedItem,F=function(e){void 0===e&&(e=!I),x(e?null:s),N(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,y.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:I,updateCollapsed:F}),(0,a.useEffect)((function(){b&&Z&&Z!==s&&v&&N(!0)}),[b,Z,s,N,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(M.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),h?F(!1):(e.preventDefault(),F())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=f?f:"#":f},d),u),h&&b&&a.createElement(W,{categoryLabel:u,onClick:function(e){e.preventDefault(),F()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(Q,{items:m,tabIndex:I?-1:0,onItemClick:n,activePath:l,level:c+1})))}var D=n(8923),V=n(8995);const z="menuExternalLink_r2ex";var Y=["item","onItemClick","activePath","level","index"];function G(e){var t=e.item,n=e.onItemClick,l=e.activePath,c=e.level,s=(e.index,(0,T.Z)(e,Y)),d=t.href,m=t.label,u=t.className,b=(0,i._F)(t,l),p=(0,D.Z)(d);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",u),key:m},a.createElement(M.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!p&&z,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:n?function(){return n(t)}:void 0},s),m,!p&&a.createElement(V.Z,null)))}const K="menuHtmlItem_cc6S";function q(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[K,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}var J=["item"];function U(e){var t=e.item,n=(0,T.Z)(e,J);switch(t.type){case"category":return a.createElement(R,(0,C.Z)({item:t},n));case"html":return a.createElement(q,(0,C.Z)({item:t},n));default:return a.createElement(G,(0,C.Z)({item:t},n))}}var j=["items"];function O(e){var t=e.items,n=(0,T.Z)(e,j);return a.createElement(F,null,t.map((function(e,t){return a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n))})))}const Q=(0,a.memo)(O),X="menu_JRue",$="menuWithAnnouncementBar_FIWv";function ee(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,x.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",X,i&&$,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:n,activePath:t,level:1})))}const te="sidebar_Lbrm",ne="sidebarWithHideableNavbar_WjKx",ae="sidebarHidden_I_xF",re="sidebarLogo_dF8F";function le(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(te,c&&ne,o&&ae)},c&&a.createElement(k.Z,{tabIndex:-1,className:re}),a.createElement(ee,{path:t,sidebar:n}),s&&a.createElement(Z,{onClick:l}))}const oe=a.memo(le);var ie=n(9340),ce=n(3543),se=function(e){var t=e.sidebar,n=e.path,l=(0,ce.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function de(e){return a.createElement(ie.Zo,{component:se,props:e})}const me=a.memo(de);function ue(e){var t=(0,_.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(oe,e),r&&a.createElement(me,e))}const be="expandButton_tPJi",pe="expandButtonIcon_LnQ6";function he(e){var t=e.toggleSidebar;return a.createElement("div",{className:be,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:pe}))}const ve="docSidebarContainer_AVxG",fe="docSidebarContainerHidden_UNaa";function Ee(e){var t,n=e.children,r=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function _e(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],m=(0,a.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,ve,n&&fe),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve)&&n&&d(!0)}},a.createElement(Ee,null,a.createElement(ue,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&a.createElement(he,{toggleSidebar:m}))}const ge={docMainContainer:"docMainContainer_N5dC",docMainContainerEnhanced:"docMainContainerEnhanced_aY8K",docItemWrapperEnhanced:"docItemWrapperEnhanced__1ex"};function ke(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(ge.docMainContainer,(t||!l)&&ge.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,t&&ge.docItemWrapperEnhanced)},n))}const Ce="docPage_s0p_",Ie="docsWrapper_eTWT";function Ne(e){var t=e.children,n=(0,d.V)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.Z,{wrapperClassName:Ie},a.createElement(f,null),a.createElement("div",{className:Ce},n&&a.createElement(_e,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(ke,{hiddenSidebarContainer:l},t)))}var Se=n(6778),Ze=n(3437);function xe(e){var t=e.versionMetadata,n=(0,i.hI)(e);if(!n)return a.createElement(Se.default,null);var m=n.docElement,u=n.sidebarName,b=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ze.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(Ne,null,m)))))}},6778:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(959),r=n(9220),l=n(73),o=n(9077);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},8932:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(959),r=n(3509),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);