"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9318],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(5675),r=(n(9231),n(4852));const i={id:"runtime.ComposeRuntime",title:"Class: ComposeRuntime",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/runtime.ComposeRuntime",id:"version-0.4.x/api/classes/runtime.ComposeRuntime",title:"Class: ComposeRuntime",description:"runtime.ComposeRuntime",source:"@site/versioned_docs/version-0.4.x/api/classes/runtime.ComposeRuntime.md",sourceDirName:"api/classes",slug:"/api/classes/runtime.ComposeRuntime",permalink:"/docs/0.4.x/api/classes/runtime.ComposeRuntime",draft:!1,editUrl:null,tags:[],version:"0.4.x",frontMatter:{id:"runtime.ComposeRuntime",title:"Class: ComposeRuntime",custom_edit_url:null},sidebar:"api",previous:{title:"Class: ComposeClient",permalink:"/docs/0.4.x/api/classes/client.ComposeClient"},next:{title:"Developer tools",permalink:"/docs/0.4.x/category/developer-tools"}},p={},m=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessors",id:"accessors",level:2},{value:"context",id:"context",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"execute",id:"execute",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"executeQuery",id:"executequery",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],s={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/runtime"},"runtime"),".ComposeRuntime"),(0,r.kt)("p",null,"The ComposeRuntime class provides APIs to execute queries on a GraphQL schema generated from a\n",(0,r.kt)("inlineCode",{parentName:"p"},"RuntimeCompositeDefinition"),". It allows applications to interact with documents using known\nmodels on a Ceramic node."),(0,r.kt)("p",null,"It is exported by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/runtime"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime"))," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"import { ComposeRuntime } from '@composedb/runtime'\n")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ComposeRuntime"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/0.4.x/api/modules/runtime#composeruntimeparams"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposeRuntimeParams")))))),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"context"},"context"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"context"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/runtime#context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context"))),(0,r.kt)("p",null,"Context object used internally."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.x/api/modules/runtime#context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context"))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"execute"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"variableValues?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjMap"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("p",null,"Execute a GraphQL query from a DocumentNode and optional variables."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"document")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DocumentNode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"variableValues?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjMap"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executequery"},"executeQuery"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"executeQuery"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"variableValues?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjMap"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("p",null,"Execute a GraphQL query from its source and optional variables."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Source"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"variableValues?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionResult"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjMap"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"))}u.isMDXComponent=!0}}]);