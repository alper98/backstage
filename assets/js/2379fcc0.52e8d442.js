/*! For license information please see 2379fcc0.52e8d442.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[952001],{21620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(785893),o=a(511151);const n={title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},i=void 0,r={permalink:"/blog/2020/06/22/backstage-service-catalog-alpha",source:"@site/blog/2020-06-22-backstage-service-catalog-alpha.mdx",title:"Backstage Service Catalog released in alpha",description:"TL;DR Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product.",date:"2020-06-22T00:00:00.000Z",formattedDate:"June 22, 2020",tags:[],readingTime:3.71,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund"}],frontMatter:{title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},unlisted:!1,prevItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"},nextItem:{title:"Starting Phase 2: The Service Catalog",permalink:"/blog/2020/05/22/phase-2-service-catalog"}},c={authorsImageUrls:[void 0]},l=[{value:"You asked, we listened",id:"you-asked-we-listened",level:2},{value:"What is the service catalog?",id:"what-is-the-service-catalog",level:2},{value:"What does alpha mean?",id:"what-does-alpha-mean",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"TL;DR"})," Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(641761).Z+"",width:"2354",height:"1427"})}),"\n",(0,s.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,s.jsx)(t.h2,{id:"you-asked-we-listened",children:"You asked, we listened"}),"\n",(0,s.jsxs)(t.p,{children:["When we ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog/2020/03/16/announcing-backstage",children:"released"})," Backstage as an open source project back in March, it didn\u2019t have all of the features that our internal version of Backstage has today. One of the main reasons we pushed to release it, despite it being in such a nascent stage, was so that we could start building the next phase of Backstage around the community\u2019s needs. We\u2019ve had hours of conversations with so many of you \u2014 thank you to everyone who has jumped on a video call, attended one of our working sessions, or watched our ",(0,s.jsx)(t.a,{href:"https://backstage.io/demos",children:"demo videos"})," and provided feedback via ",(0,s.jsx)(t.a,{href:"https://discord.com/invite/MUpMjP2",children:"Discord"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Today, we wanted to share what we\u2019ve learned from talking with many of you at companies that have shown interest in adopting Backstage. Here it is in short:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The problem of scaling autonomous engineering organisations without creating too much complexity is not a unique problem to Spotify."}),"\n",(0,s.jsx)(t.li,{children:'The "extensible frontend platform" that we focused on in the first phase of the project is not the only thing you are looking for.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With these insights we decided to re-focus our efforts towards the most requested feature: the Backstage Service Catalog."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-the-service-catalog",children:"What is the service catalog?"}),"\n",(0,s.jsxs)(t.p,{children:["The Backstage Service Catalog \u2014 actually, a software catalog, since it includes more than just services \u2014 is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem (services, websites, libraries, data pipelines, etc). The catalog is built around the concept of ",(0,s.jsx)(t.a,{href:"/docs/architecture-decisions/adrs-adr002",children:"metadata yaml files"})," stored together with the code, which are then harvested and visualized in Backstage."]}),"\n",(0,s.jsxs)(t.p,{children:["This was our pitch for the virtues of a service catalog when we first ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog/2020/05/22/phase-2-service-catalog",children:"announced"})," it as part of Phase 2:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"With a single catalog, Backstage makes it easy for a team to manage ten services \u2014 and makes it possible for your company to manage thousands of them. Because the system is practically self-organizing, it requires hardly any oversight from a governing or centralized team. Developers can get a uniform overview of all their software and related resources (such as server utilisation, data pipelines, pull request status), regardless of how and where they are running, as well as an easy way to onboard and manage those resources."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"On top of that, we have found that the service catalog is a great way to organise the infrastructure tools you use to manage the software as well. This is how Backstage creates one developer portal for all your tools. Rather than asking teams to jump between different infrastructure UI\u2019s (and incurring additional cognitive overhead each time they make a context switch), most of these tools can be organised around the entities in the catalog:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:a(219367).Z+"",width:"959",height:"276"})}),"\n",(0,s.jsx)(t.p,{children:"You\u2019ll be able to see many of these virtues in action with this alpha release \u2014 though, with some caveats, of course, since it is, after all, an alpha."}),"\n",(0,s.jsx)(t.h2,{id:"what-does-alpha-mean",children:"What does alpha mean?"}),"\n",(0,s.jsx)(t.p,{children:'Alpha is our shorthand for "we don\u2019t yet think Backstage is ready for production, but we\u2019d love for you to test it and provide us with feedback". However, you should be able to try out the functionality of the service catalog:'}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Register software components (",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples",children:"examples"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"See all components represented in the catalog"}),"\n",(0,s.jsx)(t.li,{children:"Search across all components"}),"\n",(0,s.jsx)(t.li,{children:"Get an overview of the metadata of the components"}),"\n",(0,s.jsx)(t.li,{children:"Click through and get more information about a specific component (service, website, etc)"}),"\n",(0,s.jsx)(t.li,{children:"See example tooling (plugins) that helps you manage the component"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As with most alpha releases, you should expect things to change quite a lot until we reach the beta stage (we\u2019re targeting the end of summer). There are obviously many things missing as well, but we wanted to start collecting feedback early and make it easier to see the end-to-end flow."}),"\n",(0,s.jsxs)(t.p,{children:["If you have feedback or questions, please open a ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"GitHub issue"}),", ping us on ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord chat"})," or send us an email at ",(0,s.jsx)(t.a,{href:"mailto:backstage-interest@spotify.com",children:"backstage-interest@spotify.com"})," \ud83d\ude4f"]}),"\n",(0,s.jsxs)(t.p,{children:["To get regular product updates and news about the Backstage community, sign up for the ",(0,s.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"Backstage newsletter"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,t,a)=>{var s=a(667294),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var s,n={},l=null,h=null;for(s in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:h,props:n,_owner:r.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},219367:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png"},641761:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var s=a(667294);const o={},n=s.createContext(o);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);