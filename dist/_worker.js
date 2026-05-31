var St=Object.defineProperty;var kt=(e,t)=>{for(var s in t)St(e,s,{get:t[s],enumerable:!0})};var de=(e,t,s)=>(r,o)=>{let a=-1;return i(0);async function i(c){if(c<=a)throw new Error("next() called multiple times");a=c;let l,d=!1,u;if(e[c]?(u=e[c][0][0],r.req.routeIndex=c):u=c===e.length&&o||void 0,u)try{l=await u(r,()=>i(c+1))}catch(p){if(p instanceof Error&&t)r.error=p,l=await t(p,r),d=!0;else throw p}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||d)&&(r.res=l),r}};var He=Symbol();var _e=async(e,t=Object.create(null))=>{let{all:s=!1,dot:r=!1}=t,a=(e instanceof q?e.raw.headers:e.headers).get("Content-Type");return a?.startsWith("multipart/form-data")||a?.startsWith("application/x-www-form-urlencoded")?Pt(e,{all:s,dot:r}):{}};async function Pt(e,t){let s=await e.formData();return s?It(s,t):{}}function It(e,t){let s=Object.create(null);return e.forEach((r,o)=>{t.all||o.endsWith("[]")?Rt(s,o,r):s[o]=r}),t.dot&&Object.entries(s).forEach(([r,o])=>{r.includes(".")&&(At(s,r,o),delete s[r])}),s}var Rt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},At=(e,t,s)=>{if(/(?:^|\.)__proto__\./.test(t))return;let r=e,o=t.split(".");o.forEach((a,i)=>{i===o.length-1?r[a]=s:((!r[a]||typeof r[a]!="object"||Array.isArray(r[a])||r[a]instanceof File)&&(r[a]=Object.create(null)),r=r[a])})};var pe=e=>{let t=e.split("/");return t[0]===""&&t.shift(),t},Fe=e=>{let{groups:t,path:s}=Tt(e),r=pe(s);return Dt(r,t)},Tt=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{let o=`@${r}`;return t.push([o,s]),o}),{groups:t,path:e}},Dt=(e,t)=>{for(let s=t.length-1;s>=0;s--){let[r]=t[s];for(let o=e.length-1;o>=0;o--)if(e[o].includes(r)){e[o]=e[o].replace(r,t[s][1]);break}}return e},X={},Ue=(e,t)=>{if(e==="*")return"*";let s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){let r=`${e}#${t}`;return X[r]||(s[2]?X[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:X[r]=[e,s[1],!0]),X[r]}return null},Q=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ot=e=>Q(e,decodeURI),he=e=>{let t=e.url,s=t.indexOf("/",t.indexOf(":")+4),r=s;for(;r<t.length;r++){let o=t.charCodeAt(r);if(o===37){let a=t.indexOf("?",r),i=t.indexOf("#",r),c=a===-1?i===-1?void 0:i:i===-1?a:Math.min(a,i),l=t.slice(s,c);return Ot(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(o===63||o===35)break}return t.slice(s,r)};var $e=e=>{let t=he(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},P=(e,t,...s)=>(s.length&&(t=P(t,...s)),`${e?.[0]==="/"?"":"/"}${e}${t==="/"?"":`${e?.at(-1)==="/"?"":"/"}${t?.[0]==="/"?t.slice(1):t}`}`),Y=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;let t=e.split("/"),s=[],r="";return t.forEach(o=>{if(o!==""&&!/\:/.test(o))r+="/"+o;else if(/\:/.test(o))if(/\?/.test(o)){s.length===0&&r===""?s.push("/"):s.push(r);let a=o.replace("?","");r+="/"+a,s.push(r)}else r+="/"+o}),s.filter((o,a,i)=>i.indexOf(o)===a)},ue=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Q(e,me):e):e,Ke=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){let c=e.charCodeAt(i+t.length+1);if(c===61){let l=i+t.length+2,d=e.indexOf("&",l);return ue(e.slice(l,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}let o={};r??=/[%+]/.test(e);let a=e.indexOf("?",8);for(;a!==-1;){let i=e.indexOf("&",a+1),c=e.indexOf("=",a);c>i&&i!==-1&&(c=-1);let l=e.slice(a+1,c===-1?i===-1?void 0:i:c);if(r&&(l=ue(l)),a=i,l==="")continue;let d;c===-1?d="":(d=e.slice(c+1,i===-1?void 0:i),r&&(d=ue(d))),s?(o[l]&&Array.isArray(o[l])||(o[l]=[]),o[l].push(d)):o[l]??=d}return t?o[t]:o},Ge=Ke,ze=(e,t)=>Ke(e,t,!0),me=decodeURIComponent;var We=e=>Q(e,me),q=class{raw;#t;#e;routeIndex=0;path;bodyCache={};constructor(e,t="/",s=[[]]){this.raw=e,this.path=t,this.#e=s,this.#t={}}param(e){return e?this.#r(e):this.#o()}#r(e){let t=this.#e[0][this.routeIndex][1][e],s=this.#n(t);return s&&/\%/.test(s)?We(s):s}#o(){let e={},t=Object.keys(this.#e[0][this.routeIndex][1]);for(let s of t){let r=this.#n(this.#e[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?We(r):r)}return e}#n(e){return this.#e[1]?this.#e[1][e]:e}query(e){return Ge(this.url,e)}queries(e){return ze(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){return _e(this,e)}#s=e=>{let{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;let o=Object.keys(t)[0];return o?t[o].then(a=>(o==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=s[e]()};json(){return this.#s("text").then(e=>JSON.parse(e))}text(){return this.#s("text")}arrayBuffer(){return this.#s("arrayBuffer")}bytes(){return this.#s("arrayBuffer").then(e=>new Uint8Array(e))}blob(){return this.#s("blob")}formData(){return this.#s("formData")}addValidatedData(e,t){this.#t[e]=t}valid(e){return this.#t[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[He](){return this.#e}get matchedRoutes(){return this.#e[0].map(([[,e]])=>e)}get routePath(){return this.#e[0].map(([[,e]])=>e)[this.routeIndex].path}};var fe={Stringify:1,BeforeStream:2,Stream:3},w=(e,t)=>{let s=new String(e);return s.isEscaped=!0,s.callbacks=t,s},Lt=/[&<>'"]/,Z=async(e,t)=>{let s="";t||=[];let r=await Promise.all(e);for(let o=r.length-1;s+=r[o],o--,!(o<0);o--){let a=r[o];typeof a=="object"&&t.push(...a.callbacks||[]);let i=a.isEscaped;if(a=await(typeof a=="object"?a.toString():a),typeof a=="object"&&t.push(...a.callbacks||[]),a.isEscaped??i)s+=a;else{let c=[s];S(a,c),s=c[0]}}return w(s,t)},S=(e,t)=>{let s=e.search(Lt);if(s===-1){t[0]+=e;return}let r,o,a=0;for(o=s;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(a,o)+r,a=o+1}t[0]+=e.substring(a,o)},ge=e=>{let t=e.callbacks;if(!t?.length)return e;let s=[e],r={};return t.forEach(o=>o({phase:fe.Stringify,buffer:s,context:r})),s[0]},ye=async(e,t,s,r,o)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);o?o[0]+=e:o=[e];let i=Promise.all(a.map(c=>c({phase:t,buffer:o,context:r}))).then(c=>Promise.all(c.filter(Boolean).map(l=>ye(l,t,!1,r,o))).then(()=>o[0]));return s?w(await i,a):i};var Mt="text/plain; charset=UTF-8",ve=(e,t)=>({"Content-Type":e,...t}),B=(e,t)=>new Response(e,t),be=class{#t;#e;env={};#r;finalized=!1;error;#o;#n;#s;#d;#c;#l;#i;#u;#p;constructor(e,t){this.#t=e,t&&(this.#n=t.executionCtx,this.env=t.env,this.#l=t.notFoundHandler,this.#p=t.path,this.#u=t.matchResult)}get req(){return this.#e??=new q(this.#t,this.#p,this.#u),this.#e}get event(){if(this.#n&&"respondWith"in this.#n)return this.#n;throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#n)return this.#n;throw Error("This context has no ExecutionContext")}get res(){return this.#s||=B(null,{headers:this.#i??=new Headers})}set res(e){if(this.#s&&e){e=B(e.body,e);for(let[t,s]of this.#s.headers.entries())if(t!=="content-type")if(t==="set-cookie"){let r=this.#s.headers.getSetCookie();e.headers.delete("set-cookie");for(let o of r)e.headers.append("set-cookie",o)}else e.headers.set(t,s)}this.#s=e,this.finalized=!0}render=(...e)=>(this.#c??=t=>this.html(t),this.#c(...e));setLayout=e=>this.#d=e;getLayout=()=>this.#d;setRenderer=e=>{this.#c=e};header=(e,t,s)=>{this.finalized&&(this.#s=B(this.#s.body,this.#s));let r=this.#s?this.#s.headers:this.#i??=new Headers;t===void 0?r.delete(e):s?.append?r.append(e,t):r.set(e,t)};status=e=>{this.#o=e};set=(e,t)=>{this.#r??=new Map,this.#r.set(e,t)};get=e=>this.#r?this.#r.get(e):void 0;get var(){return this.#r?Object.fromEntries(this.#r):{}}#a(e,t,s){let r=this.#s?new Headers(this.#s.headers):this.#i??new Headers;if(typeof t=="object"&&"headers"in t){let a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(let[i,c]of a)i.toLowerCase()==="set-cookie"?r.append(i,c):r.set(i,c)}if(s)for(let[a,i]of Object.entries(s))if(typeof i=="string")r.set(a,i);else{r.delete(a);for(let c of i)r.append(a,c)}let o=typeof t=="number"?t:t?.status??this.#o;return B(e,{status:o,headers:r})}newResponse=(...e)=>this.#a(...e);body=(e,t,s)=>this.#a(e,t,s);text=(e,t,s)=>!this.#i&&!this.#o&&!t&&!s&&!this.finalized?new Response(e):this.#a(e,t,ve(Mt,s));json=(e,t,s)=>this.#a(JSON.stringify(e),t,ve("application/json",s));html=(e,t,s)=>{let r=o=>this.#a(o,t,ve("text/html; charset=UTF-8",s));return typeof e=="object"?ye(e,fe.Stringify,!1,{}).then(r):r(e)};redirect=(e,t)=>{let s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)};notFound=()=>(this.#l??=()=>B(),this.#l(this))};var f="ALL",Je="all",Ve=["get","post","put","delete","options","patch"],ee="Can not add a route since the matcher is already built.",te=class extends Error{};var qe="__COMPOSED_HANDLER";var Nt=e=>e.text("404 Not Found",404),Xe=(e,t)=>{if("getResponse"in e){let s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},Qe=class Ye{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#t="/";routes=[];constructor(t={}){[...Ve,Je].forEach(a=>{this[a]=(i,...c)=>(typeof i=="string"?this.#t=i:this.#o(a,this.#t,i),c.forEach(l=>{this.#o(a,this.#t,l)}),this)}),this.on=(a,i,...c)=>{for(let l of[i].flat()){this.#t=l;for(let d of[a].flat())c.map(u=>{this.#o(d.toUpperCase(),this.#t,u)})}return this},this.use=(a,...i)=>(typeof a=="string"?this.#t=a:(this.#t="*",i.unshift(a)),i.forEach(c=>{this.#o(f,this.#t,c)}),this);let{strict:r,...o}=t;Object.assign(this,o),this.getPath=r??!0?t.getPath??he:$e}#e(){let t=new Ye({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#r=this.#r,t.routes=this.routes,t}#r=Nt;errorHandler=Xe;route(t,s){let r=this.basePath(t);return s.routes.map(o=>{let a;s.errorHandler===Xe?a=o.handler:(a=async(i,c)=>(await de([],s.errorHandler)(i,()=>o.handler(i,c))).res,a[qe]=o.handler),r.#o(o.method,o.path,a,o.basePath)}),this}basePath(t){let s=this.#e();return s._basePath=P(this._basePath,t),s}onError=t=>(this.errorHandler=t,this);notFound=t=>(this.#r=t,this);mount(t,s,r){let o,a;r&&(typeof r=="function"?a=r:(a=r.optionHandler,r.replaceRequest===!1?o=l=>l:o=r.replaceRequest));let i=a?l=>{let d=a(l);return Array.isArray(d)?d:[d]}:l=>{let d;try{d=l.executionCtx}catch{}return[l.env,d]};o||=(()=>{let l=P(this._basePath,t),d=l==="/"?0:l.length;return u=>{let p=new URL(u.url);return p.pathname=this.getPath(u).slice(d)||"/",new Request(p,u)}})();let c=async(l,d)=>{let u=await s(o(l.req.raw),...i(l));if(u)return u;await d()};return this.#o(f,P(t,"*"),c),this}#o(t,s,r,o){t=t.toUpperCase(),s=P(this._basePath,s);let a={basePath:o!==void 0?P(this._basePath,o):this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,a]),this.routes.push(a)}#n(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t}#s(t,s,r,o){if(o==="HEAD")return(async()=>new Response(null,await this.#s(t,s,r,"GET")))();let a=this.getPath(t,{env:r}),i=this.router.match(o,a),c=new be(t,{path:a,matchResult:i,env:r,executionCtx:s,notFoundHandler:this.#r});if(i[0].length===1){let d;try{d=i[0][0][0][0](c,async()=>{c.res=await this.#r(c)})}catch(u){return this.#n(u,c)}return d instanceof Promise?d.then(u=>u||(c.finalized?c.res:this.#r(c))).catch(u=>this.#n(u,c)):d??this.#r(c)}let l=de(i[0],this.errorHandler,this.#r);return(async()=>{try{let d=await l(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return this.#n(d,c)}})()}fetch=(t,...s)=>this.#s(t,s[1],s[0],t.method);request=(t,s,r,o)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,o):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${P("/",t)}`,s),r,o));fire=()=>{addEventListener("fetch",t=>{t.respondWith(this.#s(t.request,t,void 0,t.request.method))})}};var re=[];function we(e,t){let s=this.buildAllMatchers(),r=((o,a)=>{let i=s[o]||s[f],c=i[2][a];if(c)return c;let l=a.match(i[0]);if(!l)return[[],re];let d=l.indexOf("",1);return[i[1][d],l]});return this.match=r,r(e,t)}var se="[^/]+",j=".*",H="(?:|/.*)",A=Symbol(),Bt=new Set(".\\+*[^]$()");function jt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===j||e===H?1:t===j||t===H?-1:e===se?1:t===se?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Ze=class xe{#t;#e;#r=Object.create(null);insert(t,s,r,o,a){if(t.length===0){if(this.#t!==void 0)throw A;if(a)return;this.#t=s;return}let[i,...c]=t,l=i==="*"?c.length===0?["","",j]:["","",se]:i==="/*"?["","",H]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),d;if(l){let u=l[1],p=l[2]||se;if(u&&l[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw A;if(d=this.#r[p],!d){if(Object.keys(this.#r).some(h=>h!==j&&h!==H))throw A;if(a)return;d=this.#r[p]=new xe,u!==""&&(d.#e=o.varIndex++)}!a&&u!==""&&r.push([u,d.#e])}else if(d=this.#r[i],!d){if(Object.keys(this.#r).some(u=>u.length>1&&u!==j&&u!==H))throw A;if(a)return;d=this.#r[i]=new xe}d.insert(c,s,r,o,a)}buildRegExpStr(){let s=Object.keys(this.#r).sort(jt).map(r=>{let o=this.#r[r];return(typeof o.#e=="number"?`(${r})@${o.#e}`:Bt.has(r)?`\\${r}`:r)+o.buildRegExpStr()});return typeof this.#t=="number"&&s.unshift(`#${this.#t}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}};var et=class{#t={varIndex:0};#e=new Ze;insert(e,t,s){let r=[],o=[];for(let i=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{let d=`@\\${i}`;return o[i]=[d,l],i++,c=!0,d}),!c)break}let a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=o.length-1;i>=0;i--){let[c]=o[i];for(let l=a.length-1;l>=0;l--)if(a[l].indexOf(c)!==-1){a[l]=a[l].replace(c,o[i][1]);break}}return this.#e.insert(a,t,r,this.#t,s),r}buildRegExp(){let e=this.#e.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0,s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(o,a,i)=>a!==void 0?(s[++t]=Number(a),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}};var Ht=[/^$/,[],Object.create(null)],tt=Object.create(null);function rt(e){return tt[e]??=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`)}function _t(){tt=Object.create(null)}function Ft(e){let t=new et,s=[];if(e.length===0)return Ht;let r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,u],[p,h])=>d?1:p?-1:u.length-h.length),o=Object.create(null);for(let d=0,u=-1,p=r.length;d<p;d++){let[h,m,y]=r[d];h?o[m]=[y.map(([b])=>[b,Object.create(null)]),re]:u++;let v;try{v=t.insert(m,u,h)}catch(b){throw b===A?new te(m):b}h||(s[u]=y.map(([b,g])=>{let E=Object.create(null);for(g-=1;g>=0;g--){let[L,ce]=v[g];E[L]=ce}return[b,E]}))}let[a,i,c]=t.buildRegExp();for(let d=0,u=s.length;d<u;d++)for(let p=0,h=s[d].length;p<h;p++){let m=s[d][p]?.[1];if(!m)continue;let y=Object.keys(m);for(let v=0,b=y.length;v<b;v++)m[y[v]]=c[m[y[v]]]}let l=[];for(let d in i)l[d]=s[i[d]];return[a,l,o]}function D(e,t){if(e){for(let s of Object.keys(e).sort((r,o)=>o.length-r.length))if(rt(s).test(t))return[...e[s]]}}var ne=class{name="RegExpRouter";#t;#e;constructor(){this.#t={[f]:Object.create(null)},this.#e={[f]:Object.create(null)}}add(e,t,s){let r=this.#t,o=this.#e;if(!r||!o)throw new Error(ee);r[e]||[r,o].forEach(c=>{c[e]=Object.create(null),Object.keys(c[f]).forEach(l=>{c[e][l]=[...c[f][l]]})}),t==="/*"&&(t="*");let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let c=rt(t);e===f?Object.keys(r).forEach(l=>{r[l][t]||=D(r[l],t)||D(r[f],t)||[]}):r[e][t]||=D(r[e],t)||D(r[f],t)||[],Object.keys(r).forEach(l=>{(e===f||e===l)&&Object.keys(r[l]).forEach(d=>{c.test(d)&&r[l][d].push([s,a])})}),Object.keys(o).forEach(l=>{(e===f||e===l)&&Object.keys(o[l]).forEach(d=>c.test(d)&&o[l][d].push([s,a]))});return}let i=Y(t)||[t];for(let c=0,l=i.length;c<l;c++){let d=i[c];Object.keys(o).forEach(u=>{(e===f||e===u)&&(o[u][d]||=[...D(r[u],d)||D(r[f],d)||[]],o[u][d].push([s,a-l+c+1]))})}}match=we;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#e).concat(Object.keys(this.#t)).forEach(t=>{e[t]||=this.#r(t)}),this.#t=this.#e=void 0,_t(),e}#r(e){let t=[],s=e===f;return[this.#t,this.#e].forEach(r=>{let o=r[e]?Object.keys(r[e]).map(a=>[a,r[e][a]]):[];o.length!==0?(s||=!0,t.push(...o)):e!==f&&t.push(...Object.keys(r[f]).map(a=>[a,r[f][a]]))}),s?Ft(t):null}};var Ee=class{name="SmartRouter";#t=[];#e=[];constructor(e){this.#t=e.routers}add(e,t,s){if(!this.#e)throw new Error(ee);this.#e.push([e,t,s])}match(e,t){if(!this.#e)throw new Error("Fatal error");let s=this.#t,r=this.#e,o=s.length,a=0,i;for(;a<o;a++){let c=s[a];try{for(let l=0,d=r.length;l<d;l++)c.add(...r[l]);i=c.match(e,t)}catch(l){if(l instanceof te)continue;throw l}this.match=c.match.bind(c),this.#t=[c],this.#e=void 0;break}if(a===o)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(this.#e||this.#t.length!==1)throw new Error("No active router has been determined yet.");return this.#t[0]}};var _=Object.create(null),Ut=e=>{for(let t in e)return!0;return!1},st=class nt{#t;#e;#r;#o=0;#n=_;constructor(t,s,r){if(this.#e=r||Object.create(null),this.#t=[],t&&s){let o=Object.create(null);o[t]={handler:s,possibleKeys:[],score:0},this.#t=[o]}this.#r=[]}insert(t,s,r){this.#o=++this.#o;let o=this,a=Fe(s),i=[];for(let c=0,l=a.length;c<l;c++){let d=a[c],u=a[c+1],p=Ue(d,u),h=Array.isArray(p)?p[0]:d;if(h in o.#e){o=o.#e[h],p&&i.push(p[1]);continue}o.#e[h]=new nt,p&&(o.#r.push(p),i.push(p[1])),o=o.#e[h]}return o.#t.push({[t]:{handler:r,possibleKeys:i.filter((c,l,d)=>d.indexOf(c)===l),score:this.#o}}),o}#s(t,s,r,o,a){for(let i=0,c=s.#t.length;i<c;i++){let l=s.#t[i],d=l[r]||l[f],u={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),o!==_||a&&a!==_))for(let p=0,h=d.possibleKeys.length;p<h;p++){let m=d.possibleKeys[p],y=u[d.score];d.params[m]=a?.[m]&&!y?a[m]:o[m]??a?.[m],u[d.score]=!0}}}search(t,s){let r=[];this.#n=_;let a=[this],i=pe(s),c=[],l=i.length,d=null;for(let u=0;u<l;u++){let p=i[u],h=u===l-1,m=[];for(let v=0,b=a.length;v<b;v++){let g=a[v],E=g.#e[p];E&&(E.#n=g.#n,h?(E.#e["*"]&&this.#s(r,E.#e["*"],t,g.#n),this.#s(r,E,t,g.#n)):m.push(E));for(let L=0,ce=g.#r.length;L<ce;L++){let Be=g.#r[L],k=g.#n===_?{}:{...g.#n};if(Be==="*"){let T=g.#e["*"];T&&(this.#s(r,T,t,g.#n),T.#n=k,m.push(T));continue}let[Ct,je,M]=Be;if(!p&&!(M instanceof RegExp))continue;let C=g.#e[Ct];if(M instanceof RegExp){if(d===null){d=new Array(l);let V=s[0]==="/"?1:0;for(let N=0;N<l;N++)d[N]=V,V+=i[N].length+1}let T=s.substring(d[u]),le=M.exec(T);if(le){if(k[je]=le[0],this.#s(r,C,t,g.#n,k),Ut(C.#e)){C.#n=k;let V=le[0].match(/\//)?.length??0;(c[V]||=[]).push(C)}continue}}(M===!0||M.test(p))&&(k[je]=p,h?(this.#s(r,C,t,k,g.#n),C.#e["*"]&&this.#s(r,C.#e["*"],t,k,g.#n)):(C.#n=k,m.push(C)))}}let y=c.shift();a=y?m.concat(y):m}return r.length>1&&r.sort((u,p)=>u.score-p.score),[r.map(({handler:u,params:p})=>[u,p])]}};var Ce=class{name="TrieRouter";#t;constructor(){this.#t=new st}add(e,t,s){let r=Y(t);if(r){for(let o=0,a=r.length;o<a;o++)this.#t.insert(e,r[o],s);return}this.#t.insert(e,t,s)}match(e,t){return this.#t.search(e,t)}};var Se=class extends Qe{constructor(e={}){super(e),this.router=e.router??new Ee({routers:[new ne,new Ce]})}};var oe=Symbol("RENDERER"),ot=Symbol("ERROR_HANDLER");var at=Symbol("INTERNAL");var F=Symbol("PERMALINK");var ke=e=>(e[at]=!0,e);var it=e=>({value:t,children:s})=>{if(!s)return;let r={children:[{tag:ke(()=>{e.push(t)}),props:{}}]};Array.isArray(s)?r.children.push(...s.flat()):r.children.push(s),r.children.push({tag:ke(()=>{e.pop()}),props:{}});let o={tag:"",props:r,type:""};return o[ot]=a=>{throw e.pop(),a},o};var U=[],ct=e=>{let t=[e],s=(r=>{t.push(r.value);let o;try{o=r.children?(Array.isArray(r.children)?new lt("",{},r.children):r.children).toString():""}catch(a){throw t.pop(),a}return o instanceof Promise?o.finally(()=>t.pop()).then(a=>w(a,a.callbacks)):(t.pop(),w(o))});return s.values=t,s.Provider=s,s[oe]=it(t),U.push(s),s},O=e=>e.values.at(-1);var Pe={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Ie={},Re="data-precedence",dt=e=>e.rel==="stylesheet"&&"precedence"in e,ut=(e,t)=>e==="link"?t:Pe[e].length>0;var z={};kt(z,{button:()=>qt,form:()=>Jt,input:()=>Vt,link:()=>zt,meta:()=>Wt,script:()=>Kt,style:()=>Gt,title:()=>$t});var $=e=>Array.isArray(e)?e:[e];var pt=new WeakMap,ht=(e,t,s,r)=>({buffer:o,context:a})=>{if(!o)return;let i=pt.get(a)||{};pt.set(a,i);let c=i[e]||=[],l=!1,d=Pe[e],u=ut(e,r!==void 0);if(u){e:for(let[,p]of c)if(!(e==="link"&&!(p.rel==="stylesheet"&&p[Re]!==void 0))){for(let h of d)if((p?.[h]??null)===s?.[h]){l=!0;break e}}}if(l?o[0]=o[0].replaceAll(t,""):u||e==="link"?c.push([t,s,r]):c.unshift([t,s,r]),o[0].indexOf("</head>")!==-1){let p;if(e==="link"||r!==void 0){let h=[];p=c.map(([m,,y],v)=>{if(y===void 0)return[m,Number.MAX_SAFE_INTEGER,v];let b=h.indexOf(y);return b===-1&&(h.push(y),b=h.length-1),[m,b,v]}).sort((m,y)=>m[1]-y[1]||m[2]-y[2]).map(([m])=>m)}else p=c.map(([h])=>h);p.forEach(h=>{o[0]=o[0].replaceAll(h,"")}),o[0]=o[0].replace(/(?=<\/head>)/,p.join(""))}},K=(e,t,s)=>w(new x(e,s,$(t??[])).toString()),G=(e,t,s,r)=>{if("itemProp"in s)return K(e,t,s);let{precedence:o,blocking:a,...i}=s;o=r?o??"":void 0,r&&(i[Re]=o);let c=new x(e,i,$(t||[])).toString();return c instanceof Promise?c.then(l=>w(c,[...l.callbacks||[],ht(e,l,i,o)])):w(c,[ht(e,c,i,o)])},$t=({children:e,...t})=>{let s=ae();if(s){let r=O(s);if(r==="svg"||r==="head")return new x("title",t,$(e??[]))}return G("title",e,t,!1)},Kt=({children:e,...t})=>{let s=ae();return["src","async"].some(r=>!t[r])||s&&O(s)==="head"?K("script",e,t):G("script",e,t,!1)},Gt=({children:e,...t})=>["href","precedence"].every(s=>s in t)?(t["data-href"]=t.href,delete t.href,G("style",e,t,!0)):K("style",e,t),zt=({children:e,...t})=>["onLoad","onError"].some(s=>s in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?K("link",e,t):G("link",e,t,dt(t)),Wt=({children:e,...t})=>{let s=ae();return s&&O(s)==="head"?K("meta",e,t):G("meta",e,t,!1)},mt=(e,{children:t,...s})=>new x(e,s,$(t??[])),Jt=e=>(typeof e.action=="function"&&(e.action=F in e.action?e.action[F]:void 0),mt("form",e)),ft=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=F in t.formAction?t.formAction[F]:void 0),mt(e,t)),Vt=e=>ft("input",e),qt=e=>ft("button",e);var Xt=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),De=e=>Xt.get(e)||e,Qt=/[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,Ae=new Set,gt=1024,Yt=/^[!?]|[\s"'<>/=`\\\x00-\x1f\x7f-\x9f]/,yt=new Set,Zt=256,W=(e,t,s)=>{e.size>=t&&e.clear(),e.add(s)},bt=e=>yt.has(e)?!0:typeof e!="string"?!1:e.length===0?!0:Yt.test(e)?!1:(W(yt,Zt,e),!0),Oe=e=>{if(Ae.has(e))return!0;let t=e.length;if(t===0)return!1;for(let s=0;s<t;s++){let r=e.charCodeAt(s);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95||r===46||r===58))return Qt.test(e)?!1:(W(Ae,gt,e),!0)}return W(Ae,gt,e),!0},er=/[\s"'():;\\/\[\]{}\x00-\x1f\x7f-\x9f]/,Te=new Set,vt=1024,tr=e=>{if(Te.has(e))return!0;let t=e.length;if(t===0)return!1;for(let s=0;s<t;s++){let r=e.charCodeAt(s);if(!(r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r===45||r===95))return er.test(e)?!1:(W(Te,vt,e),!0)}return W(Te,vt,e),!0},rr=/[;"'\\/\[\](){}]/,sr=e=>{if(!rr.test(e))return!1;let t=0,s=[];for(let r=0,o=e.length;r<o;r++){let a=e.charCodeAt(r);if(a===92){if(r===o-1)return!0;r++}else if(t!==0){if(a===10||a===12||a===13)return!0;a===t&&(t=0)}else if(a===47&&e.charCodeAt(r+1)===42){let i=e.indexOf("*/",r+2);if(i===-1)return!0;r=i+1}else if(a===34||a===39)t=a;else if(a===40)s.push(41);else if(a===91)s.push(93);else{if(a===123||a===125)return!0;if(a===41||a===93){if(s[s.length-1]!==a)return!0;s.pop()}else if(a===59&&s.length===0)return!0}}return t!==0||s.length!==0},Le=(e,t)=>{for(let[s,r]of Object.entries(e)){let o=s[0]==="-"||!/[A-Z]/.test(s)?s:s.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`);if(!tr(o))continue;if(r==null){t(o,null);continue}let a;if(typeof r=="number")a=o.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`;else if(typeof r=="string"){if(sr(r))continue;a=r}else continue;t(o,a)}};var J=void 0,ae=()=>J,nr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,or=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ar=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ne=(e,t)=>{for(let s=0,r=e.length;s<r;s++){let o=e[s];if(typeof o=="string")S(o,t);else{if(typeof o=="boolean"||o===null||o===void 0)continue;o instanceof x?o.toStringToBuffer(t):typeof o=="number"||o.isEscaped?t[0]+=o:o instanceof Promise?t.unshift("",o):Ne(o,t)}}},x=class{tag;props;key;children;isEscaped=!0;localContexts;constructor(e,t,s){if(typeof e!="function"&&!bt(e))throw new Error(`Invalid JSX tag name: ${e}`);this.tag=e,this.props=t,this.children=s}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){let e=[""];this.localContexts?.forEach(([t,s])=>{t.values.push(s)});try{this.toStringToBuffer(e)}finally{this.localContexts?.forEach(([t])=>{t.values.pop()})}return e.length===1?"callbacks"in e?ge(w(e[0],e.callbacks)).toString():e[0]:Z(e,e.callbacks)}toStringToBuffer(e){let t=this.tag,s=this.props,{children:r}=this;e[0]+=`<${t}`;let o=t==="svg"||J&&O(J)==="svg"?a=>nr(De(a)):a=>De(a);for(let[a,i]of Object.entries(s))if(a=o(a),!!Oe(a)&&a!=="children"){if(a==="style"&&typeof i=="object"){let c="";Le(i,(l,d)=>{d!=null&&(c+=`${c?";":""}${l}:${d}`)}),e[0]+=' style="',S(c,e),e[0]+='"'}else if(typeof i=="string")e[0]+=` ${a}="`,S(i,e),e[0]+='"';else if(i!=null)if(typeof i=="number"||i.isEscaped)e[0]+=` ${a}="${i}"`;else if(typeof i=="boolean"&&ar.includes(a))i&&(e[0]+=` ${a}=""`);else if(a==="dangerouslySetInnerHTML"){if(r.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r=[w(i.__html)]}else if(i instanceof Promise)e[0]+=` ${a}="`,e.unshift('"',i);else if(typeof i=="function"){if(!a.startsWith("on")&&a!=="ref")throw new Error(`Invalid prop '${a}' of type 'function' supplied to '${t}'.`)}else e[0]+=` ${a}="`,S(i.toString(),e),e[0]+='"'}if(or.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Ne(r,e),e[0]+=`</${t}>`}},Me=class extends x{toStringToBuffer(e){let{children:t}=this,s={...this.props};t.length&&(s.children=t.length===1?t[0]:t);let r=this.tag.call(null,s);if(!(typeof r=="boolean"||r==null))if(r instanceof Promise)if(U.length===0)e.unshift("",r);else{let o=U.map(a=>[a,a.values.at(-1)]);e.unshift("",r.then(a=>(a instanceof x&&(a.localContexts=o),a)))}else r instanceof x?r.toStringToBuffer(e):typeof r=="number"||r.isEscaped?(e[0]+=r,r.callbacks&&(e.callbacks||=[],e.callbacks.push(...r.callbacks))):S(r,e)}},lt=class extends x{toStringToBuffer(e){Ne(this.children,e)}};var wt=!1,ie=(e,t,s)=>{if(!wt){for(let r in Ie)z[r][oe]=Ie[r];wt=!0}return typeof e=="function"?new Me(e,t,s):z[e]?new Me(z[e],t,s):e==="svg"||e==="head"?(J||=ct(""),new x(e,t,[new Me(J,{value:e},s)])):new x(e,t,s)};function n(e,t,s){let r;if(!t||!("children"in t))r=ie(e,t,[]);else{let o=t.children;r=Array.isArray(o)?ie(e,t,o):ie(e,t,[o])}return r.key=s,r}var I=e=>n("html",{lang:"en",children:[n("head",{children:[n("meta",{charset:"UTF-8"}),n("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),n("title",{children:e.title||"ToolStaq | Hyper-Fast Developer & Text Utilities"}),n("meta",{name:"description",content:e.description||"Stunning, privacy-first, zero-bloat developer and text tools running on the edge."}),n("meta",{property:"og:type",content:"website"}),n("meta",{property:"og:title",content:e.title||"ToolStaq"}),n("meta",{property:"og:description",content:e.description||"Zero-bloat edge utilities."}),n("link",{rel:"stylesheet",href:"/style.css"}),n("script",{dangerouslySetInnerHTML:{__html:`
        (function() {
          try {
            var savedTheme = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        })();
      `}})]}),n("body",{children:[n("header",{children:[n("a",{href:"/",class:"logo-link",id:"home-logo",children:[n("div",{class:"logo-icon",children:"T"}),n("span",{children:"ToolStaq"})]}),n("nav",{class:"nav-links",children:[n("a",{href:"/tools/json",class:"nav-link",children:"JSON Formatter"}),n("a",{href:"/tools/word-counter",class:"nav-link",children:"Word Counter"}),n("a",{href:"/tools/password-generator",class:"nav-link",children:"Passwords"}),n("a",{href:"/tools/base64",class:"nav-link",children:"Base64"})]}),n("button",{id:"theme-toggle",class:"theme-btn","aria-label":"Toggle Dark Mode",title:"Toggle Dark Mode",children:[n("svg",{class:"icon-moon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:n("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),n("svg",{class:"icon-sun",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[n("circle",{cx:"12",cy:"12",r:"5"}),n("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})]}),n("main",{children:e.children}),n("footer",{children:n("p",{class:"footer-text",children:["\xA9 ",new Date().getFullYear()," ToolStaq.online. Powered by Cloudflare Workers and Hono JSX."]})}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})]});var xt=()=>n(I,{title:"JSON Formatter & Validator | ToolStaq",description:"Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",id:"json-back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"JSON Formatter & Validator"}),n("p",{class:"workspace-desc",children:"Paste your raw JSON to validate, beautify, minify, or parse it instantly in your browser. Your data never leaves your device."})]}),n("div",{class:"btn-row",style:"margin-bottom: var(--space-24); align-items: center;",children:[n("label",{for:"indent",class:"form-label",style:"margin-bottom: 0;",children:"Tab Size:"}),n("select",{id:"indent",class:"search-input",style:"width: auto; padding: var(--space-8) var(--space-16);",children:[n("option",{value:"2",selected:!0,children:"2 Spaces"}),n("option",{value:"4",children:"4 Spaces"}),n("option",{value:"tab",children:"Tab"}),n("option",{value:"minify",children:"Minified"})]}),n("button",{type:"button",class:"btn btn-primary",id:"btn-format",children:"Format & Validate"}),n("button",{type:"button",class:"btn",id:"btn-clear",children:"Clear"}),n("button",{type:"button",class:"btn",id:"btn-copy-client",style:"margin-left: auto; display: none;",children:"Copy Output"})]}),n("div",{id:"error-box",style:"display: none;",role:"alert","aria-live":"polite"}),n("div",{class:"tool-view-layout",style:"grid-template-columns: 1fr 1fr; margin-top: 0;",children:[n("div",{class:"form-group",style:"margin-bottom: 0;",children:[n("label",{class:"form-label",for:"json-input",children:"Raw Input JSON"}),n("textarea",{class:"text-area",id:"json-input",placeholder:'{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }',style:"height: 450px;","aria-label":"JSON input"})]}),n("div",{class:"form-group",style:"margin-bottom: 0;",children:[n("label",{class:"form-label",children:"Formatted Output"}),n("div",{id:"output-placeholder",style:"height: 450px;","aria-hidden":"true",children:"Formatted output will appear here"}),n("pre",{class:"result-box",id:"output-pre",style:"height: 450px; display: none;",role:"region","aria-label":"Formatted JSON output"})]})]})]}),n("div",{class:"info-sidebar",children:[n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F512} Privacy First"}),n("p",{children:"All formatting and validation run entirely in your browser. Your JSON data never leaves your device."})]}),n("div",{class:"sidebar-card",children:[n("h3",{children:"\u26A1 Instant Speed"}),n("p",{children:"Client-side V8-powered parsing delivers sub-millisecond results with zero network round-trips."})]}),n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F6E0}\uFE0F Modes"}),n("p",{children:"Beautify with 2-space, 4-space, or tab indentation \u2014 or minify to a compact single line."})]})]})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]});var Et={categories:[{id:"pdf",name:"PDF Utilities",desc:"Convert, merge, split, and manipulate PDF documents securely."},{id:"image",name:"Image Tools",desc:"Compress, resize, and convert image formats directly in the browser."},{id:"developer",name:"Developer Tools",desc:"Formatters, encoders, generators, and edge-debugging utilities."},{id:"finance",name:"Indian Finance",desc:"Calculators for SIP, EMI, GST, and Income Tax specific to India."},{id:"text",name:"Text & AI Tools",desc:"Word counters, text formatting, and AI-powered writing assistants."},{id:"seo",name:"SEO Tools",desc:"Plagiarism checkers, sitemaps, and keyword density analyzers."}],tools:[{id:"pdf-to-word",name:"PDF to Word converter",desc:"Convert PDF documents into editable Word files without losing formatting.",cat:"pdf",path:"#",status:"coming-soon",searches:"4.0M/mo"},{id:"compress-pdf",name:"Compress PDF",desc:"Reduce PDF file size drastically while maintaining document quality.",cat:"pdf",path:"#",status:"coming-soon",searches:"1.6M/mo"},{id:"merge-pdf",name:"Merge PDF",desc:"Combine multiple PDF documents into a single file instantly.",cat:"pdf",path:"#",status:"coming-soon",searches:"1.2M/mo"},{id:"split-pdf",name:"Split PDF",desc:"Extract pages or split a large PDF into multiple smaller files.",cat:"pdf",path:"#",status:"coming-soon",searches:"900K/mo"},{id:"jpg-to-pdf",name:"JPG to PDF",desc:"Convert JPG, PNG, and other images into a unified PDF document.",cat:"pdf",path:"#",status:"coming-soon",searches:"1.0M/mo"},{id:"pdf-to-jpg",name:"PDF to JPG",desc:"Extract pages from a PDF and convert them into high-quality JPG images.",cat:"pdf",path:"#",status:"coming-soon",searches:"800K/mo"},{id:"pdf-editor",name:"PDF Editor",desc:"Annotate, highlight, and sign PDF documents directly in the browser.",cat:"pdf",path:"#",status:"coming-soon",searches:"700K/mo"},{id:"word-to-pdf",name:"Word to PDF",desc:"Convert DOC and DOCX files into universal PDF format.",cat:"pdf",path:"#",status:"coming-soon",searches:"700K/mo"},{id:"rotate-pdf",name:"Rotate PDF",desc:"Fix page orientation by rotating individual PDF pages.",cat:"pdf",path:"#",status:"coming-soon",searches:"400K/mo"},{id:"pdf-to-excel",name:"PDF to Excel",desc:"Extract tables from PDF documents into spreadsheet format.",cat:"pdf",path:"#",status:"coming-soon",searches:"600K/mo"},{id:"watermark-pdf",name:"Watermark PDF",desc:"Stamp text or images across your PDF pages for security.",cat:"pdf",path:"#",status:"coming-soon",searches:"250K/mo"},{id:"unlock-pdf",name:"Protect / Unlock PDF",desc:"Add or remove password encryption from PDF files.",cat:"pdf",path:"#",status:"coming-soon",searches:"280K/mo"},{id:"compress-image",name:"Photo Compressor",desc:"Reduce image file sizes instantly without noticeable quality loss.",cat:"image",path:"#",status:"coming-soon",searches:"1.3M/mo"},{id:"remove-bg",name:"Remove Background",desc:"Automatically extract subjects and remove image backgrounds.",cat:"image",path:"#",status:"coming-soon",searches:"1.2M/mo"},{id:"resize-image",name:"Resize Image",desc:"Scale images up or down by percentage or exact pixel dimensions.",cat:"image",path:"#",status:"coming-soon",searches:"1.0M/mo"},{id:"convert-image",name:"Convert Image Format",desc:"Quickly convert files between JPG, PNG, WebP, and AVIF.",cat:"image",path:"#",status:"coming-soon",searches:"900K/mo"},{id:"crop-image",name:"Crop Image",desc:"Trim and reframe photos using standard aspect ratios.",cat:"image",path:"#",status:"coming-soon",searches:"700K/mo"},{id:"passport-photo",name:"Passport Photo Maker",desc:"Generate perfectly sized ID and passport photos for printing.",cat:"image",path:"#",status:"coming-soon",searches:"800K/mo"},{id:"gif-maker",name:"GIF Maker",desc:"Convert video clips or image sequences into animated GIFs.",cat:"image",path:"#",status:"coming-soon",searches:"650K/mo"},{id:"color-picker",name:"Image Color Picker",desc:"Extract HEX and RGB color codes directly from uploaded images.",cat:"image",path:"#",status:"coming-soon",searches:"500K/mo"},{id:"add-text-image",name:"Add Text to Image",desc:"Overlay custom typography onto your pictures.",cat:"image",path:"#",status:"coming-soon",searches:"480K/mo"},{id:"meme-gen",name:"Meme Generator",desc:"Add classic impact font or modern styling to meme templates.",cat:"image",path:"#",status:"coming-soon",searches:"550K/mo"},{id:"json-format",name:"JSON Formatter",desc:"Validate, beautify, and minify JSON data at the edge.",cat:"developer",path:"/tools/json",status:"live",searches:"2.0M/mo"},{id:"base64",name:"Base64 Encoder",desc:"Encode text to Base64 or decode strings back to plain text.",cat:"developer",path:"/tools/base64",status:"live",searches:"1.2M/mo"},{id:"uuid-gen",name:"UUID / ULID Generator",desc:"Generate cryptographically secure v4 UUIDs and sortable ULIDs.",cat:"developer",path:"/tools/uuid-generator",status:"live",searches:"350K/mo"},{id:"pwd-gen",name:"Password Generator",desc:"Create robust, randomized passwords locally in your browser.",cat:"developer",path:"/tools/password-generator",status:"live",searches:"650K/mo"},{id:"regex-tester",name:"Regex Tester",desc:"Test regular expressions against live text strings.",cat:"developer",path:"#",status:"coming-soon",searches:"900K/mo"},{id:"qr-gen",name:"QR Code Generator",desc:"Create scannable QR codes for URLs, text, and contact cards.",cat:"developer",path:"#",status:"coming-soon",searches:"1.5M/mo"},{id:"url-encode",name:"URL Encoder / Decoder",desc:"Safely escape or unescape URI characters for web transmission.",cat:"developer",path:"#",status:"coming-soon",searches:"550K/mo"},{id:"jwt-decode",name:"JWT Decoder",desc:"Inspect header and payload claims of JSON Web Tokens.",cat:"developer",path:"#",status:"coming-soon",searches:"400K/mo"},{id:"cron-gen",name:"Cron Generator",desc:"Build and translate cron schedule expressions visually.",cat:"developer",path:"#",status:"coming-soon",searches:"320K/mo"},{id:"diff-check",name:"Diff Checker",desc:"Compare two sets of text or code to highlight exact differences.",cat:"developer",path:"#",status:"coming-soon",searches:"480K/mo"},{id:"hash-gen",name:"Hash Generator",desc:"Compute MD5, SHA-1, and SHA-256 hashes from text inputs.",cat:"developer",path:"#",status:"coming-soon",searches:"400K/mo"},{id:"sip-calc",name:"SIP Calculator",desc:"Calculate mutual fund returns and wealth projection over time.",cat:"finance",path:"#",status:"coming-soon",searches:"10M+/mo"},{id:"emi-calc",name:"EMI Calculator",desc:"Compute monthly installments for home, car, and personal loans.",cat:"finance",path:"#",status:"coming-soon",searches:"8M+/mo"},{id:"gst-calc",name:"GST Calculator",desc:"Add or reverse calculate standard Indian GST rates instantly.",cat:"finance",path:"#",status:"coming-soon",searches:"5M+/mo"},{id:"tax-calc",name:"Income Tax Calculator",desc:"Calculate tax liability under Old and New Indian tax regimes.",cat:"finance",path:"#",status:"coming-soon",searches:"4M+/mo"},{id:"fd-calc",name:"FD / RD Calculator",desc:"Estimate maturity amounts for Fixed and Recurring Deposits.",cat:"finance",path:"#",status:"coming-soon",searches:"3M+/mo"},{id:"hra-calc",name:"HRA Calculator",desc:"Calculate House Rent Allowance exemptions for tax planning.",cat:"finance",path:"#",status:"coming-soon",searches:"2M+/mo"},{id:"cagr-calc",name:"CAGR Calculator",desc:"Determine the Compound Annual Growth Rate of investments.",cat:"finance",path:"#",status:"coming-soon",searches:"1.5M+/mo"},{id:"nps-calc",name:"NPS Calculator",desc:"Project retirement corpus and pension annuities through NPS.",cat:"finance",path:"#",status:"coming-soon",searches:"1M+/mo"},{id:"word-count",name:"Word Counter",desc:"Count words, characters, and estimate reading/speaking time.",cat:"text",path:"/tools/word-counter",status:"live",searches:"900K/mo"},{id:"case-conv",name:"Case Converter",desc:"Transform text to UPPER, lower, Title Case, or camelCase.",cat:"text",path:"#",status:"coming-soon",searches:"600K/mo"},{id:"lorem-gen",name:"Lorem Ipsum Generator",desc:"Generate dummy text paragraphs for UI placeholder testing.",cat:"text",path:"#",status:"coming-soon",searches:"550K/mo"},{id:"slug-conv",name:"Text to Slug",desc:"Convert standard string titles into URL-friendly hypenated slugs.",cat:"text",path:"#",status:"coming-soon",searches:"250K/mo"},{id:"md-html",name:"Markdown to HTML",desc:"Compile raw markdown syntax into clean, standard HTML code.",cat:"text",path:"#",status:"coming-soon",searches:"350K/mo"},{id:"num-words",name:"Number to Words",desc:"Translate digits into written words using the Indian numbering system.",cat:"text",path:"#",status:"coming-soon",searches:"500K/mo"},{id:"binary-conv",name:"Binary / Hex Converter",desc:"Translate text and numbers into Binary, Hexadecimal, or Octal.",cat:"text",path:"#",status:"coming-soon",searches:"420K/mo"},{id:"business-name",name:"Business Name Generator",desc:"Use AI heuristics to brainstorm available company names.",cat:"text",path:"#",status:"coming-soon",searches:"850K/mo"},{id:"plagiarism",name:"Plagiarism Checker",desc:"Scan text against public indices to identify duplicate content.",cat:"seo",path:"#",status:"coming-soon",searches:"5M+/mo"},{id:"sitemap-gen",name:"XML Sitemap Generator",desc:"Crawl endpoints to build structural sitemaps for search engines.",cat:"seo",path:"#",status:"coming-soon",searches:"400K/mo"},{id:"kw-density",name:"Keyword Density Checker",desc:"Analyze content to prevent keyword stuffing and optimize ratios.",cat:"seo",path:"#",status:"coming-soon",searches:"350K/mo"},{id:"robots-txt",name:"Robots.txt Generator",desc:"Create compliant spider directives to manage web crawler access.",cat:"seo",path:"#",status:"coming-soon",searches:"220K/mo"}]};var R=new Se,{categories:lr,tools:dr}=Et;R.get("/",e=>e.html(n(I,{title:"ToolStaq | Instant Developer Tools Hub",children:[n("section",{class:"hero-container",children:[n("h1",{class:"hero-title",children:["All your developer tools for",n("div",{class:"ticker-wrapper",children:n("ul",{class:"ticker-list",children:[n("li",{class:"ticker-item",children:"JSON Parsing"}),n("li",{class:"ticker-item",children:"Data Encryption"}),n("li",{class:"ticker-item",children:"Text Analytics"}),n("li",{class:"ticker-item",children:"JSON Parsing"})]})})]}),n("p",{style:"font-size: 18px; line-height: 1.6; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;",children:"Privacy-first, edge-rendered developer utilities. Zero hydration payload tracking, zero background processing lags."})]}),n("section",{class:"container",style:"margin-top: var(--space-48);",children:[n("h2",{style:"font-size: 20px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-24); color: var(--color-text-secondary); font-weight: 700;",children:"Select a Workspace"}),n("div",{class:"categories-container",children:lr.map(t=>n("div",{class:"category-card","data-category-target":t.id,role:"button",tabindex:"0",children:[n("h3",{children:t.name}),n("p",{children:t.desc})]}))})]}),n("section",{id:"tools-display-panel",class:"container",style:"display: none; padding-bottom: var(--space-64);",children:[n("div",{class:"tools-workspace-header",children:[n("h2",{id:"active-category-title",style:"font-size: 36px; font-weight: 800; margin: 0;",children:"Utilities Portfolio"}),n("span",{class:"tool-badge",style:"background: var(--color-bg-secondary); border-color: var(--color-action-default); color: var(--color-action-default);",children:"ACTIVE SELECTION"})]}),n("div",{class:"tools-grid",children:dr.map(t=>n("div",{class:`tool-card tool-item-card data-cat-${t.cat}`,"data-status":t.status,children:[n("div",{class:"tool-header",style:"display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-16);",children:[n("span",{class:`tool-badge ${t.status==="coming-soon"?"coming-soon":""}`,style:t.status==="live"?"color:#10b981;border-color:rgba(16,185,129,0.2);":"color:#94a3b8;",children:t.status==="live"?"EDGE LIVE":"PIPELINE"}),t.searches&&n("span",{style:"font-size: 13px; font-weight: 700; color: var(--color-accent-warning); display: flex; align-items: center; gap: 4px; opacity: 0.9;",children:["\u{1F525} ",t.searches]})]}),n("div",{style:"flex-grow: 1;",children:[n("h3",{class:"tool-name",style:"margin-top: 0;",children:t.name}),n("p",{class:"tool-desc",style:"line-height: 1.6;",children:t.desc})]}),n("div",{class:"tool-footer",style:"margin-top: var(--space-24); border-top: none;",children:t.status==="live"?n("a",{href:t.path,class:"btn btn-primary",style:"width: 100%; justify-content: center;",children:"Launch Workspace"}):n("button",{onclick:`alert('The ${t.name} integration pipeline is active and scheduled for edge deployment.')`,class:"btn",style:"width: 100%; justify-content: center; opacity: 0.5; cursor: not-allowed;",children:"In Development"})})]}))})]}),n("script",{dangerouslySetInnerHTML:{__html:`
        document.addEventListener('DOMContentLoaded', () => {
          const cards = document.querySelectorAll('.category-card');
          const workspace = document.getElementById('tools-display-panel');
          const workspaceTitle = document.getElementById('active-category-title');
          const allToolItems = document.querySelectorAll('.tool-item-card');

          cards.forEach(card => {
            card.addEventListener('click', () => {
              const selectedCat = card.getAttribute('data-category-target');
              
              cards.forEach(c => c.classList.remove('active'));
              card.classList.add('active');

              const elementHeading = card.querySelector('h3').textContent;
              workspaceTitle.textContent = elementHeading;

              workspace.style.display = 'block';

              let visibleCount = 0;
              allToolItems.forEach(tool => {
                if(tool.classList.contains('data-cat-' + selectedCat)) {
                  tool.classList.add('visible');
                  visibleCount++;
                } else {
                  tool.classList.remove('visible');
                }
              });

              // Scroll to grid smoothly
              const y = workspace.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({top: y, behavior: 'smooth'});
            });
          });
        });
      `}})]})));R.get("/tools/json",e=>e.html(n(xt,{})));R.get("/tools/json-formatter",e=>e.redirect("/tools/json"));R.get("/tools/word-counter",e=>e.html(n(I,{title:"Word Counter & Character Counter | ToolStaq",description:"Analyze your text length, count characters, words, sentences, paragraphs, reading speed, and keyword occurrences instantly.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Word & Character Counter"}),n("p",{class:"workspace-desc",children:"Analyze your writing speed and complexity metrics in real-time. Simply type or paste your content."})]}),n("div",{class:"stats-grid",children:[n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-words",children:"0"}),n("div",{class:"stat-label",children:"Words"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-chars",children:"0"}),n("div",{class:"stat-label",children:"Characters"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-sentences",children:"0"}),n("div",{class:"stat-label",children:"Sentences"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-paragraphs",children:"0"}),n("div",{class:"stat-label",children:"Paragraphs"})]})]}),n("div",{class:"form-group",children:n("textarea",{class:"text-area",id:"text-input",placeholder:"Start typing or paste your essay, email, or article here...",style:"height: 240px;"})}),n("div",{class:"stats-grid",style:"grid-template-columns: repeat(2, 1fr); margin-top: 1rem;",children:[n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-read-time",children:"0m 0s"}),n("div",{class:"stat-label",children:"Estimated Reading Time"})]}),n("div",{class:"stat-box",children:[n("div",{class:"stat-value",id:"stat-speak-time",children:"0m 0s"}),n("div",{class:"stat-label",children:"Estimated Speaking Time"})]})]}),n("div",{class:"result-panel",id:"density-panel",style:"display:none;",children:[n("div",{class:"result-title",style:"color: var(--primary);",children:"Top Keyword Density"}),n("div",{id:"density-list",style:"font-size:0.9rem; display:flex; flex-wrap:wrap; gap:0.5rem;"})]})]}),n("div",{class:"info-sidebar",children:[n("div",{class:"sidebar-card",children:[n("h3",{children:"\u2139\uFE0F Calculations"}),n("p",{children:"Reading time is computed at 225 words per minute. Speaking time is based on 130 words per minute."})]}),n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F310} Clean Content"}),n("p",{children:"Extra whitespaces, double tabs, and formatting marks are auto-normalized in the telemetry counters."})]})]})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));R.get("/tools/base64",e=>e.html(n(I,{title:"Base64 Encoder & Decoder | ToolStaq",description:"Instantly convert plain text to Base64 code or decode Base64 strings back to text safely and quickly.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Base64 Encoder / Decoder"}),n("p",{class:"workspace-desc",children:"Securely encode regular string data into Base64 format, or convert standard Base64 back into human-readable text."})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"base64-input",children:"Input Data:"}),n("textarea",{class:"text-area",id:"base64-input",placeholder:"Paste or type content here...",style:"height: 180px;"})]}),n("div",{class:"btn-row",children:[n("button",{class:"btn btn-primary",id:"btn-encode",children:"Encode Base64"}),n("button",{class:"btn",id:"btn-decode",children:"Decode Base64"}),n("button",{class:"btn",id:"btn-base64-clear",style:"margin-left: auto;",children:"Clear"})]}),n("div",{class:"result-panel",id:"base64-result-panel",style:"display: none;",children:[n("div",{class:"result-title",children:[n("span",{children:"Result"}),n("button",{class:"btn",id:"btn-base64-copy",style:"padding: 0.2rem 0.6rem; font-size: 0.75rem;",children:"Copy Result"})]}),n("textarea",{class:"text-area",id:"base64-output",readonly:!0,style:"height: 180px; background: rgba(0,0,0,0.3); font-family: monospace;"})]})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F524} Base64 Basics"}),n("p",{children:"Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));R.get("/tools/uuid-generator",e=>e.html(n(I,{title:"UUID & ULID Generator | ToolStaq",description:"Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"UUID / ULID Generator"}),n("p",{class:"workspace-desc",children:"Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys."})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"generator-type",children:"Identifier Type:"}),n("select",{id:"generator-type",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px;",children:[n("option",{value:"uuid",children:"UUID v4 (Standard Unique Key)"}),n("option",{value:"ulid",children:"ULID (Lexicographically Sortable)"})]})]}),n("div",{class:"form-group",children:[n("label",{class:"form-label",for:"generator-count",children:"Quantity to generate (1 - 100):"}),n("input",{type:"number",id:"generator-count",min:"1",max:"100",value:"5",class:"search-input",style:"padding: 0.6rem 1rem; border-radius: 8px; width: 120px;"})]}),n("div",{class:"btn-row",children:[n("button",{class:"btn btn-primary",id:"btn-generate",children:"Generate IDs"}),n("button",{class:"btn",id:"btn-gen-copy",style:"margin-left: auto;",children:"Copy All"})]}),n("div",{class:"result-panel",style:"margin-top: 1.5rem;",children:n("textarea",{class:"text-area",id:"generator-output",readonly:!0,style:"height: 200px; background: rgba(0,0,0,0.3); font-family: monospace;"})})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u2139\uFE0F ULID vs UUID"}),n("p",{children:"ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));R.get("/tools/password-generator",e=>e.html(n(I,{title:"Random Password Generator | ToolStaq",description:"Create cryptographically secure random passwords with adjustable length and character types.",children:[n("div",{class:"container",children:[n("a",{href:"/",class:"back-btn",children:"\u2190 Back to Tools Hub"}),n("div",{class:"tool-view-layout",children:[n("div",{class:"workspace-panel",children:[n("div",{class:"workspace-header",children:[n("h1",{class:"workspace-title",children:"Random Password Generator"}),n("p",{class:"workspace-desc",children:"Generate secure passwords using client-side Web Cryptography APIs. Protect your online accounts with robust entropy."})]}),n("div",{class:"form-group",style:"background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--card-border);",children:[n("input",{type:"text",id:"pwd-display",readonly:!0,style:"font-family: monospace; font-size: 1.25rem; background: transparent; border: none; outline: none; color: #ffffff; width: 100%; letter-spacing: 0.05em;"}),n("button",{class:"btn btn-primary",id:"btn-pwd-copy",style:"padding: 0.5rem 1rem; font-size: 0.85rem; flex-shrink: 0;",children:"Copy"})]}),n("div",{class:"form-group",children:[n("div",{style:"display: flex; justify-content: space-between; align-items: center;",children:n("span",{class:"form-label",style:"margin-bottom: 0;",children:["Password Length: ",n("strong",{id:"length-val",style:"color: var(--primary);",children:"16"})]})}),n("input",{type:"range",id:"pwd-length",class:"range-slider",min:"6",max:"64",value:"16"})]}),n("div",{class:"checkbox-group",children:[n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-upper",class:"checkbox-input",checked:!0}),"Include Uppercase (A-Z)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-lower",class:"checkbox-input",checked:!0}),"Include Lowercase (a-z)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-nums",class:"checkbox-input",checked:!0}),"Include Numbers (0-9)"]}),n("label",{class:"checkbox-label",children:[n("input",{type:"checkbox",id:"pwd-syms",class:"checkbox-input",checked:!0}),"Include Symbols (!@#$%^&*)"]})]}),n("div",{class:"form-group",style:"margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;",children:[n("span",{class:"form-label",style:"margin-bottom: 0;",children:"Security Strength:"}),n("span",{id:"pwd-strength",class:"tool-badge",style:"font-weight: 700; padding: 0.3rem 0.8rem;",children:"STRONG"})]}),n("div",{class:"btn-row",style:"margin-top: 1.5rem;",children:n("button",{class:"btn",id:"btn-pwd-generate",style:"width: 100%; justify-content: center; background: rgba(255,255,255,0.04); border-color: var(--primary);",children:"\u{1F504} Re-generate Password"})})]}),n("div",{class:"info-sidebar",children:n("div",{class:"sidebar-card",children:[n("h3",{children:"\u{1F512} Local Safety"}),n("p",{children:"We use the browser's native `window.crypto.getRandomValues` function. This ensures the output is random and stays completely offline."})]})})]})]}),n("script",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})));var On={async fetch(e,t,s){try{let r=await t.ASSETS.fetch(e);if(r.status!==404)return r}catch{}return R.fetch(e,t,s)},scheduled:async(e,t,s)=>{console.log(`Running scheduled background buffer cleanup task: ${e.cron}`)}};export{R as app,On as default};
