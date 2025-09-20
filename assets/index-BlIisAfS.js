(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lE={exports:{}},yh={},uE={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),Yx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),Jx=Symbol.for("react.profiler"),Zx=Symbol.for("react.provider"),eN=Symbol.for("react.context"),tN=Symbol.for("react.forward_ref"),nN=Symbol.for("react.suspense"),rN=Symbol.for("react.memo"),iN=Symbol.for("react.lazy"),vv=Symbol.iterator;function sN(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var cE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hE=Object.assign,dE={};function go(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fE(){}fE.prototype=go.prototype;function Am(t,e,n){this.props=t,this.context=e,this.refs=dE,this.updater=n||cE}var Rm=Am.prototype=new fE;Rm.constructor=Am;hE(Rm,go.prototype);Rm.isPureReactComponent=!0;var _v=Array.isArray,pE=Object.prototype.hasOwnProperty,Dm={current:null},mE={key:!0,ref:!0,__self:!0,__source:!0};function gE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pE.call(e,r)&&!mE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:t,key:s,ref:o,props:i,_owner:Dm.current}}function oN(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function aN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wv=/\/+/g;function bd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aN(""+t.key):e.toString(36)}function Mu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case Qx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bd(o,0):r,_v(i)?(n="",t!=null&&(n=t.replace(wv,"$&/")+"/"),Mu(i,e,n,"",function(u){return u})):i!=null&&(bm(i)&&(i=oN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_v(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bd(s,a);o+=Mu(s,e,n,l,i)}else if(l=sN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bd(s,a++),o+=Mu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tu(t,e,n){if(t==null)return t;var r=[],i=0;return Mu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Fu={transition:null},uN={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:Dm};function yE(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=go;Y.Fragment=Yx;Y.Profiler=Jx;Y.PureComponent=Am;Y.StrictMode=Xx;Y.Suspense=nN;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uN;Y.act=yE;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pE.call(e,l)&&!mE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cl,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:eN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zx,_context:t},t.Consumer=t};Y.createElement=gE;Y.createFactory=function(t){var e=gE.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:tN,render:t}};Y.isValidElement=bm;Y.lazy=function(t){return{$$typeof:iN,_payload:{_status:-1,_result:t},_init:lN}};Y.memo=function(t,e){return{$$typeof:rN,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};Y.unstable_act=yE;Y.useCallback=function(t,e){return Tt.current.useCallback(t,e)};Y.useContext=function(t){return Tt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Tt.current.useEffect(t,e)};Y.useId=function(){return Tt.current.useId()};Y.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Tt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};Y.useRef=function(t){return Tt.current.useRef(t)};Y.useState=function(t){return Tt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return Tt.current.useTransition()};Y.version="18.3.1";uE.exports=Y;var U=uE.exports;const cN=Gx(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hN=U,dN=Symbol.for("react.element"),fN=Symbol.for("react.fragment"),pN=Object.prototype.hasOwnProperty,mN=hN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gN={key:!0,ref:!0,__self:!0,__source:!0};function vE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pN.call(e,r)&&!gN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dN,type:t,key:s,ref:o,props:i,_owner:mN.current}}yh.Fragment=fN;yh.jsx=vE;yh.jsxs=vE;lE.exports=yh;var _=lE.exports,_E={exports:{}},Gt={},wE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var G=L.length;L.push(H);e:for(;0<G;){var De=G-1>>>1,je=L[De];if(0<i(je,H))L[De]=H,L[G]=je,G=De;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],G=L.pop();if(G!==H){L[0]=G;e:for(var De=0,je=L.length,Zl=je>>>1;De<Zl;){var ni=2*(De+1)-1,Dd=L[ni],ri=ni+1,eu=L[ri];if(0>i(Dd,G))ri<je&&0>i(eu,Dd)?(L[De]=eu,L[ri]=G,De=ri):(L[De]=Dd,L[ni]=G,De=ni);else if(ri<je&&0>i(eu,G))L[De]=eu,L[ri]=G,De=ri;else break e}}return H}function i(L,H){var G=L.sortIndex-H.sortIndex;return G!==0?G:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,m=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=L)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function I(L){if(v=!1,y(L),!m)if(n(l)!==null)m=!0,Ad(C);else{var H=n(u);H!==null&&Rd(I,H.startTime-L)}}function C(L,H){m=!1,v&&(v=!1,g(R),R=-1),f=!0;var G=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||L&&!at());){var De=h.callback;if(typeof De=="function"){h.callback=null,d=h.priorityLevel;var je=De(h.expirationTime<=H);H=t.unstable_now(),typeof je=="function"?h.callback=je:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var Zl=!0;else{var ni=n(u);ni!==null&&Rd(I,ni.startTime-H),Zl=!1}return Zl}finally{h=null,d=G,f=!1}}var S=!1,x=null,R=-1,re=5,q=-1;function at(){return!(t.unstable_now()-q<re)}function Lo(){if(x!==null){var L=t.unstable_now();q=L;var H=!0;try{H=x(!0,L)}finally{H?Mo():(S=!1,x=null)}}else S=!1}var Mo;if(typeof p=="function")Mo=function(){p(Lo)};else if(typeof MessageChannel<"u"){var yv=new MessageChannel,Kx=yv.port2;yv.port1.onmessage=Lo,Mo=function(){Kx.postMessage(null)}}else Mo=function(){E(Lo,0)};function Ad(L){x=L,S||(S=!0,Mo())}function Rd(L,H){R=E(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,Ad(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var G=d;d=H;try{return L()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=d;d=L;try{return H()}finally{d=G}},t.unstable_scheduleCallback=function(L,H,G){var De=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?De+G:De):G=De,L){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=G+je,L={id:c++,callback:H,priorityLevel:L,startTime:G,expirationTime:je,sortIndex:-1},G>De?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(v?(g(R),R=-1):v=!0,Rd(I,G-De))):(L.sortIndex=je,e(l,L),m||f||(m=!0,Ad(C))),L},t.unstable_shouldYield=at,t.unstable_wrapCallback=function(L){var H=d;return function(){var G=d;d=H;try{return L.apply(this,arguments)}finally{d=G}}}})(EE);wE.exports=EE;var yN=wE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vN=U,Wt=yN;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var IE=new Set,Fa={};function Qi(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Fa[t]=e,t=0;t<e.length;t++)IE.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,_N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ev={},Iv={};function wN(t){return Pf.call(Iv,t)?!0:Pf.call(Ev,t)?!1:_N.test(t)?Iv[t]=!0:(Ev[t]=!0,!1)}function EN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IN(t,e,n,r){if(e===null||typeof e>"u"||EN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function Om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pm,Om);st[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pm,Om);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pm,Om);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lm(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IN(e,n,i,r)&&(n=null),r||i===null?wN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=vN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),SE=Symbol.for("react.provider"),TE=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),CE=Symbol.for("react.offscreen"),Sv=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=Sv&&t[Sv]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Pd;function ia(t){if(Pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pd=e&&e[1]||""}return`
`+Pd+t}var Od=!1;function Ld(t,e){if(!t||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function SN(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Ld(t.type,!1),t;case 11:return t=Ld(t.type.render,!1),t;case 1:return t=Ld(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Of:return"Profiler";case Mm:return"StrictMode";case Lf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case TE:return(t.displayName||"Context")+".Consumer";case SE:return(t._context.displayName||"Context")+".Provider";case Fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $m:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function TN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CN(t){var e=kE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=CN(t))}function xE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NE(t,e){e=e.checked,e!=null&&Lm(t,"checked",e,!1)}function Uf(t,e){NE(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vf(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vf(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(sa(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function AE(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function RE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?RE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,DE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kN=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){kN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function bE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function PE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xN=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(xN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,Ds=null,bs=null;function Nv(t){if(t=Nl(t)){if(typeof Hf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Ih(e),Hf(t.stateNode,t.type,e))}}function OE(t){Ds?bs?bs.push(t):bs=[t]:Ds=t}function LE(){if(Ds){var t=Ds,e=bs;if(bs=Ds=null,Nv(t),e)for(t=0;t<e.length;t++)Nv(e[t])}}function ME(t,e){return t(e)}function FE(){}var Md=!1;function $E(t,e,n){if(Md)return t(e,n);Md=!0;try{return ME(t,e,n)}finally{Md=!1,(Ds!==null||bs!==null)&&(FE(),LE())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=Ih(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Kf=!1;if(Zn)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Kf=!1}function NN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var va=!1,uc=null,cc=!1,Gf=null,AN={onError:function(t){va=!0,uc=t}};function RN(t,e,n,r,i,s,o,a,l){va=!1,uc=null,NN.apply(AN,arguments)}function DN(t,e,n,r,i,s,o,a,l){if(RN.apply(this,arguments),va){if(va){var u=uc;va=!1,uc=null}else throw Error(k(198));cc||(cc=!0,Gf=u)}}function Yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Av(t){if(Yi(t)!==t)throw Error(k(188))}function bN(t){var e=t.alternate;if(!e){if(e=Yi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Av(i),t;if(s===r)return Av(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function VE(t){return t=bN(t),t!==null?jE(t):null}function jE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jE(t);if(e!==null)return e;t=t.sibling}return null}var BE=Wt.unstable_scheduleCallback,Rv=Wt.unstable_cancelCallback,PN=Wt.unstable_shouldYield,ON=Wt.unstable_requestPaint,be=Wt.unstable_now,LN=Wt.unstable_getCurrentPriorityLevel,Vm=Wt.unstable_ImmediatePriority,zE=Wt.unstable_UserBlockingPriority,hc=Wt.unstable_NormalPriority,MN=Wt.unstable_LowPriority,qE=Wt.unstable_IdlePriority,vh=null,Dn=null;function FN(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(vh,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:VN,$N=Math.log,UN=Math.LN2;function VN(t){return t>>>=0,t===0?32:31-($N(t)/UN|0)|0}var su=64,ou=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function jN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=jN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function WE(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function zN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function HE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var KE,Bm,GE,QE,YE,Yf=!1,au=[],kr=null,xr=null,Nr=null,Va=new Map,ja=new Map,mr=[],qN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dv(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function Uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Nl(e),e!==null&&Bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WN(t,e,n,r,i){switch(e){case"focusin":return kr=Uo(kr,t,e,n,r,i),!0;case"dragenter":return xr=Uo(xr,t,e,n,r,i),!0;case"mouseover":return Nr=Uo(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Va.set(s,Uo(Va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ja.set(s,Uo(ja.get(s)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=pi(t.target);if(e!==null){var n=Yi(e);if(n!==null){if(e=n.tag,e===13){if(e=UE(n),e!==null){t.blockedOn=e,YE(t.priority,function(){GE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wf=r,n.target.dispatchEvent(r),Wf=null}else return e=Nl(n),e!==null&&Bm(e),t.blockedOn=n,!1;e.shift()}return!0}function bv(t,e,n){$u(t)&&n.delete(e)}function HN(){Yf=!1,kr!==null&&$u(kr)&&(kr=null),xr!==null&&$u(xr)&&(xr=null),Nr!==null&&$u(Nr)&&(Nr=null),Va.forEach(bv),ja.forEach(bv)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,HN)))}function Ba(t){function e(i){return Vo(i,t)}if(0<au.length){Vo(au[0],t);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&Vo(kr,t),xr!==null&&Vo(xr,t),Nr!==null&&Vo(Nr,t),Va.forEach(e),ja.forEach(e),n=0;n<mr.length;n++)r=mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&mr.shift()}var Ps=ar.ReactCurrentBatchConfig,fc=!0;function KN(t,e,n,r){var i=ae,s=Ps.transition;Ps.transition=null;try{ae=1,zm(t,e,n,r)}finally{ae=i,Ps.transition=s}}function GN(t,e,n,r){var i=ae,s=Ps.transition;Ps.transition=null;try{ae=4,zm(t,e,n,r)}finally{ae=i,Ps.transition=s}}function zm(t,e,n,r){if(fc){var i=Xf(t,e,n,r);if(i===null)Kd(t,e,r,pc,n),Dv(t,r);else if(WN(i,t,e,n,r))r.stopPropagation();else if(Dv(t,r),e&4&&-1<qN.indexOf(t)){for(;i!==null;){var s=Nl(i);if(s!==null&&KE(s),s=Xf(t,e,n,r),s===null&&Kd(t,e,r,pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kd(t,e,r,null,n)}}var pc=null;function Xf(t,e,n,r){if(pc=null,t=Um(r),t=pi(t),t!==null)if(e=Yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function JE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LN()){case Vm:return 1;case zE:return 4;case hc:case MN:return 16;case qE:return 536870912;default:return 16}default:return 16}}var Sr=null,qm=null,Uu=null;function ZE(){if(Uu)return Uu;var t,e=qm,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uu=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function Pv(){return!1}function Qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lu:Pv,this.isPropagationStopped=Pv,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=Qt(yo),xl=Te({},yo,{view:0,detail:0}),QN=Qt(xl),$d,Ud,jo,_h=Te({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?($d=t.screenX-jo.screenX,Ud=t.screenY-jo.screenY):Ud=$d=0,jo=t),$d)},movementY:function(t){return"movementY"in t?t.movementY:Ud}}),Ov=Qt(_h),YN=Te({},_h,{dataTransfer:0}),XN=Qt(YN),JN=Te({},xl,{relatedTarget:0}),Vd=Qt(JN),ZN=Te({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),eA=Qt(ZN),tA=Te({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nA=Qt(tA),rA=Te({},yo,{data:0}),Lv=Qt(rA),iA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oA[t])?!!e[t]:!1}function Hm(){return aA}var lA=Te({},xl,{key:function(t){if(t.key){var e=iA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hm,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uA=Qt(lA),cA=Te({},_h,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mv=Qt(cA),hA=Te({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hm}),dA=Qt(hA),fA=Te({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),pA=Qt(fA),mA=Te({},_h,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gA=Qt(mA),yA=[9,13,27,32],Km=Zn&&"CompositionEvent"in window,_a=null;Zn&&"documentMode"in document&&(_a=document.documentMode);var vA=Zn&&"TextEvent"in window&&!_a,eI=Zn&&(!Km||_a&&8<_a&&11>=_a),Fv=" ",$v=!1;function tI(t,e){switch(t){case"keyup":return yA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function _A(t,e){switch(t){case"compositionend":return nI(e);case"keypress":return e.which!==32?null:($v=!0,Fv);case"textInput":return t=e.data,t===Fv&&$v?null:t;default:return null}}function wA(t,e){if(gs)return t==="compositionend"||!Km&&tI(t,e)?(t=ZE(),Uu=qm=Sr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eI&&e.locale!=="ko"?null:e.data;default:return null}}var EA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EA[t.type]:e==="textarea"}function rI(t,e,n,r){OE(r),e=mc(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,za=null;function IA(t){pI(t,0)}function wh(t){var e=_s(t);if(xE(e))return t}function SA(t,e){if(t==="change")return e}var iI=!1;if(Zn){var jd;if(Zn){var Bd="oninput"in document;if(!Bd){var Vv=document.createElement("div");Vv.setAttribute("oninput","return;"),Bd=typeof Vv.oninput=="function"}jd=Bd}else jd=!1;iI=jd&&(!document.documentMode||9<document.documentMode)}function jv(){wa&&(wa.detachEvent("onpropertychange",sI),za=wa=null)}function sI(t){if(t.propertyName==="value"&&wh(za)){var e=[];rI(e,za,t,Um(t)),$E(IA,e)}}function TA(t,e,n){t==="focusin"?(jv(),wa=e,za=n,wa.attachEvent("onpropertychange",sI)):t==="focusout"&&jv()}function CA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wh(za)}function kA(t,e){if(t==="click")return wh(e)}function xA(t,e){if(t==="input"||t==="change")return wh(e)}function NA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:NA;function qa(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pf.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function Bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zv(t,e){var n=Bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bv(n)}}function oI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aI(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AA(t){var e=aI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oI(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zv(n,s);var o=zv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RA=Zn&&"documentMode"in document&&11>=document.documentMode,ys=null,Jf=null,Ea=null,Zf=!1;function qv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||ys==null||ys!==lc(r)||(r=ys,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&qa(Ea,r)||(Ea=r,r=mc(Jf,"onSelect"),0<r.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},zd={},lI={};Zn&&(lI=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Eh(t){if(zd[t])return zd[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lI)return zd[t]=e[n];return t}var uI=Eh("animationend"),cI=Eh("animationiteration"),hI=Eh("animationstart"),dI=Eh("transitionend"),fI=new Map,Wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){fI.set(t,e),Qi(e,[t])}for(var qd=0;qd<Wv.length;qd++){var Wd=Wv[qd],DA=Wd.toLowerCase(),bA=Wd[0].toUpperCase()+Wd.slice(1);Kr(DA,"on"+bA)}Kr(uI,"onAnimationEnd");Kr(cI,"onAnimationIteration");Kr(hI,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(dI,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PA=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Hv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DN(r,e,void 0,t),t.currentTarget=null}function pI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Hv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Hv(i,a,u),s=l}}}if(cc)throw t=Gf,cc=!1,Gf=null,t}function pe(t,e){var n=e[ip];n===void 0&&(n=e[ip]=new Set);var r=t+"__bubble";n.has(r)||(mI(e,t,2,!1),n.add(r))}function Hd(t,e,n){var r=0;e&&(r|=4),mI(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[cu]){t[cu]=!0,IE.forEach(function(n){n!=="selectionchange"&&(PA.has(n)||Hd(n,!1,t),Hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,Hd("selectionchange",!1,e))}}function mI(t,e,n,r){switch(JE(e)){case 1:var i=KN;break;case 4:i=GN;break;default:i=zm}n=i.bind(null,e,n,t),i=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$E(function(){var u=s,c=Um(n),h=[];e:{var d=fI.get(t);if(d!==void 0){var f=Wm,m=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":f=uA;break;case"focusin":m="focus",f=Vd;break;case"focusout":m="blur",f=Vd;break;case"beforeblur":case"afterblur":f=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Ov;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=XN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=dA;break;case uI:case cI:case hI:f=eA;break;case dI:f=pA;break;case"scroll":f=QN;break;case"wheel":f=gA;break;case"copy":case"cut":case"paste":f=nA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Mv}var v=(e&4)!==0,E=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,g!==null&&(I=Ua(p,g),I!=null&&v.push(Ha(p,I,y)))),E)break;p=p.return}0<v.length&&(d=new f(d,m,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Wf&&(m=n.relatedTarget||n.fromElement)&&(pi(m)||m[er]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?pi(m):null,m!==null&&(E=Yi(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=Ov,I="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Mv,I="onPointerLeave",g="onPointerEnter",p="pointer"),E=f==null?d:_s(f),y=m==null?d:_s(m),d=new v(I,p+"leave",f,n,c),d.target=E,d.relatedTarget=y,I=null,pi(c)===u&&(v=new v(g,p+"enter",m,n,c),v.target=y,v.relatedTarget=E,I=v),E=I,f&&m)t:{for(v=f,g=m,p=0,y=v;y;y=ss(y))p++;for(y=0,I=g;I;I=ss(I))y++;for(;0<p-y;)v=ss(v),p--;for(;0<y-p;)g=ss(g),y--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=ss(v),g=ss(g)}v=null}else v=null;f!==null&&Kv(h,d,f,v,!1),m!==null&&E!==null&&Kv(h,E,m,v,!0)}}e:{if(d=u?_s(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=SA;else if(Uv(d))if(iI)C=xA;else{C=CA;var S=TA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=kA);if(C&&(C=C(t,u))){rI(h,C,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Vf(d,"number",d.value)}switch(S=u?_s(u):window,t){case"focusin":(Uv(S)||S.contentEditable==="true")&&(ys=S,Jf=u,Ea=null);break;case"focusout":Ea=Jf=ys=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,qv(h,n,c);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":qv(h,n,c)}var x;if(Km)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else gs?tI(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(eI&&n.locale!=="ko"&&(gs||R!=="onCompositionStart"?R==="onCompositionEnd"&&gs&&(x=ZE()):(Sr=c,qm="value"in Sr?Sr.value:Sr.textContent,gs=!0)),S=mc(u,R),0<S.length&&(R=new Lv(R,t,null,n,c),h.push({event:R,listeners:S}),x?R.data=x:(x=nI(n),x!==null&&(R.data=x)))),(x=vA?_A(t,n):wA(t,n))&&(u=mc(u,"onBeforeInput"),0<u.length&&(c=new Lv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}pI(h,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Ha(t,s,i)),s=Ua(t,e),s!=null&&r.push(Ha(t,s,i))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ua(n,s),l!=null&&o.unshift(Ha(n,l,a))):i||(l=Ua(n,s),l!=null&&o.push(Ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OA=/\r\n?/g,LA=/\u0000|\uFFFD/g;function Gv(t){return(typeof t=="string"?t:""+t).replace(OA,`
`).replace(LA,"")}function hu(t,e,n){if(e=Gv(e),Gv(t)!==e&&n)throw Error(k(425))}function gc(){}var ep=null,tp=null;function np(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rp=typeof setTimeout=="function"?setTimeout:void 0,MA=typeof clearTimeout=="function"?clearTimeout:void 0,Qv=typeof Promise=="function"?Promise:void 0,FA=typeof queueMicrotask=="function"?queueMicrotask:typeof Qv<"u"?function(t){return Qv.resolve(null).then(t).catch($A)}:rp;function $A(t){setTimeout(function(){throw t})}function Gd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ba(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ba(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+vo,Ka="__reactProps$"+vo,er="__reactContainer$"+vo,ip="__reactEvents$"+vo,UA="__reactListeners$"+vo,VA="__reactHandles$"+vo;function pi(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yv(t);t!==null;){if(n=t[Sn])return n;t=Yv(t)}return e}t=n,n=t.parentNode}return null}function Nl(t){return t=t[Sn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Ih(t){return t[Ka]||null}var sp=[],ws=-1;function Gr(t){return{current:t}}function ye(t){0>ws||(t.current=sp[ws],sp[ws]=null,ws--)}function de(t,e){ws++,sp[ws]=t.current,t.current=e}var Ur={},mt=Gr(Ur),bt=Gr(!1),Ai=Ur;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function yc(){ye(bt),ye(mt)}function Xv(t,e,n){if(mt.current!==Ur)throw Error(k(168));de(mt,e),de(bt,n)}function gI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,TN(t)||"Unknown",i));return Te({},n,r)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ai=mt.current,de(mt,t),de(bt,bt.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=gI(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,ye(bt),ye(mt),de(mt,t)):ye(bt),de(bt,n)}var jn=null,Sh=!1,Qd=!1;function yI(t){jn===null?jn=[t]:jn.push(t)}function jA(t){Sh=!0,yI(t)}function Qr(){if(!Qd&&jn!==null){Qd=!0;var t=0,e=ae;try{var n=jn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Sh=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),BE(Vm,Qr),i}finally{ae=e,Qd=!1}}return null}var Es=[],Is=0,_c=null,wc=0,Yt=[],Xt=0,Ri=null,zn=1,qn="";function si(t,e){Es[Is++]=wc,Es[Is++]=_c,_c=t,wc=e}function vI(t,e,n){Yt[Xt++]=zn,Yt[Xt++]=qn,Yt[Xt++]=Ri,Ri=t;var r=zn;t=qn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-pn(e)+i|n<<i|r,qn=s+t}else zn=1<<s|n<<i|r,qn=t}function Qm(t){t.return!==null&&(si(t,1),vI(t,1,0))}function Ym(t){for(;t===_c;)_c=Es[--Is],Es[Is]=null,wc=Es[--Is],Es[Is]=null;for(;t===Ri;)Ri=Yt[--Xt],Yt[Xt]=null,qn=Yt[--Xt],Yt[Xt]=null,zn=Yt[--Xt],Yt[Xt]=null}var zt=null,Vt=null,we=!1,dn=null;function _I(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Vt=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ri!==null?{id:zn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Vt=null,!0):!1;default:return!1}}function op(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ap(t){if(we){var e=Vt;if(e){var n=e;if(!Zv(t,e)){if(op(t))throw Error(k(418));e=Ar(n.nextSibling);var r=zt;e&&Zv(t,e)?_I(r,n):(t.flags=t.flags&-4097|2,we=!1,zt=t)}}else{if(op(t))throw Error(k(418));t.flags=t.flags&-4097|2,we=!1,zt=t}}}function e_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function du(t){if(t!==zt)return!1;if(!we)return e_(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!np(t.type,t.memoizedProps)),e&&(e=Vt)){if(op(t))throw wI(),Error(k(418));for(;e;)_I(t,e),e=Ar(e.nextSibling)}if(e_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=zt?Ar(t.stateNode.nextSibling):null;return!0}function wI(){for(var t=Vt;t;)t=Ar(t.nextSibling)}function Gs(){Vt=zt=null,we=!1}function Xm(t){dn===null?dn=[t]:dn.push(t)}var BA=ar.ReactCurrentBatchConfig;function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function fu(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function t_(t){var e=t._init;return e(t._payload)}function EI(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Pr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,I){return p===null||p.tag!==6?(p=nf(y,g.mode,I),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,I){var C=y.type;return C===ms?c(g,p,y.props.children,I,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&t_(C)===p.type)?(I=i(p,y.props),I.ref=Bo(g,p,y),I.return=g,I):(I=Ku(y.type,y.key,y.props,null,g.mode,I),I.ref=Bo(g,p,y),I.return=g,I)}function u(g,p,y,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=rf(y,g.mode,I),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,I,C){return p===null||p.tag!==7?(p=Si(y,g.mode,I,C),p.return=g,p):(p=i(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nu:return y=Ku(p.type,p.key,p.props,null,g.mode,y),y.ref=Bo(g,null,p),y.return=g,y;case ps:return p=rf(p,g.mode,y),p.return=g,p;case fr:var I=p._init;return h(g,I(p._payload),y)}if(sa(p)||Fo(p))return p=Si(p,g.mode,y,null),p.return=g,p;fu(g,p)}return null}function d(g,p,y,I){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(g,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nu:return y.key===C?l(g,p,y,I):null;case ps:return y.key===C?u(g,p,y,I):null;case fr:return C=y._init,d(g,p,C(y._payload),I)}if(sa(y)||Fo(y))return C!==null?null:c(g,p,y,I,null);fu(g,y)}return null}function f(g,p,y,I,C){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(y)||null,a(p,g,""+I,C);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case nu:return g=g.get(I.key===null?y:I.key)||null,l(p,g,I,C);case ps:return g=g.get(I.key===null?y:I.key)||null,u(p,g,I,C);case fr:var S=I._init;return f(g,p,y,S(I._payload),C)}if(sa(I)||Fo(I))return g=g.get(y)||null,c(p,g,I,C,null);fu(p,I)}return null}function m(g,p,y,I){for(var C=null,S=null,x=p,R=p=0,re=null;x!==null&&R<y.length;R++){x.index>R?(re=x,x=null):re=x.sibling;var q=d(g,x,y[R],I);if(q===null){x===null&&(x=re);break}t&&x&&q.alternate===null&&e(g,x),p=s(q,p,R),S===null?C=q:S.sibling=q,S=q,x=re}if(R===y.length)return n(g,x),we&&si(g,R),C;if(x===null){for(;R<y.length;R++)x=h(g,y[R],I),x!==null&&(p=s(x,p,R),S===null?C=x:S.sibling=x,S=x);return we&&si(g,R),C}for(x=r(g,x);R<y.length;R++)re=f(x,g,R,y[R],I),re!==null&&(t&&re.alternate!==null&&x.delete(re.key===null?R:re.key),p=s(re,p,R),S===null?C=re:S.sibling=re,S=re);return t&&x.forEach(function(at){return e(g,at)}),we&&si(g,R),C}function v(g,p,y,I){var C=Fo(y);if(typeof C!="function")throw Error(k(150));if(y=C.call(y),y==null)throw Error(k(151));for(var S=C=null,x=p,R=p=0,re=null,q=y.next();x!==null&&!q.done;R++,q=y.next()){x.index>R?(re=x,x=null):re=x.sibling;var at=d(g,x,q.value,I);if(at===null){x===null&&(x=re);break}t&&x&&at.alternate===null&&e(g,x),p=s(at,p,R),S===null?C=at:S.sibling=at,S=at,x=re}if(q.done)return n(g,x),we&&si(g,R),C;if(x===null){for(;!q.done;R++,q=y.next())q=h(g,q.value,I),q!==null&&(p=s(q,p,R),S===null?C=q:S.sibling=q,S=q);return we&&si(g,R),C}for(x=r(g,x);!q.done;R++,q=y.next())q=f(x,g,R,q.value,I),q!==null&&(t&&q.alternate!==null&&x.delete(q.key===null?R:q.key),p=s(q,p,R),S===null?C=q:S.sibling=q,S=q);return t&&x.forEach(function(Lo){return e(g,Lo)}),we&&si(g,R),C}function E(g,p,y,I){if(typeof y=="object"&&y!==null&&y.type===ms&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nu:e:{for(var C=y.key,S=p;S!==null;){if(S.key===C){if(C=y.type,C===ms){if(S.tag===7){n(g,S.sibling),p=i(S,y.props.children),p.return=g,g=p;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fr&&t_(C)===S.type){n(g,S.sibling),p=i(S,y.props),p.ref=Bo(g,S,y),p.return=g,g=p;break e}n(g,S);break}else e(g,S);S=S.sibling}y.type===ms?(p=Si(y.props.children,g.mode,I,y.key),p.return=g,g=p):(I=Ku(y.type,y.key,y.props,null,g.mode,I),I.ref=Bo(g,p,y),I.return=g,g=I)}return o(g);case ps:e:{for(S=y.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=rf(y,g.mode,I),p.return=g,g=p}return o(g);case fr:return S=y._init,E(g,p,S(y._payload),I)}if(sa(y))return m(g,p,y,I);if(Fo(y))return v(g,p,y,I);fu(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=nf(y,g.mode,I),p.return=g,g=p),o(g)):n(g,p)}return E}var Qs=EI(!0),II=EI(!1),Ec=Gr(null),Ic=null,Ss=null,Jm=null;function Zm(){Jm=Ss=Ic=null}function eg(t){var e=Ec.current;ye(Ec),t._currentValue=e}function lp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Ic=t,Jm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Jm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Ic===null)throw Error(k(308));Ss=t,Ic.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var mi=null;function tg(t){mi===null?mi=[t]:mi.push(t)}function SI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function ng(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function n_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(f,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(f,h,d):m,d==null)break e;h=Te({},h,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=h}}function r_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Al={},bn=Gr(Al),Ga=Gr(Al),Qa=Gr(Al);function gi(t){if(t===Al)throw Error(k(174));return t}function rg(t,e){switch(de(Qa,e),de(Ga,t),de(bn,Al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}ye(bn),de(bn,e)}function Ys(){ye(bn),ye(Ga),ye(Qa)}function CI(t){gi(Qa.current);var e=gi(bn.current),n=Bf(e,t.type);e!==n&&(de(Ga,t),de(bn,n))}function ig(t){Ga.current===t&&(ye(bn),ye(Ga))}var Ie=Gr(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function sg(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var Bu=ar.ReactCurrentDispatcher,Xd=ar.ReactCurrentBatchConfig,Di=0,Se=null,Fe=null,qe=null,Cc=!1,Ia=!1,Ya=0,zA=0;function lt(){throw Error(k(321))}function og(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function ag(t,e,n,r,i,s){if(Di=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bu.current=t===null||t.memoizedState===null?KA:GA,t=n(r,i),Ia){s=0;do{if(Ia=!1,Ya=0,25<=s)throw Error(k(301));s+=1,qe=Fe=null,e.updateQueue=null,Bu.current=QA,t=n(r,i)}while(Ia)}if(Bu.current=kc,e=Fe!==null&&Fe.next!==null,Di=0,qe=Fe=Se=null,Cc=!1,e)throw Error(k(300));return t}function lg(){var t=Ya!==0;return Ya=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Se.memoizedState=qe=t:qe=qe.next=t,qe}function an(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?Se.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(k(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?Se.memoizedState=qe=t:qe=qe.next=t}return qe}function Xa(t,e){return typeof e=="function"?e(t):e}function Jd(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Di&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Se.lanes|=c,bi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,vn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zd(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kI(){}function xI(t,e){var n=Se,r=an(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,ug(RI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Ja(9,AI.bind(null,n,r,i,e),void 0,null),He===null)throw Error(k(349));Di&30||NI(n,e,i)}return i}function NI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AI(t,e,n,r){e.value=n,e.getSnapshot=r,DI(e)&&bI(t)}function RI(t,e,n){return n(function(){DI(e)&&bI(t)})}function DI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function bI(t){var e=tr(t,1);e!==null&&mn(e,t,1,-1)}function i_(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=HA.bind(null,Se,t),[e.memoizedState,t]}function Ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function PI(){return an().memoizedState}function zu(t,e,n,r){var i=In();Se.flags|=t,i.memoizedState=Ja(1|e,n,void 0,r===void 0?null:r)}function Th(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&og(r,o.deps)){i.memoizedState=Ja(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Ja(1|e,n,s,r)}function s_(t,e){return zu(8390656,8,t,e)}function ug(t,e){return Th(2048,8,t,e)}function OI(t,e){return Th(4,2,t,e)}function LI(t,e){return Th(4,4,t,e)}function MI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function FI(t,e,n){return n=n!=null?n.concat([t]):null,Th(4,4,MI.bind(null,e,t),n)}function cg(){}function $I(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function UI(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function VI(t,e,n){return Di&21?(vn(n,e)||(n=WE(),Se.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function qA(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Xd.transition;Xd.transition={};try{t(!1),e()}finally{ae=n,Xd.transition=r}}function jI(){return an().memoizedState}function WA(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},BI(t))zI(e,n);else if(n=SI(t,e,n,r),n!==null){var i=Et();mn(n,t,r,i),qI(n,e,r)}}function HA(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(BI(t))zI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var l=e.interleaved;l===null?(i.next=i,tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=SI(t,e,i,r),n!==null&&(i=Et(),mn(n,t,r,i),qI(n,e,r))}}function BI(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function zI(t,e){Ia=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var kc={readContext:on,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},KA={readContext:on,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:s_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zu(4194308,4,MI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zu(4194308,4,t,e)},useInsertionEffect:function(t,e){return zu(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WA.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:i_,useDebugValue:cg,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=i_(!1),e=t[0];return t=qA.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=In();if(we){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),He===null)throw Error(k(349));Di&30||NI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,s_(RI.bind(null,r,s,t),[t]),r.flags|=2048,Ja(9,AI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=He.identifierPrefix;if(we){var n=qn,r=zn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GA={readContext:on,useCallback:$I,useContext:on,useEffect:ug,useImperativeHandle:FI,useInsertionEffect:OI,useLayoutEffect:LI,useMemo:UI,useReducer:Jd,useRef:PI,useState:function(){return Jd(Xa)},useDebugValue:cg,useDeferredValue:function(t){var e=an();return VI(e,Fe.memoizedState,t)},useTransition:function(){var t=Jd(Xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:kI,useSyncExternalStore:xI,useId:jI,unstable_isNewReconciler:!1},QA={readContext:on,useCallback:$I,useContext:on,useEffect:ug,useImperativeHandle:FI,useInsertionEffect:OI,useLayoutEffect:LI,useMemo:UI,useReducer:Zd,useRef:PI,useState:function(){return Zd(Xa)},useDebugValue:cg,useDeferredValue:function(t){var e=an();return Fe===null?e.memoizedState=t:VI(e,Fe.memoizedState,t)},useTransition:function(){var t=Zd(Xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:kI,useSyncExternalStore:xI,useId:jI,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ch={isMounted:function(t){return(t=t._reactInternals)?Yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=br(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(mn(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=br(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(mn(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=br(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(mn(e,t,r,n),ju(e,t,r))}};function o_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function WI(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Pt(e)?Ai:mt.current,r=e.contextTypes,s=(r=r!=null)?Ks(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function a_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ch.enqueueReplaceState(e,e.state,null)}function cp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ng(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Pt(e)?Ai:mt.current,i.context=Ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(up(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ch.enqueueReplaceState(i,i.state,null),Sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=SN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YA=typeof WeakMap=="function"?WeakMap:Map;function HI(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nc||(Nc=!0,Ep=r),hp(t,e)},n}function KI(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hp(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function l_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cR.bind(null,t,e,n),e.then(t,t))}function u_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function c_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var XA=ar.ReactCurrentOwner,Rt=!1;function yt(t,e,n,r){e.child=t===null?II(e,null,n,r):Qs(e,t.child,n,r)}function h_(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=ag(t,e,n,r,s,i),n=lg(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(we&&n&&Qm(e),e.flags|=1,yt(t,e,r,i),e.child)}function d_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,GI(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function GI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return dp(t,e,n,r,i)}function QI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Cs,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Cs,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Cs,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Cs,$t),$t|=r;return yt(t,e,i,n),e.child}function YI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dp(t,e,n,r,i){var s=Pt(n)?Ai:mt.current;return s=Ks(e,s),Os(e,i),n=ag(t,e,n,r,s,i),r=lg(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(we&&r&&Qm(e),e.flags|=1,yt(t,e,n,i),e.child)}function f_(t,e,n,r,i){if(Pt(n)){var s=!0;vc(e)}else s=!1;if(Os(e,i),e.stateNode===null)qu(t,e),WI(e,n,r),cp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Pt(n)?Ai:mt.current,u=Ks(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&a_(e,o,r,u),pr=!1;var d=e.memoizedState;o.state=d,Sc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||bt.current||pr?(typeof c=="function"&&(up(e,n,c,r),l=e.memoizedState),(a=pr||o_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TI(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Pt(n)?Ai:mt.current,l=Ks(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&a_(e,o,r,l),pr=!1,d=e.memoizedState,o.state=d,Sc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||bt.current||pr?(typeof f=="function"&&(up(e,n,f,r),m=e.memoizedState),(u=pr||o_(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return fp(t,e,n,r,s,i)}function fp(t,e,n,r,i,s){YI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),nr(t,e,s);r=e.stateNode,XA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function XI(t){var e=t.stateNode;e.pendingContext?Xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xv(t,e.context,!1),rg(t,e.containerInfo)}function p_(t,e,n,r,i){return Gs(),Xm(i),e.flags|=256,yt(t,e,n,r),e.child}var pp={dehydrated:null,treeContext:null,retryLane:0};function mp(t){return{baseLanes:t,cachePool:null,transitions:null}}function JI(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ie,i&1),t===null)return ap(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nh(o,r,0,null),t=Si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mp(n),e.memoizedState=pp,t):hg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return JA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=Si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pp,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hg(t,e){return e=Nh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&Xm(r),Qs(e,t.child,null,n),t=hg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ef(Error(k(422))),pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nh({mode:"visible",children:r.children},i,0,null),s=Si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=mp(o),e.memoizedState=pp,s);if(!(e.mode&1))return pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=ef(s,r,void 0),pu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),mn(r,t,i,-1))}return yg(),r=ef(Error(k(421))),pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Ar(i.nextSibling),zt=e,we=!0,dn=null,t!==null&&(Yt[Xt++]=zn,Yt[Xt++]=qn,Yt[Xt++]=Ri,zn=t.id,qn=t.overflow,Ri=e),e=hg(e,r.children),e.flags|=4096,e)}function m_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lp(t.return,e,n)}function tf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ZI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m_(t,n,e);else if(t.tag===19)m_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZA(t,e,n){switch(e.tag){case 3:XI(e),Gs();break;case 5:CI(e);break;case 1:Pt(e.type)&&vc(e);break;case 4:rg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?JI(t,e,n):(de(Ie,Ie.current&1),t=nr(t,e,n),t!==null?t.sibling:null);de(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ZI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,QI(t,e,n)}return nr(t,e,n)}var eS,gp,tS,nS;eS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gp=function(){};tS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(bn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=jf(t,i),r=jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gc)}zf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};nS=function(t,e,n,r){n!==r&&(e.flags|=4)};function zo(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eR(t,e,n){var r=e.pendingProps;switch(Ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Pt(e.type)&&yc(),ut(e),null;case 3:return r=e.stateNode,Ys(),ye(bt),ye(mt),sg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Tp(dn),dn=null))),gp(t,e),ut(e),null;case 5:ig(e);var i=gi(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)tS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ut(e),null}if(t=gi(bn.current),du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)pe(aa[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Tv(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":kv(r,s),pe("invalid",r)}zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ru(r),Cv(r,s,!0);break;case"textarea":ru(r),xv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=RE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Ka]=r,eS(t,e,!1,!1),e.stateNode=t;e:{switch(o=qf(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)pe(aa[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Tv(t,r),i=$f(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),pe("invalid",t);break;case"textarea":kv(t,r),i=jf(t,r),pe("invalid",t);break;default:i=r}zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?PE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&DE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&Lm(t,s,l,o))}switch(n){case"input":ru(t),Cv(t,r,!1);break;case"textarea":ru(t),xv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)nS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=gi(Qa.current),gi(bn.current),du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:hu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ut(e),null;case 13:if(ye(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Vt!==null&&e.mode&1&&!(e.flags&128))wI(),Gs(),e.flags|=98560,s=!1;else if(s=du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Sn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else dn!==null&&(Tp(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ue===0&&(Ue=3):yg())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Ys(),gp(t,e),t===null&&Wa(e.stateNode.containerInfo),ut(e),null;case 10:return eg(e.type._context),ut(e),null;case 17:return Pt(e.type)&&yc(),ut(e),null;case 19:if(ye(Ie),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Js&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return ut(e),null}else 2*be()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Ie.current,de(Ie,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return gg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function tR(t,e){switch(Ym(e),e.tag){case 1:return Pt(e.type)&&yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),ye(bt),ye(mt),sg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ig(e),null;case 13:if(ye(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ie),null;case 4:return Ys(),null;case 10:return eg(e.type._context),null;case 22:case 23:return gg(),null;case 24:return null;default:return null}}var mu=!1,dt=!1,nR=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var g_=!1;function rR(t,e){if(ep=fc,t=aI(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tp={focusedElem:t,selectionRange:n},fc=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,E=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:cn(e.type,v),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(I){Ce(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return m=g_,g_=!1,m}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yp(e,n,s)}i=i.next}while(i!==r)}}function kh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rS(t){var e=t.alternate;e!==null&&(t.alternate=null,rS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Ka],delete e[ip],delete e[UA],delete e[VA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iS(t){return t.tag===5||t.tag===3||t.tag===4}function y_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _p(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(r!==4&&(t=t.child,t!==null))for(_p(t,e,n),t=t.sibling;t!==null;)_p(t,e,n),t=t.sibling}function wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wp(t,e,n),t=t.sibling;t!==null;)wp(t,e,n),t=t.sibling}var Ye=null,hn=!1;function ur(t,e,n){for(n=n.child;n!==null;)sS(t,e,n),n=n.sibling}function sS(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:dt||Ts(n,e);case 6:var r=Ye,i=hn;Ye=null,ur(t,e,n),Ye=r,hn=i,Ye!==null&&(hn?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(hn?(t=Ye,n=n.stateNode,t.nodeType===8?Gd(t.parentNode,n):t.nodeType===1&&Gd(t,n),Ba(t)):Gd(Ye,n.stateNode));break;case 4:r=Ye,i=hn,Ye=n.stateNode.containerInfo,hn=!0,ur(t,e,n),Ye=r,hn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!dt&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,ur(t,e,n),dt=r):ur(t,e,n);break;default:ur(t,e,n)}}function v_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nR),e.forEach(function(r){var i=dR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,hn=!1;break e;case 3:Ye=a.stateNode.containerInfo,hn=!0;break e;case 4:Ye=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(Ye===null)throw Error(k(160));sS(s,o,i),Ye=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oS(e,t),e=e.sibling}function oS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),En(t),r&4){try{Sa(3,t,t.return),kh(3,t)}catch(v){Ce(t,t.return,v)}try{Sa(5,t,t.return)}catch(v){Ce(t,t.return,v)}}break;case 1:un(e,t),En(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(un(e,t),En(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var i=t.stateNode;try{$a(i,"")}catch(v){Ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NE(i,s),qf(a,o);var u=qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?PE(i,h):c==="dangerouslySetInnerHTML"?DE(i,h):c==="children"?$a(i,h):Lm(i,c,h,u)}switch(a){case"input":Uf(i,s);break;case"textarea":AE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Rs(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(v){Ce(t,t.return,v)}}break;case 6:if(un(e,t),En(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ce(t,t.return,v)}}break;case 3:if(un(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(v){Ce(t,t.return,v)}break;case 4:un(e,t),En(t);break;case 13:un(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pg=be())),r&4&&v_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||c,un(e,t),dt=u):un(e,t),En(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,f=d.child,d.tag){case 0:case 11:case 14:case 15:Sa(4,d,d.return);break;case 1:Ts(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Ce(r,n,v)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){w_(h);continue}}f!==null?(f.return=d,O=f):w_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bE("display",o))}catch(v){Ce(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ce(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:un(e,t),En(t),r&4&&v_(t);break;case 21:break;default:un(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iS(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=y_(t);wp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=y_(t);_p(t,a,o);break;default:throw Error(k(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iR(t,e,n){O=t,aS(t)}function aS(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=mu;var u=dt;if(mu=o,(dt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?E_(i):l!==null?(l.return=o,O=l):E_(i);for(;s!==null;)O=s,aS(s),s=s.sibling;O=i,mu=a,dt=u}__(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):__(t)}}function __(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||kh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&r_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}r_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}dt||e.flags&512&&vp(e)}catch(d){Ce(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function w_(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function E_(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kh(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{vp(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{vp(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var sR=Math.ceil,xc=ar.ReactCurrentDispatcher,dg=ar.ReactCurrentOwner,sn=ar.ReactCurrentBatchConfig,ne=0,He=null,Le=null,rt=0,$t=0,Cs=Gr(0),Ue=0,Za=null,bi=0,xh=0,fg=0,Ta=null,Nt=null,pg=0,Js=1/0,Vn=null,Nc=!1,Ep=null,Dr=null,gu=!1,Tr=null,Ac=0,Ca=0,Ip=null,Wu=-1,Hu=0;function Et(){return ne&6?be():Wu!==-1?Wu:Wu=be()}function br(t){return t.mode&1?ne&2&&rt!==0?rt&-rt:BA.transition!==null?(Hu===0&&(Hu=WE()),Hu):(t=ae,t!==0||(t=window.event,t=t===void 0?16:JE(t.type)),t):1}function mn(t,e,n,r){if(50<Ca)throw Ca=0,Ip=null,Error(k(185));kl(t,n,r),(!(ne&2)||t!==He)&&(t===He&&(!(ne&2)&&(xh|=n),Ue===4&&gr(t,rt)),Ot(t,r),n===1&&ne===0&&!(e.mode&1)&&(Js=be()+500,Sh&&Qr()))}function Ot(t,e){var n=t.callbackNode;BN(t,e);var r=dc(t,t===He?rt:0);if(r===0)n!==null&&Rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rv(n),e===1)t.tag===0?jA(I_.bind(null,t)):yI(I_.bind(null,t)),FA(function(){!(ne&6)&&Qr()}),n=null;else{switch(HE(r)){case 1:n=Vm;break;case 4:n=zE;break;case 16:n=hc;break;case 536870912:n=qE;break;default:n=hc}n=mS(n,lS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lS(t,e){if(Wu=-1,Hu=0,ne&6)throw Error(k(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=dc(t,t===He?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rc(t,r);else{e=r;var i=ne;ne|=2;var s=cS();(He!==t||rt!==e)&&(Vn=null,Js=be()+500,Ii(t,e));do try{lR();break}catch(a){uS(t,a)}while(!0);Zm(),xc.current=s,ne=i,Le!==null?e=0:(He=null,rt=0,e=Ue)}if(e!==0){if(e===2&&(i=Qf(t),i!==0&&(r=i,e=Sp(t,i))),e===1)throw n=Za,Ii(t,0),gr(t,r),Ot(t,be()),n;if(e===6)gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oR(i)&&(e=Rc(t,r),e===2&&(s=Qf(t),s!==0&&(r=s,e=Sp(t,s))),e===1))throw n=Za,Ii(t,0),gr(t,r),Ot(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:oi(t,Nt,Vn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=pg+500-be(),10<e)){if(dc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rp(oi.bind(null,t,Nt,Vn),e);break}oi(t,Nt,Vn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sR(r/1960))-r,10<r){t.timeoutHandle=rp(oi.bind(null,t,Nt,Vn),r);break}oi(t,Nt,Vn);break;case 5:oi(t,Nt,Vn);break;default:throw Error(k(329))}}}return Ot(t,be()),t.callbackNode===n?lS.bind(null,t):null}function Sp(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Ii(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Tp(e)),t}function Tp(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function oR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~fg,e&=~xh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function I_(t){if(ne&6)throw Error(k(327));Ls();var e=dc(t,0);if(!(e&1))return Ot(t,be()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var r=Qf(t);r!==0&&(e=r,n=Sp(t,r))}if(n===1)throw n=Za,Ii(t,0),gr(t,e),Ot(t,be()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,Nt,Vn),Ot(t,be()),null}function mg(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Js=be()+500,Sh&&Qr())}}function Pi(t){Tr!==null&&Tr.tag===0&&!(ne&6)&&Ls();var e=ne;ne|=1;var n=sn.transition,r=ae;try{if(sn.transition=null,ae=1,t)return t()}finally{ae=r,sn.transition=n,ne=e,!(ne&6)&&Qr()}}function gg(){$t=Cs.current,ye(Cs)}function Ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MA(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yc();break;case 3:Ys(),ye(bt),ye(mt),sg();break;case 5:ig(r);break;case 4:Ys();break;case 13:ye(Ie);break;case 19:ye(Ie);break;case 10:eg(r.type._context);break;case 22:case 23:gg()}n=n.return}if(He=t,Le=t=Pr(t.current,null),rt=$t=e,Ue=0,Za=null,fg=xh=bi=0,Nt=Ta=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function uS(t,e){do{var n=Le;try{if(Zm(),Bu.current=kc,Cc){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Di=0,qe=Fe=Se=null,Ia=!1,Ya=0,dg.current=null,n===null||n.return===null){Ue=1,Za=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=u_(o);if(f!==null){f.flags&=-257,c_(f,o,a,s,e),f.mode&1&&l_(s,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){l_(s,u,e),yg();break e}l=Error(k(426))}}else if(we&&a.mode&1){var E=u_(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),c_(E,o,a,s,e),Xm(Xs(l,a));break e}}s=l=Xs(l,a),Ue!==4&&(Ue=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=HI(s,l,e);n_(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Dr===null||!Dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=KI(s,a,e);n_(s,I);break e}}s=s.return}while(s!==null)}dS(n)}catch(C){e=C,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function cS(){var t=xc.current;return xc.current=kc,t===null?kc:t}function yg(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(bi&268435455)&&!(xh&268435455)||gr(He,rt)}function Rc(t,e){var n=ne;ne|=2;var r=cS();(He!==t||rt!==e)&&(Vn=null,Ii(t,e));do try{aR();break}catch(i){uS(t,i)}while(!0);if(Zm(),ne=n,xc.current=r,Le!==null)throw Error(k(261));return He=null,rt=0,Ue}function aR(){for(;Le!==null;)hS(Le)}function lR(){for(;Le!==null&&!PN();)hS(Le)}function hS(t){var e=pS(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?dS(t):Le=e,dg.current=null}function dS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tR(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=eR(n,e,$t),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function oi(t,e,n){var r=ae,i=sn.transition;try{sn.transition=null,ae=1,uR(t,e,n,r)}finally{sn.transition=i,ae=r}return null}function uR(t,e,n,r){do Ls();while(Tr!==null);if(ne&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zN(t,s),t===He&&(Le=He=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,mS(hc,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ae;ae=1;var a=ne;ne|=4,dg.current=null,rR(t,n),oS(n,t),AA(tp),fc=!!ep,tp=ep=null,t.current=n,iR(n),ON(),ne=a,ae=o,sn.transition=s}else t.current=n;if(gu&&(gu=!1,Tr=t,Ac=i),s=t.pendingLanes,s===0&&(Dr=null),FN(n.stateNode),Ot(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nc)throw Nc=!1,t=Ep,Ep=null,t;return Ac&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Ip?Ca++:(Ca=0,Ip=t):Ca=0,Qr(),null}function Ls(){if(Tr!==null){var t=HE(Ac),e=sn.transition,n=ae;try{if(sn.transition=null,ae=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Ac=0,ne&6)throw Error(k(331));var i=ne;for(ne|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Sa(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,f=c.return;if(rS(c),c===u){O=null;break}if(d!==null){d.return=f,O=d;break}O=f}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,O=y;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kh(9,a)}}catch(C){Ce(a,a.return,C)}if(a===o){O=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,O=I;break e}O=a.return}}if(ne=i,Qr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(vh,t)}catch{}r=!0}return r}finally{ae=n,sn.transition=e}}return!1}function S_(t,e,n){e=Xs(n,e),e=HI(t,e,1),t=Rr(t,e,1),e=Et(),t!==null&&(kl(t,1,e),Ot(t,e))}function Ce(t,e,n){if(t.tag===3)S_(t,t,n);else for(;e!==null;){if(e.tag===3){S_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Xs(n,t),t=KI(e,t,1),e=Rr(e,t,1),t=Et(),e!==null&&(kl(e,1,t),Ot(e,t));break}}e=e.return}}function cR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(rt&n)===n&&(Ue===4||Ue===3&&(rt&130023424)===rt&&500>be()-pg?Ii(t,0):fg|=n),Ot(t,e)}function fS(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=Et();t=tr(t,e),t!==null&&(kl(t,e,n),Ot(t,n))}function hR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fS(t,n)}function dR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),fS(t,n)}var pS;pS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,ZA(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,we&&e.flags&1048576&&vI(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=Ks(e,mt.current);Os(e,n),i=ag(null,e,r,t,i,n);var s=lg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,vc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ng(e),i.updater=Ch,e.stateNode=i,i._reactInternals=e,cp(e,r,t,n),e=fp(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Qm(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pR(r),t=cn(r,t),i){case 0:e=dp(null,e,r,t,n);break e;case 1:e=f_(null,e,r,t,n);break e;case 11:e=h_(null,e,r,t,n);break e;case 14:e=d_(null,e,r,cn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),dp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),f_(t,e,r,i,n);case 3:e:{if(XI(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TI(t,e),Sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xs(Error(k(423)),e),e=p_(t,e,r,n,i);break e}else if(r!==i){i=Xs(Error(k(424)),e),e=p_(t,e,r,n,i);break e}else for(Vt=Ar(e.stateNode.containerInfo.firstChild),zt=e,we=!0,dn=null,n=II(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===i){e=nr(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return CI(e),t===null&&ap(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,np(r,i)?o=null:s!==null&&np(r,s)&&(e.flags|=32),YI(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&ap(e),null;case 13:return JI(t,e,n);case 4:return rg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),h_(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Ec,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!bt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=on(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),d_(t,e,r,i,n);case 15:return GI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),qu(t,e),e.tag=1,Pt(r)?(t=!0,vc(e)):t=!1,Os(e,n),WI(e,r,i),cp(e,r,i,n),fp(null,e,r,!0,t,n);case 19:return ZI(t,e,n);case 22:return QI(t,e,n)}throw Error(k(156,e.tag))};function mS(t,e){return BE(t,e)}function fR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new fR(t,e,n,r)}function vg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pR(t){if(typeof t=="function")return vg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fm)return 11;if(t===$m)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Si(n.children,i,s,e);case Mm:o=8,i|=8;break;case Of:return t=Zt(12,n,e,i|2),t.elementType=Of,t.lanes=s,t;case Lf:return t=Zt(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Mf:return t=Zt(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case CE:return Nh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case SE:o=10;break e;case TE:o=9;break e;case Fm:o=11;break e;case $m:o=14;break e;case fr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Si(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Nh(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=CE,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fd(0),this.expirationTimes=Fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _g(t,e,n,r,i,s,o,a,l){return t=new mR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ng(s),t}function gR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gS(t){if(!t)return Ur;t=t._reactInternals;e:{if(Yi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Pt(n))return gI(t,n,e)}return e}function yS(t,e,n,r,i,s,o,a,l){return t=_g(n,r,!0,t,i,s,o,a,l),t.context=gS(null),n=t.current,r=Et(),i=br(n),s=Xn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,kl(t,i,r),Ot(t,r),t}function Ah(t,e,n,r){var i=e.current,s=Et(),o=br(i);return n=gS(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(mn(t,i,o,s),ju(t,i,o)),o}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function T_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wg(t,e){T_(t,e),(t=t.alternate)&&T_(t,e)}function yR(){return null}var vS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eg(t){this._internalRoot=t}Rh.prototype.render=Eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ah(t,e,null,null)};Rh.prototype.unmount=Eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){Ah(null,t,null,null)}),e[er]=null}};function Rh(t){this._internalRoot=t}Rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=QE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&XE(t)}};function Ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function C_(){}function vR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dc(o);s.call(u)}}var o=yS(e,r,t,0,null,!1,!1,"",C_);return t._reactRootContainer=o,t[er]=o.current,Wa(t.nodeType===8?t.parentNode:t),Pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dc(l);a.call(u)}}var l=_g(t,0,!1,null,null,!1,!1,"",C_);return t._reactRootContainer=l,t[er]=l.current,Wa(t.nodeType===8?t.parentNode:t),Pi(function(){Ah(e,l,n,r)}),l}function bh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dc(o);a.call(l)}}Ah(e,o,t,i)}else o=vR(n,e,t,i,r);return Dc(o)}KE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(jm(e,n|1),Ot(e,be()),!(ne&6)&&(Js=be()+500,Qr()))}break;case 13:Pi(function(){var r=tr(t,1);if(r!==null){var i=Et();mn(r,t,1,i)}}),wg(t,1)}};Bm=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=Et();mn(e,t,134217728,n)}wg(t,134217728)}};GE=function(t){if(t.tag===13){var e=br(t),n=tr(t,e);if(n!==null){var r=Et();mn(n,t,e,r)}wg(t,e)}};QE=function(){return ae};YE=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Hf=function(t,e,n){switch(e){case"input":if(Uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ih(r);if(!i)throw Error(k(90));xE(r),Uf(r,i)}}}break;case"textarea":AE(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};ME=mg;FE=Pi;var _R={usingClientEntryPoint:!1,Events:[Nl,_s,Ih,OE,LE,mg]},qo={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wR={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=VE(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||yR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{vh=yu.inject(wR),Dn=yu}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_R;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ig(e))throw Error(k(200));return gR(t,e,null,n)};Gt.createRoot=function(t,e){if(!Ig(t))throw Error(k(299));var n=!1,r="",i=vS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_g(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,Wa(t.nodeType===8?t.parentNode:t),new Eg(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=VE(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Pi(t)};Gt.hydrate=function(t,e,n){if(!Dh(e))throw Error(k(200));return bh(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Ig(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yS(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,Wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rh(e)};Gt.render=function(t,e,n){if(!Dh(e))throw Error(k(200));return bh(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Dh(t))throw Error(k(40));return t._reactRootContainer?(Pi(function(){bh(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Gt.unstable_batchedUpdates=mg;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dh(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return bh(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function _S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_S)}catch(t){console.error(t)}}_S(),_E.exports=Gt;var ER=_E.exports,wS,k_=ER;wS=k_.createRoot,k_.hydrateRoot;var x_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw _o(e)},_o=function(t){return new Error("Firebase Database ("+ES.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new SR;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SS=function(t){const e=IS(t);return Sg.encodeByteArray(e,!0)},bc=function(t){return SS(t).replace(/\./g,"")},Pc=function(t){try{return Sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){return TS(void 0,t)}function TS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CR(n)||(t[n]=TS(t[n],e[n]));return t}function CR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=()=>kR().__FIREBASE_DEFAULTS__,NR=()=>{if(typeof process>"u"||typeof x_>"u")return;const t=x_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pc(t[1]);return e&&JSON.parse(e)},Ph=()=>{try{return xR()||NR()||AR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CS=t=>{var e,n;return(n=(e=Ph())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Oh=t=>{const e=CS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kS=()=>{var t;return(t=Ph())===null||t===void 0?void 0:t.config},xS=t=>{var e;return(e=Ph())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bc(JSON.stringify(n)),bc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function NS(){var t;const e=(t=Ph())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bR(){return ES.NODE_ADMIN===!0}function PR(){return!NS()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function OR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rl.prototype.create)}}class Rl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}}function MR(t,e){return t.replace(FR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=el(Pc(s[0])||""),n=el(Pc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},$R=function(t){const e=DS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UR=function(t){const e=DS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Oc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(N_(s)&&N_(o)){if(!Mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ua(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function jR(t,e){const n=new BR(t,e);return n.subscribe.bind(n)}class BR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sf),i.error===void 0&&(i.error=sf),i.complete===void 0&&(i.complete=sf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sf(){}function eo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KR(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HR(t){return t===ai?void 0:t}function KR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const QR={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},YR=ee.INFO,XR={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},JR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=YR,this._logHandler=JR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const ZR=(t,e)=>e.some(n=>t instanceof n);let A_,R_;function eD(){return A_||(A_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tD(){return R_||(R_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bS=new WeakMap,Cp=new WeakMap,PS=new WeakMap,of=new WeakMap,kg=new WeakMap;function nD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bS.set(n,t)}).catch(()=>{}),kg.set(e,t),e}function rD(t){if(Cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cp.set(t,e)}let kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iD(t){kp=t(kp)}function sD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return PS.set(r,e.sort?e.sort():[e]),Or(r)}:tD().includes(t)?function(...e){return t.apply(af(this),e),Or(bS.get(this))}:function(...e){return Or(t.apply(af(this),e))}}function oD(t){return typeof t=="function"?sD(t):(t instanceof IDBTransaction&&rD(t),ZR(t,eD())?new Proxy(t,kp):t)}function Or(t){if(t instanceof IDBRequest)return nD(t);if(of.has(t))return of.get(t);const e=oD(t);return e!==t&&(of.set(t,e),kg.set(e,t)),e}const af=t=>kg.get(t);function aD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lD=["get","getKey","getAll","getAllKeys","count"],uD=["put","add","delete","clear"],lf=new Map;function D_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lf.set(e,s),s}iD(t=>({...t,get:(e,n,r)=>D_(e,n)||t.get(e,n,r),has:(e,n)=>!!D_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",b_="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Mh("@firebase/app"),dD="@firebase/app-compat",fD="@firebase/analytics-compat",pD="@firebase/analytics",mD="@firebase/app-check-compat",gD="@firebase/app-check",yD="@firebase/auth",vD="@firebase/auth-compat",_D="@firebase/database",wD="@firebase/database-compat",ED="@firebase/functions",ID="@firebase/functions-compat",SD="@firebase/installations",TD="@firebase/installations-compat",CD="@firebase/messaging",kD="@firebase/messaging-compat",xD="@firebase/performance",ND="@firebase/performance-compat",AD="@firebase/remote-config",RD="@firebase/remote-config-compat",DD="@firebase/storage",bD="@firebase/storage-compat",PD="@firebase/firestore",OD="@firebase/firestore-compat",LD="firebase",MD="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="[DEFAULT]",FD={[xp]:"fire-core",[dD]:"fire-core-compat",[pD]:"fire-analytics",[fD]:"fire-analytics-compat",[gD]:"fire-app-check",[mD]:"fire-app-check-compat",[yD]:"fire-auth",[vD]:"fire-auth-compat",[_D]:"fire-rtdb",[wD]:"fire-rtdb-compat",[ED]:"fire-fn",[ID]:"fire-fn-compat",[SD]:"fire-iid",[TD]:"fire-iid-compat",[CD]:"fire-fcm",[kD]:"fire-fcm-compat",[xD]:"fire-perf",[ND]:"fire-perf-compat",[AD]:"fire-rc",[RD]:"fire-rc-compat",[DD]:"fire-gcs",[bD]:"fire-gcs-compat",[PD]:"fire-fst",[OD]:"fire-fst-compat","fire-js":"fire-js",[LD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map,Ap=new Map;function $D(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(Ap.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Ap.set(e,t);for(const n of Fc.values())$D(n,t);return!0}function Eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new Rl("app","Firebase",UD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=MD;function OS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Np,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=kS()),!n)throw Lr.create("no-options");const s=Fc.get(i);if(s){if(Mc(n,s.options)&&Mc(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new GR(i);for(const l of Ap.values())o.addComponent(l);const a=new VD(n,r,o);return Fc.set(i,a),a}function Dl(t=Np){const e=Fc.get(t);if(!e&&t===Np&&kS())return OS();if(!e)throw Lr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=FD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}rr(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="firebase-heartbeat-database",BD=1,tl="firebase-heartbeat-store";let uf=null;function LS(){return uf||(uf=aD(jD,BD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tl)}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),uf}async function zD(t){try{return await(await LS()).transaction(tl).objectStore(tl).get(MS(t))}catch(e){if(e instanceof $n)Oi.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function P_(t,e){try{const r=(await LS()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,MS(t)),await r.done}catch(n){if(n instanceof $n)Oi.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function MS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=1024,WD=30*24*60*60*1e3;class HD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=O_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=O_(),{heartbeatsToSend:n,unsentEntries:r}=KD(this._heartbeatsCache.heartbeats),i=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function O_(){return new Date().toISOString().substring(0,10)}function KD(t,e=qD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?OR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L_(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){rr(new Mn("platform-logger",e=>new cD(e),"PRIVATE")),rr(new Mn("heartbeat",e=>new HD(e),"PRIVATE")),Lt(xp,b_,t),Lt(xp,b_,"esm2017"),Lt("fire-js","")}QD("");function xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YD=FS,$S=new Rl("auth","Firebase",FS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Mh("@firebase/auth");function XD(t,...e){$c.logLevel<=ee.WARN&&$c.warn(`Auth (${Yr}): ${t}`,...e)}function Gu(t,...e){$c.logLevel<=ee.ERROR&&$c.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Ng(t,...e)}function Pn(t,...e){return Ng(t,...e)}function US(t,e,n){const r=Object.assign(Object.assign({},YD()),{[e]:n});return new Rl("auth","Firebase",r).create(e,{appName:t.name})}function JD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),US(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ng(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $S.create(t,...e)}function V(t,e,...n){if(!t)throw Ng(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gu(e),new Error(e)}function ir(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZD(){return M_()==="http:"||M_()==="https:"}function M_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZD()||RR()||"connection"in navigator)?navigator.onLine:!0}function tb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Cg()||AS()}get(){return eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new bl(3e4,6e4);function Io(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function So(t,e,n,r,i={}){return jS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),VS.fetch()(BS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nb),e);try{const i=new ib(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw US(t,c,u);ln(t,c)}}catch(i){if(i instanceof $n)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function Pl(t,e,n,r,i={}){const s=await So(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ag(t.config,i):`${t.config.apiScheme}://${i}`}class ib{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),rb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e){return So(t,"POST","/v1/accounts:delete",e)}async function ob(t,e){return So(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ab(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=Rg(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(cf(i.auth_time)),issuedAtTime:ka(cf(i.iat)),expirationTime:ka(cf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cf(t){return Number(t)*1e3}function Rg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pc(n);return i?JSON.parse(i):(Gu("Failed to decode base64 JWT payload"),null)}catch(i){return Gu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lb(t){const e=Rg(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&ub(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ub({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nl(t,ob(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fb(s.providerUserInfo):[],a=db(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function hb(t){const e=fe(t);await Uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function db(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fb(t){return t.map(e=>{var{providerId:n}=e,r=xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e){const n=await jS(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rl;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rl,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ti{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nl(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ab(this,e)}reload(){return hb(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nl(this,sb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:I,isAnonymous:C,providerData:S,stsTokenManager:x}=n;V(y&&x,e,"internal-error");const R=rl.fromJSON(this.name,x);V(typeof y=="string",e,"internal-error"),cr(h,e.name),cr(d,e.name),V(typeof I=="boolean",e,"internal-error"),V(typeof C=="boolean",e,"internal-error"),cr(f,e.name),cr(m,e.name),cr(v,e.name),cr(E,e.name),cr(g,e.name),cr(p,e.name);const re=new Ti({uid:y,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:C,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:R,createdAt:g,lastLoginAt:p});return S&&Array.isArray(S)&&(re.providerData=S.map(q=>Object.assign({},q))),E&&(re._redirectEventId=E),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new rl;i.updateFromServerResponse(n);const s=new Ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Uc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Map;function Hn(t){ir(t instanceof Function,"Expected a class definition");let e=F_.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,F_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qS.type="NONE";const $_=qS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Hn($_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Hn($_);const o=Qu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ti._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QS(e))return"Blackberry";if(YS(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||HS(e))&&!e.includes("edge/"))return"Chrome";if(GS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WS(t=Ve()){return/firefox\//i.test(t)}function Dg(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HS(t=Ve()){return/crios\//i.test(t)}function KS(t=Ve()){return/iemobile/i.test(t)}function GS(t=Ve()){return/android/i.test(t)}function QS(t=Ve()){return/blackberry/i.test(t)}function YS(t=Ve()){return/webos/i.test(t)}function Fh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mb(t=Ve()){var e;return Fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gb(){return DR()&&document.documentMode===10}function XS(t=Ve()){return Fh(t)||GS(t)||YS(t)||QS(t)||/windows phone/i.test(t)||KS(t)}function yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e=[]){let n;switch(t){case"Browser":n=U_(Ve());break;case"Worker":n=`${U_(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}async function ZS(t,e){return So(t,"GET","/v2/recaptchaConfig",Io(t,e))}function V_(t){return t!==void 0&&t.enterprise!==void 0}class eT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vb().appendChild(r)})}function _b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const wb="https://www.google.com/recaptcha/enterprise.js?render=",Eb="recaptcha-enterprise",Ib="NO_RECAPTCHA";class nT{constructor(e){this.type=Eb,this.auth=Xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ZS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;V_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ib)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&V_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tT(wb+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vc(t,e,n,r=!1){const i=new nT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j_(this),this.idTokenSubscription=new j_(this),this.beforeStateQueue=new Sb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}async initializeRecaptchaConfig(){const e=await ZS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new nT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return fe(t)}class j_{constructor(e){this.auth=e,this.observer=null,this.addObserver=jR(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){const n=Eo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mc(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function kb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xb(t,e,n){const r=Xi(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rT(e),{host:o,port:a}=Nb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ab()}function rT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nb(t){const e=rT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:B_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:B_(o)}}}function B_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ab(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function Rb(t,e){return So(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(t,e){return Pl(t,"POST","/v1/accounts:signInWithPassword",Io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Io(t,e))}async function bb(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends bg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Vc(e,r,"signInWithPassword");return hf(e,i)}else return hf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Vc(e,r,"signInWithPassword");return hf(e,s)}else return Promise.reject(i)});case"emailLink":return Db(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Rb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bb(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e){return Pl(t,"POST","/v1/accounts:signInWithIdp",Io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="http://localhost";class Li extends bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:Pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lb(t){const e=la(ua(t)).link,n=e?la(ua(e)).deep_link_id:null,r=la(ua(t)).deep_link_id;return(r?la(ua(r)).link:null)||r||n||e||t}class Pg{constructor(e){var n,r,i,s,o,a;const l=la(ua(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Ob((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lb(e);try{return new Pg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pg.parseLink(n);return V(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ol{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ol{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ol{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(t,e){return Pl(t,"POST","/v1/accounts:signUp",Io(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ti._fromIdTokenResponse(e,r,i),o=z_(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=z_(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function z_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jc(e,n,r,i)}}function iT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(t,s,e,r):s})}async function Mb(t,e,n=!1){const r=await nl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nl(t,iT(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=Rg(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(t,e,n=!1){const r="signIn",i=await iT(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $b(t,e){return sT(Xi(t),e)}async function Ub(t,e,n){var r;const i=Xi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Vc(i,s,"signUpPassword");o=df(i,u)}else o=df(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Vc(i,s,"signUpPassword");return df(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Mi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Vb(t,e,n){return $b(fe(t),To.credential(e,n))}function jb(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function Bb(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function oT(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}const Bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){const t=Ve();return Dg(t)||Fh(t)}const qb=1e3,Wb=10;class lT extends aT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zb()&&yb(),this.fallbackToPolling=XS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lT.type="LOCAL";const Hb=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends aT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uT.type="SESSION";const cT=uT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Kb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function Qb(t){On().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function Yb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jb(){return hT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebaseLocalStorageDb",Zb=1,zc="firebaseLocalStorage",fT="fbase_key";class Ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uh(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function eP(){const t=indexedDB.deleteDatabase(dT);return new Ll(t).toPromise()}function Dp(){const t=indexedDB.open(dT,Zb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:fT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await eP(),e(await Dp()))})})}async function q_(t,e,n){const r=Uh(t,!0).put({[fT]:e,value:n});return new Ll(r).toPromise()}async function tP(t,e){const n=Uh(t,!1).get(e),r=await new Ll(n).toPromise();return r===void 0?null:r.value}function W_(t,e){const n=Uh(t,!0).delete(e);return new Ll(n).toPromise()}const nP=800,rP=3;class pT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$h._getInstance(Jb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yb(),!this.activeServiceWorker)return;this.sender=new Gb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dp();return await q_(e,Bc,"1"),await W_(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>q_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uh(i,!1).getAll();return new Ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pT.type="LOCAL";const iP=pT;new bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e){return e?Hn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sP(t){return sT(t.auth,new Mg(t),t.bypassAuthState)}function oP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Fb(n,new Mg(t),t.bypassAuthState)}async function aP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Mb(n,new Mg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sP;case"linkViaPopup":case"linkViaRedirect":return aP;case"reauthViaPopup":case"reauthViaRedirect":return oP;default:ln(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=new bl(2e3,1e4);async function uP(t,e,n){const r=Xi(t);JD(t,e,Og);const i=mT(r,n);return new yi(r,"signInViaPopup",e,i).executeNotNull()}class yi extends gT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lP.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="pendingRedirect",Yu=new Map;class hP extends gT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const r=await dP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dP(t,e){const n=mP(e),r=pP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fP(t,e){Yu.set(t._key(),e)}function pP(t){return Hn(t._redirectPersistence)}function mP(t){return Qu(cP,t.config.apiKey,t.name)}async function gP(t,e,n=!1){const r=Xi(t),i=mT(r,e),o=await new hP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=10*60*1e3;class vP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yP&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(e))}saveEventToCache(e){this.cachedEventUids.add(H_(e)),this.lastProcessedEventTime=Date.now()}}function H_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e={}){return So(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wP(t);for(const n of e)try{if(TP(n))return}catch{}ln(t,"unauthorized-domain")}function TP(t){const e=Rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IP.test(n))return!1;if(EP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new bl(3e4,6e4);function K_(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kP(t){return new Promise((e,n)=>{var r,i,s;function o(){K_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K_(),n(Pn(t,"network-request-failed"))},timeout:CP.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=_b("iframefcb");return On()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},tT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function xP(t){return Xu=Xu||kP(t),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new bl(5e3,15e3),AP="__/auth/iframe",RP="emulator/auth/iframe",DP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ag(e,RP):`https://${t.config.authDomain}/${AP}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=bP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function OP(t){const e=await xP(t),n=On().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:PP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},NP.get());function l(){On().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MP=500,FP=600,$P="_blank",UP="http://localhost";class G_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VP(t,e,n,r=MP,i=FP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=HS(u)?$P:n),WS(u)&&(e=e||UP,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(mb(u)&&a!=="_self")return jP(e||"",a),new G_(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new G_(h)}function jP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="__/auth/handler",zP="emulator/auth/handler",qP=encodeURIComponent("fac");async function Q_(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof Og){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof Ol){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qP}=${encodeURIComponent(l)}`:"";return`${WP(t)}?${wo(a).slice(1)}${u}`}function WP({config:t}){return t.emulator?Ag(t,zP):`https://${t.authDomain}/${BP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cT,this._completeRedirectFn=gP,this._overrideRedirectResult=fP}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Q_(e,n,r,Rp(),i);return VP(e,o,Lg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Q_(e,n,r,Rp(),i);return Qb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OP(e),r=new vP(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ff,{type:ff},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ff];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XS()||Dg()||Fh()}}const KP=HP;var Y_="@firebase/auth",X_="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YP(t){rr(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JS(t)},u=new Tb(r,i,s,l);return kb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new Mn("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(r=>new GP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Y_,X_,QP(t)),Lt(Y_,X_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=5*60,JP=xS("authIdTokenMaxAge")||XP;let J_=null;const ZP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JP)return;const i=n==null?void 0:n.token;J_!==i&&(J_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eO(t=Dl()){const e=Eo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cb(t,{popupRedirectResolver:KP,persistence:[iP,Hb,cT]}),r=xS("authTokenSyncURL");if(r){const s=ZP(r);Bb(n,s,()=>s(n.currentUser)),jb(n,o=>s(o))}const i=CS("auth");return i&&xb(n,`http://${i}`),n}YP("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function tO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,[])).next())})}function nO(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ks=function(){return ks=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ks.apply(this,arguments)},vT=function(t){return{loading:t==null,value:t}},rO=function(){return function(t,e){switch(e.type){case"error":return ks(ks({},t),{error:e.error,loading:!1,value:void 0});case"reset":return vT(e.defaultValue);case"value":return ks(ks({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},iO=function(t){var e=t?t():void 0,n=U.useReducer(rO(),vT(e)),r=n[0],i=n[1],s=U.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=U.useCallback(function(l){i({type:"error",error:l})},[]),a=U.useCallback(function(l){i({type:"value",value:l})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},sO=function(t,e){var n=iO(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return U.useEffect(function(){var l=oT(t,function(u){return tO(void 0,void 0,void 0,function(){var c;return nO(this,function(h){switch(h.label){case 0:return[3,4];case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},oO="firebase",aO="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(oO,aO,"app");var lO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Fg=Fg||{},B=lO||self;function Vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jh(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uO(t,e,n){return t.call.apply(t.bind,arguments)}function cO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=uO:ft=cO,ft.apply(null,arguments)}function _u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var hO=0;Xr.prototype.s=!1;Xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),hO!=0)};Xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $g(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Z_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var dO=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return t}();function sl(t){return/^[\s\xa0]*$/.test(t)}function Bh(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return Bh().indexOf(t)!=-1}function Ug(t){return Ug[" "](t),t}Ug[" "]=function(){};function fO(t,e){var n=oL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pO=Tn("Opera"),to=Tn("Trident")||Tn("MSIE"),wT=Tn("Edge"),bp=wT||to,ET=Tn("Gecko")&&!(Bh().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),mO=Bh().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function IT(){var t=B.document;return t?t.documentMode:void 0}var Pp;e:{var pf="",mf=function(){var t=Bh();if(ET)return/rv:([^\);]+)(\)|;)/.exec(t);if(wT)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mO)return/WebKit\/(\S+)/.exec(t);if(pO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mf&&(pf=mf?mf[1]:""),to){var gf=IT();if(gf!=null&&gf>parseFloat(pf)){Pp=String(gf);break e}}Pp=pf}var Op;if(B.document&&to){var ew=IT();Op=ew||parseInt(Pp,10)||void 0}else Op=void 0;var gO=Op;function ol(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ET){e:{try{Ug(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ol.$.h.call(this)}}Ge(ol,pt);var yO={2:"touch",3:"pen",4:"mouse"};ol.prototype.h=function(){ol.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zh="closure_listenable_"+(1e6*Math.random()|0),vO=0;function _O(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++vO,this.fa=this.ia=!1}function qh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ST(t){const e={};for(const n in t)e[n]=t[n];return e}const tw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<tw.length;s++)n=tw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wh(t){this.src=t,this.g={},this.h=0}Wh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Mp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _O(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Lp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=_T(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var jg="closure_lm_"+(1e6*Math.random()|0),yf={};function CT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)CT(t,e[s],n,r,i);return null}return n=NT(n),t&&t[zh]?t.O(e,n,jh(r)?!!r.capture:!1,i):EO(t,e,n,!1,r,i)}function EO(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=jh(i)?!!i.capture:!!i,a=zg(t);if(a||(t[jg]=a=new Wh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=IO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(xT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IO(){function t(n){return e.call(t.src,t.listener,n)}const e=SO;return t}function kT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)kT(t,e[s],n,r,i);else r=jh(r)?!!r.capture:!!r,n=NT(n),t&&t[zh]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Mp(s,n,r,i),-1<n&&(qh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=zg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mp(e,n,r,i)),(n=-1<t?e[t]:null)&&Bg(n))}function Bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[zh])Lp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zg(e))?(Lp(n,t),n.h==0&&(n.src=null,e[jg]=null)):qh(t)}}}function xT(t){return t in yf?yf[t]:yf[t]="on"+t}function SO(t,e){if(t.fa)t=!0;else{e=new ol(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bg(t),t=n.call(r,e)}return t}function zg(t){return t=t[jg],t instanceof Wh?t:null}var vf="__closure_events_fn_"+(1e9*Math.random()>>>0);function NT(t){return typeof t=="function"?t:(t[vf]||(t[vf]=function(e){return t.handleEvent(e)}),t[vf])}function Ke(){Xr.call(this),this.i=new Wh(this),this.S=this,this.J=null}Ge(Ke,Xr);Ke.prototype[zh]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){kT(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),TT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=wu(o,r,!0,e)&&i}if(o=e.g=t,i=wu(o,r,!0,e)&&i,i=wu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=wu(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qh(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function wu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Lp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var qg=B.JSON.stringify;class TO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CO(){var t=Wg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kO{constructor(){this.h=this.g=null}add(e,n){const r=AT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var AT=new TO(()=>new xO,t=>t.reset());class xO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function AO(t){B.setTimeout(()=>{throw t},0)}let al,ll=!1,Wg=new kO,RT=()=>{const t=B.Promise.resolve(void 0);al=()=>{t.then(RO)}};var RO=()=>{for(var t;t=CO();){try{t.h.call(t.g)}catch(n){AO(n)}var e=AT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ll=!1};function Hh(t,e){Ke.call(this),this.h=t||1,this.g=e||B,this.j=ft(this.qb,this),this.l=Date.now()}Ge(Hh,Ke);b=Hh.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Hg(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){Hh.$.N.call(this),Hg(this),delete this.g};function Kg(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function DT(t){t.g=Kg(()=>{t.g=null,t.i&&(t.i=!1,DT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DO extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:DT(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ul(t){Xr.call(this),this.h=t,this.g={}}Ge(ul,Xr);var nw=[];function bT(t,e,n,r){Array.isArray(n)||(n&&(nw[0]=n.toString()),n=nw);for(var i=0;i<n.length;i++){var s=CT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function PT(t){Vg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bg(e)},t),t.g={}}ul.prototype.N=function(){ul.$.N.call(this),PT(this)};ul.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kh(){this.g=!0}Kh.prototype.Ea=function(){this.g=!1};function bO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LO(t,n)+(r?" "+r:"")})}function OO(t,e){t.info(function(){return"TIMEOUT: "+e})}Kh.prototype.info=function(){};function LO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qg(n)}catch{return e}}var Ji={},rw=null;function Gh(){return rw=rw||new Ke}Ji.Ta="serverreachability";function OT(t){pt.call(this,Ji.Ta,t)}Ge(OT,pt);function cl(t){const e=Gh();it(e,new OT(e))}Ji.STAT_EVENT="statevent";function LT(t,e){pt.call(this,Ji.STAT_EVENT,t),this.stat=e}Ge(LT,pt);function _t(t){const e=Gh();it(e,new LT(e,t))}Ji.Ua="timingevent";function MT(t,e){pt.call(this,Ji.Ua,t),this.size=e}Ge(MT,pt);function Ml(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Qh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},FT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gg(){}Gg.prototype.h=null;function iw(t){return t.h||(t.h=t.i())}function $T(){}var Fl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qg(){pt.call(this,"d")}Ge(Qg,pt);function Yg(){pt.call(this,"c")}Ge(Yg,pt);var Fp;function Yh(){}Ge(Yh,Gg);Yh.prototype.g=function(){return new XMLHttpRequest};Yh.prototype.i=function(){return{}};Fp=new Yh;function $l(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ul(this),this.P=MO,t=bp?125:void 0,this.V=new Hh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new UT}function UT(){this.i=null,this.g="",this.h=!1}var MO=45e3,$p={},qc={};b=$l.prototype;b.setTimeout=function(t){this.P=t};function Up(t,e,n){t.L=1,t.v=Jh(sr(e)),t.s=n,t.S=!0,VT(t,null)}function VT(t,e){t.G=Date.now(),Ul(t),t.A=sr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),GT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new UT,t.g=mC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new DO(ft(t.Pa,t,t.g),t.O)),bT(t.U,t.g,"readystatechange",t.nb),e=t.I?ST(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),cl(),bO(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&Cn(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=Cn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||bp||this.g&&(this.h.h||this.g.ja()||lw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?cl(3):cl(2)),Xh(this);var n=this.g.da();this.ca=n;t:if(jT(this)){var r=lw(this.g);t="";var i=r.length,s=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),xa(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PO(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sl(a)){var u=a;break t}}u=null}if(n=u)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vp(this,n);else{this.i=!1,this.o=3,_t(12),vi(this),xa(this);break e}}this.S?(BT(this,c,o),bp&&this.i&&c==3&&(bT(this.U,this.V,"tick",this.mb),this.V.start())):(xs(this.j,this.m,o,null),Vp(this,o)),c==4&&vi(this),this.i&&!this.J&&(c==4?hC(this.l,this):(this.i=!1,Ul(this)))}else rL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),vi(this),xa(this)}}}catch{}finally{}};function jT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function BT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=FO(t,n),i==qc){e==4&&(t.o=4,_t(14),r=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$p){t.o=4,_t(15),xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xs(t.j,t.m,i,null),Vp(t,i);jT(t)&&i!=qc&&i!=$p&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ny(e),e.M=!0,_t(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),vi(t),xa(t))}b.mb=function(){if(this.g){var t=Cn(this.g),e=this.g.ja();this.C<e.length&&(Xh(this),BT(this,t,e),this.i&&t!=4&&Ul(this))}};function FO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qc:(n=Number(e.substring(n,r)),isNaN(n)?$p:(r+=1,r+n>e.length?qc:(e=e.slice(r,r+n),t.C=r+n,e)))}b.cancel=function(){this.J=!0,vi(this)};function Ul(t){t.Y=Date.now()+t.P,zT(t,t.P)}function zT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ml(ft(t.lb,t),e)}function Xh(t){t.B&&(B.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(OO(this.j,this.A),this.L!=2&&(cl(),_t(17)),vi(this),this.o=2,xa(this)):zT(this,this.Y-t)};function xa(t){t.l.H==0||t.J||hC(t.l,t)}function vi(t){Xh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hg(t.V),PT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jp(n.i,t))){if(!t.K&&jp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kc(n),td(n);else break e;ty(n),_t(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ml(ft(n.ib,n),6e3));if(1>=XT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _i(n,11)}else if((t.K||n.g==t)&&Kc(n),!sl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xg(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ge(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pC(r,r.J?r.pa:null,r.Y),o.K){JT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Xh(a),Ul(a)),r.g=o}else uC(r);0<n.j.length&&nd(n)}else u[0]!="stop"&&u[0]!="close"||_i(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_i(n,7):ey(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}cl(4)}catch{}}function $O(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function UO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UO(t),r=$O(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var WT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ci(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ci){this.h=t.h,Wc(this,t.j),this.s=t.s,this.g=t.g,Hc(this,t.m),this.l=t.l;var e=t.i,n=new hl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sw(this,n),this.o=t.o}else t&&(e=String(t).match(WT))?(this.h=!1,Wc(this,e[1]||"",!0),this.s=ca(e[2]||""),this.g=ca(e[3]||"",!0),Hc(this,e[4]),this.l=ca(e[5]||"",!0),sw(this,e[6]||"",!0),this.o=ca(e[7]||"")):(this.h=!1,this.i=new hl(null,this.h))}Ci.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ha(e,ow,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ha(e,ow,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ha(n,n.charAt(0)=="/"?zO:BO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ha(n,WO)),t.join("")};function sr(t){return new Ci(t)}function Wc(t,e,n){t.j=n?ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sw(t,e,n){e instanceof hl?(t.i=e,HO(t.i,t.h)):(n||(e=ha(e,qO)),t.i=new hl(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Jh(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ha(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ow=/[#\/\?@]/g,BO=/[#\?:]/g,zO=/[#\?]/g,qO=/[#\?@]/g,WO=/#/g;function hl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&VO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=hl.prototype;b.add=function(t,e){Jr(this),this.i=null,t=Co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HT(t,e){Jr(t),e=Co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function KT(t,e){return Jr(t),e=Co(t,e),t.g.has(e)}b.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){Jr(this);let e=[];if(typeof t=="string")KT(this,t)&&(e=e.concat(this.g.get(Co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Jr(this),this.i=null,t=Co(this,t),KT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function GT(t,e,n){HT(t,e),0<n.length&&(t.i=null,t.g.set(Co(t,e),$g(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HO(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(HT(this,r),GT(this,i,n))},t)),t.j=e}var KO=class{constructor(t,e){this.g=t,this.map=e}};function QT(t){this.l=t||GO,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GO=10;function YT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function XT(t){return t.h?1:t.g?t.g.size:0}function jp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xg(t,e){t.g?t.g.add(e):t.h=e}function JT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}QT.prototype.cancel=function(){if(this.i=ZT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ZT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $g(t.i)}var QO=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function YO(){this.g=new QO}function XO(t,e,n){const r=n||"";try{qT(t,function(i,s){let o=i;jh(i)&&(o=qg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function JO(t,e){const n=new Kh;if(B.Image){const r=new Image;r.onload=_u(Eu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_u(Eu,n,r,"TestLoadImage: error",!1,e),r.onabort=_u(Eu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_u(Eu,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Eu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vl(t){this.l=t.fc||null,this.j=t.ob||!1}Ge(Vl,Gg);Vl.prototype.g=function(){return new Zh(this.l,this.j)};Vl.prototype.i=function(t){return function(){return t}}({});function Zh(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(Zh,Ke);var Jg=0;b=Zh.prototype;b.open=function(t,e){if(this.readyState!=Jg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dl(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jl(this)),this.readyState=Jg};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dl(this)),this.g&&(this.readyState=3,dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jl(this):dl(this),this.readyState==3&&eC(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,jl(this))};b.Ya=function(t){this.g&&(this.response=t,jl(this))};b.ka=function(){this.g&&jl(this)};function jl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dl(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZO=B.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tC,this.L=this.M=!1}Ge(Ne,Ke);var tC="",eL=/^https?$/i,tL=["POST","PUT"];b=Ne.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fp.g(),this.C=this.u?iw(this.u):iw(Fp),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){aw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=_T(tL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iC(this),0<this.B&&((this.L=nL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=Kg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){aw(this,s)}};function nL(t){return to&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Fg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function aw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nC(t),ed(t)}function nC(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),ed(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ed(this,!0)),Ne.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?rC(this):this.kb())};b.kb=function(){rC(this)};function rC(t){if(t.h&&typeof Fg<"u"&&(!t.C[1]||Cn(t)!=4||t.da()!=2)){if(t.v&&Cn(t)==4)Kg(t.La,0,t);else if(it(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(WT)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!eL.test(i?i.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var s=2<Cn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",nC(t)}}finally{ed(t)}}}}function ed(t,e){if(t.g){iC(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function iC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function Cn(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZO(e)}};function lw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function rL(t){const e={};t=(t.g&&2<=Cn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(sl(t[r]))continue;var n=NO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}wO(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sC(t){let e="";return Vg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function oC(t){this.Ga=0,this.j=[],this.l=new Kh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wo("baseRetryDelayMs",5e3,t),this.hb=Wo("retryDelaySeedMs",1e4,t),this.eb=Wo("forwardChannelMaxRetries",2,t),this.xa=Wo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new QT(t&&t.concurrentRequestLimit),this.Ja=new YO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=oC.prototype;b.ra=8;b.H=1;function ey(t){if(aC(t),t.H==3){var e=t.W++,n=sr(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),Bl(t,n),e=new $l(t,t.l,e),e.L=2,e.v=Jh(sr(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=mC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ul(e)}fC(t)}function td(t){t.g&&(ny(t),t.g.cancel(),t.g=null)}function aC(t){td(t),t.u&&(B.clearTimeout(t.u),t.u=null),Kc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function nd(t){if(!YT(t.i)&&!t.m){t.m=!0;var e=t.Na;al||RT(),ll||(al(),ll=!0),Wg.add(e,t),t.C=0}}function iL(t,e){return XT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ml(ft(t.Na,t,e),dC(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new $l(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ST(s),TT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lC(this,i,e),n=sr(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),Bl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(sC(s)))+"&"+e:this.o&&Zg(n,this.o,s)),Xg(this.i,i),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),i.aa=!0,Up(i,n,null)):Up(i,n,e),this.H=2}}else this.H==3&&(t?uw(this,t):this.j.length==0||YT(this.i)||uw(this))};function uw(t,e){var n;e?n=e.m:n=t.W++;const r=sr(t.I);ge(r,"SID",t.K),ge(r,"RID",n),ge(r,"AID",t.V),Bl(t,r),t.o&&t.s&&Zg(r,t.o,t.s),n=new $l(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xg(t.i,n),Up(n,r,e)}function Bl(t,e){t.na&&Vg(t.na,function(n,r){ge(e,r,n)}),t.h&&qT({},function(n,r){ge(e,r,n)})}function lC(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ft(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{XO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function uC(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;al||RT(),ll||(al(),ll=!0),Wg.add(e,t),t.A=0}}function ty(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ml(ft(t.Ma,t),dC(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,cC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ml(ft(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),td(this),cC(this))};function ny(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function cC(t){t.g=new $l(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sr(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),Bl(t,e),t.o&&t.s&&Zg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Jh(sr(e)),n.s=null,n.S=!0,VT(n,t)}b.ib=function(){this.v!=null&&(this.v=null,td(this),ty(this),_t(19))};function Kc(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function hC(t,e){var n=null;if(t.g==e){Kc(t),ny(t),t.g=null;var r=2}else if(jp(t.i,e))n=e.F,JT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Gh(),it(r,new MT(r,n)),nd(t)}else uC(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&iL(t,e)||r==2&&ty(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_i(t,5);break;case 4:_i(t,10);break;case 3:_i(t,6);break;default:_i(t,2)}}}function dC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function _i(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ft(t.pb,t);n||(n=new Ci("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Wc(n,"https"),Jh(n)),JO(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),fC(t),aC(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function fC(t){if(t.H=0,t.ma=[],t.h){const e=ZT(t.i);(e.length!=0||t.j.length!=0)&&(Z_(t.ma,e),Z_(t.ma,t.j),t.i.i.length=0,$g(t.j),t.j.length=0),t.h.ya()}}function pC(t,e,n){var r=n instanceof Ci?sr(n):new Ci(n);if(r.g!="")e&&(r.g=e+"."+r.g),Hc(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ci(null);r&&Wc(s,r),e&&(s.g=e),i&&Hc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ge(r,n,e),ge(r,"VER",t.ra),Bl(t,r),r}function mC(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Vl({ob:!0})):new Ne(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function gC(){}b=gC.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Gc(){if(to&&!(10<=Number(gO)))throw Error("Environmental error: no available transport.")}Gc.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){Ke.call(this),this.g=new oC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!sl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ko(this)}Ge(Ht,Ke);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pC(t,null,t.Y),nd(t)};Ht.prototype.close=function(){ey(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qg(t),t=n);e.j.push(new KO(e.fb++,t)),e.H==3&&nd(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,ey(this.g),delete this.g,Ht.$.N.call(this)};function yC(t){Qg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(yC,Qg);function vC(){Yg.call(this),this.status=1}Ge(vC,Yg);function ko(t){this.g=t}Ge(ko,gC);ko.prototype.Ba=function(){it(this.g,"a")};ko.prototype.Aa=function(t){it(this.g,new yC(t))};ko.prototype.za=function(t){it(this.g,new vC)};ko.prototype.ya=function(){it(this.g,"b")};function sL(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(_n,sL);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _f(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_f(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_f(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_f(this,r),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function le(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var oL={};function ry(t){return-128<=t&&128>t?fO(t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function kn(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return Ze(kn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bp;return new le(e,0)}function _C(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(_C(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kn(Math.pow(e,8)),r=$s,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=kn(Math.pow(e,s)),r=r.R(s).add(kn(o))):(r=r.R(n),r=r.add(kn(o)))}return r}var Bp=4294967296,$s=ry(0),zp=ry(1),cw=ry(16777216);b=le.prototype;b.ea=function(){if(Jt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bp+r)*e,e*=Bp}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(Jt(this))return"-"+Ze(this).toString(t);for(var e=kn(Math.pow(t,6)),n=this,r="";;){var i=Yc(n,e).g;n=Qc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Kn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}b.X=function(t){return t=Qc(this,t),Jt(t)?-1:Kn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new le(n,~t.h).add(zp)}b.abs=function(){return Jt(this)?Ze(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new le(n,n[n.length-1]&-2147483648?-1:0)};function Qc(t,e){return t.add(Ze(e))}b.R=function(t){if(Kn(this)||Kn(t))return $s;if(Jt(this))return Jt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Jt(t))return Ze(this.R(Ze(t)));if(0>this.X(cw)&&0>t.X(cw))return kn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Iu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Iu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Iu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Iu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new le(n,0)};function Iu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ho(t,e){this.g=t,this.h=e}function Yc(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new Ho($s,$s);if(Jt(t))return e=Yc(Ze(t),e),new Ho(Ze(e.g),Ze(e.h));if(Jt(e))return e=Yc(t,Ze(e)),new Ho(Ze(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zp,r=e;0>=r.X(t);)n=hw(n),r=hw(r);var i=os(n,1),s=os(r,1);for(r=os(r,2),n=os(n,2);!Kn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=os(r,1),n=os(n,1)}return e=Qc(t,i.R(e)),new Ho(i,e)}for(i=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=kn(n),o=s.R(e);Jt(o)||0<o.X(t);)n-=r,s=kn(n),o=s.R(e);Kn(s)&&(s=zp),i=i.add(s),t=Qc(t,o)}return new Ho(i,t)}b.gb=function(t){return Yc(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new le(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new le(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new le(n,this.h^t.h)};function hw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new le(n,t.h)}function os(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new le(i,t.h)}Gc.prototype.createWebChannel=Gc.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;Qh.NO_ERROR=0;Qh.TIMEOUT=8;Qh.HTTP_ERROR=6;FT.COMPLETE="complete";$T.EventType=Fl;Fl.OPEN="a";Fl.CLOSE="b";Fl.ERROR="c";Fl.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=kn;le.fromString=_C;var aL=function(){return new Gc},lL=function(){return Gh()},wf=Qh,uL=FT,cL=Ji,dw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hL=Vl,Su=$T,dL=Ne,fL=_n,Us=le,pL={};const fw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Mh("@firebase/firestore");function qp(){return Fi.logLevel}function N(t,...e){if(Fi.logLevel<=ee.DEBUG){const n=e.map(iy);Fi.debug(`Firestore (${xo}): ${t}`,...n)}}function vt(t,...e){if(Fi.logLevel<=ee.ERROR){const n=e.map(iy);Fi.error(`Firestore (${xo}): ${t}`,...n)}}function Vr(t,...e){if(Fi.logLevel<=ee.WARN){const n=e.map(iy);Fi.warn(`Firestore (${xo}): ${t}`,...n)}}function iy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function $(t,e){t||M()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class gL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yL{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new wC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Xe(e)}}class vL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _L{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new vL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new wL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function IC(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ve(0,0))}static max(){return new F(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends fl{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const SL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends fl{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return SL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ie.fromString(e))}static fromName(e){return new P(ie.fromString(e).popFirst(5))}static empty(){return new P(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Wp(t){return t.fields.find(e=>e.kind===2)}function li(t){return t.fields.filter(e=>e.kind!==2)}SC.UNKNOWN_ID=-1;class TL{constructor(e,n){this.fieldPath=e,this.kind=n}}class Xc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Xc(0,Kt.min())}}function CL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Kt(i,P.empty(),e)}function TC(t){return new Kt(t.readTime,t.key,-1)}class Kt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kt(F.min(),P.empty(),-1)}static max(){return new Kt(F.max(),P.empty(),-1)}}function sy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==CC)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new Ln,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Na(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=oy(r.target.error);this.v.reject(new Na(e,i))}}static open(e,n,r,i){try{return new rd(n,e.transaction(i,r))}catch(s){throw new Na(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new xL(n)}}class Gn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,Gn.S(Ve())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),ci(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!RS())return!1;if(Gn.C())return!0;const e=Ve(),n=Gn.S(e),r=0<n&&n<10,i=Gn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=pL)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Na(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Na(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=rd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.R,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ci(this.L.delete())}}class Na extends A{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Zr(t){return t.name==="IndexedDbTransactionError"}class xL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ci(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),ci(this.store.add(e))}get(e){return ci(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),ci(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),ci(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=oy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new kL(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(h=>(l.done(),w.reject(h)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ci(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=oy(r.target.error);n(i)}})}let pw=!1;function oy(t){const e=Gn.S(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return pw||(pw=!0,setTimeout(()=>{throw r},0)),r}}return t}class NL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Zr(n)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zi(n)}await this.et(6e4)})}}class AL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=TC(s);sy(o,r)>0&&(r=o)}),new Kt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}en.ct=-1;function id(t){return t==null}function pl(t){return t===0&&1/t==-1/0}function RL(t){return typeof t=="number"&&Number.isInteger(t)&&!pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=mw(e)),e=DL(t.get(n),e);return mw(e)}function DL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function mw(t){return t+""}function xn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:M()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e){return[t,It(e)]}function xC(t,e,n){return[t,It(e),n]}const bL={},PL=["prefixPath","collectionGroup","readTime","documentId"],OL=["prefixPath","collectionGroup","documentId"],LL=["collectionGroup","readTime","prefixPath","documentId"],ML=["canonicalId","targetId"],FL=["targetId","path"],$L=["path","targetId"],UL=["collectionId","parent"],VL=["indexId","uid"],jL=["uid","sequenceNumber"],BL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],zL=["indexId","uid","orderedDocumentKey"],qL=["userId","collectionPath","documentId"],WL=["userId","collectionPath","largestBatchId"],HL=["userId","collectionGroup","largestBatchId"],NC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KL=[...NC,"documentOverlays"],AC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],RC=AC,GL=[...RC,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends kC{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function Qe(t,e){const n=z(t);return Gn.M(n.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function No(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vw(this.data.getIterator())}getIteratorFrom(e){return new vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function as(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new tn([])}unionWith(e){let n=new _e(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bC("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const QL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if($(!!t),typeof t=="string"){let e=0;const n=QL.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ly(t){const e=t.mapValue.fields.__previous_value__;return ay(e)?ly(e):e}function ml(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zu={nullValue:"NULL_VALUE"};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ay(t)?4:PC(t)?9007199254740991:10:M()}function Fn(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ml(t).isEqual(ml(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=jr(r.timestampValue),o=jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Br(r.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ke(r.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ke(r.integerValue)===ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ke(r.doubleValue),o=ke(i.doubleValue);return s===o?pl(s)===pl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(yw(s)!==yw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Fn(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function gl(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function zr(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ke(i.integerValue||i.doubleValue),a=ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _w(t.timestampValue,e.timestampValue);case 4:return _w(ml(t),ml(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Br(i),a=Br(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=W(o[l],a[l]);if(u!==0)return u}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(ke(i.latitude),ke(s.latitude));return o!==0?o:W(ke(i.longitude),ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=zr(o[l],a[l]);if(u)return u}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Cr.mapValue&&s===Cr.mapValue)return 0;if(i===Cr.mapValue)return 1;if(s===Cr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=W(a[c],u[c]);if(h!==0)return h;const d=zr(o[a[c]],l[u[c]]);if(d!==0)return d}return W(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function _w(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=jr(t),r=jr(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function ro(t){return Kp(t)}function Kp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kp(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function yl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gp(t){return!!t&&"integerValue"in t}function vl(t){return!!t&&"arrayValue"in t}function ww(t){return!!t&&"nullValue"in t}function Ew(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ec(t){return!!t&&"mapValue"in t}function Aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return No(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function XL(t){return"nullValue"in t?Zu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?yl($i.empty(),P.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:M()}function JL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?yl($i.empty(),P.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Cr:M()}function Iw(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Sw(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ec(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ec(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ec(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){No(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Aa(this.value))}}function OC(t){const e=[];return No(t.fields,(n,r)=>{const i=new Me([n]);if(ec(r)){const s=OC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,F.min(),F.min(),F.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,F.min(),F.min(),At.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,F.min(),F.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.position=e,this.inclusive=n}}function Tw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=zr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{}class J extends LC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eM(e,n,r):n==="array-contains"?new rM(e,r):n==="in"?new jC(e,r):n==="not-in"?new iM(e,r):n==="array-contains-any"?new sM(e,r):new J(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tM(e,r):new nM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zr(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class oe extends LC{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new oe(e,n)}matches(e){return so(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function so(t){return t.op==="and"}function Qp(t){return t.op==="or"}function uy(t){return MC(t)&&so(t)}function MC(t){for(const e of t.filters)if(e instanceof oe)return!1;return!0}function Yp(t){if(t instanceof J)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(uy(t))return t.filters.map(e=>Yp(e)).join(",");{const e=t.filters.map(n=>Yp(n)).join(",");return`${t.op}(${e})`}}function FC(t,e){return t instanceof J?function(n,r){return r instanceof J&&n.op===r.op&&n.field.isEqual(r.field)&&Fn(n.value,r.value)}(t,e):t instanceof oe?function(n,r){return r instanceof oe&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&FC(s,r.filters[o]),!0):!1}(t,e):void M()}function $C(t,e){const n=t.filters.concat(e);return oe.create(n,t.op)}function UC(t){return t instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${ro(e.value)}`}(t):t instanceof oe?function(e){return e.op.toString()+" {"+e.getFilters().map(UC).join(" ,")+"}"}(t):"Filter"}class eM extends J{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class tM extends J{constructor(e,n){super(e,"in",n),this.keys=VC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nM extends J{constructor(e,n){super(e,"not-in",n),this.keys=VC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class rM extends J{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vl(n)&&gl(n.arrayValue,this.value)}}class jC extends J{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gl(this.value.arrayValue,n)}}class iM extends J{constructor(e,n){super(e,"not-in",n)}matches(e){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gl(this.value.arrayValue,n)}}class sM extends J{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Xp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oM(t,e,n,r,i,s,o)}function Vi(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.dt=n}return e.dt}function zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cw(t.startAt,e.startAt)&&Cw(t.endAt,e.endAt)}function Jc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Zc(t,e){return t.filters.filter(n=>n instanceof J&&n.field.isEqual(e))}function kw(t,e,n){let r=Zu,i=!0;for(const s of Zc(t,e)){let o=Zu,a=!0;switch(s.op){case"<":case"<=":o=XL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Zu}Iw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Iw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function xw(t,e,n){let r=Cr,i=!0;for(const s of Zc(t,e)){let o=Cr,a=!0;switch(s.op){case">=":case">":o=JL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Cr}Sw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Sw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function aM(t,e,n,r,i,s,o,a){return new Ao(t,e,n,r,i,s,o,a)}function sd(t){return new Ao(t)}function Nw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function od(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function BC(t){return t.collectionGroup!==null}function js(t){const e=z(t);if(e.wt===null){e.wt=[];const n=od(e),r=cy(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Vs(n)),e.wt.push(new Vs(Me.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vs(Me.keyField(),s))}}}return e.wt}function wn(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=Xp(e.path,e.collectionGroup,js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of js(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vs(s.field,o))}const r=e.endAt?new io(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new io(e.startAt.position,e.startAt.inclusive):null;e._t=Xp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Jp(t,e){e.getFirstInequalityField(),od(t);const n=t.filters.concat([e]);return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eh(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ad(t,e){return zl(wn(t),wn(e))&&t.limitType===e.limitType}function zC(t){return`${Vi(wn(t))}|lt:${t.limitType}`}function Zp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>UC(r)).join(", ")}]`),id(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of js(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Tw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,js(n),r)||n.endAt&&!function(i,s,o){const a=Tw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,js(n),r))}(t,e)}function lM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qC(t){return(e,n)=>{let r=!1;for(const i of js(t)){const s=uM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uM(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?zr(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){No(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return DC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new Ee(P.comparator);function jt(){return cM}const WC=new Ee(P.comparator);function da(...t){let e=WC;for(const n of t)e=e.insert(n.key,n);return e}function HC(t){let e=WC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nn(){return Ra()}function KC(){return Ra()}function Ra(){return new ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const hM=new Ee(P.comparator),dM=new _e(P.comparator);function K(...t){let e=dM;for(const n of t)e=e.add(n);return e}const fM=new _e(W);function pM(){return fM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pl(e)?"-0":e}}function QC(t){return{integerValue:""+t}}function mM(t,e){return RL(e)?QC(e):GC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this._=void 0}}function gM(t,e,n){return t instanceof oo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ay(i)&&(i=ly(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ao?XC(t,e):t instanceof lo?JC(t,e):function(r,i){const s=YC(r,i),o=Aw(s)+Aw(r.gt);return Gp(s)&&Gp(r.gt)?QC(o):GC(r.serializer,o)}(t,e)}function yM(t,e,n){return t instanceof ao?XC(t,e):t instanceof lo?JC(t,e):n}function YC(t,e){return t instanceof _l?Gp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class oo extends ld{}class ao extends ld{constructor(e){super(),this.elements=e}}function XC(t,e){const n=ZC(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends ld{constructor(e){super(),this.elements=e}}function JC(t,e){let n=ZC(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class _l extends ld{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Aw(t){return ke(t.integerValue||t.doubleValue)}function ZC(t){return vl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.field=e,this.transform=n}}function vM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ao&&r instanceof ao||n instanceof lo&&r instanceof lo?no(n.elements,r.elements,Fn):n instanceof _l&&r instanceof _l?Fn(n.gt,r.gt):n instanceof oo&&r instanceof oo}(t.transform,e.transform)}class _M{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ud{}function t1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cd(t.key,wt.none()):new Ro(t.key,t.data,wt.none());{const n=t.data,r=At.empty();let i=new _e(Me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ti(t.key,r,new tn(i.toArray()),wt.none())}}function wM(t,e,n){t instanceof Ro?function(r,i,s){const o=r.value.clone(),a=Dw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ti?function(r,i,s){if(!tc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Dw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(n1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Ro?function(i,s,o,a){if(!tc(i.precondition,s))return o;const l=i.value.clone(),u=bw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ti?function(i,s,o,a){if(!tc(i.precondition,s))return o;const l=bw(i.fieldTransforms,a,s),u=s.data;return u.setAll(n1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return tc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function EM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=YC(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function Rw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>vM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends ud{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ti extends ud{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dw(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yM(o,a,n[i]))}return r}function bw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gM(s,o,e))}return r}class cd extends ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r1 extends ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=t1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>Rw(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>Rw(n,r))}}class dy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=hM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,Z;function SM(t){switch(t){default:return M();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function i1(t){if(t===void 0)return vt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Oe.OK:return T.OK;case Oe.CANCELLED:return T.CANCELLED;case Oe.UNKNOWN:return T.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return T.INTERNAL;case Oe.UNAVAILABLE:return T.UNAVAILABLE;case Oe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Oe.NOT_FOUND:return T.NOT_FOUND;case Oe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Oe.ABORTED:return T.ABORTED;case Oe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Oe.DATA_LOSS:return T.DATA_LOSS;default:return M()}}(Z=Oe||(Oe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cu}static getOrCreateInstance(){return Cu===null&&(Cu=new py),Cu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Cu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=new Us([4294967295,4294967295],0);function Pw(t){const e=TM().encode(t),n=new fL;return n.update(e),new Uint8Array(n.digest())}function Ow(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Us([n,r],0),new Us([i,s],0)]}class my{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fa(`Invalid padding: ${n}`);if(r<0)throw new fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Us.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Us.fromNumber(r)));return i.compare(CM)===1&&(i=new Us([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Pw(e),[r,i]=Ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new my(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Pw(e),[r,i]=Ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hd(F.min(),i,new Ee(W),jt(),K())}}class Wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wl(r,n,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class s1{constructor(e,n){this.targetId=e,this.Vt=n}}class o1{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Lw{constructor(){this.St=0,this.Dt=Fw(),this.Ct=ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=K(),n=K(),r=K();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Wl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Fw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class kM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=jt(),this.zt=Mw(),this.Wt=new Ee(W)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Jc(o))if(i===0){const a=new P(o.path);this.Yt(r,a,xe.newNoDocument(a,F.min()))}else $(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=py.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,m,v,E,g;const p={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(p.bloomFilter={applied:u===0,hashCount:(d=y==null?void 0:y.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(f=y==null?void 0:y.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(g=(E=y==null?void 0:y.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Br(s).toUint8Array()}catch(c){if(c instanceof bC)return Vr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new my(l,o,a)}catch(c){return Vr(c instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Jc(a.target)){const l=new P(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,xe.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=K();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new hd(e,n,this.Wt,this.jt,r);return this.jt=jt(),this.zt=Mw(),this.Wt=new Ee(W),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Lw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new _e(W),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Lw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Mw(){return new Ee(P.comparator)}function Fw(){return new Ee(P.comparator)}const xM={asc:"ASCENDING",desc:"DESCENDING"},NM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AM={and:"AND",or:"OR"};class RM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function em(t,e){return t.useProto3Json||id(e)?e:{value:e}}function uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DM(t,e){return uo(t,e.toTimestamp())}function St(t){return $(!!t),F.fromTimestamp(function(e){const n=jr(e);return new ve(n.seconds,n.nanos)}(t))}function gy(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function l1(t){const e=ie.fromString(t);return $(g1(e)),e}function th(t,e){return gy(t.databaseId,e.path)}function ki(t,e){const n=l1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(c1(n))}function tm(t,e){return gy(t.databaseId,e)}function u1(t){const e=l1(t);return e.length===4?ie.emptyPath():c1(e)}function nm(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function c1(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $w(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function bM(t,e,n){const r=ki(t,e.name),i=St(e.updateTime),s=e.createTime?St(e.createTime):F.min(),o=new At({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function PM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?($(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:i1(l.code);return new A(u,l.message||"")}(o);n=new o1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ki(t,r.document.name),s=St(r.document.updateTime),o=r.document.createTime?St(r.document.createTime):F.min(),a=new At({mapValue:{fields:r.document.fields}}),l=xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ki(t,r.document),s=r.readTime?St(r.readTime):F.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ki(t,r.document),s=r.removedTargetIds||[];n=new nc([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IM(i,s),a=r.targetId;n=new s1(a,o)}}return n}function nh(t,e){let n;if(e instanceof Ro)n={update:$w(t,e.key,e.value)};else if(e instanceof cd)n={delete:th(t,e.key)};else if(e instanceof ti)n={update:$w(t,e.key,e.data),updateMask:UM(e.fieldMask)};else{if(!(e instanceof r1))return M();n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof oo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ao)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _l)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:DM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function rm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?wt.updateTime(St(i.updateTime)):i.exists!==void 0?wt.exists(i.exists):wt.none()}(e.currentDocument):wt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)$(o.setToServerValue==="REQUEST_TIME"),a=new oo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ao(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new lo(u)}else"increment"in o?a=new _l(s,o.increment):M();const l=Me.fromServerFormat(o.fieldPath);return new e1(l,a)}(t,i)):[];if(e.update){e.update.name;const i=ki(t,e.update.name),s=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new tn(l.map(u=>Me.fromServerFormat(u)))}(e.updateMask);return new ti(i,s,o,n,r)}return new Ro(i,s,n,r)}if(e.delete){const i=ki(t,e.delete);return new cd(i,n)}if(e.verify){const i=ki(t,e.verify);return new r1(i,n)}return M()}function OM(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?St(r.updateTime):St(i);return s.isEqual(F.min())&&(s=St(i)),new _M(s,r.transformResults||[])}(n,e))):[]}function h1(t,e){return{documents:[tm(t,e.path)]}}function d1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=tm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return m1(oe.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:cs(c.field),direction:MM(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=em(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function f1(t){let e=u1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=p1(c);return h instanceof oe&&uy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Vs(hs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,id(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new io(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new io(d,h)}(n.endAt)),aM(e,i,o,s,a,"F",l,u)}function LM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=hs(e.unaryFilter.field);return J.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=hs(e.unaryFilter.field);return J.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(e.unaryFilter.field);return J.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hs(e.unaryFilter.field);return J.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return J.create(hs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return oe.create(e.compositeFilter.filters.map(n=>p1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function MM(t){return xM[t]}function FM(t){return NM[t]}function $M(t){return AM[t]}function cs(t){return{fieldPath:t.canonicalString()}}function hs(t){return Me.fromServerFormat(t.fieldPath)}function m1(t){return t instanceof J?function(e){if(e.op==="=="){if(Ew(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NAN"}};if(ww(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ew(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NAN"}};if(ww(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(e.field),op:FM(e.op),value:e.value}}}(t):t instanceof oe?function(e){const n=e.getFilters().map(r=>m1(r));return n.length===1?n[0]:{compositeFilter:{op:$M(e.op),filters:n}}}(t):M()}function UM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function g1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.fe=e}}function VM(t,e){let n;if(e.document)n=bM(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=P.fromSegments(e.noDocument.path),i=Bi(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const r=P.fromSegments(e.unknownDocument.path),i=Bi(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new ve(r[0],r[1]);return F.fromTimestamp(i)}(e.readTime)),n}function Uw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:th(i,s.key),fields:s.data.value.mapValue.fields,updateTime:uo(i,s.version.toTimestamp()),createTime:uo(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ji(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:n.path.toArray(),version:ji(e.version)}}return r}function rh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ji(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bi(t){const e=new ve(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function hi(t,e){const n=(e.baseMutations||[]).map(s=>rm(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>rm(t.fe,s)),i=ve.fromMillis(e.localWriteTimeMs);return new hy(e.batchId,i,n,r)}function pa(t){const e=Bi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Bi(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return t.query.documents!==void 0?($((i=t.query).documents.length===1),r=wn(sd(u1(i.documents[0])))):r=function(s){return wn(f1(s))}(t.query),new Qn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ot.fromBase64String(t.resumeToken))}function v1(t,e){const n=ji(e.snapshotVersion),r=ji(e.lastLimboFreeSnapshotVersion);let i;i=Jc(e.target)?h1(t.fe,e.target):d1(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Vi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function _1(t){const e=f1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eh(e,e.limit,"L"):e}function Ef(t,e){return new fy(e.largestBatchId,rm(t.fe,e.overlayMutation))}function Vw(t,e){const n=e.path.lastSegment();return[t,It(e.path.popLast()),n]}function jw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ji(r.readTime),documentKey:It(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{getBundleMetadata(e,n){return Bw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Bi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Bw(e).put({bundleId:(r=n).id,createTime:ji(St(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return zw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:_1(i.bundledQuery),readTime:Bi(i.readTime)};var i})}saveNamedQuery(e,n){return zw(e).put(function(r){return{name:r.name,readTime:ji(St(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Bw(t){return Qe(t,"bundles")}function zw(t){return Qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new dd(e,r)}getOverlay(e,n){return Ko(e).get(Vw(this.userId,n)).next(r=>r?Ef(this.serializer,r):null)}getOverlays(e,n){const r=Nn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new fy(n,o);i.push(this.we(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(It(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ko(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Nn(),s=It(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ko(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Ef(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Nn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ko(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Ef(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}we(e,n){return Ko(e).put(function(r,i,s){const[o,a,l]=Vw(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:nh(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function Ko(t){return Qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(ke(e.integerValue));else if("doubleValue"in e){const r=ke(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),pl(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(Br(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?PC(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):M()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),P.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}di.Ve=new di;function BM(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function qw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=BM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class zM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=qw(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=qw(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class qM{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class WM{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Go{constructor(){this.je=new zM,this.ze=new qM(this.je),this.We=new WM(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fi(this.indexId,this.documentKey,this.arrayValue,r)}}function hr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Ww(t.arrayValue,e.arrayValue),n!==0?n:(n=Ww(t.directionalValue,e.directionalValue),n!==0?n:P.comparator(t.documentKey,e.documentKey)))}function Ww(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){$(e.collectionGroup===this.collectionId);const n=Wp(e);if(n!==void 0&&!this.en(n))return!1;const r=li(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){var e,n;if($(t instanceof J||t instanceof oe),t instanceof J){if(t instanceof jC){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>J.create(t.field,"==",s)))||[];return oe.create(i,"or")}return t}const r=t.filters.map(i=>w1(i));return oe.create(r,t.op)}function KM(t){if(t.getFilters().length===0)return[];const e=om(w1(t));return $(E1(e)),im(e)||sm(e)?[e]:e.getFilters()}function im(t){return t instanceof J}function sm(t){return t instanceof oe&&uy(t)}function E1(t){return im(t)||sm(t)||function(e){if(e instanceof oe&&Qp(e)){for(const n of e.getFilters())if(!im(n)&&!sm(n))return!1;return!0}return!1}(t)}function om(t){if($(t instanceof J||t instanceof oe),t instanceof J)return t;if(t.filters.length===1)return om(t.filters[0]);const e=t.filters.map(r=>om(r));let n=oe.create(e,t.op);return n=ih(n),E1(n)?n:($(n instanceof oe),$(so(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>yy(r,i)))}function yy(t,e){let n;return $(t instanceof J||t instanceof oe),$(e instanceof J||e instanceof oe),n=t instanceof J?e instanceof J?function(r,i){return oe.create([r,i],"and")}(t,e):Hw(t,e):e instanceof J?Hw(e,t):function(r,i){if($(r.filters.length>0&&i.filters.length>0),so(r)&&so(i))return $C(r,i.getFilters());const s=Qp(r)?r:i,o=Qp(r)?i:r,a=s.filters.map(l=>yy(l,o));return oe.create(a,"or")}(t,e),ih(n)}function Hw(t,e){if(so(e))return $C(e,t.getFilters());{const n=e.filters.map(r=>yy(t,r));return oe.create(n,"or")}}function ih(t){if($(t instanceof J||t instanceof oe),t instanceof J)return t;const e=t.getFilters();if(e.length===1)return ih(e[0]);if(MC(t))return t;const n=e.map(i=>ih(i)),r=[];return n.forEach(i=>{i instanceof J?r.push(i):i instanceof oe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.rn=new vy}addToCollectionParentIndex(e,n){return this.rn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Kt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class vy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Uint8Array(0);class QM{constructor(e,n){this.user=e,this.databaseId=n,this.on=new vy,this.un=new ei(r=>Vi(r),(r,i)=>zl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:It(i)};return Kw(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[IC(n),""],!1,!0);return Kw(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(xn(o.parent))}return r})}addFieldIndex(e,n){const r=xu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Yo(e);return s.next(a=>{o.put(jw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=xu(e),i=Yo(e),s=Qo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Qo(e);let i=!0;const s=new Map;return w.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=K();const a=[];return w.forEach(s,(l,u)=>{var c;N("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(y=>`${y.fieldPath}:${y.kind}`).join(",")}`} to execute ${Vi(n)}`);const h=function(y,I){const C=Wp(I);if(C===void 0)return null;for(const S of Zc(y,C.fieldPath))switch(S.op){case"array-contains-any":return S.value.arrayValue.values||[];case"array-contains":return[S.value]}return null}(u,l),d=function(y,I){const C=new Map;for(const S of li(I))for(const x of Zc(y,S.fieldPath))switch(x.op){case"==":case"in":C.set(S.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return C.set(S.fieldPath.canonicalString(),x.value),Array.from(C.values())}return null}(u,l),f=function(y,I){const C=[];let S=!0;for(const x of li(I)){const R=x.kind===0?kw(y,x.fieldPath,y.startAt):xw(y,x.fieldPath,y.startAt);C.push(R.value),S&&(S=R.inclusive)}return new io(C,S)}(u,l),m=function(y,I){const C=[];let S=!0;for(const x of li(I)){const R=x.kind===0?xw(y,x.fieldPath,y.endAt):kw(y,x.fieldPath,y.endAt);C.push(R.value),S&&(S=R.inclusive)}return new io(C,S)}(u,l),v=this.hn(l,u,f),E=this.hn(l,u,m),g=this.ln(l,u,d),p=this.fn(l.indexId,h,v,f.inclusive,E,m.inclusive,g);return w.forEach(p,y=>r.H(y,n.limit).next(I=>{I.forEach(C=>{const S=P.fromSegments(C.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return w.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=KM(oe.create(e.filters,"and")).map(r=>Xp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.dn(n[h/u]):ku,f=this.wn(e,d,r[h%u],i),m=this._n(e,d,s[h%u],o),v=a.map(E=>this.wn(e,d,E,!0));c.push(...this.createRange(f,m,v))}return c}wn(e,n,r,i){const s=new fi(e,P.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new fi(e,P.empty(),n,r);return i?s.Je():s}an(e,n){const r=new HM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return w.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new _e(Me.comparator),u=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:l=l.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new Go;for(const i of li(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);di.Ve._e(s,o)}return r.Qe()}dn(e){const n=new Go;return di.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new Go;return di.Ve._e(yl(this.databaseId,n),r.He(function(i){const s=li(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new Go);let s=0;for(const o of li(e)){const a=r[s++];for(const l of i)if(this.yn(n,o.fieldPath)&&vl(a))i=this.pn(i,o,a);else{const u=l.He(o.kind);di.Ve._e(a,u)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Go;l.seed(a.Qe()),di.Ve._e(o,l.He(n.kind)),s.push(l)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof J&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=xu(e),i=Yo(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new Xc(c.sequenceNumber,new Kt(Bi(c.readTime),new P(xn(c.documentKey)),c.largestBatchId)):Xc.empty(),d=u.fields.map(([f,m])=>new TL(Me.fromServerFormat(f),m));return new SC(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:W(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=xu(e),s=Yo(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(jw(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.En(e,i,l).next(u=>{const c=this.An(s,l);return u.isEqual(c)?w.resolve():this.vn(e,s,l,u,c)}))))})}Rn(e,n,r,i){return Qo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return Qo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=Qo(e);let s=new _e(hr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new _e(hr);const i=this.mn(n,e);if(i==null)return r;const s=Wp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(vl(o))for(const a of o.arrayValue.values||[])r=r.add(new fi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new fi(n.indexId,e.key,ku,i));return r}vn(e,n,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),f=l.getIterator();let m=as(d),v=as(f);for(;m||v;){let E=!1,g=!1;if(m&&v){const p=u(m,v);p<0?g=!0:p>0&&(E=!0)}else m!=null?g=!0:E=!0;E?(c(v),v=as(f)):g?(h(m),m=as(d)):(m=as(d),v=as(f))}}(i,s,hr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),w.waitFor(o)}Tn(e){let n=1;return Yo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>hr(o,a)).filter((o,a,l)=>!a||hr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=hr(o,e),l=hr(o,n);if(a===0)i[0]=e.Je();else if(a>0&&l<0)i.push(o),i.push(o.Je());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ku,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ku,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return hr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Gw)}getMinOffset(e,n){return w.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||M())).next(Gw)}}function Kw(t){return Qe(t,"collectionParents")}function Qo(t){return Qe(t,"indexEntries")}function xu(t){return Qe(t,"indexConfiguration")}function Yo(t){return Qe(t,"indexState")}function Gw(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;sy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Kt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const c of n.mutations){const h=xC(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function sh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class fd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new fd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ds(e),o=dr(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new hy(a,n,r,i),u=function(d,f,m){const v=m.baseMutations.map(g=>nh(d.fe,g)),E=m.mutations.map(g=>nh(d.fe,g));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:v,mutations:E}}(this.serializer,this.userId,l),c=[];let h=new _e((d,f)=>W(d.canonicalString(),f.canonicalString()));for(const d of i){const f=xC(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,bL))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return dr(e).get(n).next(r=>r?($(r.userId===this.userId),hi(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?w.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return dr(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=hi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return dr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).j("userMutationsIndex",n).next(r=>r.map(i=>hi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ju(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ds(e).X({range:i},(o,a,l)=>{const[u,c,h]=o,d=xn(c);if(u===this.userId&&n.path.isEqual(d))return dr(e).get(h).next(f=>{if(!f)throw M();$(f.userId===this.userId),s.push(hi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(W);const i=[];return n.forEach(s=>{const o=Ju(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ds(e).X({range:a},(u,c,h)=>{const[d,f,m]=u,v=xn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(m):h.done()});i.push(l)}),w.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ju(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(W);return ds(e).X({range:o},(l,u,c)=>{const[h,d,f]=l,m=xn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(dr(e).get(s).next(o=>{if(o===null)throw M();$(o.userId===this.userId),r.push(hi(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return I1(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return ds(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=xn(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return S1(e,this.userId,n)}xn(e){return T1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function S1(t,e,n){const r=Ju(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ds(t).X({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function dr(t){return Qe(t,"mutations")}function ds(t){return Qe(t,"documentMutations")}function T1(t){return Qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new zi(0)}static Mn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new zi(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>F.fromTimestamp(new ve(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ls(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ls(e).X((o,a)=>{const l=pa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ls(e).X((r,i)=>{const s=pa(i);n(s)})}$n(e){return Yw(e).get("targetGlobalKey").next(n=>($(n!==null),n))}On(e,n){return Yw(e).put("targetGlobalKey",n)}Fn(e,n){return ls(e).put(v1(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Vi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ls(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=pa(a);zl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Er(e);return n.forEach(o=>{const a=It(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Er(e);return w.forEach(n,s=>{const o=It(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Er(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Er(e);let s=K();return i.X({range:r,Y:!0},(o,a,l)=>{const u=xn(o[1]),c=new P(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=It(n.path),i=IDBKeyRange.bound([r],[IC(r)],!1,!0);let s=0;return Er(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,n){return ls(e).get(n).next(r=>r?pa(r):null)}}function ls(t){return Qe(t,"targets")}function Yw(t){return Qe(t,"targetGlobal")}function Er(t){return Qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class XM{constructor(e){this.Ln=e,this.buffer=new _e(Xw),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zr(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Qn(3e5)})}}class ZM{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(en.ct);const r=new XM(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Qw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qw):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),qp()<=ee.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function e2(t,e){return new ZM(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.db=e,this.garbageCollector=e2(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return Nu(e,r)}removeReference(e,n,r){return Nu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Nu(e,n)}Xn(e,n){return function(r,i){let s=!1;return T1(r).Z(o=>S1(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,F.min()),Er(e).delete([0,It(o.path)])))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Nu(e,n)}Yn(e,n){const r=Er(e);let i,s=en.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==en.ct&&n(new P(xn(i)),s),s=u,i=l):s=en.ct}).next(()=>{s!==en.ct&&n(new P(xn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nu(t,e){return Er(t).put(function(n,r){return{targetId:0,path:It(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.changes=new ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ii(e).put(r)}removeEntry(e,n,r){return ii(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],rh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return ii(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Xo(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return ii(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Xo(n))},(i,s)=>{r={document:this.ts(n,s),size:sh(s)}}).next(()=>r)}getEntries(e,n){let r=jt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=jt(),i=new Ee(P.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,sh(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return w.resolve();let i=new _e(e0);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Xo(i.first()),Xo(i.last())),o=i.getIterator();let a=o.getNext();return ii(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=P.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&e0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(Xo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),rh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ii(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=jt();for(const c of l){const h=this.ts(P.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(ql(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=jt();const o=Zw(n,r),a=Zw(n,Kt.max());return ii(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.ts(P.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new r2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Jw(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}Zn(e,n){return Jw(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=VM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(F.min())))return r}return xe.newInvalidDocument(e)}}function k1(t){return new n2(t)}class r2 extends C1{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new ei(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Uw(this.os.serializer,o);i=i.add(s.path.popLast());const u=sh(l);r+=u-a.size,n.push(this.os.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Uw(this.os.serializer,o.convertToNoDocument(F.min()));n.push(this.os.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Jw(t){return Qe(t,"remoteDocumentGlobal")}function ii(t){return Qe(t,"remoteDocumentsV14")}function Xo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Zw(t,e){const n=e.documentKey.path.toArray();return[t,rh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function e0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=W(n[s],r[s]),i)return i;return i=W(n.length,r.length),i||(i=W(n[n.length-2],r[r.length-2]),i||W(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,tn.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=Nn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=da();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jt();const o=Ra(),a=Ra();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ti)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Da(c.mutation,u,c.mutation.getFieldMask(),ve.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new i2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ra();let i=new Ee((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||tn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=KC();c.forEach(d=>{if(!s.has(d)){const f=t1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Nn());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:HC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=da();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const l=function(u,c){return new Ao(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,xe.newInvalidDocument(u)))});let o=da();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Da(u.mutation,l,tn.empty(),ve.now()),ql(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return w.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:St(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:_1(r.bundledQuery),readTime:St(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this.overlays=new Ee(P.comparator),this.ls=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Nn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Nn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Nn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fy(n,r));let s=this.ls.get(n);s===void 0&&(s=K(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.fs=new _e(ze.ds),this.ws=new _e(ze._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new ze(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new ze(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new P(new ie([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new P(new ie([])),r=new ze(n,e),i=new ze(n,e+1);let s=K();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return P.comparator(e.key,n.key)||W(e.As,n.As)}static _s(e,n){return W(e.As,n.As)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new _e(ze.ds)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(W);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),w.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ze(new P(s),0);let a=new _e(W);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),w.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new ze(n,0),i=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.Ds=e,this.docs=new Ee(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jt();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sy(TC(c),r)<=0||(i.has(c.key)||ql(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Cs(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new u2(this)}getSize(e){return w.resolve(this.size)}}class u2 extends C1{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.persistence=e,this.xs=new ei(n=>Vi(n),zl),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new _y,this.targetCount=0,this.Ms=zi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),w.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Fn(n),w.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.$s={},this.overlays={},this.Os=new en(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new c2(this),this.indexManager=new GM,this.remoteDocumentCache=function(r){return new l2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new y1(n),this.qs=new s2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new a2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new h2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return w.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class h2 extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class pd{constructor(e){this.persistence=e,this.Qs=new _y,this.js=null}static zs(e){return new pd(e)}get Ws(){if(this.js)return this.js;throw M()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),w.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ws,r=>{const i=P.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return w.or([()=>w.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.serializer=e}O(e,n,r,i){const s=new rd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gw,{unique:!0}),a.createObjectStore("documentMutations")}(e),t0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),t0(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",gw,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:qL});l.createIndex("collectionPathOverlayIndex",WL,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",HL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:PL});l.createIndex("documentKeyIndex",OL),l.createIndex("collectionGroupIndex",LL)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:VL}).createIndex("sequenceNumberIndex",jL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:BL}).createIndex("documentKeyIndex",zL,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=sh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,l=>{$(l.userId===s.userId);const u=hi(this.serializer,l);return I1(e,s.userId,u).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new ie(o),u=function(c){return[0,It(c)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:It(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:UL});const r=n.store("collectionParents"),i=new vy,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:It(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new ie(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=xn(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=pa(i),o=v1(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new P(ie.fromString(u.document.name).popFirst(5)):u.noDocument?P.fromSegments(u.noDocument.path):u.unknownDocument?P.fromSegments(u.unknownDocument.path):M()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}si(e,n){const r=n.store("mutations"),i=k1(this.serializer),s=new N1(pd.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:K();hi(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new Xe(u),h=dd.de(this.serializer,c),d=s.getIndexManager(c),f=fd.de(c,this.serializer,d,s.referenceDelegate);return new x1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Hp(n,en.ct),l).next()})})}}function t0(t){t.createObjectStore("targetDocuments",{keyPath:FL}).createIndex("documentTargetsIndex",$L,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ML,{unique:!0}),t.createObjectStore("targetGlobal")}const If="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wy{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=c,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!wy.D())throw new A(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new t2(this,i),this.di=n+"main",this.serializer=new y1(l),this.wi=new Gn(this.di,this.ui,new d2(this.serializer)),this.Bs=new YM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=k1(this.serializer),this.qs=new jM,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&vt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,If);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new en(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Au(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(Zr(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Jo(e).get("owner").next(n=>w.resolve(this.Ri(n)))}Pi(e){return Au(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Qe(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?w.resolve(!0):Jo(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,If);return!1}}return!(!this.networkEnabled||!this.inForeground)||Au(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Hp(e,en.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Au(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return fd.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new QM(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return dd.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?GL:o===14?RC:o===13?AC:o===12?KL:o===11?NC:void M();var o;let a;return this.wi.runTransaction(e,i,s,l=>(a=new Hp(l,this.Os?this.Os.next():en.ct),n==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new A(T.FAILED_PRECONDITION,CC);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return Jo(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(T.FAILED_PRECONDITION,If)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Jo(e).put("owner",n)}static D(){return Gn.D()}Ai(e){const n=Jo(e);return n.get("owner").next(r=>this.Ri(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;PR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return vt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){vt("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Jo(t){return Qe(t,"owner")}function Au(t){return Qe(t,"clientMetadata")}function f2(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ey(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Nw(n))return w.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=eh(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,eh(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Nw(n)||i.isEqual(F.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(qp()<=ee.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zp(n)),this.Wi(e,o,n,CL(i,-1)))})}ji(e,n){let r=new _e(qC(e));return n.forEach((i,s)=>{ql(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return qp()<=ee.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Zp(n)),this.Ui.getDocumentsMatchingQuery(e,n,Kt.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ee(W),this.Yi=new ei(s=>Vi(s),zl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x1(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function R1(t,e,n,r){return new p2(t,e,n,r)}async function D1(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function m2(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);$(v!==null),m.version.compareTo(v)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function b1(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function g2(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(m,v,E){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=jt(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(y2(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(F.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function y2(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function v2(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _2(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function am(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zr(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function n0(t,e,n){const r=z(t);let i=F.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.Yi.get(u);return h!==void 0?w.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:K())).next(a=>(w2(r,lM(e),a),{documents:a,ir:s})))}function w2(t,e,n){let r=t.Xi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class r0{constructor(){this.activeTargetIds=pM()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P1{constructor(){this.Hr=new r0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new r0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru=null;function Sf(){return Ru===null?Ru=268435456+Math.round(2147483648*Math.random()):Ru++,"0x"+Ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class T2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Sf(),a=this.To(e,n);N("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(N("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Vr("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+xo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=I2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Sf();return new Promise((o,a)=>{const l=new dL;l.setWithCredentials(!0),l.listenOnce(uL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wf.NO_ERROR:const c=l.getResponseJson();N(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case wf.TIMEOUT:N(ct,`RPC '${e}' ${s} timed out`),a(new A(T.DEADLINE_EXCEEDED,"Request time out"));break;case wf.HTTP_ERROR:const h=l.getStatus();if(N(ct,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(E)>=0?E:T.UNKNOWN}(f.status);a(new A(m,f.message))}else a(new A(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(T.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N(ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);N(ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Sf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aL(),a=lL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new hL({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");N(ct,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const m=new S2({ro:E=>{f?N(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(N(ct,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),N(ct,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,g,p)=>{E.listen(g,y=>{try{p(y)}catch(I){setTimeout(()=>{throw I},0)}})};return v(h,Su.EventType.OPEN,()=>{f||N(ct,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Su.EventType.CLOSE,()=>{f||(f=!0,N(ct,`RPC '${e}' stream ${i} transport closed`),m.wo())}),v(h,Su.EventType.ERROR,E=>{f||(f=!0,Vr(ct,`RPC '${e}' stream ${i} transport errored:`,E),m.wo(new A(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Su.EventType.MESSAGE,E=>{var g;if(!f){const p=E.data[0];$(!!p);const y=p,I=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(I){N(ct,`RPC '${e}' stream ${i} received error:`,I);const C=I.status;let S=function(R){const re=Oe[R];if(re!==void 0)return i1(re)}(C),x=I.message;S===void 0&&(S=T.INTERNAL,x="Unknown error status: "+C+" with message "+I.message),f=!0,m.wo(new A(S,x)),h.close()}else N(ct,`RPC '${e}' stream ${i} received:`,p),m._o(p)}}),v(a,cL.STAT_EVENT,E=>{E.stat===dw.PROXY?N(ct,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===dw.NOPROXY&&N(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return typeof window<"u"?window:null}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){return new RM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new O1(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new A(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k2 extends L1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=PM(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?St(s.readTime):F.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=nm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Jc(a)?{documents:h1(i,a)}:{query:d1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=a1(i,s.resumeToken);const l=em(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(F.min())>0){o.readTime=uo(i,s.snapshotVersion.toTimestamp());const l=em(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=LM(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=nm(this.serializer),n.removeTarget=e,this.Wo(n)}}class x2 extends L1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=OM(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.cu(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=nm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nh(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(T.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(T.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class A2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vt(n),this.mu=!1):N("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{es(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.vu.add(4),await Hl(l),l.bu.set("Unknown"),l.vu.delete(4),await gd(l)}(this))})}),this.bu=new A2(r,i)}}async function gd(t){if(es(t))for(const e of t.Ru)await e(!0)}async function Hl(t){for(const e of t.Ru)await e(!1)}function M1(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Ty(n)?Sy(n):Do(n).Ko()&&Iy(n,e))}function F1(t,e){const n=z(t),r=Do(n);n.Au.delete(e),r.Ko()&&$1(n,e),n.Au.size===0&&(r.Ko()?r.jo():es(n)&&n.bu.set("Unknown"))}function Iy(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).su(e)}function $1(t,e){t.Vu.qt(e),Do(t).iu(e)}function Sy(t){t.Vu=new kM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.bu.gu()}function Ty(t){return es(t)&&!Do(t).Uo()&&t.Au.size>0}function es(t){return z(t).vu.size===0}function U1(t){t.Vu=void 0}async function D2(t){t.Au.forEach((e,n)=>{Iy(t,e)})}async function b2(t,e){U1(t),Ty(t)?(t.bu.Iu(e),Sy(t)):t.bu.set("Unknown")}async function P2(t,e,n){if(t.bu.set("Online"),e instanceof o1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oh(t,r)}else if(e instanceof nc?t.Vu.Ht(e):e instanceof s1?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(F.min()))try{const r=await b1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),$1(i,a);const c=new Qn(u.target,a,l,u.sequenceNumber);Iy(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await oh(t,r)}}async function oh(t,e,n){if(!Zr(e))throw e;t.vu.add(1),await Hl(t),t.bu.set("Offline"),n||(n=()=>b1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await gd(t)})}function V1(t,e){return e().catch(n=>oh(t,n,e))}async function Kl(t){const e=z(t),n=qr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;O2(e);)try{const i=await v2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,L2(e,i)}catch(i){await oh(e,i)}j1(e)&&B1(e)}function O2(t){return es(t)&&t.Eu.length<10}function L2(t,e){t.Eu.push(e);const n=qr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function j1(t){return es(t)&&!qr(t).Uo()&&t.Eu.length>0}function B1(t){qr(t).start()}async function M2(t){qr(t).hu()}async function F2(t){const e=qr(t);for(const n of t.Eu)e.uu(n.mutations)}async function $2(t,e,n){const r=t.Eu.shift(),i=dy.from(r,e,n);await V1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function U2(t,e){e&&qr(t).ou&&await async function(n,r){if(i=r.code,SM(i)&&i!==T.ABORTED){const s=n.Eu.shift();qr(n).Qo(),await V1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Kl(n)}var i}(t,e),j1(t)&&B1(t)}async function s0(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=es(n);n.vu.add(3),await Hl(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await gd(n)}async function V2(t,e){const n=z(t);e?(n.vu.delete(2),await gd(n)):e||(n.vu.add(2),await Hl(n),n.bu.set("Unknown"))}function Do(t){return t.Su||(t.Su=function(e,n,r){const i=z(e);return i.fu(),new k2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:D2.bind(null,t),ao:b2.bind(null,t),nu:P2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Ty(t)?Sy(t):t.bu.set("Unknown")):(await t.Su.stop(),U1(t))})),t.Su}function qr(t){return t.Du||(t.Du=function(e,n,r){const i=z(e);return i.fu(),new x2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:M2.bind(null,t),ao:U2.bind(null,t),au:F2.bind(null,t),cu:$2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Kl(t)):(await t.Du.stop(),t.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ky(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Zr(t))return new A(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=da(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.Cu=new Ee(P.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):M():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class co{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new co(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.Nu=void 0,this.listeners=[]}}class B2{constructor(){this.queries=new ei(e=>zC(e),ad),this.onlineState="Unknown",this.ku=new Set}}async function z1(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new j2),i)try{s.Nu=await n.onListen(r)}catch(o){const a=ky(o,`Initialization of query '${Zp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&xy(n)}async function q1(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function z2(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&xy(n)}function q2(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function xy(t){t.ku.forEach(e=>{e.next()})}class W1{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class W2{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=K(),this.mutatedKeys=K(),this.tc=qC(e),this.ec=new Bs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new o0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=ql(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(r.track({type:3,doc:f}),E=!0):this.rc(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new co(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new o0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=K(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new K1(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new H1(r))}),n}hc(e){this.Yu=e.ir,this.Zu=K();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return co.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class H2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class K2{constructor(e){this.key=e,this.fc=!1}}class G2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ei(a=>zC(a),ad),this._c=new Map,this.mc=new Set,this.gc=new Ee(P.comparator),this.yc=new Map,this.Ic=new _y,this.Tc={},this.Ec=new Map,this.Ac=zi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Q2(t,e){const n=sF(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await _2(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Y2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&M1(n.remoteStore,o)}return i}async function Y2(t,e,n,r,i){t.Rc=(h,d,f)=>async function(m,v,E,g){let p=v.view.sc(E);p.zi&&(p=await n0(m.localStore,v.query,!1).then(({documents:C})=>v.view.sc(C,p)));const y=g&&g.targetChanges.get(v.targetId),I=v.view.applyChanges(p,m.isPrimaryClient,y);return l0(m,v.targetId,I.cc),I.snapshot}(t,h,d,f);const s=await n0(t.localStore,e,!0),o=new W2(e,s.ir),a=o.sc(s.documents),l=Wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);l0(t,n,u.cc);const c=new H2(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function X2(t,e){const n=z(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!ad(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await am(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),F1(n.remoteStore,r.targetId),lm(n,r.targetId)}).catch(Zi)):(lm(n,r.targetId),await am(n.localStore,r.targetId,!0))}async function J2(t,e,n){const r=J1(t);try{const i=await function(s,o){const a=z(s),l=ve.now(),u=o.reduce((d,f)=>d.add(f.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=jt(),m=K();return a.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((E,g)=>{g.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const g of o){const p=EM(g,c.get(g.key).overlayedDocument);p!=null&&E.push(new ti(g.key,p,OC(p.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:HC(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Ee(W)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Gl(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=ky(i,"Failed to persist write");n.reject(s)}}async function G1(t,e){const n=z(t);try{const r=await g2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?$(o.fc):i.removedDocuments.size>0&&($(o.fc),o.fc=!1))}),await Gl(n,r,e)}catch(r){await Zi(r)}}function a0(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&xy(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z2(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ee(P.comparator);o=o.insert(s,xe.newNoDocument(s,F.min()));const a=K().add(s),l=new hd(F.min(),new Map,new Ee(W),o,a);await G1(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Ny(r)}else await am(r.localStore,e,!1).then(()=>lm(r,e,n)).catch(Zi)}async function eF(t,e){const n=z(t),r=e.batch.batchId;try{const i=await m2(n.localStore,e);Y1(n,r,null),Q1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gl(n,i)}catch(i){await Zi(i)}}async function tF(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>($(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Y1(r,e,n),Q1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gl(r,i)}catch(i){await Zi(i)}}function Q1(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Y1(t,e,n){const r=z(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function lm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||X1(t,r)})}function X1(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(F1(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ny(t))}function l0(t,e,n){for(const r of n)r instanceof H1?(t.Ic.addReference(r.key,e),nF(t,r)):r instanceof K1?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||X1(t,r.key)):M()}function nF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(N("SyncEngine","New document in limbo: "+n),t.mc.add(r),Ny(t))}function Ny(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new P(ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new K2(n)),t.gc=t.gc.insert(n,r),M1(t.remoteStore,new Qn(wn(sd(n.path)),r,"TargetPurposeLimboResolution",en.ct))}}async function Gl(t,e,n){const r=z(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ey.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(l,h=>w.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Zr(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function rF(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await D1(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new A(T.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gl(n,r.er)}}function iF(t,e){const n=z(t),r=n.yc.get(e);if(r&&r.fc)return K().add(r.key);{let i=K();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function sF(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z2.bind(null,e),e.dc.nu=z2.bind(null,e.eventManager),e.dc.Pc=q2.bind(null,e.eventManager),e}function J1(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tF.bind(null,e),e}class um{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=md(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return R1(this.persistence,new A1,e.initialUser,this.serializer)}createPersistence(e){return new N1(pd.zs,this.serializer)}createSharedClientState(e){return new P1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oF extends um{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await J1(this.Vc.syncEngine),await Kl(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return R1(this.persistence,new A1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new JM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new AL(n,this.persistence);return new NL(e.asyncQueue,r)}createPersistence(e){const n=f2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new wy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,C2(),rc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new P1}}class Z1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>a0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rF.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new B2}createDatastore(e){const n=md(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new T2(i));var i;return function(s,o,a,l){return new N2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>a0(this.syncEngine,a,0),o=i0.D()?new i0:new E2,new R2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new G2(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);N("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Hl(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=EC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ky(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await D1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lF(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>s0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>s0(e.remoteStore,s)),t._onlineComponents=e}function tk(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tk(n))throw n;Vr("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new um)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await ic(t,new um);return t._offlineComponents}async function nk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await cm(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await cm(t,new Z1))),t._onlineComponents}function uF(t){return nk(t).then(e=>e.syncEngine)}async function hm(t){const e=await nk(t),n=e.eventManager;return n.onListen=Q2.bind(null,e.syncEngine),n.onUnlisten=X2.bind(null,e.syncEngine),n}function cF(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ek({next:h=>{s.enqueueAndForget(()=>q1(i,c)),h.fromCache&&a.source==="server"?l.reject(new A(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new W1(o,u,{includeMetadataChanges:!0,Ku:!0});return z1(i,c)}(await hm(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e,n){if(!n)throw new A(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hF(t,e,n,r){if(e===!0&&r===!0)throw new A(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!P.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h0(t){if(P.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yd(t);throw new A(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function dF(t,e){if(e<=0)throw new A(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class vd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mL;switch(n.type){case"firstParty":return new _L(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=u0.get(e);n&&(N("ComponentProvider","Removing Datastore"),u0.delete(e),n.terminate())}(this),Promise.resolve()}}function fF(t,e,n,r={}){var i;const s=(t=gn(t,vd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xe.MOCK_USER;else{a=Tg(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xe(u)}t._authCredentials=new gL(new wC(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Mr extends lr{constructor(e,n,r){super(e,n,sd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new P(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function ht(t,e,...n){if(t=fe(t),ik("collection","path",e),t instanceof vd){const r=ie.fromString(e,...n);return h0(r),new Mr(t,null,r)}{if(!(t instanceof Mt||t instanceof Mr))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return h0(r),new Mr(t.firestore,null,r)}}function qi(t,e,...n){if(t=fe(t),arguments.length===1&&(e=EC.A()),ik("doc","path",e),t instanceof vd){const r=ie.fromString(e,...n);return c0(r),new Mt(t,null,new P(r))}{if(!(t instanceof Mt||t instanceof Mr))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return c0(r),new Mt(t.firestore,t instanceof Mr?t.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new O1(this,"async_queue_retry"),this.Xc=()=>{const n=rc();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ln;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Zr(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Cy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&M()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function f0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Wr extends vd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sk(this),this._firestoreClient.terminate()}}function mF(t,e){const n=typeof t=="object"?t:Dl(),r=typeof t=="string"?t:"(default)",i=Eo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Oh("firestore");s&&fF(i,...s)}return i}function _d(t){return t._firestoreClient||sk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sk(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new YL(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rk(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new aF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function gF(t,e){vF(t=gn(t,Wr));const n=_d(t);if(n._uninitializedComponentsProvider)throw new A(T.FAILED_PRECONDITION,"SDK cache is already specified.");Vr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Z1;return yF(n,i,new oF(i,r.cacheSizeBytes,void 0))}function yF(t,e,n){const r=new Ln;return t.asyncQueue.enqueue(async()=>{try{await ic(t,n),await cm(t,e),r.resolve()}catch(i){const s=i;if(!tk(s))throw s;Vr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function vF(t){if(t._initialized||t._terminated)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ho(ot.fromBase64String(e))}catch(n){throw new A(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ho(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F=/^__.*__$/;class wF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}function ok(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class by{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new by(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ah(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ok(this.ca)&&_F.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class EF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||md(e)}ya(e,n,r,i=!1){return new by({ca:e,methodName:n,ga:r,path:Me.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Py(t){const e=t._freezeSettings(),n=md(t._databaseId);return new EF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ak(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);ck("Data must be an object, but it was:",o,r);const a=lk(r,o);let l,u;if(s.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=SF(e,h,n);if(!o.contains(d))throw new A(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);CF(c,d)||c.push(d)}l=new tn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new wF(new At(a),l,u)}class Oy extends Ry{_toFieldTransform(e){return new e1(e.path,new oo)}isEqual(e){return e instanceof Oy}}function IF(t,e,n,r=!1){return Ly(n,t.ya(r?4:3,e))}function Ly(t,e){if(uk(t=fe(t)))return ck("Unsupported field value:",e,t),lk(t,e);if(t instanceof Ry)return function(n,r){if(!ok(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ly(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mM(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ve.fromDate(n);return{timestampValue:uo(r.serializer,i)}}if(n instanceof ve){const i=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:uo(r.serializer,i)}}if(n instanceof Dy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ho)return{bytesValue:a1(r.serializer,n._byteString)};if(n instanceof Mt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${yd(n)}`)}(t,e)}function lk(t,e){const n={};return DC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):No(t,(r,i)=>{const s=Ly(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Dy||t instanceof ho||t instanceof Mt||t instanceof Ry)}function ck(t,e,n){if(!uk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function SF(t,e,n){if((e=fe(e))instanceof Ay)return e._internalPath;if(typeof e=="string")return hk(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const TF=new RegExp("[~\\*/\\[\\]]");function hk(t,e,n){if(e.search(TF)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ay(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(T.INVALID_ARGUMENT,a+t+l)}function CF(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kF extends dk{data(){return super.data()}}function wd(t,e){return typeof e=="string"?hk(t,e):e instanceof Ay?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class My{}class Fy extends My{}function xi(t,e,...n){let r=[];e instanceof My&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof $y).length,o=i.filter(a=>a instanceof Ed).length;if(s>1||s>0&&o>0)throw new A(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ed extends Fy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ed(e,n,r)}_apply(e){const n=this._parse(e);return mk(e._query,n),new lr(e.firestore,e.converter,Jp(e._query,n))}_parse(e){const n=Py(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){m0(c,u);const d=[];for(const f of c)d.push(p0(a,i,f));h={arrayValue:{values:d}}}else h=p0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||m0(c,u),h=IF(o,s,c,u==="in"||u==="not-in");return J.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wl(t,e,n){const r=e,i=wd("where",t);return Ed._create(i,r,n)}class $y extends My{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $y(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:oe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)mk(s,a),s=Jp(s,a)}(e._query,n),new lr(e.firestore,e.converter,Jp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uy extends Fy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uy(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vs(i,s);return function(a,l){if(cy(a)===null){const u=od(a);u!==null&&gk(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new lr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ao(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function lh(t,e="asc"){const n=e,r=wd("orderBy",t);return Uy._create(r,n)}class Vy extends Fy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vy(e,n,r)}_apply(e){return new lr(e.firestore,e.converter,eh(e._query,this._limit,this._limitType))}}function pk(t){return dF("limit",t),Vy._create("limit",t,"F")}function p0(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new A(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BC(e)&&n.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!P.isDocumentKey(r))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yl(t,new P(r))}if(n instanceof Mt)return yl(t,n._key);throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yd(n)}.`)}function m0(t,e){if(!Array.isArray(t)||t.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mk(t,e){if(e.isInequality()){const r=od(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=cy(t);s!==null&&gk(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gk(t,e,n){if(!n.isEqual(e))throw new A(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xF{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return No(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dy(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ly(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const n=jr(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);$(g1(r));const i=new $i(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vk extends dk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sc extends vk{data(e={}){return super.data(e)}}class _k{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ma(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sc(this._firestore,this._userDataWriter,r.key,r,new ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new sc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ma(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ma(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:NF(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class jy extends xF{constructor(e){super(),this.firestore=e}convertBytes(e){return new ho(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function dm(t){t=gn(t,lr);const e=gn(t.firestore,Wr),n=_d(e),r=new jy(e);return fk(t._query),cF(n,t._query).then(i=>new _k(e,r,t,i))}function oc(t,e,n){t=gn(t,Mt);const r=gn(t.firestore,Wr),i=yk(t.converter,e,n);return By(r,[ak(Py(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wt.none())])}function zs(t){return By(gn(t.firestore,Wr),[new cd(t._key,wt.none())])}function wi(t,e){const n=gn(t.firestore,Wr),r=qi(t),i=yk(t.converter,e);return By(n,[ak(Py(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wt.exists(!1))]).then(()=>r)}function fo(t,...e){var n,r,i;t=fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||f0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(f0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Mt)u=gn(t.firestore,Wr),c=sd(t._key.path),l={next:h=>{e[o]&&e[o](AF(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gn(t,lr);u=gn(h.firestore,Wr),c=h._query;const d=new jy(u);l={next:f=>{e[o]&&e[o](new _k(u,d,h,f))},error:e[o+1],complete:e[o+2]},fk(t._query)}return function(h,d,f,m){const v=new ek(m),E=new W1(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>z1(await hm(h),E)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>q1(await hm(h),E))}}(_d(u),c,a,l)}function By(t,e){return function(n,r){const i=new Ln;return n.asyncQueue.enqueueAndForget(async()=>J2(await uF(n),r,i)),i.promise}(_d(t),e)}function AF(t,e,n){const r=n.docs.get(e._key),i=new jy(t);return new vk(t,i,e._key,r,new ma(n.hasPendingWrites,n.fromCache),e.converter)}function RF(){return new Oy("serverTimestamp")}(function(t,e=!0){(function(n){xo=n})(Yr),rr(new Mn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Wr(new yL(n.getProvider("auth-internal")),new EL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Lt(fw,"3.13.0",t),Lt(fw,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="firebasestorage.googleapis.com",Ek="storageBucket",DF=2*60*1e3,bF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends $n{constructor(e,n,r=0){super(Tf(e),`Firebase Storage: ${n} (${Tf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Tf(t){return"storage/"+t}function zy(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function PF(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OF(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function MF(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FF(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $F(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UF(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function VF(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function jF(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function BF(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ek+"' property when initializing the app?")}function zF(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qF(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WF(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fm(t){return new Re(Ae.INVALID_ARGUMENT,t)}function Ik(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function HF(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ba(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zo(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw jF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(I){I.path_=decodeURIComponent(I.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},v=n===wk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let I=0;I<y.length;I++){const C=y[I],S=C.regex.exec(e);if(S){const x=S[C.indices.bucket];let R=S[C.indices.path];R||(R=""),r=new Bt(x,R),C.postModify(r);break}}if(r==null)throw VF(e);return r}}class KF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function d(){s&&clearTimeout(s)}function f(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let m=!1;function v(E){m||(m=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function QF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t){return t!==void 0}function XF(t){return typeof t=="object"&&!Array.isArray(t)}function qy(t){return typeof t=="string"||t instanceof String}function g0(t){return Wy()&&t instanceof Blob}function Wy(){return typeof Blob<"u"&&!NS()}function y0(t,e,n,r){if(r<e)throw fm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Du(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ni.NO_ERROR,l=s.getStatus();if(!a||JF(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ni.ABORT;r(!1,new Du(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Du(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=zy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ik():UF();o(l)}else{const l=$F();o(l)}};this.canceled_?n(!1,new Du(!1,null,!0)):this.backoffId_=GF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Du{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function e$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function t$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function n$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function r$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function i$(t,e,n,r,i,s,o=!0){const a=Sk(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return n$(u,e),e$(u,n),t$(u,s),r$(u,r),new ZF(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function o$(...t){const e=s$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wy())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function a$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(t){if(typeof atob>"u")throw WF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cf{constructor(e,n){this.data=e,this.contentType=n||null}}function u$(t,e){switch(t){case An.RAW:return new Cf(Tk(e));case An.BASE64:case An.BASE64URL:return new Cf(Ck(t,e));case An.DATA_URL:return new Cf(h$(e),d$(e))}throw zy()}function Tk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function c$(t){let e;try{e=decodeURIComponent(t)}catch{throw ba(An.DATA_URL,"Malformed data URL.")}return Tk(e)}function Ck(t,e){switch(t){case An.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ba(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ba(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=l$(e)}catch(i){throw i.message.includes("polyfill")?i:ba(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class kk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ba(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=f$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function h$(t){const e=new kk(t);return e.base64?Ck(An.BASE64,e.rest):c$(e.rest)}function d$(t){return new kk(t).contentType}function f$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){let r=0,i="";g0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(g0(this.data_)){const r=this.data_,i=a$(r,e,n);return i===null?null:new Ir(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ir(r,!0)}}static getBlob(...e){if(Wy()){const n=e.map(r=>r instanceof Ir?r.data_:r);return new Ir(o$.apply(null,n))}else{const n=e.map(o=>qy(o)?u$(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ir(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){let e;try{e=JSON.parse(t)}catch{return null}return XF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function m$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Nk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g$(t,e){return e}class gt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||g$}}let bu=null;function y$(t){return!qy(t)||t.length<2?t:Nk(t)}function Ak(){if(bu)return bu;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(s,o){return y$(o)}const n=new gt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new gt("size");return i.xform=r,t.push(i),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),bu=t,bu}function v$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return v$(r,t),r}function Rk(t,e,n){const r=xk(e);return r===null?null:_$(t,r,n)}function w$(t,e,n,r){const i=xk(e);if(i===null||!qy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Hy(d,n,r),m=Sk({alt:"media",token:u});return f+m})[0]}function E$(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Dk{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){if(!t)throw zy()}function I$(t,e){function n(r,i){const s=Rk(t,i,e);return bk(s!==null),s}return n}function S$(t,e){function n(r,i){const s=Rk(t,i,e);return bk(s!==null),w$(s,i,t.host,t._protocol)}return n}function Pk(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=MF():i=LF():n.getStatus()===402?i=OF(t.bucket):n.getStatus()===403?i=FF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function T$(t){const e=Pk(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=PF(t.path)),s.serverResponse=i.serverResponse,s}return n}function C$(t,e,n){const r=e.fullServerUrl(),i=Hy(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dk(i,s,S$(t,n),o);return a.errorHandler=T$(e),a}function k$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function x$(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=k$(null,e)),r}function N$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let I=0;I<2;I++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=x$(e,r,i),c=E$(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Ir.getBlob(h,r,d);if(f===null)throw zF();const m={name:u.fullPath},v=Hy(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,p=new Dk(v,E,I$(t,n),g);return p.urlParams=m,p.headers=o,p.body=f.uploadData(),p.errorHandler=Pk(e),p}class A${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Zo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class R$ extends A${initXhr(){this.xhr_.responseType="text"}}function Ok(){return new R$}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wi(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nk(this._location.path)}get storage(){return this._service}get parent(){const e=p$(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HF(e)}}function D$(t,e,n){t._throwIfRoot("uploadBytes");const r=N$(t.storage,t._location,Ak(),new Ir(e,!0),n);return t.storage.makeRequestWithTokens(r,Ok).then(i=>({metadata:i,ref:t}))}function b$(t){t._throwIfRoot("getDownloadURL");const e=C$(t.storage,t._location,Ak());return t.storage.makeRequestWithTokens(e,Ok).then(n=>{if(n===null)throw qF();return n})}function P$(t,e){const n=m$(t._location.path,e),r=new Bt(t._location.bucket,n);return new Wi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O$(t){return/^[A-Za-z]+:\/\//.test(t)}function L$(t,e){return new Wi(t,e)}function Lk(t,e){if(t instanceof Ky){const n=t;if(n._bucket==null)throw BF();const r=new Wi(n,n._bucket);return e!=null?Lk(r,e):r}else return e!==void 0?P$(t,e):t}function M$(t,e){if(e&&O$(e)){if(t instanceof Ky)return L$(t,e);throw fm("To use ref(service, url), the first argument must be a Storage instance.")}else return Lk(t,e)}function v0(t,e){const n=e==null?void 0:e[Ek];return n==null?null:Bt.makeFromBucketSpec(n,t)}function F$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tg(i,t.app.options.projectId))}class Ky{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DF,this._maxUploadRetryTime=bF,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=v0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=v0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new KF(Ik());{const o=i$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _0="@firebase/storage",w0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="storage";function $$(t,e,n){return t=fe(t),D$(t,e,n)}function U$(t){return t=fe(t),b$(t)}function V$(t,e){return t=fe(t),M$(t,e)}function j$(t=Dl(),e){t=fe(t);const r=Eo(t,Mk).getImmediate({identifier:e}),i=Oh("storage");return i&&B$(r,...i),r}function B$(t,e,n,r={}){F$(t,e,n,r)}function z$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ky(n,r,i,e,Yr)}function q$(){rr(new Mn(Mk,z$,"PUBLIC").setMultipleInstances(!0)),Lt(_0,w0,""),Lt(_0,w0,"esm2017")}q$();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="us-central1";class H${constructor(e,n,r,i,s=pm,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new W$(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=pm}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function K$(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const E0="@firebase/functions",I0="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G$="auth-internal",Q$="app-check-internal",Y$="messaging-internal";function X$(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(G$),a=r.getProvider(Y$),l=r.getProvider(Q$);return new H$(s,o,a,l,i,t)};rr(new Mn(Fk,n,"PUBLIC").setMultipleInstances(!0)),Lt(E0,I0,e),Lt(E0,I0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J$(t=Dl(),e=pm){const r=Eo(fe(t),Fk).getImmediate({identifier:e}),i=Oh("functions");return i&&Z$(r,...i),r}function Z$(t,e,n){K$(fe(t),e,n)}X$(fetch.bind(self));var S0={};const T0="@firebase/database",C0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $k="";function e4(t){$k=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:el(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new t4(e)}}catch{}return new n4},Ei=Uk("localStorage"),r4=Uk("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Mh("@firebase/database"),i4=function(){let t=1;return function(){return t++}}(),Vk=function(t){const e=qR(t),n=new VR;n.update(e);const r=n.digest();return Sg.encodeByteArray(r)},Ql=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ql.apply(null,r):typeof r=="object"?e+=tt(r):e+=r,e+=" "}return e};let Pa=null,k0=!0;const s4=function(t,e){D(!0,"Can't turn on custom loggers persistently."),qs.logLevel=ee.VERBOSE,Pa=qs.log.bind(qs)},et=function(...t){if(k0===!0&&(k0=!1,Pa===null&&r4.get("logging_enabled")===!0&&s4()),Pa){const e=Ql.apply(null,t);Pa(e)}},Yl=function(t){return function(...e){et(t,...e)}},mm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ql(...t);qs.error(e)},or=function(...t){const e=`FIREBASE FATAL ERROR: ${Ql(...t)}`;throw qs.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+Ql(...t);qs.warn(e)},o4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Id=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},a4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},po="[MIN_NAME]",Hi="[MAX_NAME]",ts=function(t,e){if(t===e)return 0;if(t===po||e===Hi)return-1;if(e===po||t===Hi)return 1;{const n=x0(t),r=x0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},l4=function(t,e){return t===e?0:t<e?-1:1},ea=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},Gy=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=tt(e[r]),n+=":",n+=Gy(t[e[r]]);return n+="}",n},jk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bk=function(t){D(!Id(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},u4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},c4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},h4=new RegExp("^-?(0*)\\d{1,10}$"),d4=-2147483648,f4=2147483647,x0=function(t){if(h4.test(t)){const e=Number(t);if(e>=d4&&e<=f4)return e}return null},bo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},p4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class ac{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ac.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="5",zk="v",qk="s",Wk="r",Hk="f",Kk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gk="ls",Qk="p",gm="ac",Yk="websocket",Xk="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function y4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zk(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Yk)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xk)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);y4(t)&&(n.ns=t.namespace);const i=[];return Ft(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={},xf={};function Yy(t){const e=t.toString();return kf[e]||(kf[e]=new v4),kf[e]}function _4(t,e){const n=t.toString();return xf[n]||(xf[n]=e()),xf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&bo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="start",E4="close",I4="pLPCommand",S4="pRTLPCB",ex="id",tx="pw",nx="ser",T4="cb",C4="seg",k4="ts",x4="d",N4="dframe",rx=1870,ix=30,A4=rx-ix,R4=25e3,D4=3e4;class Ns{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yl(e),this.stats_=Yy(n),this.urlFn=l=>(this.appCheckToken&&(l[gm]=this.appCheckToken),Zk(n,Xk,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new w4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(D4)),a4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===N0)this.id=a,this.password=l;else if(o===E4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[N0]="t",r[nx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[T4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zk]=Qy,this.transportSessionId&&(r[qk]=this.transportSessionId),this.lastSessionId&&(r[Gk]=this.lastSessionId),this.applicationId&&(r[Qk]=this.applicationId),this.appCheckToken&&(r[gm]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kk.test(location.hostname)&&(r[Wk]=Hk);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ns.forceAllow_=!0}static forceDisallow(){Ns.forceDisallow_=!0}static isAvailable(){return Ns.forceAllow_?!0:!Ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!u4()&&!c4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SS(n),i=jk(r,A4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[N4]="t",r[ex]=e,r[tx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=i4(),window[I4+this.uniqueCallbackIdentifier]=e,window[S4+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ex]=this.myID,e[tx]=this.myPW,e[nx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ix+r.length<=rx;){const o=this.pendingSegs.shift();r=r+"&"+C4+i+"="+o.seg+"&"+k4+i+"="+o.ts+"&"+x4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(R4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=16384,P4=45e3;let uh=null;typeof MozWebSocket<"u"?uh=MozWebSocket:typeof WebSocket<"u"&&(uh=WebSocket);class fn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yl(this.connId),this.stats_=Yy(n),this.connURL=fn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[zk]=Qy,typeof location<"u"&&location.hostname&&Kk.test(location.hostname)&&(o[Wk]=Hk),n&&(o[qk]=n),r&&(o[Gk]=r),i&&(o[gm]=i),s&&(o[Qk]=s),Zk(e,Yk,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let r;bR(),this.mySock=new uh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&uh!==null&&!fn.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=el(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jk(n,b4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ns,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const i=this.transports_=[];for(const s of El.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);El.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}El.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=6e4,L4=5e3,M4=10*1024,F4=100*1024,Nf="t",A0="d",$4="s",R0="r",U4="e",D0="o",b0="a",P0="n",O0="p",V4="h";class j4{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yl("c:"+this.id+":"),this.transportManager_=new El(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>F4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>M4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nf in e){const n=e[Nf];n===b0?this.upgradeIfSecondaryHealthy_():n===R0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===D0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ea("t",e),r=ea("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:O0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:b0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:P0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ea("t",e),r=ea("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ea(Nf,e);if(A0 in e){const r=e[A0];if(n===V4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===P0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$4?this.onConnectionShutdown_(r):n===R0?this.onReset_(r):n===U4?mm("Server Error: "+r):n===D0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qy!==r&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(O4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(L4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:O0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends ox{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ch}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=32,M0=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new ce("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function Jy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function B4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Il(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ax(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return nn(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function z4(t,e){const n=Il(t,0),r=Il(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ts(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function lx(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class q4{constructor(e,n){this.errorPrefix_=n,this.parts_=Il(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lh(this.parts_[r]);ux(this)}}function W4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lh(e),ux(t)}function H4(t){const e=t.parts_.pop();t.byteLength_-=Lh(e),t.parts_.length>0&&(t.byteLength_-=1)}function ux(t){if(t.byteLength_>M0)throw new Error(t.errorPrefix_+"has a key path longer than "+M0+" bytes ("+t.byteLength_+").");if(t.parts_.length>L0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+L0+") or object contains a cycle "+ui(t))}function ui(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy extends ox{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zy}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=1e3,K4=60*5*1e3,F0=30*1e3,G4=1.3,Q4=3e4,Y4="server_kill",$0=3;class Jn extends sx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Jn.nextPersistentConnectionId_++,this.log_=Yl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ta,this.maxReconnectDelay_=K4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ch.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(tt(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new yr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Jn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const r=Zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$R(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mm("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Q4&&(this.reconnectDelay_=ta),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*G4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new j4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y4)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oc(this.interruptReasons_)&&(this.reconnectDelay_=ta,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$0&&(this.reconnectDelay_=F0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$k.replace(/\./g,"-")]=1,Cg()?e["framework.cordova"]=1:AS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ch.getInstance().currentlyOnline();return Oc(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(po,e),i=new te(po,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;class cx extends Sd{static get __EMPTY_NODE(){return Pu}static set __EMPTY_NODE(e){Pu=e}compare(e,n){return ts(e.name,n.name)}isDefinedOn(e){throw _o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Hi,Pu)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Pu)}toString(){return".key"}}const Ws=new cx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??Dt.EMPTY_NODE,this.right=s??Dt.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class X4{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ou(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ou(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ou(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ou(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new X4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t,e){return ts(t.name,e.name)}function ev(t,e){return ts(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ym;function Z4(t){ym=t}const hx=function(t){return typeof t=="number"?"number:"+Bk(t):"string:"+t},dx=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else D(t===ym||t.isEmpty(),"priority of unexpected type.");D(t===ym||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U0;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dx(this.priorityNode_)}static set __childrenNodeConstructor(e){U0=e}static get __childrenNodeConstructor(){return U0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bk(this.value_):e+=this.value_,this.lazyHash_=Vk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fx,px;function eU(t){fx=t}function tU(t){px=t}class nU extends Sd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ts(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Hi,new Be("[PRIORITY-POST]",px))}makePost(e,n){const r=fx(e);return new te(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const nt=new nU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rU=Math.log(2);class iU{constructor(e){const n=s=>parseInt(Math.log(s)/rU,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hh=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new We(d,h.node,We.BLACK,null,null);{const f=parseInt(c/2,10)+l,m=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new We(d,h.node,We.BLACK,m,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(m,v){const E=h-m,g=h;h-=m;const p=i(E+1,g),y=t[E],I=n?n(y):y;f(new We(I,y.node,v,null,p))},f=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));v?d(E,We.BLACK):(d(E,We.BLACK),d(E,We.RED))}return c},o=new iU(t.length),a=s(o);return new Dt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af;const us={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(us&&nt,"ChildrenNode.ts has not been loaded"),Af=Af||new Yn({".priority":us},{".priority":nt}),Af}get(e){const n=Zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=hh(r,e.getCompare()):a=us;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Yn(c,u)}addToIndexes(e,n){const r=Lc(this.indexes_,(i,s)=>{const o=Zs(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===us)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(te.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),hh(a,o.getCompare())}else return us;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new te(e.name,a))),l.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Lc(this.indexes_,i=>{if(i===us)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;class se{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dx(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return na||(na=new se(new Dt(ev),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||na}updatePriority(e){return this.children_.isEmpty()?this:new se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?na:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?na:this.priorityNode_;return new se(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{D(Q(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(nt,(o,a)=>{n[o]=a.val(e),r++,s&&se.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hx(this.getPriority().val())+":"),this.forEachChild(nt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xl?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new se(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(nt),i=n.getIterator(nt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sU extends se{constructor(){super(new Dt(ev),se.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return se.EMPTY_NODE}isEmpty(){return!1}}const Xl=new sU;Object.defineProperties(te,{MIN:{value:new te(po,se.EMPTY_NODE)},MAX:{value:new te(Hi,Xl)}});cx.__EMPTY_NODE=se.EMPTY_NODE;Be.__childrenNodeConstructor=se;Z4(Xl);tU(Xl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=!0;function $e(t,e=null){if(t===null)return se.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,$e(e))}if(!(t instanceof Array)&&oU){const n=[];let r=!1;if(Ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new te(o,l)))}}),n.length===0)return se.EMPTY_NODE;const s=hh(n,J4,o=>o.name,ev);if(r){const o=hh(n,nt.getCompare());return new se(s,$e(e),new Yn({".priority":o},{".priority":nt}))}else return new se(s,$e(e),Yn.Default)}else{let n=se.EMPTY_NODE;return Ft(t,(r,i)=>{if(Un(t,r)&&r.substring(0,1)!=="."){const s=$e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority($e(e))}}eU($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU extends Sd{constructor(e){super(),this.indexPath_=e,D(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ts(e.name,n.name):s}makePost(e,n){const r=$e(e),i=se.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=se.EMPTY_NODE.updateChild(this.indexPath_,Xl);return new te(Hi,e)}toString(){return Il(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU extends Sd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ts(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=$e(e);return new te(n,r)}toString(){return".value"}}const uU=new lU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(t){return{type:"value",snapshotNode:t}}function hU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function V0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:po}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nt}copy(){const e=new tv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function j0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===nt?n="$priority":t.index_===uU?n="$value":t.index_===Ws?n="$key":(D(t.index_ instanceof aU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function B0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==nt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends sx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Yl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=dh.getListenId_(e,r),a={};this.listens_[o]=a;const l=j0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Zs(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=dh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=j0(e._queryParams),r=e._path.toString(),i=new yr;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=el(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(){this.rootNode_=se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return{value:null,children:new Map}}function Po(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,fh());const i=t.children.get(r);e=he(e),Po(i,e,n)}}function vm(t,e){if(X(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(nt,(r,i)=>{Po(t,new ce(r),i)}),vm(t,e)}}else if(t.children.size>0){const n=Q(e);return e=he(e),t.children.has(n)&&vm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function _m(t,e,n){t.value!==null?n(e,t.value):mU(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);_m(i,s,n)})}function mU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ft(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=10*1e3,yU=30*1e3,vU=5*60*1e3;class _U{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gU(e);const r=z0+(yU-z0)*Math.random();Oa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ft(e,(i,s)=>{s>0&&Un(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oa(this.reportStats_.bind(this),Math.floor(Math.random()*2*vU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function mx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gx(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yx(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=mx()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new ph(ue(),n,this.revert)}}else return D(Q(this.path)===e,"operationForChild called for unrelated child."),new ph(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return X(this.path)?new Ki(this.source,ue(),this.snap.getImmediateChild(e)):new Ki(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Ki(this.source,ue(),n.value):new Sl(this.source,ue(),n)}else return D(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sl(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function wU(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fU(o.childName,o.snapshotNode))}),ra(t,i,"child_removed",e,r,n),ra(t,i,"child_added",e,r,n),ra(t,i,"child_moved",s,r,n),ra(t,i,"child_changed",e,r,n),ra(t,i,"value",e,r,n),i}function ra(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>IU(t,a,l)),o.forEach(a=>{const l=EU(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function EU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function IU(t,e,n){if(e.childName==null||n.childName==null)throw _o("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t,e){return{eventCache:t,serverCache:e}}function La(t,e,n,r){return vx(new nv(e,n,r),t.serverCache)}function _x(t,e,n,r){return vx(t.eventCache,new nv(e,n,r))}function wm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf;const SU=()=>(Rf||(Rf=new Dt(l4)),Rf);class me{constructor(e,n=SU()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Ft(e,(r,i)=>{n=n.set(new ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(X(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:Pe(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new me(null)}}set(e,n){if(X(e))return new me(n,this.children);{const r=Q(e),s=(this.children.get(r)||new me(null)).set(he(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(X(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(X(e))return n;{const r=Q(e),s=(this.children.get(r)||new me(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(X(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(he(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(X(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),Pe(n,i),r):new me(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new me(null))}}function Ma(t,e,n){if(X(e))return new yn(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nn(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function q0(t,e,n){let r=t;return Ft(n,(i,s)=>{r=Ma(r,Pe(e,i),s)}),r}function W0(t,e){if(X(e))return yn.empty();{const n=t.writeTree_.setTree(e,new me(null));return new yn(n)}}function Em(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function H0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nt,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function Fr(t,e){if(X(e))return t;{const n=ns(t,e);return n!=null?new yn(new me(n)):new yn(t.writeTree_.subtree(e))}}function Im(t){return t.writeTree_.isEmpty()}function mo(t,e){return wx(ue(),t.writeTree_,e)}function wx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=wx(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e){return kx(e,t)}function TU(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ma(t.visibleWrites,e,n)),t.lastWriteId=r}function CU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function kU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xU(a,r.path)?i=!1:rn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return NU(t),!0;if(r.snap)t.visibleWrites=W0(t.visibleWrites,r.path);else{const a=r.children;Ft(a,l=>{t.visibleWrites=W0(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function xU(t,e){if(t.snap)return rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rn(Pe(t.path,n),e))return!0;return!1}function NU(t){t.visibleWrites=Ix(t.allWrites,AU,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AU(t){return t.visible}function Ix(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)rn(n,o)?(a=nn(n,o),r=Ma(r,a,s.snap)):rn(o,n)&&(a=nn(o,n),r=Ma(r,ue(),s.snap.getChild(a)));else if(s.children){if(rn(n,o))a=nn(n,o),r=q0(r,a,s.children);else if(rn(o,n))if(a=nn(o,n),X(a))r=q0(r,ue(),s.children);else{const l=Zs(s.children,Q(a));if(l){const u=l.getChild(he(a));r=Ma(r,ue(),u)}}}else throw _o("WriteRecord should have .snap or .children")}}return r}function Sx(t,e,n,r,i){if(!r&&!i){const s=ns(t.visibleWrites,e);if(s!=null)return s;{const o=Fr(t.visibleWrites,e);if(Im(o))return n;if(n==null&&!Em(o,ue()))return null;{const a=n||se.EMPTY_NODE;return mo(o,a)}}}else{const s=Fr(t.visibleWrites,e);if(!i&&Im(s))return n;if(!i&&n==null&&!Em(s,ue()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rn(u.path,e)||rn(e,u.path))},a=Ix(t.allWrites,o,e),l=n||se.EMPTY_NODE;return mo(a,l)}}}function RU(t,e,n){let r=se.EMPTY_NODE;const i=ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(nt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Fr(t.visibleWrites,e);return n.forEachChild(nt,(o,a)=>{const l=mo(Fr(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),H0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Fr(t.visibleWrites,e);return H0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function DU(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(Em(t.visibleWrites,s))return null;{const o=Fr(t.visibleWrites,s);return Im(o)?i.getChild(n):mo(o,i.getChild(n))}}function bU(t,e,n,r){const i=Pe(e,n),s=ns(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Fr(t.visibleWrites,i);return mo(o,r.getNode().getImmediateChild(n))}else return null}function PU(t,e){return ns(t.visibleWrites,e)}function OU(t,e,n,r,i,s,o){let a;const l=Fr(t.visibleWrites,e),u=ns(l,ue());if(u!=null)a=u;else if(n!=null)a=mo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function LU(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Sm(t,e,n,r){return Sx(t.writeTree,t.treePath,e,n,r)}function Tx(t,e){return RU(t.writeTree,t.treePath,e)}function K0(t,e,n,r){return DU(t.writeTree,t.treePath,e,n,r)}function mh(t,e){return PU(t.writeTree,Pe(t.treePath,e))}function MU(t,e,n,r,i,s){return OU(t.writeTree,t.treePath,e,n,r,i,s)}function rv(t,e,n){return bU(t.writeTree,t.treePath,e,n)}function Cx(t,e){return kx(Pe(t.treePath,e),t.writeTree)}function kx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,V0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,dU(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,hU(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,V0(r,e.snapshotNode,i.oldSnap));else throw _o("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xx=new $U;class iv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new nv(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gi(this.viewCache_),s=MU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function UU(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VU(t,e,n,r,i){const s=new FU;let o,a;if(n.type===Rn.OVERWRITE){const u=n;u.source.fromUser?o=Tm(t,e,u.path,u.snap,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!X(u.path),o=gh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Rn.MERGE){const u=n;u.source.fromUser?o=BU(t,e,u.path,u.children,r,i,s):(D(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Cm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Rn.ACK_USER_WRITE){const u=n;u.revert?o=WU(t,e,u.path,r,i,s):o=zU(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Rn.LISTEN_COMPLETE)o=qU(t,e,n.path,r,s);else throw _o("Unknown operation type: "+n.type);const l=s.getChanges();return jU(e,o,l),{viewCache:o,changes:l}}function jU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cU(wm(e)))}}function Nx(t,e,n,r,i,s){const o=e.eventCache;if(mh(r,n)!=null)return e;{let a,l;if(X(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gi(e),c=u instanceof se?u:se.EMPTY_NODE,h=Tx(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Sm(r,Gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Q(n);if(u===".priority"){D(Hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=K0(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=he(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=K0(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=rv(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return La(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function gh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(X(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=Q(n);if(!l.isCompleteForPath(n)&&Hr(n)>1)return e;const m=he(n),E=l.getNode().getImmediateChild(f).updateChild(m,r);f===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),f,E,m,xx,null)}const h=_x(e,u,l.isFullyInitialized()||X(n),c.filtersNodes()),d=new iv(i,h,s);return Nx(t,h,n,i,d,a)}function Tm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new iv(i,e,s);if(X(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=La(e,u,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=La(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=he(n),f=a.getNode().getImmediateChild(h);let m;if(X(d))m=r;else{const v=c.getCompleteChild(h);v!=null?Jy(d)===".priority"&&v.getChild(ax(d)).isEmpty()?m=v:m=v.updateChild(d,r):m=se.EMPTY_NODE}if(f.equals(m))l=e;else{const v=t.filter.updateChild(a.getNode(),h,m,d,c,o);l=La(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function G0(t,e){return t.eventCache.isCompleteForChild(e)}function BU(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Pe(n,l);G0(e,Q(c))&&(a=Tm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Pe(n,l);G0(e,Q(c))||(a=Tm(t,a,c,u,i,s,o))}),a}function Q0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Cm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;X(n)?u=r:u=new me(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Q0(t,f,d);l=gh(t,l,new ce(h),m,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),v=Q0(t,m,d);l=gh(t,l,new ce(h),v,i,s,o,a)}}),l}function zU(t,e,n,r,i,s,o){if(mh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(X(n)){let u=new me(null);return l.getNode().forEachChild(Ws,(c,h)=>{u=u.set(new ce(c),h)}),Cm(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((c,h)=>{const d=Pe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Cm(t,e,n,u,i,s,a,o)}}function qU(t,e,n,r,i){const s=e.serverCache,o=_x(e,s.getNode(),s.isFullyInitialized()||X(n),s.isFiltered());return Nx(t,o,n,r,xx,i)}function WU(t,e,n,r,i,s){let o;if(mh(r,n)!=null)return e;{const a=new iv(r,e,i),l=e.eventCache.getNode();let u;if(X(n)||Q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Sm(r,Gi(e));else{const h=e.serverCache.getNode();D(h instanceof se,"serverChildren would be complete if leaf node"),c=Tx(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Q(n);let h=rv(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,he(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,se.EMPTY_NODE,he(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sm(r,Gi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||mh(r,ue())!=null,La(e,u,o,t.filter.filtersNodes())}}function HU(t,e){const n=Gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function Y0(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&(D(Gi(t.viewCache_),"We should always have a full cache before handling merges"),D(wm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=VU(t.processor_,i,e,n,r);return UU(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,KU(t,s.changes,s.viewCache.eventCache.getNode())}function KU(t,e,n,r){const i=t.eventRegistrations_;return wU(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X0;function GU(t){D(!X0,"__referenceConstructor has already been defined"),X0=t}function sv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),Y0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Y0(o,e,n,r));return s}}function ov(t,e){let n=null;for(const r of t.views.values())n=n||HU(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J0;function QU(t){D(!J0,"__referenceConstructor has already been defined"),J0=t}class Z0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=LU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YU(t,e,n,r,i){return TU(t.pendingWriteTree_,e,n,r,i),i?Cd(t,new Ki(mx(),e,n)):[]}function As(t,e,n=!1){const r=CU(t.pendingWriteTree_,e);if(kU(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ue(),!0):Ft(r.children,o=>{s=s.set(new ce(o),!0)}),Cd(t,new ph(r.path,s,n))}else return[]}function Td(t,e,n){return Cd(t,new Ki(gx(),e,n))}function XU(t,e,n){const r=me.fromObject(n);return Cd(t,new Sl(gx(),e,r))}function JU(t,e,n,r){const i=bx(t,r);if(i!=null){const s=Px(i),o=s.path,a=s.queryId,l=nn(o,e),u=new Ki(yx(a),l,n);return Ox(t,o,u)}else return[]}function ZU(t,e,n,r){const i=bx(t,r);if(i){const s=Px(i),o=s.path,a=s.queryId,l=nn(o,e),u=me.fromObject(n),c=new Sl(yx(a),l,u);return Ox(t,o,c)}else return[]}function Ax(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nn(o,e),u=ov(a,l);if(u)return u});return Sx(i,e,s,n,!0)}function Cd(t,e){return Rx(e,t.syncPointTree_,null,Ex(t.pendingWriteTree_,ue()))}function Rx(t,e,n,r){if(X(t.path))return Dx(t,e,n,r);{const i=e.get(ue());n==null&&i!=null&&(n=ov(i,ue()));let s=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Cx(r,o);s=s.concat(Rx(a,l,u,c))}return i&&(s=s.concat(sv(i,t,r,n))),s}}function Dx(t,e,n,r){const i=e.get(ue());n==null&&i!=null&&(n=ov(i,ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Cx(r,o),c=t.operationForChild(o);c&&(s=s.concat(Dx(c,a,l,u)))}),i&&(s=s.concat(sv(i,t,r,n))),s}function bx(t,e){return t.tagToQueryMap.get(e)}function Px(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Ox(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=Ex(t.pendingWriteTree_,e);return sv(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new av(n)}node(){return this.node_}}class lv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new lv(this.syncTree_,n)}node(){return Ax(this.syncTree_,this.path_)}}const eV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eE=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nV(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},nV=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},rV=function(t,e,n,r){return uv(e,new lv(n,t),r)},iV=function(t,e,n){return uv(t,new av(e),n)};function uv(t,e,n){const r=t.getPriority().val(),i=eE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=eE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,$e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(nt,(a,l)=>{const u=uv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hv(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=Q(n);for(;i!==null;){const s=Zs(r.node.children,i)||{children:{},childCount:0};r=new cv(i,r,s),n=he(n),i=Q(n)}return r}function Oo(t){return t.node.value}function Lx(t,e){t.node.value=e,km(t)}function Mx(t){return t.node.childCount>0}function sV(t){return Oo(t)===void 0&&!Mx(t)}function kd(t,e){Ft(t.node.children,(n,r)=>{e(new cv(n,t,r))})}function Fx(t,e,n,r){n&&e(t),kd(t,i=>{Fx(i,e,!0)})}function oV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Jl(t){return new ce(t.parent===null?t.name:Jl(t.parent)+"/"+t.name)}function km(t){t.parent!==null&&aV(t.parent,t.name,t)}function aV(t,e,n){const r=sV(n),i=Un(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,km(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,km(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=/[\[\].#$\/\u0000-\u001F\u007F]/,uV=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,dv=function(t){return typeof t=="string"&&t.length!==0&&!lV.test(t)},$x=function(t){return typeof t=="string"&&t.length!==0&&!uV.test(t)},cV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$x(t)},Ux=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Id(t)||t&&typeof t=="object"&&Un(t,".sv")},tE=function(t,e,n,r){xd(eo(t,"value"),e,n)},xd=function(t,e,n){const r=n instanceof ce?new q4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ui(r));if(typeof e=="function")throw new Error(t+"contains a function "+ui(r)+" with contents = "+e.toString());if(Id(e))throw new Error(t+"contains "+e.toString()+" "+ui(r));if(typeof e=="string"&&e.length>Df/3&&Lh(e)>Df)throw new Error(t+"contains a string greater than "+Df+" utf8 bytes "+ui(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ft(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!dv(o)))throw new Error(t+" contains an invalid key ("+o+") "+ui(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);W4(r,o),xd(t,a,r),H4(r)}),i&&s)throw new Error(t+' contains ".value" child '+ui(r)+" in addition to actual children.")}},hV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Il(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!dv(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(z4);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},dV=function(t,e,n,r){const i=eo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ft(e,(o,a)=>{const l=new ce(o);if(xd(i,a,Pe(n,l)),Jy(l)===".priority"&&!Ux(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),hV(i,s)},fV=function(t,e,n){if(Id(e))throw new Error(eo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ux(e))throw new Error(eo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Vx=function(t,e,n,r){if(!$x(n))throw new Error(eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vx(t,e,n)},Lu=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},mV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cV(n))throw new Error(eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yV(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!lx(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function rs(t,e,n){yV(t,n),vV(t,r=>rn(r,e)||rn(e,r))}function vV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_V(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _V(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pa&&et("event: "+n.toString()),bo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV="repo_interrupt",EV=25;class IV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fh(),this.transactionQueueTree_=new cv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SV(t,e,n){if(t.stats_=Yy(t.repoInfo_),t.forceRestClient_||p4())t.server_=new dh(t.repoInfo_,(r,i,s,o)=>{nE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Jn(t.repoInfo_,e,(r,i,s,o)=>{nE(t,r,i,s,o)},r=>{rE(t,r)},r=>{CV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_4(t.repoInfo_,()=>new _U(t.stats_,t.server_)),t.infoData_=new pU,t.infoSyncTree_=new Z0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Td(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fv(t,"connected",!1),t.serverSyncTree_=new Z0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);rs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function TV(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jx(t){return eV({timestamp:TV(t)})}function nE(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Lc(n,u=>$e(u));o=ZU(t.serverSyncTree_,s,l,i)}else{const l=$e(n);o=JU(t.serverSyncTree_,s,l,i)}else if(r){const l=Lc(n,u=>$e(u));o=XU(t.serverSyncTree_,s,l)}else{const l=$e(n);o=Td(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=mv(t,s)),rs(t.eventQueue_,a,o)}function rE(t,e){fv(t,"connected",e),e===!1&&xV(t)}function CV(t,e){Ft(e,(n,r)=>{fv(t,n,r)})}function fv(t,e,n){const r=new ce("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(r,i);const s=Td(t.infoSyncTree_,r,i);rs(t.eventQueue_,r,s)}function kV(t){return t.nextWriteId_++}function xV(t){Bx(t,"onDisconnectEvents");const e=jx(t),n=fh();_m(t.onDisconnect_,ue(),(i,s)=>{const o=rV(i,s,t.serverSyncTree_,e);Po(n,i,o)});let r=[];_m(n,ue(),(i,s)=>{r=r.concat(Td(t.serverSyncTree_,i,s));const o=OV(t,i);mv(t,o)}),t.onDisconnect_=fh(),rs(t.eventQueue_,ue(),r)}function NV(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&vm(t.onDisconnect_,e),Tl(t,n,r,i)})}function iE(t,e,n,r){const i=$e(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Po(t.onDisconnect_,e,i),Tl(t,r,s,o)})}function AV(t,e,n,r,i){const s=$e(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Po(t.onDisconnect_,e,s),Tl(t,i,o,a)})}function RV(t,e,n,r){if(Oc(n)){et("onDisconnect().update() called with empty data.  Don't do anything."),Tl(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Ft(n,(o,a)=>{const l=$e(a);Po(t.onDisconnect_,Pe(e,o),l)}),Tl(t,r,i,s)})}function DV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wV)}function Bx(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),et(n,...e)}function Tl(t,e,n,r){e&&bo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function zx(t,e,n){return Ax(t.serverSyncTree_,e,n)||se.EMPTY_NODE}function pv(t,e=t.transactionQueueTree_){if(e||Nd(t,e),Oo(e)){const n=Wx(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bV(t,Jl(e),n)}else Mx(e)&&kd(e,n=>{pv(t,n)})}function bV(t,e,n){const r=n.map(u=>u.currentWriteId),i=zx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];D(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=nn(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Bx(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(As(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Nd(t,hv(t.transactionQueueTree_,e)),pv(t,t.transactionQueueTree_),rs(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)bo(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}mv(t,e)}},o)}function mv(t,e){const n=qx(t,e),r=Jl(n),i=Wx(t,n);return PV(t,i,r),r}function PV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=nn(n,l.path);let c=!1,h;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(As(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=EV)c=!0,h="maxretry",i=i.concat(As(t.serverSyncTree_,l.currentWriteId,!0));else{const d=zx(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){xd("transaction failed: Data returned ",f,l.path);let m=$e(f);typeof f=="object"&&f!=null&&Un(f,".priority")||(m=m.updatePriority(d.getPriority()));const E=l.currentWriteId,g=jx(t),p=iV(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=kV(t),o.splice(o.indexOf(E),1),i=i.concat(YU(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(As(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(As(t.serverSyncTree_,l.currentWriteId,!0))}rs(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Nd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)bo(r[a]);pv(t,t.transactionQueueTree_)}function qx(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&Oo(r)===void 0;)r=hv(r,n),e=he(e),n=Q(e);return r}function Wx(t,e){const n=[];return Hx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Hx(t,e,n){const r=Oo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);kd(e,i=>{Hx(t,i,n)})}function Nd(t,e){const n=Oo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Lx(e,n.length>0?n:void 0)}kd(e,r=>{Nd(t,r)})}function OV(t,e){const n=Jl(qx(t,e)),r=hv(t.transactionQueueTree_,e);return oV(r,i=>{bf(t,i)}),bf(t,r),Fx(r,i=>{bf(t,i)}),n}function bf(t,e){const n=Oo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(As(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Lx(e,void 0):n.length=s+1,rs(t.eventQueue_,Jl(e),i);for(let o=0;o<r.length;o++)bo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function MV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const sE=function(t,e){const n=FV(t),r=n.namespace;n.domain==="firebase.com"&&or(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||o4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jk(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},FV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=LV(t.substring(c,h)));const d=MV(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new yr;return NV(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Lu("OnDisconnect.remove",this._path);const e=new yr;return iE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Lu("OnDisconnect.set",this._path),tE("OnDisconnect.set",e,this._path);const n=new yr;return iE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Lu("OnDisconnect.setWithPriority",this._path),tE("OnDisconnect.setWithPriority",e,this._path),fV("OnDisconnect.setWithPriority",n);const r=new yr;return AV(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Lu("OnDisconnect.update",this._path),dV("OnDisconnect.update",e,this._path);const n=new yr;return RV(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return X(this._path)?null:Jy(this._path)}get ref(){return new is(this._repo,this._path)}get _queryIdentifier(){const e=B0(this._queryParams),n=Gy(e);return n==="{}"?"default":n}get _queryObject(){return B0(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof gv))return!1;const n=this._repo===e._repo,r=lx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+B4(this._path)}}class is extends gv{constructor(e,n){super(e,n,new tv,!1)}get parent(){const e=ax(this._path);return e===null?null:new is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function UV(t,e){return t=fe(t),t._checkNotDeleted("ref"),e!==void 0?VV(t._root,e):t._root}function VV(t,e){return t=fe(t),Q(t._path)===null?pV("child","path",e):Vx("child","path",e),new is(t._repo,Pe(t._path,e))}function jV(t){return t=fe(t),new $V(t._repo,t._path)}GU(is);QU(is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV="FIREBASE_DATABASE_EMULATOR_HOST",xm={};let zV=!1;function qV(t,e,n,r){t.repoInfo_=new Jk(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function WV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sE(s,i),a=o.repoInfo,l;typeof process<"u"&&S0&&(l=S0[BV]),l?(s=`http://${l}?ns=${a.namespace}`,o=sE(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new g4(t.name,t.options,e);mV("Invalid Firebase Database URL",o),X(o.path)||or("Database URL must point to the root of a Firebase Database (not including a child path).");const c=KV(a,t,u,new m4(t.name,n));return new GV(c,t)}function HV(t,e){const n=xm[e];(!n||n[t.key]!==t)&&or(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DV(t),delete n[t.key]}function KV(t,e,n,r){let i=xm[e.name];i||(i={},xm[e.name]=i);let s=i[t.toURLString()];return s&&or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new IV(t,zV,n,r),i[t.toURLString()]=s,s}class GV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new is(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&or("Cannot call "+e+" on a deleted database.")}}function QV(t=Dl(),e){const n=Eo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Oh("database");r&&YV(n,...r)}return n}function YV(t,e,n,r={}){t=fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&or("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&or('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ac(ac.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Tg(r.mockUserToken,t.app.options.projectId);s=new ac(o)}qV(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(t){e4(Yr),rr(new Mn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return WV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Lt(T0,C0,t),Lt(T0,C0,"esm2017")}Jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XV();const oE={apiKey:"AIzaSyDgEuge-mEYxj3yleytNqXdHaVLp9QMXls",authDomain:"jaballahchat.firebaseapp.com",projectId:"jaballahchat",storageBucket:"jaballahchat.appspot.com",messagingSenderId:"132290046194",appId:"1:132290046194:web:b74f8e8c8d0a8b1f0b8c9d",databaseURL:"https://jaballahchat-default-rtdb.firebaseio.com"};function JV(t){return Object.values(t).every(e=>e!=null&&e!==""&&!e.includes("YOUR_"))}let fs=null,ga=null;try{if(!JV(oE))throw new Error("Firebase configuration is invalid. Please check your .env file.");fs=OS(oE)}catch(t){console.error("Firebase initialization failed:",t),ga=t}let xt=null,j=null,Nm=null;const Ut=RF;fs?(xt=eO(fs),j=mF(fs),Nm=j$(fs),J$(fs),gF(j).catch(t=>{console.error("Firestore persistence error:",t),t.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):t.code==="unimplemented"&&console.warn("The current browser does not support persistence.")})):console.warn("Firebase not initialized — continuing without Firebase. Check console for details.");if(!j)throw new Error("Firestore is not initialized. Check your Firebase configuration.");const ZV=QV();xt&&j&&oT(xt,async t=>{var e;if(t){const n=qi(j,"presence",t.uid),r=qi(j,"users",t.uid);try{await oc(n,{online:!0,lastSeen:Ut(),email:t.email}),await oc(r,{email:t.email,displayName:t.displayName||((e=t.email)==null?void 0:e.split("@")[0]),photoURL:t.photoURL,createdAt:Ut(),lastSeen:Ut()},{merge:!0});try{const i=UV(ZV,`presence/${t.uid}`);jV(i).remove()}catch(i){console.warn("onDisconnect not supported in browser SDK emulator mode",i)}window.addEventListener("beforeunload",async()=>{try{await oc(r,{lastSeen:Ut()},{merge:!0}),await zs(n)}catch(i){console.warn("Error updating presence on unload",i)}})}catch(i){console.error("Error updating presence/user profile:",i)}}});function ej(){const[t,e]=U.useState(!1),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,a]=U.useState(null),[l,u]=U.useState(!1),[c,h]=U.useState(null);U.useEffect(()=>{if(!xt){h("Firebase Authentication is not initialized properly. Check your configuration.");return}try{xt.languageCode="en"}catch(m){h("Firebase configuration error: "+m.message)}},[]);async function d(m){m.preventDefault(),a(null),u(!0);try{if(!n.trim()||!i.trim())throw new Error("Email and password are required");if(i.length<6)throw new Error("Password must be at least 6 characters");if(!xt)throw new Error("Firebase Authentication is not initialized.");t?await Ub(xt,n,i):await Vb(xt,n,i)}catch(v){let E=v.message;E.includes("auth/invalid-email")?E="Invalid email address":E.includes("auth/wrong-password")?E="Incorrect password":E.includes("auth/email-already-in-use")?E="Email is already registered":E.includes("auth/user-not-found")&&(E="No account found with this email"),a(E)}finally{u(!1)}}async function f(){a(null),u(!0);try{if(!xt)throw new Error("Firebase Authentication is not initialized.");const m=new Bn;await uP(xt,m)}catch(m){a("Failed to sign in with Google: "+m.message)}finally{u(!1)}}return c?_.jsxs("div",{className:"p-6 bg-red-100 rounded shadow border-2 border-red-400",children:[_.jsx("h2",{className:"text-xl font-semibold mb-4 text-red-700",children:"Configuration Error"}),_.jsx("p",{className:"text-red-600",children:c}),_.jsx("p",{className:"mt-4 text-red-500",children:"Please check your Firebase configuration in .env file"})]}):_.jsxs("div",{className:"p-6 bg-gray-800 rounded-lg shadow-xl text-white",children:[_.jsx("h2",{className:"text-2xl font-bold mb-6",children:t?"Create Account":"Welcome Back"}),_.jsxs("button",{onClick:f,className:"w-full mb-4 px-4 py-3 bg-white text-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors",disabled:l,children:[_.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"}),_.jsx("span",{children:"Continue with Google"})]}),_.jsxs("div",{className:"relative my-6",children:[_.jsx("div",{className:"absolute inset-0 flex items-center",children:_.jsx("div",{className:"w-full border-t border-gray-600"})}),_.jsx("div",{className:"relative flex justify-center text-sm",children:_.jsx("span",{className:"px-2 bg-gray-800 text-gray-400",children:"Or continue with email"})})]}),_.jsxs("form",{onSubmit:d,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email Address"}),_.jsx("input",{type:"email",className:"w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Enter your email",value:n,onChange:m=>r(m.target.value),disabled:l})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium mb-2",children:"Password"}),_.jsx("input",{type:"password",className:"w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Enter your password",value:i,onChange:m=>s(m.target.value),disabled:l})]}),o&&_.jsx("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400",children:o}),_.jsx("button",{type:"submit",className:`w-full p-3 rounded-lg font-semibold ${l?"bg-blue-600/50 cursor-not-allowed":"bg-blue-600 hover:bg-blue-500"}`,disabled:l,children:l?"Please wait...":t?"Create Account":"Sign In"}),_.jsx("button",{type:"button",className:"w-full text-sm text-gray-400 hover:text-white",onClick:()=>e(m=>!m),disabled:l,children:t?"Already have an account? Sign in":"Don't have an account? Sign up"})]})]})}function tj({user:t}){const[e,n]=U.useState([]),[r,i]=U.useState(""),[s,o]=U.useState(null),[a,l]=U.useState(!1),u=U.useRef(null);U.useEffect(()=>{if(!j)return;const d=xi(ht(j,"messages"),lh("timestamp","desc"),pk(50)),f=fo(d,m=>{const v=[];m.forEach(E=>{v.push({id:E.id,...E.data()})}),n(v.reverse()),setTimeout(()=>{var E;return(E=u.current)==null?void 0:E.scrollIntoView({behavior:"smooth"})},100)});return()=>f()},[]);const c=async d=>{var f;if(d.preventDefault(),!(!r.trim()&&!s)&&!(!j||!Nm))try{let m="",v="";if(s){l(!0);const E=V$(Nm,`files/${s.name}`);await $$(E,s),m=await U$(E),v=s.type}await wi(ht(j,"messages"),{text:r.trim(),sender:t.uid,senderName:t.displayName||((f=t.email)==null?void 0:f.split("@")[0]),timestamp:Ut(),fileURL:m,fileType:v}),i(""),o(null),l(!1)}catch(m){console.error("Error sending message:",m),l(!1)}},h=d=>{var f;(f=d.target.files)!=null&&f[0]&&o(d.target.files[0])};return _.jsxs("div",{className:"flex flex-col h-[70vh]",children:[_.jsx("div",{className:"bg-gray-800 p-4",children:_.jsx("h2",{className:"text-xl font-bold text-white",children:"Chat"})}),_.jsx("div",{ref:u,className:"flex-1 overflow-auto p-4 space-y-4",children:e.map(d=>{var f;return _.jsx("div",{className:`flex ${d.sender===t.uid?"justify-end":"justify-start"}`,children:_.jsxs("div",{className:`max-w-[70%] rounded-lg p-3 ${d.sender===t.uid?"bg-blue-600 text-white":"bg-gray-200 text-gray-900"}`,children:[_.jsx("div",{className:"text-sm opacity-75 mb-1",children:d.senderName}),d.text&&_.jsx("p",{children:d.text}),d.fileURL&&((f=d.fileType)!=null&&f.startsWith("image/")?_.jsx("img",{src:d.fileURL,alt:"Uploaded content",className:"max-w-full rounded-lg mt-2"}):_.jsx("a",{href:d.fileURL,target:"_blank",rel:"noopener noreferrer",className:"text-blue-200 underline",children:"Download File"}))]})},d.id)})}),_.jsx("form",{onSubmit:c,className:"p-4 bg-gray-800",children:_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("input",{type:"text",value:r,onChange:d=>i(d.target.value),placeholder:"Type a message...",className:"flex-1 rounded-lg px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:a}),_.jsxs("label",{className:"cursor-pointer",children:[_.jsx("input",{type:"file",onChange:h,className:"hidden",disabled:a}),_.jsx("div",{className:"p-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600",children:s?"📎 Selected":"📎"})]}),_.jsx("button",{type:"submit",disabled:a||!r.trim()&&!s,className:"px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:a?"Uploading...":"Send"})]})})]})}function aE({user:t,isLeaderPoll:e=!1}){const[n,r]=U.useState([]),[i,s]=U.useState(""),[o,a]=U.useState(""),[l,u]=U.useState("1");U.useEffect(()=>{if(!j)return;const d=xi(ht(j,"polls"),wl("isLeaderPoll","==",e),lh("createdAt","desc"),pk(5));return fo(d,f=>{const m=ve.now(),v=f.docs.map(E=>({...E.data(),id:E.id})).filter(E=>!E.expiresAt||E.expiresAt.toMillis()>m.toMillis());r(v)})},[e]);async function c(d){if(d.preventDefault(),!j)return;const f=o.split(`
`).map(g=>g.trim()).filter(Boolean);if(!i.trim()||f.length<2)return;const m=parseInt(l),v=new Date;v.setHours(v.getHours()+m);const E={question:i.trim(),choices:f,createdAt:Ut(),admin:t.uid,isLeaderPoll:e,expiresAt:ve.fromDate(v)};await wi(ht(j,"polls"),E),s(""),a(""),u("1")}async function h(d){j&&window.confirm("Are you sure you want to delete this poll?")&&await zs(qi(j,"polls",d))}return _.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg text-white",children:[_.jsx("h3",{className:"text-xl font-semibold mb-4",children:e?"Leader Election":"Polls"}),_.jsxs("form",{onSubmit:c,className:"space-y-3 mb-6",children:[_.jsx("div",{children:_.jsx("input",{value:i,onChange:d=>s(d.target.value),placeholder:e?"Who should be the leader?":"Question",className:"w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"})}),_.jsx("div",{children:_.jsx("textarea",{value:o,onChange:d=>a(d.target.value),placeholder:"One choice per line",rows:4,className:"w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"})}),_.jsxs("div",{className:"flex items-center space-x-4",children:[_.jsx("div",{className:"flex-1",children:_.jsxs("select",{value:l,onChange:d=>u(d.target.value),className:"w-full p-3 bg-gray-700 rounded-lg text-white",children:[_.jsx("option",{value:"1",children:"1 hour"}),_.jsx("option",{value:"2",children:"2 hours"}),_.jsx("option",{value:"4",children:"4 hours"}),_.jsx("option",{value:"8",children:"8 hours"}),_.jsx("option",{value:"24",children:"24 hours"})]})}),_.jsx("button",{type:"submit",className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500",children:"Create Poll"})]})]}),_.jsxs("div",{className:"space-y-4",children:[n.map(d=>_.jsx(nj,{poll:d,user:t,onDelete:d.admin===t.uid?h:void 0},d.id)),n.length===0&&_.jsx("div",{className:"text-center text-gray-400 py-4",children:"No active polls"})]})]})}function nj({poll:t,user:e,onDelete:n}){const[r,i]=U.useState({}),[s,o]=U.useState(null),[a,l]=U.useState(0);U.useEffect(()=>{if(!j)return;const h=ht(j,"polls",t.id,"votes");return fo(h,d=>{const f={};let m=null,v=0;d.docs.forEach(E=>{const g=E.data(),p=g.choice;f[p]=(f[p]||0)+1,v++,g.uid===e.uid&&(m=g.choice)}),i(f),l(v),o(m)})},[t.id,e.uid]);async function u(h){if(!j||s)return;const d=qi(j,"polls",t.id,"votes",e.uid);await oc(d,{uid:e.uid,choice:h,createdAt:Ut(),email:e.email||null})}const c=t.expiresAt?new Date(t.expiresAt.toMillis()).getTime()-Date.now():0;return _.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[_.jsxs("div",{className:"flex justify-between items-start mb-4",children:[_.jsx("h4",{className:"text-lg font-medium",children:t.question}),n&&_.jsx("button",{onClick:()=>n(t.id),className:"text-red-400 hover:text-red-300",children:"Delete"})]}),_.jsx("div",{className:"space-y-3",children:t.choices.map(h=>{const d=r[h]||0,f=a>0?d/a*100:0;return _.jsxs("div",{children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsx("span",{children:h}),_.jsxs("span",{className:"text-sm text-gray-400",children:[d," votes (",f.toFixed(1),"%)"]})]}),_.jsx("div",{className:"relative h-2 bg-gray-600 rounded-full",children:_.jsx("div",{className:"absolute left-0 top-0 h-full bg-blue-500 rounded-full",style:{width:`${f}%`}})}),!s&&_.jsx("button",{onClick:()=>u(h),className:"mt-1 text-sm text-blue-400 hover:text-blue-300",children:"Vote"}),s===h&&_.jsx("span",{className:"mt-1 text-sm text-green-400",children:"Your vote"})]},h)})}),t.expiresAt&&_.jsx("div",{className:"mt-4 text-sm text-gray-400",children:c>0?`Expires in ${Math.ceil(c/1e3/60)} minutes`:"Poll has ended"})]})}function rj({user:t}){const[e,n]=U.useState(null),[r,i]=U.useState(!1),s=U.useRef(null);async function o(){if(!j){console.error("Firestore is not initialized.");return}try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Media devices not available in this browser");const l=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});n(l),s.current&&(s.current.srcObject=l),i(!0)}catch(l){console.error("Error starting call:",l),alert("Failed to access camera and microphone. Please make sure you have granted permission and have the devices connected.")}}async function a(){if(!j){console.error("Firestore is not initialized.");return}e==null||e.getTracks().forEach(l=>l.stop()),n(null),i(!1)}return _.jsxs("div",{className:"mt-4 bg-white rounded-lg shadow-lg p-4",children:[_.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Video Call"}),r?_.jsxs("div",{className:"space-y-4",children:[_.jsx("video",{ref:s,autoPlay:!0,playsInline:!0,muted:!0,className:"w-full rounded-lg bg-black"}),_.jsx("button",{onClick:a,className:"px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",children:"End Call"})]}):_.jsx("button",{onClick:o,className:"w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Start Call"})]})}function ij({user:t,isAdmin:e}){const[n,r]=U.useState([]),[i,s]=U.useState(""),[o,a]=U.useState(!1),[l,u]=U.useState(""),[c,h]=U.useState(null),[d,f]=U.useState(!0),[m,v]=U.useState("");U.useEffect(()=>{if(!j){h("Database not initialized");return}const S=xi(ht(j,"posts"),lh("createdAt","desc")),x=fo(S,q=>{r(q.docs.map(at=>({id:at.id,...at.data()})))}),R=xi(ht(j,"chat-status"),lh("updatedAt","desc"),wl("updatedAt",">",Ut())),re=fo(R,q=>{if(!q.empty){const at=q.docs[0].data();f(at.enabled)}});return()=>{x(),re()}},[]);async function E(S){if(S.preventDefault(),!!i.trim()){if(!j){h("Database not initialized");return}try{await wi(ht(j,"posts"),{content:i.trim(),createdAt:Ut(),createdBy:t.uid,authorEmail:t.email,type:o?"announcement":"post"}),s(""),a(!1)}catch(x){h(x.message)}}}async function g(S){if(!j){h("Database not initialized");return}try{await zs(qi(j,"posts",S))}catch(x){h(x.message)}}async function p(){if(e){if(!j){h("Database not initialized");return}try{(await dm(ht(j,"messages"))).docs.forEach(async x=>{const R={id:x.id,...x.data()};R.id&&j&&await zs(qi(j,"messages",R.id))}),alert("Chat cleared successfully!")}catch(S){h(S.message),alert("Error clearing chat")}}}async function y(){if(!e||!j){h("Database not initialized");return}try{await wi(ht(j,"chat-status"),{enabled:!d,updatedAt:Ut(),updatedBy:t.uid}),f(!d),alert(`Chat has been ${d?"disabled":"enabled"}`)}catch(S){h(S.message)}}async function I(){if(!(!e||!m.trim()||!j))try{await wi(ht(j,"timeouts"),{userId:m,createdAt:Ut(),createdBy:t.uid,expiresAt:new Date(Date.now()+5*60*1e3)}),alert("User has been timed out for 5 minutes"),v("")}catch(S){h(S.message)}}async function C(){if(!j){h("Database not initialized");return}try{const S=ht(j,"admin-codes"),x=xi(S,wl("code","==",l)),R=await dm(x);if(R.empty){h("Invalid code");return}await wi(ht(j,"admins"),{uid:t.uid,email:t.email,grantedAt:Ut()}),await zs(R.docs[0].ref),u(""),h("Admin access granted!")}catch(S){h(S.message)}}return _.jsxs("div",{className:"space-y-6",children:[e&&_.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[_.jsxs("h3",{className:"text-xl font-semibold mb-4 flex items-center gap-2",children:[_.jsx("span",{className:"material-symbols-rounded",children:"admin_panel_settings"}),"Admin Panel"]}),_.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{className:"flex items-center space-x-4",children:[_.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors",children:[_.jsx("span",{className:"material-symbols-rounded",children:"delete_sweep"}),"Clear All Chat"]}),_.jsxs("button",{onClick:y,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors ${d?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:[_.jsx("span",{className:"material-symbols-rounded",children:d?"toggle_off":"toggle_on"}),d?"Disable Chat":"Enable Chat"]})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsx("label",{htmlFor:"timeoutUser",className:"block",children:"Timeout User (UID):"}),_.jsxs("div",{className:"flex space-x-2",children:[_.jsx("input",{id:"timeoutUser",type:"text",value:m,onChange:S=>v(S.target.value),placeholder:"User UID",className:"flex-1 p-2 border rounded-lg"}),_.jsx("button",{onClick:I,className:"px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors",children:"Timeout"})]})]})]}),c&&_.jsx("div",{className:"mt-4 text-sm text-red-600",children:c})]}),!e&&_.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[_.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Redeem Admin Code"}),_.jsxs("div",{className:"flex space-x-2",children:[_.jsx("input",{type:"text",value:l,onChange:S=>u(S.target.value),placeholder:"Enter admin code",className:"flex-1 p-2 border rounded-lg"}),_.jsx("button",{onClick:C,className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:"Redeem"})]}),c&&_.jsx("p",{className:"mt-2 text-sm text-red-600",children:c})]}),_.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[_.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Posts & Announcements"}),_.jsxs("form",{onSubmit:E,className:"space-y-4 mb-6",children:[_.jsx("textarea",{value:i,onChange:S=>s(S.target.value),placeholder:"Write a post...",className:"w-full p-2 border rounded-lg min-h-[100px]"}),_.jsxs("div",{className:"flex items-center space-x-4",children:[_.jsxs("label",{className:"flex items-center space-x-2",children:[_.jsx("input",{type:"checkbox",checked:o,onChange:S=>a(S.target.checked),className:"rounded text-blue-600"}),_.jsx("span",{children:"Post as Announcement"})]}),_.jsx("button",{type:"submit",className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Post"})]})]}),_.jsx("div",{className:"space-y-4",children:n.map(S=>{var x;return _.jsx("div",{className:`p-4 rounded-lg ${S.type==="announcement"?"bg-yellow-50 border border-yellow-200":"bg-gray-50 border border-gray-200"}`,children:_.jsxs("div",{className:"flex justify-between items-start",children:[_.jsxs("div",{children:[_.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:[S.authorEmail," • ",new Date((x=S.createdAt)==null?void 0:x.toDate()).toLocaleString()]}),_.jsx("p",{className:"whitespace-pre-wrap",children:S.content})]}),(e||S.createdBy===t.uid)&&_.jsx("button",{onClick:()=>g(S.id),className:"text-red-600 hover:text-red-800",children:"Delete"})]})},S.id)})})]})]})}function sj({user:t,onSuccess:e,onClose:n}){const[r,i]=U.useState(""),[s,o]=U.useState(null),[a,l]=U.useState(!1);async function u(){if(!j||!r.trim()){o("Please enter a code");return}l(!0),o(null);try{const c=ht(j,"admin-codes"),h=xi(c,wl("code","==",r.trim())),d=await dm(h);if(d.empty){o("Invalid code");return}await wi(ht(j,"admins"),{uid:t.uid,email:t.email,grantedAt:Ut()}),await zs(d.docs[0].ref),i(""),e()}catch(c){o(c.message)}finally{l(!1)}}return _.jsx("div",{className:"fixed inset-0 bg-black/40 flex items-center justify-center z-50",children:_.jsxs("div",{className:"bg-white p-8 rounded-xl max-w-md w-full mx-4 shadow-2xl",children:[_.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Enter Admin Code"}),_.jsx("input",{type:"text",value:r,onChange:c=>i(c.target.value),placeholder:"Enter admin code",className:"w-full p-3 border rounded-lg mb-4 text-gray-800",disabled:a}),_.jsxs("div",{className:"flex space-x-3",children:[_.jsx("button",{onClick:u,disabled:a,className:"flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50",children:a?"Redeeming...":"Redeem"}),_.jsx("button",{onClick:n,disabled:a,className:"py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50",children:"Cancel"})]}),s&&_.jsx("p",{className:"mt-3 text-sm text-red-600",children:s})]})})}function oj(){if(ga)return _.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center text-white",children:_.jsxs("div",{className:"max-w-xl p-6 bg-red-900/80 rounded-lg",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Configuration error"}),_.jsx("p",{className:"mb-4",children:"Firebase failed to initialize. Check the .env file and console for details."}),_.jsx("pre",{className:"text-sm bg-black/30 p-3 rounded",children:String(ga)})]})});const[t,e]=sO(xt),[n,r]=U.useState(!1),[i,s]=U.useState(!1),[o,a]=U.useState("chat");return U.useEffect(()=>{if(!t||!j)return;const l=ht(j,"admins"),u=xi(l,wl("uid","==",t.uid));return fo(u,h=>{r(!h.empty)})},[t]),e?_.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):ga?_.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center text-white",children:_.jsxs("div",{className:"max-w-xl p-6 bg-red-900/80 rounded-lg",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Configuration error"}),_.jsx("p",{className:"mb-4",children:"Firebase failed to initialize. Check the .env file and console for details."}),_.jsx("pre",{className:"text-sm bg-black/30 p-3 rounded",children:String(ga)})]})}):_.jsxs("div",{className:"min-h-screen bg-gray-900 text-white",children:[i&&t&&_.jsx(sj,{user:t,onSuccess:()=>{s(!1),r(!0)},onClose:()=>s(!1)}),t?_.jsxs("div",{className:"h-screen flex flex-col",children:[_.jsx("nav",{className:"bg-gray-800 px-4 py-3",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex space-x-4",children:[_.jsx("button",{onClick:()=>a("chat"),className:`px-4 py-2 rounded-lg transition-colors ${o==="chat"?"bg-blue-600 text-white":"text-gray-300 hover:text-white hover:bg-gray-700"}`,children:"Chat & Polls"}),_.jsx("button",{onClick:()=>a("video"),className:`px-4 py-2 rounded-lg transition-colors ${o==="video"?"bg-blue-600 text-white":"text-gray-300 hover:text-white hover:bg-gray-700"}`,children:"Video Call"}),n&&_.jsx("button",{onClick:()=>a("admin"),className:`px-4 py-2 rounded-lg transition-colors ${o==="admin"?"bg-blue-600 text-white":"text-gray-300 hover:text-white hover:bg-gray-700"}`,children:"Admin Panel"})]}),_.jsxs("div",{className:"flex items-center space-x-4",children:[_.jsx("span",{className:"text-gray-300",children:t.email}),!n&&_.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500",children:"Become Admin"}),_.jsx("button",{onClick:()=>xt==null?void 0:xt.signOut(),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500",children:"Sign Out"})]})]})}),_.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[o==="chat"&&_.jsx("div",{className:"flex-1 flex overflow-hidden",children:_.jsxs("div",{className:"flex-1 flex",children:[_.jsx("div",{className:"flex-1 flex flex-col",children:_.jsx(tj,{user:t})}),_.jsxs("div",{className:"w-80 p-4 space-y-4 overflow-y-auto",children:[_.jsx(aE,{user:t}),_.jsx(aE,{user:t,isLeaderPoll:!0})]})]})}),o==="video"&&_.jsx("div",{className:"flex-1 p-4",children:_.jsx(rj,{user:t})}),o==="admin"&&n&&_.jsx("div",{className:"flex-1 p-4",children:_.jsx(ij,{user:t,isAdmin:n})})]})]}):_.jsx("div",{className:"max-w-md mx-auto p-6 pt-12",children:_.jsx(ej,{})})]})}wS(document.getElementById("root")).render(_.jsx(cN.StrictMode,{children:_.jsx(oj,{})}));
