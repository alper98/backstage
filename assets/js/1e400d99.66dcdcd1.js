/*! For license information please see 1e400d99.66dcdcd1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[153596],{478320:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-backend.taskworker.recovertasks",title:"TaskWorker.recoverTasks()",description:"API reference for TaskWorker.recoverTasks()"},s=void 0,u={id:"reference/plugin-scaffolder-backend.taskworker.recovertasks",title:"TaskWorker.recoverTasks()",description:"API reference for TaskWorker.recoverTasks()",source:"@site/../docs/reference/plugin-scaffolder-backend.taskworker.recovertasks.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskworker.recovertasks",permalink:"/docs/reference/plugin-scaffolder-backend.taskworker.recovertasks",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskworker.recovertasks.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskworker.recovertasks",title:"TaskWorker.recoverTasks()",description:"API reference for TaskWorker.recoverTasks()"}},a={},i=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskworker",children:(0,n.jsx)(r.code,{children:"TaskWorker"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskworker.recovertasks",children:(0,n.jsx)(r.code,{children:"recoverTasks"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"recoverTasks(): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:u.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,h={};function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=_.prototype=new m;b.constructor=_,k(b,v.prototype),b.isPureReactComponent=!0;var g=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,c={},s=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)S.call(r,o)&&!j.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:s,ref:u,props:c,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,o,c,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return s=s(a=e),e=""===c?"."+C(a,0):c,g(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),T(s,r,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),r.push(s)),1;if(a=0,c=""===c?".":c+":",g(e))for(var i=0;i<e.length;i++){var f=c+C(u=e[i],i);a+=T(u,r,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)a+=T(u=u.value,r,o,f=c+C(u,i++),s);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=s,r.PureComponent=_,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=k({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,u=w.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in r)S.call(r,i)&&!j.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==a?a[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){a=Array(i);for(var f=0;f<i;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>s});var n=t(667294);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);