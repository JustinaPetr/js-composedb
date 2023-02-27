"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1911],{4852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(9231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9766:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(9231),n=r(9841);const o={tabItem:"tabItem___a3"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},8457:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(5675),n=r(9231),o=r(9841),i=r(1267),s=r(9409),c=r(1914),l=r(4252),u=r(2246);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,l]=f({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var b=r(1291);const v={tabList:"tabList_PTqJ",tabItem:"tabItem_r9v1"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=l[r].value;a!==s&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},7678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(5675),n=(r(9231),r(4852)),o=r(8457),i=r(9766);const s={},c="Creating Composites",l={unversionedId:"guides/creating-composites/overview",id:"version-0.3.x/guides/creating-composites/overview",title:"Creating Composites",description:"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications.",source:"@site/versioned_docs/version-0.3.x/guides/creating-composites/overview.mdx",sourceDirName:"guides/creating-composites",slug:"/guides/creating-composites/overview",permalink:"/docs/0.3.x/guides/creating-composites/overview",draft:!1,tags:[],version:"0.3.x",frontMatter:{},sidebar:"docs",previous:{title:"Composites customization",permalink:"/docs/0.3.x/guides/using-composites/customization"},next:{title:"Schema definition",permalink:"/docs/0.3.x/guides/creating-composites/schema"}},u={},p=[{value:"Composite schema",id:"composite-schema",level:2},{value:"Converting a schema to a composite",id:"converting-a-schema-to-a-composite",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-composites"},"Creating Composites"),(0,n.kt)("p",null,"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications."),(0,n.kt)("p",null,"In order to create new composites, especially to create new models that do not already exist on the Ceramic network, a high-level schema can be used as an abstraction for the composite structure."),(0,n.kt)("h2",{id:"composite-schema"},"Composite schema"),(0,n.kt)("p",null,"The recommended way to create composites including new models is to use a schema file based on GraphQL, described in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.3.x/guides/creating-composites/schema"},"dedicated documentation page"),"."),(0,n.kt)("h2",{id:"converting-a-schema-to-a-composite"},"Converting a schema to a composite"),(0,n.kt)("p",null,"After a schema file has been created, it must be converted to a composite to be usable by the other tools and client."),(0,n.kt)(o.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Dependencies required",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure you have installed the packages imported in the code below before running the script.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { createComposite, writeEncodedComposite } from '@composedb/devtools-node'\nimport { DID } from 'dids'\nimport { Ed25519Provider } from 'key-did-provider-ed25519'\nimport { getResolver } from 'key-did-resolver'\nimport { fromString } from 'uint8arrays/from-string'\n\n// Hexadecimal-encoded private key for a DID having admin access to the target Ceramic node\n// Replace the example key here by your admin private key\nconst privateKey = fromString('b0cb[...]515f', 'base16')\n\nconst did = new DID({\n  resolver: getResolver(),\n  provider: new Ed25519Provider(privateKey),\n})\nawait did.authenticate()\n\n// Replace by the URL of the Ceramic node you want to deploy the Models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n// An authenticated DID with admin access must be set on the Ceramic instance\nceramic.did = did\n\n// Replace by the path to the source schema file\nconst composite = await createComposite(ceramic, 'source-schema.graphql')\n\n// Replace by the path to the encoded composite file\nawait writeEncodedComposite(composite, 'my-composite.json')\n")),(0,n.kt)("p",null,"More details: ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools_node#createcomposite"},(0,n.kt)("inlineCode",{parentName:"a"},"createComposite")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.3.x/api/modules/devtools_node#writeencodedcomposite"},(0,n.kt)("inlineCode",{parentName:"a"},"writeEncodedComposite")))),(0,n.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Private key required",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Running this command requires an ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.3.x/configuration#admin-dids"},"admin DID")," private key to be\nprovided, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"DID_PRIVATE_KEY")," environment variable or the ",(0,n.kt)("inlineCode",{parentName:"p"},"--did-private-key")," flag.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:create source-schema.graphql --output=my-composite.json\n")))))}f.isMDXComponent=!0}}]);