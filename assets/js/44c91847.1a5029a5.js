"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6624],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(9231);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1870:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9231),s=n(9841);const o={tabItem:"tabItem_DtN7"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:n},t)}},5576:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5675),s=n(9231),o=n(9841),r=n(5428),i=n(9409),l=n(3975),u=n(6068),c=n(722);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[r,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(4713);const b={tabList:"tabList_ODHL",tabItem:"tabItem_m_EA"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},r,{className:(0,o.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return s.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},s.createElement(k,(0,a.Z)({},e,t)),s.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return s.createElement(y,(0,a.Z)({key:String(t)},e))}},813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(5675),s=(n(9231),n(4852)),o=n(5576),r=n(1870);const i={},l="User Sessions",u={unversionedId:"guides/composedb-client/user-sessions",id:"version-0.4.x/guides/composedb-client/user-sessions",title:"User Sessions",description:"Create authenticated sessions for users with great UX.",source:"@site/versioned_docs/version-0.4.x/guides/composedb-client/user-sessions.mdx",sourceDirName:"guides/composedb-client",slug:"/guides/composedb-client/user-sessions",permalink:"/docs/0.4.x/guides/composedb-client/user-sessions",draft:!1,tags:[],version:"0.4.x",frontMatter:{},sidebar:"guides",previous:{title:"Authenticate Users",permalink:"/docs/0.4.x/guides/composedb-client/authenticate-users"},next:{title:"ComposeDB Server",permalink:"/docs/0.4.x/guides/composedb-server/"}},c={},d=[{value:"Things to Know",id:"things-to-know",level:2},{value:"Installation",id:"installation",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Ethereum Wallets",id:"ethereum-wallets",level:3},{value:"Solana Wallets",id:"solana-wallets",level:3},{value:"Modal",id:"modal",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,s.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user-sessions"},"User Sessions"),(0,s.kt)("p",null,"Create authenticated sessions for users with great UX."),(0,s.kt)("h2",{id:"things-to-know"},"Things to Know"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sessions provide a familiar, web2-like authentication experience for Ceramic apps where a user signs-in once for a timebound session and then interacts without needing to manually approve every transaction"),(0,s.kt)("li",{parentName:"ul"},"A durable root Ceramic account (did:pkh) is generated based on the user\u2019s blockchain wallet"),(0,s.kt)("li",{parentName:"ul"},"The root account generates a temporary Ceramic account (did:key) for each app with tightly-scoped permissions that only lives for a period of time in the user\u2019s browser")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"First, install the did-sessions library:"),(0,s.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install did-session\n"))),(0,s.kt)(r.Z,{value:"pnpm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add did-session\n"))),(0,s.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add did-session\n")))),(0,s.kt)("p",null,"Then, install the appropriate blockchain wallet module:"),(0,s.kt)(o.Z,{defaultValue:"pnpm",groupId:"npm-or-pnpm-or-yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# For Ethereum accounts\nnpm install @didtools/pkh-ethereum\n\n# For Solana accounts\nnpm install @didtools/pkh-solana\n"))),(0,s.kt)(r.Z,{value:"pnpm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# For Ethereum accounts\npnpm add @didtools/pkh-ethereum\n\n# For Solana accounts\npnpm add @didtools/pkh-solana\n"))),(0,s.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# For Ethereum accounts\nyarn add @didtools/pkh-ethereum\n\n# For Solana accounts\nyarn add @didtools/pkh-solana\n")))),(0,s.kt)("h2",{id:"authorization"},"Authorization"),(0,s.kt)("h3",{id:"ethereum-wallets"},"Ethereum Wallets"),(0,s.kt)("p",null,"Authorize with an Ethereum account using\xa0",(0,s.kt)("a",{parentName:"p",href:"https://did.js.org/docs/api/modules/pkh_ethereum"},"@didtools/pkh-ethereum"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DIDSession } from 'did-session'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\nimport { ComposeClient }from '@composedb/client'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethprovider, accountId)\n\nconst compose = new ComposeClient()\n\nconst session = await DIDSession.authorize(authMethod, { resources: compose.resources})\ncompose.setDID(session.did)\n")),(0,s.kt)("h3",{id:"solana-wallets"},"Solana Wallets"),(0,s.kt)("p",null,"Authorize with a Solana account using\xa0",(0,s.kt)("a",{parentName:"p",href:"https://did.js.org/docs/api/modules/pkh_solana"},"@didtools/pkh-solana"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DIDSession } from 'did-session'\nimport { SolanaWebAuth, getAccountIdByNetwork } from '@didtools/pkh-solana'\nimport { ComposeClient }from '@composedb/client'\n\nconst solProvider = // import/get your Solana provider (ie: window.phantom.solana)\nconst address = await solProvider.connect()\nconst accountId = getAccountIdByNetwork('mainnet', address.publicKey.toString())\nconst authMethod = await SolanaWebAuth.getAuthMethod(solProvider, accountId)\n\nconst compose = new ComposeClient()\n\nconst session = await DIDSession.authorize(authMethod, { resources: compose.resources})\ncompose.setDID(session.did)\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Additional chain support is continually being added. You can find the link to each chain and its docs below."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://did.js.org/docs/api/modules/pkh_tezos"},"Tezos"),"\n:::")),(0,s.kt)("h2",{parentName:"admonition",id:"scopes"},"Scopes"),(0,s.kt)("p",{parentName:"admonition"},"In the last line of the above examples, you see a ",(0,s.kt)("inlineCode",{parentName:"p"},"resources")," array. This is effectively a scope of permission that the user is assigning. In ComposeDB, these resources are the models you\u2019ve included in your composite."),(0,s.kt)("p",{parentName:"admonition"},"The compose client offers a simple getter ",(0,s.kt)("inlineCode",{parentName:"p"},"compose.resources")," that formats all model streamIDs in your composite for did-session. You can then pass this as a configuration option."),(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"compose.resources")," is an array of URI-formatted streamIDs of models, for example:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},";[\n  'ceramic://*?model=kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9',\n  'ceramic://*?model=kjzl6hvfrbw6c99mdfpjx1z3fue7sesgua6gsl1vu97229lq56344zu9bawnf96',\n]\n")),(0,s.kt)("h2",{parentName:"admonition",id:"additional-usage"},"Additional Usage"),(0,s.kt)("p",{parentName:"admonition"},"Once you authorize and create a session, you can serialize and store session for later. Sessions by default are valid for 7 days."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// Create session as above, store for later\nconst session = await DIDSession.authorize(authMethod, { resources: [...]})\nconst sessionString = session.serialize()\n\n// write/save session string where you want (ie localstorage)\n// ...\n\n// Later re initialize session\nconst session2 = await DIDSession.fromSession(sessionString)\nconst compose = new ComposeClient()\ncompose.did = session.did\n")),(0,s.kt)("h3",{parentName:"admonition",id:"session-lifecycle"},"Session Lifecycle"),(0,s.kt)("p",{parentName:"admonition"},"Additional helper functions are available to help you manage a session lifecycle and the user experience."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// Check if authorized or created from existing session string\ndidsession.hasSession\n\n// Check if session expired\ndidsession.isExpired\n\n// Get resources session is authorized for\ndidsession.authorizations\n\n// Check number of seconds till expiration, may want to re auth user at a time before expiration\ndidsession.expiresInSecs\n")),(0,s.kt)("h3",{parentName:"admonition",id:"complete-example"},"Complete Example"),(0,s.kt)("p",{parentName:"admonition"},"A typical usage pattern is to store sessions in localstorage, when a user loads your app you can load an existing session or create a new one. When you start making mutations with the client instance, you should make sure that the session is not expired.")),(0,s.kt)("p",null,"LocalStorage is used for illustrative purposes here and may not be best for your app, as there is a number of known issues with storing secret material in browser storage. The session string allows anyone with access to that string to make writes for that user for the time and resources that session is valid for. How that session string is stored and managed is the responsibility of the application."),(0,s.kt)("p",null,":::"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DIDSession } from 'did-session'\nimport type { AuthMethod } from '@didtools/cacao'\nimport { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'\nimport { ComposeClient }from '@composedb/client'\n\nconst ethProvider = // import/get your web3 eth provider\nconst addresses = await ethProvider.request({ method: 'eth_requestAccounts' })\nconst accountId = await getAccountId(ethProvider, addresses[0])\nconst authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)\n\nconst compose = new ComposeClient()\n\nconst loadSession = async (authMethod) => {\n    // Check if user session already in storage\n  const sessionStr = localStorage.getItem('didsession')\n  let session\n\n    // If session string available, create a new did-session object\n  if (sessionStr) {\n    session = await DIDSession.fromSession(sessionStr)\n  }\n\n    // If no session available, create a new user session and store in local storage\n  if (!session || (session.hasSession && session.isExpired)) {\n        const session = await DIDSession.authorize(authMethod, { resources: compose.resources})\n    localStorage.setItem('didsession', session.serialize())\n  }\n\n  return session\n}\n\nconst session = await loadSession(authMethod)\ncompose.setDID(session.did)\n\n// pass ceramic instance where needed, ie glaze\n// ...\n\n// Before mutations, check if a session is still valid, if expired, create new\nif (session.isExpired) {\n  const session = loadSession(authMethod)\n  compose.setDID(session.did)\n}\n\n// perform mutations, continue to use compose client\n")),(0,s.kt)("h2",{id:"modal"},"Modal"),(0,s.kt)("p",null,"When authenticating, the user is prompted with a human-readable wallet modal that explains what they\u2019re giving permissions for. To accomplish this integration, the DID Session library supports Sign-In With X, a chain agnostic authorization standard. Sign-In With Ethereum is shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wallet Modal",src:n(1356).Z,width:"2558",height:"1492"})),(0,s.kt)("h2",{id:"next-steps"},"Next Steps"),(0,s.kt)("p",null,"With authenticated users, now you can move to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Setting up ",(0,s.kt)("a",{parentName:"li",href:"/docs/0.4.x/guides/data-interactions/"},(0,s.kt)("strong",{parentName:"a"},"Data Interactions"))),(0,s.kt)("li",{parentName:"ol"},"Being able to use ",(0,s.kt)("a",{parentName:"li",href:"/docs/0.4.x/guides/data-interactions/mutations"},(0,s.kt)("strong",{parentName:"a"},"mutations"))," with ComposeDB client")))}h.isMDXComponent=!0},1356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wallet-modal-b46ad9abe7b77efaf189e69bdb972a2b.png"}}]);