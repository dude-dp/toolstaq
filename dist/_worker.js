var St=Object.defineProperty;var Ct=(e,t)=>{for(var n in t)St(e,n,{get:t[n],enumerable:!0})};var de=(e,t,n)=>(r,o)=>{let a=-1;return i(0);async function i(l){if(l<=a)throw new Error("next() called multiple times");a=l;let c,d=!1,u;if(e[l]?(u=e[l][0][0],r.req.routeIndex=l):u=l===e.length&&o||void 0,u)try{c=await u(r,()=>i(l+1))}catch(p){if(p instanceof Error&&t)r.error=p,c=await t(p,r),d=!0;else throw p}else r.finalized===!1&&n&&(c=await n(r));return c&&(r.finalized===!1||d)&&(r.res=c),r}};var _e=Symbol();var He=async(e,t=Object.create(null))=>{let{all:n=!1,dot:r=!1}=t,a=(e instanceof K?e.raw.headers:e.headers).get("Content-Type");return a?.startsWith("multipart/form-data")||a?.startsWith("application/x-www-form-urlencoded")?kt(e,{all:n,dot:r}):{}};async function kt(e,t){let n=await e.formData();return n?It(n,t):{}}function It(e,t){let n=Object.create(null);return e.forEach((r,o)=>{t.all||o.endsWith("[]")?Rt(n,o,r):n[o]=r}),t.dot&&Object.entries(n).forEach(([r,o])=>{r.includes(".")&&(At(n,r,o),delete n[r])}),n}var Rt=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:t.endsWith("[]")?e[t]=[n]:e[t]=n},At=(e,t,n)=>{if(/(?:^|\.)__proto__\./.test(t))return;let r=e,o=t.split(".");o.forEach((a,i)=>{i===o.length-1?r[a]=n:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})};var pe=e=>{let t=e.split("/");return t[0]===""&&t.shift(),t},Ue=e=>{let{groups:t,path:n}=Pt(e),r=pe(n);return Tt(r,t)},Pt=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{let o=`@${r}`;return t.push([o,n]),o}),{groups:t,path:e}},Tt=(e,t)=>{for(let n=t.length-1;n>=0;n--){let[r]=t[n];for(let o=e.length-1;o>=0;o--)if(e[o].includes(r)){e[o]=e[o].replace(r,t[n][1]);break}}return e},X={},$e=(e,t)=>{if(e==="*")return"*";let n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){let r=`${e}#${t}`;return X[r]||(n[2]?X[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:X[r]=[e,n[1],!0]),X[r]}return null},Q=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},Ot=e=>Q(e,decodeURI),he=e=>{let t=e.url,n=t.indexOf("/",t.indexOf(":")+4),r=n;for(;r<t.length;r++){let o=t.charCodeAt(r);if(o===37){let a=t.indexOf("?",r),i=t.indexOf("#",r),l=a===-1?i===-1?void 0:i:i===-1?a:Math.min(a,i),c=t.slice(n,l);return Ot(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(o===63||o===35)break}return t.slice(n,r)};var Fe=e=>{let t=he(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},I=(e,t,...n)=>(n.length&&(t=I(t,...n)),`${e?.[0]==="/"?"":"/"}${e}${t==="/"?"":`${e?.at(-1)==="/"?"":"/"}${t?.[0]==="/"?t.slice(1):t}`}`),Y=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;let t=e.split("/"),n=[],r="";return t.forEach(o=>{if(o!==""&&!/\:/.test(o))r+="/"+o;else if(/\:/.test(o))if(/\?/.test(o)){n.length===0&&r===""?n.push("/"):n.push(r);let a=o.replace("?","");r+="/"+a,n.push(r)}else r+="/"+o}),n.filter((o,a,i)=>i.indexOf(o)===a)},ue=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Q(e,fe):e):e,Ve=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){let l=e.charCodeAt(i+t.length+1);if(l===61){let c=i+t.length+2,d=e.indexOf("&",c);return ue(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}let o={};r??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;a!==-1;){let i=e.indexOf("&",a+1),l=e.indexOf("=",a);l>i&&i!==-1&&(l=-1);let c=e.slice(a+1,l===-1?i===-1?void 0:i:l);if(r&&(c=ue(c)),a=i,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),r&&(d=ue(d))),n?(o[c]&&Array.isArray(o[c])||(o[c]=[]),o[c].push(d)):o[c]??=d}return t?o[t]:o},Ge=Ve,ze=(e,t)=>Ve(e,t,!0),fe=decodeURIComponent;var We=e=>Q(e,fe),K=class{raw;#t;#e;routeIndex=0;path;bodyCache={};constructor(e,t="/",n=[[]]){this.raw=e,this.path=t,this.#e=n,this.#t={}}param(e){return e?this.#r(e):this.#o()}#r(e){let t=this.#e[0][this.routeIndex][1][e],n=this.#s(t);return n&&/\%/.test(n)?We(n):n}#o(){let e={},t=Object.keys(this.#e[0][this.routeIndex][1]);for(let n of t){let r=this.#s(this.#e[0][this.routeIndex][1][n]);r!==void 0&&(e[n]=/\%/.test(r)?We(r):r)}return e}#s(e){return this.#e[1]?this.#e[1][e]:e}query(e){return Ge(this.url,e)}queries(e){return ze(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){return He(this,e)}#n=e=>{let{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;let o=Object.keys(t)[0];return o?t[o].then(a=>(o==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=n[e]()};json(){return this.#n("text").then(e=>JSON.parse(e))}text(){return this.#n("text")}arrayBuffer(){return this.#n("arrayBuffer")}bytes(){return this.#n("arrayBuffer").then(e=>new Uint8Array(e))}blob(){return this.#n("blob")}formData(){return this.#n("formData")}addValidatedData(e,t){this.#t[e]=t}valid(e){return this.#t[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[_e](){return this.#e}get matchedRoutes(){return this.#e[0].map(([[,e]])=>e)}get routePath(){return this.#e[0].map(([[,e]])=>e)[this.routeIndex].path}};var me={Stringify:1,BeforeStream:2,Stream:3},w=(e,t)=>{let n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Lt=/[&<>'"]/,Z=async(e,t)=>{let n="";t||=[];let r=await Promise.all(e);for(let o=r.length-1;n+=r[o],o--,!(o<0);o--){let a=r[o];typeof a=="object"&&t.push(...a.callbacks||[]);let i=a.isEscaped;if(a=await(typeof a=="object"?a.toString():a),typeof a=="object"&&t.push(...a.callbacks||[]),a.isEscaped??i)n+=a;else{let l=[n];C(a,l),n=l[0]}}return w(n,t)},C=(e,t)=>{let n=e.search(Lt);if(n===-1){t[0]+=e;return}let r,o,a=0;for(o=n;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(a,o)+r,a=o+1}t[0]+=e.substring(a,o)},ye=e=>{let t=e.callbacks;if(!t?.length)return e;let n=[e],r={};return t.forEach(o=>o({phase:me.Stringify,buffer:n,context:r})),n[0]},ge=async(e,t,n,r,o)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);o?o[0]+=e:o=[e];let i=Promise.all(a.map(l=>l({phase:t,buffer:o,context:r}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ge(c,t,!1,r,o))).then(()=>o[0]));return n?w(await i,a):i};var Dt="text/plain; charset=UTF-8",ve=(e,t)=>({"Content-Type":e,...t}),B=(e,t)=>new Response(e,t),be=class{#t;#e;env={};#r;finalized=!1;error;#o;#s;#n;#d;#l;#c;#i;#u;#p;constructor(e,t){this.#t=e,t&&(this.#s=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#p=t.path,this.#u=t.matchResult)}get req(){return this.#e??=new K(this.#t,this.#p,this.#u),this.#e}get event(){if(this.#s&&"respondWith"in this.#s)return this.#s;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#s)return this.#s;throw Error("This context has no ExecutionContext")}get res(){return this.#n||=B(null,{headers:this.#i??=new Headers})}set res(e){if(this.#n&&e){e=B(e.body,e);for(let[t,n]of this.#n.headers.entries())if(t!=="content-type")if(t==="set-cookie"){let r=this.#n.headers.getSetCookie();e.headers.delete("set-cookie");for(let o of r)e.headers.append("set-cookie",o)}else e.headers.set(t,n)}this.#n=e,this.finalized=!0}render=(...e)=>(this.#l??=t=>this.html(t),this.#l(...e));setLayout=e=>this.#d=e;getLayout=()=>this.#d;setRenderer=e=>{this.#l=e};header=(e,t,n)=>{this.finalized&&(this.#n=B(this.#n.body,this.#n));let r=this.#n?this.#n.headers:this.#i??=new Headers;t===void 0?r.delete(e):n?.append?r.append(e,t):r.set(e,t)};status=e=>{this.#o=e};set=(e,t)=>{this.#r??=new Map,this.#r.set(e,t)};get=e=>this.#r?this.#r.get(e):void 0;get var(){return this.#r?Object.fromEntries(this.#r):{}}#a(e,t,n){let r=this.#n?new Headers(this.#n.headers):this.#i??new Headers;if(typeof t=="object"&&"headers"in t){let a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(let[i,l]of a)i.toLowerCase()==="set-cookie"?r.append(i,l):r.set(i,l)}if(n)for(let[a,i]of Object.entries(n))if(typeof i=="string")r.set(a,i);else{r.delete(a);for(let l of i)r.append(a,l)}let o=typeof t=="number"?t:t?.status??this.#o;return B(e,{status:o,headers:r})}newResponse=(...e)=>this.#a(...e);body=(e,t,n)=>this.#a(e,t,n);text=(e,t,n)=>!this.#i&&!this.#o&&!t&&!n&&!this.finalized?new Response(e):this.#a(e,t,ve(Dt,n));json=(e,t,n)=>this.#a(JSON.stringify(e),t,ve("application/json",n));html=(e,t,n)=>{let r=o=>this.#a(o,t,ve("text/html; charset=UTF-8",n));return typeof e=="object"?ge(e,me.Stringify,!1,{}).then(r):r(e)};redirect=(e,t)=>{let n=String(e);return this.header("Location",/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>B(),this.#c(this))};var m="ALL",Je="all",qe=["get","post","put","delete","options","patch"],ee="Can not add a route since the matcher is already built.",te=class extends Error{};var Ke="__COMPOSED_HANDLER";var Nt=e=>e.text("404 Not Found",404),Xe=(e,t)=>{if("getResponse"in e){let n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},Qe=class Ye{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#t="/";routes=[];constructor(t={}){[...qe,Je].forEach(a=>{this[a]=(i,...l)=>(typeof i=="string"?this.#t=i:this.#o(a,this.#t,i),l.forEach(c=>{this.#o(a,this.#t,c)}),this)}),this.on=(a,i,...l)=>{for(let c of[i].flat()){this.#t=c;for(let d of[a].flat())l.map(u=>{this.#o(d.toUpperCase(),this.#t,u)})}return this},this.use=(a,...i)=>(typeof a=="string"?this.#t=a:(this.#t="*",i.unshift(a)),i.forEach(l=>{this.#o(m,this.#t,l)}),this);let{strict:r,...o}=t;Object.assign(this,o),this.getPath=r??!0?t.getPath??he:Fe}#e(){let t=new Ye({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#r=this.#r,t.routes=this.routes,t}#r=Nt;errorHandler=Xe;route(t,n){let r=this.basePath(t);return n.routes.map(o=>{let a;n.errorHandler===Xe?a=o.handler:(a=async(i,l)=>(await de([],n.errorHandler)(i,()=>o.handler(i,l))).res,a[Ke]=o.handler),r.#o(o.method,o.path,a,o.basePath)}),this}basePath(t){let n=this.#e();return n._basePath=I(this._basePath,t),n}onError=t=>(this.errorHandler=t,this);notFound=t=>(this.#r=t,this);mount(t,n,r){let o,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?o=c=>c:o=r.replaceRequest));let i=a?c=>{let d=a(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};o||=(()=>{let c=I(this._basePath,t),d=c==="/"?0:c.length;return u=>{let p=new URL(u.url);return p.pathname=this.getPath(u).slice(d)||"/",new Request(p,u)}})();let l=async(c,d)=>{let u=await n(o(c.req.raw),...i(c));if(u)return u;await d()};return this.#o(m,I(t,"*"),l),this}#o(t,n,r,o){t=t.toUpperCase(),n=I(this._basePath,n);let a={basePath:o!==void 0?I(this._basePath,o):this._basePath,path:n,method:t,handler:r};this.router.add(t,n,[r,a]),this.routes.push(a)}#s(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t}#n(t,n,r,o){if(o==="HEAD")return(async()=>new Response(null,await this.#n(t,n,r,"GET")))();let a=this.getPath(t,{env:r}),i=this.router.match(o,a),l=new be(t,{path:a,matchResult:i,env:r,executionCtx:n,notFoundHandler:this.#r});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await this.#r(l)})}catch(u){return this.#s(u,l)}return d instanceof Promise?d.then(u=>u||(l.finalized?l.res:this.#r(l))).catch(u=>this.#s(u,l)):d??this.#r(l)}let c=de(i[0],this.errorHandler,this.#r);return(async()=>{try{let d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return this.#s(d,l)}})()}fetch=(t,...n)=>this.#n(t,n[1],n[0],t.method);request=(t,n,r,o)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,o):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${I("/",t)}`,n),r,o));fire=()=>{addEventListener("fetch",t=>{t.respondWith(this.#n(t.request,t,void 0,t.request.method))})}};var re=[];function we(e,t){let n=this.buildAllMatchers(),r=((o,a)=>{let i=n[o]||n[m],l=i[2][a];if(l)return l;let c=a.match(i[0]);if(!c)return[[],re];let d=c.indexOf("",1);return[i[1][d],c]});return this.match=r,r(e,t)}var ne="[^/]+",j=".*",_="(?:|/.*)",P=Symbol(),Mt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===j||e===_?1:t===j||t===_?-1:e===ne?1:t===ne?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ze=class xe{#t;#e;#r=Object.create(null);insert(t,n,r,o,a){if(t.length===0){if(this.#t!==void 0)throw P;if(a)return;this.#t=n;return}let[i,...l]=t,c=i==="*"?l.length===0?["","",j]:["","",ne]:i==="/*"?["","",_]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),d;if(c){let u=c[1],p=c[2]||ne;if(u&&c[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw P;if(d=this.#r[p],!d){if(Object.keys(this.#r).some(h=>h!==j&&h!==_))throw P;if(a)return;d=this.#r[p]=new xe,u!==""&&(d.#e=o.varIndex++)}!a&&u!==""&&r.push([u,d.#e])}else if(d=this.#r[i],!d){if(Object.keys(this.#r).some(u=>u.length>1&&u!==j&&u!==_))throw P;if(a)return;d=this.#r[i]=new xe}d.insert(l,n,r,o,a)}buildRegExpStr(){let n=Object.keys(this.#r).sort(Bt).map(r=>{let o=this.#r[r];return(typeof o.#e=="number"?`(${r})@${o.#e}`:Mt.has(r)?`\\${r}`:r)+o.buildRegExpStr()});return typeof this.#t=="number"&&n.unshift(`#${this.#t}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}};var et=class{#t={varIndex:0};#e=new Ze;insert(e,t,n){let r=[],o=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{let d=`@\\${i}`;return o[i]=[d,c],i++,l=!0,d}),!l)break}let a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=o.length-1;i>=0;i--){let[l]=o[i];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(l)!==-1){a[c]=a[c].replace(l,o[i][1]);break}}return this.#e.insert(a,t,r,this.#t,n),r}buildRegExp(){let e=this.#e.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0,n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(o,a,i)=>a!==void 0?(n[++t]=Number(a),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),n,r]}};var jt=[/^$/,[],Object.create(null)],tt=Object.create(null);function rt(e){return tt[e]??=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`)}function _t(){tt=Object.create(null)}function Ht(e){let t=new et,n=[];if(e.length===0)return jt;let r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[p,h])=>d?1:p?-1:u.length-h.length),o=Object.create(null);for(let d=0,u=-1,p=r.length;d<p;d++){let[h,f,g]=r[d];h?o[f]=[g.map(([b])=>[b,Object.create(null)]),re]:u++;let v;try{v=t.insert(f,u,h)}catch(b){throw b===P?new te(f):b}h||(n[u]=g.map(([b,y])=>{let E=Object.create(null);for(y-=1;y>=0;y--){let[D,le]=v[y];E[D]=le}return[b,E]}))}let[a,i,l]=t.buildRegExp();for(let d=0,u=n.length;d<u;d++)for(let p=0,h=n[d].length;p<h;p++){let f=n[d][p]?.[1];if(!f)continue;let g=Object.keys(f);for(let v=0,b=g.length;v<b;v++)f[g[v]]=l[f[g[v]]]}let c=[];for(let d in i)c[d]=n[i[d]];return[a,c,o]}function O(e,t){if(e){for(let n of Object.keys(e).sort((r,o)=>o.length-r.length))if(rt(n).test(t))return[...e[n]]}}var se=class{name="RegExpRouter";#t;#e;constructor(){this.#t={[m]:Object.create(null)},this.#e={[m]:Object.create(null)}}add(e,t,n){let r=this.#t,o=this.#e;if(!r||!o)throw new Error(ee);r[e]||[r,o].forEach(l=>{l[e]=Object.create(null),Object.keys(l[m]).forEach(c=>{l[e][c]=[...l[m][c]]})}),t==="/*"&&(t="*");let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let l=rt(t);e===m?Object.keys(r).forEach(c=>{r[c][t]||=O(r[c],t)||O(r[m],t)||[]}):r[e][t]||=O(r[e],t)||O(r[m],t)||[],Object.keys(r).forEach(c=>{(e===m||e===c)&&Object.keys(r[c]).forEach(d=>{l.test(d)&&r[c][d].push([n,a])})}),Object.keys(o).forEach(c=>{(e===m||e===c)&&Object.keys(o[c]).forEach(d=>l.test(d)&&o[c][d].push([n,a]))});return}let i=Y(t)||[t];for(let l=0,c=i.length;l<c;l++){let d=i[l];Object.keys(o).forEach(u=>{(e===m||e===u)&&(o[u][d]||=[...O(r[u],d)||O(r[m],d)||[]],o[u][d].push([n,a-c+l+1]))})}}match=we;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#e).concat(Object.keys(this.#t)).forEach(t=>{e[t]||=this.#r(t)}),this.#t=this.#e=void 0,_t(),e}#r(e){let t=[],n=e===m;return[this.#t,this.#e].forEach(r=>{let o=r[e]?Object.keys(r[e]).map(a=>[a,r[e][a]]):[];o.length!==0?(n||=!0,t.push(...o)):e!==m&&t.push(...Object.keys(r[m]).map(a=>[a,r[m][a]]))}),n?Ht(t):null}};var Ee=class{name="SmartRouter";#t=[];#e=[];constructor(e){this.#t=e.routers}add(e,t,n){if(!this.#e)throw new Error(ee);this.#e.push([e,t,n])}match(e,t){if(!this.#e)throw new Error("Fatal error");let n=this.#t,r=this.#e,o=n.length,a=0,i;for(;a<o;a++){let l=n[a];try{for(let c=0,d=r.length;c<d;c++)l.add(...r[c]);i=l.match(e,t)}catch(c){if(c instanceof te)continue;throw c}this.match=l.match.bind(l),this.#t=[l],this.#e=void 0;break}if(a===o)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(this.#e||this.#t.length!==1)throw new Error("No active router has been determined yet.");return this.#t[0]}};var H=Object.create(null),Ut=e=>{for(let t in e)return!0;return!1},nt=class st{#t;#e;#r;#o=0;#s=H;constructor(t,n,r){if(this.#e=r||Object.create(null),this.#t=[],t&&n){let o=Object.create(null);o[t]={handler:n,possibleKeys:[],score:0},this.#t=[o]}this.#r=[]}insert(t,n,r){this.#o=++this.#o;let o=this,a=Ue(n),i=[];for(let l=0,c=a.length;l<c;l++){let d=a[l],u=a[l+1],p=$e(d,u),h=Array.isArray(p)?p[0]:d;if(h in o.#e){o=o.#e[h],p&&i.push(p[1]);continue}o.#e[h]=new st,p&&(o.#r.push(p),i.push(p[1])),o=o.#e[h]}return o.#t.push({[t]:{handler:r,possibleKeys:i.filter((l,c,d)=>d.indexOf(l)===c),score:this.#o}}),o}#n(t,n,r,o,a){for(let i=0,l=n.#t.length;i<l;i++){let c=n.#t[i],d=c[r]||c[m],u={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),o!==H||a&&a!==H))for(let p=0,h=d.possibleKeys.length;p<h;p++){let f=d.possibleKeys[p],g=u[d.score];d.params[f]=a?.[f]&&!g?a[f]:o[f]??a?.[f],u[d.score]=!0}}}search(t,n){let r=[];this.#s=H;let a=[this],i=pe(n),l=[],c=i.length,d=null;for(let u=0;u<c;u++){let p=i[u],h=u===c-1,f=[];for(let v=0,b=a.length;v<b;v++){let y=a[v],E=y.#e[p];E&&(E.#s=y.#s,h?(E.#e["*"]&&this.#n(r,E.#e["*"],t,y.#s),this.#n(r,E,t,y.#s)):f.push(E));for(let D=0,le=y.#r.length;D<le;D++){let Be=y.#r[D],k=y.#s===H?{}:{...y.#s};if(Be==="*"){let T=y.#e["*"];T&&(this.#n(r,T,t,y.#s),T.#s=k,f.push(T));continue}let[Et,je,N]=Be;if(!p&&!(N instanceof RegExp))continue;let S=y.#e[Et];if(N instanceof RegExp){if(d===null){d=new Array(c);let q=n[0]==="/"?1:0;for(let M=0;M<c;M++)d[M]=q,q+=i[M].length+1}let T=n.substring(d[u]),ce=N.exec(T);if(ce){if(k[je]=ce[0],this.#n(r,S,t,y.#s,k),Ut(S.#e)){S.#s=k;let q=ce[0].match(/\//)?.length??0;(l[q]||=[]).push(S)}continue}}(N===!0||N.test(p))&&(k[je]=p,h?(this.#n(r,S,t,k,y.#s),S.#e["*"]&&this.#n(r,S.#e["*"],t,k,y.#s)):(S.#s=k,f.push(S)))}}let g=l.shift();a=g?f.concat(g):f}return r.length>1&&r.sort((u,p)=>u.score-p.score),[r.map(({handler:u,params:p})=>[u,p])]}};var Se=class{name="TrieRouter";#t;constructor(){this.#t=new nt}add(e,t,n){let r=Y(t);if(r){for(let o=0,a=r.length;o<a;o++)this.#t.insert(e,r[o],n);return}this.#t.insert(e,t,n)}match(e,t){return this.#t.search(e,t)}};var Ce=class extends Qe{constructor(e={}){super(e),this.router=e.router??new Ee({routers:[new se,new Se]})}};var oe=Symbol("RENDERER"),ot=Symbol("ERROR_HANDLER");var at=Symbol("INTERNAL");var U=Symbol("PERMALINK");var ke=e=>(e[at]=!0,e);var it=e=>({value:t,children:n})=>{if(!n)return;let r={children:[{tag:ke(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:ke(()=>{e.pop()}),props:{}});let o={tag:"",props:r,type:""};return o[ot]=a=>{throw e.pop(),a},o};var $=[],lt=e=>{let t=[e],n=(r=>{t.push(r.value);let o;try{o=r.children?(Array.isArray(r.children)?new ct("",{},r.children):r.children).toString():""}catch(a){throw t.pop(),a}return o instanceof Promise?o.finally(()=>t.pop()).then(a=>w(a,a.callbacks)):(t.pop(),w(o))});return n.values=t,n.Provider=n,n[oe]=it(t),$.push(n),n},L=e=>e.values.at(-1);var Ie={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Re={},Ae="data-precedence",dt=e=>e.rel==="stylesheet"&&"precedence"in e,ut=(e,t)=>e==="link"?t:Ie[e].length>0;var z={};Ct(z,{button:()=>qt,form:()=>Wt,input:()=>Jt,link:()=>Gt,meta:()=>zt,script:()=>Ft,style:()=>Vt,title:()=>$t});var F=e=>Array.isArray(e)?e:[e];var pt=new WeakMap,ht=(e,t,n,r)=>({buffer:o,context:a})=>{if(!o)return;let i=pt.get(a)||{};pt.set(a,i);let l=i[e]||=[],c=!1,d=Ie[e],u=ut(e,r!==void 0);if(u){e:for(let[,p]of l)if(!(e==="link"&&!(p.rel==="stylesheet"&&p[Ae]!==void 0))){for(let h of d)if((p?.[h]??null)===n?.[h]){c=!0;break e}}}if(c?o[0]=o[0].replaceAll(t,""):u||e==="link"?l.push([t,n,r]):l.unshift([t,n,r]),o[0].indexOf("</head>")!==-1){let p;if(e==="link"||r!==void 0){let h=[];p=l.map(([f,,g],v)=>{if(g===void 0)return[f,Number.MAX_SAFE_INTEGER,v];let b=h.indexOf(g);return b===-1&&(h.push(g),b=h.length-1),[f,b,v]}).sort((f,g)=>f[1]-g[1]||f[2]-g[2]).map(([f])=>f)}else p=l.map(([h])=>h);p.forEach(h=>{o[0]=o[0].replaceAll(h,"")}),o[0]=o[0].replace(/(?=<\/head>)/,p.join(""))}},V=(e,t,n)=>w(new x(e,n,F(t??[])).toString()),G=(e,t,n,r)=>{if("itemProp"in n)return V(e,t,n);let{precedence:o,blocking:a,...i}=n;o=r?o??"":void 0,r&&(i[Ae]=o);let l=new x(e,i,F(t||[])).toString();return l instanceof Promise?l.then(c=>w(l,[...c.callbacks||[],ht(e,c,i,o)])):w(l,[ht(e,l,i,o)])},$t=({children:e,...t})=>{let n=ae();if(n){let r=L(n);if(r==="svg"||r==="head")return new x("title",t,F(e??[]))}return G("title",e,t,!1)},Ft=({children:e,...t})=>{let n=ae();return["src","async"].some(r=>!t[r])||n&&L(n)==="head"?V("script",e,t):G("script",e,t,!1)},Vt=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,G("style",e,t,!0)):V("style",e,t),Gt=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?V("link",e,t):G("link",e,t,dt(t)),zt=({children:e,...t})=>{let n=ae();return n&&L(n)==="head"?V("meta",e,t):G("meta",e,t,!1)},ft=(e,{children:t,...n})=>new x(e,n,F(t??[])),Wt=e=>(typeof e.action=="function"&&(e.action=U in e.action?e.action[U]:void 0),ft("form",e)),mt=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=U in t.formAction?t.formAction[U]:void 0),ft(e,t)),Jt=e=>mt("input",e),qt=e=>mt("button",e);var Kt=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Oe=e=>Kt.get(e)||e,Xt=/[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,Pe=new Set,yt=1024,Qt=/^[!?]|[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,gt=new Set,Yt=256,W=(e,t,n)=>{e.size>=t&&e.clear(),e.add(n)},bt=e=>gt.has(e)?!0:typeof e!="string"?!1:e.length===0?!0:Qt.test(e)?!1:(W(gt,Yt,e),!0),Le=e=>{if(Pe.has(e))return!0;let t=e.length;if(t===0)return!1;for(let n=0;n<t;n++){let r=e.charCodeAt(n);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95||r===46||r===58))return Xt.test(e)?!1:(W(Pe,yt,e),!0)}return W(Pe,yt,e),!0},Zt=/[\s"'():;\\/\[\]{}\x00-\x1f\x7f-\x9f]/,Te=new Set,vt=1024,er=e=>{if(Te.has(e))return!0;let t=e.length;if(t===0)return!1;for(let n=0;n<t;n++){let r=e.charCodeAt(n);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95))return Zt.test(e)?!1:(W(Te,vt,e),!0)}return W(Te,vt,e),!0},tr=/[;"'\\/\[\](){}]/,rr=e=>{if(!tr.test(e))return!1;let t=0,n=[];for(let r=0,o=e.length;r<o;r++){let a=e.charCodeAt(r);if(a===92){if(r===o-1)return!0;r++}else if(t!==0){if(a===10||a===12||a===13)return!0;a===t&&(t=0)}else if(a===47&&e.charCodeAt(r+1)===42){let i=e.indexOf("*/",r+2);if(i===-1)return!0;r=i+1}else if(a===34||a===39)t=a;else if(a===40)n.push(41);else if(a===91)n.push(93);else{if(a===123||a===125)return!0;if(a===41||a===93){if(n[n.length-1]!==a)return!0;n.pop()}else if(a===59&&n.length===0)return!0}}return t!==0||n.length!==0},De=(e,t)=>{for(let[n,r]of Object.entries(e)){let o=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);if(!er(o))continue;if(r==null){t(o,null);continue}let a;if(typeof r=="number")a=o.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`;else if(typeof r=="string"){if(rr(r))continue;a=r}else continue;t(o,a)}};var J=void 0,ae=()=>J,nr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,sr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],or=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Me=(e,t)=>{for(let n=0,r=e.length;n<r;n++){let o=e[n];if(typeof o=="string")C(o,t);else{if(typeof o=="boolean"||o===null||o===void 0)continue;o instanceof x?o.toStringToBuffer(t):typeof o=="number"||o.isEscaped?t[0]+=o:o instanceof Promise?t.unshift("",o):Me(o,t)}}},x=class{tag;props;key;children;isEscaped=!0;localContexts;constructor(e,t,n){if(typeof e!="function"&&!bt(e))throw new Error(`Invalid JSX tag name: ${e}`);this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){let e=[""];this.localContexts?.forEach(([t,n])=>{t.values.push(n)});try{this.toStringToBuffer(e)}finally{this.localContexts?.forEach(([t])=>{t.values.pop()})}return e.length===1?"callbacks"in e?ye(w(e[0],e.callbacks)).toString():e[0]:Z(e,e.callbacks)}toStringToBuffer(e){let t=this.tag,n=this.props,{children:r}=this;e[0]+=`<${t}`;let o=t==="svg"||J&&L(J)==="svg"?a=>nr(Oe(a)):a=>Oe(a);for(let[a,i]of Object.entries(n))if(a=o(a),!!Le(a)&&a!=="children"){if(a==="style"&&typeof i=="object"){let l="";De(i,(c,d)=>{d!=null&&(l+=`${l?";":""}${c}:${d}`)}),e[0]+=' style="',C(l,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${a}="`,C(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${a}="${i}"`;else if(typeof i=="boolean"&&or.includes(a))i&&(e[0]+=` ${a}=""`);else if(a==="dangerouslySetInnerHTML"){if(r.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r=[w(i.__html)]}else if(i instanceof Promise)e[0]+=` ${a}="`,e.unshift('"',i);else if(typeof i=="function"){if(!a.startsWith("on")&&a!=="ref")throw new Error(`Invalid prop '${a}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${a}="`,C(i.toString(),e),e[0]+='"'}if(sr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Me(r,e),e[0]+=`</${t}>`}},Ne=class extends x{toStringToBuffer(e){let{children:t}=this,n={...this.props};t.length&&(n.children=t.length===1?t[0]:t);let r=this.tag.call(null,n);if(!(typeof r=="boolean"||r==null))if(r instanceof Promise)if($.length===0)e.unshift("",r);else{let o=$.map(a=>[a,a.values.at(-1)]);e.unshift("",r.then(a=>(a instanceof x&&(a.localContexts=o),a)))}else r instanceof x?r.toStringToBuffer(e):typeof r=="number"||r.isEscaped?(e[0]+=r,r.callbacks&&(e.callbacks||=[],e.callbacks.push(...r.callbacks))):C(r,e)}},ct=class extends x{toStringToBuffer(e){Me(this.children,e)}};var wt=!1,ie=(e,t,n)=>{if(!wt){for(let r in Re)z[r][oe]=Re[r];wt=!0}return typeof e=="function"?new Ne(e,t,n):z[e]?new Ne(z[e],t,n):e==="svg"||e==="head"?(J||=lt(""),new x(e,t,[new Ne(J,{value:e},n)])):new x(e,t,n)};function s(e,t,n){let r;if(!t||!("children"in t))r=ie(e,t,[]);else{let o=t.children;r=Array.isArray(o)?ie(e,t,o):ie(e,t,[o])}return r.key=n,r}var R=e=>s("html",{lang:"en",children:[s("head",{children:[s("meta",{charset:"UTF-8"}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s("title",{children:e.title||"ToolStaq | Hyper-Fast Developer & Text Utilities"}),s("meta",{name:"description",content:e.description||"Stunning, privacy-first, zero-bloat developer and text tools running on the edge."}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:title",content:e.title||"ToolStaq"}),s("meta",{property:"og:description",content:e.description||"Zero-bloat edge utilities."}),s("link",{rel:"stylesheet",href:"/style.css"}),s("script",{dangerouslySetInnerHTML:{__html:`
        (function() {
          try {
            var savedTheme = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        })();
      `}})]}),s("body",{children:[s("header",{children:[s("a",{href:"/",class:"logo-link",id:"home-logo",children:[s("div",{class:"logo-icon",children:"T"}),s("span",{children:"ToolStaq"})]}),s("nav",{class:"nav-links",children:[s("a",{href:"/tools/json",class:"nav-link",children:"JSON Formatter"}),s("a",{href:"/tools/word-counter",class:"nav-link",children:"Word Counter"}),s("a",{href:"/tools/password-generator",class:"nav-link",children:"Passwords"}),s("a",{href:"/tools/base64",class:"nav-link",children:"Base64"})]}),s("button",{id:"theme-toggle",class:"theme-btn","aria-label":"Toggle Dark Mode",title:"Toggle Dark Mode",children:[s("svg",{class:"icon-moon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:s("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),s("svg",{class:"icon-sun",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[s("circle",{cx:"12",cy:"12",r:"5"}),s("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),s("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),s("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),s("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),s("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),s("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),s("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),s("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})]}),s("main",{children:e.children}),s("footer",{children:s("p",{class:"footer-text",children:["\xA9 ",new Date().getFullYear()," ToolStaq.online. Powered by Cloudflare Workers and Hono JSX."]})}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})]});var xt=()=>s(R,{title:"JSON Formatter & Validator | ToolStaq",description:"Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.",children:[s("div",{class:"container",children:[s("a",{href:"/",class:"back-btn",id:"json-back-btn",children:"\u2190 Back to Tools Hub"}),s("div",{class:"tool-view-layout",children:[s("div",{class:"workspace-panel",children:[s("div",{class:"workspace-header",children:[s("h1",{class:"workspace-title",children:"JSON Formatter & Validator"}),s("p",{class:"workspace-desc",children:"Paste your raw JSON to validate, beautify, minify, or parse it instantly in your browser. Your data never leaves your device."})]}),s("div",{class:"btn-row",style:"margin-bottom: var(--space-24); align-items: center;",children:[s("label",{for:"indent",class:"form-label",style:"margin-bottom: 0;",children:"Tab Size:"}),s("select",{id:"indent",class:"search-input",style:"width: auto; padding: var(--space-8) var(--space-16);",children:[s("option",{value:"2",selected:!0,children:"2 Spaces"}),s("option",{value:"4",children:"4 Spaces"}),s("option",{value:"tab",children:"Tab"}),s("option",{value:"minify",children:"Minified"})]}),s("button",{type:"button",class:"btn btn-primary",id:"btn-format",children:"Format & Validate"}),s("button",{type:"button",class:"btn",id:"btn-clear",children:"Clear"}),s("button",{type:"button",class:"btn",id:"btn-copy-client",style:"margin-left: auto; display: none;",children:"Copy Output"})]}),s("div",{id:"error-box",style:"display: none;",role:"alert","aria-live":"polite"}),s("div",{class:"tool-view-layout",style:"grid-template-columns: 1fr 1fr; margin-top: 0;",children:[s("div",{class:"form-group",style:"margin-bottom: 0;",children:[s("label",{class:"form-label",for:"json-input",children:"Raw Input JSON"}),s("textarea",{class:"text-area",id:"json-input",placeholder:'{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }',style:"height: 450px;","aria-label":"JSON input"})]}),s("div",{class:"form-group",style:"margin-bottom: 0;",children:[s("label",{class:"form-label",children:"Formatted Output"}),s("div",{id:"output-placeholder",style:"height: 450px;","aria-hidden":"true",children:"Formatted output will appear here"}),s("pre",{class:"result-box",id:"output-pre",style:"height: 450px; display: none;",role:"region","aria-label":"Formatted JSON output"})]})]})]}),s("div",{class:"info-sidebar",children:[s("div",{class:"sidebar-card",children:[s("h3",{children:"\u{1F512} Privacy First"}),s("p",{children:"All formatting and validation run entirely in your browser. Your JSON data never leaves your device."})]}),s("div",{class:"sidebar-card",children:[s("h3",{children:"\u26A1 Instant Speed"}),s("p",{children:"Client-side V8-powered parsing delivers sub-millisecond results with zero network round-trips."})]}),s("div",{class:"sidebar-card",children:[s("h3",{children:"\u{1F6E0}\uFE0F Modes"}),s("p",{children:"Beautify with 2-space, 4-space, or tab indentation \u2014 or minify to a compact single line."})]})]})]})]}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]});var A=new Ce,ir=[{id:"json",name:"JSON Formatter",desc:"Format, compress, and check parse validation arrays.",cat:"developer",path:"/tools/json",status:"live"},{id:"base64",name:"Base64 Encoder",desc:"Convert files and text payload fragments securely.",cat:"developer",path:"/tools/base64",status:"live"},{id:"word-counter",name:"Word Counter",desc:"Analyze characters, sentences, reading duration indexes.",cat:"utilities",path:"/tools/word-counter",status:"live"},{id:"password-gen",name:"Password Generator",desc:"Compile highly randomized cryptographic security sequences.",cat:"security",path:"/tools/password-generator",status:"live"},{id:"uuid-generator",name:"UUID / ULID Generator",desc:"Generate cryptographically secure random UUID or sortable ULID keys.",cat:"security",path:"/tools/uuid-generator",status:"live"},{id:"jwt-decoder",name:"JWT Debugger",desc:"Decode cryptographically compiled web token fragments.",cat:"security",path:"#",status:"coming-soon"},{id:"regex-tester",name:"Regex Validator",desc:"Write and parse matching test expressions natively.",cat:"utilities",path:"#",status:"coming-soon"}],lr=[{id:"developer",name:"Developer Tools",desc:"JSON configurations, parsers, and stream format engines."},{id:"utilities",name:"Text Utilities",desc:"Analysis frameworks, counting arrays, mutation matrices."},{id:"security",name:"Security & Encryption",desc:"Cryptographic payload encoders, passwords, token decoders."}];A.get("/",e=>e.html(s(R,{title:"ToolStaq | Instant Developer Tools Hub",children:[s("section",{class:"hero-container",children:[s("h1",{class:"hero-title",children:["All your developer tools for",s("div",{class:"ticker-wrapper",children:s("ul",{class:"ticker-list",children:[s("li",{class:"ticker-item",children:"JSON Parsing"}),s("li",{class:"ticker-item",children:"Data Encryption"}),s("li",{class:"ticker-item",children:"Text Analytics"}),s("li",{class:"ticker-item",children:"JSON Parsing"})," "]})})]}),s("p",{style:"font-size: 16px; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;",children:"Privacy-first, edge-rendered developer utilities. Zero hydration payload tracking, zero background processing lags."})]}),s("section",{children:[s("h2",{style:"font-size: 28px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-4);",children:"Select Category Array"}),s("div",{class:"categories-container",children:lr.map(t=>s("div",{class:"category-card","data-category-target":t.id,role:"button",tabindex:"0",children:[s("h3",{children:t.name}),s("p",{children:t.desc})]}))})]}),s("section",{id:"tools-display-panel",style:"display: none; padding-top: var(--space-4);",children:[s("div",{class:"tools-workspace-header",children:[s("h2",{id:"active-category-title",style:"font-size: 36px; font-weight: 800; margin: 0;",children:"Utilities Portfolio"}),s("span",{style:"font-size: 14px; font-weight: 700; color: var(--color-action-default); background: var(--color-bg-secondary); padding: 4px 12px; border: 2px solid var(--color-border-default);",children:"ACTIVE SELECTION"})]}),s("div",{class:"tools-grid",children:ir.map(t=>s("div",{class:`tool-card tool-item-card data-cat-${t.cat}`,"data-status":t.status,children:[s("div",{class:"tool-card-header",children:s("span",{class:`tool-badge ${t.status==="coming-soon"?"coming-soon":""}`,children:t.status==="live"?"EDGE LIVE":"PIPELINE"})}),s("h3",{class:"tool-card-title",children:t.name}),s("p",{class:"tool-card-desc",children:t.desc}),t.status==="live"?s("a",{href:t.path,class:"tool-card-btn",children:"Launch Workspace"}):s("button",{onclick:"alert('Tool integration pipeline active. Scheduled for upcoming edge deployment loop.')",class:"tool-card-btn",style:"opacity: 0.5; cursor: not-allowed;",children:"In Development"})]}))})]}),s("script",{dangerouslySetInnerHTML:{__html:`
        document.addEventListener('DOMContentLoaded', () => {
          const cards = document.querySelectorAll('.category-card');
          const workspace = document.getElementById('tools-display-panel');
          const workspaceTitle = document.getElementById('active-category-title');
          const allToolItems = document.querySelectorAll('.tool-item-card');

          cards.forEach(card => {
            card.addEventListener('click', () => {
              const selectedCat = card.getAttribute('data-category-target');
              
              // Handle active states on current category grid elements
              cards.forEach(c => c.classList.remove('active'));
              card.classList.add('active');

              // Update panel layout headings dynamically
              const elementHeading = card.querySelector('h3').textContent;
              workspaceTitle.textContent = elementHeading;

              // Display the container seamlessly
              workspace.style.display = 'block';

              // Map filtering over nested utility references
              allToolItems.forEach(tool => {
                if(tool.classList.contains('data-cat-' + selectedCat)) {
                  tool.classList.add('visible');
                } else {
                  tool.classList.remove('visible');
                }
              });

              // Fluid window alignment adjustments for smaller viewport profiles
              workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          });
        });
      `}})]})));A.get("/tools/json",e=>e.html(s(xt,{})));A.get("/tools/json-formatter",e=>e.redirect("/tools/json"));A.get("/tools/word-counter",e=>e.html(s(R,{title:"Word Counter & Character Counter | ToolStaq",description:"Analyze your text length, count characters, words, sentences, paragraphs, reading speed, and keyword occurrences instantly.",children:[s("div",{class:"container",children:[s("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),s("div",{class:"tool-view-layout",children:[s("div",{class:"workspace-panel",children:[s("div",{class:"workspace-header",children:[s("h1",{class:"workspace-title",children:"Word & Character Counter"}),s("p",{class:"workspace-desc",children:"Analyze your writing speed and complexity metrics in real-time. Simply type or paste your content."})]}),s("div",{class:"stats-grid",children:[s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-words",children:"0"}),s("div",{class:"stat-label",children:"Words"})]}),s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-chars",children:"0"}),s("div",{class:"stat-label",children:"Characters"})]}),s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-sentences",children:"0"}),s("div",{class:"stat-label",children:"Sentences"})]}),s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-paragraphs",children:"0"}),s("div",{class:"stat-label",children:"Paragraphs"})]})]}),s("div",{class:"form-group",children:s("textarea",{class:"text-area",id:"text-input",placeholder:"Start typing or paste your essay, email, or article here...",style:"height: 240px;"})}),s("div",{class:"stats-grid",style:"grid-template-columns: repeat(2, 1fr); margin-top: 1rem;",children:[s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-read-time",children:"0m 0s"}),s("div",{class:"stat-label",children:"Estimated Reading Time"})]}),s("div",{class:"stat-box",children:[s("div",{class:"stat-value",id:"stat-speak-time",children:"0m 0s"}),s("div",{class:"stat-label",children:"Estimated Speaking Time"})]})]}),s("div",{class:"result-panel",id:"density-panel",style:"display:none;",children:[s("div",{class:"result-title",style:"color: var(--primary);",children:"Top Keyword Density"}),s("div",{id:"density-list",style:"font-size:0.9rem; display:flex; flex-wrap:wrap; gap:0.5rem;"})]})]}),s("div",{class:"info-sidebar",children:[s("div",{class:"sidebar-card",children:[s("h3",{children:"\u2139\uFE0F Calculations"}),s("p",{children:"Reading time is computed at 225 words per minute. Speaking time is based on 130 words per minute."})]}),s("div",{class:"sidebar-card",children:[s("h3",{children:"\u{1F310} Clean Content"}),s("p",{children:"Extra whitespaces, double tabs, and formatting marks are auto-normalized in the telemetry counters."})]})]})]})]}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));A.get("/tools/base64",e=>e.html(s(R,{title:"Base64 Encoder & Decoder | ToolStaq",description:"Instantly convert plain text to Base64 code or decode Base64 strings back to text safely and quickly.",children:[s("div",{class:"container",children:[s("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),s("div",{class:"tool-view-layout",children:[s("div",{class:"workspace-panel",children:[s("div",{class:"workspace-header",children:[s("h1",{class:"workspace-title",children:"Base64 Encoder / Decoder"}),s("p",{class:"workspace-desc",children:"Securely encode regular string data into Base64 format, or convert standard Base64 back into human-readable text."})]}),s("div",{class:"form-group",children:[s("label",{class:"form-label",for:"base64-input",children:"Input Data:"}),s("textarea",{class:"text-area",id:"base64-input",placeholder:"Paste or type content here...",style:"height: 180px;"})]}),s("div",{class:"btn-row",children:[s("button",{class:"btn btn-primary",id:"btn-encode",children:"Encode Base64"}),s("button",{class:"btn",id:"btn-decode",children:"Decode Base64"}),s("button",{class:"btn",id:"btn-base64-clear",style:"margin-left: auto;",children:"Clear"})]}),s("div",{class:"result-panel",id:"base64-result-panel",style:"display: none;",children:[s("div",{class:"result-title",children:[s("span",{children:"Result"}),s("button",{class:"btn",id:"btn-base64-copy",style:"padding: 0.2rem 0.6rem; font-size: 0.75rem;",children:"Copy Result"})]}),s("textarea",{class:"text-area",id:"base64-output",readonly:!0,style:"height: 180px; background: rgba(0,0,0,0.3); font-family: monospace;"})]})]}),s("div",{class:"info-sidebar",children:s("div",{class:"sidebar-card",children:[s("h3",{children:"\u{1F524} Base64 Basics"}),s("p",{children:"Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation."})]})})]})]}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));A.get("/tools/uuid-generator",e=>e.html(s(R,{title:"UUID & ULID Generator | ToolStaq",description:"Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.",children:[s("div",{class:"container",children:[s("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),s("div",{class:"tool-view-layout",children:[s("div",{class:"workspace-panel",children:[s("div",{class:"workspace-header",children:[s("h1",{class:"workspace-title",children:"UUID / ULID Generator"}),s("p",{class:"workspace-desc",children:"Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys."})]}),s("div",{class:"form-group",children:[s("label",{class:"form-label",for:"generator-type",children:"Identifier Type:"}),s("select",{id:"generator-type",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px;",children:[s("option",{value:"uuid",children:"UUID v4 (Standard Unique Key)"}),s("option",{value:"ulid",children:"ULID (Lexicographically Sortable)"})]})]}),s("div",{class:"form-group",children:[s("label",{class:"form-label",for:"generator-count",children:"Quantity to generate (1 - 100):"}),s("input",{type:"number",id:"generator-count",min:"1",max:"100",value:"5",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px; width: 120px;"})]}),s("div",{class:"btn-row",children:[s("button",{class:"btn btn-primary",id:"btn-generate",children:"Generate IDs"}),s("button",{class:"btn",id:"btn-gen-copy",style:"margin-left: auto;",children:"Copy All"})]}),s("div",{class:"result-panel",style:"margin-top: 1.5rem;",children:s("textarea",{class:"text-area",id:"generator-output",readonly:!0,style:"height: 200px; background: rgba(0,0,0,0.3); font-family: monospace;"})})]}),s("div",{class:"info-sidebar",children:s("div",{class:"sidebar-card",children:[s("h3",{children:"\u2139\uFE0F ULID vs UUID"}),s("p",{children:"ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys."})]})})]})]}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));A.get("/tools/password-generator",e=>e.html(s(R,{title:"Random Password Generator | ToolStaq",description:"Create cryptographically secure random passwords with adjustable length and character types.",children:[s("div",{class:"container",children:[s("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),s("div",{class:"tool-view-layout",children:[s("div",{class:"workspace-panel",children:[s("div",{class:"workspace-header",children:[s("h1",{class:"workspace-title",children:"Random Password Generator"}),s("p",{class:"workspace-desc",children:"Generate secure passwords using client-side Web Cryptography APIs. Protect your online accounts with robust entropy."})]}),s("div",{class:"form-group",style:"background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--card-border);",children:[s("input",{type:"text",id:"pwd-display",readonly:!0,style:"font-family: monospace; font-size: 1.25rem; background: transparent; border: none; outline: none; color: #ffffff; width: 100%; letter-spacing: 0.05em;"}),s("button",{class:"btn btn-primary",id:"btn-pwd-copy",style:"padding: 0.5rem 1rem; font-size: 0.85rem; flex-shrink: 0;",children:"Copy"})]}),s("div",{class:"form-group",children:[s("div",{style:"display: flex; justify-content: space-between; align-items: center;",children:s("span",{class:"form-label",style:"margin-bottom: 0;",children:["Password Length: ",s("strong",{id:"length-val",style:"color: var(--primary);",children:"16"})]})}),s("input",{type:"range",id:"pwd-length",class:"range-slider",min:"6",max:"64",value:"16"})]}),s("div",{class:"checkbox-group",children:[s("label",{class:"checkbox-label",children:[s("input",{type:"checkbox",id:"pwd-upper",class:"checkbox-input",checked:!0}),"Include Uppercase (A-Z)"]}),s("label",{class:"checkbox-label",children:[s("input",{type:"checkbox",id:"pwd-lower",class:"checkbox-input",checked:!0}),"Include Lowercase (a-z)"]}),s("label",{class:"checkbox-label",children:[s("input",{type:"checkbox",id:"pwd-nums",class:"checkbox-input",checked:!0}),"Include Numbers (0-9)"]}),s("label",{class:"checkbox-label",children:[s("input",{type:"checkbox",id:"pwd-syms",class:"checkbox-input",checked:!0}),"Include Symbols (!@#$%^&*)"]})]}),s("div",{class:"form-group",style:"margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;",children:[s("span",{class:"form-label",style:"margin-bottom: 0;",children:"Security Strength:"}),s("span",{id:"pwd-strength",class:"tool-badge",style:"font-weight: 700; padding: 0.3rem 0.8rem;",children:"STRONG"})]}),s("div",{class:"btn-row",style:"margin-top: 1.5rem;",children:s("button",{class:"btn",id:"btn-pwd-generate",style:"width: 100%; justify-content: center; background: rgba(255,255,255,0.04); border-color: var(--primary);",children:"\u{1F504} Re-generate Password"})})]}),s("div",{class:"info-sidebar",children:s("div",{class:"sidebar-card",children:[s("h3",{children:"\u{1F512} Local Safety"}),s("p",{children:"We use the browser's native `window.crypto.getRandomValues` function. This ensures the output is random and stays completely offline."})]})})]})]}),s("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));var As={async fetch(e,t,n){try{let r=await t.ASSETS.fetch(e);if(r.status!==404)return r}catch{}return A.fetch(e,t,n)},scheduled:async(e,t,n)=>{console.log(`Running scheduled background buffer cleanup task: ${e.cron}`)}};export{A as app,As as default};
