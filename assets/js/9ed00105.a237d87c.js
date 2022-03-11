"use strict";(self.webpackChunkdadlex=self.webpackChunkdadlex||[]).push([[4],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return _}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),_=r,h=p["".concat(d,".").concat(_)]||p[_]||u[_]||a;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={slug:"/configuration",sidebar_position:3},d="Configuration",c={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"DadleX is configured by environment variables, either by setting them in the .env-File or by specifying them when running the frontend or backend service.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/dadlex/configuration",editUrl:"https://github.com/exanion/dadlex/tree/dev/docs/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/configuration",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Quickstart",permalink:"/dadlex/quickstart"},next:{title:"Changelog and Upgrading",permalink:"/dadlex/changelog"}},s={},u=[{value:"General config",id:"general-config",level:2},{value:"<code>PACKAGE_VERSION</code>",id:"package_version",level:3},{value:"<code>DADLEX_PORT</code>",id:"dadlex_port",level:3},{value:"<code>BACKEND_LOG_LEVEL</code>",id:"backend_log_level",level:3},{value:"<code>BACKEND_PUBLIC_URL</code>",id:"backend_public_url",level:3},{value:"<code>FRONTEND_PUBLIC_URL</code>",id:"frontend_public_url",level:3},{value:"<code>BACKEND_TRUST_PROXY</code>",id:"backend_trust_proxy",level:3},{value:"Authentication settings",id:"authentication-settings",level:2},{value:"<code>AUTH_ISSUER_BASEURL</code>",id:"auth_issuer_baseurl",level:3},{value:"<code>AUTH_CLIENT_ID</code> and <code>AUTH_CLIENT_SECRET</code>",id:"auth_client_id-and-auth_client_secret",level:3},{value:"Calendar integration",id:"calendar-integration",level:2},{value:"Microsoft 365 Calendar",id:"microsoft-365-calendar",level:3},{value:"<code>CAL_MS_TENANT_ID</code>",id:"cal_ms_tenant_id",level:4},{value:"<code>CAL_MS_CLIENT_ID</code> and <code>CAL_MS_CLIENT_SECRET</code>",id:"cal_ms_client_id-and-cal_ms_client_secret",level:4},{value:"Google Calendar",id:"google-calendar",level:3},{value:"<code>CAL_GOOGLE_CLIENT_ID</code> and <code>CAL_GOOGLE_CLIENT_SECRET</code>",id:"cal_google_client_id-and-cal_google_client_secret",level:4}],p={toc:u};function _(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"DadleX is configured by environment variables, either by setting them in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"-File or by specifying them when running the frontend or backend service."),(0,a.kt)("h2",{id:"general-config"},"General config"),(0,a.kt)("h3",{id:"package_version"},(0,a.kt)("inlineCode",{parentName:"h3"},"PACKAGE_VERSION")),(0,a.kt)("p",null,"Version of DadleX to be used. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),". Can be ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," for latest stable version, ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," for current development snapshot or any other tagged version."),(0,a.kt)("h3",{id:"dadlex_port"},(0,a.kt)("inlineCode",{parentName:"h3"},"DADLEX_PORT")),(0,a.kt)("p",null,"HTTP port that the service is listening on. You should expose this port to public by some reverse proxy and with HTTPS configured. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,a.kt)("h3",{id:"backend_log_level"},(0,a.kt)("inlineCode",{parentName:"h3"},"BACKEND_LOG_LEVEL")),(0,a.kt)("p",null,"Log level for the backend service, specifying verbosity. One of ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"silly")),(0,a.kt)("h3",{id:"backend_public_url"},(0,a.kt)("inlineCode",{parentName:"h3"},"BACKEND_PUBLIC_URL")),(0,a.kt)("p",null,"THe public URL that the backend is reachable at, without trailing slash. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dadlex-backend-stable.example.com")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dadlex.example.com/backend")),(0,a.kt)("h3",{id:"frontend_public_url"},(0,a.kt)("inlineCode",{parentName:"h3"},"FRONTEND_PUBLIC_URL")),(0,a.kt)("p",null,"The public URL that the frontend service is reachable at, without trailing slash."),(0,a.kt)("h3",{id:"backend_trust_proxy"},(0,a.kt)("inlineCode",{parentName:"h3"},"BACKEND_TRUST_PROXY")),(0,a.kt)("p",null,"This sets the ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/guide/behind-proxies.html"},'"trust proxy" attribute')," of the backend service. For the pre-built Docker image, this may be set to 1 (if you are accessing DadleX directly from your system), 2 (if you've got a reverse proxy running) or any other value stated in the ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/guide/behind-proxies.html"},"documentation")," "),(0,a.kt)("h2",{id:"authentication-settings"},"Authentication settings"),(0,a.kt)("p",null,"Any OpenID provider (e.g. MS Azure, Google Sign-In, Keycloak etc.) can be used for allowing users to sign in to the instance."),(0,a.kt)("h3",{id:"auth_issuer_baseurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"AUTH_ISSUER_BASEURL")),(0,a.kt)("p",null,"OpenID-Connect base URL of your OID provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Azure: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/organizations/v2.0")),(0,a.kt)("li",{parentName:"ul"},"Google: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://accounts.google.com"))),(0,a.kt)("h3",{id:"auth_client_id-and-auth_client_secret"},(0,a.kt)("inlineCode",{parentName:"h3"},"AUTH_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"AUTH_CLIENT_SECRET")),(0,a.kt)("p",null,"Client ID and secret for app openid app registration"),(0,a.kt)("h2",{id:"calendar-integration"},"Calendar integration"),(0,a.kt)("p",null,"Currently, DadleX allows users to link their Microsoft 365 and Google calendars to show availability hints on date polls."),(0,a.kt)("p",null,"Therefore, you must register an app with Microsoft and/ or Google and configure it. See the chapters for setting up calendar integrations for further details and detailed explanations."),(0,a.kt)("h3",{id:"microsoft-365-calendar"},"Microsoft 365 Calendar"),(0,a.kt)("h4",{id:"cal_ms_tenant_id"},(0,a.kt)("inlineCode",{parentName:"h4"},"CAL_MS_TENANT_ID")),(0,a.kt)("p",null,"Azure tenant ID that the app registration was made with or ",(0,a.kt)("inlineCode",{parentName:"p"},"common")," in case you've configured your app as a multi-tenant application"),(0,a.kt)("h4",{id:"cal_ms_client_id-and-cal_ms_client_secret"},(0,a.kt)("inlineCode",{parentName:"h4"},"CAL_MS_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"CAL_MS_CLIENT_SECRET")),(0,a.kt)("p",null,"Client ID and secret for the Azure app registration"),(0,a.kt)("h3",{id:"google-calendar"},"Google Calendar"),(0,a.kt)("h4",{id:"cal_google_client_id-and-cal_google_client_secret"},(0,a.kt)("inlineCode",{parentName:"h4"},"CAL_GOOGLE_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"CAL_GOOGLE_CLIENT_SECRET")),(0,a.kt)("p",null,"Client ID and secret for the Google app registration."))}_.isMDXComponent=!0}}]);