(()=>{var e={};e.id=334,e.ids=[334],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},2998:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,originalPathname:()=>m,pages:()=>p,routeModule:()=>u,tree:()=>d}),t(8659),t(3733),t(996);var a=t(170),n=t(5002),s=t(3876),i=t.n(s),o=t(6299),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["farmers",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8659)),"C:\\Users\\olken\\Documents\\My Projects\\Web Development\\cleanarchitecture\\cla\\CompanyName.AppName\\CompanyName.AppName.WebApp\\Common\\src\\app\\farmers\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,3733)),"C:\\Users\\olken\\Documents\\My Projects\\Web Development\\cleanarchitecture\\cla\\CompanyName.AppName\\CompanyName.AppName.WebApp\\Common\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\olken\\Documents\\My Projects\\Web Development\\cleanarchitecture\\cla\\CompanyName.AppName\\CompanyName.AppName.WebApp\\Common\\src\\app\\farmers\\[id]\\page.tsx"],m="/farmers/[id]/page",c={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/farmers/[id]/page",pathname:"/farmers/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1594:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3642,23)),Promise.resolve().then(t.t.bind(t,7586,23)),Promise.resolve().then(t.t.bind(t,7838,23)),Promise.resolve().then(t.t.bind(t,8057,23)),Promise.resolve().then(t.t.bind(t,7741,23)),Promise.resolve().then(t.t.bind(t,3118,23))},5865:()=>{},2233:(e,r,t)=>{Promise.resolve().then(t.bind(t,5234)),Promise.resolve().then(t.bind(t,4544)),Promise.resolve().then(t.bind(t,1027)),Promise.resolve().then(t.bind(t,2257))},5234:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var a=t(7247),n=t(8964),s=t(5289);let i=e=>{let[r,t]=(0,n.useState)(""),a=(0,s.useRouter)();return{id:e.pageParams.params.id,onChangeId:e=>{t(e)},route:r,onGoToNewRoute:()=>{a.push(r)}}},o=()=>a.jsx("div",{children:"FarmersDetailRow"}),l=e=>(0,a.jsxs)("div",{children:[e.name,(0,a.jsxs)("p",{children:["Route name from a viewModel to partial component ",a.jsx("b",{children:e.route})]})]}),d=e=>{let{pageParams:r}=e,t=i({pageParams:r});return(0,a.jsxs)("div",{children:[t.id,a.jsx("input",{className:"border-4 border-red-500 w-50",type:"text",onChange:e=>t.onChangeId(e.target.value)}),(0,a.jsxs)("p",{children:["new route ",t.route]}),a.jsx("button",{className:"bg-slate-400 p-2 rounded-md",type:"button",onClick:t.onGoToNewRoute,children:"change page"}),a.jsx(l,{name:"test",...t}),a.jsx(o,{})]})}},4544:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var a=t(7247),n=t(8964);let s=()=>{let[e,r]=(0,n.useState)("");return{onChangeName:e=>{r(e)},name:e}},i=()=>{let e=s();return(0,a.jsxs)("div",{children:[a.jsx("div",{children:"test"}),a.jsx("input",{className:"border-4 border-red-500 w-50",type:"text",onChange:r=>e.onChangeName(r.target.value)}),a.jsx("p",{children:e.name})]})}},1027:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var a=t(7247);t(8964);let n=()=>({}),s=()=>a.jsx("div",{children:"Partial1"}),i=()=>a.jsx("div",{children:"Partial2"}),o=()=>{let e=n();return(0,a.jsxs)("div",{children:[JSON.stringify(e),a.jsx(s,{}),a.jsx(i,{})]})}},2257:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});var a=t(7247);t(8964);let n=()=>({}),s=()=>{let e=n();return a.jsx("div",{children:JSON.stringify(e)})}},8659:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(2051),n=t(6321);function s(e){return a.jsx(n.PX,{pageParams:e})}},3733:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>l});var a=t(2051),n=t(2017),s=t.n(n),i=t(9005),o=t.n(i);t(5023);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${s().variable} ${o().variable} antialiased`,children:e})})}},6321:(e,r,t)=>{"use strict";t.d(r,{PX:()=>s,FD:()=>n,H9:()=>c,Cc:()=>i,Hh:()=>x,Wi:()=>o});var a=t(5347);let n=(0,a.createProxy)(String.raw`C:\Users\olken\Documents\My Projects\Web Development\cleanarchitecture\cla\CompanyName.AppName\CompanyName.AppName.WebApp\Common\src\modules\farmers\landing\ui\FarmersLandingUi.tsx#default`),s=(0,a.createProxy)(String.raw`C:\Users\olken\Documents\My Projects\Web Development\cleanarchitecture\cla\CompanyName.AppName\CompanyName.AppName.WebApp\Common\src\modules\farmers\detail\ui\FarmersDetailUi.tsx#default`),i=(0,a.createProxy)(String.raw`C:\Users\olken\Documents\My Projects\Web Development\cleanarchitecture\cla\CompanyName.AppName\CompanyName.AppName.WebApp\Common\src\modules\sellers\landing\sellertype1\ui\SellerType1LandingUi.tsx#default`),o=(0,a.createProxy)(String.raw`C:\Users\olken\Documents\My Projects\Web Development\cleanarchitecture\cla\CompanyName.AppName\CompanyName.AppName.WebApp\Common\src\modules\sellers\landing\sellertype2\ui\SellerType2LandingUi.tsx#default`);var l=t(2051);t(6269);let d=()=>({}),p=()=>l.jsx("div",{children:"Partial1"}),m=()=>l.jsx("div",{children:"Partial2"}),c=e=>{let r=d();return(0,l.jsxs)("div",{children:[l.jsx("p",{children:JSON.stringify(e)}),l.jsx("p",{children:JSON.stringify(r)}),l.jsx(p,{}),l.jsx(m,{})]})},u=()=>({}),x=e=>{let r=u();return(0,l.jsxs)("div",{children:[l.jsx("p",{children:JSON.stringify(e)}),l.jsx("p",{children:JSON.stringify(r)})]})}},3881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var a=t(4564);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[379,967,564],()=>t(2998));module.exports=a})();