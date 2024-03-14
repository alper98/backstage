/*! For license information please see c4e9e64d.e7e6b0d8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[769837],{395793:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(824246),s=r(511151);const o={id:"plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node"},c=void 0,i={id:"reference/plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node",source:"@site/../docs/reference/plugin-techdocs-node.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node",permalink:"/docs/reference/plugin-techdocs-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-node.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node"}},d={},l=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-techdocs-node"})})]}),"\n",(0,t.jsx)(n.p,{children:"Common functionalities for TechDocs, to be shared between techdocs-backend plugin and techdocs-cli"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.directorypreparer",children:"DirectoryPreparer"})}),(0,t.jsx)(n.td,{children:"Preparer used to retrieve documentation files from a local directory"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.generators",children:"Generators"})}),(0,t.jsx)(n.td,{children:"Collection of docs generators"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparers",children:"Preparers"})}),(0,t.jsx)(n.td,{children:"Collection of docs preparers (dir and url)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publisher",children:"Publisher"})}),(0,t.jsxs)(n.td,{children:["Factory class to create a TechDocs publisher based on defined publisher type in app config. Uses ",(0,t.jsx)(n.code,{children:"techdocs.publisher.type"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsgenerator",children:"TechdocsGenerator"})}),(0,t.jsx)(n.td,{children:"Generates documentation files"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.urlpreparer",children:"UrlPreparer"})}),(0,t.jsx)(n.td,{children:"Preparer used to retrieve documentation files from a remote repository"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.docsbuildstrategy",children:"DocsBuildStrategy"})}),(0,t.jsx)(n.td,{children:"A strategy for when to build TechDocs locally, and when to skip building TechDocs (allowing for an external build)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase",children:"PublisherBase"})}),(0,t.jsx)(n.td,{children:"Base class for a TechDocs publisher (e.g. Local, Google GCS Bucket, AWS S3, etc.) The publisher handles publishing of the generated static files after the prepare and generate steps of TechDocs. It also provides APIs to communicate with the storage service."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsbuildsextensionpoint",children:"TechdocsBuildsExtensionPoint"})}),(0,t.jsx)(n.td,{children:"Extension point type for configuring Techdocs builds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsdocument",children:"TechDocsDocument"})}),(0,t.jsx)(n.td,{children:"TechDocs indexable document interface"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsgeneratorextensionpoint",children:"TechdocsGeneratorExtensionPoint"})}),(0,t.jsx)(n.td,{children:"Extension point type for configuring a custom Techdocs generator"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.getdocfilesfromrepository",children:"getDocFilesFromRepository"})}),(0,t.jsxs)(n.td,{children:["Returns a preparer response ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.getlocationforentity",children:"getLocationForEntity"})}),(0,t.jsx)(n.td,{children:"Returns a entity reference based on the TechDocs annotation type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.getmkdocsyml",children:"getMkdocsYml"})}),(0,t.jsx)(n.td,{children:"Finds and loads the contents of an mkdocs.yml, mkdocs.yaml file, a file with a specified name or an ad-hoc created file with minimal config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.getmkdocsyml",children:"getMkDocsYml"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.parsereferenceannotation",children:"parseReferenceAnnotation"})}),(0,t.jsx)(n.td,{children:"Returns a parset locations annotation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsbuildsextensionpoint",children:"techdocsBuildsExtensionPoint"})}),(0,t.jsx)(n.td,{children:"Extension point for configuring Techdocs builds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsgeneratorextensionpoint",children:"techdocsGeneratorExtensionPoint"})}),(0,t.jsx)(n.td,{children:"Extension point for configuring a custom Techdocs generator"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.transformdirlocation",children:"transformDirLocation"})}),(0,t.jsxs)(n.td,{children:["TechDocs references of type ",(0,t.jsx)(n.code,{children:"dir"})," are relative the source location of the entity. This function transforms relative references to absolute ones, based on the location the entity was ingested from. If the entity was registered by a ",(0,t.jsx)(n.code,{children:"url"})," location, it returns a ",(0,t.jsx)(n.code,{children:"url"})," location with a resolved target that points to the targeted subfolder. If the entity was registered by a ",(0,t.jsx)(n.code,{children:"file"})," location, it returns an absolute ",(0,t.jsx)(n.code,{children:"dir"})," location."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.etag",children:"ETag"})}),(0,t.jsx)(n.td,{children:"A unique identifier of the tree blob, usually the commit SHA or etag from the target."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.generatorbase",children:"GeneratorBase"})}),(0,t.jsx)(n.td,{children:"Generates documentation files"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.generatorbuilder",children:"GeneratorBuilder"})}),(0,t.jsx)(n.td,{children:"The generator builder holds the generator ready for run time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.generatoroptions",children:"GeneratorOptions"})}),(0,t.jsx)(n.td,{children:"Options for building generators"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.generatorrunoptions",children:"GeneratorRunOptions"})}),(0,t.jsx)(n.td,{children:"The values that the generator will receive."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.migraterequest",children:"MigrateRequest"})}),(0,t.jsx)(n.td,{children:"TechDocs entity triplet migration request"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.parsedlocationannotation",children:"ParsedLocationAnnotation"})}),(0,t.jsx)(n.td,{children:"Parsed location annotation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparerbase",children:"PreparerBase"})}),(0,t.jsx)(n.td,{children:"Definition of a TechDocs preparer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparerbuilder",children:"PreparerBuilder"})}),(0,t.jsx)(n.td,{children:"Definition for a TechDocs preparer builder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparerconfig",children:"PreparerConfig"})}),(0,t.jsx)(n.td,{children:"Options for building preparers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.prepareroptions",children:"PreparerOptions"})}),(0,t.jsx)(n.td,{children:"Options for configuring the content preparation process."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"})}),(0,t.jsx)(n.td,{children:"Result of the preparation step."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publisherfactory",children:"PublisherFactory"})}),(0,t.jsx)(n.td,{children:"Options for building publishers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publishertype",children:"PublisherType"})}),(0,t.jsx)(n.td,{children:"Key for all the different types of TechDocs publishers that are supported."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publishrequest",children:"PublishRequest"})}),(0,t.jsx)(n.td,{children:"Request publish definition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.publishresponse",children:"PublishResponse"})}),(0,t.jsx)(n.td,{children:"Response containing metadata about where files were published and what may have been published or updated."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.readinessresponse",children:"ReadinessResponse"})}),(0,t.jsx)(n.td,{children:"Result for the validation check."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.remoteprotocol",children:"RemoteProtocol"})}),(0,t.jsx)(n.td,{children:"Location where documentation files are stored"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.supportedgeneratorkey",children:"SupportedGeneratorKey"})}),(0,t.jsx)(n.td,{children:"List of supported generator options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-node.techdocsmetadata",children:"TechDocsMetadata"})}),(0,t.jsx)(n.td,{children:"Type to hold metadata found in techdocs_metadata.json and associated with each site"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},371426:(e,n,r)=>{var t=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,a=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),d=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function y(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function g(){}function b(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var m=b.prototype=new g;m.constructor=b,x(m,y.prototype),m.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var s,o={},c=null,i=null;if(null!=n)for(s in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)_.call(n,s)&&!R.hasOwnProperty(s)&&(o[s]=n[s]);var d=arguments.length-2;if(1===d)o.children=t;else if(1<d){for(var l=Array(d),a=0;a<d;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(s in d=e.defaultProps)void 0===o[s]&&(o[s]=d[s]);return{$$typeof:r,type:e,key:c,ref:i,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function T(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,s,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var d=!1;if(null===e)d=!0;else switch(i){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case r:case t:d=!0}}if(d)return c=c(d=e),e=""===o?"."+T(d,0):o,v(c)?(s="",null!=e&&(s=e.replace(S,"$&/")+"/"),E(c,n,s,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,s+(!c.key||d&&d.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),n.push(c)),1;if(d=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var a=o+T(i=e[l],l);d+=E(i,n,s,a,c)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(i=e.next()).done;)d+=E(i=i.value,n,s,a=o+T(i,l++),c);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}function D(e,n,r){if(null==e)return e;var t=[],s=0;return E(e,t,"","",(function(e){return n.call(r,e,s++)})),t}function C(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};n.Children={map:D,forEach:function(e,n,r){D(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return D(e,(function(){n++})),n},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=s,n.Profiler=c,n.PureComponent=b,n.StrictMode=o,n.Suspense=a,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,i=k.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in n)_.call(n,l)&&!R.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==d?d[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=t;else if(1<l){d=Array(l);for(var a=0;a<l;a++)d[a]=arguments[a+2];s.children=d}return{$$typeof:r,type:e.type,key:o,ref:c,props:s,_owner:i}},n.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,r){return O.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,r){return O.current.useReducer(e,n,r)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return O.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(667294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);