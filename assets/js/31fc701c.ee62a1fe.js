"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5066],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9766:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9231),a=n(9841);const o={tabItem:"tabItem___a3"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},8457:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(5675),a=n(9231),o=n(9841),i=n(1267),l=n(9409),s=n(1914),c=n(4252),u=n(2246);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=n(1291);const g={tabList:"tabList_PTqJ",tabItem:"tabItem_r9v1"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(5675),a=(n(9231),n(4852)),o=n(8457),i=n(9766);const l={},s="Client setup",c={unversionedId:"client-setup",id:"version-0.3.x/client-setup",title:"Client setup",description:"Compiling the composite",source:"@site/versioned_docs/version-0.3.x/client-setup.mdx",sourceDirName:".",slug:"/client-setup",permalink:"/docs/0.3.x/client-setup",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Your first composite",permalink:"/docs/0.3.x/first-composite"},next:{title:"Guides",permalink:"/docs/0.3.x/guides/"}},u={},p=[{value:"Compiling the composite",id:"compiling-the-composite",level:2},{value:"Configuring the client",id:"configuring-the-client",level:2},{value:"Executing queries",id:"executing-queries",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-setup"},"Client setup"),(0,a.kt)("h2",{id:"compiling-the-composite"},"Compiling the composite"),(0,a.kt)("p",null,"In order to interact with a composite at runtime, it is first necessary to create a runtime composite definition file that will be used to configure the client."),(0,a.kt)(o.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,a.kt)("p",null,"Make sure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/installation"},"installed"),", before running the code below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { writeEncodedCompositeRuntime } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the local encoded composite file\nawait writeEncodedCompositeRuntime(\n  ceramic,\n  'my-first-composite.json',\n  'src/__generated__/definition.js'\n)\n")),(0,a.kt)("p",null,"More details: ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools_node#writeencodedcompositeruntime"},(0,a.kt)("inlineCode",{parentName:"a"},"writeEncodedCompositeRuntime")))),(0,a.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:compile my-first-composite.json src/__generated__/definition.js --ceramic-url=http://localhost:7007\n")))),(0,a.kt)("h2",{id:"configuring-the-client"},"Configuring the client"),(0,a.kt)("p",null,"Once the composite definition file is written, for example in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/__generated__/definition.js")," using the example above, it can be imported in the app to configure the client:"),(0,a.kt)("p",null,"Make sure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/installation"},"installed"),", before running the code below.app to configure the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/compose.js"',title:'"src/compose.js"'},"import { ComposeClient } from '@composedb/client'\n\nimport { definition } from './__generated__/definition.js'\n\nexport const compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })\n")),(0,a.kt)("p",null,"More details: ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,a.kt)("inlineCode",{parentName:"a"},"ComposeClient"))),(0,a.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient"},(0,a.kt)("inlineCode",{parentName:"a"},"ComposeClient"))," instance created in the previous step can be used to execute GraphQL queries using a schema automatically generated from the runtime composite definition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await compose.executeQuery(`\n  query {\n    viewer {\n      id\n    }\n  }\n`)\n")),(0,a.kt)("p",null,"More details: ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/classes/client.ComposeClient#executequery"},(0,a.kt)("inlineCode",{parentName:"a"},"executeQuery"))))}f.isMDXComponent=!0}}]);