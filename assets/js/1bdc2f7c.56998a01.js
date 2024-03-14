/*! For license information please see 1bdc2f7c.56998a01.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[255282],{991595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(824246),a=n(511151);const i={id:"technical",title:"Technical FAQ",description:"General technical questions about Backstage."},r=void 0,s={id:"faq/technical",title:"Technical FAQ",description:"General technical questions about Backstage.",source:"@site/../docs/faq/technical.md",sourceDirName:"faq",slug:"/faq/technical",permalink:"/docs/faq/technical",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/faq/technical.md",tags:[],version:"current",frontMatter:{id:"technical",title:"Technical FAQ",description:"General technical questions about Backstage."},sidebar:"docs",previous:{title:"Product FAQ",permalink:"/docs/faq/product"},next:{title:"Backstage Accessibility",permalink:"/docs/accessibility/"}},c={},l=[{value:"What technology does Backstage use?",id:"what-technology-does-backstage-use",level:3},{value:"Why Material UI?",id:"why-material-ui",level:3},{value:"What is the end-to-end user flow? The happy path story.",id:"what-is-the-end-to-end-user-flow-the-happy-path-story",level:3},{value:"What is a &quot;plugin&quot; in Backstage?",id:"what-is-a-plugin-in-backstage",level:3},{value:"Why can&#39;t I dynamically install plugins without modifications to the app?",id:"why-cant-i-dynamically-install-plugins-without-modifications-to-the-app",level:3},{value:"Why are there no published Docker images or helm charts for Backstage?",id:"why-are-there-no-published-docker-images-or-helm-charts-for-backstage",level:3},{value:"Do I have to write plugins in TypeScript?",id:"do-i-have-to-write-plugins-in-typescript",level:3},{value:"How do I find out if a plugin already exists?",id:"how-do-i-find-out-if-a-plugin-already-exists",level:3},{value:"Which plugin is used the most at Spotify?",id:"which-plugin-is-used-the-most-at-spotify",level:3},{value:"Are you planning to have plugins baked into the repo? Or should they be developed in separate repos?",id:"are-you-planning-to-have-plugins-baked-into-the-repo-or-should-they-be-developed-in-separate-repos",level:3},{value:"Any plans for integrating with other repository managers, such as GitLab or Bitbucket?",id:"any-plans-for-integrating-with-other-repository-managers-such-as-gitlab-or-bitbucket",level:3},{value:"Who maintains Backstage?",id:"who-maintains-backstage",level:3},{value:"Does Spotify provide a managed version of Backstage?",id:"does-spotify-provide-a-managed-version-of-backstage",level:3},{value:"How secure is Backstage?",id:"how-secure-is-backstage",level:3},{value:"Does Backstage collect any information that is shared with Spotify?",id:"does-backstage-collect-any-information-that-is-shared-with-spotify",level:3},{value:"Can Backstage be used to build something other than a developer portal?",id:"can-backstage-be-used-to-build-something-other-than-a-developer-portal",level:3},{value:"How can I get involved?",id:"how-can-i-get-involved",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"what-technology-does-backstage-use",children:"What technology does Backstage use?"}),"\n",(0,o.jsxs)(t.p,{children:["Backstage is a large scale ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),"\napplication whose frontend parts use ",(0,o.jsx)(t.a,{href:"https://react.dev/",children:"React"})," and\n",(0,o.jsx)(t.a,{href:"https://material-ui.com/",children:"Material UI"}),", while the backend parts use\n",(0,o.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," and the ",(0,o.jsx)(t.a,{href:"https://expressjs.com/",children:"Express"}),"\nframework."]}),"\n",(0,o.jsx)(t.h3,{id:"why-material-ui",children:"Why Material UI?"}),"\n",(0,o.jsx)(t.p,{children:"The short answer is that's what we've been using in Backstage internally."}),"\n",(0,o.jsx)(t.p,{children:"The original decision was based on Google's Material Design being a thorough,\nwell thought out and complete design system, with many mature and powerful\nlibraries implemented in both the system itself and auxiliary components that we\nknew that we would like to use."}),"\n",(0,o.jsx)(t.p,{children:"It strikes a good balance between power, customizability, and ease of use. A\ncore focus of Backstage is to make plugin developers productive with as few\nhurdles as possible. Material UI lets plugin makers get going easily with both\nwell-known tech and a large flora of components."}),"\n",(0,o.jsx)(t.h3,{id:"what-is-the-end-to-end-user-flow-the-happy-path-story",children:"What is the end-to-end user flow? The happy path story."}),"\n",(0,o.jsx)(t.p,{children:"There are three main user profiles for Backstage: the integrator, the\ncontributor, and the software engineer."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"integrator"})," hosts the Backstage app and configures which plugins are\navailable to use in the app."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"contributor"})," adds functionality to the app by writing plugins."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"software engineer"})," uses the app's functionality and interacts with its\nplugins."]}),"\n",(0,o.jsx)(t.h3,{id:"what-is-a-plugin-in-backstage",children:'What is a "plugin" in Backstage?'}),"\n",(0,o.jsx)(t.p,{children:"Plugins are what provide the feature functionality in Backstage. They are used\nto integrate different systems into Backstage's frontend, so that the developer\ngets a consistent UX, no matter what tool or service is being accessed on the\nother side."}),"\n",(0,o.jsx)(t.p,{children:"Each plugin is treated as a self-contained web app and can include almost any\ntype of content. Plugins all use a common set of framework APIs and reusable UI\ncomponents. Plugins can fetch data either from the backend or an API exposed\nthrough the proxy."}),"\n",(0,o.jsxs)(t.p,{children:["Learn more about ",(0,o.jsx)(t.a,{href:"/docs/overview/what-is-backstage",children:"the different components"})," that\nmake up Backstage."]}),"\n",(0,o.jsx)(t.h3,{id:"why-cant-i-dynamically-install-plugins-without-modifications-to-the-app",children:"Why can't I dynamically install plugins without modifications to the app?"}),"\n",(0,o.jsx)(t.p,{children:"This decision is part of the core architecture and development flow of\nBackstage. Plugins have a lot of freedom in what they provide and how they are\nintegrated into the app, and it would therefore add a lot of complexity to allow\nplugins to be integrated via configuration the same way as they can be\nintegrated with code."}),"\n",(0,o.jsx)(t.p,{children:"By bundling all plugins and their dependencies into one app bundle it is also\npossible to do significant optimizations to the app load time by allowing\nplugins to share dependencies between each other when possible. This contributes\nto Backstage being fast, which is an important part of the user and developer\nexperience."}),"\n",(0,o.jsx)(t.h3,{id:"why-are-there-no-published-docker-images-or-helm-charts-for-backstage",children:"Why are there no published Docker images or helm charts for Backstage?"}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned above, Backstage is not a packaged service that you can use out of\nthe box. In order to get started with Backstage you need to use the\n",(0,o.jsx)(t.code,{children:"@backstage/create-app"})," package to create and customize your own Backstage app."]}),"\n",(0,o.jsxs)(t.p,{children:["In order to build a Docker image from your own app, you can use the\n",(0,o.jsx)(t.code,{children:"yarn build-image"})," command which is included out of the box in the app template.\nBy default this image will bundle up both the frontend and the backend into a\nsingle image that you can deploy using your favorite tooling."]}),"\n",(0,o.jsxs)(t.p,{children:["There are also some examples that can help you deploy Backstage to kubernetes in\nthe\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/contrib/kubernetes",children:"contrib"}),"\nfolder."]}),"\n",(0,o.jsx)(t.p,{children:"It is possible that example images will be provided in the future, which can be\nused to quickly try out a small subset of the functionality of Backstage, but\nthese would not be able to provide much more functionality on top of what you\ncan see on a demo site."}),"\n",(0,o.jsx)(t.h3,{id:"do-i-have-to-write-plugins-in-typescript",children:"Do I have to write plugins in TypeScript?"}),"\n",(0,o.jsx)(t.p,{children:"No, you can use JavaScript if you prefer. We want to keep the Backstage core\nAPIs in TypeScript, but aren't forcing it on individual plugins."}),"\n",(0,o.jsx)(t.h3,{id:"how-do-i-find-out-if-a-plugin-already-exists",children:"How do I find out if a plugin already exists?"}),"\n",(0,o.jsxs)(t.p,{children:["You can browse and search for all available plugins in the\n",(0,o.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugin Directory"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you can't find it in the directory, before you write a plugin\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+label%3Aplugin+",children:"search the plugin issues"}),"\nto see if is in the works. If no one's thought of it yet, great! Open a new\nissue as\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"a plugin suggestion"}),"\nand describe what your plugin will do. This will help coordinate our\ncontributors' efforts and avoid duplicating existing functionality."]}),"\n",(0,o.jsx)(t.h3,{id:"which-plugin-is-used-the-most-at-spotify",children:"Which plugin is used the most at Spotify?"}),"\n",(0,o.jsxs)(t.p,{children:['By far, our most-used plugin is our TechDocs plugin, which we use for creating\ntechnical documentation. Our philosophy at Spotify is to treat "docs like code",\nwhere you write documentation using the same workflow as you write your code.\nThis makes it easier to create, find, and update documentation.\n',(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"TechDocs is now open source."}),'\n(See also:\n"',(0,o.jsx)(t.a,{href:"#will-spotifys-internal-plugins-be-open-sourced-too",children:"Will Spotify's internal plugins be open sourced, too?"}),'"\nabove)']}),"\n",(0,o.jsx)(t.h3,{id:"are-you-planning-to-have-plugins-baked-into-the-repo-or-should-they-be-developed-in-separate-repos",children:"Are you planning to have plugins baked into the repo? Or should they be developed in separate repos?"}),"\n",(0,o.jsxs)(t.p,{children:["Contributors can add open source plugins to the plugins directory in\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"this monorepo"}),". Integrators can then\nconfigure which open source plugins are available to use in their instance of\nthe app. Open source plugins are downloaded as npm packages published in the\nopen source repository. While we encourage using the open source model, we know\nthere are cases where contributors might want to experiment internally or keep\ntheir plugins closed source. Contributors writing closed source plugins should\ndevelop them in the plugins directory in their own Backstage repository.\nIntegrators also configure closed source plugins locally from the monorepo."]}),"\n",(0,o.jsx)(t.h3,{id:"any-plans-for-integrating-with-other-repository-managers-such-as-gitlab-or-bitbucket",children:"Any plans for integrating with other repository managers, such as GitLab or Bitbucket?"}),"\n",(0,o.jsxs)(t.p,{children:["We chose GitHub because it is the tool that we are most familiar with, so that\nwill naturally lead to integrations for GitHub being developed at an early\nstage. Hosting this project on GitHub does not exclude integrations with\nalternatives, such as\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+GitLab",children:"GitLab"}),"\nor Bitbucket. We believe that in time there will be plugins that will provide\nfunctionality for these tools as well. Hopefully, contributed by the community!\nAlso note, implementations of Backstage can be hosted wherever you feel suits\nyour needs best."]}),"\n",(0,o.jsx)(t.h3,{id:"who-maintains-backstage",children:"Who maintains Backstage?"}),"\n",(0,o.jsxs)(t.p,{children:["Spotify will maintain the open source core, but we envision different parts of\nthe project being maintained by various companies and contributors. We also\nenvision a large, diverse ecosystem of open source plugins, which would be\nmaintained by their original authors/contributors or by the community. When it\ncomes to ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/deployment",children:"deployment"}),",\nthe system integrator (typically, the infrastructure team in your organization)\nmaintains Backstage in your own environment."]}),"\n",(0,o.jsxs)(t.p,{children:["For more information, see our\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/OWNERS.md",children:"Owners"})," and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/GOVERNANCE.md",children:"Governance"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"does-spotify-provide-a-managed-version-of-backstage",children:"Does Spotify provide a managed version of Backstage?"}),"\n",(0,o.jsxs)(t.p,{children:["No, this is not a service offering. We build the piece of software, and someone\nin your infrastructure team is responsible for\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/deployment",children:"deploying"})," and maintaining it."]}),"\n",(0,o.jsx)(t.h3,{id:"how-secure-is-backstage",children:"How secure is Backstage?"}),"\n",(0,o.jsxs)(t.p,{children:["We take security seriously. When it comes to packages and code we scan our\nrepositories periodically and update our packages to the latest versions. When\nit comes to deployment of Backstage within an organisation it depends on the\ndeployment and security setup in your organisation. Reach out to us on\n",(0,o.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," if you have specific queries."]}),"\n",(0,o.jsxs)(t.p,{children:["Please report sensitive security issues via Spotify's\n",(0,o.jsx)(t.a,{href:"https://hackerone.com/spotify",children:"bug-bounty program"})," rather than GitHub."]}),"\n",(0,o.jsx)(t.h3,{id:"does-backstage-collect-any-information-that-is-shared-with-spotify",children:"Does Backstage collect any information that is shared with Spotify?"}),"\n",(0,o.jsxs)(t.p,{children:["No. Backstage does not collect any telemetry from any third party using the\nplatform. Spotify, and the open source community, do have access to\n",(0,o.jsx)(t.a,{href:"https://github.com/features/insights",children:"GitHub Insights"}),", which contains\ninformation such as contributors, commits, traffic, and dependencies. Backstage\nis an open source framework, but you are in control of your own data. You control who\nhas access to any data you provide to your version of Backstage and who that\ndata is shared with."]}),"\n",(0,o.jsx)(t.h3,{id:"can-backstage-be-used-to-build-something-other-than-a-developer-portal",children:"Can Backstage be used to build something other than a developer portal?"}),"\n",(0,o.jsxs)(t.p,{children:["Yes. The core frontend framework could be used for building any large-scale web\napplication where (1) multiple teams are building separate parts of the app, and\n(2) you want the overall experience to be consistent. That being said, in\n",(0,o.jsx)(t.a,{href:"/docs/overview/roadmap",children:"Phase 2"})," of the project we will add features that are\nneeded for developer portals and systems for managing software ecosystems. Our\nambition will be to keep Backstage modular."]}),"\n",(0,o.jsx)(t.h3,{id:"how-can-i-get-involved",children:"How can I get involved?"}),"\n",(0,o.jsxs)(t.p,{children:["Jump right in! Come help us fix some of the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/contribute",children:"early bugs and good first issues"}),"\nor reach ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"a new milestone"}),".\nOr write an open source plugin for Backstage, like this\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse",children:"Lighthouse plugin"}),".\nSee all the ways you can\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"contribute here"}),".\nWe'd love to have you as part of the community."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var o=n(827378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,i={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:a,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function m(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var k=w.prototype=new m;k.constructor=w,g(k,b.prototype),k.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var a,i={},r=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(r=""+t.key),t)x.call(t,a)&&!_.hasOwnProperty(a)&&(i[a]=t[a]);var c=arguments.length-2;if(1===c)i.children=o;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===i[a]&&(i[a]=c[a]);return{$$typeof:n,type:e,key:r,ref:s,props:i,_owner:j.current}}function B(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,a,i,r){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return r=r(c=e),e=""===i?"."+T(c,0):i,v(r)?(a="",null!=e&&(a=e.replace(I,"$&/")+"/"),E(r,t,a,"",(function(e){return e}))):null!=r&&(B(r)&&(r=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,a+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(I,"$&/")+"/")+e)),t.push(r)),1;if(c=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var u=i+T(s=e[l],l);c+=E(s,t,a,u,r)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=E(s=s.value,t,a,u=i+T(s,l++),r);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var o=[],a=0;return E(e,o,"","",(function(e){return t.call(n,e,a++)})),o}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},W={transition:null},P={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:W,ReactCurrentOwner:j};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!B(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=r,t.PureComponent=w,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),i=e.key,r=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(r=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=o;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:n,type:e.type,key:i,ref:r,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=B,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=W.transition;W.transition={};try{e()}finally{W.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(667294);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);