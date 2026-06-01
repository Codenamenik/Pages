(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function eu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},Qr=[],ri=()=>{},Qh=()=>!1,Mo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tu=n=>n.startsWith("onUpdate:"),nn=Object.assign,nu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Sm=Object.prototype.hasOwnProperty,ht=(n,e)=>Sm.call(n,e),qe=Array.isArray,es=n=>yo(n)==="[object Map]",ed=n=>yo(n)==="[object Set]",Ye=n=>typeof n=="function",Ut=n=>typeof n=="string",Ji=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",td=n=>(yt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),nd=Object.prototype.toString,yo=n=>nd.call(n),bm=n=>yo(n).slice(8,-1),id=n=>yo(n)==="[object Object]",iu=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Bs=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Mm=/-\w/g,Dn=Eo(n=>n.replace(Mm,e=>e.slice(1).toUpperCase())),ym=/\B([A-Z])/g,Er=Eo(n=>n.replace(ym,"-$1").toLowerCase()),To=Eo(n=>n.charAt(0).toUpperCase()+n.slice(1)),$o=Eo(n=>n?`on${To(n)}`:""),Yi=(n,e)=>!Object.is(n,e),Ga=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ru=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ef;const Ao=()=>ef||(ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zt(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ut(i)?wm(i):Zt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ut(n)||yt(n))return n}const Em=/;(?![^(]*\))/g,Tm=/:([^]+)/,Am=/\/\*[^]*?\*\//g;function wm(n){const e={};return n.replace(Am,"").split(Em).forEach(t=>{if(t){const i=t.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function it(n){let e="";if(Ut(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=it(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=eu(Rm);function sd(n){return!!n||n===""}const ad=n=>!!(n&&n.__v_isRef===!0),Et=n=>Ut(n)?n:n==null?"":qe(n)||yt(n)&&(n.toString===nd||!Ye(n.toString))?ad(n)?Et(n.value):JSON.stringify(n,od,2):String(n),od=(n,e)=>ad(e)?od(n,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[qo(i,s)+" =>"]=r,t),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qo(t))}:Ji(e)?qo(e):yt(e)&&!qe(e)&&!id(e)?String(e):e,qo=(n,e="")=>{var t;return Ji(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let fn;class Pm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){++this._on===1&&(this.prevScope=fn,fn=this)}off(){this._on>0&&--this._on===0&&(fn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dm(){return fn}let bt;const Yo=new WeakSet;class ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&fn.active&&fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yo.has(this)&&(Yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tf(this),fd(this);const e=bt,t=Bn;bt=this,Bn=!0;try{return this.fn()}finally{hd(this),bt=e,Bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ou(e);this.deps=this.depsTail=void 0,tf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let cd=0,zs,Vs;function ud(n,e=!1){if(n.flags|=8,e){n.next=Vs,Vs=n;return}n.next=zs,zs=n}function su(){cd++}function au(){if(--cd>0)return;if(Vs){let e=Vs;for(Vs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zs;){let e=zs;for(zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ou(i),Im(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Vl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function dd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qs)||(n.globalVersion=qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vl(n))))return;n.flags|=2;const e=n.dep,t=bt,i=Bn;bt=n,Bn=!0;try{fd(n);const r=n.fn(n._value);(e.version===0||Yi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{bt=t,Bn=i,hd(n),n.flags&=-3}}function ou(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ou(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Im(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Bn=!0;const pd=[];function Ai(){pd.push(Bn),Bn=!1}function wi(){const n=pd.pop();Bn=n===void 0?!0:n}function tf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let qs=0;class Lm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Bn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new Lm(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,md(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,qs++,this.notify(e)}notify(e){su();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{au()}}}function md(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)md(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Hl=new WeakMap,xr=Symbol(""),Gl=Symbol(""),Ys=Symbol("");function jt(n,e,t){if(Bn&&bt){let i=Hl.get(n);i||Hl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new lu),r.map=i,r.key=t),r.track()}}function Mi(n,e,t,i,r,s){const a=Hl.get(n);if(!a){qs++;return}const o=l=>{l&&l.trigger()};if(su(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&iu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Ys||!Ji(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ys)),e){case"add":l?c&&o(a.get("length")):(o(a.get(xr)),es(n)&&o(a.get(Gl)));break;case"delete":l||(o(a.get(xr)),es(n)&&o(a.get(Gl)));break;case"set":es(n)&&o(a.get(xr));break}}au()}function Cr(n){const e=ft(n);return e===n?e:(jt(e,"iterate",Ys),Cn(n)?e:e.map(Hn))}function wo(n){return jt(n=ft(n),"iterate",Ys),n}function Hi(n,e){return Ri(n)?Sr(n)?ss(Hn(e)):ss(e):Hn(e)}const Um={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,n=>Hi(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>qe(e)?Cr(e):e))},entries(){return jo(this,"entries",n=>(n[1]=Hi(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>Hi(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>Hi(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>Hi(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...n){return bs(this,"push",n)},reduce(n,...e){return nf(this,"reduce",n,e)},reduceRight(n,...e){return nf(this,"reduceRight",n,e)},shift(){return bs(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return bs(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return bs(this,"unshift",n)},values(){return jo(this,"values",n=>Hi(this,n))}};function jo(n,e,t){const i=wo(n),r=i[e]();return i!==n&&!Cn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Nm=Array.prototype;function pi(n,e,t,i,r,s){const a=wo(n),o=a!==n&&!Cn(n),l=a[e];if(l!==Nm[e]){const f=l.apply(n,s);return o?Hn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Hi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function nf(n,e,t,i){const r=wo(n);let s=t;return r!==n&&(Cn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Hi(n,o),l,n)}),r[e](s,...i)}function Ko(n,e,t){const i=ft(n);jt(i,"iterate",Ys);const r=i[e](...t);return(r===-1||r===!1)&&fu(t[0])?(t[0]=ft(t[0]),i[e](...t)):r}function bs(n,e,t=[]){Ai(),su();const i=ft(n)[e].apply(n,t);return au(),wi(),i}const Fm=eu("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ji));function Om(n){Ji(n)||(n=String(n));const e=ft(this);return jt(e,"has",n),e.hasOwnProperty(n)}class _d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?qm:bd:s?Sd:xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!r){let l;if(a&&(l=Um[t]))return l;if(t==="hasOwnProperty")return Om}const o=Reflect.get(e,t,en(e)?e:i);if((Ji(t)?gd.has(t):Fm(t))||(r||jt(e,"get",t),s))return o;if(en(o)){const l=a&&iu(t)?o:o.value;return r&&yt(l)?Xl(l):l}return yt(o)?r?Xl(o):Ro(o):o}}class vd extends _d{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=qe(e)&&iu(t);if(!this._isShallow){const c=Ri(s);if(!Cn(i)&&!Ri(i)&&(s=ft(s),i=ft(i)),!a&&en(s)&&!en(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,en(e)?e:r);return e===ft(r)&&(o?Yi(i,s)&&Mi(e,"set",t,i):Mi(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Mi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ji(t)||!gd.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",qe(e)?"length":xr),Reflect.ownKeys(e)}}class km extends _d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bm=new vd,zm=new km,Vm=new vd(!0);const Wl=n=>n,ha=n=>Reflect.getPrototypeOf(n);function Hm(n,e,t){return function(...i){const r=this.__v_raw,s=ft(r),a=es(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Wl:e?ss:Hn;return!e&&jt(s,"iterate",l?Gl:xr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function da(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gm(n,e){const t={get(r){const s=this.__v_raw,a=ft(s),o=ft(r);n||(Yi(r,o)&&jt(a,"get",r),jt(a,"get",o));const{has:l}=ha(a),c=e?Wl:n?ss:Hn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&jt(ft(r),"iterate",xr),r.size},has(r){const s=this.__v_raw,a=ft(s),o=ft(r);return n||(Yi(r,o)&&jt(a,"has",r),jt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ft(o),c=e?Wl:n?ss:Hn;return!n&&jt(l,"iterate",xr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return nn(t,n?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(r){!e&&!Cn(r)&&!Ri(r)&&(r=ft(r));const s=ft(this);return ha(s).has.call(s,r)||(s.add(r),Mi(s,"add",r,r)),this},set(r,s){!e&&!Cn(s)&&!Ri(s)&&(s=ft(s));const a=ft(this),{has:o,get:l}=ha(a);let c=o.call(a,r);c||(r=ft(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Yi(s,u)&&Mi(a,"set",r,s):Mi(a,"add",r,s),this},delete(r){const s=ft(this),{has:a,get:o}=ha(s);let l=a.call(s,r);l||(r=ft(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Mi(s,"delete",r,void 0),c},clear(){const r=ft(this),s=r.size!==0,a=r.clear();return s&&Mi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hm(r,n,e)}),t}function cu(n,e){const t=Gm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ht(t,r)&&r in i?t:i,r,s)}const Wm={get:cu(!1,!1)},Xm={get:cu(!1,!0)},$m={get:cu(!0,!1)};const xd=new WeakMap,Sd=new WeakMap,bd=new WeakMap,qm=new WeakMap;function Ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jm(n){return n.__v_skip||!Object.isExtensible(n)?0:Ym(bm(n))}function Ro(n){return Ri(n)?n:uu(n,!1,Bm,Wm,xd)}function Md(n){return uu(n,!1,Vm,Xm,Sd)}function Xl(n){return uu(n,!0,zm,$m,bd)}function uu(n,e,t,i,r){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=jm(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Sr(n){return Ri(n)?Sr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function Cn(n){return!!(n&&n.__v_isShallow)}function fu(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function Km(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&rd(n,"__v_skip",!0),n}const Hn=n=>yt(n)?Ro(n):n,ss=n=>yt(n)?Xl(n):n;function en(n){return n?n.__v_isRef===!0:!1}function Ue(n){return yd(n,!1)}function Zm(n){return yd(n,!0)}function yd(n,e){return en(n)?n:new Jm(n,e)}class Jm{constructor(e,t){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:Hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Cn(e)||Ri(e);e=i?e:ft(e),Yi(e,t)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function ti(n){return en(n)?n.value:n}const Qm={get:(n,e,t)=>e==="__v_raw"?n:ti(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return en(r)&&!en(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ed(n){return Sr(n)?n:new Proxy(n,Qm)}class eg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return ud(this,!0),!0}get value(){const e=this.dep.track();return dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tg(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new eg(i,r,t)}const pa={},no=new WeakMap;let cr;function ng(n,e=!1,t=cr){if(t){let i=no.get(t);i||no.set(t,i=[]),i.push(n)}}function ig(n,e,t=xt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:Cn(S)||r===!1||r===0?yi(S,1):yi(S);let u,f,h,p,g=!1,b=!1;if(en(n)?(f=()=>n.value,g=Cn(n)):Sr(n)?(f=()=>c(n),g=!0):qe(n)?(b=!0,g=n.some(S=>Sr(S)||Cn(S)),f=()=>n.map(S=>{if(en(S))return S.value;if(Sr(S))return c(S);if(Ye(S))return l?l(S,2):S()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ai();try{h()}finally{wi()}}const S=cr;cr=u;try{return l?l(n,3,[p]):n(p)}finally{cr=S}}:f=ri,e&&r){const S=f,P=r===!0?1/0:r;f=()=>yi(S(),P)}const m=Dm(),d=()=>{u.stop(),m&&m.active&&nu(m.effects,u)};if(s&&e){const S=e;e=(...P)=>{S(...P),d()}}let v=b?new Array(n.length).fill(pa):pa;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const P=u.run();if(r||g||(b?P.some((A,L)=>Yi(A,v[L])):Yi(P,v))){h&&h();const A=cr;cr=u;try{const L=[P,v===pa?void 0:b&&v[0]===pa?[]:v,p];v=P,l?l(e,3,L):e(...L)}finally{cr=A}}}else u.run()};return o&&o(E),u=new ld(f),u.scheduler=a?()=>a(E,!1):E,p=S=>ng(S,!1,u),h=u.onStop=()=>{const S=no.get(u);if(S){if(l)l(S,4);else for(const P of S)P();no.delete(u)}},e?i?E(!0):v=u.run():a?a(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function yi(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,en(n))yi(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)yi(n[i],e,t);else if(ed(n)||es(n))n.forEach(i=>{yi(i,e,t)});else if(id(n)){for(const i in n)yi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&yi(n[i],e,t)}return n}function na(n,e,t,i){try{return i?n(...i):n()}catch(r){Co(r,e,t)}}function li(n,e,t,i){if(Ye(n)){const r=na(n,e,t,i);return r&&td(r)&&r.catch(s=>{Co(s,e,t)}),r}if(qe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(li(n[s],e,t,i));return r}}function Co(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||xt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ai(),na(s,null,10,[n,l,c]),wi();return}}rg(n,t,r,i,a)}function rg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let Kn=-1;const ts=[];let Gi=null,jr=0;const Td=Promise.resolve();let io=null;function Ht(n){const e=io||Td;return n?e.then(this?n.bind(this):n):e}function sg(n){let e=Kn+1,t=cn.length;for(;e<t;){const i=e+t>>>1,r=cn[i],s=js(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function hu(n){if(!(n.flags&1)){const e=js(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=js(t)?cn.push(n):cn.splice(sg(e),0,n),n.flags|=1,Ad()}}function Ad(){io||(io=Td.then(Rd))}function ag(n){qe(n)?ts.push(...n):Gi&&n.id===-1?Gi.splice(jr+1,0,n):n.flags&1||(ts.push(n),n.flags|=1),Ad()}function rf(n,e,t=Kn+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wd(n){if(ts.length){const e=[...new Set(ts)].sort((t,i)=>js(t)-js(i));if(ts.length=0,Gi){Gi.push(...e);return}for(Gi=e,jr=0;jr<Gi.length;jr++){const t=Gi[jr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gi=null,jr=0}}const js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rd(n){try{for(Kn=0;Kn<cn.length;Kn++){const e=cn[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),na(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<cn.length;Kn++){const e=cn[Kn];e&&(e.flags&=-2)}Kn=-1,cn.length=0,wd(),io=null,(cn.length||ts.length)&&Rd()}}let Sn=null,Cd=null;function ro(n){const e=Sn;return Sn=n,Cd=n&&n.type.__scopeId||null,e}function Yt(n,e=Sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&oo(-1);const s=ro(e);let a;try{a=n(...r)}finally{ro(s),i._d&&oo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Mn(n,e){if(Sn===null)return n;const t=Lo(Sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=xt]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&yi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function tr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ai(),li(l,t,8,[n.el,o,n,e]),wi())}}function Wa(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function zn(n,e,t=!1){const i=s0();if(i||ns){let r=ns?ns._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const og=Symbol.for("v-scx"),lg=()=>zn(og);function si(n,e,t){return Pd(n,e,t)}function Pd(n,e,t=xt){const{immediate:i,deep:r,flush:s,once:a}=t,o=nn({},t),l=e&&i||!e&&s!=="post";let c;if(Zs){if(s==="sync"){const p=lg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const u=Kt;o.call=(p,g,b)=>li(p,u,g,b);let f=!1;s==="post"?o.scheduler=p=>{xn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,g)=>{g?p():hu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=ig(n,e,o);return Zs&&(c?c.push(h):l&&h()),h}function cg(n,e,t){const i=this.proxy,r=Ut(n)?n.includes(".")?Dd(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const a=sa(this),o=Pd(r,s.bind(i),t);return a(),o}function Dd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const ug=Symbol("_vte"),fg=n=>n.__isTeleport,hg=Symbol("_leaveCb");function du(n,e){n.shapeFlag&6&&n.component?(n.transition=e,du(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Id(n,e){return Ye(n)?nn({name:n.name},e,{setup:n}):n}function Ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const so=new WeakMap;function Hs(n,e,t,i,r=!1){if(qe(n)){n.forEach((g,b)=>Hs(g,e&&(qe(e)?e[b]:e),t,i,r));return}if(Gs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Lo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===xt?o.refs={}:o.refs,f=o.setupState,h=ft(f),p=f===xt?Qh:g=>ht(h,g);if(c!=null&&c!==l){if(sf(e),Ut(c))u[c]=null,p(c)&&(f[c]=null);else if(en(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Ye(l))na(l,o,12,[a,u]);else{const g=Ut(l),b=en(l);if(g||b){const m=()=>{if(n.f){const d=g?p(l)?f[l]:u[l]:l.value;if(r)qe(d)&&nu(d,s);else if(qe(d))d.includes(s)||d.push(s);else if(g)u[l]=[s],p(l)&&(f[l]=u[l]);else{const v=[s];l.value=v,n.k&&(u[n.k]=v)}}else g?(u[l]=a,p(l)&&(f[l]=a)):b&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{m(),so.delete(n)};d.id=-1,so.set(n,d),xn(d,t)}else sf(n),m()}}}function sf(n){const e=so.get(n);e&&(e.flags|=8,so.delete(n))}Ao().requestIdleCallback;Ao().cancelIdleCallback;const Gs=n=>!!n.type.__asyncLoader,Ud=n=>n.type.__isKeepAlive;function dg(n,e){Nd(n,"a",e)}function pg(n,e){Nd(n,"da",e)}function Nd(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ud(r.parent.vnode)&&mg(i,e,t,r),r=r.parent}}function mg(n,e,t,i){const r=Po(e,n,i,!0);Tr(()=>{nu(i[e],r)},t)}function Po(n,e,t=Kt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ai();const o=sa(t),l=li(e,t,n,a);return o(),wi(),l});return i?r.unshift(s):r.push(s),s}}const Di=n=>(e,t=Kt)=>{(!Zs||n==="sp")&&Po(n,(...i)=>e(...i),t)},gg=Di("bm"),fi=Di("m"),_g=Di("bu"),vg=Di("u"),pu=Di("bum"),Tr=Di("um"),xg=Di("sp"),Sg=Di("rtg"),bg=Di("rtc");function Mg(n,e=Kt){Po("ec",n,e)}const Fd="components",yg="directives";function ia(n,e){return Od(Fd,n,!0,e)||n}const Eg=Symbol.for("v-ndc");function ra(n){return Od(yg,n)}function Od(n,e,t=!0,i=!1){const r=Sn||Kt;if(r){const s=r.type;if(n===Fd){const o=u0(s,!1);if(o&&(o===e||o===Dn(e)||o===To(Dn(e))))return s}const a=af(r[n]||s[n],e)||af(r.appContext[n],e);return!a&&i?s:a}}function af(n,e){return n&&(n[e]||n[Dn(e)]||n[To(Dn(e))])}function ci(n,e,t,i){let r;const s=t,a=qe(n);if(a||Ut(n)){const o=a&&Sr(n);let l=!1,c=!1;o&&(l=!Cn(n),c=Ri(n),n=wo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ss(Hn(n[u])):Hn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(yt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const $l=n=>n?np(n)?Lo(n):$l(n.parent):null,Ws=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{hu(n.update)}),$nextTick:n=>n.n||(n.n=Ht.bind(n.proxy)),$watch:n=>cg.bind(n)}),Zo=(n,e)=>n!==xt&&!n.__isScriptSetup&&ht(n,e),Tg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zo(i,e))return a[e]=1,i[e];if(r!==xt&&ht(r,e))return a[e]=2,r[e];if(ht(s,e))return a[e]=3,s[e];if(t!==xt&&ht(t,e))return a[e]=4,t[e];ql&&(a[e]=0)}}const c=Ws[e];let u,f;if(c)return e==="$attrs"&&jt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==xt&&ht(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zo(r,e)?(r[e]=t,!0):i!==xt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==xt&&o[0]!=="$"&&ht(n,o)||Zo(e,o)||ht(s,o)||ht(i,o)||ht(Ws,o)||ht(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function of(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ql=!0;function Ag(n){const e=Bd(n),t=n.proxy,i=n.ctx;ql=!1,e.beforeCreate&&lf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:b,deactivated:m,beforeDestroy:d,beforeUnmount:v,destroyed:E,unmounted:S,render:P,renderTracked:A,renderTriggered:L,errorCaptured:x,serverPrefetch:C,expose:ie,inheritAttrs:U,components:H,directives:G,filters:ee}=e;if(c&&wg(c,i,null),a)for(const O in a){const ae=a[O];Ye(ae)&&(i[O]=ae.bind(t))}if(r){const O=r.call(t,t);yt(O)&&(n.data=Ro(O))}if(ql=!0,s)for(const O in s){const ae=s[O],he=Ye(ae)?ae.bind(t,t):Ye(ae.get)?ae.get.bind(t,t):ri,_e=!Ye(ae)&&Ye(ae.set)?ae.set.bind(t):ri,Me=At({get:he,set:_e});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>Me.value,set:xe=>Me.value=xe})}if(o)for(const O in o)kd(o[O],i,t,O);if(l){const O=Ye(l)?l.call(t):l;Reflect.ownKeys(O).forEach(ae=>{Wa(ae,O[ae])})}u&&lf(u,n,"c");function X(O,ae){qe(ae)?ae.forEach(he=>O(he.bind(t))):ae&&O(ae.bind(t))}if(X(gg,f),X(fi,h),X(_g,p),X(vg,g),X(dg,b),X(pg,m),X(Mg,x),X(bg,A),X(Sg,L),X(pu,v),X(Tr,S),X(xg,C),qe(ie))if(ie.length){const O=n.exposed||(n.exposed={});ie.forEach(ae=>{Object.defineProperty(O,ae,{get:()=>t[ae],set:he=>t[ae]=he,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===ri&&(n.render=P),U!=null&&(n.inheritAttrs=U),H&&(n.components=H),G&&(n.directives=G),C&&Ld(n)}function wg(n,e,t=ri){qe(n)&&(n=Yl(n));for(const i in n){const r=n[i];let s;yt(r)?"default"in r?s=zn(r.from||i,r.default,!0):s=zn(r.from||i):s=zn(r),en(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function lf(n,e,t){li(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function kd(n,e,t,i){let r=i.includes(".")?Dd(t,i):()=>t[i];if(Ut(n)){const s=e[n];Ye(s)&&si(r,s)}else if(Ye(n))si(r,n.bind(t));else if(yt(n))if(qe(n))n.forEach(s=>kd(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&si(r,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ao(l,c,a,!0)),ao(l,e,a)),yt(e)&&s.set(e,l),l}function ao(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ao(n,s,t,!0),r&&r.forEach(a=>ao(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Rg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Rg={data:cf,props:uf,emits:uf,methods:Ns,computed:Ns,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Ns,directives:Ns,watch:Pg,provide:cf,inject:Cg};function cf(n,e){return e?n?function(){return nn(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Cg(n,e){return Ns(Yl(n),Yl(e))}function Yl(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Ns(n,e){return n?nn(Object.create(null),n,e):e}function uf(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:nn(Object.create(null),of(n),of(e??{})):e}function Pg(n,e){if(!n)return e;if(!e)return n;const t=nn(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function zd(){return{app:null,config:{isNativeTag:Qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function Ig(n,e){return function(i,r=null){Ye(i)||(i=nn({},i)),r!=null&&!yt(r)&&(r=null);const s=zd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Dg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:h0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ye(u.install)?(a.add(u),u.install(c,...f)):Ye(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||nt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Lo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(li(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ns;ns=c;try{return u()}finally{ns=f}}};return c}}let ns=null;const Lg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${Er(e)}Modifiers`];function Ug(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let r=t;const s=e.startsWith("update:"),a=s&&Lg(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Ut(u)?u.trim():u)),a.number&&(r=t.map(ru)));let o,l=i[o=$o(e)]||i[o=$o(Dn(e))];!l&&s&&(l=i[o=$o(Er(e))]),l&&li(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,li(c,n,6,r)}}const Ng=new WeakMap;function Vd(n,e,t=!1){const i=t?Ng:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ye(n)){const l=c=>{const u=Vd(c,e,!0);u&&(o=!0,nn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(yt(n)&&i.set(n,null),null):(qe(s)?s.forEach(l=>a[l]=null):nn(a,s),yt(n)&&i.set(n,a),a)}function Do(n,e){return!n||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,Er(e))||ht(n,e))}function ff(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:b}=n,m=ro(n);let d,v;try{if(t.shapeFlag&4){const S=r||i,P=S;d=Zn(c.call(P,S,u,f,p,h,g)),v=o}else{const S=e;d=Zn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),v=e.props?o:Fg(o)}}catch(S){Xs.length=0,Co(S,n,1),d=nt(Ki)}let E=d;if(v&&b!==!1){const S=Object.keys(v),{shapeFlag:P}=E;S.length&&P&7&&(s&&S.some(tu)&&(v=Og(v,s)),E=as(E,v,!1,!0))}return t.dirs&&(E=as(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&du(E,t.transition),d=E,ro(m),d}const Fg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Mo(t))&&((e||(e={}))[t]=n[t]);return e},Og=(n,e)=>{const t={};for(const i in n)(!tu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function kg(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Do(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hf(i,a,c):!0:!!a;return!1}function hf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Do(t,s))return!0}return!1}function Bg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hd={},Gd=()=>Object.create(Hd),Wd=n=>Object.getPrototypeOf(n)===Hd;function zg(n,e,t,i=!1){const r={},s=Gd();n.propsDefaults=Object.create(null),Xd(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Md(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Vg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=ft(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Do(n.emitsOptions,h))continue;const p=e[h];if(l)if(ht(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Dn(h);r[g]=jl(l,o,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Xd(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ht(e,f)&&((u=Er(f))===f||!ht(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=jl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&Mi(n.attrs,"set","")}function Xd(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Bs(l))continue;const c=e[l];let u;r&&ht(r,u=Dn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Do(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=ft(t),c=o||xt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=jl(r,l,f,c[f],n,!ht(c,f))}}return a}function jl(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ht(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=sa(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Er(t))&&(i=!0))}return i}const Hg=new WeakMap;function $d(n,e,t=!1){const i=t?Hg:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,p]=$d(f,e,!0);nn(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return yt(n)&&i.set(n,Qr),Qr;if(qe(s))for(let u=0;u<s.length;u++){const f=Dn(s[u]);df(f)&&(a[f]=xt)}else if(s)for(const u in s){const f=Dn(u);if(df(f)){const h=s[u],p=a[f]=qe(h)||Ye(h)?{type:h}:nn({},h),g=p.type;let b=!1,m=!0;if(qe(g))for(let d=0;d<g.length;++d){const v=g[d],E=Ye(v)&&v.name;if(E==="Boolean"){b=!0;break}else E==="String"&&(m=!1)}else b=Ye(g)&&g.name==="Boolean";p[0]=b,p[1]=m,(b||ht(p,"default"))&&o.push(f)}}const c=[a,o];return yt(n)&&i.set(n,c),c}function df(n){return n[0]!=="$"&&!Bs(n)}const mu=n=>n==="_"||n==="_ctx"||n==="$stable",gu=n=>qe(n)?n.map(Zn):[Zn(n)],Gg=(n,e,t)=>{if(e._n)return e;const i=Yt((...r)=>gu(e(...r)),t);return i._c=!1,i},qd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(mu(r))continue;const s=n[r];if(Ye(s))e[r]=Gg(r,s,i);else if(s!=null){const a=gu(s);e[r]=()=>a}}},Yd=(n,e)=>{const t=gu(e);n.slots.default=()=>t},jd=(n,e,t)=>{for(const i in e)(t||!mu(i))&&(n[i]=e[i])},Wg=(n,e,t)=>{const i=n.slots=Gd();if(n.vnode.shapeFlag&32){const r=e._;r?(jd(i,e,t),t&&rd(i,"_",r,!0)):qd(e,i)}else e&&Yd(n,e)},Xg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=xt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:jd(r,e,t):(s=!e.$stable,qd(e,r)),a=e}else e&&(Yd(n,e),a={default:1});if(s)for(const o in r)!mu(o)&&a[o]==null&&delete r[o]},xn=Kg;function $g(n){return qg(n)}function qg(n,e){const t=Ao();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ri,insertStaticContent:g}=n,b=(T,R,N,I=null,V=null,j=null,w=void 0,ue=null,le=!!R.dynamicChildren)=>{if(T===R)return;T&&!Ms(T,R)&&(I=D(T),xe(T,V,j,!0),T=null),R.patchFlag===-2&&(le=!1,R.dynamicChildren=null);const{type:re,ref:ce,shapeFlag:M}=R;switch(re){case Io:m(T,R,N,I);break;case Ki:d(T,R,N,I);break;case Xa:T==null&&v(R,N,I,w);break;case Tt:H(T,R,N,I,V,j,w,ue,le);break;default:M&1?P(T,R,N,I,V,j,w,ue,le):M&6?G(T,R,N,I,V,j,w,ue,le):(M&64||M&128)&&re.process(T,R,N,I,V,j,w,ue,le,fe)}ce!=null&&V?Hs(ce,T&&T.ref,j,R||T,!R):ce==null&&T&&T.ref!=null&&Hs(T.ref,null,j,T,!0)},m=(T,R,N,I)=>{if(T==null)i(R.el=o(R.children),N,I);else{const V=R.el=T.el;R.children!==T.children&&c(V,R.children)}},d=(T,R,N,I)=>{T==null?i(R.el=l(R.children||""),N,I):R.el=T.el},v=(T,R,N,I)=>{[T.el,T.anchor]=g(T.children,R,N,I,T.el,T.anchor)},E=({el:T,anchor:R},N,I)=>{let V;for(;T&&T!==R;)V=h(T),i(T,N,I),T=V;i(R,N,I)},S=({el:T,anchor:R})=>{let N;for(;T&&T!==R;)N=h(T),r(T),T=N;r(R)},P=(T,R,N,I,V,j,w,ue,le)=>{if(R.type==="svg"?w="svg":R.type==="math"&&(w="mathml"),T==null)A(R,N,I,V,j,w,ue,le);else{const re=T.el&&T.el._isVueCE?T.el:null;try{re&&re._beginPatch(),C(T,R,V,j,w,ue,le)}finally{re&&re._endPatch()}}},A=(T,R,N,I,V,j,w,ue)=>{let le,re;const{props:ce,shapeFlag:M,transition:_,dirs:F}=T;if(le=T.el=a(T.type,j,ce&&ce.is,ce),M&8?u(le,T.children):M&16&&x(T.children,le,null,I,V,Jo(T,j),w,ue),F&&tr(T,null,I,"created"),L(le,T,T.scopeId,w,I),ce){for(const se in ce)se!=="value"&&!Bs(se)&&s(le,se,null,ce[se],j,I);"value"in ce&&s(le,"value",null,ce.value,j),(re=ce.onVnodeBeforeMount)&&$n(re,I,T)}F&&tr(T,null,I,"beforeMount");const K=Yg(V,_);K&&_.beforeEnter(le),i(le,R,N),((re=ce&&ce.onVnodeMounted)||K||F)&&xn(()=>{re&&$n(re,I,T),K&&_.enter(le),F&&tr(T,null,I,"mounted")},V)},L=(T,R,N,I,V)=>{if(N&&p(T,N),I)for(let j=0;j<I.length;j++)p(T,I[j]);if(V){let j=V.subTree;if(R===j||Qd(j.type)&&(j.ssContent===R||j.ssFallback===R)){const w=V.vnode;L(T,w,w.scopeId,w.slotScopeIds,V.parent)}}},x=(T,R,N,I,V,j,w,ue,le=0)=>{for(let re=le;re<T.length;re++){const ce=T[re]=ue?Wi(T[re]):Zn(T[re]);b(null,ce,R,N,I,V,j,w,ue)}},C=(T,R,N,I,V,j,w)=>{const ue=R.el=T.el;let{patchFlag:le,dynamicChildren:re,dirs:ce}=R;le|=T.patchFlag&16;const M=T.props||xt,_=R.props||xt;let F;if(N&&nr(N,!1),(F=_.onVnodeBeforeUpdate)&&$n(F,N,R,T),ce&&tr(R,T,N,"beforeUpdate"),N&&nr(N,!0),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(ue,""),re?ie(T.dynamicChildren,re,ue,N,I,Jo(R,V),j):w||ae(T,R,ue,null,N,I,Jo(R,V),j,!1),le>0){if(le&16)U(ue,M,_,N,V);else if(le&2&&M.class!==_.class&&s(ue,"class",null,_.class,V),le&4&&s(ue,"style",M.style,_.style,V),le&8){const K=R.dynamicProps;for(let se=0;se<K.length;se++){const Z=K[se],ye=M[Z],pe=_[Z];(pe!==ye||Z==="value")&&s(ue,Z,ye,pe,V,N)}}le&1&&T.children!==R.children&&u(ue,R.children)}else!w&&re==null&&U(ue,M,_,N,V);((F=_.onVnodeUpdated)||ce)&&xn(()=>{F&&$n(F,N,R,T),ce&&tr(R,T,N,"updated")},I)},ie=(T,R,N,I,V,j,w)=>{for(let ue=0;ue<R.length;ue++){const le=T[ue],re=R[ue],ce=le.el&&(le.type===Tt||!Ms(le,re)||le.shapeFlag&198)?f(le.el):N;b(le,re,ce,null,I,V,j,w,!0)}},U=(T,R,N,I,V)=>{if(R!==N){if(R!==xt)for(const j in R)!Bs(j)&&!(j in N)&&s(T,j,R[j],null,V,I);for(const j in N){if(Bs(j))continue;const w=N[j],ue=R[j];w!==ue&&j!=="value"&&s(T,j,ue,w,V,I)}"value"in N&&s(T,"value",R.value,N.value,V)}},H=(T,R,N,I,V,j,w,ue,le)=>{const re=R.el=T?T.el:o(""),ce=R.anchor=T?T.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:F}=R;F&&(ue=ue?ue.concat(F):F),T==null?(i(re,N,I),i(ce,N,I),x(R.children||[],N,ce,V,j,w,ue,le)):M>0&&M&64&&_&&T.dynamicChildren&&T.dynamicChildren.length===_.length?(ie(T.dynamicChildren,_,N,V,j,w,ue),(R.key!=null||V&&R===V.subTree)&&Kd(T,R,!0)):ae(T,R,N,ce,V,j,w,ue,le)},G=(T,R,N,I,V,j,w,ue,le)=>{R.slotScopeIds=ue,T==null?R.shapeFlag&512?V.ctx.activate(R,N,I,w,le):ee(R,N,I,V,j,w,le):W(T,R,le)},ee=(T,R,N,I,V,j,w)=>{const ue=T.component=r0(T,I,V);if(Ud(T)&&(ue.ctx.renderer=fe),a0(ue,!1,w),ue.asyncDep){if(V&&V.registerDep(ue,X,w),!T.el){const le=ue.subTree=nt(Ki);d(null,le,R,N),T.placeholder=le.el}}else X(ue,T,R,N,V,j,w)},W=(T,R,N)=>{const I=R.component=T.component;if(kg(T,R,N))if(I.asyncDep&&!I.asyncResolved){O(I,R,N);return}else I.next=R,I.update();else R.el=T.el,I.vnode=R},X=(T,R,N,I,V,j,w)=>{const ue=()=>{if(T.isMounted){let{next:M,bu:_,u:F,parent:K,vnode:se}=T;{const ke=Zd(T);if(ke){M&&(M.el=se.el,O(T,M,w)),ke.asyncDep.then(()=>{T.isUnmounted||ue()});return}}let Z=M,ye;nr(T,!1),M?(M.el=se.el,O(T,M,w)):M=se,_&&Ga(_),(ye=M.props&&M.props.onVnodeBeforeUpdate)&&$n(ye,K,M,se),nr(T,!0);const pe=ff(T),Ie=T.subTree;T.subTree=pe,b(Ie,pe,f(Ie.el),D(Ie),T,V,j),M.el=pe.el,Z===null&&Bg(T,pe.el),F&&xn(F,V),(ye=M.props&&M.props.onVnodeUpdated)&&xn(()=>$n(ye,K,M,se),V)}else{let M;const{el:_,props:F}=R,{bm:K,m:se,parent:Z,root:ye,type:pe}=T,Ie=Gs(R);nr(T,!1),K&&Ga(K),!Ie&&(M=F&&F.onVnodeBeforeMount)&&$n(M,Z,R),nr(T,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(pe);const ke=T.subTree=ff(T);b(null,ke,N,I,T,V,j),R.el=ke.el}if(se&&xn(se,V),!Ie&&(M=F&&F.onVnodeMounted)){const ke=R;xn(()=>$n(M,Z,ke),V)}(R.shapeFlag&256||Z&&Gs(Z.vnode)&&Z.vnode.shapeFlag&256)&&T.a&&xn(T.a,V),T.isMounted=!0,R=N=I=null}};T.scope.on();const le=T.effect=new ld(ue);T.scope.off();const re=T.update=le.run.bind(le),ce=T.job=le.runIfDirty.bind(le);ce.i=T,ce.id=T.uid,le.scheduler=()=>hu(ce),nr(T,!0),re()},O=(T,R,N)=>{R.component=T;const I=T.vnode.props;T.vnode=R,T.next=null,Vg(T,R.props,I,N),Xg(T,R.children,N),Ai(),rf(T),wi()},ae=(T,R,N,I,V,j,w,ue,le=!1)=>{const re=T&&T.children,ce=T?T.shapeFlag:0,M=R.children,{patchFlag:_,shapeFlag:F}=R;if(_>0){if(_&128){_e(re,M,N,I,V,j,w,ue,le);return}else if(_&256){he(re,M,N,I,V,j,w,ue,le);return}}F&8?(ce&16&&B(re,V,j),M!==re&&u(N,M)):ce&16?F&16?_e(re,M,N,I,V,j,w,ue,le):B(re,V,j,!0):(ce&8&&u(N,""),F&16&&x(M,N,I,V,j,w,ue,le))},he=(T,R,N,I,V,j,w,ue,le)=>{T=T||Qr,R=R||Qr;const re=T.length,ce=R.length,M=Math.min(re,ce);let _;for(_=0;_<M;_++){const F=R[_]=le?Wi(R[_]):Zn(R[_]);b(T[_],F,N,null,V,j,w,ue,le)}re>ce?B(T,V,j,!0,!1,M):x(R,N,I,V,j,w,ue,le,M)},_e=(T,R,N,I,V,j,w,ue,le)=>{let re=0;const ce=R.length;let M=T.length-1,_=ce-1;for(;re<=M&&re<=_;){const F=T[re],K=R[re]=le?Wi(R[re]):Zn(R[re]);if(Ms(F,K))b(F,K,N,null,V,j,w,ue,le);else break;re++}for(;re<=M&&re<=_;){const F=T[M],K=R[_]=le?Wi(R[_]):Zn(R[_]);if(Ms(F,K))b(F,K,N,null,V,j,w,ue,le);else break;M--,_--}if(re>M){if(re<=_){const F=_+1,K=F<ce?R[F].el:I;for(;re<=_;)b(null,R[re]=le?Wi(R[re]):Zn(R[re]),N,K,V,j,w,ue,le),re++}}else if(re>_)for(;re<=M;)xe(T[re],V,j,!0),re++;else{const F=re,K=re,se=new Map;for(re=K;re<=_;re++){const Ee=R[re]=le?Wi(R[re]):Zn(R[re]);Ee.key!=null&&se.set(Ee.key,re)}let Z,ye=0;const pe=_-K+1;let Ie=!1,ke=0;const de=new Array(pe);for(re=0;re<pe;re++)de[re]=0;for(re=F;re<=M;re++){const Ee=T[re];if(ye>=pe){xe(Ee,V,j,!0);continue}let Re;if(Ee.key!=null)Re=se.get(Ee.key);else for(Z=K;Z<=_;Z++)if(de[Z-K]===0&&Ms(Ee,R[Z])){Re=Z;break}Re===void 0?xe(Ee,V,j,!0):(de[Re-K]=re+1,Re>=ke?ke=Re:Ie=!0,b(Ee,R[Re],N,null,V,j,w,ue,le),ye++)}const ve=Ie?jg(de):Qr;for(Z=ve.length-1,re=pe-1;re>=0;re--){const Ee=K+re,Re=R[Ee],Ce=R[Ee+1],je=Ee+1<ce?Ce.el||Jd(Ce):I;de[re]===0?b(null,Re,N,je,V,j,w,ue,le):Ie&&(Z<0||re!==ve[Z]?Me(Re,N,je,2):Z--)}}},Me=(T,R,N,I,V=null)=>{const{el:j,type:w,transition:ue,children:le,shapeFlag:re}=T;if(re&6){Me(T.component.subTree,R,N,I);return}if(re&128){T.suspense.move(R,N,I);return}if(re&64){w.move(T,R,N,fe);return}if(w===Tt){i(j,R,N);for(let M=0;M<le.length;M++)Me(le[M],R,N,I);i(T.anchor,R,N);return}if(w===Xa){E(T,R,N);return}if(I!==2&&re&1&&ue)if(I===0)ue.beforeEnter(j),i(j,R,N),xn(()=>ue.enter(j),V);else{const{leave:M,delayLeave:_,afterLeave:F}=ue,K=()=>{T.ctx.isUnmounted?r(j):i(j,R,N)},se=()=>{j._isLeaving&&j[hg](!0),M(j,()=>{K(),F&&F()})};_?_(j,K,se):se()}else i(j,R,N)},xe=(T,R,N,I=!1,V=!1)=>{const{type:j,props:w,ref:ue,children:le,dynamicChildren:re,shapeFlag:ce,patchFlag:M,dirs:_,cacheIndex:F}=T;if(M===-2&&(V=!1),ue!=null&&(Ai(),Hs(ue,null,N,T,!0),wi()),F!=null&&(R.renderCache[F]=void 0),ce&256){R.ctx.deactivate(T);return}const K=ce&1&&_,se=!Gs(T);let Z;if(se&&(Z=w&&w.onVnodeBeforeUnmount)&&$n(Z,R,T),ce&6)Je(T.component,N,I);else{if(ce&128){T.suspense.unmount(N,I);return}K&&tr(T,null,R,"beforeUnmount"),ce&64?T.type.remove(T,R,N,fe,I):re&&!re.hasOnce&&(j!==Tt||M>0&&M&64)?B(re,R,N,!1,!0):(j===Tt&&M&384||!V&&ce&16)&&B(le,R,N),I&&He(T)}(se&&(Z=w&&w.onVnodeUnmounted)||K)&&xn(()=>{Z&&$n(Z,R,T),K&&tr(T,null,R,"unmounted")},N)},He=T=>{const{type:R,el:N,anchor:I,transition:V}=T;if(R===Tt){tt(N,I);return}if(R===Xa){S(T);return}const j=()=>{r(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(T.shapeFlag&1&&V&&!V.persisted){const{leave:w,delayLeave:ue}=V,le=()=>w(N,j);ue?ue(T.el,j,le):le()}else j()},tt=(T,R)=>{let N;for(;T!==R;)N=h(T),r(T),T=N;r(R)},Je=(T,R,N)=>{const{bum:I,scope:V,job:j,subTree:w,um:ue,m:le,a:re}=T;pf(le),pf(re),I&&Ga(I),V.stop(),j&&(j.flags|=8,xe(w,T,R,N)),ue&&xn(ue,R),xn(()=>{T.isUnmounted=!0},R)},B=(T,R,N,I=!1,V=!1,j=0)=>{for(let w=j;w<T.length;w++)xe(T[w],R,N,I,V)},D=T=>{if(T.shapeFlag&6)return D(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=h(T.anchor||T.el),N=R&&R[ug];return N?h(N):R};let Y=!1;const ne=(T,R,N)=>{let I;T==null?R._vnode&&(xe(R._vnode,null,null,!0),I=R._vnode.component):b(R._vnode||null,T,R,null,null,null,N),R._vnode=T,Y||(Y=!0,rf(I),wd(),Y=!1)},fe={p:b,um:xe,m:Me,r:He,mt:ee,mc:x,pc:ae,pbc:ie,n:D,o:n};return{render:ne,hydrate:void 0,createApp:Ig(ne)}}function Jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function nr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Yg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kd(n,e,t=!1){const i=n.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Wi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Kd(a,o)),o.type===Io&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===Tt?1:0)),o.type===Ki&&!o.el&&(o.el=a.el)}}function jg(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function pf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Jd(e.subTree):null}const Qd=n=>n.__isSuspense;function Kg(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):ag(n)}const Tt=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Xs=[];let bn=null;function Pe(n=!1){Xs.push(bn=n?null:[])}function Zg(){Xs.pop(),bn=Xs[Xs.length-1]||null}let Ks=1;function oo(n,e=!1){Ks+=n,n<0&&bn&&e&&(bn.hasOnce=!0)}function ep(n){return n.dynamicChildren=Ks>0?bn||Qr:null,Zg(),Ks>0&&bn&&bn.push(n),n}function Fe(n,e,t,i,r,s){return ep(q(n,e,t,i,r,s,!0))}function br(n,e,t,i,r){return ep(nt(n,e,t,i,r,!0))}function lo(n){return n?n.__v_isVNode===!0:!1}function Ms(n,e){return n.type===e.type&&n.key===e.key}const tp=({key:n})=>n??null,$a=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||en(n)||Ye(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function q(n,e=null,t=null,i=0,r=null,s=n===Tt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&tp(e),ref:e&&$a(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Sn};return o?(_u(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),Ks>0&&!a&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const nt=Jg;function Jg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Eg)&&(n=Ki),lo(n)){const o=as(n,e,!0);return t&&_u(o,t),Ks>0&&!s&&bn&&(o.shapeFlag&6?bn[bn.indexOf(n)]=o:bn.push(o)),o.patchFlag=-2,o}if(f0(n)&&(n=n.__vccOpts),e){e=Qg(e);let{class:o,style:l}=e;o&&!Ut(o)&&(e.class=it(o)),yt(l)&&(fu(l)&&!qe(l)&&(l=nn({},l)),e.style=Zt(l))}const a=Ut(n)?1:Qd(n)?128:fg(n)?64:yt(n)?4:Ye(n)?2:0;return q(n,e,t,i,r,a,s,!0)}function Qg(n){return n?fu(n)||Wd(n)?nn({},n):n:null}function as(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?t0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&tp(c),ref:e&&e.ref?t&&s?qe(s)?s.concat($a(e)):[s,$a(e)]:$a(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Tt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&as(n.ssContent),ssFallback:n.ssFallback&&as(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&du(u,l.clone(u)),u}function Mt(n=" ",e=0){return nt(Io,null,n,e)}function e0(n,e){const t=nt(Xa,null,n);return t.staticCount=e,t}function Ct(n="",e=!1){return e?(Pe(),br(Ki,null,n)):nt(Ki,null,n)}function Zn(n){return n==null||typeof n=="boolean"?nt(Ki):qe(n)?nt(Tt,null,n.slice()):lo(n)?Wi(n):nt(Io,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:as(n)}function _u(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),_u(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Wd(e)?e._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[Mt(e)]):t=8);n.children=e,n.shapeFlag|=t}function t0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=it([e.class,i.class]));else if(r==="style")e.style=Zt([e.style,i.style]);else if(Mo(r)){const s=e[r],a=i[r];a&&s!==a&&!(qe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function $n(n,e,t,i=null){li(n,e,7,[t,i])}const n0=zd();let i0=0;function r0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||n0,s={uid:i0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,r),emitsOptions:Vd(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ug.bind(null,s),n.ce&&n.ce(s),s}let Kt=null;const s0=()=>Kt||Sn;let co,Kl;{const n=Ao(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};co=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),Kl=e("__VUE_SSR_SETTERS__",t=>Zs=t)}const sa=n=>{const e=Kt;return co(n),n.scope.on(),()=>{n.scope.off(),co(e)}},mf=()=>{Kt&&Kt.scope.off(),co(null)};function np(n){return n.vnode.shapeFlag&4}let Zs=!1;function a0(n,e=!1,t=!1){e&&Kl(e);const{props:i,children:r}=n.vnode,s=np(n);zg(n,i,s,e),Wg(n,r,t||e);const a=s?o0(n,e):void 0;return e&&Kl(!1),a}function o0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Tg);const{setup:i}=t;if(i){Ai();const r=n.setupContext=i.length>1?c0(n):null,s=sa(n),a=na(i,n,0,[n.props,r]),o=td(a);if(wi(),s(),(o||n.sp)&&!Gs(n)&&Ld(n),o){if(a.then(mf,mf),e)return a.then(l=>{gf(n,l)}).catch(l=>{Co(l,n,0)});n.asyncDep=a}else gf(n,a)}else ip(n)}function gf(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=Ed(e)),ip(n)}function ip(n,e,t){const i=n.type;n.render||(n.render=i.render||ri);{const r=sa(n);Ai();try{Ag(n)}finally{wi(),r()}}}const l0={get(n,e){return jt(n,"get",""),n[e]}};function c0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,l0),slots:n.slots,emit:n.emit,expose:e}}function Lo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ed(Km(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ws)return Ws[t](n)},has(e,t){return t in e||t in Ws}})):n.proxy}function u0(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function f0(n){return Ye(n)&&"__vccOpts"in n}const At=(n,e)=>tg(n,e,Zs);function rp(n,e,t){try{oo(-1);const i=arguments.length;return i===2?yt(e)&&!qe(e)?lo(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&lo(t)&&(t=[t]),nt(n,e,t))}finally{oo(1)}}const h0="3.5.26";let Zl;const _f=typeof window<"u"&&window.trustedTypes;if(_f)try{Zl=_f.createPolicy("vue",{createHTML:n=>n})}catch{}const sp=Zl?n=>Zl.createHTML(n):n=>n,d0="http://www.w3.org/2000/svg",p0="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,vf=bi&&bi.createElement("template"),m0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?bi.createElementNS(d0,n):e==="mathml"?bi.createElementNS(p0,n):t?bi.createElement(n,{is:t}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{vf.innerHTML=sp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=vf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},g0=Symbol("_vtc");function _0(n,e,t){const i=n[g0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uo=Symbol("_vod"),ap=Symbol("_vsh"),os={name:"show",beforeMount(n,{value:e},{transition:t}){n[uo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ys(n,!0),i.enter(n)):i.leave(n,()=>{ys(n,!1)}):ys(n,e))},beforeUnmount(n,{value:e}){ys(n,e)}};function ys(n,e){n.style.display=e?n[uo]:"none",n[ap]=!e}const v0=Symbol(""),x0=/(?:^|;)\s*display\s*:/;function S0(n,e,t){const i=n.style,r=Ut(t);let s=!1;if(t&&!r){if(e)if(Ut(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&qa(i,o,"")}else for(const a in e)t[a]==null&&qa(i,a,"");for(const a in t)a==="display"&&(s=!0),qa(i,a,t[a])}else if(r){if(e!==t){const a=i[v0];a&&(t+=";"+a),i.cssText=t,s=x0.test(t)}}else e&&n.removeAttribute("style");uo in n&&(n[uo]=s?i.display:"",n[ap]&&(i.display="none"))}const xf=/\s*!important$/;function qa(n,e,t){if(qe(t))t.forEach(i=>qa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=b0(n,e);xf.test(t)?n.setProperty(Er(i),t.replace(xf,""),"important"):n[i]=t}}const Sf=["Webkit","Moz","ms"],Qo={};function b0(n,e){const t=Qo[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=To(i);for(let r=0;r<Sf.length;r++){const s=Sf[r]+i;if(s in n)return Qo[e]=s}return e}const bf="http://www.w3.org/1999/xlink";function Mf(n,e,t,i,r,s=Cm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bf,e.slice(6,e.length)):n.setAttributeNS(bf,e,t):t==null||s&&!sd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ji(t)?String(t):t)}function yf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=sd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Kr(n,e,t,i){n.addEventListener(e,t,i)}function M0(n,e,t,i){n.removeEventListener(e,t,i)}const Ef=Symbol("_vei");function y0(n,e,t,i,r=null){const s=n[Ef]||(n[Ef]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=E0(e);if(i){const c=s[e]=w0(i,r);Kr(n,o,c,l)}else a&&(M0(n,o,a,l),s[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function E0(n){let e;if(Tf.test(n)){e={};let i;for(;i=n.match(Tf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Er(n.slice(2)),e]}let el=0;const T0=Promise.resolve(),A0=()=>el||(T0.then(()=>el=0),el=Date.now());function w0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;li(R0(i,t.value),e,5,[i])};return t.value=n,t.attached=A0(),t}function R0(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Af=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,C0=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?_0(n,i,a):e==="style"?S0(n,t,i):Mo(e)?tu(e)||y0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):P0(n,e,i,a))?(yf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mf(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ut(i))?yf(n,Dn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mf(n,e,i,a))};function P0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Af(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Af(e)&&Ut(t)?!1:e in n}const wf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>Ga(e,t):e};function D0(n){n.target.composing=!0}function Rf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tl=Symbol("_assign");function Cf(n,e,t){return e&&(n=n.trim()),t&&(n=ru(n)),n}const Pf={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[tl]=wf(r);const s=i||r.props&&r.props.type==="number";Kr(n,e?"change":"input",a=>{a.target.composing||n[tl](Cf(n.value,t,s))}),(t||s)&&Kr(n,"change",()=>{n.value=Cf(n.value,t,s)}),e||(Kr(n,"compositionstart",D0),Kr(n,"compositionend",Rf),Kr(n,"change",Rf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[tl]=wf(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?ru(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},I0=["ctrl","shift","alt","meta"],L0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>I0.some(t=>n[`${t}Key`]&&!e.includes(t))},Vt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=L0[e[a]];if(o&&o(r,e))return}return n(r,...s)}))},U0=nn({patchProp:C0},m0);let Df;function N0(){return Df||(Df=$g(U0))}const F0=((...n)=>{const e=N0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=k0(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,O0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function O0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function k0(n){return Ut(n)?document.querySelector(n):n}const B0="/Profile_Picture_CyberCubed.ico";const Zr=typeof document<"u";function op(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function z0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&op(n.default)}const ut=Object.assign;function nl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Gn(r)?r.map(n):n(r)}return t}const $s=()=>{},Gn=Array.isArray;function If(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const lp=/#/g,V0=/&/g,H0=/\//g,G0=/=/g,W0=/\?/g,cp=/\+/g,X0=/%5B/g,$0=/%5D/g,up=/%5E/g,q0=/%60/g,fp=/%7B/g,Y0=/%7C/g,hp=/%7D/g,j0=/%20/g;function vu(n){return n==null?"":encodeURI(""+n).replace(Y0,"|").replace(X0,"[").replace($0,"]")}function K0(n){return vu(n).replace(fp,"{").replace(hp,"}").replace(up,"^")}function Jl(n){return vu(n).replace(cp,"%2B").replace(j0,"+").replace(lp,"%23").replace(V0,"%26").replace(q0,"`").replace(fp,"{").replace(hp,"}").replace(up,"^")}function Z0(n){return Jl(n).replace(G0,"%3D")}function J0(n){return vu(n).replace(lp,"%23").replace(W0,"%3F")}function Q0(n){return J0(n).replace(H0,"%2F")}function Js(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const e_=/\/$/,t_=n=>n.replace(e_,"");function il(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=s_(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:Js(a)}}function n_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function i_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ls(e.matched[i],t.matched[r])&&dp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ls(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function dp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!r_(n[t],e[t]))return!1;return!0}function r_(n,e){return Gn(n)?Uf(n,e):Gn(e)?Uf(e,n):n?.valueOf()===e?.valueOf()}function Uf(n,e){return Gn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function s_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ql=(function(n){return n.pop="pop",n.push="push",n})({}),rl=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function a_(n){if(!n)if(Zr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),t_(n)}const o_=/^[^#]+#/;function l_(n,e){return n.replace(o_,"#")+e}function c_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Uo=()=>({left:window.scrollX,top:window.scrollY});function u_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=c_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nf(n,e){return(history.state?history.state.position-e:-1)+n}const ec=new Map;function f_(n,e){ec.set(n,e)}function h_(n){const e=ec.get(n);return ec.delete(n),e}function d_(n){return typeof n=="string"||n&&typeof n=="object"}function pp(n){return typeof n=="string"||typeof n=="symbol"}let Rt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const mp=Symbol("");Rt.MATCHER_NOT_FOUND+"",Rt.NAVIGATION_GUARD_REDIRECT+"",Rt.NAVIGATION_ABORTED+"",Rt.NAVIGATION_CANCELLED+"",Rt.NAVIGATION_DUPLICATED+"";function cs(n,e){return ut(new Error,{type:n,[mp]:!0},e)}function mi(n,e){return n instanceof Error&&mp in n&&(e==null||!!(n.type&e))}const p_=["params","query","hash"];function m_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of p_)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function g_(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(cp," "),s=r.indexOf("="),a=Js(s<0?r:r.slice(0,s)),o=s<0?null:Js(r.slice(s+1));if(a in e){let l=e[a];Gn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Ff(n){let e="";for(let t in n){const i=n[t];if(t=Z0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(i)?i.map(r=>r&&Jl(r)):[i&&Jl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function __(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const v_=Symbol(""),Of=Symbol(""),No=Symbol(""),xu=Symbol(""),tc=Symbol("");function Es(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Xi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(cs(Rt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):d_(h)?l(cs(Rt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function sl(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(op(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Xi(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=z0(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Xi(h,t,i,a,o,r)()}))}}return s}function x_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>ls(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>ls(c,l))||r.push(l))}return[t,i,r]}let S_=()=>location.protocol+"//"+location.host;function gp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Lf(o,"")}return Lf(t,n)+i+r}function b_(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=gp(n,location),g=t.value,b=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===g){a=null;return}m=b?h.position-b.position:0}else i(p);r.forEach(d=>{d(t.value,g,{delta:m,type:Ql.pop,direction:m?m>0?rl.forward:rl.back:rl.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ut({},h.state,{scroll:Uo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function kf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Uo():null}}function M_(n){const{history:e,location:t}=window,i={value:gp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:S_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){s(l,ut({},e.state,kf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=ut({},r.value,e.state,{forward:l,scroll:Uo()});s(u.current,u,!0),s(l,ut({},kf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function y_(n){n=a_(n);const e=M_(n),t=b_(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=ut({location:"",base:n,go:i,createHref:l_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let pr=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Nt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Nt||{});const E_={type:pr.Static,value:""},T_=/[a-zA-Z0-9_]/;function A_(n){if(!n)return[[]];if(n==="/")return[[E_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Nt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Nt.Static?s.push({type:pr.Static,value:c}):t===Nt.Param||t===Nt.ParamRegExp||t===Nt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:pr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Nt.ParamRegExp){i=t,t=Nt.EscapeNext;continue}switch(t){case Nt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Nt.Param):h();break;case Nt.EscapeNext:h(),t=i;break;case Nt.Param:l==="("?t=Nt.ParamRegExp:T_.test(l)?h():(f(),t=Nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Nt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Nt.ParamRegExpEnd:u+=l;break;case Nt.ParamRegExpEnd:f(),t=Nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const Bf="[^/]+?",w_={sensitive:!1,strict:!1,start:!0,end:!0};var ln=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(ln||{});const R_=/[.+*?^${}()[\]/\\]/g;function C_(n,e){const t=ut({},w_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[ln.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=ln.Segment+(t.sensitive?ln.BonusCaseSensitive:0);if(h.type===pr.Static)f||(r+="/"),r+=h.value.replace(R_,"\\$&"),p+=ln.Static;else if(h.type===pr.Param){const{value:g,repeatable:b,optional:m,regexp:d}=h;s.push({name:g,repeatable:b,optional:m});const v=d||Bf;if(v!==Bf){p+=ln.BonusCustomRegExp;try{`${v}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+S.message)}}let E=b?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=ln.Dynamic,m&&(p+=ln.BonusOptional),b&&(p+=ln.BonusRepeatable),v===".*"&&(p+=ln.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=ln.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===pr.Static)u+=p.value;else if(p.type===pr.Param){const{value:g,repeatable:b,optional:m}=p,d=g in c?c[g]:"";if(Gn(d)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=Gn(d)?d.join("/"):d;if(!v)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function P_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===ln.Static+ln.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function _p(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=P_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(zf(i))return 1;if(zf(r))return-1}return r.length-i.length}function zf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const D_={strict:!1,end:!0,sensitive:!1};function I_(n,e,t){const i=C_(A_(n.path),t),r=ut(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function L_(n,e){const t=[],i=new Map;e=If(D_,e);function r(f){return i.get(f)}function s(f,h,p){const g=!p,b=Hf(f);b.aliasOf=p&&p.record;const m=If(e,f),d=[b];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of S)d.push(Hf(ut({},b,{components:p?p.record.components:b.components,path:P,aliasOf:p?p.record:b})))}let v,E;for(const S of d){const{path:P}=S;if(h&&P[0]!=="/"){const A=h.record.path,L=A[A.length-1]==="/"?"":"/";S.path=h.record.path+(P&&L+P)}if(v=I_(S,h,m),p?p.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),g&&f.name&&!Gf(v)&&a(f.name)),vp(v)&&l(v),b.children){const A=b.children;for(let L=0;L<A.length;L++)s(A[L],v,p&&p.children[L])}p=p||v}return E?()=>{a(E)}:$s}function a(f){if(pp(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=F_(f,t);t.splice(h,0,f),f.record.name&&!Gf(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},b,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw cs(Rt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=ut(Vf(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Vf(f.params,p.keys.map(E=>E.name))),b=p.stringify(g)}else if(f.path!=null)b=f.path,p=t.find(E=>E.re.test(b)),p&&(g=p.parse(b),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!p)throw cs(Rt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=ut({},h.params,f.params),b=p.stringify(g)}const d=[];let v=p;for(;v;)d.unshift(v.record),v=v.parent;return{name:m,path:b,params:g,matched:d,meta:N_(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Vf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Hf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:U_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function U_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Gf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function N_(n){return n.reduce((e,t)=>ut(e,t.meta),{})}function F_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;_p(n,e[s])<0?i=s:t=s+1}const r=O_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function O_(n){let e=n;for(;e=e.parent;)if(vp(e)&&_p(n,e)===0)return e}function vp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Wf(n){const e=zn(No),t=zn(xu),i=At(()=>{const l=ti(n.to);return e.resolve(l)}),r=At(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ls.bind(null,u));if(h>-1)return h;const p=Xf(l[c-2]);return c>1&&Xf(u)===p&&f[f.length-1].path!==p?f.findIndex(ls.bind(null,l[c-2])):h}),s=At(()=>r.value>-1&&H_(t.params,i.value.params)),a=At(()=>r.value>-1&&r.value===t.matched.length-1&&dp(t.params,i.value.params));function o(l={}){if(V_(l)){const c=e[ti(n.replace)?"replace":"push"](ti(n.to)).catch($s);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:At(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function k_(n){return n.length===1?n[0]:n}const B_=Id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wf,setup(n,{slots:e}){const t=Ro(Wf(n)),{options:i}=zn(No),r=At(()=>({[$f(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[$f(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&k_(e.default(t));return n.custom?s:rp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),z_=B_;function V_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function H_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Gn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Xf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $f=(n,e,t)=>n??e??t,G_=Id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=zn(tc),r=At(()=>n.route||i.value),s=zn(Of,0),a=At(()=>{let c=ti(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=At(()=>r.value.matched[a.value]);Wa(Of,At(()=>a.value+1)),Wa(v_,o),Wa(tc,r);const l=Ue();return si(()=>[l.value,o.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ls(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return qf(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=rp(h,ut({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return qf(t.default,{Component:m,route:c})||m}}});function qf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const W_=G_;function X_(n){const e=L_(n.routes,n),t=n.parseQuery||g_,i=n.stringifyQuery||Ff,r=n.history,s=Es(),a=Es(),o=Es(),l=Zm(Ui);let c=Ui;Zr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nl.bind(null,D=>""+D),f=nl.bind(null,Q0),h=nl.bind(null,Js);function p(D,Y){let ne,fe;return pp(D)?(ne=e.getRecordMatcher(D),fe=Y):fe=D,e.addRoute(fe,ne)}function g(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function b(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function d(D,Y){if(Y=ut({},Y||l.value),typeof D=="string"){const N=il(t,D,Y.path),I=e.resolve({path:N.path},Y),V=r.createHref(N.fullPath);return ut(N,I,{params:h(I.params),hash:Js(N.hash),redirectedFrom:void 0,href:V})}let ne;if(D.path!=null)ne=ut({},D,{path:il(t,D.path,Y.path).path});else{const N=ut({},D.params);for(const I in N)N[I]==null&&delete N[I];ne=ut({},D,{params:f(N)}),Y.params=f(Y.params)}const fe=e.resolve(ne,Y),me=D.hash||"";fe.params=u(h(fe.params));const T=n_(i,ut({},D,{hash:K0(me),path:fe.path})),R=r.createHref(T);return ut({fullPath:T,hash:me,query:i===Ff?__(D.query):D.query||{}},fe,{redirectedFrom:void 0,href:R})}function v(D){return typeof D=="string"?il(t,D,l.value.path):ut({},D)}function E(D,Y){if(c!==D)return cs(Rt.NAVIGATION_CANCELLED,{from:Y,to:D})}function S(D){return L(D)}function P(D){return S(ut(v(D),{replace:!0}))}function A(D,Y){const ne=D.matched[D.matched.length-1];if(ne&&ne.redirect){const{redirect:fe}=ne;let me=typeof fe=="function"?fe(D,Y):fe;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=v(me):{path:me},me.params={}),ut({query:D.query,hash:D.hash,params:me.path!=null?{}:D.params},me)}}function L(D,Y){const ne=c=d(D),fe=l.value,me=D.state,T=D.force,R=D.replace===!0,N=A(ne,fe);if(N)return L(ut(v(N),{state:typeof N=="object"?ut({},me,N.state):me,force:T,replace:R}),Y||ne);const I=ne;I.redirectedFrom=Y;let V;return!T&&i_(i,fe,ne)&&(V=cs(Rt.NAVIGATION_DUPLICATED,{to:I,from:fe}),Me(fe,fe,!0,!1)),(V?Promise.resolve(V):ie(I,fe)).catch(j=>mi(j)?mi(j,Rt.NAVIGATION_GUARD_REDIRECT)?j:_e(j):ae(j,I,fe)).then(j=>{if(j){if(mi(j,Rt.NAVIGATION_GUARD_REDIRECT))return L(ut({replace:R},v(j.to),{state:typeof j.to=="object"?ut({},me,j.to.state):me,force:T}),Y||I)}else j=H(I,fe,!0,R,me);return U(I,fe,j),j})}function x(D,Y){const ne=E(D,Y);return ne?Promise.reject(ne):Promise.resolve()}function C(D){const Y=tt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function ie(D,Y){let ne;const[fe,me,T]=x_(D,Y);ne=sl(fe.reverse(),"beforeRouteLeave",D,Y);for(const N of fe)N.leaveGuards.forEach(I=>{ne.push(Xi(I,D,Y))});const R=x.bind(null,D,Y);return ne.push(R),B(ne).then(()=>{ne=[];for(const N of s.list())ne.push(Xi(N,D,Y));return ne.push(R),B(ne)}).then(()=>{ne=sl(me,"beforeRouteUpdate",D,Y);for(const N of me)N.updateGuards.forEach(I=>{ne.push(Xi(I,D,Y))});return ne.push(R),B(ne)}).then(()=>{ne=[];for(const N of T)if(N.beforeEnter)if(Gn(N.beforeEnter))for(const I of N.beforeEnter)ne.push(Xi(I,D,Y));else ne.push(Xi(N.beforeEnter,D,Y));return ne.push(R),B(ne)}).then(()=>(D.matched.forEach(N=>N.enterCallbacks={}),ne=sl(T,"beforeRouteEnter",D,Y,C),ne.push(R),B(ne))).then(()=>{ne=[];for(const N of a.list())ne.push(Xi(N,D,Y));return ne.push(R),B(ne)}).catch(N=>mi(N,Rt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function U(D,Y,ne){o.list().forEach(fe=>C(()=>fe(D,Y,ne)))}function H(D,Y,ne,fe,me){const T=E(D,Y);if(T)return T;const R=Y===Ui,N=Zr?history.state:{};ne&&(fe||R?r.replace(D.fullPath,ut({scroll:R&&N&&N.scroll},me)):r.push(D.fullPath,me)),l.value=D,Me(D,Y,ne,R),_e()}let G;function ee(){G||(G=r.listen((D,Y,ne)=>{if(!Je.listening)return;const fe=d(D),me=A(fe,Je.currentRoute.value);if(me){L(ut(me,{replace:!0,force:!0}),fe).catch($s);return}c=fe;const T=l.value;Zr&&f_(Nf(T.fullPath,ne.delta),Uo()),ie(fe,T).catch(R=>mi(R,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_CANCELLED)?R:mi(R,Rt.NAVIGATION_GUARD_REDIRECT)?(L(ut(v(R.to),{force:!0}),fe).then(N=>{mi(N,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&!ne.delta&&ne.type===Ql.pop&&r.go(-1,!1)}).catch($s),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),ae(R,fe,T))).then(R=>{R=R||H(fe,T,!1),R&&(ne.delta&&!mi(R,Rt.NAVIGATION_CANCELLED)?r.go(-ne.delta,!1):ne.type===Ql.pop&&mi(R,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),U(fe,T,R)}).catch($s)}))}let W=Es(),X=Es(),O;function ae(D,Y,ne){_e(D);const fe=X.list();return fe.length?fe.forEach(me=>me(D,Y,ne)):console.error(D),Promise.reject(D)}function he(){return O&&l.value!==Ui?Promise.resolve():new Promise((D,Y)=>{W.add([D,Y])})}function _e(D){return O||(O=!D,ee(),W.list().forEach(([Y,ne])=>D?ne(D):Y()),W.reset()),D}function Me(D,Y,ne,fe){const{scrollBehavior:me}=n;if(!Zr||!me)return Promise.resolve();const T=!ne&&h_(Nf(D.fullPath,0))||(fe||!ne)&&history.state&&history.state.scroll||null;return Ht().then(()=>me(D,Y,T)).then(R=>R&&u_(R)).catch(R=>ae(R,D,Y))}const xe=D=>r.go(D);let He;const tt=new Set,Je={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:b,resolve:d,options:n,push:S,replace:P,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:X.add,isReady:he,install(D){D.component("RouterLink",z_),D.component("RouterView",W_),D.config.globalProperties.$router=Je,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>ti(l)}),Zr&&!He&&l.value===Ui&&(He=!0,S(r.location).catch(fe=>{}));const Y={};for(const fe in Ui)Object.defineProperty(Y,fe,{get:()=>l.value[fe],enumerable:!0});D.provide(No,Je),D.provide(xu,Md(Y)),D.provide(tc,l);const ne=D.unmount;tt.add(D),D.unmount=function(){tt.delete(D),tt.size<1&&(c=Ui,G&&G(),G=null,l.value=Ui,He=!1,O=!1),ne()}}};function B(D){return D.reduce((Y,ne)=>Y.then(()=>C(ne)),Promise.resolve())}return Je}function xp(){return zn(No)}function nc(n){return zn(xu)}const $_="http://localhost:8000",Vn=$_+"/api",rn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},q_={class:"burger-wrap"},Y_={__name:"HeaderNav",setup(n){const e=nc();function t(){const P=e.path;return P==="/"?0:P==="/coding"?1:P==="/blender"?2:P.startsWith("/dnd")?3:P==="/about"?4:0}const i=Ue(t());si(()=>e.path,()=>{i.value=t(),Ht(()=>g())});const r=Ue(null),s=Ue(null),a=Ue(null),o=Ue([]),l=Ue(window.innerWidth<640),c=Ue(!1),u=Ue({opacity:0}),f=Ue({opacity:0});async function h(){try{const P=await fetch(`${Vn}/campaigns/`);if(!P.ok)return;const A=await P.json();o.value=Array.isArray(A)?A:[]}catch(P){console.warn("Failed to load campaigns",P)}}const p=At(()=>"/dnd");function g(P=!0){if(!s.value||!a.value)return;const A=l.value,L=A?".nav-link-burger":".nav-link",x=Array.from(s.value.querySelectorAll(L));let C;A?C=s.value.getBoundingClientRect():C=a.value.getBoundingClientRect();const ie=(U,H)=>{if(U==null||!x[U]){A?H.value={opacity:0,top:"0px",height:"0px"}:H.value={opacity:0,left:"0px",width:"0px"};return}const G=x[U].getBoundingClientRect();if(A){const ee=G.top-C.top,W=G.height;H.value={opacity:1,top:`${ee}px`,height:`${W}px`,transition:P?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}else{const ee=G.left-C.left-15,W=G.width+30;H.value={opacity:1,left:`${ee}px`,width:`${W}px`,transition:P?"left 320ms cubic-bezier(.2,.9,.2,1), width 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}};ie(i.value,u),ie(r.value,f)}function b(){c.value=!c.value}function m(P){i.value=P,c.value=!1,Ht(()=>g())}function d(P){r.value=P,g()}function v(){r.value=null,g()}function E(){const P=window.innerWidth<640;P||(c.value=!1),l.value=P}let S;return fi(()=>{h(),E(),Ht(()=>g(!1)),S=new ResizeObserver(()=>g()),a.value&&S.observe(a.value),window.addEventListener("resize",()=>{E(),g()})}),Tr(()=>{S&&a.value&&S.unobserve(a.value),window.removeEventListener("resize",g)}),(P,A)=>{const L=ia("router-link");return Pe(),Fe("div",{class:it(["nav-wrap liquid-glass",{"menu-open":c.value}]),ref_key:"navWrap",ref:a},[l.value?(Pe(),Fe(Tt,{key:0},[q("div",q_,[q("button",{type:"button",class:it(["burger",{active:c.value}]),onClick:A[0]||(A[0]=x=>b())},"☰",2)]),q("div",{class:it(["burgermenu",{open:c.value}])},[q("nav",{class:"nav-burger",ref_key:"nav",ref:s,onMouseleave:v},[q("div",{class:"nav-bubble-burger selected",style:Zt(u.value),"aria-hidden":"true"},null,4),q("div",{class:"nav-bubble-burger liquid-glass",style:Zt(f.value),"aria-hidden":"true"},null,4),nt(L,{to:"/",href:"#",class:it(["nav-link-burger",{active:i.value===0}]),onClick:A[1]||(A[1]=Vt(x=>m(0),["prevent"])),onMouseenter:A[2]||(A[2]=x=>d(0))},{default:Yt(()=>[...A[21]||(A[21]=[Mt("Home",-1)])]),_:1},8,["class"]),nt(L,{to:"/coding",href:"#",class:it(["nav-link-burger",{active:i.value===1}]),onClick:A[3]||(A[3]=Vt(x=>m(1),["prevent"])),onMouseenter:A[4]||(A[4]=x=>d(1))},{default:Yt(()=>[...A[22]||(A[22]=[Mt("Coding",-1)])]),_:1},8,["class"]),nt(L,{to:"/blender",href:"#",class:it(["nav-link-burger",{active:i.value===2}]),onClick:A[5]||(A[5]=Vt(x=>m(2),["prevent"])),onMouseenter:A[6]||(A[6]=x=>d(2))},{default:Yt(()=>[...A[23]||(A[23]=[Mt("Blender",-1)])]),_:1},8,["class"]),nt(L,{to:p.value,href:"#",class:it(["nav-link-burger",{active:i.value===3}]),onClick:A[7]||(A[7]=Vt(x=>m(3),["prevent"])),onMouseenter:A[8]||(A[8]=x=>d(3))},{default:Yt(()=>[...A[24]||(A[24]=[Mt("D&D",-1)])]),_:1},8,["to","class"]),nt(L,{to:"/about",href:"#",class:it(["nav-link-burger",{active:i.value===4}]),onClick:A[9]||(A[9]=Vt(x=>m(4),["prevent"])),onMouseenter:A[10]||(A[10]=x=>d(4))},{default:Yt(()=>[...A[25]||(A[25]=[Mt("About",-1)])]),_:1},8,["class"])],544)],2)],64)):(Pe(),Fe(Tt,{key:1},[q("div",{class:"nav-bubble selected",style:Zt(u.value),"aria-hidden":"true"},null,4),q("div",{class:"nav-bubble liquid-glass",style:Zt(f.value),"aria-hidden":"true"},null,4),q("nav",{class:"nav",ref_key:"nav",ref:s,onMouseleave:v},[nt(L,{to:"/",href:"#",class:it(["nav-link",{active:i.value===0}]),onClick:A[11]||(A[11]=Vt(x=>m(0),["prevent"])),onMouseenter:A[12]||(A[12]=x=>d(0))},{default:Yt(()=>[...A[26]||(A[26]=[Mt("Home",-1)])]),_:1},8,["class"]),nt(L,{to:"/coding",href:"#",class:it(["nav-link",{active:i.value===1}]),onClick:A[13]||(A[13]=Vt(x=>m(1),["prevent"])),onMouseenter:A[14]||(A[14]=x=>d(1))},{default:Yt(()=>[...A[27]||(A[27]=[Mt("Coding",-1)])]),_:1},8,["class"]),nt(L,{to:"/blender",href:"#",class:it(["nav-link",{active:i.value===2}]),onClick:A[15]||(A[15]=Vt(x=>m(2),["prevent"])),onMouseenter:A[16]||(A[16]=x=>d(2))},{default:Yt(()=>[...A[28]||(A[28]=[Mt("Blender",-1)])]),_:1},8,["class"]),nt(L,{to:p.value,href:"#",class:it(["nav-link",{active:i.value===3}]),onClick:A[17]||(A[17]=Vt(x=>m(3),["prevent"])),onMouseenter:A[18]||(A[18]=x=>d(3))},{default:Yt(()=>[...A[29]||(A[29]=[Mt("D&D",-1)])]),_:1},8,["to","class"]),nt(L,{to:"/about",href:"#",class:it(["nav-link",{active:i.value===4}]),onClick:A[19]||(A[19]=Vt(x=>m(4),["prevent"])),onMouseenter:A[20]||(A[20]=x=>d(4))},{default:Yt(()=>[...A[30]||(A[30]=[Mt("About",-1)])]),_:1},8,["class"])],544)],64))],2)}}},j_=rn(Y_,[["__scopeId","data-v-3cdf6475"]]),K_={class:"header"},Z_={class:"header-container"},J_={class:"header-left liquid-glass"},Q_={__name:"HeaderV2",setup(n){return(e,t)=>{const i=ia("router-link");return Pe(),Fe("header",K_,[q("div",Z_,[q("div",J_,[nt(i,{to:"/admin-view"},{default:Yt(()=>[...t[0]||(t[0]=[q("img",{src:B0,alt:"Logo",class:"logo-image"},null,-1)])]),_:1})]),t[1]||(t[1]=q("div",null,null,-1)),nt(j_)])])}}},ev=rn(Q_,[["__scopeId","data-v-79829b68"]]),tv={__name:"LoadingScreen",props:{visible:{type:Boolean,default:!0}},setup(n){return(e,t)=>(Pe(),Fe("div",{class:it(["loading-screen",{"fade-out":!n.visible}])},[...t[0]||(t[0]=[q("div",{class:"spinner"},null,-1),q("p",{class:"loading-text"},"Loading…",-1)])],2))}},nv=rn(tv,[["__scopeId","data-v-e841dd92"]]);const Su="183",iv=0,Yf=1,rv=2,Ya=1,sv=2,Fs=3,Zi=0,hn=1,Qn=2,ai=0,is=1,mr=2,jf=3,Kf=4,av=5,fr=100,ov=101,lv=102,cv=103,uv=104,fv=200,hv=201,dv=202,pv=203,ic=204,rc=205,mv=206,gv=207,_v=208,vv=209,xv=210,Sv=211,bv=212,Mv=213,yv=214,sc=0,ac=1,oc=2,us=3,lc=4,cc=5,uc=6,fc=7,Sp=0,Ev=1,Tv=2,oi=0,bp=1,Mp=2,yp=3,bu=4,Ep=5,Tp=6,Ap=7,wp=300,Mr=301,fs=302,al=303,ol=304,Fo=306,hc=1e3,Ei=1001,dc=1002,Gt=1003,Av=1004,ma=1005,Jt=1006,ll=1007,gr=1008,wn=1009,Rp=1010,Cp=1011,Qs=1012,Mu=1013,ui=1014,ni=1015,yn=1016,yu=1017,Eu=1018,ea=1020,Pp=35902,Dp=35899,Ip=1021,Lp=1022,kn=1023,Ci=1026,_r=1027,Up=1028,Tu=1029,hs=1030,Au=1031,wu=1033,ja=33776,Ka=33777,Za=33778,Ja=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,Sc=37496,bc=37488,Mc=37489,yc=37490,Ec=37491,Tc=37808,Ac=37809,wc=37810,Rc=37811,Cc=37812,Pc=37813,Dc=37814,Ic=37815,Lc=37816,Uc=37817,Nc=37818,Fc=37819,Oc=37820,kc=37821,Bc=36492,zc=36494,Vc=36495,Hc=36283,Gc=36284,Wc=36285,Xc=36286,wv=3200,Rv=0,Cv=1,$i="",Tn="srgb",ds="srgb-linear",fo="linear",pt="srgb",Pr=7680,Zf=519,Pv=512,Dv=513,Iv=514,Ru=515,Lv=516,Uv=517,Cu=518,Nv=519,$c=35044,Jf="300 es",ii=2e3,ho=2001;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ov(){const n=po("canvas");return n.style.display="block",n}const Qf={};function mo(...n){const e="THREE."+n.shift();console.log(e,...n)}function Np(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Np(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Np(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function go(...n){const e=n.join(" ");e in Qf||(Qf[e]=!0,Xe(...n))}function kv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Bv={[sc]:ac,[oc]:uc,[lc]:fc,[us]:cc,[ac]:sc,[uc]:oc,[fc]:lc,[cc]:us};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=Math.PI/180,qc=180/Math.PI;function ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function zv(n,e){return(n%e+e)%e}function ul(n,e,t){return(1-t)*n+t*e}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],b=s[a+3];if(f!==b||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*b;m<0&&(h=-h,p=-p,g=-g,b=-b,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),E=Math.sin(v);d=Math.sin(d*v)/E,o=Math.sin(o*v)/E,l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+b*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+b*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new $,eh=new _s;class Ze{constructor(e,t,i,r,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],b=r[0],m=r[3],d=r[6],v=r[1],E=r[4],S=r[7],P=r[2],A=r[5],L=r[8];return s[0]=a*b+o*v+l*P,s[3]=a*m+o*E+l*A,s[6]=a*d+o*S+l*L,s[1]=c*b+u*v+f*P,s[4]=c*m+u*E+f*A,s[7]=c*d+u*S+f*L,s[2]=h*b+p*v+g*P,s[5]=h*m+p*E+g*A,s[8]=h*d+p*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Ze,th=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),n}const ot=Vv();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Dr;class Hv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dr===void 0&&(Dr=po("canvas")),Dr.width=e.width,Dr.height=e.height;const r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(dl(r[a].image)):s.push(dl(r[a]))}else s=dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Wv=0;const pl=new $;class tn extends gs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Ei,r=Ei,s=Jt,a=gr,o=kn,l=wn,c=tn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=ji(),this.name="",this.source=new Pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=wp;tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,P=(d+1)/2,A=(u+h)/4,L=(f+b)/4,x=(g+m)/4;return E>S&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=L/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=x/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=x/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-b)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fp extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $v extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,b=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,Yv)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ni.crossVectors(i,_n),Ni.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ni.crossVectors(i,_n)),Ni.normalize(),ga.crossVectors(_n,Ni),r[0]=Ni.x,r[4]=ga.x,r[8]=_n.x,r[1]=Ni.y,r[5]=ga.y,r[9]=_n.y,r[2]=Ni.z,r[6]=ga.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],b=i[6],m=i[10],d=i[14],v=i[3],E=i[7],S=i[11],P=i[15],A=r[0],L=r[4],x=r[8],C=r[12],ie=r[1],U=r[5],H=r[9],G=r[13],ee=r[2],W=r[6],X=r[10],O=r[14],ae=r[3],he=r[7],_e=r[11],Me=r[15];return s[0]=a*A+o*ie+l*ee+c*ae,s[4]=a*L+o*U+l*W+c*he,s[8]=a*x+o*H+l*X+c*_e,s[12]=a*C+o*G+l*O+c*Me,s[1]=u*A+f*ie+h*ee+p*ae,s[5]=u*L+f*U+h*W+p*he,s[9]=u*x+f*H+h*X+p*_e,s[13]=u*C+f*G+h*O+p*Me,s[2]=g*A+b*ie+m*ee+d*ae,s[6]=g*L+b*U+m*W+d*he,s[10]=g*x+b*H+m*X+d*_e,s[14]=g*C+b*G+m*O+d*Me,s[3]=v*A+E*ie+S*ee+P*ae,s[7]=v*L+E*U+S*W+P*he,s[11]=v*x+E*H+S*X+P*_e,s[15]=v*C+E*G+S*O+P*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15],v=l*p-c*h,E=o*p-c*f,S=o*h-l*f,P=a*p-c*u,A=a*h-l*u,L=a*f-o*u;return t*(b*v-m*E+d*S)-i*(g*v-m*P+d*A)+r*(g*E-b*P+d*L)-s*(g*S-b*A+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],v=t*o-i*a,E=t*l-r*a,S=t*c-s*a,P=i*l-r*o,A=i*c-s*o,L=r*c-s*l,x=u*b-f*g,C=u*m-h*g,ie=u*d-p*g,U=f*m-h*b,H=f*d-p*b,G=h*d-p*m,ee=v*G-E*H+S*U+P*ie-A*C+L*x;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ee;return e[0]=(o*G-l*H+c*U)*W,e[1]=(r*H-i*G-s*U)*W,e[2]=(b*L-m*A+d*P)*W,e[3]=(h*A-f*L-p*P)*W,e[4]=(l*ie-a*G-c*C)*W,e[5]=(t*G-r*ie+s*C)*W,e[6]=(m*S-g*L-d*E)*W,e[7]=(u*L-h*S+p*E)*W,e[8]=(a*H-o*ie+c*x)*W,e[9]=(i*ie-t*H-s*x)*W,e[10]=(g*A-b*S+d*v)*W,e[11]=(f*S-u*A-p*v)*W,e[12]=(o*C-a*U-l*x)*W,e[13]=(t*U-i*C+r*x)*W,e[14]=(b*E-g*P-m*v)*W,e[15]=(u*P-f*E+h*v)*W,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,b=a*u,m=a*f,d=o*f,v=l*c,E=l*u,S=l*f,P=i.x,A=i.y,L=i.z;return r[0]=(1-(b+d))*P,r[1]=(p+S)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+E)*L,r[9]=(m-v)*L,r[10]=(1-(h+b))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),l=Ir.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ln.copy(this);const c=1/a,u=1/o,f=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,b;if(l)g=s/(a-s),b=a*s/(a-s);else if(o===ii)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===ho)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,b;if(l)g=1/(a-s),b=a/(a-s);else if(o===ii)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===ho)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new $,Ln=new Pt,qv=new $(0,0,0),Yv=new $(1,1,1),Ni=new $,ga=new $,_n=new $,ih=new Pt,rh=new _s;class Pi{constructor(e=0,t=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jv=0;const sh=new $,Lr=new _s,gi=new Pt,_a=new $,Ts=new $,Kv=new $,Zv=new _s,ah=new $(1,0,0),oh=new $(0,1,0),lh=new $(0,0,1),ch={type:"added"},Jv={type:"removed"},Ur={type:"childadded",child:null},ml={type:"childremoved",child:null};class un extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,t=new Pi,i=new _s,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Ts,_a,this.up):gi.lookAt(_a,Ts,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(gi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vr extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qv={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},va={h:0,s:0,l:0};function _l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=zv(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_l(a,s,e+1/3),this.g=_l(a,s,e),this.b=_l(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ot.workingToColorSpace(qt.copy(this),e),Math.round(rt(qt.r*255,0,255))*65536+Math.round(rt(qt.g*255,0,255))*256+Math.round(rt(qt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Tn){ot.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(va);const i=ul(Fi.h,va.h,t),r=ul(Fi.s,va.s,t),s=ul(Fi.l,va.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new We;We.NAMES=kp;class ex extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Un=new $,_i=new $,vl=new $,vi=new $,Nr=new $,Fr=new $,uh=new $,xl=new $,Sl=new $,bl=new $,Ml=new It,yl=new It,El=new It;class Rn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Un.subVectors(r,t),_i.subVectors(i,t),vl.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(_i),l=Un.dot(vl),c=_i.dot(_i),u=_i.dot(vl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ml.setScalar(0),yl.setScalar(0),El.setScalar(0),Ml.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ml,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(El,s.z),a}static isFrontFacing(e,t,i,r){return Un.subVectors(i,t),_i.subVectors(e,t),Un.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Un.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Nr.subVectors(r,i),Fr.subVectors(s,i),xl.subVectors(e,i);const l=Nr.dot(xl),c=Fr.dot(xl);if(l<=0&&c<=0)return t.copy(i);Sl.subVectors(e,r);const u=Nr.dot(Sl),f=Fr.dot(Sl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Nr,a);bl.subVectors(e,s);const p=Nr.dot(bl),g=Fr.dot(bl);if(g>=0&&p<=g)return t.copy(s);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return uh.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(uh,o);const d=1/(m+b+h);return a=b*d,o=h*d,t.copy(i).addScaledVector(Nr,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class aa{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Sa.subVectors(this.max,As),Or.subVectors(e.a,As),kr.subVectors(e.b,As),Br.subVectors(e.c,As),Oi.subVectors(kr,Or),ki.subVectors(Br,kr),ir.subVectors(Or,Br);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-ir.z,ir.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,ir.z,0,-ir.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-ir.y,ir.x,0];return!Tl(t,Or,kr,Br,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Or,kr,Br,Sa))?!1:(ba.crossVectors(Oi,ki),t=[ba.x,ba.y,ba.z],Tl(t,Or,kr,Br,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new $,new $,new $,new $,new $,new $,new $,new $],Nn=new $,xa=new aa,Or=new $,kr=new $,Br=new $,Oi=new $,ki=new $,ir=new $,As=new $,Sa=new $,ba=new $,rr=new $;function Tl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){rr.fromArray(n,s);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lt=new $,Ma=new Ge;let tx=0;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}}class Bp extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zp extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const nx=new aa,ws=new $,Al=new $;class Oo{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Al)),this.expandByPoint(ws.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ix=0;const En=new Pt,wl=new un,zr=new $,vn=new aa,Rs=new aa,Bt=new $;class mn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?zp:Bp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(vn.min,Rs.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,Rs.max),vn.expandByPoint(Bt)):(vn.expandByPoint(Rs.min),vn.expandByPoint(Rs.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),Bt.add(zr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new $,l[x]=new $;const c=new $,u=new $,f=new $,h=new Ge,p=new Ge,g=new Ge,b=new $,m=new $;function d(x,C,ie){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,ie),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,ie),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),o[x].add(b),o[C].add(b),o[ie].add(b),l[x].add(m),l[C].add(m),l[ie].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,C=v.length;x<C;++x){const ie=v[x],U=ie.start,H=ie.count;for(let G=U,ee=U+H;G<ee;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new $,S=new $,P=new $,A=new $;function L(x){P.fromBufferAttribute(r,x),A.copy(P);const C=o[x];E.copy(C),E.sub(P.multiplyScalar(P.dot(C))).normalize(),S.crossVectors(A,C);const U=S.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,U)}for(let x=0,C=v.length;x<C;++x){const ie=v[x],U=ie.start,H=ie.count;for(let G=U,ee=U+H;G<ee;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new pn(h,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new $;class _o{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let sx=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=is,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==rc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qa extends vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vr;const Cs=new $,Hr=new $,Gr=new $,Wr=new Ge,Ps=new Ge,Vp=new Pt,ya=new $,Ds=new $,Ea=new $,fh=new Ge,Rl=new Ge,hh=new Ge;class Cl extends un{constructor(e=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rx(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new _o(i,3,0,!1)),Vr.setAttribute("uv",new _o(i,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ta(ya.set(-.5,-.5,0),Gr,a,Hr,r,s),Ta(Ds.set(.5,-.5,0),Gr,a,Hr,r,s),Ta(Ea.set(.5,.5,0),Gr,a,Hr,r,s),fh.set(0,0),Rl.set(1,0),hh.set(1,1);let o=e.ray.intersectTriangle(ya,Ds,Ea,!1,Cs);if(o===null&&(Ta(Ds.set(-.5,.5,0),Gr,a,Hr,r,s),Rl.set(0,1),o=e.ray.intersectTriangle(ya,Ea,Ds,!1,Cs),o===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||t.push({distance:l,point:Cs.clone(),uv:Rn.getInterpolation(Cs,ya,Ds,Ea,fh,Rl,hh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ta(n,e,t,i,r,s){Wr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ps.x=s*Wr.x-r*Wr.y,Ps.y=r*Wr.x+s*Wr.y):Ps.copy(Wr),n.copy(e),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(Vp)}const Si=new $,Pl=new $,Aa=new $,Bi=new $,Dl=new $,wa=new $,Il=new $;class Hp{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Bi.dot(this.direction),l=-Bi.dot(Aa),c=Bi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pl).addScaledVector(Aa,h),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){Dl.subVectors(t,e),wa.subVectors(i,e),Il.crossVectors(Dl,wa);let a=this.direction.dot(Il),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(Bi,wa));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(Bi));if(c<0||l+c>a)return null;const u=-o*Bi.dot(Il);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Du extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dh=new Pt,sr=new Hp,Ra=new Oo,ph=new $,Ca=new $,Pa=new $,Da=new $,Ll=new $,Ia=new $,mh=new $,La=new $;class Wn extends un{constructor(e=new mn,t=new Du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ll.fromBufferAttribute(f,e),a?Ia.addScaledVector(Ll,u):Ia.addScaledVector(Ll.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Ra.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ra,ph)===null||sr.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(dh.copy(s).invert(),sr.copy(e.ray).applyMatrix4(dh),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=E;S<P;S+=3){const A=o.getX(S),L=o.getX(S+1),x=o.getX(S+2);r=Ua(this,d,e,i,c,u,f,A,L,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){const v=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);r=Ua(this,a,e,i,c,u,f,v,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=E;S<P;S+=3){const A=S,L=S+1,x=S+2;r=Ua(this,d,e,i,c,u,f,A,L,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){const v=m,E=m+1,S=m+2;r=Ua(this,a,e,i,c,u,f,v,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ax(n,e,t,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:n}}function Ua(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ca),n.getVertexPosition(l,Pa),n.getVertexPosition(c,Da);const u=ax(n,e,t,i,Ca,Pa,Da,mh);if(u){const f=new $;Rn.getBarycoord(mh,Ca,Pa,Da,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,l,c,f,new Ge)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,l,c,f,new Ge)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};Rn.getNormal(Ca,Pa,Da,h.normal),u.face=h,u.barycoord=f}return u}class ox extends tn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Gt,u=Gt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=new $,lx=new $,cx=new Ze;class ur{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ul.subVectors(i,t).cross(lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cx.getNormalMatrix(e),r=this.coplanarPoint(Ul).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Oo,ux=new Ge(.5,.5),Na=new $;class Gp{constructor(e=new ur,t=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],b=s[9],m=s[10],d=s[11],v=s[12],E=s[13],S=s[14],P=s[15];if(r[0].setComponents(c-a,p-u,d-g,P-v).normalize(),r[1].setComponents(c+a,p+u,d+g,P+v).normalize(),r[2].setComponents(c+o,p+f,d+b,P+E).normalize(),r[3].setComponents(c-o,p-f,d-b,P-E).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,d-m,P-S).normalize();else if(r[4].setComponents(c-l,p-h,d-m,P-S).normalize(),t===ii)r[5].setComponents(c+l,p+h,d+m,P+S).normalize();else if(t===ho)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const t=ux.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wp extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gh=new Pt,Yc=new Hp,Fa=new Oo,Oa=new $;class fx extends un{constructor(e=new mn,t=new Wp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;gh.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,b=p;g<b;g++){const m=c.getX(g);Oa.fromBufferAttribute(f,m),_h(Oa,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,b=p;g<b;g++)Oa.fromBufferAttribute(f,g),_h(Oa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _h(n,e,t,i,r,s,a){const o=Yc.distanceSqToPoint(n);if(o<t){const l=new $;Yc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xp extends tn{constructor(e=[],t=Mr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ko extends tn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends tn{constructor(e,t,i=ui,r,s,a,o=Gt,l=Gt,c,u=Ci,f=1){if(u!==Ci&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hx extends ta{constructor(e,t=ui,i=Mr,r,s,a=Gt,o=Gt,l,c=Ci){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $p extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oa extends mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(f,2));function g(b,m,d,v,E,S,P,A,L,x,C){const ie=S/L,U=P/x,H=S/2,G=P/2,ee=A/2,W=L+1,X=x+1;let O=0,ae=0;const he=new $;for(let _e=0;_e<X;_e++){const Me=_e*U-G;for(let xe=0;xe<W;xe++){const He=xe*ie-H;he[b]=He*v,he[m]=Me*E,he[d]=ee,c.push(he.x,he.y,he.z),he[b]=0,he[m]=0,he[d]=A>0?1:-1,u.push(he.x,he.y,he.z),f.push(xe/L),f.push(1-_e/x),O+=1}}for(let _e=0;_e<x;_e++)for(let Me=0;Me<L;Me++){const xe=h+Me+W*_e,He=h+Me+W*(_e+1),tt=h+(Me+1)+W*(_e+1),Je=h+(Me+1)+W*_e;l.push(xe,He,Je),l.push(He,tt,Je),ae+=6}o.addGroup(p,ae,C),p+=ae,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bo extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],b=[],m=[];for(let d=0;d<u;d++){const v=d*h-a;for(let E=0;E<c;E++){const S=E*f-s;g.push(S,-v,0),b.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const E=v+c*d,S=v+c*(d+1),P=v+1+c*(d+1),A=v+1+c*d;p.push(E,S,A),p.push(S,P,A)}this.setIndex(p),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(b,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function dx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const vo={clone:ps,merge:on};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gx extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _x extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ka=new $,Ba=new _s,qn=new $;class Yp extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ba,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ka,Ba,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new $,vh=new Ge,xh=new Ge;class An extends Yp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Iu extends Yp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=-90,$r=1;class xx extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Xr,$r,e,t);r.layers=this.layers,this.add(r);const s=new An(Xr,$r,e,t);s.layers=this.layers,this.add(s);const a=new An(Xr,$r,e,t);a.layers=this.layers,this.add(a);const o=new An(Xr,$r,e,t);o.layers=this.layers,this.add(o);const l=new An(Xr,$r,e,t);l.layers=this.layers,this.add(l);const c=new An(Xr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sx extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Mx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Mx(){this._document.hidden===!1&&this.reset()}class yx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sh(n,e,t,i){const r=Ex(i);switch(t){case Ip:return n*e;case Up:return n*e/r.components*r.byteLength;case Tu:return n*e/r.components*r.byteLength;case hs:return n*e*2/r.components*r.byteLength;case Au:return n*e*2/r.components*r.byteLength;case Lp:return n*e*3/r.components*r.byteLength;case kn:return n*e*4/r.components*r.byteLength;case wu:return n*e*4/r.components*r.byteLength;case ja:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:case _c:return Math.max(n,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(e,8)/2;case vc:case xc:case bc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sc:case yc:case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bc:case zc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ex(n){switch(n){case wn:case Rp:return{byteLength:1,components:1};case Qs:case Cp:case yn:return{byteLength:2,components:1};case yu:case Eu:return{byteLength:2,components:4};case ui:case Mu:case ni:return{byteLength:4,components:1};case Pp:case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);function jp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],b=f[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const b=f[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",iS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ES=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ub=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ub=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Ax,alphahash_pars_fragment:wx,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Px,alphatest_pars_fragment:Dx,aomap_fragment:Ix,aomap_pars_fragment:Lx,batching_pars_vertex:Ux,batching_vertex:Nx,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:kx,iridescence_fragment:Bx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:$x,color_pars_vertex:qx,color_vertex:Yx,common:jx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Qx,emissivemap_fragment:eS,emissivemap_pars_fragment:tS,colorspace_fragment:nS,colorspace_pars_fragment:iS,envmap_fragment:rS,envmap_common_pars_fragment:sS,envmap_pars_fragment:aS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:vS,envmap_vertex:lS,fog_vertex:cS,fog_pars_vertex:uS,fog_fragment:fS,fog_pars_fragment:hS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:gS,lights_pars_begin:_S,lights_toon_fragment:xS,lights_toon_pars_fragment:SS,lights_phong_fragment:bS,lights_phong_pars_fragment:MS,lights_physical_fragment:yS,lights_physical_pars_fragment:ES,lights_fragment_begin:TS,lights_fragment_maps:AS,lights_fragment_end:wS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:DS,map_fragment:IS,map_pars_fragment:LS,map_particle_fragment:US,map_particle_pars_fragment:NS,metalnessmap_fragment:FS,metalnessmap_pars_fragment:OS,morphinstance_vertex:kS,morphcolor_vertex:BS,morphnormal_vertex:zS,morphtarget_pars_vertex:VS,morphtarget_vertex:HS,normal_fragment_begin:GS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:$S,normal_vertex:qS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:KS,clearcoat_pars_fragment:ZS,iridescence_pars_fragment:JS,opaque_fragment:QS,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:ub,skinbase_vertex:fb,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:xb,transmission_pars_fragment:Sb,uv_pars_fragment:bb,uv_pars_vertex:Mb,uv_vertex:yb,worldpos_vertex:Eb,background_vert:Tb,background_frag:Ab,backgroundCube_vert:wb,backgroundCube_frag:Rb,cube_vert:Cb,cube_frag:Pb,depth_vert:Db,depth_frag:Ib,distance_vert:Lb,distance_frag:Ub,equirect_vert:Nb,equirect_frag:Fb,linedashed_vert:Ob,linedashed_frag:kb,meshbasic_vert:Bb,meshbasic_frag:zb,meshlambert_vert:Vb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Wb,meshnormal_vert:Xb,meshnormal_frag:$b,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:jb,meshphysical_frag:Kb,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:Qb,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:rM},Te={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Jn={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Jn.physical={uniforms:on([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const za={r:0,b:0,g:0},or=new Pi,sM=new Pt;function aM(n,e,t,i,r,s){const a=new We(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(v){let E=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(v,E){const S=p(E);S&&(S.isCubeTexture||S.mapping===Fo)?(c===void 0&&(c=new Wn(new oa(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ps(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),or.copy(E.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(or)),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Wn(new Bo(2,2),new Wt({name:"BackgroundMaterial",uniforms:ps(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(za,qp(n)),t.buffers.color.setClear(za.r,za.g,za.b,E,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:b,dispose:d}}function oM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(U,H,G,ee,W){let X=!1;const O=f(U,ee,G,H);s!==O&&(s=O,c(s.object)),X=p(U,ee,G,W),X&&g(U,ee,G,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(U,H,G,ee),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function f(U,H,G,ee){const W=ee.wireframe===!0;let X=i[H.id];X===void 0&&(X={},i[H.id]=X);const O=U.isInstancedMesh===!0?U.id:0;let ae=X[O];ae===void 0&&(ae={},X[O]=ae);let he=ae[G.id];he===void 0&&(he={},ae[G.id]=he);let _e=he[W];return _e===void 0&&(_e=h(l()),he[W]=_e),_e}function h(U){const H=[],G=[],ee=[];for(let W=0;W<t;W++)H[W]=0,G[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:ee,object:U,attributes:{},index:null}}function p(U,H,G,ee){const W=s.attributes,X=H.attributes;let O=0;const ae=G.getAttributes();for(const he in ae)if(ae[he].location>=0){const Me=W[he];let xe=X[he];if(xe===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor)),Me===void 0||Me.attribute!==xe||xe&&Me.data!==xe.data)return!0;O++}return s.attributesNum!==O||s.index!==ee}function g(U,H,G,ee){const W={},X=H.attributes;let O=0;const ae=G.getAttributes();for(const he in ae)if(ae[he].location>=0){let Me=X[he];Me===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor));const xe={};xe.attribute=Me,Me&&Me.data&&(xe.data=Me.data),W[he]=xe,O++}s.attributes=W,s.attributesNum=O,s.index=ee}function b(){const U=s.newAttributes;for(let H=0,G=U.length;H<G;H++)U[H]=0}function m(U){d(U,0)}function d(U,H){const G=s.newAttributes,ee=s.enabledAttributes,W=s.attributeDivisors;G[U]=1,ee[U]===0&&(n.enableVertexAttribArray(U),ee[U]=1),W[U]!==H&&(n.vertexAttribDivisor(U,H),W[U]=H)}function v(){const U=s.newAttributes,H=s.enabledAttributes;for(let G=0,ee=H.length;G<ee;G++)H[G]!==U[G]&&(n.disableVertexAttribArray(G),H[G]=0)}function E(U,H,G,ee,W,X,O){O===!0?n.vertexAttribIPointer(U,H,G,W,X):n.vertexAttribPointer(U,H,G,ee,W,X)}function S(U,H,G,ee){b();const W=ee.attributes,X=G.getAttributes(),O=H.defaultAttributeValues;for(const ae in X){const he=X[ae];if(he.location>=0){let _e=W[ae];if(_e===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor)),_e!==void 0){const Me=_e.normalized,xe=_e.itemSize,He=e.get(_e);if(He===void 0)continue;const tt=He.buffer,Je=He.type,B=He.bytesPerElement,D=Je===n.INT||Je===n.UNSIGNED_INT||_e.gpuType===Mu;if(_e.isInterleavedBufferAttribute){const Y=_e.data,ne=Y.stride,fe=_e.offset;if(Y.isInstancedInterleavedBuffer){for(let me=0;me<he.locationSize;me++)d(he.location+me,Y.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let me=0;me<he.locationSize;me++)m(he.location+me);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let me=0;me<he.locationSize;me++)E(he.location+me,xe/he.locationSize,Je,Me,ne*B,(fe+xe/he.locationSize*me)*B,D)}else{if(_e.isInstancedBufferAttribute){for(let Y=0;Y<he.locationSize;Y++)d(he.location+Y,_e.meshPerAttribute);U.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Y=0;Y<he.locationSize;Y++)m(he.location+Y);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Y=0;Y<he.locationSize;Y++)E(he.location+Y,xe/he.locationSize,Je,Me,xe*B,xe/he.locationSize*Y*B,D)}}else if(O!==void 0){const Me=O[ae];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(he.location,Me);break;case 3:n.vertexAttrib3fv(he.location,Me);break;case 4:n.vertexAttrib4fv(he.location,Me);break;default:n.vertexAttrib1fv(he.location,Me)}}}}v()}function P(){C();for(const U in i){const H=i[U];for(const G in H){const ee=H[G];for(const W in ee){const X=ee[W];for(const O in X)u(X[O].object),delete X[O];delete ee[W]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const H=i[U.id];for(const G in H){const ee=H[G];for(const W in ee){const X=ee[W];for(const O in X)u(X[O].object),delete X[O];delete ee[W]}}delete i[U.id]}function L(U){for(const H in i){const G=i[H];for(const ee in G){const W=G[ee];if(W[U.id]===void 0)continue;const X=W[U.id];for(const O in X)u(X[O].object),delete X[O];delete W[U.id]}}}function x(U){for(const H in i){const G=i[H],ee=U.isInstancedMesh===!0?U.id:0,W=G[ee];if(W!==void 0){for(const X in W){const O=W[X];for(const ae in O)u(O[ae].object),delete O[ae];delete W[X]}delete G[ee],Object.keys(G).length===0&&delete i[H]}}}function C(){ie(),a=!0,s!==r&&(s=r,c(s.object))}function ie(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:ie,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function lM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let b=0;b<f;b++)g+=u[b]*h[b];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==kn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const x=L===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ni&&!x)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:P,samples:A}}function uM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ur,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,E=v*4;let S=d.clippingState||null;l.value=S,S=u(g,h,E,p);for(let P=0;P!==E;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const d=p+b*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==b;++E,S+=4)a.copy(f[E]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const qi=4,bh=[.125,.215,.35,.446,.526,.582],hr=20,fM=256,Is=new Iu,Mh=new We;let Nl=null,Fl=0,Ol=0,kl=!1;const hM=new $;class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=hM}=s;Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Fl,Ol),this._renderer.xr.enabled=kl,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:yn,format:kn,colorSpace:ds,depthBuffer:!1},r=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dM(s)),this._blurMaterial=mM(s,e,t),this._ggxMaterial=pM(s,e,t)}return r}_compileMaterial(e){const t=new Wn(new mn,e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,i,r,s){const l=new An(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Mh),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new oa,new Du({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(Mh),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const P=this._cubeSize;qr(r,S*P,E>2?P:0,P,P),f.setRenderTarget(r),d&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-qi?i-g+qi:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,qr(s,m,d,3*b,2*b),r.setRenderTarget(s),r.render(o,Is),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,qr(e,m,d,3*b,2*b),r.setRenderTarget(e),r.render(o,Is)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):hr;m>hr&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const d=[];let v=0;for(let L=0;L<hr;++L){const x=L/b,C=Math.exp(-x*x/2);d.push(C),L===0?v+=C:L<m&&(v+=2*C)}for(let L=0;L<d.length;L++)d[L]=d[L]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const S=this._sizeLods[r],P=3*S*(r>E-qi?r-E+qi:0),A=4*(this._cubeSize-S);qr(t,P,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Is)}}function dM(n){const e=[],t=[],i=[];let r=n;const s=n-qi+1+bh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-qi?l=bh[a-n+qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,b=3,m=2,d=1,v=new Float32Array(b*g*p),E=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,x=A>2?0:-1,C=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];v.set(C,b*g*A),E.set(h,m*g*A);const ie=[A,A,A,A,A,A];S.set(ie,d*g*A)}const P=new mn;P.setAttribute("position",new pn(v,b)),P.setAttribute("uv",new pn(E,m)),P.setAttribute("faceIndex",new pn(S,d)),i.push(new Wn(P,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Eh(n,e,t){const i=new dn(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pM(n,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mM(n,e,t){const i=new Float32Array(hr),r=new $(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Th(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ah(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kp extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ai});s.uniforms.tEquirect.value=t;const a=new Wn(r,s),o=t.minFilter;return t.minFilter===gr&&(t.minFilter=Jt),new xx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function gM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===al||p===ol)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const b=new Kp(g.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===al||p===ol,b=p===Mr||p===fs;if(g||b){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new yh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new yh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===al?h.mapping=Mr:p===ol&&(h.mapping=fs),h}function l(h){let p=0;const g=6;for(let b=0;b<g;b++)h[b]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function _M(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&go("WebGLRenderer: "+i+" extension not supported."),r}}}function vM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const v=p.array;b=p.version;for(let E=0,S=v.length;E<S;E+=3){const P=v[E+0],A=v[E+1],L=v[E+2];h.push(P,A,A,L,L,P)}}else{const v=g.array;b=g.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const P=E+0,A=E+1,L=E+2;h.push(P,A,A,L,L,P)}}const m=new(g.count>=65535?zp:Bp)(h,1);m.version=b;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xM(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,b,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*b[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function SM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bM(n,e,t){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let ie=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",ie)};var p=ie;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*A*4*f),x=new Fp(L,P,A,f);x.type=ni,x.needsUpdate=!0;const C=S*4;for(let U=0;U<f;U++){const H=d[U],G=v[U],ee=E[U],W=P*A*4*U;for(let X=0;X<H.count;X++){const O=X*C;g===!0&&(r.fromBufferAttribute(H,X),L[W+O+0]=r.x,L[W+O+1]=r.y,L[W+O+2]=r.z,L[W+O+3]=0),b===!0&&(r.fromBufferAttribute(G,X),L[W+O+4]=r.x,L[W+O+5]=r.y,L[W+O+6]=r.z,L[W+O+7]=0),m===!0&&(r.fromBufferAttribute(ee,X),L[W+O+8]=r.x,L[W+O+9]=r.y,L[W+O+10]=r.z,L[W+O+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:x,size:new Ge(P,A)},i.set(o,h),o.addEventListener("dispose",ie)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function MM(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const yM={[bp]:"LINEAR_TONE_MAPPING",[Mp]:"REINHARD_TONE_MAPPING",[yp]:"CINEON_TONE_MAPPING",[bu]:"ACES_FILMIC_TONE_MAPPING",[Tp]:"AGX_TONE_MAPPING",[Ap]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function EM(n,e,t,i,r){const s=new dn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new dn(e,t,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new mn;o.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const l=new gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wn(o,l),u=new Iu(-1,1,1,-1,0,1);let f=null,h=null,p=!1,g,b=null,m=[],d=!1;this.setSize=function(v,E){s.setSize(v,E),a.setSize(v,E);for(let S=0;S<m.length;S++){const P=m[S];P.setSize&&P.setSize(v,E)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const E=s.width,S=s.height;for(let P=0;P<m.length;P++){const A=m[P];A.setSize&&A.setSize(E,S)}},this.begin=function(v,E){if(p||v.toneMapping===oi&&m.length===0)return!1;if(b=E,E!==null){const S=E.width,P=E.height;(s.width!==S||s.height!==P)&&this.setSize(S,P)}return d===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=oi,!0},this.hasRenderPass=function(){return d},this.end=function(v,E){v.toneMapping=g,p=!0;let S=s,P=a;for(let A=0;A<m.length;A++){const L=m[A];if(L.enabled!==!1&&(L.render(v,P,S,E),L.needsSwap!==!1)){const x=S;S=P,P=x}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},ot.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const A=yM[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(b),v.render(c,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zp=new tn,jc=new ta(1,1),Jp=new Fp,Qp=new $v,em=new Xp,wh=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wh[r];if(s===void 0&&(s=new Float32Array(r),wh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function CM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Ot(t,i)}}function PM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Ot(t,i)}}function DM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ot(t,i)}}function IM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function zM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=t.isReversedDepthBuffer()?Cu:Ru,s=jc):s=Zp,t.setTexture2D(e||s,r)}function VM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qp,r)}function HM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||em,r)}function GM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jp,r)}function WM(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return wM;case 35666:return RM;case 35674:return CM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return UM;case 35669:case 35673:return NM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function XM(n,e){n.uniform1fv(this.addr,e)}function $M(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function qM(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function YM(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function jM(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KM(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZM(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JM(n,e){n.uniform1iv(this.addr,e)}function QM(n,e){n.uniform2iv(this.addr,e)}function ey(n,e){n.uniform3iv(this.addr,e)}function ty(n,e){n.uniform4iv(this.addr,e)}function ny(n,e){n.uniform1uiv(this.addr,e)}function iy(n,e){n.uniform2uiv(this.addr,e)}function ry(n,e){n.uniform3uiv(this.addr,e)}function sy(n,e){n.uniform4uiv(this.addr,e)}function ay(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=jc:a=Zp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function oy(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qp,s[a])}function ly(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||em,s[a])}function cy(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Jp,s[a])}function uy(n){switch(n){case 5126:return XM;case 35664:return $M;case 35665:return qM;case 35666:return YM;case 35674:return jM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return ry;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}class fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WM(t.type)}}class hy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}}class dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function py(n,e,t){const i=n.name,r=i.length;for(Bl.lastIndex=0;;){const s=Bl.exec(i),a=Bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ih(t,c===void 0?new fy(o,n,e):new hy(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new dy(o),Ih(t,f)),t=f}}}class eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);py(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const my=37297;let gy=0;function _y(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Uh=new Ze;function vy(n){ot._getMatrix(Uh,ot.workingColorSpace,n);const e=`mat3( ${Uh.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case fo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_y(n.getShaderSource(e),o)}else return s}function xy(n,e){const t=vy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Sy={[bp]:"Linear",[Mp]:"Reinhard",[yp]:"Cineon",[bu]:"ACESFilmic",[Tp]:"AgX",[Ap]:"Neutral",[Ep]:"Custom"};function by(n,e){const t=Sy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new $;function My(){ot.getLuminanceCoefficients(Va);const n=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Ey(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ty(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Os(n){return n!==""}function Fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(Ay,Ry)}const wy=new Map;function Ry(n,e){let t=Qe[e];if(t===void 0){const i=wy.get(e);if(i!==void 0)t=Qe[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}const Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(n){return n.replace(Cy,Py)}function Py(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dy={[Ya]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Iy(n){return Dy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ly={[Mr]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function Uy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ly[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ny={[fs]:"ENVMAP_MODE_REFRACTION"};function Fy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ny[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Oy={[Sp]:"ENVMAP_BLENDING_MULTIPLY",[Ev]:"ENVMAP_BLENDING_MIX",[Tv]:"ENVMAP_BLENDING_ADD"};function ky(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Oy[n.combine]||"ENVMAP_BLENDING_NONE"}function By(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Iy(t),c=Uy(t),u=Fy(t),f=ky(t),h=By(t),p=yy(t),g=Ey(s),b=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),d.length>0&&(d+=`
`)):(m=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),d=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==oi?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),My(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=Kc(a),a=Fh(a,t),a=Oh(a,t),o=Kc(o),o=Fh(o,t),o=Oh(o,t),a=kh(a),o=kh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=v+m+a,S=v+d+o,P=Lh(r,r.VERTEX_SHADER,E),A=Lh(r,r.FRAGMENT_SHADER,S);r.attachShader(b,P),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function L(U){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(b)||"",G=r.getShaderInfoLog(P)||"",ee=r.getShaderInfoLog(A)||"",W=H.trim(),X=G.trim(),O=ee.trim();let ae=!0,he=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,P,A);else{const _e=Nh(r,P,"vertex"),Me=Nh(r,A,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+_e+`
`+Me)}else W!==""?Xe("WebGLProgram: Program Info Log:",W):(X===""||O==="")&&(he=!1);he&&(U.diagnostics={runnable:ae,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(P),r.deleteShader(A),x=new eo(r,b),C=Ty(r,b)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let ie=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ie===!1&&(ie=r.getProgramParameter(b,my)),ie},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=A,this}let Vy=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gy(e),t.set(e,i)),i}}class Gy{constructor(e){this.id=Vy++,this.code=e,this.usedTimes=0}}function Wy(n,e,t,i,r,s){const a=new Op,o=new Hy,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,C,ie,U,H){const G=U.fog,ee=H.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||W,X),ae=O&&O.mapping===Fo?O.image.height:null,he=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Me=_e!==void 0?_e.length:0;let xe=0;ee.morphAttributes.position!==void 0&&(xe=1),ee.morphAttributes.normal!==void 0&&(xe=2),ee.morphAttributes.color!==void 0&&(xe=3);let He,tt,Je,B;if(he){const dt=Jn[he];He=dt.vertexShader,tt=dt.fragmentShader}else He=x.vertexShader,tt=x.fragmentShader,o.update(x),Je=o.getVertexShaderID(x),B=o.getFragmentShaderID(x);const D=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),ne=H.isInstancedMesh===!0,fe=H.isBatchedMesh===!0,me=!!x.map,T=!!x.matcap,R=!!O,N=!!x.aoMap,I=!!x.lightMap,V=!!x.bumpMap,j=!!x.normalMap,w=!!x.displacementMap,ue=!!x.emissiveMap,le=!!x.metalnessMap,re=!!x.roughnessMap,ce=x.anisotropy>0,M=x.clearcoat>0,_=x.dispersion>0,F=x.iridescence>0,K=x.sheen>0,se=x.transmission>0,Z=ce&&!!x.anisotropyMap,ye=M&&!!x.clearcoatMap,pe=M&&!!x.clearcoatNormalMap,Ie=M&&!!x.clearcoatRoughnessMap,ke=F&&!!x.iridescenceMap,de=F&&!!x.iridescenceThicknessMap,ve=K&&!!x.sheenColorMap,Ee=K&&!!x.sheenRoughnessMap,Re=!!x.specularMap,Ce=!!x.specularColorMap,je=!!x.specularIntensityMap,k=se&&!!x.transmissionMap,be=se&&!!x.thicknessMap,Se=!!x.gradientMap,Le=!!x.alphaMap,ge=x.alphaTest>0,oe=!!x.alphaHash,Ne=!!x.extensions;let $e=oi;x.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&($e=n.toneMapping);const St={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:tt,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:fe,batchingColor:fe&&H._colorsTexture!==null,instancing:ne,instancingColor:ne&&H.instanceColor!==null,instancingMorph:ne&&H.morphTexture!==null,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ds,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:T,envMap:R,envMapMode:R&&O.mapping,envMapCubeUVHeight:ae,aoMap:N,lightMap:I,bumpMap:V,normalMap:j,displacementMap:w,emissiveMap:ue,normalMapObjectSpace:j&&x.normalMapType===Cv,normalMapTangentSpace:j&&x.normalMapType===Rv,metalnessMap:le,roughnessMap:re,anisotropy:ce,anisotropyMap:Z,clearcoat:M,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:de,sheen:K,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:Re,specularColorMap:Ce,specularIntensityMap:je,transmission:se,transmissionMap:k,thicknessMap:be,gradientMap:Se,opaque:x.transparent===!1&&x.blending===is&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:oe,combine:x.combine,mapUv:me&&g(x.map.channel),aoMapUv:N&&g(x.aoMap.channel),lightMapUv:I&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:j&&g(x.normalMap.channel),displacementMapUv:w&&g(x.displacementMap.channel),emissiveMapUv:ue&&g(x.emissiveMap.channel),metalnessMapUv:le&&g(x.metalnessMap.channel),roughnessMapUv:re&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:Re&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:je&&g(x.specularIntensityMap.channel),transmissionMapUv:k&&g(x.transmissionMap.channel),thicknessMapUv:be&&g(x.thicknessMap.channel),alphaMapUv:Le&&g(x.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(j||ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(me||Le),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||ee.attributes.normal===void 0&&j===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Y,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&ie.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:ue&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ie in x.defines)C.push(ie),C.push(x.defines[ie]);return x.isRawShaderMaterial===!1&&(d(C,x),v(C,x),C.push(n.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function d(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const C=p[x.type];let ie;if(C){const U=Jn[C];ie=vo.clone(U.uniforms)}else ie=x.uniforms;return ie}function S(x,C){let ie=u.get(C);return ie!==void 0?++ie.usedTimes:(ie=new zy(n,C,x,r),c.push(ie),u.set(C,ie)),ie}function P(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function L(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:P,releaseShaderCache:A,programs:c,dispose:L}}function Xy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $y(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,b,m,d){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:d},n[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=b,v.renderOrder=h.renderOrder,v.z=m,v.group=d),e++,v}function l(h,p,g,b,m,d){const v=o(h,p,g,b,m,d);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function c(h,p,g,b,m,d){const v=o(h,p,g,b,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,p){t.length>1&&t.sort(h||$y),i.length>1&&i.sort(p||zh),r.length>1&&r.sort(p||zh)}function f(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function qy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vh,n.set(i,[a])):r>=s.length?(a=new Vh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new We};break;case"SpotLight":t={position:new $,direction:new $,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function jy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ky=0;function Zy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jy(n){const e=new Yy,t=jy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Pt,a=new Pt;function o(c){let u=0,f=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,v=0,E=0,S=0,P=0,A=0,L=0;c.sort(Zy);for(let C=0,ie=c.length;C<ie;C++){const U=c[C],H=U.color,G=U.intensity,ee=U.distance;let W=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===hs?W=U.shadow.map.texture:W=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=H.r*G,f+=H.g*G,h+=H.b*G;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],G);L++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const O=U.shadow,ae=t.get(U);ae.shadowIntensity=O.intensity,ae.shadowBias=O.bias,ae.shadowNormalBias=O.normalBias,ae.shadowRadius=O.radius,ae.shadowMapSize=O.mapSize,i.directionalShadow[p]=ae,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=X,p++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(H).multiplyScalar(G),X.distance=ee,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[b]=X;const O=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,O.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[b]=O.matrix,U.castShadow){const ae=t.get(U);ae.shadowIntensity=O.intensity,ae.shadowBias=O.bias,ae.shadowNormalBias=O.normalBias,ae.shadowRadius=O.radius,ae.shadowMapSize=O.mapSize,i.spotShadow[b]=ae,i.spotShadowMap[b]=W,S++}b++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(H).multiplyScalar(G),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=X,m++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const O=U.shadow,ae=t.get(U);ae.shadowIntensity=O.intensity,ae.shadowBias=O.bias,ae.shadowNormalBias=O.normalBias,ae.shadowRadius=O.radius,ae.shadowMapSize=O.mapSize,ae.shadowCameraNear=O.camera.near,ae.shadowCameraFar=O.camera.far,i.pointShadow[g]=ae,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=X,g++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(G),X.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==b||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==P||x.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,x.directionalLength=p,x.pointLength=g,x.spotLength=b,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=P,x.numLightProbes=L,i.version=Ky++)}function l(c,u){let f=0,h=0,p=0,g=0,b=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const E=c[d];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function Hh(n){const e=new Jy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Qy(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hh(n),e.set(r,[o])):s>=a.length?(o=new Hh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const eE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],iE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gh=new Pt,Ls=new $,zl=new $;function rE(n,e,t){let i=new Gp;const r=new Ge,s=new Ge,a=new It,o=new _x,l=new vx,c={},u=t.maxTextureSize,f={[Zi]:hn,[hn]:Zi,[Qn]:Qn},h=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:eE,fragmentShader:tE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Wn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let d=this.type;this.render=function(A,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===sv&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const C=n.getRenderTarget(),ie=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ai),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=d!==this.type;G&&L.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(W=>W.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,W=A.length;ee<W;ee++){const X=A[ee],O=X.shadow;if(O===void 0){Xe("WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ae=O.getFrameExtents();r.multiply(ae),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,O.mapSize.y=s.y));const he=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=he,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Fs){if(X.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new dn(r.x,r.y,{format:hs,type:yn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),O.map.texture.name=X.name+".shadowMap",O.map.depthTexture=new ta(r.x,r.y,ni),O.map.depthTexture.name=X.name+".shadowMapDepth",O.map.depthTexture.format=Ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt}else X.isPointLight?(O.map=new Kp(r.x),O.map.depthTexture=new hx(r.x,ui)):(O.map=new dn(r.x,r.y),O.map.depthTexture=new ta(r.x,r.y,ui)),O.map.depthTexture.name=X.name+".shadowMap",O.map.depthTexture.format=Ci,this.type===Ya?(O.map.depthTexture.compareFunction=he?Cu:Ru,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt);O.camera.updateProjectionMatrix()}const _e=O.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<_e;Me++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(O.map),n.clear());const xe=O.getViewport(Me);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(a)}if(X.isPointLight){const xe=O.camera,He=O.matrix,tt=X.distance||xe.far;tt!==xe.far&&(xe.far=tt,xe.updateProjectionMatrix()),Ls.setFromMatrixPosition(X.matrixWorld),xe.position.copy(Ls),zl.copy(xe.position),zl.add(nE[Me]),xe.up.copy(iE[Me]),xe.lookAt(zl),xe.updateMatrixWorld(),He.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Gh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Gh,xe.coordinateSystem,xe.reversedDepth)}else O.updateMatrices(X);i=O.getFrustum(),S(L,x,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===Fs&&v(O,x),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(C,ie,U)};function v(A,L){const x=e.update(b);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new dn(r.x,r.y,{format:hs,type:yn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,x,h,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,x,p,b,null)}function E(A,L,x,C){let ie=null;const U=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)ie=U;else if(ie=x.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=ie.uuid,G=L.uuid;let ee=c[H];ee===void 0&&(ee={},c[H]=ee);let W=ee[G];W===void 0&&(W=ie.clone(),ee[G]=W,L.addEventListener("dispose",P)),ie=W}if(ie.visible=L.visible,ie.wireframe=L.wireframe,C===Fs?ie.side=L.shadowSide!==null?L.shadowSide:L.side:ie.side=L.shadowSide!==null?L.shadowSide:f[L.side],ie.alphaMap=L.alphaMap,ie.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,ie.map=L.map,ie.clipShadows=L.clipShadows,ie.clippingPlanes=L.clippingPlanes,ie.clipIntersection=L.clipIntersection,ie.displacementMap=L.displacementMap,ie.displacementScale=L.displacementScale,ie.displacementBias=L.displacementBias,ie.wireframeLinewidth=L.wireframeLinewidth,ie.linewidth=L.linewidth,x.isPointLight===!0&&ie.isMeshDistanceMaterial===!0){const H=n.properties.get(ie);H.light=x}return ie}function S(A,L,x,C,ie){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&ie===Fs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const G=e.update(A),ee=A.material;if(Array.isArray(ee)){const W=G.groups;for(let X=0,O=W.length;X<O;X++){const ae=W[X],he=ee[ae.materialIndex];if(he&&he.visible){const _e=E(A,he,C,ie);A.onBeforeShadow(n,A,L,x,G,_e,ae),n.renderBufferDirect(x,null,G,_e,A,ae),A.onAfterShadow(n,A,L,x,G,_e,ae)}}}else if(ee.visible){const W=E(A,ee,C,ie);A.onBeforeShadow(n,A,L,x,G,W,null),n.renderBufferDirect(x,null,G,W,A,null),A.onAfterShadow(n,A,L,x,G,W,null)}}const H=A.children;for(let G=0,ee=H.length;G<ee;G++)S(H[G],L,x,C,ie)}function P(A){A.target.removeEventListener("dispose",P);for(const x in c){const C=c[x],ie=A.target.uuid;ie in C&&(C[ie].dispose(),delete C[ie])}}}function sE(n,e){function t(){let k=!1;const be=new It;let Se=null;const Le=new It(0,0,0,0);return{setMask:function(ge){Se!==ge&&!k&&(n.colorMask(ge,ge,ge,ge),Se=ge)},setLocked:function(ge){k=ge},setClear:function(ge,oe,Ne,$e,St){St===!0&&(ge*=$e,oe*=$e,Ne*=$e),be.set(ge,oe,Ne,$e),Le.equals(be)===!1&&(n.clearColor(ge,oe,Ne,$e),Le.copy(be))},reset:function(){k=!1,Se=null,Le.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,Se=null,Le=null,ge=null;return{setReversed:function(oe){if(be!==oe){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),be=oe;const $e=ge;ge=null,this.setClear($e)}},getReversed:function(){return be},setTest:function(oe){oe?D(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(oe){Se!==oe&&!k&&(n.depthMask(oe),Se=oe)},setFunc:function(oe){if(be&&(oe=Bv[oe]),Le!==oe){switch(oe){case sc:n.depthFunc(n.NEVER);break;case ac:n.depthFunc(n.ALWAYS);break;case oc:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=oe}},setLocked:function(oe){k=oe},setClear:function(oe){ge!==oe&&(ge=oe,be&&(oe=1-oe),n.clearDepth(oe))},reset:function(){k=!1,Se=null,Le=null,ge=null,be=!1}}}function r(){let k=!1,be=null,Se=null,Le=null,ge=null,oe=null,Ne=null,$e=null,St=null;return{setTest:function(dt){k||(dt?D(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(dt){be!==dt&&!k&&(n.stencilMask(dt),be=dt)},setFunc:function(dt,hi,di){(Se!==dt||Le!==hi||ge!==di)&&(n.stencilFunc(dt,hi,di),Se=dt,Le=hi,ge=di)},setOp:function(dt,hi,di){(oe!==dt||Ne!==hi||$e!==di)&&(n.stencilOp(dt,hi,di),oe=dt,Ne=hi,$e=di)},setLocked:function(dt){k=dt},setClear:function(dt){St!==dt&&(n.clearStencil(dt),St=dt)},reset:function(){k=!1,be=null,Se=null,Le=null,ge=null,oe=null,Ne=null,$e=null,St=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,E=null,S=null,P=null,A=null,L=new We(0,0,0),x=0,C=!1,ie=null,U=null,H=null,G=null,ee=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ae)[1]),X=O>=1):ae.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),X=O>=2);let he=null,_e={};const Me=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),He=new It().fromArray(Me),tt=new It().fromArray(xe);function Je(k,be,Se,Le){const ge=new Uint8Array(4),oe=n.createTexture();n.bindTexture(k,oe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<Se;Ne++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(be+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return oe}const B={};B[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),D(n.DEPTH_TEST),a.setFunc(us),V(!1),j(Yf),D(n.CULL_FACE),N(ai);function D(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Y(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ne(k,be){return f[k]!==be?(n.bindFramebuffer(k,be),f[k]=be,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function fe(k,be){let Se=p,Le=!1;if(k){Se=h.get(be),Se===void 0&&(Se=[],h.set(be,Se));const ge=k.textures;if(Se.length!==ge.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ne=ge.length;oe<Ne;oe++)Se[oe]=n.COLOR_ATTACHMENT0+oe;Se.length=ge.length,Le=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Le=!0);Le&&n.drawBuffers(Se)}function me(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const T={[fr]:n.FUNC_ADD,[ov]:n.FUNC_SUBTRACT,[lv]:n.FUNC_REVERSE_SUBTRACT};T[cv]=n.MIN,T[uv]=n.MAX;const R={[fv]:n.ZERO,[hv]:n.ONE,[dv]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[xv]:n.SRC_ALPHA_SATURATE,[_v]:n.DST_COLOR,[mv]:n.DST_ALPHA,[pv]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[vv]:n.ONE_MINUS_DST_COLOR,[gv]:n.ONE_MINUS_DST_ALPHA,[Sv]:n.CONSTANT_COLOR,[bv]:n.ONE_MINUS_CONSTANT_COLOR,[Mv]:n.CONSTANT_ALPHA,[yv]:n.ONE_MINUS_CONSTANT_ALPHA};function N(k,be,Se,Le,ge,oe,Ne,$e,St,dt){if(k===ai){b===!0&&(Y(n.BLEND),b=!1);return}if(b===!1&&(D(n.BLEND),b=!0),k!==av){if(k!==m||dt!==C){if((d!==fr||S!==fr)&&(n.blendEquation(n.FUNC_ADD),d=fr,S=fr),dt)switch(k){case is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFunc(n.ONE,n.ONE);break;case jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",k);break}else switch(k){case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jf:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kf:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",k);break}v=null,E=null,P=null,A=null,L.set(0,0,0),x=0,m=k,C=dt}return}ge=ge||be,oe=oe||Se,Ne=Ne||Le,(be!==d||ge!==S)&&(n.blendEquationSeparate(T[be],T[ge]),d=be,S=ge),(Se!==v||Le!==E||oe!==P||Ne!==A)&&(n.blendFuncSeparate(R[Se],R[Le],R[oe],R[Ne]),v=Se,E=Le,P=oe,A=Ne),($e.equals(L)===!1||St!==x)&&(n.blendColor($e.r,$e.g,$e.b,St),L.copy($e),x=St),m=k,C=!1}function I(k,be){k.side===Qn?Y(n.CULL_FACE):D(n.CULL_FACE);let Se=k.side===hn;be&&(Se=!Se),V(Se),k.blending===is&&k.transparent===!1?N(ai):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Le=k.stencilWrite;o.setTest(Le),Le&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(k){ie!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),ie=k)}function j(k){k!==iv?(D(n.CULL_FACE),k!==U&&(k===Yf?n.cullFace(n.BACK):k===rv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),U=k}function w(k){k!==H&&(X&&n.lineWidth(k),H=k)}function ue(k,be,Se){k?(D(n.POLYGON_OFFSET_FILL),(G!==be||ee!==Se)&&(G=be,ee=Se,a.getReversed()&&(be=-be),n.polygonOffset(be,Se))):Y(n.POLYGON_OFFSET_FILL)}function le(k){k?D(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function re(k){k===void 0&&(k=n.TEXTURE0+W-1),he!==k&&(n.activeTexture(k),he=k)}function ce(k,be,Se){Se===void 0&&(he===null?Se=n.TEXTURE0+W-1:Se=he);let Le=_e[Se];Le===void 0&&(Le={type:void 0,texture:void 0},_e[Se]=Le),(Le.type!==k||Le.texture!==be)&&(he!==Se&&(n.activeTexture(Se),he=Se),n.bindTexture(k,be||B[k]),Le.type=k,Le.texture=be)}function M(){const k=_e[he];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function K(){try{n.texSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function se(){try{n.texSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function pe(){try{n.texStorage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Ie(){try{n.texStorage3D(...arguments)}catch(k){at("WebGLState:",k)}}function ke(){try{n.texImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function de(){try{n.texImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function ve(k){He.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),He.copy(k))}function Ee(k){tt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),tt.copy(k))}function Re(k,be){let Se=c.get(be);Se===void 0&&(Se=new WeakMap,c.set(be,Se));let Le=Se.get(k);Le===void 0&&(Le=n.getUniformBlockIndex(be,k.name),Se.set(k,Le))}function Ce(k,be){const Le=c.get(be).get(k);l.get(be)!==Le&&(n.uniformBlockBinding(be,Le,k.__bindingPointIndex),l.set(be,Le))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,_e={},f={},h=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,E=null,S=null,P=null,A=null,L=new We(0,0,0),x=0,C=!1,ie=null,U=null,H=null,G=null,ee=null,He.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:D,disable:Y,bindFramebuffer:ne,drawBuffers:fe,useProgram:me,setBlending:N,setMaterial:I,setFlipSided:V,setCullFace:j,setLineWidth:w,setPolygonOffset:ue,setScissorTest:le,activeTexture:re,bindTexture:ce,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ke,texImage3D:de,updateUBOMapping:Re,uniformBlockBinding:Ce,texStorage2D:pe,texStorage3D:Ie,texSubImage2D:K,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:ye,scissor:ve,viewport:Ee,reset:je}}function aE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):po("canvas")}function b(M,_,F){let K=1;const se=ce(M);if((se.width>F||se.height>F)&&(K=F/Math.max(se.width,se.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Z=Math.floor(K*se.width),ye=Math.floor(K*se.height);f===void 0&&(f=g(Z,ye));const pe=_?g(Z,ye):f;return pe.width=Z,pe.height=ye,pe.getContext("2d").drawImage(M,0,0,Z,ye),Xe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+ye+")."),pe}else return"data"in M&&Xe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function v(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,_,F,K,se=!1){if(M!==null){if(n[M]!==void 0)return n[M];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=_;if(_===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){const ye=se?fo:ot.getTransfer(K);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=ye===pt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(M,_){let F;return M?_===null||_===ui||_===ea?F=n.DEPTH24_STENCIL8:_===ni?F=n.DEPTH32F_STENCIL8:_===Qs&&(F=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===ea?F=n.DEPTH_COMPONENT24:_===ni?F=n.DEPTH_COMPONENT32F:_===Qs&&(F=n.DEPTH_COMPONENT16),F}function P(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Gt&&M.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){const _=M.target;_.removeEventListener("dispose",A),x(_),_.isVideoTexture&&u.delete(_)}function L(M){const _=M.target;_.removeEventListener("dispose",L),ie(_)}function x(M){const _=i.get(M);if(_.__webglInit===void 0)return;const F=M.source,K=h.get(F);if(K){const se=K[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(M),Object.keys(K).length===0&&h.delete(F)}i.remove(M)}function C(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const F=M.source,K=h.get(F);delete K[_.__cacheKey],a.memory.textures--}function ie(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let se=0;se<_.__webglFramebuffer[K].length;se++)n.deleteFramebuffer(_.__webglFramebuffer[K][se]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=M.textures;for(let K=0,se=F.length;K<se;K++){const Z=i.get(F[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(M)}let U=0;function H(){U=0}function G(){const M=U;return M>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),U+=1,M}function ee(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function W(M,_){const F=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const K=M.image;if(K===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,M,_);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(M,_){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){B(F,M,_);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function O(M,_){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){B(F,M,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function ae(M,_){const F=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&F.__version!==M.version){D(F,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const he={[hc]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},_e={[Gt]:n.NEAREST,[Av]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},Me={[Pv]:n.NEVER,[Nv]:n.ALWAYS,[Dv]:n.LESS,[Ru]:n.LEQUAL,[Iv]:n.EQUAL,[Cu]:n.GEQUAL,[Lv]:n.GREATER,[Uv]:n.NOTEQUAL};function xe(M,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===ll||_.magFilter===ma||_.magFilter===gr||_.minFilter===Jt||_.minFilter===ll||_.minFilter===ma||_.minFilter===gr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,he[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,_e[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==ma&&_.minFilter!==gr||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function He(M,_){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let se=h.get(K);se===void 0&&(se={},h.set(K,se));const Z=ee(_);if(Z!==M.__cacheKey){se[Z]===void 0&&(se[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[Z].usedTimes++;const ye=se[M.__cacheKey];ye!==void 0&&(se[M.__cacheKey].usedTimes--,ye.usedTimes===0&&C(_)),M.__cacheKey=Z,M.__webglTexture=se[Z].texture}return F}function tt(M,_,F){return Math.floor(Math.floor(M/F)/_)}function Je(M,_,F,K){const Z=M.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,K,_.data);else{Z.sort((de,ve)=>de.start-ve.start);let ye=0;for(let de=1;de<Z.length;de++){const ve=Z[ye],Ee=Z[de],Re=ve.start+ve.count,Ce=tt(Ee.start,_.width,4),je=tt(ve.start,_.width,4);Ee.start<=Re+1&&Ce===je&&tt(Ee.start+Ee.count-1,_.width,4)===Ce?ve.count=Math.max(ve.count,Ee.start+Ee.count-ve.start):(++ye,Z[ye]=Ee)}Z.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let de=0,ve=Z.length;de<ve;de++){const Ee=Z[de],Re=Math.floor(Ee.start/4),Ce=Math.ceil(Ee.count/4),je=Re%_.width,k=Math.floor(Re/_.width),be=Ce,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,je,k,be,Se,F,K,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function B(M,_,F){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const se=He(M,_),Z=_.source;t.bindTexture(K,M.__webglTexture,n.TEXTURE0+F);const ye=i.get(Z);if(Z.version!==ye.__version||se===!0){t.activeTexture(n.TEXTURE0+F);const pe=ot.getPrimaries(ot.workingColorSpace),Ie=_.colorSpace===$i?null:ot.getPrimaries(_.colorSpace),ke=_.colorSpace===$i||pe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=b(_.image,!1,r.maxTextureSize);de=re(_,de);const ve=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let Re=E(_.internalFormat,ve,Ee,_.colorSpace,_.isVideoTexture);xe(K,_);let Ce;const je=_.mipmaps,k=_.isVideoTexture!==!0,be=ye.__version===void 0||se===!0,Se=Z.dataReady,Le=P(_,de);if(_.isDepthTexture)Re=S(_.format===_r,_.type),be&&(k?t.texStorage2D(n.TEXTURE_2D,1,Re,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Re,de.width,de.height,0,ve,Ee,null));else if(_.isDataTexture)if(je.length>0){k&&be&&t.texStorage2D(n.TEXTURE_2D,Le,Re,je[0].width,je[0].height);for(let ge=0,oe=je.length;ge<oe;ge++)Ce=je[ge],k?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ve,Ee,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Re,Ce.width,Ce.height,0,ve,Ee,Ce.data);_.generateMipmaps=!1}else k?(be&&t.texStorage2D(n.TEXTURE_2D,Le,Re,de.width,de.height),Se&&Je(_,de,ve,Ee)):t.texImage2D(n.TEXTURE_2D,0,Re,de.width,de.height,0,ve,Ee,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){k&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Re,je[0].width,je[0].height,de.depth);for(let ge=0,oe=je.length;ge<oe;ge++)if(Ce=je[ge],_.format!==kn)if(ve!==null)if(k){if(Se)if(_.layerUpdates.size>0){const Ne=Sh(Ce.width,Ce.height,_.format,_.type);for(const $e of _.layerUpdates){const St=Ce.data.subarray($e*Ne/Ce.data.BYTES_PER_ELEMENT,($e+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,$e,Ce.width,Ce.height,1,ve,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,de.depth,ve,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Re,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,de.depth,ve,Ee,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Re,Ce.width,Ce.height,de.depth,0,ve,Ee,Ce.data)}else{k&&be&&t.texStorage2D(n.TEXTURE_2D,Le,Re,je[0].width,je[0].height);for(let ge=0,oe=je.length;ge<oe;ge++)Ce=je[ge],_.format!==kn?ve!==null?k?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ve,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Re,Ce.width,Ce.height,0,Ce.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,ve,Ee,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Re,Ce.width,Ce.height,0,ve,Ee,Ce.data)}else if(_.isDataArrayTexture)if(k){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Re,de.width,de.height,de.depth),Se)if(_.layerUpdates.size>0){const ge=Sh(de.width,de.height,_.format,_.type);for(const oe of _.layerUpdates){const Ne=de.data.subarray(oe*ge/de.data.BYTES_PER_ELEMENT,(oe+1)*ge/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,ve,Ee,Ne)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ve,Ee,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,de.width,de.height,de.depth,0,ve,Ee,de.data);else if(_.isData3DTexture)k?(be&&t.texStorage3D(n.TEXTURE_3D,Le,Re,de.width,de.height,de.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ve,Ee,de.data)):t.texImage3D(n.TEXTURE_3D,0,Re,de.width,de.height,de.depth,0,ve,Ee,de.data);else if(_.isFramebufferTexture){if(be)if(k)t.texStorage2D(n.TEXTURE_2D,Le,Re,de.width,de.height);else{let ge=de.width,oe=de.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Re,ge,oe,0,ve,Ee,null),ge>>=1,oe>>=1}}else if(je.length>0){if(k&&be){const ge=ce(je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Re,ge.width,ge.height)}for(let ge=0,oe=je.length;ge<oe;ge++)Ce=je[ge],k?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,ve,Ee,Ce):t.texImage2D(n.TEXTURE_2D,ge,Re,ve,Ee,Ce);_.generateMipmaps=!1}else if(k){if(be){const ge=ce(de);t.texStorage2D(n.TEXTURE_2D,Le,Re,ge.width,ge.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ee,de)}else t.texImage2D(n.TEXTURE_2D,0,Re,ve,Ee,de);m(_)&&d(K),ye.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function D(M,_,F){if(_.image.length!==6)return;const K=He(M,_),se=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);const Z=i.get(se);if(se.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const ye=ot.getPrimaries(ot.workingColorSpace),pe=_.colorSpace===$i?null:ot.getPrimaries(_.colorSpace),Ie=_.colorSpace===$i||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!ke&&!de?ve[oe]=b(_.image[oe],!0,r.maxCubemapSize):ve[oe]=de?_.image[oe].image:_.image[oe],ve[oe]=re(_,ve[oe]);const Ee=ve[0],Re=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type),je=E(_.internalFormat,Re,Ce,_.colorSpace),k=_.isVideoTexture!==!0,be=Z.__version===void 0||K===!0,Se=se.dataReady;let Le=P(_,Ee);xe(n.TEXTURE_CUBE_MAP,_);let ge;if(ke){k&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,je,Ee.width,Ee.height);for(let oe=0;oe<6;oe++){ge=ve[oe].mipmaps;for(let Ne=0;Ne<ge.length;Ne++){const $e=ge[Ne];_.format!==kn?Re!==null?k?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,$e.width,$e.height,Re,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,je,$e.width,$e.height,0,$e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,$e.width,$e.height,Re,Ce,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,je,$e.width,$e.height,0,Re,Ce,$e.data)}}}else{if(ge=_.mipmaps,k&&be){ge.length>0&&Le++;const oe=ce(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){k?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Re,Ce,ve[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,ve[oe].width,ve[oe].height,0,Re,Ce,ve[oe].data);for(let Ne=0;Ne<ge.length;Ne++){const St=ge[Ne].image[oe].image;k?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,St.width,St.height,Re,Ce,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,je,St.width,St.height,0,Re,Ce,St.data)}}else{k?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Re,Ce,ve[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Re,Ce,ve[oe]);for(let Ne=0;Ne<ge.length;Ne++){const $e=ge[Ne];k?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,Re,Ce,$e.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,je,Re,Ce,$e.image[oe])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Z.__version=se.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Y(M,_,F,K,se,Z){const ye=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),Ie=E(F.internalFormat,ye,pe,F.colorSpace),ke=i.get(_),de=i.get(F);if(de.__renderTarget=_,!ke.__hasExternalTextures){const ve=Math.max(1,_.width>>Z),Ee=Math.max(1,_.height>>Z);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,Ie,ve,Ee,_.depth,0,ye,pe,null):t.texImage2D(se,Z,Ie,ve,Ee,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,se,de.__webglTexture,0,w(_)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,se,de.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(M,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const K=_.depthTexture,se=K&&K.isDepthTexture?K.type:null,Z=S(_.stencilBuffer,se),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),Z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,M)}else{const K=_.textures;for(let se=0;se<K.length;se++){const Z=K[se],ye=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Ie=E(Z.internalFormat,ye,pe,Z.colorSpace);ue(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),Ie,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),Ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(M,_,F){const K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_.depthTexture);const ke=s.convert(_.depthTexture.format),de=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===Ci?ve=n.DEPTH_COMPONENT24:_.depthTexture.format===_r&&(ve=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ve,_.width,_.height,0,ke,de,null)}}else W(_.depthTexture,0);const Z=se.__webglTexture,ye=w(_),pe=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ie=_.depthTexture.format===_r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,pe,Z,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,pe,Z,0);else if(_.depthTexture.format===_r)ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,pe,Z,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,pe,Z,0);else throw new Error("Unknown depthTexture format")}function me(M){const _=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",se)};K.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=K}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)fe(_.__webglFramebuffer[K],M,K);else{const K=M.texture.mipmaps;K&&K.length>0?fe(_.__webglFramebuffer[0],M,0):fe(_.__webglFramebuffer,M,0)}else if(F){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(_.__webglDepthbuffer[K],M,!1);else{const se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Z)}}else{const K=M.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ne(_.__webglDepthbuffer,M,!1);else{const se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function T(M,_,F){const K=i.get(M);_!==void 0&&Y(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&me(M)}function R(M){const _=M.texture,F=i.get(M),K=i.get(_);M.addEventListener("dispose",L);const se=M.textures,Z=M.isWebGLCubeRenderTarget===!0,ye=se.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,a.memory.textures++),Z){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)F.__webglFramebuffer[pe][Ie]=n.createFramebuffer()}else F.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)F.__webglFramebuffer[pe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Ie=se.length;pe<Ie;pe++){const ke=i.get(se[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&ue(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Ie=se[pe];F.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const ke=s.convert(Ie.format,Ie.colorSpace),de=s.convert(Ie.type),ve=E(Ie.internalFormat,ke,de,Ie.colorSpace,M.isXRRenderTarget===!0),Ee=w(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ve,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Y(F.__webglFramebuffer[pe][Ie],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie);else Y(F.__webglFramebuffer[pe],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Ie=se.length;pe<Ie;pe++){const ke=se[pe],de=i.get(ke);let ve=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,de.__webglTexture),xe(ve,ke),Y(F.__webglFramebuffer,M,ke,n.COLOR_ATTACHMENT0+pe,ve,0),m(ke)&&d(ve)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,K.__webglTexture),xe(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Y(F.__webglFramebuffer[Ie],M,_,n.COLOR_ATTACHMENT0,pe,Ie);else Y(F.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,pe,0);m(_)&&d(pe),t.unbindTexture()}M.depthBuffer&&me(M)}function N(M){const _=M.textures;for(let F=0,K=_.length;F<K;F++){const se=_[F];if(m(se)){const Z=v(M),ye=i.get(se).__webglTexture;t.bindTexture(Z,ye),d(Z),t.unbindTexture()}}}const I=[],V=[];function j(M){if(M.samples>0){if(ue(M)===!1){const _=M.textures,F=M.width,K=M.height;let se=n.COLOR_BUFFER_BIT;const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(M),pe=_.length>1;if(pe)for(let ke=0;ke<_.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ie=M.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ke=0;ke<_.length;ke++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const de=i.get(_[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,se,n.NEAREST),l===!0&&(I.length=0,V.length=0,I.push(n.COLOR_ATTACHMENT0+ke),M.depthBuffer&&M.resolveDepthBuffer===!1&&(I.push(Z),V.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<_.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const de=i.get(_[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(M){return Math.min(r.maxSamples,M.samples)}function ue(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function le(M){const _=a.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function re(M,_){const F=M.colorSpace,K=M.format,se=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==ds&&F!==$i&&(ot.getTransfer(F)===pt?(K!==kn||se!==wn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",F)),_}function ce(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=ae,this.rebindTextures=T,this.setupRenderTarget=R,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oE(n,e){function t(i,r=$i){let s;const a=ot.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rp)return n.BYTE;if(i===Cp)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===Mu)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===yn)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Lp)return n.RGB;if(i===kn)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Up)return n.RED;if(i===Tu)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===wu)return n.RGBA_INTEGER;if(i===ja||i===Ka||i===Za||i===Ja)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===Sc||i===bc||i===Mc||i===yc||i===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vc||i===xc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bc)return s.COMPRESSED_R11_EAC;if(i===Mc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yc)return s.COMPRESSED_RG11_EAC;if(i===Ec)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Ic||i===Lc||i===Uc||i===Nc||i===Fc||i===Oc||i===kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bc||i===zc||i===Vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bc)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===Gc||i===Wc||i===Xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const lE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wt({vertexShader:lE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new Bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fE extends gs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",m=new uE,d={},v=t.getContextAttributes();let E=null,S=null;const P=[],A=[],L=new Ge;let x=null;const C=new An;C.viewport=new It;const ie=new An;ie.viewport=new It;const U=[C,ie],H=new Sx;let G=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let D=P[B];return D===void 0&&(D=new gl,P[B]=D),D.getTargetRaySpace()},this.getControllerGrip=function(B){let D=P[B];return D===void 0&&(D=new gl,P[B]=D),D.getGripSpace()},this.getHand=function(B){let D=P[B];return D===void 0&&(D=new gl,P[B]=D),D.getHandSpace()};function W(B){const D=A.indexOf(B.inputSource);if(D===-1)return;const Y=P[D];Y!==void 0&&(Y.update(B.inputSource,B.frame,c||a),Y.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",O);for(let B=0;B<P.length;B++){const D=A[B];D!==null&&(A[B]=null,P[B].disconnect(D))}G=null,ee=null,m.reset();for(const B in d)delete d[B];e.setRenderTarget(E),p=null,h=null,f=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,ne=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?_r:Ci,ne=v.stencil?ea:ui);const me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new dn(h.textureWidth,h.textureHeight,{format:kn,type:wn,depthTexture:new ta(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new dn(p.framebufferWidth,p.framebufferHeight,{format:kn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(B){for(let D=0;D<B.removed.length;D++){const Y=B.removed[D],ne=A.indexOf(Y);ne>=0&&(A[ne]=null,P[ne].disconnect(Y))}for(let D=0;D<B.added.length;D++){const Y=B.added[D];let ne=A.indexOf(Y);if(ne===-1){for(let me=0;me<P.length;me++)if(me>=A.length){A.push(Y),ne=me;break}else if(A[me]===null){A[me]=Y,ne=me;break}if(ne===-1)break}const fe=P[ne];fe&&fe.connect(Y)}}const ae=new $,he=new $;function _e(B,D,Y){ae.setFromMatrixPosition(D.matrixWorld),he.setFromMatrixPosition(Y.matrixWorld);const ne=ae.distanceTo(he),fe=D.projectionMatrix.elements,me=Y.projectionMatrix.elements,T=fe[14]/(fe[10]-1),R=fe[14]/(fe[10]+1),N=(fe[9]+1)/fe[5],I=(fe[9]-1)/fe[5],V=(fe[8]-1)/fe[0],j=(me[8]+1)/me[0],w=T*V,ue=T*j,le=ne/(-V+j),re=le*-V;if(D.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(re),B.translateZ(le),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),fe[10]===-1)B.projectionMatrix.copy(D.projectionMatrix),B.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const ce=T+le,M=R+le,_=w-re,F=ue+(ne-re),K=N*R/M*ce,se=I*R/M*ce;B.projectionMatrix.makePerspective(_,F,K,se,ce,M),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Me(B,D){D===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(D.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let D=B.near,Y=B.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),H.near=ie.near=C.near=D,H.far=ie.far=C.far=Y,(G!==H.near||ee!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,ee=H.far),H.layers.mask=B.layers.mask|6,C.layers.mask=H.layers.mask&-5,ie.layers.mask=H.layers.mask&-3;const ne=B.parent,fe=H.cameras;Me(H,ne);for(let me=0;me<fe.length;me++)Me(fe[me],ne);fe.length===2?_e(H,C,ie):H.projectionMatrix.copy(C.projectionMatrix),xe(B,H,ne)};function xe(B,D,Y){Y===null?B.matrix.copy(D.matrixWorld):(B.matrix.copy(Y.matrixWorld),B.matrix.invert(),B.matrix.multiply(D.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(D.projectionMatrix),B.projectionMatrixInverse.copy(D.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=qc*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(B){return d[B]};let He=null;function tt(B,D){if(u=D.getViewerPose(c||a),g=D,u!==null){const Y=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ne=!1;Y.length!==H.cameras.length&&(H.cameras.length=0,ne=!0);for(let R=0;R<Y.length;R++){const N=Y[R];let I=null;if(p!==null)I=p.getViewport(N);else{const j=f.getViewSubImage(h,N);I=j.viewport,R===0&&(e.setRenderTargetTextures(S,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(S))}let V=U[R];V===void 0&&(V=new An,V.layers.enable(R),V.viewport=new It,U[R]=V),V.matrix.fromArray(N.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(N.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(I.x,I.y,I.width,I.height),R===0&&(H.matrix.copy(V.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ne===!0&&H.cameras.push(V)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const R=f.getDepthInformation(Y[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(fe&&fe.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<Y.length;R++){const N=Y[R].camera;if(N){let I=d[N];I||(I=new $p,d[N]=I);const V=f.getCameraImage(N);I.sourceTexture=V}}}}for(let Y=0;Y<P.length;Y++){const ne=A[Y],fe=P[Y];ne!==null&&fe!==void 0&&fe.update(ne,D,c||a)}He&&He(B,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const Je=new jp;Je.setAnimationLoop(tt),this.setAnimationLoop=function(B){He=B},this.dispose=function(){}}}const lr=new Pi,hE=new Pt;function dE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,qp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,E,S){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),b(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),E=v.envMap,S=v.envMapRotation;E&&(m.envMap.value=E,lr.copy(S),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(hE.makeRotationFromEuler(lr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const S=E.program;i.uniformBlockBinding(v,S)}function c(v,E){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const E=f();v.__bindingPointIndex=E;const S=n.createBuffer(),P=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=r[v.id],S=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,L=S.length;A<L;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let C=0,ie=x.length;C<ie;C++){const U=x[C];if(p(U,A,C,P)===!0){const H=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let ee=0;for(let W=0;W<G.length;W++){const X=G[W],O=b(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+ee,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,ee),ee+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,E,S,P){const A=v.value,L=E+"_"+S;if(P[L]===void 0)return typeof A=="number"||typeof A=="boolean"?P[L]=A:P[L]=A.clone(),!0;{const x=P[L];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return P[L]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function g(v){const E=v.uniforms;let S=0;const P=16;for(let L=0,x=E.length;L<x;L++){const C=Array.isArray(E[L])?E[L]:[E[L]];for(let ie=0,U=C.length;ie<U;ie++){const H=C[ie],G=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,W=G.length;ee<W;ee++){const X=G[ee],O=b(X),ae=S%P,he=ae%O.boundary,_e=ae+he;S+=he,_e!==0&&P-_e<O.storage&&(S+=P-_e),H.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=O.storage}}}const A=S%P;return A>0&&(S+=P-A),v.__size=S,v.__cache={},this}function b(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const mE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function gE(){return Yn===null&&(Yn=new ox(mE,16,16,hs,yn),Yn.name="DFG_LUT",Yn.minFilter=Jt,Yn.magFilter=Jt,Yn.wrapS=Ei,Yn.wrapT=Ei,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class _E{constructor(e={}){const{canvas:t=Ov(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const b=p,m=new Set([wu,Au,Tu]),d=new Set([wn,ui,Qs,ea,yu,Eu]),v=new Uint32Array(4),E=new Int32Array(4);let S=null,P=null;const A=[],L=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let ie=!1;this._outputColorSpace=Tn;let U=0,H=0,G=null,ee=-1,W=null;const X=new It,O=new It;let ae=null;const he=new We(0);let _e=0,Me=t.width,xe=t.height,He=1,tt=null,Je=null;const B=new It(0,0,Me,xe),D=new It(0,0,Me,xe);let Y=!1;const ne=new Gp;let fe=!1,me=!1;const T=new Pt,R=new $,N=new It,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function j(){return G===null?He:1}let w=i;function ue(y,z){return t.getContext(y,z)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",St,!1),w===null){const z="webgl2";if(w=ue(z,y),w===null)throw ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw at("WebGLRenderer: "+y.message),y}let le,re,ce,M,_,F,K,se,Z,ye,pe,Ie,ke,de,ve,Ee,Re,Ce,je,k,be,Se,Le;function ge(){le=new _M(w),le.init(),be=new oE(w,le),re=new cM(w,le,e,be),ce=new sE(w,le),re.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),M=new SM(w),_=new Xy,F=new aE(w,le,ce,_,re,be,M),K=new gM(C),se=new Tx(w),Se=new oM(w,se),Z=new vM(w,se,M,Se),ye=new MM(w,Z,se,Se,M),Ce=new bM(w,re,F),ve=new uM(_),pe=new Wy(C,K,le,re,Se,ve),Ie=new dE(C,_),ke=new qy,de=new Qy(le),Re=new aM(C,K,ce,ye,g,l),Ee=new rE(C,ye,re),Le=new pE(w,M,re,ce),je=new lM(w,le,M),k=new xM(w,le,M),M.programs=pe.programs,C.capabilities=re,C.extensions=le,C.properties=_,C.renderLists=ke,C.shadowMap=Ee,C.state=ce,C.info=M}ge(),b!==wn&&(x=new EM(b,t.width,t.height,r,s));const oe=new fE(C,w);this.xr=oe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(y){y!==void 0&&(He=y,this.setSize(Me,xe,!1))},this.getSize=function(y){return y.set(Me,xe)},this.setSize=function(y,z,te=!0){if(oe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=y,xe=z,t.width=Math.floor(y*He),t.height=Math.floor(z*He),te===!0&&(t.style.width=y+"px",t.style.height=z+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(Me*He,xe*He).floor()},this.setDrawingBufferSize=function(y,z,te){Me=y,xe=z,He=te,t.width=Math.floor(y*te),t.height=Math.floor(z*te),this.setViewport(0,0,y,z)},this.setEffects=function(y){if(b===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let z=0;z<y.length;z++)if(y[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(B)},this.setViewport=function(y,z,te,Q){y.isVector4?B.set(y.x,y.y,y.z,y.w):B.set(y,z,te,Q),ce.viewport(X.copy(B).multiplyScalar(He).round())},this.getScissor=function(y){return y.copy(D)},this.setScissor=function(y,z,te,Q){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,z,te,Q),ce.scissor(O.copy(D).multiplyScalar(He).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(y){ce.setScissorTest(Y=y)},this.setOpaqueSort=function(y){tt=y},this.setTransparentSort=function(y){Je=y},this.getClearColor=function(y){return y.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(y=!0,z=!0,te=!0){let Q=0;if(y){let J=!1;if(G!==null){const Ae=G.texture.format;J=m.has(Ae)}if(J){const Ae=G.texture.type,De=d.has(Ae),we=Re.getClearColor(),Oe=Re.getClearAlpha(),ze=we.r,Ke=we.g,et=we.b;De?(v[0]=ze,v[1]=Ke,v[2]=et,v[3]=Oe,w.clearBufferuiv(w.COLOR,0,v)):(E[0]=ze,E[1]=Ke,E[2]=et,E[3]=Oe,w.clearBufferiv(w.COLOR,0,E))}else Q|=w.COLOR_BUFFER_BIT}z&&(Q|=w.DEPTH_BUFFER_BIT),te&&(Q|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&w.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Re.dispose(),ke.dispose(),de.dispose(),_.dispose(),K.dispose(),ye.dispose(),Se.dispose(),Le.dispose(),pe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",$u),oe.removeEventListener("sessionend",qu),Qi.stop()};function Ne(y){y.preventDefault(),mo("WebGLRenderer: Context Lost."),ie=!0}function $e(){mo("WebGLRenderer: Context Restored."),ie=!1;const y=M.autoReset,z=Ee.enabled,te=Ee.autoUpdate,Q=Ee.needsUpdate,J=Ee.type;ge(),M.autoReset=y,Ee.enabled=z,Ee.autoUpdate=te,Ee.needsUpdate=Q,Ee.type=J}function St(y){at("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function dt(y){const z=y.target;z.removeEventListener("dispose",dt),hi(z)}function hi(y){di(y),_.remove(y)}function di(y){const z=_.get(y).programs;z!==void 0&&(z.forEach(function(te){pe.releaseProgram(te)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,te,Q,J,Ae){z===null&&(z=I);const De=J.isMesh&&J.matrixWorld.determinant()<0,we=pm(y,z,te,Q,J);ce.setMaterial(Q,De);let Oe=te.index,ze=1;if(Q.wireframe===!0){if(Oe=Z.getWireframeAttribute(te),Oe===void 0)return;ze=2}const Ke=te.drawRange,et=te.attributes.position;let Ve=Ke.start*ze,mt=(Ke.start+Ke.count)*ze;Ae!==null&&(Ve=Math.max(Ve,Ae.start*ze),mt=Math.min(mt,(Ae.start+Ae.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Oe.count)):et!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,et.count));const Dt=mt-Ve;if(Dt<0||Dt===1/0)return;Se.setup(J,Q,we,te,Oe);let wt,gt=je;if(Oe!==null&&(wt=se.get(Oe),gt=k,gt.setIndex(wt)),J.isMesh)Q.wireframe===!0?(ce.setLineWidth(Q.wireframeLinewidth*j()),gt.setMode(w.LINES)):gt.setMode(w.TRIANGLES);else if(J.isLine){let Xt=Q.linewidth;Xt===void 0&&(Xt=1),ce.setLineWidth(Xt*j()),J.isLineSegments?gt.setMode(w.LINES):J.isLineLoop?gt.setMode(w.LINE_LOOP):gt.setMode(w.LINE_STRIP)}else J.isPoints?gt.setMode(w.POINTS):J.isSprite&&gt.setMode(w.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))gt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Xt=J._multiDrawStarts,Be=J._multiDrawCounts,gn=J._multiDrawCount,lt=Oe?se.get(Oe).bytesPerElement:1,In=_.get(Q).currentProgram.getUniforms();for(let Xn=0;Xn<gn;Xn++)In.setValue(w,"_gl_DrawID",Xn),gt.render(Xt[Xn]/lt,Be[Xn])}else if(J.isInstancedMesh)gt.renderInstances(Ve,Dt,J.count);else if(te.isInstancedBufferGeometry){const Xt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Be=Math.min(te.instanceCount,Xt);gt.renderInstances(Ve,Dt,Be)}else gt.render(Ve,Dt)};function Xu(y,z,te){y.transparent===!0&&y.side===Qn&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,fa(y,z,te),y.side=Zi,y.needsUpdate=!0,fa(y,z,te),y.side=Qn):fa(y,z,te)}this.compile=function(y,z,te=null){te===null&&(te=y),P=de.get(te),P.init(z),L.push(P),te.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),y!==te&&y.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const Q=new Set;return y.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const we=Ae[De];Xu(we,te,J),Q.add(we)}else Xu(Ae,te,J),Q.add(Ae)}),P=L.pop(),Q},this.compileAsync=function(y,z,te=null){const Q=this.compile(y,z,te);return new Promise(J=>{function Ae(){if(Q.forEach(function(De){_.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){J(y);return}setTimeout(Ae,10)}le.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Wo=null;function dm(y){Wo&&Wo(y)}function $u(){Qi.stop()}function qu(){Qi.start()}const Qi=new jp;Qi.setAnimationLoop(dm),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(y){Wo=y,oe.setAnimationLoop(y),y===null?Qi.stop():Qi.start()},oe.addEventListener("sessionstart",$u),oe.addEventListener("sessionend",qu),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ie===!0)return;const te=oe.enabled===!0&&oe.isPresenting===!0,Q=x!==null&&(G===null||te)&&x.begin(C,G);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,z,G),P=de.get(y,L.length),P.init(z),L.push(P),T.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ne.setFromProjectionMatrix(T,ii,z.reversedDepth),me=this.localClippingEnabled,fe=ve.init(this.clippingPlanes,me),S=ke.get(y,A.length),S.init(),A.push(S),oe.enabled===!0&&oe.isPresenting===!0){const De=C.xr.getDepthSensingMesh();De!==null&&Xo(De,z,-1/0,C.sortObjects)}Xo(y,z,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(tt,Je),V=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,V&&Re.addToRenderList(S,y),this.info.render.frame++,fe===!0&&ve.beginShadows();const J=P.state.shadowsArray;if(Ee.render(J,y,z),fe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&x.hasRenderPass())===!1){const De=S.opaque,we=S.transmissive;if(P.setupLights(),z.isArrayCamera){const Oe=z.cameras;if(we.length>0)for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const et=Oe[ze];ju(De,we,y,et)}V&&Re.render(y);for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const et=Oe[ze];Yu(S,y,et,et.viewport)}}else we.length>0&&ju(De,we,y,z),V&&Re.render(y),Yu(S,y,z)}G!==null&&H===0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G)),Q&&x.end(C),y.isScene===!0&&y.onAfterRender(C,y,z),Se.resetDefaultState(),ee=-1,W=null,L.pop(),L.length>0?(P=L[L.length-1],fe===!0&&ve.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Xo(y,z,te,Q){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)te=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ne.intersectsSprite(y)){Q&&N.setFromMatrixPosition(y.matrixWorld).applyMatrix4(T);const De=ye.update(y),we=y.material;we.visible&&S.push(y,De,we,te,N.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ne.intersectsObject(y))){const De=ye.update(y),we=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),N.copy(y.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),N.copy(De.boundingSphere.center)),N.applyMatrix4(y.matrixWorld).applyMatrix4(T)),Array.isArray(we)){const Oe=De.groups;for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const et=Oe[ze],Ve=we[et.materialIndex];Ve&&Ve.visible&&S.push(y,De,Ve,te,N.z,et)}}else we.visible&&S.push(y,De,we,te,N.z,null)}}const Ae=y.children;for(let De=0,we=Ae.length;De<we;De++)Xo(Ae[De],z,te,Q)}function Yu(y,z,te,Q){const{opaque:J,transmissive:Ae,transparent:De}=y;P.setupLightsView(te),fe===!0&&ve.setGlobalState(C.clippingPlanes,te),Q&&ce.viewport(X.copy(Q)),J.length>0&&ua(J,z,te),Ae.length>0&&ua(Ae,z,te),De.length>0&&ua(De,z,te),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ju(y,z,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Q.id]===void 0){const Ve=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Q.id]=new dn(1,1,{generateMipmaps:!0,type:Ve?yn:wn,minFilter:gr,samples:re.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[Q.id],De=Q.viewport||X;Ae.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const we=C.getRenderTarget(),Oe=C.getActiveCubeFace(),ze=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(he),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),V&&Re.render(te);const Ke=C.toneMapping;C.toneMapping=oi;const et=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),fe===!0&&ve.setGlobalState(C.clippingPlanes,Q),ua(y,te,Q),F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let mt=0,Dt=z.length;mt<Dt;mt++){const wt=z[mt],{object:gt,geometry:Xt,material:Be,group:gn}=wt;if(Be.side===Qn&&gt.layers.test(Q.layers)){const lt=Be.side;Be.side=hn,Be.needsUpdate=!0,Ku(gt,te,Q,Xt,Be,gn),Be.side=lt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae))}C.setRenderTarget(we,Oe,ze),C.setClearColor(he,_e),et!==void 0&&(Q.viewport=et),C.toneMapping=Ke}function ua(y,z,te){const Q=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Ae=y.length;J<Ae;J++){const De=y[J],{object:we,geometry:Oe,group:ze}=De;let Ke=De.material;Ke.allowOverride===!0&&Q!==null&&(Ke=Q),we.layers.test(te.layers)&&Ku(we,z,te,Oe,Ke,ze)}}function Ku(y,z,te,Q,J,Ae){y.onBeforeRender(C,z,te,Q,J,Ae),y.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),J.onBeforeRender(C,z,te,Q,y,Ae),J.transparent===!0&&J.side===Qn&&J.forceSinglePass===!1?(J.side=hn,J.needsUpdate=!0,C.renderBufferDirect(te,z,Q,J,y,Ae),J.side=Zi,J.needsUpdate=!0,C.renderBufferDirect(te,z,Q,J,y,Ae),J.side=Qn):C.renderBufferDirect(te,z,Q,J,y,Ae),y.onAfterRender(C,z,te,Q,J,Ae)}function fa(y,z,te){z.isScene!==!0&&(z=I);const Q=_.get(y),J=P.state.lights,Ae=P.state.shadowsArray,De=J.state.version,we=pe.getParameters(y,J.state,Ae,z,te),Oe=pe.getProgramCacheKey(we);let ze=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,Q.fog=z.fog;const Ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=K.get(y.envMap||Q.environment,Ke),Q.envMapRotation=Q.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",dt),ze=new Map,Q.programs=ze);let et=ze.get(Oe);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===De)return Ju(y,we),et}else we.uniforms=pe.getUniforms(y),y.onBeforeCompile(we,C),et=pe.acquireProgram(we,Oe),ze.set(Oe,et),Q.uniforms=we.uniforms;const Ve=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=ve.uniform),Ju(y,we),Q.needsLights=gm(y),Q.lightsStateVersion=De,Q.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function Zu(y){if(y.uniformsList===null){const z=y.currentProgram.getUniforms();y.uniformsList=eo.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function Ju(y,z){const te=_.get(y);te.outputColorSpace=z.outputColorSpace,te.batching=z.batching,te.batchingColor=z.batchingColor,te.instancing=z.instancing,te.instancingColor=z.instancingColor,te.instancingMorph=z.instancingMorph,te.skinning=z.skinning,te.morphTargets=z.morphTargets,te.morphNormals=z.morphNormals,te.morphColors=z.morphColors,te.morphTargetsCount=z.morphTargetsCount,te.numClippingPlanes=z.numClippingPlanes,te.numIntersection=z.numClipIntersection,te.vertexAlphas=z.vertexAlphas,te.vertexTangents=z.vertexTangents,te.toneMapping=z.toneMapping}function pm(y,z,te,Q,J){z.isScene!==!0&&(z=I),F.resetTextureUnits();const Ae=z.fog,De=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?z.environment:null,we=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ds,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ze=K.get(Q.envMap||De,Oe),Ke=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,Dt=!!te.morphAttributes.color;let wt=oi;Q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(wt=C.toneMapping);const gt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Xt=gt!==void 0?gt.length:0,Be=_.get(Q),gn=P.state.lights;if(fe===!0&&(me===!0||y!==W)){const kt=y===W&&Q.id===ee;ve.setState(Q,y,kt)}let lt=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gn.state.version||Be.outputColorSpace!==we||J.isBatchedMesh&&Be.batching===!1||!J.isBatchedMesh&&Be.batching===!0||J.isBatchedMesh&&Be.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Be.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||J.isInstancedMesh&&Be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Be.instancingMorph===!1&&J.morphTexture!==null||Be.envMap!==ze||Q.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==Ke||Be.vertexTangents!==et||Be.morphTargets!==Ve||Be.morphNormals!==mt||Be.morphColors!==Dt||Be.toneMapping!==wt||Be.morphTargetsCount!==Xt)&&(lt=!0):(lt=!0,Be.__version=Q.version);let In=Be.currentProgram;lt===!0&&(In=fa(Q,z,J));let Xn=!1,er=!1,wr=!1;const vt=In.getUniforms(),zt=Be.uniforms;if(ce.useProgram(In.program)&&(Xn=!0,er=!0,wr=!0),Q.id!==ee&&(ee=Q.id,er=!0),Xn||W!==y){ce.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(w,"projectionMatrix",y.projectionMatrix),vt.setValue(w,"viewMatrix",y.matrixWorldInverse);const Li=vt.map.cameraPosition;Li!==void 0&&Li.setValue(w,R.setFromMatrixPosition(y.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&vt.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,er=!0,wr=!0)}if(Be.needsLights&&(gn.state.directionalShadowMap.length>0&&vt.setValue(w,"directionalShadowMap",gn.state.directionalShadowMap,F),gn.state.spotShadowMap.length>0&&vt.setValue(w,"spotShadowMap",gn.state.spotShadowMap,F),gn.state.pointShadowMap.length>0&&vt.setValue(w,"pointShadowMap",gn.state.pointShadowMap,F)),J.isSkinnedMesh){vt.setOptional(w,J,"bindMatrix"),vt.setOptional(w,J,"bindMatrixInverse");const kt=J.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(w,"boneTexture",kt.boneTexture,F))}J.isBatchedMesh&&(vt.setOptional(w,J,"batchingTexture"),vt.setValue(w,"batchingTexture",J._matricesTexture,F),vt.setOptional(w,J,"batchingIdTexture"),vt.setValue(w,"batchingIdTexture",J._indirectTexture,F),vt.setOptional(w,J,"batchingColorTexture"),J._colorsTexture!==null&&vt.setValue(w,"batchingColorTexture",J._colorsTexture,F));const Ii=te.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Ce.update(J,te,In),(er||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,vt.setValue(w,"receiveShadow",J.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&z.environment!==null&&(zt.envMapIntensity.value=z.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=gE()),er&&(vt.setValue(w,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&mm(zt,wr),Ae&&Q.fog===!0&&Ie.refreshFogUniforms(zt,Ae),Ie.refreshMaterialUniforms(zt,Q,He,xe,P.state.transmissionRenderTarget[y.id]),eo.upload(w,Zu(Be),zt,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(eo.upload(w,Zu(Be),zt,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&vt.setValue(w,"center",J.center),vt.setValue(w,"modelViewMatrix",J.modelViewMatrix),vt.setValue(w,"normalMatrix",J.normalMatrix),vt.setValue(w,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const kt=Q.uniformsGroups;for(let Li=0,Rr=kt.length;Li<Rr;Li++){const Qu=kt[Li];Le.update(Qu,In),Le.bind(Qu,In)}}return In}function mm(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function gm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,z,te){const Q=_.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=z,_.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,z){const te=_.get(y);te.__webglFramebuffer=z,te.__useDefaultFramebuffer=z===void 0};const _m=w.createFramebuffer();this.setRenderTarget=function(y,z=0,te=0){G=y,U=z,H=te;let Q=null,J=!1,Ae=!1;if(y){const we=_.get(y);if(we.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(w.FRAMEBUFFER,we.__webglFramebuffer),X.copy(y.viewport),O.copy(y.scissor),ae=y.scissorTest,ce.viewport(X),ce.scissor(O),ce.setScissorTest(ae),ee=-1;return}else if(we.__webglFramebuffer===void 0)F.setupRenderTarget(y);else if(we.__hasExternalTextures)F.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ke=y.depthTexture;if(we.__boundDepthTexture!==Ke){if(Ke!==null&&_.has(Ke)&&(y.width!==Ke.image.width||y.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ae=!0);const ze=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?Q=ze[z][te]:Q=ze[z],J=!0):y.samples>0&&F.useMultisampledRTT(y)===!1?Q=_.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?Q=ze[te]:Q=ze,X.copy(y.viewport),O.copy(y.scissor),ae=y.scissorTest}else X.copy(B).multiplyScalar(He).floor(),O.copy(D).multiplyScalar(He).floor(),ae=Y;if(te!==0&&(Q=_m),ce.bindFramebuffer(w.FRAMEBUFFER,Q)&&ce.drawBuffers(y,Q),ce.viewport(X),ce.scissor(O),ce.setScissorTest(ae),J){const we=_.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,te)}else if(Ae){const we=z;for(let Oe=0;Oe<y.textures.length;Oe++){const ze=_.get(y.textures[Oe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,te,we)}}else if(y!==null&&te!==0){const we=_.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,we.__webglTexture,te)}ee=-1},this.readRenderTargetPixels=function(y,z,te,Q,J,Ae,De,we=0){if(!(y&&y.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){ce.bindFramebuffer(w.FRAMEBUFFER,Oe);try{const ze=y.textures[we],Ke=ze.format,et=ze.type;if(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+we),!re.textureFormatReadable(Ke)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(et)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-Q&&te>=0&&te<=y.height-J&&w.readPixels(z,te,Q,J,be.convert(Ke),be.convert(et),Ae)}finally{const ze=G!==null?_.get(G).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(y,z,te,Q,J,Ae,De,we=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(z>=0&&z<=y.width-Q&&te>=0&&te<=y.height-J){ce.bindFramebuffer(w.FRAMEBUFFER,Oe);const ze=y.textures[we],Ke=ze.format,et=ze.type;if(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+we),!re.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.bufferData(w.PIXEL_PACK_BUFFER,Ae.byteLength,w.STREAM_READ),w.readPixels(z,te,Q,J,be.convert(Ke),be.convert(et),0);const mt=G!==null?_.get(G).__webglFramebuffer:null;ce.bindFramebuffer(w.FRAMEBUFFER,mt);const Dt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await kv(w,Dt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ae),w.deleteBuffer(Ve),w.deleteSync(Dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,z=null,te=0){const Q=Math.pow(2,-te),J=Math.floor(y.image.width*Q),Ae=Math.floor(y.image.height*Q),De=z!==null?z.x:0,we=z!==null?z.y:0;F.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,te,0,0,De,we,J,Ae),ce.unbindTexture()};const vm=w.createFramebuffer(),xm=w.createFramebuffer();this.copyTextureToTexture=function(y,z,te=null,Q=null,J=0,Ae=0){let De,we,Oe,ze,Ke,et,Ve,mt,Dt;const wt=y.isCompressedTexture?y.mipmaps[Ae]:y.image;if(te!==null)De=te.max.x-te.min.x,we=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,Ke=te.min.y,et=te.isBox3?te.min.z:0;else{const zt=Math.pow(2,-J);De=Math.floor(wt.width*zt),we=Math.floor(wt.height*zt),y.isDataArrayTexture?Oe=wt.depth:y.isData3DTexture?Oe=Math.floor(wt.depth*zt):Oe=1,ze=0,Ke=0,et=0}Q!==null?(Ve=Q.x,mt=Q.y,Dt=Q.z):(Ve=0,mt=0,Dt=0);const gt=be.convert(z.format),Xt=be.convert(z.type);let Be;z.isData3DTexture?(F.setTexture3D(z,0),Be=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),Be=w.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),Be=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const gn=w.getParameter(w.UNPACK_ROW_LENGTH),lt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),In=w.getParameter(w.UNPACK_SKIP_PIXELS),Xn=w.getParameter(w.UNPACK_SKIP_ROWS),er=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,wt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ze),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,et);const wr=y.isDataArrayTexture||y.isData3DTexture,vt=z.isDataArrayTexture||z.isData3DTexture;if(y.isDepthTexture){const zt=_.get(y),Ii=_.get(z),kt=_.get(zt.__renderTarget),Li=_.get(Ii.__renderTarget);ce.bindFramebuffer(w.READ_FRAMEBUFFER,kt.__webglFramebuffer),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Rr=0;Rr<Oe;Rr++)wr&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(y).__webglTexture,J,et+Rr),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(z).__webglTexture,Ae,Dt+Rr)),w.blitFramebuffer(ze,Ke,De,we,Ve,mt,De,we,w.DEPTH_BUFFER_BIT,w.NEAREST);ce.bindFramebuffer(w.READ_FRAMEBUFFER,null),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(J!==0||y.isRenderTargetTexture||_.has(y)){const zt=_.get(y),Ii=_.get(z);ce.bindFramebuffer(w.READ_FRAMEBUFFER,vm),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,xm);for(let kt=0;kt<Oe;kt++)wr?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zt.__webglTexture,J,et+kt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,zt.__webglTexture,J),vt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ii.__webglTexture,Ae,Dt+kt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ii.__webglTexture,Ae),J!==0?w.blitFramebuffer(ze,Ke,De,we,Ve,mt,De,we,w.COLOR_BUFFER_BIT,w.NEAREST):vt?w.copyTexSubImage3D(Be,Ae,Ve,mt,Dt+kt,ze,Ke,De,we):w.copyTexSubImage2D(Be,Ae,Ve,mt,ze,Ke,De,we);ce.bindFramebuffer(w.READ_FRAMEBUFFER,null),ce.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else vt?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,Xt,wt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,wt.data):w.texSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,Xt,wt):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ae,Ve,mt,De,we,gt,Xt,wt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ae,Ve,mt,wt.width,wt.height,gt,wt.data):w.texSubImage2D(w.TEXTURE_2D,Ae,Ve,mt,De,we,gt,Xt,wt);w.pixelStorei(w.UNPACK_ROW_LENGTH,gn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,lt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,In),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,er),Ae===0&&z.generateMipmaps&&w.generateMipmap(Be),ce.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&F.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?F.setTextureCube(y,0):y.isData3DTexture?F.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?F.setTexture2DArray(y,0):F.setTexture2D(y,0),ce.unbindTexture()},this.resetState=function(){U=0,H=0,G=null,ce.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const to={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class la{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vE=new Iu(-1,1,1,-1,0,1);class xE extends mn{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}}const SE=new xE;class tm{constructor(e){this._mesh=new Wn(SE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jr extends la{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vo.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new tm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wh extends la{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class bE extends la{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ME{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ge);this._width=i.width,this._height=i.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr(to),this.copyPass.material.blending=ai,this.timer=new bx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wh!==void 0&&(a instanceof Wh?i=!0:a instanceof bE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yE extends la{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const EE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ms extends la{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,a,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new dn(s,a,{type:yn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new dn(s,a,{type:yn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=EE;this.highPassUniforms=vo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ge(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vo.clone(to.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,premultipliedAlpha:!0,blending:mr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new Du,this._fsQuad=new tm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ms.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ms.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ms.BlurDirectionX=new Ge(1,0);ms.BlurDirectionY=new Ge(0,1);const TE=`// Fullscreen triangle technique: a single oversized triangle that
// always covers the entire viewport regardless of aspect ratio.
// The vertex positions are stored in the position attribute and
// mapped directly to clip space, bypassing the camera matrices
// so the background plane is immune to FOV, position, or aspect changes.

varying vec2 vUv;

void main() {
  // Position attribute contains the fullscreen triangle vertices:
  //   (-1, -1), (3, -1), (-1, 3)
  // These cover the entire [-1,1] NDC quad and beyond, guaranteeing
  // every screen fragment is rasterized.
  vUv = position.xy * 0.5 + 0.5;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,AE=`precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform vec3 uAccentColor;
uniform vec3 uDeepColor;
uniform vec3 uMidColor;

varying vec2 vUv;

// ── Hash & Noise ──────────────────────────────────────────
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// ── FBM with 5 octaves (primary) ────────────────────────
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + vec2(100.0);
    a *= 0.5;
  }
  return v;
}

// ── FBM with 4 octaves (secondary — absorbed from mid nebula) ──
float fbmMid(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.7), sin(0.7), -sin(0.7), cos(0.7));
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + vec2(57.3, 91.7);
    a *= 0.5;
  }
  return v;
}

// ── Domain-warped nebula (primary) ───────────────────────
float nebula(vec2 uv, float time) {
  vec2 q = vec2(
    fbm(uv + time * 0.02),
    fbm(uv + vec2(5.2, 1.3))
  );
  vec2 r = vec2(
    fbm(uv + 4.0 * q + vec2(1.7, 9.2) + time * 0.015),
    fbm(uv + 4.0 * q + vec2(8.3, 2.8) + time * 0.01)
  );
  return fbm(uv + 4.0 * r);
}

// ── Domain-warped nebula (secondary — absorbed mid layer) ──
float nebulaMid(vec2 uv, float time) {
  vec2 q = vec2(
    fbmMid(uv + time * 0.025),
    fbmMid(uv + vec2(8.4, 2.7))
  );
  vec2 r = vec2(
    fbmMid(uv + 3.5 * q + vec2(4.1, 6.8) + time * 0.018),
    fbmMid(uv + 3.5 * q + vec2(11.7, 5.2) + time * 0.012)
  );
  return fbmMid(uv + 3.5 * r);
}

void main() {
    // Use gl_FragCoord for pixel-perfect, viewport-filling UVs.
    // This guarantees the nebula covers the entire screen regardless
    // of camera position, FOV, or aspect ratio changes.
    vec2 uv = gl_FragCoord.xy / uResolution;

    // Aspect-corrected coordinates: normalize so the shorter axis
    // maps to [0,1] and the longer axis extends beyond, ensuring
    // the nebula fills the entire viewport without distortion.
    float aspect = uResolution.x / uResolution.y;
    vec2 uvAspect = uv;
    if (aspect >= 1.0) {
        uvAspect.x *= aspect;
    } else {
        uvAspect.y /= aspect;
    }

    // Mouse parallax offset — increased to fill depth gap left by removed mid layer
    uvAspect += uMouse * 0.014;

    float t = uTime;

    // Generate primary nebula density
    float n = nebula(uvAspect * 2.5, t);
  
    // Second layer for color variation
    float n2 = nebula(uvAspect * 1.8 + vec2(3.7, 7.1), t * 0.7);
  
    // Third layer — absorbed mid nebula density (different seed/scale)
    float n3 = nebulaMid(uvAspect * 3.2, t);
    float n4 = nebulaMid(uvAspect * 2.2 + vec2(6.1, 4.3), t * 0.6);
  
    // Color mapping
    vec3 col = uDeepColor; // base: near-black navy
  
    // Mid-tone clouds (widened smoothstep to compensate for removed layer)
    col = mix(col, uMidColor, smoothstep(0.18, 0.52, n) * 0.65);
  
    // Accent highlights in brighter areas
    col = mix(col, uAccentColor, smoothstep(0.42, 0.72, n) * 0.38);
  
    // Secondary color variation (teal)
    vec3 secondaryColor = vec3(0.102, 0.29, 0.424); // teal #1a4a6c
    col = mix(col, secondaryColor, smoothstep(0.28, 0.58, n2) * 0.28);
  
    // Subtle warm highlight at brightest points
    vec3 warmHighlight = vec3(0.15, 0.2, 0.35);
    col = mix(col, warmHighlight, smoothstep(0.55, 0.82, n) * 0.22);
  
    // ── Absorbed mid nebula colors ──
    // Purple/violet accent (from mid nebula's midAccentColor)
    vec3 midAccentColor = vec3(0.35, 0.12, 0.45); // muted purple #591f73
    col = mix(col, midAccentColor, smoothstep(0.35, 0.6, n3) * 0.22);
  
    // Rose/magenta tones (from mid nebula's secondaryColor)
    vec3 roseColor = vec3(0.25, 0.08, 0.3); // deep rose #40144d
    col = mix(col, roseColor, smoothstep(0.25, 0.5, n4) * 0.16);
  
    // Indigo cool highlight (from mid nebula's coolHighlight)
    vec3 coolHighlight = vec3(0.12, 0.15, 0.3); // indigo tint
    col = mix(col, coolHighlight, smoothstep(0.5, 0.78, n3) * 0.12);
  
    // Vignette-like darkening at edges (supplement to post-process)
    // Use the raw 0-1 UV so vignette is always screen-relative
    vec2 center = uv - 0.5;
    float edgeDist = length(center);
    col *= 1.0 - smoothstep(0.38, 0.88, edgeDist) * 0.28;
  
    // Ensure minimum brightness matches the deep background
    col = max(col, uDeepColor * 0.5);
  
    gl_FragColor = vec4(col, 1.0);
}
`,wE=`precision highp float;

uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uIntensity;

varying vec2 vUv;

// ── Cinematic Light Rays ───────────────────────────────────
// Enhanced radial blur from a slowly drifting origin.
// Works in concert with anamorphic flares:
// - Higher brightness threshold to only affect piercing sources
// - Anamorphic bias: rays stretch more horizontally
// - Softer decay for volumetric light bleed feel

void main() {
    // Slowly drifting light origin
    vec2 origin = vec2(
        0.3 + 0.15 * sin(uTime * 0.08),
        0.6 + 0.1 * cos(uTime * 0.06)
    );

    vec2 dir = vUv - origin;
    float dist = length(dir);
    dir = normalize(dir);

    // Anamorphic bias: stretch rays horizontally
    dir.x *= 1.4;

    // Sample along the radial direction
    vec4 color = texture2D(tDiffuse, vUv);
    vec4 rays = vec4(0.0);

    const int SAMPLES = 32;
    float decay = 0.94;

    float illumination = 1.0;
    vec2 sampleUv = vUv;

    for (int i = 0; i < SAMPLES; i++) {
        sampleUv += dir * 0.006;
        illumination *= decay;
        vec4 s = texture2D(tDiffuse, clamp(sampleUv, 0.0, 1.0));

        // Only blur bright pixels (higher threshold for piercing sources)
        float brightness = dot(s.rgb, vec3(0.2126, 0.7152, 0.0722));
        float brightMask = smoothstep(0.4, 1.5, brightness);

        // Chromatic tint: rays get slightly warmer as they spread
        vec3 warmTint = vec3(1.05, 0.98, 0.92);
        rays += s * brightMask * illumination * warmTint;
    }

    rays /= float(SAMPLES);
    rays *= uIntensity;

    // Composite: additive blend of rays onto original
    gl_FragColor = color + rays;
}
`,RE=`precision highp float;

uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uIntensity;

varying vec2 vUv;

// ── Film grain ────────────────────────────────────────────
// Per-channel noise mimicking high-ISO camera sensor noise

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec4 color = texture2D(tDiffuse, vUv);

  // Per-channel noise with slight variation
  float offset = uTime * 1.5;
  float r = rand(vUv * uTime + vec2(0.0, 0.0)) - 0.5;
  float g = rand(vUv * uTime + vec2(0.1, 0.3)) - 0.5;
  float b = rand(vUv * uTime + vec2(0.2, 0.1)) - 0.5;

  // Scale noise by intensity
  vec3 grain = vec3(r, g, b) * uIntensity;

  gl_FragColor = vec4(color.rgb + grain, color.a);
}
`,CE=`precision highp float;

uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uIntensity;

varying vec2 vUv;

// ── Cinematic Chromatic Aberration ─────────────────────────
// Per-channel UV offset with radial + anamorphic characteristics:
// - Stronger at edges (radial falloff)
// - Horizontal bias (anamorphic dispersion)
// - Red fringes outward-left, blue outward-right
// - Green stays centered (characteristic of cinema lenses)

void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);

    // Radial aberration: quadratic falloff from center
    float radialAberration = dist * dist * uIntensity;

    // Anamorphic bias: horizontal dispersion is stronger
    // Cinema anamorphic lenses spread chromatic info more horizontally
    float horizontalBias = abs(center.x) / max(dist, 0.001);
    float anamorphicAberration = radialAberration * (1.0 + horizontalBias * 0.8);

    // Red channel shifts outward and slightly left (warm fringing)
    vec2 rOffset = center * anamorphicAberration * -1.2;
    rOffset.x *= 1.3; // Extra horizontal spread for red

    // Blue channel shifts outward and slightly right (cool fringing)
    vec2 bOffset = center * anamorphicAberration * 1.2;
    bOffset.x *= 1.3; // Extra horizontal spread for blue

    // Green stays near center with very slight offset
    vec2 gOffset = center * radialAberration * -0.15;

    float r = texture2D(tDiffuse, vUv + rOffset).r;
    float g = texture2D(tDiffuse, vUv + gOffset).g;
    float b = texture2D(tDiffuse, vUv + bOffset).b;

    gl_FragColor = vec4(r, g, b, 1.0);
}
`,PE=`precision highp float;

uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uVignetteIntensity;
uniform float uDofRadius;

varying vec2 vUv;

// ── Deep Vignette + Subtle DOF ─────────────────────────────
// Combined into one pass for performance.
// Enhanced vignette for dramatic high-contrast:
// - Deeper shadow falloff at edges
// - Anamorphic oval vignette (wider horizontally)
// - Subtle DOF blur at periphery

void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);

    // ── Anamorphic vignette ──
    // Oval shape: stretch horizontally to match 2.39:1 cinema framing
    vec2 anamorphicCenter = center;
    anamorphicCenter.y *= 1.4; // Compress vertically → wider horizontal vignette
    float anamorphicDist = length(anamorphicCenter);

    // Deep cinematic vignette: stronger falloff for high contrast
    float vignette = 1.0 - smoothstep(0.25, 0.85, anamorphicDist) * uVignetteIntensity;

    // Secondary subtle circular vignette for extra depth
    float circularVignette = 1.0 - smoothstep(0.5, 1.0, dist) * uVignetteIntensity * 0.3;

    // Combined vignette
    float combinedVignette = vignette * circularVignette;

    // ── Subtle DOF (soft blur at edges) ──
    vec4 color = texture2D(tDiffuse, vUv);

    if (uDofRadius > 0.0) {
        float blurAmount = smoothstep(0.4, 0.9, dist) * uDofRadius;
        vec4 blurred = vec4(0.0);
        float total = 0.0;

        // 9-tap box blur scaled by distance
        for (float x = -1.0; x <= 1.0; x += 1.0) {
            for (float y = -1.0; y <= 1.0; y += 1.0) {
                vec2 offset = vec2(x, y) * blurAmount / uResolution;
                blurred += texture2D(tDiffuse, vUv + offset);
                total += 1.0;
            }
        }
        blurred /= total;

        // Mix between sharp center and blurred edges
        float blurMix = smoothstep(0.4, 0.85, dist);
        color = mix(color, blurred, blurMix);
    }

    // Apply combined vignette
    color.rgb *= combinedVignette;

    // ── Deep shadow crush ──
    // Subtly crush near-black values for deeper shadows
    // This creates the piercing contrast between bright flares and dark voids
    float luminance = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
    float shadowCrush = smoothstep(0.0, 0.06, luminance);
    color.rgb *= mix(0.7, 1.0, shadowCrush);

    gl_FragColor = color;
}
`,DE=`precision highp float;

uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFlareIntensity;
uniform float uStreakIntensity;
uniform float uBleedIntensity;

varying vec2 vUv;

// ── Anamorphic Lens Flare Post-Process ──────────────────────
// Detects bright pixels above threshold, then applies:
// 1. Horizontal anamorphic streaks (characteristic 2.39:1 cinema flare)
// 2. Chromatic dispersion (R/G/B channels streak at different rates)
// 3. Volumetric light bleed (radial glow from bright sources)
// 4. Secondary ghost reflections (aperture element reflections)

// ── Horizontal streak via 1D Gaussian blur ─────────────────
// Multi-pass would be better but single-pass keeps it in one pass
vec3 horizontalStreak(sampler2D tex, vec2 uv, vec2 resolution) {
    vec3 result = vec3(0.0);
    float totalWeight = 0.0;

    // Wider streak for red (anamorphic characteristic: warm channels spread more)
    const int SAMPLES = 48;
    float pixelStep = 2.5 / float(SAMPLES);

    for (int i = -SAMPLES / 2; i <= SAMPLES / 2; i++) {
        float fi = float(i);
        float offset = fi * pixelStep;
        vec2 sampleUv = uv + vec2(offset / resolution.x, 0.0);

        // Anisotropic Gaussian: very wide horizontally, thin vertically
        float weight = exp(-fi * fi / (2.0 * 180.0));

        vec3 s = texture2D(tex, clamp(sampleUv, 0.0, 1.0)).rgb;
        float brightness = dot(s, vec3(0.2126, 0.7152, 0.0722));

        // Only streak from bright sources (threshold)
        float brightMask = smoothstep(0.55, 1.2, brightness);
        s *= brightMask;

        result += s * weight;
        totalWeight += weight;
    }

    return result / max(totalWeight, 0.001);
}

// ── Chromatic dispersion streaks ────────────────────────────
// Each RGB channel gets a different horizontal spread
// Red spreads widest, green medium, blue narrowest
vec3 chromaticStreak(sampler2D tex, vec2 uv, vec2 resolution) {
    vec3 result = vec3(0.0);

    const int SAMPLES = 32;
    float pixelStep = 3.0 / float(SAMPLES);

    // Per-channel streak widths (anamorphic characteristic)
    float sigmaR = 250.0;  // Red: widest spread
    float sigmaG = 160.0;  // Green: medium
    float sigmaB = 100.0;  // Blue: narrowest

    // Per-channel color offsets (chromatic dispersion)
    float offsetR = -1.5;  // Red shifts left
    float offsetG = 0.0;   // Green centered
    float offsetB = 1.5;   // Blue shifts right

    float totalR = 0.0;
    float totalG = 0.0;
    float totalB = 0.0;

    for (int i = -SAMPLES / 2; i <= SAMPLES / 2; i++) {
        float fi = float(i);
        float baseOffset = fi * pixelStep;

        // Red channel
        vec2 uvR = uv + vec2((baseOffset + offsetR) / resolution.x, 0.0);
        float wR = exp(-fi * fi / (2.0 * sigmaR));
        vec3 sR = texture2D(tex, clamp(uvR, 0.0, 1.0)).rgb;
        float bR = dot(sR, vec3(0.2126, 0.7152, 0.0722));
        result.r += sR.r * wR * smoothstep(0.5, 1.0, bR);
        totalR += wR;

        // Green channel
        vec2 uvG = uv + vec2((baseOffset + offsetG) / resolution.x, 0.0);
        float wG = exp(-fi * fi / (2.0 * sigmaG));
        vec3 sG = texture2D(tex, clamp(uvG, 0.0, 1.0)).rgb;
        float bG = dot(sG, vec3(0.2126, 0.7152, 0.0722));
        result.g += sG.g * wG * smoothstep(0.5, 1.0, bG);
        totalG += wG;

        // Blue channel
        vec2 uvB = uv + vec2((baseOffset + offsetB) / resolution.x, 0.0);
        float wB = exp(-fi * fi / (2.0 * sigmaB));
        vec3 sB = texture2D(tex, clamp(uvB, 0.0, 1.0)).rgb;
        float bB = dot(sB, vec3(0.2126, 0.7152, 0.0722));
        result.b += sB.b * wB * smoothstep(0.5, 1.0, bB);
        totalB += wB;
    }

    result.r /= max(totalR, 0.001);
    result.g /= max(totalG, 0.001);
    result.b /= max(totalB, 0.001);

    return result;
}

// ── Volumetric light bleed ──────────────────────────────────
// Radial glow emanating from bright source pixels
vec3 lightBleed(sampler2D tex, vec2 uv, vec2 resolution) {
    vec4 centerColor = texture2D(tex, uv);
    float centerBright = dot(centerColor.rgb, vec3(0.2126, 0.7152, 0.0722));

    // Only bleed from bright sources
    float brightMask = smoothstep(0.6, 1.5, centerBright);

    vec3 bleed = vec3(0.0);
    float totalWeight = 0.0;

    // Radial sampling in 8 directions
    const int DIRECTIONS = 8;
    const int STEPS = 6;

    for (int d = 0; d < DIRECTIONS; d++) {
        float angle = float(d) * 6.2831853 / float(DIRECTIONS);
        vec2 dir = vec2(cos(angle), sin(angle));

        for (int s = 1; s <= STEPS; s++) {
            float dist = float(s) * 4.0;
            vec2 sampleUv = uv + dir * dist / resolution;
            float weight = 1.0 / (1.0 + dist * 0.15);
            weight *= weight; // Inverse square falloff

            vec3 s = texture2D(tex, clamp(sampleUv, 0.0, 1.0)).rgb;
            float b = dot(s, vec3(0.2126, 0.7152, 0.0722));
            bleed += s * weight * smoothstep(0.5, 1.2, b);
            totalWeight += weight;
        }
    }

    bleed /= max(totalWeight, 0.001);
    return bleed * brightMask;
}

// ── Secondary ghost reflections ─────────────────────────────
// Simulates light bouncing between lens elements
vec3 ghostReflections(sampler2D tex, vec2 uv, vec2 resolution, float time) {
    vec3 ghosts = vec3(0.0);
    vec2 center = vec2(0.5);
    vec2 dir = uv - center;
    float dist = length(dir);

    // 3 ghost elements at different positions along the optical axis
    for (int i = 1; i <= 3; i++) {
        float fi = float(i);
        // Ghost position: reflected across center at different scales
        vec2 ghostUv = center + dir * (1.0 - fi * 0.25);
        float ghostScale = 0.02 * fi;

        // Sample with slight offset (chromatic split per ghost)
        vec2 ghostOffset = vec2(ghostScale) / resolution;
        float r = texture2D(tex, clamp(ghostUv + ghostOffset * 1.5, 0.0, 1.0)).r;
        float g = texture2D(tex, clamp(ghostUv, 0.0, 1.0)).g;
        float b = texture2D(tex, clamp(ghostUv - ghostOffset * 1.5, 0.0, 1.0)).b;

        vec3 ghostColor = vec3(r, g, b);
        float ghostBright = dot(ghostColor, vec3(0.2126, 0.7152, 0.0722));

        // Ghost intensity falls off with distance from center
        float ghostIntensity = smoothstep(0.5, 1.2, ghostBright) * (0.15 / fi);
        ghosts += ghostColor * ghostIntensity;
    }

    return ghosts;
}

void main() {
    vec4 original = texture2D(tDiffuse, vUv);
    float originalBright = dot(original.rgb, vec3(0.2126, 0.7152, 0.0722));

    // ── 1. Horizontal anamorphic streak ──
    vec3 streak = horizontalStreak(tDiffuse, vUv, uResolution) * uStreakIntensity;

    // ── 2. Chromatic dispersion streaks ──
    vec3 chromatic = chromaticStreak(tDiffuse, vUv, uResolution) * uFlareIntensity;

    // ── 3. Volumetric light bleed ──
    vec3 bleed = lightBleed(tDiffuse, vUv, uResolution) * uBleedIntensity;

    // ── 4. Ghost reflections ──
    vec3 ghosts = ghostReflections(tDiffuse, vUv, uResolution, uTime) * uFlareIntensity * 0.5;

    // ── Composite ──
    // Additive blending: flare elements add light on top
    vec3 result = original.rgb;

    // Streak: primarily horizontal, characteristic anamorphic look
    result += streak * 0.6;

    // Chromatic dispersion: adds color fringing to the streak
    result += chromatic * 0.8;

    // Light bleed: soft radial glow
    result += bleed * 0.4;

    // Ghost reflections: subtle secondary images
    result += ghosts * 0.3;

    // ── Per-channel soft clamp to prevent hard clipping ──
    // Filmic highlight rolloff instead of hard clamp
    result = max(result, 0.0);
    result = result / (1.0 + result * 0.15); // Soft filmic compression

    gl_FragColor = vec4(result, 1.0);
}
`;function IE(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.15,"rgba(220, 230, 255, 0.8)"),s.addColorStop(.4,"rgba(180, 200, 255, 0.3)"),s.addColorStop(1,"rgba(100, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new ko(e);return a.needsUpdate=!0,a}function LE(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.1,"rgba(200, 220, 255, 0.6)"),s.addColorStop(.3,"rgba(14, 91, 255, 0.3)"),s.addColorStop(.6,"rgba(14, 91, 255, 0.1)"),s.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new ko(e);return a.needsUpdate=!0,a}function UE(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(100, 180, 255, 0.0)"),s.addColorStop(.3,"rgba(60, 140, 255, 0.08)"),s.addColorStop(.6,"rgba(30, 80, 200, 0.04)"),s.addColorStop(1,"rgba(10, 40, 150, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=t.createRadialGradient(i,i,0,i,i,r*.5);a.addColorStop(0,"rgba(180, 220, 255, 0.0)"),a.addColorStop(.2,"rgba(100, 200, 255, 0.5)"),a.addColorStop(.5,"rgba(40, 120, 255, 0.25)"),a.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=a,t.fillRect(0,0,n,n);const o=t.createRadialGradient(i,i,0,i,i,r*.2);o.addColorStop(0,"rgba(255, 255, 255, 2.0)"),o.addColorStop(.15,"rgba(240, 248, 255, 1.5)"),o.addColorStop(.4,"rgba(180, 220, 255, 0.8)"),o.addColorStop(.7,"rgba(100, 180, 255, 0.3)"),o.addColorStop(1,"rgba(50, 120, 255, 0.0)"),t.fillStyle=o,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const l=n*.8,c=n*.02,u=t.createRadialGradient(i,i,0,i,i,l*.5);u.addColorStop(0,"rgba(200, 230, 255, 0.6)"),u.addColorStop(.3,"rgba(100, 180, 255, 0.2)"),u.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(1,c/(l*.5)),t.translate(-i,-i),t.fillStyle=u,t.fillRect(0,0,n,n),t.restore();const f=n*.3,h=n*.015,p=t.createRadialGradient(i,i,0,i,i,f*.5);p.addColorStop(0,"rgba(200, 230, 255, 0.3)"),p.addColorStop(.5,"rgba(100, 160, 255, 0.08)"),p.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(h/(f*.5),1),t.translate(-i,-i),t.fillStyle=p,t.fillRect(0,0,n,n),t.restore(),t.globalCompositeOperation="source-over";const g=new ko(e);return g.needsUpdate=!0,g}function NE(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r*.15);s.addColorStop(0,"rgba(255, 255, 255, 2.5)"),s.addColorStop(.3,"rgba(220, 240, 255, 1.2)"),s.addColorStop(.7,"rgba(150, 200, 255, 0.4)"),s.addColorStop(1,"rgba(80, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const a=r*.9,o=1.5;for(let c=0;c<4;c++){const u=(c*45+45)*Math.PI/180;t.save(),t.translate(i,i),t.rotate(u);const f=t.createLinearGradient(0,0,a,0);f.addColorStop(0,"rgba(200, 230, 255, 0.8)"),f.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),f.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),f.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=f,t.fillRect(0,-o/2,a,o);const h=t.createLinearGradient(0,0,-a,0);h.addColorStop(0,"rgba(200, 230, 255, 0.8)"),h.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),h.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),h.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=h,t.fillRect(-a,-o/2,a,o),t.restore()}t.globalCompositeOperation="source-over";const l=new ko(e);return l.needsUpdate=!0,l}const FE={__name:"WebGLBackground",emits:["ready"],setup(n,{emit:e}){const t=e,i=Ue(null),r={high:{pixelRatio:Math.min(window.devicePixelRatio,2),particles:150,piercingParticles:18,diffractionStars:8,stars:[2e3,800,200],bloom:!0,bloomStrength:1.2,bloomRadius:.8,bloomThreshold:.35,dof:!0,lightRays:!0,grain:!0,chromatic:!0,anamorphicFlare:!0,flareIntensity:.7,streakIntensity:.9,bleedIntensity:.5},medium:{pixelRatio:Math.min(window.devicePixelRatio,1.5),particles:80,piercingParticles:10,diffractionStars:4,stars:[1200,500,100],bloom:!0,bloomStrength:.9,bloomRadius:.6,bloomThreshold:.4,dof:!1,lightRays:!0,grain:!0,chromatic:!1,anamorphicFlare:!0,flareIntensity:.5,streakIntensity:.6,bleedIntensity:.3},low:{pixelRatio:1,particles:40,piercingParticles:5,diffractionStars:2,stars:[600,250,50],bloom:!0,bloomStrength:.6,bloomRadius:.4,bloomThreshold:.5,dof:!1,lightRays:!1,grain:!0,chromatic:!1,anamorphicFlare:!1,flareIntensity:0,streakIntensity:0,bleedIntensity:0}};function s(){return window.innerWidth<768||"ontouchstart"in window?"medium":"high"}let a=s(),o=r[a],l=null,c=null,u=null,f=null,h=null,p=null,g=null,b=[],m=null,d=[],v=null,E=[],S=null,P=[],A=null,L=null,x=null,C=null,ie=null,U=null;const H={x:0,y:0},G={x:0,y:0};let ee=!1;function W(T){G.x=T.clientX/window.innerWidth*2-1,G.y=-(T.clientY/window.innerHeight)*2+1}function X(T){if(T.touches.length>0){const R=T.touches[0];G.x=R.clientX/window.innerWidth*2-1,G.y=-(R.clientY/window.innerHeight)*2+1}}const O=[];let ae=0,he=0;function _e(T){if(O.push(T),O.length>60&&O.shift(),O.length>=30){const R=O.reduce((N,I)=>N+I,0)/O.length;a==="high"&&R>22?(he++,he>2&&Me("medium")):a==="medium"&&R>33?(he++,he>2&&Me("low")):he=Math.max(0,he-1)}}function Me(T){T!==a&&(a=T,o=r[T],he=0,O.length=0,A&&(A.enabled=o.bloom,A.strength=o.bloomStrength,A.radius=o.bloomRadius,A.threshold=o.bloomThreshold),L&&(L.enabled=o.lightRays),C&&(C.enabled=o.chromatic),U&&(U.enabled=o.anamorphicFlare,o.anamorphicFlare&&(U.uniforms.uFlareIntensity.value=o.flareIntensity,U.uniforms.uStreakIntensity.value=o.streakIntensity,U.uniforms.uBleedIntensity.value=o.bleedIntensity)),ie&&(ie.uniforms.uDofRadius.value=o.dof?1.5:0),l&&(l.setPixelRatio(o.pixelRatio),f.setPixelRatio(o.pixelRatio)))}function xe(){document.hidden?p!==null&&(cancelAnimationFrame(p),p=null):p===null&&(ae=performance.now(),me())}let He=null;function tt(){if(!l||!u||!f)return;const T=window.innerWidth,R=window.innerHeight;l.setSize(T,R),f.setSize(T,R),u.aspect=T/R,u.updateProjectionMatrix(),g&&g.material.uniforms.uResolution.value.set(T,R),L&&L.uniforms.uResolution.value.set(T,R),C&&C.uniforms.uResolution.value.set(T,R),ie&&ie.uniforms.uResolution.value.set(T,R),U&&U.uniforms.uResolution.value.set(T,R)}function Je(){const T=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),R=new mn;R.setAttribute("position",new Pn(T,3));const N=new Wt({vertexShader:TE,fragmentShader:AE,uniforms:{uTime:{value:0},uResolution:{value:new Ge(window.innerWidth,window.innerHeight)},uMouse:{value:new Ge(0,0)},uAccentColor:{value:new We(941055)},uDeepColor:{value:new We(2068)},uMidColor:{value:new We(661032)}},depthWrite:!1,depthTest:!0,side:Qn});g=new Wn(R,N),g.frustumCulled=!1,g.renderOrder=-10,c.add(g)}function B(){const T=IE(64),R=o.stars,N=[{count:R[0],sizeRange:[.5,1],depthRange:[-80,-50],parallax:.015},{count:R[1],sizeRange:[1,2],depthRange:[-50,-20],parallax:.04},{count:R[2],sizeRange:[2,3.5],depthRange:[-20,-5],parallax:.08}];b=[];for(const I of N){const V=new Float32Array(I.count*3),j=new Float32Array(I.count),w=new Float32Array(I.count);for(let ce=0;ce<I.count;ce++)V[ce*3]=(Math.random()-.5)*200,V[ce*3+1]=(Math.random()-.5)*120,V[ce*3+2]=I.depthRange[0]+Math.random()*(I.depthRange[1]-I.depthRange[0]),j[ce]=I.sizeRange[0]+Math.random()*(I.sizeRange[1]-I.sizeRange[0]),w[ce]=Math.random()*Math.PI*2;const ue=new mn;ue.setAttribute("position",new pn(V,3)),ue.setAttribute("aSize",new pn(j,1)),ue.setAttribute("aPhase",new pn(w,1));const le=new Wp({map:T,size:1.5,sizeAttenuation:!0,transparent:!0,blending:mr,depthWrite:!1,color:13162744}),re=new fx(ue,le);re.userData.parallax=I.parallax,re.renderOrder=-5,c.add(re),b.push(re)}}function D(){const T=LE(64);m=new vr,d=[];const R=[new We(941055),new We(13162744),new We(3864063)],N=[.6,.3,.1];for(let I=0;I<o.particles;I++){const V=new Qa({map:T,transparent:!0,blending:mr,depthWrite:!1,opacity:.15+Math.random()*.45}),j=Math.random();let w=0;j>N[0]+N[1]?w=2:j>N[0]&&(w=1),V.color=R[w];const ue=new Cl(V),le=(Math.random()-.5)*100,re=(Math.random()-.5)*60,ce=-5-Math.random()*40;ue.position.set(le,re,ce);const M=.5+Math.random()*2;ue.scale.set(M,M,1),d.push({sprite:ue,baseSize:M,velocity:new $((Math.random()-.5)*.01,(Math.random()-.5)*.008,(Math.random()-.5)*.003),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.3+Math.random()*.4}),m.add(ue)}m.renderOrder=-3,c.add(m)}function Y(){const T=UE(128);v=new vr,E=[];const R=[new We(15266047),new We(13691135),new We(12644607),new We(15791359),new We(16771312)];for(let N=0;N<o.piercingParticles;N++){const I=new Qa({map:T,transparent:!0,blending:mr,depthWrite:!1,opacity:.7+Math.random()*.3}),V=Math.random();let j;V>.95?j=4:V>.75?j=2:V>.5?j=1:V>.25?j=3:j=0,I.color=R[j];const w=new Cl(I),ue=(Math.random()-.5)*90,le=(Math.random()-.5)*50,re=-3-Math.random()*30;w.position.set(ue,le,re);const ce=1.5+Math.random()*3.5,M=2.2+Math.random()*1;w.scale.set(ce*M,ce,1),E.push({sprite:w,baseSize:ce,aspectRatio:M,velocity:new $((Math.random()-.5)*.006,(Math.random()-.5)*.004,(Math.random()-.5)*.002),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.15+Math.random()*.25,pulseAmplitude:.4+Math.random()*.6,burstPhase:Math.random()*Math.PI*2,burstSpeed:.05+Math.random()*.1,burstActive:!1}),v.add(w)}v.renderOrder=-2,c.add(v)}function ne(){const T=NE(128);S=new vr,P=[];for(let R=0;R<o.diffractionStars;R++){const N=new Qa({map:T,transparent:!0,blending:mr,depthWrite:!1,opacity:.85+Math.random()*.15}),I=Math.random();I>.8?N.color=new We(16773344):I>.5?N.color=new We(15791359):N.color=new We(14215423);const V=new Cl(N),j=(Math.random()-.5)*80,w=(Math.random()-.5)*45,ue=-2-Math.random()*20;V.position.set(j,w,ue);const le=3+Math.random()*5,re=2.5+Math.random()*1.5;V.scale.set(le*re,le,1),P.push({sprite:V,baseSize:le,aspectRatio:re,velocity:new $((Math.random()-.5)*.003,(Math.random()-.5)*.002,0),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.08+Math.random()*.12,pulseAmplitude:.3+Math.random()*.5,breathPhase:Math.random()*Math.PI*2,breathSpeed:.03+Math.random()*.05}),S.add(V)}S.renderOrder=-1,c.add(S)}function fe(){const T=window.innerWidth,R=window.innerHeight;f=new ME(l),f.setPixelRatio(o.pixelRatio);const N=new yE(c,u);f.addPass(N),A=new ms(new Ge(T,R),o.bloomStrength,o.bloomRadius,o.bloomThreshold),A.enabled=o.bloom,f.addPass(A);const I={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(T,R)},uTime:{value:0},uFlareIntensity:{value:o.flareIntensity},uStreakIntensity:{value:o.streakIntensity},uBleedIntensity:{value:o.bleedIntensity}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:DE};U=new Jr(I),U.enabled=o.anamorphicFlare,f.addPass(U);const V={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(T,R)},uTime:{value:0},uIntensity:{value:.15}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:wE};L=new Jr(V),L.enabled=o.lightRays,f.addPass(L);const j={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.04}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:RE};x=new Jr(j),x.enabled=o.grain,f.addPass(x);const w={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(T,R)},uIntensity:{value:.0015}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:CE};C=new Jr(w),C.enabled=o.chromatic,f.addPass(C);const ue={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(T,R)},uVignetteIntensity:{value:.5},uDofRadius:{value:o.dof?1.5:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:PE};ie=new Jr(ue),f.addPass(ie)}function me(){p=requestAnimationFrame(me);const T=performance.now(),R=T-ae;ae=T,_e(R);const N=h.getElapsedTime();if(ee&&(G.x=.3*Math.sin(N*.05),G.y=.2*Math.cos(N*.037)),H.x+=(G.x-H.x)*.02,H.y+=(G.y-H.y)*.02,g){const I=g.material.uniforms;I.uTime.value=N,I.uMouse.value.set(H.x,H.y)}for(const I of b){const V=I.userData.parallax;I.position.x=H.x*V*10,I.position.y=H.y*V*10,I.material&&(I.material.opacity=.7+.3*Math.sin(N*.5))}for(const I of d){I.sprite.position.add(I.velocity),I.sprite.position.x>50&&(I.sprite.position.x=-50),I.sprite.position.x<-50&&(I.sprite.position.x=50),I.sprite.position.y>30&&(I.sprite.position.y=-30),I.sprite.position.y<-30&&(I.sprite.position.y=30);const V=1+.3*Math.sin(N*I.pulseSpeed+I.phaseOffset),j=I.baseSize*V;I.sprite.scale.set(j,j,1)}for(const I of E){I.sprite.position.add(I.velocity),I.sprite.position.x>45&&(I.sprite.position.x=-45),I.sprite.position.x<-45&&(I.sprite.position.x=45),I.sprite.position.y>25&&(I.sprite.position.y=-25),I.sprite.position.y<-25&&(I.sprite.position.y=25);const V=1+I.pulseAmplitude*Math.sin(N*I.pulseSpeed+I.phaseOffset),j=I.baseSize*V;I.sprite.scale.set(j*I.aspectRatio,j,1);const w=.6+.4*Math.sin(N*I.pulseSpeed*.7+I.phaseOffset);I.sprite.material.opacity=w;const ue=Math.sin(N*I.burstSpeed+I.burstPhase);ue>.98&&!I.burstActive?(I.burstActive=!0,I.sprite.scale.multiplyScalar(1.8)):ue<.5&&I.burstActive&&(I.burstActive=!1)}for(const I of P){I.sprite.position.add(I.velocity),I.sprite.position.x>40&&(I.sprite.position.x=-40),I.sprite.position.x<-40&&(I.sprite.position.x=40),I.sprite.position.y>22&&(I.sprite.position.y=-22),I.sprite.position.y<-22&&(I.sprite.position.y=22);const V=1+I.pulseAmplitude*Math.sin(N*I.breathSpeed+I.breathPhase),j=1+.15*Math.sin(N*I.pulseSpeed+I.phaseOffset),w=V*j,ue=I.baseSize*w;I.sprite.scale.set(ue*I.aspectRatio,ue,1);const le=.75+.25*Math.sin(N*I.breathSpeed*.8+I.breathPhase);I.sprite.material.opacity=le}m&&(m.position.x=H.x*.6,m.position.y=H.y*.6),v&&(v.position.x=H.x*.9,v.position.y=H.y*.9),S&&(S.position.x=H.x*1.2,S.position.y=H.y*1.2),U&&U.enabled&&(U.uniforms.uTime.value=N),L&&L.enabled&&(L.uniforms.uTime.value=N),x&&x.enabled&&(x.uniforms.uTime.value=N),f.render()}return fi(()=>{const T=i.value;T&&(ee="ontouchstart"in window||navigator.maxTouchPoints>0,l=new _E({canvas:T,antialias:!1,alpha:!1,powerPreference:"high-performance"}),l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(o.pixelRatio),l.setClearColor(2068,1),l.autoClear=!1,l.toneMapping=bu,l.toneMappingExposure=1.4,c=new ex,u=new An(60,window.innerWidth/window.innerHeight,.1,200),u.position.z=5,h=new yx,Je(),B(),D(),Y(),ne(),fe(),ee?window.addEventListener("touchmove",X,{passive:!0}):window.addEventListener("mousemove",W),document.addEventListener("visibilitychange",xe),He=new ResizeObserver(tt),He.observe(document.body),window.addEventListener("resize",tt),ae=performance.now(),me(),requestAnimationFrame(()=>{t("ready")}))}),pu(()=>{p!==null&&(cancelAnimationFrame(p),p=null),window.removeEventListener("mousemove",W),window.removeEventListener("touchmove",X),document.removeEventListener("visibilitychange",xe),window.removeEventListener("resize",tt),He&&(He.disconnect(),He=null),l&&l.dispose(),f&&f.dispose(),c&&c.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&(Array.isArray(T.material)?T.material.forEach(R=>R.dispose()):T.material.dispose())}),l=null,c=null,u=null,f=null,h=null,g=null,b=[],m=null,d=[],v=null,E=[],S=null,P=[]}),(T,R)=>(Pe(),Fe("canvas",{ref_key:"canvasRef",ref:i,id:"webgl-bg"},null,512))}},OE=rn(FE,[["__scopeId","data-v-30160bdc"]]),kE={id:"app",class:"site-main"},BE={class:"site-footer"},zE={class:"wrap"},VE={__name:"App",setup(n){const e=Ue(!1);return(t,i)=>{const r=ia("router-view");return Pe(),Fe("div",kE,[nt(nv,{visible:!e.value},null,8,["visible"]),nt(OE,{onReady:i[0]||(i[0]=s=>e.value=!0)}),nt(ev),q("main",null,[nt(r)]),q("footer",BE,[q("div",zE,"© "+Et(new Date().getFullYear())+" CyberCubed",1)])])}}},HE=rn(VE,[["__scopeId","data-v-8d1c67dd"]]);function Lu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ar=Lu();function nm(n){Ar=n}var dr={exec:()=>null};function Yr(n){let e=[];return t=>{let i=Math.max(0,Math.min(3,t-1)),r=e[i];return r||(r=n(i),e[i]=r),r}}function st(n,e=""){let t=typeof n=="string"?n:n.source,i={replace:(r,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(Qt.caret,"$1"),t=t.replace(r,a),i},getRegex:()=>new RegExp(t,e)};return i}var GE=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),Qt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Yr(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Yr(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Yr(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:Yr(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:Yr(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Yr(n=>new RegExp(`^ {0,${n}}>`))},WE=/^(?:[ \t]*(?:\n|$))+/,XE=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,$E=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ca=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qE=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Uu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,im=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,rm=st(im).replace(/bull/g,Uu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),YE=st(im).replace(/bull/g,Uu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Nu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,jE=/^[^\n]+/,Fu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,KE=st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Fu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ZE=st(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Uu).getRegex(),Ho="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ou=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,JE=st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ou).replace("tag",Ho).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sm=st(Nu).replace("hr",ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ho).getRegex(),QE=st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sm).getRegex(),ku={blockquote:QE,code:XE,def:KE,fences:$E,heading:qE,hr:ca,html:JE,lheading:rm,list:ZE,newline:WE,paragraph:sm,table:dr,text:jE},Xh=st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ho).getRegex(),eT={...ku,lheading:YE,table:Xh,paragraph:st(Nu).replace("hr",ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ho).getRegex()},tT={...ku,html:st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ou).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:st(Nu).replace("hr",ca).replace("heading",` *#{1,6} *[^
]`).replace("lheading",rm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,iT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,am=/^( {2,}|\\)\n(?!\s*$)/,rT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ss=/[\p{P}\p{S}]/u,Go=/[\s\p{P}\p{S}]/u,Bu=/[^\s\p{P}\p{S}]/u,sT=st(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Go).getRegex(),om=/(?!~)[\p{P}\p{S}]/u,aT=/(?!~)[\s\p{P}\p{S}]/u,oT=/(?:[^\s\p{P}\p{S}]|~)/u,lT=st(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",GE?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),lm=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,cT=st(lm,"u").replace(/punct/g,Ss).getRegex(),uT=st(lm,"u").replace(/punct/g,om).getRegex(),cm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",fT=st(cm,"gu").replace(/notPunctSpace/g,Bu).replace(/punctSpace/g,Go).replace(/punct/g,Ss).getRegex(),hT=st(cm,"gu").replace(/notPunctSpace/g,oT).replace(/punctSpace/g,aT).replace(/punct/g,om).getRegex(),dT=st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Bu).replace(/punctSpace/g,Go).replace(/punct/g,Ss).getRegex(),pT=st(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ss).getRegex(),mT="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",gT=st(mT,"gu").replace(/notPunctSpace/g,Bu).replace(/punctSpace/g,Go).replace(/punct/g,Ss).getRegex(),_T=st(/\\(punct)/,"gu").replace(/punct/g,Ss).getRegex(),vT=st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xT=st(Ou).replace("(?:-->|$)","-->").getRegex(),ST=st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,bT=st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",xo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),um=st(/^!?\[(label)\]\[(ref)\]/).replace("label",xo).replace("ref",Fu).getRegex(),fm=st(/^!?\[(ref)\](?:\[\])?/).replace("ref",Fu).getRegex(),MT=st("reflink|nolink(?!\\()","g").replace("reflink",um).replace("nolink",fm).getRegex(),$h=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,zu={_backpedal:dr,anyPunctuation:_T,autolink:vT,blockSkip:lT,br:am,code:iT,del:dr,delLDelim:dr,delRDelim:dr,emStrongLDelim:cT,emStrongRDelimAst:fT,emStrongRDelimUnd:dT,escape:nT,link:bT,nolink:fm,punctuation:sT,reflink:um,reflinkSearch:MT,tag:ST,text:rT,url:dr},yT={...zu,link:st(/^!?\[(label)\]\((.*?)\)/).replace("label",xo).getRegex(),reflink:st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xo).getRegex()},Zc={...zu,emStrongRDelimAst:hT,emStrongLDelim:uT,delLDelim:pT,delRDelim:gT,url:st(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",$h).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:st(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",$h).getRegex()},ET={...Zc,br:st(am).replace("{2,}","*").getRegex(),text:st(Zc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ha={normal:ku,gfm:eT,pedantic:tT},Us={normal:zu,gfm:Zc,breaks:ET,pedantic:yT},TT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qh=n=>TT[n];function jn(n,e){if(e){if(Qt.escapeTest.test(n))return n.replace(Qt.escapeReplace,qh)}else if(Qt.escapeTestNoEncode.test(n))return n.replace(Qt.escapeReplaceNoEncode,qh);return n}function Yh(n){try{n=encodeURI(n).replace(Qt.percentDecode,"%")}catch{return null}return n}function jh(n,e){let t=n.replace(Qt.findPipe,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(Qt.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(Qt.slashPipe,"|");return i}function Vi(n,e,t){let i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function Kh(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&Qt.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function AT(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return t>0?-2:-1}function wT(n,e=0){let t=e,i="";for(let r of n)if(r==="	"){let s=4-t%4;i+=" ".repeat(s),t+=s}else i+=r,t++;return i}function Zh(n,e,t,i,r){let s=e.href,a=e.title||null,o=n[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:a,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}function RT(n,e,t){let i=n.match(t.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let a=s.match(t.other.beginningSpace);if(a===null)return s;let[o]=a;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}var So=class{options;rules;lexer;constructor(n){this.options=n||Ar}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:Kh(e[0]),i=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:i}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],i=RT(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let i=Vi(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(t=i.trim())}return{type:"heading",raw:Vi(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Vi(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=Vi(e[0],`
`).split(`
`),i="",r="",s=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,r=r?`${r}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=f,t.length===0)break;let h=s.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let p=h,g=p.raw+`
`+t.join(`
`),b=this.blockquote(g);s[s.length-1]=b,i=i.substring(0,i.length-p.raw.length)+b.raw,r=r.substring(0,r.length-p.text.length)+b.text;break}else if(h?.type==="list"){let p=h,g=p.raw+`
`+t.join(`
`),b=this.list(g);s[s.length-1]=b,i=i.substring(0,i.length-h.raw.length)+b.raw,r=r.substring(0,r.length-p.raw.length)+b.raw,t=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");let s=this.rules.other.listItemRegex(t),a=!1;for(;n;){let l=!1,c="",u="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;c=e[0],n=n.substring(c.length);let f=wT(e[2].split(`
`,1)[0],e[1].length),h=n.split(`
`,1)[0],p=!f.trim(),g=0;if(this.options.pedantic?(g=2,u=f.trimStart()):p?g=e[1].length+1:(g=f.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=f.slice(g),g+=e[1].length),p&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,n=n.substring(h.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(g),m=this.rules.other.hrRegex(g),d=this.rules.other.fencesBeginRegex(g),v=this.rules.other.headingBeginRegex(g),E=this.rules.other.htmlBeginRegex(g),S=this.rules.other.blockquoteBeginRegex(g);for(;n;){let P=n.split(`
`,1)[0],A;if(h=P,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),A=h):A=h.replace(this.rules.other.tabCharGlobal,"    "),d.test(h)||v.test(h)||E.test(h)||S.test(h)||b.test(h)||m.test(h))break;if(A.search(this.rules.other.nonSpaceChar)>=g||!h.trim())u+=`
`+A.slice(g);else{if(p||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||d.test(f)||v.test(f)||m.test(f))break;u+=`
`+h}p=!h.trim(),c+=P+`
`,n=n.substring(P.length+1),f=A.slice(g)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),r.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=c}let o=r.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=f.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!r.loose){let u=l.tokens.filter(h=>h.type==="space"),f=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=f}}if(r.loose)for(let l of r.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=Kh(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:Vi(e[0],`
`),href:i,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=jh(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:Vi(e[0],`
`),header:[],align:[],rows:[]};if(t.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<t.length;a++)s.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:s.align[a]});for(let a of r)s.rows.push(jh(a,s.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:s.align[l]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:Vi(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=Vi(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=AT(e[2],"()");if(s===-2)return;if(s>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i=i.slice(1):i=i.slice(1,-1)),Zh(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Zh(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=0,c=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+r);(i=c.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(a=[...s].length,i[3]||i[4]){o+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let u=[...i[0]][0].length,f=n.slice(0,r+i.index+u+a);if(Math.min(r,a)%2){let p=f.slice(1,-1);return{type:"em",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+r);(i=l.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s||(a=[...s].length,a!==r))continue;if(i[3]||i[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...i[0]][0].length,u=n.slice(0,r+i.index+c+a),f=u.slice(r,-r);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=e[0],i="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Fn=class Jc{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ar,this.options.tokenizer=this.options.tokenizer||new So,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Qt,block:Ha.normal,inline:Us.normal};this.options.pedantic?(t.block=Ha.pedantic,t.inline=Us.pedantic):this.options.gfm&&(t.block=Ha.gfm,this.options.breaks?t.inline=Us.breaks:t.inline=Us.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ha,inline:Us}}static lex(e,t){return new Jc(t).lex(e)}static lexInline(e,t){return new Jc(t).inlineTokens(e)}lex(e){e=e.replace(Qt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Qt.tabCharGlobal,"    ").replace(Qt.spaceLine,""));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let s;if(this.options.extensions?.block?.some(o=>(s=o.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let o=t.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.at(-1).src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},t.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let a=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=e.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(a))){let o=t.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(s),i=a.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,o="",l=1/0;for(;e;){if(e.length<l)l=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=""),a=!1;let c;if(this.options.extensions?.inline?.some(f=>(c=f.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let f=t.at(-1);c.type==="text"&&f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let u=e;if(this.options.extensions?.startInline){let f=1/0,h=e.slice(1),p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},h),typeof p=="number"&&p>=0&&(f=Math.min(f,p))}),f<1/0&&f>=0&&(u=e.substring(0,f+1))}if(c=this.tokenizer.inlineText(u)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),a=!0;let f=t.at(-1);f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},bo=class{options;parser;constructor(n){this.options=n||Ar}space(n){return""}code({text:n,lang:e,escaped:t}){let i=(e||"").match(Qt.notSpaceStart)?.[0],r=n.replace(Qt.endingNewline,"")+`
`;return i?'<pre><code class="language-'+jn(i)+'">'+(t?r:jn(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:jn(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,i="";for(let a=0;a<n.items.length;a++){let o=n.items[a];i+=this.listitem(o)}let r=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let i="";for(let r=0;r<n.rows.length;r++){let s=n.rows[r];t="";for(let a=0;a<s.length;a++)t+=this.tablecell(s[a]);i+=this.tablerow({text:t})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${jn(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let i=this.parser.parseInline(t),r=Yh(n);if(r===null)return i;n=r;let s='<a href="'+n+'"';return e&&(s+=' title="'+jn(e)+'"'),s+=">"+i+"</a>",s}image({href:n,title:e,text:t,tokens:i}){i&&(t=this.parser.parseInline(i,this.parser.textRenderer));let r=Yh(n);if(r===null)return jn(t);n=r;let s=`<img src="${n}" alt="${jn(t)}"`;return e&&(s+=` title="${jn(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:jn(n.text)}},Vu=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},On=class Qc{options;renderer;textRenderer;constructor(e){this.options=e||Ar,this.options.renderer=this.options.renderer||new bo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Vu}static parse(e,t){return new Qc(t).parse(e)}static parseInline(e,t){return new Qc(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let a=r,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let s=r;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}let a=s;switch(a.type){case"escape":{i+=t.text(a);break}case"html":{i+=t.html(a);break}case"link":{i+=t.link(a);break}case"image":{i+=t.image(a);break}case"checkbox":{i+=t.checkbox(a);break}case"strong":{i+=t.strong(a);break}case"em":{i+=t.em(a);break}case"codespan":{i+=t.codespan(a);break}case"br":{i+=t.br(a);break}case"del":{i+=t.del(a);break}case"text":{i+=t.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}},ks=class{options;block;constructor(n){this.options=n||Ar}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?Fn.lex:Fn.lexInline}provideParser(n=this.block){return n?On.parse:On.parseInline}},CT=class{defaults=Lu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=On;Renderer=bo;TextRenderer=Vu;Lexer=Fn;Tokenizer=So;Hooks=ks;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let a of s)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let a=r[s].flat(1/0);t=t.concat(this.walkTokens(a,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...a){let o=r.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){let r=this.defaults.renderer||new bo(this.defaults);for(let s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,o=t.renderer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u||""}}i.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new So(this.defaults);for(let s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,o=t.tokenizer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new ks;for(let s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,o=t.hooks[a],l=r[a];ks.passThroughHooks.has(s)?r[a]=c=>{if(this.defaults.async&&ks.passThroughHooksRespectAsync.has(s))return(async()=>{let f=await o.call(r,c);return l.call(r,f)})();let u=o.call(r,c);return l.call(r,u)}:r[a]=(...c)=>{if(this.defaults.async)return(async()=>{let f=await o.apply(r,c);return f===!1&&(f=await l.apply(r,c)),f})();let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(a){let o=[];return o.push(s.call(this,a)),r&&(o=o.concat(r.call(this,a))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return Fn.lex(n,e??this.defaults)}parser(n,e){return On.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let i={...t},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(e):e,o=await(r.hooks?await r.hooks.provideLexer(n):n?Fn.lex:Fn.lexInline)(a,r),l=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let c=await(r.hooks?await r.hooks.provideParser(n):n?On.parse:On.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(c):c})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let a=(r.hooks?r.hooks.provideLexer(n):n?Fn.lex:Fn.lexInline)(e,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let o=(r.hooks?r.hooks.provideParser(n):n?On.parse:On.parseInline)(a,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(a){return s(a)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+jn(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},yr=new CT;function ct(n,e){return yr.parse(n,e)}ct.options=ct.setOptions=function(n){return yr.setOptions(n),ct.defaults=yr.defaults,nm(ct.defaults),ct};ct.getDefaults=Lu;ct.defaults=Ar;ct.use=function(...n){return yr.use(...n),ct.defaults=yr.defaults,nm(ct.defaults),ct};ct.walkTokens=function(n,e){return yr.walkTokens(n,e)};ct.parseInline=yr.parseInline;ct.Parser=On;ct.parser=On.parse;ct.Renderer=bo;ct.TextRenderer=Vu;ct.Lexer=Fn;ct.lexer=Fn.lex;ct.Tokenizer=So;ct.Hooks=ks;ct.parse=ct;ct.options;ct.setOptions;ct.use;ct.walkTokens;ct.parseInline;On.parse;Fn.lex;const PT={class:"switch-container"},DT={class:"switch"},IT=["checked"],LT=["onClick","onMouseenter"],UT=["onClick","onMouseenter"],NT={__name:"PageNav",props:{compactMode:{type:Boolean,default:!1}},emits:["update:compactMode","filterChange","campaignChange"],setup(n,{emit:e}){const t=Ue(!1),i=nc(),r=xp(),s=e,a={Blender:["All","Projects","Scenes","Characters","Assets","Renders"],Dnd:["All","Characters","Maps and Locations","Items","Lore","Misc"],Coding:["All","Releases","Updates","Tutorials","Misc"]},o=At(()=>{const B=i.name;return B==="Coding"||B==="Blender"?"Projects":"Campaigns"}),l=Ue([]),c=Ue([]),u=Ue([]);async function f(){try{const B=await fetch(`${Vn}/campaigns/`);if(!B.ok)return;const D=await B.json();l.value=Array.isArray(D)?D:[]}catch(B){console.warn("Failed to load campaigns",B)}}async function h(){try{const B=await fetch(`${Vn}/coding-projects/`);if(!B.ok)return;const D=await B.json();c.value=Array.isArray(D)?D:[]}catch(B){console.warn("Failed to load coding projects",B)}}async function p(){try{const B=await fetch(`${Vn}/blender-projects/`);if(!B.ok)return;const D=await B.json();u.value=Array.isArray(D)?D:[]}catch(B){console.warn("Failed to load blender projects",B)}}const g=At(()=>{const B=i.name;return["Blender","Dnd","Campaign","Coding"].includes(B)}),b=At(()=>{switch(i.name){case"Blender":return"Type";case"Dnd":return"Tags";case"Campaign":return"Campaigns";case"Coding":return"Type";default:return"Filter"}}),m=At(()=>i.name==="Campaign"?l.value.length>0?l.value:["Campaigns","Characters","Resources"]:a[i.name]||[]),d=At(()=>i.name==="Dnd"||i.name==="Campaign"?["All",...l.value,"Standalone"]:i.name==="Coding"?["All",...c.value,"Standalone"]:i.name==="Blender"?["All",...u.value,"Standalone"]:[]),v=Ue(0),E=Ue(null),S=Ue({opacity:0});function P(B){return typeof B=="string"?B:B.title}function A(B=!0){if(!E.value)return;const D=Array.from(E.value.querySelectorAll(".nav-link")),Y=E.value.offsetTop,ne=v.value;if(ne==null||!D[ne]){S.value={opacity:0,top:"0px",height:"0px"};return}const fe=D[ne];if(fe.offsetHeight===0){S.value={opacity:0,top:"0px",height:"0px"};return}const me=Y+fe.offsetTop-8,T=fe.offsetHeight+16;S.value={opacity:1,top:`${me}px`,height:`${T}px`,transition:B?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}function L(B){v.value=B;const D=d.value[B];D==="All"?s("campaignChange","all"):D==="Standalone"?s("campaignChange","none"):typeof D=="object"&&D.id&&s("campaignChange",D.id),Ht(()=>A())}function x(B){if(!E.value)return;const D=Array.from(E.value.querySelectorAll(".nav-link")),Y=E.value.offsetTop,ne=D[B];if(!ne||ne.offsetHeight===0){he.value={opacity:0,top:"0px",height:"0px"};return}const fe=Y+ne.offsetTop-8,me=ne.offsetHeight+16;he.value={opacity:1,top:`${fe}px`,height:`${me}px`,transition:"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms"}}function C(){he.value={opacity:0,top:"0px",height:"0px"}}function ie(B){return typeof B=="string"?B:B.title}function U(B){const D=m.value[B];typeof D=="object"&&D.id&&r.push(`/dnd/${D.id}`),Me(B)}const H=Ue(0),G=Ue(null),ee=Ue(null),W=Ue(null),X=Ue(!1);function O(){X.value=!X.value,Ht(()=>_e(!1))}const ae=Ue({opacity:0}),he=Ue({opacity:0});function _e(B=!0){if(!ee.value)return;const D=Array.from(ee.value.querySelectorAll(".nav-link")),Y=ee.value.offsetTop,ne=(fe,me)=>{if(fe==null||!D[fe]){me.value={opacity:0,top:"0px",height:"0px"};return}const T=D[fe];if(T.offsetHeight===0){me.value={opacity:0,top:"0px",height:"0px"};return}const R=Y+T.offsetTop-8,N=T.offsetHeight+16;me.value={opacity:1,top:`${R}px`,height:`${N}px`,transition:B?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}};ne(H.value,ae),ne(G.value,he),A(B)}function Me(B){H.value=B;const D=m.value[B];s("filterChange",typeof D=="string"?D:D.title||"All"),Ht(()=>_e())}function xe(B){G.value=B,_e()}function He(){G.value=null,_e()}function tt(){let B=document.querySelector(".sidebar-close");B.classList.contains("sidebar-close")?B.classList.add("sidebar-open"):B.classList.remove("sidebar-open")}let Je;return fi(()=>{f(),h(),p(),Ht(()=>{Ht(()=>{_e(!1),A(!1),t.value=!0})}),Je=new ResizeObserver(()=>{_e(),A()}),W.value&&Je.observe(W.value),window.addEventListener("resize",()=>{_e(),A()});const B=nc();si(B,(D,Y)=>{g.value&&tt(),v.value=0,s("campaignChange","all"),Ht(()=>{_e(),A()})}),si(d,()=>{Ht(()=>{_e(!1),A(!1)})})}),Tr(()=>{Je&&W.value&&Je.unobserve(W.value),window.removeEventListener("resize",_e)}),(B,D)=>(Pe(),Fe("div",{class:it(["container liquid-glass fade-in-expand",{visible:t.value}])},[q("div",{class:"nav-wrap sidebar-close",ref_key:"navWrap",ref:W},[q("div",{class:"nav-bubble selected",style:Zt(ae.value),"aria-hidden":"true"},null,4),q("div",{class:"nav-bubble hover liquid-glass",style:Zt(he.value),"aria-hidden":"true"},null,4),q("div",{class:"nav-bubble campaign-selected",style:Zt(S.value),"aria-hidden":"true"},null,4),q("div",{class:"filters-header",onClick:O},[D[2]||(D[2]=q("h1",null,"Filters",-1)),(Pe(),Fe("svg",{class:it(["expand-arrow",{expanded:X.value}]),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[...D[1]||(D[1]=[q("polyline",{points:"9 18 15 12 9 6"},null,-1)])],2))]),q("div",{class:it(["filters-content",{expanded:X.value}])},[D[5]||(D[5]=e0('<div class="search-container" data-v-7a33595b><input type="text" class="search-input" placeholder="Search..." data-v-7a33595b></div><div class="sort-container" data-v-7a33595b><span class="sort-label" data-v-7a33595b>Sort By</span><select class="sort-select" data-v-7a33595b><option value="newest" data-v-7a33595b>Newest</option><option value="oldest" data-v-7a33595b>Oldest</option><option value="az" data-v-7a33595b>A-Z</option><option value="za" data-v-7a33595b>Z-A</option></select></div>',2)),q("div",PT,[D[4]||(D[4]=q("span",{class:"switch-label"},"Compact Mode",-1)),q("label",DT,[q("input",{type:"checkbox",checked:n.compactMode,onChange:D[0]||(D[0]=Y=>s("update:compactMode",Y.target.checked))},null,40,IT),D[3]||(D[3]=q("span",{class:"slider round"},null,-1))])]),ti(i).name==="Dnd"||ti(i).name==="Campaign"||ti(i).name==="Coding"||ti(i).name==="Blender"?(Pe(),Fe(Tt,{key:0},[q("h2",null,Et(o.value),1),q("nav",{class:"nav",ref_key:"campaignNav",ref:E,onMouseleave:C},[(Pe(!0),Fe(Tt,null,ci(d.value,(Y,ne)=>(Pe(),Fe("button",{key:"c-"+ne,class:it(["nav-link",{active:v.value===ne}]),onClick:fe=>L(ne),onMouseenter:fe=>x(ne)},Et(P(Y)),43,LT))),128))],544)],64)):Ct("",!0),q("h2",null,Et(b.value),1),q("nav",{class:"nav",ref_key:"nav",ref:ee,onMouseleave:He},[(Pe(!0),Fe(Tt,null,ci(m.value,(Y,ne)=>(Pe(),Fe("button",{key:ne,class:it(["nav-link",{active:H.value===ne}]),onClick:fe=>U(ne),onMouseenter:fe=>xe(ne)},Et(ie(Y)),43,UT))),128))],544)],2)],512)],2))}},Hu=rn(NT,[["__scopeId","data-v-7a33595b"]]),FT={key:0,class:"downloads","aria-labelledby":"downloads-title"},OT={class:"downloads__list",role:"list"},kT={class:"downloads__meta"},BT={class:"downloads__nameRow"},zT={class:"downloads__nameBlock"},VT={class:"downloads__name"},HT=["href","download"],GT={__name:"DownloadFilesSection",props:{files:{type:Array,required:!0}},setup(n){return(e,t)=>n.files&&n.files.length?(Pe(),Fe("section",FT,[q("ul",OT,[(Pe(!0),Fe(Tt,null,ci(n.files,i=>(Pe(),Fe("li",{key:i.id??i.url,class:"downloads__item"},[q("div",kT,[q("div",BT,[q("div",zT,[q("div",VT,Et(i.name),1)])])]),q("a",{class:"downloads__btn liquid-glass",href:i.url,download:i.name}," Download ",8,HT)]))),128))])])):Ct("",!0)}},Gu=rn(GT,[["__scopeId","data-v-4bfe6ff0"]]),WT={key:0,class:"carousel"},XT={class:"viewport"},$T=["src","alt"],qT={class:"controls"},YT={class:"dots"},jT=["onClick"],KT={__name:"Carousel",props:{images:{type:Array,required:!0}},setup(n){const e=n,t=Ue(0);let i=null;function r(){i&&(clearInterval(i),i=null)}function s(){const l=e.images.length-1;t.value<l?t.value++:r()}function a(){t.value>0&&t.value--}function o(l){t.value=Math.min(Math.max(l,0),e.images.length-1)}return fi(()=>{i=setInterval(s,3500)}),pu(()=>r()),(l,c)=>n.images&&n.images.length?(Pe(),Fe("div",WT,[q("div",XT,[q("img",{src:n.images[t.value],alt:`slide-${t.value}`},null,8,$T)]),q("div",qT,[q("button",{onClick:a},"◀"),q("div",YT,[(Pe(!0),Fe(Tt,null,ci(n.images,(u,f)=>(Pe(),Fe("button",{key:f,class:it({active:f===t.value}),onClick:h=>o(f)},null,10,jT))),128))]),q("button",{onClick:s},"▶")])])):Ct("",!0)}},Wu=rn(KT,[["__scopeId","data-v-df194f11"]]),ZT={class:"hero"},JT={class:"content-grid"},QT={key:0,class:"grid"},eA={key:1,class:"grid"},tA={class:"grid"},nA=["onClick"],iA={class:"grid"},rA=["src","alt"],sA={class:"wrapper"},aA={class:"compact-grid"},oA=["onClick"],lA=["src","alt"],cA={key:2,class:"cover"},uA=["innerHTML"],fA={key:0},hA={key:2},dA={__name:"Blender",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u={All:null,Projects:"PROJECT",Scenes:"SCENE",Characters:"CHARACTER",Assets:"ASSET",Renders:"RENDER"},f=At(()=>{let d=e.value;const v=u[r.value];return v&&(d=d.filter(E=>E.type===v)),s.value==="none"?d=d.filter(E=>!E.project):s.value!=="all"&&(d=d.filter(E=>E.project===s.value)),d}),h=At(()=>!i.value||!i.value.content?"":ct(i.value.content));function p(d){r.value=d}function g(d){s.value=d}async function b(){t.value=!0;try{let d=await fetch(`${Vn}/blender-posts/`);if(d.ok||(d=await fetch(`${Vn}/blender-posts`)),d.ok){const v=await d.json();e.value=Array.isArray(v)?v:[]}else e.value=[]}catch(d){console.warn("Failed to load Blender posts",d),e.value=[]}finally{t.value=!1}}function m(d){o.value&&l.value&&!l.value.contains(d.target)&&(o.value=!1)}return fi(()=>{b(),document.addEventListener("click",m)}),si(t,d=>{d||Ht(()=>{c.value=!0})}),Tr(()=>{document.removeEventListener("click",m)}),(d,v)=>{const E=ra("typewriter");return Pe(),Fe("div",ZT,[Mn((Pe(),Fe("h1",null,[...v[1]||(v[1]=[q("span",null,"Blender",-1),Mt(" Projects & Renders",-1)])])),[[E]]),v[4]||(v[4]=q("p",null,"A showcase of Blender renders and small project notes.",-1)),q("div",JT,[nt(Hu,{compactMode:a.value,"onUpdate:compactMode":v[0]||(v[0]=S=>a.value=S),onFilterChange:p,onCampaignChange:g},null,8,["compactMode"]),t.value?(Pe(),Fe("section",QT,[...v[2]||(v[2]=[q("p",null,"Loading Blender posts…",-1)])])):f.value.length===0?(Pe(),Fe("section",eA,[...v[3]||(v[3]=[q("p",null,"No Blender posts found.",-1)])])):Ct("",!0),Mn(q("section",tA,[(Pe(!0),Fe(Tt,null,ci(f.value,(S,P)=>(Pe(),Fe("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":P*80+"ms"}),onClick:Vt(A=>{i.value=S,o.value=!0},["stop"])},[q("div",iA,[q("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,rA),q("div",sA,[q("h1",null,Et(S.title),1)])]),q("p",null,Et(S.content),1)],14,nA))),128))],512),[[os,!a.value&&!t.value&&f.value.length>0]]),Mn(q("section",aA,[(Pe(!0),Fe(Tt,null,ci(f.value,(S,P)=>(Pe(),Fe("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":P*80+"ms"}),onClick:Vt(A=>{i.value=S,o.value=!0},["stop"])},[q("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,lA),q("div",null,[q("h1",null,Et(S.title),1),q("p",null,Et(S.content),1)])],14,oA))),128))],512),[[os,a.value&&!t.value&&f.value.length>0]]),o.value&&i.value?(Pe(),Fe("div",cA,[q("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[q("div",null,[q("h1",null,Et(i.value.title),1),q("div",{innerHTML:h.value,class:"markdown-body"},null,8,uA)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Fe("h2",fA,"Gallery")):Ct("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),br(Wu,{key:1,images:i.value.image_urls},null,8,["images"])):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),Fe("h2",hA,"Downloads")):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),br(Gu,{key:3,files:i.value.files},null,8,["files"])):Ct("",!0)],512)])):Ct("",!0)])])}}},pA=rn(dA,[["__scopeId","data-v-7b995789"]]),mA={class:"login-page"},gA={class:"card"},_A=["disabled"],vA={__name:"Login",setup(n){const e=Ue(""),t=Ue(""),i=Ue(!1),r=Ue(""),s=Ue(null),a=Ue(""),o=xp();async function l(){r.value="",i.value=!0;try{console.log("Login submit",{username:e.value}),s.value=null,a.value="";const c=await fetch(`${Vn}/auth/login/`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.value,password:t.value})});s.value=c.status;const u=await c.text().catch(()=>"");let f={};try{f=u?JSON.parse(u):{}}catch{f={text:u}}if(a.value=JSON.stringify(f,null,2),!c.ok){r.value=f.detail||f.error||f.non_field_errors&&f.non_field_errors.join(" ")||c.statusText||"Login failed";return}f.access&&localStorage.setItem("accessToken",f.access),f.refresh&&localStorage.setItem("refreshToken",f.refresh);const h=f.token||f.key||f.access||null;h&&localStorage.setItem("authToken",h);try{window.dispatchEvent(new Event("storage"))}catch{}o.push("/")}catch(c){console.error("Login error",c),r.value=c.message||"Network error",a.value=c.stack||String(c)}finally{i.value=!1}}return(c,u)=>(Pe(),Fe("div",mA,[q("div",gA,[u[4]||(u[4]=q("h2",null,"Sign in",-1)),u[5]||(u[5]=q("p",{class:"subtitle"},"Sign in with your username and password.",-1)),q("form",{onSubmit:Vt(l,["prevent"])},[q("label",null,[u[2]||(u[2]=Mt(" Username ",-1)),Mn(q("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),placeholder:"your username"},null,512),[[Pf,e.value]])]),q("label",null,[u[3]||(u[3]=Mt(" Password ",-1)),Mn(q("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=f=>t.value=f),placeholder:"••••••••"},null,512),[[Pf,t.value]])]),q("button",{class:"login-btn",type:"submit",disabled:i.value},Et(i.value?"Signing in…":"Login"),9,_A)],32)])]))}},xA=rn(vA,[["__scopeId","data-v-8bae032b"]]),hm="/Profile_Picture_CyberCubed.jpg",SA="/blender_logo.svg",bA="/dungeons-dragons-5th-edition-seeklogo.svg",MA="/jellyfin-horizontal--color-on-dark.svg",yA="/jellyfin-logo.svg",EA="/minecraft-launcher.svg",TA="/Minecraft_Logo-en.svg",AA={class:"hero"},wA={class:"wrap"},RA={class:"grid"},CA={style:{display:"flex","justify-content":"center"}},PA={style:{display:"flex","justify-content":"center"}},DA={style:{display:"flex","justify-content":"center"}},IA={style:{display:"flex","justify-content":"center"}},LA=["title"],UA={__name:"Home",setup(n){const e=Ue(!1),t=Ue(!1);fi(()=>{Ht(()=>{e.value=!0})});async function i(){try{await navigator.clipboard.writeText("mc.cybercubed.dk"),t.value=!0,setTimeout(()=>{t.value=!1},1500)}catch{const r=document.createElement("textarea");r.value="mc.cybercubed.dk",r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),t.value=!0,setTimeout(()=>{t.value=!1},1500)}}return(r,s)=>{const a=ia("router-link"),o=ra("typewriter");return Pe(),Fe("main",AA,[q("section",wA,[s[1]||(s[1]=q("img",{src:hm,alt:"Home Image",class:"home-img"},null,-1)),Mn((Pe(),Fe("h1",null,[...s[0]||(s[0]=[Mt("Welcome to Cyber",-1),q("span",null,"Cubed",-1)])])),[[o]]),s[2]||(s[2]=q("p",null,"My personal website to explore the technicalities of building one and to share projects.",-1))]),q("section",RA,[q("article",{style:{"border-radius":"16px",padding:"20px","text-align":"center","--fade-delay":"0ms"},class:it(["liquid-glass fade-in-expand",{visible:e.value}])},[s[4]||(s[4]=q("h1",{style:{"font-size":"3rem"}},[q("span",null,"</>"),Mt(" Coding")],-1)),s[5]||(s[5]=q("p",null,"I have for many years had a fascination with computers and how they work. I have been coding since I was a teenager and have developdungeons-dragons-5th-edition-seeklogoed a passion for building software and games. here i will be sharing my experiences and self publishing some of my projects.",-1)),q("div",CA,[nt(a,{to:"/coding",class:"btn btn-primary liquid-glass"},{default:Yt(()=>[...s[3]||(s[3]=[Mt("See More",-1)])]),_:1})])],2),q("article",{style:{"border-radius":"16px",padding:"20px","text-align":"center","--fade-delay":"80ms"},class:it(["liquid-glass fade-in-expand",{visible:e.value}])},[s[7]||(s[7]=q("img",{src:SA,alt:"Blender",style:{width:"min(250px, 100%)","object-fit":"cover"}},null,-1)),s[8]||(s[8]=q("p",null,"Having grown up with animation studios moving to 3D animation, i have always been fascinated by the possibilities of 3D art. I have been using Blender for a few years now and have developed a passion for creating 3D art. here i will be sharing my work and my knowledge with others.",-1)),q("div",PA,[nt(a,{to:"/blender",class:"btn btn-primary liquid-glass"},{default:Yt(()=>[...s[6]||(s[6]=[Mt("See More",-1)])]),_:1})])],2),q("article",{style:{"border-radius":"16px",padding:"20px","text-align":"center","--fade-delay":"160ms"},class:it(["liquid-glass fade-in-expand",{visible:e.value}])},[s[10]||(s[10]=q("img",{src:bA,alt:"D&D",style:{"max-height":"65px",width:"150px","object-fit":"cover"}},null,-1)),s[11]||(s[11]=q("p",null,"A more recent hobby of mine is Dungeons & Dragons. I have been playing for a few years now and have developed a passion for creating characters and telling stories. here i will be sharing my work as a Dungeon Master as i have dared venture forth into the complicated nature of DM'ing.",-1)),q("div",DA,[nt(a,{to:"/dnd",class:"btn btn-primary liquid-glass"},{default:Yt(()=>[...s[9]||(s[9]=[Mt("See More",-1)])]),_:1})])],2)]),q("section",null,[s[16]||(s[16]=q("h2",{style:{"font-size":"2rem","margin-top":"60px","margin-bottom":"0px"}},"Servers",-1)),s[17]||(s[17]=q("p",{style:{"margin-top":"0px","font-size":"0.9rem"}},"Servers are whitelisted for access.",-1)),q("article",{style:{display:"grid","grid-template-columns":"170px 1fr 180px","margin-top":"20px","border-radius":"16px",padding:"20px","text-align":"center","--fade-delay":"240ms"},class:it(["liquid-glass fade-in-expand",{visible:e.value}])},[...s[12]||(s[12]=[q("img",{src:MA,alt:"Jellyfin",style:{height:"50px","object-fit":"cover"}},null,-1),q("div",null,null,-1),q("div",{style:{display:"flex","justify-content":"center"}},[q("a",{href:"https://jellyfin.cybercubed.dk",target:"_blank",rel:"noopener noreferrer",class:"external-link liquid-glass"},[q("img",{src:yA,alt:"Jellyfin",class:"external-link-logo"}),Mt(" Visit Server ")])],-1)])],2),q("article",{style:{display:"grid","grid-template-columns":"60px 170px 1fr 180px","margin-top":"20px","border-radius":"16px",padding:"20px","text-align":"center","--fade-delay":"240ms"},class:it(["liquid-glass fade-in-expand",{visible:e.value}])},[s[13]||(s[13]=q("img",{src:EA,alt:"Minecraft",style:{height:"50px","object-fit":"cover","border-radius":"6px"}},null,-1)),s[14]||(s[14]=q("img",{src:TA,alt:"Minecraft",style:{height:"35px","margin-top":"7.5px","object-fit":"cover"}},null,-1)),s[15]||(s[15]=q("div",null,null,-1)),q("div",IA,[q("div",{class:it(["frame-glass copy-server-ip",{"copy-success":t.value}]),style:{"font-size":"1.1rem","text-align":"center","margin-right":"20px"},onClick:i,title:t.value?"Copied!":"Click to copy server IP"},Et(t.value?"✓ Copied!":"mc.cybercubed.dk"),11,LA)])],2)])])}}},NA=rn(UA,[["__scopeId","data-v-64b23ad2"]]),FA={class:"hero"},OA={class:"content-grid"},kA={key:0,class:"grid"},BA={key:1,class:"grid"},zA={class:"grid"},VA=["onClick"],HA={class:"grid"},GA=["src","alt"],WA={class:"wrapper"},XA={class:"compact-grid"},$A=["onClick"],qA=["src","alt"],YA={key:2,class:"cover"},jA=["innerHTML"],KA={key:0},ZA={key:2},JA={__name:"Dnd",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u=At(()=>{let m=e.value;return r.value!=="All"&&(m=m.filter(d=>d.tags&&d.tags.some(v=>v.name===r.value))),s.value==="none"?m=m.filter(d=>!d.campaign):s.value!=="all"&&(m=m.filter(d=>d.campaign===s.value)),m}),f=At(()=>!i.value||!i.value.content?"":ct(i.value.content));function h(m){r.value=m}function p(m){s.value=m}async function g(){t.value=!0;try{let m=await fetch(`${Vn}/dnd-posts/`);if(m.ok||(m=await fetch(`${Vn}/dnd-posts`)),m.ok){const d=await m.json();e.value=Array.isArray(d)?d:[]}else e.value=[]}catch(m){console.warn("Failed to load D&D posts",m),e.value=[]}finally{t.value=!1}}function b(m){o.value&&l.value&&!l.value.contains(m.target)&&(o.value=!1)}return fi(()=>{g(),document.addEventListener("click",b)}),si(t,m=>{m||Ht(()=>{c.value=!0})}),Tr(()=>{document.removeEventListener("click",b)}),(m,d)=>{const v=ra("typewriter");return Pe(),Fe("div",FA,[Mn((Pe(),Fe("h1",null,[...d[1]||(d[1]=[q("span",null,"D&D",-1),Mt(" Campaigns & Resources",-1)])])),[[v]]),d[4]||(d[4]=q("p",null,"A collection of D&D characters, maps, lore, and more.",-1)),q("div",OA,[nt(Hu,{compactMode:a.value,"onUpdate:compactMode":d[0]||(d[0]=E=>a.value=E),onFilterChange:h,onCampaignChange:p},null,8,["compactMode"]),t.value?(Pe(),Fe("section",kA,[...d[2]||(d[2]=[q("p",null,"Loading D&D posts…",-1)])])):u.value.length===0?(Pe(),Fe("section",BA,[...d[3]||(d[3]=[q("p",null,"No D&D posts found.",-1)])])):Ct("",!0),Mn(q("section",zA,[(Pe(!0),Fe(Tt,null,ci(u.value,(E,S)=>(Pe(),Fe("article",{key:E.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":S*80+"ms"}),onClick:Vt(P=>{i.value=E,o.value=!0},["stop"])},[q("div",HA,[q("img",{src:E.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:E.title,class:"thumb"},null,8,GA),q("div",WA,[q("h1",null,Et(E.title),1)])]),q("p",null,Et(E.content),1)],14,VA))),128))],512),[[os,!a.value&&!t.value&&u.value.length>0]]),Mn(q("section",XA,[(Pe(!0),Fe(Tt,null,ci(u.value,(E,S)=>(Pe(),Fe("article",{key:E.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":S*80+"ms"}),onClick:Vt(P=>{i.value=E,o.value=!0},["stop"])},[q("img",{src:E.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:E.title,class:"thumb"},null,8,qA),q("div",null,[q("h1",null,Et(E.title),1),q("p",null,Et(E.content),1)])],14,$A))),128))],512),[[os,a.value&&!t.value&&u.value.length>0]]),o.value&&i.value?(Pe(),Fe("div",YA,[q("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[q("div",null,[q("h1",null,Et(i.value.title),1),q("div",{innerHTML:f.value,class:"markdown-body"},null,8,jA)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Fe("h2",KA,"Gallery")):Ct("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),br(Wu,{key:1,images:i.value.image_urls},null,8,["images"])):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),Fe("h2",ZA,"Downloads")):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),br(Gu,{key:3,files:i.value.files},null,8,["files"])):Ct("",!0)],512)])):Ct("",!0)])])}}},Jh=rn(JA,[["__scopeId","data-v-9eaf5f78"]]),QA={class:"hero"},ew={__name:"About",setup(n){const e=Ue(!1);return fi(()=>{Ht(()=>{e.value=!0})}),(t,i)=>(Pe(),Fe("div",QA,[q("div",{class:it(["wrap content liquid-glass fade-in-expand",{visible:e.value}])},[...i[0]||(i[0]=[q("div",{class:"about-grid"},[q("img",{src:hm,alt:"About image",class:"about-img"}),q("div",null,[q("h1",null,"About"),q("p",null," This is the personal website of Niklas J. Haunstrup aka. CyberCubed. It features various projects in 3D, coding, and more. and a Dungeons & Dragons campaign manager. "),q("p",{class:"muted"},"Built with Vue 3, Vite, and small components.")])],-1)])],2)]))}},tw=rn(ew,[["__scopeId","data-v-8e15c7ab"]]),nw={},iw={src:"/admin/",style:{width:"100%",height:"100vh"}};function rw(n,e){return Pe(),Fe("iframe",iw)}const sw=rn(nw,[["render",rw]]),aw="/github-logo.svg",ow={class:"hero"},lw={class:"content-grid"},cw={key:0,class:"grid"},uw={key:1,class:"grid"},fw={class:"grid"},hw=["onClick"],dw={class:"grid"},pw=["src","alt"],mw={class:"wrapper"},gw={class:"compact-grid"},_w=["onClick"],vw=["src","alt"],xw={key:2,class:"cover"},Sw=["href"],bw=["innerHTML"],Mw={key:0},yw={key:2},Ew={__name:"Coding",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u={All:null,Releases:"RELEASE",Updates:"UPDATE",Tutorials:"TUTORIAL",Misc:"MISC"},f=At(()=>{let d=e.value;const v=u[r.value];return v&&(d=d.filter(E=>E.type===v)),s.value==="none"?d=d.filter(E=>!E.project):s.value!=="all"&&(d=d.filter(E=>E.project===s.value)),d}),h=At(()=>!i.value||!i.value.content?"":ct(i.value.content));function p(d){r.value=d}function g(d){s.value=d}async function b(){t.value=!0;try{let d=await fetch(`${Vn}/coding-posts/`);if(d.ok||(d=await fetch(`${Vn}/coding-posts`)),d.ok){const v=await d.json();e.value=Array.isArray(v)?v:[]}else e.value=[]}catch(d){console.warn("Failed to load coding posts",d),e.value=[]}finally{t.value=!1}}function m(d){o.value&&l.value&&!l.value.contains(d.target)&&(o.value=!1)}return fi(()=>{b(),document.addEventListener("click",m)}),si(t,d=>{d||Ht(()=>{c.value=!0})}),Tr(()=>{document.removeEventListener("click",m)}),(d,v)=>{const E=ra("typewriter");return Pe(),Fe("div",ow,[Mn((Pe(),Fe("h1",null,[...v[1]||(v[1]=[q("span",{class:"code-bracket",textContent:"</>"},null,-1),Mt(" Coding Projects",-1)])])),[[E]]),v[5]||(v[5]=q("p",null,"A collection of coding projects, tutorials, and resources.",-1)),q("div",lw,[nt(Hu,{compactMode:a.value,"onUpdate:compactMode":v[0]||(v[0]=S=>a.value=S),onFilterChange:p,onCampaignChange:g},null,8,["compactMode"]),t.value?(Pe(),Fe("section",cw,[...v[2]||(v[2]=[q("p",null,"Loading coding posts…",-1)])])):f.value.length===0?(Pe(),Fe("section",uw,[...v[3]||(v[3]=[q("p",null,"No coding posts found.",-1)])])):Ct("",!0),Mn(q("section",fw,[(Pe(!0),Fe(Tt,null,ci(f.value,(S,P)=>(Pe(),Fe("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":P*80+"ms"}),onClick:Vt(A=>{i.value=S,o.value=!0},["stop"])},[q("div",dw,[q("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,pw),q("div",mw,[q("h1",null,Et(S.title),1)])]),q("p",null,Et(S.content),1)],14,hw))),128))],512),[[os,!a.value&&!t.value&&f.value.length>0]]),Mn(q("section",gw,[(Pe(!0),Fe(Tt,null,ci(f.value,(S,P)=>(Pe(),Fe("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Zt({"--fade-delay":P*80+"ms"}),onClick:Vt(A=>{i.value=S,o.value=!0},["stop"])},[q("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,vw),q("div",null,[q("h1",null,Et(S.title),1),q("p",null,Et(S.content),1)])],14,_w))),128))],512),[[os,a.value&&!t.value&&f.value.length>0]]),o.value&&i.value?(Pe(),Fe("div",xw,[q("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[q("div",null,[q("h1",null,Et(i.value.title),1),i.value.project_detail&&i.value.project_detail.github_url?(Pe(),Fe("a",{key:0,href:i.value.project_detail.github_url,target:"_blank",rel:"noopener noreferrer",class:"external-link liquid-glass"},[...v[4]||(v[4]=[q("img",{src:aw,alt:"GitHub",class:"external-link-logo"},null,-1),Mt(" View on GitHub ",-1)])],8,Sw)):Ct("",!0),q("div",{innerHTML:h.value,class:"markdown-body"},null,8,bw)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Fe("h2",Mw,"Gallery")):Ct("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),br(Wu,{key:1,images:i.value.image_urls},null,8,["images"])):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),Fe("h2",yw,"Downloads")):Ct("",!0),i.value.files&&i.value.files.length?(Pe(),br(Gu,{key:3,files:i.value.files},null,8,["files"])):Ct("",!0)],512)])):Ct("",!0)])])}}},Tw=rn(Ew,[["__scopeId","data-v-5f539f1e"]]),Aw={},ww={class:"hero"},Rw={class:"not-found liquid-glass"};function Cw(n,e){const t=ia("router-link"),i=ra("typewriter");return Pe(),Fe("div",ww,[q("div",Rw,[Mn((Pe(),Fe("h1",null,[...e[0]||(e[0]=[Mt("404 - Page Not Found",-1)])])),[[i]]),e[2]||(e[2]=q("p",null,"The page you are looking for does not exist.",-1)),nt(t,{to:"/",class:"btn btn-primary liquid-glass"},{default:Yt(()=>[...e[1]||(e[1]=[Mt("Go back home",-1)])]),_:1})])])}const Pw=rn(Aw,[["render",Cw],["__scopeId","data-v-19a29a88"]]),Dw=[{path:"/",name:"Home",component:NA},{path:"/blender",name:"Blender",component:pA},{path:"/dnd/:id",name:"Campaign",component:Jh},{path:"/dnd",name:"Dnd",component:Jh},{path:"/about",name:"About",component:tw},{path:"/login",name:"Login",component:xA},{path:"/admin-view",name:"Admin",component:sw},{path:"/coding",name:"Coding",component:Tw},{path:"/:pathMatch(.*)",name:"NotFound",component:Pw}],Iw=X_({history:y_(),routes:Dw});function Lw(n,{speed:e=50}={}){let t=null,i=null;function r(l){const c=[];function u(f,h){if(f.nodeType===Node.TEXT_NODE)for(const p of f.textContent)c.push({type:"char",char:p,container:h});else if(f.nodeType===Node.ELEMENT_NODE){const p=f.cloneNode(!1);c.push({type:"open",element:p,container:h});for(const g of f.childNodes)u(g,p);c.push({type:"close",container:h})}}for(const f of l.childNodes)u(f,l);return c}function s(l){if(l.dataset.typewriterDone)return;l.dataset.typewriterDone="true",l.classList.remove("typewriter-ready"),l.style.visibility="";const c=l.innerHTML,u=r(l);l.innerHTML="";const f=document.createElement("span");f.className="typewriter-cursor",f.setAttribute("aria-hidden","true"),f.textContent="|",l.appendChild(f);const h=[{container:l}];let p=0;i=setInterval(()=>{if(p>=u.length){clearInterval(i),i=null,l.innerHTML=c;return}const g=u[p],b=h[h.length-1].container;switch(g.type){case"char":{const m=document.createTextNode(g.char);b.insertBefore(m,f.parentNode===b?f:null);break}case"open":{const m=g.element;b.insertBefore(m,f.parentNode===b?f:null),h.push({container:m});break}case"close":{h.pop();break}}p++},e)}function a(){const l=n.value;l&&(l.dataset.typewriterDone||(t=new IntersectionObserver(c=>{for(const u of c)u.isIntersecting&&(s(l),t.disconnect(),t=null)},{threshold:.1}),t.observe(l)))}function o(){t&&(t.disconnect(),t=null),i&&(clearInterval(i),i=null)}return{observe:a,cleanup:o}}const Uw={mounted(n,e){const t=e.value?.speed??50;n.classList.add("typewriter-ready");const i={value:n},{observe:r,cleanup:s}=Lw(i,{speed:t});n._typewriterCleanup=s,r()},unmounted(n){n._typewriterCleanup&&(n._typewriterCleanup(),delete n._typewriterCleanup)}};F0(HE).use(Iw).directive("typewriter",Uw).mount("#app");
