var Ct=Object.defineProperty;var kt=(e,t)=>{for(var r in t)Ct(e,r,{get:t[r],enumerable:!0})};var de=(e,t,r)=>(n,s)=>{let a=-1;return i(0);async function i(l){if(l<=a)throw new Error("next() called multiple times");a=l;let c,d=!1,u;if(e[l]?(u=e[l][0][0],n.req.routeIndex=l):u=l===e.length&&s||void 0,u)try{c=await u(n,()=>i(l+1))}catch(h){if(h instanceof Error&&t)n.error=h,c=await t(h,n),d=!0;else throw h}else n.finalized===!1&&r&&(c=await r(n));return c&&(n.finalized===!1||d)&&(n.res=c),n}};var je=Symbol();var Fe=async(e,t=Object.create(null))=>{let{all:r=!1,dot:n=!1}=t,a=(e instanceof q?e.raw.headers:e.headers).get("Content-Type");return a?.startsWith("multipart/form-data")||a?.startsWith("application/x-www-form-urlencoded")?It(e,{all:r,dot:n}):{}};async function It(e,t){let r=await e.formData();return r?Rt(r,t):{}}function Rt(e,t){let r=Object.create(null);return e.forEach((n,s)=>{t.all||s.endsWith("[]")?Pt(r,s,n):r[s]=n}),t.dot&&Object.entries(r).forEach(([n,s])=>{n.includes(".")&&(At(r,n,s),delete r[n])}),r}var Pt=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},At=(e,t,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let n=e,s=t.split(".");s.forEach((a,i)=>{i===s.length-1?n[a]=r:((!n[a]||typeof n[a]!="object"||Array.isArray(n[a])||n[a]instanceof File)&&(n[a]=Object.create(null)),n=n[a])})};var he=e=>{let t=e.split("/");return t[0]===""&&t.shift(),t},Ue=e=>{let{groups:t,path:r}=Mt(e),n=he(r);return Tt(n,t)},Mt=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(r,n)=>{let s=`@${n}`;return t.push([s,r]),s}),{groups:t,path:e}},Tt=(e,t)=>{for(let r=t.length-1;r>=0;r--){let[n]=t[r];for(let s=e.length-1;s>=0;s--)if(e[s].includes(n)){e[s]=e[s].replace(n,t[r][1]);break}}return e},X={},$e=(e,t)=>{if(e==="*")return"*";let r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){let n=`${e}#${t}`;return X[n]||(r[2]?X[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:X[n]=[e,r[1],!0]),X[n]}return null},Q=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},Dt=e=>Q(e,decodeURI),pe=e=>{let t=e.url,r=t.indexOf("/",t.indexOf(":")+4),n=r;for(;n<t.length;n++){let s=t.charCodeAt(n);if(s===37){let a=t.indexOf("?",n),i=t.indexOf("#",n),l=a===-1?i===-1?void 0:i:i===-1?a:Math.min(a,i),c=t.slice(r,l);return Dt(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(s===63||s===35)break}return t.slice(r,n)};var Ke=e=>{let t=pe(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},k=(e,t,...r)=>(r.length&&(t=k(t,...r)),`${e?.[0]==="/"?"":"/"}${e}${t==="/"?"":`${e?.at(-1)==="/"?"":"/"}${t?.[0]==="/"?t.slice(1):t}`}`),Y=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;let t=e.split("/"),r=[],n="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))n+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){r.length===0&&n===""?r.push("/"):r.push(n);let a=s.replace("?","");n+="/"+a,r.push(n)}else n+="/"+s}),r.filter((s,a,i)=>i.indexOf(s)===a)},ue=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Q(e,me):e):e,Ge=(e,t,r)=>{let n;if(!r&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){let l=e.charCodeAt(i+t.length+1);if(l===61){let c=i+t.length+2,d=e.indexOf("&",c);return ue(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(n=/[%+]/.test(e),!n)return}let s={};n??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;a!==-1;){let i=e.indexOf("&",a+1),l=e.indexOf("=",a);l>i&&i!==-1&&(l=-1);let c=e.slice(a+1,l===-1?i===-1?void 0:i:l);if(n&&(c=ue(c)),a=i,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),n&&(d=ue(d))),r?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??=d}return t?s[t]:s},We=Ge,Ve=(e,t)=>Ge(e,t,!0),me=decodeURIComponent;var Je=e=>Q(e,me),q=class{raw;#t;#e;routeIndex=0;path;bodyCache={};constructor(e,t="/",r=[[]]){this.raw=e,this.path=t,this.#e=r,this.#t={}}param(e){return e?this.#r(e):this.#s()}#r(e){let t=this.#e[0][this.routeIndex][1][e],r=this.#o(t);return r&&/\%/.test(r)?Je(r):r}#s(){let e={},t=Object.keys(this.#e[0][this.routeIndex][1]);for(let r of t){let n=this.#o(this.#e[0][this.routeIndex][1][r]);n!==void 0&&(e[r]=/\%/.test(n)?Je(n):n)}return e}#o(e){return this.#e[1]?this.#e[1][e]:e}query(e){return We(this.url,e)}queries(e){return Ve(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t={};return this.raw.headers.forEach((r,n)=>{t[n]=r}),t}async parseBody(e){return Fe(this,e)}#n=e=>{let{bodyCache:t,raw:r}=this,n=t[e];if(n)return n;let s=Object.keys(t)[0];return s?t[s].then(a=>(s==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=r[e]()};json(){return this.#n("text").then(e=>JSON.parse(e))}text(){return this.#n("text")}arrayBuffer(){return this.#n("arrayBuffer")}bytes(){return this.#n("arrayBuffer").then(e=>new Uint8Array(e))}blob(){return this.#n("blob")}formData(){return this.#n("formData")}addValidatedData(e,t){this.#t[e]=t}valid(e){return this.#t[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[je](){return this.#e}get matchedRoutes(){return this.#e[0].map(([[,e]])=>e)}get routePath(){return this.#e[0].map(([[,e]])=>e)[this.routeIndex].path}};var fe={Stringify:1,BeforeStream:2,Stream:3},w=(e,t)=>{let r=new String(e);return r.isEscaped=!0,r.callbacks=t,r},Lt=/[&<>'"]/,Z=async(e,t)=>{let r="";t||=[];let n=await Promise.all(e);for(let s=n.length-1;r+=n[s],s--,!(s<0);s--){let a=n[s];typeof a=="object"&&t.push(...a.callbacks||[]);let i=a.isEscaped;if(a=await(typeof a=="object"?a.toString():a),typeof a=="object"&&t.push(...a.callbacks||[]),a.isEscaped??i)r+=a;else{let l=[r];S(a,l),r=l[0]}}return w(r,t)},S=(e,t)=>{let r=e.search(Lt);if(r===-1){t[0]+=e;return}let n,s,a=0;for(s=r;s<e.length;s++){switch(e.charCodeAt(s)){case 34:n="&quot;";break;case 39:n="&#39;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}t[0]+=e.substring(a,s)+n,a=s+1}t[0]+=e.substring(a,s)},ye=e=>{let t=e.callbacks;if(!t?.length)return e;let r=[e],n={};return t.forEach(s=>s({phase:fe.Stringify,buffer:r,context:n})),r[0]},ge=async(e,t,r,n,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);s?s[0]+=e:s=[e];let i=Promise.all(a.map(l=>l({phase:t,buffer:s,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ge(c,t,!1,n,s))).then(()=>s[0]));return r?w(await i,a):i};var Ot="text/plain; charset=UTF-8",be=(e,t)=>({"Content-Type":e,...t}),H=(e,t)=>new Response(e,t),ve=class{#t;#e;env={};#r;finalized=!1;error;#s;#o;#n;#d;#l;#c;#i;#u;#h;constructor(e,t){this.#t=e,t&&(this.#o=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#h=t.path,this.#u=t.matchResult)}get req(){return this.#e??=new q(this.#t,this.#h,this.#u),this.#e}get event(){if(this.#o&&"respondWith"in this.#o)return this.#o;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#o)return this.#o;throw Error("This context has no ExecutionContext")}get res(){return this.#n||=H(null,{headers:this.#i??=new Headers})}set res(e){if(this.#n&&e){e=H(e.body,e);for(let[t,r]of this.#n.headers.entries())if(t!=="content-type")if(t==="set-cookie"){let n=this.#n.headers.getSetCookie();e.headers.delete("set-cookie");for(let s of n)e.headers.append("set-cookie",s)}else e.headers.set(t,r)}this.#n=e,this.finalized=!0}render=(...e)=>(this.#l??=t=>this.html(t),this.#l(...e));setLayout=e=>this.#d=e;getLayout=()=>this.#d;setRenderer=e=>{this.#l=e};header=(e,t,r)=>{this.finalized&&(this.#n=H(this.#n.body,this.#n));let n=this.#n?this.#n.headers:this.#i??=new Headers;t===void 0?n.delete(e):r?.append?n.append(e,t):n.set(e,t)};status=e=>{this.#s=e};set=(e,t)=>{this.#r??=new Map,this.#r.set(e,t)};get=e=>this.#r?this.#r.get(e):void 0;get var(){return this.#r?Object.fromEntries(this.#r):{}}#a(e,t,r){let n=this.#n?new Headers(this.#n.headers):this.#i??new Headers;if(typeof t=="object"&&"headers"in t){let a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(let[i,l]of a)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(r)for(let[a,i]of Object.entries(r))if(typeof i=="string")n.set(a,i);else{n.delete(a);for(let l of i)n.append(a,l)}let s=typeof t=="number"?t:t?.status??this.#s;return H(e,{status:s,headers:n})}newResponse=(...e)=>this.#a(...e);body=(e,t,r)=>this.#a(e,t,r);text=(e,t,r)=>!this.#i&&!this.#s&&!t&&!r&&!this.finalized?new Response(e):this.#a(e,t,be(Ot,r));json=(e,t,r)=>this.#a(JSON.stringify(e),t,be("application/json",r));html=(e,t,r)=>{let n=s=>this.#a(s,t,be("text/html; charset=UTF-8",r));return typeof e=="object"?ge(e,fe.Stringify,!1,{}).then(n):n(e)};redirect=(e,t)=>{let r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>H(),this.#c(this))};var f="ALL",ze="all",qe=["get","post","put","delete","options","patch"],ee="Can not add a route since the matcher is already built.",te=class extends Error{};var Xe="__COMPOSED_HANDLER";var Ht=e=>e.text("404 Not Found",404),Qe=(e,t)=>{if("getResponse"in e){let r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},Ye=class Ze{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#t="/";routes=[];constructor(t={}){[...qe,ze].forEach(a=>{this[a]=(i,...l)=>(typeof i=="string"?this.#t=i:this.#s(a,this.#t,i),l.forEach(c=>{this.#s(a,this.#t,c)}),this)}),this.on=(a,i,...l)=>{for(let c of[i].flat()){this.#t=c;for(let d of[a].flat())l.map(u=>{this.#s(d.toUpperCase(),this.#t,u)})}return this},this.use=(a,...i)=>(typeof a=="string"?this.#t=a:(this.#t="*",i.unshift(a)),i.forEach(l=>{this.#s(f,this.#t,l)}),this);let{strict:n,...s}=t;Object.assign(this,s),this.getPath=n??!0?t.getPath??pe:Ke}#e(){let t=new Ze({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#r=this.#r,t.routes=this.routes,t}#r=Ht;errorHandler=Qe;route(t,r){let n=this.basePath(t);return r.routes.map(s=>{let a;r.errorHandler===Qe?a=s.handler:(a=async(i,l)=>(await de([],r.errorHandler)(i,()=>s.handler(i,l))).res,a[Xe]=s.handler),n.#s(s.method,s.path,a,s.basePath)}),this}basePath(t){let r=this.#e();return r._basePath=k(this._basePath,t),r}onError=t=>(this.errorHandler=t,this);notFound=t=>(this.#r=t,this);mount(t,r,n){let s,a;n&&(typeof n=="function"?a=n:(a=n.optionHandler,n.replaceRequest===!1?s=c=>c:s=n.replaceRequest));let i=a?c=>{let d=a(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||=(()=>{let c=k(this._basePath,t),d=c==="/"?0:c.length;return u=>{let h=new URL(u.url);return h.pathname=this.getPath(u).slice(d)||"/",new Request(h,u)}})();let l=async(c,d)=>{let u=await r(s(c.req.raw),...i(c));if(u)return u;await d()};return this.#s(f,k(t,"*"),l),this}#s(t,r,n,s){t=t.toUpperCase(),r=k(this._basePath,r);let a={basePath:s!==void 0?k(this._basePath,s):this._basePath,path:r,method:t,handler:n};this.router.add(t,r,[n,a]),this.routes.push(a)}#o(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t}#n(t,r,n,s){if(s==="HEAD")return(async()=>new Response(null,await this.#n(t,r,n,"GET")))();let a=this.getPath(t,{env:n}),i=this.router.match(s,a),l=new ve(t,{path:a,matchResult:i,env:n,executionCtx:r,notFoundHandler:this.#r});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await this.#r(l)})}catch(u){return this.#o(u,l)}return d instanceof Promise?d.then(u=>u||(l.finalized?l.res:this.#r(l))).catch(u=>this.#o(u,l)):d??this.#r(l)}let c=de(i[0],this.errorHandler,this.#r);return(async()=>{try{let d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return this.#o(d,l)}})()}fetch=(t,...r)=>this.#n(t,r[1],r[0],t.method);request=(t,r,n,s)=>t instanceof Request?this.fetch(r?new Request(t,r):t,n,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${k("/",t)}`,r),n,s));fire=()=>{addEventListener("fetch",t=>{t.respondWith(this.#n(t.request,t,void 0,t.request.method))})}};var re=[];function we(e,t){let r=this.buildAllMatchers(),n=((s,a)=>{let i=r[s]||r[f],l=i[2][a];if(l)return l;let c=a.match(i[0]);if(!c)return[[],re];let d=c.indexOf("",1);return[i[1][d],c]});return this.match=n,n(e,t)}var ne="[^/]+",N=".*",B="(?:|/.*)",P=Symbol(),Nt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===N||e===B?1:t===N||t===B?-1:e===ne?1:t===ne?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var et=class xe{#t;#e;#r=Object.create(null);insert(t,r,n,s,a){if(t.length===0){if(this.#t!==void 0)throw P;if(a)return;this.#t=r;return}let[i,...l]=t,c=i==="*"?l.length===0?["","",N]:["","",ne]:i==="/*"?["","",B]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),d;if(c){let u=c[1],h=c[2]||ne;if(u&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw P;if(d=this.#r[h],!d){if(Object.keys(this.#r).some(p=>p!==N&&p!==B))throw P;if(a)return;d=this.#r[h]=new xe,u!==""&&(d.#e=s.varIndex++)}!a&&u!==""&&n.push([u,d.#e])}else if(d=this.#r[i],!d){if(Object.keys(this.#r).some(u=>u.length>1&&u!==N&&u!==B))throw P;if(a)return;d=this.#r[i]=new xe}d.insert(l,r,n,s,a)}buildRegExpStr(){let r=Object.keys(this.#r).sort(Bt).map(n=>{let s=this.#r[n];return(typeof s.#e=="number"?`(${n})@${s.#e}`:Nt.has(n)?`\\${n}`:n)+s.buildRegExpStr()});return typeof this.#t=="number"&&r.unshift(`#${this.#t}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}};var tt=class{#t={varIndex:0};#e=new et;insert(e,t,r){let n=[],s=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{let d=`@\\${i}`;return s[i]=[d,c],i++,l=!0,d}),!l)break}let a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){let[l]=s[i];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(l)!==-1){a[c]=a[c].replace(l,s[i][1]);break}}return this.#e.insert(a,t,n,this.#t,r),n}buildRegExp(){let e=this.#e.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0,r=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,a,i)=>a!==void 0?(r[++t]=Number(a),"$()"):(i!==void 0&&(n[Number(i)]=++t),"")),[new RegExp(`^${e}`),r,n]}};var jt=[/^$/,[],Object.create(null)],rt=Object.create(null);function nt(e){return rt[e]??=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`)}function Ft(){rt=Object.create(null)}function Ut(e){let t=new tt,r=[];if(e.length===0)return jt;let n=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[h,p])=>d?1:h?-1:u.length-p.length),s=Object.create(null);for(let d=0,u=-1,h=n.length;d<h;d++){let[p,m,g]=n[d];p?s[m]=[g.map(([v])=>[v,Object.create(null)]),re]:u++;let b;try{b=t.insert(m,u,p)}catch(v){throw v===P?new te(m):v}p||(r[u]=g.map(([v,y])=>{let E=Object.create(null);for(y-=1;y>=0;y--){let[D,le]=b[y];E[D]=le}return[v,E]}))}let[a,i,l]=t.buildRegExp();for(let d=0,u=r.length;d<u;d++)for(let h=0,p=r[d].length;h<p;h++){let m=r[d][h]?.[1];if(!m)continue;let g=Object.keys(m);for(let b=0,v=g.length;b<v;b++)m[g[b]]=l[m[g[b]]]}let c=[];for(let d in i)c[d]=r[i[d]];return[a,c,s]}function M(e,t){if(e){for(let r of Object.keys(e).sort((n,s)=>s.length-n.length))if(nt(r).test(t))return[...e[r]]}}var oe=class{name="RegExpRouter";#t;#e;constructor(){this.#t={[f]:Object.create(null)},this.#e={[f]:Object.create(null)}}add(e,t,r){let n=this.#t,s=this.#e;if(!n||!s)throw new Error(ee);n[e]||[n,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[f]).forEach(c=>{l[e][c]=[...l[f][c]]})}),t==="/*"&&(t="*");let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let l=nt(t);e===f?Object.keys(n).forEach(c=>{n[c][t]||=M(n[c],t)||M(n[f],t)||[]}):n[e][t]||=M(n[e],t)||M(n[f],t)||[],Object.keys(n).forEach(c=>{(e===f||e===c)&&Object.keys(n[c]).forEach(d=>{l.test(d)&&n[c][d].push([r,a])})}),Object.keys(s).forEach(c=>{(e===f||e===c)&&Object.keys(s[c]).forEach(d=>l.test(d)&&s[c][d].push([r,a]))});return}let i=Y(t)||[t];for(let l=0,c=i.length;l<c;l++){let d=i[l];Object.keys(s).forEach(u=>{(e===f||e===u)&&(s[u][d]||=[...M(n[u],d)||M(n[f],d)||[]],s[u][d].push([r,a-c+l+1]))})}}match=we;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#e).concat(Object.keys(this.#t)).forEach(t=>{e[t]||=this.#r(t)}),this.#t=this.#e=void 0,Ft(),e}#r(e){let t=[],r=e===f;return[this.#t,this.#e].forEach(n=>{let s=n[e]?Object.keys(n[e]).map(a=>[a,n[e][a]]):[];s.length!==0?(r||=!0,t.push(...s)):e!==f&&t.push(...Object.keys(n[f]).map(a=>[a,n[f][a]]))}),r?Ut(t):null}};var Ee=class{name="SmartRouter";#t=[];#e=[];constructor(e){this.#t=e.routers}add(e,t,r){if(!this.#e)throw new Error(ee);this.#e.push([e,t,r])}match(e,t){if(!this.#e)throw new Error("Fatal error");let r=this.#t,n=this.#e,s=r.length,a=0,i;for(;a<s;a++){let l=r[a];try{for(let c=0,d=n.length;c<d;c++)l.add(...n[c]);i=l.match(e,t)}catch(c){if(c instanceof te)continue;throw c}this.match=l.match.bind(l),this.#t=[l],this.#e=void 0;break}if(a===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(this.#e||this.#t.length!==1)throw new Error("No active router has been determined yet.");return this.#t[0]}};var j=Object.create(null),$t=e=>{for(let t in e)return!0;return!1},ot=class st{#t;#e;#r;#s=0;#o=j;constructor(t,r,n){if(this.#e=n||Object.create(null),this.#t=[],t&&r){let s=Object.create(null);s[t]={handler:r,possibleKeys:[],score:0},this.#t=[s]}this.#r=[]}insert(t,r,n){this.#s=++this.#s;let s=this,a=Ue(r),i=[];for(let l=0,c=a.length;l<c;l++){let d=a[l],u=a[l+1],h=$e(d,u),p=Array.isArray(h)?h[0]:d;if(p in s.#e){s=s.#e[p],h&&i.push(h[1]);continue}s.#e[p]=new st,h&&(s.#r.push(h),i.push(h[1])),s=s.#e[p]}return s.#t.push({[t]:{handler:n,possibleKeys:i.filter((l,c,d)=>d.indexOf(l)===c),score:this.#s}}),s}#n(t,r,n,s,a){for(let i=0,l=r.#t.length;i<l;i++){let c=r.#t[i],d=c[n]||c[f],u={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),s!==j||a&&a!==j))for(let h=0,p=d.possibleKeys.length;h<p;h++){let m=d.possibleKeys[h],g=u[d.score];d.params[m]=a?.[m]&&!g?a[m]:s[m]??a?.[m],u[d.score]=!0}}}search(t,r){let n=[];this.#o=j;let a=[this],i=he(r),l=[],c=i.length,d=null;for(let u=0;u<c;u++){let h=i[u],p=u===c-1,m=[];for(let b=0,v=a.length;b<v;b++){let y=a[b],E=y.#e[h];E&&(E.#o=y.#o,p?(E.#e["*"]&&this.#n(n,E.#e["*"],t,y.#o),this.#n(n,E,t,y.#o)):m.push(E));for(let D=0,le=y.#r.length;D<le;D++){let Ne=y.#r[D],C=y.#o===j?{}:{...y.#o};if(Ne==="*"){let A=y.#e["*"];A&&(this.#n(n,A,t,y.#o),A.#o=C,m.push(A));continue}let[St,Be,L]=Ne;if(!h&&!(L instanceof RegExp))continue;let _=y.#e[St];if(L instanceof RegExp){if(d===null){d=new Array(c);let z=r[0]==="/"?1:0;for(let O=0;O<c;O++)d[O]=z,z+=i[O].length+1}let A=r.substring(d[u]),ce=L.exec(A);if(ce){if(C[Be]=ce[0],this.#n(n,_,t,y.#o,C),$t(_.#e)){_.#o=C;let z=ce[0].match(/\//)?.length??0;(l[z]||=[]).push(_)}continue}}(L===!0||L.test(h))&&(C[Be]=h,p?(this.#n(n,_,t,C,y.#o),_.#e["*"]&&this.#n(n,_.#e["*"],t,C,y.#o)):(_.#o=C,m.push(_)))}}let g=l.shift();a=g?m.concat(g):m}return n.length>1&&n.sort((u,h)=>u.score-h.score),[n.map(({handler:u,params:h})=>[u,h])]}};var _e=class{name="TrieRouter";#t;constructor(){this.#t=new ot}add(e,t,r){let n=Y(t);if(n){for(let s=0,a=n.length;s<a;s++)this.#t.insert(e,n[s],r);return}this.#t.insert(e,t,r)}match(e,t){return this.#t.search(e,t)}};var Se=class extends Ye{constructor(e={}){super(e),this.router=e.router??new Ee({routers:[new oe,new _e]})}};var Ce=[{category:"\u{1F4C4} PDF tools",tools:[{tool_name:"PDF to Word converter",monthly_searches:"4.0M/mo",build_diff:"Hard",india:"\u{1F525} High"},{tool_name:"Compress PDF",monthly_searches:"1.6M/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Merge PDF",monthly_searches:"1.2M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Split PDF",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"JPG to PDF",monthly_searches:"1.0M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"PDF to JPG",monthly_searches:"800K/mo",build_diff:"Easy",india:"High"},{tool_name:"PDF editor (annotate, highlight)",monthly_searches:"700K/mo",build_diff:"Hard",india:"High"},{tool_name:"Word to PDF",monthly_searches:"700K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Rotate PDF",monthly_searches:"400K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"PDF to Excel",monthly_searches:"600K/mo",build_diff:"Hard",india:"High"},{tool_name:"Watermark PDF",monthly_searches:"250K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Protect / Unlock PDF",monthly_searches:"280K/mo",build_diff:"Easy",india:"Medium"}]},{category:"\u{1F5BC} Image tools",tools:[{tool_name:"Compress image / Photo compressor",monthly_searches:"1.3M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Remove background from image",monthly_searches:"1.2M/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Resize image",monthly_searches:"1.0M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Convert image format (JPG\u2194PNG\u2194WebP)",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Crop image",monthly_searches:"700K/mo",build_diff:"Easy",india:"High"},{tool_name:"Passport size photo maker",monthly_searches:"800K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"GIF maker / Video to GIF",monthly_searches:"650K/mo",build_diff:"Medium",india:"Medium"},{tool_name:"Image colour picker",monthly_searches:"500K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Add text to image",monthly_searches:"480K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Image watermark",monthly_searches:"350K/mo",build_diff:"Easy",india:"High"},{tool_name:"Flip / Rotate image",monthly_searches:"280K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Meme generator",monthly_searches:"550K/mo",build_diff:"Medium",india:"\u{1F525} High"}]},{category:"\u2328 Developer tools",tools:[{tool_name:"JSON Formatter / Validator",monthly_searches:"2.0M/mo",build_diff:"Easy",india:"High"},{tool_name:"Base64 Encoder / Decoder",monthly_searches:"1.2M/mo",build_diff:"Easy",india:"High"},{tool_name:"Regex Tester with live match",monthly_searches:"900K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"QR Code Generator",monthly_searches:"1.5M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"URL Encoder / Decoder",monthly_searches:"550K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"JWT Decoder",monthly_searches:"400K/mo",build_diff:"Easy",india:"High"},{tool_name:"UUID / ULID Generator",monthly_searches:"350K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Cron Expression Generator",monthly_searches:"320K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Diff Checker (text / JSON / code)",monthly_searches:"480K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Password Generator",monthly_searches:"650K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"MD5 / SHA hash generator",monthly_searches:"400K/mo",build_diff:"Easy",india:"Medium"}]},{category:"\u{1F4B0} Indian finance calculators",tools:[{tool_name:"SIP Calculator",monthly_searches:"10M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"EMI Calculator (home / car / personal)",monthly_searches:"8M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"GST Calculator",monthly_searches:"5M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Income Tax Calculator India",monthly_searches:"4M+/mo",build_diff:"Medium",india:"\u{1F525} India only"},{tool_name:"FD / RD Maturity Calculator",monthly_searches:"3M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"HRA Calculator",monthly_searches:"2M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"CAGR Calculator",monthly_searches:"1.5M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"NPS / Retirement Calculator",monthly_searches:"1M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Gratuity Calculator",monthly_searches:"800K/mo",build_diff:"Easy",india:"\u{1F525} India only"}]},{category:"\u{1F4DD} Text tools",tools:[{tool_name:"Word Counter / Character Counter",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Case Converter (upper/lower/title/camel)",monthly_searches:"600K/mo",build_diff:"Easy",india:"High"},{tool_name:"Lorem Ipsum Generator",monthly_searches:"550K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Text to Slug / URL converter",monthly_searches:"250K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Markdown to HTML Converter",monthly_searches:"350K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Number to Words (Indian system)",monthly_searches:"500K/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Roman Numeral Converter",monthly_searches:"300K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Binary / Hex / Octal Converter",monthly_searches:"420K/mo",build_diff:"Easy",india:"High"},{tool_name:"Business Name Generator",monthly_searches:"850K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"AI Product Description Writer",monthly_searches:"550K/mo",build_diff:"Medium",india:"High"},{tool_name:"Resume Bullet Point Writer",monthly_searches:"600K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"AI Meta Description Generator",monthly_searches:"420K/mo",build_diff:"Medium",india:"High"},{tool_name:"AI Email Subject Line Generator",monthly_searches:"380K/mo",build_diff:"Medium",india:"Medium"},{tool_name:"AI Cover Letter Generator",monthly_searches:"700K/mo",build_diff:"Medium",india:"\u{1F525} High"}]},{category:"\u{1F4C8} SEO tools",tools:[{tool_name:"Plagiarism Checker (basic)",monthly_searches:"5M+/mo",build_diff:"Hard",india:"\u{1F525} High"},{tool_name:"XML Sitemap Generator",monthly_searches:"400K/mo",build_diff:"Medium",india:"High"},{tool_name:"Keyword Density Checker",monthly_searches:"350K/mo",build_diff:"Easy",india:"High"},{tool_name:"Robots.txt Generator",monthly_searches:"220K/mo",build_diff:"Easy",india:"Medium"}]}];var se=Symbol("RENDERER"),at=Symbol("ERROR_HANDLER");var it=Symbol("INTERNAL");var F=Symbol("PERMALINK");var ke=e=>(e[it]=!0,e);var lt=e=>({value:t,children:r})=>{if(!r)return;let n={children:[{tag:ke(()=>{e.push(t)}),props:{}}]};Array.isArray(r)?n.children.push(...r.flat()):n.children.push(r),n.children.push({tag:ke(()=>{e.pop()}),props:{}});let s={tag:"",props:n,type:""};return s[at]=a=>{throw e.pop(),a},s};var U=[],ct=e=>{let t=[e],r=(n=>{t.push(n.value);let s;try{s=n.children?(Array.isArray(n.children)?new dt("",{},n.children):n.children).toString():""}catch(a){throw t.pop(),a}return s instanceof Promise?s.finally(()=>t.pop()).then(a=>w(a,a.callbacks)):(t.pop(),w(s))});return r.values=t,r.Provider=r,r[se]=lt(t),U.push(r),r},T=e=>e.values.at(-1);var Ie={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Re={},Pe="data-precedence",ut=e=>e.rel==="stylesheet"&&"precedence"in e,ht=(e,t)=>e==="link"?t:Ie[e].length>0;var W={};kt(W,{button:()=>Qt,form:()=>qt,input:()=>Xt,link:()=>Jt,meta:()=>zt,script:()=>Wt,style:()=>Vt,title:()=>Gt});var $=e=>Array.isArray(e)?e:[e];var pt=new WeakMap,mt=(e,t,r,n)=>({buffer:s,context:a})=>{if(!s)return;let i=pt.get(a)||{};pt.set(a,i);let l=i[e]||=[],c=!1,d=Ie[e],u=ht(e,n!==void 0);if(u){e:for(let[,h]of l)if(!(e==="link"&&!(h.rel==="stylesheet"&&h[Pe]!==void 0))){for(let p of d)if((h?.[p]??null)===r?.[p]){c=!0;break e}}}if(c?s[0]=s[0].replaceAll(t,""):u||e==="link"?l.push([t,r,n]):l.unshift([t,r,n]),s[0].indexOf("</head>")!==-1){let h;if(e==="link"||n!==void 0){let p=[];h=l.map(([m,,g],b)=>{if(g===void 0)return[m,Number.MAX_SAFE_INTEGER,b];let v=p.indexOf(g);return v===-1&&(p.push(g),v=p.length-1),[m,v,b]}).sort((m,g)=>m[1]-g[1]||m[2]-g[2]).map(([m])=>m)}else h=l.map(([p])=>p);h.forEach(p=>{s[0]=s[0].replaceAll(p,"")}),s[0]=s[0].replace(/(?=<\/head>)/,h.join(""))}},K=(e,t,r)=>w(new x(e,r,$(t??[])).toString()),G=(e,t,r,n)=>{if("itemProp"in r)return K(e,t,r);let{precedence:s,blocking:a,...i}=r;s=n?s??"":void 0,n&&(i[Pe]=s);let l=new x(e,i,$(t||[])).toString();return l instanceof Promise?l.then(c=>w(l,[...c.callbacks||[],mt(e,c,i,s)])):w(l,[mt(e,l,i,s)])},Gt=({children:e,...t})=>{let r=ae();if(r){let n=T(r);if(n==="svg"||n==="head")return new x("title",t,$(e??[]))}return G("title",e,t,!1)},Wt=({children:e,...t})=>{let r=ae();return["src","async"].some(n=>!t[n])||r&&T(r)==="head"?K("script",e,t):G("script",e,t,!1)},Vt=({children:e,...t})=>["href","precedence"].every(r=>r in t)?(t["data-href"]=t.href,delete t.href,G("style",e,t,!0)):K("style",e,t),Jt=({children:e,...t})=>["onLoad","onError"].some(r=>r in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?K("link",e,t):G("link",e,t,ut(t)),zt=({children:e,...t})=>{let r=ae();return r&&T(r)==="head"?K("meta",e,t):G("meta",e,t,!1)},ft=(e,{children:t,...r})=>new x(e,r,$(t??[])),qt=e=>(typeof e.action=="function"&&(e.action=F in e.action?e.action[F]:void 0),ft("form",e)),yt=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=F in t.formAction?t.formAction[F]:void 0),ft(e,t)),Xt=e=>yt("input",e),Qt=e=>yt("button",e);var Yt=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Te=e=>Yt.get(e)||e,Zt=/[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,Ae=new Set,gt=1024,er=/^[!?]|[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,bt=new Set,tr=256,V=(e,t,r)=>{e.size>=t&&e.clear(),e.add(r)},wt=e=>bt.has(e)?!0:typeof e!="string"?!1:e.length===0?!0:er.test(e)?!1:(V(bt,tr,e),!0),De=e=>{if(Ae.has(e))return!0;let t=e.length;if(t===0)return!1;for(let r=0;r<t;r++){let n=e.charCodeAt(r);if(!(n>=97&&n<=122||n>=65&&n<=90||n>=48&&n<=57||n===45||n===95||n===46||n===58))return Zt.test(e)?!1:(V(Ae,gt,e),!0)}return V(Ae,gt,e),!0},rr=/[\s"'():;\\/\[\]{}\x00-\x1f\x7f-\x9f]/,Me=new Set,vt=1024,nr=e=>{if(Me.has(e))return!0;let t=e.length;if(t===0)return!1;for(let r=0;r<t;r++){let n=e.charCodeAt(r);if(!(n>=97&&n<=122||n>=65&&n<=90||n>=48&&n<=57||n===45||n===95))return rr.test(e)?!1:(V(Me,vt,e),!0)}return V(Me,vt,e),!0},or=/[;"'\\/\[\](){}]/,sr=e=>{if(!or.test(e))return!1;let t=0,r=[];for(let n=0,s=e.length;n<s;n++){let a=e.charCodeAt(n);if(a===92){if(n===s-1)return!0;n++}else if(t!==0){if(a===10||a===12||a===13)return!0;a===t&&(t=0)}else if(a===47&&e.charCodeAt(n+1)===42){let i=e.indexOf("*/",n+2);if(i===-1)return!0;n=i+1}else if(a===34||a===39)t=a;else if(a===40)r.push(41);else if(a===91)r.push(93);else{if(a===123||a===125)return!0;if(a===41||a===93){if(r[r.length-1]!==a)return!0;r.pop()}else if(a===59&&r.length===0)return!0}}return t!==0||r.length!==0},Le=(e,t)=>{for(let[r,n]of Object.entries(e)){let s=r[0]==="-"||!/[A-Z]/.test(r)?r:r.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);if(!nr(s))continue;if(n==null){t(s,null);continue}let a;if(typeof n=="number")a=s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${n}`:`${n}px`;else if(typeof n=="string"){if(sr(n))continue;a=n}else continue;t(s,a)}};var J=void 0,ae=()=>J,ar=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,ir=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],lr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],He=(e,t)=>{for(let r=0,n=e.length;r<n;r++){let s=e[r];if(typeof s=="string")S(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof x?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):He(s,t)}}},x=class{tag;props;key;children;isEscaped=!0;localContexts;constructor(e,t,r){if(typeof e!="function"&&!wt(e))throw new Error(`Invalid JSX tag name: ${e}`);this.tag=e,this.props=t,this.children=r}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){let e=[""];this.localContexts?.forEach(([t,r])=>{t.values.push(r)});try{this.toStringToBuffer(e)}finally{this.localContexts?.forEach(([t])=>{t.values.pop()})}return e.length===1?"callbacks"in e?ye(w(e[0],e.callbacks)).toString():e[0]:Z(e,e.callbacks)}toStringToBuffer(e){let t=this.tag,r=this.props,{children:n}=this;e[0]+=`<${t}`;let s=t==="svg"||J&&T(J)==="svg"?a=>ar(Te(a)):a=>Te(a);for(let[a,i]of Object.entries(r))if(a=s(a),!!De(a)&&a!=="children"){if(a==="style"&&typeof i=="object"){let l="";Le(i,(c,d)=>{d!=null&&(l+=`${l?";":""}${c}:${d}`)}),e[0]+=' style="',S(l,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${a}="`,S(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${a}="${i}"`;else if(typeof i=="boolean"&&lr.includes(a))i&&(e[0]+=` ${a}=""`);else if(a==="dangerouslySetInnerHTML"){if(n.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");n=[w(i.__html)]}else if(i instanceof Promise)e[0]+=` ${a}="`,e.unshift('"',i);else if(typeof i=="function"){if(!a.startsWith("on")&&a!=="ref")throw new Error(`Invalid prop '${a}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${a}="`,S(i.toString(),e),e[0]+='"'}if(ir.includes(t)&&n.length===0){e[0]+="/>";return}e[0]+=">",He(n,e),e[0]+=`</${t}>`}},Oe=class extends x{toStringToBuffer(e){let{children:t}=this,r={...this.props};t.length&&(r.children=t.length===1?t[0]:t);let n=this.tag.call(null,r);if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(U.length===0)e.unshift("",n);else{let s=U.map(a=>[a,a.values.at(-1)]);e.unshift("",n.then(a=>(a instanceof x&&(a.localContexts=s),a)))}else n instanceof x?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||=[],e.callbacks.push(...n.callbacks))):S(n,e)}},dt=class extends x{toStringToBuffer(e){He(this.children,e)}};var xt=!1,ie=(e,t,r)=>{if(!xt){for(let n in Re)W[n][se]=Re[n];xt=!0}return typeof e=="function"?new Oe(e,t,r):W[e]?new Oe(W[e],t,r):e==="svg"||e==="head"?(J||=ct(""),new x(e,t,[new Oe(J,{value:e},r)])):new x(e,t,r)};function o(e,t,r){let n;if(!t||!("children"in t))n=ie(e,t,[]);else{let s=t.children;n=Array.isArray(s)?ie(e,t,s):ie(e,t,[s])}return n.key=r,n}var I=e=>o("html",{lang:"en",children:[o("head",{children:[o("meta",{charset:"UTF-8"}),o("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o("title",{children:e.title||"ToolStaq | Hyper-Fast Developer & Text Utilities"}),o("meta",{name:"description",content:e.description||"Stunning, privacy-first, zero-bloat developer and text tools running on the edge."}),o("meta",{property:"og:type",content:"website"}),o("meta",{property:"og:title",content:e.title||"ToolStaq"}),o("meta",{property:"og:description",content:e.description||"Zero-bloat edge utilities."}),o("link",{rel:"stylesheet",href:"/style.css"}),o("script",{dangerouslySetInnerHTML:{__html:`
        (function() {
          try {
            var savedTheme = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        })();
      `}})]}),o("body",{children:[o("header",{children:[o("a",{href:"/",class:"logo-link",id:"home-logo",children:[o("div",{class:"logo-icon",children:"T"}),o("span",{children:"ToolStaq"})]}),o("nav",{class:"nav-links",children:[o("a",{href:"/tools/json",class:"nav-link",children:"JSON Formatter"}),o("a",{href:"/tools/word-counter",class:"nav-link",children:"Word Counter"}),o("a",{href:"/tools/password-generator",class:"nav-link",children:"Passwords"}),o("a",{href:"/tools/base64",class:"nav-link",children:"Base64"})]}),o("button",{id:"theme-toggle",class:"theme-btn","aria-label":"Toggle Dark Mode",title:"Toggle Dark Mode",children:[o("svg",{class:"icon-moon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),o("svg",{class:"icon-sun",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("circle",{cx:"12",cy:"12",r:"5"}),o("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),o("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),o("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),o("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),o("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),o("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),o("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),o("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})]}),o("main",{children:e.children}),o("footer",{children:o("p",{class:"footer-text",children:["\xA9 ",new Date().getFullYear()," ToolStaq.online. Powered by Cloudflare Workers and Hono JSX."]})}),o("script",{dangerouslySetInnerHTML:{__html:`
        document.addEventListener('DOMContentLoaded', () => {
          const themeBtn = document.getElementById('theme-toggle');
          
          themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            const isDark = root.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
              root.removeAttribute('data-theme');
              localStorage.setItem('theme', 'light');
            } else {
              root.setAttribute('data-theme', 'dark');
              localStorage.setItem('theme', 'dark');
            }
          });
        });
      `}})]})]});var Et=()=>o(I,{title:"JSON Formatter & Validator | ToolStaq",description:"Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.",children:[o("div",{class:"container",children:[o("a",{href:"/",class:"back-btn",id:"json-back-btn",children:"\u2190 Back to Tools Hub"}),o("div",{class:"tool-view-layout",children:[o("div",{class:"workspace-panel",children:[o("div",{class:"workspace-header",children:[o("h1",{class:"workspace-title",children:"JSON Formatter & Validator"}),o("p",{class:"workspace-desc",children:"Paste your raw JSON to validate, beautify, minify, or parse it instantly in your browser. Your data never leaves your device."})]}),o("div",{class:"btn-row",style:"margin-bottom: var(--space-24); align-items: center;",children:[o("label",{for:"indent",class:"form-label",style:"margin-bottom: 0;",children:"Tab Size:"}),o("select",{id:"indent",class:"search-input",style:"width: auto; padding: var(--space-8) var(--space-16);",children:[o("option",{value:"2",selected:!0,children:"2 Spaces"}),o("option",{value:"4",children:"4 Spaces"}),o("option",{value:"tab",children:"Tab"}),o("option",{value:"minify",children:"Minified"})]}),o("button",{type:"button",class:"btn btn-primary",id:"btn-format",children:"Format & Validate"}),o("button",{type:"button",class:"btn",id:"btn-clear",children:"Clear"}),o("button",{type:"button",class:"btn",id:"btn-copy-client",style:"margin-left: auto; display: none;",children:"Copy Output"})]}),o("div",{id:"error-box",style:"display: none;",role:"alert","aria-live":"polite"}),o("div",{class:"tool-view-layout",style:"grid-template-columns: 1fr 1fr; margin-top: 0;",children:[o("div",{class:"form-group",style:"margin-bottom: 0;",children:[o("label",{class:"form-label",for:"json-input",children:"Raw Input JSON"}),o("textarea",{class:"text-area",id:"json-input",placeholder:'{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }',style:"height: 450px;","aria-label":"JSON input"})]}),o("div",{class:"form-group",style:"margin-bottom: 0;",children:[o("label",{class:"form-label",children:"Formatted Output"}),o("div",{id:"output-placeholder",style:"height: 450px;","aria-hidden":"true",children:"Formatted output will appear here"}),o("pre",{class:"result-box",id:"output-pre",style:"height: 450px; display: none;",role:"region","aria-label":"Formatted JSON output"})]})]})]}),o("div",{class:"info-sidebar",children:[o("div",{class:"sidebar-card",children:[o("h3",{children:"\u{1F512} Privacy First"}),o("p",{children:"All formatting and validation run entirely in your browser. Your JSON data never leaves your device."})]}),o("div",{class:"sidebar-card",children:[o("h3",{children:"\u26A1 Instant Speed"}),o("p",{children:"Client-side V8-powered parsing delivers sub-millisecond results with zero network round-trips."})]}),o("div",{class:"sidebar-card",children:[o("h3",{children:"\u{1F6E0}\uFE0F Modes"}),o("p",{children:"Beautify with 2-space, 4-space, or tab indentation \u2014 or minify to a compact single line."})]})]})]})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const jsonInput = document.getElementById('json-input');
        const selectIndent = document.getElementById('indent');
        const btnFormat = document.getElementById('btn-format');
        const btnClear = document.getElementById('btn-clear');
        const btnCopy = document.getElementById('btn-copy-client');
        const errorBox = document.getElementById('error-box');
        const outputPlaceholder = document.getElementById('output-placeholder');
        const outputPre = document.getElementById('output-pre');

        function formatJSON() {
          const val = jsonInput.value.trim();
          if (!val) {
            errorBox.style.display = 'none';
            outputPlaceholder.style.display = 'flex';
            outputPre.style.display = 'none';
            btnCopy.style.display = 'none';
            return;
          }

          const spaceSetting = selectIndent.value;
          let indentSetting;
          if (spaceSetting === 'tab') {
            indentSetting = '\\t';
          } else if (spaceSetting === 'minify') {
            indentSetting = undefined;
          } else {
            indentSetting = parseInt(spaceSetting, 10);
          }

          try {
            const parsed = JSON.parse(val);
            const formatted = JSON.stringify(parsed, null, indentSetting);

            errorBox.style.display = 'none';
            jsonInput.classList.remove('input-error');

            outputPlaceholder.style.display = 'none';
            outputPre.style.display = 'block';
            outputPre.textContent = formatted;
            btnCopy.style.display = 'inline-flex';
          } catch (e) {
            errorBox.style.display = 'block';
            errorBox.innerHTML = '<strong>Invalid JSON:</strong> ' + e.message;
            jsonInput.classList.add('input-error');

            outputPlaceholder.style.display = 'flex';
            outputPre.style.display = 'none';
            btnCopy.style.display = 'none';
          }
        }

        btnFormat.addEventListener('click', formatJSON);
        selectIndent.addEventListener('change', formatJSON);

        btnClear.addEventListener('click', () => {
          jsonInput.value = '';
          jsonInput.classList.remove('input-error');
          errorBox.style.display = 'none';
          outputPlaceholder.style.display = 'flex';
          outputPre.style.display = 'none';
          btnCopy.style.display = 'none';
        });

        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(outputPre.textContent);
          const orig = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = orig, 1500);
        });
      `}})]});var R=new Se,_t={"JSON Formatter / Validator":"/tools/json","Word Counter / Character Counter":"/tools/word-counter","Base64 Encoder / Decoder":"/tools/base64","UUID / ULID Generator":"/tools/uuid-generator","Password Generator":"/tools/password-generator"};R.get("/",e=>e.html(o(I,{title:"ToolStaq | Developer & Text Utilities Hub",description:"Explore a collection of ultra-fast developer utilities, financial calculators, and text formatting tools running instantly on the edge.",children:[o("div",{class:"hero",children:[o("h1",{children:"All Utilities, No Bloat."}),o("p",{children:"Privacy-first, supercharged developer and text tools rendered instantly at the edge with zero client-side frameworks."}),o("div",{class:"search-container",children:[o("svg",{class:"search-icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),o("input",{type:"text",class:"search-input",placeholder:"Search over 40+ tools...",id:"tool-search",autocomplete:"off"})]})]}),o("div",{class:"container",style:"padding-top: 0;",children:[o("div",{class:"categories-filter",id:"categories-bar",children:[o("button",{class:"filter-btn active","data-category":"all",children:"All Tools"}),Ce.map(t=>o("button",{class:"filter-btn","data-category":t.category,children:t.category}))]}),o("div",{class:"tools-grid",id:"tools-container",children:Ce.flatMap(t=>t.tools.map(r=>{let n=_t[r.tool_name]||"#",s=!!_t[r.tool_name];return o("a",{href:n,class:`tool-card ${s?"":"coming-soon-card"}`,"data-name":r.tool_name.toLowerCase(),"data-category":t.category,onclick:s?"":"showComingSoon(event, '"+r.tool_name+"')",id:`tool-${r.tool_name.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase()}`,children:[o("div",{class:"tool-header",children:[o("span",{class:"tool-icon-wrapper",children:t.category.split(" ")[0]}),o("span",{class:"tool-badge",style:s?"color:#10b981;border-color:rgba(16,185,129,0.2);":"color:#94a3b8;",children:s?"Active":"Soon"})]}),o("div",{children:[o("h3",{class:"tool-name",children:r.tool_name}),o("p",{class:"tool-desc",children:s?`Format, validate, or convert your data instantly with our edge-powered ${r.tool_name.toLowerCase()}.`:`High performance ${r.tool_name.toLowerCase()} tool scheduled for the next release.`})]}),o("div",{class:"tool-footer",children:[o("span",{class:"tool-searches",children:["\u{1F525} ",r.monthly_searches]}),o("span",{class:"tool-diff",children:r.build_diff})]})]})}))})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const searchInput = document.getElementById('tool-search');
        const filterBtns = document.querySelectorAll('#categories-bar .filter-btn');
        const toolCards = document.querySelectorAll('#tools-container .tool-card');
        
        let currentCategory = 'all';
        let searchQuery = '';

        function updateFilter() {
          toolCards.forEach(card => {
            const name = card.getAttribute('data-name');
            const category = card.getAttribute('data-category');
            
            const matchesSearch = name.includes(searchQuery);
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            
            if (matchesSearch && matchesCategory) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        }

        searchInput.addEventListener('input', (e) => {
          searchQuery = e.target.value.toLowerCase().trim();
          updateFilter();
        });

        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            updateFilter();
          });
        });

        function showComingSoon(e, name) {
          e.preventDefault();
          alert(\`\\"\${name}\\" is on our roadmap and will be deployed soon! We are prioritizing tools by search volume.\`);
        }
      `}})]})));R.get("/tools/json",e=>e.html(o(Et,{})));R.get("/tools/json-formatter",e=>e.redirect("/tools/json"));R.get("/tools/word-counter",e=>e.html(o(I,{title:"Word Counter & Character Counter | ToolStaq",description:"Analyze your text length, count characters, words, sentences, paragraphs, reading speed, and keyword occurrences instantly.",children:[o("div",{class:"container",children:[o("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),o("div",{class:"tool-view-layout",children:[o("div",{class:"workspace-panel",children:[o("div",{class:"workspace-header",children:[o("h1",{class:"workspace-title",children:"Word & Character Counter"}),o("p",{class:"workspace-desc",children:"Analyze your writing speed and complexity metrics in real-time. Simply type or paste your content."})]}),o("div",{class:"stats-grid",children:[o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-words",children:"0"}),o("div",{class:"stat-label",children:"Words"})]}),o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-chars",children:"0"}),o("div",{class:"stat-label",children:"Characters"})]}),o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-sentences",children:"0"}),o("div",{class:"stat-label",children:"Sentences"})]}),o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-paragraphs",children:"0"}),o("div",{class:"stat-label",children:"Paragraphs"})]})]}),o("div",{class:"form-group",children:o("textarea",{class:"text-area",id:"text-input",placeholder:"Start typing or paste your essay, email, or article here...",style:"height: 240px;"})}),o("div",{class:"stats-grid",style:"grid-template-columns: repeat(2, 1fr); margin-top: 1rem;",children:[o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-read-time",children:"0m 0s"}),o("div",{class:"stat-label",children:"Estimated Reading Time"})]}),o("div",{class:"stat-box",children:[o("div",{class:"stat-value",id:"stat-speak-time",children:"0m 0s"}),o("div",{class:"stat-label",children:"Estimated Speaking Time"})]})]}),o("div",{class:"result-panel",id:"density-panel",style:"display:none;",children:[o("div",{class:"result-title",style:"color: var(--primary);",children:"Top Keyword Density"}),o("div",{id:"density-list",style:"font-size:0.9rem; display:flex; flex-wrap:wrap; gap:0.5rem;"})]})]}),o("div",{class:"info-sidebar",children:[o("div",{class:"sidebar-card",children:[o("h3",{children:"\u2139\uFE0F Calculations"}),o("p",{children:"Reading time is computed at 225 words per minute. Speaking time is based on 130 words per minute."})]}),o("div",{class:"sidebar-card",children:[o("h3",{children:"\u{1F310} Clean Content"}),o("p",{children:"Extra whitespaces, double tabs, and formatting marks are auto-normalized in the telemetry counters."})]})]})]})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const textInput = document.getElementById('text-input');
        const statWords = document.getElementById('stat-words');
        const statChars = document.getElementById('stat-chars');
        const statSentences = document.getElementById('stat-sentences');
        const statParagraphs = document.getElementById('stat-paragraphs');
        const statReadTime = document.getElementById('stat-read-time');
        const statSpeakTime = document.getElementById('stat-speak-time');
        const densityPanel = document.getElementById('density-panel');
        const densityList = document.getElementById('density-list');

        function formatDuration(minutesDecimal) {
          const totalSeconds = Math.round(minutesDecimal * 60);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          return \`\${minutes}m \${seconds}s\`;
        }

        textInput.addEventListener('input', () => {
          const text = textInput.value;
          
          // Characters
          statChars.textContent = text.length;
          
          // Words
          const wordsArray = text.trim().split(/\\s+/).filter(w => w.length > 0);
          const wordsCount = wordsArray.length;
          statWords.textContent = wordsCount;
          
          // Sentences
          const sentencesCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
          statSentences.textContent = sentencesCount;
          
          // Paragraphs
          const paragraphsCount = text.split(/\\n+/).filter(p => p.trim().length > 0).length;
          statParagraphs.textContent = paragraphsCount;
          
          // Speed estimations
          statReadTime.textContent = formatDuration(wordsCount / 225);
          statSpeakTime.textContent = formatDuration(wordsCount / 130);
          
          // Density List
          if (wordsCount > 3) {
            const frequency = {};
            wordsArray.forEach(word => {
              const cleaned = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              if (cleaned.length > 2) {
                frequency[cleaned] = (frequency[cleaned] || 0) + 1;
              }
            });
            
            const sorted = Object.entries(frequency)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5);
              
            densityList.innerHTML = '';
            if (sorted.length > 0) {
              densityPanel.style.display = 'block';
              sorted.forEach(([word, count]) => {
                const percent = ((count / wordsCount) * 100).toFixed(1);
                const badge = document.createElement('span');
                badge.className = 'tool-badge';
                badge.style.padding = '0.3rem 0.7rem';
                badge.style.borderColor = 'rgba(217, 70, 239, 0.2)';
                badge.style.color = '#ff77ff';
                badge.textContent = \`\${word} (\${count}x - \${percent}%)\`;
                densityList.appendChild(badge);
              });
            } else {
              densityPanel.style.display = 'none';
            }
          } else {
            densityPanel.style.display = 'none';
          }
        });
      `}})]})));R.get("/tools/base64",e=>e.html(o(I,{title:"Base64 Encoder & Decoder | ToolStaq",description:"Instantly convert plain text to Base64 code or decode Base64 strings back to text safely and quickly.",children:[o("div",{class:"container",children:[o("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),o("div",{class:"tool-view-layout",children:[o("div",{class:"workspace-panel",children:[o("div",{class:"workspace-header",children:[o("h1",{class:"workspace-title",children:"Base64 Encoder / Decoder"}),o("p",{class:"workspace-desc",children:"Securely encode regular string data into Base64 format, or convert standard Base64 back into human-readable text."})]}),o("div",{class:"form-group",children:[o("label",{class:"form-label",for:"base64-input",children:"Input Data:"}),o("textarea",{class:"text-area",id:"base64-input",placeholder:"Paste or type content here...",style:"height: 180px;"})]}),o("div",{class:"btn-row",children:[o("button",{class:"btn btn-primary",id:"btn-encode",children:"Encode Base64"}),o("button",{class:"btn",id:"btn-decode",children:"Decode Base64"}),o("button",{class:"btn",id:"btn-base64-clear",style:"margin-left: auto;",children:"Clear"})]}),o("div",{class:"result-panel",id:"base64-result-panel",style:"display: none;",children:[o("div",{class:"result-title",children:[o("span",{children:"Result"}),o("button",{class:"btn",id:"btn-base64-copy",style:"padding: 0.2rem 0.6rem; font-size: 0.75rem;",children:"Copy Result"})]}),o("textarea",{class:"text-area",id:"base64-output",readonly:!0,style:"height: 180px; background: rgba(0,0,0,0.3); font-family: monospace;"})]})]}),o("div",{class:"info-sidebar",children:o("div",{class:"sidebar-card",children:[o("h3",{children:"\u{1F524} Base64 Basics"}),o("p",{children:"Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation."})]})})]})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const bInput = document.getElementById('base64-input');
        const bOutput = document.getElementById('base64-output');
        const btnEncode = document.getElementById('btn-encode');
        const btnDecode = document.getElementById('btn-decode');
        const btnClear = document.getElementById('btn-base64-clear');
        const btnCopy = document.getElementById('btn-base64-copy');
        const rPanel = document.getElementById('base64-result-panel');

        btnEncode.addEventListener('click', () => {
          const val = bInput.value;
          if (!val) return;
          try {
            // Support UTF-8 encoding safely in browsers
            const utf8Bytes = new TextEncoder().encode(val);
            const binString = Array.from(utf8Bytes, (byte) => String.fromCharCode(byte)).join("");
            const encoded = btoa(binString);
            
            rPanel.style.display = 'block';
            bOutput.value = encoded;
            bInput.classList.remove('input-error');
          } catch(e) {
            alert('Failed to encode: ' + e.message);
          }
        });

        btnDecode.addEventListener('click', () => {
          const val = bInput.value.trim();
          if (!val) return;
          try {
            const binString = atob(val);
            const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
            const decoded = new TextDecoder().decode(bytes);
            
            rPanel.style.display = 'block';
            bOutput.value = decoded;
            bInput.classList.remove('input-error');
          } catch(e) {
            bInput.classList.add('input-error');
            alert('Invalid Base64 string entered. Decode failed.');
          }
        });

        btnClear.addEventListener('click', () => {
          bInput.value = '';
          bOutput.value = '';
          rPanel.style.display = 'none';
          bInput.classList.remove('input-error');
        });

        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(bOutput.value);
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });
      `}})]})));R.get("/tools/uuid-generator",e=>e.html(o(I,{title:"UUID & ULID Generator | ToolStaq",description:"Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.",children:[o("div",{class:"container",children:[o("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),o("div",{class:"tool-view-layout",children:[o("div",{class:"workspace-panel",children:[o("div",{class:"workspace-header",children:[o("h1",{class:"workspace-title",children:"UUID / ULID Generator"}),o("p",{class:"workspace-desc",children:"Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys."})]}),o("div",{class:"form-group",children:[o("label",{class:"form-label",for:"generator-type",children:"Identifier Type:"}),o("select",{id:"generator-type",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px;",children:[o("option",{value:"uuid",children:"UUID v4 (Standard Unique Key)"}),o("option",{value:"ulid",children:"ULID (Lexicographically Sortable)"})]})]}),o("div",{class:"form-group",children:[o("label",{class:"form-label",for:"generator-count",children:"Quantity to generate (1 - 100):"}),o("input",{type:"number",id:"generator-count",min:"1",max:"100",value:"5",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px; width: 120px;"})]}),o("div",{class:"btn-row",children:[o("button",{class:"btn btn-primary",id:"btn-generate",children:"Generate IDs"}),o("button",{class:"btn",id:"btn-gen-copy",style:"margin-left: auto;",children:"Copy All"})]}),o("div",{class:"result-panel",style:"margin-top: 1.5rem;",children:o("textarea",{class:"text-area",id:"generator-output",readonly:!0,style:"height: 200px; background: rgba(0,0,0,0.3); font-family: monospace;"})})]}),o("div",{class:"info-sidebar",children:o("div",{class:"sidebar-card",children:[o("h3",{children:"\u2139\uFE0F ULID vs UUID"}),o("p",{children:"ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys."})]})})]})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const genType = document.getElementById('generator-type');
        const genCount = document.getElementById('generator-count');
        const btnGenerate = document.getElementById('btn-generate');
        const btnCopy = document.getElementById('btn-gen-copy');
        const genOutput = document.getElementById('generator-output');

        // Fast browser-compatible UUIDv4 generator
        function generateUUID() {
          return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
        }

        // Fast browser-compatible ULID generator (crockford base32)
        function generateULID() {
          const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
          const TIME_LEN = 10;
          const RAND_LEN = 16;
          
          let now = Date.now();
          let timeChars = '';
          for (let i = TIME_LEN - 1; i >= 0; i--) {
            const mod = now % 32;
            timeChars = ENCODING.charAt(mod) + timeChars;
            now = Math.floor(now / 32);
          }
          
          let randChars = '';
          const randomBytes = crypto.getRandomValues(new Uint8Array(RAND_LEN));
          for (let i = 0; i < RAND_LEN; i++) {
            randChars += ENCODING.charAt(randomBytes[i] % 32);
          }
          
          return timeChars + randChars;
        }

        function runGeneration() {
          let count = parseInt(genCount.value, 10);
          if (isNaN(count) || count < 1) count = 1;
          if (count > 100) count = 100;
          genCount.value = count;
          
          const type = genType.value;
          const ids = [];
          for (let i = 0; i < count; i++) {
            ids.push(type === 'uuid' ? generateUUID() : generateULID());
          }
          
          genOutput.value = ids.join('\\n');
        }

        btnGenerate.addEventListener('click', runGeneration);
        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(genOutput.value);
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });

        // Generate initial batch on load
        runGeneration();
      `}})]})));R.get("/tools/password-generator",e=>e.html(o(I,{title:"Random Password Generator | ToolStaq",description:"Create cryptographically secure random passwords with adjustable length and character types.",children:[o("div",{class:"container",children:[o("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),o("div",{class:"tool-view-layout",children:[o("div",{class:"workspace-panel",children:[o("div",{class:"workspace-header",children:[o("h1",{class:"workspace-title",children:"Random Password Generator"}),o("p",{class:"workspace-desc",children:"Generate secure passwords using client-side Web Cryptography APIs. Protect your online accounts with robust entropy."})]}),o("div",{class:"form-group",style:"background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--card-border);",children:[o("input",{type:"text",id:"pwd-display",readonly:!0,style:"font-family: monospace; font-size: 1.25rem; background: transparent; border: none; outline: none; color: #ffffff; width: 100%; letter-spacing: 0.05em;"}),o("button",{class:"btn btn-primary",id:"btn-pwd-copy",style:"padding: 0.5rem 1rem; font-size: 0.85rem; flex-shrink: 0;",children:"Copy"})]}),o("div",{class:"form-group",children:[o("div",{style:"display: flex; justify-content: space-between; align-items: center;",children:o("span",{class:"form-label",style:"margin-bottom: 0;",children:["Password Length: ",o("strong",{id:"length-val",style:"color: var(--primary);",children:"16"})]})}),o("input",{type:"range",id:"pwd-length",class:"range-slider",min:"6",max:"64",value:"16"})]}),o("div",{class:"checkbox-group",children:[o("label",{class:"checkbox-label",children:[o("input",{type:"checkbox",id:"pwd-upper",class:"checkbox-input",checked:!0}),"Include Uppercase (A-Z)"]}),o("label",{class:"checkbox-label",children:[o("input",{type:"checkbox",id:"pwd-lower",class:"checkbox-input",checked:!0}),"Include Lowercase (a-z)"]}),o("label",{class:"checkbox-label",children:[o("input",{type:"checkbox",id:"pwd-nums",class:"checkbox-input",checked:!0}),"Include Numbers (0-9)"]}),o("label",{class:"checkbox-label",children:[o("input",{type:"checkbox",id:"pwd-syms",class:"checkbox-input",checked:!0}),"Include Symbols (!@#$%^&*)"]})]}),o("div",{class:"form-group",style:"margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;",children:[o("span",{class:"form-label",style:"margin-bottom: 0;",children:"Security Strength:"}),o("span",{id:"pwd-strength",class:"tool-badge",style:"font-weight: 700; padding: 0.3rem 0.8rem;",children:"STRONG"})]}),o("div",{class:"btn-row",style:"margin-top: 1.5rem;",children:o("button",{class:"btn",id:"btn-pwd-generate",style:"width: 100%; justify-content: center; background: rgba(255,255,255,0.04); border-color: var(--primary);",children:"\u{1F504} Re-generate Password"})})]}),o("div",{class:"info-sidebar",children:o("div",{class:"sidebar-card",children:[o("h3",{children:"\u{1F512} Local Safety"}),o("p",{children:"We use the browser's native `window.crypto.getRandomValues` function. This ensures the output is random and stays completely offline."})]})})]})]}),o("script",{dangerouslySetInnerHTML:{__html:`
        const pwdDisplay = document.getElementById('pwd-display');
        const pwdLength = document.getElementById('pwd-length');
        const lengthVal = document.getElementById('length-val');
        
        const pwdUpper = document.getElementById('pwd-upper');
        const pwdLower = document.getElementById('pwd-lower');
        const pwdNums = document.getElementById('pwd-nums');
        const pwdSyms = document.getElementById('pwd-syms');
        
        const pwdStrength = document.getElementById('pwd-strength');
        const btnPwdCopy = document.getElementById('btn-pwd-copy');
        const btnPwdGenerate = document.getElementById('btn-pwd-generate');

        const CHARS = {
          upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          lower: 'abcdefghijklmnopqrstuvwxyz',
          nums: '0123456789',
          syms: '!@#$%^&*()_+-=[]{}|;:,.<>?'
        };

        function generatePassword() {
          const len = parseInt(pwdLength.value, 10);
          lengthVal.textContent = len;
          
          let pool = '';
          if (pwdUpper.checked) pool += CHARS.upper;
          if (pwdLower.checked) pool += CHARS.lower;
          if (pwdNums.checked) pool += CHARS.nums;
          if (pwdSyms.checked) pool += CHARS.syms;
          
          if (!pool) {
            pwdDisplay.value = 'Select at least one type';
            pwdStrength.textContent = 'NONE';
            pwdStrength.style.color = '#ef4444';
            pwdStrength.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            return;
          }
          
          let pwd = '';
          const randomValues = crypto.getRandomValues(new Uint32Array(len));
          for (let i = 0; i < len; i++) {
            pwd += pool.charAt(randomValues[i] % pool.length);
          }
          
          pwdDisplay.value = pwd;
          
          // Evaluate Strength
          let entropy = Math.log2(pool.length) * len;
          if (entropy < 40) {
            pwdStrength.textContent = 'WEAK';
            pwdStrength.style.color = '#ef4444';
            pwdStrength.style.borderColor = 'rgba(239, 68, 68, 0.2)';
          } else if (entropy < 60) {
            pwdStrength.textContent = 'MEDIUM';
            pwdStrength.style.color = '#f59e0b';
            pwdStrength.style.borderColor = 'rgba(245, 158, 11, 0.2)';
          } else if (entropy < 85) {
            pwdStrength.textContent = 'STRONG';
            pwdStrength.style.color = '#06b6d4';
            pwdStrength.style.borderColor = 'rgba(6, 182, 212, 0.2)';
          } else {
            pwdStrength.textContent = 'SECURE & MILITARY';
            pwdStrength.style.color = '#10b981';
            pwdStrength.style.borderColor = 'rgba(16, 185, 129, 0.2)';
          }
        }

        pwdLength.addEventListener('input', generatePassword);
        [pwdUpper, pwdLower, pwdNums, pwdSyms].forEach(cb => cb.addEventListener('change', generatePassword));
        btnPwdGenerate.addEventListener('click', generatePassword);

        btnPwdCopy.addEventListener('click', () => {
          if (pwdDisplay.value === 'Select at least one type') return;
          navigator.clipboard.writeText(pwdDisplay.value);
          const originalText = btnPwdCopy.textContent;
          btnPwdCopy.textContent = 'Copied!';
          setTimeout(() => btnPwdCopy.textContent = originalText, 1500);
        });

        // Run on load
        generatePassword();
      `}})]})));var To={async fetch(e,t,r){try{let n=await t.ASSETS.fetch(e);if(n.status!==404)return n}catch{}return R.fetch(e,t,r)},scheduled:async(e,t,r)=>{console.log(`Running scheduled background buffer cleanup task: ${e.cron}`)}};export{R as app,To as default};
