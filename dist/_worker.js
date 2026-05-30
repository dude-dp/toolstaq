var St=Object.defineProperty;var It=(e,t)=>{for(var r in t)St(e,r,{get:t[r],enumerable:!0})};var de=(e,t,r)=>(o,s)=>{let a=-1;return i(0);async function i(l){if(l<=a)throw new Error("next() called multiple times");a=l;let c,d=!1,u;if(e[l]?(u=e[l][0][0],o.req.routeIndex=l):u=l===e.length&&s||void 0,u)try{c=await u(o,()=>i(l+1))}catch(h){if(h instanceof Error&&t)o.error=h,c=await t(h,o),d=!0;else throw h}else o.finalized===!1&&r&&(c=await r(o));return c&&(o.finalized===!1||d)&&(o.res=c),o}};var je=Symbol();var Fe=async(e,t=Object.create(null))=>{let{all:r=!1,dot:o=!1}=t,a=(e instanceof q?e.raw.headers:e.headers).get("Content-Type");return a?.startsWith("multipart/form-data")||a?.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:r,dot:o}):{}};async function Rt(e,t){let r=await e.formData();return r?Pt(r,t):{}}function Pt(e,t){let r=Object.create(null);return e.forEach((o,s)=>{t.all||s.endsWith("[]")?kt(r,s,o):r[s]=o}),t.dot&&Object.entries(r).forEach(([o,s])=>{o.includes(".")&&(At(r,o,s),delete r[o])}),r}var kt=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},At=(e,t,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let o=e,s=t.split(".");s.forEach((a,i)=>{i===s.length-1?o[a]=r:((!o[a]||typeof o[a]!="object"||Array.isArray(o[a])||o[a]instanceof File)&&(o[a]=Object.create(null)),o=o[a])})};var he=e=>{let t=e.split("/");return t[0]===""&&t.shift(),t},Ue=e=>{let{groups:t,path:r}=Mt(e),o=he(r);return Tt(o,t)},Mt=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(r,o)=>{let s=`@${o}`;return t.push([s,r]),s}),{groups:t,path:e}},Tt=(e,t)=>{for(let r=t.length-1;r>=0;r--){let[o]=t[r];for(let s=e.length-1;s>=0;s--)if(e[s].includes(o)){e[s]=e[s].replace(o,t[r][1]);break}}return e},X={},$e=(e,t)=>{if(e==="*")return"*";let r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){let o=`${e}#${t}`;return X[o]||(r[2]?X[o]=t&&t[0]!==":"&&t[0]!=="*"?[o,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:X[o]=[e,r[1],!0]),X[o]}return null},Q=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},Dt=e=>Q(e,decodeURI),pe=e=>{let t=e.url,r=t.indexOf("/",t.indexOf(":")+4),o=r;for(;o<t.length;o++){let s=t.charCodeAt(o);if(s===37){let a=t.indexOf("?",o),i=t.indexOf("#",o),l=a===-1?i===-1?void 0:i:i===-1?a:Math.min(a,i),c=t.slice(r,l);return Dt(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(s===63||s===35)break}return t.slice(r,o)};var Ke=e=>{let t=pe(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},I=(e,t,...r)=>(r.length&&(t=I(t,...r)),`${e?.[0]==="/"?"":"/"}${e}${t==="/"?"":`${e?.at(-1)==="/"?"":"/"}${t?.[0]==="/"?t.slice(1):t}`}`),Z=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;let t=e.split("/"),r=[],o="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))o+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){r.length===0&&o===""?r.push("/"):r.push(o);let a=s.replace("?","");o+="/"+a,r.push(o)}else o+="/"+s}),r.filter((s,a,i)=>i.indexOf(s)===a)},ue=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Q(e,fe):e):e,Ge=(e,t,r)=>{let o;if(!r&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){let l=e.charCodeAt(i+t.length+1);if(l===61){let c=i+t.length+2,d=e.indexOf("&",c);return ue(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${t}`,i+1)}if(o=/[%+]/.test(e),!o)return}let s={};o??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;a!==-1;){let i=e.indexOf("&",a+1),l=e.indexOf("=",a);l>i&&i!==-1&&(l=-1);let c=e.slice(a+1,l===-1?i===-1?void 0:i:l);if(o&&(c=ue(c)),a=i,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,i===-1?void 0:i),o&&(d=ue(d))),r?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??=d}return t?s[t]:s},We=Ge,Ve=(e,t)=>Ge(e,t,!0),fe=decodeURIComponent;var ze=e=>Q(e,fe),q=class{raw;#t;#e;routeIndex=0;path;bodyCache={};constructor(e,t="/",r=[[]]){this.raw=e,this.path=t,this.#e=r,this.#t={}}param(e){return e?this.#r(e):this.#s()}#r(e){let t=this.#e[0][this.routeIndex][1][e],r=this.#n(t);return r&&/\%/.test(r)?ze(r):r}#s(){let e={},t=Object.keys(this.#e[0][this.routeIndex][1]);for(let r of t){let o=this.#n(this.#e[0][this.routeIndex][1][r]);o!==void 0&&(e[r]=/\%/.test(o)?ze(o):o)}return e}#n(e){return this.#e[1]?this.#e[1][e]:e}query(e){return We(this.url,e)}queries(e){return Ve(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t={};return this.raw.headers.forEach((r,o)=>{t[o]=r}),t}async parseBody(e){return Fe(this,e)}#o=e=>{let{bodyCache:t,raw:r}=this,o=t[e];if(o)return o;let s=Object.keys(t)[0];return s?t[s].then(a=>(s==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=r[e]()};json(){return this.#o("text").then(e=>JSON.parse(e))}text(){return this.#o("text")}arrayBuffer(){return this.#o("arrayBuffer")}bytes(){return this.#o("arrayBuffer").then(e=>new Uint8Array(e))}blob(){return this.#o("blob")}formData(){return this.#o("formData")}addValidatedData(e,t){this.#t[e]=t}valid(e){return this.#t[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[je](){return this.#e}get matchedRoutes(){return this.#e[0].map(([[,e]])=>e)}get routePath(){return this.#e[0].map(([[,e]])=>e)[this.routeIndex].path}};var me={Stringify:1,BeforeStream:2,Stream:3},w=(e,t)=>{let r=new String(e);return r.isEscaped=!0,r.callbacks=t,r},Lt=/[&<>'"]/,Y=async(e,t)=>{let r="";t||=[];let o=await Promise.all(e);for(let s=o.length-1;r+=o[s],s--,!(s<0);s--){let a=o[s];typeof a=="object"&&t.push(...a.callbacks||[]);let i=a.isEscaped;if(a=await(typeof a=="object"?a.toString():a),typeof a=="object"&&t.push(...a.callbacks||[]),a.isEscaped??i)r+=a;else{let l=[r];C(a,l),r=l[0]}}return w(r,t)},C=(e,t)=>{let r=e.search(Lt);if(r===-1){t[0]+=e;return}let o,s,a=0;for(s=r;s<e.length;s++){switch(e.charCodeAt(s)){case 34:o="&quot;";break;case 39:o="&#39;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}t[0]+=e.substring(a,s)+o,a=s+1}t[0]+=e.substring(a,s)},ye=e=>{let t=e.callbacks;if(!t?.length)return e;let r=[e],o={};return t.forEach(s=>s({phase:me.Stringify,buffer:r,context:o})),r[0]},ge=async(e,t,r,o,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);s?s[0]+=e:s=[e];let i=Promise.all(a.map(l=>l({phase:t,buffer:s,context:o}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ge(c,t,!1,o,s))).then(()=>s[0]));return r?w(await i,a):i};var Ot="text/plain; charset=UTF-8",be=(e,t)=>({"Content-Type":e,...t}),H=(e,t)=>new Response(e,t),ve=class{#t;#e;env={};#r;finalized=!1;error;#s;#n;#o;#d;#l;#c;#i;#u;#h;constructor(e,t){this.#t=e,t&&(this.#n=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#h=t.path,this.#u=t.matchResult)}get req(){return this.#e??=new q(this.#t,this.#h,this.#u),this.#e}get event(){if(this.#n&&"respondWith"in this.#n)return this.#n;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#n)return this.#n;throw Error("This context has no ExecutionContext")}get res(){return this.#o||=H(null,{headers:this.#i??=new Headers})}set res(e){if(this.#o&&e){e=H(e.body,e);for(let[t,r]of this.#o.headers.entries())if(t!=="content-type")if(t==="set-cookie"){let o=this.#o.headers.getSetCookie();e.headers.delete("set-cookie");for(let s of o)e.headers.append("set-cookie",s)}else e.headers.set(t,r)}this.#o=e,this.finalized=!0}render=(...e)=>(this.#l??=t=>this.html(t),this.#l(...e));setLayout=e=>this.#d=e;getLayout=()=>this.#d;setRenderer=e=>{this.#l=e};header=(e,t,r)=>{this.finalized&&(this.#o=H(this.#o.body,this.#o));let o=this.#o?this.#o.headers:this.#i??=new Headers;t===void 0?o.delete(e):r?.append?o.append(e,t):o.set(e,t)};status=e=>{this.#s=e};set=(e,t)=>{this.#r??=new Map,this.#r.set(e,t)};get=e=>this.#r?this.#r.get(e):void 0;get var(){return this.#r?Object.fromEntries(this.#r):{}}#a(e,t,r){let o=this.#o?new Headers(this.#o.headers):this.#i??new Headers;if(typeof t=="object"&&"headers"in t){let a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(let[i,l]of a)i.toLowerCase()==="set-cookie"?o.append(i,l):o.set(i,l)}if(r)for(let[a,i]of Object.entries(r))if(typeof i=="string")o.set(a,i);else{o.delete(a);for(let l of i)o.append(a,l)}let s=typeof t=="number"?t:t?.status??this.#s;return H(e,{status:s,headers:o})}newResponse=(...e)=>this.#a(...e);body=(e,t,r)=>this.#a(e,t,r);text=(e,t,r)=>!this.#i&&!this.#s&&!t&&!r&&!this.finalized?new Response(e):this.#a(e,t,be(Ot,r));json=(e,t,r)=>this.#a(JSON.stringify(e),t,be("application/json",r));html=(e,t,r)=>{let o=s=>this.#a(s,t,be("text/html; charset=UTF-8",r));return typeof e=="object"?ge(e,me.Stringify,!1,{}).then(o):o(e)};redirect=(e,t)=>{let r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>H(),this.#c(this))};var m="ALL",Je="all",qe=["get","post","put","delete","options","patch"],ee="Can not add a route since the matcher is already built.",te=class extends Error{};var Xe="__COMPOSED_HANDLER";var Ht=e=>e.text("404 Not Found",404),Qe=(e,t)=>{if("getResponse"in e){let r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},Ze=class Ye{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#t="/";routes=[];constructor(t={}){[...qe,Je].forEach(a=>{this[a]=(i,...l)=>(typeof i=="string"?this.#t=i:this.#s(a,this.#t,i),l.forEach(c=>{this.#s(a,this.#t,c)}),this)}),this.on=(a,i,...l)=>{for(let c of[i].flat()){this.#t=c;for(let d of[a].flat())l.map(u=>{this.#s(d.toUpperCase(),this.#t,u)})}return this},this.use=(a,...i)=>(typeof a=="string"?this.#t=a:(this.#t="*",i.unshift(a)),i.forEach(l=>{this.#s(m,this.#t,l)}),this);let{strict:o,...s}=t;Object.assign(this,s),this.getPath=o??!0?t.getPath??pe:Ke}#e(){let t=new Ye({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#r=this.#r,t.routes=this.routes,t}#r=Ht;errorHandler=Qe;route(t,r){let o=this.basePath(t);return r.routes.map(s=>{let a;r.errorHandler===Qe?a=s.handler:(a=async(i,l)=>(await de([],r.errorHandler)(i,()=>s.handler(i,l))).res,a[Xe]=s.handler),o.#s(s.method,s.path,a,s.basePath)}),this}basePath(t){let r=this.#e();return r._basePath=I(this._basePath,t),r}onError=t=>(this.errorHandler=t,this);notFound=t=>(this.#r=t,this);mount(t,r,o){let s,a;o&&(typeof o=="function"?a=o:(a=o.optionHandler,o.replaceRequest===!1?s=c=>c:s=o.replaceRequest));let i=a?c=>{let d=a(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||=(()=>{let c=I(this._basePath,t),d=c==="/"?0:c.length;return u=>{let h=new URL(u.url);return h.pathname=this.getPath(u).slice(d)||"/",new Request(h,u)}})();let l=async(c,d)=>{let u=await r(s(c.req.raw),...i(c));if(u)return u;await d()};return this.#s(m,I(t,"*"),l),this}#s(t,r,o,s){t=t.toUpperCase(),r=I(this._basePath,r);let a={basePath:s!==void 0?I(this._basePath,s):this._basePath,path:r,method:t,handler:o};this.router.add(t,r,[o,a]),this.routes.push(a)}#n(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t}#o(t,r,o,s){if(s==="HEAD")return(async()=>new Response(null,await this.#o(t,r,o,"GET")))();let a=this.getPath(t,{env:o}),i=this.router.match(s,a),l=new ve(t,{path:a,matchResult:i,env:o,executionCtx:r,notFoundHandler:this.#r});if(i[0].length===1){let d;try{d=i[0][0][0][0](l,async()=>{l.res=await this.#r(l)})}catch(u){return this.#n(u,l)}return d instanceof Promise?d.then(u=>u||(l.finalized?l.res:this.#r(l))).catch(u=>this.#n(u,l)):d??this.#r(l)}let c=de(i[0],this.errorHandler,this.#r);return(async()=>{try{let d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return this.#n(d,l)}})()}fetch=(t,...r)=>this.#o(t,r[1],r[0],t.method);request=(t,r,o,s)=>t instanceof Request?this.fetch(r?new Request(t,r):t,o,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${I("/",t)}`,r),o,s));fire=()=>{addEventListener("fetch",t=>{t.respondWith(this.#o(t.request,t,void 0,t.request.method))})}};var re=[];function we(e,t){let r=this.buildAllMatchers(),o=((s,a)=>{let i=r[s]||r[m],l=i[2][a];if(l)return l;let c=a.match(i[0]);if(!c)return[[],re];let d=c.indexOf("",1);return[i[1][d],c]});return this.match=o,o(e,t)}var oe="[^/]+",N=".*",B="(?:|/.*)",k=Symbol(),Nt=new Set(".\\+*[^]$()");function Bt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===N||e===B?1:t===N||t===B?-1:e===oe?1:t===oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var et=class xe{#t;#e;#r=Object.create(null);insert(t,r,o,s,a){if(t.length===0){if(this.#t!==void 0)throw k;if(a)return;this.#t=r;return}let[i,...l]=t,c=i==="*"?l.length===0?["","",N]:["","",oe]:i==="/*"?["","",B]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),d;if(c){let u=c[1],h=c[2]||oe;if(u&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw k;if(d=this.#r[h],!d){if(Object.keys(this.#r).some(p=>p!==N&&p!==B))throw k;if(a)return;d=this.#r[h]=new xe,u!==""&&(d.#e=s.varIndex++)}!a&&u!==""&&o.push([u,d.#e])}else if(d=this.#r[i],!d){if(Object.keys(this.#r).some(u=>u.length>1&&u!==N&&u!==B))throw k;if(a)return;d=this.#r[i]=new xe}d.insert(l,r,o,s,a)}buildRegExpStr(){let r=Object.keys(this.#r).sort(Bt).map(o=>{let s=this.#r[o];return(typeof s.#e=="number"?`(${o})@${s.#e}`:Nt.has(o)?`\\${o}`:o)+s.buildRegExpStr()});return typeof this.#t=="number"&&r.unshift(`#${this.#t}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}};var tt=class{#t={varIndex:0};#e=new et;insert(e,t,r){let o=[],s=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{let d=`@\\${i}`;return s[i]=[d,c],i++,l=!0,d}),!l)break}let a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){let[l]=s[i];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(l)!==-1){a[c]=a[c].replace(l,s[i][1]);break}}return this.#e.insert(a,t,o,this.#t,r),o}buildRegExp(){let e=this.#e.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0,r=[],o=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,a,i)=>a!==void 0?(r[++t]=Number(a),"$()"):(i!==void 0&&(o[Number(i)]=++t),"")),[new RegExp(`^${e}`),r,o]}};var jt=[/^$/,[],Object.create(null)],rt=Object.create(null);function ot(e){return rt[e]??=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`)}function Ft(){rt=Object.create(null)}function Ut(e){let t=new tt,r=[];if(e.length===0)return jt;let o=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[h,p])=>d?1:h?-1:u.length-p.length),s=Object.create(null);for(let d=0,u=-1,h=o.length;d<h;d++){let[p,f,g]=o[d];p?s[f]=[g.map(([v])=>[v,Object.create(null)]),re]:u++;let b;try{b=t.insert(f,u,p)}catch(v){throw v===k?new te(f):v}p||(r[u]=g.map(([v,y])=>{let E=Object.create(null);for(y-=1;y>=0;y--){let[D,le]=b[y];E[D]=le}return[v,E]}))}let[a,i,l]=t.buildRegExp();for(let d=0,u=r.length;d<u;d++)for(let h=0,p=r[d].length;h<p;h++){let f=r[d][h]?.[1];if(!f)continue;let g=Object.keys(f);for(let b=0,v=g.length;b<v;b++)f[g[b]]=l[f[g[b]]]}let c=[];for(let d in i)c[d]=r[i[d]];return[a,c,s]}function M(e,t){if(e){for(let r of Object.keys(e).sort((o,s)=>s.length-o.length))if(ot(r).test(t))return[...e[r]]}}var ne=class{name="RegExpRouter";#t;#e;constructor(){this.#t={[m]:Object.create(null)},this.#e={[m]:Object.create(null)}}add(e,t,r){let o=this.#t,s=this.#e;if(!o||!s)throw new Error(ee);o[e]||[o,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[m]).forEach(c=>{l[e][c]=[...l[m][c]]})}),t==="/*"&&(t="*");let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let l=ot(t);e===m?Object.keys(o).forEach(c=>{o[c][t]||=M(o[c],t)||M(o[m],t)||[]}):o[e][t]||=M(o[e],t)||M(o[m],t)||[],Object.keys(o).forEach(c=>{(e===m||e===c)&&Object.keys(o[c]).forEach(d=>{l.test(d)&&o[c][d].push([r,a])})}),Object.keys(s).forEach(c=>{(e===m||e===c)&&Object.keys(s[c]).forEach(d=>l.test(d)&&s[c][d].push([r,a]))});return}let i=Z(t)||[t];for(let l=0,c=i.length;l<c;l++){let d=i[l];Object.keys(s).forEach(u=>{(e===m||e===u)&&(s[u][d]||=[...M(o[u],d)||M(o[m],d)||[]],s[u][d].push([r,a-c+l+1]))})}}match=we;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#e).concat(Object.keys(this.#t)).forEach(t=>{e[t]||=this.#r(t)}),this.#t=this.#e=void 0,Ft(),e}#r(e){let t=[],r=e===m;return[this.#t,this.#e].forEach(o=>{let s=o[e]?Object.keys(o[e]).map(a=>[a,o[e][a]]):[];s.length!==0?(r||=!0,t.push(...s)):e!==m&&t.push(...Object.keys(o[m]).map(a=>[a,o[m][a]]))}),r?Ut(t):null}};var Ee=class{name="SmartRouter";#t=[];#e=[];constructor(e){this.#t=e.routers}add(e,t,r){if(!this.#e)throw new Error(ee);this.#e.push([e,t,r])}match(e,t){if(!this.#e)throw new Error("Fatal error");let r=this.#t,o=this.#e,s=r.length,a=0,i;for(;a<s;a++){let l=r[a];try{for(let c=0,d=o.length;c<d;c++)l.add(...o[c]);i=l.match(e,t)}catch(c){if(c instanceof te)continue;throw c}this.match=l.match.bind(l),this.#t=[l],this.#e=void 0;break}if(a===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(this.#e||this.#t.length!==1)throw new Error("No active router has been determined yet.");return this.#t[0]}};var j=Object.create(null),$t=e=>{for(let t in e)return!0;return!1},nt=class st{#t;#e;#r;#s=0;#n=j;constructor(t,r,o){if(this.#e=o||Object.create(null),this.#t=[],t&&r){let s=Object.create(null);s[t]={handler:r,possibleKeys:[],score:0},this.#t=[s]}this.#r=[]}insert(t,r,o){this.#s=++this.#s;let s=this,a=Ue(r),i=[];for(let l=0,c=a.length;l<c;l++){let d=a[l],u=a[l+1],h=$e(d,u),p=Array.isArray(h)?h[0]:d;if(p in s.#e){s=s.#e[p],h&&i.push(h[1]);continue}s.#e[p]=new st,h&&(s.#r.push(h),i.push(h[1])),s=s.#e[p]}return s.#t.push({[t]:{handler:o,possibleKeys:i.filter((l,c,d)=>d.indexOf(l)===c),score:this.#s}}),s}#o(t,r,o,s,a){for(let i=0,l=r.#t.length;i<l;i++){let c=r.#t[i],d=c[o]||c[m],u={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),s!==j||a&&a!==j))for(let h=0,p=d.possibleKeys.length;h<p;h++){let f=d.possibleKeys[h],g=u[d.score];d.params[f]=a?.[f]&&!g?a[f]:s[f]??a?.[f],u[d.score]=!0}}}search(t,r){let o=[];this.#n=j;let a=[this],i=he(r),l=[],c=i.length,d=null;for(let u=0;u<c;u++){let h=i[u],p=u===c-1,f=[];for(let b=0,v=a.length;b<v;b++){let y=a[b],E=y.#e[h];E&&(E.#n=y.#n,p?(E.#e["*"]&&this.#o(o,E.#e["*"],t,y.#n),this.#o(o,E,t,y.#n)):f.push(E));for(let D=0,le=y.#r.length;D<le;D++){let Ne=y.#r[D],S=y.#n===j?{}:{...y.#n};if(Ne==="*"){let A=y.#e["*"];A&&(this.#o(o,A,t,y.#n),A.#n=S,f.push(A));continue}let[Ct,Be,L]=Ne;if(!h&&!(L instanceof RegExp))continue;let _=y.#e[Ct];if(L instanceof RegExp){if(d===null){d=new Array(c);let J=r[0]==="/"?1:0;for(let O=0;O<c;O++)d[O]=J,J+=i[O].length+1}let A=r.substring(d[u]),ce=L.exec(A);if(ce){if(S[Be]=ce[0],this.#o(o,_,t,y.#n,S),$t(_.#e)){_.#n=S;let J=ce[0].match(/\//)?.length??0;(l[J]||=[]).push(_)}continue}}(L===!0||L.test(h))&&(S[Be]=h,p?(this.#o(o,_,t,S,y.#n),_.#e["*"]&&this.#o(o,_.#e["*"],t,S,y.#n)):(_.#n=S,f.push(_)))}}let g=l.shift();a=g?f.concat(g):f}return o.length>1&&o.sort((u,h)=>u.score-h.score),[o.map(({handler:u,params:h})=>[u,h])]}};var _e=class{name="TrieRouter";#t;constructor(){this.#t=new nt}add(e,t,r){let o=Z(t);if(o){for(let s=0,a=o.length;s<a;s++)this.#t.insert(e,o[s],r);return}this.#t.insert(e,t,r)}match(e,t){return this.#t.search(e,t)}};var Ce=class extends Ze{constructor(e={}){super(e),this.router=e.router??new Ee({routers:[new ne,new _e]})}};var Se=[{category:"\u{1F4C4} PDF tools",tools:[{tool_name:"PDF to Word converter",monthly_searches:"4.0M/mo",build_diff:"Hard",india:"\u{1F525} High"},{tool_name:"Compress PDF",monthly_searches:"1.6M/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Merge PDF",monthly_searches:"1.2M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Split PDF",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"JPG to PDF",monthly_searches:"1.0M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"PDF to JPG",monthly_searches:"800K/mo",build_diff:"Easy",india:"High"},{tool_name:"PDF editor (annotate, highlight)",monthly_searches:"700K/mo",build_diff:"Hard",india:"High"},{tool_name:"Word to PDF",monthly_searches:"700K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Rotate PDF",monthly_searches:"400K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"PDF to Excel",monthly_searches:"600K/mo",build_diff:"Hard",india:"High"},{tool_name:"Watermark PDF",monthly_searches:"250K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Protect / Unlock PDF",monthly_searches:"280K/mo",build_diff:"Easy",india:"Medium"}]},{category:"\u{1F5BC} Image tools",tools:[{tool_name:"Compress image / Photo compressor",monthly_searches:"1.3M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Remove background from image",monthly_searches:"1.2M/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Resize image",monthly_searches:"1.0M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Convert image format (JPG\u2194PNG\u2194WebP)",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Crop image",monthly_searches:"700K/mo",build_diff:"Easy",india:"High"},{tool_name:"Passport size photo maker",monthly_searches:"800K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"GIF maker / Video to GIF",monthly_searches:"650K/mo",build_diff:"Medium",india:"Medium"},{tool_name:"Image colour picker",monthly_searches:"500K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Add text to image",monthly_searches:"480K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"Image watermark",monthly_searches:"350K/mo",build_diff:"Easy",india:"High"},{tool_name:"Flip / Rotate image",monthly_searches:"280K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Meme generator",monthly_searches:"550K/mo",build_diff:"Medium",india:"\u{1F525} High"}]},{category:"\u2328 Developer tools",tools:[{tool_name:"JSON Formatter / Validator",monthly_searches:"2.0M/mo",build_diff:"Easy",india:"High"},{tool_name:"Base64 Encoder / Decoder",monthly_searches:"1.2M/mo",build_diff:"Easy",india:"High"},{tool_name:"Regex Tester with live match",monthly_searches:"900K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"QR Code Generator",monthly_searches:"1.5M/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"URL Encoder / Decoder",monthly_searches:"550K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"JWT Decoder",monthly_searches:"400K/mo",build_diff:"Easy",india:"High"},{tool_name:"UUID / ULID Generator",monthly_searches:"350K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Cron Expression Generator",monthly_searches:"320K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Diff Checker (text / JSON / code)",monthly_searches:"480K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Password Generator",monthly_searches:"650K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"MD5 / SHA hash generator",monthly_searches:"400K/mo",build_diff:"Easy",india:"Medium"}]},{category:"\u{1F4B0} Indian finance calculators",tools:[{tool_name:"SIP Calculator",monthly_searches:"10M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"EMI Calculator (home / car / personal)",monthly_searches:"8M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"GST Calculator",monthly_searches:"5M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Income Tax Calculator India",monthly_searches:"4M+/mo",build_diff:"Medium",india:"\u{1F525} India only"},{tool_name:"FD / RD Maturity Calculator",monthly_searches:"3M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"HRA Calculator",monthly_searches:"2M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"CAGR Calculator",monthly_searches:"1.5M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"NPS / Retirement Calculator",monthly_searches:"1M+/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Gratuity Calculator",monthly_searches:"800K/mo",build_diff:"Easy",india:"\u{1F525} India only"}]},{category:"\u{1F4DD} Text tools",tools:[{tool_name:"Word Counter / Character Counter",monthly_searches:"900K/mo",build_diff:"Easy",india:"\u{1F525} High"},{tool_name:"Case Converter (upper/lower/title/camel)",monthly_searches:"600K/mo",build_diff:"Easy",india:"High"},{tool_name:"Lorem Ipsum Generator",monthly_searches:"550K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Text to Slug / URL converter",monthly_searches:"250K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Markdown to HTML Converter",monthly_searches:"350K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Number to Words (Indian system)",monthly_searches:"500K/mo",build_diff:"Easy",india:"\u{1F525} India only"},{tool_name:"Roman Numeral Converter",monthly_searches:"300K/mo",build_diff:"Easy",india:"Medium"},{tool_name:"Binary / Hex / Octal Converter",monthly_searches:"420K/mo",build_diff:"Easy",india:"High"},{tool_name:"Business Name Generator",monthly_searches:"850K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"AI Product Description Writer",monthly_searches:"550K/mo",build_diff:"Medium",india:"High"},{tool_name:"Resume Bullet Point Writer",monthly_searches:"600K/mo",build_diff:"Medium",india:"\u{1F525} High"},{tool_name:"AI Meta Description Generator",monthly_searches:"420K/mo",build_diff:"Medium",india:"High"},{tool_name:"AI Email Subject Line Generator",monthly_searches:"380K/mo",build_diff:"Medium",india:"Medium"},{tool_name:"AI Cover Letter Generator",monthly_searches:"700K/mo",build_diff:"Medium",india:"\u{1F525} High"}]},{category:"\u{1F4C8} SEO tools",tools:[{tool_name:"Plagiarism Checker (basic)",monthly_searches:"5M+/mo",build_diff:"Hard",india:"\u{1F525} High"},{tool_name:"XML Sitemap Generator",monthly_searches:"400K/mo",build_diff:"Medium",india:"High"},{tool_name:"Keyword Density Checker",monthly_searches:"350K/mo",build_diff:"Easy",india:"High"},{tool_name:"Robots.txt Generator",monthly_searches:"220K/mo",build_diff:"Easy",india:"Medium"}]}];var se=Symbol("RENDERER"),at=Symbol("ERROR_HANDLER");var it=Symbol("INTERNAL");var F=Symbol("PERMALINK");var Ie=e=>(e[it]=!0,e);var lt=e=>({value:t,children:r})=>{if(!r)return;let o={children:[{tag:Ie(()=>{e.push(t)}),props:{}}]};Array.isArray(r)?o.children.push(...r.flat()):o.children.push(r),o.children.push({tag:Ie(()=>{e.pop()}),props:{}});let s={tag:"",props:o,type:""};return s[at]=a=>{throw e.pop(),a},s};var U=[],ct=e=>{let t=[e],r=(o=>{t.push(o.value);let s;try{s=o.children?(Array.isArray(o.children)?new dt("",{},o.children):o.children).toString():""}catch(a){throw t.pop(),a}return s instanceof Promise?s.finally(()=>t.pop()).then(a=>w(a,a.callbacks)):(t.pop(),w(s))});return r.values=t,r.Provider=r,r[se]=lt(t),U.push(r),r},T=e=>e.values.at(-1);var Re={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Pe={},ke="data-precedence",ut=e=>e.rel==="stylesheet"&&"precedence"in e,ht=(e,t)=>e==="link"?t:Re[e].length>0;var W={};It(W,{button:()=>Qt,form:()=>qt,input:()=>Xt,link:()=>zt,meta:()=>Jt,script:()=>Wt,style:()=>Vt,title:()=>Gt});var $=e=>Array.isArray(e)?e:[e];var pt=new WeakMap,ft=(e,t,r,o)=>({buffer:s,context:a})=>{if(!s)return;let i=pt.get(a)||{};pt.set(a,i);let l=i[e]||=[],c=!1,d=Re[e],u=ht(e,o!==void 0);if(u){e:for(let[,h]of l)if(!(e==="link"&&!(h.rel==="stylesheet"&&h[ke]!==void 0))){for(let p of d)if((h?.[p]??null)===r?.[p]){c=!0;break e}}}if(c?s[0]=s[0].replaceAll(t,""):u||e==="link"?l.push([t,r,o]):l.unshift([t,r,o]),s[0].indexOf("</head>")!==-1){let h;if(e==="link"||o!==void 0){let p=[];h=l.map(([f,,g],b)=>{if(g===void 0)return[f,Number.MAX_SAFE_INTEGER,b];let v=p.indexOf(g);return v===-1&&(p.push(g),v=p.length-1),[f,v,b]}).sort((f,g)=>f[1]-g[1]||f[2]-g[2]).map(([f])=>f)}else h=l.map(([p])=>p);h.forEach(p=>{s[0]=s[0].replaceAll(p,"")}),s[0]=s[0].replace(/(?=<\/head>)/,h.join(""))}},K=(e,t,r)=>w(new x(e,r,$(t??[])).toString()),G=(e,t,r,o)=>{if("itemProp"in r)return K(e,t,r);let{precedence:s,blocking:a,...i}=r;s=o?s??"":void 0,o&&(i[ke]=s);let l=new x(e,i,$(t||[])).toString();return l instanceof Promise?l.then(c=>w(l,[...c.callbacks||[],ft(e,c,i,s)])):w(l,[ft(e,l,i,s)])},Gt=({children:e,...t})=>{let r=ae();if(r){let o=T(r);if(o==="svg"||o==="head")return new x("title",t,$(e??[]))}return G("title",e,t,!1)},Wt=({children:e,...t})=>{let r=ae();return["src","async"].some(o=>!t[o])||r&&T(r)==="head"?K("script",e,t):G("script",e,t,!1)},Vt=({children:e,...t})=>["href","precedence"].every(r=>r in t)?(t["data-href"]=t.href,delete t.href,G("style",e,t,!0)):K("style",e,t),zt=({children:e,...t})=>["onLoad","onError"].some(r=>r in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?K("link",e,t):G("link",e,t,ut(t)),Jt=({children:e,...t})=>{let r=ae();return r&&T(r)==="head"?K("meta",e,t):G("meta",e,t,!1)},mt=(e,{children:t,...r})=>new x(e,r,$(t??[])),qt=e=>(typeof e.action=="function"&&(e.action=F in e.action?e.action[F]:void 0),mt("form",e)),yt=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=F in t.formAction?t.formAction[F]:void 0),mt(e,t)),Xt=e=>yt("input",e),Qt=e=>yt("button",e);var Zt=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),Te=e=>Zt.get(e)||e,Yt=/[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,Ae=new Set,gt=1024,er=/^[!?]|[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,bt=new Set,tr=256,V=(e,t,r)=>{e.size>=t&&e.clear(),e.add(r)},wt=e=>bt.has(e)?!0:typeof e!="string"?!1:e.length===0?!0:er.test(e)?!1:(V(bt,tr,e),!0),De=e=>{if(Ae.has(e))return!0;let t=e.length;if(t===0)return!1;for(let r=0;r<t;r++){let o=e.charCodeAt(r);if(!(o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||o===45||o===95||o===46||o===58))return Yt.test(e)?!1:(V(Ae,gt,e),!0)}return V(Ae,gt,e),!0},rr=/[\s"'():;\\/\[\]{}\x00-\x1f\x7f-\x9f]/,Me=new Set,vt=1024,or=e=>{if(Me.has(e))return!0;let t=e.length;if(t===0)return!1;for(let r=0;r<t;r++){let o=e.charCodeAt(r);if(!(o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||o===45||o===95))return rr.test(e)?!1:(V(Me,vt,e),!0)}return V(Me,vt,e),!0},nr=/[;"'\\/\[\](){}]/,sr=e=>{if(!nr.test(e))return!1;let t=0,r=[];for(let o=0,s=e.length;o<s;o++){let a=e.charCodeAt(o);if(a===92){if(o===s-1)return!0;o++}else if(t!==0){if(a===10||a===12||a===13)return!0;a===t&&(t=0)}else if(a===47&&e.charCodeAt(o+1)===42){let i=e.indexOf("*/",o+2);if(i===-1)return!0;o=i+1}else if(a===34||a===39)t=a;else if(a===40)r.push(41);else if(a===91)r.push(93);else{if(a===123||a===125)return!0;if(a===41||a===93){if(r[r.length-1]!==a)return!0;r.pop()}else if(a===59&&r.length===0)return!0}}return t!==0||r.length!==0},Le=(e,t)=>{for(let[r,o]of Object.entries(e)){let s=r[0]==="-"||!/[A-Z]/.test(r)?r:r.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);if(!or(s))continue;if(o==null){t(s,null);continue}let a;if(typeof o=="number")a=s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${o}`:`${o}px`;else if(typeof o=="string"){if(sr(o))continue;a=o}else continue;t(s,a)}};var z=void 0,ae=()=>z,ar=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,ir=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],lr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],He=(e,t)=>{for(let r=0,o=e.length;r<o;r++){let s=e[r];if(typeof s=="string")C(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof x?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):He(s,t)}}},x=class{tag;props;key;children;isEscaped=!0;localContexts;constructor(e,t,r){if(typeof e!="function"&&!wt(e))throw new Error(`Invalid JSX tag name: ${e}`);this.tag=e,this.props=t,this.children=r}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){let e=[""];this.localContexts?.forEach(([t,r])=>{t.values.push(r)});try{this.toStringToBuffer(e)}finally{this.localContexts?.forEach(([t])=>{t.values.pop()})}return e.length===1?"callbacks"in e?ye(w(e[0],e.callbacks)).toString():e[0]:Y(e,e.callbacks)}toStringToBuffer(e){let t=this.tag,r=this.props,{children:o}=this;e[0]+=`<${t}`;let s=t==="svg"||z&&T(z)==="svg"?a=>ar(Te(a)):a=>Te(a);for(let[a,i]of Object.entries(r))if(a=s(a),!!De(a)&&a!=="children"){if(a==="style"&&typeof i=="object"){let l="";Le(i,(c,d)=>{d!=null&&(l+=`${l?";":""}${c}:${d}`)}),e[0]+=' style="',C(l,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${a}="`,C(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${a}="${i}"`;else if(typeof i=="boolean"&&lr.includes(a))i&&(e[0]+=` ${a}=""`);else if(a==="dangerouslySetInnerHTML"){if(o.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");o=[w(i.__html)]}else if(i instanceof Promise)e[0]+=` ${a}="`,e.unshift('"',i);else if(typeof i=="function"){if(!a.startsWith("on")&&a!=="ref")throw new Error(`Invalid prop '${a}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${a}="`,C(i.toString(),e),e[0]+='"'}if(ir.includes(t)&&o.length===0){e[0]+="/>";return}e[0]+=">",He(o,e),e[0]+=`</${t}>`}},Oe=class extends x{toStringToBuffer(e){let{children:t}=this,r={...this.props};t.length&&(r.children=t.length===1?t[0]:t);let o=this.tag.call(null,r);if(!(typeof o=="boolean"||o==null))if(o instanceof Promise)if(U.length===0)e.unshift("",o);else{let s=U.map(a=>[a,a.values.at(-1)]);e.unshift("",o.then(a=>(a instanceof x&&(a.localContexts=s),a)))}else o instanceof x?o.toStringToBuffer(e):typeof o=="number"||o.isEscaped?(e[0]+=o,o.callbacks&&(e.callbacks||=[],e.callbacks.push(...o.callbacks))):C(o,e)}},dt=class extends x{toStringToBuffer(e){He(this.children,e)}};var xt=!1,ie=(e,t,r)=>{if(!xt){for(let o in Pe)W[o][se]=Pe[o];xt=!0}return typeof e=="function"?new Oe(e,t,r):W[e]?new Oe(W[e],t,r):e==="svg"||e==="head"?(z||=ct(""),new x(e,t,[new Oe(z,{value:e},r)])):new x(e,t,r)};function n(e,t,r){let o;if(!t||!("children"in t))o=ie(e,t,[]);else{let s=t.children;o=Array.isArray(s)?ie(e,t,s):ie(e,t,[s])}return o.key=r,o}var R=e=>n("html",{lang:"en",children:[n("head",{children:[n("meta",{charset:"UTF-8"}),n("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n("title",{children:e.title||"ToolStaq | Hyper-Fast Developer & Text Utilities"}),n("meta",{name:"description",content:e.description||"Stunning, privacy-first, zero-bloat developer and text tools running on the edge."}),n("meta",{property:"og:type",content:"website"}),n("meta",{property:"og:title",content:e.title||"ToolStaq"}),n("meta",{property:"og:description",content:e.description||"Zero-bloat edge utilities."}),n("link",{rel:"stylesheet",href:"/style.css"})]}),n("body",{children:[n("header",{children:[n("a",{href:"/",class:"logo-link",id:"home-logo",children:[n("div",{class:"logo-icon",children:"T"}),n("span",{children:"ToolStaq"})]}),n("nav",{class:"nav-links",children:[n("a",{href:"/tools/json",class:"nav-link",children:"JSON Formatter"}),n("a",{href:"/tools/word-counter",class:"nav-link",children:"Word Counter"}),n("a",{href:"/tools/password-generator",class:"nav-link",children:"Passwords"}),n("a",{href:"/tools/base64",class:"nav-link",children:"Base64"})]})]}),n("main",{children:e.children}),n("footer",{children:n("p",{class:"footer-text",children:["\xA9 ",new Date().getFullYear()," ToolStaq.online. Powered by Cloudflare Workers and Hono JSX."]})})]})]});var Et=()=>n(R,{title:"JSON Formatter & Validator | ToolStaq",description:"Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"JSON Formatter & Validator"}),n("p",{class:"workspace-desc",children:"Paste your raw JSON to validate, clean, and format it instantly in your browser."})]}),n("div",{class:"btn-row",style:"margin-bottom: 1.5rem; align-items: center;",children:[n("label",{for:"indent",class:"form-label",style:"margin-bottom: 0; margin-right: 0.5rem;",children:"Tab Size:"}),n("select",{id:"indent",class:"search-input",style:"width: auto; padding: 0.5rem 1.5rem 0.5rem 1rem; border-radius: 8px;",children:[n("option",{value:"2",selected:!0,children:"2 Spaces"}),n("option",{value:"4",children:"4 Spaces"}),n("option",{value:"tab",children:"Tab"}),n("option",{value:"minify",children:"Minified"})]}),n("button",{type:"button",class:"btn btn-primary",id:"btn-format",children:"Format & Validate"}),n("button",{type:"button",class:"btn",id:"btn-clear",children:"Clear"}),n("button",{type:"button",class:"btn",id:"btn-copy-client",style:"margin-left: auto; display: none;",children:"Copy Output"})]}),n("div",{id:"error-box",style:"display: none; padding: 1rem; background-color: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1.5rem; font-family: monospace;"}),n("div",{class:"tool-view-layout",style:"grid-template-columns: 1fr 1fr; margin-top: 0;",children:[n("div",{class:"form-group",style:"margin-bottom: 0;",children:[n("label",{class:"form-label",for:"json-input",children:"Raw Input JSON"}),n("textarea",{class:"text-area",id:"json-input",placeholder:'{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }',style:"height: 450px;"})]}),n("div",{class:"form-group",style:"margin-bottom: 0;",children:[n("label",{class:"form-label",children:"Formatted Output"}),n("div",{id:"output-placeholder",style:"height: 450px; border: 1px dashed var(--card-border); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); background: rgba(0,0,0,0.1);",children:"Formatted output will appear here"}),n("pre",{class:"result-box",id:"output-pre",style:"height: 450px; background: rgba(0,0,0,0.3); border: 1px solid var(--card-border); border-radius: 12px; margin: 0; overflow-y: auto; display: none;"})]})]})]}),n("div",{class:"info-sidebar",children:[n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F512} Privacy First"}),n("p",{children:"All formatting and validation run entirely in your browser. Your JSON data never leaves your device."})]}),n("div",{class:"sidebar-card",children:[n("h3",{children:"\u26A1 Sub-Millisecond Speed"}),n("p",{children:"Instant client-side V8-powered compilation enables zero-network latency updates."})]})]})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });
      `}})]});var P=new Ce,_t={"JSON Formatter / Validator":"/tools/json","Word Counter / Character Counter":"/tools/word-counter","Base64 Encoder / Decoder":"/tools/base64","UUID / ULID Generator":"/tools/uuid-generator","Password Generator":"/tools/password-generator"};P.get("/",e=>e.html(n(R,{title:"ToolStaq | Developer & Text Utilities Hub",description:"Explore a collection of ultra-fast developer utilities, financial calculators, and text formatting tools running instantly on the edge.",children:[n("div",{class:"hero",children:[n("h1",{children:"All Utilities, No Bloat."}),n("p",{children:"Privacy-first, supercharged developer and text tools rendered instantly at the edge with zero client-side frameworks."}),n("div",{class:"search-container",children:[n("svg",{class:"search-icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),n("input",{type:"text",class:"search-input",placeholder:"Search over 40+ tools...",id:"tool-search",autocomplete:"off"})]})]}),n("div",{class:"container",style:"padding-top: 0;",children:[n("div",{class:"categories-filter",id:"categories-bar",children:[n("button",{class:"filter-btn active","data-category":"all",children:"All Tools"}),Se.map(t=>n("button",{class:"filter-btn","data-category":t.category,children:t.category}))]}),n("div",{class:"tools-grid",id:"tools-container",children:Se.flatMap(t=>t.tools.map(r=>{let o=_t[r.tool_name]||"#",s=!!_t[r.tool_name];return n("a",{href:o,class:`tool-card ${s?"":"coming-soon-card"}`,"data-name":r.tool_name.toLowerCase(),"data-category":t.category,onclick:s?"":"showComingSoon(event, '"+r.tool_name+"')",id:`tool-${r.tool_name.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase()}`,children:[n("div",{class:"tool-header",children:[n("span",{class:"tool-icon-wrapper",children:t.category.split(" ")[0]}),n("span",{class:"tool-badge",style:s?"color:#10b981;border-color:rgba(16,185,129,0.2);":"color:#94a3b8;",children:s?"Active":"Soon"})]}),n("div",{children:[n("h3",{class:"tool-name",children:r.tool_name}),n("p",{class:"tool-desc",children:s?`Format, validate, or convert your data instantly with our edge-powered ${r.tool_name.toLowerCase()}.`:`High performance ${r.tool_name.toLowerCase()} tool scheduled for the next release.`})]}),n("div",{class:"tool-footer",children:[n("span",{class:"tool-searches",children:["\u{1F525} ",r.monthly_searches]}),n("span",{class:"tool-diff",children:r.build_diff})]})]})}))})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));P.get("/tools/json",e=>e.html(n(Et,{})));P.get("/tools/json-formatter",e=>e.redirect("/tools/json"));P.get("/tools/word-counter",e=>e.html(n(R,{title:"Word Counter & Character Counter | ToolStaq",description:"Analyze your text length, count characters, words, sentences, paragraphs, reading speed, and keyword occurrences instantly.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Word & Character Counter"}),n("p",{class:"workspace-desc",children:"Analyze your writing speed and complexity metrics in real-time. Simply type or paste your content."})]}),n("div",{class:"stats-grid",children:[n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-words",children:"0"}),n("div",{class:"stat-label",children:"Words"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-chars",children:"0"}),n("div",{class:"stat-label",children:"Characters"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-sentences",children:"0"}),n("div",{class:"stat-label",children:"Sentences"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-paragraphs",children:"0"}),n("div",{class:"stat-label",children:"Paragraphs"})]})]}),n("div",{class:"form-group",children:n("textarea",{class:"text-area",id:"text-input",placeholder:"Start typing or paste your essay, email, or article here...",style:"height: 240px;"})}),n("div",{class:"stats-grid",style:"grid-template-columns: repeat(2, 1fr); margin-top: 1rem;",children:[n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-read-time",children:"0m 0s"}),n("div",{class:"stat-label",children:"Estimated Reading Time"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-speak-time",children:"0m 0s"}),n("div",{class:"stat-label",children:"Estimated Speaking Time"})]})]}),n("div",{class:"result-panel",id:"density-panel",style:"display:none;",children:[n("div",{class:"result-title",style:"color: var(--primary);",children:"Top Keyword Density"}),n("div",{id:"density-list",style:"font-size:0.9rem; display:flex; flex-wrap:wrap; gap:0.5rem;"})]})]}),n("div",{class:"info-sidebar",children:[n("div",{class:"sidebar-card",children:[n("h3",{children:"\u2139\uFE0F Calculations"}),n("p",{children:"Reading time is computed at 225 words per minute. Speaking time is based on 130 words per minute."})]}),n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F310} Clean Content"}),n("p",{children:"Extra whitespaces, double tabs, and formatting marks are auto-normalized in the telemetry counters."})]})]})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));P.get("/tools/base64",e=>e.html(n(R,{title:"Base64 Encoder & Decoder | ToolStaq",description:"Instantly convert plain text to Base64 code or decode Base64 strings back to text safely and quickly.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Base64 Encoder / Decoder"}),n("p",{class:"workspace-desc",children:"Securely encode regular string data into Base64 format, or convert standard Base64 back into human-readable text."})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"base64-input",children:"Input Data:"}),n("textarea",{class:"text-area",id:"base64-input",placeholder:"Paste or type content here...",style:"height: 180px;"})]}),n("div",{class:"btn-row",children:[n("button",{class:"btn btn-primary",id:"btn-encode",children:"Encode Base64"}),n("button",{class:"btn",id:"btn-decode",children:"Decode Base64"}),n("button",{class:"btn",id:"btn-base64-clear",style:"margin-left: auto;",children:"Clear"})]}),n("div",{class:"result-panel",id:"base64-result-panel",style:"display: none;",children:[n("div",{class:"result-title",children:[n("span",{children:"Result"}),n("button",{class:"btn",id:"btn-base64-copy",style:"padding: 0.2rem 0.6rem; font-size: 0.75rem;",children:"Copy Result"})]}),n("textarea",{class:"text-area",id:"base64-output",readonly:!0,style:"height: 180px; background: rgba(0,0,0,0.3); font-family: monospace;"})]})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F524} Base64 Basics"}),n("p",{children:"Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));P.get("/tools/uuid-generator",e=>e.html(n(R,{title:"UUID & ULID Generator | ToolStaq",description:"Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"UUID / ULID Generator"}),n("p",{class:"workspace-desc",children:"Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys."})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"generator-type",children:"Identifier Type:"}),n("select",{id:"generator-type",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px;",children:[n("option",{value:"uuid",children:"UUID v4 (Standard Unique Key)"}),n("option",{value:"ulid",children:"ULID (Lexicographically Sortable)"})]})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"generator-count",children:"Quantity to generate (1 - 100):"}),n("input",{type:"number",id:"generator-count",min:"1",max:"100",value:"5",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px; width: 120px;"})]}),n("div",{class:"btn-row",children:[n("button",{class:"btn btn-primary",id:"btn-generate",children:"Generate IDs"}),n("button",{class:"btn",id:"btn-gen-copy",style:"margin-left: auto;",children:"Copy All"})]}),n("div",{class:"result-panel",style:"margin-top: 1.5rem;",children:n("textarea",{class:"text-area",id:"generator-output",readonly:!0,style:"height: 200px; background: rgba(0,0,0,0.3); font-family: monospace;"})})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u2139\uFE0F ULID vs UUID"}),n("p",{children:"ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));P.get("/tools/password-generator",e=>e.html(n(R,{title:"Random Password Generator | ToolStaq",description:"Create cryptographically secure random passwords with adjustable length and character types.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Random Password Generator"}),n("p",{class:"workspace-desc",children:"Generate secure passwords using client-side Web Cryptography APIs. Protect your online accounts with robust entropy."})]}),n("div",{class:"form-group",style:"background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--card-border);",children:[n("input",{type:"text",id:"pwd-display",readonly:!0,style:"font-family: monospace; font-size: 1.25rem; background: transparent; border: none; outline: none; color: #ffffff; width: 100%; letter-spacing: 0.05em;"}),n("button",{class:"btn btn-primary",id:"btn-pwd-copy",style:"padding: 0.5rem 1rem; font-size: 0.85rem; flex-shrink: 0;",children:"Copy"})]}),n("div",{class:"form-group",children:[n("div",{style:"display: flex; justify-content: space-between; align-items: center;",children:n("span",{class:"form-label",style:"margin-bottom: 0;",children:["Password Length: ",n("strong",{id:"length-val",style:"color: var(--primary);",children:"16"})]})}),n("input",{type:"range",id:"pwd-length",class:"range-slider",min:"6",max:"64",value:"16"})]}),n("div",{class:"checkbox-group",children:[n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-upper",class:"checkbox-input",checked:!0}),"Include Uppercase (A-Z)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-lower",class:"checkbox-input",checked:!0}),"Include Lowercase (a-z)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-nums",class:"checkbox-input",checked:!0}),"Include Numbers (0-9)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-syms",class:"checkbox-input",checked:!0}),"Include Symbols (!@#$%^&*)"]})]}),n("div",{class:"form-group",style:"margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;",children:[n("span",{class:"form-label",style:"margin-bottom: 0;",children:"Security Strength:"}),n("span",{id:"pwd-strength",class:"tool-badge",style:"font-weight: 700; padding: 0.3rem 0.8rem;",children:"STRONG"})]}),n("div",{class:"btn-row",style:"margin-top: 1.5rem;",children:n("button",{class:"btn",id:"btn-pwd-generate",style:"width: 100%; justify-content: center; background: rgba(255,255,255,0.04); border-color: var(--primary);",children:"\u{1F504} Re-generate Password"})})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F512} Local Safety"}),n("p",{children:"We use the browser's native `window.crypto.getRandomValues` function. This ensures the output is random and stays completely offline."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));var Tn={async fetch(e,t,r){try{let o=await t.ASSETS.fetch(e);if(o.status!==404)return o}catch{}return P.fetch(e,t,r)},scheduled:async(e,t,r)=>{console.log(`Running scheduled background buffer cleanup task: ${e.cron}`)}};export{P as app,Tn as default};
