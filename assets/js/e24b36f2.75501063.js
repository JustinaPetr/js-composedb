"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4650],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9766:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9231),o=n(9841);const r={tabItem:"tabItem___a3"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},8457:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5675),o=n(9231),r=n(9841),i=n(1267),l=n(9409),s=n(1914),c=n(4252),u=n(2246);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var g=n(1291);const b={tabList:"tabList_PTqJ",tabItem:"tabItem_r9v1"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},1088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(5675),o=(n(9231),n(4852)),r=n(8457),i=n(9766);const l={},s="Your first composite",c={unversionedId:"first-composite",id:"version-0.2.x/first-composite",title:"Your first composite",description:"ComposeDB provides an abstraction on top of Ceramic streams by leveraging composites, an internal data structure referencing Ceramic model streams and associated metadata. Most of ComposeDB tools and clients interact with various representations of composites.",source:"@site/versioned_docs/version-0.2.x/first-composite.mdx",sourceDirName:".",slug:"/first-composite",permalink:"/docs/0.2.x/first-composite",draft:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/0.2.x/installation"},next:{title:"Client setup",permalink:"/docs/0.2.x/client-setup"}},u={},p=[{value:"Running a local Ceramic node",id:"running-a-local-ceramic-node",level:2},{value:"Importing a model",id:"importing-a-model",level:2},{value:"Deploying to a local node",id:"deploying-to-a-local-node",level:2},{value:"Configuring Ceramic",id:"configuring-ceramic",level:2},{value:"Interacting using GraphiQL",id:"interacting-using-graphiql",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...l}=e;return(0,o.kt)(d,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-composite"},"Your first composite"),(0,o.kt)("p",null,"ComposeDB provides an abstraction on top of Ceramic streams by leveraging composites, an internal data structure referencing Ceramic model streams and associated metadata. Most of ComposeDB tools and clients interact with various representations of composites."),(0,o.kt)("p",null,"This page presents how to create your first composite and deploy it to your local Ceramic node, in order to interact with documents on Ceramic."),(0,o.kt)("h2",{id:"running-a-local-ceramic-node"},"Running a local Ceramic node"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Because ComposeDB is still an experimental feature set built on top of Ceramic, if you want to use it with a Ceramic node, you need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", before running a node. Note that ComposeDB is not yet supported on Ceramic mainnet.")),(0,o.kt)("p",null,"The following steps require a local Ceramic node to be running. If you do not already have it running, you can use the following command:"),(0,o.kt)(r.Z,{defaultValue:"pnpm",groupId:"package-manager",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx @ceramicnetwork/cli daemon --network=testnet-clay\n"))),(0,o.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm dlx @ceramicnetwork/cli daemon --network=testnet-clay\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn dlx @ceramicnetwork/cli daemon --network=testnet-clay\n")))),(0,o.kt)("h2",{id:"importing-a-model"},"Importing a model"),(0,o.kt)("p",null,"Composites can be created by importing existing models. Here we're going to import a simple profile model with the stream ID ",(0,o.kt)("inlineCode",{parentName:"p"},"kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e"),", that exists on the Clay testnet."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your local Ceramic node is connected to the Clay testnet in order to load this model."),(0,o.kt)("p",{parentName:"admonition"},"If for some reason the model can't be loaded from the Clay testnet, you can ",(0,o.kt)("a",{target:"_blank",href:n(1872).Z},"download the composite file directly instead")," and store it in ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-composite.json")," file.")),(0,o.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,o.kt)("p",null,"Make sure you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { Composite } from '@composedb/devtools'\nimport { writeEncodedComposite } from '@composedb/devtools-node'\n\nconst ceramic = new CeramicClient('http://localhost:7007')\nconst composite = await Composite.fromModels({\n  ceramic,\n  models: ['kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e'],\n})\n\nawait writeEncodedComposite(composite, 'my-first-composite.json')\n")),(0,o.kt)("p",null,"More details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/classes/devtools.Composite#frommodels"},(0,o.kt)("inlineCode",{parentName:"a"},"Composite.fromModels")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/modules/devtools_node#writeencodedcomposite"},(0,o.kt)("inlineCode",{parentName:"a"},"writeEncodedComposite")))),(0,o.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:from-model kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e --ceramic-url=http://localhost:7007 --output=my-first-composite.json\n")))),(0,o.kt)("h2",{id:"deploying-to-a-local-node"},"Deploying to a local node"),(0,o.kt)("p",null,"The composite can be deployed from a script or the CLI using the composite file:"),(0,o.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,o.kt)("p",null,"Make sure you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { CeramicClient } from '@ceramicnetwork/http-client'\nimport { readEncodedComposite } from '@composedb/devtools-node'\n\n// Replace by the URL of the Ceramic node you want to deploy the Models to\nconst ceramic = new CeramicClient('http://localhost:7007')\n\n// Replace by the path to the local encoded composite file\nconst composite = await readEncodedComposite(ceramic, 'my-first-composite.json')\n\nconsole.log('Model IDs to set in configuration:', composite.modelIDs)\n")),(0,o.kt)("p",null,"More details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/modules/devtools_node#readencodedcomposite"},(0,o.kt)("inlineCode",{parentName:"a"},"readEncodedComposite")))),(0,o.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("p",null,"First, we need to ensure the model streams are available on the target Ceramic node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:deploy my-first-composite.json --ceramic-url=http://localhost:7007\n")),(0,o.kt)("p",null,"Then we need to get the list of models that need to be set for indexing in the Ceramic node configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:models my-first-composite.json\n")))),(0,o.kt)("h2",{id:"configuring-ceramic"},"Configuring Ceramic"),(0,o.kt)("p",null,"The local Ceramic node then needs to be configured to index documents using the defined model and be able to serve queries against the index."),(0,o.kt)("p",null,"This can be done by editing Ceramic's config file, which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ceramic/daemon.config.json")," on Linux, macOS and WSL (Windows Subsystem for Linux), adding the necessary model stream IDs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"indexing.models")," array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "indexing": {\n    ...\n    "allow-queries-before-historical-sync": true,\n    "models": ["kjzl6hvfrbw6ca7nidsnrv78x7r4xt0xki71nvwe4j5a3s9wgou8yu3aj8cz38e"]\n  }\n}\n')),(0,o.kt)("p",null,"Once it's done, the Ceramic node needs to be restarted so the index can be queried."),(0,o.kt)("h2",{id:"interacting-using-graphiql"},"Interacting using GraphiQL"),(0,o.kt)("p",null,"Once the composite is deployed and the Ceramic node configured, it is possible to start a local HTTP server to interact with the generated GraphQL schema, notably using GraphiQL:"),(0,o.kt)(r.Z,{defaultValue:"api",groupId:"api-or-cli",values:[{label:"Using the CLI",value:"cli"},{label:"Using the API",value:"api"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,o.kt)("p",null,"Make sure you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"composedb")," packages ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/installation"},"installed"),", before running the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { serveEncodedDefinition } from '@composedb/devtools-node'\n\nconst server = await serveEncodedDefinition({\n  ceramicURL: 'http://localhost:7007',\n  graphiql: true,\n  path: new URL('my-first-composite.json', import.meta.url),\n  port: 5000,\n})\n\nconsole.log(`Server started on ${server.url}`)\n\nprocess.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('Server stopped')\n  })\n})\n")),(0,o.kt)("p",null,"More details: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.2.x/api/modules/devtools_node#serveencodeddefinition"},(0,o.kt)("inlineCode",{parentName:"a"},"serveEncodedDefinition")))),(0,o.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("p",null,"First, we need to compile the encoded composite definition to a runtime definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"composedb composite:compile my-first-composite.json runtime-composite.json\n")),(0,o.kt)("p",null,"Then we can start the local server with GraphiQL using the runtime composite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"composedb graphql:server --ceramic-url=http://localhost:7007 --graphiql --port=5000 runtime-composite.json\n")))))}f.isMDXComponent=!0},1872:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/my-first-composite-3536975a97af437b1f73f184c5d5aa0b.json"}}]);